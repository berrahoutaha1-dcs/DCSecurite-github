import { motion } from "framer-motion";
import { useOutletContext } from "react-router-dom";
import {
  Shield,
  Lock,
  Key,
  Server,
  Network,
  AlertCircle,
  CheckCircle,
  FileText,
  Eye,
  TrendingUp,
  Activity,
  Users,
  Target,
  Layers,
  Code,
  Zap,
  ArrowRight,
  Settings,
  Search,
  Terminal,
  Bug,
  Radio,
  Database,
  GitBranch,
  Award,
} from "lucide-react";
import { Header } from "./Header";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes";

// Footer import removed

interface APISecurityTestingPageProps {
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

export default function APISecurityTestingPage(props: APISecurityTestingPageProps) {
  const { openCustomerLogin } = useOutletContext<LoginContext>();
  const navigate = useNavigate();
  const accentColor = "#06B6D4"; // Teal/Cyan accent

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0f] via-[#0d0d15] to-[#0a0a0f]">
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

      {/* API grid pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* SECTION 1: HERO BANNER */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ paddingTop: "5cm" }}
      >
        {/* API data flow background */}
        <div className="absolute inset-0 opacity-10">
          {/* Data packets */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 6 + 3,
                height: Math.random() * 6 + 3,
                background: accentColor,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}

