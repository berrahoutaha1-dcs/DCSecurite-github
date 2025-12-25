import { useState, useEffect } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { LogIn, MoreHorizontal, Trash2, Ban, CheckCircle, AlertTriangle, X } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";


export function ClientsPage() {
    const [clients, setClients] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [clientToDelete, setClientToDelete] = useState<any>(null);
    const [deleteReason, setDeleteReason] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    // Suspend Modal State
    const [suspendModalOpen, setSuspendModalOpen] = useState(false);
    const [clientToSuspend, setClientToSuspend] = useState<any>(null);
    const [suspendReason, setSuspendReason] = useState("");
    const [isSuspending, setIsSuspending] = useState(false);

    // Activate Modal State
    const [activateModalOpen, setActivateModalOpen] = useState(false);
    const [clientToActivate, setClientToActivate] = useState<any>(null);
    const [activateReason, setActivateReason] = useState("");
    const [isActivating, setIsActivating] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        fetchClients();
    }, []);

    const fetchClients = async () => {
        try {
            const token = localStorage.getItem("token");
            if (!token) return;

            console.log("Fetching clients...");
            const response = await fetch("/api/admin/clients", {
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: "application/json",
                },
            });

            console.log("Client Fetch Status:", response.status);

            if (response.ok) {
                const data = await response.json();
                console.log("Client Data Recieved:", data);

                if (data.data && Array.isArray(data.data)) {
                    setClients(data.data);
                } else {
                    console.error("Invalid data format:", data);
                    toast.error("Invalid data format received");
                    setClients([]);
                }
            } else {
                const errorData = await response.json().catch(() => ({}));
                console.error("Fetch Error:", errorData);
                toast.error("Failed to load clients");
            }
        } catch (error) {
            console.error("Network/Client Error:", error);
            toast.error("Error loading clients");
        } finally {
            setLoading(false);
        }
    };

    const handleImpersonate = async (clientId: number, clientName: string) => {
        if (!confirm(`Are you sure you want to log in as ${clientName}?`)) return;

        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`/api/admin/impersonate/${clientId}`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: "application/json",
                },
            });

            const data = await response.json();

            if (response.ok) {
                // Save original admin token to revert later if needed (optional feature for later)
                // For now, simple switch
                localStorage.setItem("admin_token", token || "");
                localStorage.setItem("token", data.token);
                localStorage.setItem("user", JSON.stringify(data.user));

                toast.success(`Logged in as ${clientName} `);

                // Force reload/redirect to client dashboard
                window.location.href = "/client";
            } else {
                toast.error(data.message || "Impersonation failed");
            }
        } catch (error) {
            console.error(error);
            toast.error("Error impersonating user");
        }
    };

    const initiationSuspend = (client: any) => {
        if (client.status === 'suspended') {
            // Open Activate Modal
            setClientToActivate(client);
            setActivateReason("");
            setActivateModalOpen(true);
        } else {
            // Open Suspend Modal
            setClientToSuspend(client);
            setSuspendReason("");
            setSuspendModalOpen(true);
        }
    }

    // New Action Handlers
    // New Action Handlers
    const handleToggleStatus = async (clientId: number, currentStatus: string, shouldNotify: boolean = false) => {
        const isActivation = currentStatus === 'suspended';

        if (isActivation) {
            setIsActivating(true);
        } else {
            setIsSuspending(true);
        }

        const reasonToSend = isActivation ? activateReason : suspendReason;

        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`/api/admin/clients/${clientId}/toggle-status`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    reason: reasonToSend,
                    should_notify: shouldNotify
                })
            });
            const data = await response.json();
            if (response.ok) {
                toast.success(`Client ${data.data.status === 'active' ? 'activated' : 'suspended'}`);
                setClients(prev => prev.map(c => c.id === clientId ? { ...c, status: data.data.status } : c));

                if (isActivation) {
                    setActivateModalOpen(false);
                } else {
                    setSuspendModalOpen(false);
                }
            } else {
                toast.error(data.message || "Action failed");
            }
        } catch (error) {
            toast.error("Connection error");
        } finally {
            setIsSuspending(false);
            setIsActivating(false);
        }
    };

    const confirmDelete = (client: any) => {
        setClientToDelete(client);
        setDeleteReason("");
        setDeleteModalOpen(true);
    };

    const handleTerminate = async (shouldNotify: boolean) => {
        if (!clientToDelete) return;

        setIsDeleting(true);
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`/api/admin/clients/${clientToDelete.id}/terminate`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    reason: deleteReason,
                    should_notify: shouldNotify
                })
            });

            const data = await response.json();

            if (response.ok) {
                toast.success(data.message);
                setClients(prev => prev.filter(c => c.id !== clientToDelete.id));
                setDeleteModalOpen(false);
            } else {
                toast.error(data.message || "Deletion failed");
            }
        } catch (error) {
            toast.error("Connection error");
        } finally {
            setIsDeleting(false);
        }
    };

    const handleDelete = async (clientId: number) => {
        if (!confirm("Are you sure you want to DELETE this account? This action cannot be undone.")) return;

        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`/api/admin/clients/${clientId}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: "application/json",
                },
            });
            if (response.ok) {
                toast.success("Client account deleted");
                setClients(prev => prev.filter(c => c.id !== clientId));
            } else {
                const data = await response.json();
                toast.error(data.message || "Delete failed");
            }
        } catch (error) {
            toast.error("Connection error");
        }
    };

    if (loading) {
        return <div className="text-slate-500">Loading clients...</div>;
    }

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Clients</h1>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Add Client
                </button>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden transition-colors">
                <table className="w-full text-left">
                    <thead className="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                        <tr>
                            <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300">Name</th>
                            <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300">Email</th>
                            <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300">Status</th>
                            <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                        {clients.map((client) => (
                            <tr key={client.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <td className="px-6 py-4 text-slate-600 dark:text-slate-300 font-medium">
                                    <div className="flex flex-col">
                                        <span>{client.name}</span>
                                        {client.company_name && (
                                            <span className="text-xs text-slate-400">{client.company_name}</span>
                                        )}
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-slate-600 dark:text-slate-300">{client.email}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${client.status === 'active'
                                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                                        : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                                        }`}>
                                        {client.status || 'Active'}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <button
                                            onClick={() => handleImpersonate(client.id, client.name)}
                                            className="px-3 py-1.5 text-xs font-medium bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 rounded-lg hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-colors flex items-center gap-1"
                                            title="Login as this user"
                                        >
                                            <LogIn className="w-3 h-3" />
                                            Impersonate
                                        </button>

                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <button className="p-2 text-slate-400 hover:text-blue-500 transition-colors focus:outline-none">
                                                    <MoreHorizontal className="w-4 h-4" />
                                                </button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end" className="w-48 bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 shadow-xl z-50">
                                                <DropdownMenuItem
                                                    onClick={() => initiationSuspend(client)}
                                                    className="cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 focus:bg-slate-100 dark:focus:bg-slate-800"
                                                >
                                                    {client.status === 'suspended' ? (
                                                        <>
                                                            <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                                                            <span>Activate Account</span>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <Ban className="w-4 h-4 mr-2 text-yellow-500" />
                                                            <span>Suspend Account</span>
                                                        </>
                                                    )}
                                                </DropdownMenuItem>
                                                <DropdownMenuItem
                                                    onClick={() => confirmDelete(client)}
                                                    className="cursor-pointer text-red-600 focus:text-red-600 hover:bg-slate-100 dark:hover:bg-slate-800 focus:bg-slate-100 dark:focus:bg-slate-800"
                                                >
                                                    <Trash2 className="w-4 h-4 mr-2" />
                                                    <span>Delete Account</span>
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {clients.length === 0 && (
                            <tr>
                                <td colSpan={4} className="px-6 py-8 text-center text-slate-400">
                                    No clients found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            {/* Delete Confirmation Modal */}
            {/* Delete Confirmation Modal */}
            {deleteModalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
                    onClick={() => setDeleteModalOpen(false)}
                >
                    <div
                        className="bg-white dark:bg-slate-900 rounded-xl p-8 w-full max-w-[650px] shadow-2xl space-y-6 relative border border-slate-200 dark:border-slate-800"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setDeleteModalOpen(false)}
                            className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="space-y-4">
                            <h2 className="text-xl font-bold text-red-600 flex items-center gap-2">
                                <AlertTriangle className="w-6 h-6" />
                                Delete Client Account
                            </h2>

                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                Are you sure you want to permanently delete <strong>{clientToDelete?.name}</strong>?
                                <br />
                                This action cannot be undone and will remove all associated data.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="relative">
                                <label className="absolute -top-2 left-3 bg-white dark:bg-slate-900 px-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                                    Reason for Termination (Optional)
                                </label>
                                <textarea
                                    className="w-full px-4 py-3 border border-slate-200 rounded-lg dark:bg-slate-950 dark:border-slate-800 dark:text-white bg-white outline-none focus:ring-2 focus:ring-red-500 text-slate-900 min-h-[100px]"
                                    placeholder="Enter an explanation for the client..."
                                    value={deleteReason}
                                    onChange={(e) => setDeleteReason(e.target.value)}
                                />
                                <p className="text-xs text-slate-400 mt-1">
                                    If you choose "Send Alert & Delete", this reason will be emailed to the client.
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-end items-center gap-3 pt-2">
                            <button
                                onClick={() => setDeleteModalOpen(false)}
                                className="text-slate-600 dark:text-slate-400 font-bold text-sm hover:underline px-4 py-2"
                                disabled={isDeleting}
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => handleTerminate(false)}
                                className="px-4 py-2 text-red-600 font-bold rounded-lg border border-red-200 dark:border-red-900/30 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors disabled:opacity-50"
                                disabled={isDeleting}
                            >
                                Delete (No Email)
                            </button>
                            <button
                                onClick={() => handleTerminate(true)}
                                className="px-6 py-2 text-white font-bold rounded-lg transition-all disabled:opacity-50 shadow-lg shadow-black/20"
                                style={{ backgroundColor: '#181818' }}
                                disabled={isDeleting}
                            >
                                {isDeleting ? "Processing..." : "Send Alert & Delete"}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Suspend Confirmation Modal */}
            {suspendModalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
                    onClick={() => setSuspendModalOpen(false)}
                >
                    <div
                        className="bg-white dark:bg-slate-900 rounded-xl p-8 w-full max-w-[650px] shadow-2xl space-y-6 relative border border-slate-200 dark:border-slate-800"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setSuspendModalOpen(false)}
                            className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="space-y-4">
                            <h2 className="text-xl font-bold text-yellow-600 flex items-center gap-2">
                                <Ban className="w-6 h-6" />
                                Suspend Account
                            </h2>

                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                Are you sure you want to suspend <strong>{clientToSuspend?.name}</strong>?
                                <br />
                                They will lose access to the client portal until reactivated.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="relative">
                                <label className="absolute -top-2 left-3 bg-white dark:bg-slate-900 px-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                                    Reason for Suspension (Optional)
                                </label>
                                <textarea
                                    className="w-full px-4 py-3 border border-slate-200 rounded-lg dark:bg-slate-950 dark:border-slate-800 dark:text-white bg-white outline-none focus:ring-2 focus:ring-yellow-500 text-slate-900 min-h-[100px]"
                                    placeholder="Enter an explanation for the client..."
                                    value={suspendReason}
                                    onChange={(e) => setSuspendReason(e.target.value)}
                                />
                                <p className="text-xs text-slate-400 mt-1">
                                    If you choose "Send Alert & Suspend", this reason will be emailed.
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-end items-center gap-3 pt-2">
                            <button
                                onClick={() => setSuspendModalOpen(false)}
                                className="text-slate-600 dark:text-slate-400 font-bold text-sm hover:underline px-4 py-2"
                                disabled={isSuspending}
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => handleToggleStatus(clientToSuspend!.id, clientToSuspend!.status, false)}
                                className="px-4 py-2 text-yellow-600 font-bold rounded-lg border border-yellow-200 dark:border-yellow-900/30 hover:bg-yellow-50 dark:hover:bg-yellow-900/20 transition-colors disabled:opacity-50"
                                disabled={isSuspending}
                            >
                                Suspend (No Email)
                            </button>
                            <button
                                onClick={() => handleToggleStatus(clientToSuspend!.id, clientToSuspend!.status, true)}
                                className="px-6 py-2 text-white font-bold rounded-lg transition-all disabled:opacity-50 shadow-lg shadow-black/20"
                                style={{ backgroundColor: '#181818' }}
                                disabled={isSuspending}
                            >
                                {isSuspending ? "Processing..." : "Send Alert & Suspend"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {/* Activate Confirmation Modal */}
            {activateModalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
                    onClick={() => setActivateModalOpen(false)}
                >
                    <div
                        className="bg-white dark:bg-slate-900 rounded-xl p-8 w-full max-w-[650px] shadow-2xl space-y-6 relative border border-slate-200 dark:border-slate-800"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setActivateModalOpen(false)}
                            className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="space-y-4">
                            <h2 className="text-xl font-bold text-green-600 flex items-center gap-2">
                                <CheckCircle className="w-6 h-6" />
                                Activate Account
                            </h2>

                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                Are you sure you want to activate <strong>{clientToActivate?.name}</strong>?
                                <br />
                                They will regain access to the client portal.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="relative">
                                <label className="absolute -top-2 left-3 bg-white dark:bg-slate-900 px-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                                    Reason for Activation (Optional)
                                </label>
                                <textarea
                                    className="w-full px-4 py-3 border border-slate-200 rounded-lg dark:bg-slate-950 dark:border-slate-800 dark:text-white bg-white outline-none focus:ring-2 focus:ring-green-500 text-slate-900 min-h-[100px]"
                                    placeholder="Enter a note or explanation..."
                                    value={activateReason}
                                    onChange={(e) => setActivateReason(e.target.value)}
                                />
                                <p className="text-xs text-slate-400 mt-1">
                                    If you choose "Send Alert & Activate", this note will be emailed.
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-end items-center gap-3 pt-2">
                            <button
                                onClick={() => setActivateModalOpen(false)}
                                className="text-slate-600 dark:text-slate-400 font-bold text-sm hover:underline px-4 py-2"
                                disabled={isActivating}
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => handleToggleStatus(clientToActivate!.id, clientToActivate!.status, false)}
                                className="px-4 py-2 text-green-600 font-bold rounded-lg border border-green-200 dark:border-green-900/30 hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors disabled:opacity-50"
                                disabled={isActivating}
                            >
                                Activate (No Email)
                            </button>
                            <button
                                onClick={() => handleToggleStatus(clientToActivate!.id, clientToActivate!.status, true)}
                                className="px-6 py-2 text-white font-bold rounded-lg transition-all disabled:opacity-50 shadow-lg shadow-black/20"
                                style={{ backgroundColor: '#181818' }}
                                disabled={isActivating}
                            >
                                {isActivating ? "Processing..." : "Send Alert & Activate"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
