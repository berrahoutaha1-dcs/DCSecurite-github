import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../../components/ui/select";
import { Info, X } from "lucide-react";

interface Subscription {
    id: string;
    name: string;
    hostname: string;
    expires: string;
    autoRenewal: boolean;
    status: "Active" | "Inactive";
    price: string;
    subscriptionId: string;
    billingPeriod: string;
}

interface RenewSubscriptionModalProps {
    isOpen: boolean;
    onClose: () => void;
    subscription: Subscription | null;
}

export function RenewSubscriptionModal({
    isOpen,
    onClose,
    subscription,
}: RenewSubscriptionModalProps) {
    if (!isOpen || !subscription) return null;

    // Hardcoded values from screenshot logic
    const expirationDate = "2026-01-30";
    const price = subscription.price;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-[2px] transition-opacity animate-in fade-in"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div
                className="relative w-full max-w-[400px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
                style={{ maxWidth: '400px' }}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="p-6">
                    {/* Header */}
                    <div className="mb-6 text-left space-y-1">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                            Renew your {subscription.name}
                        </h2>
                        <p className="text-base text-slate-500 dark:text-slate-400">
                            Review the details and proceed to checkout
                        </p>
                    </div>

                    <div className="space-y-6">
                        {/* Period Section */}
                        <div className="p-4 border border-slate-200 rounded-xl dark:border-slate-800">
                            <label className="block text-sm font-bold text-slate-900 mb-3 dark:text-white">
                                Period
                            </label>
                            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                <Select defaultValue="1month">
                                    <SelectTrigger className="w-full sm:w-[160px] border-slate-200 rounded-lg bg-white dark:border-slate-800 dark:bg-slate-950">
                                        <SelectValue placeholder="Select period" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="1month">1 month</SelectItem>
                                        <SelectItem value="12months">12 months</SelectItem>
                                    </SelectContent>
                                </Select>
                                <span className="text-xl font-bold text-slate-900 dark:text-white text-right">
                                    {price}/mo
                                </span>
                            </div>
                        </div>

                        {/* Payment Method Section */}
                        <div>
                            <label className="block text-sm font-bold text-slate-900 mb-2 dark:text-white">
                                Payment method
                            </label>
                            <Select defaultValue="cc-5951">
                                <SelectTrigger className="w-full h-12 border-slate-200 rounded-lg pl-3 bg-white dark:border-slate-800 dark:bg-slate-950">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-[#1a1f71] text-white px-1.5 py-0.5 rounded-[2px] text-[10px] font-bold italic">
                                            VISA
                                        </div>
                                        <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                                            <span className="text-sm">Credit Card •••• 5951</span>
                                            <span className="bg-slate-100 text-slate-500 text-xs px-2 py-0.5 rounded font-medium dark:bg-slate-800">
                                                Expires 2027-03
                                            </span>
                                        </div>
                                    </div>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="cc-5951">Credit Card •••• 5951</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Details List */}
                        <div className="pt-2 space-y-3">
                            {/* Expiration Date */}
                            <div className="flex items-center justify-between text-sm">
                                <div className="flex items-center gap-1 font-bold text-slate-700 dark:text-slate-300">
                                    Expiration date
                                    <Info className="w-4 h-4 text-slate-400" />
                                </div>
                                <span className="font-medium text-slate-600 dark:text-slate-400">
                                    {expirationDate}
                                </span>
                            </div>

                            {/* Coupon Code */}
                            <div className="flex items-center gap-2 text-sm">
                                <span className="font-bold text-slate-700 dark:text-slate-300">Coupon code</span>
                                <button className="font-bold text-[#7c3aed] hover:underline dark:text-[#a78bfa]">
                                    Add
                                </button>
                            </div>

                            {/* Divider */}
                            <div className="h-px bg-slate-100 my-4 dark:bg-slate-800" />

                            {/* Subtotal */}
                            <div className="flex items-center justify-between text-sm">
                                <span className="font-bold text-slate-700 dark:text-slate-300">Subtotal</span>
                                <span className="font-medium text-slate-600 dark:text-slate-400">{price}</span>
                            </div>

                            {/* Total */}
                            <div className="flex items-center justify-between text-xl pt-2">
                                <span className="font-bold text-slate-900 dark:text-white">Total</span>
                                <span className="font-bold text-slate-900 dark:text-white">{price}</span>
                            </div>
                        </div>

                        {/* Footer / Disclaimer */}
                        <div className="text-xs text-slate-500 leading-relaxed dark:text-slate-500">
                            By checking out, you agree with our <a href="#" className="underline font-medium hover:text-slate-800 dark:hover:text-slate-300">Terms of Service</a> and confirm that you have read our <a href="#" className="underline font-medium hover:text-slate-800 dark:hover:text-slate-300">Privacy Policy</a>. You can cancel recurring payments at any time.
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center justify-end gap-4 mt-6">
                            <button
                                onClick={onClose}
                                className="px-4 py-2 text-sm font-bold text-slate-300 hover:text-white transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                className="px-6 py-3 text-sm font-bold text-white rounded-xl shadow-lg shadow-purple-500/20 hover:bg-neutral-800 transition-all transform active:scale-95"
                                style={{ backgroundColor: '#181818' }}
                            >
                                Complete payment
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
