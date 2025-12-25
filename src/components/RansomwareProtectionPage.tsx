import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  ShieldAlert,
  Clock,
  FileCheck,
  Lock,
  AlertTriangle,
  Database,
  CheckCircle,
  FileSearch,
  Zap,
  ChevronRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes";
import { ServicePricing } from "./shared/ServicePricing";
import { servicePlans } from "../data/servicePlans";



interface RansomwareProtectionPageProps {
  onPrivacyClick?: () => void;
  onContactClick?: () => void;
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

const RansomwareProtectionPage: React.FC<RansomwareProtectionPageProps> = (props) => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#0a1520] overflow-x-hidden">


      {/* HERO BANNER */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Dark gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1520] via-[#0d1a28] to-[#0f1f30]" />

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
                <ShieldAlert className="w-10 h-10 text-emerald-400" strokeWidth={1.5} />
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
            <span className="text-white">Stop Ransomware</span>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
              Before It Encrypts
            </span>
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-16 max-w-5xl mx-auto leading-relaxed"
            style={{ fontWeight: 300 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Advanced behavioral AI detects and blocks ransomware at every stage.
            <br className="hidden sm:block" />
            Automated backup and instant file recovery ensure your business never pays the ransom.
          </motion.p>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              className="relative bg-gradient-to-br from-emerald-500/10 to-green-500/5 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-8 text-left"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                  <Clock className="w-7 h-7 text-emerald-400" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl text-white" style={{ fontWeight: 700 }}>
                  Real-Time Detection
                </h3>
              </div>
              <p className="text-base text-gray-300 leading-relaxed" style={{ fontWeight: 300 }}>
                Monitor file system activity in real time to identify ransomware behavior patterns
                before encryption begins, stopping attacks within milliseconds.
              </p>
            </motion.div>

            <motion.div
              className="relative bg-gradient-to-br from-emerald-500/10 to-green-500/5 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-8 text-left"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                  <Database className="w-7 h-7 text-emerald-400" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl text-white" style={{ fontWeight: 700 }}>
                  Automatic Rollback
                </h3>
              </div>
              <p className="text-base text-gray-300 leading-relaxed" style={{ fontWeight: 300 }}>
                Instantly restore encrypted files to their pre-attack state with automated backup
                and recovery, minimizing downtime and data loss.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MULTI-LAYER DEFENSE SECTION */}
      <section className="relative py-32 md:py-40 overflow-hidden bg-gradient-to-br from-[#0a1520] via-[#0d1a28] to-[#0f1f30]">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(rgba(16, 185, 129, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16, 185, 129, 0.2) 1px, transparent 1px)
            `,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-4xl sm:text-5xl md:text-6xl text-white mb-6"
              style={{ fontWeight: 700 }}
            >
              Multi-Layer Ransomware Defense
            </h2>
            <p className="text-lg text-gray-300 max-w-5xl mx-auto leading-relaxed">
              Our comprehensive approach combines behavioral analysis, machine learning, and
              automated response to create an impenetrable shield against ransomware attacks at
              every stage of the kill chain.
            </p>
          </motion.div>

          {/* Defense Layers Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Layer 1 */}
            <motion.div
              className="relative bg-gradient-to-br from-emerald-500/5 to-transparent border border-emerald-500/20 rounded-2xl p-8 hover:border-emerald-500/40 transition-all"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="w-16 h-16 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-emerald-400" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl text-white mb-3" style={{ fontWeight: 600 }}>
                Behavioral AI Analysis
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Advanced machine learning monitors file system behavior to detect ransomware
                patterns, including mass file encryption, suspicious registry changes, and
                unauthorized access attempts.
              </p>
            </motion.div>

            {/* Layer 2 */}
            <motion.div
              className="relative bg-gradient-to-br from-emerald-500/5 to-transparent border border-emerald-500/20 rounded-2xl p-8 hover:border-emerald-500/40 transition-all"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-16 h-16 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6">
                <FileCheck className="w-8 h-8 text-emerald-400" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl text-white mb-3" style={{ fontWeight: 600 }}>
                File Protection
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Continuous monitoring and protection of critical files and folders with automatic
                versioning. Shadow copies are maintained to enable instant recovery if encryption
                occurs.
              </p>
            </motion.div>

            {/* Layer 3 */}
            <motion.div
              className="relative bg-gradient-to-br from-emerald-500/5 to-transparent border border-emerald-500/20 rounded-2xl p-8 hover:border-emerald-500/40 transition-all"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="w-16 h-16 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6">
                <Lock className="w-8 h-8 text-emerald-400" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl text-white mb-3" style={{ fontWeight: 600 }}>
                Zero-Day Protection
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Detect and block never-before-seen ransomware variants using heuristic analysis and
                behavioral modeling, without relying on signature-based detection methods.
              </p>
            </motion.div>

            {/* Layer 4 */}
            <motion.div
              className="relative bg-gradient-to-br from-emerald-500/5 to-transparent border border-emerald-500/20 rounded-2xl p-8 hover:border-emerald-500/40 transition-all"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="w-16 h-16 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-emerald-400" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl text-white mb-3" style={{ fontWeight: 600 }}>
                Instant Response
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Automated threat containment immediately isolates infected endpoints, terminates
                malicious processes, and initiates recovery protocols without human intervention.
              </p>
            </motion.div>

            {/* Layer 5 */}
            <motion.div
              className="relative bg-gradient-to-br from-emerald-500/5 to-transparent border border-emerald-500/20 rounded-2xl p-8 hover:border-emerald-500/40 transition-all"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="w-16 h-16 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6">
                <FileSearch className="w-8 h-8 text-emerald-400" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl text-white mb-3" style={{ fontWeight: 600 }}>
                Network Threat Blocking
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Prevent ransomware from spreading across your network by detecting and blocking
                lateral movement, remote encryption attempts, and command-and-control
                communications.
              </p>
            </motion.div>

            {/* Layer 6 */}
            <motion.div
              className="relative bg-gradient-to-br from-emerald-500/5 to-transparent border border-emerald-500/20 rounded-2xl p-8 hover:border-emerald-500/40 transition-all"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <div className="w-16 h-16 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6">
                <AlertTriangle className="w-8 h-8 text-emerald-400" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl text-white mb-3" style={{ fontWeight: 600 }}>
                Threat Intelligence
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Leverage global threat intelligence feeds to identify known ransomware families,
                indicators of compromise, and emerging attack techniques in real time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AUTOMATED RECOVERY SECTION */}
      <section className="relative py-32 md:py-40 overflow-hidden bg-gradient-to-br from-[#0a1520] via-[#0d1a28] to-[#0f1f30]">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
            `,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          {/* Content */}
          <motion.div
            className="max-w-4xl mx-auto space-y-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h2
                className="text-4xl sm:text-5xl md:text-6xl text-white mb-6"
                style={{ fontWeight: 700 }}
              >
                Automated Recovery & Rollback
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                When ransomware is detected, our automated recovery system springs into action,
                restoring your files to their pre-attack state within minutes. No downtime. No data
                loss. No ransom payments.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-6">
              <motion.div
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="w-6 h-6 text-emerald-400" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-xl text-white mb-2" style={{ fontWeight: 600 }}>
                    Continuous File Versioning
                  </h3>
                  <p className="text-base text-gray-400 leading-relaxed">
                    Automatically maintain shadow copies of critical files with point-in-time
                    recovery capabilities. Roll back to any clean version before the ransomware
                    attack occurred.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="w-6 h-6 text-emerald-400" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-xl text-white mb-2" style={{ fontWeight: 600 }}>
                    One-Click Mass Restore
                  </h3>
                  <p className="text-base text-gray-400 leading-relaxed">
                    Restore thousands of encrypted files with a single click. Our recovery engine
                    identifies all affected files and restores them simultaneously, minimizing
                    business disruption.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="w-6 h-6 text-emerald-400" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-xl text-white mb-2" style={{ fontWeight: 600 }}>
                    Protected Backup Storage
                  </h3>
                  <p className="text-base text-gray-400 leading-relaxed">
                    File versions are stored in protected, immutable storage that ransomware cannot
                    access or encrypt, ensuring your recovery points remain safe even during an
                    active attack.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="relative py-32 md:py-40 overflow-hidden bg-gradient-to-br from-[#0a1520] via-[#0d1a28] to-[#0f1f30]">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
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
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-4xl sm:text-5xl md:text-6xl text-white mb-6"
              style={{ fontWeight: 700 }}
            >
              How Ransomware Protection Works
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our advanced protection system operates continuously in the background, monitoring,
              detecting, and responding to ransomware threats in real time.
            </p>
          </motion.div>

          {/* Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-emerald-500/20 border-2 border-emerald-500/50 flex items-center justify-center">
                <span className="text-emerald-400" style={{ fontWeight: 700 }}>
                  1
                </span>
              </div>
              <div className="bg-gradient-to-br from-emerald-500/5 to-transparent border border-emerald-500/20 rounded-xl p-8 pt-12 h-full">
                <h3 className="text-xl text-white mb-3" style={{ fontWeight: 600 }}>
                  Continuous Monitoring
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  AI-powered sensors monitor file system activity, process behavior, and network
                  traffic 24/7 for ransomware indicators.
                </p>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-emerald-500/20 border-2 border-emerald-500/50 flex items-center justify-center">
                <span className="text-emerald-400" style={{ fontWeight: 700 }}>
                  2
                </span>
              </div>
              <div className="bg-gradient-to-br from-emerald-500/5 to-transparent border border-emerald-500/20 rounded-xl p-8 pt-12 h-full">
                <h3 className="text-xl text-white mb-3" style={{ fontWeight: 600 }}>
                  Threat Detection
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Behavioral analysis identifies ransomware patterns including mass file encryption,
                  suspicious registry modifications, and unauthorized access.
                </p>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-emerald-500/20 border-2 border-emerald-500/50 flex items-center justify-center">
                <span className="text-emerald-400" style={{ fontWeight: 700 }}>
                  3
                </span>
              </div>
              <div className="bg-gradient-to-br from-emerald-500/5 to-transparent border border-emerald-500/20 rounded-xl p-8 pt-12 h-full">
                <h3 className="text-xl text-white mb-3" style={{ fontWeight: 600 }}>
                  Instant Blocking
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Malicious processes are terminated immediately, the endpoint is isolated, and
                  encryption is stopped before significant damage occurs.
                </p>
              </div>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-emerald-500/20 border-2 border-emerald-500/50 flex items-center justify-center">
                <span className="text-emerald-400" style={{ fontWeight: 700 }}>
                  4
                </span>
              </div>
              <div className="bg-gradient-to-br from-emerald-500/5 to-transparent border border-emerald-500/20 rounded-xl p-8 pt-12 h-full">
                <h3 className="text-xl text-white mb-3" style={{ fontWeight: 600 }}>
                  Automated Recovery
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Encrypted files are automatically restored from protected backups, returning your
                  systems to normal operation within minutes.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ServicePricing
        title={servicePlans["ransomware-protection"].title}
        description={servicePlans["ransomware-protection"].description}
        plans={servicePlans["ransomware-protection"].plans}
        highlightColor="emerald"
      />


    </div>
  );
};

export default RansomwareProtectionPage;
