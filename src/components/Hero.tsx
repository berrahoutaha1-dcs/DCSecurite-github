import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes";

export function Hero({ onSecurityTestClick }: { onSecurityTestClick?: () => void }) {
  const accentColor = "#0D6EFF"; // Electric blue
  const accentCyan = "#06B6D4"; // Neon cyan

  // Detect reduced motion preference
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    // Pause animations when tab is inactive
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const navigate = useNavigate();
  const handleSecurityTestClick = () => {
    if (onSecurityTestClick) {
      onSecurityTestClick();
    } else {
      navigate(ROUTES.SECURITY_TEST);
    }
  };

  return (
    <section
      className={`relative min-h-screen flex items-center overflow-hidden bg-black ${!isVisible ? "paused" : ""}`}
      style={{ paddingTop: "5cm" }}
    >
      {/* Dynamic background with glitch waves */}
      <div className="absolute inset-0 meteor-wrapper">
        {/* Animated noise texture */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
          animate={
            !prefersReducedMotion && isVisible
              ? {
                opacity: [0.05, 0.15, 0.05],
              }
              : {}
          }
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* CINEMATIC METEOR ANIMATION */}
        <motion.div
          className="absolute"
          style={{
            right: "-10%",
            top: "-5%",
            width: "150%",
            height: "150%",
            pointerEvents: "none",
            zIndex: 1,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {/* FIRST METEOR - From Right to Left */}
          <motion.div
            className="absolute"
            style={{
              right: 0,
              top: 0,
            }}
            animate={
              !prefersReducedMotion && isVisible
                ? {
                  x: [0, -2000],
                  y: [0, 1400],
                }
                : {}
            }
            transition={{
              duration: 4.5,
              repeat: Infinity,
              repeatDelay: 4,
              delay: 2,
              ease: [0.3, 0, 0.2, 1], // Custom easing for acceleration
            }}
          >
            {/* Main meteor core */}
            <motion.div
              className="relative"
              animate={
                !prefersReducedMotion && isVisible
                  ? {
                    opacity: [0.17, 0.68, 1, 1, 0.51, 0],
                    scale: [0.5, 1, 1.7, 1.9, 1.4, 0.8],
                  }
                  : {}
              }
              transition={{
                duration: 4.5,
                repeat: Infinity,
                repeatDelay: 4,
                delay: 2,
                ease: "easeInOut",
              }}
            >
              {/* Meteor head with glow */}
              <div
                className="w-6 h-6 rounded-full"
                style={{
                  background: `radial-gradient(circle, #FFFFFF, ${accentCyan}, ${accentColor})`,
                  boxShadow: `
                    0 0 30px 12px ${accentCyan}CC,
                    0 0 60px 18px ${accentColor}AA,
                    0 0 90px 24px ${accentCyan}80,
                    0 0 140px 30px ${accentColor}40
                  `,
                }}
              />

              {/* Pulsing outer glow */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: `radial-gradient(circle, ${accentCyan}80, transparent)`,
                  filter: "blur(25px)",
                }}
                animate={
                  !prefersReducedMotion && isVisible
                    ? {
                      scale: [1.5, 3, 2.5, 4, 3.5],
                      opacity: [1, 1, 1, 0.7, 0],
                    }
                    : {}
                }
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  repeatDelay: 4,
                  delay: 2,
                  ease: "easeOut",
                }}
              />

              {/* Plasma trail with motion blur */}
              <motion.div
                className="absolute top-1/2 left-1/2"
                style={{
                  width: "1000px",
                  height: "12px",
                  transformOrigin: "left center",
                  transform: "translateY(-50%) rotate(145deg)",
                }}
              >
                {/* Primary trail */}
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(90deg, 
                      ${accentCyan}00 0%, 
                      ${accentCyan}40 20%, 
                      ${accentColor}AA 40%, 
                      ${accentCyan}DD 60%, 
                      #FFFFFF 100%)`,
                    filter: "blur(6px)",
                    boxShadow: `0 0 50px ${accentCyan}AA`,
                  }}
                  animate={
                    !prefersReducedMotion && isVisible
                      ? {
                        opacity: [0, 0.5, 1, 1, 1, 0.4],
                        scaleX: [0.5, 1, 1.5, 1.8, 1.5, 0.8],
                      }
                      : {}
                  }
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    repeatDelay: 4,
                    delay: 2,
                    ease: "easeInOut",
                  }}
                />

                {/* Secondary softer trail */}
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(90deg, 
                      transparent 0%, 
                      ${accentColor}30 30%, 
                      ${accentCyan}60 60%, 
                      ${accentColor}90 90%, 
                      #FFFFFFDD 100%)`,
                    filter: "blur(12px)",
                    transform: "scaleY(2.5)",
                  }}
                  animate={
                    !prefersReducedMotion && isVisible
                      ? {
                        opacity: [0, 0.4, 0.8, 1, 0.7, 0],
                        scaleX: [0.6, 1, 1.6, 2, 1.5, 0.7],
                      }
                      : {}
                  }
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    repeatDelay: 4,
                    delay: 2,
                    ease: "easeOut",
                  }}
                />

                {/* Outer glow bloom */}
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(90deg, 
                      transparent 0%, 
                      ${accentColor}15 40%, 
                      ${accentCyan}40 70%, 
                      #FFFFFF60 100%)`,
                    filter: "blur(30px)",
                    transform: "scaleY(5)",
                  }}
                  animate={
                    !prefersReducedMotion && isVisible
                      ? {
                        opacity: [0, 0.5, 1, 0.9, 0.4, 0],
                      }
                      : {}
                  }
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    repeatDelay: 4,
                    delay: 2,
                  }}
                />
              </motion.div>

              {/* Particle dispersion along trail */}
              {[...Array(30)].map((_, i) => (
                <motion.div
                  key={`meteor1-particle-${i}`}
                  className="absolute rounded-full"
                  style={{
                    width: `${3 + Math.random() * 5}px`,
                    height: `${3 + Math.random() * 5}px`,
                    left: `${-i * 30 - Math.random() * 20}px`,
                    top: `${-15 + Math.random() * 30}px`,
                    background: i % 2 === 0 ? accentCyan : accentColor,
                    boxShadow: `0 0 ${20 + Math.random() * 15}px ${i % 2 === 0 ? accentCyan : accentColor}`,
                  }}
                  animate={
                    !prefersReducedMotion && isVisible
                      ? {
                        opacity: [0, 0.7, 1, 1, 0.5, 0],
                        scale: [0.8, 1.5, 2, 1.5, 0.7, 0],
                        x: [(Math.random() - 0.5) * 60, (Math.random() - 0.5) * 120],
                        y: [(Math.random() - 0.5) * 60, (Math.random() - 0.5) * 120],
                      }
                      : {}
                  }
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    repeatDelay: 4,
                    delay: 2 + i * 0.05,
                    ease: "easeOut",
                  }}
                />
              ))}

              {/* Light bloom effect */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full"
                style={{
                  background: `radial-gradient(circle, ${accentCyan}70, transparent 70%)`,
                  filter: "blur(40px)",
                }}
                animate={
                  !prefersReducedMotion && isVisible
                    ? {
                      opacity: [0, 0.5, 1, 1, 0.8, 0],
                      scale: [1.5, 3, 4.5, 6, 5, 1.5],
                    }
                    : {}
                }
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  repeatDelay: 4,
                  delay: 2,
                  ease: "easeOut",
                }}
              />

              {/* Atmospheric distortion ahead of meteor */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-y-1/2 w-24 h-24 rounded-full"
                style={{
                  background: `radial-gradient(circle, ${accentColor}40, transparent)`,
                  filter: "blur(20px)",
                  transform: "translateX(-60px) translateY(-50%)",
                }}
                animate={
                  !prefersReducedMotion && isVisible
                    ? {
                      opacity: [0, 0.7, 1, 0.8, 0],
                      scale: [0.8, 2, 3, 2.5, 0.8],
                    }
                    : {}
                }
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  repeatDelay: 4,
                  delay: 2,
                }}
              />
            </motion.div>
          </motion.div>

          {/* SECOND METEOR - From Left to Right */}
          <motion.div
            className="absolute"
            style={{
              left: -100,
              top: "10%",
            }}
            animate={
              !prefersReducedMotion && isVisible
                ? {
                  x: [0, 2000],
                  y: [0, 1400],
                }
                : {}
            }
            transition={{
              duration: 4.5,
              repeat: Infinity,
              repeatDelay: 4,
              delay: 6.5, // Offset timing from first meteor
              ease: [0.3, 0, 0.2, 1],
            }}
          >
            {/* Main meteor core */}
            <motion.div
              className="relative"
              animate={
                !prefersReducedMotion && isVisible
                  ? {
                    opacity: [0.17, 0.68, 1, 1, 0.51, 0],
                    scale: [0.5, 1, 1.7, 1.9, 1.4, 0.8],
                  }
                  : {}
              }
              transition={{
                duration: 4.5,
                repeat: Infinity,
                repeatDelay: 4,
                delay: 6.5,
                ease: "easeInOut",
              }}
            >
              {/* Meteor head with glow */}
              <div
                className="w-6 h-6 rounded-full"
                style={{
                  background: `radial-gradient(circle, #FFFFFF, ${accentColor}, ${accentCyan})`,
                  boxShadow: `
                    0 0 30px 12px ${accentColor}CC,
                    0 0 60px 18px ${accentCyan}AA,
                    0 0 90px 24px ${accentColor}80,
                    0 0 140px 30px ${accentCyan}40
                  `,
                }}
              />

              {/* Pulsing outer glow */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: `radial-gradient(circle, ${accentColor}80, transparent)`,
                  filter: "blur(25px)",
                }}
                animate={
                  !prefersReducedMotion && isVisible
                    ? {
                      scale: [1.5, 3, 2.5, 4, 3.5],
                      opacity: [1, 1, 1, 0.7, 0],
                    }
                    : {}
                }
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  repeatDelay: 4,
                  delay: 6.5,
                  ease: "easeOut",
                }}
              />

              {/* Plasma trail with motion blur - mirrored angle */}
              <motion.div
                className="absolute top-1/2 left-1/2"
                style={{
                  width: "1000px",
                  height: "12px",
                  transformOrigin: "left center",
                  transform: "translateY(-50%) rotate(-145deg)", // Mirrored angle
                }}
              >
                {/* Primary trail */}
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(90deg, 
                      ${accentColor}00 0%, 
                      ${accentColor}40 20%, 
                      ${accentCyan}AA 40%, 
                      ${accentColor}DD 60%, 
                      #FFFFFF 100%)`,
                    filter: "blur(6px)",
                    boxShadow: `0 0 50px ${accentColor}AA`,
                  }}
                  animate={
                    !prefersReducedMotion && isVisible
                      ? {
                        opacity: [0, 0.5, 1, 1, 1, 0.4],
                        scaleX: [0.5, 1, 1.5, 1.8, 1.5, 0.8],
                      }
                      : {}
                  }
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    repeatDelay: 4,
                    delay: 6.5,
                    ease: "easeInOut",
                  }}
                />

                {/* Secondary softer trail */}
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(90deg, 
                      transparent 0%, 
                      ${accentCyan}30 30%, 
                      ${accentColor}60 60%, 
                      ${accentCyan}90 90%, 
                      #FFFFFFDD 100%)`,
                    filter: "blur(12px)",
                    transform: "scaleY(2.5)",
                  }}
                  animate={
                    !prefersReducedMotion && isVisible
                      ? {
                        opacity: [0, 0.4, 0.8, 1, 0.7, 0],
                        scaleX: [0.6, 1, 1.6, 2, 1.5, 0.7],
                      }
                      : {}
                  }
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    repeatDelay: 4,
                    delay: 6.5,
                    ease: "easeOut",
                  }}
                />

                {/* Outer glow bloom */}
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(90deg, 
                      transparent 0%, 
                      ${accentCyan}15 40%, 
                      ${accentColor}40 70%, 
                      #FFFFFF60 100%)`,
                    filter: "blur(30px)",
                    transform: "scaleY(5)",
                  }}
                  animate={
                    !prefersReducedMotion && isVisible
                      ? {
                        opacity: [0, 0.5, 1, 0.9, 0.4, 0],
                      }
                      : {}
                  }
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    repeatDelay: 4,
                    delay: 6.5,
                  }}
                />
              </motion.div>

              {/* Particle dispersion along trail */}
              {[...Array(30)].map((_, i) => (
                <motion.div
                  key={`meteor2-particle-${i}`}
                  className="absolute rounded-full"
                  style={{
                    width: `${3 + Math.random() * 5}px`,
                    height: `${3 + Math.random() * 5}px`,
                    left: `${-i * 30 - Math.random() * 20}px`,
                    top: `${-15 + Math.random() * 30}px`,
                    background: i % 2 === 0 ? accentColor : accentCyan,
                    boxShadow: `0 0 ${20 + Math.random() * 15}px ${i % 2 === 0 ? accentColor : accentCyan}`,
                  }}
                  animate={
                    !prefersReducedMotion && isVisible
                      ? {
                        opacity: [0, 0.7, 1, 1, 0.5, 0],
                        scale: [0.8, 1.5, 2, 1.5, 0.7, 0],
                        x: [(Math.random() - 0.5) * 60, (Math.random() - 0.5) * 120],
                        y: [(Math.random() - 0.5) * 60, (Math.random() - 0.5) * 120],
                      }
                      : {}
                  }
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    repeatDelay: 4,
                    delay: 6.5 + i * 0.05,
                    ease: "easeOut",
                  }}
                />
              ))}

              {/* Light bloom effect */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full"
                style={{
                  background: `radial-gradient(circle, ${accentColor}70, transparent 70%)`,
                  filter: "blur(40px)",
                }}
                animate={
                  !prefersReducedMotion && isVisible
                    ? {
                      opacity: [0, 0.5, 1, 1, 0.8, 0],
                      scale: [1.5, 3, 4.5, 6, 5, 1.5],
                    }
                    : {}
                }
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  repeatDelay: 4,
                  delay: 6.5,
                  ease: "easeOut",
                }}
              />

              {/* Atmospheric distortion ahead of meteor */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-y-1/2 w-24 h-24 rounded-full"
                style={{
                  background: `radial-gradient(circle, ${accentCyan}40, transparent)`,
                  filter: "blur(20px)",
                  transform: "translateX(-60px) translateY(-50%)",
                }}
                animate={
                  !prefersReducedMotion && isVisible
                    ? {
                      opacity: [0, 0.7, 1, 0.8, 0],
                      scale: [0.8, 2, 3, 2.5, 0.8],
                    }
                    : {}
                }
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  repeatDelay: 4,
                  delay: 6.5,
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Glitch wave effects */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute left-0 right-0 h-1"
            style={{
              background: `linear-gradient(90deg, transparent, ${i % 2 === 0 ? accentColor : accentCyan}, transparent)`,
              top: `${15 + i * 15}%`,
              filter: "blur(2px)",
            }}
            animate={
              !prefersReducedMotion && isVisible
                ? {
                  x: ["-100%", "200%"],
                  opacity: [0, 0.8, 0],
                  scaleY: [1, 1.5, 1],
                }
                : {}
            }
            transition={{
              duration: 5 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
          />
        ))}

        {/* Anomaly particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 rounded-full"
            style={{
              backgroundColor: i % 3 === 0 ? accentColor : accentCyan,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={
              !prefersReducedMotion && isVisible
                ? {
                  opacity: [0, 1, 0],
                  scale: [1, 2, 1],
                  x: [0, (Math.random() - 0.5) * 100],
                  y: [0, (Math.random() - 0.5) * 100],
                }
                : {}
            }
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-20">
        <motion.div className="space-y-8 flex flex-col items-center text-center">
          {/* Animated Title - Simple entrance */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: "easeOut",
              }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-tight"
              style={{
                textShadow: `0 0 40px ${accentColor}40, 0 0 80px ${accentCyan}20`,
              }}
            >
              Security Beyond
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: "easeOut",
              }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight"
              style={{
                background: `linear-gradient(135deg, ${accentColor}, ${accentCyan})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 20px rgba(13, 110, 255, 0.6))",
              }}
            >
              Gravity
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              ease: "easeOut",
            }}
            className="text-xl sm:text-2xl text-gray-400 max-w-3xl leading-relaxed"
          >
            Enterprise-grade cybersecurity powered by Advanced technology. Protecting your digital
            assets 24/24 with military-grade precision and zero-compromise defense.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.8,
              ease: "easeOut",
            }}
            className="pt-4"
          >
            <motion.button
              className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full overflow-hidden font-bold"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSecurityTestClick}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />

              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
                animate={{
                  x: ["-200%", "200%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <span className="relative">Get free security test now</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating elements */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`float-${i}`}
          className="absolute w-2 h-2 rounded-full"
          style={{
            background: `radial-gradient(circle, ${i % 2 === 0 ? accentColor : accentCyan}, transparent)`,
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
          }}
          animate={
            !prefersReducedMotion && isVisible
              ? {
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1],
              }
              : {}
          }
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Scan lines effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(13, 110, 255, 0.03) 2px,
            rgba(13, 110, 255, 0.03) 4px
          )`,
        }}
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { duration: 1, delay: 2 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-cyan-500 to-transparent" />
        <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />
      </motion.div>
    </section>
  );
}
