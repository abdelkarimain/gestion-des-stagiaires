<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('nom')->required();
            $table->string('prenom')->required();
            $table->string('email')->unique()->required();
            $table->string('password')->default(Hash::make('user'));
            $table->string('telephone')->default('951-449-183');
            $table->string('sexe')->default('male');
            $table->string('nationalite')->default('MA');
            $table->string('photo')->default('https://randomuser.me/api/portraits/lego/5.jpg');
            $table->string('role')->default('user');
            $table->string('adresse')->default('Rue Pierre-Delore');
            $table->string('ville')->default('Rabat');
            $table->timestamps();
        });
    }


    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
