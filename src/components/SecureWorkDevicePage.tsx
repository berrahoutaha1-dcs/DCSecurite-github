import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  Smartphone,
  Laptop,
  Tablet,
  Lock,
  Network,
  Eye,
  Zap,
  CheckCircle,
  AlertTriangle,
  Users,
  Activity,
  Target,
  ArrowRight,
  ChevronRight,
  Globe,
  Key,
  Wifi,
  WifiOff,
  UserCheck,
  ShieldCheck,
  Radio,
  Layers,
  FileCheck,
  RefreshCw,
  Award,
  Clock,
  TrendingUp,
  Server,
  Cloud,
  X,
  Check,
  Star,
} from "lucide-react";
import { Header } from "./Header";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes";
import { ServicePricing } from "./shared/ServicePricing";
import { servicePlans } from "../data/servicePlans";

interface SecureWorkDevicePageProps {
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
}

// Counter Component
function Counter({
  target,
  prefix = "",
  suffix = "",
}: {
  target: number;
  prefix?: string;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export default function SecureWorkDevicePage(props: SecureWorkDevicePageProps) {
  const navigate = useNavigate();
  const [activeTimeline, setActiveTimeline] = useState(0);
  const [hoveredDevice, setHoveredDevice] = useState<number | null>(null);
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Auto-rotate timeline
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTimeline((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { value: 4200, suffix: "+", label: "Endpoints Protected", prefix: "" },
    { value: 99.8, suffix: "%", label: "Threat Detection Rate", prefix: "" },
    { value: 3.6, suffix: "M", label: "Average Cost Saved", prefix: "$" },
    { value: 92, suffix: "%", label: "Faster Response Time", prefix: "" },
  ];

  const risks = [
    {
      icon: WifiOff,
      title: "Lack of Endpoint Visibility",
      description:
        "Blind spots in remote work devices create security gaps and unmonitored access points",
    },
    {
      icon: Wifi,
      title: "Inconsistent Connection Security",
      description: "Public WiFi, home networks, and untrusted connections expose sensitive data",
    },
    {
      icon: AlertTriangle,
      title: "Untrusted Networks",
      description: "Employees connecting from anywhere increase attack surface exponentially",
    },
    {
      icon: ShieldCheck,
      title: "Weak Device Posture",
      description:
        "Outdated software, missing patches, and misconfigurations leave devices vulnerable",
    },
    {
      icon: TrendingUp,
      title: "Data Leakage from Unmanaged Devices",
      description: "BYOD policies without proper security controls result in massive data breaches",
    },
  ];

  const timeline = [
    {
      icon: UserCheck,
      title: "Identity & Access Verification",
      description:
        "Multi-factor authentication with biometric validation and device fingerprinting",
    },
    {
      icon: Lock,
      title: "Network Isolation & Zero Trust Controls",
      description: "Micro-segmentation and least-privilege access for every device connection",
    },
    {
      icon: Activity,
      title: "Continuous Device Monitoring",
      description: "Real-time health checks, patch status, and compliance validation",
    },
    {
      icon: Zap,
      title: "Threat Detection + Auto Response",
      description: "AI-powered anomaly detection with automated containment and remediation",
    },
  ];

  const devices = [
    {
      icon: Laptop,
      name: "Laptops",
      description: "Full endpoint protection for Windows, macOS, and Linux workstations",
      features: ["Disk encryption", "Application control", "EDR protection"],
    },
    {
      icon: Smartphone,
      name: "Mobile Phones",
      description: "Advanced mobile threat defense for iOS and Android devices",
      features: ["App vetting", "Network security", "Data loss prevention"],
    },
    {
      icon: Tablet,
      name: "Tablets",
      description: "Secure access for field workers and executives on the go",
      features: ["Container security", "Remote wipe", "Geo-fencing"],
    },
  ];

  const zeroTrustFeatures = [
    { icon: UserCheck, text: "Continuous Authentication" },
    { icon: Activity, text: "Device Posture Check" },
    { icon: Shield, text: "Secure VPN Gateway" },
    { icon: Lock, text: "Access Segmentation" },
    { icon: Eye, text: "Threat Monitoring" },
    { icon: Target, text: "Intelligent Risk Scoring" },
  ];

  const benefits = [
    {
      icon: Globe,
      title: "Work Securely from Anywhere",
      description: "Location-independent security that follows your workforce",
    },
    {
      icon: Eye,
      title: "Full Visibility on Endpoints",
      description: "Real-time dashboard showing all devices and their security status",
    },
    {
      icon: ShieldCheck,
      title: "Automatic Threat Isolation",
      description: "Compromised devices are instantly quarantined from network",
    },
    {
      icon: Zap,
      title: "No Performance Impact",
      description: "Lightweight agents that work silently in the background",
    },
    {
      icon: Activity,
      title: "AI-Driven Anomaly Detection",
      description: "Machine learning identifies unusual behavior patterns instantly",
    },
    {
      icon: Users,
      title: "Protect BYOD Devices",
      description: "Secure personal devices without compromising user privacy",
    },
  ];

  const integrations = [
    { name: "MDM Systems", icon: Smartphone, gradient: "from-purple-500 to-pink-500" },
    { name: "Cloud Identity", icon: Key, gradient: "from-cyan-500 to-blue-500" },
    { name: "Corporate Network", icon: Network, gradient: "from-green-500 to-emerald-500" },
    { name: "Remote Access", icon: Wifi, gradient: "from-orange-500 to-red-500" },
    { name: "SOC Platform", icon: Shield, gradient: "from-blue-600 to-indigo-600" },
  ];

  return (
    <div className="min-h-screen bg-[#020817] text-white overflow-hidden">
      {/* Header */}
      <Header forceWhiteButtons={true} {...props} />

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
          className="absolute top-20 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
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
          className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
        />

        {/* Floating Holographic Device Silhouettes */}
        <motion.div
          className="absolute top-40 left-20 opacity-10"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <Laptop className="w-32 h-32 text-cyan-400" />
        </motion.div>
        <motion.div
          className="absolute top-60 right-32 opacity-10"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        >
          <Smartphone className="w-24 h-24 text-blue-400" />
        </motion.div>
        <motion.div
          className="absolute bottom-40 right-20 opacity-10"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 3, 0],
          }}
          transition={{ duration: 7, repeat: Infinity, delay: 2 }}
        >
          <Tablet className="w-28 h-28 text-cyan-400" />
        </motion.div>

        {/* Animated Shield Pulse Effect */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        >
          <Shield className="w-96 h-96 text-cyan-500" />
        </motion.div>

        <div className="relative container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">


            {/* Hero Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 text-transparent bg-clip-text">
                Secure Work on Any Device
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-2xl md:text-3xl mb-8 text-gray-600 dark:text-slate-300"
            >
              Anywhere, Anytime.
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-500 dark:text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              A unified security layer that protects your workforce across every endpoint, location,
              and connection.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                onClick={() => navigate(ROUTES.CONTACT)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  Enable Secure Work — Instantly
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>

              <motion.button
                onClick={() => {
                  const pricingSection = document.getElementById("pricing-plans-section");
                  if (pricingSection) {
                    pricingSection.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/5 backdrop-blur-xl border border-cyan-500/30 rounded-xl hover:bg-white/10 transition-colors"
              >
                View Plans
              </motion.button>
            </motion.div>

            {/* Data Stream Micro-Animations */}
            <div className="absolute left-10 top-1/3 space-y-2">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                  style={{ width: "100px" }}
                  animate={{
                    x: [-100, 100],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.7,
                  }}
                />
              ))}
            </div>
            <div className="absolute right-10 bottom-1/3 space-y-2">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
                  style={{ width: "100px" }}
                  animate={{
                    x: [100, -100],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.7,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Problem Statement Section */}
      <section className="relative py-24 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent">
        {/* Flowing Curve Background */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <svg className="absolute w-full h-full" preserveAspectRatio="none">
            <motion.path
              d="M0,100 Q250,50 500,100 T1000,100 L1000,0 L0,0 Z"
              fill="url(#curveGradient)"
              animate={{
                d: [
                  "M0,100 Q250,50 500,100 T1000,100 L1000,0 L0,0 Z",
                  "M0,100 Q250,150 500,100 T1000,100 L1000,0 L0,0 Z",
                  "M0,100 Q250,50 500,100 T1000,100 L1000,0 L0,0 Z",
                ],
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <defs>
              <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">
              Remote Work → Unlimited Risk. We Eliminate It.
            </h2>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-slate-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 group-hover:border-cyan-500/40 transition-colors">
                  <div className="text-4xl mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">
                    <Counter target={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                  </div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Risk Points with Glow */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {risks.map((risk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative group"
              >
                {/* Cyber-wave line background */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                />
                <div className="relative bg-slate-900/70 backdrop-blur-xl border border-cyan-500/20 group-hover:border-cyan-500/40 rounded-2xl p-8 transition-all">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="mb-4"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                      <risk.icon className="w-7 h-7 text-cyan-400" />
                    </div>
                  </motion.div>
                  <h3 className="text-xl mb-3 text-white group-hover:text-cyan-400 transition-colors">
                    {risk.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">{risk.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. How It Works - Vertical Timeline */}
      <section className="relative py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">
              How It Works
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Four-stage security pipeline for complete endpoint protection
            </p>
          </motion.div>

          {/* Vertical Timeline Desktop */}
          <div className="hidden lg:block max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical Neon Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/50 via-blue-500/50 to-cyan-500/50" />

              <div className="space-y-24">
                {timeline.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className={`relative flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                      }`}
                  >
                    {/* Content */}
                    <div
                      className={`w-5/12 ${index % 2 === 0 ? "text-right pr-12" : "text-left pl-12"}`}
                    >
                      <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
                        <div className="bg-slate-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/40 transition-all">
                          <h3 className="text-2xl mb-3 text-cyan-400">{step.title}</h3>
                          <p className="text-slate-400 leading-relaxed">{step.description}</p>
                        </div>
                      </motion.div>
                    </div>

                    {/* Center Node */}
                    <motion.div
                      animate={{
                        scale: activeTimeline === index ? [1, 1.3, 1] : 1,
                        opacity: activeTimeline === index ? [0.5, 1, 0.5] : 0.7,
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/50"
                    >
                      <step.icon className="w-4 h-4 text-white" />
                    </motion.div>

                    {/* Icon Container */}
                    <div className="w-5/12" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-8">
            {timeline.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex flex-col items-center">
                  <motion.div
                    animate={{
                      scale: activeTimeline === index ? [1, 1.2, 1] : 1,
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center ${activeTimeline === index
                      ? "bg-gradient-to-br from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/50"
                      : "bg-slate-800 border border-slate-700"
                      }`}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 h-16 bg-gradient-to-b from-cyan-500/50 to-blue-500/50 my-2" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-xl mb-2 text-cyan-400">{step.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Unified Endpoint Security Section */}
      <section className="relative py-24 bg-gradient-to-b from-blue-950/10 to-transparent overflow-hidden">
        {/* Animated Circuit Map Background */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full">
            <defs>
              <pattern
                id="circuit"
                x="0"
                y="0"
                width="100"
                height="100"
                patternUnits="userSpaceOnUse"
              >
                <motion.path
                  d="M 0 50 L 30 50 L 30 20 L 70 20 L 70 80 L 100 80"
                  stroke="#06b6d4"
                  strokeWidth="1"
                  fill="none"
                  animate={{
                    strokeOpacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.circle
                  cx="30"
                  cy="50"
                  r="3"
                  fill="#06b6d4"
                  animate={{
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.circle
                  cx="70"
                  cy="20"
                  r="3"
                  fill="#3b82f6"
                  animate={{
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </div>

        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">
              One Security Layer, Every Device.
            </h2>
          </motion.div>

          {/* Large Floating Holographic Devices */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {devices.map((device, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                onHoverStart={() => setHoveredDevice(index)}
                onHoverEnd={() => setHoveredDevice(null)}
                className="relative group"
              >
                {/* Holographic Glow */}
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-3xl blur-2xl"
                  animate={{
                    opacity: hoveredDevice === index ? 1 : 0.3,
                    scale: hoveredDevice === index ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.4 }}
                />

                <div className="relative">
                  {/* Device Icon */}
                  <motion.div
                    animate={{
                      y: hoveredDevice === index ? [-10, 10, -10] : 0,
                      rotateY: hoveredDevice === index ? [0, 360] : 0,
                    }}
                    transition={{
                      y: { duration: 3, repeat: Infinity },
                      rotateY: { duration: 1 },
                    }}
                    className="flex justify-center mb-8"
                  >
                    <div className="relative">
                      <device.icon className="w-32 h-32 text-cyan-400" />
                      {/* Neon Encrypted Tunnels */}
                      {hoveredDevice === index && (
                        <motion.div
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          className="absolute inset-0"
                        >
                          <svg className="w-full h-full" viewBox="0 0 100 100">
                            <motion.circle
                              cx="50"
                              cy="50"
                              r="40"
                              stroke="#06b6d4"
                              strokeWidth="2"
                              fill="none"
                              strokeDasharray="5,5"
                              animate={{
                                rotate: 360,
                              }}
                              transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                            />
                          </svg>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>

                  {/* Device Info */}
                  <div className="text-center">
                    <h3 className="text-2xl mb-3 text-white group-hover:text-cyan-400 transition-colors">
                      {device.name}
                    </h3>
                    <p className="text-slate-400 mb-6 leading-relaxed">{device.description}</p>

                    {/* Features */}
                    <div className="space-y-2">
                      {device.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{
                            opacity: hoveredDevice === index ? 1 : 0.7,
                            x: hoveredDevice === index ? 0 : -20,
                          }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center justify-center gap-2 text-sm text-slate-500"
                        >
                          <CheckCircle className="w-4 h-4 text-cyan-500" />
                          {feature}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Zero Trust Workforce Protection */}
      <section className="relative py-24 bg-[#0a1628]">
        {/* Deep Blue Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/50 to-transparent" />

        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">
              Zero Trust Workforce Protection
            </h2>
          </motion.div>

          {/* Long Neon Security Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-16"
          />

          {/* Floating Text Modules */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {zeroTrustFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="relative group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                />
                <div className="relative bg-slate-900/50 backdrop-blur-xl border border-cyan-500/30 group-hover:border-cyan-500/60 rounded-2xl p-6 transition-all">
                  <feature.icon className="w-10 h-10 text-cyan-400 mb-4" />
                  <p className="text-lg text-white">{feature.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Real-Time Security Layer Simulation */}
      <section className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">
              Every device is monitored.
            </h2>
            <p className="text-2xl text-slate-300">Every action validated.</p>
          </motion.div>

          {/* Cyber Animation - Particle Nodes */}
          <div className="relative max-w-5xl mx-auto h-96">
            {/* Center Shield */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <Shield className="w-24 h-24 text-cyan-400" />
            </motion.div>

            {/* Particle Nodes */}
            {[...Array(12)].map((_, i) => {
              const angle = (i / 12) * 2 * Math.PI;
              const radius = 150;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    x: x - 12,
                    y: y - 12,
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                >
                  <div className="w-6 h-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full relative">
                    {/* Connection Line to Center */}
                    <motion.div
                      className="absolute top-1/2 left-1/2 h-0.5 bg-gradient-to-r from-cyan-400/50 to-transparent origin-left"
                      style={{
                        width: `${radius}px`,
                        rotate: `${(angle * 180) / Math.PI + 180}deg`,
                      }}
                      animate={{
                        opacity: [0.2, 0.6, 0.2],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  </div>

                  {/* Blinking Warning */}
                  {i % 3 === 0 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                      className="absolute -top-6 -right-6"
                    >
                      <X className="w-4 h-4 text-red-500" />
                    </motion.div>
                  )}
                </motion.div>
              );
            })}

            {/* Scanning Waves */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              animate={{
                scale: [0, 3],
                opacity: [0.5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              <div className="w-48 h-48 border-2 border-cyan-400 rounded-full" />
            </motion.div>
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              animate={{
                scale: [0, 3],
                opacity: [0.5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 1.5,
              }}
            >
              <div className="w-48 h-48 border-2 border-blue-400 rounded-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. Benefits Section - Radial Layout */}
      <section className="relative py-24 bg-gradient-to-b from-blue-950/10 to-transparent">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">
              Why Choose Our Solution
            </h2>
          </motion.div>

          {/* Radial Layout - Desktop */}
          <div className="hidden lg:block relative max-w-6xl mx-auto h-[600px]">
            {/* Center Glowing Shield */}
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.6, 0.9, 0.6],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="relative">
                <Shield className="w-32 h-32 text-cyan-400" />
                <motion.div
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  className="absolute inset-0 bg-cyan-500 rounded-full blur-3xl"
                />
              </div>
            </motion.div>

            {/* Radiating Benefit Points */}
            {benefits.map((benefit, index) => {
              const angle = (index / benefits.length) * 2 * Math.PI - Math.PI / 2;
              const radius = 250;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <motion.div
                  key={index}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    x: x - 100,
                    y: y - 80,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  onHoverStart={() => setHoveredBenefit(index)}
                  onHoverEnd={() => setHoveredBenefit(null)}
                >
                  {/* Radiating Line */}
                  <motion.div
                    className="absolute top-20 left-24 h-0.5 bg-gradient-to-r from-cyan-400/60 to-transparent origin-left"
                    style={{
                      width: `${radius - 100}px`,
                      rotate: `${(angle * 180) / Math.PI + 180}deg`,
                    }}
                    animate={{
                      opacity: hoveredBenefit === index ? 1 : 0.3,
                    }}
                  />

                  {/* Benefit Card */}
                  <motion.div
                    animate={{
                      scale: hoveredBenefit === index ? 1.1 : 1,
                    }}
                    className="w-48 relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative bg-slate-900/70 backdrop-blur-xl border border-cyan-500/30 group-hover:border-cyan-500/60 rounded-2xl p-4 transition-all">
                      <benefit.icon className="w-8 h-8 text-cyan-400 mb-2" />
                      <h3 className="text-sm mb-1 text-white">{benefit.title}</h3>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Grid Layout - Mobile */}
          <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-slate-900/50 backdrop-blur-xl border border-cyan-500/20 group-hover:border-cyan-500/40 rounded-2xl p-6 transition-all">
                  <benefit.icon className="w-10 h-10 text-cyan-400 mb-4" />
                  <h3 className="text-lg mb-2 text-white">{benefit.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Integration Section */}
      <section className="relative py-24 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">
              Seamless Integration
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Connect with your existing security infrastructure
            </p>
          </motion.div>

          {/* Integration Nodes */}
          <div className="relative max-w-5xl mx-auto">
            {/* Center Security Core */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 360],
              }}
              transition={{
                scale: { duration: 4, repeat: Infinity },
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              }}
              className="relative mx-auto w-48 h-48 flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-full blur-2xl" />
              <div className="relative bg-slate-900/80 backdrop-blur-xl border-2 border-cyan-500 rounded-full w-32 h-32 flex items-center justify-center">
                <Shield className="w-16 h-16 text-cyan-400" />
              </div>
            </motion.div>

            {/* Integration Cards */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-16">
              {integrations.map((integration, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="relative group"
                >
                  {/* Neon Connector to Center */}
                  <motion.div
                    animate={{
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                    className="absolute -top-16 left-1/2 w-0.5 h-16 bg-gradient-to-b from-cyan-400 to-transparent"
                  />

                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative bg-slate-900/50 backdrop-blur-xl border border-cyan-500/20 group-hover:border-cyan-500/40 rounded-2xl p-6 transition-all">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="mb-4"
                      >
                        <div
                          className={`w-12 h-12 bg-gradient-to-br ${integration.gradient} rounded-xl flex items-center justify-center opacity-80`}
                        >
                          <integration.icon className="w-6 h-6 text-white" />
                        </div>
                      </motion.div>
                      <p className="text-sm text-white text-center">{integration.name}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. Pricing Plans */}
      <ServicePricing
        title={servicePlans["secure-work-device"].title}
        description={servicePlans["secure-work-device"].description}
        plans={servicePlans["secure-work-device"].plans}
      />

      {/* 10. CTA Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Clean Dark Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/30 to-transparent" />

        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 text-transparent bg-clip-text"
            >
              Enable Secure Work on Every Device — Instantly.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-slate-300 mb-12"
            >
              Contact our experts for a full security assessment.
            </motion.p>

            {/* Bright Neon Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.button
                onClick={() => navigate(ROUTES.CONTACT)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-12 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl overflow-hidden shadow-lg shadow-cyan-500/50"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center gap-3 text-lg">
                  Get Started Now
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* Footer rendering removed */}
    </div>
  );
}
