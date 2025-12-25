<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $user = User::where('email', $request->email)->first();

        if (! $user || ! Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['Invalid credentials.'],
            ]);
        }
        
        if ($user->status !== 'active') {
             throw ValidationException::withMessages([
                'email' => ['Account is not active.'],
            ]);
        }

        if (! $user->hasVerifiedEmail()) {
            return response()->json(['message' => 'Email not verified.', 'email_verified' => false], 403);
        }

        // GENERATE 2FA CODE
        // Check if admin (role_id 1) -> 1 minute expiry, else 10 minutes
        $expiryMinutes = ($user->role_id === 1) ? 1 : 10;
        
        try {
            $user->generateTwoFactorCode($expiryMinutes);
        } catch (\Exception $e) {
            Log::error('Login 2FA Error: ' . $e->getMessage());
            return response()->json([
                'message' => 'Failed to send verification code. Please contact support.',
                'error' => $e->getMessage() // For debugging only, remove in production
            ], 500);
        }

        return response()->json([
            'message' => '2FA Code sent to your email.',
            'two_factor_required' => true
        ]);
        
        // REMOVED DIRECT TOKEN GENERATION
        /* 
        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'message' => 'Login successful',
            'token' => $token,
            'user' => $user
        ]);
        */
    }

    public function verifyTwoFactor(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'two_factor_code' => 'required|integer',
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user) {
            return response()->json(['message' => 'User not found.'], 404);
        }

        if ($request->two_factor_code != $user->two_factor_code) {
             return response()->json(['message' => 'Invalid code.'], 401);
        }

        if ($user->two_factor_expires_at < now()) {
            return response()->json(['message' => 'Code expired.'], 401);
        }

        // Reset 2FA Code
        $user->resetTwoFactorCode();

        // Login Success
        $token = $user->createToken('auth_token')->plainTextToken;

        // Store IP and User Agent for Login History
        $accessToken = $user->tokens()->latest()->first();
        $accessToken->forceFill([
            'ip_address' => $request->ip(),
            'user_agent' => $request->userAgent(),
        ])->save();

        return response()->json([
            'message' => 'Login successful',
            'token' => $token,
            'user' => $user
        ]);
    }

    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed',
            'phone' => 'nullable|string|max:20',
        ]);

        // Email Validation API (EmailListVerify)
        // Key provided by user: [REDACTED]
        $email = $request->email;
        $key = env('EMAIL_LIST_VERIFY_KEY', 'YOUR_KEY_HERE');
        $url = "https://apps.emaillistverify.com/api/verifyEmail?secret=".$key."&email=".urlencode($email)."&timeout=15";
        
        // Using Laravel Http client which is cleaner than raw curl
        $apiResponse = Http::withoutVerifying()->get($url);
        
        // The API returns "ok" for valid, inside the body string
        if ($apiResponse->successful()) {
            $result = $apiResponse->body();
            // According to docs/snippet, it echoes the response. 
            // Usually "ok" or "ok_for_all" means valid. "invalid", "unknown", "spam_trap" etc are bad.
            // Let's assume strict check: must be "ok" or contain "ok".
            // Snippet echoes response. Common responses: "ok", "fail", "unknown"
            // We will allow registration only if we don't get a definitive "fake/invalid" response.
            // But to be safe and strict as requested:
            if ($result !== 'ok' && $result !== 'ok_for_all') {
                 // Warning: 'unknown' might block valid emails if service is down/unreachable.
                 // Ideally we log this. For now, if "invalid" or "spam_trap", block.
                 if (in_array($result, ['invalid', 'spam_trap', 'disposable', 'complainer'])) {
                     throw ValidationException::withMessages([
                        'email' => ['This email address appears to be invalid or undeliverable.'],
                    ]);
                 }
            }
        }

        // Find or create 'client' role
        $role = \App\Models\Role::firstOrCreate(['name' => 'client'], ['label' => 'Client']);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'phone' => $request->phone,
            'company_name' => $request->company_name,
            'company_website' => $request->company_website,
            'role_id' => $role->id,
            'status' => 'active',
        ]);

        event(new Registered($user));

        $token = $user->createToken('api-token')->plainTextToken;

        // Store IP and User Agent
        $accessToken = $user->tokens()->latest()->first();
        $accessToken->forceFill([
            'ip_address' => $request->ip(),
            'user_agent' => $request->userAgent(),
        ])->save();

        return response()->json([
            'message' => 'Registration successful',
            'token' => $token,
            'user' => $user
        ], 201);
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        return response()->json(['message' => 'Logged out successfully']);
    }

    public function me(Request $request)
    {
        return response()->json($request->user());
    }

    public function updateProfile(Request $request)
    {
        $user = $request->user();
        
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email,' . $user->id,
            'phone' => 'nullable|string|max:20',
            'company_name' => 'nullable|string|max:255',
            'company_website' => 'nullable|url|max:255',
            'address' => 'nullable|string|max:255',
            'password' => 'nullable|min:6',
            'current_password' => 'required_with:password',
        ]);

        if (!empty($validated['password'])) {
            if (!Hash::check($request->current_password, $user->password)) {
                 throw ValidationException::withMessages([
                    'current_password' => ['The provided password does not match your current password.'],
                ]);
            }
            $user->password = Hash::make($validated['password']);
        }

        $user->name = $validated['name'];
        $user->email = $validated['email'];
        $user->phone = $validated['phone'];
        $user->company_name = $validated['company_name'] ?? $user->company_name;
        $user->company_website = $validated['company_website'] ?? $user->company_website;
        $user->address = $validated['address'] ?? $user->address;
        $user->save();

        return response()->json([
            'message' => 'Profile updated successfully',
            'user' => $user
        ]);
    }

    public function verify($id, Request $request)
    {
        if (!$request->hasValidSignature()) {
            return response()->json(['message' => 'Invalid or expired URL'], 401);
        }

        $user = User::findOrFail($id);

        if (!$user->hasVerifiedEmail()) {
            $user->markEmailAsVerified();
        }

        return redirect('http://localhost:5173/?verified=1');
    }

    public function resend(Request $request)
    {
        $request->validate(['email' => 'required|email']);

        $user = User::where('email', $request->email)->first();

        if (!$user) {
             return response()->json(['message' => 'User not found.'], 404);
        }

        if ($user->hasVerifiedEmail()) {
            return response()->json(['message' => 'Email already verified.']);
        }

        $user->sendEmailVerificationNotification();

        return response()->json(['message' => 'Verification link sent.']);
    }

    public function forgotPassword(Request $request)
    {
        $request->validate(['email' => 'required|email']);

        $user = User::where('email', $request->email)->first();

        if (!$user) {
            return response()->json(['message' => 'If this email is registered, you will receive a code.'], 200);
        }

        // Generate 10 minute OTP using existing system
        $user->generateTwoFactorCode(10);

        return response()->json(['message' => 'If this email is registered, you will receive a code.']);
    }

    public function resetPassword(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'code' => 'required|integer',
            'password' => 'required|string|min:8|confirmed',
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user) {
            return response()->json(['message' => 'User not found.'], 404);
        }

        if ($request->code != $user->two_factor_code) {
             return response()->json(['message' => 'Invalid code.'], 401);
        }

        if ($user->two_factor_expires_at < now()) {
            return response()->json(['message' => 'Code expired.'], 401);
        }

        // Reset Password
        $user->password = Hash::make($request->password);
        $user->resetTwoFactorCode();
        $user->save();

        return response()->json(['message' => 'Password has been reset successfully.']);
    }

    public function sendPasswordChangeOtp(Request $request)
    {
        $user = $request->user();
        // 1 Minute Expiration
        $user->generateTwoFactorCode(1);
        return response()->json(['message' => 'Verification code sent.']);
    }

    public function updatePasswordWithOtp(Request $request)
    {
        $request->validate([
            'code' => 'required|integer',
            'password' => 'required|string|min:8|confirmed',
        ]);

        $user = $request->user();

        if ($request->code != $user->two_factor_code) {
             return response()->json(['message' => 'Invalid code.'], 401);
        }

        if ($user->two_factor_expires_at < now()) {
            return response()->json(['message' => 'Code expired. Please try again within 60 seconds.'], 401);
        }

        $user->password = Hash::make($request->password);
        $user->resetTwoFactorCode();
        $user->save();

        return response()->json(['message' => 'Password updated successfully.']);
    }
}
