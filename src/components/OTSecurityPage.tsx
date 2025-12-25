import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Factory,
  Cpu,
  Activity,
  AlertTriangle,
  Lock,
  Gauge,
  Zap,
  Radio,
  Eye,
  Database,
  Network,
  Server,
  CheckCircle,
  ArrowRight,
  Container,
  Droplet,
  Truck,
  Building2,
  Hospital,
  Wind,
  Boxes,
  Globe,
  Clock,
  Users,
  Award,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useTheme } from "./ThemeContext";
import { Header } from "./Header";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes";
import { ServicePricing } from "./shared/ServicePricing";
import { servicePlans } from "../data/servicePlans";


// Footer import removed

interface OTSecurityPageProps {
  onContactClick?: () => void;
  onHomeClick?: () => void;
  onUnderAttackClick?: () => void;
  onPrivacyClick?: () => void;
  onTermsClick?: () => void;
  onCookieClick?: () => void;
  onAboutClick?: () => void;
  onLocationsClick?: () => void;
  onEthicsComplianceClick?: () => void;
  onCorporateResponsibilityClick?: () => void;
  onCollaborationDonationClick?: () => void;
  onSignInClick?: () => void;
  onCustomerLoginClick?: () => void;
  onAdminLoginClick?: () => void;
  onStudentMemberLoginClick?: () => void;
  onCustomerSignUpClick?: () => void;
  onStudentMemberSignUpClick?: () => void;
  onSignUpModalOpen?: () => void;
  onThreatMapClick?: () => void;
  onSecurityTestClick?: () => void;
  onPrecisionAISecurityClick?: () => void;
  onAccelerateTransformationClick?: () => void;
  onAwardsRecognitionClick?: () => void;
  onCustomerStoriesClick?: () => void;
  onCTFProgramClick?: () => void;
  onCompetitionsClick?: () => void;
  onJobsClick?: () => void;
  onCareersOverviewClick?: () => void;
  onTeamClick?: () => void;
  onEventsClick?: () => void;
  onUIUXDesignClick?: () => void;
  onWebDevelopmentClick?: () => void;
  onMobileDevelopmentClick?: () => void;
  onIndustriesClick?: () => void;
  onWhatsNewClick?: () => void;
  onCommunityClick?: () => void;
  onCloudNetworkSecurityClick?: () => void;
  onIDSIPSClick?: () => void;
  onWebPhishingSecurityClick?: () => void;
}

