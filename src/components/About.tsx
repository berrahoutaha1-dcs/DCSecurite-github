import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CheckCircle, Award, Users, TrendingUp, Shield } from "lucide-react";

const highlights = [
  "Industry-certified security professionals",
  "15+ years of cybersecurity expertise",
  "Compliance with international standards",
  "Proven track record with Fortune 500 companies",
];

const stats = [
  { icon: Award, value: "50+", label: "Industry Awards" },
  { icon: Users, value: "200+", label: "Security Experts" },
  { icon: TrendingUp, value: "98%", label: "Client Satisfaction" },
  { icon: Shield, value: "1M+", label: "Threats Blocked" },
];

export function About() {
  return (
    <section
      id="about"
      className="py-32 bg-slate-50 dark:from-[#0D1425] dark:to-[#0A0F1F] dark:bg-gradient-to-b relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-500/10 border border-purple-300 dark:border-purple-500/30 rounded-full text-purple-700 dark:text-purple-400 mb-6 backdrop-blur-sm">
              About CyberShield
            </div>
            <h2 className="text-slate-900 dark:text-white mb-6 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400 bg-clip-text text-transparent">
              Your Trusted Security Partner
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              At CyberShield, we're committed to protecting businesses from the ever-evolving
              landscape of cyber threats. Our team of elite security professionals brings decades of
              combined experience in defending against sophisticated attacks.
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              We leverage cutting-edge AI technology and proven methodologies to create
              comprehensive security strategies that adapt to your unique business needs.
            </p>

            <div className="space-y-4 mb-10">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="relative">
                    <CheckCircle className="w-6 h-6 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5 relative z-10" />
                    <div className="absolute inset-0 bg-cyan-400 dark:bg-cyan-500 blur-lg opacity-0 group-hover:opacity-50 dark:group-hover:opacity-70 transition-opacity"></div>
                  </div>
                  <span className="text-slate-700 dark:text-slate-300">{highlight}</span>
                </div>
              ))}
            </div>

            {/* Mini stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-cyan-100 dark:bg-gradient-to-br dark:from-cyan-500/20 dark:to-blue-500/20 rounded-xl mb-2">
                      <Icon className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                    </div>
                    <div className="text-slate-900 dark:text-white mb-1">{stat.value}</div>
                    <div className="text-slate-600 dark:text-slate-500 text-xs">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            {/* Main image */}
            <div className="relative z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 dark:from-cyan-500/20 dark:to-blue-500/20 rounded-3xl blur-2xl"></div>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700/30">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjQwOTEzMTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Professional team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-8 -left-8 z-20 max-w-xs">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl blur-xl opacity-60 dark:opacity-80"></div>
              <div className="relative bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-700/50 p-6 rounded-2xl">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-slate-900 dark:text-white">Industry Leader</div>
                    <div className="text-slate-600 dark:text-slate-400 text-sm">Since 2008</div>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Recognized by top cybersecurity organizations worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
