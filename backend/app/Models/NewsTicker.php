<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NewsTicker extends Model
{
    use HasFactory;

    protected $fillable = [
        'content',
        'is_active',
        'order',
    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];
}
