import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { Globe, Users, Activity, Router, Calendar, MapPin, Monitor, Bot } from 'lucide-react';
import { API_BASE_URL } from "../../config";

interface Stats {
    overview: {
        total_website: number;
        total_ai: number;
        growth_percentage?: number;
    };
    geo_website: { country: string; count: number }[];
    geo_ai: { country: string; count: number }[];
    logs: {
        id: number;
        ip: string;
        country: string;
        city: string;
        source: string;
        time: string;
        date: string;
    }[];
}

export const AnalyticsDashboard = () => {
    const [stats, setStats] = useState<Stats | null>(null);
    const [loading, setLoading] = useState(true);
    const [isRefreshing, setIsRefreshing] = useState(false);

    const fetchStats = async () => {
        setIsRefreshing(true);
        try {
            const token = localStorage.getItem('token');
            const res = await fetch(`${API_BASE_URL}/api/admin/analytics`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            if (res.ok) {
                const data = await res.json();
                setStats(data);
            }
        } catch (error) {
            console.error("Failed to fetch analytics", error);
        } finally {
            setLoading(false);
            setIsRefreshing(false);
        }
    };

    // ... (in JSX)
    <button
        onClick={fetchStats}
        disabled={isRefreshing}
        className={`text-xs flex items-center gap-2 ${isRefreshing ? "text-blue-500/50 cursor-wait" : "text-blue-400 hover:text-blue-300"}`}
    >
        {isRefreshing && <span className="w-3 h-3 border-2 border-current border-t-transparent rounded-full animate-spin" />}
        {isRefreshing ? "Refreshing..." : "Refresh Data"}
    </button>

    useEffect(() => {
        fetchStats();
        // Refresh every 30 seconds
        const interval = setInterval(fetchStats, 30000);
        return () => clearInterval(interval);
    }, []);

    if (loading) return <div className="p-8 text-white">Loading Analytics...</div>;
    if (!stats) return <div className="p-8 text-white">Failed to load data.</div>;

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                    <Activity className="w-5 h-5 md:w-6 md:h-6 text-blue-500" />
                    Live Analytics Center
                </h2>
                <div className="text-xs text-white/40 flex items-center gap-2 bg-[#1A1A1A] px-3 py-1.5 rounded-full border border-[#333]">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    Real-time tracking active
                </div>
            </div>

            {/* Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-[#1A1A1A] p-5 md:p-6 rounded-xl border border-[#333]"
                >
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-blue-500/10 rounded-lg">
                            <Globe className="w-5 h-5 md:w-6 md:h-6 text-blue-500" />
                        </div>
                        <span className={`text-xs font-medium px-2 py-1 rounded bg-black/20 ${stats.overview.growth_percentage && stats.overview.growth_percentage >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                            {stats.overview.growth_percentage && stats.overview.growth_percentage > 0 ? '+' : ''}
                            {stats.overview.growth_percentage ?? 0}% this week
                        </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">{stats.overview.total_website}</h3>
                    <p className="text-white/50 text-xs md:text-sm">Total Website Visitors</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-[#1A1A1A] p-5 md:p-6 rounded-xl border border-[#333]"
                >
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-purple-500/10 rounded-lg">
                            <Bot className="w-5 h-5 md:w-6 md:h-6 text-purple-500" />
                        </div>
                        <span className="text-xs font-medium px-2 py-1 rounded bg-black/20 text-purple-400">Active Now</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">{stats.overview.total_ai}</h3>
                    <p className="text-white/50 text-xs md:text-sm">Total Eaglo AI Users</p>
                </motion.div>
            </div>

            {/* Geographic Distribution */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                <div className="bg-[#1A1A1A] rounded-xl border border-[#333] overflow-hidden">
                    <div className="p-4 border-b border-[#333] bg-[#222]">
                        <h3 className="text-white font-medium text-sm md:text-base flex items-center gap-2">
                            <Monitor className="w-4 h-4 text-blue-400" />
                            Website Traffic by Country
                        </h3>
                    </div>
                    <div className="p-4 max-h-[250px] overflow-y-auto custom-scrollbar">
                        <div className="space-y-3">
                            {stats.geo_website.length === 0 ? (
                                <p className="text-white/30 text-sm italic">No data yet</p>
                            ) : (
                                stats.geo_website.map((item, i) => (
                                    <div key={i} className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <span className="text-white/40 text-xs w-4">#{i + 1}</span>
                                            <span className="text-white/90 text-sm">{item.country}</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-16 md:w-24 h-1.5 bg-[#333] rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-blue-500 rounded-full"
                                                    style={{ width: `${(item.count / stats.overview.total_website) * 100}%` }}
                                                />
                                            </div>
                                            <span className="text-white/60 text-xs w-8 text-right">{item.count}</span>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>

                <div className="bg-[#1A1A1A] rounded-xl border border-[#333] overflow-hidden">
                    <div className="p-4 border-b border-[#333] bg-[#222]">
                        <h3 className="text-white font-medium text-sm md:text-base flex items-center gap-2">
                            <Bot className="w-4 h-4 text-purple-400" />
                            AI Usage by Country
                        </h3>
                    </div>
                    <div className="p-4 max-h-[250px] overflow-y-auto custom-scrollbar">
                        <div className="space-y-3">
                            {stats.geo_ai.length === 0 ? (
                                <p className="text-white/30 text-sm italic">No data yet</p>
                            ) : (
                                stats.geo_ai.map((item, i) => (
                                    <div key={i} className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <span className="text-white/40 text-xs w-4">#{i + 1}</span>
                                            <span className="text-white/90 text-sm">{item.country}</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-16 md:w-24 h-1.5 bg-[#333] rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-purple-500 rounded-full"
                                                    style={{ width: `${(item.count / stats.overview.total_ai) * 100}%` }}
                                                />
                                            </div>
                                            <span className="text-white/60 text-xs w-8 text-right">{item.count}</span>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Recent Logs */}
            <div className="bg-[#1A1A1A] rounded-xl border border-[#333] overflow-hidden">
                <div className="p-4 border-b border-[#333] bg-[#222] flex flex-row items-center justify-between">
                    <h3 className="text-white font-medium text-sm md:text-base flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        Recent Activity Logs
                    </h3>
                    <button
                        onClick={fetchStats}
                        disabled={isRefreshing}
                        className={`text-xs flex items-center gap-2 px-3 py-1.5 rounded-lg border border-transparent transition-colors ${isRefreshing ? "text-blue-500/50 cursor-wait bg-blue-500/5" : "text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 hover:border-blue-500/20"}`}
                    >
                        {isRefreshing && <span className="w-3 h-3 border-2 border-current border-t-transparent rounded-full animate-spin" />}
                        {isRefreshing ? "Refreshing..." : "Refresh Data"}
                    </button>
                </div>
                <div className="overflow-x-auto max-h-[400px] overflow-y-auto custom-scrollbar">
                    <table className="w-full text-left border-collapse min-w-[600px]">
                        <thead>
                            <tr className="border-b border-[#333] text-white/40 text-xs uppercase bg-[#1e1e1e] sticky top-0 z-10 backdrop-blur-sm">
                                <th className="p-3 md:p-4 font-medium bg-[#1e1e1e]">Time</th>
                                <th className="p-3 md:p-4 font-medium bg-[#1e1e1e]">Status</th>
                                <th className="p-3 md:p-4 font-medium bg-[#1e1e1e]">Location</th>
                                <th className="p-3 md:p-4 font-medium bg-[#1e1e1e]">IP Address</th>
                                <th className="p-3 md:p-4 font-medium bg-[#1e1e1e]">Source</th>
                            </tr>
                        </thead>
                        <tbody>
                            {stats.logs.map((log) => (
                                <tr key={log.id} className="border-b border-[#333]/50 hover:bg-[#252525] transition-colors bg-[#1A1A1A]">
                                    <td className="p-3 md:p-4 text-white/60 text-xs md:text-sm whitespace-nowrap">
                                        <div className="font-medium text-white/80">{log.time}</div>
                                        <div className="text-[10px] md:text-xs text-white/30">{log.date}</div>
                                    </td>
                                    <td className="p-3 md:p-4">
                                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 md:py-1 rounded-full bg-green-500/10 text-green-500 text-[10px] md:text-xs font-medium border border-green-500/20">
                                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                            Recorded
                                        </span>
                                    </td>
                                    <td className="p-3 md:p-4">
                                        <div className="flex items-center gap-2 text-white/80 text-xs md:text-sm">
                                            <MapPin className="w-3 h-3 text-white/40 shrink-0" />
                                            <span className="truncate max-w-[120px] md:max-w-none" title={`${log.city}, ${log.country}`}>
                                                {log.city !== 'Unknown' ? `${log.city}, ` : ''}{log.country}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="p-3 md:p-4 text-white/60 text-xs md:text-sm font-mono">
                                        {log.ip}
                                    </td>
                                    <td className="p-3 md:p-4">
                                        <span
                                            className={`text-[10px] md:text-xs px-2 py-0.5 md:py-1 rounded border font-medium ${log.source === 'ai'
                                                ? 'bg-purple-500/10 border-purple-500/20 text-purple-400'
                                                : 'bg-blue-500/10 border-blue-500/20 text-blue-400'
                                                }`}
                                        >
                                            {log.source === 'ai' ? 'Eaglo AI' : 'Website'}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                            {stats.logs.length === 0 && (
                                <tr>
                                    <td colSpan={5} className="p-8 text-center text-white/30">
                                        No recent activity found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
