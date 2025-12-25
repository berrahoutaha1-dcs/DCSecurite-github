import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "./ThemeContext";

export function AIWorldSections() {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Premium easing curve
  const premiumEase = [0.16, 1, 0.3, 1] as const;

  // Section 1 content animations - slide up and fade out
  const section1Y = useTransform(scrollYProgress, [0.2, 0.6], [0, -40]);
  const section1Opacity = useTransform(scrollYProgress, [0.2, 0.5], [1, 0]);

  // Section 2 content animations - slide up from below and fade in
  const section2Y = useTransform(scrollYProgress, [0.3, 0.7], [40, 0]);
  const section2Opacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);

  // Blue glow separator - appears during overlap phase
  const glowOpacity = useTransform(scrollYProgress, [0.25, 0.4, 0.55], [0, 1, 0]);
  const glowY = useTransform(scrollYProgress, [0.3, 0.6], [20, -20]);

  // Section 2 stats animations - staggered slide from left
  const stat1X = useTransform(scrollYProgress, [0.4, 0.65], [-60, 0]);
  const stat1Opacity = useTransform(scrollYProgress, [0.4, 0.65], [0, 1]);

  const stat2X = useTransform(scrollYProgress, [0.45, 0.7], [-60, 0]);
  const stat2Opacity = useTransform(scrollYProgress, [0.45, 0.7], [0, 1]);

  const stat3X = useTransform(scrollYProgress, [0.5, 0.75], [-60, 0]);
  const stat3Opacity = useTransform(scrollYProgress, [0.5, 0.75], [0, 1]);

  return (
    <div ref={containerRef} className="relative min-h-[200vh]">
      {/* Fixed Background - doesn't move */}
      <div
        className="sticky top-0 min-h-screen bg-white dark:bg-[#0a0a0a] overflow-hidden"
      >
        {/* Content Container - this is where overlapping happens */}
        <div className="relative min-h-screen flex items-center justify-center z-10">
          {/* Section 1 Content - slides up and fades out */}
          <motion.div
            style={{
              y: section1Y,
              opacity: section1Opacity,
            }}
            transition={{ ease: premiumEase }}
            className="absolute inset-0 flex items-center"
          >
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                {/* Main headline */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="text-4xl md:text-5xl lg:text-7xl text-black dark:text-white mb-12 md:mb-16"
                >
                  A new <span className="text-[#0D6EFF] font-semibold">AI world</span> is here
                </motion.h1>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                  {/* Left content */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <div className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-500 mb-6 backdrop-blur-sm text-xs md:text-sm tracking-wider uppercase">
                      THE GOOD NEWS
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl text-black dark:text-white leading-relaxed">
                      AI is rapidly transforming your organization
                    </h2>
                  </motion.div>

                  {/* Right content - Circular stats */}
                  <div className="grid grid-cols-2 gap-8 lg:gap-12">
                    {/* Stat 1 */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="flex flex-col items-center"
                    >
                      <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mb-4">
                        {/* Background circle */}
                        <svg className="w-full h-full -rotate-90">
                          <circle
                            cx="50%"
                            cy="50%"
                            r="45%"
                            fill="none"
                            stroke="#e5e5e5"
                            className="dark:stroke-[#1a1a1a]"
                            strokeWidth="8"
                          />
                          <motion.circle
                            cx="50%"
                            cy="50%"
                            r="45%"
                            fill="none"
                            stroke="#0D6EFF"
                            strokeWidth="8"
                            strokeLinecap="round"
                            strokeDasharray={`${2 * Math.PI * 45} ${2 * Math.PI * 45}`}
                            initial={{ strokeDashoffset: 2 * Math.PI * 45 }}
                            whileInView={{ strokeDashoffset: 2 * Math.PI * 45 * (1 - 0.78) }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
                            style={{
                              filter: "drop-shadow(0 0 8px #0D6EFF)",
                            }}
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-3xl md:text-4xl lg:text-5xl text-black dark:text-white">
                            78<span className="text-2xl md:text-3xl">%</span>
                          </span>
                        </div>
                      </div>
                      <div className="text-[#0D6EFF] text-base md:text-lg lg:text-xl mb-1">
                        ~1.5X growth
                      </div>
                      <div className="text-slate-600 dark:text-slate-400 text-xs md:text-sm text-center uppercase tracking-wide">
                        in usage in last
                        <br />
                        12 months
                      </div>
                    </motion.div>

                    {/* Stat 2 */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      className="flex flex-col items-center"
                    >
                      <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mb-4">
                        {/* Background circle */}
                        <svg className="w-full h-full -rotate-90">
                          <circle
                            cx="50%"
                            cy="50%"
                            r="45%"
                            fill="none"
                            stroke="#e5e5e5"
                            className="dark:stroke-[#1a1a1a]"
                            strokeWidth="8"
                          />
                          <motion.circle
                            cx="50%"
                            cy="50%"
                            r="45%"
                            fill="none"
                            stroke="#0D6EFF"
                            strokeWidth="8"
                            strokeLinecap="round"
                            strokeDasharray={`${2 * Math.PI * 45} ${2 * Math.PI * 45}`}
                            initial={{ strokeDashoffset: 2 * Math.PI * 45 }}
                            whileInView={{ strokeDashoffset: 2 * Math.PI * 45 * (1 - 0.94) }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: 0.7, ease: "easeOut" }}
                            style={{
                              filter: "drop-shadow(0 0 8px #0D6EFF)",
                            }}
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-3xl md:text-4xl lg:text-5xl text-black dark:text-white">
                            94<span className="text-2xl md:text-3xl">%</span>
                          </span>
                        </div>
                      </div>
                      <div className="text-[#0D6EFF] text-base md:text-lg lg:text-xl mb-1">
                        development
                      </div>
                      <div className="text-slate-600 dark:text-slate-400 text-xs md:text-sm text-center uppercase tracking-wide">
                        enterprises using gen ai
                        <br />
                        software
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Blue Glow Separator - appears during overlap */}
          <motion.div
            style={{
              opacity: glowOpacity,
              y: glowY,
            }}
            className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-[#0D6EFF] to-transparent pointer-events-none z-20"
          >
            <div className="absolute inset-0 blur-sm bg-gradient-to-r from-transparent via-[#0D6EFF] to-transparent"></div>
            <div className="absolute inset-0 blur-md bg-gradient-to-r from-transparent via-[#0D6EFF]/60 to-transparent"></div>
            <div className="absolute inset-0 blur-lg bg-gradient-to-r from-transparent via-[#0D6EFF]/40 to-transparent"></div>
          </motion.div>

          {/* Section 2 Content - slides up from below and fades in */}
          <motion.div
            style={{
              y: section2Y,
              opacity: section2Opacity,
            }}
            transition={{ ease: premiumEase }}
            className="absolute inset-0 flex items-center"
          >
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                  {/* Left content - Progress bars */}
                  <div className="space-y-8">
                    {/* Progress bar 1 */}
                    <motion.div
                      style={{
                        x: stat1X,
                        opacity: stat1Opacity,
                      }}
                    >
                      <div className="text-black dark:text-white text-xs md:text-sm uppercase tracking-wide mb-3 font-bold">
                        Increase in exploited zero-days (YoY, 2025)
                      </div>
                      <div className="relative h-3 bg-[#1a1a1a] rounded-full overflow-hidden">
                        <motion.div
                          className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#0D6EFF] to-cyan-400 rounded-full"
                          initial={{ width: "0%" }}
                          whileInView={{ width: "56%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
                          style={{
                            boxShadow: "0 0 20px rgba(13, 110, 255, 0.6)",
                          }}
                        ></motion.div>
                      </div>
                      <div className="text-3xl md:text-4xl text-black dark:text-white mt-2 font-bold">
                        56%
                      </div>
                    </motion.div>

                    {/* Progress bar 2 */}
                    <motion.div
                      style={{
                        x: stat2X,
                        opacity: stat2Opacity,
                      }}
                    >
                      <div className="text-black dark:text-white text-xs md:text-sm uppercase tracking-wide mb-3 font-bold">
                        Increase in ransomware attacks (YoY, 2025)
                      </div>
                      <div className="relative h-3 bg-[#1a1a1a] rounded-full overflow-hidden">
                        <motion.div
                          className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#0D6EFF] to-cyan-400 rounded-full"
                          initial={{ width: "0%" }}
                          whileInView={{ width: "73%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
                          style={{
                            boxShadow: "0 0 20px rgba(13, 110, 255, 0.6)",
                          }}
                        ></motion.div>
                      </div>
                      <div className="text-3xl md:text-4xl text-black dark:text-white mt-2 font-bold">
                        73%
                      </div>
                    </motion.div>

                    {/* Progress bar 3 */}
                    <motion.div
                      style={{
                        x: stat3X,
                        opacity: stat3Opacity,
                      }}
                    >
                      <div className="text-black dark:text-white text-xs md:text-sm uppercase tracking-wide mb-3 font-bold">
                        Increase in data breaches and leaks (YoY, 2025)
                      </div>
                      <div className="relative h-3 bg-[#1a1a1a] rounded-full overflow-hidden">
                        <motion.div
                          className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#0D6EFF] to-cyan-400 rounded-full"
                          initial={{ width: "0%" }}
                          whileInView={{ width: "56%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                          style={{
                            boxShadow: "0 0 20px rgba(13, 110, 255, 0.6)",
                          }}
                        ></motion.div>
                      </div>
                      <div className="text-3xl md:text-4xl text-black dark:text-white mt-2 font-bold">
                        56%
                      </div>
                    </motion.div>
                  </div>

                  {/* Right content */}
                  <div className="lg:pl-12">
                    <motion.div
                      className="inline-block px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full text-red-500 mb-6 backdrop-blur-sm text-xs md:text-sm tracking-wider uppercase relative"
                      animate={{
                        boxShadow: [
                          "0 0 0px rgba(239, 68, 68, 0)",
                          "0 0 20px rgba(239, 68, 68, 0.4)",
                          "0 0 0px rgba(239, 68, 68, 0)",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <motion.span
                        animate={{
                          opacity: [1, 0.7, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        THE BAD NEWS
                      </motion.span>
                      {/* Pulsing ring effect */}
                      <motion.span
                        className="absolute inset-0 rounded-full border border-red-500/50"
                        animate={{
                          scale: [1, 1.1, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </motion.div>
                    <h2 className="text-2xl md:text-3xl lg:text-5xl text-black dark:text-white leading-relaxed">
                      Attackers are supercharging their speed and scale.
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
