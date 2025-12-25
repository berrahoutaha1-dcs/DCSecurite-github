import { motion } from "framer-motion";

export function ClientDashboard() {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Dashboard</h1>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                <p className="text-slate-600 dark:text-slate-400">Welcome to your client portal.</p>
            </div>
        </div>
    );
}
