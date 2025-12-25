import { motion } from "framer-motion";
import { useOutletContext } from "react-router-dom";
import {
  Code2,
  Shield,
  Lock,
  GitBranch,
  Eye,
  Zap,
  CheckCircle2,
  ArrowRight,
  RefreshCw,
  Terminal,
  Server,
  Cloud,
  Bell,
  BarChart3,
  Clock,
  Users,
} from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";


interface ContinuousSecurityTestingPageProps {
  onContactClick?: () => void;
  onHomeClick?: () => void;
  onAboutClick?: () => void;
  onUnderAttackClick?: () => void;
  onSignInClick?: () => void;
  onIndustriesClick?: () => void;
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
  onERPManagementClick?: () => void;
  onCRMClick?: () => void;
  onHRMClick?: () => void;
  onIndustrialClick?: () => void;
  onConstructionClick?: () => void;
  onLogisoft360Click?: () => void;
  onCustomerLoginClick?: () => void;
  onAdminLoginClick?: () => void;
  onStudentMemberLoginClick?: () => void;
  onCustomerSignUpClick?: () => void;
  onStudentMemberSignUpClick?: () => void;
  onSignUpModalOpen?: () => void;
  onThreatMapClick?: () => void;
  onSecurityTestClick?: () => void;
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
  onXDRClick?: () => void;
  onRansomwareProtectionClick?: () => void;
  onDeviceSecurityHardeningClick?: () => void;
  onUIUXDesignClick?: () => void;
  onWebDevelopmentClick?: () => void;
  onMobileDevelopmentClick?: () => void;
  onWhatsNewClick?: () => void;
  onCommunityClick?: () => void;
  onWebAppPenTestClick?: () => void;
  onMobileAppPenTestClick?: () => void;
  onNetworkPenTestClick?: () => void;
  onCloudPenTestClick?: () => void;
  onAPISecurityTestingClick?: () => void;
  onWirelessNetworkPenTestClick?: () => void;
  onRedTeamAssessmentsClick?: () => void;
  onSocialEngineeringClick?: () => void;
  onZeroDayDetectionClick?: () => void;
  onMalwareAnalysisClick?: () => void;
  onVulnerabilityResearchClick?: () => void;
  onEthicalExploitDevelopmentClick?: () => void;
  onContinuousSecurityTestingClick?: () => void;
  onPrivacyClick?: () => void;
  onTermsClick?: () => void;
  onCookieClick?: () => void;
  onDoNotSellClick?: () => void;
  onPublicSectorClick?: () => void;
}

interface LoginContext {
  openCustomerLogin: () => void;
}

