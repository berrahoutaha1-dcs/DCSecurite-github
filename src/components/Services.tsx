import { Shield, Lock, Eye, Server, AlertTriangle, Users } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Threat Detection & Response",
    description:
      "Advanced AI-powered threat detection with real-time response capabilities to neutralize attacks before they impact your business.",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    icon: Lock,
    title: "Data Encryption",
    description:
      "Military-grade encryption solutions to protect your sensitive data both at rest and in transit across all platforms.",
    gradient: "from-blue-500 to-purple-600",
  },
  {
    icon: Eye,
    title: "Security Monitoring",
    description:
      "24/7 monitoring of your infrastructure by our expert team, ensuring immediate response to any security incidents.",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    icon: Server,
    title: "Infrastructure Security",
    description:
      "Comprehensive security architecture design and implementation for cloud, on-premise, and hybrid environments.",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    icon: AlertTriangle,
    title: "Vulnerability Assessment",
    description:
      "Regular security audits and penetration testing to identify and remediate vulnerabilities before they're exploited.",
    gradient: "from-orange-500 to-red-600",
  },
  {
    icon: Users,
    title: "Security Training",
    description:
      "Employee security awareness training to build a strong human firewall against social engineering and phishing attacks.",
    gradient: "from-emerald-500 to-teal-600",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white via-slate-50 to-white dark:from-[#0A0F1F] dark:via-[#0D1425] dark:to-[#0A0F1F] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20 dark:opacity-30">
        <div className="absolute top-20 right-0 w-48 h-48 md:w-96 md:h-96 bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-48 h-48 md:w-96 md:h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-slate-900 dark:text-white mb-4 md:mb-6 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400 bg-clip-text text-transparent px-4">
            Comprehensive Security Solutions
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed px-4 text-sm md:text-base">
            Enterprise-grade cybersecurity services powered by AI and delivered by industry experts
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="group relative">
                {/* Gradient glow effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 dark:group-hover:opacity-30 rounded-2xl md:rounded-3xl blur-xl transition-all duration-500`}
                ></div>

                {/* Card */}
                <div className="relative h-full bg-white dark:bg-slate-900/70 backdrop-blur-md border border-slate-200 dark:border-slate-700/30 p-6 md:p-8 rounded-2xl md:rounded-3xl hover:border-slate-300 dark:hover:border-cyan-500/40 transition-all duration-500 group-hover:translate-y-[-8px] shadow-lg dark:shadow-cyan-500/5 dark:hover:shadow-cyan-500/10">
                  {/* Icon */}
                  <div className="relative mb-4 md:mb-6">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20 dark:opacity-30 rounded-xl md:rounded-2xl blur-xl group-hover:opacity-40 dark:group-hover:opacity-50 transition-all duration-500`}
                    ></div>
                    <div
                      className={`relative w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${service.gradient} rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg`}
                    >
                      <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-slate-900 dark:text-white mb-3 md:mb-4 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300 text-base md:text-lg">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">
                    {service.description}
                  </p>

                  {/* Learn more link */}
                  <div className="mt-4 md:mt-6 flex items-center gap-2 text-cyan-600 dark:text-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-300 text-sm md:text-base">
                    <span>Learn more</span>
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
