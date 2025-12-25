import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Shield,
  AlertTriangle,
  CheckCircle2,
  X,
  Loader2,
} from "lucide-react";
import { useTheme } from "./ThemeContext";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes";

interface AssessmentData {
  country: string;
  industry: string;
  systemType: string;
  networkArch: string[];
  itEngineers: string;
  secEngineers: string;
  securitySystems: string[];
  dbAccess: string;
  securityPolicies: string;
  training: string;
}

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Angola",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahrain",
  "Bangladesh",
  "Belarus",
  "Belgium",
  "Benin",
  "Bhutan",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Croatia",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Egypt",
  "Equatorial Guinea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Guinea",
  "Guinea-Bissau",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Ivory Coast",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nigeria",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Papua New Guinea",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Samoa",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zimbabwe",
];

const industries = [
  "Finance",
  "Banking",
  "Healthcare",
  "Technology",
  "E-commerce",
  "Energy",
  "Education",
  "Government",
  "Telecommunications",
  "Transportation",
  "Manufacturing",
  "Retail",
  "Insurance",
  "Real Estate",
  "Legal Services",
  "Consulting",
  "Media & Entertainment",
  "Hospitality",
  "Agriculture",
  "Construction",
];

const systemTypes = [
  "Cloud-based",
  "On-premise servers",
  "Hybrid systems",
  "SaaS platforms",
  "ERP / CRM systems",
];

const networkArchitectures = [
  "Local LAN",
  "Corporate WAN",
  "Cloud Network",
  "Hybrid Network",
  "Zero-Trust Architecture",
  "SD-WAN",
];

const engineerCounts = ["0", "1", "2", "3", "4", "5", "+6 Engineers"];

const securitySystems = [
  "Firewall",
  "IDS / IPS",
  "SIEM",
  "Endpoint Protection",
  "DLP",
  "MFA",
  "VPN",
  "WAF",
  "Access Management",
  "No security systems",
];

const policyOptions = ["Yes", "No", "Partially"];

const trainingOptions = ["Monthly", "Quarterly", "Annually", "Never"];

interface SecurityAssessmentProps {
  autoExpand?: boolean;
}

