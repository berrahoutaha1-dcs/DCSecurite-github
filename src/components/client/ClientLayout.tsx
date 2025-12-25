import { useState, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";
import { toast } from "sonner";
import { Sidebar, clientSidebarItems } from "../admin/Sidebar";
import { ClientHeader } from "./ClientHeader";

export function ClientLayout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    // Close sidebar on route change
    useEffect(() => {
        setIsSidebarOpen(false);
    }, [location]);

    // Simple Auth Check
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/");
        }
    }, [navigate]);

    const [isImpersonating, setIsImpersonating] = useState(false);

    useEffect(() => {
        setIsImpersonating(!!localStorage.getItem("admin_token"));
    }, []);

    const exitImpersonation = () => {
        const adminToken = localStorage.getItem("admin_token");
        if (adminToken) {
            localStorage.setItem("token", adminToken);
            localStorage.removeItem("admin_token");
            // Optional: Fetch admin user again if needed, but navigation will likely trigger auth checks
            navigate("/admin/clients");
            toast.success("Returned to Admin Dashboard");
        }
    };

    return (
        <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-200">
            {/* Mobile Fixed Toggle Button */}
            {!isSidebarOpen && (
                <button
                    onClick={() => setIsSidebarOpen(true)}
                    className="fixed top-4 right-4 z-50 p-2 bg-white dark:bg-slate-900 rounded-md border border-slate-200 dark:border-slate-800 shadow-sm text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 lg:hidden focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label="Open sidebar"
                >
                    <Menu className="h-6 w-6" />
                </button>
            )}

            <Sidebar
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
                items={clientSidebarItems}
                logoutPath="/"
                subtitle="Client Portal"
            />

            <main className="flex-1 flex flex-col overflow-hidden min-w-0 relative">
                <ClientHeader onMenuClick={() => setIsSidebarOpen(true)} />
                <div className="flex-1 overflow-auto p-4 lg:p-8 pb-20">
                    <Outlet context={{ openCustomerLogin: () => toast.info("To upgrade your plan, please contact your account manager.") }} />
                </div>

                {/* Impersonation Banner */}
                {isImpersonating && (
                    <div
                        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-4 animate-in slide-in-from-bottom-5 border border-slate-700"
                        style={{ backgroundColor: '#181818' }}
                    >
                        <span className="font-semibold text-sm">Viewing as Client</span>
                        <button
                            onClick={exitImpersonation}
                            className="bg-white text-slate-900 px-4 py-1.5 rounded-full text-xs font-bold hover:bg-slate-100 transition-colors uppercase tracking-wider border border-transparent shadow-sm"
                        >
                            Exit & Return to Admin
                        </button>
                    </div>
                )}
            </main>
        </div>
    );
}
