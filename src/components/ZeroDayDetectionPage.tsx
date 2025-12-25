import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Shield,
  Eye,
  Zap,
  Target,
  Lock,
  AlertTriangle,
  CheckCircle,
  FileText,
  Activity,
  TrendingUp,
  Users,
  Building2,
  DollarSign,
  ArrowRight,
  Brain,
  Network,
  Server,
  Cloud,
  Cpu,
  Layers,
  Radar,
  Sparkles,
  Binary,
  GitBranch,
  Database,
  Hash,
  Triangle,
} from "lucide-react";

import { ROUTES } from "../routes";
import { ServicePricing } from "./shared/ServicePricing";
import { servicePlans } from "../data/servicePlans";

interface ZeroDayDetectionPageProps {
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
  onCloudPenTestClick?: () => void;
  onAPISecurityTestingClick?: () => void;
  onWirelessNetworkPenTestClick?: () => void;
  onRedTeamAssessmentsClick?: () => void;
  onSocialEngineeringClick?: () => void;
}

export default function ZeroDayDetectionPage(props: ZeroDayDetectionPageProps) {
  const navigate = useNavigate();
  const accentColor = "#8B5CF6"; // Electric violet
  const accentCyan = "#06B6D4"; // Neon cyan

  return (
    <div className="min-h-screen bg-black">


      {/* SECTION 1: HERO BANNER */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ paddingTop: "5cm" }}
      >
        {/* Dynamic background with glitch waves */}
        <div className="absolute inset-0">
          {/* Animated noise texture */}
          <motion.div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
            animate={{
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Glitch wave effects */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute left-0 right-0 h-1"
              style={{
                background: `linear-gradient(90deg, transparent, ${i % 2 === 0 ? accentColor : accentCyan}, transparent)`,
                top: `${15 + i * 15}%`,
                filter: "blur(2px)",
              }}
              animate={{
                x: ["-100%", "200%"],
                opacity: [0, 0.8, 0],
                scaleY: [1, 1.5, 1],
              }}
              transition={{
                duration: 5 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.8,
              }}
            />
          ))}

          {/* Anomaly particles */}
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 rounded-full"
              style={{
                backgroundColor: i % 3 === 0 ? accentColor : accentCyan,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [1, 2, 1],
                x: [0, (Math.random() - 0.5) * 100],
                y: [0, (Math.random() - 0.5) * 100],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-20">
          <motion.div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/10 border border-violet-500/30 rounded-full"
            >
              <Sparkles className="w-4 h-4 text-violet-400" />
              <span className="text-sm text-violet-400">AI-Driven Zero-Day Detection</span>
            </motion.div>

            {/* Animated Title - appears out of sync then stabilizes */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-tight"
              >
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="inline-block"
                >
                  Stop Attacks
                </motion.span>
                <br />
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-500"
                >
                  Before They're Named
                </motion.span>
              </motion.h1>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-2xl md:text-3xl text-gray-400 leading-relaxed max-w-5xl"
            >
              Detect and neutralize zero-day threats using AI-driven behavioral intelligence —
              before signatures, patches, or public disclosures exist.
            </motion.p>

            {/* Micro text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="text-sm text-gray-600 italic"
            >
              Unknown doesn't mean invisible.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-8"
            >
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-violet-700 to-violet-600 text-white rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-violet-500/30"
                style={{ fontWeight: 600 }}
                whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(139, 92, 246, 0.6)" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate(ROUTES.CONTACT)}
              >
                See How Zero-Day Detection Works
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                className="px-8 py-4 border border-cyan-500/50 text-cyan-400 rounded-lg flex items-center justify-center gap-2"
                style={{ fontWeight: 600 }}
                whileHover={{
                  borderColor: "rgba(6, 182, 212, 0.8)",
                  backgroundColor: "rgba(6, 182, 212, 0.1)",
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate(ROUTES.CONTACT)}
              >
                Request Advanced Threat Demo
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: THE ZERO-DAY PROBLEM - NARRATIVE */}
      <section className="relative py-32 px-6 sm:px-8 md:px-12 overflow-hidden">
        {/* Separator line */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />

        <div className="relative max-w-6xl mx-auto">
          {/* Full-width scrolling text with fading transitions */}
          <div className="space-y-20">
            {/* First wave - the problem */}
            {[
              { text: "No CVE.", delay: 0.1 },
              { text: "No signature.", delay: 0.3 },
              { text: "No patch.", delay: 0.5 },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: item.delay }}
                className="text-center"
              >
                <h2
                  className="text-5xl md:text-6xl lg:text-7xl text-gray-600"
                  style={{ fontWeight: 300 }}
                >
                  {item.text}
                </h2>
              </motion.div>
            ))}

            {/* Bold statement */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-center space-y-6 pt-12"
            >
              <h2
                className="text-4xl md:text-5xl lg:text-6xl text-white leading-tight"
                style={{ fontWeight: 700 }}
              >
                Traditional security <span className="text-gray-600">reacts</span>.
                <br />
                Zero-day attacks require{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-500">
                  prediction
                </span>
                .
              </h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="text-2xl text-gray-400 leading-relaxed max-w-4xl mx-auto pt-8"
              >
                Zero-day threats exploit unknown vulnerabilities, bypassing signature-based tools
                and traditional defenses — often remaining undetected until damage is done.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: HOW ZERO-DAY DETECTION WORKS */}
      <section className="relative py-32 px-6 sm:px-8 md:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/5 to-transparent" />

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2
              className="text-4xl sm:text-5xl md:text-6xl text-white mb-4"
              style={{ fontWeight: 700 }}
            >
              How Zero-Day Detection Works
            </h2>
            <p className="text-xl text-violet-400">Behavioral AI in action</p>
          </motion.div>

          {/* Horizontal flow diagram */}
          <div className="relative">
            {/* Connection line - THICKER */}
            <div className="absolute top-1/2 left-0 right-0 h-1 hidden lg:block">
              <motion.div
                className="h-full bg-gradient-to-r from-violet-500/30 via-violet-500/70 to-cyan-500/70 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0.5 }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                {
                  step: "01",
                  title: "Behavioral Baseline Learning",
                  desc: "AI models learn normal system, user, and application behavior.",
                  icon: Brain,
                  color: accentColor,
                },
                {
                  step: "02",
                  title: "Anomaly Signal Detection",
                  desc: "Subtle deviations trigger silent alerts.",
                  icon: Radar,
                  color: accentCyan,
                },
                {
                  step: "03",
                  title: "Correlation Across Layers",
                  desc: "Endpoint, network, cloud, and identity behaviors analyzed together.",
                  icon: Layers,
                  color: accentColor,
                },
                {
                  step: "04",
                  title: "Pre-Exploit Intervention",
                  desc: "Threat is blocked before exploit confirmation.",
                  icon: Shield,
                  color: accentCyan,
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="relative group"
                >
                  {/* Step circle with pulse - LARGER */}
                  <motion.div
                    className="relative w-32 h-32 mx-auto mb-6 rounded-full flex items-center justify-center border-3"
                    style={{
                      borderColor: item.color,
                      backgroundColor: `${item.color}10`,
                      borderWidth: "3px",
                    }}
                    whileInView={{
                      boxShadow: [
                        `0 0 15px ${item.color}40`,
                        `0 0 40px ${item.color}70`,
                        `0 0 15px ${item.color}40`,
                      ],
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  >
                    <item.icon className="w-16 h-16" style={{ color: item.color }} />

                    {/* Step number - LARGER */}
                    <div
                      className="absolute -top-4 -right-4 w-10 h-10 rounded-full flex items-center justify-center text-sm font-mono"
                      style={{
                        backgroundColor: item.color,
                        fontWeight: 700,
                      }}
                    >
                      {item.step}
                    </div>

                    {/* Pulsing ring */}
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{ border: `2px solid ${item.color}` }}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  </motion.div>

                  {/* Content */}
                  <div className="text-center space-y-3">
                    <h3 className="text-2xl text-white" style={{ fontWeight: 600 }}>
                      {item.title}
                    </h3>
                    <p className="text-base text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>

                  {/* Visual interruption effect - ARROWS */}
                  {i < 3 && (
                    <motion.div
                      className="hidden lg:block absolute top-1/2 -right-8 z-10"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.2 + 0.5 }}
                    >
                      <motion.div
                        animate={{
                          x: [0, 5, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <ArrowRight className="w-8 h-8" style={{ color: item.color }} />
                      </motion.div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHAT MAKES THIS ZERO-DAY READY */}
      <section className="relative py-32 px-6 sm:px-8 md:px-12 overflow-hidden">
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2
              className="text-4xl sm:text-5xl md:text-6xl text-white mb-4"
              style={{ fontWeight: 700 }}
            >
              What Makes This Zero-Day Ready
            </h2>
          </motion.div>

          {/* Split screen */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text - fades in on scroll */}
            <motion.div className="space-y-6">
              {[
                { text: "No dependency on signatures", delay: 0.1 },
                { text: "AI-based threat modeling", delay: 0.2 },
                { text: "Continuous learning models", delay: 0.3 },
                { text: "Real-time exploit behavior analysis", delay: 0.4 },
                { text: "Automated containment actions", delay: 0.5 },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: item.delay }}
                  className="relative"
                >
                  <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-violet-500/5 to-transparent border-l-2 border-violet-500">
                    <div className="w-2 h-2 bg-violet-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-2xl text-white leading-relaxed" style={{ fontWeight: 500 }}>
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Right: Animated visualization - IMPROVED */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[500px]"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Central core - LARGER */}
                <motion.div
                  className="absolute w-48 h-48 rounded-full border-4 border-violet-500 flex items-center justify-center z-20"
                  style={{ backgroundColor: "rgba(139, 92, 246, 0.15)" }}
                  animate={{
                    boxShadow: [
                      "0 0 30px rgba(139, 92, 246, 0.4)",
                      "0 0 80px rgba(139, 92, 246, 0.7)",
                      "0 0 30px rgba(139, 92, 246, 0.4)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Brain className="w-24 h-24 text-violet-400" />

                  {/* Pulsing rings */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-violet-500"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.6, 0, 0.6],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                    }}
                  />
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-violet-500"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.6, 0, 0.6],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: 0.8,
                    }}
                  />
                </motion.div>

                {/* Orbiting elements - FIXED POSITIONS */}
                {[
                  { icon: Network, angle: 0 },
                  { icon: Server, angle: 90 },
                  { icon: Cloud, angle: 180 },
                  { icon: Cpu, angle: 270 },
                ].map((item, i) => {
                  const radius = 160;
                  const x = Math.cos((item.angle * Math.PI) / 180) * radius;
                  const y = Math.sin((item.angle * Math.PI) / 180) * radius;

                  return (
                    <motion.div
                      key={i}
                      className="absolute left-1/2 top-1/2 z-10"
                      initial={{
                        x: x - 32,
                        y: y - 32,
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
                      <motion.div
                        className="w-16 h-16 bg-cyan-500/15 border-2 border-cyan-500 rounded-lg flex items-center justify-center"
                        animate={{
                          boxShadow: [
                            "0 0 10px rgba(6, 182, 212, 0.3)",
                            "0 0 25px rgba(6, 182, 212, 0.6)",
                            "0 0 10px rgba(6, 182, 212, 0.3)",
                          ],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.5,
                        }}
                      >
                        <item.icon className="w-9 h-9 text-cyan-400" />
                      </motion.div>
                    </motion.div>
                  );
                })}

                {/* Data stream particles - LARGER AND MORE VISIBLE */}
                {[...Array(12)].map((_, i) => {
                  const angle = i * 30;
                  return (
                    <motion.div
                      key={`particle-${i}`}
                      className="absolute left-1/2 top-1/2 w-3 h-3 rounded-full"
                      style={{
                        backgroundColor: i % 2 === 0 ? accentColor : accentCyan,
                      }}
                      animate={{
                        x: [0, Math.cos((angle * Math.PI) / 180) * 140, 0],
                        y: [0, Math.sin((angle * Math.PI) / 180) * 140, 0],
                        opacity: [0, 1, 0],
                        scale: [0, 1.5, 0],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: "easeOut",
                      }}
                    />
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 5: REAL-WORLD ATTACK SCENARIOS */}
      <section className="relative py-32 px-6 sm:px-8 md:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black to-transparent" />

        <div className="relative max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2
              className="text-4xl sm:text-5xl md:text-6xl text-white mb-4"
              style={{ fontWeight: 700 }}
            >
              Real-World Attack Scenarios
            </h2>
            <p className="text-xl text-gray-400">Quiet confidence, not alarm</p>
          </motion.div>

          {/* Vertical timeline */}
          <div className="relative space-y-10">
            {/* Vertical line - THICKER */}
            <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-violet-500/30 via-cyan-500/70 to-violet-500/30 rounded-full" />

            {[
              {
                title: "Unknown ransomware behavior detected before encryption",
                icon: Lock,
                delay: 0.1,
              },
              {
                title: "Memory-based exploit blocked without malware file",
                icon: Binary,
                delay: 0.2,
              },
              {
                title: "Suspicious lateral movement stopped with no IOC",
                icon: GitBranch,
                delay: 0.3,
              },
              {
                title: "Zero-day browser exploit isolated instantly",
                icon: Target,
                delay: 0.4,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item.delay }}
                className="relative pl-20"
              >
                {/* Animated dot - LARGER */}
                <motion.div
                  className="absolute left-2 top-6 w-8 h-8 rounded-full border-3 flex items-center justify-center"
                  style={{
                    borderColor: i % 2 === 0 ? accentColor : accentCyan,
                    backgroundColor: `${i % 2 === 0 ? accentColor : accentCyan}20`,
                    borderWidth: "3px",
                  }}
                  animate={{
                    boxShadow: [
                      `0 0 8px ${i % 2 === 0 ? accentColor : accentCyan}40`,
                      `0 0 25px ${i % 2 === 0 ? accentColor : accentCyan}80`,
                      `0 0 8px ${i % 2 === 0 ? accentColor : accentCyan}40`,
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                >
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: i % 2 === 0 ? accentColor : accentCyan }}
                  />
                </motion.div>

                <div className="p-8 bg-gradient-to-r from-violet-500/5 to-transparent border-l-3 border-violet-500/40">
                  <div className="flex items-start gap-4">
                    <div
                      className="p-3 rounded-lg flex-shrink-0"
                      style={{
                        backgroundColor: `${i % 2 === 0 ? accentColor : accentCyan}15`,
                      }}
                    >
                      <item.icon
                        className="w-8 h-8"
                        style={{ color: i % 2 === 0 ? accentColor : accentCyan }}
                      />
                    </div>
                    <p
                      className="text-2xl text-white leading-relaxed pt-1"
                      style={{ fontWeight: 500 }}
                    >
                      {item.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: AI + THREAT INTELLIGENCE CORE */}
      <section className="relative py-32 px-6 sm:px-8 md:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/10 to-transparent" />

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2
              className="text-4xl sm:text-5xl md:text-6xl text-white mb-4"
              style={{ fontWeight: 700 }}
            >
              AI + Threat Intelligence Core
            </h2>
          </motion.div>

          {/* Grid layout instead of circular */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
            {/* Top Row - 2 components */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative group"
            >
              <div className="p-8 bg-gradient-to-br from-cyan-500/10 to-transparent border-2 border-cyan-500/30 rounded-xl hover:border-cyan-500/70 transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-cyan-500/10 border-2 border-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Cpu className="w-9 h-9 text-cyan-400" />
                  </div>
                  <h3 className="text-xl text-white" style={{ fontWeight: 600 }}>
                    Machine Learning Models
                  </h3>
                </div>
                <motion.div
                  className="h-2 bg-gradient-to-r from-cyan-500/50 to-transparent rounded-full"
                  animate={{
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative group"
            >
              <div className="p-8 bg-gradient-to-br from-cyan-500/10 to-transparent border-2 border-cyan-500/30 rounded-xl hover:border-cyan-500/70 transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-cyan-500/10 border-2 border-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Database className="w-9 h-9 text-cyan-400" />
                  </div>
                  <h3 className="text-xl text-white" style={{ fontWeight: 600 }}>
                    Global Threat Telemetry
                  </h3>
                </div>
                <motion.div
                  className="h-2 bg-gradient-to-r from-cyan-500/50 to-transparent rounded-full"
                  animate={{
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 0.3,
                  }}
                />
              </div>
            </motion.div>

            {/* Center - AI Core (spans row on mobile) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:col-span-2 lg:col-span-1 lg:row-span-2 flex items-center justify-center"
            >
              <motion.div
                className="w-80 h-80 rounded-full border-4 border-violet-500 flex items-center justify-center relative"
                style={{
                  backgroundColor: "rgba(139, 92, 246, 0.15)",
                }}
                animate={{
                  boxShadow: [
                    "0 0 40px rgba(139, 92, 246, 0.5)",
                    "0 0 100px rgba(139, 92, 246, 0.9)",
                    "0 0 40px rgba(139, 92, 246, 0.5)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="text-center">
                  <Brain className="w-32 h-32 text-violet-400 mx-auto mb-4" />
                  <div className="text-xl text-white" style={{ fontWeight: 700 }}>
                    AI Detection
                  </div>
                  <div className="text-xl text-white" style={{ fontWeight: 700 }}>
                    Engine
                  </div>
                </div>

                {/* Pulsing rings */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-violet-500"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-violet-500"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: 1,
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Bottom Row - 2 components */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative group"
            >
              <div className="p-8 bg-gradient-to-br from-cyan-500/10 to-transparent border-2 border-cyan-500/30 rounded-xl hover:border-cyan-500/70 transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-cyan-500/10 border-2 border-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GitBranch className="w-9 h-9 text-cyan-400" />
                  </div>
                  <h3 className="text-xl text-white" style={{ fontWeight: 600 }}>
                    Behavior Graph Analysis
                  </h3>
                </div>
                <motion.div
                  className="h-2 bg-gradient-to-r from-cyan-500/50 to-transparent rounded-full"
                  animate={{
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 0.6,
                  }}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="relative group"
            >
              <div className="p-8 bg-gradient-to-br from-cyan-500/10 to-transparent border-2 border-cyan-500/30 rounded-xl hover:border-cyan-500/70 transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-cyan-500/10 border-2 border-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-9 h-9 text-cyan-400" />
                  </div>
                  <h3 className="text-xl text-white" style={{ fontWeight: 600 }}>
                    Automated Decision Logic
                  </h3>
                </div>
                <motion.div
                  className="h-2 bg-gradient-to-r from-cyan-500/50 to-transparent rounded-full"
                  animate={{
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 0.9,
                  }}
                />
              </div>
            </motion.div>
          </div>

          {/* Short line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-3 pt-20"
          >
            <p className="text-2xl text-white" style={{ fontWeight: 600 }}>
              Detection happens in <span className="text-violet-400">milliseconds</span>.
            </p>
            <p className="text-2xl text-white" style={{ fontWeight: 600 }}>
              Response happens <span className="text-cyan-400">instantly</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 7: WHO NEEDS ZERO-DAY PROTECTION */}
      <section className="relative py-32 px-6 sm:px-8 md:px-12 overflow-hidden">
        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2
              className="text-4xl sm:text-5xl md:text-6xl text-white mb-4"
              style={{ fontWeight: 700 }}
            >
              Who Needs Zero-Day Protection
            </h2>
          </motion.div>

          {/* Minimal text columns */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Enterprises handling sensitive data",
              "Financial & government systems",
              "SaaS & cloud-native platforms",
              "Organizations targeted by APTs",
              "Security-mature companies needing next-level defense",
            ].map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative group"
              >
                <div className="p-6 bg-gradient-to-br from-violet-500/5 to-transparent border-l-2 border-violet-500/30 hover:border-violet-500/70 transition-all">
                  <p className="text-xl text-white leading-relaxed" style={{ fontWeight: 500 }}>
                    {text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: PRICING PLANS */}
      {/* SECTION 8: PRICING PLANS */}
      <ServicePricing
        title={servicePlans["zero-day"].title}
        description={servicePlans["zero-day"].description}
        plans={servicePlans["zero-day"].plans}
        highlightColor="violet"
      />

      <section className="relative py-16 px-6 sm:px-8 md:px-12 overflow-hidden">
        <div className="relative max-w-7xl mx-auto">
          {/* Add-Ons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-violet-500/5 to-transparent border border-violet-500/30 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Zap className="w-6 h-6 text-violet-400" />
              <h3 className="text-2xl text-white" style={{ fontWeight: 700 }}>
                Add-Ons
              </h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "Advanced threat hunting hours", price: "Custom" },
                { name: "Memory forensics deep dive", price: "Custom" },
                { name: "Zero-day incident response retainer", price: "Custom" },
                { name: "Executive threat briefing", price: "Custom" },
                { name: "Compliance mapping (ISO / SOC / PCI)", price: "Custom" },
              ].map((addon, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center justify-between px-4 py-3 bg-black/40 border border-violet-500/20 rounded-lg hover:border-violet-500/60 transition-all"
                >
                  <span className="text-gray-300">{addon.name}</span>
                  <span className="text-violet-400" style={{ fontWeight: 600 }}>
                    {addon.price}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-16 space-y-4"
          >
            <p className="text-gray-400">
              All plans include AI-driven detection and real-time response
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Brain className="w-4 h-4 text-violet-400" />
                <span>AI-Powered Detection</span>
              </div>
              <div className="flex items-center gap-2">
                <Radar className="w-4 h-4 text-violet-400" />
                <span>Zero-Day Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-violet-400" />
                <span>Automated Response</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 9: FINAL CTA */}
      <section className="relative py-32 px-6 sm:px-8 md:px-12 overflow-hidden">
        {/* Almost black with moving noise */}
        <div className="absolute inset-0 bg-black">
          <motion.div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
            animate={{
              opacity: [0.03, 0.08, 0.03],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight"
              style={{ fontWeight: 700 }}
            >
              You can't patch what
              <br />
              <span className="text-gray-600">you don't know exists</span>.
            </h2>

            <p
              className="text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-500"
              style={{ fontWeight: 700 }}
            >
              But you can stop it.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
              <motion.button
                className="px-10 py-5 bg-gradient-to-r from-violet-700 to-violet-600 text-white rounded-lg text-lg flex items-center justify-center gap-3 shadow-2xl"
                style={{ fontWeight: 700 }}
                whileHover={{ scale: 1.05, boxShadow: "0 0 60px rgba(139, 92, 246, 0.6)" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate(ROUTES.CONTACT)}
              >
                Activate Zero-Day Protection
                <ArrowRight className="w-6 h-6" />
              </motion.button>

              <motion.button
                className="px-10 py-5 border border-cyan-500/50 text-cyan-400 rounded-lg text-lg flex items-center justify-center gap-3"
                style={{ fontWeight: 700 }}
                whileHover={{
                  borderColor: "rgba(6, 182, 212, 0.8)",
                  backgroundColor: "rgba(6, 182, 212, 0.1)",
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate(ROUTES.CONTACT)}
              >
                Talk to a Threat Specialist
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>


    </div>
  );
}
