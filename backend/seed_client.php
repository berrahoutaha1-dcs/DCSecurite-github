$role = App\Models\Role::firstOrCreate(['name' => 'client'], ['label' => 'Client']);
echo "Client Role ID: " . $role->id . "\n";

$user = App\Models\User::firstOrCreate(
    ['email' => 'client@test.com'],
    [
        'name' => 'Test Client',
        'password' => bcrypt('password'),
        'role_id' => $role->id,
        'status' => 'active',
        'company_name' => 'Test Corp'
    ]
);
echo "User: " . $user->name . " (ID: " . $user->id . ")\n";
echo "Total Clients: " . App\Models\User::where('role_id', $role->id)->count() . "\n";
