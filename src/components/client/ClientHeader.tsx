import { useState, useEffect } from "react";
import { useTheme } from "../../components/ThemeContext";
import { Sun, Moon, Bell } from "lucide-react";

interface ClientHeaderProps {
    onMenuClick?: () => void;
}

export function ClientHeader({ onMenuClick }: ClientHeaderProps) {
    const { theme, toggleTheme } = useTheme();
    const [user, setUser] = useState<{ name?: string } | null>(null);

    useEffect(() => {
        const loadUser = () => {
            try {
                const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
                setUser(storedUser);
            } catch {
                setUser({});
            }
        };

        loadUser();

        window.addEventListener("user-updated", loadUser);
        window.addEventListener("storage", loadUser);

        return () => {
            window.removeEventListener("user-updated", loadUser);
            window.removeEventListener("storage", loadUser);
        };
    }, []);

    return (
        <header className="flex items-center justify-between h-16 px-4 lg:px-8 border-b dark:border-slate-800 border-slate-200 bg-white dark:bg-slate-900 transition-colors">
            <div className="flex items-center gap-4 w-full lg:w-96">
                {/* Search removed */}
            </div>

            <div className="flex items-center gap-2 lg:gap-4 pl-4 lg:pl-0">
                <button className="p-2 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors hidden sm:block">
                    <Bell className="h-5 w-5" />
                </button>

                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition-colors"
                    aria-label="Toggle theme"
                >
                    {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </button>

                <div className="flex items-center gap-3 pl-2 lg:pl-4 border-l border-slate-200 dark:border-slate-700">
                    <div className="hidden md:block text-sm">
                        <p className="font-medium text-slate-700 dark:text-slate-200">
                            {user?.name || "Client"}
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
}
