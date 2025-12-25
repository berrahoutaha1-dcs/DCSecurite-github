import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes";
import {
  Shield,
  Lock,
  Cloud,
  Mail,
  HardDrive,
  Eye,
  CheckCircle2,
  TrendingUp,
  Users,
  Zap,
  DollarSign,
  ShoppingBag,
  Heart,
  Calculator,
  Briefcase,
  Settings,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";
import { Header } from "./Header";

import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState, useEffect } from "react";

interface SMBPageProps {
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

export default function SMBPage(props: SMBPageProps) {
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

  // SMB color palette - friendly, reassuring
  const trustBlue = "#4A90E2";
  const softGreen = "#5FD68A";
  const lightGray = "#F5F7FA";
  const darkBg = "#0A0A0A";
  const darkCard = "#1A1A1A";
  const warmOrange = "#FF9F66";

  // Counter states for real-time protection
  const [threatsBlocked, setThreatsBlocked] = useState(0);
  const [devicesProtected, setDevicesProtected] = useState(0);
  const [phishingAttempts, setPhishingAttempts] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setThreatsBlocked((prev) => (prev < 8456 ? prev + 52 : 8456));
      setDevicesProtected((prev) => (prev < 1247 ? prev + 8 : 1247));
      setPhishingAttempts((prev) => (prev < 3892 ? prev + 27 : 3892));
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
          background: `linear-gradient(135deg, ${darkBg} 0%, ${darkCard} 50%, #0D1F2D 100%)`,
        }}
      >
        {/* Soft Background Circles */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${400 + i * 200}px`,
                height: `${400 + i * 200}px`,
                background: `radial-gradient(circle, ${trustBlue}40, transparent)`,
                top: `${20 + i * 10}%`,
                left: `${10 + i * 20}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                style={{
                  background: `${softGreen}20`,
                  border: `1px solid ${softGreen}40`,
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Shield className="w-5 h-5" style={{ color: softGreen }} />
                <span className="text-sm" style={{ color: softGreen }}>
                  Trusted by 5,000+ Small Businesses
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl mb-6 leading-tight">
                <span style={{ color: trustBlue }}>Enterprise-Grade Security,</span>
                <br />
                <span style={{ color: softGreen }}>Built for Small & Medium</span>
                <br />
                <span className="text-white">Businesses</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Protect your data, customers, and operations without complexity or high costs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  className="px-8 py-4 rounded-full text-lg text-white transition-all duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${trustBlue}, ${softGreen})`,
                    boxShadow: `0 10px 30px ${trustBlue}40`,
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: `0 15px 40px ${trustBlue}60`,
                  }}
                  onClick={() => navigate(ROUTES.CONTACT)}
                >
                  Get Started
                </motion.button>

                <motion.button
                  className="px-8 py-4 rounded-full text-lg transition-all duration-300"
                  style={{
                    color: trustBlue,
                    border: `2px solid ${trustBlue}`,
                    background: "transparent",
                  }}
                  whileHover={{
                    scale: 1.05,
                    background: `${trustBlue}10`,
                  }}
                  onClick={() => navigate(ROUTES.SECURITY_TEST)}
                >
                  Free Security Check
                </motion.button>
              </div>
            </motion.div>

            {/* Right: Hero Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1670851050245-d861fd433d06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGJ1c2luZXNzJTIwdGVhbXxlbnwxfHx8fDE3NjU2NzUyOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Small Business Team"
                  className="w-full h-auto"
                />
                {/* Security Overlay Icons */}
                <div className="absolute inset-0">
                  {[
                    { Icon: Shield, pos: "top-10 left-10", color: trustBlue },
                    { Icon: Lock, pos: "top-20 right-16", color: softGreen },
                    { Icon: Cloud, pos: "bottom-20 left-16", color: warmOrange },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      className={`absolute ${item.pos}`}
                      animate={{
                        y: [0, -10, 0],
                        opacity: [0.6, 1, 0.6],
                      }}
                      transition={{
                        duration: 3,
                        delay: i * 0.5,
                        repeat: Infinity,
                      }}
                    >
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center"
                        style={{
                          background: `${item.color}20`,
                          backdropFilter: "blur(10px)",
                          border: `2px solid ${item.color}60`,
                        }}
                      >
                        <item.Icon className="w-8 h-8" style={{ color: item.color }} />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 1 - Cybersecurity Challenges for SMBs */}
      <section className="relative py-24 px-4" style={{ background: darkCard }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4" style={{ color: trustBlue }}>
              Cybersecurity Challenges for SMBs
            </h2>
            <p className="text-xl text-gray-300">
              Small businesses face the same threats as large enterprises
            </p>
          </motion.div>

          {/* Horizontal Flow - No Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                icon: Mail,
                title: "Phishing & Ransomware",
                desc: "Email attacks targeting employees",
                color: warmOrange,
              },
              {
                icon: AlertTriangle,
                title: "Data Leaks",
                desc: "Customer and financial data at risk",
                color: "#E74C3C",
              },
              {
                icon: Lock,
                title: "Weak Endpoints",
                desc: "Unprotected devices and remote workers",
                color: trustBlue,
              },
              {
                icon: Users,
                title: "Limited IT Resources",
                desc: "Small teams managing complex security",
                color: softGreen,
              },
            ].map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                {/* Animated Icon */}
                <motion.div
                  className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-4"
                  style={{
                    background: `${challenge.color}20`,
                    border: `2px solid ${challenge.color}40`,
                  }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: `0 10px 30px ${challenge.color}40`,
                  }}
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    delay: index * 0.3,
                    repeat: Infinity,
                  }}
                >
                  <challenge.icon className="w-10 h-10" style={{ color: challenge.color }} />
                </motion.div>

                <h3 className="text-xl mb-2 text-white">{challenge.title}</h3>
                <p className="text-sm text-gray-400">{challenge.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 - How We Protect Your Business */}
      <section className="relative py-24 px-4" style={{ background: darkBg }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4" style={{ color: trustBlue }}>
              How We Protect Your Business
            </h2>
            <p className="text-xl text-gray-300">
              Comprehensive security solutions designed for SMBs
            </p>
          </motion.div>

          {/* Stacked Flowing Panels */}
          <div className="space-y-8">
            {[
              {
                icon: Shield,
                title: "Endpoint Protection",
                desc: "Secure every device - laptops, phones, tablets - with advanced threat detection and prevention.",
                color: trustBlue,
              },
              {
                icon: Mail,
                title: "Email & Phishing Security",
                desc: "Block phishing attempts, malicious attachments, and business email compromise attacks before they reach your team.",
                color: softGreen,
              },
              {
                icon: Cloud,
                title: "Cloud & SaaS Security",
                desc: "Protect your cloud applications, data storage, and SaaS platforms with continuous monitoring.",
                color: warmOrange,
              },
              {
                icon: HardDrive,
                title: "Backup & Ransomware Protection",
                desc: "Automatic backups and rapid recovery systems to keep your business running even during an attack.",
                color: "#9B59B6",
              },
              {
                icon: Eye,
                title: "Managed Detection & Response (MDR)",
                desc: "24/7 security monitoring by experts who watch for threats and respond immediately on your behalf.",
                color: "#3498DB",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <div
                  className="flex flex-col md:flex-row items-center gap-8 p-8 rounded-2xl transition-all duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${service.color}10, ${darkCard})`,
                    border: `1px solid ${service.color}30`,
                  }}
                >
                  {/* Icon */}
                  <motion.div
                    className="flex-shrink-0 w-24 h-24 rounded-2xl flex items-center justify-center"
                    style={{
                      background: `${service.color}20`,
                      border: `2px solid ${service.color}40`,
                    }}
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                    }}
                  >
                    <service.icon className="w-12 h-12" style={{ color: service.color }} />
                  </motion.div>

                  {/* Text */}
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl mb-3" style={{ color: service.color }}>
                      {service.title}
                    </h3>
                    <p className="text-lg text-gray-300 leading-relaxed">{service.desc}</p>
                  </div>

                  {/* Hover Glow */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{
                      background: `linear-gradient(135deg, ${service.color}00, ${service.color}20)`,
                      opacity: 0,
                    }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Soft Separator */}
                {index < 4 && (
                  <motion.div
                    className="h-px mx-auto my-4"
                    style={{
                      width: "80%",
                      background: `linear-gradient(90deg, transparent, ${service.color}30, transparent)`,
                    }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 - Built for SMB Reality */}
      <section className="relative py-24 px-4" style={{ background: darkCard }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4" style={{ color: trustBlue }}>
              Built for SMB Reality
            </h2>
            <p className="text-xl text-gray-300">Security that grows with your business</p>
          </motion.div>

          {/* Timeline Illustration */}
          <div className="relative">
            {/* Timeline Line */}
            <motion.div
              className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1"
              style={{
                background: `linear-gradient(to bottom, ${trustBlue}, ${softGreen}, ${warmOrange})`,
              }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2 }}
            />

            {/* Timeline Items */}
            <div className="space-y-16">
              {[
                {
                  icon: Zap,
                  title: "Easy Deployment",
                  desc: "Set up in minutes, not months. Cloud-based solution with simple onboarding process.",
                  color: trustBlue,
                },
                {
                  icon: Users,
                  title: "No Large IT Team Needed",
                  desc: "Managed by security experts. Your team can focus on running the business.",
                  color: softGreen,
                },
                {
                  icon: DollarSign,
                  title: "Predictable Pricing",
                  desc: "Transparent monthly pricing with no hidden fees. Pay only for what you need.",
                  color: warmOrange,
                },
                {
                  icon: TrendingUp,
                  title: "Scalable as You Grow",
                  desc: "Start small and scale seamlessly. Add users, devices, and features as your business expands.",
                  color: "#9B59B6",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative grid md:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? "" : "md:flex-row-reverse"
                    }`}
                >
                  {/* Timeline Node */}
                  <motion.div
                    className="absolute left-0 md:left-1/2 w-16 h-16 -translate-x-1/2 rounded-full flex items-center justify-center z-10"
                    style={{
                      background: `linear-gradient(135deg, ${benefit.color}, ${darkBg})`,
                      border: `4px solid ${darkCard}`,
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
                    <benefit.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <div
                    className={`${index % 2 === 0
                      ? "md:text-right md:pr-24 md:col-start-1"
                      : "md:pl-24 md:col-start-2"
                      } pl-20 md:pl-0`}
                  >
                    <h3 className="text-3xl mb-3" style={{ color: benefit.color }}>
                      {benefit.title}
                    </h3>
                    <p className="text-lg text-gray-300 leading-relaxed">{benefit.desc}</p>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className={index % 2 === 0 ? "md:col-start-2" : "md:col-start-1"} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Real-Time Protection in Action */}
      <section
        className="relative py-24 px-4"
        style={{
          background: `linear-gradient(135deg, ${darkBg}, #0D1F2D)`,
        }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4" style={{ color: trustBlue }}>
              Real-Time Protection in Action
            </h2>
            <p className="text-xl text-gray-300">See how we're protecting businesses right now</p>
          </motion.div>

          {/* Dashboard-style Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mb-16 p-8 rounded-3xl"
            style={{
              background: `linear-gradient(135deg, ${trustBlue}15, ${softGreen}15)`,
              border: `1px solid ${trustBlue}30`,
            }}
          >
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  value: threatsBlocked.toLocaleString(),
                  label: "Threats Blocked Today",
                  color: trustBlue,
                },
                {
                  icon: Settings,
                  value: devicesProtected.toLocaleString(),
                  label: "Devices Protected",
                  color: softGreen,
                },
                {
                  icon: Mail,
                  value: phishingAttempts.toLocaleString(),
                  label: "Phishing Attempts Stopped",
                  color: warmOrange,
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
                    className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-4"
                    style={{
                      background: `${stat.color}20`,
                      border: `2px solid ${stat.color}40`,
                    }}
                    animate={{
                      boxShadow: [`0 0 0 0 ${stat.color}40`, `0 0 0 15px ${stat.color}00`],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    <stat.icon className="w-10 h-10" style={{ color: stat.color }} />
                  </motion.div>
                  <div className="text-5xl mb-2" style={{ color: stat.color }}>
                    {stat.value}
                  </div>
                  <div className="text-lg text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 5 - Industries We Support */}
      <section className="relative py-24 px-4" style={{ background: darkCard }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4" style={{ color: trustBlue }}>
              Industries We Support
            </h2>
            <p className="text-xl text-gray-300">
              Tailored security for every type of small business
            </p>
          </motion.div>

          {/* Industry Icons Connected by Network Lines */}
          <div className="relative">
            {/* Network Connection Lines */}
            <svg className="absolute inset-0 w-full h-full opacity-20" style={{ zIndex: 0 }}>
              {[...Array(5)].map((_, i) => (
                <motion.line
                  key={i}
                  x1={`${20 + i * 15}%`}
                  y1="50%"
                  x2={`${35 + i * 15}%`}
                  y2="50%"
                  stroke={trustBlue}
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.2 }}
                />
              ))}
            </svg>

            {/* Industry Items */}
            <div className="relative z-10 grid grid-cols-2 md:grid-cols-5 gap-8">
              {[
                { icon: ShoppingBag, title: "Retail", color: trustBlue },
                { icon: Heart, title: "Healthcare Clinics", color: softGreen },
                { icon: Calculator, title: "Accounting Firms", color: warmOrange },
                { icon: Briefcase, title: "Startups", color: "#9B59B6" },
                { icon: Settings, title: "Manufacturing Workshops", color: "#E74C3C" },
              ].map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <motion.div
                    className="inline-flex items-center justify-center w-24 h-24 rounded-2xl mb-4"
                    style={{
                      background: `${industry.color}20`,
                      border: `2px solid ${industry.color}40`,
                    }}
                    whileHover={{
                      scale: 1.1,
                      boxShadow: `0 10px 30px ${industry.color}40`,
                    }}
                  >
                    <industry.icon className="w-12 h-12" style={{ color: industry.color }} />
                  </motion.div>
                  <h3 className="text-lg text-white">{industry.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        className="relative py-32 px-4"
        style={{
          background: `linear-gradient(135deg, ${darkBg}, ${trustBlue}20, ${softGreen}20, ${darkBg})`,
        }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl mb-6 leading-tight">
                <span style={{ color: trustBlue }}>Security That Lets You</span>
                <br />
                <span style={{ color: softGreen }}>Focus on Growing</span>
                <br />
                <span className="text-white">Your Business</span>
              </h2>

              <p className="text-xl text-gray-300 mb-8">
                Let us handle the security while you focus on what matters most - your customers and
                your growth.
              </p>

              <motion.button
                className="px-12 py-5 rounded-full text-xl text-white transition-all duration-300 flex items-center gap-3"
                style={{
                  background: `linear-gradient(135deg, ${trustBlue}, ${softGreen})`,
                  boxShadow: `0 10px 40px ${trustBlue}40`,
                }}
                animate={{
                  boxShadow: [
                    `0 10px 40px ${trustBlue}40`,
                    `0 15px 60px ${trustBlue}70`,
                    `0 10px 40px ${trustBlue}40`,
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
                Talk to a Security Expert
                <ArrowRight className="w-6 h-6" />
              </motion.button>
            </motion.div>

            {/* Right: Friendly Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1565688527174-775059ac429c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRpbmclMjBmcmllbmRseXxlbnwxfHx8fDE3NjU2NzUyOTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Friendly Security Consultant"
                  className="w-full h-auto"
                />

                {/* Shield Icon Overlay */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${trustBlue}20, ${softGreen}20)`,
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
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}

    </div>
  );
}
