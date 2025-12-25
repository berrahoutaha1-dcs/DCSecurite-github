<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\Loggable;

class Logistics extends Model
{
    use HasFactory, Loggable;

    protected $fillable = [
        'order_id',
        'provider',
        'tracking_number',
        'status',
        'estimated_delivery',
    ];

    public function order()
    {
        return $this->belongsTo(Order::class);
    }
}
