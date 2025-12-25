import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Shield,
  Search,
  Target,
  Eye,
  Zap,
  AlertTriangle,
  Database,
  Network,
  Server,
  Cloud,
  Lock,
  CheckCircle,
  TrendingUp,
  Activity,
  Layers,
  GitBranch,
  Key,
  Bell,
  Radio,
  Scan,
  Globe,
  Map,
  Radar,
  Box,
  ChevronRight,

} from "lucide-react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { ROUTES } from "../routes";
import { ServicePricing } from "./shared/ServicePricing";
import { servicePlans } from "../data/servicePlans";


interface ASMPageProps {
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

interface LoginContext {
  openCustomerLogin: () => void;
}

const ASMPage: React.FC<ASMPageProps> = (props) => {
  const { openCustomerLogin } = useOutletContext<LoginContext>();
  const navigate = useNavigate();
  const [activeUseCase, setActiveUseCase] = useState(0);

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white overflow-x-hidden dark">


      {/* 1. HERO BANNER */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Dark background with glowing grid */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e1a] via-[#0f1520] to-[#0a0e1a]" />

        {/* Hologram grid effect */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(rgba(249, 115, 22, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(249, 115, 22, 0.1) 1px, transparent 1px)
            `,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {/* Glowing accent lines */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"
              style={{ top: `${20 + i * 15}%` }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scaleX: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>

        {/* Scanning lines (cyber-radar effect) */}
        <motion.div
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"
          animate={{
            top: ["0%", "100%"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"
          animate={{
            top: ["0%", "100%"],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
            delay: 1,
          }}
        />

        {/* Radial glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-orange-500/10 blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity }}
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
              animate={{
                rotate: 360,
                boxShadow: [
                  "0 0 20px rgba(249, 115, 22, 0.3)",
                  "0 0 40px rgba(249, 115, 22, 0.6)",
                  "0 0 20px rgba(249, 115, 22, 0.3)",
                ],
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                boxShadow: { duration: 3, repeat: Infinity },
              }}
              className="rounded-full p-4"
            >
              <Radar className="w-16 h-16 text-orange-500" strokeWidth={1.5} />
            </motion.div>
          </motion.div>

          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-8"
            style={{ fontWeight: 800, letterSpacing: "-0.02em" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="text-white">Know Every Entry Point</span>
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
              Before Attackers Do
            </span>
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed"
            style={{ fontWeight: 300 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Real-time visibility of your external exposure, shadow assets,
            <br className="hidden sm:block" />
            and evolving attack surface.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <motion.button
              className="px-12 py-6 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xl"
              style={{ fontWeight: 700 }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 40px rgba(249, 115, 22, 0.6)",
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate(ROUTES.CONTACT)}
            >
              Contact Expert
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* 2. WHAT IS ASM */}
      <section className="relative py-32 md:py-40 overflow-hidden bg-gradient-to-b from-[#0a0e1a] to-[#0f1520]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: Description */}
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
                What is <span className="text-orange-500">ASM</span>?
              </h2>

              <motion.p
                className="text-xl text-gray-300 mb-6 leading-relaxed"
                style={{ fontWeight: 300 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Attack Surface Management (ASM) is a continuous security process that discovers,
                inventories, classifies, and monitors all external-facing assets—known and
                unknown—across your entire digital ecosystem.
              </motion.p>

              <motion.p
                className="text-lg text-gray-400 mb-8 leading-relaxed"
                style={{ fontWeight: 300 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                ASM identifies shadow IT, forgotten infrastructure, exposed APIs, and misconfigured
                services before attackers exploit them—giving you an attacker's-eye view of your
                organization.
              </motion.p>

              <div className="space-y-3">
                {[
                  "Discover every exposed asset automatically",
                  "Detect shadow IT and rogue infrastructure",
                  "Prioritize risks based on exploitability",
                ].map((text, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                    <span className="text-gray-300">{text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: 3D rotating perimeter map */}
            <motion.div
              className="relative h-[500px]"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Rotating perimeter map */}
                <motion.div
                  className="relative w-80 h-80"
                  animate={{ rotateY: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Center core */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-orange-500/30 to-amber-500/30 backdrop-blur-sm border-2 border-orange-500/50 flex items-center justify-center z-10">
                    <Shield className="w-12 h-12 text-orange-500" strokeWidth={1.5} />
                  </div>

                  {/* Orbital rings */}
                  {[120, 180, 240].map((radius, ringIndex) => (
                    <div key={ringIndex}>
                      {[...Array(8)].map((_, i) => {
                        const angle = (i * 360) / 8;
                        const icons = [Server, Cloud, Database, Globe, Network, Lock, Box, Key];
                        const Icon = icons[i % icons.length];

                        return (
                          <motion.div
                            key={i}
                            className="absolute top-1/2 left-1/2"
                            style={{
                              marginLeft: "-20px",
                              marginTop: "-20px",
                            }}
                            animate={{
                              x: Math.cos((angle * Math.PI) / 180) * radius,
                              y: Math.sin((angle * Math.PI) / 180) * radius,
                            }}
                            transition={{
                              duration: 15 + ringIndex * 5,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          >
                            <motion.div
                              className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500/20 to-transparent backdrop-blur-sm border border-orange-500/30 flex items-center justify-center"
                              animate={{
                                boxShadow: [
                                  "0 0 5px rgba(249, 115, 22, 0.3)",
                                  "0 0 15px rgba(249, 115, 22, 0.6)",
                                  "0 0 5px rgba(249, 115, 22, 0.3)",
                                ],
                              }}
                              transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                            >
                              <Icon className="w-5 h-5 text-orange-400" strokeWidth={1.5} />
                            </motion.div>
                          </motion.div>
                        );
                      })}
                    </div>
                  ))}

                  {/* Connecting lines */}
                  <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: "none" }}>
                    <defs>
                      <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(249, 115, 22, 0)" />
                        <stop offset="50%" stopColor="rgba(249, 115, 22, 0.4)" />
                        <stop offset="100%" stopColor="rgba(249, 115, 22, 0)" />
                      </linearGradient>
                    </defs>
                    {[...Array(12)].map((_, i) => (
                      <motion.line
                        key={i}
                        x1="50%"
                        y1="50%"
                        x2={`${50 + Math.cos((i * 30 * Math.PI) / 180) * 40}%`}
                        y2={`${50 + Math.sin((i * 30 * Math.PI) / 180) * 40}%`}
                        stroke="url(#orangeGradient)"
                        strokeWidth="1"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: [0, 1, 0] }}
                        transition={{ duration: 3, repeat: Infinity, delay: i * 0.1 }}
                      />
                    ))}
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. KEY CAPABILITIES */}
      <section className="relative py-32 md:py-40 overflow-hidden bg-[#0f1520]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl mb-20 text-center text-white"
            style={{ fontWeight: 700 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Key <span className="text-orange-500">Capabilities</span>
          </motion.h2>

          {/* Floating panels - vertical stacked glowing bars */}
          <div className="space-y-6">
            {[
              {
                icon: Search,
                title: "Continuous Asset Discovery",
                desc: "Automatically find and catalog all internet-facing assets in real-time",
              },
              {
                icon: Eye,
                title: "Shadow IT Detection",
                desc: "Uncover unauthorized cloud services, forgotten servers, and rogue infrastructure",
              },
              {
                icon: Target,
                title: "Risk Scoring & Prioritization",
                desc: "AI-powered risk assessment based on exploitability and business impact",
              },
              {
                icon: Activity,
                title: "Real-time Exposure Monitoring",
                desc: "Track changes to your attack surface as they happen 24/7",
              },
              {
                icon: Map,
                title: "External Perimeter Mapping",
                desc: "Visualize your entire external footprint from an attacker's perspective",
              },
              {
                icon: AlertTriangle,
                title: "Automated Misconfiguration Detection",
                desc: "Identify exposed databases, open ports, and security gaps instantly",
              },
            ].map((capability, i) => (
              <CapabilityBar key={i} capability={capability} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. ATTACK SURFACE VISUALIZATION */}
      <section className="relative py-32 md:py-40 overflow-hidden bg-gradient-to-b from-[#0f1520] to-[#0a0e1a]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl mb-12 text-center text-white"
            style={{ fontWeight: 700 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Attack Surface <span className="text-orange-500">Visualization</span>
          </motion.h2>

          <motion.p
            className="text-xl text-center text-gray-400 mb-16 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            See every external asset, service, and potential entry point mapped in real-time
          </motion.p>

          {/* Cyber Map Visualization */}
          <motion.div
            className="relative bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm border border-orange-500/20 rounded-2xl p-8 md:p-12 overflow-hidden min-h-[500px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Background grid */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `
                linear-gradient(rgba(249, 115, 22, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(249, 115, 22, 0.3) 1px, transparent 1px)
              `,
                backgroundSize: "40px 40px",
              }}
            />

            {/* Neon nodes */}
            <div className="relative h-96">
              {[
                { x: 20, y: 30, size: "large", type: "critical" },
                { x: 50, y: 20, size: "medium", type: "high" },
                { x: 70, y: 40, size: "small", type: "medium" },
                { x: 30, y: 60, size: "medium", type: "high" },
                { x: 60, y: 70, size: "large", type: "critical" },
                { x: 80, y: 65, size: "small", type: "low" },
                { x: 40, y: 80, size: "medium", type: "medium" },
                { x: 15, y: 75, size: "small", type: "low" },
              ].map((node, i) => (
                <CyberNode key={i} node={node} index={i} />
              ))}

              {/* Animated pulse lines between nodes */}
              <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: "none" }}>
                <defs>
                  <linearGradient id="pulseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(249, 115, 22, 0)" />
                    <stop offset="50%" stopColor="rgba(249, 115, 22, 0.6)" />
                    <stop offset="100%" stopColor="rgba(249, 115, 22, 0)" />
                  </linearGradient>
                </defs>
                {[
                  { x1: 20, y1: 30, x2: 50, y2: 20 },
                  { x1: 50, y1: 20, x2: 70, y2: 40 },
                  { x1: 30, y1: 60, x2: 60, y2: 70 },
                  { x1: 60, y1: 70, x2: 80, y2: 65 },
                  { x1: 40, y1: 80, x2: 15, y2: 75 },
                ].map((line, i) => (
                  <motion.line
                    key={i}
                    x1={`${line.x1}%`}
                    y1={`${line.y1}%`}
                    x2={`${line.x2}%`}
                    y2={`${line.y2}%`}
                    stroke="url(#pulseGradient)"
                    strokeWidth="2"
                    strokeDasharray="4 4"
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
            </div>

            {/* Stats overlay */}
            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-orange-500/20">
              <div className="text-center">
                <div className="text-3xl text-orange-500 mb-1" style={{ fontWeight: 700 }}>
                  1,247
                </div>
                <div className="text-xs text-gray-400">Discovered Assets</div>
              </div>
              <div className="text-center">
                <div className="text-3xl text-amber-500 mb-1" style={{ fontWeight: 700 }}>
                  89
                </div>
                <div className="text-xs text-gray-400">Shadow IT Found</div>
              </div>
              <div className="text-center">
                <div className="text-3xl text-red-500 mb-1" style={{ fontWeight: 700 }}>
                  23
                </div>
                <div className="text-xs text-gray-400">Critical Exposures</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. HOW ASM WORKS */}
      <section className="relative py-32 md:py-40 overflow-hidden bg-[#0a0e1a]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 md:px-12">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl mb-20 text-center text-white"
            style={{ fontWeight: 700 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            How ASM <span className="text-orange-500">Works</span>
          </motion.h2>

          {/* Vertical timeline with flowing connectors */}
          <div className="relative">
            {/* Vertical glowing line */}
            <div className="absolute left-8 md:left-12 top-8 bottom-8 w-px bg-gradient-to-b from-orange-500/20 via-orange-500/50 to-orange-500/20" />

            <div className="space-y-12">
              {[
                {
                  icon: Search,
                  title: "Discover",
                  desc: "Scan the entire internet to find all assets tied to your organization",
                  color: "from-orange-500",
                },
                {
                  icon: Layers,
                  title: "Classify",
                  desc: "Categorize assets by type, criticality, and ownership automatically",
                  color: "from-amber-500",
                },
                {
                  icon: Activity,
                  title: "Analyze",
                  desc: "Assess vulnerabilities, misconfigurations, and potential attack vectors",
                  color: "from-orange-500",
                },
                {
                  icon: Target,
                  title: "Prioritize",
                  desc: "Rank risks based on exploitability, impact, and threat intelligence",
                  color: "from-amber-500",
                },
                {
                  icon: Shield,
                  title: "Remediate",
                  desc: "Guide security teams with actionable remediation workflows",
                  color: "from-orange-500",
                },
              ].map((step, i) => (
                <WorkflowStep key={i} step={step} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHY ASM MATTERS */}
      <section className="relative py-32 md:py-40 overflow-hidden bg-gradient-to-b from-[#0a0e1a] to-[#0f1520]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
          <motion.h2
            className="text-5xl sm:text-6xl md:text-7xl mb-20 text-center text-white"
            style={{ fontWeight: 800, letterSpacing: "-0.02em" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Why ASM <span className="text-orange-500">Matters</span>
          </motion.h2>

          <div className="space-y-16">
            {[
              {
                title: "Reduce Blind Spots",
                desc: "You can't protect what you don't know exists. ASM ensures complete visibility.",
              },
              {
                title: "Identify Exposures Before Attackers Do",
                desc: "Discover vulnerabilities from the attacker's perspective—before they're exploited.",
              },
              {
                title: "Stay Ahead of Zero-Day Exploitation",
                desc: "Continuous monitoring catches new threats as your attack surface evolves.",
              },
              {
                title: "Automated Monitoring 24/7",
                desc: "No manual scanning needed—ASM works around the clock to protect your perimeter.",
              },
            ].map((benefit, i) => (
              <ImpactItem key={i} benefit={benefit} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. INTEGRATION & AUTOMATION */}
      <section className="relative py-32 md:py-40 overflow-hidden bg-[#0f1520]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl mb-16 text-center text-white"
            style={{ fontWeight: 700 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Integration & <span className="text-orange-500">Automation</span>
          </motion.h2>

          {/* Icons with animated neon lines */}
          <div className="relative">
            <div className="flex justify-center items-center gap-16 md:gap-24">
              {[
                { icon: Network, label: "API" },
                { icon: Database, label: "SIEM" },
                { icon: GitBranch, label: "SOAR" },
              ].map((item, i) => (
                <IntegrationIcon key={i} item={item} index={i} totalItems={3} />
              ))}
            </div>

            {/* Connecting animated lines */}
            <svg className="absolute inset-0 w-full h-full -z-10" style={{ pointerEvents: "none" }}>
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(249, 115, 22, 0)" />
                  <stop offset="50%" stopColor="rgba(249, 115, 22, 0.6)" />
                  <stop offset="100%" stopColor="rgba(249, 115, 22, 0)" />
                </linearGradient>
              </defs>
              <motion.line
                x1="25%"
                y1="50%"
                x2="50%"
                y2="50%"
                stroke="url(#lineGrad)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 0.5 }}
              />
              <motion.line
                x1="50%"
                y1="50%"
                x2="75%"
                y2="50%"
                stroke="url(#lineGrad)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.3, repeatDelay: 0.5 }}
              />
            </svg>
          </div>
        </div>
      </section>

      {/* 8. USE CASES */}
      <section className="relative py-32 md:py-40 overflow-hidden bg-gradient-to-b from-[#0f1520] to-[#0a0e1a]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl mb-16 text-center text-white"
            style={{ fontWeight: 700 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Use <span className="text-orange-500">Cases</span>
          </motion.h2>

          {/* Horizontal scroll panels */}
          <div className="relative">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Building,
                  title: "Enterprise ASM",
                  desc: "Comprehensive visibility across global infrastructure and subsidiaries",
                },
                {
                  icon: Cloud,
                  title: "Cloud Environment ASM",
                  desc: "Monitor multi-cloud deployments and cloud-native applications",
                },
                {
                  icon: Eye,
                  title: "Shadow IT Management",
                  desc: "Discover unauthorized services and rogue infrastructure",
                },
                {
                  icon: Network,
                  title: "Supply Chain Exposure",
                  desc: "Track third-party and vendor attack surface risks",
                },
              ].map((useCase, i) => (
                <UseCasePanel key={i} useCase={useCase} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <ServicePricing
        title={servicePlans["asm"].title}
        description={servicePlans["asm"].description}
        plans={servicePlans["asm"].plans}
        highlightColor="orange"
      />

      {/* 9. FINAL CTA */}
      <section className="relative py-40 md:py-48 overflow-hidden bg-[#0a0e1a]">
        {/* Slow-moving cyber particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-orange-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                x: [0, Math.random() * 30 - 15, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-6 sm:px-8 md:px-12 max-w-5xl mx-auto">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-12 text-white"
            style={{ fontWeight: 800, letterSpacing: "-0.02em" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            Take Control of Your
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
              Attack Surface Today
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
              className="px-12 py-6 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xl"
              style={{ fontWeight: 700 }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 40px rgba(249, 115, 22, 0.7)",
              }}
              whileTap={{ scale: 0.98 }}
              onClick={openCustomerLogin}
            >
              Start External Scan
            </motion.button>

            <motion.button
              className="px-12 py-6 rounded-lg border border-orange-500/50 text-orange-400 text-xl backdrop-blur-sm"
              style={{ fontWeight: 700 }}
              whileHover={{
                scale: 1.02,
                backgroundColor: "rgba(249, 115, 22, 0.1)",
                borderColor: "rgba(249, 115, 22, 0.8)",
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate(ROUTES.CONTACT)}
            >
              Talk to an Expert
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
              <CheckCircle className="w-5 h-5 text-orange-500" strokeWidth={2} />
              <span>Continuous discovery</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-orange-500" strokeWidth={2} />
              <span>Zero blind spots</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-orange-500" strokeWidth={2} />
              <span>Instant deployment</span>
            </div>
          </motion.div>
        </div>
      </section>




    </div>
  );
};

// Capability Bar Component
const CapabilityBar: React.FC<{ capability: any; index: number }> = ({ capability, index }) => {
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="relative bg-gradient-to-r from-orange-500/10 to-transparent backdrop-blur-sm border-l-4 border-orange-500/50 rounded-r-xl p-6 transition-all duration-300 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/20">
        {/* Glowing effect on hover */}
        <div className="absolute inset-0 rounded-r-xl bg-gradient-to-r from-orange-500/0 to-orange-500/0 opacity-0 group-hover:from-orange-500/5 group-hover:to-orange-500/10 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative z-10 flex items-start gap-6">
          <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-orange-500/30 to-amber-500/30 flex items-center justify-center flex-shrink-0">
            <capability.icon className="w-7 h-7 text-orange-500" strokeWidth={1.5} />
          </div>

          <div className="flex-1">
            <h3 className="text-2xl text-white mb-2" style={{ fontWeight: 600 }}>
              {capability.title}
            </h3>
            <p className="text-base text-gray-400 leading-relaxed" style={{ fontWeight: 300 }}>
              {capability.desc}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Cyber Node Component
const CyberNode: React.FC<{ node: any; index: number }> = ({ node, index }) => {
  const sizeMap = {
    small: "w-8 h-8",
    medium: "w-12 h-12",
    large: "w-16 h-16",
  };

  const colorMap = {
    critical: "from-red-500/40 to-orange-500/40 border-red-500/60",
    high: "from-orange-500/40 to-amber-500/40 border-orange-500/60",
    medium: "from-amber-500/40 to-yellow-500/40 border-amber-500/60",
    low: "from-yellow-500/40 to-green-500/40 border-green-500/60",
  };

  return (
    <motion.div
      className={`absolute ${sizeMap[node.size as keyof typeof sizeMap]} rounded-full bg-gradient-to-br ${colorMap[node.type as keyof typeof colorMap]} backdrop-blur-sm border-2`}
      style={{
        left: `${node.x}%`,
        top: `${node.y}%`,
        transform: "translate(-50%, -50%)",
      }}
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      animate={{
        boxShadow: [
          `0 0 10px rgba(249, 115, 22, 0.3)`,
          `0 0 20px rgba(249, 115, 22, 0.6)`,
          `0 0 10px rgba(249, 115, 22, 0.3)`,
        ],
      }}
      whileHover={{ scale: 1.2 }}
    />
  );
};

// Workflow Step Component
const WorkflowStep: React.FC<{ step: any; index: number }> = ({ step, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.8 });

  return (
    <motion.div
      ref={ref}
      className="relative flex items-start gap-6 md:gap-8"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      {/* Icon node */}
      <motion.div
        className={`relative z-10 w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br ${step.color} to-amber-500 flex items-center justify-center flex-shrink-0`}
        animate={{
          boxShadow: isInView
            ? [
              "0 0 15px rgba(249, 115, 22, 0.4)",
              "0 0 30px rgba(249, 115, 22, 0.7)",
              "0 0 15px rgba(249, 115, 22, 0.4)",
            ]
            : "0 0 0px rgba(249, 115, 22, 0)",
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <step.icon className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={1.5} />
      </motion.div>

      <div className="flex-1 pt-3">
        <h3 className="text-2xl md:text-3xl text-white mb-3" style={{ fontWeight: 700 }}>
          {step.title}
        </h3>
        <p
          className="text-base md:text-lg text-gray-400 leading-relaxed"
          style={{ fontWeight: 300 }}
        >
          {step.desc}
        </p>
      </div>
    </motion.div>
  );
};

// Impact Item Component
const ImpactItem: React.FC<{ benefit: any; index: number }> = ({ benefit, index }) => {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
    >
      <h3
        className="text-3xl md:text-4xl text-white mb-4 relative inline-block"
        style={{ fontWeight: 700 }}
      >
        {benefit.title}
        <motion.div
          className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
        />
      </h3>
      <p className="text-xl text-gray-400 mt-6 leading-relaxed" style={{ fontWeight: 300 }}>
        {benefit.desc}
      </p>
    </motion.div>
  );
};

// Integration Icon Component
const IntegrationIcon: React.FC<{ item: any; index: number; totalItems: number }> = ({
  item,
  index,
}) => {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <motion.div
        className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-gradient-to-br from-orange-500/20 to-amber-500/20 backdrop-blur-sm border-2 border-orange-500/40 flex flex-col items-center justify-center gap-3"
        animate={{
          borderColor: [
            "rgba(249, 115, 22, 0.4)",
            "rgba(249, 115, 22, 0.8)",
            "rgba(249, 115, 22, 0.4)",
          ],
        }}
        transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        <item.icon className="w-10 h-10 md:w-12 md:h-12 text-orange-500" strokeWidth={1.5} />
        <span className="text-sm text-gray-300">{item.label}</span>
      </motion.div>
    </motion.div>
  );
};

// Use Case Panel Component
const UseCasePanel: React.FC<{ useCase: any; index: number }> = ({ useCase, index }) => {
  const IconComponent = useCase.icon || Box;

  return (
    <motion.div
      className="group relative h-full"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="relative h-full bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm border border-orange-500/20 rounded-2xl p-8 transition-all duration-300 hover:border-orange-500/60 hover:shadow-lg hover:shadow-orange-500/20">
        <div className="mb-6">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500/30 to-amber-500/30 flex items-center justify-center">
            <IconComponent className="w-8 h-8 text-orange-500" strokeWidth={1.5} />
          </div>
        </div>

        <h3 className="text-2xl text-white mb-4" style={{ fontWeight: 600 }}>
          {useCase.title}
        </h3>

        <p className="text-base text-gray-400 leading-relaxed" style={{ fontWeight: 300 }}>
          {useCase.desc}
        </p>
      </div>
    </motion.div>
  );
};

// Placeholder for Building icon
const Building: React.FC<{ className?: string; strokeWidth?: number }> = ({
  className,
  strokeWidth = 2,
}) => <Server className={className} strokeWidth={strokeWidth} />;

export default ASMPage;
