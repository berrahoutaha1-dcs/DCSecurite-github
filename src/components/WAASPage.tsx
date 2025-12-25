import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  Eye,
  Zap,
  Activity,
  Globe,
  Server,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  Layers,
  Code,
  Database,
  ShieldCheck,
  FileCheck,
  Network,
  Target,
  Users,
  RefreshCw,
  BarChart3,
  Bell,
  Cpu,
  Cloud,
  KeyRound,
  Workflow,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes";
import { ServicePricing } from "./shared/ServicePricing";
import { servicePlans } from "../data/servicePlans";
import { ChevronRight } from "lucide-react";
import { useTheme } from "./ThemeContext";


interface WAASPageProps {
  onPrivacyClick: () => void;
  onTermsClick: () => void;
  onCookieClick: () => void;
  onUnderAttackClick: () => void;
  onHomeClick: () => void;
  onSignInClick: () => void;
  onCustomerLoginClick: () => void;
  onAdminLoginClick: () => void;
  onStudentMemberLoginClick: () => void;
  onCustomerSignUpClick: () => void;
  onStudentMemberSignUpClick: () => void;
  onSignUpModalOpen: () => void;
  onContactClick: () => void;
  onThreatMapClick: () => void;
  onSecurityTestClick: () => void;
  onAboutClick: () => void;
  onLocationsClick: () => void;
  onEthicsComplianceClick: () => void;
  onCorporateResponsibilityClick: () => void;
  onCollaborationDonationClick: () => void;
  onPrecisionAISecurityClick: () => void;
  onAccelerateTransformationClick: () => void;
  onAwardsRecognitionClick: () => void;
  onCustomerStoriesClick: () => void;
  onCTFProgramClick: () => void;
  onCareersOverviewClick: () => void;
  onEventsClick: () => void;
  onIndustriesClick: () => void;
  onERPManagementClick: () => void;
  onCRMClick: () => void;
  onHRMClick: () => void;
  onIndustrialClick: () => void;
  onConstructionClick: () => void;
  onLogisoft360Click: () => void;
  onUIUXDesignClick: () => void;
  onWebDevelopmentClick: () => void;
  onMobileDevelopmentClick: () => void;
  onWhatsNewClick: () => void;
  onCommunityClick: () => void;
  onCloudNetworkSecurityClick: () => void;
  onIDSIPSClick: () => void;
  onWebPhishingSecurityClick: () => void;
  onSecureWorkDeviceClick: () => void;
  onOTSecurityClick: () => void;
}

interface LoginContext {
  openCustomerLogin: () => void;
}

