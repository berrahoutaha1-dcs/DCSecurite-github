import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes";
import {
  Shield,
  Factory,
  Cog,
  Network,
  AlertTriangle,
  CheckCircle2,
  Lock,
  Activity,
  Server,
  Zap,
  TrendingUp,
  Clock,
  Award,
  Eye,
} from "lucide-react";
import { Header } from "./Header";

import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState, useEffect } from "react";

interface ManufacturingPageProps {
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

export default function ManufacturingPage(props: ManufacturingPageProps) {
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

  // Industrial color palette
  const steelGray = "#2C3E50";
  const industrialBlue = "#3498DB";
  const safetyOrange = "#FF6B35";
  const darkBg = "#0D1117";
  const darkCard = "#161B22";
  const accentGreen = "#00D4AA";

  // Counter states for real-time monitoring
  const [attacksBlocked, setAttacksBlocked] = useState(0);
  const [downtimePrevented, setDowntimePrevented] = useState(0);
  const [productionHoursSaved, setProductionHoursSaved] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAttacksBlocked((prev) => (prev < 18943 ? prev + 97 : 18943));
      setDowntimePrevented((prev) => (prev < 3247 ? prev + 19 : 3247));
      setProductionHoursSaved((prev) => (prev < 125680 ? prev + 750 : 125680));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#0D1117] text-white overflow-hidden">
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
          background: `linear-gradient(135deg, ${darkBg} 0%, ${steelGray}40 100%)`,
        }}
      >
        {/* Industrial Grid Background */}
        <div className="absolute inset-0 opacity-20">
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(90deg, ${industrialBlue}30 1px, transparent 1px),
                linear-gradient(0deg, ${industrialBlue}30 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px",
            }}
            animate={{
              backgroundPosition: ["0px 0px", "80px 80px"],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        {/* Data Lines */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px"
              style={{
                background: `linear-gradient(90deg, transparent, ${industrialBlue}, transparent)`,
                top: `${20 + i * 15}%`,
                left: 0,
                right: 0,
              }}
              animate={{
                scaleX: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 4,
                delay: i * 0.8,
                repeat: Infinity,
              }}
            />
          ))}
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
                <Factory className="w-14 h-14" style={{ color: industrialBlue }} />
                <Shield className="w-14 h-14" style={{ color: safetyOrange }} />
              </div>

              <h1 className="text-6xl md:text-7xl mb-6 leading-tight">
                <span style={{ color: industrialBlue }}>Securing Industrial</span>
                <br />
                <span style={{ color: safetyOrange }}>Operations.</span>
                <br />
                <span className="text-white">Protecting Production.</span>
              </h1>

              <p className="text-2xl text-gray-300 mb-12 leading-relaxed">
                Cybersecurity solutions designed for smart factories, industrial networks, and
                production systems.
              </p>

              <motion.button
                className="px-12 py-6 rounded-none text-xl text-white transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, ${industrialBlue}, ${safetyOrange})`,
                  boxShadow: `0 10px 40px ${safetyOrange}40`,
                  clipPath:
                    "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: `0 15px 50px ${safetyOrange}60`,
                }}
                onClick={() => navigate(ROUTES.CONTACT)}
              >
                Assess Your Industrial Security
              </motion.button>
            </motion.div>

            {/* Right: Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative"
            >
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1761195696590-3490ea770aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGZhY3RvcnklMjBpbmR1c3RyaWFsfGVufDF8fHx8MTc2NTY3NDQxN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Smart Factory Industrial"
                  className="w-full h-auto"
                  style={{
                    clipPath:
                      "polygon(0 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%)",
                  }}
                />
                {/* Digital Overlay */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${industrialBlue}20, ${safetyOrange}20)`,
                  }}
                  animate={{
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                >
                  <Shield className="w-32 h-32 text-white opacity-60" />
                </motion.div>

                {/* Corner Accents */}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-16 h-16"
                    style={{
                      border: `2px solid ${safetyOrange}`,
                      ...(i === 0 && { top: 0, left: 0, borderRight: 0, borderBottom: 0 }),
                      ...(i === 1 && { top: 0, right: 0, borderLeft: 0, borderBottom: 0 }),
                      ...(i === 2 && { bottom: 0, left: 0, borderRight: 0, borderTop: 0 }),
                      ...(i === 3 && { bottom: 0, right: 0, borderLeft: 0, borderTop: 0 }),
                    }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.3,
                      repeat: Infinity,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 1 - Why Manufacturing Is a Prime Target */}
      <section className="relative py-32 px-4" style={{ background: darkCard }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl mb-6" style={{ color: industrialBlue }}>
              Why Manufacturing Is a Prime Target
            </h2>
            <div className="w-32 h-1 mx-auto" style={{ background: safetyOrange }} />
          </motion.div>

          {/* Full-width Split Layout */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: Risks */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {[
                {
                  icon: AlertTriangle,
                  title: "Ransomware Stopping Production Lines",
                  desc: "Manufacturing facilities are prime targets for ransomware attacks that halt production, causing millions in losses per hour of downtime.",
                },
                {
                  icon: Network,
                  title: "OT & IT Convergence Risks",
                  desc: "The integration of operational technology (OT) with IT systems creates new vulnerabilities that attackers actively exploit.",
                },
                {
                  icon: Zap,
                  title: "Supply Chain Attacks",
                  desc: "Compromised suppliers and third-party vendors can be entry points for sophisticated attacks on manufacturing networks.",
                },
              ].map((risk, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Flowing Warning Bar */}
                  <motion.div
                    className="absolute left-0 top-0 bottom-0 w-1"
                    style={{
                      background: `linear-gradient(to bottom, ${safetyOrange}, ${industrialBlue})`,
                    }}
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  />

                  <div className="pl-8">
                    <div className="flex items-center gap-4 mb-3">
                      <risk.icon className="w-8 h-8" style={{ color: safetyOrange }} />
                      <h3 className="text-2xl" style={{ color: industrialBlue }}>
                        {risk.title}
                      </h3>
                    </div>
                    <p className="text-lg text-gray-300 leading-relaxed">{risk.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Right: Visual with Security Transition */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1739863306113-2629b0ed2a6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWN0b3J5JTIwcHJvZHVjdGlvbiUyMGxpbmV8ZW58MXx8fHwxNzY1NjIyNTAwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Factory Production Line"
                  className="w-full h-auto"
                />
                {/* Red to Green Security Transition */}
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(90deg, #FF0000AA 0%, ${accentGreen}AA 100%)`,
                  }}
                  animate={{
                    backgroundPosition: ["-100% 0", "200% 0"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Security Shield Animation */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Shield className="w-40 h-40 text-white opacity-40" />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2 - Industrial Security Capabilities */}
      <section className="relative py-32 px-4" style={{ background: darkBg }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl mb-6" style={{ color: industrialBlue }}>
              Industrial Security Capabilities
            </h2>
            <p className="text-2xl text-gray-300">
              Comprehensive protection for modern manufacturing environments
            </p>
          </motion.div>

          {/* Horizontal Stacked Panels */}
          <div className="space-y-12">
            {[
              {
                icon: Cog,
                title: "OT & ICS Security",
                desc: "Specialized protection for operational technology and industrial control systems, securing PLCs, SCADA, and critical infrastructure.",
                image:
                  "https://images.unsplash.com/photo-1738918937796-743064feefa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwY29udHJvbCUyMHN5c3RlbXxlbnwxfHx8fDE3NjU2NzQ0MTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
              },
              {
                icon: Network,
                title: "Network Segmentation & Monitoring",
                desc: "Advanced network isolation and real-time monitoring to prevent lateral movement and detect anomalies in industrial networks.",
                image:
                  "https://images.unsplash.com/photo-1660836814985-8523a0d713b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWN0b3J5JTIwc2VjdXJpdHklMjBuZXR3b3JrfGVufDF8fHx8MTc2NTY3NDQxOHww&ixlib=rb-4.1.0&q=80&w=1080",
              },
              {
                icon: Lock,
                title: "Industrial Endpoint Protection",
                desc: "Hardened security for manufacturing endpoints, including workstations, HMIs, and edge devices on the factory floor.",
                image:
                  "https://images.unsplash.com/photo-1759159091728-e2c87b9d9315?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFjaGluZXJ5JTIwYXV0b21hdGlvbnxlbnwxfHx8fDE3NjU2NzExNjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
              },
              {
                icon: Server,
                title: "Cloud & On-Prem Manufacturing Systems Security",
                desc: "Unified security for hybrid manufacturing environments, protecting both cloud-based and on-premises production systems.",
                image:
                  "https://images.unsplash.com/photo-1758387836566-6a342434f5b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW51ZmFjdHVyaW5nJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjU2NDIyMDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Alternate layout: image left/right */}
                  {index % 2 === 0 ? (
                    <>
                      {/* Image */}
                      <motion.div
                        className="relative overflow-hidden"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ImageWithFallback
                          src={service.image}
                          alt={service.title}
                          className="w-full h-80 object-cover"
                          style={{
                            clipPath:
                              "polygon(0 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%)",
                          }}
                        />
                        {/* Overlay with Icon */}
                        <motion.div
                          className="absolute inset-0 flex items-center justify-center"
                          style={{
                            background: `linear-gradient(135deg, ${industrialBlue}CC, ${steelGray}CC)`,
                          }}
                          initial={{ opacity: 0.6 }}
                          whileHover={{ opacity: 0.8 }}
                        >
                          <service.icon className="w-24 h-24 text-white" />
                        </motion.div>

                        {/* Machine Activation Effect */}
                        <motion.div
                          className="absolute top-0 left-0 right-0 h-1"
                          style={{ background: safetyOrange }}
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.5 }}
                        />
                      </motion.div>

                      {/* Text */}
                      <div>
                        <h3 className="text-3xl mb-4" style={{ color: industrialBlue }}>
                          {service.title}
                        </h3>
                        <p className="text-xl text-gray-300 leading-relaxed">{service.desc}</p>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Text */}
                      <div>
                        <h3 className="text-3xl mb-4" style={{ color: industrialBlue }}>
                          {service.title}
                        </h3>
                        <p className="text-xl text-gray-300 leading-relaxed">{service.desc}</p>
                      </div>

                      {/* Image */}
                      <motion.div
                        className="relative overflow-hidden"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ImageWithFallback
                          src={service.image}
                          alt={service.title}
                          className="w-full h-80 object-cover"
                          style={{
                            clipPath:
                              "polygon(0 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%)",
                          }}
                        />
                        <motion.div
                          className="absolute inset-0 flex items-center justify-center"
                          style={{
                            background: `linear-gradient(135deg, ${industrialBlue}CC, ${steelGray}CC)`,
                          }}
                          initial={{ opacity: 0.6 }}
                          whileHover={{ opacity: 0.8 }}
                        >
                          <service.icon className="w-24 h-24 text-white" />
                        </motion.div>
                        <motion.div
                          className="absolute top-0 left-0 right-0 h-1"
                          style={{ background: safetyOrange }}
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.5 }}
                        />
                      </motion.div>
                    </>
                  )}
                </div>

                {/* Divider */}
                {index < 3 && (
                  <motion.div
                    className="mt-12 h-px"
                    style={{ background: `${industrialBlue}30` }}
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

      {/* Section 3 - Securing OT & IT Environments Timeline */}
      <section className="relative py-32 px-4" style={{ background: darkCard }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl mb-6" style={{ color: industrialBlue }}>
              Securing OT & IT Environments
            </h2>
            <p className="text-2xl text-gray-300">
              Evolution from legacy systems to smart manufacturing
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <motion.div
              className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2"
              style={{
                background: `linear-gradient(to bottom, ${safetyOrange}, ${industrialBlue}, ${accentGreen})`,
              }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2 }}
            />

            {/* Timeline Items */}
            <div className="space-y-24">
              {[
                {
                  title: "Legacy Systems",
                  desc: "Securing air-gapped and isolated industrial systems with minimal connectivity",
                  threats: ["Physical security", "Insider threats", "Legacy vulnerabilities"],
                  color: safetyOrange,
                },
                {
                  title: "Hybrid Factories",
                  desc: "Protecting converged OT/IT environments with segmented networks and monitoring",
                  threats: ["Network intrusions", "Ransomware", "Configuration errors"],
                  color: industrialBlue,
                },
                {
                  title: "Smart Manufacturing",
                  desc: "Defending IoT-enabled production with AI-driven security and zero-trust architecture",
                  threats: ["IoT exploits", "Supply chain attacks", "Advanced persistent threats"],
                  color: accentGreen,
                },
              ].map((stage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.3 }}
                  className={`relative grid md:grid-cols-2 gap-8 ${index % 2 === 0 ? "" : "md:flex-row-reverse"
                    }`}
                >
                  {/* Timeline Node */}
                  <motion.div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full flex items-center justify-center z-10"
                    style={{
                      background: `linear-gradient(135deg, ${stage.color}, ${darkBg})`,
                      border: `4px solid ${darkCard}`,
                    }}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.3 + 0.2,
                      type: "spring",
                    }}
                  >
                    <Cog className="w-10 h-10 text-white" />
                  </motion.div>

                  {/* Content */}
                  <div
                    className={
                      index % 2 === 0 ? "md:text-right md:pr-16" : "md:col-start-2 md:pl-16"
                    }
                  >
                    <h3 className="text-4xl mb-4" style={{ color: stage.color }}>
                      {stage.title}
                    </h3>
                    <p className="text-xl text-gray-300 mb-6 leading-relaxed">{stage.desc}</p>

                    {/* Threats Being Blocked */}
                    <div className="space-y-2">
                      {stage.threats.map((threat, tIndex) => (
                        <motion.div
                          key={tIndex}
                          className="flex items-center gap-3"
                          style={{
                            justifyContent: index % 2 === 0 ? "flex-end" : "flex-start",
                          }}
                          initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.3 + tIndex * 0.1 + 0.4 }}
                        >
                          <Shield className="w-5 h-5" style={{ color: stage.color }} />
                          <span className="text-gray-400">{threat}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div
                    className={index % 2 === 0 ? "md:col-start-2" : "md:col-start-1 md:row-start-1"}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Threat Detection in Real Time */}
      <section
        className="relative py-32 px-4"
        style={{
          background: `linear-gradient(135deg, ${darkBg}, ${steelGray}40)`,
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
            <h2 className="text-5xl md:text-6xl mb-6" style={{ color: industrialBlue }}>
              Threat Detection in Real Time
            </h2>
            <p className="text-2xl text-gray-300">
              Continuous monitoring and protection for industrial operations
            </p>
          </motion.div>

          {/* Industrial Network Map Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mb-20 h-96 flex items-center justify-center"
            style={{
              background: `radial-gradient(circle at center, ${industrialBlue}20, transparent)`,
              border: `1px solid ${industrialBlue}40`,
            }}
          >
            {/* Network Nodes */}
            {[...Array(8)].map((_, i) => {
              const angle = (i * 360) / 8;
              const radius = 35;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;

              return (
                <motion.div
                  key={i}
                  className="absolute w-16 h-16 rounded-full flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${industrialBlue}, ${safetyOrange})`,
                    left: `calc(50% + ${x}%)`,
                    top: `calc(50% + ${y}%)`,
                    transform: "translate(-50%, -50%)",
                  }}
                  animate={{
                    boxShadow: [`0 0 0 0 ${industrialBlue}60`, `0 0 0 20px ${industrialBlue}00`],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.2,
                    repeat: Infinity,
                  }}
                >
                  <Server className="w-8 h-8 text-white" />

                  {/* Detection Signal Lines to Center */}
                  <motion.div
                    className="absolute w-px h-24 origin-bottom"
                    style={{
                      background: `linear-gradient(to top, ${accentGreen}, transparent)`,
                      bottom: "50%",
                      left: "50%",
                      transform: `rotate(${-angle + 90}deg)`,
                    }}
                    animate={{
                      scaleY: [0, 1, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.25,
                      repeat: Infinity,
                    }}
                  />
                </motion.div>
              );
            })}

            {/* Center SOC */}
            <motion.div
              className="absolute w-32 h-32 rounded-full flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg, ${safetyOrange}, ${industrialBlue})`,
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <Eye className="w-16 h-16 text-white" />
            </motion.div>
          </motion.div>

          {/* Animated Counters */}
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: Shield,
                value: attacksBlocked.toLocaleString(),
                label: "Attacks Blocked",
                color: safetyOrange,
              },
              {
                icon: Clock,
                value: `${downtimePrevented.toLocaleString()} hrs`,
                label: "Downtime Prevented",
                color: industrialBlue,
              },
              {
                icon: TrendingUp,
                value: `${productionHoursSaved.toLocaleString()} hrs`,
                label: "Production Hours Saved",
                color: accentGreen,
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
                  className="inline-flex items-center justify-center w-24 h-24 mb-6"
                  style={{
                    background: `${stat.color}20`,
                    clipPath:
                      "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                  }}
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <stat.icon className="w-12 h-12" style={{ color: stat.color }} />
                </motion.div>
                <div className="text-5xl mb-3" style={{ color: stat.color }}>
                  {stat.value}
                </div>
                <div className="text-xl text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 - Compliance & Safety */}
      <section className="relative py-32 px-4" style={{ background: darkCard }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl mb-6" style={{ color: industrialBlue }}>
              Compliance & Safety
            </h2>
            <p className="text-2xl text-gray-300">
              Meeting industrial security standards and regulations
            </p>
          </motion.div>

          {/* Compliance Badges */}
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                standard: "IEC 62443",
                desc: "Industrial Automation & Control Systems Security",
                icon: Factory,
              },
              {
                standard: "ISO 27001",
                desc: "Information Security Management Systems",
                icon: Award,
              },
              {
                standard: "Industry Safety",
                desc: "Manufacturing-Specific Safety Requirements",
                icon: CheckCircle2,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative text-center"
              >
                {/* Badge Shape */}
                <motion.div
                  className="relative mx-auto w-48 h-48 mb-6 flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${industrialBlue}20, ${safetyOrange}20)`,
                    clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                    border: `2px solid ${industrialBlue}60`,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 180,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <item.icon className="w-20 h-20" style={{ color: industrialBlue }} />

                  {/* Embedded Machinery Effect */}
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: `radial-gradient(circle, ${safetyOrange}30, transparent)`,
                    }}
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                </motion.div>

                <h3 className="text-3xl mb-3" style={{ color: industrialBlue }}>
                  {item.standard}
                </h3>
                <p className="text-lg text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="relative py-32 px-4"
        style={{
          background: `linear-gradient(135deg, ${darkBg}, ${steelGray}60, ${darkBg})`,
        }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl mb-12 leading-tight">
              <span style={{ color: industrialBlue }}>Keep Your Production Running.</span>
              <br />
              <span style={{ color: safetyOrange }}>Secure Every Machine.</span>
            </h2>

            <motion.button
              className="px-16 py-6 rounded-none text-2xl text-white transition-all duration-300 mb-16"
              style={{
                background: `linear-gradient(135deg, ${safetyOrange}, ${industrialBlue})`,
                boxShadow: `0 10px 40px ${safetyOrange}40`,
                clipPath:
                  "polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 30px 100%, 0 calc(100% - 30px))",
              }}
              animate={{
                boxShadow: [
                  `0 10px 40px ${safetyOrange}40`,
                  `0 15px 60px ${safetyOrange}70`,
                  `0 10px 40px ${safetyOrange}40`,
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
              Talk to an Industrial Security Expert
            </motion.button>

            {/* Secure Factory Silhouette */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative max-w-4xl mx-auto"
            >
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1761195696590-3490ea770aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGZhY3RvcnklMjBpbmR1c3RyaWFsfGVufDF8fHx8MTc2NTY3NDQxN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Secure Factory"
                  className="w-full h-96 object-cover"
                  style={{
                    clipPath:
                      "polygon(0 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%)",
                  }}
                />

                {/* Glowing Perimeter */}
                <motion.div
                  className="absolute inset-0"
                  style={{
                    boxShadow: `inset 0 0 100px ${accentGreen}40`,
                    border: `2px solid ${accentGreen}`,
                    clipPath:
                      "polygon(0 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%)",
                  }}
                  animate={{
                    boxShadow: [
                      `inset 0 0 100px ${accentGreen}40`,
                      `inset 0 0 150px ${accentGreen}80`,
                      `inset 0 0 100px ${accentGreen}40`,
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />

                {/* Shield Protection Overlay */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                >
                  <Shield className="w-40 h-40 text-white opacity-50" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}

    </div>
  );
}
