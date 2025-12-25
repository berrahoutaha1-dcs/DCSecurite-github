import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  Shield,
  Database,
  Lock,
  Eye,
  Target,
  Zap,
  Server,
  Activity,
  Layers,
  RefreshCw,
  Search,
  TrendingUp,
  CheckCircle,
  AlertTriangle,
  Cloud,
  FileCheck,
  Scan,
  Key,
  Users,
  BarChart3,
  ShieldCheck,
  GitBranch,
  FileSearch,
  Bell,
  Map,
  Fingerprint,

  ChevronRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes";
import { ServicePricing } from "./shared/ServicePricing";
import { servicePlans } from "../data/servicePlans";


interface DSPMPageProps {
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

const DSPMPage: React.FC<DSPMPageProps> = (props) => {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useScroll();

  const heroRef = useRef<HTMLElement>(null);
  const howWorksRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">


      {/* 1. HERO BANNER - Data Flow Animation */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Deep dark background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]" />

        {/* Animated data-flow matrix rain effect */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px bg-gradient-to-b from-transparent via-[#00ff88] to-transparent"
              style={{
                left: `${i * 3.5}%`,
                height: "200px",
              }}
              animate={{
                y: ["-200px", "100vh"],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "linear",
              }}
            />
          ))}
        </div>

