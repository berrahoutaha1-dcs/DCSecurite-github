<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('proposals', function (Blueprint $table) {
            $table->string('manager_name')->nullable();
            $table->string('tax_id')->nullable();
            $table->string('contract_address')->nullable();
            $table->longText('signature_data')->nullable(); // Base64 signature
            $table->timestamp('signed_at')->nullable();
            $table->string('status')->default('pending'); // pending, signed
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('proposals', function (Blueprint $table) {
            //
        });
    }
};
