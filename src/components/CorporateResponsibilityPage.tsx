import { motion } from "framer-motion";
import { useTheme } from "./ThemeContext";
import { ChevronRight, Heart, Users, Leaf, Globe } from "lucide-react";
const bannerImage = "/assets/18712b513518ce85317e05c20fa99996744646b6.png";
const esgDiagram = "/assets/551e1378f780b6b6c5c98fcdd9a7049b46966256.png";
const commitmentImage = "/assets/e2bcd072d27830b87acfd800980af2ba7a000147.png";

export const CorporateResponsibilityPage = () => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen ${theme === "dark" ? "bg-[#0a0a0a]" : "bg-white"}`}>
      {/* Main Banner with Image - Full Width at Top */}
      <div className="relative w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full"
        >
          {/* Banner Image */}
          <img
            src={bannerImage}
            alt="Securing our digital future - Corporate Responsibility"
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
              Corporate Responsibility
            </span>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 pb-16 sm:pb-20 md:pb-24">
        {/* Main Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`rounded-xl sm:rounded-2xl overflow-hidden shadow-xl mb-8 sm:mb-12 md:mb-16 ${
            theme === "dark"
              ? "bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50"
              : "bg-white border border-gray-100"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left: Image */}
            <div className="relative h-64 sm:h-80 lg:h-auto min-h-[400px] overflow-hidden">
              <img
                src={commitmentImage}
                alt="Team collaboration on sustainability"
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
                  <Globe className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
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
                Our Commitment to Society
              </motion.h3>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className={`text-base sm:text-lg leading-relaxed ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
                style={{ fontFamily: "Calibri, sans-serif" }}
              >
                We lead purposeful initiatives that advance our commitment to creating a safer, more
                secure world—strengthening environmental sustainability, investing in our people,
                and upholding the highest standards of integrity. Our annual Corporate
                Responsibility (CR) Report highlights the actions we take and the progress we
                achieve toward building a sustainable and responsible business.
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Responsibility Pillars Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Pillar 1: Social Impact */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.05, y: -10 }}
            className={`rounded-full aspect-square p-6 sm:p-8 flex flex-col items-center justify-center text-center transition-shadow duration-300 cursor-pointer ${
              theme === "dark"
                ? "bg-gray-900/80 border border-gray-700/50 hover:shadow-2xl hover:shadow-gray-700/20"
                : "bg-white border border-gray-100 shadow-lg hover:shadow-2xl"
            }`}
          >
            <motion.div
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-4 ${
                theme === "dark" ? "bg-gray-700" : "bg-gray-100"
              }`}
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <Heart
                className={`w-5 h-5 sm:w-6 sm:h-6 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
              />
            </motion.div>
            <h4
              className={`text-xl sm:text-2xl mb-3 ${theme === "dark" ? "text-white" : "text-gray-900"}`}
              style={{ fontFamily: "Calibri, sans-serif", fontWeight: "bold" }}
            >
              Social Impact
            </h4>
            <p
              className={`text-sm leading-relaxed ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
              style={{ fontFamily: "Calibri, sans-serif" }}
            >
              Supporting communities through education programs, digital literacy initiatives, and
              partnerships with non-profit organizations worldwide.
            </p>
          </motion.div>

          {/* Pillar 2: Employee Well-being */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.05, y: -10 }}
            className={`rounded-full aspect-square p-6 sm:p-8 flex flex-col items-center justify-center text-center transition-shadow duration-300 cursor-pointer ${
              theme === "dark"
                ? "bg-gray-900/80 border border-gray-700/50 hover:shadow-2xl hover:shadow-gray-700/20"
                : "bg-white border border-gray-100 shadow-lg hover:shadow-2xl"
            }`}
          >
            <motion.div
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-4 ${
                theme === "dark" ? "bg-gray-700" : "bg-gray-100"
              }`}
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <Users
                className={`w-5 h-5 sm:w-6 sm:h-6 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
              />
            </motion.div>
            <h4
              className={`text-xl sm:text-2xl mb-3 ${theme === "dark" ? "text-white" : "text-gray-900"}`}
              style={{ fontFamily: "Calibri, sans-serif", fontWeight: "bold" }}
            >
              Employee Well-being
            </h4>
            <p
              className={`text-sm leading-relaxed ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
              style={{ fontFamily: "Calibri, sans-serif" }}
            >
              Fostering an inclusive workplace culture with comprehensive benefits, professional
              development opportunities, and work-life balance.
            </p>
          </motion.div>

          {/* Pillar 3: Environmental Sustainability */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.05, y: -10 }}
            className={`rounded-full aspect-square p-6 sm:p-8 flex flex-col items-center justify-center text-center transition-shadow duration-300 cursor-pointer ${
              theme === "dark"
                ? "bg-gray-900/80 border border-gray-700/50 hover:shadow-2xl hover:shadow-gray-700/20"
                : "bg-white border border-gray-100 shadow-lg hover:shadow-2xl"
            }`}
          >
            <motion.div
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-4 ${
                theme === "dark" ? "bg-gray-700" : "bg-gray-100"
              }`}
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <Leaf
                className={`w-5 h-5 sm:w-6 sm:h-6 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
              />
            </motion.div>
            <h4
              className={`text-xl sm:text-2xl mb-3 ${theme === "dark" ? "text-white" : "text-gray-900"}`}
              style={{ fontFamily: "Calibri, sans-serif", fontWeight: "bold" }}
            >
              Sustainability
            </h4>
            <p
              className={`text-sm leading-relaxed ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
              style={{ fontFamily: "Calibri, sans-serif" }}
            >
              Committed to reducing our carbon footprint through energy-efficient operations,
              responsible resource management, and green technologies.
            </p>
          </motion.div>

          {/* Pillar 4: Ethical Governance */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.05, y: -10 }}
            className={`rounded-full aspect-square p-6 sm:p-8 flex flex-col items-center justify-center text-center transition-shadow duration-300 cursor-pointer ${
              theme === "dark"
                ? "bg-gray-900/80 border border-gray-700/50 hover:shadow-2xl hover:shadow-gray-700/20"
                : "bg-white border border-gray-100 shadow-lg hover:shadow-2xl"
            }`}
          >
            <motion.div
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-4 ${
                theme === "dark" ? "bg-gray-700" : "bg-gray-100"
              }`}
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <Globe
                className={`w-5 h-5 sm:w-6 sm:h-6 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
              />
            </motion.div>
            <h4
              className={`text-xl sm:text-2xl mb-3 ${theme === "dark" ? "text-white" : "text-gray-900"}`}
              style={{ fontFamily: "Calibri, sans-serif", fontWeight: "bold" }}
            >
              Ethical Governance
            </h4>
            <p
              className={`text-sm leading-relaxed ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
              style={{ fontFamily: "Calibri, sans-serif" }}
            >
              Maintaining transparency, accountability, and ethical standards in all business
              practices and stakeholder relationships.
            </p>
          </motion.div>
        </div>

        {/* ESG Diagram */}
        <div className="mt-12 sm:mt-16 md:mt-20">
          <div className="flex justify-center">
            <img
              src={esgDiagram}
              alt="Environmental, Governance, and Social Pillars - ESG Framework"
              className="w-full max-w-4xl h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
