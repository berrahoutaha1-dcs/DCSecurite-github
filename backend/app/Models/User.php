<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

use Laravel\Sanctum\HasApiTokens;
use App\Traits\Loggable;
use App\Notifications\TwoFactorCode; // Import new notification

class User extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens, HasFactory, Notifiable, Loggable;

    /**
     * Generate 6 digit 2FA code
     */
    public function generateTwoFactorCode($minutes = 10)
    {
        $this->timestamps = false; // Prevent updating updated_at
        $this->two_factor_code = rand(100000, 999999);
        $this->two_factor_expires_at = now()->addMinutes($minutes);
        $this->save();
        
        $this->notify(new TwoFactorCode($minutes));
    }

    /**
     * Reset 2FA code
     */
    public function resetTwoFactorCode()
    {
        $this->timestamps = false;
        $this->two_factor_code = null;
        $this->two_factor_expires_at = null;
        $this->save();
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'phone',
        'company_name',
        'company_website',
        'address', // Added address field
        'two_factor_code',
        'two_factor_expires_at',
        'role_id',
        'status',
    ];

    public function role()
    {
        return $this->belongsTo(Role::class);
    }
    
    public function hasRole($roleName)
    {
        return $this->role && $this->role->name === $roleName;
    }

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }
}
