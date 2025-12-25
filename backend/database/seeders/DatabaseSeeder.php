<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Role;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // 1. Create Roles
        $roles = [
            'admin' => 'Administrator',
            'client' => 'Client',
            'marketer' => 'Marketer',
            'order_confirmer' => 'Order Confirmer',
            'supplier' => 'Supplier',
            'delivery_agent' => 'Delivery Agent',
        ];

        foreach ($roles as $name => $label) {
            Role::firstOrCreate(['name' => $name], ['label' => $label]);
        }
        
        // 2. Create Permissions
        $permissions = [
            'manage_users',
            'manage_products',
            'manage_orders',
            'manage_subscriptions',
            'manage_payments',
            'manage_logistics',
        ];

        foreach ($permissions as $perm) {
            \App\Models\Permission::firstOrCreate(['name' => $perm]);
        }

        // 3. Assign Permissions to Admin
        $adminRole = Role::where('name', 'admin')->first();
        $allPermissions = \App\Models\Permission::all();
        $adminRole->permissions()->sync($allPermissions);

        // 4. Create or Update Admin User
        $admin = User::where('role_id', $adminRole->id)->first();
        
        if (!$admin) {
            $admin = User::create([
                'email' => 'contact@dcsecurite.com',
                'name' => 'Super Admin',
                'password' => Hash::make('password'),
                'role_id' => $adminRole->id,
                'status' => 'active',
                'email_verified_at' => now(),
            ]);
        } else {
             $admin->update([
                'email' => 'contact@dcsecurite.com',
                'password' => Hash::make('password'),
                'email_verified_at' => now(),
            ]);
        }

        // 5. Seed News Tickers
        $this->call(NewsTickerSeeder::class);
    }
}
