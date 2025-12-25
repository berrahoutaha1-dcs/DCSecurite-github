import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes";
import {
  Shield,
  DollarSign,
  TrendingUp,
  Lock,
  Zap,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  CreditCard,
  Building2,
  Smartphone,
  Cloud,
  Eye,
  Users,
  BarChart3,
  Activity,
  FileCheck,
} from "lucide-react";
import { Header } from "./Header";

import { useState, useEffect } from "react";
const creditCardsImg = "/assets/0776a9f9cadb7b58ee2ed3c67703949767c0dc82.png";

interface FinancialServicesPageProps {
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
  onPublicSectorClick?: () => void;
  onPrivacyClick?: () => void;
  onTermsClick?: () => void;
  onCookieClick?: () => void;
}

export default function FinancialServicesPage(props: FinancialServicesPageProps) {
  const navigate = useNavigate();
  const { onContactClick, onHomeClick, onPrivacyClick, onTermsClick, onCookieClick } = props;

  // Financial color palette
  const deepBlue = "#0A4D8C"; // Trust & stability
  const emeraldGreen = "#10B981"; // Growth & security
  const darkBg = "#0A0A0A";
  const accentCyan = "#06B6D4";

  // Animated counters
  const [threatsDetected, setThreatsDetected] = useState(0);
  const [clientsProtected, setClientsProtected] = useState(0);
  const [incidentsPrevented, setIncidentsPrevented] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setThreatsDetected((prev) => (prev < 1847234 ? prev + 15673 : 1847234));
      setClientsProtected((prev) => (prev < 450 ? prev + 5 : 450));
      setIncidentsPrevented((prev) => (prev < 99.7 ? prev + 0.8 : 99.7));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-hidden">
      {/* Header */}
      <Header forceWhiteButtons={true} {...props} />

      {/* Hero Section - Animated Financial Network */}
      <section
        className="relative min-h-screen flex items-center justify-center px-4"
        style={{ paddingTop: "7cm" }}
      >
        {/* Animated Data Streams Background */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg width="100%" height="100%" className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.circle
                key={i}
                cx={`${Math.random() * 100}%`}
                cy={`${Math.random() * 100}%`}
                r="2"
                fill={i % 2 === 0 ? deepBlue : emeraldGreen}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.2,
                  repeat: Infinity,
                }}
              />
            ))}
          </svg>
        </div>

        {/* Flowing Grid */}
        <motion.div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(${deepBlue}44 1px, transparent 1px), linear-gradient(90deg, ${deepBlue}44 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "60px 60px"],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {/* Icon Shield */}
            <motion.div
              className="flex justify-center mb-8"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              <div
                className="w-32 h-32 rounded-full flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${deepBlue}, ${emeraldGreen})`,
                  boxShadow: `0 0 60px ${emeraldGreen}40`,
                }}
              >
                <Shield className="w-16 h-16" />
              </div>
            </motion.div>

            <h1 className="text-6xl md:text-8xl mb-6 leading-tight">
              Protecting the Future of{" "}
              <span
                style={{
                  background: `linear-gradient(135deg, ${deepBlue}, ${emeraldGreen})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Finance
              </span>
            </h1>

            <p className="text-2xl md:text-3xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Comprehensive cybersecurity solutions for banks, fintech, and payment platforms.
            </p>

            <motion.button
              className="px-12 py-6 rounded-lg text-2xl transition-all duration-300"
              style={{
                background: `linear-gradient(135deg, ${deepBlue}, ${emeraldGreen})`,
                boxShadow: `0 0 40px ${emeraldGreen}40`,
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: `0 0 60px ${emeraldGreen}60`,
              }}
              onClick={() => navigate(ROUTES.CONTACT)}
            >
              Get Your Security Assessment
            </motion.button>

            {/* Credit Cards Image Section */}
            <div className="mt-20 max-w-4xl mx-auto">
              <img src={creditCardsImg} alt="Secure Payment Cards" className="w-full h-auto" />
            </div>
          </motion.div>
        </div>

        {/* Floating Data Nodes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 rounded-full"
            style={{
              background: i % 2 === 0 ? deepBlue : emeraldGreen,
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </section>

      {/* Why Financial Services Need Cybersecurity */}
      <section className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl mb-6">Why Financial Services Need Cybersecurity</h2>
            <div className="w-32 h-1 mx-auto rounded" style={{ background: emeraldGreen }} />
          </motion.div>

          {/* Flowing Risk Timeline */}
          <div className="relative">
            {/* Central Flow Line */}
            <motion.div
              className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2"
              style={{
                background: `linear-gradient(to bottom, ${deepBlue}, ${emeraldGreen})`,
              }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
            />

            {/* Risk Nodes */}
            <div className="space-y-32">
              {[
                {
                  icon: AlertTriangle,
                  title: "Data Breaches",
                  desc: "Financial institutions are prime targets for cybercriminals seeking customer data, transaction records, and sensitive financial information.",
                  stat: "43% of cyberattacks target financial sector",
                  color: "#EF4444",
                },
                {
                  icon: CreditCard,
                  title: "Payment Fraud",
                  desc: "Advanced fraud schemes targeting payment gateways, mobile banking, and digital wallets require sophisticated detection systems.",
                  stat: "$32B annual fraud losses globally",
                  color: "#F59E0B",
                },
                {
                  icon: Lock,
                  title: "Ransomware Attacks",
                  desc: "Ransomware can cripple banking operations, freeze transactions, and hold critical financial data hostage.",
                  stat: "300% increase in financial ransomware",
                  color: "#8B5CF6",
                },
              ].map((risk, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`flex items-center gap-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    }`}
                >
                  {/* Content Side */}
                  <div className="flex-1">
                    <motion.div
                      className="p-8 rounded-2xl relative overflow-hidden"
                      style={{
                        background: `${risk.color}10`,
                        border: `1px solid ${risk.color}30`,
                      }}
                      whileHover={{
                        scale: 1.02,
                        boxShadow: `0 0 40px ${risk.color}30`,
                      }}
                    >
                      <div className="flex items-start gap-6">
                        <div
                          className="w-20 h-20 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ background: `${risk.color}20` }}
                        >
                          <risk.icon className="w-10 h-10" style={{ color: risk.color }} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-3xl mb-3" style={{ color: risk.color }}>
                            {risk.title}
                          </h3>
                          <p className="text-xl text-slate-300 mb-4">{risk.desc}</p>
                          <div className="text-2xl opacity-80" style={{ color: risk.color }}>
                            {risk.stat}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Central Node */}
                  <motion.div
                    className="relative z-10 w-12 h-12 rounded-full border-4 flex items-center justify-center"
                    style={{
                      borderColor: risk.color,
                      background: darkBg,
                    }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.2 + 0.5,
                      type: "spring",
                    }}
                  >
                    <motion.div
                      className="w-4 h-4 rounded-full"
                      style={{ background: risk.color }}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [1, 0.5, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                  </motion.div>

                  {/* Empty Side for Balance */}
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Services for Finance */}
      <section className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl mb-6">Our Services for Finance</h2>
            <div className="w-32 h-1 mx-auto rounded" style={{ background: deepBlue }} />
          </motion.div>

          {/* Flowing Service Panels */}
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Smartphone,
                title: "Web & Mobile App Security",
                desc: "Comprehensive security testing for banking apps, fintech platforms, and mobile payment solutions.",
                features: ["Penetration Testing", "Secure Code Review", "Vulnerability Assessment"],
              },
              {
                icon: CreditCard,
                title: "Payment Gateway Security",
                desc: "PCI-DSS compliant security for payment processors, ensuring safe and encrypted transactions.",
                features: ["PCI Compliance", "Transaction Encryption", "Anti-Fraud Systems"],
              },
              {
                icon: Eye,
                title: "Fraud Detection & Prevention",
                desc: "AI-powered fraud detection systems that identify suspicious patterns in real-time.",
                features: ["Real-time Monitoring", "Behavioral Analytics", "Threat Intelligence"],
              },
              {
                icon: Cloud,
                title: "Cloud & API Security",
                desc: "Secure cloud infrastructure and API protection for modern financial services.",
                features: ["Cloud Security Posture", "API Gateway Protection", "Data Encryption"],
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div
                  className="relative p-8 rounded-2xl h-full overflow-hidden group cursor-pointer"
                  style={{
                    background: `linear-gradient(135deg, ${darkBg}, ${deepBlue}15)`,
                    border: `1px solid ${deepBlue}30`,
                  }}
                  whileHover={{
                    scale: 1.03,
                    borderColor: emeraldGreen,
                    boxShadow: `0 0 60px ${emeraldGreen}30`,
                  }}
                >
                  {/* Animated Background Gradient */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${deepBlue}20, ${emeraldGreen}20)`,
                    }}
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      className="w-20 h-20 rounded-xl flex items-center justify-center mb-6"
                      style={{
                        background: `${emeraldGreen}20`,
                        border: `1px solid ${emeraldGreen}40`,
                      }}
                      whileHover={{ rotate: 5 }}
                    >
                      <service.icon className="w-10 h-10" style={{ color: emeraldGreen }} />
                    </motion.div>

                    <h3 className="text-3xl mb-4" style={{ color: emeraldGreen }}>
                      {service.title}
                    </h3>
                    <p className="text-xl text-slate-300 mb-6">{service.desc}</p>

                    {/* Features List */}
                    <div className="space-y-3">
                      {service.features.map((feature, i) => (
                        <motion.div
                          key={i}
                          className="flex items-center gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + i * 0.1 }}
                        >
                          <CheckCircle2 className="w-5 h-5" style={{ color: emeraldGreen }} />
                          <span className="text-lg text-slate-400">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Hover Arrow */}
                    <motion.div
                      className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color: emeraldGreen }}
                    >
                      <span className="text-lg">Learn More</span>
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies - Horizontal Timeline */}
      <section className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl mb-6">Success Stories</h2>
            <p className="text-2xl text-slate-400 mb-6">Real-world security transformations</p>
            <div className="w-32 h-1 mx-auto rounded" style={{ background: accentCyan }} />
          </motion.div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Timeline Line */}
            <motion.div
              className="absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2 hidden md:block"
              style={{
                background: `linear-gradient(to right, ${deepBlue}, ${emeraldGreen}, ${accentCyan})`,
              }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2 }}
            />

            {/* Case Studies */}
            <div className="grid md:grid-cols-3 gap-12 relative">
              {[
                {
                  title: "Digital Bank",
                  problem: "Vulnerable mobile app exposed customer data",
                  solution: "Complete security overhaul with penetration testing",
                  outcome: "Zero breaches, 99.9% uptime, customer trust restored",
                  metric: "100% Security Score",
                },
                {
                  title: "Payment Platform",
                  problem: "Fraud attempts costing $2M annually",
                  solution: "AI-powered fraud detection system deployed",
                  outcome: "Fraud reduced by 97%, saved $1.9M first year",
                  metric: "97% Fraud Reduction",
                },
                {
                  title: "Fintech Startup",
                  problem: "Failed PCI-DSS compliance audit",
                  solution: "Infrastructure redesign and compliance roadmap",
                  outcome: "Full compliance achieved, unlocked new markets",
                  metric: "PCI-DSS Certified",
                },
              ].map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Timeline Node */}
                  <motion.div
                    className="mx-auto w-16 h-16 rounded-full border-4 flex items-center justify-center mb-8 relative z-10"
                    style={{
                      borderColor: index === 0 ? deepBlue : index === 1 ? emeraldGreen : accentCyan,
                      background: darkBg,
                    }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.2 + 0.5,
                      type: "spring",
                    }}
                  >
                    <Building2
                      className="w-7 h-7"
                      style={{
                        color: index === 0 ? deepBlue : index === 1 ? emeraldGreen : accentCyan,
                      }}
                    />
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    className="p-6 rounded-2xl"
                    style={{
                      background: `${index === 0 ? deepBlue : index === 1 ? emeraldGreen : accentCyan
                        }10`,
                      border: `1px solid ${index === 0 ? deepBlue : index === 1 ? emeraldGreen : accentCyan
                        }30`,
                    }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: `0 0 40px ${index === 0 ? deepBlue : index === 1 ? emeraldGreen : accentCyan
                        }40`,
                    }}
                  >
                    <h3
                      className="text-2xl mb-4"
                      style={{
                        color: index === 0 ? deepBlue : index === 1 ? emeraldGreen : accentCyan,
                      }}
                    >
                      {study.title}
                    </h3>

                    <div className="space-y-4 text-lg">
                      <div>
                        <div className="text-red-400 mb-1">Problem →</div>
                        <p className="text-slate-400">{study.problem}</p>
                      </div>
                      <div>
                        <div className="text-yellow-400 mb-1">Solution →</div>
                        <p className="text-slate-400">{study.solution}</p>
                      </div>
                      <div>
                        <div className="text-green-400 mb-1">Outcome →</div>
                        <p className="text-slate-300">{study.outcome}</p>
                      </div>
                    </div>

                    {/* Metric Badge */}
                    <div
                      className="mt-6 px-4 py-2 rounded-full inline-block text-lg"
                      style={{
                        background: `${index === 0 ? deepBlue : index === 1 ? emeraldGreen : accentCyan
                          }30`,
                        color: index === 0 ? deepBlue : index === 1 ? emeraldGreen : accentCyan,
                      }}
                    >
                      ✓ {study.metric}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Threat Intelligence - Live Stats */}
      <section className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl mb-6">Threat Intelligence for Finance</h2>
            <p className="text-2xl text-slate-400 mb-6">Real-time protection metrics</p>
            <div className="w-32 h-1 mx-auto rounded" style={{ background: emeraldGreen }} />
          </motion.div>

          {/* Animated Network Visualization */}
          <div className="relative mb-20">
            <svg width="100%" height="400" className="opacity-20">
              {/* Network Nodes */}
              {[...Array(12)].map((_, i) => {
                const angle = (i / 12) * Math.PI * 2;
                const cx = 50 + Math.cos(angle) * 35;
                const cy = 50 + Math.sin(angle) * 35;
                return (
                  <g key={i}>
                    <motion.circle
                      cx={`${cx}%`}
                      cy={`${cy}%`}
                      r="8"
                      fill={i % 3 === 0 ? deepBlue : i % 3 === 1 ? emeraldGreen : accentCyan}
                      initial={{ scale: 0 }}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{
                        duration: 2,
                        delay: i * 0.1,
                        repeat: Infinity,
                      }}
                    />
                    <motion.line
                      x1="50%"
                      y1="50%"
                      x2={`${cx}%`}
                      y2={`${cy}%`}
                      stroke={emeraldGreen}
                      strokeWidth="1"
                      opacity="0.3"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: i * 0.05 }}
                    />
                  </g>
                );
              })}
              {/* Center Node */}
              <motion.circle
                cx="50%"
                cy="50%"
                r="20"
                fill={deepBlue}
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
            </svg>
          </div>

          {/* Live Stats Counters */}
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: Activity,
                label: "Threats Detected",
                value: threatsDetected.toLocaleString(),
                color: deepBlue,
              },
              {
                icon: Users,
                label: "Clients Protected",
                value: clientsProtected,
                color: emeraldGreen,
              },
              {
                icon: BarChart3,
                label: "Success Rate",
                value: `${incidentsPrevented.toFixed(1)}%`,
                color: accentCyan,
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <motion.div
                  className="p-8 rounded-2xl text-center relative overflow-hidden"
                  style={{
                    background: `${stat.color}10`,
                    border: `1px solid ${stat.color}30`,
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: `0 0 60px ${stat.color}40`,
                  }}
                >
                  <motion.div
                    className="absolute inset-0"
                    style={{ background: `${stat.color}05` }}
                    animate={{
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />

                  <div className="relative z-10">
                    <stat.icon className="w-16 h-16 mx-auto mb-4" style={{ color: stat.color }} />
                    <div className="text-5xl md:text-6xl mb-3" style={{ color: stat.color }}>
                      {stat.value}
                    </div>
                    <div className="text-xl text-slate-400">{stat.label}</div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        className="relative py-32 px-4"
        style={{
          background: `linear-gradient(135deg, ${deepBlue}20, ${emeraldGreen}20, ${accentCyan}20)`,
        }}
      >
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Icon */}
            <motion.div
              className="flex justify-center mb-8"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              <div
                className="w-28 h-28 rounded-full flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${deepBlue}, ${emeraldGreen})`,
                  boxShadow: `0 0 80px ${emeraldGreen}60`,
                }}
              >
                <FileCheck className="w-14 h-14" />
              </div>
            </motion.div>

            <h2 className="text-5xl md:text-7xl mb-8 leading-tight">
              Secure Your Financial Operations <span style={{ color: emeraldGreen }}>Today</span>
            </h2>

            <p className="text-2xl md:text-3xl text-slate-300 mb-12 max-w-3xl mx-auto">
              Don't wait for a breach. Protect your customers, your reputation, and your bottom
              line.
            </p>

            <motion.button
              className="px-12 py-6 rounded-lg text-2xl transition-all duration-300"
              style={{
                background: `linear-gradient(135deg, ${deepBlue}, ${emeraldGreen})`,
                boxShadow: `0 0 40px ${emeraldGreen}40`,
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: `0 0 80px ${emeraldGreen}60`,
              }}
              onClick={() => navigate(ROUTES.CONTACT)}
            >
              Request Consultation
            </motion.button>
          </motion.div>
        </div>

        {/* Animated Background Elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 rounded-full"
            style={{
              background: `radial-gradient(circle, ${i % 2 === 0 ? deepBlue : emeraldGreen
                }20, transparent)`,
              left: `${i * 20}%`,
              top: `${(i % 3) * 30}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </section>

      {/* Footer */}

    </div>
  );
}
