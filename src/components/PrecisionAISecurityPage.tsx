import { motion } from "framer-motion";
import { useTheme } from "./ThemeContext";
import { ChevronRight, Shield, Brain, Zap, ArrowRight } from "lucide-react";
const bannerImage = "/assets/232b11ec385c23c9b4b0a149899b6a5f4c267f56.png";
import { useState } from "react";
import { ServiceModal } from "./ServiceModal";

interface PrecisionAISecurityPageProps {
  onContactClick?: () => void;
}

export const PrecisionAISecurityPage = ({ onContactClick }: PrecisionAISecurityPageProps) => {
  const { theme } = useTheme();
  const [selectedService, setSelectedService] = useState<string | null>(null);

  // Three-column content data
  const columnContent = [
    {
      icon: Shield,
      title: "Advanced Threat Detection",
      subtitle: "Powered by AI Intelligence",
      description:
        "Leverage cutting-edge artificial intelligence to identify and neutralize sophisticated cyber threats before they impact your organization.",
      links: [
        { text: "Threat Analysis strategy", serviceKey: "threat-analysis" },
        { text: "Real-time Monitoring", serviceKey: "real-time-monitoring" },
        { text: "Security Operations Center", serviceKey: "security-operations" },
      ],
    },
    {
      icon: Brain,
      title: "Intelligent Red Team",
      subtitle: "Adversarial Simulation",
      description:
        "Our AI-powered red team continuously tests your defenses, mimicking real-world attackers to uncover vulnerabilities in your security posture.",
      links: [
        { text: "Penetration Testing", serviceKey: "penetration-testing" },
        { text: "Vulnerability Assessment", serviceKey: "vulnerability-assessment" },
        { text: "Security Audit & Compliance", serviceKey: "security-audit" },
      ],
    },
    {
      icon: Zap,
      title: "Rapid Response",
      subtitle: "Automated Defense Systems",
      description:
        "Deploy autonomous security measures that respond to threats in milliseconds, preventing breaches before they escalate into critical incidents.",
      links: [
        { text: "Incident Response", serviceKey: "incident-response" },
        { text: "Automated Remediation", serviceKey: "automated-remediation" },
        { text: "24/18 Security Support", serviceKey: "security-support" },
      ],
    },
  ];

  return (
    <div className={`min-h-screen ${theme === "dark" ? "bg-[#0a0a0a]" : "bg-white"}`}>
      {/* Banner Section */}
      <div className="relative w-full h-auto overflow-hidden bg-[#0a0a0a]">
        <img
          src={bannerImage}
          alt="AI & Cybersecurity Operations Center"
          className="w-full h-auto"
        />
      </div>

      {/* AI Hero Section */}
      <div className="relative w-full min-h-[600px] bg-black overflow-hidden flex items-center justify-center">
        {/* Animated Background with Particles */}
        <div className="absolute inset-0">
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

          {/* Glowing particles */}
          <div className="absolute inset-0">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-blue-500/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0.2, 0.8, 0.2],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Network connections */}
          <svg className="absolute inset-0 w-full h-full opacity-10">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0D6EFF" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#00D9FF" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            {[...Array(8)].map((_, i) => (
              <motion.line
                key={i}
                x1={`${Math.random() * 100}%`}
                y1={`${Math.random() * 100}%`}
                x2={`${Math.random() * 100}%`}
                y2={`${Math.random() * 100}%`}
                stroke="url(#lineGradient)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.3 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: i * 0.3,
                }}
              />
            ))}
          </svg>

          {/* Radial glow effects */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full">
          {/* Hero Content */}
          <div className="max-w-6xl mx-auto px-6 py-24 text-center">
            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-2 mb-8"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-tight">
                AI accelerates your attackers.
              </h1>
              <h1 className="text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-tight">
                Fight AI with AI strategies
              </h1>
              <h1 className="text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-tight">
                Outsmart them with{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-[#0D6EFF] bg-clip-text text-transparent font-extrabold">
                  DCS Bleu team
                </span>
              </h1>
            </motion.div>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/90 mb-12 tracking-wide"
            >
              Every security company or organization must have a security defense team... We provide
              this with the latest and most suitable solutions.
            </motion.p>

            {/* CTA Button */}
            <button
              onClick={onContactClick}
              className="group relative px-10 py-4 rounded-full border-2 border-blue-500/50 bg-transparent text-white overflow-hidden transition-all duration-300 hover:border-blue-400 hover:shadow-[0_0_30px_rgba(13,110,255,0.3)]"
            >
              {/* Button glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <span className="relative flex items-center gap-3 text-lg tracking-wide">
                Engage with Us
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
          </div>

          {/* Three-Column Grid */}
          <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
              {columnContent.map((column, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex flex-col items-start text-left"
                >
                  {/* Icon */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                    className="mb-6 relative"
                  >
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center backdrop-blur-sm border border-blue-500/30">
                      <column.icon className="w-8 h-8 text-[#0D6EFF]" />
                    </div>
                    {/* Glow effect */}
                    <div className="absolute inset-0 w-16 h-16 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-xl blur-xl -z-10" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl text-white mb-2 tracking-tight leading-tight">
                    {column.title}
                  </h3>

                  {/* Subtitle */}
                  <h4 className="text-lg text-white/80 mb-4">{column.subtitle}</h4>

                  {/* Description */}
                  <p className="text-base text-gray-400 leading-relaxed mb-6">
                    {column.description}
                  </p>

                  {/* Links */}
                  <div className="space-y-3 w-full">
                    {column.links.map((link, linkIndex) => (
                      <motion.a
                        key={linkIndex}
                        href="#"
                        className="group flex items-center justify-between hover:opacity-80 transition-all duration-300"
                        whileHover={{ x: 5 }}
                        onClick={() => setSelectedService(link.serviceKey)}
                      >
                        <span className="text-base text-[#0D6EFF] relative">
                          {link.text}
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0D6EFF] to-[#00D9FF] group-hover:w-full transition-all duration-300" />
                        </span>
                        <ArrowRight className="w-4 h-4 text-[#0D6EFF] group-hover:translate-x-1 transition-transform duration-300" />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Service Modal */}
      <ServiceModal
        isOpen={!!selectedService}
        serviceKey={selectedService || ""}
        onClose={() => setSelectedService(null)}
      />
    </div>
  );
};
