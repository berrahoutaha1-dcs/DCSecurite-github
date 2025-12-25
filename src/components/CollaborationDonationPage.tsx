import { motion } from "framer-motion";
import { useTheme } from "./ThemeContext";
import {
  ChevronRight,
  Handshake,
  Heart,
  Users,
  Target,
  Mail,
  Building2,
  GraduationCap,
  Shield,
  Lightbulb,
  X,
} from "lucide-react";
const bannerImage = "/assets/6f2a0933e51100d1ece3361ec08473023b014dd7.png";
const corporatePartnershipsImage = "/assets/1cf9972dadc63bde50e30d48dc8e591416350fd9.png";
const academicCollaborationImage = "/assets/7a906cf6c318d89c163e450d9859e92eab92e24e.png";
const innovationPartnershipsImage = "/assets/57dc40a494a6ce7212b714f0355b4b307bf47fc0.png";
import { useState } from "react";

export const CollaborationDonationPage = () => {
  const { theme } = useTheme();
  const [selectedPartnership, setSelectedPartnership] = useState<number | null>(null);

  const partnershipTypes = [
    {
      icon: Building2,
      title: "Corporate Partnerships",
      description:
        "Join forces with DCSecurite to strengthen cybersecurity across industries. We collaborate with enterprises to develop innovative security solutions.",
      benefits: [
        "Joint research initiatives",
        "Co-branded solutions",
        "Knowledge sharing programs",
      ],
      image: corporatePartnershipsImage,
    },
    {
      icon: GraduationCap,
      title: "Academic Collaboration",
      description:
        "Partner with universities and research institutions to advance cybersecurity education and drive cutting-edge research in digital security.",
      benefits: ["Student internship programs", "Research grants", "Guest lecture series"],
      image: academicCollaborationImage,
    },
    {
      icon: Lightbulb,
      title: "Innovation Partnerships",
      description:
        "Collaborate on breakthrough technologies and innovative approaches to emerging cybersecurity challenges. Together, we can shape the future.",
      benefits: ["Technology incubation", "Joint development projects", "Early access programs"],
      image: innovationPartnershipsImage,
    },
  ];

  const donationAreas = [
    {
      title: "Cybersecurity Education",
      description:
        "Support programs that provide cybersecurity training and education to underserved communities worldwide.",
      impact: "10,000+ students trained annually",
    },
    {
      title: "Open Source Security",
      description:
        "Fund open-source security tools and projects that benefit the global cybersecurity community.",
      impact: "50+ open source projects supported",
    },
    {
      title: "Incident Response Support",
      description:
        "Provide emergency cybersecurity assistance to organizations affected by major security incidents.",
      impact: "24/7 emergency response team",
    },
    {
      title: "Research & Development",
      description:
        "Advance cybersecurity research to stay ahead of evolving threats and protect digital infrastructure.",
      impact: "$5M+ in annual R&D investment",
    },
  ];

  return (
    <div className={`min-h-screen ${theme === "dark" ? "bg-[#0a0a0a]" : "bg-white"}`}>
      {/* Banner Section */}
      <div className="relative w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full"
        >
          <img
            src={bannerImage}
            alt="Collaboration & Donation - Building a Safer Digital Future Together"
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </div>

      {/* Breadcrumb Navigation */}
      <div className={`border-b ${theme === "dark" ? "border-gray-800" : "border-gray-100"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm"
            style={{ fontFamily: "Calibri, sans-serif" }}
          >
            <a
              href="#"
              className={`hover:underline ${
                theme === "dark"
                  ? "text-gray-400 hover:text-gray-300"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Home
            </a>
            <ChevronRight
              className={`w-3 h-3 sm:w-4 sm:h-4 ${theme === "dark" ? "text-gray-600" : "text-gray-400"}`}
            />
            <a
              href="#"
              className={`hover:underline ${
                theme === "dark"
                  ? "text-gray-400 hover:text-gray-300"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Company
            </a>
            <ChevronRight
              className={`w-3 h-3 sm:w-4 sm:h-4 ${theme === "dark" ? "text-gray-600" : "text-gray-400"}`}
            />
            <span className={`underline ${theme === "dark" ? "text-gray-300" : "text-gray-900"}`}>
              Collaboration & Donation
            </span>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 pb-16 sm:pb-20 md:pb-24">
        {/* Introduction Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20"
        >
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl mb-6 ${theme === "dark" ? "text-white" : "text-gray-900"}`}
            style={{ fontFamily: "Calibri, sans-serif", fontWeight: "bold" }}
          >
            Building a Safer Digital World Together
          </h2>
          <p
            className={`text-base sm:text-lg leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
            style={{ fontFamily: "Calibri, sans-serif" }}
          >
            At DCSecurite, we believe that cybersecurity is a collective responsibility. Through
            strategic partnerships and philanthropic initiatives, we work together with
            organizations, institutions, and communities to create a more secure digital ecosystem
            for everyone.
          </p>
        </motion.div>

        {/* Partnership Opportunities */}
        <div className="mb-16 sm:mb-20 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Handshake
                className={`w-8 h-8 ${theme === "dark" ? "text-[#0082af]" : "text-[#0082af]"}`}
              />
              <h3
                className={`text-2xl sm:text-3xl md:text-4xl ${theme === "dark" ? "text-white" : "text-gray-900"}`}
                style={{ fontFamily: "Calibri, sans-serif", fontWeight: "bold" }}
              >
                Partnership Opportunities
              </h3>
            </div>
            <p
              className={`text-base sm:text-lg max-w-3xl mx-auto ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
              style={{ fontFamily: "Calibri, sans-serif" }}
            >
              Collaborate with DCSecurite to drive innovation, share knowledge, and build solutions
              that protect organizations worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {partnershipTypes.map((partnership, index) => (
              <motion.div
                key={partnership.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`overflow-hidden transition-all duration-300 relative shadow-none ${
                  theme === "dark"
                    ? "border border-gray-700/50 hover:border-[#0082af]/50"
                    : "border border-gray-200 hover:border-gray-300"
                }`}
                style={{ boxShadow: "none" }}
              >
                {/* Image Section - Top Portion */}
                <div
                  className="w-full h-64 sm:h-72 relative"
                  style={{
                    backgroundImage: `url(${partnership.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* Light overlay for better image visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Content Section - Bottom Portion */}
                <div className={`p-6 sm:p-8 ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}>
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-4 ${
                      theme === "dark" ? "bg-[#0082af]/10" : "bg-[#0082af]/10"
                    }`}
                  >
                    <partnership.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#0082af]" />
                  </div>
                  <h4
                    className={`text-xl sm:text-2xl mb-4 ${theme === "dark" ? "text-white" : "text-gray-900"}`}
                    style={{ fontFamily: "Calibri, sans-serif", fontWeight: "bold" }}
                  >
                    {partnership.title}
                  </h4>

                  {/* Read More Button */}
                  <motion.button
                    onClick={() => setSelectedPartnership(index)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-[#0082af] to-[#006080] text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#0082af]/50"
                    style={{
                      fontFamily: "Calibri, sans-serif",
                      fontWeight: "bold",
                      fontSize: "14px",
                    }}
                  >
                    Read More
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Partnership Details Modal */}
        {selectedPartnership !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedPartnership(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className={`relative max-w-2xl w-full max-h-[85vh] overflow-y-auto rounded-2xl shadow-2xl ${
                theme === "dark"
                  ? "bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700"
                  : "bg-white"
              }`}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPartnership(null)}
                className={`absolute top-4 right-4 p-2 rounded-full transition-colors z-10 ${
                  theme === "dark"
                    ? "bg-gray-800/80 hover:bg-gray-700 text-gray-300"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }`}
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Content */}
              <div className="p-8 sm:p-10">
                <div
                  className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${
                    theme === "dark" ? "bg-[#0082af]/10" : "bg-[#0082af]/10"
                  }`}
                >
                  {(() => {
                    const Icon = partnershipTypes[selectedPartnership].icon;
                    return <Icon className="w-8 h-8 text-[#0082af]" />;
                  })()}
                </div>

                <h3
                  className={`text-3xl sm:text-4xl mb-6 ${theme === "dark" ? "text-white" : "text-gray-900"}`}
                  style={{ fontFamily: "Calibri, sans-serif", fontWeight: "bold" }}
                >
                  {partnershipTypes[selectedPartnership].title}
                </h3>

                <p
                  className={`text-base sm:text-lg leading-relaxed mb-8 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
                  style={{ fontFamily: "Calibri, sans-serif" }}
                >
                  {partnershipTypes[selectedPartnership].description}
                </p>

                <div className="space-y-4">
                  <h4
                    className={`text-xl sm:text-2xl mb-4 ${theme === "dark" ? "text-white" : "text-gray-900"}`}
                    style={{ fontFamily: "Calibri, sans-serif", fontWeight: "bold" }}
                  >
                    Key Benefits
                  </h4>
                  {partnershipTypes[selectedPartnership].benefits.map((benefit, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#0082af] mt-2.5 flex-shrink-0" />
                      <span
                        className={`text-base sm:text-lg ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
                        style={{ fontFamily: "Calibri, sans-serif" }}
                      >
                        {benefit}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  onClick={() => setSelectedPartnership(null)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 w-full px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#0082af] to-[#006080] text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#0082af]/50"
                  style={{ fontFamily: "Calibri, sans-serif", fontWeight: "bold" }}
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Donation Programs */}
        <div className="mb-16 sm:mb-20 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Heart
                className={`w-8 h-8 ${theme === "dark" ? "text-[#0082af]" : "text-[#0082af]"}`}
              />
              <h3
                className={`text-2xl sm:text-3xl md:text-4xl ${theme === "dark" ? "text-white" : "text-gray-900"}`}
                style={{ fontFamily: "Calibri, sans-serif", fontWeight: "bold" }}
              >
                Donation Programs
              </h3>
            </div>
            <p
              className={`text-base sm:text-lg max-w-3xl mx-auto ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
              style={{ fontFamily: "Calibri, sans-serif" }}
            >
              Your contributions help us make cybersecurity accessible to all and support
              initiatives that protect communities worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {donationAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
                className="flex flex-col items-center"
              >
                {/* Circular Container with Advanced Animations */}
                <motion.div
                  whileHover={{
                    scale: 1.15,
                    rotate: 5,
                    boxShadow:
                      theme === "dark"
                        ? "0 0 60px rgba(0, 130, 175, 0.6), 0 0 100px rgba(0, 130, 175, 0.4)"
                        : "0 0 60px rgba(0, 130, 175, 0.4), 0 0 100px rgba(0, 130, 175, 0.2)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    y: [0, -15, 0],
                    boxShadow:
                      theme === "dark"
                        ? [
                            "0 0 20px rgba(0, 130, 175, 0.3)",
                            "0 0 40px rgba(0, 130, 175, 0.5)",
                            "0 0 20px rgba(0, 130, 175, 0.3)",
                          ]
                        : [
                            "0 0 20px rgba(0, 130, 175, 0.2)",
                            "0 0 40px rgba(0, 130, 175, 0.3)",
                            "0 0 20px rgba(0, 130, 175, 0.2)",
                          ],
                  }}
                  transition={{
                    y: {
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                      delay: index * 0.3,
                    },
                    boxShadow: {
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                      delay: index * 0.3,
                    },
                    scale: { duration: 0.3 },
                    rotate: { duration: 0.3 },
                  }}
                  className={`w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full p-6 text-center flex flex-col items-center justify-center relative cursor-pointer ${
                    theme === "dark"
                      ? "bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-2 border-gray-700/50"
                      : "bg-white border-2 border-gray-100"
                  }`}
                  style={{
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                  }}
                >
                  {/* Animated Glow Ring */}
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                      delay: index * 0.2,
                    }}
                    className="absolute inset-0 rounded-full border-2 border-[#0082af]/30"
                    style={{
                      filter: "blur(8px)",
                    }}
                  />

                  {/* Rotating Border Effect */}
                  <motion.div
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                      delay: index * 0.2,
                    }}
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: `conic-gradient(from 0deg, transparent 0%, rgba(0, 130, 175, 0.3) 50%, transparent 100%)`,
                      opacity: 0.6,
                    }}
                  />

                  {/* Icon with Animation */}
                  <motion.div
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                      delay: index * 0.25,
                    }}
                    className={`w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center relative z-10 ${
                      theme === "dark" ? "bg-[#0082af]/10" : "bg-[#0082af]/10"
                    }`}
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                        delay: index * 0.2,
                      }}
                    >
                      <Target className="w-6 h-6 text-[#0082af]" />
                    </motion.div>
                  </motion.div>

                  {/* Text Content with Fade Animation */}
                  <motion.h4
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                    className={`text-base sm:text-lg mb-2 px-2 relative z-10 ${theme === "dark" ? "text-white" : "text-gray-900"}`}
                    style={{ fontFamily: "Calibri, sans-serif", fontWeight: "bold" }}
                  >
                    {area.title}
                  </motion.h4>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
                    className={`text-xs leading-relaxed px-3 relative z-10 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
                    style={{ fontFamily: "Calibri, sans-serif" }}
                  >
                    {area.description}
                  </motion.p>

                  {/* Particle Effect */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        y: [-20, -60, -20],
                        x: [0, (i - 1) * 20, 0],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.3 + i * 0.5,
                        ease: "easeInOut",
                      }}
                      className="absolute w-2 h-2 bg-[#0082af] rounded-full"
                      style={{
                        top: "50%",
                        left: "50%",
                        filter: "blur(1px)",
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Get Involved Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16 text-center ${
            theme === "dark"
              ? "bg-gradient-to-br from-[#0082af]/10 to-[#0082af]/5 border border-[#0082af]/20"
              : "bg-gradient-to-br from-[#0082af]/5 to-[#0082af]/10 border border-[#0082af]/20"
          }`}
        >
          <Users
            className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-6 ${theme === "dark" ? "text-[#0082af]" : "text-[#0082af]"}`}
          />
          <h3
            className={`text-2xl sm:text-3xl md:text-4xl mb-4 ${theme === "dark" ? "text-white" : "text-gray-900"}`}
            style={{ fontFamily: "Calibri, sans-serif", fontWeight: "bold" }}
          >
            Ready to Make an Impact?
          </h3>
          <p
            className={`text-base sm:text-lg mb-8 max-w-2xl mx-auto ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
            style={{ fontFamily: "Calibri, sans-serif" }}
          >
            Whether you&apos;re interested in partnering with us or supporting our mission through
            donations, we&apos;d love to hear from you. Together, we can create a safer digital
            future for everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl text-white bg-gradient-to-r from-[#0082af] to-[#006080] hover:shadow-lg hover:shadow-[#0082af]/50 transition-all duration-300 flex items-center gap-2"
              style={{ fontFamily: "Calibri, sans-serif", fontWeight: "bold" }}
            >
              <Mail className="w-5 h-5" />
              Contact Us
            </motion.button>
          </div>
        </motion.div>

        {/* Statistics Section */}
        <div className="mt-16 sm:mt-20 md:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            { number: "15+", label: "Active Partnerships" },
            { number: "26K+", label: "Students Reached" },
            { number: "$100K+", label: "Donated in Services" },
            { number: "7+", label: "Countries Supported" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div
                className={`text-3xl sm:text-4xl md:text-5xl mb-2 bg-gradient-to-r from-[#0082af] to-[#006080] bg-clip-text text-transparent`}
                style={{ fontFamily: "Calibri, sans-serif", fontWeight: "bold" }}
              >
                {stat.number}
              </div>
              <div
                className={`text-sm sm:text-base ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
                style={{ fontFamily: "Calibri, sans-serif" }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
