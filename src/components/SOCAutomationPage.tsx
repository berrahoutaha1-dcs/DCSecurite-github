import { motion } from "framer-motion";
import { useState } from "react";
import {
  Zap,
  Brain,
  Shield,
  Clock,
  Network,
  GitBranch,
  Cpu,
  Activity,
  ArrowRight,
  CheckCircle2,
  Target,
  BarChart3,
  Workflow,
  Link2,
  Sparkles,
  Eye,
  AlertTriangle,
  RefreshCw,
  Database,
  ChevronRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes";
import { ServicePricing } from "./shared/ServicePricing";
import { servicePlans } from "../data/servicePlans";



interface SOCAutomationPageProps {
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

export default function SOCAutomationPage(props: SOCAutomationPageProps) {
  const navigate = useNavigate();
  // Reduced animation variants (10% intensity)
  const fadeInUp = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950/20 to-slate-950">
      {/* Header */}


      {/* Animated Background Grid */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(14, 165, 233, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(14, 165, 233, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Section 1: Full-Width Hero Banner */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated Circuit Lines */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              d="M 0,200 Q 400,150 800,200 T 1600,200"
              stroke="url(#gradient1)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <motion.path
              d="M 0,400 Q 300,450 600,400 T 1200,400"
              stroke="url(#gradient2)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
            />
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0" />
                <stop offset="50%" stopColor="#0ea5e9" stopOpacity="1" />
                <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
                <stop offset="50%" stopColor="#06b6d4" stopOpacity="1" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* AI Nodes Animation */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >


            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-8">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-300 text-sm">Next-Gen Security Operations</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent"
          >
            SOC Automation
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-cyan-100/80 mb-12 max-w-3xl mx-auto"
          >
            Accelerate threat response with intelligent, autonomous security operations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center"
          >
            <button
              onClick={() => navigate(ROUTES.CONTACT)}
              className="px-8 py-4 border border-cyan-500/50 text-cyan-300 rounded-lg hover:bg-cyan-500/10 transition-all hover:border-cyan-400"
            >
              Talk to an Expert
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-cyan-500/50 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 bg-cyan-400 rounded-full"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Section 2: What is SOC Automation? */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Animated Diagram */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-slate-900/50 to-blue-950/30 border border-cyan-500/20 rounded-2xl p-8 backdrop-blur-sm">
                {/* Manual to Automated Flow */}
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="flex-1 bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                      <div className="flex items-center gap-3 text-red-300">
                        <Eye className="w-5 h-5" />
                        <span className="text-sm">Manual Analysis</span>
                      </div>
                    </div>
                  </div>

                  <motion.div
                    className="flex justify-center"
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-8 h-8 text-cyan-400 rotate-90" />
                  </motion.div>

                  <div className="flex items-center gap-4">
                    <div className="flex-1 bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4">
                      <div className="flex items-center gap-3 text-cyan-300">
                        <Zap className="w-5 h-5" />
                        <span className="text-sm">Automated Response</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Glowing Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-2xl blur-xl" />
              </div>
            </motion.div>

            {/* Right: Text Block */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                What is SOC Automation?
              </h2>

              <div className="space-y-4 text-slate-300">
                <p className="text-lg leading-relaxed">
                  SOC Automation transforms manual security operations into intelligent,
                  self-executing workflows that respond to threats in real-time.
                </p>

                <div className="space-y-3">
                  {[
                    {
                      icon: Brain,
                      text: "Automated investigations with AI-powered analysis",
                    },
                    {
                      icon: Sparkles,
                      text: "Enriched alerts with contextual threat intelligence",
                    },
                    { icon: Clock, text: "Reduced response times from hours to seconds" },
                    {
                      icon: Network,
                      text: "Orchestration across all security tools",
                    },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="mt-1 p-2 bg-cyan-500/10 rounded-lg">
                        <item.icon className="w-5 h-5 text-cyan-400" />
                      </div>
                      <p className="flex-1">{item.text}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: Why Automation is Critical */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent" />

        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              Why Automation is Critical
            </h2>
            <p className="text-xl text-cyan-100/70">
              Modern threats move faster than human response
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-6"
          >
            {[
              {
                icon: Shield,
                title: "Reduce Analyst Fatigue",
                description:
                  "Eliminate repetitive tasks and let experts focus on strategic threats",
              },
              {
                icon: Clock,
                title: "24/7 Autonomous Monitoring",
                description: "Never sleep — continuous protection without human intervention",
              },
              {
                icon: Zap,
                title: "Zero-Delay Triage",
                description: "Instant classification and prioritization of security events",
              },
              {
                icon: Brain,
                title: "AI-Driven Decision Logic",
                description: "Machine learning models that adapt to emerging attack patterns",
              },
              {
                icon: Workflow,
                title: "Workflow Orchestration",
                description: "Seamless coordination across SIEM, SOAR, EDR, CDR, and CSPM",
              },
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="group relative">
                <div className="flex items-start gap-6 p-6 bg-gradient-to-r from-slate-900/50 to-blue-950/30 border border-cyan-500/20 rounded-xl hover:border-cyan-400/40 transition-all">
                  {/* Neon Line-Art Icon */}
                  <div className="relative">
                    <div className="p-4 bg-cyan-500/10 rounded-lg border border-cyan-500/30 group-hover:bg-cyan-500/20 transition-all">
                      <item.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div className="absolute inset-0 bg-cyan-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl mb-2 text-white">{item.title}</h3>
                    <p className="text-slate-400">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 4: Core Automation Capabilities */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              Core Automation Capabilities
            </h2>
            <p className="text-xl text-cyan-100/70">End-to-end autonomous security operations</p>
          </motion.div>

          {/* Horizontal Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500/20 via-cyan-500/50 to-cyan-500/20 -translate-y-1/2" />

            <div className="relative grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {[
                {
                  icon: Sparkles,
                  title: "Automated Alert Enrichment",
                  description: "Context-aware threat data",
                },
                {
                  icon: Brain,
                  title: "Autonomous Investigation",
                  description: "AI-powered root cause analysis",
                },
                {
                  icon: GitBranch,
                  title: "Playbook Execution",
                  description: "Pre-built response workflows",
                },
                {
                  icon: Target,
                  title: "Cross-Platform Actions",
                  description: "Unified response commands",
                },
                {
                  icon: Database,
                  title: "Threat Intel Integration",
                  description: "Real-time enrichment feeds",
                },
                {
                  icon: Shield,
                  title: "Auto-Containment",
                  description: "Instant threat isolation",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative"
                >
                  {/* Timeline Node */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-950 z-10">
                    <div className="absolute inset-0 bg-cyan-500 rounded-full animate-ping opacity-75" />
                  </div>

                  <div className="pt-20 text-center">
                    <div className="inline-flex items-center justify-center p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-xl mb-4">
                      <item.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h3 className="text-lg mb-2 text-white">{item.title}</h3>
                    <p className="text-sm text-slate-400">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Real-Time Automated Workflow */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/10 via-blue-950/20 to-cyan-950/10" />

        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              Real-Time Automated Workflow
            </h2>
            <p className="text-xl text-cyan-100/70">From attack to resolution in seconds</p>
          </motion.div>

          {/* Sequential Flow Animation */}
          <div className="relative">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {[
                {
                  icon: AlertTriangle,
                  label: "Attack",
                  bgFrom: "from-red-500/10",
                  bgTo: "to-red-600/10",
                  border: "border-red-500/30",
                  iconColor: "text-red-400",
                  glowBg: "bg-red-500/30",
                },
                {
                  icon: Eye,
                  label: "Detection",
                  bgFrom: "from-yellow-500/10",
                  bgTo: "to-yellow-600/10",
                  border: "border-yellow-500/30",
                  iconColor: "text-yellow-400",
                  glowBg: "bg-yellow-500/30",
                },
                {
                  icon: Brain,
                  label: "Analysis",
                  bgFrom: "from-blue-500/10",
                  bgTo: "to-blue-600/10",
                  border: "border-blue-500/30",
                  iconColor: "text-blue-400",
                  glowBg: "bg-blue-500/30",
                },
                {
                  icon: Sparkles,
                  label: "Enrichment",
                  bgFrom: "from-purple-500/10",
                  bgTo: "to-purple-600/10",
                  border: "border-purple-500/30",
                  iconColor: "text-purple-400",
                  glowBg: "bg-purple-500/30",
                },
                {
                  icon: Zap,
                  label: "Response",
                  bgFrom: "from-cyan-500/10",
                  bgTo: "to-cyan-600/10",
                  border: "border-cyan-500/30",
                  iconColor: "text-cyan-400",
                  glowBg: "bg-cyan-500/30",
                },
                {
                  icon: BarChart3,
                  label: "Reporting",
                  bgFrom: "from-green-500/10",
                  bgTo: "to-green-600/10",
                  border: "border-green-500/30",
                  iconColor: "text-green-400",
                  glowBg: "bg-green-500/30",
                },
              ].map((step, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 }}
                    className="relative"
                  >
                    <div
                      className={`p-6 bg-gradient-to-br ${step.bgFrom} ${step.bgTo} border ${step.border} rounded-2xl`}
                    >
                      <step.icon className={`w-8 h-8 ${step.iconColor}`} />
                    </div>
                    <motion.div
                      className={`absolute inset-0 ${step.glowBg} rounded-2xl blur-xl`}
                      animate={{
                        opacity: [0.3, 0.6, 0.3],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: idx * 0.2,
                      }}
                    />
                    <div className="text-center mt-4">
                      <span className="text-sm text-white">{step.label}</span>
                    </div>
                  </motion.div>

                  {idx < 5 && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.2 + 0.1 }}
                      className="hidden md:block w-12 h-0.5 bg-gradient-to-r from-cyan-500/50 to-cyan-500/20"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Integrations & Ecosystem */}
      <section className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              Integrations & Ecosystem
            </h2>
            <p className="text-xl text-cyan-100/70">Connect your entire security stack</p>
          </motion.div>

          {/* Galaxy Map Layout */}
          <div className="relative min-h-[500px] flex items-center justify-center">
            {/* Center Hub */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="relative z-20"
            >
              <div className="p-8 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border-2 border-cyan-500/50 rounded-full">
                <Cpu className="w-16 h-16 text-cyan-400" />
              </div>
              <div className="absolute inset-0 bg-cyan-500/30 rounded-full blur-2xl" />
            </motion.div>

            {/* Integration Nodes */}
            {[
              { icon: Shield, label: "SIEM", angle: 0 },
              { icon: Workflow, label: "SOAR", angle: 60 },
              { icon: Target, label: "EDR", angle: 120 },
              { icon: Network, label: "Cloud", angle: 180 },
              { icon: Database, label: "Threat Intel", angle: 240 },
              { icon: Link2, label: "APIs", angle: 300 },
            ].map((node, idx) => {
              const radius = 200;
              const x = Math.cos((node.angle * Math.PI) / 180) * radius;
              const y = Math.sin((node.angle * Math.PI) / 180) * radius;

              return (
                <div key={idx}>
                  {/* Connecting Line */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="absolute top-1/2 left-1/2 origin-center"
                    style={{
                      width: radius,
                      height: "2px",
                      transform: `rotate(${node.angle}deg)`,
                    }}
                  >
                    <div className="w-full h-full bg-gradient-to-r from-cyan-500/50 to-transparent" />
                  </motion.div>

                  {/* Node */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="absolute top-1/2 left-1/2 z-10"
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    }}
                  >
                    <div className="p-4 bg-slate-900/80 border border-cyan-500/30 rounded-xl backdrop-blur-sm hover:border-cyan-400/50 transition-all group cursor-pointer">
                      <node.icon className="w-6 h-6 text-cyan-400 mb-2" />
                      <span className="text-xs text-white whitespace-nowrap">{node.label}</span>
                      <div className="absolute inset-0 bg-cyan-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 7: Benefits Block */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: Clock,
                stat: "90%",
                label: "Faster Response Times",
                description: "Cut response from hours to seconds",
              },
              {
                icon: BarChart3,
                stat: "1000+",
                label: "Hours Saved Monthly",
                description: "Free analysts for strategic work",
              },
              {
                icon: Shield,
                stat: "95%",
                label: "Reduced Alert Fatigue",
                description: "Intelligent filtering & prioritization",
              },
              {
                icon: CheckCircle2,
                stat: "100%",
                label: "Predictable Handling",
                description: "Consistent incident response",
              },
            ].map((benefit, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="relative group">
                <div className="h-full p-8 bg-gradient-to-br from-slate-900/50 to-blue-950/30 border border-cyan-500/20 rounded-2xl hover:border-cyan-400/40 transition-all">
                  <div className="mb-6">
                    <benefit.icon className="w-12 h-12 text-cyan-400" />
                  </div>
                  <div className="text-5xl mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    {benefit.stat}
                  </div>
                  <h3 className="text-xl mb-2 text-white">{benefit.label}</h3>
                  <p className="text-slate-400">{benefit.description}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 8: Industry Use Cases */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent" />

        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              Industry Use Cases
            </h2>
            <p className="text-xl text-cyan-100/70">Automation tailored to your sector</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                industry: "Finance",
                useCase: "Automated Fraud Detection Response",
                description:
                  "Instant account lockdown, transaction reversal, and compliance reporting when fraud patterns are detected",
                icon: Shield,
              },
              {
                industry: "Healthcare",
                useCase: "Medical Device Protection",
                description:
                  "Automated isolation of compromised IoMT devices while maintaining patient care continuity",
                icon: Activity,
              },
              {
                industry: "SaaS",
                useCase: "Auto-Contain Account Takeovers",
                description:
                  "Immediate session termination, password reset, and user notification for suspicious login activity",
                icon: Zap,
              },
              {
                industry: "Government",
                useCase: "Large-Scale Event Correlation",
                description:
                  "Real-time analysis of millions of security events across distributed infrastructure",
                icon: Network,
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative"
              >
                <div className="h-full p-8 bg-gradient-to-br from-slate-900/50 to-blue-950/30 border border-cyan-500/20 rounded-2xl hover:border-cyan-400/40 transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-cyan-500/10 rounded-lg">
                      <item.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-sm text-cyan-400 mb-1">{item.industry}</div>
                      <h3 className="text-xl text-white">{item.useCase}</h3>
                    </div>
                  </div>
                  <p className="text-slate-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: Security Without Pausing */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-950/30 via-blue-950/40 to-cyan-950/30" />

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="mb-8">
              <RefreshCw className="w-16 h-16 text-cyan-400 mx-auto" />
            </div>
            <h2 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent">
              Security Without Pausing Your Business
            </h2>
            <p className="text-2xl text-cyan-100/80 max-w-2xl mx-auto">
              Automation works 24/7, even when your SOC is overloaded. Never miss a threat, never
              slow down.
            </p>
          </motion.div>
        </div>
      </section>

      <ServicePricing
        title={servicePlans["soc-automation"].title}
        description={servicePlans["soc-automation"].description}
        plans={servicePlans["soc-automation"].plans}
        highlightColor="cyan"
      />

      {/* Footer */}

    </div>
  );
}
