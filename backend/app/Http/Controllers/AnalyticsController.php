<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\AnalyticsVisit;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class AnalyticsController extends Controller
{
    public function track(Request $request)
    {
        $request->validate([
            'source' => 'required|in:website,ai',
        ]);

        $ip = $request->ip();
        
        // Simple throttling: Don't record same IP/Source combo within 5 minutes to avoid spam from reloads
        $lastVisit = AnalyticsVisit::where('ip_address', $ip)
            ->where('source', $request->source)
            ->where('created_at', '>=', now()->subMinutes(5))
            ->first();

        if ($lastVisit) {
            return response()->json(['message' => 'Visit already recorded']);
        }

        // Attempt IP to Country resolution
        // In production/hosting, this works better. Localhost is usually 127.0.0.1
        $country = 'Unknown';
        $city = 'Unknown';

        // Mock for localhost development
        if ($ip === '127.0.0.1' || $ip === '::1') {
             $country = 'Algeria'; // Mock
             $city = 'Algiers'; // Mock
        } else {
            try {
                // Use a free public API with short timeout
                $response = Http::timeout(2)->get("http://ip-api.com/json/{$ip}");
                if ($response->successful()) {
                    $data = $response->json();
                    if ($data['status'] === 'success') {
                        $country = $data['country'] ?? 'Unknown';
                        $city = $data['city'] ?? 'Unknown';
                    }
                }
            } catch (\Exception $e) {
                // Ignore failures to avoid slowing down request
            }
        }

        AnalyticsVisit::create([
            'ip_address' => $ip,
            'country'    => $country,
            'city'       => $city,
            'source'     => $request->source,
        ]);

        return response()->json(['status' => 'recorded']);
    }

    public function stats()
    {
        // 1. Total counts
        $totalWebsite = AnalyticsVisit::where('source', 'website')->count();
        $totalAI = AnalyticsVisit::where('source', 'ai')->count();

        // 1b. Weekly Growth (Website)
        $startOfWeek = now()->startOfWeek();
        $thisWeekCount = AnalyticsVisit::where('source', 'website')
            ->where('created_at', '>=', $startOfWeek)
            ->count();
        
        $lastWeekStart = now()->subWeek()->startOfWeek();
        $lastWeekEnd = now()->subWeek()->endOfWeek();
        $lastWeekCount = AnalyticsVisit::where('source', 'website')
            ->whereBetween('created_at', [$lastWeekStart, $lastWeekEnd])
            ->count();

        $growthPercentage = 0;
        if ($lastWeekCount > 0) {
            $growthPercentage = (($thisWeekCount - $lastWeekCount) / $lastWeekCount) * 100;
        } else if ($thisWeekCount > 0) {
             $growthPercentage = 100; // First week growth
        }

        // 2. Countries breakdown (Website)
        $websiteCountries = AnalyticsVisit::where('source', 'website')
            ->select('country', DB::raw('count(*) as count'))
            ->groupBy('country')
            ->orderByDesc('count')
            ->get();

        // 3. Countries breakdown (AI)
        $aiCountries = AnalyticsVisit::where('source', 'ai')
            ->select('country', DB::raw('count(*) as count'))
            ->groupBy('country')
            ->orderByDesc('count')
            ->get();

        // 4. Recent Logs
        $recentLogs = AnalyticsVisit::latest()
            ->take(50)
            ->get()
            ->map(function ($log) {
                return [
                    'id' => $log->id,
                    'ip' => $log->ip_address, // In real admin, maybe mask last octet for privacy if needed
                    'country' => $log->country,
                    'city' => $log->city,
                    'source' => $log->source,
                    'time' => $log->created_at->diffForHumans(),
                    'date' => $log->created_at->format('Y-m-d H:i:s'),
                ];
            });

        return response()->json([
            'overview' => [
                'total_website' => $totalWebsite,
                'total_ai' => $totalAI,
                'growth_percentage' => round($growthPercentage, 1),
            ],
            'geo_website' => $websiteCountries,
            'geo_ai' => $aiCountries,
            'logs' => $recentLogs
        ]);
    }
}