          {/* API request lines */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`line-${i}`}
              className="absolute left-0 right-0 h-px"
              style={{
                background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
                top: `${10 + i * 15}%`,
              }}
              animate={{
                x: ["-100%", "200%"],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.4,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
                <Radio className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-cyan-400">REST • GraphQL • Internal APIs</span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-tight">
                Secure Your APIs
                <br />
                <span className="text-cyan-400">Before Attackers Exploit Them.</span>
              </h1>

              {/* Subtext */}
              <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
                Identify vulnerabilities, logic flaws, and misconfigurations across your APIs before
                they become breach points.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-cyan-500 text-white rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/30"
                  style={{ fontWeight: 600 }}
                  whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(6, 182, 212, 0.5)" }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate(ROUTES.CONTACT)}
                >
                  Request API Security Test
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>

            {/* Right: API Flow Visualization */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative space-y-4">
                {/* API Request/Response Flow */}
                {[
                  { label: "Client Request", status: "active", dir: "→" },
                  { label: "Authentication", status: "checking", dir: "↔" },
                  { label: "API Gateway", status: "active", dir: "→" },
                  { label: "Business Logic", status: "vulnerable", dir: "⚠" },
                  { label: "Database Query", status: "blocked", dir: "✓" },
                  { label: "Response", status: "active", dir: "←" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className={`p-4 rounded-lg border backdrop-blur-sm flex items-center justify-between ${item.status === "vulnerable"
                      ? "bg-red-500/10 border-red-500/30"
                      : item.status === "blocked"
                        ? "bg-green-500/10 border-green-500/30"
                        : "bg-cyan-500/10 border-cyan-500/30"
                      }`}
                  >
                    <span
                      className={`text-base ${item.status === "vulnerable"
                        ? "text-red-400"
                        : item.status === "blocked"
                          ? "text-green-400"
                          : "text-cyan-400"
                        }`}
                    >
                      {item.label}
                    </span>
                    <span className="text-2xl">{item.dir}</span>
                  </motion.div>
                ))}

                {/* Glowing effect */}
                <div className="absolute -inset-4 bg-cyan-500/5 blur-3xl rounded-full pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHY API SECURITY MATTERS */}
      <section className="relative py-32 px-6 sm:px-8 md:px-12 overflow-hidden">
        {/* Flowing separator */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        />

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
              Why API Security Matters
            </h2>
          </motion.div>

          {/* Impactful statements appearing one by one */}
          <div className="space-y-8">
            {[
              {
                text: "APIs expose your core business logic",
                delay: 0.1,
              },
              {
                text: "One vulnerable endpoint can compromise everything",
                delay: 0.2,
              },
              {
                text: "Most modern breaches start at the API layer",
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
                <div className="p-8 bg-gradient-to-r from-cyan-500/5 to-transparent border-l-4 border-cyan-500">
                  <p
                    className="text-3xl md:text-4xl text-white leading-relaxed"
                    style={{ fontWeight: 600 }}
                  >
                    {item.text}
                  </p>
                </div>
                {/* Animated dot */}
                <motion.div
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-400 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: item.delay,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: WHAT WE TEST */}
      <section className="relative py-32 px-6 sm:px-8 md:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />

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
              What We Test
            </h2>
            <p className="text-xl text-gray-400">Comprehensive API attack surface analysis</p>
          </motion.div>

          {/* Horizontal layout with animated separators */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Key,
                title: "Authentication & Authorization",
                desc: "Broken Object Level Auth (BOLA)",
              },
              {
                icon: Zap,
                title: "Rate Limiting & Abuse",
                desc: "Brute force & resource exhaustion",
              },
              {
                icon: Bug,
                title: "Input Validation & Injection",
                desc: "SQL, NoSQL, command injection",
              },
              {
                icon: GitBranch,
                title: "Business Logic Flaws",
                desc: "Workflow manipulation & bypass",
              },
              {
                icon: Lock,
                title: "API Key & Token Exposure",
                desc: "Credential leakage & misuse",
              },
              { icon: Shield, title: "OWASP API Top 10", desc: "Industry-standard risk coverage" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative"
              >
                <div className="h-full p-6 bg-gradient-to-br from-cyan-500/5 to-transparent border border-cyan-500/20 hover:border-cyan-500/50 transition-all">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-cyan-500/10 rounded-lg">
                      <item.icon className="w-7 h-7 text-cyan-400" />
                    </div>
                  </div>
                  <h3 className="text-xl text-white mb-2" style={{ fontWeight: 600 }}>
                    {item.title}
                  </h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>

                {/* Animated separator line on hover */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 + 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: OUR TESTING APPROACH */}
      <section className="relative py-32 px-6 sm:px-8 md:px-12 overflow-hidden">
        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(6, 182, 212, 0.5) 1px, transparent 1px),
                linear-gradient(90deg, rgba(6, 182, 212, 0.5) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
            animate={{
              backgroundPosition: ["0px 0px", "40px 40px"],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </div>

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
              Our Testing Approach
            </h2>
            <p className="text-xl text-gray-400">A vertical timeline animation showing steps</p>
          </motion.div>

          {/* Vertical timeline */}
          <div className="relative space-y-8">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/20 via-cyan-500/50 to-cyan-500/20" />

            {[
              {
                step: "01",
                title: "API Discovery & Mapping",
                icon: Search,
                desc: "Identify all endpoints, parameters, and data flows",
              },
              {
                step: "02",
                title: "Threat Modeling",
                icon: Target,
                desc: "Map potential attack vectors and entry points",
              },
              {
                step: "03",
                title: "Manual & Automated Testing",
                icon: Terminal,
                desc: "Combine tools with hacker-driven testing",
              },
              {
                step: "04",
                title: "Exploitation & Impact Validation",
                icon: Bug,
                desc: "Prove real-world exploitability",
              },
              {
                step: "05",
                title: "Detailed Reporting & Fix Guidance",
                icon: FileText,
                desc: "Clear remediation steps",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="relative pl-20"
              >
                {/* Step number circle */}
                <div className="absolute left-0 top-0 w-16 h-16 bg-cyan-500/10 border-2 border-cyan-500 rounded-full flex items-center justify-center">
                  <span className="text-xl text-cyan-400 font-mono" style={{ fontWeight: 700 }}>
                    {item.step}
                  </span>
                </div>

                <div className="p-6 bg-gradient-to-r from-cyan-500/5 to-transparent border-l-2 border-cyan-500">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="p-2 bg-cyan-500/10 rounded-lg">
                      <item.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h3 className="text-2xl text-white" style={{ fontWeight: 600 }}>
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 pl-14">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: TOOLS & TECHNIQUES */}
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
              Tools & Techniques
            </h2>
            <p className="text-xl text-gray-400">Enterprise-grade security testing arsenal</p>
          </motion.div>

          {/* Floating text/icons */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Code, name: "Burp Suite", desc: "Professional proxy & scanner" },
              { icon: Radio, name: "Postman", desc: "API testing & automation" },
              { icon: Terminal, name: "Custom Scripts", desc: "Tailored exploit development" },
              { icon: Bug, name: "Fuzzing & Logic Abuse", desc: "Edge case & boundary testing" },
              {
                icon: Eye,
                name: "Manual Hacker-Driven Testing",
                desc: "Human expertise & creativity",
              },
              { icon: Activity, name: "OWASP ZAP", desc: "Open-source security scanning" },
            ].map((tool, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative group"
              >
                <motion.div
                  className="p-6 bg-gradient-to-br from-cyan-500/5 to-transparent border border-cyan-500/20 rounded-xl hover:border-cyan-500/50 transition-all"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-3 bg-cyan-500/10 rounded-lg">
                      <tool.icon className="w-7 h-7 text-cyan-400" />
                    </div>
                    <h3 className="text-lg text-white" style={{ fontWeight: 600 }}>
                      {tool.name}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-sm">{tool.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: DELIVERABLES */}
      <section className="relative py-32 px-6 sm:px-8 md:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-transparent" />

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
            <p className="text-xl text-gray-400">What you receive after testing</p>
          </motion.div>

          {/* Clean checklist with animations */}
          <div className="space-y-4">
            {[
              { text: "Executive summary", delay: 0.1 },
              { text: "Technical vulnerability report", delay: 0.15 },
              { text: "Proof of exploitation", delay: 0.2 },
              { text: "Risk severity scoring", delay: 0.25 },
              { text: "Remediation recommendations", delay: 0.3 },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item.delay }}
                className="flex items-start gap-4 p-6 bg-gradient-to-r from-cyan-500/5 to-transparent border-l-2 border-cyan-500"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: item.delay + 0.1, type: "spring" }}
                >
                  <CheckCircle className="w-7 h-7 text-cyan-400 flex-shrink-0" strokeWidth={2} />
                </motion.div>
                <span className="text-xl text-white" style={{ fontWeight: 500 }}>
                  {item.text}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: WHO THIS IS FOR */}
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
              Who This Is For
            </h2>
          </motion.div>

          {/* Bold typography */}
          <div className="space-y-6">
            {[
              { icon: Server, title: "SaaS Platforms", subtitle: "API-first business models" },
              {
                icon: Database,
                title: "Fintech & Payment Systems",
                subtitle: "High-value transaction APIs",
              },
              {
                icon: Radio,
                title: "Mobile & Web Applications",
                subtitle: "Client-server communication",
              },
              {
                icon: Layers,
                title: "Microservices Architectures",
                subtitle: "Service-to-service APIs",
              },
              {
                icon: Network,
                title: "Enterprises Exposing APIs",
                subtitle: "Public or partner integration",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group"
              >
                <div className="flex items-center gap-6 p-6 bg-gradient-to-r from-cyan-500/5 to-transparent border-l-4 border-cyan-500 hover:bg-cyan-500/10 transition-all">
                  <div className="p-4 bg-cyan-500/10 rounded-xl">
                    <item.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl text-white mb-1" style={{ fontWeight: 700 }}>
                      {item.title}
                    </h3>
                    <p className="text-gray-400">{item.subtitle}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: PRICING PLANS */}
      {/* SECTION 8: PRICING PLANS */}
      <section className="relative py-24 bg-[#0a0a0f]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-cyan-400 to-cyan-200 text-transparent bg-clip-text">
              API Security Plans
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the level of testing depth for your API ecosystem
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Standard Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative p-8 bg-[#0d0d15] rounded-2xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all group"
            >

              <h3 className="text-2xl font-bold text-center mt-8 mb-4 text-white">Essentials</h3>
              <div className="text-4xl font-bold text-center mb-2 text-white">
                Custom
              </div>
              <p className="text-gray-400 text-center mb-8">For small API sets</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-500 mt-1" />
                  <span className="text-gray-300">Up to 10 Endpoints</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-500 mt-1" />
                  <span className="text-gray-300">OWASP API Top 10 Check</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-500 mt-1" />
                  <span className="text-gray-300">Automated Scanning</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-500 mt-1" />
                  <span className="text-gray-300">Basic Summary Report</span>
                </li>
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={openCustomerLogin}
                className="w-full py-4 rounded-xl border border-cyan-500/30 hover:bg-cyan-500/10 text-cyan-400 font-semibold transition-colors"
              >
                Get Started
              </motion.button>
            </motion.div>

            {/* Advanced Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -10 }}
              className="relative p-8 bg-gradient-to-b from-cyan-500/10 to-[#0d0d15] rounded-2xl border border-cyan-400 shadow-lg shadow-cyan-500/10 group"
            >
              <div className="absolute top-0 right-0 bg-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl hidden">
                MOST POPULAR
              </div>

              <h3 className="text-2xl font-bold text-center mt-8 mb-4 text-white">Advanced</h3>
              <div className="text-4xl font-bold text-center mb-2 text-white">
                Custom
              </div>
              <p className="text-gray-400 text-center mb-8">Comprehensive analysis</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1" />
                  <span className="text-white">Up to 30 Endpoints</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1" />
                  <span className="text-white">Business Logic Testing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1" />
                  <span className="text-white">Authentication Bypass Tests</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1" />
                  <span className="text-white">Detailed Remediation Guidance</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1" />
                  <span className="text-white">Retest of Fixed Issues</span>
                  ```
                </li>
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={openCustomerLogin}
                className="w-full py-4 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold shadow-lg shadow-cyan-500/20 transition-colors"
              >
                Get Advanced
              </motion.button>
            </motion.div>

            {/* Enterprise Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -10 }}
              className="relative p-8 bg-[#0d0d15] rounded-2xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all group"
            >

              <h3 className="text-2xl font-bold text-center mt-8 mb-4 text-white">Enterprise</h3>
              <div className="text-4xl font-bold text-center mb-2 text-white">
                Custom
              </div>
              <p className="text-gray-400 text-center mb-8">For complex ecosystems</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-500 mt-1" />
                  <span className="text-gray-300">Unlimited Endpoints</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-500 mt-1" />
                  <span className="text-gray-300">Microservices Architecture</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-500 mt-1" />
                  <span className="text-gray-300">Custom Attack Scenarios</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-500 mt-1" />
                  <span className="text-gray-300">Executive Presentation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-500 mt-1" />
                  <span className="text-gray-300">Continuous Testing Options</span>
                </li>
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={openCustomerLogin}
                className="w-full py-4 rounded-xl border border-cyan-500/30 hover:bg-cyan-500/10 text-cyan-400 font-semibold transition-colors"
              >
                Get Started
              </motion.button>
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
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-cyan-500/5 to-transparent border border-cyan-500/30 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Zap className="w-6 h-6 text-cyan-400" />
              <h3 className="text-2xl text-white" style={{ fontWeight: 700 }}>
                Add-Ons
              </h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "Rush testing (72h delivery)", price: "Custom" },
                { name: "Additional endpoints (+10)", price: "Custom" },
                { name: "Continuous API security testing", price: "Custom" },
                { name: "Compliance attestation letter", price: "Custom" },
                { name: "Post-fix retesting (out of scope)", price: "Custom" },
              ].map((addon, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center justify-between px-4 py-3 bg-black/40 border border-cyan-500/20 rounded-lg hover:border-cyan-500/60 transition-all"
                >
                  <span className="text-gray-300">{addon.name}</span>
                  <span className="text-cyan-400" style={{ fontWeight: 600 }}>
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
              All plans include secure communication channels and NDA protection
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-cyan-400" />
                <span>Certified API Security Experts</span>
              </div>
              <div className="flex items-center gap-2">
                <Radio className="w-4 h-4 text-cyan-400" />
                <span>REST, GraphQL, gRPC</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Detailed Reports</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 9: FINAL CTA */}
      <section className="relative py-32 px-6 sm:px-8 md:px-12 overflow-hidden">
        {/* High contrast background */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 via-cyan-500/10 to-cyan-600/10"
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"
              style={{ top: `${i * 16.67}%` }}
              animate={{
                x: ["-100%", "100%"],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.3,
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
              If your APIs are exposed,
              <br />
              <span className="text-cyan-400">your business is exposed.</span>
            </h2>

            <p className="text-2xl text-gray-400 max-w-3xl mx-auto">
              Don't wait for a breach to take API security seriously
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <motion.button
                className="px-10 py-5 bg-gradient-to-r from-cyan-600 to-cyan-500 text-white rounded-lg text-lg flex items-center justify-center gap-3 shadow-2xl"
                style={{ fontWeight: 700 }}
                whileHover={{ scale: 1.05, boxShadow: "0 0 60px rgba(6, 182, 212, 0.5)" }}
                whileTap={{ scale: 0.98 }}
                onClick={openCustomerLogin}
              >
                Secure My APIs Now
                <ArrowRight className="w-6 h-6" />
              </motion.button>

              <motion.button
                className="px-10 py-5 border-2 border-cyan-500 text-cyan-400 rounded-lg text-lg flex items-center justify-center gap-3"
                style={{ fontWeight: 600 }}
                whileHover={{
                  borderColor: "rgba(6, 182, 212, 0.8)",
                  backgroundColor: "rgba(6, 182, 212, 0.1)",
                  boxShadow: "0 0 30px rgba(6, 182, 212, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate(ROUTES.CONTACT)}
              >
                Talk to a Security Expert
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
