import {
  Shield,
  Lock,
  Radar,
  Cpu,
  Users,
  Globe,
  Trophy,
  Rocket,
  BookOpen,
  Home,
  Briefcase,
  DollarSign,
  Award,
  Search,
  Bug,
  Eye,
  AlertTriangle,
  Code,
  Server,
  CheckCircle,
  ArrowRight,
  Zap,
  Target,
  Activity,
  MessageSquare,
  FileCheck,
  UserCheck,
  Calendar,
  X,
  Mail,
  Send,
} from "lucide-react";
import { motion } from "framer-motion";

import { useState } from "react";

interface CareersOverviewPageProps {
  onPrivacyClick?: () => void;
  onTermsClick?: () => void;
  onCookieClick?: () => void;
  onDoNotSellClick?: () => void;
  onUnderAttackClick?: () => void;
  onTeamClick?: () => void;
}

export function CareersOverviewPage({
  onPrivacyClick,
  onTermsClick,
  onCookieClick,
  onDoNotSellClick,
  onUnderAttackClick,
  onTeamClick,
}: CareersOverviewPageProps) {
  const [showApplyModal, setShowApplyModal] = useState(false);

  const values = [
    {
      icon: Shield,
      title: "Security First",
      description: "Everything we build starts with security at its core",
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      icon: Cpu,
      title: "AI-Driven Innovation",
      description: "Pioneering the future with cutting-edge technology",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      icon: Users,
      title: "Team Excellence",
      description: "Collaborate with world-class security experts",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      icon: Target,
      title: "Mission Focused",
      description: "Protecting organizations from real-world threats",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      icon: Zap,
      title: "Rapid Response",
      description: "Operate at the speed of cyber warfare",
      gradient: "from-orange-500 to-red-600",
    },
  ];

  const benefits = [
    {
      icon: BookOpen,
      title: "Continuous Training",
      description: "Access to latest cybersecurity certifications and training programs",
      color: "cyan",
    },
    {
      icon: Activity,
      title: "Real-World Operations",
      description: "Work on live cyber defense and threat hunting missions",
      color: "blue",
    },
    {
      icon: Home,
      title: "Remote Flexibility",
      description: "Work from anywhere with our global remote-first culture",
      color: "purple",
    },
    {
      icon: Rocket,
      title: "Career Growth",
      description: "Clear advancement paths and mentorship programs",
      color: "green",
    },
    {
      icon: DollarSign,
      title: "Competitive Salary",
      description: "Top-tier compensation packages with performance bonuses",
      color: "emerald",
    },
    {
      icon: Server,
      title: "Cyber Lab Access",
      description: "State-of-the-art labs with enterprise-grade tools",
      color: "orange",
    },
  ];

  const departments = [
    {
      icon: Bug,
      title: "Penetration Testing",
      description:
        "Break systems to make them stronger. Conduct ethical hacking and vulnerability assessments.",
      gradient: "from-red-500 to-orange-500",
      roles: 8,
    },
    {
      icon: Eye,
      title: "SOC / Blue Team",
      description: "Monitor, detect, and respond to security incidents in real-time operations.",
      gradient: "from-blue-500 to-cyan-500",
      roles: 12,
    },
    {
      icon: AlertTriangle,
      title: "Red Team",
      description: "Simulate advanced persistent threats and test organizational defenses.",
      gradient: "from-purple-500 to-pink-500",
      roles: 6,
    },
    {
      icon: Search,
      title: "Threat Intelligence",
      description: "Analyze emerging threats and provide actionable intelligence.",
      gradient: "from-green-500 to-emerald-500",
      roles: 5,
    },
    {
      icon: AlertTriangle,
      title: "Incident Response",
      description: "Lead critical response during active security breaches and attacks.",
      gradient: "from-orange-500 to-red-500",
      roles: 7,
    },
    {
      icon: Code,
      title: "DevSecOps",
      description: "Integrate security into development pipelines and cloud infrastructure.",
      gradient: "from-cyan-500 to-blue-500",
      roles: 10,
    },
  ];

  const featuredRoles = [
    {
      title: "Senior Penetration Tester",
      location: "On-site Algeria/Oran",
      type: "Full-time",
      description: "Lead complex penetration testing engagements for Fortune 500 clients",
      tags: ["OSCP", "Web Security", "Network"],
    },
    {
      title: "SOC Analyst L2",
      location: "On-site Algeria/Oran",
      type: "Full-time",
      description: "Monitor and respond to security incidents in our 24/7 operations center",
      tags: ["SIEM", "Threat Hunting", "Incident Response"],
    },
    {
      title: "Threat Intelligence Researcher",
      location: "On-site Algeria/Oran",
      type: "Full-time",
      description: "Research emerging threats and develop intelligence reports for clients",
      tags: ["OSINT", "Malware Analysis", "CTI"],
    },
    {
      title: "Red Team Operator",
      location: "On-site Algeria/Oran",
      type: "Full-time",
      description: "Conduct adversary simulations and advanced attack scenarios",
      tags: ["APT", "C2", "Social Engineering"],
    },
    {
      title: "DevSecOps Engineer",
      location: "On-site Algeria/Oran",
      type: "Full-time",
      description: "Build secure CI/CD pipelines and automate security testing",
      tags: ["Kubernetes", "AWS", "Terraform"],
    },
    {
      title: "Security Intern",
      location: "On-site Algeria/Oran",
      type: "Part-time",
      description: "Learn from experts while supporting real security operations",
      tags: ["Learning", "SOC", "Entry Level"],
    },
  ];

  const processSteps = [
    {
      icon: FileCheck,
      title: "Application",
      description: "Submit your resume and portfolio",
      color: "cyan",
    },
    {
      icon: Code,
      title: "Technical Test",
      description: "Complete hands-on security challenge",
      color: "blue",
    },
    {
      icon: MessageSquare,
      title: "HR Interview",
      description: "Meet our team and culture",
      color: "purple",
    },
    {
      icon: Shield,
      title: "Security Assessment",
      description: "Demonstrate your expertise",
      color: "green",
    },
    {
      icon: UserCheck,
      title: "Final Decision",
      description: "Welcome to DCSecurite",
      color: "emerald",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; glow: string; text: string }> = {
      cyan: {
        bg: "bg-cyan-500/10",
        border: "border-cyan-500/30",
        glow: "shadow-cyan-500/50",
        text: "text-cyan-400",
      },
      blue: {
        bg: "bg-blue-500/10",
        border: "border-blue-500/30",
        glow: "shadow-blue-500/50",
        text: "text-blue-400",
      },
      purple: {
        bg: "bg-purple-500/10",
        border: "border-purple-500/30",
        glow: "shadow-purple-500/50",
        text: "text-purple-400",
      },
      green: {
        bg: "bg-green-500/10",
        border: "border-green-500/30",
        glow: "shadow-green-500/50",
        text: "text-green-400",
      },
      emerald: {
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/30",
        glow: "shadow-emerald-500/50",
        text: "text-emerald-400",
      },
      orange: {
        bg: "bg-orange-500/10",
        border: "border-orange-500/30",
        glow: "shadow-orange-500/50",
        text: "text-orange-400",
      },
    };
    return colors[color] || colors.cyan;
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-black dark:text-white pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Cyber Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000,transparent)]" />

        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        {/* Circuit Pattern Overlay */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="circuit"
                x="0"
                y="0"
                width="100"
                height="100"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="2"
                  fill="currentColor"
                  className="text-cyan-600 dark:text-cyan-400"
                />
                <line
                  x1="50"
                  y1="0"
                  x2="50"
                  y2="50"
                  stroke="currentColor"
                  className="text-cyan-600 dark:text-cyan-400"
                  strokeWidth="0.5"
                />
                <line
                  x1="0"
                  y1="50"
                  x2="50"
                  y2="50"
                  stroke="currentColor"
                  className="text-cyan-600 dark:text-cyan-400"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Headline */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl mb-6 tracking-tight">
              <span className="block bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-cyan-200 dark:to-white bg-clip-text text-transparent">
                Join the Future of
              </span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Cyber Defense
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto mb-12 leading-relaxed">
              Protect organizations worldwide with cutting-edge AI-powered security solutions. Work
              with elite teams, defend against real threats, and shape the future of cybersecurity.
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-cyan-500/30 rounded-full flex justify-center p-2">
            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Mission & Values */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white dark:from-black dark:via-slate-950 dark:to-black" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400 bg-clip-text text-transparent">
              Our Mission & Values
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Building the most advanced cybersecurity platform on the planet
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative h-full bg-gradient-to-br from-white to-slate-50 dark:from-slate-900/50 dark:to-slate-950/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 dark:border-slate-800 hover:border-transparent transition-all duration-500 overflow-hidden shadow-lg dark:shadow-none">
                  {/* Glow Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />
                  <div
                    className={`absolute inset-0 shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${value.gradient} blur-xl`}
                    style={{ transform: "scale(0.8)" }}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    <div
                      className={`inline-flex w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-xl items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}
                    >
                      <value.icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl mb-3 text-slate-900 dark:text-white">{value.title}</h3>

                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Us - Benefits */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-50 via-white to-white dark:from-cyan-950/20 dark:via-black dark:to-black" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Why Join DCSecurite
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              World-class benefits designed for cybersecurity professionals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const colors = getColorClasses(benefit.color);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div
                    className={`relative h-full ${colors.bg} backdrop-blur-xl rounded-2xl p-8 border ${colors.border} hover:shadow-2xl hover:${colors.glow} transition-all duration-500`}
                  >
                    <div
                      className={`w-14 h-14 bg-gradient-to-br ${colors.bg} border ${colors.border} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <benefit.icon className={`w-7 h-7 ${colors.text}`} />
                    </div>

                    <h3 className="text-xl mb-3 text-slate-900 dark:text-white">{benefit.title}</h3>

                    <p className="text-slate-600 dark:text-slate-400">{benefit.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Departments Overview */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white dark:from-black dark:via-slate-950 dark:to-black" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400 bg-clip-text text-transparent">
              Departments
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Find your place in our elite security teams
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative h-full bg-white/50 dark:bg-slate-900/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-500 overflow-hidden shadow-lg dark:shadow-none">
                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${dept.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  {/* Icon Badge */}
                  <div
                    className={`inline-flex w-14 h-14 bg-gradient-to-br ${dept.gradient} rounded-xl items-center justify-center mb-6 shadow-lg`}
                  >
                    <dept.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-2xl mb-3 text-slate-900 dark:text-white">{dept.title}</h3>

                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    {dept.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">{dept.roles} open positions</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Roles */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-50 via-white to-white dark:from-blue-950/20 dark:via-black dark:to-black" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Featured Openings
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Start your journey with these highlighted positions
            </p>
          </motion.div>

          {/* Table Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/50 dark:bg-slate-900/30 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xl dark:shadow-none"
          >
            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-800">
                    <th className="text-left px-6 py-4 text-sm uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Position
                    </th>
                    <th className="text-left px-6 py-4 text-sm uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Location
                    </th>
                    <th className="text-left px-6 py-4 text-sm uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Type
                    </th>
                    <th className="text-left px-6 py-4 text-sm uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Skills
                    </th>
                    <th className="text-right px-6 py-4 text-sm uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {featuredRoles.map((role, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="border-b border-slate-200 dark:border-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800/30 transition-colors group"
                    >
                      <td className="px-6 py-5">
                        <div>
                          <div className="text-slate-900 dark:text-white mb-1 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                            {role.title}
                          </div>
                          <div className="text-sm text-slate-600 dark:text-slate-400 line-clamp-1">
                            {role.description}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                          <Globe className="w-4 h-4 text-slate-500" />
                          <span>{role.location}</span>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <span className="inline-flex px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-sm text-cyan-500 dark:text-cyan-400">
                          {role.type}
                        </span>
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex flex-wrap gap-1.5">
                          {role.tags.slice(0, 3).map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-2 py-1 bg-slate-200 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700 rounded text-xs text-slate-600 dark:text-slate-400"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="px-6 py-5 text-right">
                        <button
                          onClick={() => setShowApplyModal(true)}
                          className="px-5 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-lg text-sm text-white transition-all duration-300 inline-flex items-center gap-2 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40"
                        >
                          Apply Now
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden divide-y divide-slate-200 dark:divide-slate-800">
              {featuredRoles.map((role, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="p-6 hover:bg-slate-100 dark:hover:bg-slate-800/30 transition-colors"
                >
                  <div className="mb-3">
                    <h3 className="text-slate-900 dark:text-white mb-2">{role.title}</h3>
                    <div className="flex flex-wrap items-center gap-2 text-sm mb-2">
                      <span className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
                        <Globe className="w-4 h-4" />
                        {role.location}
                      </span>
                      <span className="px-2 py-0.5 bg-cyan-500/10 border border-cyan-500/30 rounded text-cyan-500 dark:text-cyan-400 text-xs">
                        {role.type}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                      {role.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {role.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-slate-200 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700 rounded text-xs text-slate-600 dark:text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setShowApplyModal(true)}
                    className="w-full px-4 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-lg text-sm text-white transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Life at Company */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white dark:from-black dark:via-slate-950 dark:to-black" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400 bg-clip-text text-transparent">
              Life at DCSecurite
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              A culture built on excellence, innovation, and teamwork
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {/* Image 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl aspect-[4/5]"
            >
              <img
                src="https://images.unsplash.com/photo-1632910121591-29e2484c0259?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwdGVhbSUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzY1MTg1Mzk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Team collaboration"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 border-2 border-cyan-500/30 group-hover:border-cyan-500/60 transition-colors rounded-2xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </motion.div>

            {/* Image 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative overflow-hidden rounded-2xl aspect-[4/5]"
            >
              <img
                src="https://images.unsplash.com/photo-1646153114001-495dfb56506d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNoJTIwb2ZmaWNlJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2NTE1MzM5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern workspace"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 border-2 border-blue-500/30 group-hover:border-blue-500/60 transition-colors rounded-2xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </motion.div>

            {/* Image 3 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative overflow-hidden rounded-2xl aspect-[4/5]"
            >
              <img
                src="https://images.unsplash.com/photo-1635340038191-96eea7fbd056?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHNlY3VyaXR5JTIwb3BlcmF0aW9ucyUyMGNlbnRlcnxlbnwxfHx8fDE3NjUxODUzOTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Security operations"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 border-2 border-purple-500/30 group-hover:border-purple-500/60 transition-colors rounded-2xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </motion.div>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/50 dark:bg-slate-900/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-lg dark:shadow-none"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-lg text-slate-700 dark:text-slate-300 italic mb-4">
                    "Working at DCSecurite has been transformative. The team is incredible, the
                    challenges are real, and the impact we make is global."
                  </p>
                  <div className="text-cyan-500 dark:text-cyan-400">Sarah Chrifi</div>
                  <div className="text-sm text-slate-500">Senior SOC Analyst</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/50 dark:bg-slate-900/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-lg dark:shadow-none"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-lg text-slate-700 dark:text-slate-300 italic mb-4">
                    "The learning opportunities here are unmatched. Every day brings new challenges
                    and the chance to work with cutting-edge technology."
                  </p>
                  <div className="text-purple-500 dark:text-purple-400">samir benkhoufi</div>
                  <div className="text-sm text-slate-500">Red Team Lead</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recruitment Process */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-50 via-white to-white dark:from-cyan-950/10 dark:via-black dark:to-black" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Recruitment Process
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              A transparent and efficient hiring journey
            </p>
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            {/* Connection Line */}
            <div className="absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 hidden lg:block" />

            <div className="grid lg:grid-cols-5 gap-8 relative">
              {processSteps.map((step, index) => {
                const colors = getColorClasses(step.color);
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative"
                  >
                    {/* Step Number Circle */}
                    <div
                      className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 border-2 ${colors.border} rounded-full flex items-center justify-center relative z-10 shadow-lg dark:shadow-none`}
                    >
                      <step.icon className={`w-7 h-7 ${colors.text}`} />
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <div className="text-sm text-slate-500 mb-2">Step {index + 1}</div>
                      <h3 className="text-lg mb-2 text-slate-900 dark:text-white">{step.title}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white dark:from-black dark:via-slate-950 dark:to-black" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-600 via-blue-600 to-purple-700 p-16 text-center"
          >
            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern
                    id="cta-pattern"
                    x="0"
                    y="0"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="20" cy="20" r="1" fill="white" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#cta-pattern)" />
              </svg>
            </div>

            <div className="relative z-10">
              <Shield className="w-16 h-16 text-white mx-auto mb-6" />

              <h2 className="text-4xl md:text-5xl mb-6 text-white">
                Ready to Defend the Digital World?
              </h2>

              <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-10">
                Join our mission to protect organizations worldwide from cyber threats. Your
                expertise can make a global impact.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <motion.button
                  onClick={onTeamClick}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative px-10 py-5 bg-white/10 backdrop-blur-sm text-white rounded-xl border-2 border-white/30 hover:border-white/60 transition-all duration-500 overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.3)]"
                >
                  {/* Animated gradient background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{
                      backgroundSize: "200% 200%",
                    }}
                  />

                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{
                      x: ["-100%", "200%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 1,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/0 via-white/10 to-purple-400/0 group-hover:from-cyan-400/20 group-hover:via-white/30 group-hover:to-purple-400/20 transition-all duration-500" />

                  {/* Button content */}
                  <span className="relative flex items-center gap-3 text-lg">
                    <Users className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                    <span className="group-hover:tracking-wider transition-all duration-300">
                      Meet the Team
                    </span>
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
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.div>
                  </span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer
        onPrivacyClick={onPrivacyClick}
        onTermsClick={onTermsClick}
        onCookieClick={onCookieClick}
        onDoNotSellClick={onDoNotSellClick}
        onUnderAttackClick={onUnderAttackClick}
      />

      {/* Apply Modal */}
      {showApplyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-full max-w-lg bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 rounded-2xl border border-slate-200 dark:border-cyan-500/30 shadow-2xl overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={() => setShowApplyModal(false)}
              className="absolute top-4 right-4 p-2 hover:bg-slate-100 dark:hover:bg-white/10 rounded-lg transition-colors z-10"
            >
              <X className="w-5 h-5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white" />
            </button>

            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10" />

            {/* Content */}
            <div className="relative p-8">
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Send className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-3xl mb-4 text-slate-900 dark:text-white">Apply to DCSecurite</h3>

              {/* Message */}
              <div className="mb-6 p-6 bg-slate-100 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
                <div className="flex items-start gap-3 mb-4">
                  <Mail className="w-5 h-5 text-cyan-500 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-slate-700 dark:text-slate-300 mb-3">
                      Send your CV and cover letter to this email:
                    </p>
                    <a
                      href="mailto:jobs@dcsecurite.com"
                      className="text-cyan-500 dark:text-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors inline-flex items-center gap-2 group"
                    >
                      <span className="text-xl">jobs@dcsecurite.com</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setShowApplyModal(false)}
                className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl text-white transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40"
              >
                Got it!
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