export function OTSecurityPage(props: OTSecurityPageProps) {
  const navigate = useNavigate();
  const { theme } = useTheme();
  // const { theme } = useTheme(); // Removed duplicate
  const isDark = true; // Force dark mode
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Stats animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-in-section").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const capabilities = [
    {
      icon: Activity,
      title: "Real-time OT Network Monitoring",
      desc: "Continuous surveillance of industrial networks",
    },
    {
      icon: AlertTriangle,
      title: "Anomaly Detection",
      desc: "AI-powered detection of unusual industrial traffic",
    },
    {
      icon: CheckCircle,
      title: "PLC/Device Integrity Validation",
      desc: "Ensure device authenticity and configuration",
    },
    {
      icon: Radio,
      title: "SCADA Protocol Inspection",
      desc: "Deep packet inspection for industrial protocols",
    },
    {
      icon: Shield,
      title: "IIoT Device Authentication",
      desc: "Secure authentication for all connected devices",
    },
    {
      icon: Network,
      title: "Industrial Firewalling",
      desc: "Specialized firewall rules for OT environments",
    },
    {
      icon: Lock,
      title: "Process Disruption Prevention",
      desc: "Protect critical operations from interference",
    },
    {
      icon: Cpu,
      title: "AI-Based Threat Prediction",
      desc: "Predictive analytics for emerging threats",
    },
  ];

  const threats = [
    {
      icon: AlertTriangle,
      title: "Malware Infiltrations",
      color: "text-red-500",
      position: "top-20 left-20",
    },
    {
      icon: Lock,
      title: "Ransomware Targeting PLCs",
      color: "text-orange-500",
      position: "top-40 right-32",
    },
    {
      icon: Zap,
      title: "Physical System Sabotage",
      color: "text-yellow-500",
      position: "bottom-40 left-32",
    },
    {
      icon: AlertTriangle,
      title: "Zero-day OT Vulnerabilities",
      color: "text-red-600",
      position: "top-32 right-20",
    },
    {
      icon: Eye,
      title: "Unauthorized Access Attempts",
      color: "text-orange-600",
      position: "bottom-32 right-40",
    },
    {
      icon: Network,
      title: "Lateral Movement in OT",
      color: "text-yellow-600",
      position: "bottom-20 left-40",
    },
    {
      icon: Boxes,
      title: "Supply Chain Attacks",
      color: "text-red-400",
      position: "top-1/2 right-24",
    },
  ];

  const pipeline = [
    { title: "Asset Discovery", icon: Database, desc: "Identify all OT devices" },
    { title: "Traffic Baseline Learning", icon: Activity, desc: "Understand normal patterns" },
    { title: "Industrial Protocol Analysis", icon: Radio, desc: "Analyze OT communications" },
    { title: "Threat Detection", icon: AlertTriangle, desc: "Identify anomalies" },
    { title: "Real-Time Blocking", icon: Shield, desc: "Stop threats instantly" },
    { title: "Process Safety Enforcement", icon: CheckCircle, desc: "Maintain operations" },
  ];

  const sectors = [
    { icon: Zap, title: "Energy & Utilities", color: "text-orange-500" },
    { icon: Droplet, title: "Oil & Gas", color: "text-blue-500" },
    { icon: Factory, title: "Manufacturing", color: "text-cyan-500" },
    { icon: Truck, title: "Transportation", color: "text-orange-400" },
    { icon: Building2, title: "Smart Cities", color: "text-blue-400" },
    { icon: Hospital, title: "Healthcare Equipment", color: "text-cyan-400" },
    { icon: Container, title: "Water & Waste Systems", color: "text-blue-600" },
    { icon: Globe, title: "Critical Infrastructure", color: "text-orange-600" },
  ];

  const whyMatters = [
    {
      icon: AlertTriangle,
      title: "Prevent Operational Shutdown",
      desc: "Keep systems running 24/7",
    },
    { icon: Shield, title: "Protect Human Safety", desc: "Ensure worker protection" },
    { icon: Factory, title: "Avoid Physical Damage", desc: "Prevent equipment destruction" },
    { icon: CheckCircle, title: "Ensure Compliance", desc: "Meet regulatory requirements" },
    { icon: Globe, title: "Defend National Infrastructure", desc: "Protect critical assets" },
    { icon: TrendingUp, title: "Reduce Downtime & Losses", desc: "Minimize financial impact" },
    { icon: Award, title: "Enhance Reliability", desc: "Increase system uptime" },
  ];

  const whyChoose = [
    {
      icon: Factory,
      title: "Built for SCADA & ICS",
      desc: "Purpose-built for industrial environments",
    },
    { icon: Clock, title: "24/7 SOC Support", desc: "Round-the-clock monitoring and response" },
    { icon: Activity, title: "Zero-Impact Monitoring", desc: "No interference with operations" },
    { icon: Cpu, title: "Industrial-Grade AI", desc: "Specialized machine learning models" },
    { icon: Radio, title: "Protocol-Level Expertise", desc: "Modbus, DNP3, OPC-UA, and more" },
    { icon: Network, title: "Seamless Integration", desc: "Works with existing OT assets" },
    { icon: Server, title: "Legacy System Support", desc: "Compatible with older equipment" },
  ];

  const testimonials = [
    {
      name: "Michael Rodriguez",
      role: "CISO, Global Energy Corp",
      content:
        "This OT security platform saved us from a major ransomware attack targeting our SCADA systems. The real-time detection prevented operational shutdown.",
      rating: 5,
    },
    {
      name: "Sarah Chen",
      role: "Head of Operations, Manufacturing Inc",
      content:
        "Finally, a security solution that understands industrial protocols. Zero false positives and seamless integration with our legacy PLCs.",
      rating: 5,
    },
    {
      name: "David Thompson",
      role: "Security Director, Water Utilities",
      content:
        "The 24/7 SOC support gives us peace of mind. They understand OT environments and respond within minutes to any anomaly.",
      rating: 5,
    },
  ];



  return (
    <div
      className={`min-h-screen ${isDark ? "bg-gradient-to-b from-[#0a0a0a] via-[#111111] to-[#0a0a0a]" : "bg-gradient-to-b from-gray-50 via-white to-gray-50"}`}
    >
      <Header forceWhiteButtons={true} {...props} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Industrial Grid */}
          <div className="absolute inset-0 opacity-20">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(${isDark ? "#FF6B00" : "#FF6B00"} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? "#FF6B00" : "#FF6B00"} 1px, transparent 1px)`,
                backgroundSize: "50px 50px",
              }}
            />
          </div>

          {/* Animated Energy Pulses */}
          <div className="absolute top-1/4 left-10 w-64 h-64">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-full blur-3xl animate-pulse" />
          </div>
          <div className="absolute bottom-1/4 right-10 w-96 h-96">
            <div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            />
          </div>

          {/* Flowing Pipeline Animation */}
          <svg className="absolute top-0 left-0 w-full h-full opacity-30">
            <defs>
              <linearGradient id="pipeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: "#FF6B00", stopOpacity: 0 }} />
                <stop offset="50%" style={{ stopColor: "#FF6B00", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "#00D9FF", stopOpacity: 0 }} />
              </linearGradient>
            </defs>
            <path
              d="M 0 100 Q 200 150, 400 100 T 800 100"
              stroke="url(#pipeGradient)"
              strokeWidth="2"
              fill="none"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="0"
                to="1000"
                dur="3s"
                repeatCount="indefinite"
              />
            </path>
            <path
              d="M 800 300 Q 600 250, 400 300 T 0 300"
              stroke="url(#pipeGradient)"
              strokeWidth="2"
              fill="none"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="1000"
                to="0"
                dur="4s"
                repeatCount="indefinite"
              />
            </path>
          </svg>

          {/* Rotating Factory Hologram */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-20">
            <div className="relative w-full h-full animate-spin-slow">
              <Factory className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 text-orange-500" />
              <div className="absolute top-0 left-1/2 w-px h-1/2 bg-gradient-to-b from-orange-500 to-transparent" />
              <div className="absolute bottom-0 left-1/2 w-px h-1/2 bg-gradient-to-t from-cyan-500 to-transparent" />
              <div className="absolute top-1/2 left-0 w-1/2 h-px bg-gradient-to-r from-orange-500 to-transparent" />
              <div className="absolute top-1/2 right-0 w-1/2 h-px bg-gradient-to-l from-cyan-500 to-transparent" />
            </div>
          </div>

          {/* Floating Particles */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-orange-500 rounded-full animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">


          {/* Industrial Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-500/30 backdrop-blur-sm mb-8">
            <Factory className="w-5 h-5 text-orange-500" />
            <span className="text-orange-500 font-semibold">
              OT Security — Industrial Cyber Defense
            </span>
            <Zap className="w-5 h-5 text-yellow-500 animate-pulse" />
          </div>

          <h1
            className={`text-6xl md:text-7xl lg:text-8xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}
          >
            OT Security
          </h1>
          <div className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
            Protecting the Machines That Power the World
          </div>

          <p
            className={`text-xl md:text-2xl mb-12 max-w-4xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}
          >
            Secure industrial systems, prevent operational disruption, and defend critical
            infrastructures from cyber threats.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => navigate(ROUTES.CONTACT)}
              className="group px-8 py-4 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-xl font-semibold text-white shadow-lg hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2">
              Start Industrial Security Audit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => {
                const pricingSection = document.getElementById("ot-pricing-section");
                if (pricingSection) {
                  pricingSection.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              className={`group px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2 ${isDark ? "bg-white/10 text-white border border-white/20 hover:bg-white/20" : "bg-gray-900/10 text-gray-900 border border-gray-900/20 hover:bg-gray-900/20"}`}
            >
              View Plans
              <Activity className="w-5 h-5" />
            </button>
          </div>

          {/* Real-time Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            {[
              { value: "15M+", label: "OT Devices Protected", icon: Factory },
              { value: "99.97%", label: "Uptime Guaranteed", icon: Activity },
              { value: "24/7", label: "Industrial SOC", icon: Shield },
            ].map((stat, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl backdrop-blur-md ${isDark ? "bg-white/5 border border-white/10" : "bg-black/5 border border-black/10"} hover:scale-105 transition-transform duration-300`}
              >
                <stat.icon className="w-8 h-8 text-orange-500 mx-auto mb-4" />
                <div className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Is OT Security Section */}
      <section
        className={`py-32 relative overflow-hidden fade-in-section ${isDark ? "bg-[#0a0a0a]" : "bg-white"}`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left - Industrial Wireframe */}
            <div className="relative h-[500px]">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Central Factory */}
                <div className="relative">
                  <Factory className="w-32 h-32 text-orange-500 animate-pulse" />

                  {/* Pulsing Rings */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div
                      className="w-48 h-48 rounded-full border-2 border-orange-500/30 animate-ping"
                      style={{ animationDuration: "3s" }}
                    />
                    <div
                      className="w-64 h-64 rounded-full border-2 border-cyan-500/30 animate-ping absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      style={{ animationDuration: "4s", animationDelay: "1s" }}
                    />
                  </div>

                  {/* Connection Lines */}
                  {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                    <div
                      key={i}
                      className="absolute top-1/2 left-1/2 origin-left"
                      style={{ transform: `rotate(${angle}deg)`, width: "120px" }}
                    >
                      <div
                        className="h-px bg-gradient-to-r from-orange-500 to-transparent animate-pulse"
                        style={{ animationDelay: `${i * 0.5}s` }}
                      />
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                        <Cpu className="w-6 h-6 text-cyan-500" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Data Flow Particles */}
                {[...Array(15)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-orange-500 animate-float"
                    style={{
                      top: `${20 + Math.random() * 60}%`,
                      left: `${20 + Math.random() * 60}%`,
                      animationDelay: `${Math.random() * 3}s`,
                      animationDuration: `${3 + Math.random() * 4}s`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Right - Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-500/30 mb-6">
                <Shield className="w-4 h-4 text-orange-500" />
                <span className="text-orange-500 font-semibold text-sm">
                  Industrial Cybersecurity
                </span>
              </div>

              <h2
                className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}
              >
                What Is OT Security?
              </h2>

              <div className="space-y-6">
                <div>
                  <h3
                    className={`text-xl font-semibold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}
                  >
                    OT Environments: SCADA, ICS, PLC, DCS, IIoT
                  </h3>
                  <p className={`${isDark ? "text-gray-400" : "text-gray-600"} leading-relaxed`}>
                    Operational Technology (OT) encompasses the hardware and software that monitors
                    and controls physical devices, processes, and infrastructure. This includes
                    supervisory control and data acquisition (SCADA) systems, industrial control
                    systems (ICS), programmable logic controllers (PLCs), distributed control
                    systems (DCS), and the Industrial Internet of Things (IIoT).
                  </p>
                </div>

                <div>
                  <h3
                    className={`text-xl font-semibold mb-3 flex items-center gap-2 ${isDark ? "text-white" : "text-gray-900"}`}
                  >
                    <AlertTriangle className="w-5 h-5 text-orange-500" />
                    The Danger of OT Cyberattacks
                  </h3>
                  <p className={`${isDark ? "text-gray-400" : "text-gray-600"} leading-relaxed`}>
                    OT cyberattacks can cause catastrophic consequences: operational shutdowns,
                    physical equipment damage, environmental disasters, and even loss of life.
                    Unlike IT breaches that compromise data, OT attacks target the physical
                    world—power grids, water supplies, manufacturing lines, and critical
                    infrastructure.
                  </p>
                </div>

                <div>
                  <h3
                    className={`text-xl font-semibold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}
                  >
                    Why Traditional IT Security Isn't Enough
                  </h3>
                  <p className={`${isDark ? "text-gray-400" : "text-gray-600"} leading-relaxed`}>
                    IT security focuses on confidentiality, integrity, and availability—in that
                    order. OT security prioritizes availability, integrity, then confidentiality.
                    Traditional IT tools can disrupt industrial processes, lack protocol support
                    (Modbus, DNP3, OPC-UA), and don't understand operational context. OT requires
                    specialized security designed for real-time, mission-critical environments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key OT Security Capabilities */}
      <section
        className={`py-32 relative overflow-hidden ${isDark ? "bg-gradient-to-b from-[#0a0a0a] to-[#111111]" : "bg-gradient-to-b from-white to-gray-50"}`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/10 to-cyan-500/10 border border-orange-500/30 mb-6">
              <Zap className="w-4 h-4 text-orange-500" />
              <span className="text-orange-500 font-semibold text-sm">
                Industrial-Grade Protection
              </span>
            </div>
            <h2
              className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}
            >
              Key OT Security Capabilities
            </h2>
            <p
              className={`text-xl max-w-3xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}
            >
              Purpose-built security for industrial environments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className={`group p-6 rounded-2xl backdrop-blur-md transition-all duration-300 hover:scale-105 relative overflow-hidden ${isDark ? "bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-orange-500/50" : "bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-orange-500/50"}`}
              >
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-cyan-500/0 group-hover:from-orange-500/10 group-hover:to-cyan-500/10 transition-all duration-300" />

                {/* Neon Line Animation */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500 to-transparent animate-shimmer" />
                </div>

                <div className="relative z-10">
                  <capability.icon className="w-12 h-12 text-orange-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3
                    className={`text-lg font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}
                  >
                    {capability.title}
                  </h3>
                  <p className={`${isDark ? "text-gray-400" : "text-gray-600"} text-sm`}>
                    {capability.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OT Threat Landscape */}
      <section className={`py-32 relative overflow-hidden ${isDark ? "bg-[#0a0a0a]" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/30 mb-6">
              <AlertTriangle className="w-4 h-4 text-red-500" />
              <span className="text-red-500 font-semibold text-sm">Industrial Threats</span>
            </div>
            <h2
              className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}
            >
              OT Threat Landscape
            </h2>
            <p
              className={`text-xl max-w-3xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}
            >
              Understanding the threats targeting industrial systems
            </p>
          </div>

          {/* 3D Industrial Facility with Threats */}
          <div className="relative h-[600px] max-w-5xl mx-auto">
            {/* Central Factory Hologram */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                {/* Factory Structure */}
                <div
                  className={`w-64 h-64 rounded-lg backdrop-blur-md ${isDark ? "bg-white/5 border border-white/10" : "bg-black/5 border border-black/10"} p-8`}
                >
                  <Factory className="w-full h-full text-orange-500/50" />

                  {/* Grid Lines */}
                  <div className="absolute inset-0 opacity-30">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `linear-gradient(${isDark ? "#FF6B00" : "#FF6B00"} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? "#FF6B00" : "#FF6B00"} 1px, transparent 1px)`,
                        backgroundSize: "20px 20px",
                      }}
                    />
                  </div>
                </div>

                {/* Threat Nodes */}
                {threats.map((threat, index) => (
                  <div
                    key={index}
                    className={`absolute ${threat.position} animate-pulse`}
                    style={{ animationDelay: `${index * 0.5}s` }}
                  >
                    <div className="relative group cursor-pointer">
                      {/* Pulsing Threat Circle */}
                      <div
                        className={`w-16 h-16 rounded-full ${isDark ? "bg-red-500/20" : "bg-red-500/10"} border-2 ${threat.color.replace("text-", "border-")} flex items-center justify-center backdrop-blur-sm`}
                      >
                        <threat.icon className={`w-8 h-8 ${threat.color}`} />
                      </div>

                      {/* Tooltip */}
                      <div
                        className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-4 py-2 rounded-lg ${isDark ? "bg-gray-900" : "bg-white"} border ${isDark ? "border-white/20" : "border-gray-200"} whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-xl`}
                      >
                        <div
                          className={`text-sm font-semibold ${isDark ? "text-white" : "text-gray-900"}`}
                        >
                          {threat.title}
                        </div>
                      </div>

                      {/* Connection Line to Factory */}
                      <svg className="absolute top-1/2 left-1/2 w-32 h-32 pointer-events-none">
                        <line
                          x1="0"
                          y1="0"
                          x2="64"
                          y2="64"
                          stroke={threat.color.replace("text-", "")}
                          strokeWidth="2"
                          strokeDasharray="4 4"
                          className="opacity-30"
                        >
                          <animate
                            attributeName="stroke-dashoffset"
                            from="0"
                            to="8"
                            dur="0.5s"
                            repeatCount="indefinite"
                          />
                        </line>
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Threat Labels */}
            <div className="absolute bottom-0 left-0 right-0">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {threats.slice(0, 4).map((threat, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg backdrop-blur-md ${isDark ? "bg-white/5 border border-white/10" : "bg-black/5 border border-black/10"}`}
                  >
                    <threat.icon className={`w-6 h-6 ${threat.color} mb-2`} />
                    <div
                      className={`text-sm font-semibold ${isDark ? "text-white" : "text-gray-900"}`}
                    >
                      {threat.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How OT Security Works - Timeline */}
      <section
        className={`py-32 relative overflow-hidden ${isDark ? "bg-gradient-to-b from-[#111111] to-[#0a0a0a]" : "bg-gradient-to-b from-gray-50 to-white"}`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 mb-6">
              <Activity className="w-4 h-4 text-cyan-500" />
              <span className="text-cyan-500 font-semibold text-sm">Detection Pipeline</span>
            </div>
            <h2
              className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}
            >
              How OT Security Works
            </h2>
            <p
              className={`text-xl max-w-3xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}
            >
              Six-stage industrial security pipeline
            </p>
          </div>

          {/* Horizontal Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-cyan-500 to-orange-500 hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-cyan-500 to-orange-500 animate-shimmer" />
            </div>

            {/* Timeline Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
              {pipeline.map((step, index) => (
                <div key={index} className="relative flex flex-col items-center text-center">
                  {/* Step Number */}
                  <div className="relative z-10 mb-4">
                    <div
                      className={`w-24 h-24 rounded-full backdrop-blur-md flex items-center justify-center ${isDark ? "bg-gradient-to-br from-orange-500/20 to-cyan-500/20 border border-orange-500/50" : "bg-gradient-to-br from-orange-100 to-cyan-100 border border-orange-500/50"} shadow-xl`}
                    >
                      <step.icon className="w-10 h-10 text-orange-500" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center text-white text-sm font-bold shadow-lg">
                      {index + 1}
                    </div>
                  </div>

                  {/* Step Content */}
                  <h3
                    className={`text-lg font-bold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}
                  >
                    {step.title}
                  </h3>
                  <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    {step.desc}
                  </p>

                  {/* Arrow (except last) */}
                  {index < pipeline.length - 1 && (
                    <ArrowRight className="hidden lg:block absolute top-12 -right-4 w-6 h-6 text-orange-500" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OT Security Dashboard Preview */}
      <section className={`py-32 relative overflow-hidden ${isDark ? "bg-[#0a0a0a]" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 mb-6">
              <Gauge className="w-4 h-4 text-blue-500" />
              <span className="text-blue-500 font-semibold text-sm">Real-Time Monitoring</span>
            </div>
            <h2
              className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}
            >
              OT Security Dashboard
            </h2>
            <p
              className={`text-xl max-w-3xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}
            >
              Comprehensive visibility into your industrial environment
            </p>
          </div>

          {/* Dashboard Mock */}
          <div
            className={`max-w-6xl mx-auto p-8 rounded-3xl backdrop-blur-md ${isDark ? "bg-gradient-to-br from-white/5 to-white/10 border border-white/10" : "bg-gradient-to-br from-gray-50 to-white border border-gray-200"} shadow-2xl`}
          >
            {/* Dashboard Header */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-orange-500/30">
              <div>
                <h3 className={`text-2xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
                  Industrial Control Center
                </h3>
                <p className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
                  Live monitoring · Updated 2 seconds ago
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-green-500 font-semibold">All Systems Operational</span>
              </div>
            </div>

            {/* Dashboard Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Real-time Alerts */}
              <div
                className={`p-6 rounded-2xl ${isDark ? "bg-white/5 border border-white/10" : "bg-white border border-gray-200"}`}
              >
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="w-5 h-5 text-orange-500" />
                  <h4 className={`font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>
                    Real-time Alerts
                  </h4>
                </div>
                <div className="text-4xl font-bold text-orange-500 mb-2">23</div>
                <div className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                  Active notifications
                </div>
              </div>

              {/* PLC Integrity Status */}
              <div
                className={`p-6 rounded-2xl ${isDark ? "bg-white/5 border border-white/10" : "bg-white border border-gray-200"}`}
              >
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <h4 className={`font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>
                    PLC Integrity
                  </h4>
                </div>
                <div className="text-4xl font-bold text-green-500 mb-2">100%</div>
                <div className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                  All devices validated
                </div>
              </div>

              {/* SCADA Protocol Logs */}
              <div
                className={`p-6 rounded-2xl ${isDark ? "bg-white/5 border border-white/10" : "bg-white border border-gray-200"}`}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Radio className="w-5 h-5 text-cyan-500" />
                  <h4 className={`font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>
                    Protocol Logs
                  </h4>
                </div>
                <div className="text-4xl font-bold text-cyan-500 mb-2">1.2M</div>
                <div className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                  Messages today
                </div>
              </div>

              {/* Threat Anomaly Graph */}
              <div
                className={`md:col-span-2 p-6 rounded-2xl ${isDark ? "bg-white/5 border border-white/10" : "bg-white border border-gray-200"}`}
              >
                <h4 className={`font-semibold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
                  Threat Detection Timeline
                </h4>
                <div className="h-32 flex items-end gap-2">
                  {[30, 45, 25, 60, 40, 55, 35, 50, 30, 40, 25, 35].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-orange-500 to-yellow-500 rounded-t"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>

              {/* Device Behavior Heatmap */}
              <div
                className={`p-6 rounded-2xl ${isDark ? "bg-white/5 border border-white/10" : "bg-white border border-gray-200"}`}
              >
                <h4 className={`font-semibold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
                  Device Heatmap
                </h4>
                <div className="grid grid-cols-5 gap-1">
                  {[...Array(25)].map((_, i) => (
                    <div
                      key={i}
                      className="aspect-square rounded"
                      style={{
                        backgroundColor: `rgb(${255 - i * 10}, ${100 + i * 6}, 0, ${0.3 + Math.random() * 0.7})`,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Asset Inventory */}
              <div
                className={`md:col-span-3 p-6 rounded-2xl ${isDark ? "bg-white/5 border border-white/10" : "bg-white border border-gray-200"}`}
              >
                <h4 className={`font-semibold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
                  Asset Inventory
                </h4>
                <div className="grid grid-cols-4 gap-4">
                  {[
                    { icon: Cpu, label: "PLCs", count: 156 },
                    { icon: Server, label: "SCADA Systems", count: 23 },
                    { icon: Database, label: "Historians", count: 12 },
                    { icon: Network, label: "IIoT Devices", count: 842 },
                  ].map((asset, i) => (
                    <div key={i} className="text-center">
                      <asset.icon className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                      <div
                        className={`text-2xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}
                      >
                        {asset.count}
                      </div>
                      <div className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                        {asset.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Protected Sectors */}
      <section
        className={`py-32 relative overflow-hidden ${isDark ? "bg-gradient-to-b from-[#111111] to-[#0a0a0a]" : "bg-gradient-to-b from-gray-50 to-white"}`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 mb-6">
              <Globe className="w-4 h-4 text-blue-500" />
              <span className="text-blue-500 font-semibold text-sm">Critical Industries</span>
            </div>
            <h2
              className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}
            >
              Protected Sectors
            </h2>
            <p
              className={`text-xl max-w-3xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}
            >
              Securing the world's most critical infrastructures
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {sectors.map((sector, index) => (
              <div
                key={index}
                className={`group p-8 rounded-2xl backdrop-blur-md transition-all duration-300 hover:scale-105 text-center ${isDark ? "bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-orange-500/50" : "bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-orange-500/50"}`}
              >
                <sector.icon
                  className={`w-16 h-16 ${sector.color} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                />
                <h3 className={`text-lg font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>
                  {sector.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why OT Security Matters */}
      <section className={`py-32 relative overflow-hidden ${isDark ? "bg-[#0a0a0a]" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/30 mb-6">
              <AlertTriangle className="w-4 h-4 text-red-500" />
              <span className="text-red-500 font-semibold text-sm">Mission-Critical</span>
            </div>
            <h2
              className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}
            >
              Why OT Security Matters
            </h2>
            <p
              className={`text-xl max-w-3xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}
            >
              The stakes are higher in operational technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyMatters.map((item, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl backdrop-blur-md transition-all duration-300 hover:scale-105 ${isDark ? "bg-gradient-to-br from-orange-500/5 to-red-500/5 border border-orange-500/20 hover:border-orange-500/50" : "bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 hover:border-orange-500/50"}`}
              >
                <item.icon className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className={`text-lg font-bold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                  {item.title}
                </h3>
                <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our OT Security */}
      <section
        className={`py-32 relative overflow-hidden ${isDark ? "bg-gradient-to-b from-[#111111] to-[#0a0a0a]" : "bg-gradient-to-b from-gray-50 to-white"}`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 mb-6">
              <Award className="w-4 h-4 text-cyan-500" />
              <span className="text-cyan-500 font-semibold text-sm">Industry Leadership</span>
            </div>
            <h2
              className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}
            >
              Why Choose Our OT Security?
            </h2>
            <p
              className={`text-xl max-w-3xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}
            >
              Purpose-built for industrial environments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoose.map((item, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl backdrop-blur-md transition-all duration-300 hover:scale-105 ${isDark ? "bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-cyan-500/50" : "bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-cyan-500/50"}`}
              >
                <item.icon className="w-16 h-16 text-cyan-500 mb-6" />
                <h3 className={`text-xl font-bold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}>
                  {item.title}
                </h3>
                <p className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className={`py-32 relative overflow-hidden ${isDark ? "bg-[#0a0a0a]" : "bg-white"}`}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 mb-6">
              <Users className="w-4 h-4 text-yellow-500" />
              <span className="text-yellow-500 font-semibold text-sm">Client Success</span>
            </div>
            <h2
              className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}
            >
              Trusted by Industry Leaders
            </h2>
          </div>

          {/* Testimonial Carousel */}
          <div className="relative">
            <div
              className={`p-12 rounded-3xl backdrop-blur-md ${isDark ? "bg-gradient-to-br from-white/5 to-white/10 border border-white/10" : "bg-gradient-to-br from-gray-50 to-white border border-gray-200"}`}
            >
              <div className="mb-6">
                {"★"
                  .repeat(testimonials[activeTestimonial].rating)
                  .split("")
                  .map((star, i) => (
                    <span key={i} className="text-yellow-500 text-2xl">
                      {star}
                    </span>
                  ))}
              </div>

              <p
                className={`text-xl md:text-2xl mb-8 italic ${isDark ? "text-gray-300" : "text-gray-600"}`}
              >
                "{testimonials[activeTestimonial].content}"
              </p>

              <div>
                <div className={`font-bold text-lg ${isDark ? "text-white" : "text-gray-900"}`}>
                  {testimonials[activeTestimonial].name}
                </div>
                <div className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
                  {testimonials[activeTestimonial].role}
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() =>
                setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
              }
              className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-300 hover:scale-110 ${isDark ? "bg-white/10 border border-white/20 text-white" : "bg-white border border-gray-200 text-gray-900"}`}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() =>
                setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
              }
              className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-300 hover:scale-110 ${isDark ? "bg-white/10 border border-white/20 text-white" : "bg-white border border-gray-200 text-gray-900"}`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeTestimonial ? "bg-orange-500 w-8" : isDark ? "bg-white/20" : "bg-gray-300"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
<ServicePricing
    title={servicePlans["ot-security"].title}
    description={servicePlans["ot-security"].description}
    plans={servicePlans["ot-security"].plans}
    highlightColor="orange"
/>

{/* Final CTA Section */ }
<section className="relative py-32 overflow-hidden">
    {/* Industrial Blueprint Background */}
    <div className="absolute inset-0 opacity-20">
        <div
            className="absolute inset-0"
            style={{
                backgroundImage: `linear-gradient(${isDark ? "#FF6B00" : "#FF6B00"} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? "#FF6B00" : "#FF6B00"} 1px, transparent 1px)`,
                backgroundSize: "40px 40px",
            }}
        />
    </div>

    {/* Glowing Factory Wireframe */}
    <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <Factory className="w-[800px] h-[800px] text-orange-500" />
    </div>

    <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border border-orange-500/50 backdrop-blur-sm mb-8">
            <AlertTriangle className="w-5 h-5 text-orange-500 animate-pulse" />
            <span className="text-orange-500 font-semibold">
                Act Before Downtime or Damage Occurs
            </span>
        </div>

        <h2
            className={`text-5xl md:text-6xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}
        >
            Secure Your Industrial Operations
        </h2>

        <p
            className={`text-xl md:text-2xl mb-12 max-w-3xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}
        >
            Don't wait for a cyberattack to disrupt your operations. Deploy industrial-grade OT
            security today.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
                onClick={() => navigate(ROUTES.CONTACT)}
                className="group px-10 py-5 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-xl font-bold text-white text-lg shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-3">
                <Shield className="w-6 h-6" />
                Deploy OT Security
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
                onClick={() => navigate(ROUTES.CONTACT)}
                className={`group px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center gap-3 ${isDark ? "bg-white/10 text-white border-2 border-white/20 hover:bg-white/20" : "bg-gray-900/10 text-gray-900 border-2 border-gray-900/20 hover:bg-gray-900/20"}`}
            >
                <Users className="w-6 h-6" />
                Talk to an Industrial Security Expert
            </button>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            {[
                { icon: Factory, label: "15M+ Devices Protected" },
                { icon: Globe, label: "Critical Infrastructure Secured" },
                { icon: Clock, label: "24/7 SOC Support" },
                { icon: Award, label: "Industry-Leading Detection" },
            ].map((indicator, index) => (
                <div key={index} className="text-center">
                    <indicator.icon className="w-10 h-10 text-orange-500 mx-auto mb-3" />
                    <div
                        className={`text-sm font-semibold ${isDark ? "text-gray-300" : "text-gray-700"}`}
                    >
                        {indicator.label}
                    </div>
                </div>
            ))}
        </div>
    </div>
</section>

{/* Footer rendering removed */ }

{/* Custom Animations */ }
<style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.3; }
          50% { transform: translateY(-20px) translateX(10px); opacity: 0.8; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-shimmer {
          animation: shimmer 2s linear infinite;
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .fade-in-section {
          opacity: 0;
        }
      `}</style>
    </div >
  );
}
