import React from "react";
import {
  Home,
  ShoppingCart,
  Package,
  TrendingUp,
  Zap,
  Shield,
  Clock,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  Building2,
  Users,
  BarChart3,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeContext";

const logisoftBanner = "/assets/21862c9f5eda2ab8549161b8d47dc93d1fc667eb.png";
const deliveryImage = "/assets/2009cfefd2e766b77a453428e81621e4e6e42bb5.png";
const handshakeImage = "/assets/4d21f896d9051dcdb38d6ddb497da0aa0c54610d.png";
const signageImage = "/assets/8c4d2aef4da9a07b9eebd2ae8fef4013c5b114f1.png";

interface Logisoft360PageProps {
  onPrivacyClick?: () => void;
  onTermsClick?: () => void;
  onCookieClick?: () => void;
  onContactClick?: () => void;
  onHomeClick?: () => void;
  onAboutClick?: () => void;
  onServicesClick?: () => void;
  onIndustriesClick?: () => void;
  onBlogClick?: () => void;
  onWhatsNewClick?: () => void;
  onERPManagementClick?: () => void;
  onCRMClick?: () => void;
  onHRMClick?: () => void;
  onIndustrialClick?: () => void;
  onConstructionClick?: () => void;
  onLogisoft360Click?: () => void;
  onUIUXDesignClick?: () => void;
  onWebDevelopmentClick?: () => void;
  onMobileDevelopmentClick?: () => void;
  onUnderAttackClick?: () => void;
  onSignInClick?: () => void;
  onCustomerLoginClick?: () => void;
  onAdminLoginClick?: () => void;
  onStudentMemberLoginClick?: () => void;
  onCustomerSignUpClick?: () => void;
  onStudentMemberSignUpClick?: () => void;
  onSignUpModalOpen?: () => void;
  onThreatMapClick?: () => void;
  onSecurityTestClick?: () => void;
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
  onCommunityClick?: () => void;
}

const Logisoft360Page: React.FC<Logisoft360PageProps> = ({
  onPrivacyClick,
  onTermsClick,
  onCookieClick,
  onContactClick,
  onHomeClick,
  onAboutClick,
  onServicesClick,
  onIndustriesClick,
  onBlogClick,
  onWhatsNewClick,
  onERPManagementClick,
  onCRMClick,
  onHRMClick,
  onIndustrialClick,
  onConstructionClick,
  onLogisoft360Click,
  onUIUXDesignClick,
  onWebDevelopmentClick,
  onMobileDevelopmentClick,
  onUnderAttackClick,
  onSignInClick,
  onCustomerLoginClick,
  onAdminLoginClick,
  onStudentMemberLoginClick,
  onCustomerSignUpClick,
  onStudentMemberSignUpClick,
  onSignUpModalOpen,
  onThreatMapClick,
  onSecurityTestClick,
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
  onCommunityClick,
}) => {
  const { theme } = useTheme();

  const features = [
    {
      icon: Package,
      title: "Complete Software Solutions",
      description:
        "Comprehensive management software for all types of business activities and industries.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Shield,
      title: "Professional & Reliable",
      description:
        "Backed by DCSecurite expertise, ensuring secure and professional business solutions.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Zap,
      title: "Efficient Management",
      description:
        "Streamline your operations with powerful tools designed for maximum efficiency.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: TrendingUp,
      title: "Business Growth",
      description: "Scale your business with enterprise-grade software that grows with your needs.",
      color: "from-orange-500 to-red-500",
    },
  ];

  const softwareCategories = [
    {
      icon: Building2,
      title: "Enterprise Resource Planning",
      description: "Complete ERP solutions for integrated business management",
      color: "from-blue-600 to-indigo-600",
    },
    {
      icon: Users,
      title: "Customer Relationship Management",
      description: "CRM systems to manage and grow customer relationships",
      color: "from-green-600 to-emerald-600",
    },
    {
      icon: BarChart3,
      title: "Business Analytics",
      description: "Data-driven insights and reporting tools",
      color: "from-purple-600 to-pink-600",
    },
    {
      icon: Package,
      title: "Inventory Management",
      description: "Smart inventory and warehouse management solutions",
      color: "from-orange-600 to-red-600",
    },
    {
      icon: Users,
      title: "Human Resources",
      description: "Complete HR management and payroll systems",
      color: "from-cyan-600 to-blue-600",
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Solutions",
      description: "Online store management and sales platforms",
      color: "from-rose-600 to-pink-600",
    },
  ];

  const benefits = [
    "Exclusive Limited-Time Offers",
    "Professional Support & Training",
    "Regular Updates & Maintenance",
    "Customizable Solutions",
    "Cloud & On-Premise Options",
    "Multi-Language Support",
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0F1F] transition-colors duration-300">


      {/* Banner Image */}
      <div className="w-full pt-20">
        <img
          src={logisoftBanner}
          alt="Logisoft360 - Business Management Software"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Main Headline Section with Animation */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#0D6EFF] via-blue-600 to-cyan-600 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <motion.div
            className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-40 h-40 bg-cyan-300 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -40, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center">
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white mb-8 border border-white/30"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-5 h-5" />
              </motion.div>
              <span className="text-sm tracking-wide">Since 2017 - 7 Years of Excellence</span>
            </motion.div>

            {/* Main Animated Headline */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 text-white tracking-tight leading-tight"
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="block mb-2"
              >
                The{" "}
                <span className="font-bold bg-gradient-to-r from-yellow-300 to-orange-300 text-transparent bg-clip-text">
                  Number One
                </span>{" "}
                Provider
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="block mb-2"
              >
                of Business Solutions
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="block"
              >
                in the{" "}
                <span className="font-bold bg-gradient-to-r from-green-300 to-emerald-300 text-transparent bg-clip-text">
                  Algerian Market
                </span>
              </motion.span>
            </motion.h1>

            {/* Animated Decorative Line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 1.2 }}
              className="h-1 bg-gradient-to-r from-transparent via-white to-transparent rounded-full mx-auto max-w-md mb-6"
            />

            {/* Animated Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex flex-wrap justify-center gap-6 md:gap-12 text-white"
            >
              <motion.div whileHover={{ scale: 1.1 }} className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.6 }}
                  className="text-4xl md:text-5xl mb-2"
                >
                  <span className="font-bold">7+</span>
                </motion.div>
                <div className="text-sm md:text-base text-blue-100">Years Experience</div>
              </motion.div>

              <motion.div whileHover={{ scale: 1.1 }} className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.8 }}
                  className="text-4xl md:text-5xl mb-2"
                >
                  <span className="font-bold">#1</span>
                </motion.div>
                <div className="text-sm md:text-base text-blue-100">Market Leader</div>
              </motion.div>

              <motion.div whileHover={{ scale: 1.1 }} className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 2.0 }}
                  className="text-4xl md:text-5xl mb-2"
                >
                  <span className="font-bold">+5000</span>
                </motion.div>
                <div className="text-sm md:text-base text-blue-100">Clients Satisfied</div>
              </motion.div>

              <motion.div whileHover={{ scale: 1.1 }} className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 2.2 }}
                  className="text-4xl md:text-5xl mb-2"
                >
                  <span className="font-bold">🇩🇿</span>
                </motion.div>
                <div className="text-sm md:text-base text-blue-100">Made in Algeria</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-[#0c1420] dark:to-[#0e1822]">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-[#0D6EFF] mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm">Official Subsidiary of DCSecurite</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-slate-900 dark:text-white tracking-tight">
              Commercial Management Software for{" "}
              <span className="bg-gradient-to-r from-[#0D6EFF] to-cyan-500 text-transparent bg-clip-text">
                All Business Activities
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
              Logisoft360 is an official subsidiary of DCSecurite, providing you with professional
              solutions to manage your business efficiently. Browse the store now, choose the
              software that best fits your needs, and take advantage of exclusive, limited-time
              offers!
            </p>
          </div>

          {/* Visit Store CTA */}
          <div className="text-center mt-12">
            <a
              href="https://logisoft360.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#0D6EFF] to-cyan-500 text-white rounded-xl hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 group"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="text-lg">Visit Logisoft360 Store</span>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-white dark:bg-[#0A0F1F]">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl mb-4 text-slate-900 dark:text-white tracking-tight">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-[#0D6EFF] to-cyan-500 text-transparent bg-clip-text">
                Logisoft360
              </span>
              ?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
              Professional business software solutions backed by DCSecurite's expertise
            </p>
          </div>

          {/* Features with Image Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={deliveryImage}
                  alt="Logisoft360 Delivery Service"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </motion.div>

            {/* Features Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 order-1 lg:order-2">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -8, transition: { duration: 0.2 } }}
                    className="group p-6 rounded-2xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-800/50 dark:to-slate-900/50 border border-slate-200 dark:border-slate-700 hover:border-[#0D6EFF] dark:hover:border-[#0D6EFF] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 cursor-pointer"
                  >
                    <motion.div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <h4 className="text-lg mb-2 text-slate-900 dark:text-white">{feature.title}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Software Categories */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-[#0c1420] dark:to-[#0e1822]">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl mb-4 text-slate-900 dark:text-white tracking-tight">
              Explore Our{" "}
              <span className="bg-gradient-to-r from-[#0D6EFF] to-cyan-500 text-transparent bg-clip-text">
                Software Solutions
              </span>
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
              Comprehensive software for every aspect of your business
            </p>
          </div>

          {/* Software Categories Grid with Signage Image */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Signage Image - Takes 1 column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full">
                <img
                  src={signageImage}
                  alt="Logisoft360 Signage"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#0D6EFF]/20 to-transparent"></div>
              </div>
            </motion.div>

            {/* Software Categories - Takes 2 columns */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {softwareCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    className="group p-6 rounded-xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-[#0D6EFF] dark:hover:border-[#0D6EFF] transition-all duration-300 hover:shadow-lg cursor-pointer"
                  >
                    <motion.div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <h4 className="text-lg mb-2 text-slate-900 dark:text-white">
                      {category.title}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {category.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white dark:bg-[#0A0F1F]">
        <div className="container mx-auto max-w-7xl">
          {/* Benefits with Handshake Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            {/* Benefits Grid */}
            <div className="order-2 lg:order-1">
              <div className="mb-8">
                <h3 className="text-3xl md:text-4xl mb-4 text-slate-900 dark:text-white tracking-tight">
                  What You Get with{" "}
                  <span className="bg-gradient-to-r from-[#0D6EFF] to-cyan-500 text-transparent bg-clip-text">
                    Logisoft360
                  </span>
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-lg">
                  Premium features and services included with every solution
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ x: 10, transition: { duration: 0.2 } }}
                    className="flex items-center gap-4 p-5 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800/50 dark:to-slate-900/50 border border-blue-200 dark:border-slate-700 hover:border-[#0D6EFF] dark:hover:border-[#0D6EFF] transition-all duration-300 cursor-pointer"
                  >
                    <motion.div
                      className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#0D6EFF] to-cyan-500 flex items-center justify-center"
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </motion.div>
                    <span className="text-slate-900 dark:text-white text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Handshake Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={handshakeImage}
                  alt="Logisoft360 Partnership"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#0D6EFF] to-cyan-600">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white mb-6 backdrop-blur-sm">
              <Clock className="w-4 h-4" />
              <span className="text-sm">Limited-Time Offers Available Now</span>
            </div>
            <h3 className="text-3xl md:text-5xl mb-6 text-white tracking-tight">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-10">
              Browse our complete catalog of business management software and find the perfect
              solution for your needs.
            </p>
            <a
              href="https://logisoft360.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#0D6EFF] rounded-xl hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 group"
            >
              <ShoppingCart className="w-6 h-6" />
              <span className="text-xl">Explore Logisoft360 Now</span>
              <ExternalLink className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Logisoft360Page;
