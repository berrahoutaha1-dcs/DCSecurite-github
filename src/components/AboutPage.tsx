import { motion } from "framer-motion";
import { useState } from "react";
const aboutImage = "/assets/bae5e9bfe3b5c3b135af00c221fb30b631226cba.png";
const missionBackground = "/assets/6082db58bdd279ac67af61612542786b64b9f156.png";
const ceoPhoto = "/assets/c6ee712cb6fd6117716643853068d3ff2d643094.png";
const presidentPhoto = "/assets/7dae9d613329ff413367833aa60da7a2d9671e21.png";
import { Linkedin, X } from "lucide-react";

interface AboutPageProps {
  onClose?: () => void;
  onPrivacyPolicyClick?: () => void;
  onTermsOfServiceClick?: () => void;
}

interface LeaderBio {
  id: string;
  image: string;
  name: string;
  role: string;
  bio: string;
  linkedIn?: string;
}

const leaderBios: LeaderBio[] = [
  {
    id: "nikesh",
    image: ceoPhoto,
    name: "Berrahou Taha",
    role: "Chief Executive Officer",
    bio: "Berrahou Taha serves as the Chief Executive Officer of DCSecurite, where he leads the company's vision, strategic growth, and overall mission to strengthen digital security for businesses and organizations. Through his leadership, DCSecurite has evolved into a trusted cybersecurity partner known for its commitment to innovation, reliability, and high-standards of service.\n\nWith strong experience in cybersecurity, technology management, and business development, Mr. Taha has been central to shaping DCSecurite's direction and expanding its impact across various sectors. His strategic mindset and focus on operational excellence continue to drive the company's progress and reputation in the cybersecurity field.\n\nBerrahou Taha is recognized for his forward-thinking leadership and dedication to developing modern, effective security solutions that address today's rapidly evolving cyber threat landscape. He remains committed to empowering teams, fostering innovation, and positioning DCSecurite as a benchmark of quality in digital security.",
    linkedIn:
      "https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile",
  },
  {
    id: "bj",
    image: presidentPhoto,
    name: "Bouayad Debbagh Mohammed Arselen",
    role: "Chief Technology Officer",
    bio: "Bouayad Debbagh Mohammed Arselen serves as the Chief Technology Officer at DCSecurite, where he oversees the company's technology strategy, cybersecurity innovation, and development of high-impact digital security solutions. With over five years of hands-on experience in cybersecurity, software engineering, and building tech startups, he plays a key role in driving DCSecurite's technical growth and product excellence.\n\nBefore joining DCSecurite, Mr. Arselen contributed to multiple cybersecurity and tech-driven startups, where he designed secure architectures, developed scalable digital platforms, and helped teams transform ideas into real, market-ready solutions. His ability to bridge deep technical expertise with practical execution has positioned him as a strong leader in modern cybersecurity engineering.\n\nMr. Arselen is passionate about leveraging emerging technologies to protect organizations from evolving cyber threats, while fostering a culture of innovation, excellence, and continuous improvement. He holds a Bachelor's degree in Computer Science and has been actively involved in building and scaling cybersecurity-focused startups.",
    linkedIn: "https://www.linkedin.com/in/mohamed-arslen-bouayad-debbagh-06257b228/",
  },
];