export function SecurityAssessment({
  autoExpand = false,
}: SecurityAssessmentProps = {}) {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(autoExpand);
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");
  const [showResults, setShowResults] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const [formData, setFormData] = useState<AssessmentData>({
    country: "",
    industry: "",
    systemType: "",
    networkArch: [],
    itEngineers: "",
    secEngineers: "",
    securitySystems: [],
    dbAccess: "",
    securityPolicies: "",
    training: "",
  });

  const [industryInput, setIndustryInput] = useState("");
  const [showIndustrySuggestions, setShowIndustrySuggestions] = useState(false);

  const filteredIndustries = industries.filter((ind) =>
    ind.toLowerCase().includes(industryInput.toLowerCase())
  );

  // Hide header when modal is open
  useEffect(() => {
    const header = document.querySelector("header");
    const partnerBanner = document.getElementById("partner-banner");
    const nationalRecognitionBanner = document.getElementById("national-recognition-banner");

    if (isAnalyzing || showResults) {
      if (header) {
        header.style.display = "none";
      }
      if (partnerBanner) {
        partnerBanner.style.display = "none";
      }
      if (nationalRecognitionBanner) {
        nationalRecognitionBanner.style.display = "none";
      }
      document.body.style.overflow = "hidden";
    } else {
      if (header) {
        header.style.display = "";
      }
      if (partnerBanner) {
        partnerBanner.style.display = "";
      }
      if (nationalRecognitionBanner) {
        nationalRecognitionBanner.style.display = "";
      }
      document.body.style.overflow = "";
    }

    return () => {
      const header = document.querySelector("header");
      const partnerBanner = document.getElementById("partner-banner");
      const nationalRecognitionBanner = document.getElementById("national-recognition-banner");
      if (header) {
        header.style.display = "";
      }
      if (partnerBanner) {
        partnerBanner.style.display = "";
      }
      if (nationalRecognitionBanner) {
        nationalRecognitionBanner.style.display = "";
      }
      document.body.style.overflow = "";
    };
  }, [isAnalyzing, showResults]);

  const handleNext = () => {
    setDirection("forward");
    setCurrentStep((prev) => Math.min(prev + 1, 10));
  };

  const handlePrevious = () => {
    setDirection("backward");
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    }, 4000);
  };

  const calculateScore = () => {
    let score = 50;

    if (
      formData.securitySystems &&
      formData.securitySystems.length > 0 &&
      formData.securitySystems[0] !== "No security systems"
    )
      score += 10;
    if (formData.securityPolicies === "Yes") score += 10;
    if (formData.training === "Monthly" || formData.training === "Quarterly") score += 10;
    if (formData.networkArch.includes("Zero-Trust Architecture")) score += 5;
    if (parseInt(formData.secEngineers) >= 3 || formData.secEngineers === "+6 Engineers")
      score += 5;

    if (
      formData.securitySystems &&
      formData.securitySystems.length > 0 &&
      formData.securitySystems[0] === "No security systems"
    )
      score -= 20;
    if (formData.securityPolicies === "No") score -= 15;
    if (formData.training === "Never") score -= 10;
    if (parseInt(formData.dbAccess) > 50) score -= 5;

    return Math.max(0, Math.min(100, score));
  };

  const score = calculateScore();
  const getScoreColor = (score: number) => {
    if (score >= 80) return "#00ff88";
    if (score >= 60) return "#ffaa00";
    return "#ff4444";
  };

  const getScoreLabel = (score: number) => {
    if (score >= 80) return "Strong";
    if (score >= 60) return "Moderate";
    return "Weak";
  };

  const slideVariants = {
    enter: (direction: string) => ({
      x: direction === "forward" ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: string) => ({
      x: direction === "forward" ? -100 : 100,
      opacity: 0,
    }),
  };

  const renderStep = () => {
    const cardStyle = {
      backgroundColor: "#121212",
      borderRadius: "20px",
      padding: "32px",
      boxShadow: "0 0 20px rgba(62, 166, 255, 0.15), 0 8px 30px rgba(0,0,0,0.45)",
      border: "1px solid rgba(62, 166, 255, 0.1)",
    };

    const inputStyle =
      "w-full bg-[#0E0E0E] border border-white/10 rounded-xl px-5 py-3.5 text-white focus:outline-none focus:border-[#3EA6FF] focus:shadow-[0_0_15px_rgba(62,166,255,0.3)] transition-all duration-300";

    switch (currentStep) {
      case 0:
        return (
          <div style={cardStyle} className="max-w-xl mx-auto">
            <h3 className="text-2xl md:text-3xl mb-2" style={{ color: "#3EA6FF" }}>
              Country of Operation
            </h3>
            <p className="text-white/60 mb-6">
              Select the primary country where your company operates
            </p>
            <select
              value={formData.country}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
              className={inputStyle}
            >
              <option value="" className="bg-[#0E0E0E]">
                Select country
              </option>
              {countries.map((country) => (
                <option key={country} value={country} className="bg-[#0E0E0E]">
                  {country}
                </option>
              ))}
            </select>
          </div>
        );

      case 1:
        return (
          <div style={cardStyle} className="max-w-xl mx-auto">
            <h3 className="text-2xl md:text-3xl mb-2" style={{ color: "#3EA6FF" }}>
              Company Industry
            </h3>
            <p className="text-white/60 mb-6">What industry does your company operate in?</p>
            <div className="relative">
              <input
                type="text"
                value={industryInput}
                onChange={(e) => {
                  setIndustryInput(e.target.value);
                  setFormData({ ...formData, industry: e.target.value });
                  setShowIndustrySuggestions(true);
                }}
                onFocus={() => setShowIndustrySuggestions(true)}
                placeholder="Type to search industries..."
                className={inputStyle}
              />
              {showIndustrySuggestions && filteredIndustries.length > 0 && industryInput && (
                <div className="absolute top-full mt-2 w-full bg-[#0E0E0E] border border-[#3EA6FF]/30 rounded-xl max-h-60 overflow-y-auto z-50 shadow-2xl">
                  {filteredIndustries.map((ind) => (
                    <div
                      key={ind}
                      onClick={() => {
                        setIndustryInput(ind);
                        setFormData({ ...formData, industry: ind });
                        setShowIndustrySuggestions(false);
                      }}
                      className="px-5 py-3 text-white hover:bg-[#3EA6FF]/20 cursor-pointer transition-colors border-b border-white/5 last:border-0"
                    >
                      {ind}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        );

      case 2:
        return (
          <div style={cardStyle} className="max-w-xl mx-auto">
            <h3 className="text-2xl md:text-3xl mb-2" style={{ color: "#3EA6FF" }}>
              Digital Systems Used
            </h3>
            <p className="text-white/60 mb-6">
              What type of digital systems does your company use?
            </p>
            <select
              value={formData.systemType}
              onChange={(e) => setFormData({ ...formData, systemType: e.target.value })}
              className={inputStyle}
            >
              <option value="" className="bg-[#0E0E0E]">
                Select system type
              </option>
              {systemTypes.map((type) => (
                <option key={type} value={type} className="bg-[#0E0E0E]">
                  {type}
                </option>
              ))}
            </select>
          </div>
        );

      case 3:
        return (
          <div style={cardStyle} className="max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl mb-2" style={{ color: "#3EA6FF" }}>
              Network Architecture
            </h3>
            <p className="text-white/60 mb-6 text-sm md:text-base">
              Select all network architectures your company uses (multiple selections allowed)
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {networkArchitectures.map((arch) => {
                const isChecked = formData.networkArch.includes(arch);
                return (
                  <label
                    key={arch}
                    className="relative flex items-center gap-3 p-4 bg-[#0E0E0E] border border-white/10 rounded-xl cursor-pointer hover:border-[#3EA6FF]/50 hover:bg-[#0E0E0E]/80 transition-all duration-300 group"
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setFormData({
                            ...formData,
                            networkArch: [...formData.networkArch, arch],
                          });
                        } else {
                          setFormData({
                            ...formData,
                            networkArch: formData.networkArch.filter((a) => a !== arch),
                          });
                        }
                      }}
                      className="sr-only"
                    />
                    {/* Custom Checkbox */}
                    <div
                      className={`relative flex-shrink-0 w-6 h-6 rounded-lg border-2 transition-all duration-300 ${isChecked
                          ? "bg-gradient-to-br from-[#3EA6FF] to-[#0D6EFF] border-[#3EA6FF] shadow-[0_0_12px_rgba(62,166,255,0.5)]"
                          : "bg-[#1a1a1a] border-white/20 group-hover:border-[#3EA6FF]/50"
                        }`}
                    >
                      {isChecked && (
                        <motion.svg
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute inset-0 w-full h-full p-1"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </motion.svg>
                      )}
                    </div>
                    <span
                      className={`text-sm md:text-base transition-colors duration-300 ${isChecked
                          ? "text-white font-medium"
                          : "text-white/90 group-hover:text-[#3EA6FF]"
                        }`}
                    >
                      {arch}
                    </span>
                  </label>
                );
              })}
            </div>
            {formData.networkArch.length > 0 && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-[#3EA6FF] text-sm flex items-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4" />
                {formData.networkArch.length} architecture
                {formData.networkArch.length > 1 ? "s" : ""} selected
              </motion.p>
            )}
          </div>
        );

      case 4:
        return (
          <div style={cardStyle} className="max-w-xl mx-auto">
            <h3 className="text-2xl md:text-3xl mb-2" style={{ color: "#3EA6FF" }}>
              Number of IT Engineers
            </h3>
            <p className="text-white/60 mb-6">How many IT engineers work in your company?</p>
            <select
              value={formData.itEngineers}
              onChange={(e) => setFormData({ ...formData, itEngineers: e.target.value })}
              className={inputStyle}
            >
              <option value="" className="bg-[#0E0E0E]">
                Select number
              </option>
              {engineerCounts.map((count) => (
                <option key={count} value={count} className="bg-[#0E0E0E]">
                  {count}
                </option>
              ))}
            </select>
          </div>
        );

      case 5:
        return (
          <div style={cardStyle} className="max-w-xl mx-auto">
            <h3 className="text-2xl md:text-3xl mb-2" style={{ color: "#3EA6FF" }}>
              Number of Cybersecurity Engineers
            </h3>
            <p className="text-white/60 mb-6">
              How many dedicated cybersecurity engineers do you have?
            </p>
            <select
              value={formData.secEngineers}
              onChange={(e) => setFormData({ ...formData, secEngineers: e.target.value })}
              className={inputStyle}
            >
              <option value="" className="bg-[#0E0E0E]">
                Select number
              </option>
              {engineerCounts.map((count) => (
                <option key={count} value={count} className="bg-[#0E0E0E]">
                  {count}
                </option>
              ))}
            </select>
          </div>
        );

      case 6:
        return (
          <div style={cardStyle} className="max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl mb-2" style={{ color: "#3EA6FF" }}>
              Security Systems Used
            </h3>
            <p className="text-white/60 mb-6 text-sm md:text-base">
              Select all security systems currently deployed (multiple selections allowed)
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[450px] overflow-y-auto pr-2">
              {securitySystems.map((sys) => {
                const isNoSecurity = sys === "No security systems";
                const hasNoSecurity = formData.securitySystems.includes("No security systems");
                const isDisabled =
                  (isNoSecurity && formData.securitySystems.length > 1 && !hasNoSecurity) ||
                  (!isNoSecurity && hasNoSecurity);
                const isChecked = formData.securitySystems.includes(sys);

                return (
                  <label
                    key={sys}
                    className={`relative flex items-center gap-3 p-4 bg-[#0E0E0E] border border-white/10 rounded-xl cursor-pointer hover:border-[#3EA6FF]/50 hover:bg-[#0E0E0E]/80 transition-all duration-300 group ${isDisabled ? "opacity-40 cursor-not-allowed hover:border-white/10" : ""}`}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      disabled={isDisabled}
                      onChange={(e) => {
                        if (isNoSecurity) {
                          setFormData({
                            ...formData,
                            securitySystems: e.target.checked ? [sys] : [],
                          });
                        } else {
                          if (e.target.checked) {
                            const newSystems = formData.securitySystems.filter(
                              (s) => s !== "No security systems"
                            );
                            setFormData({ ...formData, securitySystems: [...newSystems, sys] });
                          } else {
                            setFormData({
                              ...formData,
                              securitySystems: formData.securitySystems.filter((s) => s !== sys),
                            });
                          }
                        }
                      }}
                      className="sr-only"
                    />
                    {/* Custom Checkbox */}
                    <div
                      className={`relative flex-shrink-0 w-6 h-6 rounded-lg border-2 transition-all duration-300 ${isChecked
                          ? "bg-gradient-to-br from-[#3EA6FF] to-[#0D6EFF] border-[#3EA6FF] shadow-[0_0_12px_rgba(62,166,255,0.5)]"
                          : "bg-[#1a1a1a] border-white/20 group-hover:border-[#3EA6FF]/50"
                        } ${isDisabled ? "opacity-40" : ""}`}
                    >
                      {isChecked && (
                        <motion.svg
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute inset-0 w-full h-full p-1"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </motion.svg>
                      )}
                    </div>
                    <span
                      className={`text-sm md:text-base transition-colors duration-300 ${isChecked
                          ? "text-white font-medium"
                          : "text-white/90 group-hover:text-[#3EA6FF]"
                        }`}
                    >
                      {sys}
                    </span>
                  </label>
                );
              })}
            </div>
            {formData.securitySystems.length > 0 && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-[#3EA6FF] text-sm flex items-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4" />
                {formData.securitySystems.length} system
                {formData.securitySystems.length > 1 ? "s" : ""} selected
              </motion.p>
            )}
          </div>
        );

      case 7:
        return (
          <div style={cardStyle} className="max-w-xl mx-auto">
            <h3 className="text-2xl md:text-3xl mb-2" style={{ color: "#3EA6FF" }}>
              Database Access
            </h3>
            <p className="text-white/60 mb-6">How many people have access to your databases?</p>
            <input
              type="number"
              value={formData.dbAccess}
              onChange={(e) => setFormData({ ...formData, dbAccess: e.target.value })}
              placeholder="Enter number of people"
              className={inputStyle}
              min="0"
            />
          </div>
        );

      case 8:
        return (
          <div style={cardStyle} className="max-w-xl mx-auto">
            <h3 className="text-2xl md:text-3xl mb-2" style={{ color: "#3EA6FF" }}>
              Internal Security Policies
            </h3>
            <p className="text-white/60 mb-6">Does your company have internal security policies?</p>
            <select
              value={formData.securityPolicies}
              onChange={(e) => setFormData({ ...formData, securityPolicies: e.target.value })}
              className={inputStyle}
            >
              <option value="" className="bg-[#0E0E0E]">
                Select option
              </option>
              {policyOptions.map((opt) => (
                <option key={opt} value={opt} className="bg-[#0E0E0E]">
                  {opt}
                </option>
              ))}
            </select>
          </div>
        );

      case 9:
        return (
          <div style={cardStyle} className="max-w-xl mx-auto">
            <h3 className="text-2xl md:text-3xl mb-2" style={{ color: "#3EA6FF" }}>
              Cybersecurity Awareness Training
            </h3>
            <p className="text-white/60 mb-6">
              How often do employees receive cybersecurity training?
            </p>
            <select
              value={formData.training}
              onChange={(e) => setFormData({ ...formData, training: e.target.value })}
              className={inputStyle}
            >
              <option value="" className="bg-[#0E0E0E]">
                Select frequency
              </option>
              {trainingOptions.map((opt) => (
                <option key={opt} value={opt} className="bg-[#0E0E0E]">
                  {opt}
                </option>
              ))}
            </select>
          </div>
        );

      case 10:
        return (
          <div style={cardStyle} className="max-w-xl mx-auto text-center">
            <Shield
              className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4"
              style={{ color: "#3EA6FF" }}
            />
            <h3 className="text-2xl md:text-3xl mb-2" style={{ color: "#3EA6FF" }}>
              Ready to Analyze
            </h3>
            <p className="text-white/60 mb-8">
              We've gathered all the information. Click below to analyze your company's security
              posture.
            </p>
            <button
              onClick={handleAnalyze}
              className="w-full bg-gradient-to-r from-[#3EA6FF] to-[#0D6EFF] hover:from-[#3EA6FF]/90 hover:to-[#0D6EFF]/90 text-white px-8 py-4 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(62,166,255,0.4)] hover:shadow-[0_0_30px_rgba(62,166,255,0.6)]"
            >
              Analyze Security Status
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section
      className="relative py-16 md:py-20 overflow-hidden"
      style={{ backgroundColor: theme === "dark" ? "#1a1a1a" : "#ffffff" }}
    >
      {/* Background pattern */}
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
        {/* Main Heading */}
        <motion.div
          className={`text-center mb-12 ${!autoExpand ? "cursor-pointer group" : ""}`}
          onClick={!autoExpand ? () => setIsExpanded(!isExpanded) : undefined}
          whileHover={!autoExpand ? { scale: 1.02 } : undefined}
          whileTap={!autoExpand ? { scale: 0.98 } : undefined}
        >
          <div className="inline-flex items-center gap-4">
            {!autoExpand && <Shield className="w-10 h-10 md:w-12 md:h-12 text-[#3EA6FF]" />}
            <h2
              className={`text-2xl md:text-3xl lg:text-5xl text-black dark:text-white ${!autoExpand ? "group-hover:text-[#3EA6FF]" : ""} transition-colors duration-300`}
            >
              Evaluate your company's security posture now through this test.
            </h2>
            {!autoExpand && (
              <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
                <ChevronDown className="w-8 h-8 md:w-10 md:h-10 text-[#3EA6FF]" />
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Wizard */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              {/* Progress Indicator */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-white/60 text-lg">Step {currentStep + 1} of 11</span>
                  <span className="text-[#3EA6FF] text-lg">
                    {Math.round(((currentStep + 1) / 11) * 100)}%
                  </span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#3EA6FF] to-[#0D6EFF]"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentStep + 1) / 11) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              {/* Step Content */}
              <div className="relative mb-8">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentStep}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                  >
                    {renderStep()}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Buttons */}
              <div className="max-w-xl mx-auto flex gap-4">
                {currentStep > 0 && (
                  <button
                    onClick={handlePrevious}
                    className="flex items-center gap-2 px-6 py-3.5 bg-white/5 hover:bg-white/10 text-white/80 hover:text-white rounded-xl transition-all duration-300"
                  >
                    <ChevronLeft className="w-5 h-5" />
                    <span className="font-medium">Previous</span>
                  </button>
                )}

                {currentStep < 10 && (
                  <button
                    onClick={handleNext}
                    className="flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#3EA6FF] to-[#0D6EFF] hover:from-[#3EA6FF]/90 hover:to-[#0D6EFF]/90 text-white rounded-xl transition-all duration-300 ml-auto shadow-[0_0_20px_rgba(62,166,255,0.3)] hover:shadow-[0_0_30px_rgba(62,166,255,0.5)]"
                  >
                    <span className="font-medium">Next</span>
                    <ChevronRight className="w-5 h-5" />
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Loading Modal */}
        <AnimatePresence>
          {isAnalyzing && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-[9999] flex items-center justify-center"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                style={{
                  backgroundColor: "#121212",
                  borderRadius: "24px",
                  padding: "48px",
                  boxShadow: "0 0 30px rgba(62, 166, 255, 0.3), 0 8px 40px rgba(0,0,0,0.6)",
                  border: "1px solid rgba(62, 166, 255, 0.2)",
                }}
                className="max-w-md text-center"
              >
                <Loader2 className="w-20 h-20 text-[#3EA6FF] animate-spin mx-auto mb-8" />
                <h3 className="text-3xl text-white mb-3">Analyzing...</h3>
                <p className="text-white/60 text-lg">
                  Please wait while we analyze your company's security posture.
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Results Modal */}
        <AnimatePresence>
          {showResults && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-[9999] flex items-center justify-center p-4 overflow-y-auto"
              onClick={() => setShowResults(false)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()}
                style={{
                  backgroundColor: "#121212",
                  borderRadius: "20px",
                  padding: "24px",
                  boxShadow: "0 0 20px rgba(62, 166, 255, 0.2), 0 8px 30px rgba(0,0,0,0.5)",
                  border: "1px solid rgba(62, 166, 255, 0.2)",
                }}
                className="max-w-xl w-full relative my-8"
              >
                <button
                  onClick={() => setShowResults(false)}
                  className="absolute top-3 right-3 text-white/60 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <h2 className="text-2xl md:text-3xl text-white mb-6 text-center pr-8">
                  Security Report
                </h2>

                {/* Overall Score */}
                <div className="mb-6 text-center">
                  <div className="inline-block relative">
                    <svg className="w-32 h-32 md:w-36 md:h-36" viewBox="0 0 200 200">
                      <circle
                        cx="100"
                        cy="100"
                        r="85"
                        fill="none"
                        stroke="#1a1a1a"
                        strokeWidth="10"
                      />
                      <circle
                        cx="100"
                        cy="100"
                        r="85"
                        fill="none"
                        stroke={getScoreColor(score)}
                        strokeWidth="10"
                        strokeDasharray={`${(score / 100) * 534.07} 534.07`}
                        strokeLinecap="round"
                        transform="rotate(-90 100 100)"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="text-3xl md:text-4xl" style={{ color: getScoreColor(score) }}>
                        {score}
                      </div>
                      <div className="text-white/60 text-sm">/ 100</div>
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl text-white mt-3">
                    <span className="text-white/60">Security:</span>{" "}
                    <span style={{ color: getScoreColor(score) }}>{getScoreLabel(score)}</span>
                  </h3>
                </div>

                {/* Key Findings */}
                <div className="grid md:grid-cols-2 gap-3 mb-6">
                  {/* Strengths */}
                  <div className="bg-[#00ff88]/10 border border-[#00ff88]/30 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle2 className="w-5 h-5 text-[#00ff88]" />
                      <h4 className="text-white">Strengths</h4>
                    </div>
                    <ul className="space-y-1.5 text-white/80 text-xs">
                      {formData.securityPolicies === "Yes" && <li>• Security policies in place</li>}
                      {(formData.training === "Monthly" || formData.training === "Quarterly") && (
                        <li>• Regular employee training</li>
                      )}
                      {formData.networkArch.includes("Zero-Trust Architecture") && (
                        <li>• Modern network architecture</li>
                      )}
                      {formData.securitySystems &&
                        formData.securitySystems.length > 0 &&
                        formData.securitySystems[0] !== "No security systems" && (
                          <li>• Active security systems</li>
                        )}
                      {(!formData.securityPolicies || formData.securityPolicies === "No") &&
                        (!formData.training || formData.training === "Never") && (
                          <li>• Basic infrastructure present</li>
                        )}
                    </ul>
                  </div>

                  {/* Weaknesses */}
                  <div className="bg-[#ff4444]/10 border border-[#ff4444]/30 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <AlertTriangle className="w-5 h-5 text-[#ff4444]" />
                      <h4 className="text-white">Risks</h4>
                    </div>
                    <ul className="space-y-1.5 text-white/80 text-xs">
                      {formData.securitySystems &&
                        formData.securitySystems.length > 0 &&
                        formData.securitySystems[0] === "No security systems" && (
                          <li>• No security systems</li>
                        )}
                      {formData.securityPolicies === "No" && <li>• Missing security policies</li>}
                      {formData.training === "Never" && <li>• No training program</li>}
                      {parseInt(formData.dbAccess) > 50 && <li>• High database access count</li>}
                      {(!formData.secEngineers || parseInt(formData.secEngineers) < 2) && (
                        <li>• Limited security personnel</li>
                      )}
                      {formData.securitySystems &&
                        formData.securitySystems.length > 0 &&
                        formData.securitySystems[0] !== "No security systems" &&
                        formData.securityPolicies !== "No" &&
                        formData.training !== "Never" && <li>• Room for optimization</li>}
                    </ul>
                  </div>
                </div>

                {/* Recommendations */}
                <div className="bg-[#3EA6FF]/10 border border-[#3EA6FF]/30 rounded-lg p-4 mb-6">
                  <h4 className="text-white mb-2.5">Recommendations</h4>
                  <ul className="space-y-1.5 text-white/80 text-xs">
                    <li>• Implement security framework (ISO 27001, NIST)</li>
                    <li>• Regular security audits & penetration testing</li>
                    <li>• Enhance employee awareness training</li>
                    <li>• Deploy threat detection systems (SIEM, EDR)</li>
                    <li>• Establish incident response plans</li>
                  </ul>
                </div>

                {/* CTA */}
                <div className="text-center">
                  <p className="text-white/70 mb-4 text-sm leading-relaxed">
                    For deeper insights, consult a cybersecurity expert to build a complete security
                    strategy.
                  </p>
                  <button
                    onClick={() => {
                      setShowResults(false);
                      navigate(ROUTES.CONTACT);
                    }}
                    className="w-full bg-gradient-to-r from-[#3EA6FF] to-[#0D6EFF] hover:from-[#3EA6FF]/90 hover:to-[#0D6EFF]/90 text-white px-8 py-3.5 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(62,166,255,0.4)] hover:shadow-[0_0_30px_rgba(62,166,255,0.6)] text-sm font-medium"
                  >
                    Contact Your Security Expert
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