const WAASPage: React.FC<WAASPageProps> = (props) => {
  const { openCustomerLogin } = useOutletContext<LoginContext>();
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0e27] text-white transition-colors duration-300">


      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Deep dark gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-[#0a0e27] dark:via-[#0D1B3E] dark:to-[#0a1628] z-0" />

        {/* Animated cyber grid - subtle */}
        <div
          className="absolute inset-0 opacity-[0.008] z-[1]"
          style={{
            backgroundImage:
              "linear-gradient(#0D6EFF 1px, transparent 1px), linear-gradient(90deg, #0D6EFF 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        {/* Network mesh illustration with glowing nodes - subtle */}
        <div className="absolute inset-0 z-[2] opacity-[0.05]">
          <svg className="w-full h-full">
            {/* Connection lines */}
            {[...Array(20)].map((_, i) => {
              const x1 = Math.random() * 100;
              const y1 = Math.random() * 100;
              const x2 = Math.random() * 100;
              const y2 = Math.random() * 100;

              return (
                <motion.line
                  key={i}
                  x1={`${x1}%`}
                  y1={`${y1}%`}
                  x2={`${x2}%`}
                  y2={`${y2}%`}
                  stroke="#0D6EFF"
                  strokeWidth="2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.3 }}
                  transition={{
                    duration: 2,
                    delay: i * 0.1,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              );
            })}

            {/* Glowing nodes */}
            {[...Array(15)].map((_, i) => {
              const cx = Math.random() * 100;
              const cy = Math.random() * 100;

              return (
                <motion.circle
                  key={i}
                  cx={`${cx}%`}
                  cy={`${cy}%`}
                  r="4"
                  fill="#06b6d4"
                  animate={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.5, 1] }}
                  transition={{ duration: 3, delay: i * 0.2, repeat: Infinity }}
                />
              );
            })}
          </svg>
        </div>

        {/* Floating shield animation - subtle */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[3] opacity-[0.06]"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Shield className="w-96 h-96 text-cyan-400" />
        </motion.div>

        {/* Scanning waves - subtle */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[800px] md:h-[800px] rounded-full border-2 border-cyan-400/10 z-[4]"
          animate={{ scale: [1, 1.5], opacity: [0.02, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[800px] md:h-[800px] rounded-full border-2 border-blue-400/10 z-[4]"
          animate={{ scale: [1, 1.5], opacity: [0.02, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 2 }}
        />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 md:px-8 max-w-6xl">

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-6 bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 dark:from-cyan-300 dark:via-blue-400 dark:to-cyan-300 bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Web Application & API Security
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl md:text-3xl text-gray-700 dark:text-cyan-200 mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Protect your web apps and APIs with continuous scanning, real-time defense, and advanced
            threat detection.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <motion.button
              className="relative px-8 sm:px-10 py-3 sm:py-4 rounded-full overflow-hidden group w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              onClick={openCustomerLogin}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-[length:200%_100%] animate-[shimmer_3s_linear_infinite]" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 blur-xl opacity-50" />
              <span className="relative text-white text-base sm:text-lg z-10">
                Start Protection
              </span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* What is WAAS Section */}
      <section className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            className="text-center mb-12 sm:mb-16 md:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6 bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              What is WAAS?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
              Web Application and API Security (WAAS) is a comprehensive security solution that
              protects your digital assets from cyber threats. In today&apos;s interconnected world,
              web applications and APIs are the backbone of business operations, making them prime
              targets for attackers. WAAS provides multi-layered defense mechanisms to ensure your
              applications remain secure, compliant, and available 24/7.
            </p>
          </motion.div>

          {/* 3 Highlight Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Shield,
                title: "24/7 Real-Time Protection",
                description:
                  "Continuous monitoring and instant threat blocking to keep your applications safe around the clock.",
              },
              {
                icon: RefreshCw,
                title: "Automated Security Testing",
                description:
                  "Scheduled vulnerability scans and penetration tests without manual intervention.",
              },
              {
                icon: Activity,
                title: "API Vulnerability Monitoring",
                description:
                  "Deep inspection of API endpoints to detect and prevent data breaches and unauthorized access.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-3xl blur-xl" />

                <div className="relative bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-md border border-cyan-400/30 rounded-3xl p-6 sm:p-8 h-full">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center mb-4 sm:mb-6 shadow-[0_0_30px_rgba(6,182,212,0.5)]">
                    <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl text-cyan-300 mb-3 sm:mb-4">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-gradient-to-b from-[#0a0e27] to-[#0a1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl mb-12 sm:mb-16 md:mb-20 text-center bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Advanced Security Features
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: Shield,
                title: "Web Application Firewall (WAF)",
                description:
                  "Block malicious traffic and SQL injection attacks before they reach your apps.",
              },
              {
                icon: Network,
                title: "API Security Gateway",
                description:
                  "Centralized authentication, rate limiting, and encryption for all API endpoints.",
              },
              {
                icon: AlertTriangle,
                title: "OWASP Top 10 Protection",
                description: "Defend against the most critical web application security risks.",
              },
              {
                icon: Zap,
                title: "Bot & DDoS Mitigation",
                description:
                  "Intelligent bot detection and distributed denial-of-service attack prevention.",
              },
              {
                icon: Eye,
                title: "Continuous Vulnerability Scanning",
                description: "Automated discovery of security weaknesses in real-time.",
              },
              {
                icon: Cpu,
                title: "Runtime Application Self-Protection (RASP)",
                description:
                  "Built-in security that detects and blocks attacks from within the application.",
              },
              {
                icon: KeyRound,
                title: "Zero-Trust Access Policies",
                description:
                  "Verify every request with identity-based authentication and authorization.",
              },
              {
                icon: BarChart3,
                title: "Traffic Behavior Analytics",
                description:
                  "AI-powered anomaly detection to identify suspicious patterns and threats.",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                className="relative group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl blur-xl" />

                <div className="relative bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-md border border-cyan-400/30 rounded-2xl p-6 h-full hover:border-cyan-400/50 transition-all">
                  <feature.icon className="w-10 h-10 sm:w-12 sm:h-12 text-cyan-400 mb-4" />
                  <h3 className="text-base sm:text-lg md:text-xl text-cyan-300 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Real-Time Dashboard Preview */}
      <section className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl mb-6 text-center bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Real-Time Security Dashboard
          </motion.h2>
          <motion.p
            className="text-center text-base sm:text-lg text-gray-300 mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Monitor threats, track API traffic, and respond to incidents instantly
          </motion.p>

          {/* Fake Dashboard UI */}
          <motion.div
            className="relative rounded-3xl overflow-hidden border border-cyan-400/30"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Soft glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 blur-3xl" />

            <div className="relative bg-gradient-to-br from-[#0D1B3E]/90 to-[#0a1628]/90 backdrop-blur-md p-4 sm:p-6 md:p-8">
              {/* Dashboard Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-4">
                <h3 className="text-xl sm:text-2xl text-cyan-300">Security Overview</h3>
                <div className="flex gap-2 sm:gap-3">
                  <motion.div
                    className="px-3 sm:px-4 py-1 sm:py-2 rounded-full bg-green-500/20 border border-green-400/30 flex items-center gap-2"
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                    <span className="text-xs sm:text-sm text-green-400">Protected</span>
                  </motion.div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
                {[
                  { label: "Blocked Attacks", value: "1,247", icon: Shield, color: "red" },
                  { label: "API Calls", value: "52.3K", icon: Activity, color: "cyan" },
                  { label: "Threats Detected", value: "89", icon: AlertTriangle, color: "orange" },
                  { label: "Uptime", value: "99.9%", icon: CheckCircle, color: "green" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    className={`bg-gradient-to-br from-${stat.color}-500/10 to-${stat.color}-500/5 border border-${stat.color}-400/30 rounded-2xl p-3 sm:p-4`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <stat.icon className={`w-6 h-6 sm:w-8 sm:h-8 text-${stat.color}-400 mb-2`} />
                    <div className={`text-xl sm:text-2xl md:text-3xl text-${stat.color}-400 mb-1`}>
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Attack Logs */}
              <div className="bg-black/30 rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6">
                <h4 className="text-base sm:text-lg text-cyan-300 mb-4">Recent Attack Logs</h4>
                <div className="space-y-2 sm:space-y-3">
                  {[
                    {
                      time: "14:32:18",
                      type: "SQL Injection",
                      status: "Blocked",
                      ip: "192.168.1.45",
                    },
                    { time: "14:31:52", type: "XSS Attack", status: "Blocked", ip: "10.0.0.123" },
                    {
                      time: "14:30:09",
                      type: "DDoS Attempt",
                      status: "Mitigated",
                      ip: "172.16.0.88",
                    },
                  ].map((log, i) => (
                    <motion.div
                      key={i}
                      className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 bg-red-500/5 border border-red-400/20 rounded-lg p-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className="flex items-center gap-2 sm:gap-3">
                        <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-gray-300">{log.time}</span>
                        <span className="text-xs sm:text-sm text-red-400">{log.type}</span>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-4 ml-6 sm:ml-0">
                        <span className="text-xs text-gray-500">{log.ip}</span>
                        <span className="text-xs text-green-400">{log.status}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Traffic Map Visualization */}
              <div className="relative h-32 sm:h-48 bg-black/30 rounded-2xl overflow-hidden">
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "linear-gradient(#06b6d4 1px, transparent 1px), linear-gradient(90deg, #06b6d4 1px, transparent 1px)",
                    backgroundSize: "30px 30px",
                  }}
                />

                {/* Animated indicators */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-cyan-400"
                    style={{
                      left: `${Math.random() * 90 + 5}%`,
                      top: `${Math.random() * 70 + 15}%`,
                    }}
                    animate={{
                      scale: [1, 1.8, 1],
                      opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                ))}

                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 text-xs sm:text-sm text-gray-400">
                  API Traffic Map - Real-time
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-gradient-to-b from-[#0a1628] to-[#0a0e27]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl mb-12 sm:mb-16 md:mb-20 text-center bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            How It Works
          </motion.h2>

          <div className="relative">
            {/* Connection line - hidden on mobile */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-blue-500 to-cyan-400 -translate-x-1/2" />

            {[
              {
                step: "01",
                title: "Connect Your Domain or API",
                description:
                  "Simple integration via DNS, SDK, or reverse proxy. No code changes required.",
                icon: Network,
              },
              {
                step: "02",
                title: "Automatic Scanning & Threat Detection",
                description:
                  "Our AI engine continuously scans for vulnerabilities and monitors traffic patterns.",
                icon: Eye,
              },
              {
                step: "03",
                title: "Continuous Runtime Protection",
                description:
                  "Real-time blocking of attacks, automated patching, and instant alerts.",
                icon: Shield,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className={`relative mb-12 sm:mb-16 md:mb-24 flex flex-col md:flex-row items-center gap-6 md:gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
              >
                {/* Content */}
                <div
                  className={`flex-1 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}
                >
                  <div className="text-cyan-400/40 text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl text-cyan-300 mb-3 sm:mb-4">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-400">
                    {item.description}
                  </p>
                </div>

                {/* Icon */}
                <div className="relative flex-shrink-0">
                  <div className="absolute inset-0 bg-cyan-500/20 blur-2xl rounded-full" />
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-[0_0_40px_rgba(6,182,212,0.6)]">
                    <item.icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Standards Section */}
      <section className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl mb-6 text-center bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Compliance & Standards
          </motion.h2>
          <motion.p
            className="text-center text-base sm:text-lg text-gray-300 mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Built to meet global security and compliance requirements
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                name: "OWASP",
                description: "Top 10 Web Application Security Risks coverage",
              },
              {
                name: "ISO 27001",
                description: "Information security management standards",
              },
              {
                name: "PCI DSS",
                description: "Payment card industry data security standard",
              },
              {
                name: "GDPR",
                description: "European data protection regulation compliance",
              },
            ].map((standard, i) => (
              <motion.div
                key={i}
                className="relative group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl blur-xl" />

                <div className="relative bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-md border border-cyan-400/30 rounded-2xl p-6 text-center h-full hover:border-cyan-400/50 transition-all">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                    <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl text-cyan-300 mb-2">{standard.name}</h3>
                  <p className="text-xs sm:text-sm text-gray-400">{standard.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-gradient-to-b from-[#0a0e27] to-[#0a1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl mb-12 sm:mb-16 md:mb-20 text-center bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Why Choose Our WAAS?
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Target,
                title: "Reduced Attack Surface",
                description:
                  "Minimize exposure points and eliminate vulnerabilities before attackers find them.",
              },
              {
                icon: Eye,
                title: "Full API Visibility",
                description:
                  "Complete transparency into all API calls, data flows, and third-party integrations.",
              },
              {
                icon: Code,
                title: "No-Code Integration",
                description:
                  "Deploy in minutes without modifying your application code or infrastructure.",
              },
              {
                icon: Zap,
                title: "Real-Time Blocking",
                description:
                  "Instant threat response with millisecond latency and zero false positives.",
              },
              {
                icon: Cpu,
                title: "Machine Learning Detection",
                description:
                  "AI-powered threat intelligence that learns and adapts to new attack patterns.",
              },
              {
                icon: Cloud,
                title: "Multi-Environment Support",
                description:
                  "Protect applications across cloud, on-premises, and hybrid infrastructures.",
              },
            ].map((advantage, i) => (
              <motion.div
                key={i}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-3xl blur-xl" />

                <div className="relative bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-md border border-cyan-400/30 rounded-3xl p-6 h-full hover:border-cyan-400/50 transition-all">
                  <advantage.icon className="w-10 h-10 sm:w-12 sm:h-12 text-cyan-400 mb-4" />
                  <h3 className="text-lg sm:text-xl text-cyan-300 mb-3">{advantage.title}</h3>
                  <p className="text-sm sm:text-base text-gray-400">{advantage.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ServicePricing
        title={servicePlans["waas"].title}
        description={servicePlans["waas"].description}
        plans={servicePlans["waas"].plans}
      />

      {/* Use Cases Section */}
      <section className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl mb-6 text-center bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Industry Use Cases
          </motion.h2>
          <motion.p
            className="text-center text-base sm:text-lg text-gray-300 mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Trusted by leading organizations across industries
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: "🛒",
                title: "E-commerce Applications",
                description:
                  "Protect customer data, payment information, and prevent fraud during checkout processes.",
                color: "from-green-500/20 to-emerald-500/20",
                border: "border-green-400/30",
              },
              {
                icon: "🏦",
                title: "Banking APIs",
                description:
                  "Secure financial transactions, account access, and sensitive banking operations.",
                color: "from-blue-500/20 to-cyan-500/20",
                border: "border-blue-400/30",
              },
              {
                icon: "☁️",
                title: "SaaS Platforms",
                description:
                  "Multi-tenant security, API rate limiting, and subscription service protection.",
                color: "from-purple-500/20 to-pink-500/20",
                border: "border-purple-400/30",
              },
              {
                icon: "⚕️",
                title: "Healthcare Systems",
                description:
                  "HIPAA-compliant protection for patient records and medical data APIs.",
                color: "from-red-500/20 to-orange-500/20",
                border: "border-red-400/30",
              },
              {
                icon: "🏛️",
                title: "Government Services",
                description:
                  "High-security standards for public services and citizen data protection.",
                color: "from-indigo-500/20 to-blue-500/20",
                border: "border-indigo-400/30",
              },
              {
                icon: "📱",
                title: "Mobile App Backends",
                description:
                  "API security for iOS and Android applications with millions of users.",
                color: "from-yellow-500/20 to-orange-500/20",
                border: "border-yellow-400/30",
              },
            ].map((useCase, i) => (
              <motion.div
                key={i}
                className="relative group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${useCase.color} rounded-3xl blur-xl`}
                />

                <div
                  className={`relative bg-gradient-to-br ${useCase.color} backdrop-blur-md border ${useCase.border} rounded-3xl p-6 h-full hover:border-opacity-50 transition-all`}
                >
                  <div className="text-4xl sm:text-5xl mb-4">{useCase.icon}</div>
                  <h3 className="text-lg sm:text-xl text-cyan-300 mb-3">{useCase.title}</h3>
                  <p className="text-sm sm:text-base text-gray-400">{useCase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing/Plans Section */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-gradient-to-b from-[#0a1628] to-[#0a0e27]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl mb-6 text-center bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Flexible Plans for Every Business
          </motion.h2>
          <motion.p
            className="text-center text-base sm:text-lg text-gray-300 mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Choose the plan that fits your security needs
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: "Startup",
                price: "$499",
                period: "/month",
                description: "For small businesses & early-stage startups",
                features: [
                  "Up to 5 domains",
                  "Managed WAF (OWASP Top 10)",
                  "Basic API monitoring",
                  "Basic bot protection",
                  "Standard DDoS protection",
                  "50GB monthly traffic",
                  "Email support",
                ],
                cta: "Get Started",
                popular: false,
              },
              {
                name: "Business",
                price: "$1,799",
                period: "/month",
                description: "Most popular — for mid-sized companies & SaaS platforms",
                features: [
                  "Up to 15 domains",
                  "Advanced WAF + custom rules",
                  "API security gateway with inspection & validation",
                  "AI-based bot detection & mitigation",
                  "RASP optional add-on",
                  "Threat intelligence feeds",
                  "24/7 priority support",
                  "500GB monthly traffic",
                  "Weekly security reports",
                ],
                cta: "Get Started",
                popular: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "Pricing",
                description: "Full WAAS for large companies",
                features: [
                  "Unlimited domains",
                  "Full WAAS suite + API discovery",
                  "Automated virtual patching",
                  "Zero-day protection",
                  "Dedicated Security Engineering Team",
                  "Unlimited traffic",
                  "Custom integrations (SIEM, SOAR, CI/CD)",
                  "Compliance assistance (SOC2, PCI, ISO)",
                  "SLA guarantees (99.99%)",
                ],
                cta: "Get Started",
                popular: false,
              },
            ].map((plan, i) => (
              <motion.div
                key={i}
                className={`relative group ${plan.popular ? "md:-mt-4 md:mb-4" : ""}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >


                <div
                  className={`absolute inset-0 bg-gradient-to-br ${plan.popular ? "from-cyan-500/20 to-blue-500/20" : "from-cyan-500/10 to-blue-500/10"} rounded-3xl blur-xl`}
                />

                <div
                  className={`relative bg-gradient-to-br ${plan.popular ? "from-cyan-500/20 to-blue-500/20" : "from-cyan-500/10 to-blue-500/10"} backdrop-blur-md border ${plan.popular ? "border-cyan-400/50" : "border-cyan-400/30"} rounded-3xl p-6 sm:p-8 h-full`}
                >
                  <h3 className="text-xl sm:text-2xl text-cyan-300 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl sm:text-4xl md:text-5xl text-white">
                      {plan.price}
                    </span>
                    <span className="text-base sm:text-lg text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-sm sm:text-base text-gray-400 mb-6">{plan.description}</p>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    className={`w-full py-3 rounded-full ${plan.popular ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-[0_0_30px_rgba(6,182,212,0.5)]" : "border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-400/10"} transition-all`}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => navigate(ROUTES.CONTACT)}
                  >
                    {plan.cta}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-24 sm:py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e27] via-[#050a1f] to-black" />

        {/* Animated cyber defense lines */}
        <div className="absolute inset-0 opacity-[0.03]">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
              style={{ top: `${i * 12.5}%`, width: "100%" }}
              animate={{
                x: ["-100%", "100%"],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                delay: i * 0.4,
                repeat: Infinity,
                repeatDelay: 2,
              }}
            />
          ))}
        </div>

        {/* Glowing shield */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full blur-3xl" />
        </motion.div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 sm:mb-8 bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Secure Your Apps Before Hackers Do.
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Join thousands of companies protecting their web applications and APIs with
            enterprise-grade security.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <motion.button
              className="relative px-10 sm:px-12 py-4 sm:py-5 rounded-full overflow-hidden group w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate(ROUTES.CONTACT)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-[length:200%_100%] animate-[shimmer_3s_linear_infinite]" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 blur-xl opacity-50" />
              <span className="relative text-white text-base sm:text-lg z-10">
                Request WAAS Demo
              </span>
            </motion.button>

            <motion.button
              className="relative px-10 sm:px-12 py-4 sm:py-5 rounded-full border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-400/10 transition-all w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate(ROUTES.SECURITY_TEST)}
            >
              <span className="text-base sm:text-lg">Free Security Test</span>
            </motion.button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="mt-12 sm:mt-16 flex flex-wrap justify-center gap-6 sm:gap-8 text-sm text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>Cancel anytime</span>
            </div>
          </motion.div>
        </div>
      </section>



      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </div>
  );
};

export default WAASPage;
