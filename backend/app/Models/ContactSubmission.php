<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContactSubmission extends Model
{
    use HasFactory;

    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'company',
        'job_level',
        'country',
        'phone',
        'product_interest',
        'message',
        'status',
        'ip_address',
    ];
}
