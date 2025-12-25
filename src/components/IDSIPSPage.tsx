import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  AlertTriangle,
  Activity,
  Brain,
  Zap,
  Eye,
  Lock,
  Terminal,
  Wifi,
  Database,
  Server,
  Target,
  CheckCircle,
  ArrowRight,
  ChevronRight,
  Globe,
  Layers,
  Network,
  Code,
  RefreshCw,
  FileCheck,
  Clock,
  Award,
  Star,
  Check,
  X,
  TrendingUp,
} from "lucide-react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { ROUTES } from "../routes";
import { ServicePricing } from "./shared/ServicePricing";
import { servicePlans } from "../data/servicePlans";


interface IDSIPSPageProps {
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
  onEPPClick?: () => void;
  onXDRClick?: () => void;
  onRansomwareProtectionClick?: () => void;
  onDeviceSecurityHardeningClick?: () => void;
  onWebAppPenTestClick?: () => void;
  onMobileAppPenTestClick?: () => void;
  onNetworkPenTestClick?: () => void;
  onCloudPenTestClick?: () => void;
  onAPISecurityTestingClick?: () => void;
  onWirelessNetworkPenTestClick?: () => void;
  onRedTeamAssessmentsClick?: () => void;
  onSocialEngineeringClick?: () => void;
  onZeroDayDetectionClick?: () => void;
  onMalwareAnalysisClick?: () => void;
  onVulnerabilityResearchClick?: () => void;
  onEthicalExploitDevelopmentClick?: () => void;
  onContinuousSecurityTestingClick?: () => void;
  onDoNotSellClick?: () => void;
  onPublicSectorClick?: () => void;
  onPublicSectorClick?: () => void;
}

interface LoginContext {
  openCustomerLogin: () => void;
  onPublicSectorClick?: () => void;
}

