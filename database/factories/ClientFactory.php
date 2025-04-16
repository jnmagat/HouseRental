<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class ClientFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'f_name' => $this->faker->firstName,
            'l_name'  => $this->faker->lastName,
            'age' => $this->faker->numberBetween(18, 60),
            'room_id' => $this->faker->numberBetween(1, 10),
            'email' => $this->faker->safeEmail,
        ];
    }
}
