const bannerImage = "/assets/ffbf19baf8181bb137dd3f571e31edca325d2b13.png";
import { UserX, ShieldAlert, Maximize2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

interface AccelerateTransformationPageProps {
  onPrivacyPolicyClick?: () => void;
  onTermsOfServiceClick?: () => void;
}

export const AccelerateTransformationPage = ({
  onPrivacyPolicyClick,
  onTermsOfServiceClick,
}: AccelerateTransformationPageProps) => {
  const statistics = [
    {
      percentage: 96,
      description: "of all organizations experienced at least one breach in the last 12 months.",
      icon: UserX,
    },
    {
      percentage: 33,
      description: "of CxOs experienced operational disruption as a consequence of a breach.",
      icon: ShieldAlert,
    },
    {
      percentage: 77,
      description:
        "of security executives want to reduce the number of solutions and services they use.",
      icon: Maximize2,
    },
  ];

  return (
    <div className="w-full">
      {/* Banner Image - Full width, no resize, no animation */}
      <div className="w-full">
        <img
          src={bannerImage}
          alt="Accelerate Your Cybersecurity Transformation"
          className="w-full h-auto block"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>

      {/* Statistics Section */}
      <section className="py-16 px-4 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {statistics.map((stat, index) => (
              <StatCard key={index} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Build Section */}
      <section className="py-20 px-4 bg-white dark:bg-slate-900">
        <div className="max-w-5xl mx-auto">
          {/* Main Headline */}
          <div className="text-center mb-8">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl text-slate-900 dark:text-white mb-6 leading-tight">
              <span
                className="inline-block bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent bg-[length:200%_auto]"
                style={{ fontWeight: "800" }}
              >
                Why build what you can't protect?
              </span>
            </h2>
          </div>

          {/* Description Text */}
          <div className="text-center mb-8">
            <p className="text-xl lg:text-2xl text-slate-700 dark:text-slate-300 leading-relaxed max-w-4xl mx-auto">
              Empower your business with development methods engineered for today's most advanced
              cyber threats.
            </p>
          </div>

          {/* Call-to-Action Box */}
          <div className="relative bg-gradient-to-br from-slate-900 to-slate-950 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 lg:p-12 border-2 border-blue-500/30 shadow-2xl">
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10"></div>

            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-blue-500/50 rounded-tl-2xl"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-cyan-500/50 rounded-br-2xl"></div>

            {/* Content */}
            <div className="relative z-10 text-center">
              <p className="text-lg lg:text-xl text-white leading-relaxed">
                Move from{" "}
                <span className="text-blue-400" style={{ fontWeight: "700" }}>
                  reactive
                </span>{" "}
                to{" "}
                <span className="text-cyan-400" style={{ fontWeight: "700" }}>
                  unstoppable
                </span>{" "}
                — with security built into{" "}
                <span className="text-blue-300" style={{ fontWeight: "600" }}>
                  every line of code
                </span>
                ,{" "}
                <span className="text-cyan-300" style={{ fontWeight: "600" }}>
                  every workflow
                </span>
                , and{" "}
                <span className="text-blue-300" style={{ fontWeight: "600" }}>
                  every release
                </span>
                .
              </p>

              {/* Decorative line */}
              <div className="mt-8 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Assessment Form Section */}
      <section className="py-20 px-4 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl xl:text-5xl text-slate-900 dark:text-white leading-tight max-w-3xl mx-auto">
              <span
                className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
                style={{ fontWeight: "700" }}
              >
                Get a free comprehensive security assessment
              </span>{" "}
              <span className="text-slate-900 dark:text-white" style={{ fontWeight: "700" }}>
                before and after launching your platform, with strong protection recommendations
              </span>
            </h2>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <SecurityAssessmentForm
              onPrivacyPolicyClick={onPrivacyPolicyClick}
              onTermsOfServiceClick={onTermsOfServiceClick}
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

interface StatCardProps {
  stat: {
    percentage: number;
    description: string;
    icon: any;
  };
  index: number;
}

const StatCard = ({ stat, index }: StatCardProps) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            // Animate counter from 0 to target in 10 seconds
            const duration = 10000; // 10 seconds
            const steps = 100;
            const increment = stat.percentage / steps;
            const stepDuration = duration / steps;

            let currentStep = 0;
            const timer = setInterval(() => {
              currentStep++;
              if (currentStep >= steps) {
                setCount(stat.percentage);
                clearInterval(timer);
              } else {
                setCount(Math.floor(increment * currentStep));
              }
            }, stepDuration);

            return () => clearInterval(timer);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [stat.percentage, hasAnimated]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="flex items-center gap-4 lg:gap-6"
    >
      {/* Circular Badge with Icon and Percentage */}
      <div className="relative flex-shrink-0">
        {/* Outer glow effect */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-32 h-32 lg:w-36 lg:h-36 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 blur-xl"></div>
        </motion.div>

        {/* Outer decorative ring - Rotating */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="w-28 h-28 lg:w-32 lg:h-32 rounded-full border-2 border-blue-500/40 relative shadow-lg shadow-blue-500/20">
            {/* Decorative dots with glow */}
            <motion.div
              className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50"
              animate={{
                scale: [1, 1.5, 1],
                boxShadow: [
                  "0 0 10px rgba(59, 130, 246, 0.5)",
                  "0 0 20px rgba(59, 130, 246, 0.8)",
                  "0 0 10px rgba(59, 130, 246, 0.5)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            ></motion.div>
            <motion.div
              className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-3 h-3 bg-cyan-500 rounded-full shadow-lg shadow-cyan-500/50"
              animate={{
                scale: [1, 1.5, 1],
                boxShadow: [
                  "0 0 10px rgba(6, 182, 212, 0.5)",
                  "0 0 20px rgba(6, 182, 212, 0.8)",
                  "0 0 10px rgba(6, 182, 212, 0.5)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            ></motion.div>
            <motion.div
              className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50"
              animate={{
                scale: [1, 1.5, 1],
                boxShadow: [
                  "0 0 10px rgba(59, 130, 246, 0.5)",
                  "0 0 20px rgba(59, 130, 246, 0.8)",
                  "0 0 10px rgba(59, 130, 246, 0.5)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            ></motion.div>
            <motion.div
              className="absolute top-1/2 -left-1 transform -translate-y-1/2 w-3 h-3 bg-cyan-500 rounded-full shadow-lg shadow-cyan-500/50"
              animate={{
                scale: [1, 1.5, 1],
                boxShadow: [
                  "0 0 10px rgba(6, 182, 212, 0.5)",
                  "0 0 20px rgba(6, 182, 212, 0.8)",
                  "0 0 10px rgba(6, 182, 212, 0.5)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              }}
            ></motion.div>
          </div>
        </motion.div>

        {/* Middle rotating ring - Counter rotation */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ rotate: -360 }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="w-26 h-26 lg:w-30 lg:h-30 rounded-full border border-cyan-500/30"></div>
        </motion.div>

        {/* Pulsing ring effect - Enhanced */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.6, 0.1, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-28 h-28 lg:w-32 lg:h-32 rounded-full border-2 border-blue-500/40 shadow-lg shadow-blue-500/30"></div>
        </motion.div>

        {/* Additional pulsing effect */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <div className="w-28 h-28 lg:w-32 lg:h-32 rounded-full border-2 border-cyan-500/30"></div>
        </motion.div>

        {/* Inner circle with dark background - Enhanced */}
        <motion.div
          className="relative w-24 h-24 lg:w-28 lg:h-28 m-2 rounded-full bg-gradient-to-br from-slate-800 to-slate-950 flex flex-col items-center justify-center shadow-xl shadow-blue-500/30 border-2 border-blue-500/60"
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 40px rgba(59, 130, 246, 0.6)",
            borderColor: "rgba(59, 130, 246, 1)",
          }}
          animate={{
            boxShadow: [
              "0 0 20px rgba(59, 130, 246, 0.3)",
              "0 0 30px rgba(59, 130, 246, 0.5)",
              "0 0 20px rgba(59, 130, 246, 0.3)",
            ],
          }}
          transition={{
            duration: 0.3,
            boxShadow: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          {/* Icon with enhanced pulse animation */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <stat.icon
              className="w-6 h-6 lg:w-7 lg:h-7 text-blue-400 mb-1 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]"
              strokeWidth={2.5}
            />
          </motion.div>

          {/* Animated Percentage with glow */}
          <motion.span
            className="text-white text-xl lg:text-2xl drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]"
            style={{ fontWeight: "700" }}
            key={count}
            animate={{
              textShadow: [
                "0 0 10px rgba(59, 130, 246, 0.5)",
                "0 0 20px rgba(59, 130, 246, 0.8)",
                "0 0 10px rgba(59, 130, 246, 0.5)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {count}%
          </motion.span>
        </motion.div>
      </div>

      {/* Text Box */}
      <motion.div
        className="flex-1 bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4 lg:p-5 border border-slate-200 dark:border-slate-700 shadow-sm"
        whileHover={{
          scale: 1.03,
          boxShadow: "0 15px 40px rgba(59, 130, 246, 0.2)",
          borderColor: "rgba(59, 130, 246, 0.3)",
        }}
        transition={{ duration: 0.3 }}
      >
        <p className="text-slate-700 dark:text-slate-300 text-sm lg:text-base leading-relaxed">
          {stat.description}
        </p>
      </motion.div>
    </motion.div>
  );
};

// Security Assessment Form Component
const SecurityAssessmentForm = ({
  onPrivacyPolicyClick,
  onTermsOfServiceClick,
}: {
  onPrivacyPolicyClick?: () => void;
  onTermsOfServiceClick?: () => void;
}) => {
  const [emailOptIn, setEmailOptIn] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    jobLevel: "",
    phone: "",
    country: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData, "Email opt-in:", emailOptIn);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* First Name */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
          className="w-full px-6 py-4 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-xl text-slate-700 dark:text-slate-200 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
          required
        />
      </motion.div>

      {/* Last Name */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05 }}
      >
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          className="w-full px-6 py-4 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-xl text-slate-700 dark:text-slate-200 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
          required
        />
      </motion.div>

      {/* Business Email */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Business Email"
          className="w-full px-6 py-4 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-xl text-slate-700 dark:text-slate-200 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
          required
        />
      </motion.div>

      {/* Company */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Company"
          className="w-full px-6 py-4 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-xl text-slate-700 dark:text-slate-200 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
          required
        />
      </motion.div>

      {/* Job level */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <input
          type="text"
          name="jobLevel"
          value={formData.jobLevel}
          onChange={handleChange}
          placeholder="Job level"
          className="w-full px-6 py-4 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-xl text-slate-700 dark:text-slate-200 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
          required
        />
      </motion.div>

      {/* Phone */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="w-full px-6 py-4 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-xl text-slate-700 dark:text-slate-200 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
          required
        />
      </motion.div>

      {/* Country */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
          placeholder="Country"
          className="w-full px-6 py-4 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-xl text-slate-700 dark:text-slate-200 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
          required
        />
      </motion.div>

      {/* Terms and Privacy Statement */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="text-sm text-slate-600 dark:text-slate-400"
      >
        By submitting this form, you agree to our{" "}
        <a
          href="#"
          className="text-blue-600 dark:text-blue-400 hover:underline"
          onClick={onTermsOfServiceClick}
        >
          Terms
        </a>
        . View our{" "}
        <a
          href="#"
          className="text-blue-600 dark:text-blue-400 hover:underline"
          onClick={onPrivacyPolicyClick}
        >
          Privacy Statement.
        </a>
      </motion.div>

      {/* Email Opt-in Checkbox */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex items-start gap-3"
      >
        <div className="flex items-center h-6">
          <input
            id="email-opt-in"
            type="checkbox"
            checked={emailOptIn}
            onChange={(e) => setEmailOptIn(e.target.checked)}
            className="w-5 h-5 text-blue-600 bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600 rounded focus:ring-2 focus:ring-blue-500 cursor-pointer accent-blue-600"
          />
        </div>
        <label
          htmlFor="email-opt-in"
          className="text-sm text-slate-600 dark:text-slate-400 cursor-pointer select-none"
        >
          Email me exclusive invites, research, offers, and news
        </label>
      </motion.div>

      {/* Submit Button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.45 }}
      >
        <motion.button
          type="submit"
          className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl overflow-hidden transition-all duration-300 flex items-center gap-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Animated background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-700"
            initial={{ x: "-100%" }}
            whileHover={{ x: "0%" }}
            transition={{ duration: 0.3 }}
          />

          <span className="relative z-10" style={{ fontWeight: "600" }}>
            Connect me
          </span>
          <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </motion.button>
      </motion.div>
    </form>
  );
};
