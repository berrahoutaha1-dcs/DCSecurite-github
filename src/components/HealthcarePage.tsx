import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes";
import {
  Shield,
  Heart,
  Activity,
  Database,
  Cloud,
  Wifi,
  Lock,
  Eye,
  AlertTriangle,
  CheckCircle2,
  FileText,
  Server,
  Users,
  Bell,
  TrendingUp,
  Zap,
} from "lucide-react";
import { Header } from "./Header";

import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState, useEffect } from "react";

interface HealthcarePageProps {
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

export default function HealthcarePage(props: HealthcarePageProps) {
  const navigate = useNavigate();
  const {
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
  } = props;

  // Healthcare color palette - clean, trustworthy
  const medicalBlue = "#4A90E2";
  const softGreen = "#7ED957";
  const trustWhite = "#FFFFFF";
  const lightBg = "#F8FBFF";
  const accentTeal = "#00B4D8";
  const darkBg = "#0A0A0A";
  const darkCard = "#1A1A1A";

  // Counter states for real-time monitoring
  const [attacksBlocked, setAttacksBlocked] = useState(0);
  const [systemsProtected, setSystemsProtected] = useState(0);
  const [patientsSecured, setPatientsSecured] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAttacksBlocked((prev) => (prev < 24567 ? prev + 127 : 24567));
      setSystemsProtected((prev) => (prev < 1842 ? prev + 13 : 1842));
      setPatientsSecured((prev) => (prev < 3500000 ? prev + 25000 : 3500000));
    }, 100);

    return () => clearInterval(interval);
  }, []);

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

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center px-4"
        style={{
          paddingTop: "7cm",
          background: `linear-gradient(135deg, ${darkBg} 0%, ${darkCard} 50%, #0D1B1E 100%)`,
        }}
      >
        {/* ECG Pulse Line Background */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" className="absolute inset-0">
            <motion.path
              d="M0,300 L200,300 L220,250 L240,350 L260,300 L400,300 L420,280 L440,320 L460,300 L800,300"
              stroke={medicalBlue}
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </svg>
        </div>

        {/* Network Lines */}
        <div className="absolute inset-0 opacity-5">
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle, ${medicalBlue}40 1px, transparent 1px)`,
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

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <Heart className="w-12 h-12" style={{ color: medicalBlue }} />
                <Shield className="w-12 h-12" style={{ color: softGreen }} />
              </div>

              <h1
                className="text-6xl md:text-7xl mb-6 leading-tight"
                style={{ color: medicalBlue }}
              >
                Securing Healthcare.
                <br />
                <span style={{ color: softGreen }}>Protecting Lives.</span>
              </h1>

              <p className="text-2xl text-gray-300 mb-12 leading-relaxed">
                Advanced cybersecurity solutions for hospitals, clinics, medical devices, and
                healthcare data.
              </p>

              <motion.button
                className="px-12 py-6 rounded-full text-xl text-white transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, ${medicalBlue}, ${accentTeal})`,
                  boxShadow: `0 10px 40px ${medicalBlue}30`,
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: `0 15px 50px ${medicalBlue}40`,
                }}
                onClick={() => navigate(ROUTES.CONTACT)}
              >
                Secure Your Healthcare Systems
              </motion.button>
            </motion.div>

            {/* Right: Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1764885517847-79d62138cc58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3NwaXRhbCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY1NjczNDM2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Modern Hospital Technology"
                  className="w-full h-auto"
                />
                {/* Shield Overlay */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ background: `${medicalBlue}10` }}
                  animate={{
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                >
                  <Shield className="w-32 h-32" style={{ color: trustWhite, opacity: 0.6 }} />
                </motion.div>
              </div>

              {/* Pulse Effect */}
              <motion.div
                className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full"
                style={{ background: softGreen, opacity: 0.3 }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 1 - Why Healthcare Is a Prime Target */}
      <section className="relative py-32 px-4" style={{ background: lightBg }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl mb-6" style={{ color: medicalBlue }}>
              Why Healthcare Is a Prime Target
            </h2>
            <div className="w-32 h-1 mx-auto rounded" style={{ background: softGreen }} />
          </motion.div>

          {/* Split Screen Layout */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: Threats */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              {[
                {
                  icon: AlertTriangle,
                  title: "Ransomware Attacks on Hospitals",
                  desc: "Healthcare facilities face devastating ransomware attacks that can shut down critical operations and put patient lives at risk.",
                },
                {
                  icon: Database,
                  title: "Patient Data Breaches",
                  desc: "Medical records are highly valuable on the dark web, making healthcare databases a prime target for cybercriminals.",
                },
                {
                  icon: Wifi,
                  title: "Medical Device Exploitation",
                  desc: "Connected medical devices and IoT equipment create vulnerable entry points into hospital networks.",
                },
              ].map((threat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex gap-6"
                >
                  <motion.div
                    className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: `${medicalBlue}15` }}
                    animate={{
                      boxShadow: [`0 0 0 0 ${medicalBlue}40`, `0 0 0 20px ${medicalBlue}00`],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    <threat.icon className="w-8 h-8" style={{ color: medicalBlue }} />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl mb-3" style={{ color: medicalBlue }}>
                      {threat.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">{threat.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Right: Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1619794555233-e563edf91173?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwc2VjdXJpdHklMjBzaGllbGR8ZW58MXx8fHwxNzY1NjczNDM2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Healthcare Security"
                  className="w-full h-auto"
                />
                {/* Warning Signals Overlay */}
                <div className="absolute inset-0">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute"
                      style={{
                        top: `${20 + i * 30}%`,
                        left: `${10 + i * 25}%`,
                      }}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.6, 0.9, 0.6],
                      }}
                      transition={{
                        duration: 2,
                        delay: i * 0.5,
                        repeat: Infinity,
                      }}
                    >
                      <AlertTriangle className="w-8 h-8 text-red-500" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2 - What We Protect */}
      <section className="relative py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl mb-6" style={{ color: medicalBlue }}>
              What We Protect
            </h2>
            <p className="text-2xl text-gray-600">
              Comprehensive security across your healthcare ecosystem
            </p>
          </motion.div>

          {/* Horizontal Flowing Layout */}
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: FileText,
                title: "Patient Data (EHR / PHI)",
                desc: "Electronic health records and protected health information secured with military-grade encryption.",
                image:
                  "https://images.unsplash.com/photo-1664526937033-fe2c11f1be25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwZGF0YSUyMG5ldHdvcmt8ZW58MXx8fHwxNzY1NjczNDM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
              },
              {
                icon: Activity,
                title: "Medical Devices (IoT, OT)",
                desc: "Connected medical equipment and operational technology protected from cyber threats.",
                image:
                  "https://images.unsplash.com/photo-1665315469403-fde8e923f719?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZGV2aWNlcyUyMGNvbm5lY3RlZHxlbnwxfHx8fDE3NjU2NzM0Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
              },
              {
                icon: Server,
                title: "Hospital Networks",
                desc: "Critical hospital infrastructure secured with advanced threat detection and prevention.",
                image:
                  "https://images.unsplash.com/photo-1664526937033-fe2c11f1be25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwZGF0YSUyMG5ldHdvcmt8ZW58MXx8fHwxNzY1NjczNDM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
              },
              {
                icon: Cloud,
                title: "Cloud Healthcare Platforms",
                desc: "Cloud-based healthcare systems protected with zero-trust security architecture.",
                image:
                  "https://images.unsplash.com/photo-1747224317356-6dd1a4a078fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwZGFzaGJvYXJkJTIwc2NyZWVufGVufDF8fHx8MTc2NTY3MzQzN3ww&ixlib=rb-4.1.0&q=80&w=1080",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Image Background */}
                <div className="relative rounded-2xl overflow-hidden mb-6 h-64">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${medicalBlue}CC, ${accentTeal}CC)`,
                    }}
                    initial={{ opacity: 0.7 }}
                    whileHover={{ opacity: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <item.icon className="w-20 h-20 text-white" />
                  </motion.div>
                </div>

                {/* Text Content */}
                <h3 className="text-2xl mb-3" style={{ color: medicalBlue }}>
                  {item.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">{item.desc}</p>

                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{ border: `2px solid ${medicalBlue}00` }}
                  whileHover={{
                    borderColor: medicalBlue,
                    boxShadow: `0 0 30px ${medicalBlue}40`,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 - Healthcare-Focused Security Services */}
      <section className="relative py-32 px-4" style={{ background: lightBg }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl mb-6" style={{ color: medicalBlue }}>
              Healthcare-Focused Security Services
            </h2>
            <div className="w-32 h-1 mx-auto rounded" style={{ background: softGreen }} />
          </motion.div>

          {/* Vertical Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <motion.div
              className="absolute left-8 top-0 bottom-0 w-1"
              style={{ background: `linear-gradient(to bottom, ${medicalBlue}, ${softGreen})` }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2 }}
            />

            {/* Timeline Items */}
            <div className="space-y-16">
              {[
                {
                  icon: Cloud,
                  title: "Healthcare Cloud Security",
                  desc: "Secure cloud infrastructure designed specifically for healthcare compliance and patient data protection.",
                  image:
                    "https://images.unsplash.com/photo-1747224317356-6dd1a4a078fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwZGFzaGJvYXJkJTIwc2NyZWVufGVufDF8fHx8MTc2NTY3MzQzN3ww&ixlib=rb-4.1.0&q=80&w=1080",
                },
                {
                  icon: Activity,
                  title: "Medical Device & OT Security",
                  desc: "Specialized protection for medical devices, IoT equipment, and operational technology in healthcare environments.",
                  image:
                    "https://images.unsplash.com/photo-1665315469403-fde8e923f719?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZGV2aWNlcyUyMGNvbm5lY3RlZHxlbnwxfHx8fDE3NjU2NzM0Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
                },
                {
                  icon: Shield,
                  title: "Ransomware Prevention",
                  desc: "Advanced ransomware protection and recovery solutions to ensure continuous healthcare operations.",
                  image:
                    "https://images.unsplash.com/photo-1619794555233-e563edf91173?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwc2VjdXJpdHklMjBzaGllbGR8ZW58MXx8fHwxNzY1NjczNDM2fDA&ixlib=rb-4.1.0&q=80&w=1080",
                },
                {
                  icon: Server,
                  title: "Web & API Security for Health Platforms",
                  desc: "Comprehensive security for healthcare web applications, patient portals, and medical APIs.",
                  image:
                    "https://images.unsplash.com/photo-1664526937033-fe2c11f1be25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwZGF0YSUyMG5ldHdvcmt8ZW58MXx8fHwxNzY1NjczNDM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
                },
                {
                  icon: CheckCircle2,
                  title: "Compliance Security (HIPAA / GDPR)",
                  desc: "Full compliance readiness with healthcare regulations, privacy standards, and data protection laws.",
                  image:
                    "https://images.unsplash.com/photo-1764885517847-79d62138cc58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3NwaXRhbCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY1NjczNDM2fDA&ixlib=rb-4.1.0&q=80&w=1080",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative pl-24"
                >
                  {/* Timeline Node */}
                  <motion.div
                    className="absolute left-0 w-16 h-16 rounded-full flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${medicalBlue}, ${accentTeal})`,
                      border: `4px solid white`,
                    }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1 + 0.3,
                      type: "spring",
                    }}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-3xl mb-4" style={{ color: medicalBlue }}>
                        {service.title}
                      </h3>
                      <p className="text-xl text-gray-600 leading-relaxed">{service.desc}</p>
                    </div>
                    <div className="rounded-2xl overflow-hidden">
                      <ImageWithFallback
                        src={service.image}
                        alt={service.title}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Real-Time Threat Monitoring */}
      <section
        className="relative py-32 px-4"
        style={{
          background: `linear-gradient(135deg, ${medicalBlue}15, ${accentTeal}15)`,
        }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl mb-6" style={{ color: medicalBlue }}>
              Real-Time Threat Monitoring
            </h2>
            <p className="text-2xl text-gray-600">
              24/7 protection with instant threat detection and response
            </p>
          </motion.div>

          {/* SOC Dashboard Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden mb-16"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1747224317356-6dd1a4a078fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwZGFzaGJvYXJkJTIwc2NyZWVufGVufDF8fHx8MTc2NTY3MzQzN3ww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Healthcare Security Dashboard"
              className="w-full h-96 object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(135deg, ${medicalBlue}DD, ${accentTeal}DD)`,
              }}
            />

            {/* Dashboard Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
              <Eye className="w-24 h-24 mb-6" />
              <h3 className="text-4xl mb-4">24/7 Security Operations Center</h3>
              <p className="text-xl text-center max-w-3xl">
                Continuous monitoring with early attack detection and rapid incident response
                specialized for healthcare environments
              </p>
            </div>
          </motion.div>

          {/* Animated Counters */}
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: Shield,
                value: attacksBlocked.toLocaleString(),
                label: "Attacks Blocked Today",
                color: medicalBlue,
              },
              {
                icon: Server,
                value: systemsProtected.toLocaleString(),
                label: "Systems Protected",
                color: accentTeal,
              },
              {
                icon: Users,
                value: `${(patientsSecured / 1000000).toFixed(1)}M+`,
                label: "Patient Records Secured",
                color: softGreen,
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <motion.div
                  className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-6"
                  style={{ background: `${stat.color}15` }}
                  animate={{
                    boxShadow: [`0 0 0 0 ${stat.color}40`, `0 0 0 20px ${stat.color}00`],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <stat.icon className="w-12 h-12" style={{ color: stat.color }} />
                </motion.div>
                <div className="text-5xl mb-3" style={{ color: stat.color }}>
                  {stat.value}
                </div>
                <div className="text-xl text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 - Compliance & Trust */}
      <section className="relative py-32 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl mb-6" style={{ color: medicalBlue }}>
              Compliance & Trust
            </h2>
            <p className="text-2xl text-gray-600">
              Meeting the highest standards in healthcare security
            </p>
          </motion.div>

          {/* Compliance Items */}
          <div className="space-y-16">
            {[
              {
                icon: CheckCircle2,
                title: "Healthcare Compliance Readiness",
                desc: "Full alignment with HIPAA, HITECH, GDPR, and other healthcare regulations ensuring your organization meets all compliance requirements.",
              },
              {
                icon: Lock,
                title: "Data Privacy & Integrity",
                desc: "Military-grade encryption and access controls protecting patient data confidentiality, integrity, and availability at all times.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="flex flex-col md:flex-row items-center gap-12">
                  {/* Icon */}
                  <motion.div
                    className="flex-shrink-0 w-32 h-32 rounded-3xl flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${medicalBlue}15, ${accentTeal}15)`,
                    }}
                    whileHover={{
                      scale: 1.05,
                    }}
                  >
                    <item.icon className="w-16 h-16" style={{ color: medicalBlue }} />
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-3xl mb-4" style={{ color: medicalBlue }}>
                      {item.title}
                    </h3>
                    <p className="text-xl text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>

                  {/* Subtle Lock Animation */}
                  {index === 1 && (
                    <motion.div
                      className="hidden md:block flex-shrink-0"
                      initial={{ opacity: 0.5 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    >
                      <Lock className="w-20 h-20" style={{ color: softGreen }} />
                    </motion.div>
                  )}
                </div>

                {/* Divider */}
                {index === 0 && (
                  <motion.div
                    className="mt-12 h-px"
                    style={{ background: `${medicalBlue}20` }}
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

      {/* Final CTA - Protect What Matters Most */}
      <section
        className="relative py-32 px-4"
        style={{
          background: `linear-gradient(135deg, ${trustWhite} 0%, ${lightBg} 50%, #E8F5E9 100%)`,
        }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-5xl md:text-7xl mb-12 leading-tight">
              <span style={{ color: medicalBlue }}>
                Because in Healthcare,
                <br />
              </span>
              <span style={{ color: softGreen }}>Security Saves Lives.</span>
            </h2>

            <motion.button
              className="px-16 py-6 rounded-full text-2xl text-white transition-all duration-300 mb-16"
              style={{
                background: `linear-gradient(135deg, ${medicalBlue}, ${softGreen})`,
                boxShadow: `0 10px 40px ${medicalBlue}30`,
              }}
              animate={{
                boxShadow: [
                  `0 10px 40px ${medicalBlue}30`,
                  `0 15px 60px ${medicalBlue}50`,
                  `0 10px 40px ${medicalBlue}30`,
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
              Request a Healthcare Security Assessment
            </motion.button>

            {/* Doctor with Shield Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1633488781325-d36e6818d0c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBwYXRpZW50JTIwY2FyZXxlbnwxfHx8fDE3NjU2NTY5NjN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Healthcare Protection"
                className="w-full h-auto"
              />
              {/* Shield Protection Overlay */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                style={{ background: `${medicalBlue}20` }}
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              >
                <Shield className="w-40 h-40" style={{ color: trustWhite, opacity: 0.7 }} />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}

    </div>
  );
}
