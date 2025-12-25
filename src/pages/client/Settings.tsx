import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Home, User, Mail, Shield, Calendar, ChevronRight, X, Lock, Check, ChevronsUpDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { API_BASE_URL } from "../../config";

const countries = [
    { label: "Afghanistan", value: "AF" }, { label: "Albania", value: "AL" }, { label: "Algeria", value: "DZ" },
    { label: "Andorra", value: "AD" }, { label: "Angola", value: "AO" }, { label: "Argentina", value: "AR" },
    { label: "Armenia", value: "AM" }, { label: "Australia", value: "AU" }, { label: "Austria", value: "AT" },
    { label: "Azerbaijan", value: "AZ" }, { label: "Bahrain", value: "BH" }, { label: "Bangladesh", value: "BD" },
    { label: "Belarus", value: "BY" }, { label: "Belgium", value: "BE" }, { label: "Belize", value: "BZ" },
    { label: "Benin", value: "BJ" }, { label: "Bhutan", value: "BT" }, { label: "Bolivia", value: "BO" },
    { label: "Bosnia and Herzegovina", value: "BA" }, { label: "Botswana", value: "BW" }, { label: "Brazil", value: "BR" },
    { label: "Brunei", value: "BN" }, { label: "Bulgaria", value: "BG" }, { label: "Burkina Faso", value: "BF" },
    { label: "Burundi", value: "BI" }, { label: "Cambodia", value: "KH" }, { label: "Cameroon", value: "CM" },
    { label: "Canada", value: "CA" }, { label: "Cape Verde", value: "CV" }, { label: "Central African Republic", value: "CF" },
    { label: "Chad", value: "TD" }, { label: "Chile", value: "CL" }, { label: "China", value: "CN" },
    { label: "Colombia", value: "CO" }, { label: "Comoros", value: "KM" }, { label: "Congo", value: "CG" },
    { label: "Costa Rica", value: "CR" }, { label: "Croatia", value: "HR" }, { label: "Cuba", value: "CU" },
    { label: "Cyprus", value: "CY" }, { label: "Czech Republic", value: "CZ" }, { label: "Denmark", value: "DK" },
    { label: "Djibouti", value: "DJ" }, { label: "Dominican Republic", value: "DO" }, { label: "East Timor", value: "TL" },
    { label: "Ecuador", value: "EC" }, { label: "Egypt", value: "EG" }, { label: "El Salvador", value: "SV" },
    { label: "Equatorial Guinea", value: "GQ" }, { label: "Eritrea", value: "ER" }, { label: "Estonia", value: "EE" },
    { label: "Ethiopia", value: "ET" }, { label: "Fiji", value: "FJ" }, { label: "Finland", value: "FI" },
    { label: "France", value: "FR" }, { label: "Gabon", value: "GA" }, { label: "Gambia", value: "GM" },
    { label: "Georgia", value: "GE" }, { label: "Germany", value: "DE" }, { label: "Ghana", value: "GH" },
    { label: "Greece", value: "GR" }, { label: "Guatemala", value: "GT" }, { label: "Guinea", value: "GN" },
    { label: "Guinea-Bissau", value: "GW" }, { label: "Guyana", value: "GY" }, { label: "Haiti", value: "HT" },
    { label: "Honduras", value: "HN" }, { label: "Hungary", value: "HU" }, { label: "Iceland", value: "IS" },
    { label: "India", value: "IN" }, { label: "Indonesia", value: "ID" }, { label: "Iran", value: "IR" },
    { label: "Iraq", value: "IQ" }, { label: "Ireland", value: "IE" }, { label: "Israel", value: "IL" },
    { label: "Italy", value: "IT" }, { label: "Ivory Coast", value: "CI" }, { label: "Jamaica", value: "JM" },
    { label: "Japan", value: "JP" }, { label: "Jordan", value: "JO" }, { label: "Kazakhstan", value: "KZ" },
    { label: "Kenya", value: "KE" }, { label: "Kuwait", value: "KW" }, { label: "Kyrgyzstan", value: "KG" },
    { label: "Laos", value: "LA" }, { label: "Latvia", value: "LV" }, { label: "Lebanon", value: "LB" },
    { label: "Lesotho", value: "LS" }, { label: "Liberia", value: "LR" }, { label: "Libya", value: "LY" },
    { label: "Liechtenstein", value: "LI" }, { label: "Lithuania", value: "LT" }, { label: "Luxembourg", value: "LU" },
    { label: "Madagascar", value: "MG" }, { label: "Malawi", value: "MW" }, { label: "Malaysia", value: "MY" },
    { label: "Maldives", value: "MV" }, { label: "Mali", value: "ML" }, { label: "Malta", value: "MT" },
    { label: "Mauritania", value: "MR" }, { label: "Mauritius", value: "MU" }, { label: "Mexico", value: "MX" },
    { label: "Moldova", value: "MD" }, { label: "Monaco", value: "MC" }, { label: "Mongolia", value: "MN" },
    { label: "Montenegro", value: "ME" }, { label: "Morocco", value: "MA" }, { label: "Mozambique", value: "MZ" },
    { label: "Myanmar", value: "MM" }, { label: "Namibia", value: "NA" }, { label: "Nepal", value: "NP" },
    { label: "Netherlands", value: "NL" }, { label: "New Zealand", value: "NZ" }, { label: "Nicaragua", value: "NI" },
    { label: "Niger", value: "NE" }, { label: "Nigeria", value: "NG" }, { label: "North Korea", value: "KP" },
    { label: "North Macedonia", value: "MK" }, { label: "Norway", value: "NO" }, { label: "Oman", value: "OM" },
    { label: "Pakistan", value: "PK" }, { label: "Panama", value: "PA" }, { label: "Papua New Guinea", value: "PG" },
    { label: "Paraguay", value: "PY" }, { label: "Peru", value: "PE" }, { label: "Philippines", value: "PH" },
    { label: "Poland", value: "PL" }, { label: "Portugal", value: "PT" }, { label: "Qatar", value: "QA" },
    { label: "Romania", value: "RO" }, { label: "Russia", value: "RU" }, { label: "Rwanda", value: "RW" },
    { label: "Saudi Arabia", value: "SA" }, { label: "Senegal", value: "SN" }, { label: "Serbia", value: "RS" },
    { label: "Sierra Leone", value: "SL" }, { label: "Singapore", value: "SG" }, { label: "Slovakia", value: "SK" },
    { label: "Slovenia", value: "SI" }, { label: "Somalia", value: "SO" }, { label: "South Africa", value: "ZA" },
    { label: "South Korea", value: "KR" }, { label: "Spain", value: "ES" }, { label: "Sri Lanka", value: "LK" },
    { label: "Sudan", value: "SD" }, { label: "Sweden", value: "SE" }, { label: "Switzerland", value: "CH" },
    { label: "Syria", value: "SY" }, { label: "Taiwan", value: "TW" }, { label: "Tajikistan", value: "TJ" },
    { label: "Tanzania", value: "TZ" }, { label: "Thailand", value: "TH" }, { label: "Togo", value: "TG" },
    { label: "Tunisia", value: "TN" }, { label: "Turkey", value: "TR" }, { label: "Turkmenistan", value: "TM" },
    { label: "Uganda", value: "UG" }, { label: "Ukraine", value: "UA" }, { label: "United Arab Emirates", value: "AE" },
    { label: "United Kingdom", value: "GB" }, { label: "United States", value: "US" }, { label: "Uruguay", value: "UY" },
    { label: "Uzbekistan", value: "UZ" }, { label: "Venezuela", value: "VE" }, { label: "Vietnam", value: "VN" },
    { label: "Yemen", value: "YE" }, { label: "Zambia", value: "ZM" }, { label: "Zimbabwe", value: "ZW" }
];

