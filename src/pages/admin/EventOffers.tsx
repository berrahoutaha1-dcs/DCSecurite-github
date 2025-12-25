import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Calendar, Clock, DollarSign, Building, ChevronLeft } from "lucide-react";
import { API_BASE_URL } from "../../config";

interface EventOffer {
    id: number;
    full_name: string;
    organization_type: string;
    organization_name: string;
    email: string;
    phone: string;
    country: string;
    referrer: string | null;
    budget: string;
    proposition: string;
    ip_address: string;
    status: 'pending' | 'reviewed' | 'contacted' | 'rejected' | 'approved';
    created_at: string;
}

export function EventOffersPage() {
    const [offers, setOffers] = useState<EventOffer[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedOffer, setSelectedOffer] = useState<EventOffer | null>(null);
    const [showMobileDetail, setShowMobileDetail] = useState(false);

    useEffect(() => {
        fetchOffers();
    }, []);

    const fetchOffers = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`${API_BASE_URL}/api/admin/event-offers`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: "application/json",
                },
            });

            if (response.ok) {
                const data = await response.json();
                setOffers(data);
            }
        } catch (error) {
            console.error("Failed to fetch offers", error);
            toast.error("Failed to load event offers");
        } finally {
            setLoading(false);
        }
    };

    const updateStatus = async (id: number, status: string) => {
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`${API_BASE_URL}/api/admin/event-offers/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                    Accept: "application/json",
                },
                body: JSON.stringify({ status }),
            });

            if (response.ok) {
                toast.success("Status updated");
                fetchOffers();
                if (selectedOffer && selectedOffer.id === id) {
                    setSelectedOffer({ ...selectedOffer, status: status as any });
                }
            } else {
                toast.error("Failed to update status");
            }
        } catch (error) {
            console.error("Error updating status", error);
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'pending': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
            case 'reviewed': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
            case 'contacted': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400';
            case 'approved': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
            case 'rejected': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
            default: return 'bg-slate-100 text-slate-800';
        }
    };

    if (loading) return <div className="p-8 text-center text-slate-500">Loading offers...</div>;

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Event Offers</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* List */}
                <div className={`${showMobileDetail ? 'hidden lg:flex' : 'flex'} lg:col-span-1 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden flex-col h-[600px]`}>
                    <div className="p-4 border-b border-slate-200 dark:border-slate-800 shrink-0">
                        <h2 className="font-semibold text-slate-900 dark:text-white">Inbox ({offers.length})</h2>
                    </div>
                    <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-700">
                        {offers.length === 0 ? (
                            <div className="p-8 text-center text-slate-500">No offers found.</div>
                        ) : (
                            <div className="divide-y divide-slate-100 dark:divide-slate-800">
                                {offers.map((offer) => (
                                    <button
                                        key={offer.id}
                                        onClick={() => {
                                            setSelectedOffer(offer);
                                            setShowMobileDetail(true);
                                        }}
                                        className={`w-full text-left p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors ${selectedOffer?.id === offer.id ? 'bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 shrink-0' : 'border-l-4 border-transparent'}`}
                                    >
                                        <div className="flex justify-between items-start mb-1">
                                            <span className={`px-2 py-0.5 rounded text-xs font-medium ${getStatusColor(offer.status)}`}>
                                                {offer.status.toUpperCase()}
                                            </span>
                                            <span className="text-xs text-slate-500">
                                                {new Date(offer.created_at).toLocaleDateString()}
                                            </span>
                                        </div>
                                        <h3 className="font-medium text-slate-900 dark:text-white truncate">
                                            {offer.full_name}
                                        </h3>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 truncate">
                                            {offer.organization_name}
                                        </p>
                                        <p className="text-xs text-slate-500 truncate mt-1">
                                            {offer.organization_type}
                                        </p>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Detail View */}
                <div className={`${!showMobileDetail ? 'hidden lg:block' : 'block'} lg:col-span-2 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col h-[600px]`}>
                    {selectedOffer ? (
                        <>
                            {/* Mobile Back Button */}
                            <div className="lg:hidden p-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-2">
                                <button
                                    onClick={() => setShowMobileDetail(false)}
                                    className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white flex items-center gap-1 text-sm font-medium"
                                >
                                    <ChevronLeft className="w-4 h-4" />
                                    Back to Inbox
                                </button>
                            </div>

                            <div className="p-6 space-y-8 overflow-y-auto flex-1">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                                            {selectedOffer.full_name}
                                        </h2>
                                        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-slate-600 dark:text-slate-400 text-sm">
                                            <span className="flex items-center gap-1"><Mail className="w-4 h-4" /> {selectedOffer.email}</span>
                                            <span className="flex items-center gap-1"><Phone className="w-4 h-4" /> {selectedOffer.phone}</span>
                                            <span className="flex items-center gap-1 opacity-70"><Clock className="w-4 h-4" /> IP: {selectedOffer.ip_address || 'N/A'}</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <select
                                            value={selectedOffer.status}
                                            onChange={(e) => updateStatus(selectedOffer.id, e.target.value)}
                                            className="bg-slate-100 dark:bg-slate-800 border-none rounded-lg px-3 py-2 text-sm font-medium"
                                        >
                                            <option value="pending">Pending</option>
                                            <option value="reviewed">Reviewed</option>
                                            <option value="contacted">Contacted</option>
                                            <option value="approved">Approved</option>
                                            <option value="rejected">Rejected</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                                    <div>
                                        <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Organization</span>
                                        <div className="flex items-center gap-2">
                                            <Building className="w-4 h-4 text-slate-400" />
                                            <p className="text-slate-900 dark:text-white font-medium">{selectedOffer.organization_name}</p>
                                        </div>
                                        <p className="text-xs text-slate-500">{selectedOffer.organization_type}</p>
                                    </div>
                                    <div>
                                        <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Budget</span>
                                        <div className="flex items-center gap-2">
                                            <DollarSign className="w-4 h-4 text-slate-400" />
                                            <p className="text-slate-900 dark:text-white font-medium">{selectedOffer.budget}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Location</span>
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4 text-slate-400" />
                                            <p className="text-slate-900 dark:text-white font-medium">{selectedOffer.country}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Submitted</span>
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4 text-slate-400" />
                                            <p className="text-slate-900 dark:text-white font-medium">{new Date(selectedOffer.created_at).toLocaleString()}</p>
                                        </div>
                                    </div>
                                </div>

                                {selectedOffer.referrer && (
                                    <div>
                                        <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Referrer</span>
                                        <p className="text-slate-900 dark:text-white">{selectedOffer.referrer}</p>
                                    </div>
                                )}

                                <div>
                                    <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-3">Proposition</h3>
                                    <div className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800/30 text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-wrap">
                                        {selectedOffer.proposition}
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="h-full flex items-center justify-center text-slate-400">
                            Select an offer to view details
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
