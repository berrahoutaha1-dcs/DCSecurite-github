<?php

namespace App\Http\Controllers;

use App\Models\Subscription;
use Illuminate\Http\Request;

class SubscriptionController extends Controller
{
    public function index()
    {
        return response()->json(Subscription::all());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'user_id' => 'required|exists:users,id',
            'plan_name' => 'required|string',
            'start_date' => 'required|date',
            'end_date' => 'date',
        ]);

        $subscription = Subscription::create($validated);
        return response()->json($subscription, 201);
    }

    public function show(Subscription $subscription)
    {
        return response()->json($subscription);
    }

    public function update(Request $request, Subscription $subscription)
    {
        $subscription->update($request->all());
        return response()->json($subscription);
    }

    public function destroy(Subscription $subscription)
    {
        $subscription->delete();
        return response()->json(['message' => 'Subscription deleted']);
    }
}
