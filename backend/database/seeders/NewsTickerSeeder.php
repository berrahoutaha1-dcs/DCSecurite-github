<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\NewsTicker;

class NewsTickerSeeder extends Seeder
{
    public function run(): void
    {
        $defaultNews = [
            "New AI-Powered Threat Detection System Launched",
            "DCSecurite Wins Cybersecurity Excellence Award 2024",
            "Latest DevOpSec Tools Now Available",
            "Global Security Conference - Join Us Next Month",
            "Zero-Day Vulnerability Protection Enhanced",
            "Enterprise Security Solutions Starting at 50% Off",
        ];

        foreach ($defaultNews as $index => $content) {
            NewsTicker::firstOrCreate(
                ['content' => $content],
                [
                    'is_active' => true,
                    'order' => $index + 1
                ]
            );
        }
    }
}