export function AboutPage({
  onClose,
  onPrivacyPolicyClick,
  onTermsOfServiceClick,
}: AboutPageProps) {
  const [activeTab, setActiveTab] = useState("mission");
  const [activeLeaderCard, setActiveLeaderCard] = useState<string | null>(null);
  const [selectedLeader, setSelectedLeader] = useState<LeaderBio | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50 dark:from-[#0A0F1F] dark:via-[#0D1425] dark:to-[#0A0F1F]">
      {/* Banner Image with Centered Hero Text */}
      <section className="relative w-full overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-[50vh] sm:h-[60vh] md:h-auto"
        >
          <img
            src={aboutImage}
            alt="DCSecurite Next Cyber Force Office"
            className="w-full h-full object-cover md:h-auto md:object-contain"
          />
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/20"></div>

          {/* Centered Hero Text */}
          <div className="absolute inset-0 flex items-center justify-center pt-16 sm:pt-20 md:pt-0">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-center"
              >
                <h1
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-white mb-4 sm:mb-6 max-w-5xl mx-auto leading-tight drop-shadow-2xl px-2"
                  style={{ fontFamily: "'Calibri', sans-serif", fontWeight: 700 }}
                >
                  Every layer of protection we build is an investment in tomorrow.
                </h1>
              </motion.div>
            </div>
          </div>

          {/* Smooth Bottom Shadow Gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-24 md:h-32 lg:h-40 xl:h-48 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none"></div>
        </motion.div>
      </section>

      {/* Digital Transformation Statistics Section */}
      <section
        className="relative py-16 sm:py-20 lg:py-24 pb-24 sm:pb-28 lg:pb-32 overflow-hidden"
        style={{ backgroundColor: "#0a0a0a" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-5 space-y-4">
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl text-white leading-tight"
                style={{ fontFamily: "'Calibri', sans-serif", fontWeight: 700 }}
              >
                The world is undergoing rapid digital transformation
              </h2>
              <p
                className="text-base sm:text-lg text-white/80"
                style={{ fontFamily: "'Calibri', sans-serif" }}
              >
                AI, cloud, and automation are reshaping industries.
              </p>
              <div className="pt-2">
                <p
                  className="text-white mb-1"
                  style={{ fontFamily: "'Calibri', sans-serif", fontWeight: 700 }}
                >
                  Data growth explosion:
                </p>
                <p
                  className="text-white/70 text-sm"
                  style={{ fontFamily: "'Calibri', sans-serif" }}
                >
                  Global data creation is expected to exceed 180 zettabytes.
                </p>
              </div>
            </div>

            {/* Right Column - Statistics in 2x2 Grid */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-x-8 gap-y-10 sm:gap-y-12 lg:gap-y-14">
              {/* Stat 1 - Artificial Intelligence */}
              <div className="space-y-3">
                <p
                  className="text-xs text-white/50 uppercase tracking-wide mb-2"
                  style={{ fontFamily: "'Calibri', sans-serif" }}
                >
                  Artificial Intelligence
                </p>
                <p
                  className="text-5xl sm:text-6xl lg:text-7xl text-white leading-none mb-2"
                  style={{ fontFamily: "'Calibri', sans-serif", fontWeight: 700 }}
                >
                  94%
                </p>
                <p
                  className="text-xs sm:text-sm text-white/60 leading-relaxed"
                  style={{ fontFamily: "'Calibri', sans-serif" }}
                >
                  of businesses are investing in data readiness for AI
                </p>
              </div>

              {/* Stat 2 - Cloud */}
              <div className="space-y-3">
                <p
                  className="text-xs text-white/50 uppercase tracking-wide mb-2"
                  style={{ fontFamily: "'Calibri', sans-serif" }}
                >
                  Cloud
                </p>
                <p
                  className="text-5xl sm:text-6xl lg:text-7xl text-white leading-none mb-2"
                  style={{ fontFamily: "'Calibri', sans-serif", fontWeight: 700 }}
                >
                  23%
                </p>
                <p
                  className="text-xs sm:text-sm text-white/60 leading-relaxed"
                  style={{ fontFamily: "'Calibri', sans-serif" }}
                >
                  Increase in global cloud infrastructure service spending
                </p>
              </div>

              {/* Stat 3 - AI Integration */}
              <div className="space-y-3">
                <p
                  className="text-5xl sm:text-6xl lg:text-7xl text-white leading-none mb-2"
                  style={{ fontFamily: "'Calibri', sans-serif", fontWeight: 700 }}
                >
                  72%
                </p>
                <p
                  className="text-xs sm:text-sm text-white/60 leading-relaxed"
                  style={{ fontFamily: "'Calibri', sans-serif" }}
                >
                  Organizations integrated AI into at least one business function
                </p>
              </div>

              {/* Stat 4 - Digital Transformation */}
              <div className="space-y-3">
                <p
                  className="text-5xl sm:text-6xl lg:text-7xl text-white leading-none mb-2"
                  style={{ fontFamily: "'Calibri', sans-serif", fontWeight: 700 }}
                >
                  75%
                </p>
                <p
                  className="text-xs sm:text-sm text-white/60 leading-relaxed"
                  style={{ fontFamily: "'Calibri', sans-serif" }}
                >
                  Organizations will adopt digital transformation with cloud as primary platform
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabbed Navigation Section with City Background */}
      <section className="relative pt-12 sm:pt-16 md:pt-20 lg:pt-32 xl:pt-40 pb-16 sm:pb-20 md:pb-24 lg:pb-28 xl:pb-32 overflow-hidden min-h-[80vh] md:min-h-screen">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={missionBackground}
            alt="City Network Background"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay with network pattern - Reduced opacity for better background visibility */}
          <div className="absolute inset-0 bg-black/15"></div>
          {/* Network lines overlay effect */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(90deg, rgba(13, 110, 255, 0.1) 1px, transparent 1px),
                linear-gradient(rgba(13, 110, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "100px 100px",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-16">
            {/* Left Navigation - Horizontal on mobile, Vertical on desktop */}
            <div className="lg:col-span-1">
              {/* Mobile Horizontal Tabs - Left Aligned */}
              <nav
                className="lg:hidden flex overflow-x-auto gap-2 pb-2 mb-8"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                <style>{`
                  nav::-webkit-scrollbar {
                    display: none;
                  }
                `}</style>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  onClick={() => setActiveTab("mission")}
                  className={`flex-shrink-0 px-3 py-2 rounded-md transition-all duration-300 whitespace-nowrap ${
                    activeTab === "mission"
                      ? "text-white bg-[#0D6EFF]"
                      : "text-white/90 bg-slate-700/70"
                  }`}
                  style={{ fontFamily: "'Calibri', sans-serif", fontWeight: 700, fontSize: "11px" }}
                >
                  Our Mission
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  onClick={() => setActiveTab("what-we-do")}
                  className={`flex-shrink-0 px-3 py-2 rounded-md transition-all duration-300 whitespace-nowrap ${
                    activeTab === "what-we-do"
                      ? "text-white bg-[#0D6EFF]"
                      : "text-white/90 bg-slate-700/70"
                  }`}
                  style={{ fontFamily: "'Calibri', sans-serif", fontWeight: 700, fontSize: "11px" }}
                >
                  What we do
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  onClick={() => setActiveTab("our-value")}
                  className={`flex-shrink-0 px-3 py-2 rounded-md transition-all duration-300 whitespace-nowrap ${
                    activeTab === "our-value"
                      ? "text-white bg-[#0D6EFF]"
                      : "text-white/90 bg-slate-700/70"
                  }`}
                  style={{ fontFamily: "'Calibri', sans-serif", fontWeight: 700, fontSize: "11px" }}
                >
                  Our Value
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  onClick={() => setActiveTab("our-culture")}
                  className={`flex-shrink-0 px-3 py-2 rounded-md transition-all duration-300 whitespace-nowrap ${
                    activeTab === "our-culture"
                      ? "text-white bg-[#0D6EFF]"
                      : "text-white/90 bg-slate-700/70"
                  }`}
                  style={{ fontFamily: "'Calibri', sans-serif", fontWeight: 700, fontSize: "11px" }}
                >
                  Our Culture
                </motion.button>
              </nav>

              {/* Desktop Vertical Tabs */}
              <nav className="hidden lg:block space-y-4">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  onClick={() => setActiveTab("mission")}
                  className={`block w-full text-left px-6 xl:px-7 py-4 xl:py-5 transition-all duration-300 text-lg xl:text-xl ${
                    activeTab === "mission"
                      ? "text-[#0D6EFF] border-l-4 border-[#0D6EFF] bg-white/5"
                      : "text-slate-400 hover:text-slate-200 border-l-4 border-transparent hover:bg-white/5"
                  }`}
                  style={{ fontFamily: "'Calibri', sans-serif", fontWeight: 700 }}
                >
                  Our Mission
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  onClick={() => setActiveTab("what-we-do")}
                  className={`block w-full text-left px-6 xl:px-7 py-4 xl:py-5 transition-all duration-300 text-lg xl:text-xl ${
                    activeTab === "what-we-do"
                      ? "text-[#0D6EFF] border-l-4 border-[#0D6EFF] bg-white/5"
                      : "text-slate-400 hover:text-slate-200 border-l-4 border-transparent hover:bg-white/5"
                  }`}
                  style={{ fontFamily: "'Calibri', sans-serif", fontWeight: 700 }}
                >
                  What we do
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  onClick={() => setActiveTab("our-value")}
                  className={`block w-full text-left px-6 xl:px-7 py-4 xl:py-5 transition-all duration-300 text-lg xl:text-xl ${
                    activeTab === "our-value"
                      ? "text-[#0D6EFF] border-l-4 border-[#0D6EFF] bg-white/5"
                      : "text-slate-400 hover:text-slate-200 border-l-4 border-transparent hover:bg-white/5"
                  }`}
                  style={{ fontFamily: "'Calibri', sans-serif", fontWeight: 700 }}
                >
                  Our Value
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  onClick={() => setActiveTab("our-culture")}
                  className={`block w-full text-left px-6 xl:px-7 py-4 xl:py-5 transition-all duration-300 text-lg xl:text-xl ${
                    activeTab === "our-culture"
                      ? "text-[#0D6EFF] border-l-4 border-[#0D6EFF] bg-white/5"
                      : "text-slate-400 hover:text-slate-200 border-l-4 border-transparent hover:bg-white/5"
                  }`}
                  style={{ fontFamily: "'Calibri', sans-serif", fontWeight: 700 }}
                >
                  Our Culture
                </motion.button>
              </nav>
            </div>

            {/* Right Content Area */}
            <div className="lg:col-span-3">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center px-1 sm:px-2 md:px-4"
              >
                {activeTab === "mission" && (
                  <>
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="text-base sm:text-lg md:text-xl lg:text-2xl text-white tracking-widest uppercase mb-3 sm:mb-4 md:mb-5 lg:mb-6 drop-shadow-[0_0_15px_rgba(13,110,255,0.3)]"
                      style={{ fontFamily: "'Calibri', sans-serif" }}
                    >
                      OUR MISSION
                    </motion.p>
                    <h2
                      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-white leading-tight"
                      style={{ fontFamily: "'Calibri', sans-serif", fontWeight: 700 }}
                    >
                      To be the leading cybersecurity partner, securing the future of our digital
                      lives.
                    </h2>
                  </>
                )}

                {activeTab === "what-we-do" && (
                  <>
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="text-base sm:text-lg md:text-xl lg:text-2xl text-white tracking-widest uppercase mb-3 sm:mb-4 md:mb-5 lg:mb-6 drop-shadow-[0_0_15px_rgba(13,110,255,0.3)]"
                      style={{ fontFamily: "'Calibri', sans-serif" }}
                    >
                      WHAT WE DO
                    </motion.p>
                    <h2
                      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-white leading-tight"
                      style={{ fontFamily: "'Calibri', sans-serif", fontWeight: 700 }}
                    >
                      We deliver comprehensive cybersecurity solutions that protect organizations
                      from evolving threats.
                    </h2>
                  </>
                )}

                {activeTab === "our-value" && (
                  <>
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="text-base sm:text-lg md:text-xl lg:text-2xl text-white tracking-widest uppercase mb-3 sm:mb-4 md:mb-5 lg:mb-6 drop-shadow-[0_0_15px_rgba(13,110,255,0.3)]"
                      style={{ fontFamily: "'Calibri', sans-serif" }}
                    >
                      OUR VALUE
                    </motion.p>
                    <h2
                      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-white leading-tight"
                      style={{ fontFamily: "'Calibri', sans-serif", fontWeight: 700 }}
                    >
                      We create lasting value through innovation, excellence, and unwavering
                      commitment to security.
                    </h2>
                  </>
                )}

                {activeTab === "our-culture" && (
                  <>
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="text-base sm:text-lg md:text-xl lg:text-2xl text-white tracking-widest uppercase mb-3 sm:mb-4 md:mb-5 lg:mb-6 drop-shadow-[0_0_15px_rgba(13,110,255,0.3)]"
                      style={{ fontFamily: "'Calibri', sans-serif" }}
                    >
                      OUR CULTURE
                    </motion.p>
                    <h2
                      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-white leading-tight"
                      style={{ fontFamily: "'Calibri', sans-serif", fontWeight: 700 }}
                    >
                      A culture of collaboration, continuous learning, and relentless pursuit of
                      cybersecurity excellence.
                    </h2>
                  </>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section
        className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
        style={{ backgroundColor: "#0a0a0a" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          {/* Header */}
          <div className="flex items-center justify-between mb-12 sm:mb-16">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl"
              style={{
                fontFamily: "'Inter', 'Segoe UI', sans-serif",
                fontWeight: 600,
                color: "#FFFFFF",
              }}
            >
              Meet our leadership team
            </h2>
            <button
              className="text-white hover:text-[#0D6EFF] transition-colors duration-300 text-sm sm:text-base underline"
              style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}
            >
              See All
            </button>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 max-w-4xl mx-auto">
            {/* Row 1 */}
            <LeaderCard
              image={ceoPhoto}
              name="Berrahou Taha"
              role="Chief Executive Officer"
              leaderId="nikesh"
              isActive={activeLeaderCard === "nikesh"}
              onClick={() => setActiveLeaderCard(activeLeaderCard === "nikesh" ? null : "nikesh")}
              onReadMore={() =>
                setSelectedLeader(leaderBios.find((l) => l.id === "nikesh") || null)
              }
            />
            <LeaderCard
              image={presidentPhoto}
              name="Bouayad Debbagh Mohammed Arselen"
              role="Chief Technology Officer"
              leaderId="bj"
              isActive={activeLeaderCard === "bj"}
              onClick={() => setActiveLeaderCard(activeLeaderCard === "bj" ? null : "bj")}
              onReadMore={() => setSelectedLeader(leaderBios.find((l) => l.id === "bj") || null)}
            />
          </div>
        </div>
      </section>

      {/* Leadership Bio Modal */}
      {selectedLeader && (
        <LeaderBioModal leader={selectedLeader} onClose={() => setSelectedLeader(null)} />
      )}

      {/* Newsletter Subscription Section */}
      <section
        className="relative py-12 sm:py-16 lg:py-20 overflow-hidden"
        style={{ backgroundColor: "#0a0a0a" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Left Side - Text */}
            <div className="flex-1 text-center lg:text-left">
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl text-white leading-tight"
                style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif", fontWeight: 600 }}
              >
                Get the latest news, invites to events, and threat alerts
              </h2>
            </div>

            {/* Right Side - Email Form */}
            <div className="flex-1 w-full lg:max-w-xl">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email now to subscribe!"
                  className="flex-1 px-5 py-3 bg-transparent border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white/60 transition-colors duration-300"
                  style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-[#E27B60] hover:bg-[#d66b50] text-white transition-colors duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
                  style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif", fontWeight: 600 }}
                >
                  Sign up
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 3L11 8L6 13"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.button>
              </div>

              {/* Terms and Privacy Text */}
              <p
                className="text-xs text-white/70 mt-3 text-center sm:text-left"
                style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}
              >
                By submitting this form, you agree to our{" "}
                <a
                  href="#"
                  className="text-white underline hover:text-white/90 transition-colors duration-200"
                  onClick={onTermsOfServiceClick}
                >
                  Terms of Use
                </a>{" "}
                and acknowledge our{" "}
                <a
                  href="#"
                  className="text-white underline hover:text-white/90 transition-colors duration-200"
                  onClick={onPrivacyPolicyClick}
                >
                  Privacy Statement
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Leader Card Component
interface LeaderCardProps {
  image: string;
  name: string;
  role: string;
  leaderId: string;
  isActive?: boolean;
  onClick?: () => void;
  onReadMore?: () => void;
}

function LeaderCard({
  image,
  name,
  role,
  leaderId,
  isActive = false,
  onClick,
  onReadMore,
}: LeaderCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative overflow-hidden aspect-[3/4] bg-gradient-to-br from-slate-800 to-slate-900 shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <img src={image} alt={name} className="w-full h-full object-cover" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

        {/* Text Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
          <h3
            className="mb-2"
            style={{
              fontFamily: "'Inter', 'Segoe UI', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(28px, 4vw, 36px)",
              color: "#FFFFFF",
              lineHeight: "1.3",
            }}
          >
            {name}
          </h3>
          <p
            style={{
              fontFamily: "'Inter', 'Segoe UI', sans-serif",
              fontSize: "clamp(22px, 3vw, 28px)",
              color: "#C7C7C7",
              lineHeight: "1.4",
            }}
          >
            {role}
          </p>

          {/* Read More Button - Shows when card is active */}
          {isActive && (
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              whileHover={{ scale: 1.05 }}
              className="mt-4 px-4 py-2 border border-white/30 rounded-full text-white text-xs sm:text-sm hover:bg-white/10 transition-all duration-300"
              style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}
              onClick={(e) => {
                e.stopPropagation();
                if (onReadMore) onReadMore();
              }}
            >
              Read more
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// Leadership Bio Modal Component
interface LeaderBioModalProps {
  leader: LeaderBio;
  onClose: () => void;
}

function LeaderBioModal({ leader, onClose }: LeaderBioModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.85)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="relative bg-black rounded-lg shadow-2xl w-full max-w-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-white/70 hover:text-white transition-colors duration-200"
        >
          <X size={20} />
        </button>

        <div
          className="p-6 sm:p-8 max-h-[85vh] overflow-y-auto"
          style={{ scrollbarWidth: "thin", scrollbarColor: "#444 #000" }}
        >
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row gap-6 mb-6">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <img
                src={leader.image}
                alt={leader.name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded object-cover"
              />
            </div>

            {/* Name and Title */}
            <div className="flex-1">
              <h2
                className="text-xl sm:text-2xl mb-2"
                style={{
                  fontFamily: "'Inter', 'Segoe UI', sans-serif",
                  fontWeight: 700,
                  color: "#FFFFFF",
                }}
              >
                {leader.name}
              </h2>
              <p
                className="text-sm sm:text-base mb-3"
                style={{
                  fontFamily: "'Inter', 'Segoe UI', sans-serif",
                  color: "#FFFFFF",
                }}
              >
                {leader.role}
              </p>

              {/* LinkedIn Icon */}
              {leader.linkedIn && (
                <a
                  href={leader.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-white/70 hover:text-white transition-colors duration-200"
                >
                  <Linkedin size={18} />
                </a>
              )}
            </div>
          </div>

          {/* Biography Text */}
          <div
            className="text-sm sm:text-base leading-relaxed whitespace-pre-line"
            style={{
              fontFamily: "'Inter', 'Segoe UI', sans-serif",
              color: "#FFFFFF",
            }}
          >
            {leader.bio}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
