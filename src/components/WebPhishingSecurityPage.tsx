import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  AlertTriangle,
  Eye,
  Brain,
  Zap,
  Lock,
  Globe,
  Mail,
  Link as LinkIcon,
  Server,
  Activity,
  Target,
  CheckCircle,
  ArrowRight,
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
  Search,
  Database,
  UserX,
  ExternalLink,
  Ban,
  ShieldCheck,
  Layers,
  Fingerprint,
  ChevronRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes";
import { Header } from "./Header";
import { ServicePricing } from "./shared/ServicePricing";
import { servicePlans } from "../data/servicePlans";

interface WebPhishingSecurityPageProps {
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
}

export default function WebPhishingSecurityPage(props: WebPhishingSecurityPageProps) {
  const navigate = useNavigate();
  const [activeTimeline, setActiveTimeline] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [hoveredCapability, setHoveredCapability] = useState<number | null>(null);
  const [scanningAnimation, setScanningAnimation] = useState(0);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Auto-rotate timeline
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTimeline((prev) => (prev + 1) % 6);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Scanning line animation
  useEffect(() => {
    const interval = setInterval(() => {
      setScanningAnimation((prev) => (prev + 1) % 100);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  // Stats data with animation
  const stats = [
    { value: 8500, suffix: "+", label: "Phishing Domains Blocked Daily", prefix: "" },
    { value: 99.4, suffix: "%", label: "Detection Accuracy", prefix: "" },
    { value: 3.2, suffix: "M", label: "Threat URLs in Database", prefix: "" },
    { value: 95, suffix: "%", label: "Real-Time Block Rate", prefix: "" },
  ];

  const whyItMatters = [
    {
      icon: TrendingUp,
      title: "Rise of Phishing Attacks",
      description:
        "Phishing attacks have increased 350% year-over-year, targeting employees and customers alike",
      stat: "350%",
      statLabel: "YoY Increase",
    },
    {
      icon: UserX,
      title: "Credential Harvesting",
      description:
        "Fake login pages steal user credentials, leading to account takeovers and data breaches",
      stat: "74%",
      statLabel: "Of Breaches",
    },
    {
      icon: Globe,
      title: "Malicious Redirects",
      description:
        "Compromised websites redirect users to phishing pages or malware download sites",
      stat: "2.4M",
      statLabel: "Fake Sites",
    },
  ];

  const capabilities = [
    {
      icon: Brain,
      title: "AI-Based Phishing Detection",
      description:
        "Machine learning analyzes page content, behavior, and visual similarity to detect phishing attempts",
      features: ["Content analysis", "Visual similarity", "Brand impersonation"],
    },
    {
      icon: Search,
      title: "URL & Domain Reputation",
      description:
        "Real-time reputation scoring of URLs and domains against global threat intelligence databases",
      features: ["Domain age analysis", "WHOIS verification", "Threat intelligence feeds"],
    },
    {
      icon: Eye,
      title: "Fake Website Identification",
      description:
        "Detect lookalike domains and visual clones of legitimate websites using computer vision",
      features: ["Typosquatting detection", "Logo matching", "Layout analysis"],
    },
    {
      icon: Lock,
      title: "Suspicious Login Page Blocking",
      description: "Identify and block fake login forms designed to harvest user credentials",
      features: ["Form behavior analysis", "SSL validation", "Certificate inspection"],
    },
    {
      icon: Code,
      title: "Browser Script Protection",
      description: "Detect and prevent malicious JavaScript, keyloggers, and form-grabbing scripts",
      features: ["Script sandboxing", "Behavior monitoring", "Code injection prevention"],
    },
    {
      icon: ExternalLink,
      title: "Redirection Chain Analysis",
      description:
        "Trace and analyze multi-hop redirects to uncover hidden phishing or malware destinations",
      features: ["Hop tracking", "Final destination analysis", "Cloaking detection"],
    },
  ];

  const timeline = [
    {
      icon: LinkIcon,
      title: "URL/Request Inspection",
      description: "Every web request is intercepted and analyzed before reaching the user",
    },
    {
      icon: Brain,
      title: "AI Phishing Analysis",
      description: "Machine learning evaluates page content, structure, and behavior patterns",
    },
    {
      icon: Database,
      title: "Reputation Checking",
      description: "URL is checked against global threat intelligence and domain databases",
    },
    {
      icon: Activity,
      title: "Behavioral Analysis",
      description: "Page behavior, scripts, and forms are analyzed for malicious intent",
    },
    {
      icon: Ban,
      title: "Blocking & Safe Redirect",
      description: "Malicious sites are blocked and users are redirected to a safe warning page",
    },
    {
      icon: FileCheck,
      title: "Logging & Forensics",
      description: "All events are logged in the security dashboard for investigation",
    },
  ];

  const dashboardMetrics = [
    { label: "URLs Scanned Today", value: "142,847", trend: "+12%", color: "cyan" },
    { label: "Phishing Attempts Blocked", value: "8,592", trend: "+8%", color: "red" },
    { label: "Fake Domains Identified", value: "1,234", trend: "+15%", color: "orange" },
    { label: "Users Protected", value: "45,678", trend: "+5%", color: "green" },
  ];

  const threatTypes = [
    {
      icon: Mail,
      title: "Phishing Sites",
      description: "Fake websites impersonating legitimate brands to steal credentials",
      examples: ["Banking phishing", "Email phishing", "Social media clones"],
    },
    {
      icon: Lock,
      title: "Fake Banking Portals",
      description: "Lookalike financial institution websites designed to harvest login credentials",
      examples: ["Payment page clones", "Account verification scams", "Wire transfer fraud"],
    },
    {
      icon: UserX,
      title: "Suspicious Login Pages",
      description: "Credential harvesting forms disguised as legitimate authentication pages",
      examples: ["Office 365 clones", "Google login fakes", "SSO impersonation"],
    },
    {
      icon: ExternalLink,
      title: "Malicious Redirect Chains",
      description: "Multi-hop redirects that lead users to phishing or malware sites",
      examples: ["URL shortener abuse", "Compromised redirects", "Cloaking techniques"],
    },
    {
      icon: Code,
      title: "Script Injection Pages",
      description: "Websites with malicious JavaScript for keylogging or form grabbing",
      examples: ["Keyloggers", "Form hijackers", "Session stealers"],
    },
    {
      icon: Globe,
      title: "Domain Spoofing",
      description: "Typosquatting and lookalike domains designed to deceive users",
      examples: ["Homograph attacks", "Typosquatting", "Subdomain spoofing"],
    },
  ];

  const aiFeatures = [
    {
      title: "Behavioral AI",
      description: "Analyzes user interaction patterns and page behavior to detect anomalies",
    },
    {
      title: "Pattern Recognition",
      description: "Identifies common phishing patterns across HTML structure and content",
    },
    {
      title: "Link Entropy Analysis",
      description: "Evaluates URL randomness and structure to detect malicious generation",
    },
    {
      title: "SSL Certificate Validation",
      description: "Verifies certificate authenticity, issuer, and expiration dates",
    },
    {
      title: "Form Behavior Analysis",
      description: "Monitors form submission patterns and data collection practices",
    },
    {
      title: "Visual Similarity Detection",
      description: "Uses computer vision to detect brand impersonation and visual clones",
    },
  ];

  const useCases = [
    {
      icon: Shield,
      title: "Securing Corporate Browsing",
      description: "Protect enterprise networks from web-based threats and phishing attacks",
    },
    {
      icon: Mail,
      title: "Email Link Protection",
      description: "Scan and block malicious links in emails before users can click them",
    },
    {
      icon: Globe,
      title: "Safe Web Navigation",
      description: "Ensure employees can browse safely without encountering phishing sites",
    },
    {
      icon: Lock,
      title: "Online Transaction Security",
      description: "Verify payment pages and banking sites are legitimate before transactions",
    },
    {
      icon: Network,
      title: "Remote Workforce Protection",
      description: "Extend web security to remote employees on any network or device",
    },
    {
      icon: ShieldCheck,
      title: "Brand Protection",
      description: "Detect and take down phishing sites impersonating your organization",
    },
  ];

  const whyChooseUs = [
    {
      icon: Clock,
      title: "24/7 Threat Intelligence",
      description: "Continuous monitoring and updates from global threat feeds",
    },
    {
      icon: Zap,
      title: "Ultra-Fast URL Analysis",
      description: "Sub-100ms URL reputation checks and threat analysis",
    },
    {
      icon: Target,
      title: "99.4% Detection Accuracy",
      description: "Industry-leading phishing detection with minimal false positives",
    },
    {
      icon: RefreshCw,
      title: "Zero-Latency Filtering",
      description: "Real-time protection without impacting browsing speed",
    },
    {
      icon: Award,
      title: "SOC Monitoring Included",
      description: "Expert security analysts reviewing threats around the clock",
    },
  ];

  const testimonials = [
    {
      quote:
        "We blocked over 3,000 phishing attempts in the first month. The AI detection caught sophisticated attacks our previous solution missed.",
      author: "Jennifer Williams",
      role: "Chief Information Security Officer, FinanceHub",
      rating: 5,
    },
    {
      quote:
        "The visual similarity detection is incredible. It identified a near-perfect clone of our login page within seconds of deployment.",
      author: "Michael Chen",
      role: "VP of Security, GlobalRetail Corp",
      rating: 5,
    },
    {
      quote:
        "Since deploying DCSecurite's web protection, we haven't had a single credential compromise incident. The ROI is undeniable.",
      author: "Dr. Sarah Johnson",
      role: "Director of IT Security, MedTech Solutions",
      rating: 5,
    },
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
          className="absolute top-20 right-0 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"
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

        {/* 3D Holographic Shield */}
        <div className="absolute top-1/2 right-10 transform -translate-y-1/2 opacity-20">
          <motion.div
            animate={{
              rotateY: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="relative w-64 h-64"
          >
            <Shield className="w-full h-full text-cyan-400" strokeWidth={0.5} />
            {/* Scanning line */}
            <motion.div
              className="absolute inset-0 overflow-hidden"
              style={{
                clipPath: `polygon(0 ${scanningAnimation}%, 100% ${scanningAnimation}%, 100% ${scanningAnimation + 2}%, 0 ${scanningAnimation + 2}%)`,
              }}
            >
              <div className="w-full h-full bg-cyan-400/50" />
            </motion.div>
          </motion.div>
        </div>

        <div className="relative container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">


            {/* Hero Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 text-transparent bg-clip-text">
                Web & Phishing Security
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-2xl md:text-3xl mb-8 text-gray-600 dark:text-slate-300"
            >
              Real-Time Defense Against Deceptive Threats
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Prevent web attacks, block fake websites, and eliminate phishing attempts with
              intelligent real-time protection powered by AI and behavioral analysis.
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
                className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-cyan-500 rounded-xl overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-green-400 to-cyan-400"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  Request a Security Audit
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const pricingSection = document.getElementById("pricing-plans-section");
                  if (pricingSection) {
                    pricingSection.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className="px-8 py-4 bg-white/5 backdrop-blur-xl border border-cyan-500/30 rounded-xl hover:bg-white/10 transition-colors"
              >
                View Plans
              </motion.button>
            </motion.div>

            {/* Floating fake windows */}
            <div className="absolute left-10 top-1/3 opacity-30">
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [-2, 2, -2] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="p-3 bg-red-500/20 border border-red-500 rounded-lg backdrop-blur-sm"
              >
                <X className="w-4 h-4 text-red-400 mb-1" />
                <div className="text-xs text-red-400">Fake Login Blocked</div>
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
                className="text-center p-6 bg-white/5 backdrop-blur-xl rounded-xl border border-green-500/20 hover:border-green-500/50 transition-all"
              >
                <div className="text-4xl md:text-5xl mb-2 bg-gradient-to-r from-green-400 to-cyan-400 text-transparent bg-clip-text">
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

      {/* 3. Why Web & Phishing Security Matters */}
      <section className="relative py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-green-400 to-cyan-400 text-transparent bg-clip-text">
              Why Web & Phishing Security Matters
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Phishing and web-based attacks are the #1 attack vector, responsible for over 90% of
              data breaches
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {whyItMatters.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl rounded-2xl border border-green-500/20 hover:border-green-500/50 transition-all"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-4 bg-green-500/20 rounded-xl">
                      <Icon className="w-8 h-8 text-green-400" />
                    </div>
                    <div className="text-3xl bg-gradient-to-r from-green-400 to-cyan-400 text-transparent bg-clip-text">
                      {item.stat}
                    </div>
                  </div>
                  <h3 className="text-xl mb-3">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{item.description}</p>
                  <div className="mt-4 text-sm text-green-400">{item.statLabel}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Key Capabilities */}
      <section className="relative py-24 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">
              Key Capabilities
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Advanced technologies protecting users from web-based threats
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

      {/* 5. How It Works - Detection Pipeline */}
      <section className="relative py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-green-400 to-cyan-400 text-transparent bg-clip-text">
              How It Works
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              6-stage intelligent detection pipeline from request to response
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Connection Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500/50 via-cyan-500/50 to-blue-500/50 transform -translate-x-1/2 hidden md:block" />

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
                          ? "border-green-500 shadow-lg shadow-green-500/20"
                          : "border-cyan-500/20"
                          }`}
                        animate={{
                          scale: isActive ? 1.02 : 1,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div
                            className={`p-2 rounded-lg ${isActive ? "bg-green-500/20" : "bg-white/10"
                              }`}
                          >
                            <Icon
                              className={`w-6 h-6 ${isActive ? "text-green-400" : "text-slate-400"
                                }`}
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
                          ? "bg-green-500 border-green-400 shadow-lg shadow-green-500/50"
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
                        className={`w-10 h-10 rounded-full border-4 flex items-center justify-center ${isActive
                          ? "bg-green-500 border-green-400"
                          : "bg-slate-800 border-slate-700"
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

      {/* 6. Real-Time Web Defense Dashboard */}
      <section className="relative py-24 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">
              Real-Time Web Defense Dashboard
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Complete visibility into web threats and protection status
            </p>
          </motion.div>

          {/* Dashboard Preview */}
          <div className="max-w-6xl mx-auto">
            {/* Metrics Grid */}
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              {dashboardMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-6 bg-white/5 backdrop-blur-xl rounded-xl border ${metric.color === "cyan"
                    ? "border-cyan-500/30"
                    : metric.color === "red"
                      ? "border-red-500/30"
                      : metric.color === "orange"
                        ? "border-orange-500/30"
                        : "border-green-500/30"
                    }`}
                >
                  <div className="text-sm text-slate-400 mb-2">{metric.label}</div>
                  <div
                    className={`text-3xl mb-2 ${metric.color === "cyan"
                      ? "text-cyan-400"
                      : metric.color === "red"
                        ? "text-red-400"
                        : metric.color === "orange"
                          ? "text-orange-400"
                          : "text-green-400"
                      }`}
                  >
                    {metric.value}
                  </div>
                  <div className="text-xs text-green-400">{metric.trend}</div>
                </motion.div>
              ))}
            </div>

            {/* Dashboard Content */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Recent Threats */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-6 bg-white/5 backdrop-blur-xl rounded-xl border border-cyan-500/20"
              >
                <h3 className="text-xl mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-400" />
                  Recent Threat Activity
                </h3>
                <div className="space-y-3">
                  {[
                    {
                      type: "Phishing",
                      url: "paypa1-secure.xyz",
                      time: "2m ago",
                      severity: "critical",
                    },
                    {
                      type: "Fake Login",
                      url: "microsoft-verify.net",
                      time: "5m ago",
                      severity: "high",
                    },
                    {
                      type: "Malicious JS",
                      url: "cdn-updates.online",
                      time: "8m ago",
                      severity: "medium",
                    },
                    { type: "Domain Spoof", url: "g00gle.com", time: "12m ago", severity: "high" },
                  ].map((threat, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-3 bg-black/30 rounded-lg border-l-2 border-red-500"
                    >
                      <div>
                        <div className="text-sm mb-1">{threat.type}</div>
                        <div className="text-xs text-slate-500 font-mono">{threat.url}</div>
                      </div>
                      <div className="text-xs text-slate-400">{threat.time}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Threat Categories */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-6 bg-white/5 backdrop-blur-xl rounded-xl border border-cyan-500/20"
              >
                <h3 className="text-xl mb-4 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-cyan-400" />
                  Threat Categories
                </h3>
                <div className="space-y-4">
                  {[
                    { category: "Phishing Sites", percentage: 45, color: "bg-red-500" },
                    { category: "Fake Logins", percentage: 28, color: "bg-orange-500" },
                    { category: "Malicious Scripts", percentage: 18, color: "bg-yellow-500" },
                    { category: "Domain Spoofing", percentage: 9, color: "bg-cyan-500" },
                  ].map((cat, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm mb-2">
                        <span>{cat.category}</span>
                        <span className="text-slate-400">{cat.percentage}%</span>
                      </div>
                      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full ${cat.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${cat.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: i * 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Threat Types We Block */}
      <section className="relative py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-red-400 to-orange-400 text-transparent bg-clip-text">
              Threat Types We Block
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Comprehensive protection against all web-based attack vectors
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
                  <p className="text-slate-400 text-sm mb-4">{threat.description}</p>
                  <div className="space-y-1">
                    {threat.examples.map((example, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-500">
                        <div className="w-1 h-1 bg-red-400 rounded-full" />
                        {example}
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. AI Engine for Web Threat Detection */}
      <section className="relative py-24 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">
              AI Engine for Web Threat Detection
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            {/* Left - 3D Neural Network */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Neural network visualization */}
                <svg className="w-full h-full" viewBox="0 0 300 300">
                  <defs>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Neural connections */}
                  {Array.from({ length: 30 }).map((_, i) => {
                    const angle1 = (i / 30) * Math.PI * 2;
                    const angle2 = ((i + Math.floor(Math.random() * 5)) / 30) * Math.PI * 2;
                    const r1 = 80 + Math.sin(i * 0.5) * 20;
                    const r2 = 80 + Math.sin((i + 5) * 0.5) * 20;

                    return (
                      <motion.line
                        key={i}
                        x1={150 + Math.cos(angle1) * r1}
                        y1={150 + Math.sin(angle1) * r1}
                        x2={150 + Math.cos(angle2) * r2}
                        y2={150 + Math.sin(angle2) * r2}
                        stroke="#06b6d4"
                        strokeWidth="1"
                        filter="url(#glow)"
                        animate={{
                          opacity: [0.3, 1, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.05,
                        }}
                      />
                    );
                  })}

                  {/* Outer ring */}
                  <motion.circle
                    cx="150"
                    cy="150"
                    r="100"
                    fill="none"
                    stroke="#06b6d4"
                    strokeWidth="2"
                    filter="url(#glow)"
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{ transformOrigin: "center" }}
                  />

                  {/* Center core */}
                  <motion.circle
                    cx="150"
                    cy="150"
                    r="20"
                    fill="#06b6d4"
                    filter="url(#glow)"
                    animate={{
                      r: [20, 25, 20],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />

                  {/* Neural nodes */}
                  {Array.from({ length: 12 }).map((_, i) => {
                    const angle = (i / 12) * Math.PI * 2;
                    const r = 80;
                    return (
                      <motion.circle
                        key={`node-${i}`}
                        cx={150 + Math.cos(angle) * r}
                        cy={150 + Math.sin(angle) * r}
                        r="5"
                        fill="#0ea5e9"
                        filter="url(#glow)"
                        animate={{
                          scale: [1, 1.3, 1],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.1,
                        }}
                      />
                    );
                  })}
                </svg>

                {/* AI Engine label */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 font-mono text-cyan-400 text-sm border border-cyan-400 bg-black px-3 py-1 rounded">
                  {"<AI ENGINE/>"}
                </div>
              </div>
            </motion.div>

            {/* Right - AI Features */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="space-y-4">
                {aiFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="p-4 bg-white/5 backdrop-blur-xl rounded-xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="text-lg mb-1">{feature.title}</h4>
                        <p className="text-sm text-slate-400">{feature.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 9. Use Cases */}
      <section className="relative py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-green-400 to-cyan-400 text-transparent bg-clip-text">
              Use Cases
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Protect your organization across all web-based attack surfaces
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="p-6 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl rounded-xl border border-green-500/20 hover:border-green-500/50 transition-all"
                >
                  <div className="w-12 h-12 mb-4 bg-green-500/20 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-xl mb-2">{useCase.title}</h3>
                  <p className="text-slate-400 text-sm">{useCase.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. Why Choose Us */}
      <section className="relative py-24 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent">
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

      {/* 11. Testimonials */}
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

      {/* 12. Pricing */}
      <ServicePricing
        title={servicePlans["web-phishing-security"].title}
        description={servicePlans["web-phishing-security"].description}
        plans={servicePlans["web-phishing-security"].plans}
      />

      {/* 13. Final CTA */}
      <section className="relative py-32 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"
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
            <h2 className="text-4xl md:text-6xl mb-6 bg-gradient-to-r from-green-400 to-cyan-400 text-transparent bg-clip-text">
              Protect Your Users From the Web&apos;s Hidden Threats
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-3xl mx-auto">
              Deploy AI-powered web and phishing protection in minutes. Stop credential theft, fake
              websites, and malicious redirects before they reach your users.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => navigate(ROUTES.CONTACT)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-cyan-500 rounded-xl overflow-hidden text-lg"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-green-400 to-cyan-400"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  Deploy Web Protection
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>

              <motion.button
                onClick={() => navigate(ROUTES.CONTACT)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/5 backdrop-blur-xl border border-cyan-500/30 rounded-xl hover:bg-white/10 transition-colors text-lg"
              >
                Talk to a Specialist
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      {/* Footer rendering removed */}
    </div>
  );
}
