import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  Settings,
  CheckCircle,
  AlertTriangle,
  FileCheck,
  RefreshCw,
  Layers,
  MonitorSmartphone,
  Key,
  ChevronRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes";
import { ServicePricing } from "./shared/ServicePricing";
import { servicePlans } from "../data/servicePlans";



interface DeviceSecurityHardeningPageProps {
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

const DeviceSecurityHardeningPage: React.FC<DeviceSecurityHardeningPageProps> = (props) => {
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
                <MonitorSmartphone className="w-10 h-10 text-emerald-400" strokeWidth={1.5} />
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
            <span className="text-white">Strengthen Your</span>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
              Device Security Posture
            </span>
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-16 max-w-5xl mx-auto leading-relaxed"
            style={{ fontWeight: 300 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Reduce your attack surface with enterprise-grade security hardening.
            <br className="hidden sm:block" />
            Implement industry best practices and compliance frameworks to protect
            <br className="hidden sm:block" />
            every endpoint across your organization.
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
                  <Settings className="w-7 h-7 text-emerald-400" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl text-white" style={{ fontWeight: 700 }}>
                  Automated Hardening
                </h3>
              </div>
              <p className="text-base text-gray-300 leading-relaxed" style={{ fontWeight: 300 }}>
                Apply security baselines automatically across all devices, ensuring consistent
                protection without manual intervention or configuration drift.
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
                  <FileCheck className="w-7 h-7 text-emerald-400" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl text-white" style={{ fontWeight: 700 }}>
                  Compliance Ready
                </h3>
              </div>
              <p className="text-base text-gray-300 leading-relaxed" style={{ fontWeight: 300 }}>
                Meet CIS, NIST, PCI-DSS, and HIPAA requirements with pre-built security policies and
                automated compliance reporting across your fleet.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* REDUCE ATTACK SURFACE SECTION */}
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
              Minimize vulnerabilities with proactive hardening
            </h2>
            <p className="text-lg text-gray-300 max-w-5xl mx-auto leading-relaxed">
              Device security hardening reduces the attack surface by disabling unnecessary
              services, removing default accounts, enforcing strong authentication, and applying
              security patches. Our comprehensive approach ensures every device meets enterprise
              security standards.
            </p>
          </motion.div>

          {/* Hardening Components Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Component 1 */}
            <motion.div
              className="relative bg-gradient-to-br from-emerald-500/5 to-transparent border border-emerald-500/20 rounded-2xl p-8 hover:border-emerald-500/40 transition-all"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="w-16 h-16 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6">
                <Lock className="w-8 h-8 text-emerald-400" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl text-white mb-3" style={{ fontWeight: 600 }}>
                Password & Authentication
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Enforce strong password policies, multi-factor authentication, and eliminate default
                credentials to prevent unauthorized access.
              </p>
            </motion.div>

            {/* Component 2 */}
            <motion.div
              className="relative bg-gradient-to-br from-emerald-500/5 to-transparent border border-emerald-500/20 rounded-2xl p-8 hover:border-emerald-500/40 transition-all"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-16 h-16 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6">
                <Layers className="w-8 h-8 text-emerald-400" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl text-white mb-3" style={{ fontWeight: 600 }}>
                Service Minimization
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Disable unnecessary services, ports, and protocols to reduce potential entry points
                for attackers and minimize system complexity.
              </p>
            </motion.div>

            {/* Component 3 */}
            <motion.div
              className="relative bg-gradient-to-br from-emerald-500/5 to-transparent border border-emerald-500/20 rounded-2xl p-8 hover:border-emerald-500/40 transition-all"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="w-16 h-16 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6">
                <RefreshCw className="w-8 h-8 text-emerald-400" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl text-white mb-3" style={{ fontWeight: 600 }}>
                Patch Management
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Automated deployment of security patches and updates to eliminate known
                vulnerabilities before they can be exploited.
              </p>
            </motion.div>

            {/* Component 4 */}
            <motion.div
              className="relative bg-gradient-to-br from-emerald-500/5 to-transparent border border-emerald-500/20 rounded-2xl p-8 hover:border-emerald-500/40 transition-all"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="w-16 h-16 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6">
                <Settings className="w-8 h-8 text-emerald-400" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl text-white mb-3" style={{ fontWeight: 600 }}>
                Configuration Management
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Maintain secure configurations aligned with CIS benchmarks and industry standards,
                preventing configuration drift over time.
              </p>
            </motion.div>

            {/* Component 5 */}
            <motion.div
              className="relative bg-gradient-to-br from-emerald-500/5 to-transparent border border-emerald-500/20 rounded-2xl p-8 hover:border-emerald-500/40 transition-all"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="w-16 h-16 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6">
                <Key className="w-8 h-8 text-emerald-400" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl text-white mb-3" style={{ fontWeight: 600 }}>
                Access Control
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Implement least privilege principles, role-based access control, and granular
                permissions to limit unauthorized actions.
              </p>
            </motion.div>

            {/* Component 6 */}
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
                Logging & Monitoring
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Enable comprehensive audit logging and real-time monitoring to detect security
                events and support forensic investigations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* COMPLIANCE FRAMEWORKS SECTION */}
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
                Built-in compliance with industry frameworks
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Meet regulatory requirements and industry standards with pre-configured security
                baselines. Our hardening policies are mapped to major compliance frameworks, making
                audits easier and ensuring continuous compliance across your organization.
              </p>
            </div>

            {/* Compliance List */}
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
                    CIS Benchmarks
                  </h3>
                  <p className="text-base text-gray-400 leading-relaxed">
                    Apply Center for Internet Security (CIS) hardening standards for Windows, Linux,
                    macOS, and cloud platforms to establish a secure baseline configuration.
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
                    NIST Cybersecurity Framework
                  </h3>
                  <p className="text-base text-gray-400 leading-relaxed">
                    Align with NIST 800-53 and 800-171 security controls to protect sensitive
                    information and maintain federal compliance requirements.
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
                    PCI-DSS & HIPAA
                  </h3>
                  <p className="text-base text-gray-400 leading-relaxed">
                    Secure payment card data and protected health information with industry-specific
                    hardening policies designed for regulated environments.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTINUOUS MONITORING SECTION */}
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
              Continuous monitoring and remediation
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Security hardening is not a one-time task. Our platform continuously monitors device
              configurations, detects drift from security baselines, and automatically remediates
              issues to maintain a strong security posture.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Feature 1 */}
            <motion.div
              className="relative bg-gradient-to-br from-emerald-500/5 to-transparent border border-emerald-500/20 rounded-xl p-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-emerald-400" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-xl text-white mb-2" style={{ fontWeight: 600 }}>
                    Real-Time Compliance Tracking
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Monitor compliance status across all devices with real-time dashboards showing
                    adherence to security policies and compliance frameworks.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              className="relative bg-gradient-to-br from-emerald-500/5 to-transparent border border-emerald-500/20 rounded-xl p-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <RefreshCw className="w-6 h-6 text-emerald-400" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-xl text-white mb-2" style={{ fontWeight: 600 }}>
                    Automated Drift Correction
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Automatically detect and remediate configuration drift, ensuring devices remain
                    compliant with security baselines without manual intervention.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              className="relative bg-gradient-to-br from-emerald-500/5 to-transparent border border-emerald-500/20 rounded-xl p-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <FileCheck className="w-6 h-6 text-emerald-400" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-xl text-white mb-2" style={{ fontWeight: 600 }}>
                    Audit-Ready Reporting
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Generate comprehensive compliance reports mapped to specific frameworks, making
                    audits faster and demonstrating due diligence.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Feature 4 */}
            <motion.div
              className="relative bg-gradient-to-br from-emerald-500/5 to-transparent border border-emerald-500/20 rounded-xl p-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-emerald-400" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-xl text-white mb-2" style={{ fontWeight: 600 }}>
                    Policy Violation Alerts
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Receive immediate notifications when devices violate security policies, enabling
                    rapid response to potential security gaps.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 9. Pricing Plans */}
      <ServicePricing
        title={servicePlans["device-hardening"].title}
        description={servicePlans["device-hardening"].description}
        plans={servicePlans["device-hardening"].plans}
        highlightColor="emerald"
      />


    </div>
  );
};

export default DeviceSecurityHardeningPage;
