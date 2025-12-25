import { motion } from "framer-motion";

interface CollaborationBarProps {
  title?: string;
  description?: string;
  showTrustIndicators?: boolean;
  showVideos?: boolean;
  customPartners?: string[];
  whiteTitle?: boolean;
}

export function CollaborationBar({
  title = "Technology Partners",
  description = "We use the tools of leading global cybersecurity companies and providers to deliver the highest levels of security in the digital space.",
  showTrustIndicators = true,
  showVideos = true,
  customPartners,
  whiteTitle = false,
}: CollaborationBarProps = {}) {
  // Partner companies - using text for now, can be replaced with actual logos
  const defaultPartners = [
    "MICROSOFT",
    "KALI LINUX",
    "CAPTCHA",
    "CLOUDFLARE",
    "CISCO",
    "NVIDIA",
    "KASPERSKY",
  ];

  const partners = customPartners || defaultPartners;

  return (
    <section className="relative py-12 md:py-16 bg-white dark:bg-[#0a0a0a] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl mb-2 text-black dark:text-white">
            <span className={whiteTitle ? "text-white" : "text-[#0D6EFF]"}>{title}</span>
          </h2>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">{description}</p>
        </motion.div>

        {/* Scrolling Partners */}
        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-white dark:from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-white dark:from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling container */}
          <div className="flex overflow-hidden relative">
            {/* First set of logos */}
            <motion.div
              className="flex items-center gap-8 md:gap-12 lg:gap-16 pr-8 md:pr-12 lg:pr-16"
              animate={{
                x: [0, -100 + "%"],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 50,
                  ease: "linear",
                },
              }}
            >
              {partners.map((partner, index) => (
                <motion.div
                  key={`first-${index}`}
                  className="flex-shrink-0 group relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Animated shadow effect */}
                  <motion.div
                    className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(13, 110, 255, 0.4) 0%, transparent 70%)",
                    }}
                  />
                  <span className="relative text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-600 dark:text-gray-400 whitespace-nowrap group-hover:text-[#0D6EFF] transition-colors duration-300 drop-shadow-lg">
                    {partner}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Duplicate set for seamless loop */}
            <motion.div
              className="flex items-center gap-8 md:gap-12 lg:gap-16 pr-8 md:pr-12 lg:pr-16"
              animate={{
                x: [0, -100 + "%"],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 50,
                  ease: "linear",
                },
              }}
            >
              {partners.map((partner, index) => (
                <motion.div
                  key={`second-${index}`}
                  className="flex-shrink-0 group relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Animated shadow effect */}
                  <motion.div
                    className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(13, 110, 255, 0.4) 0%, transparent 70%)",
                    }}
                  />
                  <span className="relative text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-600 dark:text-gray-400 whitespace-nowrap group-hover:text-[#0D6EFF] transition-colors duration-300 drop-shadow-lg">
                    {partner}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Third set for extra smoothness */}
            <motion.div
              className="flex items-center gap-8 md:gap-12 lg:gap-16 pr-8 md:pr-12 lg:pr-16"
              animate={{
                x: [0, -100 + "%"],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 50,
                  ease: "linear",
                },
              }}
            >
              {partners.map((partner, index) => (
                <motion.div
                  key={`third-${index}`}
                  className="flex-shrink-0 group relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Animated shadow effect */}
                  <motion.div
                    className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(13, 110, 255, 0.4) 0%, transparent 70%)",
                    }}
                  />
                  <span className="relative text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-600 dark:text-gray-400 whitespace-nowrap group-hover:text-[#0D6EFF] transition-colors duration-300 drop-shadow-lg">
                    {partner}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Trust indicators */}
        {showTrustIndicators && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mt-8 md:mt-12"
          >
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <svg className="w-5 h-5 text-[#0D6EFF]" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm md:text-base">Compliant with ISO 27001 standards</span>
            </div>

            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <svg className="w-5 h-5 text-[#0D6EFF]" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm md:text-base">99.9% uptime</span>
            </div>

            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <svg className="w-5 h-5 text-[#0D6EFF]" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm md:text-base">24/7 technical support</span>
            </div>

            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <svg className="w-5 h-5 text-[#0D6EFF]" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm md:text-base">GDPR compliant</span>
            </div>
          </motion.div>
        )}

        {/* Videos Section */}
        {showVideos && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 md:mt-16"
          >
            <div
              className="flex items-center gap-4 md:gap-6 lg:gap-8 overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide snap-x snap-mandatory"
              style={{
                WebkitOverflowScrolling: "touch",
              }}
            >
              {/* Video 1 */}
              <div className="flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-80 lg:w-96 snap-center">
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.youtube.com/embed/q6x1PVbqHZ8"
                    title="Cybersecurity Video 1"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full aspect-video"
                  />
                </div>
              </div>

              {/* Video 2 */}
              <div className="flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-80 lg:w-96 snap-center">
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.youtube.com/embed/BnuxCeQ2cfM"
                    title="Cybersecurity Video 2"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full aspect-video"
                  />
                </div>
              </div>

              {/* Video 3 */}
              <div className="flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-80 lg:w-96 snap-center">
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.youtube.com/embed/ucFbRnNIwAs"
                    title="Cybersecurity Video 3"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full aspect-video"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
