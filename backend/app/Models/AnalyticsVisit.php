<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AnalyticsVisit extends Model
{
    use HasFactory;

    protected $fillable = [
        'ip_address',
        'country',
        'city',
        'source',
    ];
}
