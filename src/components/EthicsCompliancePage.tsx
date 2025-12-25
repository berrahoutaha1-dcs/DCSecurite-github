import { motion } from "framer-motion";
import { useTheme } from "./ThemeContext";
import { ChevronRight, FileCheck, Shield, Book } from "lucide-react";

export const EthicsCompliancePage = () => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen ${theme === "dark" ? "bg-[#0a0a0a]" : "bg-white"}`}>
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
              Policies
            </a>
            <ChevronRight
              className={`w-3 h-3 sm:w-4 sm:h-4 ${theme === "dark" ? "text-gray-600" : "text-gray-400"}`}
            />
            <span className={`underline ${theme === "dark" ? "text-gray-300" : "text-gray-900"}`}>
              Ethics & Compliance
            </span>
          </motion.div>
        </div>
      </div>

      {/* Main Highlight Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-56 pb-8 sm:pb-12 md:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative bg-gradient-to-r from-[#131a1e] to-[#1a2328] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                backgroundSize: "30px 30px",
              }}
            />
          </div>

          <div className="relative z-10 px-6 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6"
              style={{ fontFamily: "Calibri, sans-serif", fontWeight: "bold" }}
            >
              Code of Business Conduct and Ethics
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2"
              style={{ fontFamily: "Calibri, sans-serif" }}
            >
              DCSecurite is committed to conducting business with integrity, transparency, and in
              full compliance with all applicable laws and regulations. Our code of ethics guides
              every decision we make.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-white text-[#131a1e] px-6 sm:px-8 py-3 sm:py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
              style={{ fontFamily: "Calibri, sans-serif", fontWeight: "bold" }}
            >
              Learn More
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 pb-16 sm:pb-20 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`rounded-xl sm:rounded-2xl overflow-hidden shadow-xl ${
            theme === "dark"
              ? "bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50"
              : "bg-white border border-gray-100"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left: Image */}
            <div className="relative h-64 sm:h-80 lg:h-auto min-h-[400px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
                alt="Professional working on compliance"
                className="w-full h-full object-cover"
              />
              <div
                className={`absolute inset-0 ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-gray-900/20 to-transparent"
                    : "bg-gradient-to-r from-white/10 to-transparent"
                }`}
              />
            </div>

            {/* Right: Text Content */}
            <div className="p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center">
              {/* Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="mb-6"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#131a1e] rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
              </motion.div>

              {/* Title */}
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className={`text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
                style={{ fontFamily: "Calibri, sans-serif", fontWeight: "bold" }}
              >
                Compliance
              </motion.h3>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className={`text-base sm:text-lg leading-relaxed mb-6 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
                style={{ fontFamily: "Calibri, sans-serif" }}
              >
                Our global compliance program ensures that DCSecurite operates with the highest
                ethical standards across all regions. We maintain strict adherence to international
                regulations, industry best practices, and our own internal policies that protect our
                clients, employees, and stakeholders.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className={`text-base sm:text-lg leading-relaxed ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
                style={{ fontFamily: "Calibri, sans-serif" }}
              >
                Every member of our team is trained on compliance requirements and empowered to
                speak up when they see potential violations. We believe that ethical behavior is not
                just a requirement—it's the foundation of trust that defines our relationships with
                clients worldwide.
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Additional Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12 md:mt-16">
          {/* Card 1: Policies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(19, 26, 30, 0.15)" }}
            className={`rounded-xl p-6 sm:p-8 transition-all duration-300 ${
              theme === "dark"
                ? "bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50"
                : "bg-white border border-gray-100 shadow-lg"
            }`}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#131a1e]/10 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
              <Book className="w-5 h-5 sm:w-6 sm:h-6 text-[#131a1e]" />
            </div>
            <h4
              className={`text-xl sm:text-2xl mb-3 sm:mb-4 ${theme === "dark" ? "text-white" : "text-gray-900"}`}
              style={{ fontFamily: "Calibri, sans-serif", fontWeight: "bold" }}
            >
              Corporate Policies
            </h4>
            <p
              className={`text-sm sm:text-base leading-relaxed ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
              style={{ fontFamily: "Calibri, sans-serif" }}
            >
              Access our comprehensive library of corporate policies, including data privacy,
              anti-corruption, and information security guidelines.
            </p>
          </motion.div>

          {/* Card 2: Ethics Hotline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(19, 26, 30, 0.15)" }}
            className={`rounded-xl p-6 sm:p-8 transition-all duration-300 ${
              theme === "dark"
                ? "bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50"
                : "bg-white border border-gray-100 shadow-lg"
            }`}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#131a1e]/10 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-[#131a1e]" />
            </div>
            <h4
              className={`text-xl sm:text-2xl mb-3 sm:mb-4 ${theme === "dark" ? "text-white" : "text-gray-900"}`}
              style={{ fontFamily: "Calibri, sans-serif", fontWeight: "bold" }}
            >
              Ethics Hotline
            </h4>
            <p
              className={`text-sm sm:text-base leading-relaxed ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
              style={{ fontFamily: "Calibri, sans-serif" }}
            >
              Report concerns confidentially through our 24/7 ethics hotline. All reports are
              thoroughly investigated with full anonymity protection.
            </p>
          </motion.div>

          {/* Card 3: Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(19, 26, 30, 0.15)" }}
            className={`rounded-xl p-6 sm:p-8 transition-all duration-300 ${
              theme === "dark"
                ? "bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50"
                : "bg-white border border-gray-100 shadow-lg"
            }`}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#131a1e]/10 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
              <FileCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#131a1e]" />
            </div>
            <h4
              className={`text-xl sm:text-2xl mb-3 sm:mb-4 ${theme === "dark" ? "text-white" : "text-gray-900"}`}
              style={{ fontFamily: "Calibri, sans-serif", fontWeight: "bold" }}
            >
              Certifications
            </h4>
            <p
              className={`text-sm sm:text-base leading-relaxed ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
              style={{ fontFamily: "Calibri, sans-serif" }}
            >
              View our industry certifications and compliance validations.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
