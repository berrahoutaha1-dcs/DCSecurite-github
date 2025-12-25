<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EventOffer extends Model
{
    protected $fillable = [
        'full_name',
        'organization_type',
        'organization_name',
        'country',
        'phone',
        'email',
        'referrer',
        'budget',
        'proposition',
        'ip_address',
        'status',
    ];
    //
}
