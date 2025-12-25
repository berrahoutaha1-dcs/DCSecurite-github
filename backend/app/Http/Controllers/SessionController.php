<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SessionController extends Controller
{
    /**
     * Get all active sessions (device logins)
     */
    public function index(Request $request)
    {
        $tokens = $request->user()->tokens()
            ->orderByDesc('last_used_at')
            ->orderByDesc('created_at')
            ->get()
            ->map(function ($token) {
                return [
                    'id' => $token->id,
                    'ip_address' => $token->ip_address,
                    'user_agent' => $token->user_agent,
                    'last_used_at' => $token->last_used_at ? $token->last_used_at->diffForHumans() : 'Just now',
                    'created_at' => $token->created_at->format('F j, Y, g:i a'),
                    'is_current_device' => $token->id === request()->user()->currentAccessToken()->id,
                ];
            });

        return response()->json(['sessions' => $tokens]);
    }

    /**
     * Revoke (Logout) a specific session
     */
    public function destroy(Request $request, $id)
    {
        if ($id == $request->user()->currentAccessToken()->id) {
             return response()->json(['message' => 'Cannot revoke current session. Use logout instead.'], 400);
        }

        $request->user()->tokens()->where('id', $id)->delete();

        return response()->json(['message' => 'Session logged out successfully.']);
    }
}
