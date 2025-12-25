<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Proposal extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'client_name',
        'company_name',
        'email',
        'project_name',
        'service_type',
        'location',
        'budget_range',
        'timeline',
        'content',
        'form_data',
        'fingerprint',
        'manager_name',
        'tax_id',
        'contract_address',
        'signature_data',
        'signed_at',
        'status',
    ];

    protected $casts = [
        'form_data' => 'array',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