export default function ContinuousSecurityTestingPage({
  onContactClick,
  onHomeClick,
  onAboutClick,
  onUnderAttackClick,
  onSignInClick,
  onIndustriesClick,
  onLocationsClick,
  onEthicsComplianceClick,
  onCorporateResponsibilityClick,
  onCollaborationDonationClick,
  onPrecisionAISecurityClick,
  onAccelerateTransformationClick,
  onAwardsRecognitionClick,
  onCustomerStoriesClick,
  onCTFProgramClick,
  onCareersOverviewClick,
  onEventsClick,
  onERPManagementClick,
  onCRMClick,
  onHRMClick,
  onIndustrialClick,
  onConstructionClick,
  onLogisoft360Click,
  onCustomerLoginClick,
  onAdminLoginClick,
  onStudentMemberLoginClick,
  onCustomerSignUpClick,
  onStudentMemberSignUpClick,
  onSignUpModalOpen,
  onThreatMapClick,
  onSecurityTestClick,
  onCloudNetworkSecurityClick,
  onIDSIPSClick,
  onWebPhishingSecurityClick,
  onSecureWorkDeviceClick,
  onOTSecurityClick,
  onCSPMClick,
  onASPMClick,
  onWAASClick,
  onCWPClick,
  onDSPMClick,
  onMDRClick,
  onCDRClick,
  onASMClick,
  onSIEMClick,
  onSOCAutomationClick,
  onEPPClick,
  onXDRClick,
  onRansomwareProtectionClick,
  onDeviceSecurityHardeningClick,
  onUIUXDesignClick,
  onWebDevelopmentClick,
  onMobileDevelopmentClick,
  onWhatsNewClick,
  onCommunityClick,
  onWebAppPenTestClick,
  onMobileAppPenTestClick,
  onNetworkPenTestClick,
  onCloudPenTestClick,
  onAPISecurityTestingClick,
  onWirelessNetworkPenTestClick,
  onRedTeamAssessmentsClick,
  onSocialEngineeringClick,
  onZeroDayDetectionClick,
  onMalwareAnalysisClick,
  onVulnerabilityResearchClick,
  onEthicalExploitDevelopmentClick,
  onContinuousSecurityTestingClick,
  onPrivacyClick,
  onTermsClick,
  onCookieClick,
  onDoNotSellClick,
  onPublicSectorClick,
}: ContinuousSecurityTestingPageProps) {
  const { openCustomerLogin } = useOutletContext<LoginContext>();
  // Color palette: DevSecOps Green + Cyan for flow
  const accentGreen = "#00F5A0"; // Bright security green
  const accentCyan = "#00D4FF"; // Flow/pipeline cyan
  const darkBg = "#0A0A0A";
  const cardBg = "#111111";

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-hidden">
      {/* Header */}


      {/* Hero Section with 7cm spacing */}
      <section
        className="relative min-h-screen flex items-center justify-center px-4"
        style={{ paddingTop: "7cm" }}
      >
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-[0.03]">
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(${accentCyan}22 1px, transparent 1px), linear-gradient(90deg, ${accentCyan}22 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
            animate={{
              backgroundPosition: ["0px 0px", "50px 50px"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        {/* Flow Animation */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <div className="flex items-center gap-8">
            {["Code", "Build", "Test", "Deploy", "Monitor"].map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
                className="text-6xl font-mono"
                style={{ color: accentCyan }}
              >
                {stage}
                {index < 4 && (
                  <motion.span
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.2 + 0.3,
                      repeat: Infinity,
                      repeatDelay: 3,
                    }}
                  >
                    {" → "}
                  </motion.span>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl mb-8 leading-tight">
              Secure Every Line of Code —{" "}
              <span style={{ color: accentGreen }}>Before It Reaches Production</span>
            </h1>

            <p className="text-2xl md:text-3xl text-slate-400 mb-12 max-w-4xl mx-auto leading-relaxed">
              Continuous security testing integrated directly into your DevOps pipeline.
              <br />
              Detect vulnerabilities early, automate security checks, and ship with confidence.
            </p>

            <motion.button
              className="px-10 py-5 rounded-lg text-xl transition-all duration-300"
              style={{
                background: `linear-gradient(135deg, ${accentGreen}, ${accentCyan})`,
                boxShadow: `0 0 40px ${accentGreen}30`,
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: `0 0 60px ${accentGreen}50`,
              }}
              onClick={openCustomerLogin}
            >
              🔒 Integrate Security Into Your DevOps Pipeline
            </motion.button>
          </motion.div>
        </div>

        {/* Pulse Effect */}
        <motion.div
          className="absolute bottom-20 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
          style={{ background: accentCyan }}
          animate={{
            scale: [1, 2, 1],
            opacity: [1, 0, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
      </section>

      {/* What Is Continuous Security Testing */}
      <section className="relative py-32 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl mb-8 relative inline-block">
              What Is Continuous Security Testing (DevSecOps)
              <motion.div
                className="absolute bottom-0 left-0 h-1 rounded"
                style={{ background: accentGreen }}
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
              />
            </h2>

            <p className="text-2xl text-slate-300 leading-relaxed mt-12">
              Continuous Security Testing embeds automated security checks into every stage of the
              development lifecycle — from code commit to production deployment — ensuring security
              is <span style={{ color: accentGreen }}>proactive, not reactive</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works - Pipeline Section */}
      <section className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl mb-6">How It Works</h2>
            <p className="text-xl text-slate-400">
              Security embedded at every stage of your pipeline
            </p>
          </motion.div>

          {/* Vertical Pipeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Pipeline Line */}
            <motion.div
              className="absolute left-12 top-0 bottom-0 w-1 rounded"
              style={{ background: `linear-gradient(to bottom, ${accentCyan}, ${accentGreen})` }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
            />

            {/* Pipeline Stages */}
            <div className="space-y-16">
              {[
                {
                  icon: Code2,
                  title: "Code Commit",
                  desc: "Static code security analysis (SAST)",
                  color: accentCyan,
                },
                {
                  icon: Server,
                  title: "Build Phase",
                  desc: "Dependency & supply chain scanning",
                  color: accentCyan,
                },
                {
                  icon: Eye,
                  title: "Test Phase",
                  desc: "Dynamic testing (DAST) & API security checks",
                  color: accentGreen,
                },
                {
                  icon: Lock,
                  title: "Pre-Deploy",
                  desc: "Configuration & secrets detection",
                  color: accentGreen,
                },
                {
                  icon: Cloud,
                  title: "Production",
                  desc: "Runtime monitoring & feedback loop",
                  color: accentGreen,
                },
              ].map((stage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative flex items-start gap-8"
                >
                  {/* Node */}
                  <motion.div
                    className="relative z-10 w-24 h-24 rounded-full border-4 flex items-center justify-center"
                    style={{
                      borderColor: stage.color,
                      background: darkBg,
                    }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.2 + 0.2,
                      type: "spring",
                    }}
                  >
                    <stage.icon className="w-10 h-10" style={{ color: stage.color }} />
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 pt-4">
                    <h3 className="text-3xl mb-3" style={{ color: stage.color }}>
                      {stage.title}
                    </h3>
                    <p className="text-xl text-slate-400">{stage.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities - Text Grid */}
      <section className="relative py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl mb-6">Key Capabilities</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              "Automated Vulnerability Detection",
              "CI/CD Integration (Git, GitLab, GitHub, Jenkins)",
              "Real-Time Security Feedback for Developers",
              "Policy-Based Security Gates",
              "False Positive Reduction with Context Awareness",
            ].map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className="w-2 h-2 rounded-full mt-3"
                    style={{ background: accentGreen }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1 + 0.2,
                      type: "spring",
                    }}
                  />
                  <p className="text-2xl text-slate-300">{capability}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why DevSecOps Matters - Split Screen */}
      <section className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl mb-6">Why DevSecOps Matters</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Without DevSecOps */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-3xl text-red-500 mb-8">Without DevSecOps</h3>
              {[
                "Vulnerabilities found in production",
                "High remediation costs",
                "Slow, risky deployments",
                "Dev vs Sec silos",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-2xl text-slate-400 flex items-center gap-4"
                >
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  {item}
                </motion.div>
              ))}
            </motion.div>

            {/* With DevSecOps */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-3xl mb-8" style={{ color: accentGreen }}>
                With DevSecOps
              </h3>
              {[
                "Fix vulnerabilities before release",
                "Reduce remediation costs",
                "Accelerate secure deployments",
                "Improve collaboration between Dev, Sec, Ops",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-2xl text-slate-300 flex items-center gap-4"
                >
                  <CheckCircle2 className="w-6 h-6" style={{ color: accentGreen }} />
                  {item}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Continuous Security Loop */}
      <section className="relative py-32 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl mb-6">Continuous Security Loop</h2>
            <p className="text-2xl text-slate-400">
              Security never stops — it evolves with your application.
            </p>
          </motion.div>

          {/* Circular Loop Animation */}
          <div className="relative w-full max-w-2xl mx-auto aspect-square">
            {/* Center Circle */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-4 flex items-center justify-center"
              style={{
                borderColor: accentGreen,
                background: darkBg,
              }}
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <RefreshCw className="w-12 h-12" style={{ color: accentGreen }} />
            </motion.div>

            {/* Loop Steps */}
            {[
              { label: "Detect", angle: 0 },
              { label: "Validate", angle: 60 },
              { label: "Fix", angle: 120 },
              { label: "Re-test", angle: 180 },
              { label: "Deploy", angle: 240 },
              { label: "Monitor", angle: 300 },
            ].map((step, index) => {
              const radius = 200;
              const angleRad = (step.angle * Math.PI) / 180;
              const x = Math.cos(angleRad) * radius;
              const y = Math.sin(angleRad) * radius;

              return (
                <motion.div
                  key={index}
                  className="absolute top-1/2 left-1/2 w-24 h-24 rounded-full border-2 flex items-center justify-center text-center font-mono"
                  style={{
                    borderColor: accentCyan,
                    background: cardBg,
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    type: "spring",
                  }}
                >
                  {step.label}
                </motion.div>
              );
            })}

            {/* Animated Circle Path */}
            <motion.svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 400 400"
              style={{ transform: "rotate(-90deg)" }}
            >
              <motion.circle
                cx="200"
                cy="200"
                r="200"
                fill="none"
                stroke={accentCyan}
                strokeWidth="2"
                strokeDasharray="1256"
                initial={{ strokeDashoffset: 1256 }}
                whileInView={{ strokeDashoffset: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </motion.svg>
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="relative py-32 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl mb-6">Who Is This For</h2>
          </motion.div>

          <div className="space-y-8">
            {[
              { icon: Terminal, label: "DevOps Teams" },
              { icon: Cloud, label: "Cloud-Native Companies" },
              { icon: Server, label: "SaaS Platforms" },
              { icon: Shield, label: "Fintech & Critical Applications" },
              { icon: Users, label: "Enterprises adopting CI/CD" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-6 text-3xl text-slate-300"
              >
                <motion.div
                  className="w-16 h-16 rounded-lg flex items-center justify-center"
                  style={{ background: `${accentGreen}20` }}
                  whileHover={{ scale: 1.1 }}
                >
                  <item.icon className="w-8 h-8" style={{ color: accentGreen }} />
                </motion.div>
                {item.label}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl mb-6">Pricing</h2>
            <p className="text-xl text-slate-400">Transparent pricing for continuous security</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative p-8 rounded-lg border"
              style={{
                borderColor: `${accentCyan}30`,
                background: `${accentCyan}05`,
              }}
            >
              <h3 className="text-2xl mb-2">Starter</h3>
              <div className="text-4xl mb-2" style={{ color: accentCyan }}>
                Custom
              </div>
              <div className="text-slate-400 mb-6">/ month</div>
              <p className="text-slate-400 mb-8">For small to growing development teams</p>

              <div className="space-y-3 text-slate-300 mb-8">
                {[
                  "Continuous SAST & DAST scanning",
                  "Dependency & SCA scanning",
                  "CI/CD pipeline integration",
                  "Critical vulnerability alerts",
                  "Basic risk prioritization",
                  "Monthly security posture report",
                  "Standard Support (9–5)",
                  "Up to 10 repositories / pipelines",
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle2
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: accentGreen }}
                    />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className="w-full py-3 rounded-lg border transition-all duration-300"
                style={{ borderColor: accentCyan, color: accentCyan }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = `${accentCyan}20`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                }}
                onClick={openCustomerLogin}
              >
                Get Started
              </button>
            </motion.div>

            {/* Professional */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative p-8 rounded-lg border"
              style={{
                borderColor: accentGreen,
                background: `${accentGreen}05`,
              }}
            >


              <h3 className="text-2xl mb-2">Professional</h3>
              <div className="text-4xl mb-2" style={{ color: accentGreen }}>
                Custom
              </div>
              <div className="text-slate-400 mb-6">/ month</div>
              <p className="text-slate-400 mb-8">For scaling DevSecOps teams</p>

              <div className="space-y-3 text-slate-300 mb-8">
                {[
                  "Everything in Starter +",
                  "IaC & container security scanning",
                  "Automated policy enforcement",
                  "Advanced risk correlation",
                  "Real-time security dashboard",
                  "API access & webhook automation",
                  "Custom security gates",
                  "Weekly security & compliance reports",
                  "Priority 24/7 Support",
                  "Up to 50 repositories / pipelines",
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle2
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: accentGreen }}
                    />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className="w-full py-3 rounded-lg transition-all duration-300"
                style={{ background: accentGreen, color: darkBg }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = `0 10px 30px ${accentGreen}40`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
                onClick={openCustomerLogin}
              >
                Get Started
              </button>
            </motion.div>

            {/* Enterprise */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative p-8 rounded-lg border"
              style={{
                borderColor: `${accentCyan}30`,
                background: `${accentCyan}05`,
              }}
            >
              <h3 className="text-2xl mb-2">Enterprise DevSecOps Platform</h3>
              <div className="text-4xl mb-2" style={{ color: accentGreen }}>
                Custom
              </div>
              <div className="text-slate-400 mb-6">Pricing</div>
              <p className="text-slate-400 mb-8">For large engineering organizations</p>

              <div className="space-y-3 text-slate-300 mb-8">
                {[
                  "Everything in Professional +",
                  "Unlimited repositories & pipelines",
                  "Multi-cloud & multi-region coverage",
                  "Dedicated AppSec engineer",
                  "Custom frameworks (NIST, ISO, SOC 2)",
                  "Executive dashboards & SLAs",
                  "Threat modeling & secure design reviews",
                  "Secure SDLC consulting",
                  "Ongoing tuning & optimization",
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle2
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: accentGreen }}
                    />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className="w-full py-3 rounded-lg border transition-all duration-300"
                style={{ borderColor: accentGreen, color: accentGreen }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = `${accentGreen}20`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                }}
                onClick={openCustomerLogin}
              >
                Get Started
              </button>
            </motion.div>
          </div>

          {/* Add-Ons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 p-8 rounded-lg border"
            style={{
              borderColor: `${accentGreen}30`,
              background: `${accentGreen}05`,
            }}
          >
            <h3 className="text-2xl mb-6" style={{ color: accentGreen }}>
              Add-Ons
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-slate-300">
              {[
                {
                  name: "Additional repositories/pipelines",
                  price: "Custom",
                },
                {
                  name: "Secrets scanning & key leakage detection",
                  price: "Custom",
                },
                {
                  name: "SBOM generation & monitoring",
                  price: "Custom",
                },
                {
                  name: "Compliance evidence automation",
                  price: "Custom",
                },
                {
                  name: "Secure code review sessions",
                  price: "Custom",
                },
              ].map((addon, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-4 rounded border border-slate-800"
                >
                  <span>{addon.name}</span>
                  <span className="font-mono" style={{ color: accentGreen }}>
                    {addon.price}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl mb-12 leading-tight">
              Build Fast. Deploy Secure.{" "}
              <span style={{ color: accentGreen }}>Repeat Confidently.</span>
            </h2>

            <motion.button
              className="px-10 py-5 rounded-lg text-xl transition-all duration-300"
              style={{
                background: `linear-gradient(135deg, ${accentGreen}, ${accentCyan})`,
                boxShadow: `0 0 40px ${accentGreen}30`,
              }}
              animate={{
                boxShadow: [
                  `0 0 40px ${accentGreen}30`,
                  `0 0 60px ${accentGreen}50`,
                  `0 0 40px ${accentGreen}30`,
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              whileHover={{
                scale: 1.05,
              }}
              onClick={openCustomerLogin}
            >
              🔒 Integrate Security Into Your DevOps Pipeline
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}

    </div>
  );
}
