<?php

namespace Database\Seeders;

use Faker\Factory; 
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder01 extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $faker = Factory::create('fr_FR');
        for ($i = 0; $i < 30; $i++) {
            User::create([
                'nom' => $faker->firstName,
                'prenom' => $faker->lastName,
                'email' => $faker->email,
                'password' => 'password',
                'telephone' => $faker->e164PhoneNumber,
                'sexe' => $faker->randomElement(['male', 'female']),
                'nationalite' => $faker->country,
                'photo' => 'https://via.placeholder.com/360x360.png',
                'role' => $faker->randomElement(['user', 'admin']),
                'adresse' => $faker->address,
                'ville' => $faker->city,
            ]);
        }
    }

}
