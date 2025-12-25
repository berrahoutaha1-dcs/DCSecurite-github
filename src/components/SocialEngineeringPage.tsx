import { motion } from "framer-motion";
import { useOutletContext } from "react-router-dom";
import {
  Shield,
  Eye,
  Phone,
  Mail,
  MessageSquare,
  Users,
  User,
  Target,
  TrendingUp,
  FileText,
  CheckCircle,
  AlertTriangle,
  Clock,
  BarChart3,
  Award,
  Lock,
  Briefcase,
  Building2,
  DollarSign,
  Zap,
  ArrowRight,
  Search,
  MousePointer,
  Hash,
  Activity,
  UserCheck,
} from "lucide-react";
import { Header } from "./Header";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes";

// Footer import removed

interface SocialEngineeringPageProps {
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
}

interface LoginContext {
  openCustomerLogin: () => void;
}

export default function SocialEngineeringPage(props: SocialEngineeringPageProps) {
  const { openCustomerLogin } = useOutletContext<LoginContext>();
  const navigate = useNavigate();
  const accentColor = "#D97706"; // Amber for human risk indicators

  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      {/* Header */}
      <Header
        forceWhiteButtons={true}
        onUnderAttackClick={props.onUnderAttackClick}
        onSignInClick={props.onSignInClick}
        onCustomerLoginClick={props.onCustomerLoginClick}
        onAdminLoginClick={props.onAdminLoginClick}
        onStudentMemberLoginClick={props.onStudentMemberLoginClick}
        onCustomerSignUpClick={props.onCustomerSignUpClick}
        onStudentMemberSignUpClick={props.onStudentMemberSignUpClick}
        onSignUpModalOpen={props.onSignUpModalOpen}
      />

      {/* SECTION 1: HERO BANNER */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ paddingTop: "5cm" }}
      >
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(217, 119, 6, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(217, 119, 6, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-600/10 border border-amber-600/30 rounded-full">
                <Users className="w-4 h-4 text-amber-500" />
                <span className="text-sm text-amber-500">Human Risk Assessment</span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-tight">
                When technology is secure,
                <br />
                <span className="text-amber-500">attackers target people.</span>
              </h1>

              {/* Subtext */}
              <p className="text-2xl md:text-3xl text-gray-400 leading-relaxed">
                Simulate real-world phishing and social engineering attacks to measure, expose, and
                reduce human risk across your organization.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-amber-700 to-amber-600 text-white rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-amber-600/30"
                  style={{ fontWeight: 600 }}
                  whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(217, 119, 6, 0.5)" }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate(ROUTES.CONTACT)}
                >
                  Assess Human Risk
                  <ArrowRight className="w-5 h-5" />
                </motion.button>

                <motion.button
                  className="px-8 py-4 border border-amber-600/50 text-amber-500 rounded-lg flex items-center justify-center gap-2"
                  style={{ fontWeight: 600 }}
                  whileHover={{
                    borderColor: "rgba(217, 119, 6, 0.8)",
                    backgroundColor: "rgba(217, 119, 6, 0.1)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  See How Attacks Work
                </motion.button>
              </div>
            </motion.div>

            {/* Right: Abstract visualization */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-[500px] flex items-center justify-center">
                {/* Central human silhouette */}
                <div className="absolute z-10">
                  <motion.div
                    className="w-32 h-32 bg-amber-600/20 border-2 border-amber-600 rounded-full flex items-center justify-center"
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(217, 119, 6, 0.3)",
                        "0 0 40px rgba(217, 119, 6, 0.6)",
                        "0 0 20px rgba(217, 119, 6, 0.3)",
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <User className="w-16 h-16 text-amber-500" />
                  </motion.div>
                </div>

                {/* Communication lines converging to center */}
                {[
                  { icon: Mail, label: "Phishing", angle: 0, color: "#ef4444" },
                  { icon: Phone, label: "Vishing", angle: 72, color: "#f59e0b" },
                  { icon: MessageSquare, label: "SMS", angle: 144, color: "#10b981" },
                  { icon: Eye, label: "Pretexting", angle: 216, color: "#3b82f6" },
                  { icon: Target, label: "Targeting", angle: 288, color: "#8b5cf6" },
                ].map((item, i) => {
                  const radius = 180;
                  const x = Math.cos((item.angle * Math.PI) / 180) * radius;
                  const y = Math.sin((item.angle * Math.PI) / 180) * radius;

                  return (
                    <motion.div
                      key={i}
                      className="absolute"
                      style={{
                        left: "50%",
                        top: "50%",
                      }}
                      initial={{ x, y }}
                      animate={{
                        x: [x, x * 1.1, x],
                        y: [y, y * 1.1, y],
                        opacity: [0.4, 1, 0.4],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: i * 0.8,
                      }}
                    >
                      <div className="relative -translate-x-1/2 -translate-y-1/2">
                        <div
                          className="w-16 h-16 border-2 rounded-lg flex items-center justify-center backdrop-blur-sm"
                          style={{
                            borderColor: item.color,
                            backgroundColor: `${item.color}20`,
                          }}
                        >
                          <item.icon className="w-8 h-8" style={{ color: item.color }} />
                        </div>
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                          <span className="text-xs" style={{ color: item.color }}>
                            {item.label}
                          </span>
                        </div>

                        {/* Connection line to center */}
                        <svg
                          className="absolute inset-0 w-full h-full pointer-events-none"
                          style={{ overflow: "visible" }}
                        >
                          <motion.line
                            x1="50%"
                            y1="50%"
                            x2={-x}
                            y2={-y}
                            stroke={item.color}
                            strokeWidth="1"
                            opacity="0.3"
                            strokeDasharray="4 4"
                            animate={{
                              strokeDashoffset: [0, -8],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          />
                        </svg>
                      </div>
                    </motion.div>
                  );
                })}

                {/* Fading messages animation */}
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={`msg-${i}`}
                    className="absolute w-1 h-1 bg-amber-500 rounded-full"
                    style={{
                      left: `${30 + Math.random() * 40}%`,
                      top: `${30 + Math.random() * 40}%`,
                    }}
                    animate={{
                      opacity: [0, 0.8, 0],
                      scale: [0.5, 1.5, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.4,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHAT IS SOCIAL ENGINEERING */}
      <section className="relative py-32 px-6 sm:px-8 md:px-12 overflow-hidden">
        {/* Separator */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        />

        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            {/* Title */}
            <h2
              className="text-4xl sm:text-5xl md:text-6xl text-white text-center"
              style={{ fontWeight: 700 }}
            >
              What Is Social Engineering?
            </h2>

            {/* Main content */}
            <div className="space-y-12">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl text-white leading-relaxed text-center"
                style={{ fontWeight: 500 }}
              >
                Social engineering attacks exploit trust, urgency, and curiosity.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-2xl md:text-3xl text-gray-400 leading-relaxed text-center max-w-5xl mx-auto"
              >
                Instead of breaking systems, attackers manipulate people to gain access,
                credentials, or sensitive information.
              </motion.p>
            </div>

            {/* Key Targets */}
            <div className="pt-12">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl text-amber-500 text-center mb-8"
                style={{ fontWeight: 600 }}
              >
                Key Targets
              </motion.h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { icon: Users, label: "Employees" },
                  { icon: Briefcase, label: "Executives" },
                  { icon: Building2, label: "IT & Finance Teams" },
                  { icon: UserCheck, label: "Customer-Facing Staff" },
                ].map((target, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="text-center space-y-4"
                  >
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-600/10 border border-amber-600/30 rounded-lg">
                      <target.icon className="w-10 h-10 text-amber-500" />
                    </div>
                    <p className="text-xl text-white" style={{ fontWeight: 500 }}>
                      {target.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: OUR ASSESSMENT APPROACH */}
      <section className="relative py-32 px-6 sm:px-8 md:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-600/5 to-transparent" />

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
              Our Assessment Approach
            </h2>
          </motion.div>

          {/* Split screen */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {[
                {
                  icon: Mail,
                  title: "Phishing Campaigns",
                  desc: "Email-based attacks",
                },
                {
                  icon: Phone,
                  title: "Vishing",
                  desc: "Voice & phone manipulation",
                },
                {
                  icon: Eye,
                  title: "Pretexting & Impersonation",
                  desc: "Scenario-based social manipulation",
                },
                {
                  icon: Lock,
                  title: "Credential Harvesting",
                  desc: "Simulated login page attacks",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 p-6 bg-gradient-to-r from-amber-600/5 to-transparent border-l-2 border-amber-600"
                >
                  <div className="p-3 bg-amber-600/10 rounded-lg flex-shrink-0">
                    <item.icon className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl text-white mb-1" style={{ fontWeight: 600 }}>
                      {item.title}
                    </h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}

              {/* Note */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="pt-8 pl-6 border-l-2 border-gray-600"
              >
                <p className="text-lg text-gray-500 italic">
                  All simulations are ethical, controlled, and authorized.
                </p>
              </motion.div>
            </motion.div>

            {/* Right: Animated diagram */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-96"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Circular flow diagram */}
                <div className="relative w-80 h-80">
                  {[
                    { label: "Plan", angle: 0 },
                    { label: "Execute", angle: 90 },
                    { label: "Monitor", angle: 180 },
                    { label: "Analyze", angle: 270 },
                  ].map((phase, i) => {
                    const radius = 120;
                    const x = Math.cos((phase.angle * Math.PI) / 180) * radius;
                    const y = Math.sin((phase.angle * Math.PI) / 180) * radius;

                    return (
                      <motion.div
                        key={i}
                        className="absolute left-1/2 top-1/2"
                        style={{
                          transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15 }}
                      >
                        <div className="w-24 h-24 bg-amber-600/10 border-2 border-amber-600 rounded-full flex items-center justify-center">
                          <span className="text-sm text-white" style={{ fontWeight: 600 }}>
                            {phase.label}
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}

                  {/* Rotating ring */}
                  <motion.div
                    className="absolute inset-0 border-2 border-dashed border-amber-600/30 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4: REALISTIC ATTACK SCENARIOS - TIMELINE */}
      <section className="relative py-32 px-6 sm:px-8 md:px-12 overflow-hidden">
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
              Realistic Attack Scenarios
            </h2>
            <p className="text-xl text-gray-400">Step-by-step attack simulation flow</p>
          </motion.div>

          {/* Vertical timeline */}
          <div className="relative space-y-8">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-amber-600/20 via-amber-600/60 to-amber-600/20" />

            {[
              {
                step: "01",
                title: "Reconnaissance",
                desc: "Public info & behavior analysis",
                icon: Search,
              },
              {
                step: "02",
                title: "Scenario Design",
                desc: "Role, urgency, message tone",
                icon: FileText,
              },
              {
                step: "03",
                title: "Attack Execution",
                desc: "Email / phone / hybrid",
                icon: Target,
              },
              {
                step: "04",
                title: "User Interaction Tracking",
                desc: "Monitor clicks, submissions, responses",
                icon: MousePointer,
              },
              {
                step: "05",
                title: "Risk Exposure Analysis",
                desc: "Identify vulnerabilities & patterns",
                icon: BarChart3,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-20"
              >
                {/* Step circle */}
                <div className="absolute left-0 top-0 w-16 h-16 bg-amber-600/10 border-2 border-amber-600 rounded-full flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-amber-500" />
                </div>

                {/* Step number */}
                <div
                  className="absolute left-20 top-1 text-4xl text-amber-600/20 font-mono"
                  style={{ fontWeight: 700 }}
                >
                  {item.step}
                </div>

                <div className="ml-8 p-6 bg-gradient-to-r from-amber-600/5 to-transparent border-l-2 border-amber-600/50">
                  <h3 className="text-2xl text-white mb-2" style={{ fontWeight: 600 }}>
                    {item.title}
                  </h3>
                  <p className="text-lg text-gray-400">{item.desc}</p>
                </div>

                {/* Timeline dot animation */}
                <motion.div
                  className="absolute left-8 top-8 w-2 h-2 bg-amber-500 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: WHAT WE MEASURE */}
      <section className="relative py-32 px-6 sm:px-8 md:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-transparent" />

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
              What We Measure
            </h2>
            <p className="text-xl text-amber-500">Data-driven insight into human behavior</p>
          </motion.div>

          {/* Minimal grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { metric: "Click & Interaction Rate", icon: MousePointer },
              { metric: "Credential Submission Rate", icon: Lock },
              { metric: "Reporting Rate", desc: "(security awareness)", icon: AlertTriangle },
              { metric: "Time to Detect & Report", icon: Clock },
              { metric: "High-Risk User Patterns", icon: TrendingUp },
              { metric: "Department Risk Scores", icon: BarChart3 },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative group"
              >
                <div className="p-6 bg-gradient-to-br from-amber-600/5 to-transparent border border-amber-600/20 hover:border-amber-600/50 transition-all">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="p-2 bg-amber-600/10 rounded-lg">
                      <item.icon className="w-6 h-6 text-amber-500" />
                    </div>
                  </div>
                  <h3 className="text-xl text-white mb-1" style={{ fontWeight: 600 }}>
                    {item.metric}
                  </h3>
                  {item.desc && <p className="text-sm text-gray-500">{item.desc}</p>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: BUSINESS IMPACT */}
      <section className="relative py-32 px-6 sm:px-8 md:px-12 overflow-hidden">
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
              Business Impact
            </h2>
          </motion.div>

          {/* Bold statements */}
          <div className="space-y-8">
            {[
              { text: "Reduce breach likelihood", delay: 0.1 },
              { text: "Strengthen security culture", delay: 0.15 },
              { text: "Identify high-risk behaviors", delay: 0.2 },
              { text: "Improve awareness programs", delay: 0.25 },
              { text: "Support compliance & audits", delay: 0.3 },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item.delay }}
                className="relative"
              >
                <div className="p-8 bg-gradient-to-r from-amber-600/5 to-transparent border-l-4 border-amber-600">
                  <p className="text-3xl md:text-4xl text-white" style={{ fontWeight: 600 }}>
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: ETHICAL & LEGAL ASSURANCE */}
      <section className="relative py-32 px-6 sm:px-8 md:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-600/5 to-transparent" />

        <div className="relative max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-600/10 border-2 border-amber-600 rounded-full mb-8">
              <Shield className="w-10 h-10 text-amber-500" />
            </div>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl text-white mb-4"
              style={{ fontWeight: 700 }}
            >
              Ethical & Legal Assurance
            </h2>
          </motion.div>

          {/* Trust-focused content */}
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: FileText, text: "Written authorization required" },
              { icon: Shield, text: "No personal data misuse" },
              { icon: CheckCircle, text: "No disruption to operations" },
              { icon: Eye, text: "Full transparency after assessment" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 p-6 bg-gradient-to-br from-gray-800/50 to-transparent border border-gray-700/50"
              >
                <div className="p-3 bg-amber-600/10 rounded-lg flex-shrink-0">
                  <item.icon className="w-6 h-6 text-amber-500" />
                </div>
                <p className="text-xl text-white pt-2" style={{ fontWeight: 500 }}>
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: DELIVERABLES */}
      <section className="relative py-32 px-6 sm:px-8 md:px-12 overflow-hidden">
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
              Deliverables
            </h2>
            <p className="text-xl text-gray-400">You Receive</p>
          </motion.div>

          {/* Simple list */}
          <div className="space-y-4">
            {[
              { text: "Executive summary", delay: 0.1 },
              { text: "Risk scoring per scenario", delay: 0.15 },
              { text: "User behavior analysis", delay: 0.2 },
              { text: "Improvement recommendations", delay: 0.25 },
              { text: "Awareness & mitigation roadmap", delay: 0.3 },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item.delay }}
                className="flex items-start gap-4 p-6 bg-gradient-to-r from-amber-600/5 to-transparent border-l-2 border-amber-600"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: item.delay + 0.1, type: "spring" }}
                >
                  <CheckCircle className="w-7 h-7 text-amber-500 flex-shrink-0" strokeWidth={2} />
                </motion.div>
                <span className="text-xl text-white" style={{ fontWeight: 500 }}>
                  {item.text}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: PRICING PLANS */}
      {/* SECTION 9: PRICING PLANS */}
      {/* SECTION 9: PRICING PLANS */}
      <section className="relative py-20 px-6 sm:px-8 md:px-12 overflow-hidden">
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-3xl sm:text-4xl md:text-5xl text-white mb-6"
              style={{ fontWeight: 700 }}
            >
              Assessment Pricing
            </h2>
            <p className="text-xl text-gray-400">
              Transparent packages for human risk testing
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Phishing Simulation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-2xl border border-amber-600/20 bg-amber-600/5 hover:border-amber-600/50 transition-all"
            >
              <h3 className="text-2xl text-white mb-2" style={{ fontWeight: 600 }}>Phishing Simulation</h3>
              <div className="text-4xl text-amber-500 mb-6" style={{ fontWeight: 700 }}>
                Custom
              </div>
              <p className="text-gray-400 mb-8">
                Targeted email assessment for employees
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5" />
                  <span className="text-gray-300">Custom email templates</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5" />
                  <span className="text-gray-300">Credential harvesting test</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5" />
                  <span className="text-gray-300"> detailed click analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5" />
                  <span className="text-gray-300">Post-campaign report</span>
                </li>
              </ul>
              <button
                className="w-full py-4 rounded-lg border border-amber-600 text-amber-500 hover:bg-amber-600 hover:text-white transition-all font-bold"
                onClick={openCustomerLogin}
              >
                Run Campaign
              </button>
            </motion.div>

            {/* Full Social - Highlighted */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative p-8 rounded-2xl border-2 border-amber-500 bg-amber-500/10 shadow-[0_0_50px_rgba(217,119,6,0.15)] transform md:-translate-y-4"
            >
              <div className="absolute top-0 right-0 bg-amber-500 text-black text-xs font-bold px-4 py-1.5 rounded-bl-lg rounded-tr-lg hidden">
                RECOMMENDED
              </div>
              <h3 className="text-2xl text-white mb-2" style={{ fontWeight: 600 }}>Full Social Assessment</h3>
              <div className="text-4xl text-amber-500 mb-6" style={{ fontWeight: 700 }}>
                Custom
              </div>
              <p className="text-gray-400 mb-8">
                Comprehensive multi-vector human testing
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5" />
                  <span className="text-white">Email phishing + Vishing (phone)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5" />
                  <span className="text-white">SMS Smishing simulation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5" />
                  <span className="text-white">Impersonation scenarios</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5" />
                  <span className="text-white">Full risk exposure analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5" />
                  <span className="text-white">Executive debriefing</span>
                </li>
              </ul>
              <button
                className="w-full py-4 rounded-lg bg-amber-600 text-white hover:bg-amber-500 transition-all font-bold shadow-lg shadow-amber-600/20"
                onClick={openCustomerLogin}
              >
                Test Full Scope
              </button>
            </motion.div>

            {/* Ongoing Training */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative p-8 rounded-2xl border border-amber-600/20 bg-amber-600/5 hover:border-amber-600/50 transition-all"
            >
              <h3 className="text-2xl text-white mb-2" style={{ fontWeight: 600 }}>Ongoing Awareness</h3>
              <div className="text-4xl text-amber-500 mb-6" style={{ fontWeight: 700 }}>
                Custom
              </div>
              <p className="text-gray-400 mb-8">
                Continuous education & testing program
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5" />
                  <span className="text-gray-300">Quarterly simulations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5" />
                  <span className="text-gray-300">Learning Management System</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5" />
                  <span className="text-gray-300">Gamified security training</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5" />
                  <span className="text-gray-300">Department-level scoring</span>
                </li>
              </ul>
              <button
                className="w-full py-4 rounded-lg border border-amber-600 text-amber-500 hover:bg-amber-600 hover:text-white transition-all font-bold"
                onClick={openCustomerLogin}
              >
                Get Started
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-16 px-6 sm:px-8 md:px-12 overflow-hidden">
        <div className="relative max-w-7xl mx-auto">
          {/* Add-Ons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-amber-600/5 to-transparent border border-amber-600/30 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Zap className="w-6 h-6 text-amber-500" />
              <h3 className="text-2xl text-white" style={{ fontWeight: 700 }}>
                Add-Ons
              </h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "Voice phishing (vishing)", price: "Custom" },
                { name: "CEO / executive impersonation", price: "Custom" },
                { name: "Immediate awareness training", price: "Custom" },
                { name: "Additional campaign wave", price: "Custom" },
                { name: "Compliance attestation letter", price: "Custom" },
              ].map((addon, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center justify-between px-4 py-3 bg-black/40 border border-amber-600/20 rounded-lg hover:border-amber-600/60 transition-all"
                >
                  <span className="text-gray-300">{addon.name}</span>
                  <span className="text-amber-500" style={{ fontWeight: 600 }}>
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
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mt-16 space-y-4"
          >
            <p className="text-gray-400">
              All campaigns require written authorization and follow ethical testing standards
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-amber-500" />
                <span>Ethical & Authorized</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-amber-500" />
                <span>Human Risk Focus</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-amber-500" />
                <span>Detailed Reports</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 10: FINAL CTA */}
      <section className="relative py-32 px-6 sm:px-8 md:px-12 overflow-hidden">
        {/* Calm gradient background */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-gray-900 to-black"
            animate={{
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
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
              Security fails when
              <br />
              <span className="text-amber-500">people are unprepared.</span>
            </h2>

            <p className="text-2xl text-gray-400 max-w-3xl mx-auto">
              Test awareness before attackers do.
            </p>

            {/* CTA Button */}
            <div className="flex justify-center pt-8">
              <motion.button
                className="px-10 py-5 bg-gradient-to-r from-amber-700 to-amber-600 text-white rounded-lg text-lg flex items-center gap-3 shadow-2xl"
                style={{ fontWeight: 700 }}
                whileHover={{ scale: 1.05, boxShadow: "0 0 60px rgba(217, 119, 6, 0.5)" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate(ROUTES.CONTACT)}
              >
                Run a Social Engineering Assessment
                <ArrowRight className="w-6 h-6" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer rendering removed */}
    </div>
  );
}
