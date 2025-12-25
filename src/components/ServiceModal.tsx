import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Shield,
  Activity,
  Building2,
  Target,
  Search,
  FileCheck,
  Bell,
  Wrench,
  Headphones,
} from "lucide-react";

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceKey: string;
}

interface ServiceInfo {
  icon: any;
  title: string;
  subtitle: string;
  description: string;
  keyPoints: string[];
}

const serviceData: Record<string, ServiceInfo> = {
  "threat-analysis": {
    icon: Shield,
    title: "Threat Analysis Strategy",
    subtitle: "Intelligence-Driven Defense",
    description:
      "Proactive threat hunting powered by advanced AI algorithms and global threat intelligence.",
    keyPoints: [
      "AI-powered threat prediction & pattern recognition",
      "Real-time threat intelligence aggregation",
      "Behavioral analysis & anomaly detection",
      "Strategic defense planning & risk assessment",
    ],
  },
  "real-time-monitoring": {
    icon: Activity,
    title: "Real-time Monitoring",
    subtitle: "24/7 Vigilance",
    description:
      "Continuous surveillance of your entire digital infrastructure with instant threat detection.",
    keyPoints: [
      "Live network traffic analysis",
      "Endpoint detection & response (EDR)",
      "Cloud security monitoring",
      "Automated alert prioritization",
    ],
  },
  "security-operations": {
    icon: Building2,
    title: "Security Operations Center",
    subtitle: "Command & Control Hub",
    description:
      "Enterprise-grade SOC infrastructure with elite security analysts monitoring your assets.",
    keyPoints: [
      "Centralized security event management",
      "Expert-led threat investigation",
      "Compliance & audit reporting",
      "Integrated security orchestration",
    ],
  },
  "penetration-testing": {
    icon: Target,
    title: "Penetration Testing",
    subtitle: "Offensive Security Assessment",
    description: "Ethical hacking to expose vulnerabilities before malicious actors exploit them.",
    keyPoints: [
      "Comprehensive attack simulation",
      "Web, mobile & API security testing",
      "Social engineering assessments",
      "Detailed remediation roadmap",
    ],
  },
  "vulnerability-assessment": {
    icon: Search,
    title: "Vulnerability Assessment",
    subtitle: "Weakness Identification",
    description:
      "Systematic scanning and analysis to identify security gaps in your infrastructure.",
    keyPoints: [
      "Automated vulnerability scanning",
      "Critical asset prioritization",
      "Configuration audit & review",
      "Patch management recommendations",
    ],
  },
  "security-audit": {
    icon: FileCheck,
    title: "Security Audit & Compliance",
    subtitle: "Regulatory Excellence",
    description:
      "Ensure adherence to industry standards and regulatory frameworks with comprehensive audits.",
    keyPoints: [
      "ISO 27001, NIST, GDPR compliance",
      "Third-party security validation",
      "Policy & procedure review",
      "Certification support & guidance",
    ],
  },
  "incident-response": {
    icon: Bell,
    title: "Incident Response",
    subtitle: "Crisis Management",
    description:
      "Rapid containment and recovery protocols to minimize damage during security incidents.",
    keyPoints: [
      "Immediate threat containment",
      "Forensic investigation & analysis",
      "Business continuity preservation",
      "Post-incident documentation",
    ],
  },
  "automated-remediation": {
    icon: Wrench,
    title: "Automated Remediation",
    subtitle: "Self-Healing Security",
    description:
      "AI-driven automated response systems that neutralize threats without human intervention.",
    keyPoints: [
      "Instant threat neutralization",
      "Automated patch deployment",
      "Self-healing infrastructure",
      "Zero-touch security enforcement",
    ],
  },
  "security-support": {
    icon: Headphones,
    title: "24/18 Security Support",
    subtitle: "Always-On Protection",
    description:
      "Round-the-clock access to cybersecurity experts ready to defend your organization.",
    keyPoints: [
      "Global support coverage",
      "Priority escalation protocols",
      "Expert consultation on-demand",
      "Dedicated security advisors",
    ],
  },
};

export const ServiceModal = ({ isOpen, onClose, serviceKey }: ServiceModalProps) => {
  const service = serviceData[serviceKey];

  if (!service) return null;

  const Icon = service.icon;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-2xl bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-2xl border border-blue-500/30 shadow-[0_0_50px_rgba(13,110,255,0.3)] overflow-hidden"
            >
              {/* Animated background effects */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
              </div>

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"
              >
                <X className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </button>

              {/* Content */}
              <div className="relative p-8">
                {/* Icon & Title */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center backdrop-blur-sm border border-blue-500/30">
                      <Icon className="w-8 h-8 text-[#0D6EFF]" />
                    </div>
                    <div className="absolute inset-0 w-16 h-16 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-xl blur-xl -z-10" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-3xl text-white mb-1">{service.title}</h3>
                    <p className="text-lg text-blue-400">{service.subtitle}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">{service.description}</p>

                {/* Key Points */}
                <div className="space-y-3">
                  <h4 className="text-white/80 tracking-wide mb-4">Key Capabilities:</h4>
                  {service.keyPoints.map((point, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#0D6EFF] to-[#00D9FF] mt-2 flex-shrink-0" />
                      <p className="text-gray-400 leading-relaxed">{point}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
