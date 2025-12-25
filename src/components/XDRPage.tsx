import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Activity,
  Network,
  Brain,
  Target,
  CheckCircle,
  Search,
  FileText,
  Users,
  Zap,
  ChevronRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes";
import { ServicePricing } from "./shared/ServicePricing";
import { servicePlans } from "../data/servicePlans";



interface XDRPageProps {
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
  onRansomwareProtectionClick?: () => void;
  onXDRClick?: () => void;
}

const XDRPage: React.FC<XDRPageProps> = (props) => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#0a0e1a] overflow-x-hidden">


      {/* HERO BANNER */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Dark gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e1a] via-[#0d1428] to-[#0a0e1a]" />

        {/* Animated grid */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(rgba(16, 185, 129, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16, 185, 129, 0.15) 1px, transparent 1px)
            `,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Glowing orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-emerald-500/10 blur-[120px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-green-500/10 blur-[140px]"
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
              className="absolute w-1 h-1 bg-emerald-400 rounded-full"
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

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 sm:px-8 md:px-12 max-w-7xl mx-auto pt-56">
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
              <div className="w-20 h-20 rounded-full border-2 border-emerald-500/50 flex items-center justify-center">
                <Network className="w-10 h-10 text-emerald-400" strokeWidth={1.5} />
              </div>
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-emerald-500/30"
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
            <span className="text-white">Extended Detection</span>
            <br />
            <span className="text-white">& Response</span>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
              Powered by AI
            </span>
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-16 max-w-5xl mx-auto leading-relaxed"
            style={{ fontWeight: 300 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Detect and respond to threats faster with comprehensive visibility across
            <br className="hidden sm:block" />
            endpoints, networks, clouds, and applications. Stop sophisticated attacks
            <br className="hidden sm:block" />
            with AI-driven analytics and automated response.
          </motion.p>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              className="relative bg-gradient-to-br from-emerald-500/10 to-green-500/5 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="text-4xl text-emerald-400 mb-2" style={{ fontWeight: 700 }}>
                10x
              </div>
              <p className="text-base text-gray-300">Faster threat detection</p>
            </motion.div>

            <motion.div
              className="relative bg-gradient-to-br from-emerald-500/10 to-green-500/5 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <div className="text-4xl text-emerald-400 mb-2" style={{ fontWeight: 700 }}>
                95%
              </div>
              <p className="text-base text-gray-300">Reduction in false positives</p>
            </motion.div>

            <motion.div
              className="relative bg-gradient-to-br from-emerald-500/10 to-green-500/5 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="text-4xl text-emerald-400 mb-2" style={{ fontWeight: 700 }}>
                70%
              </div>
              <p className="text-base text-gray-300">Decrease in MTTR</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* THE CORTEX XDR SOLUTION SECTION */}
      <section className="relative py-32 md:py-40 overflow-hidden bg-gradient-to-br from-[#0d3d2f] via-[#0a2820] to-[#0d3d2f]">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(rgba(16, 185, 129, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16, 185, 129, 0.2) 1px, transparent 1px)
            `,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Content */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2
                className="text-4xl sm:text-5xl md:text-6xl text-white leading-tight"
                style={{ fontWeight: 700 }}
              >
                Outpace attackers with a platform that evolves to stop modern threats
              </h2>

              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  When evaluating security products, consider whether they can stop future threats
                  or if they're focused on the endpoint-only attacks of the past. Because results
                  matter, carefully review{" "}
                  <span className="text-emerald-400" style={{ fontWeight: 600 }}>
                    industry tests
                  </span>{" "}
                  and{" "}
                  <span className="text-emerald-400" style={{ fontWeight: 600 }}>
                    real-world results
                  </span>
                  .
                </p>
                <p>
                  Cortex XDR, the industry's first extended detection and response platform, gathers
                  data from any source to stop known and unknown threats.
                </p>
              </div>

              {/* Checkmarks */}
              <div className="space-y-4 pt-4">
                <motion.div
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <CheckCircle
                    className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5"
                    strokeWidth={2}
                  />
                  <p className="text-base text-gray-200">
                    Full visibility to eliminate blind spots and root out adversaries
                  </p>
                </motion.div>

                <motion.div
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <CheckCircle
                    className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5"
                    strokeWidth={2}
                  />
                  <p className="text-base text-gray-200">
                    Accelerated investigations powered by incident management and root cause
                    analysis
                  </p>
                </motion.div>

                <motion.div
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <CheckCircle
                    className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5"
                    strokeWidth={2}
                  />
                  <p className="text-base text-gray-200">
                    The industry's best combined MITRE ATT&CK protection and detection scores
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side - Features */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Feature 1: Behavioral analytics */}
              <motion.div
                className="flex items-start gap-4 p-6 bg-emerald-500/5 border border-emerald-500/20 rounded-xl hover:border-emerald-500/40 transition-all"
                whileHover={{ x: 10 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <Brain className="w-6 h-6 text-emerald-400" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-xl text-white mb-1" style={{ fontWeight: 600 }}>
                    Behavioral analytics
                  </h3>
                </div>
              </motion.div>

              {/* Feature 2: Correlation rules */}
              <motion.div
                className="flex items-start gap-4 p-6 bg-emerald-500/5 border border-emerald-500/20 rounded-xl hover:border-emerald-500/40 transition-all"
                whileHover={{ x: 10 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <Network className="w-6 h-6 text-emerald-400" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-xl text-white mb-1" style={{ fontWeight: 600 }}>
                    Correlation rules
                  </h3>
                </div>
              </motion.div>

              {/* Feature 3: Incident management */}
              <motion.div
                className="flex items-start gap-4 p-6 bg-emerald-500/5 border border-emerald-500/20 rounded-xl hover:border-emerald-500/40 transition-all"
                whileHover={{ x: 10 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-emerald-400" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-xl text-white mb-1" style={{ fontWeight: 600 }}>
                    Incident management
                  </h3>
                </div>
              </motion.div>

              {/* Feature 4: Threat hunting */}
              <motion.div
                className="flex items-start gap-4 p-6 bg-emerald-500/5 border border-emerald-500/20 rounded-xl hover:border-emerald-500/40 transition-all"
                whileHover={{ x: 10 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <Search className="w-6 h-6 text-emerald-400" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-xl text-white mb-1" style={{ fontWeight: 600 }}>
                    Threat hunting
                  </h3>
                </div>
              </motion.div>

              {/* Feature 5: Coordinated response */}
              <motion.div
                className="flex items-start gap-4 p-6 bg-emerald-500/5 border border-emerald-500/20 rounded-xl hover:border-emerald-500/40 transition-all"
                whileHover={{ x: 10 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-emerald-400" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-xl text-white mb-1" style={{ fontWeight: 600 }}>
                    Coordinated response
                  </h3>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SPEED INVESTIGATIONS WITH INCIDENT MANAGEMENT SECTION */}
      <section className="relative py-32 md:py-40 overflow-hidden bg-[#0a1520]">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(rgba(16, 185, 129, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16, 185, 129, 0.15) 1px, transparent 1px)
            `,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {/* Glowing accent */}
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-emerald-500/10 blur-[150px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-4xl sm:text-5xl md:text-6xl text-white mb-8 leading-tight"
              style={{ fontWeight: 700 }}
            >
              Speed investigations with
              <br />
              incident management
            </h2>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-12 max-w-4xl">
              By integrating data from multiple sources, you can view the root cause of alerts from
              any source, reducing investigation time by 88%. Intelligent alert grouping and alert
              deduplication simplify triage and reduce the experience required at every stage of
              security operations.
            </p>

            <div className="space-y-8">
              {/* Incident management and scoring */}
              <motion.div
                className="flex items-start gap-4 p-8 bg-gradient-to-br from-emerald-500/5 to-transparent border border-emerald-500/20 rounded-xl"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="w-7 h-7 text-emerald-400" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl text-white mb-3" style={{ fontWeight: 600 }}>
                    Incident management and scoring:
                  </h3>
                  <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                    Get a complete picture of an attack by viewing related alerts, key artifacts and
                    threat intelligence in one place. An optional incident list provides a side by
                    side view of all incidents and a deep dive into a single incident. Incident
                    scoring lets you focus on the threats that matter.
                  </p>
                </div>
              </motion.div>

              {/* ATT&CK mapping */}
              <motion.div
                className="flex items-start gap-4 p-8 bg-gradient-to-br from-emerald-500/5 to-transparent border border-emerald-500/20 rounded-xl"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="w-7 h-7 text-emerald-400" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl text-white mb-3" style={{ fontWeight: 600 }}>
                    ATT&CK mapping:
                  </h3>
                  <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                    Understand the objectives and the possible threat groups behind attacks by
                    viewing the MITRE ATT&CK tactics and techniques observed in alerts and
                    incidents.
                  </p>
                </div>
              </motion.div>

              {/* Powerful threat hunting */}
              <motion.div
                className="flex items-start gap-4 p-8 bg-gradient-to-br from-emerald-500/5 to-transparent border border-emerald-500/20 rounded-xl"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="w-7 h-7 text-emerald-400" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl text-white mb-3" style={{ fontWeight: 600 }}>
                    Powerful threat hunting:
                  </h3>
                  <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                    Build advanced queries across multiple data sources and visualize results to
                    hunt down the most covert threats.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FIND STEALTHY THREATS FAST SECTION */}
      <section className="relative py-32 md:py-40 overflow-hidden bg-gradient-to-br from-[#0d3d2f] via-[#0a2820] to-[#0d3d2f]">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(rgba(16, 185, 129, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16, 185, 129, 0.2) 1px, transparent 1px)
            `,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {/* Glowing accent */}
        <motion.div
          className="absolute bottom-0 right-1/3 w-[700px] h-[400px] rounded-full bg-green-500/10 blur-[140px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-4xl sm:text-5xl md:text-6xl text-white mb-8 leading-tight"
              style={{ fontWeight: 700 }}
            >
              Find stealthy threats fast
            </h2>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-12 max-w-4xl">
              If you can't see a threat, you can't fight it. Detect attacks anywhere in your
              environment by applying analytics and machine learning to comprehensive data from
              across your organization. Behavior analytics identify anomalies and pinpoint stealthy
              and unknown threats with unmatched accuracy.
            </p>

            <div className="space-y-8">
              {/* ML-driven analytics */}
              <motion.div
                className="flex items-start gap-4 p-8 bg-gradient-to-br from-emerald-500/5 to-transparent border border-emerald-500/20 rounded-xl"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="w-7 h-7 text-emerald-400" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl text-white mb-3" style={{ fontWeight: 600 }}>
                    ML-driven analytics:
                  </h3>
                  <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                    Detect malware, command and control, lateral movement and exfiltration by
                    profiling behavior and spotting changes in behavior indicative of attack.
                  </p>
                </div>
              </motion.div>

              {/* Out-of-the-box rules */}
              <motion.div
                className="flex items-start gap-4 p-8 bg-gradient-to-br from-emerald-500/5 to-transparent border border-emerald-500/20 rounded-xl"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="w-7 h-7 text-emerald-400" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl text-white mb-3" style={{ fontWeight: 600 }}>
                    Out-of-the-box rules:
                  </h3>
                  <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                    Instantly start detecting attacks with 400+ pre-defined rules. MITRE ATT&CK tags
                    reveal attack techniques, while custom correlation rules offer advanced
                    detection across data sources.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <ServicePricing
        title={servicePlans["xdr"].title}
        description={servicePlans["xdr"].description}
        plans={servicePlans["xdr"].plans}
        highlightColor="emerald"
      />


    </div>
  );
};

export default XDRPage;
