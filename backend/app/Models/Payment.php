<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\Loggable;

class Payment extends Model
{
    use HasFactory, Loggable;

    protected $fillable = [
        'order_id',
        'subscription_id',
        'amount',
        'method',
        'status',
        'transaction_id',
    ];

    public function order()
    {
        return $this->belongsTo(Order::class);
    }
    
    public function subscription()
    {
        return $this->belongsTo(Subscription::class);
    }
}
