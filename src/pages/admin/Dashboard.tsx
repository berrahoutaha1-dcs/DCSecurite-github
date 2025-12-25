import { Users, GraduationCap, CreditCard, Ticket, TrendingUp, Activity, ArrowUpRight, ArrowDownRight, DollarSign } from "lucide-react";
import { cn } from "../../lib/utils";

export function DashboardPage() {
    const stats = [
        {
            label: "Total Clients",
            value: "124",
            trend: "+12%",
            trendUp: true,
            icon: Users,
            color: "text-blue-600 dark:text-blue-400",
            bg: "bg-blue-50 dark:bg-blue-900/20",
            border: "border-blue-100 dark:border-blue-800"
        },
        {
            label: "Active Students",
            value: "1,245",
            trend: "+5%",
            trendUp: true,
            icon: GraduationCap,
            color: "text-emerald-600 dark:text-emerald-400",
            bg: "bg-emerald-50 dark:bg-emerald-900/20",
            border: "border-emerald-100 dark:border-emerald-800"
        },
        {
            label: "Monthly Revenue",
            value: "$12,450",
            trend: "+18%",
            trendUp: true,
            icon: DollarSign,
            color: "text-violet-600 dark:text-violet-400",
            bg: "bg-violet-50 dark:bg-violet-900/20",
            border: "border-violet-100 dark:border-violet-800"
        },
        {
            label: "Pending Tickets",
            value: "5",
            trend: "-2%",
            trendUp: false,
            icon: Ticket,
            color: "text-amber-600 dark:text-amber-400",
            bg: "bg-amber-50 dark:bg-amber-900/20",
            border: "border-amber-100 dark:border-amber-800"
        },
    ];

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                        Dashboard
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-1">
                        Overview of your academy's performance.
                    </p>
                </div>
                <div className="flex gap-2">
                    <div className="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg shadow-sm text-sm text-slate-600 dark:text-slate-300 flex items-center gap-2">
                        <Activity className="h-4 w-4 text-slate-400" />
                        <span>Last updated: just now</span>
                    </div>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, i) => (
                    <div
                        key={i}
                        className="group relative overflow-hidden bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm hover:shadow-md border border-slate-100 dark:border-slate-800 transition-all duration-300"
                    >
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{stat.label}</p>
                                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mt-2 tracking-tight">{stat.value}</h3>
                            </div>
                            <div className={cn("p-3 rounded-xl", stat.bg)}>
                                <stat.icon className={cn("h-6 w-6", stat.color)} />
                            </div>
                        </div>

                        <div className="mt-4 flex items-center gap-2">
                            <span className={cn(
                                "flex items-center text-sm font-medium",
                                stat.trendUp ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"
                            )}>
                                {stat.trendUp ? <ArrowUpRight className="h-4 w-4 mr-1" /> : <ArrowDownRight className="h-4 w-4 mr-1" />}
                                {stat.trend}
                            </span>
                            <span className="text-sm text-slate-400 dark:text-slate-500">vs last month</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Content Grid */}
            <div className="grid gap-6 lg:grid-cols-3">
                {/* Main Chart Area */}
                <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                            <TrendingUp className="h-5 w-5 text-slate-400" />
                            Revenue Overview
                        </h2>
                        <select className="bg-slate-50 dark:bg-slate-800 border-none text-sm rounded-lg px-3 py-1 text-slate-600 dark:text-slate-300 focus:ring-2 focus:ring-blue-500">
                            <option>This Year</option>
                            <option>Last Year</option>
                        </select>
                    </div>

                    <div className="h-80 flex items-end justify-between gap-2 text-slate-400 dark:text-slate-500 px-4 pb-2 border-b border-l border-slate-100 dark:border-slate-800/50">
                        {/* Mock Bar Chart */}
                        {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 50, 95].map((h, i) => (
                            <div key={i} className="flex flex-col items-center gap-2 group w-full">
                                <div
                                    className="w-full max-w-[40px] bg-blue-100 dark:bg-blue-900/30 rounded-t-sm relative group-hover:bg-blue-500 dark:group-hover:bg-blue-500 transition-colors duration-300"
                                    style={{ height: `${h}%` }}
                                >
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                        {h}%
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between mt-4 text-xs text-slate-400 px-2">
                        <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
                    </div>
                </div>

                {/* Recent Activity / Side Panel */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 p-6">
                    <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">Recent Activity</h2>
                    <div className="space-y-6">
                        {[
                            { title: "New Client Registered", time: "2 hours ago", desc: "Sophia Williams joined", dot: "bg-blue-500" },
                            { title: "Subscription Renewed", time: "4 hours ago", desc: "Pro Plan - Monthly", dot: "bg-emerald-500" },
                            { title: "New Assignment", time: "5 hours ago", desc: "Cybersecurity Basics", dot: "bg-violet-500" },
                            { title: "Ticket Resolved", time: "1 day ago", desc: "Login issue fixed", dot: "bg-slate-400" },
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4 relative">
                                {i !== 3 && <div className="absolute left-2 top-8 bottom-[-24px] w-0.5 bg-slate-100 dark:bg-slate-800" />}
                                <div className={cn("h-4 w-4 rounded-full mt-1 shrink-0 ring-4 ring-white dark:ring-slate-900", item.dot)} />
                                <div>
                                    <h4 className="text-sm font-medium text-slate-900 dark:text-white">{item.title}</h4>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{item.desc}</p>
                                    <span className="text-[10px] text-slate-400 block mt-1">{item.time}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="w-full mt-6 py-2 text-sm text-center text-blue-600 dark:text-blue-400 font-medium hover:bg-blue-50 dark:hover:bg-blue-900/10 rounded-lg transition-colors">
                        View All Activity
                    </button>
                </div>
            </div>
        </div>
    );
}
