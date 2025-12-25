import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Shield,
  Database,
  Activity,
  Bell,
  Search,
  BarChart,
  FileText,
  Layers,
  Network,
  Server,
  Cloud,
  Lock,
  CheckCircle,
  Zap,
  Eye,
  AlertTriangle,
  TrendingUp,
  GitBranch,
  Radio,
  Cpu,
  HardDrive,
  Globe,
  Users,
  Settings,
  Target,
  ChevronRight,

} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes";
import { ServicePricing } from "./shared/ServicePricing";
import { servicePlans } from "../data/servicePlans";


interface SIEMPageProps {
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

const SIEMPage: React.FC<SIEMPageProps> = (props) => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#0a1e3e] text-white overflow-x-hidden dark">


      {/* 1. HERO BANNER */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Dark futuristic background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1e3e] via-[#0d1b2a] to-[#1b2b44]" />

        {/* Abstract network lines */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
              style={{
                top: `${15 + i * 12}%`,
                left: 0,
                right: 0,
              }}
              animate={{
                opacity: [0.2, 0.6, 0.2],
                scaleX: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: i * 0.4,
              }}
            />
          ))}
        </div>

        {/* Soft grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(rgba(0, 217, 255, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 217, 255, 0.15) 1px, transparent 1px)
            `,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Glowing cyber shapes */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-cyan-500/10 blur-[100px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />

        {/* Floating particles */}
        <div className="absolute inset-0">
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
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Scanning lines */}
        <motion.div
          className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
          animate={{
            top: ["0%", "100%"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 sm:px-8 md:px-12 max-w-7xl mx-auto pt-32">

          <motion.div
            className="flex items-center justify-center gap-4 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="relative"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div className="w-20 h-20 rounded-full border-2 border-cyan-500/50 flex items-center justify-center">
                <Shield className="w-10 h-10 text-cyan-400" strokeWidth={1.5} />
              </div>
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-cyan-500/30"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>

          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-8"
            style={{ fontWeight: 800, letterSpacing: "-0.02em" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="text-white">Security Information &</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Event Management
            </span>
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-16 max-w-5xl mx-auto leading-relaxed"
            style={{ fontWeight: 300 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Real-time visibility, centralized logs, and automated threat detection
            <br className="hidden sm:block" />
            for your entire environment.
          </motion.p>

          {/* Buttons removed as per user request */}
        </div>
      </section>

      {/* 2. WHAT IS SIEM */}
      <section className="relative py-32 md:py-40 overflow-hidden bg-gradient-to-b from-[#0a1e3e] to-[#0d1b2a]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: Animated Diagram */}
            <motion.div
              className="relative h-[500px]"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Central core */}
                <div className="relative">
                  <motion.div
                    className="w-32 h-32 rounded-2xl bg-gradient-to-br from-cyan-500/30 to-blue-500/30 backdrop-blur-sm border-2 border-cyan-500/50 flex items-center justify-center"
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(0, 217, 255, 0.3)",
                        "0 0 40px rgba(0, 217, 255, 0.6)",
                        "0 0 20px rgba(0, 217, 255, 0.3)",
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Database className="w-16 h-16 text-cyan-400" strokeWidth={1.5} />
                  </motion.div>

                  {/* Orbiting elements */}
                  {[
                    { icon: Server, angle: 0, radius: 140, label: "Logs" },
                    { icon: Cloud, angle: 72, radius: 140, label: "Cloud" },
                    { icon: Network, angle: 144, radius: 140, label: "Network" },
                    { icon: Lock, angle: 216, radius: 140, label: "Security" },
                    { icon: Activity, angle: 288, radius: 140, label: "Events" },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      className="absolute top-1/2 left-1/2"
                      style={{
                        marginLeft: "-32px",
                        marginTop: "-32px",
                      }}
                      animate={{
                        x: Math.cos((item.angle * Math.PI) / 180) * item.radius,
                        y: Math.sin((item.angle * Math.PI) / 180) * item.radius,
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <motion.div
                        className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-500/40 flex items-center justify-center relative"
                        whileHover={{ scale: 1.1 }}
                      >
                        <item.icon className="w-8 h-8 text-cyan-400" strokeWidth={1.5} />
                      </motion.div>
                    </motion.div>
                  ))}

                  {/* Connecting lines */}
                  <svg
                    className="absolute inset-0 w-full h-full -z-10"
                    style={{ width: "400px", height: "400px", left: "-134px", top: "-134px" }}
                  >
                    <defs>
                      <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(0, 217, 255, 0)" />
                        <stop offset="50%" stopColor="rgba(0, 217, 255, 0.4)" />
                        <stop offset="100%" stopColor="rgba(0, 217, 255, 0)" />
                      </linearGradient>
                    </defs>
                    {[0, 72, 144, 216, 288].map((angle, i) => (
                      <motion.line
                        key={i}
                        x1="50%"
                        y1="50%"
                        x2={`${50 + Math.cos((angle * Math.PI) / 180) * 35}%`}
                        y2={`${50 + Math.sin((angle * Math.PI) / 180) * 35}%`}
                        stroke="url(#cyanGrad)"
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: [0, 1, 0] }}
                        transition={{ duration: 4, repeat: Infinity, delay: i * 0.3 }}
                      />
                    ))}
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Right: Explanation */}
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
                What is <span className="text-cyan-400">SIEM</span>?
              </h2>

              <div className="space-y-6">
                {[
                  {
                    title: "Centralized Log Collection",
                    desc: "Aggregate security events from every corner of your infrastructure in one unified platform.",
                  },
                  {
                    title: "Security Correlation Rules",
                    desc: "Advanced analytics that connect the dots between disparate events to identify real threats.",
                  },
                  {
                    title: "Real-Time Monitoring",
                    desc: "Continuous surveillance of your environment with instant visibility into potential security incidents.",
                  },
                  {
                    title: "Automated Incident Notifications",
                    desc: "Smart alerts that notify your team the moment suspicious activity is detected.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="relative pl-6 border-l-2 border-cyan-500/30 hover:border-cyan-500/70 transition-colors"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                  >
                    <div className="absolute -left-2 top-2 w-3 h-3 rounded-full bg-cyan-500 animate-pulse" />
                    <h3 className="text-xl text-white mb-2" style={{ fontWeight: 600 }}>
                      {item.title}
                    </h3>
                    <p
                      className="text-base text-gray-400 leading-relaxed"
                      style={{ fontWeight: 300 }}
                    >
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. CORE CAPABILITIES */}
      <section className="relative py-32 md:py-40 overflow-hidden bg-[#0d1b2a]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl mb-20 text-center text-white"
            style={{ fontWeight: 700 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Core <span className="text-cyan-400">Capabilities</span>
          </motion.h2>

          {/* 3-column open layout with floating transparent panels */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Database,
                title: "Log Aggregation & Normalization",
                desc: "Collect and standardize data from any source in any format",
              },
              {
                icon: GitBranch,
                title: "Threat Correlation Engine",
                desc: "AI-powered analysis that identifies attack patterns across events",
              },
              {
                icon: BarChart,
                title: "Real-Time Alerts & Dashboards",
                desc: "Instant notifications with customizable visual analytics",
              },
              {
                icon: FileText,
                title: "Compliance Reporting",
                desc: "Automated reports for GDPR, PCI-DSS, HIPAA, and more",
              },
              {
                icon: Users,
                title: "User Behavior Analytics (UBA)",
                desc: "Detect insider threats and compromised accounts",
              },
              {
                icon: Search,
                title: "Incident Investigation Tools",
                desc: "Fast forensic search across petabytes of historical data",
              },
            ].map((capability, i) => (
              <CapabilityPanel key={i} capability={capability} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. SIEM WORKFLOW VISUALIZATION */}
      <section className="relative py-32 md:py-40 overflow-hidden bg-gradient-to-b from-[#0d1b2a] to-[#1b2b44]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl mb-20 text-center text-white"
            style={{ fontWeight: 700 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            SIEM <span className="text-cyan-400">Workflow</span>
          </motion.h2>

          {/* Horizontal cyber pipeline */}
          <div className="relative">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4">
              {[
                { icon: Database, title: "Collect", desc: "Logs, endpoints, cloud, network" },
                { icon: Layers, title: "Normalize", desc: "Standardize all data formats" },
                { icon: Cpu, title: "Analyze", desc: "Apply correlation rules" },
                { icon: Target, title: "Detect", desc: "Identify threats & anomalies" },
                { icon: Bell, title: "Alert", desc: "Notify security teams" },
                { icon: Zap, title: "Respond", desc: "Execute automated actions" },
              ].map((step, i) => (
                <React.Fragment key={i}>
                  <WorkflowStep step={step} index={i} />
                  {i < 5 && (
                    <motion.div
                      className="hidden lg:flex items-center"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                      <motion.div
                        className="w-16 h-px bg-gradient-to-r from-cyan-500 to-transparent"
                        animate={{
                          scaleX: [0, 1, 0],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                      />
                      <motion.div
                        className="w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-8 border-l-cyan-500"
                        animate={{
                          x: [0, 10, 0],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                      />
                    </motion.div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. BENEFITS SECTION */}
      <section className="relative py-32 md:py-40 overflow-hidden bg-[#1b2b44]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl mb-20 text-center text-white"
            style={{ fontWeight: 700 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Key <span className="text-cyan-400">Benefits</span>
          </motion.h2>

          {/* Two-column layout */}
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                icon: Activity,
                title: "24/7 Monitoring",
                desc: "Round-the-clock surveillance of your entire security landscape without human intervention.",
              },
              {
                icon: Zap,
                title: "Faster Incident Response",
                desc: "Reduce MTTD and MTTR with automated detection and guided response workflows.",
              },
              {
                icon: FileText,
                title: "Better Compliance & Reporting",
                desc: "Simplify audits with automated compliance tracking and one-click reporting.",
              },
              {
                icon: Shield,
                title: "Reduced Attack Impact",
                desc: "Stop threats early in the kill chain before they cause significant damage.",
              },
              {
                icon: Eye,
                title: "Complete Visibility",
                desc: "See everything happening across cloud, on-prem, and hybrid environments in real-time.",
              },
            ].map((benefit, i) => (
              <BenefitItem key={i} benefit={benefit} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. INTEGRATIONS SECTION */}
      <section className="relative py-32 md:py-40 overflow-hidden bg-gradient-to-b from-[#1b2b44] to-[#0d1b2a]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl mb-12 text-center text-white"
            style={{ fontWeight: 700 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Seamless <span className="text-cyan-400">Integrations</span>
          </motion.h2>

          <motion.p
            className="text-xl text-center text-gray-400 mb-16 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Connect with your entire security ecosystem
          </motion.p>

          {/* Large flowing network diagram */}
          <motion.div
            className="relative min-h-[600px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Central SIEM hub */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <motion.div
                className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-500/40 to-blue-500/40 backdrop-blur-sm border-2 border-cyan-500/60 flex items-center justify-center"
                animate={{
                  boxShadow: [
                    "0 0 30px rgba(0, 217, 255, 0.4)",
                    "0 0 60px rgba(0, 217, 255, 0.7)",
                    "0 0 30px rgba(0, 217, 255, 0.4)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-white text-sm" style={{ fontWeight: 700 }}>
                  SIEM
                </span>
              </motion.div>
            </div>

            {/* Integration nodes */}
            {[
              { icon: Cloud, label: "Cloud Providers", x: 20, y: 20 },
              { icon: Shield, label: "Firewalls", x: 80, y: 20 },
              { icon: Server, label: "Endpoint Agents", x: 15, y: 50 },
              { icon: Lock, label: "Identity Systems", x: 85, y: 50 },
              { icon: Layers, label: "Applications", x: 20, y: 80 },
              { icon: Database, label: "Databases", x: 80, y: 80 },
            ].map((node, i) => (
              <IntegrationNode key={i} node={node} index={i} totalNodes={6} />
            ))}

            {/* Animated data streams */}
            <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: "none" }}>
              <defs>
                <linearGradient id="streamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(0, 217, 255, 0)" />
                  <stop offset="50%" stopColor="rgba(0, 217, 255, 0.8)" />
                  <stop offset="100%" stopColor="rgba(0, 217, 255, 0)" />
                </linearGradient>
              </defs>
              {[
                { x1: "20%", y1: "20%", x2: "50%", y2: "50%" },
                { x1: "80%", y1: "20%", x2: "50%", y2: "50%" },
                { x1: "15%", y1: "50%", x2: "50%", y2: "50%" },
                { x1: "85%", y1: "50%", x2: "50%", y2: "50%" },
                { x1: "20%", y1: "80%", x2: "50%", y2: "50%" },
                { x1: "80%", y1: "80%", x2: "50%", y2: "50%" },
              ].map((line, i) => (
                <motion.line
                  key={i}
                  x1={line.x1}
                  y1={line.y1}
                  x2={line.x2}
                  y2={line.y2}
                  stroke="url(#streamGrad)"
                  strokeWidth="2"
                  strokeDasharray="8 8"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{
                    pathLength: [0, 1, 0],
                    opacity: [0, 0.8, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.4,
                  }}
                />
              ))}
            </svg>
          </motion.div>
        </div>
      </section>

      {/* 7. WHY CHOOSE OUR SIEM */}
      <section className="relative py-32 md:py-40 overflow-hidden bg-[#0d1b2a]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 md:px-12">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl mb-20 text-center text-white"
            style={{ fontWeight: 700 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Why Choose <span className="text-cyan-400">Our SIEM</span>
          </motion.h2>

          {/* Vertical list with icons */}
          <div className="space-y-8">
            {[
              {
                icon: Cpu,
                title: "AI-Powered Correlation",
                desc: "Machine learning algorithms that evolve with your threat landscape",
              },
              {
                icon: AlertTriangle,
                title: "Instant Anomaly Detection",
                desc: "Behavioral analytics that spot deviations from baseline instantly",
              },
              {
                icon: Search,
                title: "High-Speed Search",
                desc: "Query terabytes of data in seconds with our optimized search engine",
              },
              {
                icon: BarChart,
                title: "Customized Dashboards",
                desc: "Build tailored views for different teams and compliance requirements",
              },
              {
                icon: Zap,
                title: "Seamless Deployment",
                desc: "Cloud-native architecture with rapid implementation and zero downtime",
              },
            ].map((item, i) => (
              <FeatureItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>


      {/* 8. CALL TO ACTION */}
      <section className="relative py-40 md:py-48 overflow-hidden bg-gradient-to-br from-[#0a1e3e] via-[#0d1b2a] to-[#1b2b44]">
        {/* Neon gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10" />

        {/* Animated background particles */}
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -40, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0.2, 1, 0.2],
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-6 sm:px-8 md:px-12 max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-12 text-white"
            style={{ fontWeight: 800, letterSpacing: "-0.02em" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            Unlock Complete Visibility.
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Stop Attacks Before They Start.
            </span>
          </motion.h2>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.button
              className="px-12 py-6 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xl"
              style={{ fontWeight: 700 }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 50px rgba(0, 217, 255, 0.8)",
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate(ROUTES.SECURITY_TEST)}
            >
              Start Free Assessment
            </motion.button>

            <motion.button
              className="px-12 py-6 rounded-lg border border-cyan-500/50 text-cyan-400 text-xl backdrop-blur-sm"
              style={{ fontWeight: 700 }}
              whileHover={{
                scale: 1.02,
                backgroundColor: "rgba(0, 217, 255, 0.15)",
                borderColor: "rgba(0, 217, 255, 0.9)",
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate(ROUTES.CONTACT)}
            >
              Contact Our Security Team
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
              <CheckCircle className="w-5 h-5 text-cyan-500" strokeWidth={2} />
              <span>Real-time threat detection</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-cyan-500" strokeWidth={2} />
              <span>Automated compliance</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-cyan-500" strokeWidth={2} />
              <span>No deployment hassle</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PRICING PLANS SECTION */}
      <ServicePricing
        title={servicePlans["siem"].title}
        description={servicePlans["siem"].description}
        plans={servicePlans["siem"].plans}
        highlightColor="cyan"
      />


    </div>
  );
};

// Capability Panel Component
const CapabilityPanel: React.FC<{ capability: any; index: number }> = ({ capability, index }) => {
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="relative bg-gradient-to-br from-cyan-500/5 to-blue-500/5 backdrop-blur-sm rounded-2xl p-8 h-full border border-cyan-500/0 hover:border-cyan-500/40 transition-all duration-300">
        {/* Soft glow on hover */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-300" />

        <div className="relative z-10">
          <motion.div
            className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500/30 to-blue-500/30 flex items-center justify-center mb-6"
            animate={{
              boxShadow: [
                "0 0 10px rgba(0, 217, 255, 0.2)",
                "0 0 20px rgba(0, 217, 255, 0.4)",
                "0 0 10px rgba(0, 217, 255, 0.2)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
          >
            <capability.icon className="w-8 h-8 text-cyan-400" strokeWidth={1.5} />
          </motion.div>

          <h3 className="text-2xl text-white mb-4" style={{ fontWeight: 600 }}>
            {capability.title}
          </h3>

          <p className="text-base text-gray-400 leading-relaxed" style={{ fontWeight: 300 }}>
            {capability.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

// Workflow Step Component
const WorkflowStep: React.FC<{ step: any; index: number }> = ({ step, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.8 });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center text-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <motion.div
        className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500/30 to-blue-500/30 backdrop-blur-sm border-2 border-cyan-500/50 flex items-center justify-center mb-4"
        animate={
          isInView
            ? {
              boxShadow: [
                "0 0 15px rgba(0, 217, 255, 0.3)",
                "0 0 30px rgba(0, 217, 255, 0.6)",
                "0 0 15px rgba(0, 217, 255, 0.3)",
              ],
            }
            : {}
        }
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <step.icon className="w-10 h-10 text-cyan-400" strokeWidth={1.5} />
      </motion.div>

      <h3 className="text-xl text-white mb-2" style={{ fontWeight: 600 }}>
        {step.title}
      </h3>

      <p className="text-sm text-gray-400 max-w-[150px]" style={{ fontWeight: 300 }}>
        {step.desc}
      </p>
    </motion.div>
  );
};

// Benefit Item Component
const BenefitItem: React.FC<{ benefit: any; index: number }> = ({ benefit, index }) => {
  return (
    <motion.div
      className="flex items-start gap-6"
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
    >
      <motion.div
        className="w-14 h-14 rounded-lg bg-gradient-to-br from-cyan-500/30 to-blue-500/30 flex items-center justify-center flex-shrink-0"
        whileHover={{ scale: 1.1 }}
      >
        <benefit.icon className="w-7 h-7 text-cyan-400" strokeWidth={1.5} />
      </motion.div>

      <div>
        <h3 className="text-2xl text-white mb-3" style={{ fontWeight: 600 }}>
          {benefit.title}
        </h3>
        <p className="text-base text-gray-400 leading-relaxed" style={{ fontWeight: 300 }}>
          {benefit.desc}
        </p>
      </div>
    </motion.div>
  );
};

// Integration Node Component
const IntegrationNode: React.FC<{ node: any; index: number; totalNodes: number }> = ({
  node,
  index,
}) => {
  return (
    <motion.div
      className="absolute"
      style={{
        left: `${node.x}%`,
        top: `${node.y}%`,
        transform: "translate(-50%, -50%)",
      }}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <motion.div
        className="w-24 h-24 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-500/40 flex flex-col items-center justify-center gap-2"
        whileHover={{ scale: 1.1 }}
        animate={{
          borderColor: [
            "rgba(0, 217, 255, 0.4)",
            "rgba(0, 217, 255, 0.7)",
            "rgba(0, 217, 255, 0.4)",
          ],
        }}
        transition={{ duration: 3, repeat: Infinity, delay: index * 0.4 }}
      >
        <node.icon className="w-8 h-8 text-cyan-400" strokeWidth={1.5} />
        <span className="text-xs text-gray-300 text-center px-2">{node.label}</span>
      </motion.div>
    </motion.div>
  );
};

// Feature Item Component
const FeatureItem: React.FC<{ item: any; index: number }> = ({ item, index }) => {
  return (
    <motion.div
      className="flex items-start gap-6 group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <motion.div
        className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500/30 to-blue-500/30 flex items-center justify-center flex-shrink-0"
        whileHover={{ scale: 1.1 }}
      >
        <item.icon className="w-8 h-8 text-cyan-400" strokeWidth={1.5} />
      </motion.div>

      <div className="flex-1">
        <h3
          className="text-2xl text-white mb-3 group-hover:text-cyan-400 transition-colors"
          style={{ fontWeight: 600 }}
        >
          {item.title}
        </h3>
        <p className="text-base text-gray-400 leading-relaxed" style={{ fontWeight: 300 }}>
          {item.desc}
        </p>
      </div>
    </motion.div>
  );
};

export default SIEMPage;
