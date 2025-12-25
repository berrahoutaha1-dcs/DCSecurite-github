import { motion } from "framer-motion";
import { useOutletContext } from "react-router-dom";
import {
  Shield,
  Target,
  Eye,
  Lock,
  Unlock,
  AlertTriangle,
  CheckCircle,
  FileText,
  Activity,
  TrendingUp,
  Users,
  Building2,
  DollarSign,
  Zap,
  ArrowRight,
  Terminal,
  Search,
  Key,
  Network,
  Cloud,
  Radio,
  Layers,
  Bug,
  GitBranch,
  Database,
  Server,
  Skull,
} from "lucide-react";
import { Header } from "./Header";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes";

// Footer import removed

interface RedTeamAssessmentsPageProps {
  onPrivacyClick?: () => void;
  onTermsClick?: () => void;
  onCookieClick?: () => void;
  onUnderAttackClick?: () => void;
  onSignInClick?: () => void;
  onCustomerLoginClick?: () => void;
  onAdminLoginClick?: () => void;
  onStudentMemberLoginClick?: () => void;
  onCustomerSignUpClick?: () => void;
  onStudentMemberSignUpClick?: () => void;
  onSignUpModalOpen?: () => void;
}

interface LoginContext {
  openCustomerLogin: () => void;
}

