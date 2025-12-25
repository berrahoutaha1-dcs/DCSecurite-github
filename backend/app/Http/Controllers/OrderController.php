<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function index()
    {
        return response()->json(Order::with('items')->get());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'user_id' => 'required|exists:users,id',
            'status' => 'string',
            'total_amount' => 'required|numeric',
            'items' => 'array'
        ]);

        $order = Order::create($validated);
        
        // Items logic would go here ideally
        
        return response()->json($order, 201);
    }

    public function show(Order $order)
    {
        return response()->json($order->load('items'));
    }

    public function update(Request $request, Order $order)
    {
        $order->update($request->all());
        return response()->json($order);
    }

    public function destroy(Order $order)
    {
        $order->delete();
        return response()->json(['message' => 'Order deleted']);
    }
}
