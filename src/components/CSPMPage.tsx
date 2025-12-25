import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Cloud,
  Lock,
  Eye,
  AlertTriangle,
  CheckCircle,
  Zap,
  Activity,
  Globe,
  ShieldCheck,
  FileCheck,
  RefreshCw,
  Target,
  Database,
  Server,
  Settings,
  Bell,
  TrendingUp,
  ChevronRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes";
import { ServicePricing } from "./shared/ServicePricing";
import { servicePlans } from "../data/servicePlans";


interface CSPMPageProps {
  onPrivacyClick?: () => void;
  onTermsClick?: () => void;
  onCookieClick?: () => void;
  onUnderAttackClick?: () => void;
  onHomeClick?: () => void;
  onSignInClick?: () => void;
  onCustomerLoginClick?: () => void;
  onAdminLoginClick?: () => void;
  onStudentMemberLoginClick?: () => void;
  onCustomerSignUpClick?: () => void;
  onStudentMemberSignUpClick?: () => void;
  onSignUpModalOpen?: () => void;
  onContactClick?: () => void;
  onThreatMapClick?: () => void;
  onSecurityTestClick?: () => void;
  onAboutClick?: () => void;
  onLocationsClick?: () => void;
  onEthicsComplianceClick?: () => void;
  onCorporateResponsibilityClick?: () => void;
  onCollaborationDonationClick?: () => void;
  onPrecisionAISecurityClick?: () => void;
  onAccelerateTransformationClick?: () => void;
  onAwardsRecognitionClick?: () => void;
  onCustomerStoriesClick?: () => void;
  onCTFProgramClick?: () => void;
  onCareersOverviewClick?: () => void;
  onEventsClick?: () => void;
  onIndustriesClick?: () => void;
  onERPManagementClick?: () => void;
  onCRMClick?: () => void;
  onHRMClick?: () => void;
  onIndustrialClick?: () => void;
  onConstructionClick?: () => void;
  onLogisoft360Click?: () => void;
  onUIUXDesignClick?: () => void;
  onWebDevelopmentClick?: () => void;
  onMobileDevelopmentClick?: () => void;
  onWhatsNewClick?: () => void;
  onCommunityClick?: () => void;
  onCloudNetworkSecurityClick?: () => void;
  onIDSIPSClick?: () => void;
  onWebPhishingSecurityClick?: () => void;
  onSecureWorkDeviceClick?: () => void;
  onOTSecurityClick?: () => void;
}

