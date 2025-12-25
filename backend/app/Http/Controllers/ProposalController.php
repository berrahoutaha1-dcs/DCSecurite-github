<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use App\Models\Proposal;

class ProposalController extends Controller
{
    public function generate(Request $request)
    {
        // 1. Validate incoming data
        if (empty($request->all())) {
            return response()->json(['error' => 'No form data provided.'], 400);
        }

        try {
            // Relaxed validation rules - Removing ALL strict type checks to prevent frontend/backend mismatch
            $validated = $request->validate([
                'fullName' => 'required',
                'companyName' => 'nullable',
                'email' => 'required|email',
                'phoneNumber' => 'nullable',
                'selectedCountry' => 'nullable',
                'projectName' => 'required',
                'projectDescription' => 'nullable',
                'targetAudience' => 'nullable',
                'designPreferences' => 'nullable', 
                'features' => 'nullable',
                'serviceType' => 'nullable',
                'timeline' => 'nullable',
                'budgetType' => 'nullable',
                'budget_range' => 'nullable',
                'maintenance' => 'nullable',
                'currentWebsite' => 'nullable',
                'socialMedia' => 'nullable',
                'entity' => 'nullable',
                'otherService' => 'nullable',
                'languages' => 'nullable',
                'pages' => 'nullable',
                'contentReady' => 'nullable',
                'mediaReady' => 'nullable',
                'brandIdentity' => 'nullable',
                'designStyle' => 'nullable',
                'preferredColors' => 'nullable',
                'designReferences' => 'nullable',
                'otherFeatures' => 'nullable',
                'hasDomain' => 'nullable',
                'hasHosting' => 'nullable',
                'hostingManagement' => 'nullable',
                'security' => 'nullable',
                'attachments' => 'nullable',
                'complexityLevel' => 'nullable',
                'roles' => 'nullable',
                'replicationType' => 'nullable',
                'quality' => 'nullable',
                'codeQuality' => 'nullable',
                'scalability' => 'nullable',
                'scaleSize' => 'nullable',
                'performance' => 'nullable',
                'optimization' => 'nullable',
                'legal' => 'nullable',
                'revisions' => 'nullable',
                'dependencies' => 'nullable',
                'warranty' => 'nullable',
                'postLaunchIncluded' => 'nullable',
                'sourceOwnership' => 'nullable',
            ]);
            
            // Safe Data Extraction for Prompt
            $clientName = $validated['fullName'];
            $companyName = $validated['companyName'] ?? 'N/A';
            $location = $validated['selectedCountry'] ?? 'Not specified';
            $projectName = $validated['projectName'];
            $description = $validated['projectDescription'] ?? 'Not specified';
            $targetAudience = $validated['targetAudience'] ?? 'Not specified';
            $sourceOwnership = $validated['sourceOwnership'] ?? 'No (License Only)';
            
            // Handle serviceType: can be array or string
            $serviceTypeStr = isset($validated['serviceType']) 
                ? (is_array($validated['serviceType']) ? implode(', ', $validated['serviceType']) : $validated['serviceType'])
                : 'Web Development';

            // Handle features: can be array or string
            $featuresStr = isset($validated['features'])
                ? (is_array($validated['features']) ? implode(', ', $validated['features']) : $validated['features'])
                : 'Standard Features';

            $timeline = $validated['timeline'] ?? 'Flexible';
            $budget = $validated['budget_range'] ?? 'Open';
            
            // Helper to safe-implode
            $safeImplode = function($key, $default = 'None') use ($validated) {
                return isset($validated[$key]) && is_array($validated[$key]) ? implode(', ', $validated[$key]) : ($validated[$key] ?? $default);
            };

            // Aggregate ALL scope data for the "Senior Consultant" to analyze
            $rolesStr = $safeImplode('roles', 'Standard Team');
            $securityStr = $safeImplode('security', 'Standard Security');
            $techStackStr = $safeImplode('techStack', 'Not specified'); // Assumption based on typical form
            $pagesStr = $safeImplode('pages', 'Standard Pages');
            $languagesStr = $safeImplode('languages', 'English');
            $cmsStr = $validated['cms'] ?? 'Not specified'; 
            $integrationsStr = $safeImplode('integrations', 'None'); // Capturing any other integrations

            // --- ARCHITECTURE LOGIC ---
            // Define stacks based on service type
            $webStack = "• Stack: LARAVEL or Node.js + MySQL or SQLite\n• Deployment: Vercel/AWS with Cloudflare CDN or Hostinger or Azure\n• Design UI/UX: Figma\n• Security: Full-stack encryption + JWT + Rate limiting\n• Scalability: Microservices-ready with API-first design";
            
            $mobileStack = "• Stack: Kotlin / Swift / Flutter + SQLite / MySQL\n• Deployment: Vercel/AWS with Cloudflare CDN or Hostinger or Azure\n• Design UI/UX: Figma\n• Security: Full-stack encryption + JWT + Rate limiting\n• Scalability: Microservices-ready with API-first design";
            
            $customStack = "• Stack: Laravel / Node.js / Django / .NET / Electron (desktop option) + SQLite / MySQL\n• Deployment: Vercel/AWS with Cloudflare CDN or Hostinger or Azure\n• Design UI/UX: Figma\n• Security: Full-stack encryption + JWT + Rate limiting\n• Scalability: Microservices-ready with API-first design";

            // Determine which architecture to use
            $architectureOverview = $webStack; // Default
            $lowerServiceType = strtolower($serviceTypeStr);

            if (str_contains($lowerServiceType, 'mobile') || str_contains($lowerServiceType, 'app')) {
                $architectureOverview = $mobileStack;
            } elseif (str_contains($lowerServiceType, 'custom') || str_contains($lowerServiceType, 'software')) {
                $architectureOverview = $customStack;
            } else {
                // Default to Web Development stack (covers "Web Development", "Website", etc.)
                $architectureOverview = $webStack;
            }
            
            // Construct the Professional Prompt (Restored "Elite" Style + New Data)
            $prompt = "You are an elite Digital Strategy Consultant for DCSecurite (a premium cybersecurity and dev agency). 
            Generate a high-end, legally professional Project Proposal in HTML format.
            
            Client Profile:
            - Name: {$clientName}
            - Company: {$companyName}
            - Location: {$location}
            
            Project Scope:
            - Project: {$projectName}
            - Type: {$serviceTypeStr}
            - Goal: {$description}
            - Target Audience: {$targetAudience}
            - Selected Features: {$featuresStr}
            - Timeline Preference: {$timeline}
            
            STRUCTURE & CONTENT REQUIREMENTS:
            
            1. **Executive Summary**: Professional greeting, understanding of specific needs, and value proposition.
            
            2. **Technical Approach**: 
               - **Architecture** (MANDATORY): You MUST display exactly the following stack:
                 {$architectureOverview}
               - Brief high-level description of the solution.
            
            3. **Scope of Work (Feature Breakdown)**: List the selected features with brief technical descriptions.
            
            4. **Implementation Timeline**: A Gantt-chart style textual description matching the requested timeline.
            
            5. **FINANCIAL INVESTMENT (Crucial)**:
               - You MUST create a detailed **HTML Table**.
               - Columns: 'Service / Feature', 'Description', 'Estimated Cost (USD)'.
               - Rows should include: Base Development, UI/UX Design, specific features selected (e.g. 'Payment Gateway Integration', 'AI Features'), and Deployment.
               - **IP Transfer**: The client selected Source Ownership: '{$sourceOwnership}'. If 'Yes', add a row for 'Full IP & Source Code Transfer'. **CALCULATION RULE**: Calculate this strictly as **60% of the subtotal** (Sum of all other services). Explicitly write '**60% Ownership Surcharge**' in the Description column.

               - **PRICING STRATEGY**: Use **Competitive / Medium-Level Market Rates** (adapted for North African / Emerging Markets). **Avoid high-end US/EU Enterprise rates.**
               - **TOTAL**: A clear Final Total row at the bottom. **CRITICAL**: You MUST wrap the final dollar amount in a span with id=\"proposal-total-amount\". Example: <span id=\"proposal-total-amount\">$1,500</span>.
               
            6. **Terms & Next Steps**: 
               - Standard professional text about 50% upfront, etc.
               - **MANDATORY CONTACT INFO**: You MUST end the proposal with exactly this line:
                 \"Contact: contact@dcsecurite.com | whatsapp : +213668959953\"
            
            DESIGN & FORMATTING:
            - Use a 'paper-document' aesthetic.
            - Use Tailwind CSS classes for specific styling:
              - Headers: text-xl font-bold text-slate-800 mb-4 mt-6 border-b pb-2
              - Table: w-full border-collapse border border-slate-300 mt-4 mb-8
              - Table Header: bg-slate-100 font-bold border-b border-slate-300 p-2 text-left
              - Table Cells: border-b border-slate-200 p-2 text-sm text-slate-700
              - Total Row: bg-slate-50 font-bold text-lg
            - Do NOT include <html>/<body> tags. Return only the semantic HTML content div.
            ";

            // --- FINGERPRINT CACHING SYSTEM ---
            // Create a unique signature based on critical scope items
            $fingerprintData = [
                'service' => $serviceTypeStr,
                'features' => $featuresStr,
                'roles' => $rolesStr,
                'pages' => $pagesStr,
                'ownership' => $sourceOwnership,
                'timeline' => $timeline,
                'budget' => $budget
            ];
            $fingerprint = md5(json_encode($fingerprintData));

            // Check if we have generated this EXACT proposal before
            $cachedProposal = Proposal::where('fingerprint', $fingerprint)->first();

            if ($cachedProposal) {
                // RETURN CACHED VERSION (Preventing Price/Content Shift)
                return response()->json([
                    'success' => true,
                    'proposal' => $cachedProposal->content,
                    'cached' => true
                ]);
            }

            // Call Perplexity API
            set_time_limit(120); // Increase PHP execution time
            
            $response = Http::withHeaders([
                'Authorization' => 'Bearer ' . env('PERPLEXITY_API_KEY'),
                'Content-Type' => 'application/json',
            ])->timeout(120)->post('https://api.perplexity.ai/chat/completions', [
                'model' => 'sonar',
                'messages' => [
                    [
                        'role' => 'system',
                        'content' => 'You are a helpful and professional web development agency proposal generator.'
                    ],
                    [
                        'role' => 'user',
                        'content' => $prompt
                    ]
                ],
                'temperature' => 0.7
            ]);

            if ($response->successful()) {
                $content = $response->json()['choices'][0]['message']['content'];
                
                // Cleanup: strip ```html markup
                $content = str_replace(['```html', '```'], '', $content);

                // --- SAVE TO DATABASE (Safe & Truncated) ---
                $user = $request->user(); 
                
                if ($user) {
                     $savedProposal = Proposal::create([
                        'user_id' => $user->id,
                        'client_name' => substr($clientName, 0, 250),
                        'company_name' => substr($companyName, 0, 250),
                        'email' => $validated['email'],
                        'project_name' => substr($projectName, 0, 250), // SQL Error Fix
                        'service_type' => 'Web Development', 
                        'location' => substr($location, 0, 250),
                        'budget_range' => substr($budget, 0, 250),
                        'timeline' => substr($timeline, 0, 250),
                        'content' => $content,
                        'form_data' => $validated,
                        'fingerprint' => $fingerprint // Save signature
                    ]);
                }

                return response()->json([
                    'success' => true,
                    'proposal' => $content,
                    'proposal_id' => $savedProposal->id ?? null // Return ID
                ]);
            } else {
                Log::error('Perplexity API Error: ' . $response->body());
                return response()->json(['success' => false, 'message' => 'Failed to generate proposal from AI service.'], 500);
            }

        } catch (\Illuminate\Validation\ValidationException $e) {
            // Return first validation error
            return response()->json(['success' => false, 'message' => $e->validator->errors()->first()], 422);
        } catch (\Exception $e) {
            Log::error('Proposal Generation Error: ' . $e->getMessage());
            return response()->json(['success' => false, 'message' => 'An error occurred: ' . $e->getMessage()], 500);
        }
    }