export default function RedTeamAssessmentsPage(props: RedTeamAssessmentsPageProps) {
  const { openCustomerLogin } = useOutletContext<LoginContext>();
  const navigate = useNavigate();
  const accentColor = "#DC2626"; // Deep red for adversarial theme

  return (
    <div className="min-h-screen bg-black">
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

      {/* Terminal-like noise texture */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
          animate={{
            opacity: [0.03, 0.05, 0.03],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* SECTION 1: HERO BANNER */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ paddingTop: "5cm" }}
      >
        {/* Red scanning lines */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute left-0 right-0 h-px"
              style={{
                background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
                top: `${10 + i * 12}%`,
              }}
              animate={{
                x: ["-100%", "200%"],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.5,
              }}
            />
          ))}

          {/* Attack path drawing */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <motion.path
              d="M 0,300 Q 200,100 400,200 T 800,300 Q 1000,400 1200,300"
              stroke={accentColor}
              strokeWidth="2"
              fill="none"
              strokeDasharray="10 5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>

          {/* Terminal cursor blink */}
          <motion.div
            className="absolute top-20 right-20 w-2 h-6 bg-red-500"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full">
              <Skull className="w-4 h-4 text-red-400" />
              <span className="text-sm text-red-400">Adversary Simulation • Real Attacks</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-tight">
              Think Like an Attacker.
              <br />
              <span className="text-red-500">Break Like One.</span>
            </h1>

            {/* Subtext */}
            <p className="text-2xl md:text-3xl text-gray-400 leading-relaxed max-w-4xl">
              Simulate real-world cyber attacks to expose what automated tools and blue teams miss.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-red-700 to-red-600 text-white rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-red-500/30"
                style={{ fontWeight: 600 }}
                whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(220, 38, 38, 0.5)" }}
                whileTap={{ scale: 0.98 }}
                onClick={openCustomerLogin}
              >
                Request Red Team Operation
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                className="px-8 py-4 border border-red-500/50 text-red-400 rounded-lg flex items-center justify-center gap-2"
                style={{ fontWeight: 600 }}
                whileHover={{
                  borderColor: "rgba(220, 38, 38, 0.8)",
                  backgroundColor: "rgba(220, 38, 38, 0.1)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                View Attack Scenarios
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: WHAT IS RED TEAM ASSESSMENT - NARRATIVE */}
      <section className="relative py-32 px-6 sm:px-8 md:px-12 overflow-hidden">
        {/* Separator */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        />

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Aggressive text blocks */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2
                className="text-4xl sm:text-5xl md:text-6xl text-white mb-8"
                style={{ fontWeight: 700 }}
              >
                What Is a Red Team Assessment?
              </h2>

              {[
                { text: "Real adversary simulation", delay: 0.1 },
                { text: "No assumptions, no limits", delay: 0.2 },
                { text: "Objective-based attacks", delay: 0.3 },
                { text: "Stealth, persistence, and evasion", delay: 0.4 },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: item.delay }}
                  className="relative"
                >
                  <div className="p-6 bg-gradient-to-r from-red-500/5 to-transparent border-l-4 border-red-500">
                    <p className="text-2xl md:text-3xl text-white" style={{ fontWeight: 600 }}>
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Right: Kill-chain progression */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="space-y-4">
                {[
                  { phase: "Reconnaissance", icon: Search, progress: 100 },
                  { phase: "Initial Access", icon: Unlock, progress: 80 },
                  { phase: "Privilege Escalation", icon: TrendingUp, progress: 60 },
                  { phase: "Lateral Movement", icon: Network, progress: 40 },
                  { phase: "Persistence", icon: Lock, progress: 20 },
                  { phase: "Impact", icon: Target, progress: 10 },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative"
                  >
                    <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-black to-red-900/10 border-l-2 border-red-500">
                      <div className="p-2 bg-red-500/20 rounded-lg">
                        <item.icon className="w-6 h-6 text-red-400" />
                      </div>
                      <div className="flex-1">
                        <div className="text-lg text-white mb-2" style={{ fontWeight: 600 }}>
                          {item.phase}
                        </div>
                        <div className="h-1 bg-red-900/30 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-red-600 to-red-400"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.progress}%` }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 + 0.3, duration: 0.8 }}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: ATTACK KILL CHAIN VISUALIZATION */}
      <section className="relative py-32 px-6 sm:px-8 md:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/10 to-transparent" />

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
              Attack Kill Chain
            </h2>
            <p className="text-xl text-gray-400">
              How real attackers move through your environment
            </p>
          </motion.div>

          {/* Horizontal timeline */}
          <div className="relative">
            {/* Connection line */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-red-500/20 via-red-500/60 to-red-500/20 hidden lg:block" />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {[
                { phase: "Reconnaissance", icon: Search, desc: "Target identification" },
                { phase: "Initial Access", icon: Unlock, desc: "Foothold establishment" },
                { phase: "Privilege Escalation", icon: TrendingUp, desc: "Elevation of rights" },
                { phase: "Lateral Movement", icon: Network, desc: "Network traversal" },
                { phase: "Persistence", icon: Lock, desc: "Maintain access" },
                { phase: "Impact", icon: Target, desc: "Objective achieved" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="relative"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    {/* Icon with red glow that intensifies */}
                    <motion.div
                      className="w-20 h-20 bg-red-500/10 border-2 border-red-500 rounded-full flex items-center justify-center relative"
                      whileInView={{
                        boxShadow: [
                          "0 0 10px rgba(220, 38, 38, 0.3)",
                          `0 0 ${20 + i * 10}px rgba(220, 38, 38, ${0.5 + i * 0.1})`,
                        ],
                      }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 + 0.5, duration: 1 }}
                    >
                      <item.icon className="w-10 h-10 text-red-400" />
                    </motion.div>

                    <div>
                      <h3 className="text-lg text-white mb-1" style={{ fontWeight: 600 }}>
                        {item.phase}
                      </h3>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>

                    {/* Phase number */}
                    <span className="text-xs text-red-400/50 font-mono">
                      [{(i + 1).toString().padStart(2, "0")}]
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHAT WE TEST - ATTACK SCENARIOS */}
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
              Attack Scenarios We Simulate
            </h2>
          </motion.div>

          {/* Split-screen sections */}
          <div className="space-y-12">
            {[
              {
                title: "External Network Attacks",
                impact: "Your perimeter is only as strong as its weakest service.",
                icon: Network,
                side: "left",
              },
              {
                title: "Internal Breach Simulation",
                impact: "What happens when an attacker is already inside?",
                icon: Building2,
                side: "right",
              },
              {
                title: "Phishing & Social Engineering",
                impact: "Technology fails when humans are the target.",
                icon: Eye,
                side: "left",
              },
              {
                title: "Active Directory Compromise",
                impact: "Control AD, control the entire domain.",
                icon: Key,
                side: "right",
              },
              {
                title: "Cloud & Hybrid Environments",
                impact: "Misconfigured cloud resources = open doors.",
                icon: Cloud,
                side: "left",
              },
              {
                title: "Physical & Wireless Entry",
                impact: "Digital security means nothing if the door is unlocked.",
                icon: Radio,
                side: "right",
              },
            ].map((scenario, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: scenario.side === "left" ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className={`relative grid lg:grid-cols-2 gap-8 items-center ${scenario.side === "right" ? "lg:flex-row-reverse" : ""
                  }`}
              >
                {/* Content side */}
                <div className={`space-y-4 ${scenario.side === "right" ? "lg:col-start-2" : ""}`}>
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                      <scenario.icon className="w-8 h-8 text-red-400" />
                    </div>
                    <h3 className="text-3xl text-white" style={{ fontWeight: 700 }}>
                      {scenario.title}
                    </h3>
                  </div>
                  <p className="text-2xl text-gray-400 italic leading-relaxed">
                    "{scenario.impact}"
                  </p>
                </div>

                {/* Animation side */}
                <div
                  className={`relative h-64 ${scenario.side === "right" ? "lg:col-start-1 lg:row-start-1" : ""
                    }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent border border-red-500/20 rounded-xl overflow-hidden">
                    {/* Animated background effect */}
                    <motion.div
                      className="absolute inset-0"
                      style={{
                        background: `radial-gradient(circle at 50% 50%, rgba(220, 38, 38, 0.1), transparent 70%)`,
                      }}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    {/* Scanning lines */}
                    {[...Array(5)].map((_, j) => (
                      <motion.div
                        key={j}
                        className="absolute left-0 right-0 h-px bg-red-500/30"
                        style={{ top: `${20 + j * 20}%` }}
                        animate={{
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: j * 0.3,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: RED TEAM VS BLUE TEAM VS PENTEST */}
      <section className="relative py-32 px-6 sm:px-8 md:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black to-transparent" />

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
              Red Team vs Pentest vs Blue Team
            </h2>
            <p className="text-xl text-gray-400">Understanding the difference</p>
          </motion.div>

          {/* Minimalist comparison using lines & typography */}
          <div className="space-y-8">
            {[
              {
                type: "Red Team",
                focus: "Objective-driven, stealth, long-term",
                color: "red",
                delay: 0.1,
              },
              {
                type: "Penetration Test",
                focus: "Vulnerability-driven, limited scope",
                color: "orange",
                delay: 0.2,
              },
              {
                type: "Blue Team",
                focus: "Detection & response focus",
                color: "blue",
                delay: 0.3,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item.delay }}
                className="relative"
              >
                <div className="flex items-center gap-8 p-8 border-l-4 border-red-500">
                  <div className="min-w-[200px]">
                    <h3 className="text-3xl text-white" style={{ fontWeight: 700 }}>
                      {item.type}
                    </h3>
                  </div>
                  <div className="flex-1">
                    <p className="text-2xl text-gray-400">{item.focus}</p>
                  </div>
                </div>

                {/* Separator line */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-red-500/20 via-red-500/40 to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: item.delay + 0.2, duration: 0.6 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: WHY RED TEAMING MATTERS */}
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
              Why Red Teaming Matters
            </h2>
          </motion.div>

          {/* Vertical scrolling with appearing text */}
          <div className="space-y-12">
            {[
              { text: "Bypass security controls", delay: 0.1 },
              { text: "Test people, processes, and technology", delay: 0.2 },
              { text: "Measure real incident readiness", delay: 0.3 },
              { text: "Reveal unknown attack paths", delay: 0.4 },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item.delay }}
                className="relative"
              >
                <div className="p-8 bg-gradient-to-r from-red-500/5 to-transparent border-l-4 border-red-500">
                  <p
                    className="text-3xl md:text-4xl text-white leading-relaxed"
                    style={{ fontWeight: 600 }}
                  >
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: DELIVERABLES & OUTCOMES */}
      <section className="relative py-32 px-6 sm:px-8 md:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/10 to-transparent" />

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
              Deliverables & Outcomes
            </h2>
            <p className="text-xl text-gray-400">What you receive after the engagement</p>
          </motion.div>

          {/* Progressive reveal */}
          <div className="space-y-4">
            {[
              { text: "Executive attack narrative", delay: 0.1 },
              { text: "Timeline of compromise", delay: 0.15 },
              { text: "Proof of access & impact", delay: 0.2 },
              { text: "Detection gaps", delay: 0.25 },
              { text: "Blue team performance metrics", delay: 0.3 },
              { text: "Actionable remediation plan", delay: 0.35 },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item.delay }}
                className="flex items-start gap-4 p-6 bg-gradient-to-r from-red-500/5 to-transparent border-l-2 border-red-500"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: item.delay + 0.1, type: "spring" }}
                >
                  <CheckCircle className="w-7 h-7 text-red-400 flex-shrink-0" strokeWidth={2} />
                </motion.div>
                <span className="text-xl text-white" style={{ fontWeight: 500 }}>
                  {item.text}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: WHO NEEDS RED TEAM ASSESSMENTS */}
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
              Who Needs Red Team Assessments
            </h2>
          </motion.div>

          {/* Large typography with fading transitions */}
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { text: "Enterprises", delay: 0.1 },
              { text: "Financial Institutions", delay: 0.2 },
              { text: "Government & Critical Infrastructure", delay: 0.3 },
              { text: "SaaS & Cloud-Native Companies", delay: 0.4 },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: item.delay }}
                className="relative group"
              >
                <div className="p-8 bg-gradient-to-br from-red-500/5 to-transparent border border-red-500/20 rounded-xl hover:border-red-500/50 transition-all">
                  <h3
                    className="text-3xl md:text-4xl text-white text-center"
                    style={{ fontWeight: 700 }}
                  >
                    {item.text}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: PRICING PLANS */}
      {/* SECTION 9: PRICING PLANS */}
      {/* SECTION 9: PRICING PLANS */}
      <section className="relative py-16 px-6 sm:px-8 md:px-12 overflow-hidden">
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
              Engagement Models
            </h2>
            <p className="text-xl text-gray-400">
              Select the depth of adversarial simulation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Standard Assessment */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-2xl border border-red-500/20 bg-red-500/5 hover:border-red-500/50 transition-all"
            >
              <h3 className="text-2xl text-white mb-2" style={{ fontWeight: 600 }}>Standard Assessment</h3>
              <div className="text-4xl text-red-500 mb-6" style={{ fontWeight: 700 }}>
                Custom
              </div>
              <p className="text-gray-400 mb-8">
                Focused simulation on specific critical assets
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500 mt-0.5" />
                  <span className="text-gray-300">2-week campaign duration</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500 mt-0.5" />
                  <span className="text-gray-300">External & Internal vectors</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500 mt-0.5" />
                  <span className="text-gray-300">Standard evasion techniques</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500 mt-0.5" />
                  <span className="text-gray-300">Full technical narrative report</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500 mt-0.5" />
                  <span className="text-gray-300">Blue team debriefing</span>
                </li>
              </ul>
              <button
                className="w-full py-4 rounded-lg border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all font-bold"
                onClick={openCustomerLogin}
              >
                Inquire Now
              </button>
            </motion.div>

            {/* Full Spectrum - Highlighted */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative p-8 rounded-2xl border-2 border-red-500 bg-red-500/10 shadow-[0_0_50px_rgba(220,38,38,0.15)] transform md:-translate-y-4"
            >
              <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-4 py-1.5 rounded-bl-lg rounded-tr-lg hidden">
                MOST POPULAR
              </div>
              <h3 className="text-2xl text-white mb-2" style={{ fontWeight: 600 }}>Full Spectrum Operation</h3>
              <div className="text-4xl text-red-500 mb-6" style={{ fontWeight: 700 }}>
                Custom
              </div>
              <p className="text-gray-400 mb-8">
                Comprehensive multi-vector adversary simulation
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500 mt-0.5" />
                  <span className="text-white">4-week campaign duration</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500 mt-0.5" />
                  <span className="text-white">Full Physical & Social Engineering</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500 mt-0.5" />
                  <span className="text-white">Advanced custom payload development</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500 mt-0.5" />
                  <span className="text-white">Stealth & persistence focus</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500 mt-0.5" />
                  <span className="text-white">Executive & Board presentation</span>
                </li>
              </ul>
              <button
                className="w-full py-4 rounded-lg bg-red-600 text-white hover:bg-red-500 transition-all font-bold shadow-lg shadow-red-600/20"
                onClick={openCustomerLogin}
              >
                Get Started
              </button>
            </motion.div>

            {/* Continuous - Custom */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative p-8 rounded-2xl border border-red-500/20 bg-red-500/5 hover:border-red-500/50 transition-all"
            >
              <h3 className="text-2xl text-white mb-2" style={{ fontWeight: 600 }}>Continuous Red Team</h3>
              <div className="text-4xl text-red-500 mb-6" style={{ fontWeight: 700 }}>
                Custom
              </div>
              <p className="text-gray-400 mb-8">
                Ongoing adversarial testing for mature orgs
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500 mt-0.5" />
                  <span className="text-gray-300">Continuous attack surface testing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500 mt-0.5" />
                  <span className="text-gray-300">Rapid response to new vulnerabilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500 mt-0.5" />
                  <span className="text-gray-300">Quarterly objective setting</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500 mt-0.5" />
                  <span className="text-gray-300">Integrated Purple Teaming exercises</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500 mt-0.5" />
                  <span className="text-gray-300">Dedicated adversary emulation team</span>
                </li>
              </ul>
              <button
                className="w-full py-4 rounded-lg border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all font-bold"
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
          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4"
          >
            <p className="text-gray-400">
              All engagements include secure communication channels and NDA protection
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-red-400" />
                <span>Certified Red Team Operators</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-red-400" />
                <span>Objective-Based Testing</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-red-400" />
                <span>Detailed Attack Reports</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 10: FINAL CTA */}
      <section className="relative py-32 px-6 sm:px-8 md:px-12 overflow-hidden">
        {/* Slow pulsing red/black gradient */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-red-900/10"
            animate={{
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Pulsing red rings */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border"
              style={{
                borderColor: `rgba(220, 38, 38, ${0.1 + i * 0.05})`,
                width: 400 + i * 200,
                height: 400 + i * 200,
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: i * 1.5,
              }}
            />
          ))}
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
              If attackers targeted you tomorrow —
              <br />
              <span className="text-red-500">would you know?</span>
            </h2>

            <p className="text-2xl text-gray-400 max-w-3xl mx-auto">
              Stop guessing. Start testing like real attackers do.
            </p>

            {/* CTA Button */}
            <div className="flex justify-center pt-8">
              <motion.button
                className="px-12 py-6 bg-gradient-to-r from-red-700 to-red-600 text-white rounded-lg text-xl flex items-center gap-3 shadow-2xl"
                style={{ fontWeight: 700 }}
                whileHover={{ scale: 1.05, boxShadow: "0 0 60px rgba(220, 38, 38, 0.6)" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate(ROUTES.CONTACT)}
              >
                Launch a Red Team Operation
                <ArrowRight className="w-6 h-6" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      {/* Footer rendering removed */}
    </div>
  );
}
