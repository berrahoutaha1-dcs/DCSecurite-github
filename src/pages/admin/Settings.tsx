import { useState, useEffect } from "react";
import { toast } from "sonner";
import { AdminNewsTicker } from "../../components/admin/AdminNewsTicker";
import { Shield } from "lucide-react";
import { API_BASE_URL } from "../../config";

export function SettingsPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [currentPassword, setCurrentPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [initialLoading, setInitialLoading] = useState(true);

    // OTP State for Password Change
    const [showPasswordOtpInput, setShowPasswordOtpInput] = useState(false);
    const [passwordOtpCode, setPasswordOtpCode] = useState("");
    const [timeLeft, setTimeLeft] = useState(60);

    // Existing Sessions State
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

    const fetchUserData = async () => {
        try {
            const token = localStorage.getItem("token");
            if (!token) return;

            const response = await fetch(`${API_BASE_URL}/api/me`, {
                headers: {
                    Authorization: `Bearer ${token} `,
                    Accept: "application/json",
                },
            });

            if (response.ok) {
                const data = await response.json();
                setEmail(data.email);
            }
        } catch (error) {
            console.error("Failed to fetch user data", error);
            toast.error("Failed to load user data");
        } finally {
            setInitialLoading(false);
        }
    };

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

    // Handle Profile Update (Email only)
    const handleProfileSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`${API_BASE_URL}/api/me`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token} `,
                    Accept: "application/json",
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.ok) {
                toast.success(data.message || "Profile updated successfully");
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

    // Handle Password OTP Send
    const handleSendPasswordOtp = async (e: React.FormEvent) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        if (password.length < 8) {
            toast.error("Password must be at least 8 characters");
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

    // Handle Password Update with OTP
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
            } else {
                toast.error(data.message || "Failed to update password");
            }
        } catch (error) {
            console.error("Update failed", error);
            toast.error("An error occurred while updating");
        } finally {
            setLoading(false);
        }
    };

    if (initialLoading) {
        return <div className="text-slate-500 dark:text-slate-400">Loading settings...</div>;
    }

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Admin Settings</h1>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                {/* Left Column: Admin Profile Settings */}
                <div className="space-y-6">
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">Profile & Security</h2>

                    {/* General Information Form */}
                    <form onSubmit={handleProfileSubmit} className="p-6 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 space-y-6 transition-colors">
                        <div className="flex items-center justify-between">
                            <h3 className="text-sm font-medium text-slate-900 dark:text-white">General Information</h3>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                                Admin Email
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full px-4 py-2 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-colors"
                            />
                        </div>
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                disabled={loading}
                                className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-sm font-semibold rounded-lg shadow-sm hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                style={{ backgroundColor: 'var(--color-blue-600)', color: 'white' }}
                            >
                                {loading ? "Saving..." : "Save Email"}
                            </button>
                        </div>
                    </form>

                    {/* Password Change Form (OTP) */}
                    <div className="p-6 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 space-y-6 transition-colors">
                        <h3 className="text-sm font-medium text-slate-900 dark:text-white">Change Password</h3>

                        {!showPasswordOtpInput ? (
                            <form onSubmit={handleSendPasswordOtp} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                                        New Password
                                    </label>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter new password"
                                        required
                                        minLength={8}
                                        className="w-full px-4 py-2 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                                        Confirm New Password
                                    </label>
                                    <input
                                        type="password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        placeholder="Confirm new password"
                                        required
                                        minLength={8}
                                        className="w-full px-4 py-2 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-colors"
                                    />
                                </div>
                                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-sm rounded-lg">
                                    <p>We will send a temporary verification code to your email to confirm this change.</p>
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
                            <form onSubmit={handleUpdatePasswordWithOtp} className="space-y-4">
                                <div className="text-center space-y-2">
                                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-2">
                                        <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <h3 className="font-bold text-slate-900 dark:text-white">Verify Identity</h3>
                                    <p className="text-sm text-slate-500">
                                        Code sent to your email. Expires in <span className={timeLeft < 10 ? "text-red-500 font-bold" : "text-blue-500 font-bold"}>00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}</span>
                                    </p>
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        value={passwordOtpCode}
                                        onChange={(e) => setPasswordOtpCode(e.target.value)}
                                        className="w-full text-center tracking-[0.5em] text-2xl py-3 border border-slate-200 dark:border-slate-700 rounded-lg dark:bg-slate-950 dark:text-white bg-white outline-none focus:ring-2 focus:ring-blue-500"
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

                                <div className="flex flex-col gap-2 mt-2">
                                    {timeLeft === 0 && (
                                        <button
                                            type="button"
                                            onClick={handleSendPasswordOtp}
                                            className="text-sm text-blue-500 hover:underline"
                                        >
                                            Resend Code
                                        </button>
                                    )}
                                    <button
                                        type="button"
                                        onClick={() => { setShowPasswordOtpInput(false); setTimeLeft(60); }}
                                        className="text-sm text-slate-500 hover:text-slate-800 dark:hover:text-white"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>

                {/* Right Column: News Ticker Management */}
                <div className="space-y-6">
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">News Ticker Management</h2>
                    <AdminNewsTicker />
                </div>
            </div>

            {/* Login History */}
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden mt-8">
                <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center gap-3">
                    <Shield className="w-5 h-5 text-blue-600" />
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
    );
}
