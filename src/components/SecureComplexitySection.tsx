import { motion } from "framer-motion";
import { Shield, Network, Cloud, Cog, AlertTriangle, Building2 } from "lucide-react";
import { useState } from "react";
const backgroundImage = "/assets/203266fbe0e666465178ae2df9e290f6127a9102.png";

export function SecureComplexitySection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const securityItems = [
    { icon: Shield, text: "Secure Your digital ecosystem" },
    { icon: Network, text: "Secure your network" },
    { icon: Cloud, text: "Secure your cloud" },
    { icon: Cog, text: "Automate your SOC" },
    { icon: AlertTriangle, text: "Threat intel and incident response services" },
    { icon: Building2, text: "Solutions by industry" },
  ];

  return (
    <section className="relative bg-black text-white py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      ></div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D6EFF]/20 via-transparent to-cyan-500/10"></div>
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-[#0D6EFF] rounded-full blur-[120px] opacity-10"></div>

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          {/* Left-aligned Content */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white mb-12 leading-tight"
            >
              Secure whatever, whenever, wherever —{" "}
              <span className="text-white">with less complexity.</span>
            </motion.h2>

            {/* Security Items List */}
            <div className="space-y-3 max-w-2xl">
              {securityItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className={`flex items-center gap-4 py-2 cursor-pointer group ${
                      index === activeIndex ? "" : ""
                    }`}
                    onClick={() => setActiveIndex(index)}
                  >
                    <Icon
                      className={`w-6 h-6 ${
                        index === activeIndex ? "text-[#0D6EFF]" : "text-white/60"
                      }`}
                    />
                    <span
                      className={`text-2xl ${
                        index === activeIndex ? "text-[#0D6EFF]" : "text-white/70"
                      }`}
                      style={{ fontWeight: 700 }}
                    >
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Bottom Navigation Links */}
            <div className="mt-12 max-w-2xl">
              {/* Link 1 */}
              <motion.a
                href="#"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                whileHover={{ x: 5 }}
                className="group flex items-start gap-3 text-white/90 hover:text-white transition-colors p-6 rounded-lg hover:bg-white/5 backdrop-blur-sm bg-black/20"
              >
                <span className="text-xl leading-relaxed" style={{ fontWeight: 600 }}>
                  Secure AI apps, agents, models, and data at every step
                </span>
                <svg
                  className="w-6 h-6 flex-shrink-0 mt-1 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
