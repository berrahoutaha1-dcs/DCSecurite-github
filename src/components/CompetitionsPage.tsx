import { motion } from "framer-motion";
import { Lock, Network, Calendar, DollarSign, Clock, MapPin, Award, X, Shield } from "lucide-react";
import { CTFHeader } from "./CTFHeader";
import { useState } from "react";

interface CompetitionsPageProps {
  theme?: "light" | "dark";
  onNavigateToHome?: () => void;
  onNavigateToJobs?: () => void;
  onNavigateToMainSite?: () => void;
}

export const CompetitionsPage = ({
  theme = "dark",
  onNavigateToHome,
  onNavigateToJobs,
  onNavigateToMainSite,
}: CompetitionsPageProps) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isSignupMode, setIsSignupMode] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* CTF Header */}
      <CTFHeader
        onNavigateToHome={onNavigateToHome}
        onNavigateToJobs={onNavigateToJobs}
        onNavigateToMainSite={onNavigateToMainSite}
        currentPage="competitions"
      />

      {/* Subtle Background Gradient */}
      <div className="fixed inset-0 bg-gradient-to-b from-green-500/5 via-transparent to-green-500/5 pointer-events-none" />

      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center px-4 pt-32 pb-12">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl mb-6">
              <span className="block text-green-500">Compétitions</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Test your cybersecurity skills. Compete with the best. Win rewards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Next CTF Challenges Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4">Next CTF Challenges</h2>
            <p className="text-gray-400 text-lg">Test your skills and claim rewards</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Challenge 1: Login Endpoint */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-black/50 border border-white/10 rounded-2xl p-8 hover:border-green-500/50 transition-colors"
            >
              {/* Challenge Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                    <Lock className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl mb-1">Login Endpoint</h3>
                    <span className="inline-block px-3 py-1 text-xs rounded-full bg-yellow-500/20 text-yellow-500 border border-yellow-500/30">
                      passed
                    </span>
                  </div>
                </div>
              </div>

              {/* Mission Description */}
              <div className="mb-6">
                <p className="text-sm text-green-500 mb-2">Mission:</p>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  Break into the login endpoint of a simulated system. Analyze how it validates
                  credentials, probe its weaknesses, and discover the flaw that lets you bypass
                  authentication.
                </p>
                <p className="text-sm text-green-500 mb-2">Objective:</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Find a way to authenticate without valid credentials and capture the flag.
                </p>
              </div>

              {/* Challenge Details */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <div>
                    <p className="text-xs text-gray-500">Date</p>
                    <p className="text-sm">12 July 2025</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <DollarSign className="w-4 h-4 text-gray-500" />
                  <div>
                    <p className="text-xs text-gray-500">Reward</p>
                    <p className="text-sm text-green-500">$900</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <div>
                    <p className="text-xs text-gray-500">Duration</p>
                    <p className="text-sm">12 Hours</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <div>
                    <p className="text-xs text-gray-500">Location</p>
                    <p className="text-sm">🇩🇿 On site - Oran</p>
                  </div>
                </div>
              </div>

              {/* Winner Info */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-400">
                    Winner: <span className="text-green-500">ByteMaster</span>
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Challenge 2: Authentication Gateway */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-black/50 border border-white/10 rounded-2xl p-8 hover:border-green-500/50 transition-colors"
            >
              {/* Challenge Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                    <Network className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl mb-1">Authentication Gateway</h3>
                    <span className="inline-block px-3 py-1 text-xs rounded-full bg-green-500/20 text-green-500 border border-green-500/30">
                      coming soon
                    </span>
                  </div>
                </div>
              </div>

              {/* Mission Description */}
              <div className="mb-6">
                <p className="text-sm text-green-500 mb-2">Mission:</p>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  Evaluate the security level of the company&apos;s authentication gateway within an
                  officially approved testing environment. Analyze authentication mechanisms, review
                  session management, and identify potential vulnerabilities.
                </p>
              </div>

              {/* Challenge Details */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <div>
                    <p className="text-xs text-gray-500">Date</p>
                    <p className="text-sm">5 February 2026</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <DollarSign className="w-4 h-4 text-gray-500" />
                  <div>
                    <p className="text-xs text-gray-500">Reward</p>
                    <p className="text-sm text-green-500">$1,000</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <div>
                    <p className="text-xs text-gray-500">Duration</p>
                    <p className="text-sm">48 Hours</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <div>
                    <p className="text-xs text-gray-500">Location</p>
                    <p className="text-sm">On site - Oran</p>
                  </div>
                </div>
              </div>

              {/* Winner Info */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-400">
                    Winner: <span className="text-green-500">unknown</span>
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">Ready to Compete?</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Join the next challenge and showcase your cybersecurity skills.
          </p>
          <button
            onClick={() => setShowLoginModal(true)}
            className="px-8 py-4 bg-green-500 text-black rounded-lg hover:bg-green-400 transition-colors"
          >
            Register Now
          </button>
        </motion.div>
      </section>

      {/* Student Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative bg-black border border-white/10 rounded-2xl p-8 max-w-md w-full"
          >
            {/* Close Button */}
            <button
              onClick={() => {
                setShowLoginModal(false);
                setIsSignupMode(false);
              }}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Title */}
            <div className="text-center mb-8">
              <h2 className="text-2xl mb-2">{isSignupMode ? "Create Account" : "Welcome Back"}</h2>
              <p className="text-gray-400 text-sm">
                {isSignupMode ? "Join the CTF community" : "Access your dashboard"}
              </p>
            </div>

            {/* Login/Signup Form */}
            <form className="space-y-4">
              {/* Full Name (Signup Only) */}
              {isSignupMode && (
                <div>
                  <label className="block text-sm mb-2 text-gray-400">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
                  />
                </div>
              )}

              {/* Email Input */}
              <div>
                <label className="block text-sm mb-2 text-gray-400">
                  {isSignupMode ? "Email Address" : "Email"}
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
                />
              </div>

              {/* Username (Signup Only) */}
              {isSignupMode && (
                <div>
                  <label className="block text-sm mb-2 text-gray-400">Username</label>
                  <input
                    type="text"
                    placeholder="Choose a username"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
                  />
                </div>
              )}

              {/* Password Input */}
              <div>
                <label className="block text-sm mb-2 text-gray-400">Password</label>
                <input
                  type="password"
                  placeholder={isSignupMode ? "Create a password" : "Enter your password"}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
                />
              </div>

              {/* Confirm Password (Signup Only) */}
              {isSignupMode && (
                <div>
                  <label className="block text-sm mb-2 text-gray-400">Confirm Password</label>
                  <input
                    type="password"
                    placeholder="Confirm your password"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
                  />
                </div>
              )}

              {/* Remember Me & Forgot Password (Login Only) */}
              {!isSignupMode && (
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 text-gray-400 cursor-pointer">
                    <input type="checkbox" className="accent-green-500" />
                    <span>Remember me</span>
                  </label>
                  <a href="#" className="text-green-500 hover:underline">
                    Forgot password?
                  </a>
                </div>
              )}

              {/* Terms Agreement (Signup Only) */}
              {isSignupMode && (
                <label className="flex items-start gap-2 text-gray-400 text-sm cursor-pointer">
                  <input type="checkbox" className="accent-green-500 mt-0.5" />
                  <span>
                    I agree to the{" "}
                    <a href="#" className="text-green-500 hover:underline">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-green-500 hover:underline">
                      Privacy Policy
                    </a>
                  </span>
                </label>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-green-500 text-black py-3 rounded-lg hover:bg-green-400 transition-colors"
              >
                {isSignupMode ? "Create Account" : "Sign In"}
              </button>

              {/* Toggle Login/Signup */}
              <p className="text-center text-gray-400 text-sm">
                {isSignupMode ? (
                  <>
                    Already have an account?{" "}
                    <button
                      type="button"
                      onClick={() => setIsSignupMode(false)}
                      className="text-green-500 hover:underline"
                    >
                      Sign in
                    </button>
                  </>
                ) : (
                  <>
                    Don&apos;t have an account?{" "}
                    <button
                      type="button"
                      onClick={() => setIsSignupMode(true)}
                      className="text-green-500 hover:underline"
                    >
                      Sign up
                    </button>
                  </>
                )}
              </p>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};
