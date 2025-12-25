<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function dashboard()
    {
        return response()->json([
            'status' => 'ok',
            'message' => 'Admin dashboard ready',
            'data' => (object)[]
        ]);
    }
}
