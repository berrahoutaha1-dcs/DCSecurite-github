import React, { useState, useEffect } from "react";
import { Calendar, Tag, X, ArrowRight, Sparkles, TrendingUp, Bell, Newspaper } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const recognitionImage = "/assets/official_recognition_award.png";
const cyberThreatsImage = "/assets/0a59a50fb601d3c14ee89b0d280f0fbc0eecc05c.png";
const ransomwareImage = "/assets/d98e8e89a7b99650ccf4ac9005db207b1a4611db.png";

interface NewsArticle {
  id: string;
  title: string;
  category: string;
  date: string;
  content: string;
  quote?: string;
  quoteAuthor?: string;
  image?: string;
}

const newsData: NewsArticle[] = [
  {
    id: "01",
    title: "Official Recognition of Algerian Technological Excellence",
    category: "Recognition",
    date: "January 20, 2025",
    content: `As part of a solemn ceremony dedicated to the valorization of innovative economic actors in Algeria, the founders of DCSecurite were recognized for their remarkable efforts in cybersecurity and digital transformation.

Mr. Bouayad Debbagh Mohamed Arselene, General Director of Programming and Cybersecurity divisions, was honored for his strategic vision and decisive technical contributions in the development of advanced security solutions.

Mr. Berrahou Taha, CEO and Head of Business Relations of the company, received a special distinction from Mr. Miftah Bouabdallah, President of the People's Provincial Assembly. This distinction highlights his driving role in the expansion of DCSecurite and in strengthening national digital sovereignty.

A Milestone in DCSecurite's Journey

This ministerial recognition consecrates the company's continuous efforts to position Algeria as a major digital player on the African and Arab scale. It also underlines the relevance of the solutions offered by DCSecurite, which respond to current cybersecurity challenges while offering concrete added value to economic ecosystems.`,
    quote:
      "This distinction reinforces our commitment to pursue our mission: innovate, secure and support digitalization in Algeria and beyond. Our ambition is clear: to make Algeria a strategic digital hub internationally.",
    quoteAuthor: "Mr. Berrahou Taha, CEO of DCSecurite",
    image: recognitionImage,
  },
  {
    id: "02",
    title: "New Cyber Threats: How to Protect Your Business",
    category: "Cybersecurity",
    date: "January 15, 2025",
    content: `The cyber threat landscape is constantly evolving, with new attack techniques targeting emerging vulnerabilities. DCSecurite presents you with a comprehensive guide to protect your business against these threats.

Newly Identified Threats

Our cybersecurity research team has identified several new threats that require special attention:

• Supply Chain Attacks: Cybercriminals target software vendors to access client companies

• Ransomware-as-a-Service (RaaS): Platforms that allow even non-technical individuals to launch ransomware attacks

• AI-Powered Attacks: Use of artificial intelligence to automate and personalize attacks

• Cloud Infrastructure Attacks: Exploitation of incorrect cloud service configurations

Recommended Protection Strategies

To protect against these new threats, DCSecurite recommends a multi-layered approach.`,
    quote:
      "Cybersecurity is no longer a luxury, it's an absolute necessity. Companies that don't quickly adapt to new threats risk losing not only their data, but also the trust of their customers.",
    quoteAuthor: "DCSecurite Cybersecurity Team",
    image: cyberThreatsImage,
  },
  {
    id: "03",
    title: "Complete Guide: Protecting Against Ransomware",
    category: "Cybersecurity",
    date: "January 3, 2025",
    content: `Ransomware represents one of the most formidable threats to modern businesses. This comprehensive guide provides you with all the information needed to effectively protect yourself against these malicious attacks.

Understanding Ransomware

Ransomware is malicious software that encrypts the victim's files and demands a ransom to decrypt them. Attacks increased by 150% in 2024, affecting businesses of all sizes.

Prevention Strategies

• Regular Backups: Back up your data on external media and in the cloud
• System Updates: Keep all your software up to date
• Employee Training: Raise awareness of threats among your team
• Advanced Antivirus: Use enhanced protection solutions
• Access Control: Limit user privileges

Incident Response Plan

In case of a ransomware attack:

1. Immediately isolate infected systems
2. Contact your cybersecurity team
3. Document all attack details
4. Don't pay the ransom without consulting experts
5. Restore your data from backups`,
    quote:
      "Prevention remains the best defense against ransomware. A well-prepared company can avoid 95% of potential attacks.",
    quoteAuthor: "DCSecurite Cybersecurity Team",
    image: ransomwareImage,
  },
];

interface WhatsNewProps {
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
}

