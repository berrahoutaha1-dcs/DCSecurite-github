import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Home, ChevronRight, RotateCw, Square, ArrowLeft, Info } from "lucide-react";

interface Payment {
    id: string;
    description: string;
    invoiceId: string;
    service: string;
    title: string;
    paidAt: string;
    amount: string;
    // Additional fields for details view (mocked or inferred)
    periodStart?: string;
    periodEnd?: string;
    billingFrequency?: string;
}

export function ClientPaymentHistory() {
    const [activeTab, setActiveTab] = useState<'history' | 'refund'>('history');
    const [selectedPayment, setSelectedPayment] = useState<Payment | null>(null);

    // Mock Data
    const payments: Payment[] = [
        {
            id: 'H_33714910',
            description: 'Payment ID',
            invoiceId: 'HCY-19544129',
            service: 'KVM 1',
            title: 'srv1166179.hstgr.cloud',
            paidAt: '2025-11-30',
            amount: 'US$ 7.99',
            periodStart: '2025-11-30',
            periodEnd: '2025-12-30',
            billingFrequency: 'billed every month'
        },
        {
            id: 'H_33306840',
            description: 'Payment ID',
            invoiceId: 'HCY-19302915',
            service: '.COM Domain',
            title: 'moussir.com',
            paidAt: '2025-11-22',
            amount: 'US$ 10.19',
            periodStart: '2025-11-22',
            periodEnd: '2026-11-22',
            billingFrequency: 'billed every year'
        },
        {
            id: 'H_30303190',
            description: 'Payment ID',
            invoiceId: 'HCY-17510710',
            service: 'KVM 2',
            title: 'srv1027105.hstgr.cloud',
            paidAt: '2025-09-24',
            amount: 'US$ 9.99',
            periodStart: '2025-09-24',
            periodEnd: '2025-10-24',
            billingFrequency: 'billed every month'
        },
        {
            id: 'H_27378831',
            description: 'Payment ID',
            invoiceId: 'HCY-15823581',
            service: 'Domain Transfer',
            title: 'quickcargoo.com',
            paidAt: '2025-07-24',
            amount: 'US$ 10.19',
            periodStart: '2025-07-24',
            periodEnd: '2026-07-24',
            billingFrequency: 'billed every year'
        },
        {
            id: 'H_26408272',
            description: 'Payment ID',
            invoiceId: 'HCY-15270746',
            service: '.COM Domain',
            title: 'storadoo.com',
            paidAt: '2025-07-02',
            amount: 'US$ 10.19',
            periodStart: '2025-07-02',
            periodEnd: '2026-07-02',
            billingFrequency: 'billed every year'
        },
        {
            id: 'H_25482586',
            description: 'Payment ID',
            invoiceId: 'HCY-14749482',
            service: '.COM Domain',
            title: 'wataikimob.com',
            paidAt: '2025-06-11',
            amount: 'US$ 9.15',
            periodStart: '2025-06-11',
            periodEnd: '2026-06-11',
            billingFrequency: 'billed every year'
        }
    ];

    if (selectedPayment) {
        return (
            <div className="relative min-h-[calc(100vh-100px)]">
                <div className="space-y-6 max-w-6xl mx-auto">
                    {/* Details Header */}
                    <div className="flex items-center justify-between py-2">
                        <button
                            onClick={() => setSelectedPayment(null)}
                            className="flex items-center gap-2 font-bold text-slate-900 dark:text-white hover:text-purple-600 transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            Back
                        </button>
                        <h1 className="text-2xl font-bold text-slate-900 dark:text-white absolute left-1/2 -translate-x-1/2">
                            Payment details
                        </h1>
                        <div className="w-10"></div> {/* Spacer for centering */}
                    </div>

                    {/* Details Card */}
                    <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-8 min-h-[500px] relative">
                        <div className="mb-8">
                            <span className="text-sm font-bold text-slate-900 dark:text-white block mb-1">
                                Payment ID: <span className="font-bold">{selectedPayment.id}</span>
                            </span>
                        </div>

                        {/* Services Table */}
                        <div className="border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden mb-8">
                            <table className="w-full text-left">
                                <thead className="bg-slate-50 dark:bg-slate-950/50 text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                                    <tr>
                                        <th className="px-6 py-4">Services</th>
                                        <th className="px-6 py-4 text-center">Period</th>
                                        <th className="px-6 py-4 text-right">Amount</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 bg-white dark:bg-slate-900">
                                    <tr>
                                        <td className="px-6 py-6">
                                            <div className="text-sm text-slate-600 dark:text-slate-300">
                                                <span className="font-medium text-slate-900 dark:text-white">{selectedPayment.title}</span>
                                                {' - '}
                                                {selectedPayment.service} ({selectedPayment.billingFrequency || 'billed every month'})
                                            </div>
                                        </td>
                                        <td className="px-6 py-6 text-center text-sm text-slate-600 dark:text-slate-400">
                                            {selectedPayment.periodStart || selectedPayment.paidAt} - {selectedPayment.periodEnd || 'N/A'}
                                        </td>
                                        <td className="px-6 py-6 text-right font-bold text-slate-900 dark:text-white text-sm">
                                            {selectedPayment.amount}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Summary Section */}
                        <div className="w-full max-w-md ml-auto bg-slate-50 dark:bg-slate-950/50 rounded-xl p-6">
                            <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-4">Payment summary</h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between text-slate-600 dark:text-slate-400">
                                    <span className="font-bold">Subtotal</span>
                                    <span className="font-medium text-slate-900 dark:text-white">{selectedPayment.amount}</span>
                                </div>
                                <div className="flex justify-between text-slate-600 dark:text-slate-400">
                                    <div className="flex items-center gap-1">
                                        <span className="font-bold">Taxes & Fees</span>
                                        <Info className="w-3 h-3 text-slate-400" />
                                    </div>
                                    <span className="font-medium text-slate-900 dark:text-white">US$ 0.00</span>
                                </div>
                                <div className="pt-3 mt-3 border-t border-slate-200 dark:border-slate-800 flex justify-between text-base">
                                    <span className="font-bold text-slate-900 dark:text-white">Total</span>
                                    <span className="font-bold text-slate-900 dark:text-white">{selectedPayment.amount}</span>
                                </div>
                            </div>
                        </div>

                        {/* Download Invoice Button */}
                        <div className="mt-8 text-right">
                            <button className="px-4 py-2 text-sm font-bold text-[#7c3aed] border border-[#7c3aed] rounded-lg hover:bg-purple-50 dark:text-[#a78bfa] dark:border-[#a78bfa] dark:hover:bg-slate-800 transition-colors">
                                Download Invoice
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
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                        <h1 className="text-2xl font-bold text-slate-900 dark:text-white mr-4">Payment History</h1>
                        <Link to="/client" className="hover:text-blue-600 transition-colors">
                            <Home className="w-4 h-4" />
                        </Link>
                        <span>-</span>
                        <span className="text-slate-500">Billing</span>
                        <span>-</span>
                        <span className="text-slate-500">Payment History</span>
                        <span>-</span>
                        <span className="text-slate-500">Paid</span>
                    </div>
                </div>

                {/* Main Content Card */}
                <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden min-h-[600px]">

                    {/* Tabs */}
                    <div className="flex border-b border-slate-200 dark:border-slate-800 px-6 pt-6">
                        <button
                            onClick={() => setActiveTab('history')}
                            className={`pb-4 px-4 text-sm font-bold border-b-2 transition-colors ${activeTab === 'history'
                                ? 'border-[#7c3aed] text-[#7c3aed] dark:text-[#a78bfa] dark:border-[#a78bfa]'
                                : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
                                }`}
                        >
                            Payment history
                        </button>
                    </div>

                    {/* Toolbar */}
                    <div className="p-6 flex items-center gap-4">
                        <button className="p-2 text-[#7c3aed] hover:bg-purple-50 rounded-lg dark:text-[#a78bfa] dark:hover:bg-slate-800 transition-colors">
                            <Square className="w-6 h-6" strokeWidth={2} />
                            {/* Using Square to simulate the unchecked "select all" state from screenshot */}
                        </button>

                        <div className="relative flex-1">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full pl-12 pr-4 py-3 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg outline-none focus:ring-2 focus:ring-purple-500 transition-all text-slate-600 dark:text-slate-300 placeholder:text-slate-400"
                            />
                        </div>

                        <button className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
                            <RotateCw className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                {payments.map((payment) => (
                                    <tr
                                        key={payment.id}
                                        className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group cursor-pointer"
                                        onClick={() => setSelectedPayment(payment)}
                                    >
                                        <td className="px-6 py-4 align-middle w-16" onClick={(e) => e.stopPropagation()}>
                                            <button className="p-2 text-[#7c3aed] opacity-60 hover:opacity-100 dark:text-[#a78bfa]">
                                                <Square className="w-6 h-6" strokeWidth={2} />
                                            </button>
                                        </td>

                                        <td className="px-4 py-6 align-middle">
                                            <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">Payment ID</div>
                                            <div className="font-bold text-slate-900 dark:text-white">{payment.id}</div>
                                        </td>

                                        <td className="px-4 py-6 align-middle">
                                            <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">Invoice ID</div>
                                            <div className="font-bold text-slate-900 dark:text-white">{payment.invoiceId}</div>
                                        </td>

                                        <td className="px-4 py-6 align-middle">
                                            <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">Service</div>
                                            <div className="text-slate-700 dark:text-slate-300 font-medium">{payment.service}</div>
                                        </td>

                                        <td className="px-4 py-6 align-middle">
                                            <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">Title</div>
                                            <div className="text-slate-700 dark:text-slate-300">{payment.title}</div>
                                        </td>

                                        <td className="px-4 py-6 align-middle">
                                            <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">Paid at</div>
                                            <div className="text-slate-600 dark:text-slate-400">{payment.paidAt}</div>
                                        </td>

                                        <td className="px-4 py-6 align-middle">
                                            <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">Amount</div>
                                            <div className="font-bold text-slate-900 dark:text-white">{payment.amount}</div>
                                        </td>

                                        <td className="px-6 py-6 align-middle text-right">
                                            <button
                                                className="p-2 text-[#7c3aed] hover:bg-purple-50 rounded-full dark:text-[#a78bfa] dark:hover:bg-slate-800 transition-colors"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setSelectedPayment(payment);
                                                }}
                                            >
                                                <ChevronRight className="w-5 h-5" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
