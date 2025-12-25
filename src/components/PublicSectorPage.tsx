import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes";
import {
  Shield,
  Building2,
  Hospital,
  GraduationCap,
  Landmark,
  Zap,
  Globe,
  Lock,
  Eye,
  Bell,
  Users,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Server,
  Cloud,
  Network,
} from "lucide-react";
import { Header } from "./Header";



interface PublicSectorPageProps {
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
}

export default function PublicSectorPage({
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
}: PublicSectorPageProps) {
  const navigate = useNavigate();
  // Governmental color palette
  const deepBlue = "#1e40af"; // Deep governmental blue
  const graphite = "#374151"; // Dark graphite
  const mutedGold = "#d4af37"; // Muted gold for accents
  const darkBg = "#0A0A0A";

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-hidden">
      {/* Header */}
      <Header
        forceWhiteButtons={true}
        onHomeClick={onHomeClick}
        onContactClick={onContactClick}
        onAboutClick={onAboutClick}
        onUnderAttackClick={onUnderAttackClick}
        onSignInClick={onSignInClick}
        onIndustriesClick={onIndustriesClick}
        onLocationsClick={onLocationsClick}
        onEthicsComplianceClick={onEthicsComplianceClick}
        onCorporateResponsibilityClick={onCorporateResponsibilityClick}
        onCollaborationDonationClick={onCollaborationDonationClick}
        onPrecisionAISecurityClick={onPrecisionAISecurityClick}
        onAccelerateTransformationClick={onAccelerateTransformationClick}
        onAwardsRecognitionClick={onAwardsRecognitionClick}
        onCustomerStoriesClick={onCustomerStoriesClick}
        onCTFProgramClick={onCTFProgramClick}
        onCareersOverviewClick={onCareersOverviewClick}
        onEventsClick={onEventsClick}
        onERPManagementClick={onERPManagementClick}
        onCRMClick={onCRMClick}
        onHRMClick={onHRMClick}
        onIndustrialClick={onIndustrialClick}
        onConstructionClick={onConstructionClick}
        onLogisoft360Click={onLogisoft360Click}
        onCustomerLoginClick={onCustomerLoginClick}
        onAdminLoginClick={onAdminLoginClick}
        onStudentMemberLoginClick={onStudentMemberLoginClick}
        onCustomerSignUpClick={onCustomerSignUpClick}
        onStudentMemberSignUpClick={onStudentMemberSignUpClick}
        onSignUpModalOpen={onSignUpModalOpen}
        onThreatMapClick={onThreatMapClick}
        onSecurityTestClick={onSecurityTestClick}
        onCloudNetworkSecurityClick={onCloudNetworkSecurityClick}
        onIDSIPSClick={onIDSIPSClick}
        onWebPhishingSecurityClick={onWebPhishingSecurityClick}
        onSecureWorkDeviceClick={onSecureWorkDeviceClick}
        onOTSecurityClick={onOTSecurityClick}
        onCSPMClick={onCSPMClick}
        onASPMClick={onASPMClick}
        onWAASClick={onWAASClick}
        onCWPClick={onCWPClick}
        onDSPMClick={onDSPMClick}
        onMDRClick={onMDRClick}
        onCDRClick={onCDRClick}
        onASMClick={onASMClick}
        onSIEMClick={onSIEMClick}
        onSOCAutomationClick={onSOCAutomationClick}
        onEPPClick={onEPPClick}
        onXDRClick={onXDRClick}
        onRansomwareProtectionClick={onRansomwareProtectionClick}
        onDeviceSecurityHardeningClick={onDeviceSecurityHardeningClick}
        onUIUXDesignClick={onUIUXDesignClick}
        onWebDevelopmentClick={onWebDevelopmentClick}
        onMobileDevelopmentClick={onMobileDevelopmentClick}
        onWhatsNewClick={onWhatsNewClick}
        onCommunityClick={onCommunityClick}
        onWebAppPenTestClick={onWebAppPenTestClick}
        onMobileAppPenTestClick={onMobileAppPenTestClick}
        onNetworkPenTestClick={onNetworkPenTestClick}
        onCloudPenTestClick={onCloudPenTestClick}
        onAPISecurityTestingClick={onAPISecurityTestingClick}
        onWirelessNetworkPenTestClick={onWirelessNetworkPenTestClick}
        onRedTeamAssessmentsClick={onRedTeamAssessmentsClick}
        onSocialEngineeringClick={onSocialEngineeringClick}
        onZeroDayDetectionClick={onZeroDayDetectionClick}
        onMalwareAnalysisClick={onMalwareAnalysisClick}
        onVulnerabilityResearchClick={onVulnerabilityResearchClick}
        onEthicalExploitDevelopmentClick={onEthicalExploitDevelopmentClick}
        onContinuousSecurityTestingClick={onContinuousSecurityTestingClick}
      />

      {/* Hero Banner - Strong & Sovereign Feel */}
      <section
        className="relative min-h-screen flex items-center justify-center px-4"
        style={{ paddingTop: "7cm" }}
      >
        {/* Animated National Infrastructure Grid */}
        <div className="absolute inset-0 opacity-[0.02]">
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(${deepBlue}44 1px, transparent 1px), linear-gradient(90deg, ${deepBlue}44 1px, transparent 1px)`,
              backgroundSize: "80px 80px",
            }}
            animate={{
              backgroundPosition: ["0px 0px", "80px 80px"],
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        {/* Map Lines Effect */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <svg width="100%" height="100%" className="absolute inset-0">
            {[...Array(5)].map((_, i) => (
              <motion.line
                key={i}
                x1="0"
                y1={`${20 + i * 20}%`}
                x2="100%"
                y2={`${20 + i * 20}%`}
                stroke={mutedGold}
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 3,
                  delay: i * 0.2,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
              />
            ))}
          </svg>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h1 className="text-6xl md:text-8xl mb-8 leading-tight">
              Securing National Infrastructure.{" "}
              <span style={{ color: mutedGold }}>Defending Public Trust.</span>
            </h1>

            <p className="text-2xl md:text-3xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Cybersecurity solutions designed for governments, public institutions, and critical
              services — built for resilience, compliance, and sovereignty.
            </p>

            <div className="flex flex-wrap gap-6 justify-center">
              <motion.button
                className="px-10 py-5 rounded-lg text-xl transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, ${deepBlue}, ${mutedGold})`,
                }}
                animate={{
                  boxShadow: [`0 0 20px ${deepBlue}40`, `0 0 40px ${deepBlue}40`, `0 0 20px ${deepBlue}40`],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                whileHover={{
                  scale: 1.05,
                }}
                onClick={() => navigate(ROUTES.CONTACT)}
              >
                🏛️ Schedule a Confidential Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Slow Pulse Effect */}

      </section>

      {/* The Public Sector Threat Landscape */}
      <section className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl mb-6">The Public Sector Threat Landscape</h2>

          </motion.div>

          {/* Horizontal Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <motion.div
              className="absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2"
              style={{ background: `linear-gradient(to right, ${deepBlue}, ${mutedGold})` }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2 }}
            />

            {/* Threat Points */}
            <div className="grid md:grid-cols-4 gap-8 relative">
              {[
                {
                  title: "Nation-State Cyber Threats",
                  desc: "Advanced persistent threats targeting critical government infrastructure and sensitive data.",
                },
                {
                  title: "Critical Infrastructure Attacks",
                  desc: "Targeted attacks on power grids, water systems, and transportation networks.",
                },
                {
                  title: "Data Sovereignty Risks",
                  desc: "Threats to national data security and citizen privacy from foreign actors.",
                },
                {
                  title: "Legacy Systems Vulnerabilities",
                  desc: "Exploitation of outdated government systems lacking modern security controls.",
                },
              ].map((threat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Node */}
                  <motion.div
                    className="mx-auto w-20 h-20 rounded-full border-4 flex items-center justify-center mb-6"
                    style={{
                      borderColor: index % 2 === 0 ? deepBlue : mutedGold,
                      background: darkBg,
                    }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.2 + 0.3,
                      type: "spring",
                    }}
                  >
                    <Shield
                      className="w-8 h-8"
                      style={{ color: index % 2 === 0 ? deepBlue : mutedGold }}
                    />
                  </motion.div>

                  {/* Content */}
                  <h3
                    className="text-2xl mb-3"
                    style={{ color: index % 2 === 0 ? deepBlue : mutedGold }}
                  >
                    {threat.title}
                  </h3>
                  <p className="text-lg text-slate-400">{threat.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who We Protect */}
      <section className="relative py-32 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl mb-6">Who We Protect</h2>
            <div className="w-32 h-1 mx-auto rounded" style={{ background: deepBlue }} />
          </motion.div>

          {/* Vertical List */}
          <div className="space-y-8">
            {[
              {
                icon: Landmark,
                label: "Government Ministries & Agencies",
                desc: "Comprehensive security for federal, state, and local government operations.",
              },
              {
                icon: Building2,
                label: "Municipalities & Smart Cities",
                desc: "Protection for connected urban infrastructure and citizen services.",
              },
              {
                icon: Hospital,
                label: "Healthcare & Public Hospitals",
                desc: "Safeguarding patient data and critical healthcare delivery systems.",
              },
              {
                icon: GraduationCap,
                label: "Education & Universities",
                desc: "Securing academic institutions, research data, and student information.",
              },
              {
                icon: Shield,
                label: "Defense & Critical Infrastructure",
                desc: "Advanced protection for defense systems and strategic national assets.",
              },
              {
                icon: Zap,
                label: "Public Utilities (Energy, Water, Transport)",
                desc: "Resilient security for essential services that power modern society.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-8 group"
              >
                {/* Large Icon */}
                <motion.div
                  className="w-24 h-24 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: `${deepBlue}20`, border: `2px solid ${deepBlue}40` }}
                  whileHover={{
                    scale: 1.1,
                    borderColor: mutedGold,
                  }}
                >
                  <item.icon className="w-12 h-12" style={{ color: deepBlue }} />
                </motion.div>

                {/* Content */}
                <div className="flex-1 pt-4">
                  <h3 className="text-3xl mb-3" style={{ color: mutedGold }}>
                    {item.label}
                  </h3>
                  <p className="text-xl text-slate-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Public Sector Security Capabilities */}
      <section className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl mb-6">Our Public Sector Security Capabilities</h2>
            <div className="w-32 h-1 mx-auto rounded" style={{ background: mutedGold }} />
          </motion.div>

          {/* Split-Screen Capabilities */}
          <div className="space-y-24">
            {[
              {
                title: "National SOC & MDR",
                desc: "24/7 security operations center with managed detection and response tailored for government threat profiles.",
                icon: Eye,
              },
              {
                title: "Cloud & Government Network Security",
                desc: "Secure cloud adoption and network protection designed for public sector compliance requirements.",
                icon: Cloud,
              },
              {
                title: "OT & Critical Infrastructure Protection",
                desc: "Specialized operational technology security for power, water, and transportation systems.",
                icon: Server,
              },
              {
                title: "Secure Identity & Access (IAM)",
                desc: "Government-grade identity management and access control for sensitive systems and data.",
                icon: Lock,
              },
              {
                title: "Threat Intelligence & Early Warning",
                desc: "Nation-state threat intelligence and early warning systems for emerging cyber threats.",
                icon: Bell,
              },
              {
                title: "Incident Response & Cyber Crisis Management",
                desc: "Rapid incident response and crisis management protocols for national security events.",
                icon: Shield,
              },
            ].map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
              >
                {/* Left: Description */}
                <motion.div
                  className="flex-1"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-4xl mb-4" style={{ color: deepBlue }}>
                    {capability.title}
                  </h3>
                  <p className="text-2xl text-slate-300 leading-relaxed">{capability.desc}</p>
                </motion.div>

                {/* Right: Animated Diagram */}
                <motion.div
                  className="flex-1 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <motion.div
                    className="w-64 h-64 rounded-lg flex items-center justify-center relative"
                    style={{
                      background: `${deepBlue}10`,
                      border: `2px solid ${deepBlue}40`,
                    }}
                    animate={{
                      borderColor: [`${deepBlue}40`, `${mutedGold}80`, `${deepBlue}40`],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                  >
                    <capability.icon className="w-32 h-32" style={{ color: deepBlue }} />
                    {/* Subtle glow */}
                    <motion.div
                      className="absolute inset-0 rounded-lg"
                      style={{ background: `${deepBlue}20` }}
                      animate={{
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance, Sovereignty & Trust */}
      <section className="relative py-32 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl mb-12">Compliance, Sovereignty & Trust</h2>
          </motion.div>

          {/* Minimalist Typography Section */}
          <div className="space-y-16">
            {[
              {
                title: "Regulatory Compliance Readiness",
                text: "Full alignment with national and international cybersecurity frameworks, regulations, and standards.",
              },
              {
                title: "Data Residency & Sovereignty",
                text: "Guaranteed data storage and processing within national borders, ensuring complete sovereignty over sensitive government information.",
              },
              {
                title: "Secure-by-Design Architecture",
                text: "Security embedded from the ground up, not added as an afterthought. Every system designed with defense-in-depth principles.",
              },
              {
                title: "Confidential Handling of Sensitive Data",
                text: "Strict protocols and cleared personnel for managing classified and sensitive government information.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border-l-4 pl-8 py-4"
                style={{ borderColor: index % 2 === 0 ? deepBlue : mutedGold }}
              >
                <h3
                  className="text-3xl mb-4"
                  style={{ color: index % 2 === 0 ? deepBlue : mutedGold }}
                >
                  {item.title}
                </h3>
                <p className="text-2xl text-slate-300 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Real-World Readiness */}
      <section className="relative py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl mb-6">Real-World Readiness</h2>
            <p className="text-2xl text-slate-400">
              Proven response capabilities in critical scenarios
            </p>
          </motion.div>

          {/* Scenario-Based Storytelling */}
          <div className="space-y-24">
            {[
              {
                scenario: "National-Scale Ransomware Incident",
                threat:
                  "Coordinated ransomware attack targeting multiple government agencies simultaneously.",
                response:
                  "Immediate containment, forensic analysis, and coordinated recovery across all affected systems.",
                outcome:
                  "Zero data loss, full operational restoration within 48 hours, attackers identified.",
              },
              {
                scenario: "Election System Protection",
                threat:
                  "Foreign state-sponsored attempts to compromise voting infrastructure and election databases.",
                response:
                  "Real-time threat monitoring, hardened voting systems, and integrity verification protocols.",
                outcome:
                  "Election integrity maintained, all attack vectors neutralized, public trust preserved.",
              },
              {
                scenario: "Healthcare System Breach Prevention",
                threat:
                  "Targeted attack on national healthcare database containing millions of patient records.",
                response:
                  "Advanced threat detection, zero-trust architecture, and encrypted data protection.",
                outcome:
                  "Attack detected and blocked before data access, no patient information compromised.",
              },
              {
                scenario: "Critical Infrastructure Attack Response",
                threat:
                  "Cyber-physical attack attempting to disrupt power grid operations during peak demand.",
                response:
                  "OT security protocols engaged, isolated affected systems, maintained grid stability.",
                outcome:
                  "No service disruption, attackers expelled from network, vulnerabilities patched.",
              },
            ].map((scenario, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <h3 className="text-4xl mb-8" style={{ color: mutedGold }}>
                  {scenario.scenario}
                </h3>

                <div className="space-y-6">
                  {/* Threat */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-32 text-red-500 text-xl">Threat →</div>
                    <p className="text-2xl text-slate-300">{scenario.threat}</p>
                  </motion.div>

                  {/* Response */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-32 text-xl" style={{ color: deepBlue }}>
                      Response →
                    </div>
                    <p className="text-2xl text-slate-300">{scenario.response}</p>
                  </motion.div>

                  {/* Outcome */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-32 text-xl" style={{ color: mutedGold }}>
                      Outcome →
                    </div>
                    <p className="text-2xl text-slate-300">{scenario.outcome}</p>
                  </motion.div>
                </div>

                {/* Divider */}
                {index < 3 && (
                  <motion.div
                    className="mt-12 h-px"
                    style={{ background: `${deepBlue}40` }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Governments Choose Us */}
      <section className="relative py-32 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl mb-6">Why Governments Choose Us</h2>
          </motion.div>

          {/* Bold Statements - No Cards */}
          <div className="space-y-12">
            {[
              "Trusted by public institutions across multiple nations and jurisdictions",
              "Proven incident response expertise with national-scale cyber events",
              "Local and regional presence ensuring rapid on-site support",
              "Highly cleared security professionals with government background",
              "Long-term partnership mindset focused on national resilience",
            ].map((statement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-6"
              >
                <CheckCircle2
                  className="w-10 h-10 flex-shrink-0 mt-2"
                  style={{ color: mutedGold }}
                />
                <p className="text-3xl text-slate-200 leading-relaxed">{statement}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - Government Only */}
      <section className="relative py-32 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl mb-12 leading-tight">
              Cybersecurity is no longer optional for the public sector.
              <br />
              <span style={{ color: mutedGold }}>
                It is a matter of continuity, sovereignty, and public trust.
              </span>
            </h2>

            <div className="flex flex-wrap gap-6 justify-center mt-16">
              <motion.button
                className="px-10 py-5 rounded-lg text-xl transition-all duration-300"
                style={{
                  background: deepBlue,
                  boxShadow: `0 0 40px ${deepBlue}40`,
                }}
                animate={{
                  boxShadow: [
                    `0 0 40px ${deepBlue}40`,
                    `0 0 60px ${deepBlue}60`,
                    `0 0 40px ${deepBlue}40`,
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                whileHover={{
                  scale: 1.05,
                }}
                onClick={() => navigate(ROUTES.CONTACT)}
              >
                🏛️ Schedule a Confidential Consultation
              </motion.button>
            </div>


          </motion.div>
        </div>
      </section>

      {/* Footer */}

    </div>
  );
}
