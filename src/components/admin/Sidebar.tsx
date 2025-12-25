import { useState, useEffect, useCallback, useRef } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { LayoutDashboard, Users, GraduationCap, Mail, CreditCard, Settings, LogOut, Trophy, X, ChevronLeft, ChevronRight, Newspaper, Activity, Shield, Code, Siren, LifeBuoy } from "lucide-react";
import { cn } from "../../lib/utils";
import { API_BASE_URL } from "../../config";

// Interface update - make sure this matches existing interface if possible or extends it
export interface SidebarItem {
    icon?: any;
    label: string;
    href: string;
    subItems?: SidebarItem[];
    end?: boolean;
}

export const adminSidebarItems: SidebarItem[] = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/admin", end: true },
    { icon: Users, label: "Clients", href: "/admin/clients" },
    { icon: GraduationCap, label: "Students", href: "/admin/students" },
    { icon: Mail, label: "Contact Form", href: "/admin/contact" },
    { icon: Trophy, label: "Event Offers", href: "/admin/event-offers" },
    { icon: CreditCard, label: "Subscriptions", href: "/admin/subscriptions" },
    { icon: Activity, label: "Analytics", href: "/admin/analytics" },
    { icon: Settings, label: "Settings", href: "/admin/settings" },
];

export const clientSidebarItems: SidebarItem[] = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/client", end: true },
    { icon: Shield, label: "Security", href: "/client/security" },
    {
        icon: Code,
        label: "Programming",
        href: "#",
        subItems: [
            { label: "Services", href: "/client/programming", end: true },
            { label: "Proposition History", href: "/client/programming/history" }
        ] as any
    },
    { icon: Siren, label: "NCF Unit", href: "/client/ncf-unit" },
    { icon: LifeBuoy, label: "Support", href: "/client/support" },
    { icon: Settings, label: "Settings", href: "/client/settings" },
    {
        icon: CreditCard,
        label: "Billing",
        href: "#",
        subItems: [
            { label: "Subscriptions", href: "/client/billing/subscriptions" },
            { label: "Payment history", href: "/client/billing/history" },
            { label: "Payment methods", href: "/client/billing/methods" }
        ] as any
    },
];

interface SidebarProps {
    isOpen?: boolean;
    onClose?: () => void;
    items?: SidebarItem[];
    logoutPath?: string;
    subtitle?: string;
}

