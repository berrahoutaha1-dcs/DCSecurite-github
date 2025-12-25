import {
  Shield,
  Mail,
  Linkedin,
  Github,
  Twitter,
  ArrowLeft,
  Award,
  Target,
  Zap,
  Lock,
  Code,
  Eye,
} from "lucide-react";
import { motion } from "framer-motion";
import { Footer } from "./Footer";
const ahmedPhoto = "/assets/46fabada39e459346534a916c80ac2b7f1df5dec.png";
const samirPhoto = "/assets/70075e8f23f806da9fe9e3e95e52b09e8a26814e.png";

interface TeamPageProps {
  onPrivacyClick?: () => void;
  onTermsClick?: () => void;
  onCookieClick?: () => void;
  onDoNotSellClick?: () => void;
  onUnderAttackClick?: () => void;
  onBackClick?: () => void;
}

export function TeamPage({
  onPrivacyClick,
  onTermsClick,
  onCookieClick,
  onDoNotSellClick,
  onUnderAttackClick,
  onBackClick,
}: TeamPageProps) {
  const teamMembers = [
    {
      name: "Ahmed Bensalem",
      role: "Chief Security Officer",
      department: "Leadership",
      image: ahmedPhoto,
      bio: "15+ years in cybersecurity, leading elite security teams globally",
      icon: Shield,
      gradient: "from-cyan-500 to-blue-600",
      specialties: ["Strategic Planning", "Threat Intelligence", "Team Leadership"],
    },
    {
      name: "Samir Benkhoufi",
      role: "Red Team Lead",
      department: "Offensive Security",
      image: samirPhoto,
      bio: "Specialized in advanced penetration testing and adversary simulation",
      icon: Target,
      gradient: "from-purple-500 to-pink-600",
      specialties: ["Penetration Testing", "Social Engineering", "APT Simulation"],
    },
    {
      name: "Fatima Zahra",
      role: "Threat Intelligence Analyst",
      department: "Intelligence",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
      bio: "Researching emerging threats and providing actionable intelligence",
      icon: Zap,
      gradient: "from-green-500 to-emerald-600",
      specialties: ["OSINT", "Malware Analysis", "CTI Reports"],
    },
    {
      name: "Karim Mansouri",
      role: "DevSecOps Engineer",
      department: "Infrastructure",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80",
      bio: "Building secure CI/CD pipelines and cloud infrastructure",
      icon: Code,
      gradient: "from-orange-500 to-red-600",
      specialties: ["Kubernetes", "AWS Security", "Automation"],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-black dark:text-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Cyber Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000,transparent)]" />

        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Back Button */}
            {onBackClick && (
              <button
                onClick={onBackClick}
                className="inline-flex items-center gap-2 px-6 py-3 mb-8 bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-slate-200 dark:border-white/10 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 transition-all duration-300"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Careers</span>
              </button>
            )}

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-8 backdrop-blur-sm">
              <Shield className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm uppercase tracking-wider">Our Team</span>
            </div>

            {/* Headline */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl mb-6 tracking-tight">
              <span className="block bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-cyan-200 dark:to-white bg-clip-text text-transparent">
                Meet the Elite
              </span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Cyber Defenders
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
              World-class security experts protecting organizations from advanced cyber threats
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white dark:from-black dark:via-slate-950 dark:to-black" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative h-full bg-white dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-500 overflow-hidden shadow-xl hover:shadow-2xl dark:shadow-none">
                  {/* Gradient Glow Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  {/* Animated Border Glow */}
                  <div
                    className={`absolute -inset-[1px] bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}
                  />

                  {/* Profile Image Section */}
                  <div className="relative overflow-hidden">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>

                    {/* Gradient Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent`}
                    />
                  </div>

                  {/* Content Section */}
                  <div className="p-8">
                    {/* Name & Role */}
                    <h3 className="text-2xl mb-2 text-slate-900 dark:text-white">{member.name}</h3>
                    <div
                      className={`text-lg mb-4 bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}
                    >
                      {member.role}
                    </div>

                    {/* Bio */}
                    <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                      {member.bio}
                    </p>

                    {/* Specialties */}
                    <div className="mb-6">
                      <div className="text-sm text-slate-500 dark:text-slate-500 mb-3 uppercase tracking-wider">
                        Specialties
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((specialty, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-full text-xs text-slate-700 dark:text-slate-300"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-3">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2.5 bg-slate-100 dark:bg-slate-800/50 hover:bg-cyan-500 dark:hover:bg-cyan-500 border border-slate-200 dark:border-slate-700 hover:border-cyan-500 rounded-full transition-all duration-300 group/social"
                      >
                        <Mail className="w-4 h-4 text-slate-600 dark:text-slate-400 group-hover/social:text-white transition-colors" />
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2.5 bg-slate-100 dark:bg-slate-800/50 hover:bg-blue-600 dark:hover:bg-blue-600 border border-slate-200 dark:border-slate-700 hover:border-blue-600 rounded-full transition-all duration-300 group/social"
                      >
                        <Linkedin className="w-4 h-4 text-slate-600 dark:text-slate-400 group-hover/social:text-white transition-colors" />
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2.5 bg-slate-100 dark:bg-slate-800/50 hover:bg-slate-900 dark:hover:bg-white border border-slate-200 dark:border-slate-700 hover:border-slate-900 dark:hover:border-white rounded-full transition-all duration-300 group/social"
                      >
                        <Github className="w-4 h-4 text-slate-600 dark:text-slate-400 group-hover/social:text-white dark:group-hover/social:text-slate-900 transition-colors" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
    </div>
  );
}
