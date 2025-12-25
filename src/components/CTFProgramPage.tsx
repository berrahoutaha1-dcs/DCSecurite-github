import { motion } from "framer-motion";
import {
  Terminal,
  Trophy,
  Users,
  Code,
  Lock,
  Shield,
  X,
  Network,
  Calendar,
  DollarSign,
  Clock,
  Award,
} from "lucide-react";
import { CTFHeader } from "./CTFHeader";
import { useState } from "react";

interface CTFProgramPageProps {
  theme?: "light" | "dark";
  onNavigateToCompetitions?: () => void;
  onNavigateToJobs?: () => void;
  onNavigateToMainSite?: () => void;
}

export const CTFProgramPage = ({
  theme = "dark",
  onNavigateToCompetitions,
  onNavigateToJobs,
  onNavigateToMainSite,
}: CTFProgramPageProps) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isSignupMode, setIsSignupMode] = useState(false);

  const features = [
    {
      icon: <Terminal className="w-6 h-6" />,
      title: "Real Environment",
      description:
        "Practice in realistic, legal cyber environments with live systems and authentic challenges",
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Win Prizes",
      description:
        "Compete in challenges and tournaments to earn rewards, certificates, and recognition",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Daily Training",
      description:
        "Access new challenges daily across web, crypto, forensics, reverse engineering, and more",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Community",
      description: "Join a global community of cybersecurity professionals and enthusiasts",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* CTF Header */}
      <CTFHeader
        onNavigateToCompetitions={onNavigateToCompetitions}
        onNavigateToJobs={onNavigateToJobs}
        onNavigateToMainSite={onNavigateToMainSite}
      />

      {/* Subtle Background Gradient */}
      <div className="fixed inset-0 bg-gradient-to-b from-green-500/5 via-transparent to-green-500/5 pointer-events-none" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-32 pb-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl mb-6">
              <span className="block mb-2">Practice Cybersecurity</span>
              <span className="block text-green-500">In Real Environments</span>
            </h1>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Train daily. Compete globally. Win prizes. Join thousands of cybersecurity enthusiasts
              worldwide.
            </p>

            <motion.button
              onClick={() => setShowLoginModal(true)}
              className="px-8 py-4 bg-green-500 text-black rounded-lg hover:bg-green-400 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Reserve Your Seat
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { label: "Active Users", value: "1000+" },
              { label: "Challenges", value: "15+" },
              { label: "Prizes Won", value: "$10,000+" },
              { label: "Countries", value: "+6" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl text-green-500 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4">Why Join Our CTF Program</h2>
            <p className="text-gray-400 text-lg">
              Train like a pro. Compete globally. Win rewards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-green-500/50 transition-colors"
              >
                <div className="text-green-500 mb-4">{feature.icon}</div>
                <h3 className="text-lg mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leaderboard Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4">Top Winners</h2>
            <p className="text-gray-400 text-lg">Compete globally. Earn rewards.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 border border-white/10 rounded-xl overflow-hidden"
          >
            {[
              { rank: 1, name: "Cybercop", points: 750, country: "🇦🇪" },
              { rank: 2, name: "ByteMaster", points: 1500, country: "🇩🇿" },
              { rank: 3, name: "H4ck3rPr0", points: 900, country: "🇩🇪" },
              { rank: 4, name: "CodeBreaker", points: 1200, country: "🇫🇷" },
              { rank: 5, name: "SecurityWiz", points: 850, country: "🇩🇿" },
            ].map((player, index) => (
              <div
                key={player.rank}
                className={`flex items-center justify-between p-5 ${index < 4 ? "border-b border-white/10" : ""
                  } hover:bg-white/5 transition-colors`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-lg ${player.rank === 1
                        ? "bg-yellow-500/20 text-yellow-500"
                        : player.rank === 2
                          ? "bg-gray-400/20 text-gray-400"
                          : player.rank === 3
                            ? "bg-orange-500/20 text-orange-500"
                            : "bg-white/5 text-gray-400"
                      }`}
                  >
                    {player.rank}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{player.country}</span>
                    <span className="text-white">{player.name}</span>
                  </div>
                </div>
                <div className="text-green-500">${player.points.toLocaleString()}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-4 bg-gradient-to-b from-transparent to-green-500/5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">Ready to Start?</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Join thousands of cybersecurity enthusiasts worldwide. Start your journey today.
          </p>
          <button
            onClick={() => setShowLoginModal(true)}
            className="px-8 py-4 bg-green-500 text-black rounded-lg hover:bg-green-400 transition-colors"
          >
            Join CTF Program
          </button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Shield className="w-6 h-6 text-green-500" />
            <div className="text-lg text-green-500">CTF Program</div>
          </div>
          <p className="text-gray-400 text-sm mb-2">
            © 2025 DCSecurite CTF Program. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs">Practice responsibly. Stay legal. Hack ethically.</p>
        </div>
      </footer>

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
