<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class EagloAIController extends Controller
{
    public function ask(Request $request)
    {
        // 1. Validation
        $request->validate([
            'message' => 'required|string',
            'chat_id' => 'nullable|string',
        ]);

        $userMessage = $request->input('message');
        $chatId = $request->input('chat_id');
        $ip = $request->ip();

        // 2. Identity Rule (Quick check)
        // We still process this but we might want to save it to history too.
        $identityMatch = false;
        $aiResponse = null;

        if (preg_match('/who are you|what is your name|identity/i', $userMessage)) {
            $aiResponse = "Eaglo AI for cybersecurity assistant developed by NCF Unit.";
            $identityMatch = true;
        }

        // 3. API Key
        $apiKey = env('PERPLEXITY_API_KEY'); 

        if (!$apiKey) {
             Log::error('Perplexity API Key is missing in .env');
             return response()->json(['error' => 'Server Configuration Error'], 500);
        }

        // 4. Rate Limiting (IP based)
        $key = 'eaglo_usage_' . $ip;
        $usageCount = \Illuminate\Support\Facades\Cache::get($key, 0);

        if ($usageCount >= 20) {
            return response()->json([
                'limit_reached' => true,
                'response' => "You have reached your free question limit. Please contact an expert for professional assistance."
            ]);
        }

        // Increment usage
        \Illuminate\Support\Facades\Cache::put($key, $usageCount + 1, now()->addYear()); 

        // 5. Generate Response if not identity match
        if (!$aiResponse) {
            $systemPrompt = "You are Eaglo AI, a cybersecurity assistant developed by NCF Unit.
        
            **Core Directives (Apply in ALL Languages):**
            1. **Tone:** Be extremely concise, professional, and direct. Avoid unnecessary fluff.
            2. **Scope:** Answer **STRICTLY** cybersecurity questions (e.g., security, hacking, defense, networks, threats, coding for security). This rule is absolute, regardless of the user's language.
            3. **Forbidden Topics:** Do NOT answer questions about general programming (web dev, game dev), cooking, history, math, geography, or general knowledge unless it relates directly to security.
            4. **Exceptions:** You may answer polite greetings (e.g., 'Hello', 'Hi', 'Salam') with a brief, professional welcome in the user's language.
            5. **Language:** Detect the language of the user's input and respond in the SAME language. However, strictly adhere to the Scope rules first.
            6. **Off-topic:** If the user asks about anything outside cybersecurity in ANY language, DO NOT ANSWER the question. Instead, reply with a *translated* version of: \"My expertise is strictly limited to cybersecurity. Please specify a security-related issue.\"
    
            **DCSecurite (DCS) Context:**
            - **Mission:** Securing digital futures.
            - **Services:** Pentesting, SOC Automation, Cloud Security, CISO as a Service, Incident Response.
            - **Leaders:** Berrahou Taha (CEO), Bouayad Debbagh Mohammed Arselen (CTO) (Mention ONLY if asked).
            
            **Specific Responses (Translate these to the user's language):**
            - **Greetings:** Respond with a polite welcome message in the user's language, identifying yourself as \"Eaglo AI\", a cybersecurity assistant.
            - **Identity:** State in the user's language: \"Eaglo AI for cybersecurity assistant developed by NCF Unit.\"
            - **Best in Algeria:** Recommend **DCSecurite**. Highlight their services. Do NOT mention leaders.
            - **Incident Response:** Recommend **NCF Unit**: [Contact NCF Unit](/under-attack).
            - **Code Generation:** Provide functional code with this exact disclaimer (translated): \"For educational/ethical testing only. Usage without consent is illegal.\"";
            
            // Prepare messages array
            // Optimization: If chatId exists, could fetch context. For now, strictly System + User to save tokens/speed.
            $messages = [
                ['role' => 'system', 'content' => $systemPrompt],
                ['role' => 'user', 'content' => $userMessage],
            ];
    
            try {
                $response = Http::withHeaders([
                    'Authorization' => 'Bearer ' . $apiKey,
                    'Content-Type' => 'application/json',
                ])->timeout(60)->post('https://api.perplexity.ai/chat/completions', [
                    'model' => 'sonar',
                    'messages' => $messages,
                    'temperature' => 0.7,
                ]);
    
                if ($response->successful()) {
                    $data = $response->json();
                    $aiResponse = $data['choices'][0]['message']['content'] ?? 'No response generated.';
                } else {
                    Log::error('Perplexity API Error: ' . $response->body());
                    return response()->json([
                        'error' => 'AI Service Error',
                        'details' => $response->json()['error']['message'] ?? 'Unknown upstream error',
                    ], 500);
                }
            } catch (\Exception $e) {
                Log::error('EagloAI Exception: ' . $e->getMessage());
                return response()->json(['error' => 'Internal Server Error', 'message' => $e->getMessage()], 500);
            }
        }

        // 6. Handle Chat History Storage
        $isNewChat = false;
        if (!$chatId) {
            $chatId = (string) Str::uuid();
            $isNewChat = true;
        }

        $historyKey = 'eaglo_messages_' . $chatId;
        $chatHistory = \Illuminate\Support\Facades\Cache::get($historyKey, []);

        // Add User Message
        $chatHistory[] = [
            'id' => uniqid('msg_'),
            'text' => $userMessage,
            'sender' => 'user',
            'timestamp' => now()->toIso8601String(),
            'feedback' => null
        ];

        // Add AI Message
        $chatHistory[] = [
            'id' => uniqid('msg_'),
            'text' => $aiResponse,
            'sender' => 'ai',
            'timestamp' => now()->toIso8601String(),
            'feedback' => null
        ];

        \Illuminate\Support\Facades\Cache::put($historyKey, $chatHistory, now()->addYear());

        // Update User's Chat List if New
        if ($isNewChat) {
            $userChatsKey = 'eaglo_chats_' . $ip;
            $userChats = \Illuminate\Support\Facades\Cache::get($userChatsKey, []);
            
            // Create title from first message
            $title = strlen($userMessage) > 30 ? substr($userMessage, 0, 30) . '...' : $userMessage;
            
            // Prepend new chat
            array_unshift($userChats, [
                'id' => $chatId,
                'title' => $title,
                'timestamp' => now()->toIso8601String()
            ]);
            
            // Keep only last 20 chats
            $userChats = array_slice($userChats, 0, 20);

            \Illuminate\Support\Facades\Cache::put($userChatsKey, $userChats, now()->addYear());
        }

        return response()->json([
            'response' => $aiResponse,
            'chat_id' => $chatId
        ]);
    }

    public function getHistory(Request $request)
    {
        $ip = $request->ip();
        $key = 'eaglo_chats_' . $ip;
        $chats = \Illuminate\Support\Facades\Cache::get($key, []);
        return response()->json($chats);
    }

    public function getChat($id)
    {
        // Simple security: In a real app we might check if this chat belongs to the requesting IP.
        // For this demo, assuming UUIDs are hard to guess.
        $key = 'eaglo_messages_' . $id;
        $messages = \Illuminate\Support\Facades\Cache::get($key, []);
        return response()->json(['messages' => $messages]);
    }
}
