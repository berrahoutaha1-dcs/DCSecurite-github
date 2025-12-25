import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Shield,
  Eye,
  Zap,
  Clock,
  Target,
  Activity,
  Database,
  Lock,
  Bell,
  TrendingUp,
  CheckCircle,
  AlertTriangle,
  Search,
  Users,
  Network,
  Cloud,
  Server,
  Cpu,
  FileSearch,
  BarChart3,
  Settings,
  Play,
  Radio,
  Layers,
  GitBranch,
  MessageSquare,
  ChevronRight,

} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes";
import { ServicePricing } from "./shared/ServicePricing";
import { servicePlans } from "../data/servicePlans";





interface MDRPageProps {
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

const MDRPage: React.FC<MDRPageProps> = (props) => {
  const navigate = useNavigate();
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);


  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white overflow-x-hidden dark">


      {/* 1. HERO BANNER */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Premium dark background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e1a] via-[#0f1729] to-[#0a0e1a]" />

        {/* Floating abstract shapes - signal waves */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                width: `${300 + i * 150}px`,
                height: `${300 + i * 150}px`,
                border: "1px solid rgba(99, 179, 237, 0.2)",
                borderRadius: "50%",
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 6 + i * 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>

        {/* Soft neon accent glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#63b3ed]/10 blur-[100px]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        {/* Scanning line animation */}
        <motion.div
          className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#63b3ed] to-transparent"
          animate={{
            top: ["0%", "100%"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 sm:px-8 md:px-12 max-w-6xl mx-auto pt-32">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-8 text-gray-900 dark:text-white"
              style={{ fontWeight: 800, letterSpacing: "-0.02em" }}
            >
              Managed Detection
              <br />
              <span className="text-[#63b3ed]">& Response</span>
            </motion.h1>
          </motion.div>

          <motion.p
            className="text-xl sm:text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed"
            style={{ fontWeight: 300 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            24/7 monitoring, real-time threat detection, and rapid incident response
            <br className="hidden sm:block" />
            for your entire digital ecosystem.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.button
              className="px-10 py-5 rounded-lg bg-[#63b3ed] text-white text-lg"
              style={{ fontWeight: 600 }}
              whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(99, 179, 237, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate(ROUTES.CONTACT)}
            >
              Talk to Security Expert
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* 2. WHAT IS MDR */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] to-[#0f1729]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl mb-20 text-center text-white"
            style={{ fontWeight: 700 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            What is <span className="text-[#63b3ed]">MDR</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: Explanation */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                <p className="text-xl text-gray-300 leading-relaxed" style={{ fontWeight: 300 }}>
                  Managed Detection and Response (MDR) is a comprehensive cybersecurity service that
                  combines advanced technology with expert human analysis to protect your
                  organization around the clock.
                </p>
                <p className="text-xl text-gray-300 leading-relaxed" style={{ fontWeight: 300 }}>
                  Our MDR service delivers continuous monitoring, threat hunting, incident
                  investigation, and coordinated response actions—all managed by our elite Security
                  Operations Center (SOC).
                </p>
                <div className="pt-6 border-t border-gray-700">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle className="w-6 h-6 text-[#63b3ed]" />
                    <span className="text-lg text-gray-200">Proactive threat hunting</span>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle className="w-6 h-6 text-[#63b3ed]" />
                    <span className="text-lg text-gray-200">Rapid incident containment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-[#63b3ed]" />
                    <span className="text-lg text-gray-200">Expert-led security guidance</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Animated vertical timeline */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-8">
                {/* Vertical line */}
                <div className="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-[#63b3ed]/20 via-[#63b3ed]/50 to-[#63b3ed]/20" />

                {[
                  { icon: Radio, label: "Monitor", desc: "Continuous surveillance of all assets" },
                  { icon: Search, label: "Detect", desc: "AI-powered anomaly identification" },
                  { icon: BarChart3, label: "Analyze", desc: "Expert threat investigation" },
                  { icon: Zap, label: "Respond", desc: "Rapid containment actions" },
                  { icon: Shield, label: "Recover", desc: "System restoration & hardening" },
                ].map((step, i) => (
                  <TimelineStep key={i} step={step} index={i} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. WHY COMPANIES NEED MDR */}
      <section className="relative py-32 md:py-40 overflow-hidden bg-[#0f1729]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl mb-20 text-center text-white"
            style={{ fontWeight: 700 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Why Companies Need <span className="text-[#63b3ed]">MDR</span>
          </motion.h2>

          {/* 4 floating blocks */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Advanced Threat Detection",
                desc: "AI and ML models identify sophisticated attacks that bypass traditional defenses.",
              },
              {
                icon: TrendingUp,
                title: "Exposure Reduction",
                desc: "Continuous vulnerability assessment and proactive risk mitigation strategies.",
              },
              {
                icon: Clock,
                title: "Faster Incident Response",
                desc: "Mean time to respond reduced from hours to minutes with automated workflows.",
              },
              {
                icon: Users,
                title: "24/7 Expert Monitoring",
                desc: "Elite security analysts watching your environment around the clock.",
              },
            ].map((block, i) => (
              <FloatingBlock key={i} block={block} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. MDR CAPABILITIES */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f1729] to-[#0a0e1a]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl mb-20 text-center text-white"
            style={{ fontWeight: 700 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            MDR <span className="text-[#63b3ed]">Capabilities</span>
          </motion.h2>

          {/* Interactive horizontal line with nodes */}
          <div className="relative mt-24">
            {/* Horizontal line */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#63b3ed]/50 to-transparent" />

            {/* Nodes */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                {
                  icon: Database,
                  title: "SIEM + Log Correlation",
                  desc: "Aggregate and analyze security events from all sources",
                },
                {
                  icon: Cpu,
                  title: "Endpoint Telemetry Analysis",
                  desc: "Deep visibility into endpoint behavior and processes",
                },
                {
                  icon: Activity,
                  title: "Behavioral Analytics",
                  desc: "Detect anomalies using ML and baseline profiling",
                },
                {
                  icon: Zap,
                  title: "Automated Response Actions",
                  desc: "Instant containment through playbook execution",
                },
                {
                  icon: Network,
                  title: "Threat Intelligence Feed",
                  desc: "Real-time global threat data integration",
                },
                {
                  icon: FileSearch,
                  title: "Investigation Playbooks",
                  desc: "Standardized procedures for rapid triage",
                },
              ].map((node, i) => (
                <CapabilityNode
                  key={i}
                  node={node}
                  index={i}
                  isHovered={hoveredNode === i}
                  onHover={() => setHoveredNode(i)}
                  onLeave={() => setHoveredNode(null)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. REAL-TIME SOC MONITORING */}
      <section className="relative py-32 md:py-40 overflow-hidden bg-[#0a0e1a]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: Image placeholder */}
            <motion.div
              className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a2332] to-[#0f1729] border border-[#63b3ed]/20"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* SOC monitoring visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <motion.div
                    className="w-48 h-48 rounded-full border-4 border-[#63b3ed]/30 flex items-center justify-center"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Shield className="w-24 h-24 text-[#63b3ed]" strokeWidth={1.5} />
                  </motion.div>

                  {/* Orbiting dots */}
                  {[0, 120, 240].map((angle, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-4 h-4 bg-[#63b3ed] rounded-full"
                      style={{
                        left: "50%",
                        top: "50%",
                        marginLeft: "-8px",
                        marginTop: "-8px",
                      }}
                      animate={{
                        x: Math.cos((angle * Math.PI) / 180) * 120,
                        y: Math.sin((angle * Math.PI) / 180) * 120,
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Overlay text */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-[#0a0e1a]/80 backdrop-blur-sm border border-[#63b3ed]/30 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm text-gray-300">SOC ACTIVE</span>
                  </div>
                  <p className="text-xs text-gray-400">Monitoring 24/7/365</p>
                </div>
              </div>
            </motion.div>

            {/* Right: Description */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3
                className="text-3xl sm:text-4xl md:text-5xl text-white mb-6"
                style={{ fontWeight: 700 }}
              >
                Real-Time <span className="text-[#63b3ed]">SOC Monitoring</span>
              </h3>

              <p className="text-xl text-gray-300 mb-6 leading-relaxed" style={{ fontWeight: 300 }}>
                Our Security Operations Center operates 24/7/365, staffed by certified security
                professionals who monitor your environment in real-time.
              </p>

              <p className="text-lg text-gray-400 mb-8 leading-relaxed" style={{ fontWeight: 300 }}>
                With advanced SIEM correlation, behavioral analytics, and threat intelligence
                integration, our SOC team detects and responds to threats before they can cause
                damage.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="border-l-2 border-[#63b3ed] pl-4">
                  <div className="text-3xl text-[#63b3ed] mb-1" style={{ fontWeight: 700 }}>
                    &lt;15min
                  </div>
                  <div className="text-sm text-gray-400">Average response time</div>
                </div>
                <div className="border-l-2 border-[#63b3ed] pl-4">
                  <div className="text-3xl text-[#63b3ed] mb-1" style={{ fontWeight: 700 }}>
                    99.9%
                  </div>
                  <div className="text-sm text-gray-400">Threat detection rate</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. HOW MDR WORKS */}
      <section className="relative py-32 md:py-40 overflow-hidden bg-gradient-to-b from-[#0a0e1a] to-[#0f1729]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 md:px-12">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl mb-20 text-center text-white"
            style={{ fontWeight: 700 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            How MDR <span className="text-[#63b3ed]">Works</span>
          </motion.h2>

          {/* Vertical step-by-step */}
          <div className="space-y-6">
            {[
              {
                number: "01",
                title: "Continuous Data Collection",
                desc: "Deploy sensors and agents across endpoints, networks, cloud, and applications to stream telemetry 24/7.",
                gradient: "from-[#63b3ed]/10 to-transparent",
              },
              {
                number: "02",
                title: "AI Threat Correlation",
                desc: "Machine learning models analyze billions of events to identify patterns, anomalies, and indicators of compromise.",
                gradient: "from-[#63b3ed]/10 to-transparent",
              },
              {
                number: "03",
                title: "Analyst Validation",
                desc: "Security experts investigate alerts, eliminate false positives, and confirm genuine threats.",
                gradient: "from-[#63b3ed]/10 to-transparent",
              },
              {
                number: "04",
                title: "Automated or Guided Response",
                desc: "Execute containment playbooks instantly or provide step-by-step guidance for manual remediation.",
                gradient: "from-[#63b3ed]/10 to-transparent",
              },
              {
                number: "05",
                title: "Reporting & Improvement",
                desc: "Deliver detailed incident reports and continuously refine detection rules based on lessons learned.",
                gradient: "from-[#63b3ed]/10 to-transparent",
              },
            ].map((step, i) => (
              <WorkflowStep key={i} step={step} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. MDR VS TRADITIONAL SECURITY */}
      <section className="relative py-32 md:py-40 overflow-hidden bg-[#0f1729]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl mb-20 text-center text-white"
            style={{ fontWeight: 700 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            MDR vs <span className="text-[#63b3ed]">Traditional Security</span>
          </motion.h2>

          {/* Comparison table */}
          <motion.div
            className="overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#63b3ed]/10">
              {/* Header */}
              <div className="bg-[#0a0e1a] p-6">
                <h3 className="text-lg text-gray-400" style={{ fontWeight: 600 }}>
                  Feature
                </h3>
              </div>
              <div className="bg-[#0a0e1a] p-6">
                <h3 className="text-lg text-[#63b3ed]" style={{ fontWeight: 600 }}>
                  MDR Service
                </h3>
              </div>
              <div className="bg-[#0a0e1a] p-6">
                <h3 className="text-lg text-gray-400" style={{ fontWeight: 600 }}>
                  Traditional Security
                </h3>
              </div>

              {/* Rows */}
              {[
                {
                  feature: "Monitoring",
                  mdr: "24/7/365 by experts",
                  traditional: "Business hours only",
                },
                {
                  feature: "Threat Detection",
                  mdr: "AI + Human analysis",
                  traditional: "Rule-based alerts",
                },
                { feature: "Response Time", mdr: "< 15 minutes", traditional: "Hours to days" },
                {
                  feature: "Threat Hunting",
                  mdr: "Proactive & continuous",
                  traditional: "Reactive only",
                },
                {
                  feature: "Cost Structure",
                  mdr: "Predictable subscription",
                  traditional: "High upfront + staffing",
                },
                {
                  feature: "Expertise",
                  mdr: "Elite SOC team included",
                  traditional: "Must hire internally",
                },
              ].map((row, i) => (
                <React.Fragment key={i}>
                  <div className="bg-[#0a0e1a] p-6 border-t border-[#63b3ed]/10">
                    <p className="text-gray-300">{row.feature}</p>
                  </div>
                  <div className="bg-[#0a0e1a] p-6 border-t border-[#63b3ed]/10">
                    <p className="text-white">{row.mdr}</p>
                  </div>
                  <div className="bg-[#0a0e1a] p-6 border-t border-[#63b3ed]/10">
                    <p className="text-gray-500">{row.traditional}</p>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 8. INTEGRATION SECTION */}
      <section className="relative py-32 md:py-40 overflow-hidden bg-gradient-to-b from-[#0f1729] to-[#0a0e1a]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl mb-12 text-center text-white"
            style={{ fontWeight: 700 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Seamless <span className="text-[#63b3ed]">Integration</span>
          </motion.h2>

          <motion.p
            className="text-xl text-center text-gray-400 mb-20 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our MDR platform integrates with your existing security stack and infrastructure
          </motion.p>

          {/* Integration icons - flowing layout */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
            {[
              { icon: Cloud, label: "Cloud Platforms" },
              { icon: Shield, label: "EDR Solutions" },
              { icon: Database, label: "SIEM Systems" },
              { icon: Network, label: "Network Devices" },
              { icon: Lock, label: "Identity Systems" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="relative bg-gradient-to-br from-[#1a2332] to-[#0f1729] border border-[#63b3ed]/20 rounded-xl p-8 text-center transition-all duration-300 hover:border-[#63b3ed]/60 hover:shadow-lg hover:shadow-[#63b3ed]/20">
                  <item.icon
                    className="w-12 h-12 mx-auto mb-4 text-[#63b3ed] transition-transform duration-300 group-hover:scale-110"
                    strokeWidth={1.5}
                  />
                  <p className="text-sm text-gray-300">{item.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ServicePricing
        title={servicePlans["mdr"].title}
        description={servicePlans["mdr"].description}
        plans={servicePlans["mdr"].plans}
      />


      {/* 10. CALL TO ACTION */}
      <section className="relative py-40 md:py-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0f1729] to-[#0a0e1a]" />

        {/* Radial glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#63b3ed]/10 blur-[120px]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="relative z-10 text-center px-6 sm:px-8 md:px-12 max-w-4xl mx-auto">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-12 text-white"
            style={{ fontWeight: 800, letterSpacing: "-0.02em" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            Boost Your Security Posture
            <br />
            with <span className="text-[#63b3ed]">MDR Expertise</span>
          </motion.h2>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.button
              className="px-12 py-6 rounded-lg bg-[#63b3ed] text-white text-xl"
              style={{ fontWeight: 700 }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 40px rgba(99, 179, 237, 0.5)",
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate(ROUTES.CONTACT)}
            >
              Start Today
            </motion.button>

            <motion.button
              className="px-12 py-6 rounded-lg border border-[#63b3ed]/50 text-[#63b3ed] text-xl backdrop-blur-sm"
              style={{ fontWeight: 700 }}
              whileHover={{
                scale: 1.02,
                backgroundColor: "rgba(99, 179, 237, 0.1)",
                borderColor: "rgba(99, 179, 237, 0.8)",
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate(ROUTES.CONTACT)}
            >
              Book a Consultation
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
              <CheckCircle className="w-5 h-5 text-[#63b3ed]" strokeWidth={2} />
              <span>No long-term contracts</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#63b3ed]" strokeWidth={2} />
              <span>Rapid deployment</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#63b3ed]" strokeWidth={2} />
              <span>Certified experts</span>
            </div>
          </motion.div>
        </div>
      </section >


    </div >
  );
};

// Timeline Step Component
const TimelineStep: React.FC<{ step: any; index: number }> = ({ step, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.8 });

  return (
    <motion.div
      ref={ref}
      className="relative flex items-start gap-6 pl-16"
      initial={{ opacity: 0, x: 20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Icon node */}
      <motion.div
        className="absolute left-4 w-8 h-8 rounded-full bg-[#63b3ed]/20 border-2 border-[#63b3ed] flex items-center justify-center"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
      >
        <step.icon className="w-4 h-4 text-[#63b3ed]" strokeWidth={2} />
      </motion.div>

      <div>
        <h4 className="text-xl text-white mb-1" style={{ fontWeight: 600 }}>
          {step.label}
        </h4>
        <p className="text-sm text-gray-400" style={{ fontWeight: 300 }}>
          {step.desc}
        </p>
      </div>
    </motion.div>
  );
};

// Floating Block Component
const FloatingBlock: React.FC<{ block: any; index: number }> = ({ block, index }) => {
  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="relative bg-gradient-to-br from-[#1a2332] to-[#0f1729] border border-transparent rounded-xl p-8 transition-all duration-300 hover:border-[#63b3ed]/40 hover:shadow-lg hover:shadow-[#63b3ed]/10">
        {/* Glowing border effect */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#63b3ed]/0 to-[#63b3ed]/0 opacity-0 group-hover:from-[#63b3ed]/5 group-hover:to-[#63b3ed]/10 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative z-10">
          <div className="mb-6 w-14 h-14 rounded-lg bg-[#63b3ed]/10 flex items-center justify-center">
            <block.icon className="w-7 h-7 text-[#63b3ed]" strokeWidth={1.5} />
          </div>

          <h3 className="text-xl text-white mb-3" style={{ fontWeight: 600 }}>
            {block.title}
          </h3>

          <p className="text-sm text-gray-400 leading-relaxed" style={{ fontWeight: 300 }}>
            {block.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

// Capability Node Component
const CapabilityNode: React.FC<{
  node: any;
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}> = ({ node, index, isHovered, onHover, onLeave }) => {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Node */}
      <div className="relative z-10 mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-[#1a2332] to-[#0f1729] border-2 border-[#63b3ed]/30 flex items-center justify-center cursor-pointer transition-all duration-300 hover:border-[#63b3ed] hover:shadow-lg hover:shadow-[#63b3ed]/30 hover:scale-110">
        <node.icon className="w-8 h-8 text-[#63b3ed]" strokeWidth={1.5} />
      </div>

      {/* Tooltip */}
      {isHovered && (
        <motion.div
          className="absolute top-full mt-4 left-1/2 -translate-x-1/2 w-64 bg-[#1a2332] border border-[#63b3ed]/40 rounded-lg p-4 shadow-xl z-20"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <h4 className="text-sm text-white mb-2" style={{ fontWeight: 600 }}>
            {node.title}
          </h4>
          <p className="text-xs text-gray-400" style={{ fontWeight: 300 }}>
            {node.desc}
          </p>
        </motion.div>
      )}

      {/* Label below */}
      <p className="text-xs text-center text-gray-400 mt-4">{node.title.split(" ")[0]}</p>
    </motion.div>
  );
};

// Workflow Step Component
const WorkflowStep: React.FC<{ step: any; index: number }> = ({ step, index }) => {
  return (
    <motion.div
      className={`relative bg-gradient-to-r ${step.gradient} border border-[#63b3ed]/20 rounded-xl p-8 transition-all duration-300 hover:border-[#63b3ed]/50 hover:shadow-lg hover:shadow-[#63b3ed]/10`}
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#63b3ed]/20 flex items-center justify-center">
          <span className="text-lg text-[#63b3ed]" style={{ fontWeight: 700 }}>
            {step.number}
          </span>
        </div>

        <div className="flex-1">
          <h3 className="text-2xl text-white mb-3" style={{ fontWeight: 600 }}>
            {step.title}
          </h3>
          <p className="text-base text-gray-400 leading-relaxed" style={{ fontWeight: 300 }}>
            {step.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default MDRPage;