const CSPMPage: React.FC<CSPMPageProps> = (props) => {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0e27] text-white transition-colors duration-300">


      {/* Hero Banner */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Deep dark gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e27] via-[#0D1B3E] to-[#0a1628] z-0" />

        {/* Matrix data rain - reduced opacity for better text visibility */}
        <div className="absolute inset-0 opacity-[0.005] z-[1]">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-cyan-400 text-xs font-mono"
              style={{ left: `${i * 6.66}%`, top: "-10%" }}
              animate={{ y: ["0vh", "110vh"] }}
              transition={{
                duration: 10 + Math.random() * 4,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 5,
              }}
            >
              {Array.from({ length: 15 }, () => (Math.random() > 0.5 ? "1" : "0")).join("\n")}
            </motion.div>
          ))}
        </div>

        {/* Animated cloud silhouette made of glowing particles - reduced count and opacity */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[200px] md:w-[600px] md:h-[400px] z-[2] opacity-[0.06]">
          {[...Array(50)].map((_, i) => {
            const angle = (i / 50) * Math.PI * 2;
            const radius = 150 + Math.sin(angle * 3) * 50;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius * 0.6;

            return (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-cyan-400"
                style={{ left: "50%", top: "50%" }}
                animate={{
                  x: [x, x + Math.cos(angle) * 15, x],
                  y: [y, y + Math.sin(angle) * 15, y],
                  opacity: [0.15, 0.4, 0.15],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 5 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            );
          })}
        </div>

        {/* Floating compliance icons orbiting - reduced opacity */}
        {[
          { icon: "🏛️", label: "ISO", angle: 0 },
          { icon: "📋", label: "SOC2", angle: 120 },
          { icon: "✓", label: "CIS", angle: 240 },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 z-[3] hidden md:block opacity-[0.07]"
            style={{ marginLeft: "-40px", marginTop: "-40px" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            <motion.div
              className="relative"
              style={{
                transform: `rotate(${item.angle}deg) translateX(250px) rotate(-${item.angle}deg)`,
              }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-cyan-500/8 backdrop-blur-md border border-cyan-400/20 flex items-center justify-center">
                <span className="text-2xl sm:text-3xl">{item.icon}</span>
              </div>
              <p className="text-xs text-cyan-300 text-center mt-2">{item.label}</p>
            </motion.div>
          </motion.div>
        ))}

        {/* Scanning waves - reduced opacity */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[250px] sm:w-[600px] sm:h-[375px] md:w-[800px] md:h-[500px] rounded-full border-2 border-cyan-400/15 z-[4]"
          animate={{ scale: [1, 1.5], opacity: [0.03, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[250px] sm:w-[600px] sm:h-[375px] md:w-[800px] md:h-[500px] rounded-full border-2 border-blue-400/15 z-[4]"
          animate={{ scale: [1, 1.5], opacity: [0.03, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
        />

        {/* Hero Text */}
        <div className="relative z-10 text-center px-4 sm:px-6 md:px-8 max-w-5xl">


          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-6 bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Cloud Security Posture Management
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-cyan-200 mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Visibility. Compliance. Control.
          </motion.p>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Continuously monitor, analyze, and harden your cloud environment with real-time risk
            detection and automated remediation.
          </motion.p>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Wavy cyber layer separator */}
        <div className="absolute top-0 left-0 w-full h-32 overflow-hidden">
          <svg viewBox="0 0 1200 120" className="w-full h-full">
            <motion.path
              d="M0,50 Q300,10 600,50 T1200,50 L1200,0 L0,0 Z"
              fill="url(#waveGradient)"
              animate={{
                d: [
                  "M0,50 Q300,10 600,50 T1200,50 L1200,0 L0,0 Z",
                  "M0,50 Q300,90 600,50 T1200,50 L1200,0 L0,0 Z",
                  "M0,50 Q300,10 600,50 T1200,50 L1200,0 L0,0 Z",
                ],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0D6EFF" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#0D6EFF" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-20">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl mb-6 text-center bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Misconfiguration: The #1 Cause of Cloud Breaches.
          </motion.h2>

          {/* Floating bullet points with particle links */}
          <div className="relative mt-24 min-h-[600px]">
            {/* Particle links */}
            <svg className="absolute inset-0 w-full h-full">
              {[
                [30, 20, 50, 50],
                [50, 50, 70, 20],
                [70, 20, 80, 60],
                [50, 50, 40, 80],
                [80, 60, 60, 90],
              ].map(([x1, y1, x2, y2], i) => (
                <motion.line
                  key={i}
                  x1={`${x1}%`}
                  y1={`${y1}%`}
                  x2={`${x2}%`}
                  y2={`${y2}%`}
                  stroke="url(#linkGradient)"
                  strokeWidth="2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.4 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: i * 0.2 }}
                />
              ))}
              <defs>
                <linearGradient id="linkGradient">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#ef4444" />
                </linearGradient>
              </defs>
            </svg>

            {[
              {
                icon: Globe,
                text: "Publicly exposed services",
                position: { top: "20%", left: "30%" },
              },
              {
                icon: AlertTriangle,
                text: "Excessive permissions",
                position: { top: "50%", left: "50%" },
              },
              {
                icon: TrendingUp,
                text: "Drift from best practices",
                position: { top: "20%", left: "70%" },
              },
              {
                icon: Lock,
                text: "Weak encryption policies",
                position: { top: "80%", left: "40%" },
              },
              {
                icon: FileCheck,
                text: "Inconsistent compliance",
                position: { top: "60%", left: "80%" },
              },
              {
                icon: Cloud,
                text: "Shadow cloud resources",
                position: { top: "90%", left: "60%" },
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={item.position}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
              >
                <motion.div
                  className="relative"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3 + i * 0.3, repeat: Infinity }}
                >
                  <div className="relative">
                    {/* Neon glow */}
                    <div className="absolute inset-0 bg-red-500/20 blur-xl rounded-full" />

                    <div className="relative bg-gradient-to-br from-red-500/10 to-orange-500/10 backdrop-blur-md border border-red-400/30 rounded-2xl p-6 min-w-[200px]">
                      <item.icon className="w-8 h-8 text-red-400 mb-3 mx-auto" />
                      <p className="text-sm text-gray-200 text-center">{item.text}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How CSPM Works - Vertical Pipeline */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-gradient-to-b from-[#0a0e27] to-[#0a1628]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl mb-12 sm:mb-16 md:mb-20 text-center bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            How CSPM Works
          </motion.h2>

          {/* Vertical pipeline */}
          <div className="relative">
            {/* Central neon beam - Hidden on mobile */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-blue-500 to-cyan-400 -translate-x-1/2" />

            {/* Animated pulse - Hidden on mobile */}
            <motion.div
              className="hidden md:block absolute left-1/2 w-4 h-4 bg-cyan-400 rounded-full -translate-x-1/2 shadow-[0_0_20px_rgba(6,182,212,0.8)]"
              animate={{ y: [0, 800] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />

            {[
              {
                icon: Database,
                title: "Asset Discovery & Cloud Mapping",
                desc: "Scan and catalog all cloud resources",
              },
              {
                icon: Eye,
                title: "Risk Detection & Policy Violations",
                desc: "Identify misconfigurations instantly",
              },
              {
                icon: FileCheck,
                title: "Compliance Benchmarking",
                desc: "Compare against industry standards",
              },
              { icon: Target, title: "Threat Prioritization", desc: "AI-powered risk scoring" },
              { icon: Zap, title: "Automated Remediation", desc: "Fix issues with one click" },
              {
                icon: Activity,
                title: "Continuous Monitoring & Alerts",
                desc: "Real-time protection 24/7",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                className={`relative mb-12 md:mb-32 w-full md:w-[calc(50%-60px)] ${i % 2 === 0 ? "md:ml-0 md:mr-auto" : "md:ml-auto md:mr-0"}`}
                initial={{ opacity: 0, x: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
              >
                {/* Holographic cloud layer */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-3xl blur-xl" />

                <div
                  className={`relative bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-md border border-cyan-400/30 rounded-3xl p-6 sm:p-8 text-left`}
                >
                  <div
                    className={`flex items-center gap-4 ${i % 2 === 0 ? "" : "md:flex-row-reverse"}`}
                  >
                    <div className="w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.5)]">
                      <step.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl md:text-2xl text-cyan-300 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-400">{step.desc}</p>
                    </div>
                  </div>
                </div>

                {/* Connection node to center beam - Hidden on mobile */}
                <div
                  className={`hidden md:block absolute top-1/2 w-12 h-1 bg-gradient-to-r ${i % 2 === 0 ? "from-cyan-400 to-transparent -right-12" : "from-transparent to-cyan-400 -left-12"} -translate-y-1/2`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Real-Time Cloud Posture Map */}
      <section className="relative py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <motion.h2
            className="text-5xl mb-6 text-center bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            See Every Resource. Spot Every Weak Point.
          </motion.h2>

          {/* Interactive network cloud map */}
          <div className="relative mt-20 h-[600px] bg-gradient-to-br from-[#0D1B3E]/50 to-[#0a1628]/50 backdrop-blur-sm border border-cyan-400/20 rounded-3xl p-12 overflow-hidden">
            {/* Grid background */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "linear-gradient(#06b6d4 1px, transparent 1px), linear-gradient(90deg, #06b6d4 1px, transparent 1px)",
                backgroundSize: "50px 50px",
              }}
            />

            {/* Resource nodes */}
            {[...Array(40)].map((_, i) => {
              const x = Math.random() * 90 + 5;
              const y = Math.random() * 80 + 10;
              const isRed = Math.random() > 0.7;

              return (
                <motion.div
                  key={i}
                  className={`absolute w-3 h-3 rounded-full ${isRed ? "bg-red-500" : "bg-cyan-400"}`}
                  style={{ left: `${x}%`, top: `${y}%` }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                >
                  <div
                    className={`absolute inset-0 ${isRed ? "bg-red-500" : "bg-cyan-400"} blur-md rounded-full`}
                  />
                </motion.div>
              );
            })}

            {/* Scanning animation */}
            <motion.div
              className="absolute left-0 top-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
              animate={{ y: [0, 600] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            />

            {/* Animated connection lines */}
            <svg className="absolute inset-0 w-full h-full">
              {[...Array(15)].map((_, i) => {
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
                    stroke="#06b6d4"
                    strokeWidth="1"
                    opacity="0.2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: [0, 1, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: i * 0.3 }}
                  />
                );
              })}
            </svg>
          </div>
        </div>
      </section>

      {/* Automated Remediation */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-[#050a1f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl mb-6 text-center bg-gradient-to-r from-green-300 to-cyan-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Fix Every Configuration Issue — Automatically.
          </motion.h2>

          <div className="relative mt-12 sm:mt-16 md:mt-20 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            {/* Before state */}
            <motion.div
              className="relative w-full max-w-xs"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-4 sm:mb-6">
                <span className="text-red-400 text-lg sm:text-xl">Before</span>
              </div>
              <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 backdrop-blur-md border border-red-400/30 rounded-2xl p-6 sm:p-8 w-full">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="h-3 bg-red-500/40 rounded-full mb-3"
                    animate={{ opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Fix wave animation */}
            <motion.div
              className="relative my-4 md:my-0"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-[0_0_50px_rgba(6,182,212,0.6)]"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Zap className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
              </motion.div>

              {/* Animated arrows - hidden on mobile */}
              <motion.div
                className="hidden md:flex absolute top-1/2 -translate-y-1/2 -right-32 gap-2"
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="text-cyan-400 text-3xl">
                    →
                  </div>
                ))}
              </motion.div>

              {/* Animated arrow down for mobile */}
              <motion.div
                className="flex md:hidden absolute -bottom-20 left-1/2 -translate-x-1/2 flex-col gap-1"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="text-cyan-400 text-3xl text-center">
                    ↓
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* After state */}
            <motion.div
              className="relative w-full max-w-xs mt-12 md:mt-0"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-4 sm:mb-6">
                <span className="text-green-400 text-lg sm:text-xl">After</span>
              </div>
              <div className="bg-gradient-to-br from-green-500/20 to-cyan-500/20 backdrop-blur-md border border-green-400/30 rounded-2xl p-6 sm:p-8 w-full">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="h-3 bg-green-500/60 rounded-full mb-3 flex items-center justify-end pr-2"
                    initial={{ width: "100%", backgroundColor: "rgba(239, 68, 68, 0.4)" }}
                    whileInView={{ backgroundColor: "rgba(34, 197, 94, 0.6)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.2 + 1 }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.2 + 1.5 }}
                    >
                      <CheckCircle className="w-4 h-4 text-green-400" />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* AI assistant icon */}
          <motion.div
            className="flex justify-center mt-12 sm:mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-md border border-purple-400/30 rounded-2xl px-6 sm:px-8 py-3 sm:py-4 flex items-center gap-3 sm:gap-4">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Settings className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
              </motion.div>
              <p className="text-sm sm:text-base text-gray-300">AI-Powered Remediation Engine</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Threat Prioritization Heatmap */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-gradient-to-b from-[#0a0e27] to-[#0a1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl mb-6 text-center bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Your cloud risk ranked and prioritized with AI.
          </motion.h2>

          {/* Heatmap visualization */}
          <div className="relative mt-12 sm:mt-16 md:mt-20 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2 sm:gap-3 md:gap-4 max-w-5xl mx-auto">
            {[...Array(64)].map((_, i) => {
              const risk = Math.random();
              const color =
                risk > 0.7 ? "bg-red-500" : risk > 0.4 ? "bg-orange-500" : "bg-green-500";
              const score = Math.floor(risk * 100);

              return (
                <motion.div
                  key={i}
                  className="relative aspect-square"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.01 }}
                >
                  <motion.div
                    className={`w-full h-full ${color} rounded-lg relative overflow-hidden cursor-pointer group`}
                    whileHover={{ scale: 1.1, zIndex: 10 }}
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 3, repeat: Infinity, delay: Math.random() * 2 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />

                    {/* Score on hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-white text-xs">{score}</span>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12">
            {[
              { color: "bg-green-500", label: "Low Risk" },
              { color: "bg-orange-500", label: "Medium Risk" },
              { color: "bg-red-500", label: "High Risk" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 sm:gap-3">
                <div className={`w-5 h-5 sm:w-6 sm:h-6 ${item.color} rounded`} />
                <span className="text-sm sm:text-base text-gray-300">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-Cloud Support */}
      <section className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl mb-12 sm:mb-16 md:mb-20 text-center bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            One Posture Manager — All Cloud Providers.
          </motion.h2>

          {/* Mobile Version - Grid */}
          <div className="block md:hidden">
            <div className="flex flex-col items-center gap-6 mb-8">
              {/* Center security core */}
              <motion.div
                className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-[0_0_60px_rgba(6,182,212,0.6)]"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Shield className="w-12 h-12 text-white" />
              </motion.div>
            </div>

            {/* Cloud providers grid */}
            <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
              {[
                { name: "AWS", color: "from-orange-400 to-yellow-500" },
                { name: "Azure", color: "from-blue-400 to-cyan-500" },
                { name: "GCP", color: "from-red-400 to-yellow-400" },
                { name: "Oracle", color: "from-red-500 to-orange-500" },
              ].map((cloud, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div
                    className={`h-32 rounded-2xl bg-gradient-to-br ${cloud.color} opacity-20 backdrop-blur-md border border-white/20 flex items-center justify-center`}
                  >
                    <span className="text-2xl text-white/80 font-semibold">{cloud.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop Version - Multi-cloud hologram */}
          <div className="hidden md:block relative h-[500px] flex items-center justify-center">
            {/* Center security core */}
            <motion.div
              className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-[0_0_80px_rgba(6,182,212,0.6)]"
              animate={{ scale: [1, 1.1, 1], rotate: 360 }}
              transition={{
                scale: { duration: 3, repeat: Infinity },
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              }}
            >
              <Shield className="w-16 h-16 text-white" />
            </motion.div>

            {/* Cloud provider logos */}
            {[
              { name: "AWS", color: "from-orange-400 to-yellow-500", angle: 0 },
              { name: "Azure", color: "from-blue-400 to-cyan-500", angle: 90 },
              { name: "GCP", color: "from-red-400 to-yellow-400", angle: 180 },
              { name: "Oracle", color: "from-red-500 to-orange-500", angle: 270 },
            ].map((cloud, i) => {
              const angle = (cloud.angle * Math.PI) / 180;
              const radius = 220;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <React.Fragment key={i}>
                  {/* Neon connector */}
                  <motion.div
                    className="absolute w-1 bg-gradient-to-r from-cyan-400 to-transparent top-1/2 left-1/2"
                    style={{
                      width: `${radius}px`,
                      transformOrigin: "0 50%",
                      transform: `rotate(${cloud.angle}deg)`,
                    }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.2 }}
                  />

                  {/* Cloud logo */}
                  <motion.div
                    className="absolute top-1/2 left-1/2"
                    style={{ marginLeft: "-75px", marginTop: "-75px" }}
                    initial={{ x, y, opacity: 0, scale: 0.5 }}
                    whileInView={{ x, y, opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.2 }}
                  >
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                    >
                      <div
                        className={`w-36 h-36 rounded-2xl bg-gradient-to-br ${cloud.color} opacity-20 backdrop-blur-md border border-white/20 flex items-center justify-center`}
                      >
                        <span className="text-3xl text-white/80">{cloud.name}</span>
                      </div>
                    </motion.div>
                  </motion.div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Circle */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-gradient-to-b from-[#0a1628] to-[#0a0e27]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl mb-12 sm:mb-16 md:mb-20 text-center bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Complete Cloud Protection
          </motion.h2>

          {/* Mobile Version - Grid */}
          <div className="block md:hidden">
            <div className="flex flex-col items-center gap-6 mb-8">
              {/* Center shield */}
              <motion.div
                className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-[0_0_80px_rgba(6,182,212,0.6)]"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <ShieldCheck className="w-16 h-16 text-white" />
              </motion.div>
            </div>

            {/* Benefits grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: Eye, text: "Full visibility" },
                { icon: Bell, text: "Real-time alerts" },
                { icon: Target, text: "Reduced attack surface" },
                { icon: FileCheck, text: "Fully automated compliance" },
                { icon: Lock, text: "Prevent misconfigurations" },
                { icon: RefreshCw, text: "Continuous hardening" },
              ].map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-md border border-cyan-400/40 rounded-2xl p-4 flex items-center gap-4">
                    <benefit.icon className="w-8 h-8 text-cyan-400 flex-shrink-0" />
                    <p className="text-sm text-cyan-300">{benefit.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop Version - Radial layout */}
          <div className="hidden md:block relative h-[600px] flex items-center justify-center">
            {/* Center shield */}
            <motion.div
              className="absolute w-40 h-40 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-[0_0_80px_rgba(6,182,212,0.6)]"
              animate={{
                scale: [1, 1.05, 1],
                boxShadow: [
                  "0 0 80px rgba(6,182,212,0.6)",
                  "0 0 120px rgba(6,182,212,0.8)",
                  "0 0 80px rgba(6,182,212,0.6)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <ShieldCheck className="w-20 h-20 text-white" />
            </motion.div>

            {/* Radiating benefits */}
            {[
              { icon: Eye, text: "Full visibility", angle: 0 },
              { icon: Bell, text: "Real-time alerts", angle: 60 },
              { icon: Target, text: "Reduced attack surface", angle: 120 },
              { icon: FileCheck, text: "Fully automated compliance", angle: 180 },
              { icon: Lock, text: "Prevent misconfigurations", angle: 240 },
              { icon: RefreshCw, text: "Continuous hardening", angle: 300 },
            ].map((benefit, i) => {
              const angle = (benefit.angle * Math.PI) / 180;
              const radius = 280;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <React.Fragment key={i}>
                  {/* Radiating line */}
                  <motion.div
                    className="absolute w-1 bg-gradient-to-r from-cyan-400 to-transparent top-1/2 left-1/2"
                    style={{
                      width: `${radius}px`,
                      transformOrigin: "0 50%",
                      transform: `rotate(${benefit.angle}deg)`,
                    }}
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 0.4 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.15 }}
                  />

                  {/* Benefit label */}
                  <motion.div
                    className="absolute top-1/2 left-1/2"
                    style={{ marginLeft: "-90px", marginTop: "-50px" }}
                    initial={{ x, y, opacity: 0, scale: 0.5 }}
                    whileInView={{ x, y, opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.15 }}
                  >
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
                    >
                      <div className="relative w-44 h-24 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-md border border-cyan-400/40 rounded-2xl p-4 flex flex-col items-center justify-center">
                        <benefit.icon className="w-8 h-8 text-cyan-400 mb-2" />
                        <p className="text-sm text-cyan-300 text-center">{benefit.text}</p>
                      </div>
                    </motion.div>
                  </motion.div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <ServicePricing
        title={servicePlans["cspm"].title}
        description={servicePlans["cspm"].description}
        plans={servicePlans["cspm"].plans}
      />

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e27] via-[#050a1f] to-black" />

        {/* Hologram shield beating */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full blur-3xl" />
        </motion.div>

        <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
          <motion.h2
            className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Strengthen Your Cloud Posture Today.
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Request a free cloud risk assessment from our experts.
          </motion.p>

          <motion.button
            className="relative px-12 py-5 rounded-full overflow-hidden group"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate(ROUTES.CONTACT)}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-[length:200%_100%] animate-[shimmer_3s_linear_infinite]" />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 blur-xl opacity-50" />
            <span className="relative text-white text-lg z-10">Get Free Assessment</span>
          </motion.button>
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

export default CSPMPage;