export default function IDSIPSPage(props: IDSIPSPageProps) {
  const { openCustomerLogin, onPublicSectorClick } = useOutletContext<LoginContext>();
  const navigate = useNavigate();
  const [activeTimeline, setActiveTimeline] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [hoveredCapability, setHoveredCapability] = useState<number | null>(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Auto-rotate timeline
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTimeline((prev) => (prev + 1) % 5);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Stats data with animation
  const stats = [
    { value: 4200, suffix: "+", label: "Intrusions Blocked Daily", prefix: "" },
    { value: 99.8, suffix: "%", label: "Detection Accuracy", prefix: "" },
    { value: 14, suffix: "ms", label: "Average Response Time", prefix: "" },
    { value: 92, suffix: "%", label: "Zero-Day Prevention Rate", prefix: "" },
  ];

  const capabilities = [
    {
      icon: Eye,
      title: "Deep Packet Inspection (DPI)",
      description:
        "Analyze every packet at granular level to identify malicious payloads and anomalies",
      features: ["Layer 7 analysis", "Protocol dissection", "Payload inspection"],
    },
    {
      icon: Brain,
      title: "AI-Powered Behavioral Analysis",
      description: "Machine learning detects abnormal patterns and zero-day exploits in real-time",
      features: ["Heuristic detection", "Anomaly detection", "Predictive analytics"],
    },
    {
      icon: Shield,
      title: "Signature-Based Detection",
      description:
        "Match traffic against extensive threat intelligence databases for known attacks",
      features: ["CVE database", "Malware signatures", "Auto-updated rules"],
    },
    {
      icon: Zap,
      title: "Automated Threat Prevention",
      description:
        "Instant blocking and containment of detected threats without manual intervention",
      features: ["Auto-quarantine", "Traffic blocking", "Real-time alerts"],
    },
    {
      icon: Network,
      title: "Network Traffic Analysis",
      description: "Monitor all network flows to detect lateral movement and command-and-control",
      features: ["Flow monitoring", "Protocol analysis", "Traffic baselines"],
    },
    {
      icon: Database,
      title: "Comprehensive Logging & Forensics",
      description: "Detailed event logs and forensic data for investigation and compliance",
      features: ["Event correlation", "Forensic timeline", "Compliance reports"],
    },
  ];

  const timeline = [
    {
      icon: Target,
      title: "Traffic Capture",
      description: "All network packets are captured and buffered for analysis",
    },
    {
      icon: Eye,
      title: "Deep Inspection",
      description: "Packets are dissected and inspected at all protocol layers",
    },
    {
      icon: Brain,
      title: "Threat Analysis",
      description: "AI and signature matching identify malicious patterns",
    },
    {
      icon: Zap,
      title: "Instant Prevention",
      description: "Threats are blocked automatically in milliseconds",
    },
    {
      icon: FileCheck,
      title: "Alert & Log",
      description: "Events are logged and security teams are notified",
    },
  ];

  const detectionMethods = [
    {
      icon: Database,
      title: "Signature-Based Detection",
      description: "Matches traffic against known attack patterns and CVE databases",
    },
    {
      icon: Brain,
      title: "Anomaly-Based Detection",
      description: "Uses machine learning to identify deviations from normal behavior",
    },
    {
      icon: Activity,
      title: "Stateful Protocol Analysis",
      description: "Validates protocols against defined standards to detect abuse",
    },
    {
      icon: TrendingUp,
      title: "Heuristic Analysis",
      description: "Predicts zero-day threats based on suspicious characteristics",
    },
  ];

  const threatTypes = [
    {
      icon: AlertTriangle,
      title: "Malware & Ransomware",
      description: "Detect and block malicious software before execution",
    },
    {
      icon: Code,
      title: "SQL Injection & XSS",
      description: "Prevent web application exploits and injection attacks",
    },
    {
      icon: Wifi,
      title: "DDoS & DoS Attacks",
      description: "Mitigate volumetric and application-layer denial of service",
    },
    {
      icon: Globe,
      title: "C2 Communication",
      description: "Block command-and-control traffic from compromised hosts",
    },
    {
      icon: Lock,
      title: "Lateral Movement",
      description: "Stop attackers from pivoting within your network",
    },
  ];

  const whyChooseUs = [
    {
      icon: Clock,
      title: "24/7 Monitoring",
      description: "Expert SOC team monitoring threats around the clock",
    },
    {
      icon: Brain,
      title: "AI-Powered Detection",
      description: "Advanced machine learning for zero-day threats",
    },
    {
      icon: Award,
      title: "Certified Experts",
      description: "CISSP, CEH, GIAC certified security professionals",
    },
    {
      icon: Zap,
      title: "Ultra-Low Latency",
      description: "Sub-15ms response time for threat prevention",
    },
    {
      icon: RefreshCw,
      title: "Continuous Updates",
      description: "Threat signatures updated every 60 minutes",
    },
  ];

  const testimonials = [
    {
      quote:
        "DCSecurite's IDS/IPS stopped a sophisticated zero-day attack before it reached our critical systems. The AI detection is phenomenal.",
      author: "James Martinez",
      role: "Chief Security Officer, TechVault Inc",
      rating: 5,
    },
    {
      quote:
        "We detected and blocked over 500 intrusion attempts in the first week. The forensic logs are incredibly detailed.",
      author: "Dr. Lisa Thompson",
      role: "Head of IT Security, MedSecure",
      rating: 5,
    },
    {
      quote:
        "Response time is lightning fast. The automated prevention saved us from a ransomware outbreak that hit our competitors.",
      author: "Ahmed Al-Rashid",
      role: "VP Infrastructure, GlobalBank",
      rating: 5,
    },
  ];



  return (
    <div className="min-h-screen bg-[#020817] text-white overflow-hidden">


      {/* Cyber Grid Background */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(14, 165, 233, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14, 165, 233, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
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
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* 1. Hero Banner */}
      <section className="relative pt-96 pb-32 overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-20 right-0 w-96 h-96 bg-red-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
        />

        <div className="relative container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">


            {/* Hero Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-red-400 via-orange-400 to-cyan-400 text-transparent bg-clip-text">
                Intrusion Detection & Prevention
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-2xl md:text-3xl mb-8 text-gray-600 dark:text-slate-300"
            >
              Real-Time Threat Detection with AI-Powered Defense
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-500 dark:text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Stop intrusions before they happen. Our IDS/IPS solution combines deep packet
              inspection, behavioral analysis, and automated response to protect your network from
              sophisticated threats.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                onClick={openCustomerLogin}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-red-400 to-orange-400"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  Request a Demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const pricingSection = document.getElementById("pricing-section");
                  if (pricingSection) {
                    pricingSection.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className="px-8 py-4 bg-white/5 backdrop-blur-xl border border-cyan-500/30 rounded-xl hover:bg-white/10 transition-colors"
              >
                View Pricing
              </motion.button>
            </motion.div>

            {/* Floating Code Lines Animation */}
            <div className="absolute left-0 top-1/4 text-red-400/20 font-mono text-sm">
              <motion.div
                animate={{ y: [0, -20, 0], opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                {'{ "threat": "detected" }'}
              </motion.div>
            </div>
            <div className="absolute right-0 bottom-1/4 text-cyan-400/20 font-mono text-sm">
              <motion.div
                animate={{ y: [0, 20, 0], opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                {'[ "status": "blocked" ]'}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stats Section */}
      <section className="relative py-16 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-white/5 backdrop-blur-xl rounded-xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all"
              >
                <div className="text-4xl md:text-5xl mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">
                  {stat.prefix}
                  {stat.value.toLocaleString()}
                  {stat.suffix}
                </div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. What is IDS/IPS */}
      <section className="relative py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">
              What is IDS/IPS?
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Intrusion Detection Systems (IDS) monitor network traffic for suspicious activity and
              policy violations. Intrusion Prevention Systems (IPS) go one step further by actively
              blocking detected threats in real-time.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* IDS Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-xl rounded-2xl border border-cyan-500/30 hover:border-cyan-500/60 transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-cyan-500/20 rounded-xl">
                  <Eye className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-2xl">Intrusion Detection (IDS)</h3>
              </div>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>Monitors and analyzes network traffic</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>Generates alerts when threats are detected</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>Provides detailed forensic logs</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>Passive monitoring without blocking traffic</span>
                </li>
              </ul>
            </motion.div>

            {/* IPS Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-gradient-to-br from-red-500/10 to-orange-500/10 backdrop-blur-xl rounded-2xl border border-red-500/30 hover:border-red-500/60 transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-red-500/20 rounded-xl">
                  <Shield className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-2xl">Intrusion Prevention (IPS)</h3>
              </div>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <span>Actively blocks malicious traffic</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <span>Prevents threats before they reach systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <span>Automated response in milliseconds</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <span>Inline deployment for real-time protection</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Detection Pipeline Timeline */}
      <section className="relative py-24 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">
              How It Works
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Our IDS/IPS follows a sophisticated 5-stage pipeline to detect and prevent threats
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Connection Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/50 to-blue-500/50 transform -translate-x-1/2 hidden md:block" />

              {timeline.map((step, index) => {
                const Icon = step.icon;
                const isActive = activeTimeline === index;
                const isLeft = index % 2 === 0;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative mb-12 md:mb-16 flex items-center ${isLeft ? "md:flex-row" : "md:flex-row-reverse"
                      } flex-col`}
                  >
                    {/* Content Card */}
                    <div className={`w-full md:w-5/12 ${isLeft ? "md:pr-8" : "md:pl-8"}`}>
                      <motion.div
                        className={`p-6 bg-white/5 backdrop-blur-xl rounded-xl border transition-all ${isActive
                          ? "border-cyan-500 shadow-lg shadow-cyan-500/20"
                          : "border-cyan-500/20"
                          }`}
                        animate={{
                          scale: isActive ? 1.02 : 1,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div
                            className={`p-2 rounded-lg ${isActive ? "bg-cyan-500/20" : "bg-white/10"
                              }`}
                          >
                            <Icon
                              className={`w-6 h-6 ${isActive ? "text-cyan-400" : "text-slate-400"}`}
                            />
                          </div>
                          <h3 className="text-xl">{step.title}</h3>
                        </div>
                        <p className="text-slate-400">{step.description}</p>
                      </motion.div>
                    </div>

                    {/* Center Icon */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
                      <motion.div
                        className={`w-12 h-12 rounded-full border-4 flex items-center justify-center ${isActive
                          ? "bg-cyan-500 border-cyan-400 shadow-lg shadow-cyan-500/50"
                          : "bg-slate-800 border-slate-700"
                          }`}
                        animate={{
                          scale: isActive ? 1.2 : 1,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className="text-sm">{index + 1}</span>
                      </motion.div>
                    </div>

                    {/* Mobile Number */}
                    <div className="md:hidden mb-4">
                      <div
                        className={`w-10 h-10 rounded-full border-4 flex items-center justify-center ${isActive ? "bg-cyan-500 border-cyan-400" : "bg-slate-800 border-slate-700"
                          }`}
                      >
                        <span className="text-sm">{index + 1}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Core Capabilities */}
      <section className="relative py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">
              Core Capabilities
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Advanced technologies working together to protect your network
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              const isHovered = hoveredCapability === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onHoverStart={() => setHoveredCapability(index)}
                  onHoverEnd={() => setHoveredCapability(null)}
                  className="group p-6 bg-white/5 backdrop-blur-xl rounded-xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all cursor-pointer"
                >
                  <motion.div
                    animate={{
                      scale: isHovered ? 1.1 : 1,
                      rotate: isHovered ? 5 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-12 h-12 mb-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center"
                  >
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </motion.div>

                  <h3 className="text-xl mb-3 group-hover:text-cyan-400 transition-colors">
                    {capability.title}
                  </h3>

                  <p className="text-slate-400 mb-4 leading-relaxed">{capability.description}</p>

                  <ul className="space-y-2">
                    {capability.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-500">
                        <div className="w-1 h-1 bg-cyan-400 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Detection Methods */}
      <section className="relative py-24 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">
              Detection Methods
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Multiple layers of detection for comprehensive threat coverage
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {detectionMethods.map((method, index) => {
              const Icon = method.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl rounded-xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-cyan-500/20 rounded-xl flex-shrink-0">
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-xl mb-2">{method.title}</h3>
                      <p className="text-slate-400">{method.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Threat Types Blocked */}
      <section className="relative py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-red-400 to-orange-400 text-transparent bg-clip-text">
              What We Block
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Comprehensive protection against all major threat categories
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {threatTypes.map((threat, index) => {
              const Icon = threat.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="p-6 bg-gradient-to-br from-red-500/10 to-orange-500/10 backdrop-blur-xl rounded-xl border border-red-500/30 hover:border-red-500/60 transition-all"
                >
                  <div className="w-12 h-12 mb-4 bg-red-500/20 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-red-400" />
                  </div>
                  <h3 className="text-xl mb-2">{threat.title}</h3>
                  <p className="text-slate-400 text-sm">{threat.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. Why Choose Us */}
      <section className="relative py-24 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">
              Why Choose DCSecurite
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 bg-white/5 backdrop-blur-xl rounded-xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all"
                >
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-400">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. Testimonials */}
      <section className="relative py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">
              Client Success Stories
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="p-8 bg-white/5 backdrop-blur-xl rounded-2xl border border-cyan-500/20"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-xl text-slate-300 mb-6 leading-relaxed italic">
                  "{testimonials[currentTestimonial].quote}"
                </p>

                <div>
                  <div className="text-cyan-400 mb-1">
                    {testimonials[currentTestimonial].author}
                  </div>
                  <div className="text-sm text-slate-500">
                    {testimonials[currentTestimonial].role}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all ${index === currentTestimonial
                    ? "bg-cyan-400 w-8"
                    : "bg-slate-600 hover:bg-slate-500"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. Pricing */}
      <ServicePricing
        title={servicePlans["ids-ips"].title}
        description={servicePlans["ids-ips"].description}
        plans={servicePlans["ids-ips"].plans}
      />

      {/* 11. Final CTA */}
      <section className="relative py-32 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />

        <div className="relative container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">
              Stop Intrusions Before They Happen
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-3xl mx-auto">
              Deploy enterprise-grade IDS/IPS protection in minutes. Join hundreds of organizations
              trusting DCSecurite to secure their networks.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={openCustomerLogin}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl overflow-hidden text-lg"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  Schedule a Demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>

              <motion.button
                onClick={openCustomerLogin}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/5 backdrop-blur-xl border border-cyan-500/30 rounded-xl hover:bg-white/10 transition-colors text-lg"
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}

    </div>
  );
}
