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
        Schema::create('event_offers', function (Blueprint $table) {
            $table->id();
            $table->string('full_name');
            $table->string('organization_type');
            $table->string('organization_name');
            $table->string('country');
            $table->string('phone');
            $table->string('email');
            $table->string('referrer')->nullable();
            $table->string('budget');
            $table->text('proposition');
            $table->string('ip_address')->nullable();
            $table->string('status')->default('pending');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('event_offers');
    }
};
