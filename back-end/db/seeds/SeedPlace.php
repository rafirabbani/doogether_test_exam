<?php


use Phinx\Seed\AbstractSeed;

class SeedPlace extends AbstractSeed
{
    /**
     * Run Method.
     *
     * Write your database seeder using this method.
     *
     * More information on writing seeders is available here:
     * http://docs.phinx.org/en/latest/seeding.html
     */

    public function run()
    {
        $faker = Faker\Factory::create('id_ID');
        $name = ['GR8 Gym', 'Astro Fitness Center', 'Eagle Muay Thai', 'Gizmodo Studio', 'Audy Gym', 'Doo Dance Studio',
                 'Faze Gym & Fitness Center', 'Blin Boxing Gym', 'Feel Well Space', 'X Fit', 'Movin Studio', 
                 'Zapdos Fitness Center', 'GRMN Dance Studio', 'Being Healthy', 'GO!!! Studio'];
        $type = ['Barre', 'Body Workout', 'Bootcamp', 'Boxing', 'Dance', 'Martial Art', 'Muay Thai', 'Others', 'Pilates',
                 'Piloxing', 'Poundfit', 'Strength & Conditioning', 'TRX', 'Yoga', 'Zumba'];         
        for ($i = 0; $i < 15; $i ++) {
            $data [$i] = 
            [
                'place_name'        => $name[$i],
                'place_address'     => $faker ->address,
                'place_region'      => $faker ->city,
                'place_price'       => $faker ->numberBetween($min = 100000, $max = 500000),
                'place_open'        => $faker ->time($format = 'H:i:s', $max = '12:00:00'),
                'place_close'       => $faker ->time($format = 'H:i:s', $max = '24:00:00'),
                'place_type'        => $type[random_int(0, 14)],
            ];
        }
        $post = $this ->table('place');
        $post ->insert($data)
              ->save();        
    }
}
