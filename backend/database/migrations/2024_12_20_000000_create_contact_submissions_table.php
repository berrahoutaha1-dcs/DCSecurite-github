<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('contact_submissions', function (Blueprint $table) {
            $table->id();
            $table->string('first_name');
            $table->string('last_name');
            $table->string('email');
            $table->string('company');
            $table->string('job_level');
            $table->string('country');
            $table->string('phone');
            $table->string('product_interest');
            $table->text('message');
            $table->string('status')->default('new'); // new, read, contacted, closed
            $table->string('ip_address')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('contact_submissions');
    }
};