    public function index(Request $request)
    {
        $user = $request->user();
        if (!$user) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        $proposals = Proposal::where('user_id', $user->id)
            ->orderBy('created_at', 'desc')
            ->get();

        return response()->json($proposals);
    }
    public function show(Request $request, $id)
    {
        $proposal = Proposal::findOrFail($id);

        if ($request->user()->id !== $proposal->user_id) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        return response()->json($proposal);
    }

    public function sign(Request $request, $id)
    {
        $proposal = Proposal::findOrFail($id);

        // Security Check: Ensure user owns this proposal
        if ($request->user()->id !== $proposal->user_id) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        if ($proposal->status === 'signed') {
            return response()->json(['error' => 'Proposal is already signed'], 400);
        }

        $validated = $request->validate([
            'managerName' => 'required|string',
            'companyName' => 'required|string',
            'taxId' => 'nullable|string',
            'address' => 'nullable|string',
            'signature' => 'required|string', // Base64
        ]);

        $proposal->update([
            'manager_name' => $validated['managerName'],
            'company_name' => $validated['companyName'], // Allow updating company name
            'tax_id' => $validated['taxId'],
            'contract_address' => $validated['address'],
            'signature_data' => $validated['signature'],
            'status' => 'signed',
            'signed_at' => now(),
        ]);

        return response()->json(['success' => true, 'message' => 'Contract signed successfully']);
    }
}
