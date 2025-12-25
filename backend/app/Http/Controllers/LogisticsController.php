<?php

namespace App\Http\Controllers;

use App\Models\Logistics;
use Illuminate\Http\Request;

class LogisticsController extends Controller
{
    public function index()
    {
        return response()->json(Logistics::all());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'order_id' => 'required|exists:orders,id',
            'provider' => 'required|string',
            'tracking_number' => 'string',
        ]);

        $logistics = Logistics::create($validated);
        return response()->json($logistics, 201);
    }

    public function show(Logistics $logistics)
    {
        return response()->json($logistics);
    }

    public function update(Request $request, Logistics $logistics)
    {
        $logistics->update($request->all());
        return response()->json($logistics);
    }

    public function destroy(Logistics $logistics)
    {
        $logistics->delete();
        return response()->json(['message' => 'Logistics record deleted']);
    }
}
