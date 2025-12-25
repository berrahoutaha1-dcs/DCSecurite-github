<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    /**
     * List all client users.
     */
    public function index()
    {
        // Explicitly fetch 'client' role to ensure accuracy
        $clientRole = \App\Models\Role::where('name', 'client')->first();
        
        if (!$clientRole) {
            return response()->json([
                'status' => 'success',
                'data' => [] 
            ]);
        }

        $clients = User::where('role_id', $clientRole->id)->get();

        return response()->json([
            'status' => 'success',
            'data' => $clients
        ]);
    }

    /**
     * Impersonate a user.
     * Returns a new token for the target user.
     */
    public function impersonate($id)
    {
        $admin = Auth::user();
        
        // Start by getting role IDs
        $adminRole = \App\Models\Role::where('name', 'admin')->first();
        $adminRoleId = $adminRole ? $adminRole->id : 1;

        // Double check admin role although middleware should handle it
        if ($admin->role_id !== $adminRoleId) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $user = User::findOrFail($id);

        // Prevent impersonating other admins
        if ($user->role_id === $adminRoleId) {
            return response()->json(['message' => 'Cannot impersonate another admin'], 403);
        }

        // Create a plain text token for the user
        $token = $user->createToken('impersonation_token')->plainTextToken;

        return response()->json([
            'status' => 'success',
            'message' => 'Impersonating ' . $user->name,
            'token' => $token,
            'user' => $user
        ]);
    }

    /**
     * Toggle user status (active/suspended).
     */
    public function toggleStatus(Request $request, $id)
    {
        $user = User::findOrFail($id);
        
        // Prevent modifying admins
        $adminRole = \App\Models\Role::where('name', 'admin')->first();
        $adminRoleId = $adminRole ? $adminRole->id : 1;
        
        if ($user->role_id === $adminRoleId) {
           return response()->json(['message' => 'Cannot suspend an admin'], 403);
        }

        // Toggle status
        $newStatus = $user->status === 'active' ? 'suspended' : 'active';
        $user->status = $newStatus;
        $user->save();

        // Handle Notifications
        $reason = $request->input('reason');
        $shouldNotify = $request->boolean('should_notify');

        try {
            if ($newStatus === 'suspended' && $shouldNotify && $reason) {
                // Send Suspension Email
                \Illuminate\Support\Facades\Mail::to($user->email)->send(new \App\Mail\AccountSuspensionAlert($user->name, $reason));
            } elseif ($newStatus === 'active' && $shouldNotify) {
                 // Send Activation Email
                \Illuminate\Support\Facades\Mail::to($user->email)->send(new \App\Mail\AccountActivationAlert($user->name, $reason));
            }
        } catch (\Exception $e) {
            \Illuminate\Support\Facades\Log::error("Failed to send status email: " . $e->getMessage());
        }

        return response()->json([
            'status' => 'success',
            'message' => 'User status updated to ' . $user->status,
            'data' => [
                'status' => $user->status
            ]
        ]);
    }

    /**
     * Delete a user.
     */
    public function destroy($id)
    {
        $user = User::findOrFail($id);
        
        // Prevent deleting admins
        $adminRole = \App\Models\Role::where('name', 'admin')->first();
        $adminRoleId = $adminRole ? $adminRole->id : 1;

        if ($user->role_id === $adminRoleId) {
            return response()->json(['message' => 'Cannot delete an admin'], 403);
        }

        $user->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'User deleted successfully'
        ]);
    }

    /**
     * Terminate a user account with optional email notification.
     */
    public function terminate(Request $request, $id)
    {
        $user = User::findOrFail($id);
        
        // Prevent deleting admins
        $adminRole = \App\Models\Role::where('name', 'admin')->first();
        $adminRoleId = $adminRole ? $adminRole->id : 1;

        if ($user->role_id === $adminRoleId) {
            return response()->json(['message' => 'Cannot delete an admin'], 403);
        }

        $reason = $request->input('reason');
        $shouldNotify = $request->boolean('should_notify');

        if ($shouldNotify && $reason) {
            try {
                \Illuminate\Support\Facades\Mail::to($user->email)->send(new \App\Mail\AccountDeletionAlert($user->name, $reason));
            } catch (\Exception $e) {
                // Log error but proceed with deletion
                \Illuminate\Support\Facades\Log::error("Failed to send termination email: " . $e->getMessage());
            }
        }

        $user->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'User account terminated successfully' . ($shouldNotify ? ' and notification sent.' : '.')
        ]);
    }
}
