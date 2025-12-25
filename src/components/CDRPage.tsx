import React, { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import {
  Shield,
  Cloud,
  Eye,
  Zap,
  Lock,
  Activity,
  Network,
  AlertCircle,
  CheckCircle,
  Play,
  Database,
  Key,
  GitBranch,
  Layers,
  TrendingUp,
  Bell,
  Search,
  Clock,
  Target,
  Cpu,
  Server,
  ChevronRight,

} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes";
import { ServicePricing } from "./shared/ServicePricing";
import { servicePlans } from "../data/servicePlans";

interface CDRPageProps {
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
  onCSPMClick?: () => void;
  onASPMClick?: () => void;
  onWAASClick?: () => void;
  onCWPClick?: () => void;
  onDSPMClick?: () => void;
  onMDRClick?: () => void;
  onCDRClick?: () => void;
  onASMClick?: () => void;
  onSIEMClick?: () => void;
  onSOCAutomationClick?: () => void;
}

const CDRPage: React.FC<CDRPageProps> = (props) => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white overflow-x-hidden dark">


      {/* 1. HERO BANNER */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Dark cyber background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e1a] via-[#0d1428] to-[#0a0e1a]" />

        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Cloud nodes network */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00D9FF" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#A855F7" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            {/* Network lines */}
            {[
              { x1: "10%", y1: "20%", x2: "40%", y2: "50%" },
              { x1: "40%", y1: "50%", x2: "60%", y2: "30%" },
              { x1: "60%", y1: "30%", x2: "90%", y2: "60%" },
              { x1: "20%", y1: "70%", x2: "50%", y2: "80%" },
              { x1: "50%", y1: "80%", x2: "80%", y2: "70%" },
            ].map((line, i) => (
              <motion.line
                key={i}
                x1={line.x1}
                y1={line.y1}
                x2={line.x2}
                y2={line.y2}
                stroke="url(#lineGradient)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, delay: i * 0.3 }}
              />
            ))}
          </svg>
        </div>

        {/* Floating energy waves */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyan-500/10 blur-[80px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-500/10 blur-[80px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 sm:px-8 md:px-12 max-w-7xl mx-auto pt-32">

          <motion.div
            className="flex items-center justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Cloud className="w-16 h-16 text-cyan-400" strokeWidth={1} />
            </motion.div>
            <Shield className="w-20 h-20 text-purple-400" strokeWidth={1.5} />
          </motion.div>

          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-8"
            style={{ fontWeight: 800, letterSpacing: "-0.02em" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="text-white">Cloud Detection</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              & Response
            </span>
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed"
            style={{ fontWeight: 300 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Stay ahead of threats with real-time cloud visibility
            <br className="hidden sm:block" />
            and automated response actions.
          </motion.p>

          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.button
              className="px-12 py-6 rounded-lg border border-cyan-400/50 text-cyan-400 text-xl backdrop-blur-sm"
              style={{ fontWeight: 700 }}
              whileHover={{
                scale: 1.02,
                backgroundColor: "rgba(0, 217, 255, 0.1)",
                borderColor: "rgba(0, 217, 255, 0.8)",
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate(ROUTES.CONTACT)}
            >
              Contact Security Team
            </motion.button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-cyan-400" strokeWidth={2} />
              <span>Multi-cloud support</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-cyan-400" strokeWidth={2} />
              <span>24/7 monitoring</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-cyan-400" strokeWidth={2} />
              <span>Instant deployment</span>
            </div>
          </motion.div>
        </div>

        {/* Curved separator */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
              fill="#0f172a"
            />
          </svg>
        </div>
      </section>

      {/* 2. WHAT IS CDR */}
      <section className="relative py-32 md:py-40 overflow-hidden bg-[#0f172a]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: Explanation */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2
                className="text-4xl sm:text-5xl md:text-6xl mb-8 text-white"
                style={{ fontWeight: 700 }}
              >
                What is <span className="text-cyan-400">CDR</span>?
              </h2>

              <p className="text-xl text-gray-300 mb-6 leading-relaxed" style={{ fontWeight: 300 }}>
                Cloud Detection & Response (CDR) is a comprehensive security approach that provides
                real-time <span className="text-cyan-400 animate-pulse">detection</span>,
                investigation, and automated{" "}
                <span className="text-purple-400 animate-pulse">response</span> to threats within
                your <span className="text-cyan-400 animate-pulse">cloud</span> infrastructure.
              </p>

              <p className="text-lg text-gray-400 mb-8 leading-relaxed" style={{ fontWeight: 300 }}>
                Unlike traditional security tools, CDR continuously monitors cloud activity, user
                behavior, and API interactions to detect anomalies and respond instantly—protecting
                your multi-cloud environments 24/7.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                  <span className="text-gray-300">Continuous cloud workload monitoring</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                  <span className="text-gray-300">AI-powered behavioral analytics</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                  <span className="text-gray-300">Automated threat containment</span>
                </div>
              </div>
            </motion.div>

            {/* Right: Animated illustration */}
            <motion.div
              className="relative h-[400px]"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Central cloud */}
                <motion.div
                  className="relative z-10"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <div className="w-40 h-40 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-400/30 flex items-center justify-center">
                    <Cloud className="w-20 h-20 text-cyan-400" strokeWidth={1} />
                  </div>
                </motion.div>

                {/* Orbiting threat indicators */}
                {[
                  { Icon: Shield, color: "cyan", angle: 0 },
                  { Icon: Eye, color: "purple", angle: 72 },
                  { Icon: Zap, color: "cyan", angle: 144 },
                  { Icon: Lock, color: "purple", angle: 216 },
                  { Icon: Activity, color: "cyan", angle: 288 },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      left: "50%",
                      top: "50%",
                      marginLeft: "-20px",
                      marginTop: "-20px",
                    }}
                    animate={{
                      x: Math.cos((item.angle * Math.PI) / 180) * 140,
                      y: Math.sin((item.angle * Math.PI) / 180) * 140,
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <motion.div
                      className={`w-16 h-16 rounded-full bg-gradient-to-br from-${item.color}-500/30 to-transparent backdrop-blur-sm border border-${item.color}-400/40 flex items-center justify-center`}
                      animate={{
                        scale: [1, 1.1, 1],
                        boxShadow: [
                          `0 0 10px rgba(0, 217, 255, 0.3)`,
                          `0 0 20px rgba(168, 85, 247, 0.5)`,
                          `0 0 10px rgba(0, 217, 255, 0.3)`,
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                    >
                      <item.Icon className={`w-8 h-8 text-${item.color}-400`} strokeWidth={1.5} />
                    </motion.div>
                  </motion.div>
                ))}

                {/* Connecting lines */}
                <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: "none" }}>
                  {[0, 72, 144, 216, 288].map((angle, i) => (
                    <motion.line
                      key={i}
                      x1="50%"
                      y1="50%"
                      x2={`${50 + Math.cos((angle * Math.PI) / 180) * 35}%`}
                      y2={`${50 + Math.sin((angle * Math.PI) / 180) * 35}%`}
                      stroke="url(#lineGradient)"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0.2, 0.6, 0.2] }}
                      transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                    />
                  ))}
                </svg>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Curved separator */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,80C1120,85,1280,75,1360,69.3L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
              fill="#0a0e1a"
            />
          </svg>
        </div>
      </section>

      {/* 3. KEY CAPABILITIES */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] to-[#0f172a]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl mb-20 text-center text-white"
            style={{ fontWeight: 700 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Key{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Capabilities
            </span>
          </motion.h2>

          {/* Floating capability clusters */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: "Real-time Cloud Threat Detection",
                desc: "Identify anomalies and threats across AWS, Azure, GCP in real-time using ML models.",
                gradient: "from-cyan-500/20 to-transparent",
              },
              {
                icon: Zap,
                title: "Automated Response Playbooks",
                desc: "Execute instant containment actions with pre-configured automated workflows.",
                gradient: "from-purple-500/20 to-transparent",
              },
              {
                icon: Activity,
                title: "Behavioral Analytics for Cloud Activity",
                desc: "Establish baselines and detect deviations in user, workload, and API behavior.",
                gradient: "from-cyan-500/20 to-transparent",
              },
              {
                icon: Eye,
                title: "Continuous Monitoring of Identities & APIs",
                desc: "Track every API call, authentication event, and permission change 24/7.",
                gradient: "from-purple-500/20 to-transparent",
              },
              {
                icon: Network,
                title: "Integration with SIEM / SOAR",
                desc: "Seamlessly connect to existing security infrastructure for unified visibility.",
                gradient: "from-cyan-500/20 to-transparent",
              },
            ].map((capability, i) => (
              <FloatingCapability key={i} capability={capability} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. LIVE THREAT VISIBILITY */}
      <section className="relative py-32 md:py-40 overflow-hidden bg-[#0f172a]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl mb-16 text-center text-white"
            style={{ fontWeight: 700 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            See incidents the <span className="text-cyan-400">moment they emerge</span>
          </motion.h2>

          {/* Abstract live dashboard */}
          <motion.div
            className="relative bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 md:p-12 overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Animated waveforms */}
            <div className="absolute inset-0 opacity-30">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {[...Array(5)].map((_, i) => (
                  <motion.path
                    key={i}
                    d={`M 0 ${100 + i * 80} Q 200 ${80 + i * 80} 400 ${100 + i * 80} T 800 ${100 + i * 80} T 1200 ${100 + i * 80}`}
                    stroke={i % 2 === 0 ? "#00D9FF" : "#A855F7"}
                    strokeWidth="2"
                    fill="none"
                    strokeOpacity="0.3"
                    initial={{ pathLength: 0 }}
                    animate={{
                      pathLength: 1,
                      x: [0, -200],
                    }}
                    transition={{
                      pathLength: { duration: 2 },
                      x: { duration: 4, repeat: Infinity, ease: "linear" },
                    }}
                  />
                ))}
              </svg>
            </div>

            {/* Mock heat map */}
            <div className="relative grid grid-cols-10 gap-2 mb-8">
              {[...Array(50)].map((_, i) => (
                <motion.div
                  key={i}
                  className="h-8 rounded"
                  style={{
                    background:
                      Math.random() > 0.7
                        ? "linear-gradient(135deg, rgba(239, 68, 68, 0.3), rgba(168, 85, 247, 0.3))"
                        : Math.random() > 0.4
                          ? "linear-gradient(135deg, rgba(0, 217, 255, 0.2), rgba(168, 85, 247, 0.2))"
                          : "rgba(71, 85, 105, 0.2)",
                  }}
                  animate={{
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>

            {/* Data streams */}
            <div className="space-y-4">
              {[
                {
                  time: "14:23:41",
                  event: "Suspicious API call from unknown IP",
                  severity: "high",
                },
                {
                  time: "14:23:38",
                  event: "Privilege escalation attempt detected",
                  severity: "critical",
                },
                { time: "14:23:35", event: "Unusual data transfer volume", severity: "medium" },
                { time: "14:23:32", event: "New IAM policy created", severity: "low" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-4 bg-slate-800/50 rounded-lg p-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div
                    className={`w-3 h-3 rounded-full ${item.severity === "critical"
                      ? "bg-red-500 animate-pulse"
                      : item.severity === "high"
                        ? "bg-orange-500 animate-pulse"
                        : item.severity === "medium"
                          ? "bg-yellow-500"
                          : "bg-green-500"
                      }`}
                  />
                  <span className="text-xs text-gray-400 w-20">{item.time}</span>
                  <span className="text-sm text-gray-200 flex-1">{item.event}</span>
                  <AlertCircle
                    className={`w-5 h-5 ${item.severity === "critical" || item.severity === "high"
                      ? "text-red-400"
                      : "text-gray-400"
                      }`}
                  />
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-cyan-400/20">
              <div className="text-center">
                <div className="text-3xl text-cyan-400 mb-1" style={{ fontWeight: 700 }}>
                  847
                </div>
                <div className="text-xs text-gray-400">Events/Hour</div>
              </div>
              <div className="text-center">
                <div className="text-3xl text-purple-400 mb-1" style={{ fontWeight: 700 }}>
                  12
                </div>
                <div className="text-xs text-gray-400">Active Threats</div>
              </div>
              <div className="text-center">
                <div className="text-3xl text-green-400 mb-1" style={{ fontWeight: 700 }}>
                  99.8%
                </div>
                <div className="text-xs text-gray-400">Detection Rate</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. CLOUD RESPONSE AUTOMATION */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] to-[#0a0e1a]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: Visual flow */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-8">
                {[
                  { icon: Bell, label: "Trigger", desc: "Threat detected" },
                  { icon: Zap, label: "Contain", desc: "Isolate resource" },
                  { icon: CheckCircle, label: "Remediate", desc: "Apply fix" },
                ].map((step, i) => (
                  <motion.div
                    key={i}
                    className="relative flex items-center gap-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.2 }}
                  >
                    {/* Connecting line */}
                    {i < 2 && (
                      <div className="absolute left-7 top-16 w-px h-16 bg-gradient-to-b from-cyan-400/50 to-purple-400/50" />
                    )}

                    <div className="relative z-10 w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500/30 to-purple-500/30 backdrop-blur-sm border border-cyan-400/40 flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-cyan-400" strokeWidth={1.5} />
                    </div>

                    <div>
                      <h4 className="text-xl text-white mb-1" style={{ fontWeight: 600 }}>
                        {step.label}
                      </h4>
                      <p className="text-sm text-gray-400">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Description */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2
                className="text-4xl sm:text-5xl md:text-6xl mb-8 text-white"
                style={{ fontWeight: 700 }}
              >
                Cloud Response <span className="text-cyan-400">Automation</span>
              </h2>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed" style={{ fontWeight: 300 }}>
                When a threat is detected, CDR doesn't wait—it acts. Automated playbooks execute
                instantly to contain and neutralize risks before they spread.
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: Lock,
                    title: "Auto-isolation",
                    desc: "Quarantine compromised instances or containers immediately",
                  },
                  {
                    icon: Key,
                    title: "Auto-credential revocation",
                    desc: "Disable stolen or suspicious access keys within seconds",
                  },
                  {
                    icon: Shield,
                    title: "Auto-policy enforcement",
                    desc: "Revert unauthorized config changes and apply hardening",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-r from-cyan-500/5 to-purple-500/5 border border-cyan-400/10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-cyan-400" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="text-lg text-white mb-1" style={{ fontWeight: 600 }}>
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Curved separator */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0,32L80,37.3C160,43,320,53,480,48C640,43,800,21,960,16C1120,11,1280,21,1360,26.7L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
              fill="#0f172a"
            />
          </svg>
        </div>
      </section>

      {/* 6. INTEGRATIONS */}
      <section className="relative py-32 md:py-40 overflow-hidden bg-[#0f172a]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl mb-16 text-center text-white"
            style={{ fontWeight: 700 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Seamless{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Integrations
            </span>
          </motion.h2>

          {/* Glowing monochrome icons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
            {[
              { icon: Cloud, label: "AWS" },
              { icon: Server, label: "Azure" },
              { icon: Database, label: "GCP" },
              { icon: Layers, label: "SIEM" },
              { icon: GitBranch, label: "SOAR" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 text-center transition-all duration-300 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-400/20">
                  <motion.div
                    animate={{
                      boxShadow: [
                        "0 0 10px rgba(0, 217, 255, 0)",
                        "0 0 20px rgba(0, 217, 255, 0.3)",
                        "0 0 10px rgba(0, 217, 255, 0)",
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <item.icon
                      className="w-16 h-16 mx-auto mb-4 text-cyan-400 transition-transform duration-300 group-hover:scale-110"
                      strokeWidth={1}
                    />
                  </motion.div>
                  <p className="text-sm text-gray-300">{item.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Curved separator */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
              fill="#0a0e1a"
            />
          </svg>
        </div>
      </section>

      {/* 7. WHY YOUR ORGANIZATION NEEDS CDR */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] to-[#0f172a]" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 md:px-12 text-center">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl mb-16 text-white"
            style={{ fontWeight: 700 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Why Your Organization
            <br />
            Needs <span className="text-cyan-400">CDR</span>
          </motion.h2>

          <div className="space-y-12">
            {[
              {
                icon: Clock,
                title: "Faster Incident Response",
                desc: "Reduce mean time to detect (MTTD) and mean time to respond (MTTR) from hours to minutes with automated workflows.",
              },
              {
                icon: Target,
                title: "Stronger Prevention",
                desc: "Stop attacks before they cause damage by identifying threats at the earliest stages of the kill chain.",
              },
              {
                icon: Eye,
                title: "Unified Cloud Visibility",
                desc: "Gain a single pane of glass across all cloud providers—AWS, Azure, GCP—and hybrid environments.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
              >
                <div className="inline-flex items-center gap-6 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 text-left">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/30 to-purple-500/30 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-8 h-8 text-cyan-400" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-2xl text-white mb-2" style={{ fontWeight: 600 }}>
                      <span className="relative">
                        {item.title}
                        <motion.div
                          className="absolute -bottom-1 left-0 h-px bg-gradient-to-r from-cyan-400 to-purple-500"
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: i * 0.2 + 0.3 }}
                        />
                      </span>
                    </h3>
                    <p className="text-lg text-gray-400" style={{ fontWeight: 300 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ServicePricing
        title={servicePlans["cdr"].title}
        description={servicePlans["cdr"].description}
        plans={servicePlans["cdr"].plans}
        highlightColor="cyan"
      />


    </div>
  );
};

// Floating Capability Component
const FloatingCapability: React.FC<{ capability: any; index: number }> = ({
  capability,
  index,
}) => {
  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
    >
      <motion.div
        className={`relative bg-gradient-to-br ${capability.gradient} backdrop-blur-sm border border-transparent rounded-2xl p-8 transition-all duration-300`}
        whileHover={{
          borderColor: "rgba(0, 217, 255, 0.4)",
          boxShadow: "0 0 30px rgba(0, 217, 255, 0.15)",
        }}
      >
        {/* Glowing effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/0 to-purple-500/0 opacity-0 group-hover:from-cyan-500/5 group-hover:to-purple-500/5 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative z-10">
          <motion.div
            className="mb-6 w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center"
            animate={{
              boxShadow: [
                "0 0 0px rgba(0, 217, 255, 0)",
                "0 0 20px rgba(0, 217, 255, 0.3)",
                "0 0 0px rgba(0, 217, 255, 0)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
          >
            <capability.icon className="w-8 h-8 text-cyan-400" strokeWidth={1.5} />
          </motion.div>

          <h3 className="text-xl text-white mb-3" style={{ fontWeight: 600 }}>
            {capability.title}
          </h3>

          <p className="text-sm text-gray-400 leading-relaxed" style={{ fontWeight: 300 }}>
            {capability.desc}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CDRPage;