export function Sidebar({ isOpen, onClose, items = adminSidebarItems, logoutPath = "/admin/login", subtitle = "Admin" }: SidebarProps) {
    const navigate = useNavigate();
    const location = useLocation();
    const sidebarRef = useRef<HTMLElement>(null);
    const [isResizing, setIsResizing] = useState(false);
    const [sidebarWidth, setSidebarWidth] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem("sidebar-width");
            return saved ? parseInt(saved) : 250;
        }
        return 250;
    });

    const [isCollapsed, setIsCollapsed] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem("sidebar-collapsed");
            return saved === "true";
        }
        return false;
    });

    // State for open dropdowns
    const [openSubmenus, setOpenSubmenus] = useState<string[]>(["Billing"]); // Default open for visibility or can be empty

    const toggleSubmenu = (label: string) => {
        setOpenSubmenus(prev =>
            prev.includes(label)
                ? prev.filter(l => l !== label)
                : [...prev, label]
        );
    };

    useEffect(() => {
        localStorage.setItem("sidebar-collapsed", isCollapsed.toString());
    }, [isCollapsed]);

    useEffect(() => {
        localStorage.setItem("sidebar-width", sidebarWidth.toString());
    }, [sidebarWidth]);

    const startResizing = useCallback((mouseDownEvent: React.MouseEvent) => {
        setIsResizing(true);
    }, []);

    const stopResizing = useCallback(() => {
        setIsResizing(false);
    }, []);

    const resize = useCallback((mouseMoveEvent: MouseEvent) => {
        if (isResizing) {
            const newWidth = mouseMoveEvent.clientX;
            if (newWidth > 60 && newWidth < 480) {
                setSidebarWidth(newWidth);
                if (newWidth < 100 && !isCollapsed) setIsCollapsed(true);
                if (newWidth > 100 && isCollapsed) setIsCollapsed(false);
            }
        }
    }, [isResizing, isCollapsed]);

    useEffect(() => {
        window.addEventListener("mousemove", resize);
        window.addEventListener("mouseup", stopResizing);
        return () => {
            window.removeEventListener("mousemove", resize);
            window.removeEventListener("mouseup", stopResizing);
        };
    }, [resize, stopResizing]);

    const handleLogout = async () => {
        try {
            const token = localStorage.getItem("token");
            if (token) {
                await fetch(`${API_BASE_URL}/api/logout`, {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        Accept: "application/json",
                    },
                });
            }
        } catch (error) {
            console.error("Logout failed", error);
        } finally {
            localStorage.removeItem("token");
            // If it's the client dashboard, we might want to go to public home instead of login
            if (logoutPath === "/") {
                navigate("/");
            } else {
                navigate(logoutPath);
            }
        }
    };

    const SidebarContent = ({ mobile = false }) => {
        const showCollapsed = !mobile && isCollapsed;

        // Helper to check if item is active (including subitems)
        const isItemActive = (item: SidebarItem) => {
            if (item.href !== "#" && location.pathname === item.href) return true;
            if (item.subItems) {
                return item.subItems.some(sub => location.pathname === sub.href);
            }
            return false;
        };

        return (
            <>
                {/* Header */}
                <div className={cn(
                    "h-16 flex items-center border-b border-slate-200 dark:border-slate-800 relative shrink-0",
                    isResizing ? "transition-none" : "transition-all duration-300",
                    showCollapsed ? "justify-center px-0" : "justify-between px-6"
                )}>
                    {/* Logo Area */}
                    <div className={cn(
                        "font-bold text-xl tracking-tight flex items-center justify-center whitespace-nowrap overflow-hidden",
                        isResizing ? "transition-none" : "transition-all duration-300",
                        showCollapsed ? "w-full" : "w-auto"
                    )}>
                        {showCollapsed ? (
                            <span className="text-blue-600 dark:text-blue-500 transform scale-110">DC</span>
                        ) : (
                            <div className="flex gap-1.5 animation-fade-in">
                                <span>DCS</span>
                                <span className="text-blue-600 dark:text-blue-500">{subtitle}</span>
                            </div>
                        )}
                    </div>

                    {/* Mobile Close Button */}
                    {mobile && (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                onClose?.();
                            }}
                            className="p-2 -mr-2 rounded-full text-slate-500 hover:text-red-600 bg-transparent hover:bg-red-50 dark:text-slate-400 dark:hover:text-red-400 dark:hover:bg-red-900/10 transition-all active:scale-90"
                            aria-label="Close sidebar"
                        >
                            <X className="h-6 w-6" />
                        </button>
                    )}

                    {/* Desktop Toggle Button */}
                    {!mobile && !isCollapsed && (
                        <button
                            onClick={() => setIsCollapsed(true)}
                            className={cn(
                                "absolute -right-3 top-12 z-50 flex items-center justify-center h-6 w-6 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 shadow-sm",
                                isResizing ? "transition-none" : "transition-all duration-300",
                                isCollapsed ? "rotate-180" : "rotate-0"
                            )}
                        >
                            <ChevronLeft className="h-3 w-3" />
                        </button>
                    )}
                </div>

                {/* Collapsed Toggle Button */}
                {!mobile && isCollapsed && (
                    <div className="flex w-full justify-center py-2 border-b border-slate-100 dark:border-slate-800/50 shrink-0">
                        <button
                            onClick={() => setIsCollapsed(false)}
                            className="p-1.5 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        >
                            <ChevronRight className="h-4 w-4" />
                        </button>
                    </div>
                )}

                {/* Navigation */}
                <nav className="flex-1 p-3 space-y-2 overflow-y-auto overflow-x-hidden py-4 flex flex-col">
                    {items.map((item) => {
                        const hasSubItems = item.subItems && item.subItems.length > 0;
                        const isExpanded = openSubmenus.includes(item.label);
                        const isActive = isItemActive(item);

                        if (hasSubItems) {
                            return (
                                <div key={item.label} className="space-y-1">
                                    <button
                                        onClick={() => {
                                            if (showCollapsed) {
                                                setIsCollapsed(false);
                                                // After expanding sidebar, we toggle the submenu
                                                setTimeout(() => toggleSubmenu(item.label), 50);
                                            } else {
                                                toggleSubmenu(item.label);
                                            }
                                        }}
                                        title={showCollapsed ? item.label : undefined}
                                        className={cn(
                                            "flex items-center w-full text-left rounded-lg group relative shrink-0",
                                            isResizing ? "transition-none" : "transition-all duration-200",
                                            showCollapsed ? "justify-center px-0 py-3 mx-1" : "px-3 py-3 gap-3",
                                            isActive
                                                ? "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white" // Parent active logic
                                                : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-slate-200"
                                        )}
                                    >
                                        {/* Active Strip (if collapsed but inside) */}
                                        {isActive && !showCollapsed && (
                                            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1 bg-slate-400 dark:bg-slate-600 rounded-r-full" />
                                        )}

                                        {item.icon && (
                                            <item.icon className={cn(
                                                "shrink-0 transition-colors",
                                                showCollapsed ? "h-6 w-6" : "h-5 w-5",
                                                isActive ? "text-slate-900 dark:text-white" : "text-slate-500 dark:text-slate-400"
                                            )} />
                                        )}

                                        <span className={cn(
                                            "font-medium whitespace-nowrap overflow-hidden flex-1",
                                            isResizing ? "transition-none" : "transition-all duration-300",
                                            showCollapsed ? "w-0 opacity-0 -ml-2" : "w-auto opacity-100 ml-0"
                                        )}>
                                            {item.label}
                                        </span>

                                        {!showCollapsed && (
                                            <ChevronRight className={cn(
                                                "h-4 w-4 text-slate-400 transition-transform duration-200",
                                                isExpanded ? "rotate-90" : ""
                                            )} />
                                        )}
                                    </button>

                                    {/* Subitems */}
                                    {isExpanded && !showCollapsed && (
                                        <div className="pl-4 space-y-1">
                                            {item.subItems?.map((subItem) => (
                                                <NavLink
                                                    key={subItem.href}
                                                    to={subItem.href}
                                                    end={subItem.end}
                                                    onClick={mobile ? onClose : undefined}
                                                    className={({ isActive }) => cn(
                                                        "flex items-center py-2 px-3 pl-9 rounded-md text-sm font-medium transition-colors border-l-2 ml-2",
                                                        isActive
                                                            ? "text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400 bg-blue-50/50 dark:bg-blue-900/10"
                                                            : "text-slate-500 dark:text-slate-400 border-transparent hover:text-slate-900 dark:hover:text-slate-200 hover:border-slate-300 dark:hover:border-slate-600"
                                                    )}
                                                >
                                                    {subItem.label}
                                                </NavLink>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        }

                        // Normal Item
                        return (
                            <NavLink
                                key={item.href}
                                to={item.href}
                                end={item.href === "/admin"}
                                onClick={mobile ? onClose : undefined}
                                title={showCollapsed ? item.label : undefined}
                                className={({ isActive }) =>
                                    cn(
                                        "flex items-center rounded-lg group relative shrink-0",
                                        isResizing ? "transition-none" : "transition-all duration-200",
                                        showCollapsed ? "justify-center px-0 py-3 mx-1" : "px-3 py-3 gap-3",
                                        isActive
                                            ? "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400"
                                            : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-slate-200"
                                    )
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        {/* Active Indicator Strip */}
                                        {isActive && !showCollapsed && (
                                            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1 bg-blue-600 rounded-r-full" />
                                        )}

                                        {item.icon && (
                                            <item.icon className={cn(
                                                "shrink-0 transition-colors",
                                                showCollapsed ? "h-6 w-6" : "h-5 w-5",
                                                isActive ? "text-blue-600 dark:text-blue-400" : "text-slate-500 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300"
                                            )} />
                                        )}

                                        <span className={cn(
                                            "font-medium whitespace-nowrap overflow-hidden",
                                            isResizing ? "transition-none" : "transition-all duration-300",
                                            showCollapsed ? "w-0 opacity-0 -ml-2" : "w-auto opacity-100 ml-0"
                                        )}>
                                            {item.label}
                                        </span>
                                    </>
                                )}
                            </NavLink>
                        );
                    })}
                </nav>

                {/* Footer / Logout */}
                <div className="p-3 border-t border-slate-200 dark:border-slate-800 mt-auto shrink-0">
                    <button
                        onClick={handleLogout}
                        title={showCollapsed ? "Logout" : undefined}
                        className={cn(
                            "flex items-center rounded-lg text-slate-600 dark:text-slate-400 hover:bg-red-50 dark:hover:bg-red-900/10 hover:text-red-600 dark:hover:text-red-400 group relative w-full shrink-0",
                            isResizing ? "transition-none" : "transition-all duration-200",
                            showCollapsed ? "justify-center px-0 py-3 mx-1" : "px-3 py-3 gap-3"
                        )}
                    >
                        <LogOut className={cn(
                            "shrink-0 transition-colors",
                            showCollapsed ? "h-6 w-6" : "h-5 w-5"
                        )} />
                        <span className={cn(
                            "font-medium whitespace-nowrap overflow-hidden",
                            isResizing ? "transition-none" : "transition-all duration-300",
                            showCollapsed ? "w-0 opacity-0 -ml-2" : "w-auto opacity-100 ml-0"
                        )}>
                            Logout
                        </span>
                    </button>
                </div>
            </>
        );
    };

    return (
        <>
            {/* Mobile Sidebar (Fixed Drawer) */}
            <aside
                className={cn(
                    "lg:hidden fixed inset-y-0 left-0 z-50 bg-white dark:bg-slate-900 text-slate-900 dark:text-white flex flex-col transition-[width] duration-300 ease-in-out overflow-hidden",
                    isOpen ? "w-64 border-r border-slate-200 dark:border-slate-800 shadow-2xl" : "w-0 border-none"
                )}
            >
                <div className="w-64 h-full flex flex-col">
                    <SidebarContent mobile={true} />
                </div>
            </aside>

            {/* Desktop Sidebar (Static/Sticky) */}
            <aside
                ref={sidebarRef}
                className={cn(
                    "hidden lg:flex fixed inset-y-0 left-0 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white flex-col relative shrink-0",
                    isResizing ? "transition-none" : "transition-[width] duration-300 ease-in-out"
                )}
                style={{ width: isCollapsed ? 80 : sidebarWidth }}
            >
                {/* Resizer Handle */}
                <div
                    className="absolute right-0 top-0 bottom-0 w-1 cursor-col-resize hover:bg-blue-500/50 active:bg-blue-600 transition-colors z-50"
                    onMouseDown={startResizing}
                />

                <SidebarContent mobile={false} />
            </aside>
        </>
    );
}
