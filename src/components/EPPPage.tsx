import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  FileSearch,
  Lock,
  Brain,
  Cloud,
  AlertTriangle,
  ShieldCheck,
  Activity,
  Target,
  CheckCircle,
  ChevronRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes";
import { ServicePricing } from "./shared/ServicePricing";
import { servicePlans } from "../data/servicePlans";



interface EPPPageProps {
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

const EPPPage: React.FC<EPPPageProps> = (props) => {
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
                <Shield className="w-10 h-10 text-emerald-400" strokeWidth={1.5} />
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
            <span className="text-white">Stop Attacks with</span>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
              Intelligent Machine Learning
            </span>
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-16 max-w-5xl mx-auto leading-relaxed"
            style={{ fontWeight: 300 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Traditional antivirus signatures struggle to keep pace with fast-moving threats.
            <br className="hidden sm:block" />
            Protect your environment with AI-driven security that evolves continuously to detect
            <br className="hidden sm:block" />
            and block both known and unknown malware.
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
                  <Brain className="w-7 h-7 text-emerald-400" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl text-white" style={{ fontWeight: 700 }}>
                  AI-Powered Local Analysis
                </h3>
              </div>
              <p className="text-base text-gray-300 leading-relaxed" style={{ fontWeight: 300 }}>
                Examine thousands of file attributes in real time to accurately identify and
                neutralize malicious software before it can cause harm.
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
                  <Target className="w-7 h-7 text-emerald-400" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl text-white" style={{ fontWeight: 700 }}>
                  Always Current ML Models
                </h3>
              </div>
              <p className="text-base text-gray-300 leading-relaxed" style={{ fontWeight: 300 }}>
                Leverage a high-performance machine learning framework combined with a vast,
                constantly updated training set, powered by WildFire threat intelligence, to stay
                ahead of emerging threats.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* END-TO-END PROTECTION SECTION */}
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
              Block sophisticated attacks with end-to-end protection
            </h2>
            <p className="text-lg text-gray-300 max-w-5xl mx-auto leading-relaxed">
              Our strategy detects and stops each step of an endpoint attack, from the initial
              reconnaissance and exploit to runtime analysis with our unique Behavioral Threat
              Protection Engine. A deep network inspection engine blocks the spread of network
              threats, such as worms, while a ransomware protection module blocks ransomware attacks
              as they occur.
            </p>
          </motion.div>

          {/* Phase Labels */}
          <motion.div
            className="grid grid-cols-3 gap-4 mb-8 max-w-6xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center">
              <h3 className="text-xl text-emerald-400" style={{ fontWeight: 600 }}>
                Pre-execution
              </h3>
            </div>
            <div className="text-center">
              <h3 className="text-xl text-emerald-400" style={{ fontWeight: 600 }}>
                Cloud
              </h3>
            </div>
            <div className="text-center">
              <h3 className="text-xl text-emerald-400" style={{ fontWeight: 600 }}>
                Post-execution
              </h3>
            </div>
          </motion.div>

          {/* Protection Steps */}
          <div className="relative">
            {/* Dotted line container for Pre-execution */}
            <div
              className="absolute top-32 left-0 right-0 h-px border-t-2 border-dotted border-emerald-500/30 max-w-6xl mx-auto"
              style={{ width: "calc(33.33% - 2rem)" }}
            />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-9 gap-4 lg:gap-2 max-w-6xl mx-auto">
              {/* Step 1: Reconnaissance Protection */}
              <ProtectionStep
                icon={<Shield className="w-10 h-10 text-emerald-400" strokeWidth={1.5} />}
                title="Reconnaissance Protection"
                description="Prevents vulnerability scanning used by attackers to discover potential targets"
                index={0}
              />

              {/* Arrow */}
              <div className="hidden lg:flex items-center justify-center">
                <motion.div
                  className="text-emerald-400 text-3xl"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  +
                </motion.div>
              </div>

              {/* Step 2: Technique-based Exploit Prevention */}
              <ProtectionStep
                icon={<FileSearch className="w-10 h-10 text-emerald-400" strokeWidth={1.5} />}
                title="Technique-based Exploit Prevention"
                description="Uses advanced techniques used to manipulate a process to prevent exploits"
                index={1}
              />

              {/* Arrow */}
              <div className="hidden lg:flex items-center justify-center">
                <motion.div
                  className="text-emerald-400 text-3xl"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  +
                </motion.div>
              </div>

              {/* Step 3: Kernel Protection */}
              <ProtectionStep
                icon={<Lock className="w-10 h-10 text-emerald-400" strokeWidth={1.5} />}
                title="Kernel Protection"
                description="Safeguards kernel memory and exploits targeting operating system from the kernel"
                index={2}
              />

              {/* Arrow */}
              <div className="hidden lg:flex items-center justify-center">
                <motion.div
                  className="text-emerald-400 text-3xl"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  →
                </motion.div>
              </div>

              {/* Step 4: Threat Intelligence */}
              <ProtectionStep
                icon={<Brain className="w-10 h-10 text-emerald-400" strokeWidth={1.5} />}
                title="Threat Intelligence"
                description="Prevents known threats with intel gathered from WildFire"
                index={3}
              />

              {/* Arrow */}
              <div className="hidden lg:flex items-center justify-center">
                <motion.div
                  className="text-emerald-400 text-3xl"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  →
                </motion.div>
              </div>

              {/* Step 5: AI-Driven Local Analysis */}
              <ProtectionStep
                icon={<Activity className="w-10 h-10 text-emerald-400" strokeWidth={1.5} />}
                title="AI-Driven Local Analysis"
                description="Prevents unknown threats"
                index={4}
              />

              {/* Arrow */}
              <div className="hidden lg:flex items-center justify-center">
                <motion.div
                  className="text-emerald-400 text-3xl"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  +
                </motion.div>
              </div>

              {/* Step 6: Cloud-based Analysis */}
              <ProtectionStep
                icon={<Cloud className="w-10 h-10 text-emerald-400" strokeWidth={1.5} />}
                title="Cloud-based Analysis"
                description="Detects advanced unknown threats"
                index={5}
              />

              {/* Arrow */}
              <div className="hidden lg:flex items-center justify-center">
                <motion.div
                  className="text-emerald-400 text-3xl"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  →
                </motion.div>
              </div>

              {/* Step 7: Malicious Behavior Prevention */}
              <ProtectionStep
                icon={<AlertTriangle className="w-10 h-10 text-emerald-400" strokeWidth={1.5} />}
                title="Malicious Behavior Prevention"
                description="Stops script-based attacks"
                index={6}
              />

              {/* Arrow */}
              <div className="hidden lg:flex items-center justify-center">
                <motion.div
                  className="text-emerald-400 text-3xl"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                >
                  +
                </motion.div>
              </div>

              {/* Step 8: Ransomware Protection */}
              <ProtectionStep
                icon={<ShieldCheck className="w-10 h-10 text-emerald-400" strokeWidth={1.5} />}
                title="Ransomware Protection"
                description="Blocks ransomware"
                index={7}
              />

              {/* Arrow */}
              <div className="hidden lg:flex items-center justify-center">
                <motion.div
                  className="text-emerald-400 text-3xl"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                >
                  +
                </motion.div>
              </div>

              {/* Step 9: Behavioral Threat Protection */}
              <ProtectionStep
                icon={<Target className="w-10 h-10 text-emerald-400" strokeWidth={1.5} />}
                title="Behavioral Threat Protection"
                description="Stops attacks by analyzing chains of endpoint events"
                index={8}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SHIELD ENDPOINTS SECTION */}
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
                Shield endpoints with encryption and firewall
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                To lower your risk and meet compliance requirements, you need to reduce the attack
                surface of your endpoints. Now, you can get it all with a single endpoint agent that
                blocks attacks while simultaneously delivering a full suite of endpoint protection
                features.
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
                    Device Control
                  </h3>
                  <p className="text-base text-gray-400 leading-relaxed">
                    Securely manage USB devices and protect your endpoints from malware and data
                    loss.
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
                    Firewall and Disk Encryption
                  </h3>
                  <p className="text-base text-gray-400 leading-relaxed">
                    Protect endpoint data by controlling network access and managing BitLocker® and
                    FileVault® encryption policies on your endpoints.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <ServicePricing
        title={servicePlans["epp"].title}
        description={servicePlans["epp"].description}
        plans={servicePlans["epp"].plans}
        highlightColor="emerald"
      />


    </div>
  );
};

// Protection Step Component
const ProtectionStep: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}> = ({ icon, title, description, index }) => {
  return (
    <motion.div
      className="flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <motion.div
        className="w-24 h-24 rounded-full bg-emerald-500/20 border-2 border-emerald-500/50 flex items-center justify-center mb-4"
        whileHover={{ scale: 1.1, borderColor: "rgba(16, 185, 129, 0.8)" }}
        animate={{
          boxShadow: [
            "0 0 20px rgba(16, 185, 129, 0.2)",
            "0 0 30px rgba(16, 185, 129, 0.4)",
            "0 0 20px rgba(16, 185, 129, 0.2)",
          ],
        }}
        transition={{
          boxShadow: { duration: 3, repeat: Infinity, delay: index * 0.2 },
        }}
      >
        {icon}
      </motion.div>
      <h4
        className="text-base text-white mb-2 min-h-[48px] flex items-center justify-center"
        style={{ fontWeight: 600 }}
      >
        {title}
      </h4>
      <p className="text-xs text-gray-400 leading-relaxed" style={{ fontWeight: 300 }}>
        {description}
      </p>
    </motion.div>
  );
};

export default EPPPage;