export function ClientSettings() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [companyWebsite, setCompanyWebsite] = useState("");

    // Additional/Mock Fields for UI
    const [address, setAddress] = useState("AD"); // Default to Andorra or similar for demo
    const [memberSince, setMemberSince] = useState("2024-08-06 11:33");

    // Password State
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // Password OTP State
    const [showPasswordOtpInput, setShowPasswordOtpInput] = useState(false);
    const [passwordOtpCode, setPasswordOtpCode] = useState("");
    const [timeLeft, setTimeLeft] = useState(60);

    // UI State
    const [loading, setLoading] = useState(false);
    const [initialLoading, setInitialLoading] = useState(true);
    const [activeModal, setActiveModal] = useState<'name' | 'address' | 'phone' | 'company' | 'password' | 'email' | '2fa-info' | null>(null);
    const [openCombobox, setOpenCombobox] = useState(false);

    // Sessions State
    const [sessions, setSessions] = useState<any[]>([]);

    useEffect(() => {
        fetchUserData();
        fetchSessions();
    }, []);

    // OTP Timer
    useEffect(() => {
        if (showPasswordOtpInput && timeLeft > 0) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [showPasswordOtpInput, timeLeft]);

    const fetchSessions = async () => {
        try {
            const token = localStorage.getItem("token");
            if (!token) return;
            const response = await fetch(`${API_BASE_URL}/api/sessions`, {
                headers: { Authorization: `Bearer ${token}`, Accept: "application/json" }
            });
            if (response.ok) {
                const data = await response.json();
                setSessions(data.sessions);
            }
        } catch (error) {
            console.error(error);
        }
    }

    const handleLogoutSession = async (sessionId: number) => {
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`${API_BASE_URL}/api/sessions/${sessionId}`, {
                method: 'DELETE',
                headers: { Authorization: `Bearer ${token}`, Accept: "application/json" }
            });

            if (response.ok) {
                toast.success("Session logged out.");
                fetchSessions(); // Refresh list
            } else {
                const data = await response.json();
                toast.error(data.message || "Failed to logout session.");
            }
        } catch (error) {
            toast.error("Error logging out session.");
        }
    }

    const fetchUserData = async () => {
        try {
            const token = localStorage.getItem("token");
            if (!token) return;

            const response = await fetch(`${API_BASE_URL}/api/me`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: "application/json",
                },
            });

            if (response.ok) {
                const data = await response.json();
                setEmail(data.email);
                setName(data.name || "");
                setPhone(data.phone || "");
                setCompanyName(data.company_name || "");
                setCompanyWebsite(data.company_website || "");
                if (data.address) {
                    setAddress(data.address);
                }
                if (data.created_at) {
                    setMemberSince(data.created_at);
                }
            }
        } catch (error) {
            console.error("Failed to fetch user data", error);
            toast.error("Failed to load user data");
        } finally {
            setInitialLoading(false);
        }
    };

    const handleUpdateProfile = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`${API_BASE_URL}/api/me`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    phone,
                    company_name: companyName,
                    company_website: companyWebsite,
                    address: address,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                toast.success("Profile updated successfully");
                updateLocalStorage({ name, email, phone, company_name: companyName, company_website: companyWebsite });
                setActiveModal(null);
            } else {
                toast.error(data.message || "Failed to update profile");
            }
        } catch (error) {
            console.error("Update failed", error);
            toast.error("An error occurred while updating");
        } finally {
            setLoading(false);
        }
    };

    const handleSendPasswordOtp = async (e: React.FormEvent) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        setLoading(true);
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`${API_BASE_URL}/api/user/password/otp`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: "application/json",
                },
            });

            if (response.ok) {
                toast.success("Verification code sent to email.");
                setShowPasswordOtpInput(true);
                setTimeLeft(60); // Reset timer
            } else {
                toast.error("Failed to send code.");
            }
        } catch (error) {
            toast.error("Network error.");
        } finally {
            setLoading(false);
        }
    }

    const handleUpdatePasswordWithOtp = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`${API_BASE_URL}/api/user/password/update`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    code: passwordOtpCode,
                    password: password,
                    password_confirmation: confirmPassword
                }),
            });

            const data = await response.json();

            if (response.ok) {
                toast.success("Password updated successfully");
                setPassword("");
                setConfirmPassword("");
                setShowPasswordOtpInput(false);
                setPasswordOtpCode("");
                setActiveModal(null);
            } else {
                // Handle specific error messages from backend
                toast.error(data.message || "Failed to update password");
            }
        } catch (error) {
            console.error("Update failed", error);
            toast.error("An error occurred while updating");
        } finally {
            setLoading(false);
        }
    };

    const updateLocalStorage = (updatedUser: any) => {
        const currentUser = JSON.parse(localStorage.getItem("user") || "{}");
        const newUser = { ...currentUser, ...updatedUser };
        localStorage.setItem("user", JSON.stringify(newUser));
        window.dispatchEvent(new Event("user-updated"));
    };

    if (initialLoading) {
        return <div className="text-slate-500 dark:text-slate-400">Loading settings...</div>;
    }

    return (
        <div className="relative min-h-[calc(100vh-100px)]">
            <div className="space-y-6 max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                        <h1 className="text-2xl font-bold text-slate-900 dark:text-white mr-4">Account Information</h1>
                        <Link to="/client" className="hover:text-blue-600 transition-colors">
                            <Home className="w-4 h-4" />
                        </Link>
                        <span>-</span>
                        <span className="text-slate-500">Profile</span>
                        <span>-</span>
                        <span className="text-slate-500">Account Information</span>
                    </div>
                </div>

                {/* Info Card 1: Personal Information */}
                <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
                    <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center gap-3">
                        <User className="w-5 h-5 text-[#7c3aed]" />
                        <h2 className="text-lg font-bold text-slate-900 dark:text-white">Personal information</h2>
                    </div>

                    <div className="p-6 text-sm text-slate-500 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800">
                        The information provided below will reflect on your invoices
                    </div>

                    <div className="divide-y divide-slate-100 dark:divide-slate-800">
                        <div
                            className="p-6 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer transition-colors"
                            onClick={() => setActiveModal('name')}
                        >
                            <span className="text-slate-500 dark:text-slate-400 font-medium">Name</span>
                            <div className="flex items-center gap-4">
                                <span className="text-slate-900 dark:text-white font-medium">{name}</span>
                                <ChevronRight className="w-4 h-4 text-[#7c3aed]" />
                            </div>
                        </div>

                        <div
                            className="p-6 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer transition-colors"
                            onClick={() => setActiveModal('address')}
                        >
                            <span className="text-slate-500 dark:text-slate-400 font-medium">Address</span>
                            <div className="flex items-center gap-4">
                                <span className="text-slate-900 dark:text-white font-medium">{countries.find(c => c.value === address)?.label || address}</span>
                                <ChevronRight className="w-4 h-4 text-[#7c3aed]" />
                            </div>
                        </div>

                        <div
                            className="p-6 flex items-center justify-between bg-purple-50/50 dark:bg-slate-800/30 hover:bg-purple-50 dark:hover:bg-slate-800/50 cursor-pointer transition-colors"
                            onClick={() => setActiveModal('phone')}
                        >
                            <span className="text-slate-500 dark:text-slate-400 font-medium">Phone number</span>
                            <div className="flex items-center gap-4">
                                <span className="text-slate-900 dark:text-white font-medium">{phone || "-"}</span>
                                <ChevronRight className="w-4 h-4 text-[#7c3aed]" />
                            </div>
                        </div>

                        <div
                            className="p-6 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer transition-colors"
                            onClick={() => setActiveModal('company')}
                        >
                            <span className="text-slate-500 dark:text-slate-400 font-medium">Company</span>
                            <div className="flex items-center gap-4">
                                <span className="text-slate-900 dark:text-white font-medium">{companyName || "-"}</span>
                                <ChevronRight className="w-4 h-4 text-[#7c3aed]" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Info Card 2: Account Settings */}
                <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
                    <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center gap-3">
                        <User className="w-5 h-5 text-[#7c3aed]" />
                        <h2 className="text-lg font-bold text-slate-900 dark:text-white">Account settings</h2>
                    </div>

                    <div className="divide-y divide-slate-100 dark:divide-slate-800">
                        <div className="p-6 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer transition-colors"
                            onClick={() => setActiveModal('email')}
                        >
                            <span className="text-slate-500 dark:text-slate-400 font-medium">Email</span>
                            <div className="flex items-center gap-4">
                                <span className="text-slate-900 dark:text-white font-medium">{email}</span>
                                <ChevronRight className="w-4 h-4 text-[#7c3aed]" />
                            </div>
                        </div>

                        <div
                            className="p-6 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer transition-colors"
                            onClick={() => setActiveModal('password')}
                        >
                            <span className="text-slate-500 dark:text-slate-400 font-medium">Add password</span>
                            <div className="flex items-center gap-4">
                                <span className="text-slate-900 dark:text-white font-medium">-</span>
                                <ChevronRight className="w-4 h-4 text-[#7c3aed]" />
                            </div>
                        </div>

                        <div className="p-6 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer transition-colors"
                            onClick={() => setActiveModal('2fa-info')}
                        >
                            <span className="text-slate-500 dark:text-slate-400 font-medium">Manage two-factor authentication</span>
                            <div className="flex items-center gap-4">
                                <span className="bg-green-100 text-green-600 text-xs font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                                    <div className="w-2 h-0.5 bg-green-600 rounded-full"></div> Enabled (Email)
                                </span>
                                <ChevronRight className="w-4 h-4 text-[#7c3aed]" />
                            </div>
                        </div>

                        <div className="p-6 flex items-center justify-between">
                            <span className="text-slate-500 dark:text-slate-400 font-medium">Member since</span>
                            <span className="text-slate-900 dark:text-white font-medium text-sm">{memberSince}</span>
                        </div>
                    </div>
                </div>

                {/* Info Card 3: Login History */}
                <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
                    <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center gap-3">
                        <Shield className="w-5 h-5 text-[#7c3aed]" />
                        <h2 className="text-lg font-bold text-slate-900 dark:text-white">Login History</h2>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm text-slate-600 dark:text-slate-400">
                            <thead className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800">
                                <tr>
                                    <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white">Device</th>
                                    <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white">IP Address</th>
                                    <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white">Last Active</th>
                                    <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                {sessions.map((session) => (
                                    <tr key={session.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex flex-col">
                                                <span className="font-medium text-slate-900 dark:text-white truncate max-w-[200px]" title={session.user_agent}>
                                                    {session.user_agent || "Unknown Device"}
                                                </span>
                                                {session.is_current_device && (
                                                    <span className="text-xs text-green-500 font-bold">Current Device</span>
                                                )}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 font-mono text-xs">{session.ip_address}</td>
                                        <td className="px-6 py-4">{session.last_used_at}</td>
                                        <td className="px-6 py-4 text-right">
                                            {!session.is_current_device && (
                                                <button
                                                    onClick={() => handleLogoutSession(session.id)}
                                                    className="text-red-500 hover:text-red-600 font-medium text-xs border border-red-200 hover:bg-red-50 px-3 py-1.5 rounded-lg transition-all"
                                                >
                                                    Logout
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                                {sessions.length === 0 && (
                                    <tr>
                                        <td colSpan={4} className="px-6 py-8 text-center text-slate-400">
                                            No login history available.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>


            </div>

            {/* Modals */}
            {activeModal === 'name' && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 animate-in fade-in duration-200" onClick={() => setActiveModal(null)}>
                    <div className="bg-white dark:bg-slate-900 rounded-xl p-6 w-full max-w-md shadow-2xl space-y-4" onClick={e => e.stopPropagation()}>
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Edit Name</h2>
                            <button onClick={() => setActiveModal(null)} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <form onSubmit={handleUpdateProfile} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">Full Name</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full px-3 py-2 border rounded-lg dark:bg-slate-950 dark:border-slate-800 dark:text-white bg-white border-slate-200 outline-none focus:ring-2 focus:ring-[#7c3aed]"
                                />
                            </div>
                            <button
                                disabled={loading}
                                className="w-full py-2.5 bg-[#7c3aed] text-white font-bold rounded-lg hover:bg-[#6d28d9] transition-colors disabled:opacity-50"
                            >
                                {loading ? 'Saving...' : 'Save Changes'}
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {activeModal === 'address' && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 animate-in fade-in duration-200" onClick={() => setActiveModal(null)}>
                    <div className="bg-white dark:bg-slate-900 rounded-xl p-6 w-full max-w-md shadow-2xl space-y-4" onClick={e => e.stopPropagation()}>
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Edit Address</h2>
                            <button onClick={() => setActiveModal(null)} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <form onSubmit={handleUpdateProfile} className="space-y-4">
                            <div className="flex flex-col gap-2">
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Country / Address</label>
                                <Popover open={openCombobox} onOpenChange={setOpenCombobox}>
                                    <PopoverTrigger asChild>
                                        <button
                                            type="button"
                                            role="combobox"
                                            aria-expanded={openCombobox}
                                            className="w-full justify-between items-center flex px-3 py-2 border rounded-lg dark:bg-slate-950 dark:border-slate-800 dark:text-white bg-white border-slate-200 outline-none focus:ring-2 focus:ring-[#7c3aed]"
                                        >
                                            {address
                                                ? countries.find((country) => country.value === address)?.label || address
                                                : "Select country..."}
                                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                        </button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-[--radix-popover-trigger-width] p-0 shadow-xl z-[60] bg-white dark:bg-slate-900">
                                        <Command>
                                            <CommandInput placeholder="Search country..." />
                                            <CommandList style={{ maxHeight: '300px', overflowY: 'auto' }}>
                                                <CommandEmpty>No country found.</CommandEmpty>
                                                <CommandGroup>
                                                    {countries.map((country) => (
                                                        <CommandItem
                                                            key={country.value}
                                                            value={country.label}
                                                            onSelect={() => {
                                                                setAddress(country.value);
                                                                setOpenCombobox(false);
                                                            }}
                                                        >
                                                            <Check
                                                                className={cn(
                                                                    "mr-2 h-4 w-4",
                                                                    address === country.value ? "opacity-100" : "opacity-0"
                                                                )}
                                                            />
                                                            {country.label}
                                                        </CommandItem>
                                                    ))}
                                                </CommandGroup>
                                            </CommandList>
                                        </Command>
                                    </PopoverContent>
                                </Popover>
                            </div>
                            <button
                                disabled={loading}
                                className="w-full py-2.5 bg-[#7c3aed] text-white font-bold rounded-lg hover:bg-[#6d28d9] transition-colors disabled:opacity-50"
                            >
                                {loading ? 'Saving...' : 'Save Changes'}
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {activeModal === 'phone' && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 animate-in fade-in duration-200" onClick={() => setActiveModal(null)}>
                    <div className="bg-white dark:bg-slate-900 rounded-xl p-6 w-full max-w-md shadow-2xl space-y-4" onClick={e => e.stopPropagation()}>
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Edit Phone</h2>
                            <button onClick={() => setActiveModal(null)} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <form onSubmit={handleUpdateProfile} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">Phone</label>
                                <input
                                    type="text"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="w-full px-3 py-2 border rounded-lg dark:bg-slate-950 dark:border-slate-800 dark:text-white bg-white border-slate-200 outline-none focus:ring-2 focus:ring-[#7c3aed]"
                                />
                            </div>
                            <button
                                disabled={loading}
                                className="w-full py-2.5 bg-[#7c3aed] text-white font-bold rounded-lg hover:bg-[#6d28d9] transition-colors disabled:opacity-50"
                            >
                                {loading ? 'Saving...' : 'Save Changes'}
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {activeModal === 'company' && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 animate-in fade-in duration-200" onClick={() => setActiveModal(null)}>
                    <div className="bg-white dark:bg-slate-900 rounded-xl p-6 w-full max-w-md shadow-2xl space-y-4" onClick={e => e.stopPropagation()}>
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Edit Company</h2>
                            <button onClick={() => setActiveModal(null)} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <form onSubmit={handleUpdateProfile} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">Company</label>
                                <input
                                    type="text"
                                    value={companyName}
                                    onChange={(e) => setCompanyName(e.target.value)}
                                    className="w-full px-3 py-2 border rounded-lg dark:bg-slate-950 dark:border-slate-800 dark:text-white bg-white border-slate-200 outline-none focus:ring-2 focus:ring-[#7c3aed]"
                                />
                            </div>
                            <button
                                disabled={loading}
                                className="w-full py-2.5 bg-[#7c3aed] text-white font-bold rounded-lg hover:bg-[#6d28d9] transition-colors disabled:opacity-50"
                            >
                                {loading ? 'Saving...' : 'Save Changes'}
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {activeModal === 'password' && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 animate-in fade-in duration-200" onClick={() => setActiveModal(null)}>
                    <div className="bg-white dark:bg-slate-900 rounded-xl p-6 w-full max-w-md shadow-2xl space-y-4" onClick={e => e.stopPropagation()}>
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Change Password</h2>
                            <button onClick={() => setActiveModal(null)} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {!showPasswordOtpInput ? (
                            /* Step 1: Enter New Pasword & Confirm */
                            <form onSubmit={handleSendPasswordOtp} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">New Password</label>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full px-3 py-2 border rounded-lg dark:bg-slate-950 dark:border-slate-800 dark:text-white bg-white border-slate-200 outline-none focus:ring-2 focus:ring-[#7c3aed]"
                                        placeholder="Enter new password"
                                        required
                                        minLength={8}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">Confirm New Password</label>
                                    <input
                                        type="password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        className="w-full px-3 py-2 border rounded-lg dark:bg-slate-950 dark:border-slate-800 dark:text-white bg-white border-slate-200 outline-none focus:ring-2 focus:ring-[#7c3aed]"
                                        placeholder="Confirm new password"
                                        required
                                        minLength={8}
                                    />
                                </div>
                                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-sm rounded-lg">
                                    <p>For your security, we will send a temporary verification code to your email.</p>
                                </div>
                                <button
                                    disabled={loading}
                                    style={{ backgroundColor: '#181818' }}
                                    className="w-full py-2.5 text-white font-bold rounded-lg transition-colors disabled:opacity-50 hover:bg-neutral-800 shadow-lg shadow-purple-500/20"
                                >
                                    {loading ? 'Sending Code...' : 'Send Verification Code'}
                                </button>
                            </form>
                        ) : (
                            /* Step 2: Verify OTP */
                            <form onSubmit={handleUpdatePasswordWithOtp} className="space-y-4">
                                <div className="text-center space-y-2">
                                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-2">
                                        <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <h3 className="font-bold text-slate-900 dark:text-white">Verify Your Identity</h3>
                                    <p className="text-sm text-slate-500">
                                        Enter the code sent to your email.
                                        <br />
                                        Code expires in <span className={cn("font-bold", timeLeft < 10 ? "text-red-500" : "text-blue-500")}>00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}</span>
                                    </p>
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        value={passwordOtpCode}
                                        onChange={(e) => setPasswordOtpCode(e.target.value)}
                                        className="w-full text-center tracking-[0.5em] text-2xl py-3 border rounded-lg dark:bg-slate-950 dark:border-slate-800 dark:text-white bg-white border-slate-200 outline-none focus:ring-2 focus:ring-[#7c3aed]"
                                        placeholder="123456"
                                        maxLength={6}
                                        autoFocus
                                    />
                                </div>

                                <button
                                    disabled={loading}
                                    style={{ backgroundColor: '#181818' }}
                                    className="w-full py-2.5 text-white font-bold rounded-lg transition-colors disabled:opacity-50 hover:bg-neutral-800 shadow-lg shadow-purple-500/20"
                                >
                                    {loading ? 'Verifying...' : 'Update Password'}
                                </button>

                                {timeLeft === 0 && (
                                    <button
                                        type="button"
                                        onClick={handleSendPasswordOtp}
                                        className="w-full text-sm text-slate-500 hover:text-slate-800 dark:hover:text-white"
                                    >
                                        Resend Code
                                    </button>
                                )}

                                <button
                                    type="button"
                                    onClick={() => { setShowPasswordOtpInput(false); setTimeLeft(60); }}
                                    className="w-full text-sm text-slate-500 hover:text-slate-800 dark:hover:text-white mt-2"
                                >
                                    Cancel
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            )}
            {activeModal === 'email' && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 animate-in fade-in duration-200" onClick={() => setActiveModal(null)}>
                    <div className="bg-white dark:bg-slate-900 rounded-xl p-8 w-full max-w-lg shadow-2xl space-y-6 relative" onClick={e => e.stopPropagation()}>
                        <button onClick={() => setActiveModal(null)} className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                            <X className="w-5 h-5" />
                        </button>

                        <div className="space-y-4">
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Change email address</h2>

                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                Enter a new email address for your account. You will receive a verification email to your current email address with a link to finalize the change.
                            </p>

                            <p className="text-sm">
                                <span className="text-slate-500 dark:text-slate-400">Mistyped your email address? </span>
                                <a href="#" className="text-[#181818] dark:text-white hover:underline font-bold">Create an Account Recovery request</a>
                            </p>
                        </div>

                        <form onSubmit={handleUpdateProfile} className="space-y-8">
                            <div className="relative">
                                <label className="absolute -top-2 left-3 bg-white dark:bg-slate-900 px-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                                    New email
                                </label>
                                <input
                                    type="email"
                                    defaultValue="dcsecurite.business@gmail.com"
                                    className="w-full px-4 py-3 border border-slate-200 rounded-lg dark:bg-slate-950 dark:border-slate-800 dark:text-white bg-white outline-none focus:ring-2 focus:ring-[#7c3aed] text-slate-900"
                                />
                            </div>

                            <div className="flex justify-end items-center gap-4 pt-2">
                                <button
                                    type="button"
                                    onClick={() => setActiveModal(null)}
                                    className="text-[#181818] dark:text-white font-bold text-sm hover:underline px-4 py-2"
                                >
                                    Cancel
                                </button>
                                <button
                                    disabled={loading}
                                    className="px-8 py-2.5 text-white font-bold rounded-lg hover:bg-neutral-800 transition-colors disabled:opacity-50 shadow-lg shadow-purple-500/20"
                                    style={{ backgroundColor: '#181818' }}
                                >
                                    {loading ? 'Sending...' : 'Continue'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            {activeModal === '2fa-info' && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 animate-in fade-in duration-200" onClick={() => setActiveModal(null)}>
                    <div className="bg-white dark:bg-slate-900 rounded-xl p-6 w-full max-w-md shadow-2xl space-y-4 border border-red-200 dark:border-red-900/50" onClick={e => e.stopPropagation()}>
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-red-100 dark:bg-red-900/20 rounded-full flex-shrink-0">
                                <Shield className="w-6 h-6 text-red-600 dark:text-red-400" />
                            </div>
                            <div className="flex-1 space-y-2">
                                <h2 className="text-lg font-bold text-slate-900 dark:text-white">Security Alert</h2>
                                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                                    You cannot disable this security feature because it is essential to protect your account data from hackers and criminals.
                                </p>
                            </div>
                            <button onClick={() => setActiveModal(null)} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="flex justify-end pt-2">
                            <button
                                onClick={() => setActiveModal(null)}
                                className="px-4 py-2 bg-slate-900 dark:bg-slate-800 text-white font-medium text-sm rounded-lg hover:bg-slate-800 dark:hover:bg-slate-700 transition-colors"
                            >
                                Understood
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}


