<?php

namespace App\Http\Controllers;

use App\Models\NewsTicker;
use Illuminate\Http\Request;

class NewsTickerController extends Controller
{
    public function index()
    {
        return NewsTicker::orderBy('order', 'asc')->get();
    }

    public function active()
    {
        return NewsTicker::where('is_active', true)->orderBy('order', 'asc')->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'content' => 'required|string',
            'is_active' => 'boolean',
            'order' => 'integer',
        ]);

        $newsTicker = NewsTicker::create($request->all());

        return response()->json($newsTicker, 201);
    }

    public function update(Request $request, NewsTicker $newsTicker)
    {
        $request->validate([
            'content' => 'string',
            'is_active' => 'boolean',
            'order' => 'integer',
        ]);

        $newsTicker->update($request->all());

        return response()->json($newsTicker);
    }

    public function destroy(NewsTicker $newsTicker)
    {
        $newsTicker->delete();

        return response()->json(null, 204);
    }
}
