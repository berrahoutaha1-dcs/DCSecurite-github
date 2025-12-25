import { X, Mail, Lock, Eye, EyeOff, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface CustomerLoginProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToSignUp?: () => void;
}

import { ROUTES } from "../routes";
import { API_BASE_URL } from "../config";

type ViewState = 'login' | 'forgot_email' | 'forgot_otp' | 'forgot_new_password';

export function CustomerLogin({ isOpen, onClose, onSwitchToSignUp }: CustomerLoginProps) {
  const [view, setView] = useState<ViewState>('login');

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false); // New state for terms
  const [termsError, setTermsError] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [verificationNeeded, setVerificationNeeded] = useState(false); // New state
  const [showOTPInput, setShowOTPInput] = useState(false); // For LOGIN 2FA
  const [otpCode, setOtpCode] = useState("");

  // Forgot Password State
  const [resetCode, setResetCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  if (!isOpen) return null;

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/api/2fa/verify`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email, two_factor_code: otpCode }),
      });
      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        toast.success("Login successful!");
        onClose();
        navigate("/client");
      } else {
        toast.error(data.message || "Invalid code");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const handleResendVerification = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/api/email/resend`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Verification link sent!");
        setVerificationNeeded(false); // Reset to allow login attempt again if they click link
      } else {
        toast.error(data.message || "Failed to send email.");
      }
    } catch (error) {
      console.error("Resend Error:", error);
      toast.error("An error occurred. Check your connection.");
    } finally {
      setLoading(false);
    }
  }

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!agreedToTerms) {
      setTermsError(true);
      return;
    }

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

      const text = await response.text();
      let data;
      try {
        data = JSON.parse(text);
      } catch (err) {
        console.error("Failed to parse JSON response:", text);
        throw new Error(`Server connection error: ${response.status} ${response.statusText}`);
      }

      if (response.ok) {
        // Check for 2FA requirement
        if (data.two_factor_required) {
          setShowOTPInput(true);
          toast.success("Please check your email for the verification code.");
        } else {
          // Normal Login (Fallback if 2FA disabled)
          localStorage.setItem("token", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
          toast.success("Login successful!");
          onClose();
          navigate("/client");
        }
      } else {
        if (response.status === 403 && data.email_verified === false) {
          setVerificationNeeded(true);
          toast.error("Email not verified. Please check your inbox.");
        } else {
          toast.error(data.message || "Invalid credentials");
        }
      }
    } catch (error: any) {
      console.error("Login Error:", error);
      toast.error(error.message || "An error occurred. Check your connection.");
    } finally {
      setLoading(false);
    }
  };

  const handleResendOTP = async () => {
    if (!password) {
      toast.error("Session expired. Please sign in again.");
      setShowOTPInput(false);
      return;
    }

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
        toast.success("Verification code sent again!");
      } else {
        toast.error(data.message || "Failed to resend code");
      }
    } catch (error) {
      toast.error("Connection error");
    } finally {
      setLoading(false);
    }
  };

  // --- Forgot Password Handlers ---

  const handleSendForgotCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/api/forgot-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success(data.message);
        setView('forgot_otp');
      } else {
        toast.error(data.message || "Something went wrong.");
      }
    } catch (error) {
      toast.error("Connection error.");
    } finally {
      setLoading(false);
    }
  }

  const handleVerifyResetOtp = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic: Just move to next step, backend verifies code at final reset
    if (resetCode.length === 6) {
      setView('forgot_new_password');
    } else {
      toast.error("Please enter a valid 6-digit code");
    }
  }

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmNewPassword) {
      toast.error("Passwords do not match");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/api/reset-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email, code: resetCode, password: newPassword, password_confirmation: confirmNewPassword }),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success("Password reset successfully! Please login.");
        setView('login');
        setShowOTPInput(false);
        setPassword("");
      } else {
        toast.error(data.message || "Failed to reset password.");
      }
    } catch (error) {
      toast.error("Connection error.");
    } finally {
      setLoading(false);
    }
  }


  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-black rounded-2xl shadow-2xl shadow-green-500/20 border border-green-500 max-w-md w-full animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="relative border-b border-green-500/30 p-6">
          <h2 className="text-2xl text-white text-center">
            {view === 'login' && (showOTPInput ? 'Two-Factor Authentication' : 'Customer Login')}
            {view === 'forgot_email' && 'Reset Password'}
            {view === 'forgot_otp' && 'Verify Code'}
            {view === 'forgot_new_password' && 'New Password'}
          </h2>
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-2 rounded-full hover:bg-slate-900 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-slate-400" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          {verificationNeeded ? (
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-yellow-500" />
              </div>
              <h2 className="text-xl font-bold text-white">Verification Required</h2>
              <p className="text-slate-400">
                Your email <span className="text-white font-medium">{email}</span> is not verified yet.
              </p>
              <button
                onClick={handleResendVerification}
                disabled={loading}
                className="w-full py-3 bg-yellow-600 hover:bg-yellow-500 text-white rounded-xl transition-all font-medium mt-4 flex items-center justify-center gap-2"
              >
                {loading ? "Sending..." : "Resend Verification Email"}
              </button>
              <button
                onClick={() => setVerificationNeeded(false)}
                className="text-slate-500 hover:text-white text-sm mt-4"
              >
                Back to Login
              </button>
            </div>
          ) : view === 'login' && showOTPInput ? (
            /* OTP LOGIN INPUT FORM */
            <form onSubmit={handleVerifyOTP} className="space-y-4">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-white">Two-Factor Authentication</h3>
                <p className="text-slate-400 text-sm mt-2">
                  Enter the 6-digit code sent to <br /> <span className="text-white">{email}</span>
                </p>
              </div>

              <div>
                <label className="block text-slate-300 mb-2 text-center">Verification Code</label>
                <input
                  type="text"
                  value={otpCode}
                  onChange={(e) => setOtpCode(e.target.value)}
                  placeholder="123456"
                  maxLength={6}
                  className="w-full text-center tracking-[0.5em] text-2xl py-3 bg-slate-100 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-green-600 hover:bg-green-500 text-white rounded-xl transition-all font-medium mt-4"
              >
                {loading ? "Verifying..." : "Verify Code"}
              </button>

              <button
                type="button"
                onClick={handleResendOTP}
                disabled={loading}
                className="w-full text-green-500 hover:text-green-400 text-sm font-medium mt-2"
              >
                Send code again
              </button>

              <button
                type="button"
                onClick={() => setShowOTPInput(false)}
                className="w-full text-slate-500 hover:text-white text-sm mt-4"
              >
                Back to Login
              </button>
            </form>
          ) : view === 'login' ? (
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-slate-300 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
                    <Mail className="w-5 h-5" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full pl-11 pr-4 py-3 bg-slate-100 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-slate-300 mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
                    <Lock className="w-5 h-5" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                    className="w-full pl-11 pr-12 py-3 bg-slate-100 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Remember & Forgot Password */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-slate-600 bg-slate-800 text-green-500 focus:ring-green-500 focus:ring-offset-0 focus:ring-offset-black"
                  />
                  <span className="text-slate-400 group-hover:text-white transition-colors">
                    Remember me
                  </span>
                </label>
                <button
                  type="button"
                  onClick={() => setView('forgot_email')}
                  className="text-green-500 hover:text-green-400 transition-colors"
                >
                  Forgot password?
                </button>
              </div>

              {/* Terms & Privacy Checkbox */}
              <div className="flex items-start gap-2 text-sm">
                <div className="relative flex items-center h-5">
                  <input
                    type="checkbox"
                    id="agreeTerms"
                    checked={agreedToTerms}
                    onChange={(e) => {
                      setAgreedToTerms(e.target.checked);
                      if (e.target.checked) setTermsError(false);
                    }}
                    className="w-4 h-4 rounded border-slate-600 bg-slate-800 text-green-500 focus:ring-green-500 focus:ring-offset-0 focus:ring-offset-black"
                  />
                </div>
                <label htmlFor="agreeTerms" className="text-slate-400 leading-tight">
                  I agree to the{" "}
                  <a href={ROUTES.PRIVACY} className="text-green-500 hover:text-green-400 hover:underline">Privacy Policy</a>,{" "}
                  <a href={ROUTES.TERMS} className="text-green-500 hover:text-green-400 hover:underline">Terms of Service</a>, and{" "}
                  <a href={ROUTES.COOKIES} className="text-green-500 hover:text-green-400 hover:underline">Cookie Policy</a>.
                </label>
              </div>
              {termsError && (
                <p className="text-red-500 text-sm font-bold ml-7 -mt-2">You must check this box to proceed</p>
              )}

              {/* Login Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-green-600 hover:bg-green-500 text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/20 transform hover:scale-[1.02] active:scale-[0.98] font-medium disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
              >
                {loading ? "Signing In..." : "Sign In"}
              </button>

              <div className="mt-6 text-center text-sm text-slate-400">
                Don't have an account?{" "}
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onSwitchToSignUp?.();
                  }}
                  className="text-green-500 hover:text-green-400 font-medium hover:underline transition-colors"
                >
                  Sign up
                </button>
              </div>
            </form>
          ) : view === 'forgot_email' ? (
            /* FORGOT PASSWORD: ENTER EMAIL */
            <form onSubmit={handleSendForgotCode} className="space-y-4">
              <p className="text-slate-400 text-center text-sm mb-4">Enter your email address to receive a verification code.</p>
              <div>
                <label className="block text-slate-300 mb-2">Email Address</label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"><Mail className="w-5 h-5" /></div>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required className="w-full pl-11 pr-4 py-3 bg-slate-100 border border-slate-200 rounded-xl text-slate-900 focus:ring-green-500" />
                </div>
              </div>
              <button type="submit" disabled={loading} className="w-full py-3 bg-green-600 hover:bg-green-500 text-white rounded-xl font-medium">{loading ? "Sending..." : "Send Code"}</button>
              <button type="button" onClick={() => setView('login')} className="w-full text-slate-500 hover:text-white text-sm mt-4 flex items-center justify-center gap-2"><ArrowLeft className="w-4 h-4" /> Back to Login</button>
            </form>
          ) : view === 'forgot_otp' ? (
            /* FORGOT PASSWORD: ENTER OTP */
            <form onSubmit={handleVerifyResetOtp} className="space-y-4">
              <p className="text-slate-400 text-center text-sm mb-4">Enter the 6-digit code sent to <span className="text-white">{email}</span></p>
              <div>
                <input type="text" value={resetCode} onChange={(e) => setResetCode(e.target.value)} placeholder="123456" maxLength={6} className="w-full text-center tracking-[0.5em] text-2xl py-3 bg-slate-100 border border-slate-200 rounded-xl text-slate-900 focus:ring-green-500" />
              </div>
              <button type="submit" className="w-full py-3 bg-green-600 hover:bg-green-500 text-white rounded-xl font-medium">Verify Code</button>
              <button type="button" onClick={() => setView('forgot_email')} className="w-full text-slate-500 hover:text-white text-sm mt-4">Change Email</button>
            </form>
          ) : view === 'forgot_new_password' ? (
            /* FORGOT PASSWORD: NEW PASSWORD */
            <form onSubmit={handleResetPassword} className="space-y-4">
              <p className="text-slate-400 text-center text-sm mb-4">Create a new password for your account.</p>
              <div>
                <label className="block text-slate-300 mb-2">New Password</label>
                <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="New Password" required className="w-full px-4 py-3 bg-slate-100 border border-slate-200 rounded-xl text-slate-900 focus:ring-green-500" />
              </div>
              <div>
                <label className="block text-slate-300 mb-2">Confirm New Password</label>
                <input type="password" value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)} placeholder="Confirm New Password" required className="w-full px-4 py-3 bg-slate-100 border border-slate-200 rounded-xl text-slate-900 focus:ring-green-500" />
              </div>
              <button type="submit" disabled={loading} className="w-full py-3 bg-green-600 hover:bg-green-500 text-white rounded-xl font-medium">{loading ? "Resetting..." : "Reset Password"}</button>
              <button type="button" onClick={() => { setView('login'); setResetCode(""); setNewPassword(""); }} className="w-full text-slate-500 hover:text-white text-sm mt-4">Cancel</button>
            </form>
          ) : null}
        </div>
      </div>
    </div>
  );
}
