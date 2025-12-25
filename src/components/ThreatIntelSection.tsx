import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function ThreatIntelSection() {
  const stats = [
    { value: "200+", label: "threat researchers" },
    { value: "100 K", label: "malware samples analyzed per day" },
    { value: "199 +", label: "incident response engagements a year" },
    { value: "45", label: "trusted partner" },
  ];

  return (
    <section className="relative bg-white dark:bg-[#1a1a1a] text-slate-900 dark:text-white py-16 md:py-24 lg:py-32 overflow-hidden transition-colors">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(100,100,100,0.1) 10px, rgba(100,100,100,0.1) 20px)`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-slate-900 dark:text-white text-4xl md:text-5xl lg:text-6xl mb-2">
            Under Attack !!
          </h2>
          <h2 className="text-slate-900 dark:text-white text-4xl md:text-5xl lg:text-6xl">
            NCF Unit : Response-ready.
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-8">
              <span className="text-[#0D6EFF] tracking-wider text-sm mb-4 block">SERVICES</span>
              <h3 className="text-slate-900 dark:text-white text-3xl md:text-4xl lg:text-5xl mb-6">
                Threat Intel &<br />
                Incident Response
              </h3>
              <p className="text-slate-700 dark:text-white/70 text-lg leading-relaxed mb-12">
                DCSecurite's world-renowned threat researchers, elite incident responders and expert
                security consultants will guide you with a threat-informed approach before, during
                and after an incident.
              </p>
            </div>

            {/* Bottom Stats */}
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
              <div>
                <div className="text-slate-900 dark:text-white text-4xl md:text-5xl mb-2">
                  199 +
                </div>
                <div className="text-slate-600 dark:text-white/60 text-sm tracking-wider">
                  MATTERS PER YEAR
                </div>
              </div>
              <div>
                <div className="text-slate-900 dark:text-white text-4xl md:text-5xl mb-2">
                  24 / 7 / 365
                </div>
                <div className="text-slate-600 dark:text-white/60 text-sm tracking-wider">
                  INCIDENT RESPONSE
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Stat Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 lg:mt-0">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="relative bg-gradient-to-br from-[#0D6EFF] to-[#0a4fb8] p-8 rounded-lg overflow-hidden group hover:scale-105 transition-transform duration-300"
                >
                  {/* Diagonal pattern overlay */}
                  <div className="absolute inset-0 opacity-10">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(0,0,0,0.3) 10px, rgba(0,0,0,0.3) 20px)`,
                      }}
                    ></div>
                  </div>

                  <div className="relative z-10">
                    <div className="text-white text-4xl md:text-5xl mb-2">{stat.value}</div>
                    <div className="text-white/90 text-sm leading-snug">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
