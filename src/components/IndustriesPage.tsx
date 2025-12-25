import {
  ShoppingCart,
  Heart,
  Truck,
  DollarSign,
  Factory,
  GraduationCap,
  Building2,
  Shield,
  Wrench,
  UtensilsCrossed,
  ArrowRight,
  Users,
  Award,
  Target,
  Code,
  Server,
  Smartphone,
  Cloud,
  Database,
  Lock,
  Zap,
  Landmark,
} from "lucide-react";

interface IndustriesPageProps {
  onContactClick?: () => void;
  onPublicSectorClick?: () => void;
}

export function IndustriesPage({ onContactClick, onPublicSectorClick }: IndustriesPageProps) {
  const industries = [
    {
      icon: ShoppingCart,
      title: "E-Commerce & Retail",
      color: "#0D6EFF",
      services: [
        "Complete store management systems & ERP solutions",
        "Real-time inventory tracking & warehouse automation",
        "Secure payment gateway integrations & fraud prevention",
        "Multi-channel sales platforms & customer analytics",
      ],
    },
    {
      icon: Heart,
      title: "Healthcare & Clinics",
      color: "#FF1744",
      services: [
        "Medical management systems & EMR/EHR solutions",
        "Patient scheduling apps & telemedicine platforms",
        "Secure patient data storage (HIPAA compliant)",
        "Laboratory information management systems (LIMS)",
      ],
    },
    {
      icon: Truck,
      title: "Logistics & Delivery",
      color: "#00C853",
      services: [
        "Real-time tracking platforms & route optimization",
        "Fleet management apps with GPS integration",
        "Warehouse management software & inventory control",
        "Last-mile delivery solutions & customer portals",
      ],
    },
    {
      icon: DollarSign,
      title: "Finance & Banking",
      color: "#FFB300",
      services: [
        "Secure banking apps with biometric authentication",
        "Anti-fraud systems & transaction monitoring",
        "Fintech solutions & payment processing platforms",
        "Investment portfolio management & trading systems",
      ],
    },
    {
      icon: Factory,
      title: "Manufacturing & Factories",
      color: "#FF6D00",
      services: [
        "Production management & MES systems",
        "Industrial automation & IoT integration",
        "Quality control dashboards & defect tracking",
        "Supply chain optimization & predictive maintenance",
      ],
    },
    {
      icon: GraduationCap,
      title: "Education & E-Learning",
      color: "#9C27B0",
      services: [
        "Learning Management Systems (LMS) & virtual classrooms",
        "Exam systems with automated grading & proctoring",
        "Student portals & parent communication apps",
        "Content management & interactive learning tools",
      ],
    },
    {
      icon: Building2,
      title: "Real Estate",
      color: "#2196F3",
      services: [
        "Property listing platforms & CRM systems",
        "Virtual tours & 3D visualization tools",
        "Tenant management & lease tracking software",
        "Real estate analytics & market intelligence",
      ],
    },
    {
      icon: Shield,
      title: "Cybersecurity Services",
      color: "#0D6EFF",
      services: [
        "Penetration testing & vulnerability assessments",
        "24/7 SOC monitoring & incident response",
        "Security audit & compliance consulting",
        "Threat intelligence & advanced threat detection",
      ],
    },
    {
      icon: Wrench,
      title: "Automotive & Garages",
      color: "#607D8B",
      services: [
        "Garage management systems (GAD)",
        "Maintenance scheduling & service history tracking",
        "Parts inventory & supplier management",
        "Customer relationship & invoicing systems",
      ],
    },
    {
      icon: UtensilsCrossed,
      title: "Hospitality & Restaurants",
      color: "#FF5722",
      services: [
        "Point-of-Sale (POS) systems & payment processing",
        "Reservation systems & table management",
        "Kitchen workflow apps & order tracking",
        "Menu management & customer loyalty programs",
      ],
    },
    {
      icon: Landmark,
      title: "Public Sector & Government",
      color: "#1e40af",
      onClick: onPublicSectorClick,
      services: [
        "National SOC & managed detection and response",
        "Critical infrastructure & OT security protection",
        "Government cloud security & network protection",
        "Compliance & data sovereignty solutions",
      ],
    },
  ];

  const caseStudies = [
    {
      logo: "🎓",
      title: "Education Platform Transformation",
      industry: "Education & E-Learning",
      challenge:
        "A leading educational institution needed a comprehensive platform to manage online courses, exams, and communication between students, teachers, and parents across multiple devices.",
      result:
        "Deployed a cross-platform LMS serving 50,000+ students with real-time synchronization, automated grading, and parent portals. Reduced administrative workload by 65% and improved student engagement by 89%.",
      technologies: ["React Native", "Node.js", "MongoDB", "Socket.io", "AWS"],
      color: "#9C27B0",
    },
    {
      logo: "🚚",
      title: "Logistics & Fleet Management Solution",
      industry: "Logistics & Delivery",
      challenge:
        "A transportation company required real-time tracking for 200+ vehicles, optimized route planning, and seamless communication between drivers, dispatchers, and customers.",
      result:
        "Built a comprehensive fleet management system reducing fuel costs by 28%, improving delivery times by 35%, and providing real-time visibility across the entire supply chain with predictive maintenance alerts.",
      technologies: ["Flutter", "Laravel", "PostgreSQL", "Google Maps API", "Firebase"],
      color: "#00C853",
    },
    {
      logo: "🏥",
      title: "Healthcare Management Platform",
      industry: "Healthcare & Clinics",
      challenge:
        "A network of clinics needed an integrated system for patient records, appointment scheduling, billing, and secure data sharing between multiple locations while maintaining HIPAA compliance.",
      result:
        "Implemented a cloud-based EMR system serving 15 clinics with 200+ healthcare providers. Reduced patient wait times by 45%, improved billing accuracy by 92%, and ensured full compliance with healthcare regulations.",
      technologies: ["React", "Python Django", "PostgreSQL", "Redis", "Azure"],
      color: "#FF1744",
    },
  ];

  const technologies = [
    { name: "React", icon: Code, color: "#61DAFB" },
    { name: "Node.js", icon: Server, color: "#339933" },
    { name: "Python", icon: Code, color: "#3776AB" },
    { name: "Laravel", icon: Code, color: "#FF2D20" },
    { name: "Flutter", icon: Smartphone, color: "#02569B" },
    { name: "AWS", icon: Cloud, color: "#FF9900" },
    { name: "Docker", icon: Database, color: "#2496ED" },
    { name: "Security", icon: Lock, color: "#0D6EFF" },
  ];

  const handleConsultationClick = () => {
    const message = encodeURIComponent(
      "Hello DCSecurite! I'm interested in learning more about your industry-specific software solutions. I'd like to request a free consultation to discuss my business needs."
    );
    window.open(`https://wa.me/213668959953?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0F1F]">
      {/* Hero Section */}
      <section
        className="relative overflow-hidden bg-gradient-to-br from-[#0A0F1F] via-[#0D1B3A] to-[#0A0F1F] pt-[15rem] pb-24 md:pb-32 px-4"
        style={{ paddingTop: "15rem" }}
      >
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#0D6EFF] rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-0 right-0 w-96 h-96 bg-[#0D6EFF] rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        {/* Floating Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 opacity-20 animate-float">
            <Lock className="w-8 h-8 text-[#0D6EFF]" />
          </div>
          <div
            className="absolute top-40 right-20 opacity-20 animate-float"
            style={{ animationDelay: "0.5s" }}
          >
            <Code className="w-10 h-10 text-[#0D6EFF]" />
          </div>
          <div
            className="absolute bottom-32 left-1/4 opacity-20 animate-float"
            style={{ animationDelay: "1s" }}
          >
            <Cloud className="w-12 h-12 text-[#0D6EFF]" />
          </div>
          <div
            className="absolute top-1/3 right-1/4 opacity-20 animate-float"
            style={{ animationDelay: "1.5s" }}
          >
            <Shield className="w-9 h-9 text-[#0D6EFF]" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <div className="inline-block mb-6 px-6 py-2 bg-[#0D6EFF]/10 border border-[#0D6EFF]/30 rounded-full">
              <span className="text-[#0D6EFF] text-sm font-semibold">
                TRUSTED BY 120+ BUSINESSES
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-white mb-8">
              Industries We <span className="text-[#0D6EFF]">Empower</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We build tailor-made software solutions, cybersecurity systems, and intelligent
              automation for businesses across multiple sectors. From concept to deployment, we
              transform your industry challenges into competitive advantages.
            </p>
          </div>
        </div>

        {/* Geometric Patterns */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white dark:from-[#0A0F1F] to-transparent"></div>
      </section>

      {/* Intro Stats Section */}
      <section className="py-16 px-4 bg-white dark:bg-[#0A0F1F]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-900 dark:text-white mb-6">
              Proven Expertise Across Industries
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              With over a decade of experience, we've delivered cutting-edge solutions that drive
              digital transformation and protect critical infrastructure across diverse business
              sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Stat Card 1 */}
            <div className="group relative overflow-hidden bg-gradient-to-br from-[#0D6EFF]/5 to-transparent border border-[#0D6EFF]/20 rounded-2xl p-8 hover:border-[#0D6EFF]/50 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0D6EFF]/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#0D6EFF]/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-[#0D6EFF]" />
                </div>
                <div className="text-5xl font-bold text-[#0D6EFF] mb-2">120+</div>
                <div className="text-lg text-gray-900 dark:text-white">Satisfied Clients</div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Businesses transformed with our solutions
                </p>
              </div>
            </div>

            {/* Stat Card 2 */}
            <div className="group relative overflow-hidden bg-gradient-to-br from-[#0D6EFF]/5 to-transparent border border-[#0D6EFF]/20 rounded-2xl p-8 hover:border-[#0D6EFF]/50 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0D6EFF]/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#0D6EFF]/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-[#0D6EFF]" />
                </div>
                <div className="text-5xl font-bold text-[#0D6EFF] mb-2">12</div>
                <div className="text-lg text-gray-900 dark:text-white">Industries Served</div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Specialized solutions for diverse sectors
                </p>
              </div>
            </div>

            {/* Stat Card 3 */}
            <div className="group relative overflow-hidden bg-gradient-to-br from-[#0D6EFF]/5 to-transparent border border-[#0D6EFF]/20 rounded-2xl p-8 hover:border-[#0D6EFF]/50 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0D6EFF]/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#0D6EFF]/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-[#0D6EFF]" />
                </div>
                <div className="text-5xl font-bold text-[#0D6EFF] mb-2">10+</div>
                <div className="text-lg text-gray-900 dark:text-white">Years Experience</div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Decade of innovation and excellence
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-[#0D1421]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-gray-900 dark:text-white mb-6">
              Comprehensive Solutions by <span className="text-[#0D6EFF]">Industry</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We understand that every industry has unique challenges. Our specialized teams deliver
              custom solutions tailored to your sector's specific requirements.
            </p>
          </div>

          {/* Responsive Table */}
          <div className="overflow-x-auto bg-white dark:bg-[#0A0F1F] rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-800">
                  <th className="text-left p-6 text-gray-900 dark:text-white bg-gray-50 dark:bg-[#0D1421]">
                    Industry
                  </th>
                  <th className="text-left p-6 text-gray-900 dark:text-white bg-gray-50 dark:bg-[#0D1421] hidden lg:table-cell">
                    Solutions & Services
                  </th>
                </tr>
              </thead>
              <tbody>
                {industries.map((industry, index) => {
                  const Icon = industry.icon;
                  const isClickable = industry.onClick;
                  return (
                    <tr
                      key={index}
                      className={`border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-[#0D1421] transition-colors duration-200 ${isClickable ? "cursor-pointer" : ""}`}
                      onClick={isClickable ? industry.onClick : undefined}
                    >
                      {/* Industry Name & Icon */}
                      <td className="p-6">
                        <div className="flex items-center gap-4">
                          <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: `${industry.color}15` }}
                          >
                            <Icon className="w-6 h-6" style={{ color: industry.color }} />
                          </div>
                          <div>
                            <div className="text-gray-900 dark:text-white">{industry.title}</div>
                            {/* Services on mobile */}
                            <div className="lg:hidden mt-2 space-y-1">
                              {industry.services.map((service, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                                >
                                  <Zap className="w-3 h-3 text-[#0D6EFF] flex-shrink-0 mt-0.5" />
                                  <span>{service}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* Solutions - Hidden on mobile */}
                      <td className="p-6 hidden lg:table-cell">
                        <ul className="space-y-2">
                          {industry.services.map((service, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                            >
                              <Zap className="w-4 h-4 text-[#0D6EFF] flex-shrink-0 mt-0.5" />
                              <span>{service}</span>
                            </li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Featured Case Studies Section */}
      <section className="py-20 px-4 bg-white dark:bg-[#0A0F1F]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-gray-900 dark:text-white mb-6">
              Success Stories Across <span className="text-[#0D6EFF]">Industries</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Real projects, real results. See how we've helped businesses transform their
              operations with cutting-edge technology and cybersecurity solutions.
            </p>
          </div>

          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-[#0D1421] dark:to-[#0A0F1F] border border-gray-200 dark:border-gray-800 rounded-3xl p-8 md:p-10 hover:border-[#0D6EFF]/50 transition-all duration-300 hover:shadow-2xl"
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#0D6EFF]/5 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="text-6xl">{study.logo}</div>
                      <div>
                        <h3 className="text-2xl md:text-3xl text-gray-900 dark:text-white mb-2">
                          {study.title}
                        </h3>
                        <div
                          className="inline-block px-4 py-1 rounded-full text-sm"
                          style={{
                            backgroundColor: `${study.color}15`,
                            color: study.color,
                          }}
                        >
                          {study.industry}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Challenge */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 bg-red-500/10 rounded-lg flex items-center justify-center">
                          <span className="text-red-500 text-sm">⚠️</span>
                        </div>
                        <h4 className="text-lg text-gray-900 dark:text-white">Challenge</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>

                    {/* Result */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 bg-green-500/10 rounded-lg flex items-center justify-center">
                          <span className="text-green-500 text-sm">✓</span>
                        </div>
                        <h4 className="text-lg text-gray-900 dark:text-white">Result</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {study.result}
                      </p>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
                    <h4 className="text-sm text-gray-500 dark:text-gray-500 mb-3">
                      TECHNOLOGIES USED
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-[#0D6EFF]/5 border border-[#0D6EFF]/20 text-[#0D6EFF] rounded-lg text-sm hover:bg-[#0D6EFF]/10 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-[#0D1421]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-gray-900 dark:text-white mb-6">
              Powered by <span className="text-[#0D6EFF]">Cutting-Edge</span> Technology
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We leverage the most advanced technologies and frameworks to build robust, scalable,
              and secure solutions for your business.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div
                  key={index}
                  className="group flex flex-col items-center justify-center p-6 bg-white dark:bg-[#0A0F1F] border border-gray-200 dark:border-gray-800 rounded-2xl hover:border-[#0D6EFF]/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${tech.color}15` }}
                  >
                    <Icon className="w-8 h-8" style={{ color: tech.color }} />
                  </div>
                  <span className="text-sm text-gray-900 dark:text-white text-center">
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-24 px-4">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F1F] via-[#0D1B3A] to-[#0A0F1F]">
          <div className="absolute inset-0 opacity-20">
            {/* Geometric Pattern */}
            <div
              className="absolute top-0 left-0 w-full h-full"
              style={{
                backgroundImage: `
                linear-gradient(30deg, transparent 40%, rgba(13, 110, 255, 0.1) 40%, rgba(13, 110, 255, 0.1) 60%, transparent 60%),
                linear-gradient(150deg, transparent 40%, rgba(13, 110, 255, 0.05) 40%, rgba(13, 110, 255, 0.05) 60%, transparent 60%)
              `,
                backgroundSize: "80px 140px",
              }}
            ></div>
          </div>

          {/* Animated Orbs */}
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#0D6EFF] rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div
            className="absolute bottom-20 right-20 w-96 h-96 bg-[#0D6EFF] rounded-full blur-3xl opacity-20 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <div className="mb-8">
            <div className="inline-block p-3 bg-[#0D6EFF]/10 border border-[#0D6EFF]/30 rounded-2xl mb-6">
              <Shield className="w-12 h-12 text-[#0D6EFF]" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Build the Next Big Solution
              <br />
              <span className="text-[#0D6EFF]">for Your Industry</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Whether you need custom software, cybersecurity solutions, or digital transformation
              consulting, our expert team is ready to turn your vision into reality.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleConsultationClick}
              className="group px-8 py-4 bg-gradient-to-r from-[#0D6EFF] to-[#0052CC] text-white rounded-xl hover:shadow-2xl hover:shadow-[#0D6EFF]/50 transition-all duration-300 text-lg flex items-center gap-3"
            >
              <span>Request a Free Consultation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-12 border-t border-white/10">
            <p className="text-gray-400 text-sm mb-4">TRUSTED BY LEADING COMPANIES IN</p>
            <div className="flex flex-wrap justify-center gap-4 text-gray-300">
              <span className="px-4 py-2 bg-white/5 rounded-lg">Healthcare</span>
              <span className="px-4 py-2 bg-white/5 rounded-lg">Finance</span>
              <span className="px-4 py-2 bg-white/5 rounded-lg">E-Commerce</span>
              <span className="px-4 py-2 bg-white/5 rounded-lg">Manufacturing</span>
              <span className="px-4 py-2 bg-white/5 rounded-lg">Education</span>
              <span className="px-4 py-2 bg-white/5 rounded-lg">Logistics</span>
            </div>
          </div>
        </div>
      </section>

      {/* Add Custom Animations */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
