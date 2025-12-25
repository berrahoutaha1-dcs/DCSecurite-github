import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Shield,
  Container,
  Lock,
  Eye,
  Target,
  Zap,
  Server,
  Activity,
  Layers,
  RefreshCw,
  Search,
  TrendingUp,
  CheckCircle,
  AlertTriangle,
  Cloud,
  Cpu,
  Scan,
  FileCheck,
  Bug,
  Network,
  ShieldAlert,
  Box,
} from "lucide-react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { ROUTES } from "../routes";
import { ServicePricing } from "./shared/ServicePricing";
import { servicePlans } from "../data/servicePlans";
import { ChevronRight } from "lucide-react";
import { useTheme } from "./ThemeContext";


interface CWPPageProps {
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
}

interface LoginContext {
  openCustomerLogin: () => void;
}

const CWPPage: React.FC<CWPPageProps> = (props) => {
  const { openCustomerLogin } = useOutletContext<LoginContext>();
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useScroll();
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0e27] text-white transition-colors duration-300">


      {/* 1. Hero Banner */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Deep gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e27] via-[#0D1B3E] to-[#0a1628]" />

        {/* Animated code-flow lines */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
              style={{
                top: `${10 + i * 8}%`,
                left: 0,
                right: 0,
              }}
              animate={{
                x: ["-100%", "100%"],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 8 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "linear",
              }}
            />
          ))}
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-cyan-400/40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 sm:px-8 md:px-12 max-w-7xl mx-auto">

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-8 bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 dark:from-white dark:via-cyan-200 dark:to-white bg-clip-text text-transparent tracking-tight"
            style={{ fontWeight: 700, letterSpacing: "-0.03em" }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            Cloud Workload
            <br />
            Protection
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl md:text-3xl text-gray-700 dark:text-cyan-100/80 mb-12 max-w-4xl mx-auto"
            style={{ fontWeight: 300 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          >
            Real-time protection. Complete visibility. Seamless security for every workload.
          </motion.p>

          <motion.button
            className="group relative px-12 py-5 rounded-full bg-transparent border-2 border-cyan-400 text-cyan-300 text-lg overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            onClick={openCustomerLogin}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/20 to-cyan-400/0"
              animate={{ x: ["-200%", "200%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <span className="relative z-10">Explore CWP</span>
            <div className="absolute inset-0 rounded-full bg-cyan-400/0 group-hover:bg-cyan-400/10 transition-all duration-300" />
          </motion.button>
        </div>
      </section>

      {/* 2. What is CWP Section */}
      <section className="relative py-32 md:py-48">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h2
                className="text-4xl sm:text-5xl md:text-6xl mb-8 text-white"
                style={{ fontWeight: 700 }}
              >
                What is CWP?
              </h2>
              <p
                className="text-lg sm:text-xl text-gray-300 mb-8"
                style={{ fontWeight: 300, lineHeight: 1.8 }}
              >
                Cloud Workload Protection provides comprehensive security for all your
                workloads—whether they're in VMs, containers, or serverless functions. It delivers
                runtime protection, vulnerability management, and compliance assurance across
                multi-cloud and hybrid environments.
              </p>

              {/* Vertical Timeline */}
              <div className="space-y-6 mt-12">
                {[
                  { icon: Container, text: "Protect containers, VMs, and serverless workloads" },
                  { icon: Eye, text: "Monitor runtime behavior for anomalies" },
                  { icon: Bug, text: "Detect and block threats in real-time" },
                  { icon: FileCheck, text: "Ensure continuous compliance across clouds" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.15 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-cyan-400" strokeWidth={1.5} />
                    </div>
                    <p className="text-lg text-gray-200 mt-2" style={{ fontWeight: 300 }}>
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Animated Diagram */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="relative w-full aspect-square">
                {/* Central core */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500"
                  animate={{
                    boxShadow: [
                      "0 0 40px rgba(6, 182, 212, 0.4)",
                      "0 0 80px rgba(6, 182, 212, 0.6)",
                      "0 0 40px rgba(6, 182, 212, 0.4)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <Shield className="w-16 h-16 text-white" strokeWidth={1.5} />
                  </div>
                </motion.div>

                {/* Orbiting elements */}
                {[
                  { icon: Container, angle: 0, label: "Container" },
                  { icon: Server, angle: 90, label: "VM" },
                  { icon: Cloud, angle: 180, label: "Serverless" },
                  { icon: Box, angle: 270, label: "K8s" },
                ].map((item, i) => {
                  const angle = (item.angle * Math.PI) / 180;
                  const radius = 140;

                  return (
                    <motion.div
                      key={i}
                      className="absolute top-1/2 left-1/2"
                      style={{
                        marginLeft: "-32px",
                        marginTop: "-32px",
                      }}
                      animate={{
                        x: Math.cos(angle) * radius,
                        y: Math.sin(angle) * radius,
                      }}
                      transition={{
                        duration: 0.8,
                        delay: i * 0.15,
                      }}
                    >
                      <motion.div
                        className="w-16 h-16 rounded-full bg-[#0D1B3E] border-2 border-cyan-400/50 flex items-center justify-center backdrop-blur-sm"
                        whileHover={{ scale: 1.1, borderColor: "rgba(6, 182, 212, 0.8)" }}
                      >
                        <item.icon className="w-8 h-8 text-cyan-400" strokeWidth={1.5} />
                      </motion.div>
                      <p className="text-xs text-center text-cyan-300 mt-2">{item.label}</p>
                    </motion.div>
                  );
                })}

                {/* Connecting lines */}
                <svg className="absolute inset-0 w-full h-full">
                  {[0, 90, 180, 270].map((angle, i) => {
                    const rad = (angle * Math.PI) / 180;
                    const startX = 50;
                    const startY = 50;
                    const endX = 50 + Math.cos(rad) * 35;
                    const endY = 50 + Math.sin(rad) * 35;

                    return (
                      <motion.line
                        key={i}
                        x1={`${startX}%`}
                        y1={`${startY}%`}
                        x2={`${endX}%`}
                        y2={`${endY}%`}
                        stroke="rgba(6, 182, 212, 0.3)"
                        strokeWidth="2"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                      />
                    );
                  })}
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Core Capabilities */}
      <section className="relative py-32 md:py-48 bg-gradient-to-b from-transparent to-[#0D1B3E]/30">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl mb-24 text-center text-white"
            style={{ fontWeight: 700 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Core Capabilities
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
            {[
              {
                icon: ShieldAlert,
                title: "Runtime Protection",
                description: "Real-time threat detection and prevention for running workloads",
              },
              {
                icon: Scan,
                title: "Vulnerability Scanning",
                description: "Continuous scanning for CVEs, malware, and misconfigurations",
              },
              {
                icon: Network,
                title: "Micro-Segmentation",
                description: "Isolate workloads with network-level security controls",
              },
              {
                icon: FileCheck,
                title: "Compliance Monitoring",
                description: "Automated compliance checks against industry standards",
              },
            ].map((capability, i) => (
              <motion.div
                key={i}
                className="group relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
              >
                {/* Icon */}
                <motion.div
                  className="w-20 h-20 mb-6 rounded-full bg-cyan-400/5 border border-cyan-400/20 flex items-center justify-center"
                  whileHover={{ scale: 1.1, borderColor: "rgba(6, 182, 212, 0.5)" }}
                >
                  <capability.icon className="w-10 h-10 text-cyan-400" strokeWidth={1.5} />
                </motion.div>

                {/* Title with animated underline */}
                <div className="relative mb-4">
                  <h3 className="text-xl sm:text-2xl text-white mb-2" style={{ fontWeight: 600 }}>
                    {capability.title}
                  </h3>
                  <motion.div
                    className="h-0.5 bg-gradient-to-r from-cyan-400 to-transparent"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
                  />
                </div>

                {/* Description */}
                <p className="text-base text-gray-400" style={{ fontWeight: 300, lineHeight: 1.7 }}>
                  {capability.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Protection Lifecycle */}
      <section className="relative py-32 md:py-48 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl mb-24 text-center text-white"
            style={{ fontWeight: 700 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Protection Lifecycle
          </motion.h2>

          {/* Horizontal Flow */}
          <div className="relative">
            {/* Flow line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400/20 via-cyan-400/50 to-cyan-400/20" />

            {/* Animated glow moving through the line */}
            <motion.div
              className="hidden md:block absolute top-1/2 left-0 w-32 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent -translate-y-1/2"
              animate={{ x: ["0%", "600%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-4 relative">
              {[
                { icon: Search, label: "Discover" },
                { icon: Scan, label: "Scan" },
                { icon: Eye, label: "Monitor" },
                { icon: Target, label: "Detect" },
                { icon: ShieldAlert, label: "Protect" },
                { icon: RefreshCw, label: "Update" },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  className="relative flex flex-col items-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  {/* Icon circle */}
                  <motion.div
                    className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400/10 to-blue-500/10 border-2 border-cyan-400/30 flex items-center justify-center mb-4 backdrop-blur-sm"
                    whileHover={{
                      scale: 1.1,
                      borderColor: "rgba(6, 182, 212, 0.6)",
                      boxShadow: "0 0 30px rgba(6, 182, 212, 0.3)",
                    }}
                  >
                    <step.icon className="w-12 h-12 text-cyan-400" strokeWidth={1.5} />
                  </motion.div>

                  {/* Label */}
                  <p className="text-lg text-cyan-200 text-center" style={{ fontWeight: 500 }}>
                    {step.label}
                  </p>

                  {/* Step number */}
                  <span className="absolute -top-4 text-xs text-cyan-400/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why It Matters */}
      <section className="relative py-32 md:py-48 bg-gradient-to-b from-[#0D1B3E]/30 to-transparent">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl mb-16 text-center text-white"
            style={{ fontWeight: 700 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Why It Matters
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 max-w-6xl mx-auto">
            {[
              {
                title: "Multi-Cloud Protection",
                text: "Secure workloads consistently across AWS, Azure, GCP, and on-premises environments with unified protection policies and centralized visibility.",
                highlight: "unified protection policies",
              },
              {
                title: "Zero-Day Defense",
                text: "Stop unknown threats with behavioral detection and machine learning that identifies suspicious activity before traditional signatures can catch up.",
                highlight: "behavioral detection",
              },
              {
                title: "Automated Compliance",
                text: "Meet regulatory requirements effortlessly with continuous compliance monitoring, automated remediation, and audit-ready reports.",
                highlight: "continuous compliance monitoring",
              },
              {
                title: "Minimal Performance Impact",
                text: "Protect workloads without slowdowns using lightweight agents optimized for performance with less than 2% CPU overhead on average.",
                highlight: "less than 2% CPU overhead",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
              >
                <h3 className="text-2xl sm:text-3xl text-cyan-300 mb-4" style={{ fontWeight: 600 }}>
                  {item.title}
                </h3>
                <p
                  className="text-lg text-gray-300 relative"
                  style={{ fontWeight: 300, lineHeight: 1.8 }}
                >
                  {item.text.split(item.highlight)[0]}
                  <span className="relative inline-block">
                    <motion.span
                      className="absolute inset-x-0 bottom-0 h-8 bg-cyan-400/20 -z-10 blur-sm"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
                    />
                    <span className="relative text-cyan-200" style={{ fontWeight: 500 }}>
                      {item.highlight}
                    </span>
                  </span>
                  {item.text.split(item.highlight)[1]}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Supported Environments */}
      <section className="relative py-32 md:py-48">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl mb-16 text-center text-white"
            style={{ fontWeight: 700 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Supported Environments
          </motion.h2>

          <motion.p
            className="text-xl text-center text-gray-300 mb-20 max-w-3xl mx-auto"
            style={{ fontWeight: 300 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive protection across your entire infrastructure
          </motion.p>

          {/* Floating neon icons */}
          <div className="relative h-96 md:h-[500px]">
            {[
              { name: "AWS", icon: Cloud, position: { top: "10%", left: "15%" } },
              { name: "Azure", icon: Cloud, position: { top: "20%", left: "70%" } },
              { name: "GCP", icon: Cloud, position: { top: "45%", left: "10%" } },
              { name: "Docker", icon: Container, position: { top: "50%", left: "50%" } },
              { name: "Kubernetes", icon: Box, position: { top: "35%", left: "80%" } },
              { name: "VMs", icon: Server, position: { top: "70%", left: "25%" } },
              { name: "Serverless", icon: Zap, position: { top: "75%", left: "65%" } },
            ].map((integration, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={integration.position}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <motion.div
                  className="relative"
                  animate={{
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 3 + i * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {/* Glow */}
                  <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-xl" />

                  {/* Icon container */}
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-cyan-400/10 to-blue-500/10 border border-cyan-400/30 flex items-center justify-center backdrop-blur-sm">
                    <integration.icon
                      className="w-10 h-10 sm:w-12 sm:h-12 text-cyan-400"
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Label */}
                  <p
                    className="text-xs sm:text-sm text-cyan-300 text-center mt-2"
                    style={{ fontWeight: 500 }}
                  >
                    {integration.name}
                  </p>
                </motion.div>
              </motion.div>
            ))}

            {/* Connecting particles */}
            <svg className="absolute inset-0 w-full h-full">
              {[...Array(8)].map((_, i) => {
                const x1 = 15 + Math.random() * 70;
                const y1 = 10 + Math.random() * 80;
                const x2 = 15 + Math.random() * 70;
                const y2 = 10 + Math.random() * 80;

                return (
                  <motion.line
                    key={i}
                    x1={`${x1}%`}
                    y1={`${y1}%`}
                    x2={`${x2}%`}
                    y2={`${y2}%`}
                    stroke="rgba(6, 182, 212, 0.15)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: i * 0.2 }}
                  />
                );
              })}
            </svg>
          </div>
        </div>
      </section>

      <ServicePricing
        title={servicePlans["cwp"].title}
        description={servicePlans["cwp"].description}
        plans={servicePlans["cwp"].plans}
      />

      {/* 7. Final CTA Section */}
      <section className="relative py-40 md:py-56 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0D1B3E]/50 to-[#0a0e27]" />

        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-cyan-400/30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 0.8, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 5 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>

        {/* Pulsing glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-cyan-400/10 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        <div className="relative z-10 text-center px-6 sm:px-8 md:px-12 max-w-5xl mx-auto">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8 text-white"
            style={{ fontWeight: 700 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            Protect Every Workload,
            <br />
            Everywhere
          </motion.h2>

          <motion.p
            className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
            style={{ fontWeight: 300 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Deploy comprehensive cloud workload protection in minutes
          </motion.p>

          <motion.button
            className="group relative px-16 py-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-lg overflow-hidden"
            style={{ fontWeight: 600 }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            onClick={openCustomerLogin}
          >
            {/* Animated pulse */}
            <motion.div
              className="absolute inset-0 rounded-full bg-white/20"
              animate={{
                scale: [1, 1.5],
                opacity: [0.5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />

            {/* Button glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 blur-xl opacity-50" />

            <span className="relative z-10">Get Started</span>
          </motion.button>

          {/* Trust indicators */}
          <motion.div
            className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-cyan-300/60"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" strokeWidth={1.5} />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" strokeWidth={1.5} />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" strokeWidth={1.5} />
              <span>Deploy in minutes</span>
            </div>
          </motion.div>
        </div>
      </section>


    </div>
  );
};

export default CWPPage;
