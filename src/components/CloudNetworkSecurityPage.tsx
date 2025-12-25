import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  Cloud,
  Lock,
  // ... (keep other imports)
  Network,
  Eye,
  Zap,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  Users,
  Server,
  Activity,
  Target,
  ArrowRight,
  ChevronRight,
  Globe,
  Layers,
  Key,
  Code,
  Database,
  RefreshCw,
  FileCheck,
  Clock,
  Award,
  Star,
  ChevronLeft,
  Check,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes";
import { ServicePricing } from "./shared/ServicePricing";
import { servicePlans } from "../data/servicePlans";


export default function CloudNetworkSecurityPage() {
  const navigate = useNavigate();
  const [activeTimeline, setActiveTimeline] = useState(0);
  // ... (rest of the component)
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
    { value: 3500, suffix: "+", label: "Cloud Breaches Prevented", prefix: "" },
    { value: 99.9, suffix: "%", label: "Uptime Guarantee", prefix: "" },
    { value: 2.4, suffix: "M", label: "Average Cost Saved", prefix: "$" },
    { value: 85, suffix: "%", label: "Faster Threat Detection", prefix: "" },
  ];

  const capabilities = [
    {
      icon: Shield,
      title: "Cloud Firewall & Micro-Segmentation",
      description: "Advanced perimeter defense with granular access controls and network isolation",
      features: ["Layer 7 filtering", "Auto-scaling protection", "Traffic inspection"],
    },
    {
      icon: Lock,
      title: "Zero Trust Network Access (ZTNA)",
      description: "Never trust, always verify. Identity-based access with continuous validation",
      features: ["Context-aware policies", "MFA integration", "Device posture checks"],
    },
    {
      icon: Eye,
      title: "Cloud Threat Monitoring",
      description: "24/7 real-time monitoring with AI-powered anomaly detection",
      features: ["Behavioral analysis", "Threat intelligence", "Custom alerts"],
    },
    {
      icon: Key,
      title: "Identity Access Security",
      description: "Comprehensive IAM with privilege management and session monitoring",
      features: ["Role-based access", "Just-in-time access", "Audit trails"],
    },
    {
      icon: Code,
      title: "API & Workload Protection",
      description: "Secure your APIs and containerized workloads from exploits",
      features: ["API gateway security", "Container scanning", "Runtime protection"],
    },
    {
      icon: Zap,
      title: "Automated Incident Response",
      description: "Instant threat containment with automated playbooks and remediation",
      features: ["Auto-isolation", "Forensic collection", "Rollback capabilities"],
    },
  ];

  const timeline = [
    {
      icon: Target,
      title: "Asset Discovery",
      description: "Automatic inventory of all cloud resources and dependencies",
    },
    {
      icon: Activity,
      title: "Continuous Monitoring",
      description: "Real-time visibility into network traffic and user behavior",
    },
    {
      icon: Shield,
      title: "AI Threat Detection",
      description: "Machine learning identifies anomalies and zero-day threats",
    },
    {
      icon: Zap,
      title: "Automated Response",
      description: "Instant containment and mitigation without human intervention",
    },
    {
      icon: FileCheck,
      title: "Compliance & Reporting",
      description: "Detailed audit logs and regulatory compliance dashboards",
    },
  ];

  const cloudProviders = [
    { name: "AWS", gradient: "from-orange-500 to-yellow-500" },
    { name: "Google Cloud", gradient: "from-blue-500 to-green-500" },
    { name: "Microsoft Azure", gradient: "from-blue-600 to-cyan-500" },
    { name: "Alibaba Cloud", gradient: "from-orange-600 to-red-500" },
    { name: "Oracle Cloud", gradient: "from-red-600 to-orange-600" },
  ];

  const useCases = [
    {
      icon: Database,
      title: "Securing SaaS Platforms",
      description: "Protect multi-tenant applications with isolated security zones",
    },
    {
      icon: Server,
      title: "Enterprise Workloads",
      description: "Shield mission-critical applications from sophisticated attacks",
    },
    {
      icon: Code,
      title: "DevOps & CI/CD Security",
      description: "Secure your development pipeline from code to deployment",
    },
    {
      icon: Users,
      title: "Preventing Insider Threats",
      description: "Detect and block malicious insider activities in real-time",
    },
    {
      icon: FileCheck,
      title: "Regulatory Compliance",
      description: "Meet GDPR, HIPAA, PCI-DSS, and SOC 2 requirements effortlessly",
    },
  ];

  const whyChooseUs = [
    {
      icon: Clock,
      title: "24/7 SOC Team",
      description: "Expert security analysts monitoring around the clock",
    },
    {
      icon: Shield,
      title: "AI-Powered Detection",
      description: "Advanced machine learning for zero-day threats",
    },
    {
      icon: Award,
      title: "Certified Experts",
      description: "CISSP, CEH, ISO27001 certified professionals",
    },
    {
      icon: Zap,
      title: "Ultra-Low Latency",
      description: "Sub-millisecond cloud firewall performance",
    },
    {
      icon: RefreshCw,
      title: "Zero Downtime",
      description: "Seamless migration with no service interruption",
    },
  ];

  const testimonials = [
    {
      quote:
        "DCSecurite's cloud security solution reduced our attack surface by 87% within the first month. The automated response is game-changing.",
      author: "Sarah Chen",
      role: "CISO, TechCorp Global",
      rating: 5,
    },
    {
      quote:
        "We detected and mitigated a sophisticated APT attack in under 2 minutes thanks to their AI-powered threat detection.",
      author: "Michael Rodriguez",
      role: "VP Security, FinanceFirst Bank",
      rating: 5,
    },
    {
      quote:
        "Migration was seamless, and the ongoing support is exceptional. Our compliance audits are now a breeze.",
      author: "Dr. Emily Watson",
      role: "CTO, HealthSecure",
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

        <div className="relative container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">


            {/* Hero Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 dark:from-cyan-400 dark:via-blue-400 dark:to-cyan-400 text-transparent bg-clip-text">
                Cloud Network Security
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-2xl md:text-3xl mb-8 text-gray-600 dark:text-slate-300"
            >
              Zero Trust Protection for the Cloud Era
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-500 dark:text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Prevent breaches, stop lateral movement, and secure your cloud infrastructure with
              intelligent real-time defense powered by AI and machine learning.
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
                  Request a Security Audit
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const pricingSection = document.getElementById("pricing-plans");
                  if (pricingSection) {
                    pricingSection.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className="px-8 py-4 bg-white/5 backdrop-blur-xl border border-cyan-500/30 rounded-xl hover:bg-white/10 transition-colors"
              >
                Explore Plans
              </motion.button>
            </motion.div>

            {/* Floating Code Lines Animation */}
            <div className="absolute left-0 top-1/4 text-cyan-400/20 font-mono text-sm">
              <motion.div
                animate={{ y: [0, -20, 0], opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                {'{ "security": "enabled" }'}
              </motion.div>
            </div>
            <div className="absolute right-0 bottom-1/4 text-blue-400/20 font-mono text-sm">
              <motion.div
                animate={{ y: [0, 20, 0], opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                {'[ "threat": "blocked" ]'}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Why Cloud Security Matters */}
      <section className="relative py-24 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">
              Why Cloud Security Matters
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              The cloud revolution has transformed business, but it has also created new
              vulnerabilities
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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

          {/* 3-Column Risks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Rise of Cloud Attacks",
                description:
                  "Cloud-targeted attacks increased 630% in 2024, with misconfigurations being the #1 entry point",
              },
              {
                icon: AlertTriangle,
                title: "Misconfiguration Risks",
                description:
                  "Over 70% of cloud breaches stem from human error and improper security settings",
              },
              {
                icon: Users,
                title: "Identity-Based Threats",
                description:
                  "Credential theft and privilege escalation remain the fastest-growing attack vectors",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-slate-900/30 backdrop-blur-xl border border-slate-800 group-hover:border-cyan-500/30 rounded-2xl p-8 transition-all">
                  <item.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl mb-3 text-white">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Key Capabilities */}
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
              Key Capabilities
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Comprehensive protection across your entire cloud infrastructure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onHoverStart={() => setHoveredCapability(index)}
                onHoverEnd={() => setHoveredCapability(null)}
                className="relative group cursor-pointer"
              >
                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl"
                  animate={{
                    opacity: hoveredCapability === index ? 1 : 0,
                    scale: hoveredCapability === index ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Card */}
                <div className="relative bg-slate-900/50 backdrop-blur-xl border border-slate-800 group-hover:border-cyan-500/40 rounded-2xl p-8 h-full transition-all">
                  {/* Icon */}
                  <motion.div
                    animate={{
                      rotateY: hoveredCapability === index ? 360 : 0,
                    }}
                    transition={{ duration: 0.6 }}
                    className="mb-6"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                      <capability.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                  </motion.div>

                  <h3 className="text-xl mb-3 text-white group-hover:text-cyan-400 transition-colors">
                    {capability.title}
                  </h3>
                  <p className="text-slate-400 mb-4 leading-relaxed">{capability.description}</p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {capability.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{
                          opacity: hoveredCapability === index ? 1 : 0.7,
                          x: hoveredCapability === index ? 0 : -10,
                        }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-2 text-sm text-slate-500"
                      >
                        <CheckCircle className="w-4 h-4 text-cyan-500" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. How It Works - Timeline */}
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
              How It Works
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Five-stage intelligent security workflow
            </p>
          </motion.div>

          {/* Timeline - Desktop */}
          <div className="hidden lg:block relative">
            {/* Timeline Line */}
            <div className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500/20 via-cyan-500/50 to-cyan-500/20" />

            <div className="relative grid grid-cols-5 gap-4">
              {timeline.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative"
                >
                  {/* Pulsing Node */}
                  <motion.div
                    animate={{
                      scale: activeTimeline === index ? [1, 1.2, 1] : 1,
                      opacity: activeTimeline === index ? [0.5, 1, 0.5] : 0.3,
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute top-20 left-1/2 -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full"
                  />

                  {/* Icon Card */}
                  <div className="flex flex-col items-center">
                    <motion.div
                      animate={{
                        y: activeTimeline === index ? [-5, 5, -5] : 0,
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all ${activeTimeline === index
                        ? "bg-gradient-to-br from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/50"
                        : "bg-slate-800 border border-slate-700"
                        }`}
                    >
                      <step.icon className="w-10 h-10 text-white" />
                    </motion.div>

                    <h3
                      className={`text-lg mb-2 text-center transition-colors ${activeTimeline === index ? "text-cyan-400" : "text-white"
                        }`}
                    >
                      {step.title}
                    </h3>
                    <p className="text-slate-400 text-sm text-center leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  {index < timeline.length - 1 && (
                    <motion.div
                      animate={{
                        x: [0, 10, 0],
                        opacity: activeTimeline === index ? [0.3, 1, 0.3] : 0.2,
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute top-24 -right-2 text-cyan-400"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Timeline - Mobile */}
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
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center ${activeTimeline === index
                      ? "bg-gradient-to-br from-cyan-500 to-blue-500"
                      : "bg-slate-800"
                      }`}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 h-16 bg-gradient-to-b from-cyan-500/50 to-transparent mt-2" />
                  )}
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-lg mb-2 text-white">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Supported Cloud Providers */}
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
              Supported Cloud Providers
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
              Seamless multi-cloud integration across all major platforms
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {cloudProviders.map((provider, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -8 }}
                className="relative group cursor-pointer"
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${provider.gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity`}
                />
                <div className="relative bg-slate-900/50 backdrop-blur-xl border border-slate-800 group-hover:border-cyan-500/40 rounded-2xl p-8 flex items-center justify-center h-32 transition-all">
                  <div className="text-center">
                    <Globe className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                    <div className="text-white group-hover:text-cyan-400 transition-colors">
                      {provider.name}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Real-Time Security Dashboard Preview */}
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
              Real-Time Security Dashboard
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Monitor threats, analyze patterns, and respond instantly
            </p>
          </motion.div>

          {/* Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative max-w-6xl mx-auto"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-cyan-500/20 rounded-3xl blur-3xl" />

            {/* Dashboard Container */}
            <div className="relative bg-slate-900/80 backdrop-blur-xl border border-cyan-500/30 rounded-3xl p-6 md:p-8">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <span className="ml-4 text-slate-400 text-sm font-mono">
                    security-dashboard.dcsecurite.com
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2 h-2 bg-green-500 rounded-full"
                  />
                  <span className="text-green-400 text-sm">Live</span>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {[
                  { label: "Threats Blocked", value: "1,247", trend: "+12%", color: "green" },
                  { label: "Attack Attempts", value: "3,891", trend: "-8%", color: "red" },
                  { label: "Avg Latency", value: "0.3ms", trend: "-15%", color: "blue" },
                  { label: "Uptime", value: "99.99%", trend: "+0.01%", color: "cyan" },
                ].map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-slate-800/50 border border-slate-700 rounded-xl p-4"
                  >
                    <div className="text-slate-400 text-xs mb-1">{metric.label}</div>
                    <div className="text-2xl text-white mb-1">
                      <Counter
                        target={parseFloat(metric.value.replace(/[^\d.]/g, ""))}
                        suffix={metric.value.replace(/[\d.]/g, "")}
                      />
                    </div>
                    <div
                      className={`text-xs ${metric.color === "green"
                        ? "text-green-400"
                        : metric.color === "red"
                          ? "text-red-400"
                          : metric.color === "blue"
                            ? "text-blue-400"
                            : "text-cyan-400"
                        }`}
                    >
                      {metric.trend}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Activity Chart Placeholder */}
              <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white">Threat Activity (Last 24h)</h3>
                  <Activity className="w-5 h-5 text-cyan-400" />
                </div>
                <div className="relative h-48 flex items-end justify-between gap-2">
                  {[...Array(24)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${Math.random() * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.05 }}
                      className="flex-1 bg-gradient-to-t from-cyan-500 to-blue-500 rounded-t opacity-70 hover:opacity-100 transition-opacity"
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. Use Cases */}
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
              Use Cases
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Versatile security solutions for every cloud challenge
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-slate-900/50 backdrop-blur-xl border border-slate-800 group-hover:border-cyan-500/40 rounded-2xl p-8 transition-all">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                    <useCase.icon className="w-7 h-7 text-cyan-400" />
                  </div>
                  <h3 className="text-xl mb-3 text-white group-hover:text-cyan-400 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">{useCase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Why Choose Us */}
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
              Why Choose DCSecurite
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Industry-leading expertise meets cutting-edge technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative group text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-slate-900/50 backdrop-blur-xl border border-slate-800 group-hover:border-cyan-500/40 rounded-2xl p-6 transition-all">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <item.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-lg mb-2 text-white">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
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
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">
              Client Success Stories
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Trusted by leading organizations worldwide
            </p>
          </motion.div>

          {/* Testimonial Slider */}
          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-3xl blur-2xl" />
                <div className="relative bg-slate-900/50 backdrop-blur-xl border border-cyan-500/30 rounded-3xl p-12">
                  {/* Stars */}
                  <div className="flex gap-1 justify-center mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-xl md:text-2xl text-white text-center mb-8 leading-relaxed">
                    "{testimonials[currentTestimonial].quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="text-center">
                    <div className="text-cyan-400 mb-1">
                      {testimonials[currentTestimonial].author}
                    </div>
                    <div className="text-slate-400 text-sm">
                      {testimonials[currentTestimonial].role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={() =>
                  setCurrentTestimonial(
                    (prev) => (prev - 1 + testimonials.length) % testimonials.length
                  )
                }
                className="p-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-cyan-500/40 rounded-xl transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all ${currentTestimonial === index
                      ? "w-8 bg-cyan-400"
                      : "bg-slate-600 hover:bg-slate-500"
                      }`}
                  />
                ))}
              </div>

              <button
                onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                className="p-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-cyan-500/40 rounded-xl transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Pricing Plans */}
      <ServicePricing
        title={servicePlans["cloud-network-security"].title}
        description={servicePlans["cloud-network-security"].description}
        plans={servicePlans["cloud-network-security"].plans}
      />

      {/* 11. Final CTA */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Effects */}
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="relative container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* Icon */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              className="mb-8 inline-block"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center">
                <Shield className="w-12 h-12 text-cyan-400" />
              </div>
            </motion.div>

            {/* Title */}
            <h2 className="text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 text-transparent bg-clip-text">
                Shield Your Cloud Today
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-slate-300 mb-4">Before the Next Attack Begins</p>

            <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
              Don't wait for a breach to take action. Get enterprise-grade cloud security with
              AI-powered threat detection and 24/7 expert monitoring.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                onClick={() => navigate(ROUTES.CONTACT)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl overflow-hidden text-lg"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  Contact Security Team
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-slate-400 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-cyan-400" />
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-cyan-400" />
                30-day money-back guarantee
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-cyan-400" />
                ISO 27001 Certified
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
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
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span>
      {prefix}
      {suffix === "M" || suffix === "+" ? count.toFixed(1) : Math.round(count)}
      {suffix}
    </span>
  );
}