export default function WhatsNew({
  onPrivacyClick,
  onTermsClick,
  onCookieClick,
  onUnderAttackClick,
  onHomeClick,
  onSignInClick,
  onCustomerLoginClick,
  onAdminLoginClick,
  onStudentMemberLoginClick,
  onCustomerSignUpClick,
  onStudentMemberSignUpClick,
  onSignUpModalOpen,
  onContactClick,
  onThreatMapClick,
  onSecurityTestClick,
  onAboutClick,
  onLocationsClick,
  onEthicsComplianceClick,
  onCorporateResponsibilityClick,
  onCollaborationDonationClick,
  onPrecisionAISecurityClick,
  onAccelerateTransformationClick,
  onAwardsRecognitionClick,
  onCustomerStoriesClick,
  onCTFProgramClick,
  onCareersOverviewClick,
  onEventsClick,
  onIndustriesClick,
  onERPManagementClick,
  onCRMClick,
  onHRMClick,
  onIndustrialClick,
  onConstructionClick,
  onLogisoft360Click,
  onUIUXDesignClick,
  onWebDevelopmentClick,
  onMobileDevelopmentClick,
  onWhatsNewClick,
  onCommunityClick,
}: WhatsNewProps) {
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0F1F] transition-colors">


      {/* Hero Banner */}
      <div className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 dark:from-purple-950 dark:via-purple-900 dark:to-indigo-950 pt-40">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #A855F7 1px, transparent 0)`,
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-20 -left-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 -right-20 w-96 h-96 bg-indigo-500/25 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="relative container mx-auto px-4 md:px-6 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Icon Badge */}
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
              >
                <Bell className="w-5 h-5 text-purple-400" />
              </motion.div>
              <span className="text-white/90 text-sm">Latest News & Updates</span>
            </motion.div>

            {/* Main Title - Bigger and More Modern */}
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl mb-8 tracking-tight leading-tight"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <motion.span
                className="block bg-gradient-to-r from-white via-purple-200 to-white text-transparent bg-clip-text"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: "200% auto",
                }}
              >
                What's New
              </motion.span>
              <motion.span
                className="block mt-2 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 text-transparent bg-clip-text"
                initial={{ opacity: 0, x: -50 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  opacity: { duration: 0.8, delay: 0.3 },
                  x: { duration: 0.8, delay: 0.3 },
                  backgroundPosition: {
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
                style={{
                  backgroundSize: "200% auto",
                }}
              >
                at DCSecurite
              </motion.span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-white/70 text-lg md:text-xl mb-10 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Stay informed about the latest news, innovations and developments from DCSecurite.
              Discover our achievements, industry insights, and cybersecurity updates.
            </motion.p>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-2">
                  <Newspaper className="w-5 h-5 text-purple-400" />
                  <span className="text-3xl text-white">{newsData.length}</span>
                </div>
                <span className="text-white/60 text-sm">Latest Articles</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-purple-400" />
                  <span className="text-3xl text-white">2025</span>
                </div>
                <span className="text-white/60 text-sm">Current Year</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-purple-400" />
                  <span className="text-3xl text-white">Fresh</span>
                </div>
                <span className="text-white/60 text-sm">Updated Daily</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            className="w-full h-12 md:h-24 text-white dark:text-[#0A0F1F]"
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>

      {/* News Cards Grid */}
      <div className="relative bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-[#0A0F1F] dark:via-[#0A0F1F] dark:to-[#0D1520] py-20">
        {/* Subtle Pattern */}
        <div className="absolute inset-0 opacity-30 dark:opacity-10 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #0D6EFF 1px, transparent 0)`,
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        <div className="relative container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {newsData.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative bg-white/90 dark:bg-[#0F1419]/90 backdrop-blur-xl rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#0D6EFF]/20 transition-all duration-500"
              >
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0D6EFF]/0 via-[#0D6EFF]/0 to-[#0D6EFF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Article Image */}
                <div className="relative h-52 overflow-hidden">
                  {article.image ? (
                    <>
                      <motion.img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                      {/* Floating Category Badge */}
                      <motion.div
                        className="absolute top-4 right-4 px-3 py-1.5 bg-white/95 dark:bg-black/95 backdrop-blur-xl rounded-full border border-[#0D6EFF]/30 shadow-lg"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                      >
                        <span className="text-xs text-[#0D6EFF]">{article.category}</span>
                      </motion.div>
                    </>
                  ) : (
                    <div className="relative w-full h-full bg-gradient-to-br from-[#0D6EFF]/30 via-[#0D6EFF]/20 to-[#0D6EFF]/10 dark:from-[#0D6EFF]/40 dark:via-[#0D6EFF]/30 dark:to-[#0D6EFF]/20 flex items-center justify-center overflow-hidden">
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          rotate: [0, 180, 360],
                        }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute inset-0 opacity-20"
                        style={{
                          backgroundImage: `radial-gradient(circle at 50% 50%, #0D6EFF 1px, transparent 1px)`,
                          backgroundSize: "24px 24px",
                        }}
                      />
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="relative w-24 h-24 rounded-full bg-gradient-to-br from-[#0D6EFF]/30 to-[#0D6EFF]/10 flex items-center justify-center"
                      >
                        <Tag className="w-12 h-12 text-[#0D6EFF]" />
                      </motion.div>

                      {/* Floating Category Badge */}
                      <motion.div
                        className="absolute top-4 right-4 px-3 py-1.5 bg-white/95 dark:bg-black/95 backdrop-blur-xl rounded-full border border-[#0D6EFF]/30 shadow-lg"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                      >
                        <span className="text-xs text-[#0D6EFF]">{article.category}</span>
                      </motion.div>
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="relative p-6 flex flex-col">
                  {/* Date */}
                  <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{article.date}</span>
                  </div>

                  {/* Article Title */}
                  <h3 className="text-slate-900 dark:text-white mb-6 line-clamp-2 min-h-[3.5rem] group-hover:text-[#0D6EFF] transition-colors duration-300">
                    {article.title}
                  </h3>

                  {/* Read More Button */}
                  <motion.button
                    onClick={() => setSelectedArticle(article)}
                    className="relative inline-flex items-center gap-2 text-slate-900 dark:text-white group/btn overflow-hidden"
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10 transition-colors duration-300">
                      Read the story
                    </span>
                    <ArrowRight className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#0D6EFF] to-[#0D6EFF]/50"
                      initial={{ width: "2rem" }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                </div>

                {/* Decorative Corner Element */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#0D6EFF]/5 to-transparent rounded-br-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.article>
            ))}
          </div>
        </div>
      </div>



      {/* Article Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedArticle(null)}
          >
            <motion.div
              className="bg-white dark:bg-[#0F1419] rounded-3xl max-w-4xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl"
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header with Image Background */}
              <div className="relative h-64 overflow-hidden">
                {selectedArticle.image ? (
                  <>
                    <img
                      src={selectedArticle.image}
                      alt={selectedArticle.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  </>
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#0D6EFF]/30 via-[#0D6EFF]/20 to-[#0D6EFF]/10" />
                )}

                {/* Close Button */}
                <motion.button
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-full transition-colors border border-white/20"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-5 h-5 text-white" />
                </motion.button>

                {/* Meta Info */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center gap-4 flex-wrap">
                  <motion.div
                    className="px-4 py-2 bg-white/95 dark:bg-black/95 backdrop-blur-xl rounded-full border border-[#0D6EFF]/30"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="text-sm text-[#0D6EFF]">{selectedArticle.category}</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-2 text-white/90"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{selectedArticle.date}</span>
                  </motion.div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="overflow-y-auto p-8 md:p-10">
                {/* Article Title */}
                <motion.h2
                  className="text-slate-900 dark:text-white mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {selectedArticle.title}
                </motion.h2>

                {/* Article Content */}
                <motion.div
                  className="space-y-6 mb-10"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {selectedArticle.content.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </motion.div>

                {/* Quote Section */}
                {selectedArticle.quote && (
                  <motion.div
                    className="relative p-8 rounded-2xl bg-gradient-to-br from-[#0D6EFF]/5 to-[#0D6EFF]/10 dark:from-[#0D6EFF]/10 dark:to-[#0D6EFF]/5 border border-[#0D6EFF]/20 overflow-hidden"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {/* Decorative Quote Mark */}
                    <motion.svg
                      className="absolute top-4 left-4 w-16 h-16 text-[#0D6EFF]/10"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.5, type: "spring" }}
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </motion.svg>

                    <div className="relative z-10">
                      <blockquote className="text-slate-800 dark:text-slate-200 italic mb-4 leading-relaxed">
                        "{selectedArticle.quote}"
                      </blockquote>
                      <cite className="text-slate-600 dark:text-slate-400 not-italic flex items-center gap-3">
                        <span className="w-12 h-0.5 bg-gradient-to-r from-[#0D6EFF] to-transparent"></span>
                        {selectedArticle.quoteAuthor}
                      </cite>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#0D6EFF]/10 to-transparent rounded-tl-full" />
                  </motion.div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="sticky bottom-0 bg-white/80 dark:bg-[#0F1419]/80 backdrop-blur-xl border-t border-slate-200/50 dark:border-slate-800/50 p-6">
                <motion.button
                  onClick={() => setSelectedArticle(null)}
                  className="w-full px-6 py-4 bg-gradient-to-r from-[#0D6EFF] to-[#0D6EFF]/80 text-white rounded-xl hover:shadow-xl hover:shadow-[#0D6EFF]/30 transition-all duration-300 relative overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Close Article</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
