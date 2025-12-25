import { Home, Info, CheckCircle, ChevronRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

interface PaymentMethod {
    id: string;
    type: 'Credit Card';
    brand: 'VISA';
    last4: string;
    expiry: string;
    isDefault: boolean;
}

export function ClientPaymentMethods() {
    const [selectedMethod, setSelectedMethod] = useState<PaymentMethod | null>(null);

    const methods: PaymentMethod[] = [
        {
            id: 'pm_1',
            type: 'Credit Card',
            brand: 'VISA',
            last4: '5951',
            expiry: '2027-03',
            isDefault: true
        }
    ];

    if (selectedMethod) {
        return (
            <div className="relative min-h-[calc(100vh-100px)]">
                <div className="space-y-6 max-w-6xl mx-auto">
                    {/* Details Header */}
                    <div className="flex items-center justify-between py-2">
                        <button
                            onClick={() => setSelectedMethod(null)}
                            className="flex items-center gap-2 font-bold text-slate-900 dark:text-white hover:text-purple-600 transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            Back
                        </button>
                        <h1 className="text-2xl font-bold text-slate-900 dark:text-white absolute left-1/2 -translate-x-1/2">
                            Payment Method Details
                        </h1>
                        <div className="w-10"></div>
                    </div>

                    {/* Details Card */}
                    <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 min-h-[400px] flex flex-col justify-between">
                        <div className="p-8 space-y-8">
                            {/* Top Row: Icon + Type + Badge */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-8 bg-[#1a1f71] rounded flex items-center justify-center shrink-0">
                                    <span className="text-white text-[10px] font-bold italic">VISA</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="font-bold text-lg text-slate-900 dark:text-white">Credit Card</span>
                                    {selectedMethod.isDefault && (
                                        <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                                            Default method
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Middle Row: Card Number */}
                            <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-8">
                                <span className="text-slate-500 dark:text-slate-400 font-medium">Card number</span>
                                <span className="font-medium text-slate-900 dark:text-white">
                                    493728******{selectedMethod.last4}
                                </span>
                            </div>
                        </div>

                        {/* Bottom Row: Remove Button */}
                        <div className="p-8 border-t border-slate-100 dark:border-slate-800 text-right">
                            <button className="text-red-500 hover:text-red-600 font-bold text-sm transition-colors">
                                Remove
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="relative min-h-[calc(100vh-100px)]">
            <div className="space-y-6 max-w-6xl mx-auto">
                {/* Header section with Breadcrumbs */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                        <h1 className="text-2xl font-bold text-slate-900 dark:text-white mr-4">Payment Methods</h1>
                        <Link to="/client" className="hover:text-blue-600 transition-colors">
                            <Home className="w-4 h-4" />
                        </Link>
                        <span>-</span>
                        <span className="text-slate-500">Billing</span>
                        <span>-</span>
                        <span className="text-slate-500">Payment Methods</span>
                    </div>
                </div>

                {/* Active Methods Banner */}
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center shrink-0">
                            <CheckCircle className="w-5 h-5 text-emerald-500" />
                        </div>
                        <span className="font-medium text-slate-700 dark:text-slate-300">
                            You have <span className="font-bold text-slate-900 dark:text-white">1 active</span> payment methods
                        </span>
                    </div>
                    <button
                        className="w-full sm:w-auto px-6 py-2.5 text-white font-bold text-sm rounded-lg transition-colors shadow-lg shadow-slate-500/20 hover:bg-neutral-800"
                        style={{ backgroundColor: '#181818' }}
                    >
                        Add payment method
                    </button>
                </div>

                {/* Payment Method List Card */}
                <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
                    <div className="p-6 border-b border-slate-100 dark:border-slate-800">
                        <h2 className="text-lg font-bold text-slate-900 dark:text-white">Payment method list</h2>
                    </div>

                    <div className="divide-y divide-slate-100 dark:divide-slate-800">
                        {methods.map((method) => (
                            <div
                                key={method.id}
                                className="p-6 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer group"
                                onClick={() => setSelectedMethod(method)}
                            >
                                <div className="flex items-center gap-4 sm:gap-6">
                                    {/* Visa Icon Block */}
                                    <div className="w-12 h-8 bg-[#1a1f71] rounded flex items-center justify-center shrink-0">
                                        <span className="text-white text-[10px] font-bold italic">{method.brand}</span>
                                    </div>

                                    <div className="space-y-1">
                                        <div className="flex items-center flex-wrap gap-2 text-slate-900 dark:text-white font-bold">
                                            <span className="hidden sm:inline">493728******{method.last4}</span>
                                            <span className="sm:hidden">**** {method.last4}</span>
                                        </div>
                                        <div className="flex items-center flex-wrap gap-2 text-sm text-slate-500 dark:text-slate-400">
                                            <span>{method.type}</span>
                                            <span className="hidden sm:inline">|</span>
                                            <span>Expires {method.expiry}</span>
                                            {method.isDefault && (
                                                <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[10px] font-bold px-2 py-0.5 rounded uppercase ml-2">
                                                    Default method
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <ChevronRight className="w-5 h-5 text-[#7c3aed] opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
