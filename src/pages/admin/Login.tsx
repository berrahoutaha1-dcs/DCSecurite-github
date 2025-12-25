import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Lock, Mail, ArrowRight, Shield } from "lucide-react";
import { API_BASE_URL } from "../../config";

export function AdminLoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    // OTP State
    const [view, setView] = useState<'credentials' | 'otp'>('credentials');
    const [otp, setOtp] = useState("");
    const [timer, setTimer] = useState(60);

    const navigate = useNavigate();

    // Timer Logic
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (view === 'otp' && timer > 0) {
            interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [view, timer]);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch(`${API_BASE_URL}/api/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                if (data.two_factor_required) {
                    toast.success("Credentials valid. Please check your email for the OTP.");
                    setView('otp');
                    setTimer(60);
                } else if (data.token) {
                    // Direct login (fallback if 2FA not enforced for some reason)
                    localStorage.setItem("token", data.token);
                    toast.success("Welcome back, Admin!");
                    navigate("/admin");
                }
            } else {
                toast.error(data.message || "Invalid credentials");
            }
        } catch (error) {
            console.error("Login Error:", error);
            toast.error("An error occurred. Check your connection.");
        } finally {
            setLoading(false);
        }
    };

    const handleVerifyOtp = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch(`${API_BASE_URL}/api/2fa/verify`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify({ email, two_factor_code: otp }),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem("token", data.token);
                toast.success("Two-factor authentication successful.");
                navigate("/admin");
            } else {
                toast.error(data.message || "Invalid or expired code");
            }
        } catch (error) {
            console.error("OTP Error:", error);
            toast.error("Verification failed.");
        } finally {
            setLoading(false);
        }
    };

    const handleResendOtp = async () => {
        setLoading(true);
        try {
            // We can reuse the login endpoint to trigger resend or create a specific resend endpoint. 
            // Re-calling login with credentials is the easiest way without new endpoints if we have the password.
            // But for security, better to just let them go back.
            // Or we can use the existing credentials to re-trigger login logic.

            // Simplest approach: Call login again (since we have email/password in state)
            const response = await fetch(`${API_BASE_URL}/api/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json", "Accept": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                setTimer(60);
                toast.success("New code sent.");
            } else {
                toast.error("Failed to resend code.");
            }
        } catch (error) {
            toast.error("Network error.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
            {/* Ambient Background Effects */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-md w-full bg-slate-900/50 backdrop-blur-xl border border-slate-800/50 rounded-2xl shadow-2xl p-8 space-y-8 relative z-10 ring-1 ring-white/5">
                <div className="text-center space-y-2">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 text-blue-500 mb-4">
                        {view === 'credentials' ? <Lock className="h-6 w-6" /> : <Shield className="h-6 w-6" />}
                    </div>
                    <h1 className="text-3xl font-bold text-white tracking-tight">Admin Login</h1>
                    <p className="text-slate-400">
                        {view === 'credentials'
                            ? "Enter your credentials to access the dashboard."
                            : "Enter the verification code sent to your email."}
                    </p>
                </div>

                {view === 'credentials' ? (
                    <form onSubmit={handleLogin} className="space-y-6" autoComplete="off">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300">Email</label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-2.5 h-5 w-5 text-slate-500" />
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder=""
                                        autoComplete="off"
                                        required
                                        className="w-full pl-10 pr-4 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300">Password</label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-2.5 h-5 w-5 text-slate-500" />
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder=""
                                        autoComplete="off"
                                        required
                                        className="w-full pl-10 pr-4 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                                    />
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold py-2.5 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed group shadow-lg shadow-blue-900/20"
                        >
                            {loading ? "Signing in..." : "Sign In"}
                            {!loading && <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />}
                        </button>
                    </form>
                ) : (
                    <form onSubmit={handleVerifyOtp} className="space-y-6">
                        <div className="space-y-4">
                            <div className="space-y-2 text-center">
                                <label className="text-sm font-medium text-slate-300 block mb-2">Verification Code</label>
                                <input
                                    type="text"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                    placeholder="123456"
                                    maxLength={6}
                                    autoFocus
                                    className="w-full text-center tracking-[0.5em] text-2xl py-3 bg-slate-950 border border-slate-800 rounded-lg text-white placeholder:text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                                />
                                <div className="text-sm mt-2 text-slate-400">
                                    Expires in <span className={timer < 10 ? "text-red-500 font-bold" : "text-blue-400 font-bold"}>00:{timer < 10 ? `0${timer}` : timer}</span>
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold py-2.5 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed group shadow-lg shadow-blue-900/20"
                        >
                            {loading ? "Verifying..." : "Verify Code"}
                        </button>

                        <div className="flex flex-col gap-2">
                            {timer === 0 && (
                                <button
                                    type="button"
                                    onClick={handleResendOtp}
                                    className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                                >
                                    Resend Code
                                </button>
                            )}
                            <button
                                type="button"
                                onClick={() => { setView('credentials'); setOtp(""); setPassword(""); }}
                                className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
                            >
                                Back to Login
                            </button>
                        </div>
                    </form>
                )}

                <div className="text-center text-xs text-slate-600">
                    <p>Protected by NCF Box</p>
                </div>
            </div>
        </div>
    );
}
