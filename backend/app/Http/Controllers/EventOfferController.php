<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\EventOffer;
use App\Mail\EventPartnerUserMail;
use App\Mail\EventPartnerAdminMail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;

class EventOfferController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return EventOffer::latest()->get();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'full_name' => 'required|string|max:255',
            'organization_type' => 'required|string|max:255',
            'organization_name' => 'required|string|max:255',
            'country' => 'required|string|max:255',
            'phone' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'referrer' => 'nullable|string|max:255',
            'budget' => 'required|string|max:255',
            'proposition' => 'required|string',
        ]);

        $ipAddress = $request->ip();
        $offerData = array_merge($validated, ['ip_address' => $ipAddress]);

        $offer = EventOffer::create($offerData);

        // Send Emails
        try {
            // Admin Notification
            Mail::to('contact@dcsecurite.com')->send(new EventPartnerAdminMail($offer));

            // User Auto-response
            Mail::to($offer->email)->send(new EventPartnerUserMail($offer->full_name));

        } catch (\Exception $e) {
            Log::error("Failed to send event offer emails: " . $e->getMessage());
        }

        return response()->json([
            'message' => 'Event offer submitted successfully',
            'data' => $offer
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(EventOffer $eventOffer)
    {
        return $eventOffer;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, EventOffer $eventOffer)
    {
        $validated = $request->validate([
            'status' => 'required|string|in:pending,reviewed,contacted,rejected,approved',
        ]);

        $eventOffer->update($validated);

        return $eventOffer;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(EventOffer $eventOffer)
    {
        $eventOffer->delete();
        return response()->json(['message' => 'Offer deleted successfully']);
    }
}
