import React, { useState, useEffect } from "react";
import {
  Building2,
  Users,
  TrendingUp,
  DollarSign,
  Package,
  Truck,
  ShoppingCart,
  Factory,
  FolderKanban,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Calculator,
  Briefcase,
  Home,
} from "lucide-react";
import { useTheme } from "./ThemeContext";

const erpBanner = "/assets/436461aef14156c37f8c968fff1b2f4d35732d9b.png";
const erpDashboard = "/assets/55c201582b6124f865c4f9b5b2b3b17c26c0d188.png";
const solucheLogoLight = "/assets/4f8ee469faf4c14ea7b55f058230a93518cd0ed6.png";
const solucheLogoDark = "/assets/d3a6c17b115f76aa43f6d9781ca3fc1edcdd3da2.png";
const sopretaLogoLight = "/assets/850db75bc10f67d0bd0e6126018a38110a5fd8fa.png";
const sopretaLogoDark = "/assets/18e9b45dc41d4622c92095aef756a299359fd78b.png";

interface ERPPageProps {
  onPrivacyClick?: () => void;
  onTermsClick?: () => void;
  onCookieClick?: () => void;
  onContactClick?: () => void;
  onHomeClick?: () => void;
}

const ERPPage: React.FC<ERPPageProps> = ({
  onPrivacyClick,
  onTermsClick,
  onCookieClick,
  onContactClick,
  onHomeClick,
}) => {
  const { theme } = useTheme();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [activeCard, setActiveCard] = useState(0);

  // ERP Assessment Form State
  const [formData, setFormData] = useState({
    // Company Information
    companyName: "",
    businessActivity: "",
    yearEstablished: "",
    numEmployees: "",
    numBranches: "",
    existingSoftware: "",

    // Sales Operations
    hasSalesTeam: "",
    monthlyCustomers: "",
    needFollowUp: "",
    needAutomation: "",

    // Human Resources
    needAttendance: "",
    hasPayroll: "",
    needPerformance: "",

    // Inventory & Warehousing
    hasPhysicalStock: "",
    numProducts: "",
    needRealTimeTracking: "",
    multipleSuppliers: "",
    needWarehouseTracking: "",

    // Supply Chain & Logistics
    handleShipping: "",
    needDeliveryIntegration: "",
    needShipmentTracking: "",

    // Manufacturing
    hasManufacturing: "",
    needBOM: "",
    multipleProductionLines: "",
    needQualityTracking: "",

    // Project Management
    manageProjects: "",
    needTaskTracking: "",

    // Accounting & Finance
    hasAccountant: "",
    needExpenseSystem: "",
    needFinancialReports: "",

    // Reporting & BI
    needDashboard: "",
    needAlerts: "",

    // Financial Capacity
    annualRevenue: "",

    // Contact Information
    contactName: "",
    phoneNumber: "",
    email: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmitAssessment = () => {
    console.log("Form submitted:", formData);
    // Here you would typically send this to your backend
    alert("Thank you! We will analyze your requirements and contact you soon.");
  };

  const whyERPCards = [
    {
      icon: CheckCircle2,
      title: "Automation",
      description:
        "Automate repetitive tasks and streamline business processes across all departments.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: TrendingUp,
      title: "Productivity",
      description:
        "Increase efficiency by 30-50% with integrated workflows and real-time data access.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: BarChart3,
      title: "Accuracy",
      description:
        "Eliminate data silos and reduce errors with a single source of truth for all data.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Building2,
      title: "Visibility",
      description:
        "Get complete visibility into operations with comprehensive dashboards and reports.",
      color: "from-orange-500 to-red-500",
    },
  ];

  // Auto-rotate cards every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % whyERPCards.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const erpModules = [
    {
      icon: Calculator,
      title: "Accounting",
      description:
        "Financial management, general ledger, accounts payable/receivable, and financial reporting.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "Human Resources",
      description: "Employee data, payroll, benefits, recruitment, and performance management.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: TrendingUp,
      title: "CRM & Sales",
      description: "Customer relationship management, sales pipeline, and opportunity tracking.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Package,
      title: "Inventory",
      description: "Stock management, warehouse operations, and inventory optimization.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Truck,
      title: "Supply Chain",
      description: "Logistics, distribution, and supply chain optimization.",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: ShoppingCart,
      title: "Procurement",
      description: "Purchase orders, vendor management, and procurement processes.",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Production planning, scheduling, and manufacturing execution.",
      color: "from-red-500 to-orange-500",
    },
    {
      icon: FolderKanban,
      title: "Project Management",
      description: "Project planning, resource allocation, and project tracking.",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: BarChart3,
      title: "Analytics",
      description: "Business intelligence, reporting, and data analytics.",
      color: "from-emerald-500 to-teal-500",
    },
  ];

  const questionnaire = [
    {
      question: "What is your company size?",
      type: "radio",
      options: [
        "1-10 employees",
        "11-50 employees",
        "51-200 employees",
        "201-1000 employees",
        "1000+ employees",
      ],
    },
    {
      question: "What industry does your company operate in?",
      type: "text",
      placeholder: "e.g., Manufacturing, Retail, Healthcare, etc.",
    },
    {
      question: "What are your main business challenges?",
      type: "radio",
      options: [
        "Financial management",
        "Inventory control",
        "Customer management",
        "Supply chain",
        "All of the above",
      ],
    },
    {
      question: "Do you currently use any ERP system?",
      type: "radio",
      options: [
        "No system",
        "Spreadsheets only",
        "Basic software",
        "Partial ERP",
        "Full ERP system",
      ],
    },
    {
      question: "What is your annual revenue range?",
      type: "radio",
      options: ["Under $1M", "$1M - $10M", "$10M - $50M", "$50M - $100M", "Over $100M"],
    },
    {
      question: "How many departments need integration?",
      type: "radio",
      options: [
        "1-2 departments",
        "3-5 departments",
        "6-10 departments",
        "More than 10 departments",
      ],
    },
    {
      question: "What is your implementation timeline?",
      type: "radio",
      options: [
        "Immediate (1-3 months)",
        "Short term (3-6 months)",
        "Medium term (6-12 months)",
        "Long term (12+ months)",
      ],
    },
    {
      question: "What is your budget range for ERP implementation?",
      type: "radio",
      options: ["Under $50K", "$50K - $100K", "$100K - $500K", "$500K - $1M", "Over $1M"],
    },
    {
      question: "Do you need multi-location support?",
      type: "radio",
      options: [
        "Single location",
        "2-5 locations",
        "6-10 locations",
        "More than 10 locations",
        "Global operations",
      ],
    },
    {
      question: "What are your top priorities?",
      type: "radio",
      options: [
        "Cost reduction",
        "Process automation",
        "Better reporting",
        "Compliance",
        "Customer satisfaction",
      ],
    },
  ];

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentQuestion]: value });
  };

  const handleNext = () => {
    if (currentQuestion < questionnaire.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const getRecommendedModules = () => {
    const recommended = [];

    // Basic recommendations based on answers
    if (answers[0]?.includes("50") || answers[0]?.includes("200") || answers[0]?.includes("1000")) {
      recommended.push("Human Resources", "Analytics");
    }

    if (answers[2]?.includes("Financial")) {
      recommended.push("Accounting");
    }

    if (answers[2]?.includes("Inventory")) {
      recommended.push("Inventory", "Supply Chain");
    }

    if (answers[2]?.includes("Customer")) {
      recommended.push("CRM & Sales");
    }

    if (answers[2]?.includes("Supply chain")) {
      recommended.push("Supply Chain", "Procurement");
    }

    if (answers[2]?.includes("All of the above")) {
      recommended.push("Accounting", "Inventory", "CRM & Sales", "Supply Chain", "Analytics");
    }

    if (answers[1]?.toLowerCase().includes("manufac")) {
      recommended.push("Manufacturing", "Inventory", "Supply Chain");
    }

    if (answers[8]?.includes("More than 10") || answers[8]?.includes("Global")) {
      recommended.push("Supply Chain", "Analytics");
    }

    // Remove duplicates
    return [...new Set(recommended)];
  };

  const startAssessment = () => {
    setCurrentQuestion(0);
    setShowResults(false);
    setAnswers({});
    const section = document.getElementById("questionnaire");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0F1F] transition-colors duration-300">
      {/* Home Button */}
      <div className="absolute top-4 left-4 z-50">
        <button
          onClick={onHomeClick}
          className="flex items-center gap-2 text-slate-900 dark:text-white hover:text-[#0D6EFF] dark:hover:text-[#0D6EFF] transition-colors cursor-pointer"
        >
          <Home className="w-4 h-4" />
          <span>Home</span>
        </button>
      </div>

      {/* Banner Image - No animations or resize */}
      <div className="w-full">
        <img
          src={erpBanner}
          alt="Enterprise Resource Planning management"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* ERP Dashboard Preview Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center justify-center">
            <div className="w-full max-w-5xl">
              <img
                src={erpDashboard}
                alt="ERP Dashboard Preview"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why ERP Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-center mb-16 text-5xl md:text-6xl text-slate-900 dark:text-white tracking-tight">
            Why Your Business Needs{" "}
            <span className="bg-gradient-to-r from-[#0D6EFF] to-cyan-500 text-transparent bg-clip-text">
              ERP
            </span>
          </h2>

          <div className="relative min-h-[400px] flex items-center justify-center perspective-1000">
            {whyERPCards.map((card, index) => {
              const CardIcon = card.icon;
              const isPrev = (activeCard - 1 + whyERPCards.length) % whyERPCards.length === index;
              const isNext = (activeCard + 1) % whyERPCards.length === index;

              return (
                <div
                  key={index}
                  style={{
                    transform:
                      index === activeCard
                        ? "translateX(0) translateZ(0) rotateY(0deg) scale(1)"
                        : isPrev
                          ? "translateX(-120%) translateZ(-300px) rotateY(45deg) scale(0.7)"
                          : isNext
                            ? "translateX(120%) translateZ(-300px) rotateY(-45deg) scale(0.7)"
                            : "translateX(0) translateZ(-500px) scale(0.5)",
                    opacity: index === activeCard ? 1 : 0,
                    filter: index === activeCard ? "blur(0px)" : "blur(8px)",
                    transition: "all 1.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)",
                    transformStyle: "preserve-3d",
                  }}
                  className={`absolute inset-0 ${index === activeCard ? "pointer-events-auto z-10" : "pointer-events-none z-0"
                    }`}
                >
                  <div className="max-w-2xl mx-auto">
                    <div className="relative bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 p-12 rounded-3xl border-2 border-slate-200 dark:border-slate-700 shadow-2xl hover:shadow-[#0D6EFF]/20 transition-shadow overflow-hidden">
                      {/* Animated gradient background */}
                      <div
                        className="absolute inset-0 opacity-30"
                        style={{
                          background: `linear-gradient(135deg, transparent 0%, ${card.color.includes("blue") ? "#0D6EFF" : card.color.includes("green") ? "#10b981" : card.color.includes("purple") ? "#a855f7" : "#f97316"}22 100%)`,
                          animation:
                            index === activeCard ? "pulse 3s ease-in-out infinite" : "none",
                        }}
                      ></div>

                      {/* Glassmorphism overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0D6EFF]/5 to-cyan-500/5 rounded-3xl backdrop-blur-sm"></div>

                      {/* Content */}
                      <div className="relative z-10 text-center">
                        <div
                          className={`w-24 h-24 bg-gradient-to-br ${card.color} rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg transform transition-all duration-1000`}
                          style={{
                            animation:
                              index === activeCard ? "iconBounce 2s ease-in-out infinite" : "none",
                          }}
                        >
                          <CardIcon className="w-12 h-12 text-white" />
                        </div>
                        <h3
                          className="text-4xl mb-6 text-slate-900 dark:text-white"
                          style={{
                            animation: index === activeCard ? "fadeInUp 1s ease-out" : "none",
                          }}
                        >
                          {card.title}
                        </h3>
                        <p
                          className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed"
                          style={{
                            animation: index === activeCard ? "fadeInUp 1.2s ease-out" : "none",
                          }}
                        >
                          {card.description}
                        </p>
                      </div>

                      {/* Decorative elements with animations */}
                      <div
                        className={`absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br ${card.color} opacity-20 rounded-full blur-2xl`}
                        style={{
                          animation:
                            index === activeCard ? "float 4s ease-in-out infinite" : "none",
                        }}
                      ></div>
                      <div
                        className={`absolute -bottom-4 -left-4 w-40 h-40 bg-gradient-to-br ${card.color} opacity-10 rounded-full blur-3xl`}
                        style={{
                          animation:
                            index === activeCard ? "float 5s ease-in-out infinite reverse" : "none",
                        }}
                      ></div>

                      {/* Glowing border effect */}
                      <div
                        className={`absolute inset-0 rounded-3xl`}
                        style={{
                          background: `linear-gradient(135deg, ${card.color.includes("blue") ? "#0D6EFF" : card.color.includes("green") ? "#10b981" : card.color.includes("purple") ? "#a855f7" : "#f97316"}, transparent)`,
                          opacity: index === activeCard ? 0.3 : 0,
                          filter: "blur(20px)",
                          animation:
                            index === activeCard
                              ? "glow 2s ease-in-out infinite alternate"
                              : "none",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Indicator dots */}
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex gap-3">
              {whyERPCards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCard(index)}
                  className={`transition-all duration-300 rounded-full ${index === activeCard
                      ? "w-12 h-3 bg-gradient-to-r from-[#0D6EFF] to-cyan-500"
                      : "w-3 h-3 bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500"
                    }`}
                  aria-label={`Go to card ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive ERP Modules */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl mb-6 text-slate-900 dark:text-white tracking-tight">
              Comprehensive ERP{" "}
              <span className="bg-gradient-to-r from-[#0D6EFF] to-cyan-500 text-transparent bg-clip-text">
                Modules
              </span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-3xl mx-auto">
              Our Enterprise Resource Planning solution covers all aspects of your business
              operations, from finance to manufacturing, providing a unified platform for growth.
            </p>
          </div>

          {/* Desktop Table View */}
          <div className="hidden lg:block bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-slate-900 to-slate-800">
                    <th className="px-6 py-4 text-left text-white">#</th>
                    <th className="px-6 py-4 text-left text-white">Module</th>
                    <th className="px-6 py-4 text-left text-white">Description</th>
                    <th className="px-6 py-4 text-left text-white">Category</th>
                  </tr>
                </thead>
                <tbody>
                  {erpModules.map((module, index) => (
                    <tr
                      key={index}
                      className="border-b border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                    >
                      <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{index + 1}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg flex items-center justify-center flex-shrink-0">
                            <module.icon className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-slate-900 dark:text-white">{module.title}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-slate-600 dark:text-slate-400">
                        {module.description}
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-gradient-to-r from-slate-900 to-slate-800 text-white">
                          {module.title.includes("Accounting") || module.title.includes("Analytics")
                            ? "Finance"
                            : module.title.includes("Human") || module.title.includes("CRM")
                              ? "Clients"
                              : module.title.includes("Inventory") ||
                                module.title.includes("Supply") ||
                                module.title.includes("Procurement")
                                ? "Operations"
                                : module.title.includes("Manufacturing")
                                  ? "Production"
                                  : "Management"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Card View */}
          <div className="lg:hidden space-y-4">
            {erpModules.map((module, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <module.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-slate-900 dark:text-white">{module.title}</h3>
                      <span className="text-sm text-slate-500 dark:text-slate-400">
                        #{index + 1}
                      </span>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-gradient-to-r from-slate-900 to-slate-800 text-white">
                      {module.title.includes("Accounting") || module.title.includes("Analytics")
                        ? "Finance"
                        : module.title.includes("Human") || module.title.includes("CRM")
                          ? "Clients"
                          : module.title.includes("Inventory") ||
                            module.title.includes("Supply") ||
                            module.title.includes("Procurement")
                            ? "Operations"
                            : module.title.includes("Manufacturing")
                              ? "Production"
                              : "Management"}
                    </span>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {module.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl mb-6 text-slate-900 dark:text-white tracking-tight">
              How It{" "}
              <span className="bg-gradient-to-r from-[#0D6EFF] to-cyan-500 text-transparent bg-clip-text">
                Works
              </span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              Our streamlined process to get you started with the right ERP solution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0D6EFF] to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                1
              </div>
              <h3 className="mb-2 text-slate-900 dark:text-white">Fill the Questionnaire</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Complete our comprehensive assessment to understand your needs
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0D6EFF] to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                2
              </div>
              <h3 className="mb-2 text-slate-900 dark:text-white">AI Analyzes the Company</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Our AI evaluates your responses and business requirements
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0D6EFF] to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                3
              </div>
              <h3 className="mb-2 text-slate-900 dark:text-white">System Proposes ERP Modules</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Get personalized module recommendations tailored to your business
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0D6EFF] to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                4
              </div>
              <h3 className="mb-2 text-slate-900 dark:text-white">
                Get Cost & Implementation Plan
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Receive detailed pricing and timeline for your ERP deployment
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={startAssessment}
              className="bg-gradient-to-r from-[#0D6EFF] to-cyan-500 text-white px-8 py-4 rounded-full hover:shadow-lg hover:shadow-[#0D6EFF]/50 transition-all inline-flex items-center gap-2"
            >
              Start Your ERP Analysis
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section
        className="relative py-16 md:py-20 overflow-hidden"
        style={{ backgroundColor: theme === "dark" ? "#0A0F1F" : "#ffffff" }}
      >
        {/* Background pattern - only visible in dark mode */}
        {theme === "dark" && (
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 20px)`,
              }}
            ></div>
          </div>
        )}

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl mb-3"
              style={{ color: theme === "dark" ? "#ffffff" : "#000000" }}
            >
              Trusted By{" "}
              <span className="bg-gradient-to-r from-[#0D6EFF] to-cyan-500 text-transparent bg-clip-text">
                Industry Leaders
              </span>
            </h2>
            <div className="w-20 h-1 bg-cyan-500 mx-auto"></div>
          </div>

          {/* Logo */}
          <div className="flex justify-center items-center gap-28">
            <div className="transition-transform duration-300 hover:scale-105">
              <img
                src={theme === "dark" ? solucheLogoDark : solucheLogoLight}
                alt="Soluche School"
                className="h-24 md:h-28 lg:h-32 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              />
            </div>
            <div className="transition-transform duration-300 hover:scale-105">
              <img
                src={theme === "dark" ? sopretaLogoDark : sopretaLogoLight}
                alt="Sopreta"
                className="h-24 md:h-28 lg:h-32 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ERP Assessment Questionnaire */}
      <section
        id="questionnaire"
        className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-[#0A0F1F]"
      >
        <div className="container mx-auto max-w-5xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 text-slate-900 dark:text-white tracking-tight">
              ERP Assessment{" "}
              <span className="bg-gradient-to-r from-[#0D6EFF] to-cyan-500 text-transparent bg-clip-text">
                Questionnaire
              </span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Help us understand your business needs so we can recommend the perfect ERP solution
              tailored to your organization
            </p>
          </div>

          {/* Form Container */}
          <div className="space-y-8">
            {/* 1. Company Information */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="text-2xl text-slate-900 dark:text-white">Company Information</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => handleInputChange("companyName", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter your company name"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                    Business Activity / Industry *
                  </label>
                  <select
                    value={formData.businessActivity}
                    onChange={(e) => handleInputChange("businessActivity", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select industry</option>
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="Retail">Retail</option>
                    <option value="Wholesale">Wholesale</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Construction">Construction</option>
                    <option value="Technology">Technology</option>
                    <option value="Services">Professional Services</option>
                    <option value="Food">Food & Beverage</option>
                    <option value="Logistics">Logistics & Transportation</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                      Year of Establishment
                    </label>
                    <input
                      type="text"
                      value={formData.yearEstablished}
                      onChange={(e) => handleInputChange("yearEstablished", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="e.g., 2015"
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                      Number of Employees *
                    </label>
                    <select
                      value={formData.numEmployees}
                      onChange={(e) => handleInputChange("numEmployees", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select range</option>
                      <option value="1-10">1–10 employees</option>
                      <option value="10-50">10–50 employees</option>
                      <option value="50-200">50–200 employees</option>
                      <option value="200+">200+ employees</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                    Number of Branches / Warehouses
                  </label>
                  <select
                    value={formData.numBranches}
                    onChange={(e) => handleInputChange("numBranches", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select</option>
                    <option value="1">1 (Single location)</option>
                    <option value="2-5">2–5 locations</option>
                    <option value="6-10">6–10 locations</option>
                    <option value="10+">More than 10 locations</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm mb-3 text-slate-700 dark:text-slate-300">
                    Existing Software Used
                  </label>
                  <div className="space-y-3">
                    {["None", "Excel only", "Accounting software", "Partial ERP", "Full ERP"].map(
                      (option) => (
                        <label key={option} className="flex items-center cursor-pointer group">
                          <input
                            type="radio"
                            name="existingSoftware"
                            value={option}
                            checked={formData.existingSoftware === option}
                            onChange={(e) => handleInputChange("existingSoftware", e.target.value)}
                            className="w-5 h-5 text-blue-600 focus:ring-2 focus:ring-blue-500 border-slate-300 dark:border-slate-600"
                          />
                          <span className="ml-3 text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {option}
                          </span>
                        </label>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Sales Operations */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3 className="text-2xl text-slate-900 dark:text-white">Sales Operations</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm mb-3 text-slate-700 dark:text-slate-300">
                    Do you have a sales team?
                  </label>
                  <div className="flex gap-4">
                    {["Yes", "No"].map((option) => (
                      <label key={option} className="flex items-center cursor-pointer group flex-1">
                        <input
                          type="radio"
                          name="hasSalesTeam"
                          value={option}
                          checked={formData.hasSalesTeam === option}
                          onChange={(e) => handleInputChange("hasSalesTeam", e.target.value)}
                          className="w-5 h-5 text-blue-600 focus:ring-2 focus:ring-blue-500 border-slate-300 dark:border-slate-600"
                        />
                        <span className="ml-3 text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {option}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                    Monthly number of customers
                  </label>
                  <select
                    value={formData.monthlyCustomers}
                    onChange={(e) => handleInputChange("monthlyCustomers", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select range</option>
                    <option value="<50">&lt;50 customers</option>
                    <option value="50-200">50–200 customers</option>
                    <option value="200-1000">200–1000 customers</option>
                    <option value="1000+">1000+ customers</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm mb-3 text-slate-700 dark:text-slate-300">
                      Need follow-up management?
                    </label>
                    <div className="flex gap-4">
                      {["Yes", "No"].map((option) => (
                        <label key={option} className="flex items-center cursor-pointer group">
                          <input
                            type="radio"
                            name="needFollowUp"
                            value={option}
                            checked={formData.needFollowUp === option}
                            onChange={(e) => handleInputChange("needFollowUp", e.target.value)}
                            className="w-5 h-5 text-blue-600 focus:ring-2 focus:ring-blue-500 border-slate-300 dark:border-slate-600"
                          />
                          <span className="ml-3 text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {option}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm mb-3 text-slate-700 dark:text-slate-300">
                      Need automated quotations & invoices?
                    </label>
                    <div className="flex gap-4">
                      {["Yes", "No"].map((option) => (
                        <label key={option} className="flex items-center cursor-pointer group">
                          <input
                            type="radio"
                            name="needAutomation"
                            value={option}
                            checked={formData.needAutomation === option}
                            onChange={(e) => handleInputChange("needAutomation", e.target.value)}
                            className="w-5 h-5 text-blue-600 focus:ring-2 focus:ring-blue-500 border-slate-300 dark:border-slate-600"
                          />
                          <span className="ml-3 text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {option}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Human Resources */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-2xl text-slate-900 dark:text-white">Human Resources</h3>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm mb-3 text-slate-700 dark:text-slate-300">
                      Need attendance tracking?
                    </label>
                    <div className="flex gap-4">
                      {["Yes", "No"].map((option) => (
                        <label key={option} className="flex items-center cursor-pointer group">
                          <input
                            type="radio"
                            name="needAttendance"
                            value={option}
                            checked={formData.needAttendance === option}
                            onChange={(e) => handleInputChange("needAttendance", e.target.value)}
                            className="w-5 h-5 text-blue-600 focus:ring-2 focus:ring-blue-500 border-slate-300 dark:border-slate-600"
                          />
                          <span className="ml-3 text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {option}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm mb-3 text-slate-700 dark:text-slate-300">
                      Need performance evaluation tracking?
                    </label>
                    <div className="flex gap-4">
                      {["Yes", "No"].map((option) => (
                        <label key={option} className="flex items-center cursor-pointer group">
                          <input
                            type="radio"
                            name="needPerformance"
                            value={option}
                            checked={formData.needPerformance === option}
                            onChange={(e) => handleInputChange("needPerformance", e.target.value)}
                            className="w-5 h-5 text-blue-600 focus:ring-2 focus:ring-blue-500 border-slate-300 dark:border-slate-600"
                          />
                          <span className="ml-3 text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {option}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-3 text-slate-700 dark:text-slate-300">
                    Do you have a payroll system?
                  </label>
                  <div className="space-y-3">
                    {["Yes", "No", "We want one"].map((option) => (
                      <label key={option} className="flex items-center cursor-pointer group">
                        <input
                          type="radio"
                          name="hasPayroll"
                          value={option}
                          checked={formData.hasPayroll === option}
                          onChange={(e) => handleInputChange("hasPayroll", e.target.value)}
                          className="w-5 h-5 text-blue-600 focus:ring-2 focus:ring-blue-500 border-slate-300 dark:border-slate-600"
                        />
                        <span className="ml-3 text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {option}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Inventory & Warehousing */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white">
                  <Package className="w-5 h-5" />
                </div>
                <h3 className="text-2xl text-slate-900 dark:text-white">Inventory & Warehousing</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm mb-3 text-slate-700 dark:text-slate-300">
                    Do you have physical stock?
                  </label>
                  <div className="flex gap-4">
                    {["Yes", "No"].map((option) => (
                      <label key={option} className="flex items-center cursor-pointer group">
                        <input
                          type="radio"
                          name="hasPhysicalStock"
                          value={option}
                          checked={formData.hasPhysicalStock === option}
                          onChange={(e) => handleInputChange("hasPhysicalStock", e.target.value)}
                          className="w-5 h-5 text-blue-600 focus:ring-2 focus:ring-blue-500 border-slate-300 dark:border-slate-600"
                        />
                        <span className="ml-3 text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {option}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                    Number of SKUs/products
                  </label>
                  <select
                    value={formData.numProducts}
                    onChange={(e) => handleInputChange("numProducts", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select range</option>
                    <option value="<50">&lt;50 products</option>
                    <option value="50-300">50–300 products</option>
                    <option value="300-1000">300–1000 products</option>
                    <option value="1000+">1000+ products</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm mb-3 text-slate-700 dark:text-slate-300">
                      Need real-time quantity tracking?
                    </label>
                    <div className="flex gap-4">
                      {["Yes", "No"].map((option) => (
                        <label key={option} className="flex items-center cursor-pointer group">
                          <input
                            type="radio"
                            name="needRealTimeTracking"
                            value={option}
                            checked={formData.needRealTimeTracking === option}
                            onChange={(e) =>
                              handleInputChange("needRealTimeTracking", e.target.value)
                            }
                            className="w-5 h-5 text-blue-600 focus:ring-2 focus:ring-blue-500 border-slate-300 dark:border-slate-600"
                          />
                          <span className="ml-3 text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {option}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm mb-3 text-slate-700 dark:text-slate-300">
                      Do you work with multiple suppliers?
                    </label>
                    <div className="flex gap-4">
                      {["Yes", "No"].map((option) => (
                        <label key={option} className="flex items-center cursor-pointer group">
                          <input
                            type="radio"
                            name="multipleSuppliers"
                            value={option}
                            checked={formData.multipleSuppliers === option}
                            onChange={(e) => handleInputChange("multipleSuppliers", e.target.value)}
                            className="w-5 h-5 text-blue-600 focus:ring-2 focus:ring-blue-500 border-slate-300 dark:border-slate-600"
                          />
                          <span className="ml-3 text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {option}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-3 text-slate-700 dark:text-slate-300">
                    Need internal warehouse tracking?
                  </label>
                  <div className="flex gap-4">
                    {["Yes", "No"].map((option) => (
                      <label key={option} className="flex items-center cursor-pointer group">
                        <input
                          type="radio"
                          name="needWarehouseTracking"
                          value={option}
                          checked={formData.needWarehouseTracking === option}
                          onChange={(e) =>
                            handleInputChange("needWarehouseTracking", e.target.value)
                          }
                          className="w-5 h-5 text-blue-600 focus:ring-2 focus:ring-blue-500 border-slate-300 dark:border-slate-600"
                        />
                        <span className="ml-3 text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {option}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 5. Supply Chain & Logistics */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center text-white">
                  <Truck className="w-5 h-5" />
                </div>
                <h3 className="text-2xl text-slate-900 dark:text-white">
                  Supply Chain & Logistics
                </h3>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm mb-3 text-slate-700 dark:text-slate-300">
                      Do you handle shipping/logistics?
                    </label>
                    <div className="flex gap-4">
                      {["Yes", "No"].map((option) => (
                        <label key={option} className="flex items-center cursor-pointer group">
                          <input
                            type="radio"
                            name="handleShipping"
                            value={option}
                            checked={formData.handleShipping === option}
                            onChange={(e) => handleInputChange("handleShipping", e.target.value)}
                            className="w-5 h-5 text-blue-600 focus:ring-2 focus:ring-blue-500 border-slate-300 dark:border-slate-600"
                          />
                          <span className="ml-3 text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {option}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm mb-3 text-slate-700 dark:text-slate-300">
                      Need integration with delivery companies?
                    </label>
                    <div className="flex gap-4">
                      {["Yes", "No"].map((option) => (
                        <label key={option} className="flex items-center cursor-pointer group">
                          <input
                            type="radio"
                            name="needDeliveryIntegration"
                            value={option}
                            checked={formData.needDeliveryIntegration === option}
                            onChange={(e) =>
                              handleInputChange("needDeliveryIntegration", e.target.value)
                            }
                            className="w-5 h-5 text-blue-600 focus:ring-2 focus:ring-blue-500 border-slate-300 dark:border-slate-600"
                          />
                          <span className="ml-3 text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {option}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-3 text-slate-700 dark:text-slate-300">
                    Need shipment tracking?
                  </label>
                  <div className="flex gap-4">
                    {["Yes", "No"].map((option) => (
                      <label key={option} className="flex items-center cursor-pointer group">
                        <input
                          type="radio"
                          name="needShipmentTracking"
                          value={option}
                          checked={formData.needShipmentTracking === option}
                          onChange={(e) =>
                            handleInputChange("needShipmentTracking", e.target.value)
                          }
                          className="w-5 h-5 text-blue-600 focus:ring-2 focus:ring-blue-500 border-slate-300 dark:border-slate-600"
                        />
                        <span className="ml-3 text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {option}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 6. Manufacturing */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white">
                  <Factory className="w-5 h-5" />
                </div>
                <h3 className="text-2xl text-slate-900 dark:text-white">Manufacturing</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm mb-3 text-slate-700 dark:text-slate-300">
                    Do you have manufacturing operations?
                  </label>
                  <div className="flex gap-4">
                    {["Yes", "No"].map((option) => (
                      <label key={option} className="flex items-center cursor-pointer group">
                        <input
                          type="radio"
                          name="hasManufacturing"
                          value={option}
                          checked={formData.hasManufacturing === option}
                          onChange={(e) => handleInputChange("hasManufacturing", e.target.value)}
                          className="w-5 h-5 text-blue-600 focus:ring-2 focus:ring-blue-500 border-slate-300 dark:border-slate-600"
                        />
                        <span className="ml-3 text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {option}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm mb-3 text-slate-700 dark:text-slate-300">
                      Need BOM (Bill of Materials)?
                    </label>
                    <div className="flex gap-4">
                      {["Yes", "No"].map((option) => (
                        <label key={option} className="flex items-center cursor-pointer group">
                          <input
                            type="radio"
                            name="needBOM"
                            value={option}
                            checked={formData.needBOM === option}
                            onChange={(e) => handleInputChange("needBOM", e.target.value)}
                            className="w-5 h-5 text-blue-600 focus:ring-2 focus:ring-blue-500 border-slate-300 dark:border-slate-600"
                          />
                          <span className="ml-3 text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {option}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm mb-3 text-slate-700 dark:text-slate-300">
                      Multiple production lines?
                    </label>
                    <div className="flex gap-4">
                      {["Yes", "No"].map((option) => (
                        <label key={option} className="flex items-center cursor-pointer group">
                          <input
                            type="radio"
                            name="multipleProductionLines"
                            value={option}
                            checked={formData.multipleProductionLines === option}
                            onChange={(e) =>
                              handleInputChange("multipleProductionLines", e.target.value)
                            }
                            className="w-5 h-5 text-blue-600 focus:ring-2 focus:ring-blue-500 border-slate-300 dark:border-slate-600"
                          />
                          <span className="ml-3 text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {option}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-3 text-slate-700 dark:text-slate-300">
                    Need quality tracking?
                  </label>
                  <div className="flex gap-4">
                    {["Yes", "No"].map((option) => (
                      <label key={option} className="flex items-center cursor-pointer group">
                        <input
                          type="radio"
                          name="needQualityTracking"
                          value={option}
                          checked={formData.needQualityTracking === option}
                          onChange={(e) => handleInputChange("needQualityTracking", e.target.value)}
                          className="w-5 h-5 text-blue-600 focus:ring-2 focus:ring-blue-500 border-slate-300 dark:border-slate-600"
                        />
                        <span className="ml-3 text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {option}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 7. Project Management */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center text-white">
                  <FolderKanban className="w-5 h-5" />
                </div>
                <h3 className="text-2xl text-slate-900 dark:text-white">Project Management</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm mb-3 text-slate-700 dark:text-slate-300">
                    Do you manage external or internal projects?
                  </label>
                  <div className="flex gap-4">
                    {["Yes", "No"].map((option) => (
                      <label key={option} className="flex items-center cursor-pointer group">
                        <input
                          type="radio"
                          name="manageProjects"
                          value={option}
                          checked={formData.manageProjects === option}
                          onChange={(e) => handleInputChange("manageProjects", e.target.value)}
                          className="w-5 h-5 text-blue-600 focus:ring-2 focus:ring-blue-500 border-slate-300 dark:border-slate-600"
                        />
                        <span className="ml-3 text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {option}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-3 text-slate-700 dark:text-slate-300">
                    Need task time & cost tracking?
                  </label>
                  <div className="flex gap-4">
                    {["Yes", "No"].map((option) => (
                      <label key={option} className="flex items-center cursor-pointer group">
                        <input
                          type="radio"
                          name="needTaskTracking"
                          value={option}
                          checked={formData.needTaskTracking === option}
                          onChange={(e) => handleInputChange("needTaskTracking", e.target.value)}
                          className="w-5 h-5 text-blue-600 focus:ring-2 focus:ring-blue-500 border-slate-300 dark:border-slate-600"
                        />
                        <span className="ml-3 text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {option}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 8. Accounting & Finance */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center text-white">
                  <Calculator className="w-5 h-5" />
                </div>
                <h3 className="text-2xl text-slate-900 dark:text-white">Accounting & Finance</h3>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm mb-3 text-slate-700 dark:text-slate-300">
                      Do you have an internal accountant?
                    </label>
                    <div className="flex gap-4">
                      {["Yes", "No"].map((option) => (
                        <label key={option} className="flex items-center cursor-pointer group">
                          <input
                            type="radio"
                            name="hasAccountant"
                            value={option}
                            checked={formData.hasAccountant === option}
                            onChange={(e) => handleInputChange("hasAccountant", e.target.value)}
                            className="w-5 h-5 text-blue-600 focus:ring-2 focus:ring-blue-500 border-slate-300 dark:border-slate-600"
                          />
                          <span className="ml-3 text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {option}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm mb-3 text-slate-700 dark:text-slate-300">
                      Need expenses & invoicing system?
                    </label>
                    <div className="flex gap-4">
                      {["Yes", "No"].map((option) => (
                        <label key={option} className="flex items-center cursor-pointer group">
                          <input
                            type="radio"
                            name="needExpenseSystem"
                            value={option}
                            checked={formData.needExpenseSystem === option}
                            onChange={(e) => handleInputChange("needExpenseSystem", e.target.value)}
                            className="w-5 h-5 text-blue-600 focus:ring-2 focus:ring-blue-500 border-slate-300 dark:border-slate-600"
                          />
                          <span className="ml-3 text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {option}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-3 text-slate-700 dark:text-slate-300">
                    Need monthly or real-time financial reports?
                  </label>
                  <div className="flex gap-4">
                    {["Yes", "No"].map((option) => (
                      <label key={option} className="flex items-center cursor-pointer group">
                        <input
                          type="radio"
                          name="needFinancialReports"
                          value={option}
                          checked={formData.needFinancialReports === option}
                          onChange={(e) =>
                            handleInputChange("needFinancialReports", e.target.value)
                          }
                          className="w-5 h-5 text-blue-600 focus:ring-2 focus:ring-blue-500 border-slate-300 dark:border-slate-600"
                        />
                        <span className="ml-3 text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {option}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 9. Reporting & Business Intelligence */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-white">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <h3 className="text-2xl text-slate-900 dark:text-white">
                  Reporting & Business Intelligence
                </h3>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm mb-3 text-slate-700 dark:text-slate-300">
                      Need live dashboard analytics?
                    </label>
                    <div className="flex gap-4">
                      {["Yes", "No"].map((option) => (
                        <label key={option} className="flex items-center cursor-pointer group">
                          <input
                            type="radio"
                            name="needDashboard"
                            value={option}
                            checked={formData.needDashboard === option}
                            onChange={(e) => handleInputChange("needDashboard", e.target.value)}
                            className="w-5 h-5 text-blue-600 focus:ring-2 focus:ring-blue-500 border-slate-300 dark:border-slate-600"
                          />
                          <span className="ml-3 text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {option}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm mb-3 text-slate-700 dark:text-slate-300">
                      Need automatic alerts or notifications?
                    </label>
                    <div className="flex gap-4">
                      {["Yes", "No"].map((option) => (
                        <label key={option} className="flex items-center cursor-pointer group">
                          <input
                            type="radio"
                            name="needAlerts"
                            value={option}
                            checked={formData.needAlerts === option}
                            onChange={(e) => handleInputChange("needAlerts", e.target.value)}
                            className="w-5 h-5 text-blue-600 focus:ring-2 focus:ring-blue-500 border-slate-300 dark:border-slate-600"
                          />
                          <span className="ml-3 text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {option}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 10. Financial Capacity */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-white">
                  <DollarSign className="w-5 h-5" />
                </div>
                <h3 className="text-2xl text-slate-900 dark:text-white">Financial Capacity</h3>
              </div>

              <div>
                <label className="block text-sm mb-3 text-slate-700 dark:text-slate-300">
                  Annual gross revenue
                </label>
                <div className="space-y-3">
                  {["< $10-50K", "$50-200K", "$200-900K", "$1-10M", "$10–100M", "$100M+"].map(
                    (option) => (
                      <label key={option} className="flex items-center cursor-pointer group">
                        <input
                          type="radio"
                          name="annualRevenue"
                          value={option}
                          checked={formData.annualRevenue === option}
                          onChange={(e) => handleInputChange("annualRevenue", e.target.value)}
                          className="w-5 h-5 text-blue-600 focus:ring-2 focus:ring-blue-500 border-slate-300 dark:border-slate-600"
                        />
                        <span className="ml-3 text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {option}
                        </span>
                      </label>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* 11. Contact Information */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center text-white">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-2xl text-slate-900 dark:text-white">Contact Information</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                    Contact Person Name *
                  </label>
                  <input
                    type="text"
                    value={formData.contactName}
                    onChange={(e) => handleInputChange("contactName", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Full name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-8">
              <button
                onClick={handleSubmitAssessment}
                className="px-12 py-4 bg-gradient-to-r from-[#0D6EFF] to-cyan-500 text-white rounded-2xl text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3"
              >
                <span>Generate My ERP Analysis</span>
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default ERPPage;
