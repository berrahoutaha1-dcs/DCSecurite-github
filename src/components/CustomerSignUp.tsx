import { X, Mail, Lock, Eye, EyeOff, User, Phone, Building, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface CustomerSignUpProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToLogin?: () => void;
}

import { ROUTES } from "../routes";
import { API_BASE_URL } from "../config";

export function CustomerSignUp({ isOpen, onClose, onSwitchToLogin }: CustomerSignUpProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false); // New state
  const [termsError, setTermsError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false); // New state
  const navigate = useNavigate();

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setEmailSent(false);
      setFullName("");
      setPhoneNumber("");
      setCompanyName("");
      setCompanyWebsite("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setAgreedToTerms(false);
      setTermsError(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!agreedToTerms) {
      setTermsError(true);
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: fullName,
          email,
          password,
          password_confirmation: confirmPassword,
          phone: phoneNumber,
          company_name: companyName,
          company_website: companyWebsite
        }),
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
        setEmailSent(true);
        toast.success("Account created! Please verify your email.");
      } else {
        toast.error(data.message || "Registration failed");
        if (data.errors) {
          // specific errors
          Object.values(data.errors).forEach((err: any) => toast.error(err[0]));
        }
      }
    } catch (error: any) {
      console.error("Registration Error:", error);
      toast.error(error.message || "An error occurred. Check your connection.");
    } finally {
      setLoading(false);
    }
  };

  if (emailSent) {
    return (
      <div
        className="fixed inset-0 z-[60] overflow-y-auto"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
        onClick={onClose}
      >
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity" />
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
          <div
            className="relative transform overflow-hidden rounded-2xl bg-black border border-green-500 text-left shadow-xl transition-all sm:my-8 w-full max-w-md my-8 p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 p-2 rounded-full hover:bg-slate-900 transition-colors"
            >
              <X className="w-5 h-5 text-slate-400" />
            </button>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-green-500" />
              </div>
              <h2 className="text-2xl font-bold text-white">Verify your email</h2>
              <p className="text-slate-400">
                We've sent a verification link to <span className="text-white font-medium">{email}</span>.
              </p>
              <p className="text-slate-400 text-sm">
                Please check your inbox and click the link to verify your account before logging in.
              </p>

              <button
                onClick={async () => {
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
                    } else {
                      toast.error(data.message || "Failed to send email.");
                    }
                  } catch (error) {
                    console.error("Resend Error:", error);
                    toast.error("An error occurred. Check your connection.");
                  } finally {
                    setLoading(false);
                  }
                }}
                disabled={loading}
                className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl transition-all font-medium mt-6 flex items-center justify-center gap-2"
              >
                {loading ? "Sending..." : "Resend Verification Email"}
              </button>

              <button
                onClick={() => {
                  if (onSwitchToLogin) onSwitchToLogin();
                  else onClose();
                }}
                className="w-full py-3 bg-green-600 hover:bg-green-500 text-white rounded-xl transition-all font-medium mt-2"
              >
                Return to Login
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 z-[60] overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      {/* Background backdrop */}
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity" />

      {/* Full-screen container to center the panel */}
      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
        <div
          className="relative transform overflow-hidden rounded-2xl bg-black border border-green-500 text-left shadow-xl transition-all sm:my-8 w-full max-w-md my-8"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="relative border-b border-green-500/30 p-6">
            <h2 className="text-2xl text-white text-center">
              Sign Up as Customer
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
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name Field */}
              <div>
                <label htmlFor="fullName" className="block text-slate-300 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
                    <User className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    id="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter your full name"
                    required
                    className="w-full pl-11 pr-4 py-3 bg-slate-100 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Phone Number Field */}
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-slate-300 mb-2"
                >
                  Phone Number
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
                    <Phone className="w-5 h-5" />
                  </div>
                  <input
                    type="tel"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Enter your phone number"
                    required
                    className="w-full pl-11 pr-4 py-3 bg-slate-100 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Company Name Field (Optional) */}
              <div>
                <label htmlFor="companyName" className="block text-slate-300 mb-2">
                  Company Name <span className="text-slate-500 text-sm">(Optional)</span>
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
                    <Building className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    id="companyName"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="Enter your company name"
                    className="w-full pl-11 pr-4 py-3 bg-slate-100 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Company Website Field (Optional) */}
              <div>
                <label htmlFor="companyWebsite" className="block text-slate-300 mb-2">
                  Company Website <span className="text-slate-500 text-sm">(Optional)</span>
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
                    <Globe className="w-5 h-5" />
                  </div>
                  <input
                    type="url"
                    id="companyWebsite"
                    value={companyWebsite}
                    onChange={(e) => setCompanyWebsite(e.target.value)}
                    placeholder="https://example.com"
                    className="w-full pl-11 pr-4 py-3 bg-slate-100 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

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
                    placeholder="Create a password"
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

              {/* Confirm Password Field */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-slate-300 mb-2"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
                    <Lock className="w-5 h-5" />
                  </div>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm your password"
                    required
                    className="w-full pl-11 pr-12 py-3 bg-slate-100 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700 transition-colors"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Terms & Privacy Checkbox */}
              <div className="flex items-start gap-2 text-sm">
                <div className="relative flex items-center h-5">
                  <input
                    type="checkbox"
                    id="agreeTermsSignUp"
                    checked={agreedToTerms}
                    onChange={(e) => {
                      setAgreedToTerms(e.target.checked);
                      if (e.target.checked) setTermsError(false);
                    }}
                    className="w-4 h-4 rounded border-slate-600 bg-slate-800 text-green-500 focus:ring-green-500 focus:ring-offset-0 focus:ring-offset-black"
                  />
                </div>
                <label htmlFor="agreeTermsSignUp" className="text-slate-400 leading-tight">
                  I agree to the{" "}
                  <a href={ROUTES.PRIVACY} className="text-green-500 hover:text-green-400 hover:underline">Privacy Policy</a>,{" "}
                  <a href={ROUTES.TERMS} className="text-green-500 hover:text-green-400 hover:underline">Terms of Service</a>, and{" "}
                  <a href={ROUTES.COOKIES} className="text-green-500 hover:text-green-400 hover:underline">Cookie Policy</a>.
                </label>
              </div>
              {termsError && (
                <p className="text-red-500 text-sm font-bold ml-7 -mt-2">You must check this box to proceed</p>
              )}

              {/* Sign Up Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-green-600 hover:bg-green-500 text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/20 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none font-medium"
              >
                {loading ? "Creating Account..." : "Create Account"}
              </button>
            </form>

            {/* Login Link */}
            <div className="mt-6 text-center text-sm text-slate-400">
              Already have an account?{" "}
              <a
                href="#"
                className="text-green-500 hover:text-green-400 transition-colors font-medium"
                onClick={onSwitchToLogin}
              >
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

