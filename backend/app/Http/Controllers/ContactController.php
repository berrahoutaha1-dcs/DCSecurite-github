<?php

namespace App\Http\Controllers;

use App\Models\ContactSubmission;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    public function index()
    {
        return response()->json(ContactSubmission::orderBy('created_at', 'desc')->get());
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'company' => 'required|string|max:255',
            'job_level' => 'required|string|max:255',
            'country' => 'required|string|max:255',
            'phone' => 'required|string|max:255',
            'product_interest' => 'required|string|max:255',
            'message' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        try {
            $submission = ContactSubmission::create([
                ...$validator->validated(),
                'ip_address' => $request->ip(),
                'status' => 'new'
            ]);

            // Send emails
            try {
                \Illuminate\Support\Facades\Mail::to($submission->email)
                    ->send(new \App\Mail\ClientThankYouMail($submission->first_name));

                \Illuminate\Support\Facades\Mail::to('contact@dcsecurite.com')
                    ->send(new \App\Mail\AdminNotificationMail($submission));
            } catch (\Exception $e) {
                \Illuminate\Support\Facades\Log::error('Mail sending failed: ' . $e->getMessage());
            }

            return response()->json([
                'message' => 'Thank you! Your request has been submitted successfully.',
                'data' => $submission
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Database error: ' . $e->getMessage()
            ], 500);
        }
    }

    public function update(Request $request, $id)
    {
        $submission = ContactSubmission::findOrFail($id);
        
        $request->validate([
            'status' => 'required|in:new,read,contacted,closed'
        ]);

        $submission->update(['status' => $request->status]);

        return response()->json($submission);
    }
    
    public function destroy($id)
    {
        $submission = ContactSubmission::findOrFail($id);
        $submission->delete();
        return response()->json(['message' => 'Submission deleted successfully']);
    }
}