        {/* Floating glowing particles */}
        <div className="absolute inset-0">
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-[#00ff88]"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                filter: "blur(1px)",
              }}
              animate={{
                y: [0, -50, 0],
                x: [0, Math.random() * 30 - 15, 0],
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Central glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#00ff88]/10 blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 sm:px-8 md:px-12 max-w-7xl mx-auto pt-40">


          <motion.div
            initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-8 text-gray-900 dark:text-white"
              style={{
                fontWeight: 800,
                letterSpacing: "-0.04em",
                textShadow: "0 0 40px rgba(0, 255, 136, 0.3)",
              }}
            >
              Data Security
              <br />
              <span className="text-[#00ff88]">Posture Management</span>
            </motion.h1>
          </motion.div>

          <motion.p
            className="text-2xl sm:text-3xl md:text-4xl text-gray-600 dark:text-gray-300 mb-16 max-w-4xl mx-auto"
            style={{ fontWeight: 300 }}
            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          >
            See, classify, and secure your data—
            <br className="hidden sm:block" />
            everywhere it lives.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              className="group relative px-10 py-5 rounded-full bg-transparent border-2 border-[#00ff88] text-[#00ff88] text-lg overflow-hidden"
              style={{ fontWeight: 600 }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(0, 255, 136, 0.1)",
                boxShadow: "0 0 30px rgba(0, 255, 136, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate(ROUTES.CONTACT)}
            >
              <span className="relative z-10">Request a Security Audit</span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* 2. WHAT DSPM SOLVES - Flowing Blocks with Blob Backgrounds */}
      <section className="relative py-32 md:py-48 overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 bg-[#1a1a1a]" />

        {/* Animated mesh background */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#00ff88" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <motion.h2
            className="text-5xl sm:text-6xl md:text-7xl mb-24 text-center text-white"
            style={{ fontWeight: 800 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            What DSPM <span className="text-[#00ff88]">Solves</span>
          </motion.h2>

          {/* Three flowing blocks */}
          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            {[
              {
                icon: Eye,
                title: "Full Data Visibility",
                description:
                  "Discover all data assets across cloud, on-premise, and hybrid environments automatically",
                color: "#00ff88",
              },
              {
                icon: Search,
                title: "Sensitive-Data Discovery",
                description:
                  "AI-powered classification identifies PII, PHI, PCI, secrets, and custom data types instantly",
                color: "#39ff14",
              },
              {
                icon: AlertTriangle,
                title: "Automated Risk Detection",
                description:
                  "Real-time compliance alerts with automated remediation workflows and policy enforcement",
                color: "#00ff66",
              },
            ].map((block, i) => (
              <motion.div
                key={i}
                className="relative group"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
              >
                {/* Blob background */}
                <motion.div
                  className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] blur-xl opacity-60"
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 5, 0],
                  }}
                  transition={{ duration: 6, repeat: Infinity, delay: i * 0.3 }}
                />

                {/* Content container */}
                <div className="relative bg-[#1a1a1a]/80 backdrop-blur-sm border border-[#00ff88]/20 rounded-3xl p-8 md:p-10 h-full">
                  {/* Floating icon */}
                  <motion.div
                    className="mb-6"
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                  >
                    <div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${block.color}20, transparent)`,
                        boxShadow: `0 0 30px ${block.color}40`,
                      }}
                    >
                      <block.icon
                        className="w-10 h-10"
                        style={{ color: block.color }}
                        strokeWidth={1.5}
                      />
                    </div>
                  </motion.div>

                  <h3 className="text-2xl sm:text-3xl text-white mb-4" style={{ fontWeight: 700 }}>
                    {block.title}
                  </h3>

                  <p className="text-lg text-gray-400" style={{ fontWeight: 300, lineHeight: 1.8 }}>
                    {block.description}
                  </p>

                  {/* Glow effect on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${block.color}15, transparent 70%)`,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. HOW DSPM WORKS - Vertical Scroll Story */}
      <section ref={howWorksRef} className="relative py-32 md:py-48 overflow-hidden bg-[#0a0a0a]">
        {/* Network mesh background */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full">
            {[...Array(15)].map((_, i) => (
              <motion.circle
                key={i}
                cx={`${20 + (i % 5) * 20}%`}
                cy={`${20 + Math.floor(i / 5) * 30}%`}
                r="2"
                fill="#00ff88"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
            {[...Array(20)].map((_, i) => {
              const x1 = 20 + ((i * 3) % 5) * 20;
              const y1 = 20 + Math.floor((i * 3) / 5) * 30;
              const x2 = 20 + (((i + 1) * 3) % 5) * 20;
              const y2 = 20 + Math.floor(((i + 1) * 3) / 5) * 30;

              return (
                <motion.line
                  key={i}
                  x1={`${x1}%`}
                  y1={`${y1}%`}
                  x2={`${x2}%`}
                  y2={`${y2}%`}
                  stroke="#00ff88"
                  strokeWidth="0.5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.3 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: i * 0.05 }}
                />
              );
            })}
          </svg>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
          <motion.h2
            className="text-5xl sm:text-6xl md:text-7xl mb-32 text-center text-white"
            style={{ fontWeight: 800 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            How DSPM <span className="text-[#00ff88]">Works</span>
          </motion.h2>

          {/* Vertical stages with connecting line */}
          <div className="relative">
            {/* Central glowing line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#00ff88] to-transparent" />

            {[
              {
                title: "Scan & Discover",
                icon: Scan,
                description:
                  "Automatically scan all cloud storage, databases, data warehouses, and SaaS applications. Map every data repository across your entire infrastructure.",
              },
              {
                title: "Classify & Label",
                icon: FileCheck,
                description:
                  "Apply AI-powered classification to identify sensitive data types. Automatically tag PII, financial data, intellectual property, and compliance-regulated information.",
              },
              {
                title: "Evaluate Risk",
                icon: Target,
                description:
                  "Analyze access patterns, encryption status, and exposure levels. Calculate risk scores based on sensitivity, location, and security controls.",
              },
              {
                title: "Remediate & Enforce",
                icon: ShieldCheck,
                description:
                  "Execute automated remediation workflows. Apply encryption, adjust permissions, trigger alerts, and enforce data governance policies in real-time.",
              },
            ].map((stage, i) => (
              <StageBlock key={i} stage={stage} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. REAL-TIME DATA INSIGHTS - Curved Timeline */}
      <section className="relative py-32 md:py-48 overflow-hidden bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <motion.h2
            className="text-5xl sm:text-6xl md:text-7xl mb-16 text-center text-white"
            style={{ fontWeight: 800 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Real-time Data <span className="text-[#00ff88]">Insights</span>
          </motion.h2>

          {/* Curved timeline */}
          <div className="relative mt-24">
            {/* SVG curved path */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ height: "600px" }}
            >
              <motion.path
                d="M 50 100 Q 250 50, 450 100 T 850 100 Q 1050 50, 1250 100"
                stroke="#00ff88"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.5 }}
                viewport={{ once: true }}
                transition={{ duration: 2 }}
              />
            </svg>

            {/* Timeline points */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative">
              {[
                {
                  icon: Database,
                  title: "Data-at-rest Monitoring",
                  description: "Continuous scanning of stored data",
                },
                {
                  icon: Activity,
                  title: "Data-in-motion Tracking",
                  description: "Real-time flow analysis",
                },
                {
                  icon: BarChart3,
                  title: "Exposure Scoring",
                  description: "Risk quantification metrics",
                },
                {
                  icon: GitBranch,
                  title: "Data Lineage Mapping",
                  description: "Complete data journey visibility",
                },
              ].map((point, i) => (
                <motion.div
                  key={i}
                  className="group relative"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                >
                  {/* Pulsing circle */}
                  <motion.div
                    className="relative mx-auto w-24 h-24 mb-6"
                    whileHover={{ scale: 1.1 }}
                  >
                    {/* Pulse rings */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-[#00ff88]"
                      animate={{
                        scale: [1, 1.5],
                        opacity: [0.6, 0],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-[#00ff88]"
                      animate={{
                        scale: [1, 1.5],
                        opacity: [0.6, 0],
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    />

                    {/* Center icon */}
                    <div className="absolute inset-0 rounded-full bg-[#00ff88]/20 backdrop-blur-sm border-2 border-[#00ff88] flex items-center justify-center">
                      <point.icon className="w-10 h-10 text-[#00ff88]" strokeWidth={1.5} />
                    </div>
                  </motion.div>

                  <h3 className="text-xl text-white text-center mb-2" style={{ fontWeight: 700 }}>
                    {point.title}
                  </h3>
                  <p className="text-sm text-gray-400 text-center" style={{ fontWeight: 300 }}>
                    {point.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. FEATURES - Flow Ribbon Layout */}
      <section className="relative py-32 md:py-48 overflow-hidden bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <motion.h2
            className="text-5xl sm:text-6xl md:text-7xl mb-24 text-center text-white"
            style={{ fontWeight: 800 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Core <span className="text-[#00ff88]">Features</span>
          </motion.h2>

          {/* Wavy ribbon with features */}
          <div className="relative">
            {/* SVG wavy line */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ height: "100%" }}
            >
              <motion.path
                d="M 0 100 Q 200 50, 400 100 T 800 100 Q 1000 50, 1200 100 T 1600 100"
                stroke="#00ff88"
                strokeWidth="1"
                fill="none"
                opacity="0.3"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2.5 }}
              />
            </svg>

            {/* Features positioned along the wave */}
            <div className="space-y-16 md:space-y-24">
              {[
                {
                  icon: Scan,
                  title: "Automated Classification",
                  description:
                    "Machine learning algorithms automatically categorize and label sensitive data across all repositories.",
                  position: "left",
                },
                {
                  icon: ShieldCheck,
                  title: "Governance & Compliance",
                  description:
                    "Built-in compliance frameworks for GDPR, HIPAA, PCI-DSS, SOC 2, and custom regulatory requirements.",
                  position: "right",
                },
                {
                  icon: Bell,
                  title: "Data Exposure Alerts",
                  description:
                    "Instant notifications when sensitive data becomes publicly accessible or permissions change.",
                  position: "left",
                },
                {
                  icon: Map,
                  title: "Cloud Data Mapping",
                  description:
                    "Complete visualization of data locations, movements, and relationships across multi-cloud environments.",
                  position: "right",
                },
                {
                  icon: Fingerprint,
                  title: "Identity-Based Access Controls",
                  description:
                    "Granular access management with continuous monitoring of who accesses what data and when.",
                  position: "left",
                },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  className={`flex ${feature.position === "right" ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-8`}
                  initial={{ opacity: 0, x: feature.position === "right" ? 60 : -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                >
                  {/* Icon */}
                  <motion.div
                    className="flex-shrink-0 w-32 h-32 rounded-3xl bg-gradient-to-br from-[#00ff88]/20 to-transparent border border-[#00ff88]/30 flex items-center justify-center"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 40px rgba(0, 255, 136, 0.4)",
                    }}
                  >
                    <feature.icon className="w-16 h-16 text-[#00ff88]" strokeWidth={1.5} />
                  </motion.div>

                  {/* Content */}
                  <div
                    className={`flex-1 ${feature.position === "right" ? "md:text-right" : "md:text-left"} text-left`}
                  >
                    <h3 className="text-3xl text-white mb-3" style={{ fontWeight: 700 }}>
                      {feature.title}
                    </h3>
                    <p
                      className="text-lg text-gray-400 max-w-xl"
                      style={{ fontWeight: 300, lineHeight: 1.8 }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHY IT MATTERS - Bold Typography + Infographic */}
      <section className="relative py-32 md:py-48 overflow-hidden bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <motion.h2
            className="text-5xl sm:text-6xl md:text-7xl mb-32 text-center text-white"
            style={{ fontWeight: 800 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Why It <span className="text-[#00ff88]">Matters</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: Bold statements */}
            <div className="space-y-12">
              {[
                {
                  number: "73%",
                  text: "of organizations don't know where their sensitive data resides",
                },
                {
                  number: "85%",
                  text: "of data breaches involve misconfigured cloud storage",
                },
                {
                  number: "60%",
                  text: "faster incident response with automated data discovery",
                },
                {
                  number: "$4.45M",
                  text: "average cost of a data breach in 2023",
                },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="group"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                >
                  <motion.div
                    className="text-6xl sm:text-7xl md:text-8xl text-[#00ff88] mb-4"
                    style={{ fontWeight: 900 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {stat.number}
                  </motion.div>
                  <p
                    className="text-xl sm:text-2xl text-gray-300"
                    style={{ fontWeight: 300, lineHeight: 1.6 }}
                  >
                    {stat.text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Right: Abstract infographic */}
            <motion.div
              className="relative h-[600px]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              {/* Asymmetric curved shapes */}
              <svg className="w-full h-full" viewBox="0 0 400 600">
                {/* Central data node */}
                <motion.circle
                  cx="200"
                  cy="300"
                  r="60"
                  fill="url(#greenGradient)"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                />

                {/* Orbiting elements */}
                {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                  const x = 200 + Math.cos((angle * Math.PI) / 180) * 150;
                  const y = 300 + Math.sin((angle * Math.PI) / 180) * 150;

                  return (
                    <g key={i}>
                      {/* Connecting line */}
                      <motion.line
                        x1="200"
                        y1="300"
                        x2={x}
                        y2={y}
                        stroke="#00ff88"
                        strokeWidth="1"
                        opacity="0.3"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                      />

                      {/* Node */}
                      <motion.circle
                        cx={x}
                        cy={y}
                        r="20"
                        fill="#00ff88"
                        opacity="0.6"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                        animate={{
                          scale: [1, 1.2, 1],
                        }}
                        style={{
                          transformOrigin: `${x}px ${y}px`,
                        }}
                      />
                    </g>
                  );
                })}

                {/* Gradients */}
                <defs>
                  <radialGradient id="greenGradient">
                    <stop offset="0%" stopColor="#00ff88" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#00ff88" stopOpacity="0.2" />
                  </radialGradient>
                </defs>
              </svg>

              {/* Floating labels */}
              <motion.div
                className="absolute top-12 left-12 text-xs text-[#00ff88] px-3 py-1 rounded-full border border-[#00ff88]/30 bg-black/50 backdrop-blur-sm"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Cloud Storage
              </motion.div>
              <motion.div
                className="absolute top-24 right-16 text-xs text-[#00ff88] px-3 py-1 rounded-full border border-[#00ff88]/30 bg-black/50 backdrop-blur-sm"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              >
                Databases
              </motion.div>
              <motion.div
                className="absolute bottom-24 left-20 text-xs text-[#00ff88] px-3 py-1 rounded-full border border-[#00ff88]/30 bg-black/50 backdrop-blur-sm"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                SaaS Apps
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <ServicePricing
        title={servicePlans["dspm"].title}
        description={servicePlans["dspm"].description}
        plans={servicePlans["dspm"].plans}
      />

      {/* 7. FINAL CTA SECTION */}
      <section className="relative py-40 md:py-56 overflow-hidden">
        {/* Dark background with green glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#001a0a] to-[#0a0a0a]" />

        {/* Radial glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#00ff88]/20 blur-[150px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />

        {/* Animated grid */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full">
            <defs>
              <pattern id="finalGrid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#00ff88" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#finalGrid)" />
          </svg>
        </div>

        <div className="relative z-10 text-center px-6 sm:px-8 md:px-12 max-w-5xl mx-auto">
          <motion.h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-12 text-white"
            style={{ fontWeight: 900, letterSpacing: "-0.03em" }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            Protect your data with the
            <br />
            <span className="text-[#00ff88]">next generation</span>
            <br />
            of posture management.
          </motion.h2>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.button
              className="group relative px-12 py-6 rounded-full bg-transparent border-2 border-[#00ff88] text-[#00ff88] text-xl overflow-hidden"
              style={{ fontWeight: 700 }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(0, 255, 136, 0.15)",
                boxShadow: "0 0 40px rgba(0, 255, 136, 0.5)",
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate(ROUTES.CONTACT)}
            >
              <span className="relative z-10">Talk to an Expert</span>
            </motion.button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            className="mt-20 flex flex-wrap justify-center gap-8 text-sm text-gray-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#00ff88]" strokeWidth={2} />
              <span className="text-[#00ff88]">Enterprise-ready</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#00ff88]" strokeWidth={2} />
              <span className="text-[#00ff88]">SOC 2 Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#00ff88]" strokeWidth={2} />
              <span className="text-[#00ff88]">24/7 Support</span>
            </div>
          </motion.div>
        </div>
      </section>


    </div>
  );
};

// Stage Block Component for "How DSPM Works" section
const StageBlock: React.FC<{ stage: any; index: number }> = ({ stage, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      className={`relative flex items-center gap-8 mb-24 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
      initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {/* Connecting node */}
      <motion.div
        className="absolute left-8 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#00ff88] border-4 border-[#0a0a0a] z-10"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {/* Pulse effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-[#00ff88]"
          animate={{ scale: [1, 2], opacity: [0.6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>

      {/* Stage number */}
      <div className="hidden md:block absolute left-8 md:left-1/2 -translate-x-1/2 -top-12 text-[#00ff88]/30 text-sm">
        STEP {String(index + 1).padStart(2, "0")}
      </div>

      {/* Content */}
      <div
        className={`flex-1 ${index % 2 === 0 ? "md:pr-24 ml-20 md:ml-0" : "md:pl-24 ml-20 md:ml-0"}`}
      >
        <motion.div
          className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#00ff88]/20 rounded-3xl p-8 md:p-10"
          whileHover={{
            borderColor: "rgba(0, 255, 136, 0.5)",
            boxShadow: "0 0 40px rgba(0, 255, 136, 0.2)",
          }}
        >
          {/* Icon */}
          <div className="mb-6 w-16 h-16 rounded-2xl bg-[#00ff88]/10 border border-[#00ff88]/30 flex items-center justify-center">
            <stage.icon className="w-8 h-8 text-[#00ff88]" strokeWidth={1.5} />
          </div>

          {/* Title */}
          <h3 className="text-3xl text-white mb-4" style={{ fontWeight: 700 }}>
            {stage.title}
          </h3>

          {/* Description */}
          <p className="text-lg text-gray-400" style={{ fontWeight: 300, lineHeight: 1.8 }}>
            {stage.description}
          </p>

          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 rounded-3xl bg-[#00ff88]/5 opacity-0"
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DSPMPage;
