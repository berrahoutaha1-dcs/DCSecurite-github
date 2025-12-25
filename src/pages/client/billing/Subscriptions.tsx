import { useState } from "react";
import { Search, Home, ChevronRight, ArrowDown, X, CheckCircle, Copy } from "lucide-react";
import { Link } from "react-router-dom";
import { RenewSubscriptionModal } from "./RenewSubscriptionModal";

export interface Subscription {
    id: string;
    name: string;
    hostname: string;
    expires: string;
    autoRenewal: boolean;
    status: 'Active' | 'Inactive';
    price: string;
    subscriptionId: string;
    billingPeriod: string;
}

export function ClientSubscriptions() {
    const [selectedSub, setSelectedSub] = useState<Subscription | null>(null);
    const [renewingSub, setRenewingSub] = useState<Subscription | null>(null);

    // Mock data in state
    const [subscriptions, setSubscriptions] = useState<Subscription[]>([
        {
            id: '1',
            name: 'KVM 1',
            hostname: 'srv1166179.hstgr.cloud',
            expires: '2025-12-30',
            autoRenewal: true,
            status: 'Active',
            price: 'US$ 13.99',
            subscriptionId: 'AzymVpV431MFh6efq',
            billingPeriod: '1 month'
        },
        {
            id: '2',
            name: 'Managed Firewall',
            hostname: 'fw-02.dcsecurite.com',
            expires: '2026-03-15',
            autoRenewal: true,
            status: 'Active',
            price: 'US$ 29.99',
            subscriptionId: 'BbxmVpV438MFh9xyz',
            billingPeriod: '1 year'
        }
    ]);

    const handleToggleRenewal = (id: string) => {
        const updatedSubs = subscriptions.map(sub => {
            if (sub.id === id) {
                return { ...sub, autoRenewal: !sub.autoRenewal };
            }
            return sub;
        });
        setSubscriptions(updatedSubs);

        // Update selectedSub if it's the one being toggled
        if (selectedSub && selectedSub.id === id) {
            setSelectedSub({ ...selectedSub, autoRenewal: !selectedSub.autoRenewal });
        }
    };

    return (
        <div className="relative min-h-[calc(100vh-100px)]">
            <div className="space-y-6 max-w-6xl mx-auto">
                {/* Header section with Breadcrumbs */}
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                        <h1 className="text-2xl font-bold text-slate-900 dark:text-white mr-4">Subscriptions</h1>
                        <Link to="/client" className="hover:text-blue-600 transition-colors">
                            <Home className="w-4 h-4" />
                        </Link>
                        <span>-</span>
                        <span className="text-slate-500">Billing</span>
                        <span>-</span>
                        <span className="text-slate-500">Subscriptions</span>
                    </div>
                </div>

                {/* Main Content Card */}
                <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden min-h-[400px]">

                    {/* Search Bar */}
                    <div className="p-6">
                        <div className="relative w-full">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full pl-12 pr-4 py-3 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg outline-none focus:ring-2 focus:ring-purple-500 transition-all text-slate-600 dark:text-slate-300 placeholder:text-slate-400"
                            />
                        </div>
                    </div>

                    {/* Table Content */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-slate-200 dark:border-slate-800 text-sm font-bold text-slate-900 dark:text-white">
                                    <th className="px-8 py-4 font-bold cursor-pointer hover:text-purple-600 transition-colors group">
                                        <div className="flex items-center gap-1">
                                            Subscription <ArrowDown className="w-4 h-4 text-slate-400 group-hover:text-purple-600" />
                                        </div>
                                    </th>
                                    <th className="px-8 py-4 font-bold cursor-pointer hover:text-purple-600 transition-colors group whitespace-nowrap w-48">
                                        <div className="flex items-center gap-1">
                                            Expiration date <ArrowDown className="w-4 h-4 text-slate-400 group-hover:text-purple-600" />
                                        </div>
                                    </th>
                                    <th className="px-8 py-4 font-bold cursor-pointer hover:text-purple-600 transition-colors group whitespace-nowrap w-48">
                                        <div className="flex items-center gap-1">
                                            Auto-renewal <ArrowDown className="w-4 h-4 text-slate-400 group-hover:text-purple-600" />
                                        </div>
                                    </th>
                                    <th className="px-8 py-4 w-24"></th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                {subscriptions.map((sub) => (
                                    <tr key={sub.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                                        <td className="px-8 py-6 align-middle">
                                            <div className="font-semibold text-slate-900 dark:text-white">{sub.name}</div>
                                            <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">{sub.hostname}</div>
                                        </td>
                                        <td className="px-8 py-6 align-middle">
                                            <div className="text-slate-600 dark:text-slate-300 font-medium">
                                                {sub.expires}
                                            </div>
                                        </td>
                                        <td className="px-8 py-6 align-middle">
                                            <div className="inline-flex px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-wide">
                                                {sub.autoRenewal ? 'On' : 'Off'}
                                            </div>
                                        </td>
                                        <td className="px-8 py-6 align-middle text-right">
                                            <div className="flex items-center justify-end gap-4">
                                                <button
                                                    onClick={() => setRenewingSub(sub)}
                                                    className="px-6 py-2 font-bold rounded-lg transition-all shadow-md shadow-slate-200/50 dark:shadow-none hover:shadow-lg whitespace-nowrap border border-transparent"
                                                    style={{ backgroundColor: '#181818', color: '#ffffff' }}
                                                >
                                                    Renew
                                                </button>
                                                <button
                                                    onClick={() => setSelectedSub(sub)}
                                                    className="text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full"
                                                >
                                                    <ChevronRight className="w-5 h-5" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Side Drawer Overlay */}
            {selectedSub && (
                <div className="fixed inset-0 z-50 flex justify-end">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm transition-opacity"
                        onClick={() => setSelectedSub(null)}
                    />

                    {/* Panel */}
                    <div className="relative w-full max-w-lg bg-white dark:bg-[#0a0a0a] h-full shadow-2xl p-8 overflow-y-auto border-l border-slate-200 dark:border-slate-800 animate-in slide-in-from-right duration-300">
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedSub(null)}
                            className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-8">Subscription details</h2>

                        {/* Title Section */}
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{selectedSub.name}</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{selectedSub.hostname}</p>
                        </div>

                        {/* Details List */}
                        <div className="space-y-6">
                            {/* Status */}
                            <div className="flex items-center justify-between py-2">
                                <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Status</span>
                                <div className="flex items-center gap-2 text-emerald-500 font-medium text-sm">
                                    <CheckCircle className="w-4 h-4" />
                                    Active
                                </div>
                            </div>

                            {/* Expiration */}
                            <div className="flex items-center justify-between py-2">
                                <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Expiration date</span>
                                <span className="text-sm font-medium text-slate-900 dark:text-white">{selectedSub.expires}</span>
                            </div>

                            {/* Price */}
                            <div className="flex items-center justify-between py-2">
                                <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Renewal price (including tax)</span>
                                <span className="text-sm font-medium text-slate-900 dark:text-white">{selectedSub.price}</span>
                            </div>

                            {/* Subscription ID */}
                            <div className="flex items-center justify-between py-2">
                                <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Subscription ID</span>
                                <div className="flex items-center gap-2">
                                    <span className="text-sm font-medium text-slate-900 dark:text-white font-mono">{selectedSub.subscriptionId}</span>
                                    <Copy className="w-4 h-4 cursor-pointer" style={{ color: '#007fff' }} />
                                </div>
                            </div>

                            <div className="h-px bg-slate-100 dark:bg-slate-800 my-4" />

                            {/* Period */}
                            <div className="flex items-center justify-between py-2">
                                <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Next billing period</span>
                                <span className="text-sm font-medium text-slate-900 dark:text-white">{selectedSub.billingPeriod}</span>
                            </div>
                        </div>

                        {/* Upgrade Link */}
                        <div className="mt-8 text-sm">
                            <span className="text-slate-500 dark:text-slate-400">Need more resources? </span>
                            <a href="#" className="hover:underline" style={{ color: '#007fff' }}>Upgrade to a higher plan.</a>
                        </div>

                        {/* Footer Actions */}
                        <div className="mt-12 flex items-center justify-end gap-3">
                            <button
                                onClick={() => handleToggleRenewal(selectedSub.id)}
                                className="px-4 py-2 text-sm font-bold rounded-lg transition-all shadow-md shadow-slate-200/50 dark:shadow-none hover:shadow-lg whitespace-nowrap border border-transparent"
                                style={{ backgroundColor: '#181818', color: '#ffffff' }}
                            >
                                {selectedSub.autoRenewal ? 'Disable auto-renewal' : 'Enable auto-renewal'}
                            </button>
                            <button
                                onClick={() => setRenewingSub(selectedSub)}
                                className="px-6 py-2 text-sm font-bold rounded-lg transition-all shadow-md shadow-slate-200/50 dark:shadow-none hover:shadow-lg whitespace-nowrap border border-transparent"
                                style={{ backgroundColor: '#181818', color: '#ffffff' }}
                            >
                                Renew
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <RenewSubscriptionModal
                isOpen={!!renewingSub}
                onClose={() => setRenewingSub(null)}
                subscription={renewingSub}
            />
        </div>
    );
}
