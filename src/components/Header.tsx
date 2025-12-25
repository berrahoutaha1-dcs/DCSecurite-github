import { Shield, Menu, X, Sun, Moon, ChevronDown, Search } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "./ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import dcSecuriteLogo from "../assets/de5ecd5c60c2167d3d7ff65d209cdb36f6ad1d1a.png";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../routes";
import { API_BASE_URL } from "../config";

interface HeaderProps {
  onUnderAttackClick?: () => void;
  showMainNav?: boolean;
  onSignInClick?: () => void;
  onCustomerLoginClick?: () => void;
  onAdminLoginClick?: () => void;
  onStudentMemberLoginClick?: () => void;
  onCustomerSignUpClick?: () => void;
  onStudentMemberSignUpClick?: () => void;
  onSignUpModalOpen?: () => void;
  isMainPage?: boolean; // New prop to force dark header on main page
  forceWhiteButtons?: boolean; // Force white button colors regardless of theme
  [key: string]: any;
}

export function Header({
  onUnderAttackClick,
  showMainNav = true,
  onSignInClick,
  onCustomerLoginClick,
  onAdminLoginClick,
  onStudentMemberLoginClick,
  onCustomerSignUpClick,
  onStudentMemberSignUpClick,
  onSignUpModalOpen,
  isMainPage = false,
  forceWhiteButtons = false,
}: HeaderProps) {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSecurityDropdownOpen, setIsSecurityDropdownOpen] = useState(false);
  const [isSolutionsDropdownOpen, setIsSolutionsDropdownOpen] = useState(false);
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSignInDropdownOpen, setIsSignInDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const { theme, toggleTheme } = useTheme();

  // Refs for click outside detection
  const signInRef = useRef<HTMLDivElement>(null);
  const languageRef = useRef<HTMLDivElement>(null);
  const securityRef = useRef<HTMLDivElement>(null);
  const securityDropdownRef = useRef<HTMLDivElement>(null);
  const solutionsRef = useRef<HTMLDivElement>(null);
  const solutionsDropdownRef = useRef<HTMLDivElement>(null);
  const companyRef = useRef<HTMLDivElement>(null);

  const companyDropdownRef = useRef<HTMLDivElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Function to close all dropdowns
  const closeAllDropdowns = () => {
    setIsSignInDropdownOpen(false);
    setIsLanguageDropdownOpen(false);
    setIsSecurityDropdownOpen(false);
    setIsSolutionsDropdownOpen(false);
    setIsCompanyDropdownOpen(false);
    setIsCompanyDropdownOpen(false);
    setIsSearchOpen(false);
    setSearchQuery("");
  };

  // Handle click outside dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if click is outside Sign In dropdown
      if (signInRef.current && !signInRef.current.contains(event.target as Node)) {
        setIsSignInDropdownOpen(false);
      }
      // Check if click is outside Language dropdown
      if (languageRef.current && !languageRef.current.contains(event.target as Node)) {
        setIsLanguageDropdownOpen(false);
      }
      // Check if click is outside Security button AND dropdown content
      const clickedOutsideButton =
        securityRef.current && !securityRef.current.contains(event.target as Node);
      const clickedOutsideDropdown =
        !securityDropdownRef.current || !securityDropdownRef.current.contains(event.target as Node);

      if (clickedOutsideButton && clickedOutsideDropdown) {
        setIsSecurityDropdownOpen(false);
      }

      // Check if click is outside Solutions button AND dropdown content
      const clickedOutsideSolutionsButton =
        solutionsRef.current && !solutionsRef.current.contains(event.target as Node);
      const clickedOutsideSolutionsDropdown =
        !solutionsDropdownRef.current ||
        !solutionsDropdownRef.current.contains(event.target as Node);

      if (clickedOutsideSolutionsButton && clickedOutsideSolutionsDropdown) {
        setIsSolutionsDropdownOpen(false);
      }

      // Check if click is outside Company button AND dropdown content
      const clickedOutsideCompanyButton =
        companyRef.current && !companyRef.current.contains(event.target as Node);
      const clickedOutsideCompanyDropdown =
        !companyDropdownRef.current || !companyDropdownRef.current.contains(event.target as Node);

      if (clickedOutsideCompanyButton && clickedOutsideCompanyDropdown) {
        setIsCompanyDropdownOpen(false);
      }

      // Check if click is outside Search content
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node) && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };

    // Add event listener when any dropdown is open
    if (
      isSignInDropdownOpen ||
      isLanguageDropdownOpen ||
      isSecurityDropdownOpen ||
      isSolutionsDropdownOpen ||
      isCompanyDropdownOpen
    ) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [
    isSignInDropdownOpen,
    isLanguageDropdownOpen,
    isSecurityDropdownOpen,
    isSolutionsDropdownOpen,
    isCompanyDropdownOpen,
  ]);

  // Handle scroll to hide/show header and update scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px
        setIsHeaderVisible(false);
      } else {
        // Scrolling up
        setIsHeaderVisible(true);
      }
      setLastScrollY(currentScrollY);

      // Calculate scroll progress percentage
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (currentScrollY / windowHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const [newsItems, setNewsItems] = useState<string[]>([
    "New AI-Powered Threat Detection System Launched",
    "DCSecurite Wins Cybersecurity Excellence Award 2024",
    "Latest DevOpSec Tools Now Available",
    "Global Security Conference - Join Us Next Month",
    "Zero-Day Vulnerability Protection Enhanced",
    "Enterprise Security Solutions Starting at 50% Off",
  ]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/news-ticker`);
        if (response.ok) {
          const data = await response.json();
          if (Array.isArray(data) && data.length > 0) {
            setNewsItems(data.map((item: any) => item.content));
          }
        }
      } catch (error) {
        console.error("Failed to fetch news ticker", error);
      }
    };

    fetchNews();
  }, []);

  const securityMenuData = {
    "Network Security": [
      { label: "Cloud Network Security", route: ROUTES.CLOUD_NETWORK_SECURITY },
      { label: "Intrusion Detection & Prevention (IDS/IPS)", route: ROUTES.IDS_IPS },
      { label: "Web & Phishing Security", route: ROUTES.WEB_PHISHING_SECURITY },
      { label: "Secure Work on Any Device", route: ROUTES.SECURE_WORK_DEVICE },
      { label: "OT & Industrial Network Protection", route: ROUTES.OT_SECURITY },
    ],
    "Cloud Security": [
      { label: "Cloud Security Posture Management (CSPM)", route: ROUTES.CSPM },
      { label: "Data Security Posture Management (DSPM)", route: ROUTES.DSPM },
      { label: "Application Security Posture Management (ASPM)", route: ROUTES.ASPM },
      { label: "Cloud Workload Protection (CWP)", route: ROUTES.CWP },
      { label: "Web Application & API Security (WAAS)", route: ROUTES.WAAS },
    ],
    "Security Operations": [
      { label: "Managed Detection & Response (MDR)", route: ROUTES.MDR },
      { label: "Cloud Detection & Response (CDR)", route: ROUTES.CDR },
      { label: "Attack Surface Management (ASM)", route: ROUTES.ASM },
      { label: "Security Information and Event Management (SIEM)", route: ROUTES.SIEM },
      { label: "SOC Automation", route: ROUTES.SOC_AUTOMATION },
    ],
    "Endpoint Security": [
      { label: "Endpoint Protection (EPP)", route: ROUTES.EPP },
      { label: "Extended Detection & Response (XDR)", route: ROUTES.XDR },
      { label: "Ransomware Protection", route: ROUTES.RANSOMWARE_PROTECTION },
      { label: "Device Security Hardening", route: ROUTES.DEVICE_SECURITY_HARDENING },
    ],
    "Penetration Testing & Zero-Day Detection": [
      { label: "Web Application Penetration Testing", route: ROUTES.WEB_APP_PEN_TEST },
      { label: "Mobile Application Penetration Testing", route: ROUTES.MOBILE_APP_PEN_TEST },
      { label: "Network Penetration Testing", route: ROUTES.NETWORK_PEN_TEST },
      { label: "Cloud Penetration Testing", route: ROUTES.CLOUD_PEN_TEST },
      { label: "API Security Testing", route: ROUTES.API_SECURITY_TESTING },
      { label: "Wireless Network Pentesting", route: ROUTES.WIRELESS_NETWORK_PEN_TEST },
      { label: "Red Team Assessments", route: ROUTES.RED_TEAM_ASSESSMENTS },
      {
        label: "Social Engineering Assessments (Phishing, Vishing)",
        route: ROUTES.SOCIAL_ENGINEERING,
      },
      { label: "Zero-Day Threat Detection", route: ROUTES.ZERO_DAY_DETECTION },
      { label: "Malware Analysis & Reverse Engineering", route: ROUTES.MALWARE_ANALYSIS },
      { label: "Vulnerability Research", route: ROUTES.VULNERABILITY_RESEARCH },
      { label: "Exploit Development (Ethical)", route: ROUTES.ETHICAL_EXPLOIT_DEVELOPMENT },
      {
        label: "Continuous Security Testing (DevSecOps)",
        route: ROUTES.CONTINUOUS_SECURITY_TESTING,
      },
    ],
    Industries: [
      { label: "Public Sector", route: ROUTES.PUBLIC_SECTOR },
      { label: "Financial Services", route: ROUTES.FINANCIAL_SERVICES },
      { label: "Healthcare", route: ROUTES.HEALTHCARE },
      { label: "Manufacturing", route: ROUTES.MANUFACTURING },
      { label: "Small & Medium Businesses", route: ROUTES.SMB },
    ],
  };

  const solutionsMenuData = {
    "ENTERPRISE SOLUTION": [
      { label: "Enterprise Resource Planning management", route: ROUTES.ERP_MANAGEMENT },
      { label: "Customer Relationship Management", route: ROUTES.CRM },
      { label: "Human Resources Management", route: ROUTES.HRM },
      { label: "Industrial Management", route: ROUTES.INDUSTRIAL },
      { label: "Construction Management", route: ROUTES.CONSTRUCTION },
    ],
    COMMERCE: [{ label: "Logisoft360", route: ROUTES.LOGISOFT360 }],
    PROGRAMATION: [
      { label: "Mobile Development", route: ROUTES.MOBILE_DEVELOPMENT },
      { label: "Web Development", route: ROUTES.WEB_DEVELOPMENT },
      { label: "UI/UX Design", route: ROUTES.UI_UX_DESIGN },
      { label: "Industries", route: ROUTES.INDUSTRIES },
      { label: "Estimate your project now !", route: ROUTES.ESTIMATE_PROJECT },
    ],
  };

  const companyMenuData = {
    DCSECURITE: [
      { label: "About us", route: ROUTES.ABOUT },
      { label: "Locations", route: ROUTES.LOCATIONS },
      { label: "Ethics & Compliance", route: ROUTES.ETHICS_COMPLIANCE },
      { label: "Corporate Responsibility", route: ROUTES.CORPORATE_RESPONSIBILITY },
      { label: "Colaboration & Donation", route: ROUTES.COLLABORATION_DONATION },
    ],
    "WHY DCSECURITE ?": [
      { label: "Precision AI Security", route: ROUTES.PRECISION_AI_SECURITY },
      {
        label: "Accelerate Your Cybersecurity Transformation",
        route: ROUTES.ACCELERATE_TRANSFORMATION,
      },
      { label: "Awards & Recognition", route: ROUTES.AWARDS_RECOGNITION },
      { label: "Customer Stories", route: ROUTES.CUSTOMER_STORIES },
      { label: "CTF Program", route: ROUTES.CTF_PROGRAM },
    ],
    CAREERS: [{ label: "Overview", route: ROUTES.CAREERS_OVERVIEW }],
  };

  const languages = [
    { code: "EN", name: "English" },
    { code: "ZH", name: "Chinese (Simplified)" },
    { code: "FR", name: "French" },
    { code: "DE", name: "German" },
    { code: "ES", name: "Spanish" },
    { code: "PT", name: "Portuguese" },
    { code: "AR", name: "Arabic" },
    { code: "JA", name: "Japanese" },
    { code: "KO", name: "Korean" },
    { code: "HI", name: "Hindi" },
    { code: "RU", name: "Russian" },
  ];

  // Search Index
  const searchIndex = [
    ...Object.values(securityMenuData).flat(),
    ...Object.values(solutionsMenuData).flat(),
    ...Object.values(companyMenuData).flat(),
    { label: "Home", route: ROUTES.HOME },
    { label: "Events", route: ROUTES.EVENTS },
    { label: "Industries", route: ROUTES.INDUSTRIES },
    { label: "Threat Map", route: ROUTES.THREAT_MAP },
    { label: "Security Test", route: ROUTES.SECURITY_TEST },
    { label: "Contact", route: ROUTES.CONTACT },
    { label: "News / Watch Us", route: ROUTES.WHATS_NEW },
    { label: "Eaglo AI", route: ROUTES.EAGLO_AI },
    { label: "Jobs at DCSecurite", route: ROUTES.JOBS },
    { label: "Competitions", route: ROUTES.COMPETITIONS },
    { label: "Our Team", route: ROUTES.TEAM },
    { label: "Privacy Policy", route: ROUTES.PRIVACY },
    { label: "Terms of Service", route: ROUTES.TERMS },
    { label: "Cookie Policy", route: ROUTES.COOKIES },
    { label: "Legal References", route: ROUTES.LEGAL_REFERENCES },
    { label: "Under Attack? Get Help", route: ROUTES.UNDER_ATTACK },
  ];

  const filteredResults = searchQuery
    ? searchIndex.filter((item) =>
      item.label.toLowerCase().includes(searchQuery.toLowerCase())
    )
    : [];

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
  }, [isSearchOpen]);

  // Helper function to get text color classes - Always force white for dark header integration
  const getTextClass = () => "text-white";
  const getHoverTextClass = () => "hover:text-cyan-300";
  const getTextHoverClass = () => "text-white hover:text-cyan-300";
  const getBorderClass = () => "border-white hover:border-cyan-300";
  const getUnderlineClass = () => "bg-white";
  const getBgHoverClass = () => "hover:bg-white/10";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${isHeaderVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      {/* Scroll Progress Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-transparent z-[60]">
        <motion.div
          className="h-full bg-gradient-to-r from-[#0D6EFF] via-cyan-400 to-[#0D6EFF] shadow-lg shadow-[#0D6EFF]/50"
          style={{ width: `${scrollProgress}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1, ease: "easeOut" }}
        />
      </div>

      {/* News Ticker */}
      <div className="bg-black text-white py-2 md:py-3 overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap">
          {/* Duplicate news items for seamless loop */}
          {[...newsItems, ...newsItems, ...newsItems].map((news, index) => (
            <span
              key={index}
              className="inline-flex items-center mx-4 md:mx-8 text-sm md:text-base"
              style={{
                fontFamily: "'Cairo', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(0.875rem, 2vw, 1.6rem)",
              }}
            >
              {news}
            </span>
          ))}
        </div>
      </div>

      {/* Secondary Utility Navigation */}
      <div className="bg-black/20 backdrop-blur-md relative transition-all duration-500 z-[150]">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <div className="container mx-auto px-4 md:px-6 py-2">
          <div className="flex items-center justify-between">
            {/* Left Side - Sign In, Language, Search */}
            <div className="flex items-center gap-2 md:gap-4 lg:gap-6 relative z-[150]">
              <div className="relative" ref={signInRef}>
                <button
                  onClick={() => {
                    closeAllDropdowns();
                    setIsSignInDropdownOpen(!isSignInDropdownOpen);
                  }}
                  className={`flex items-center gap-1 ${getTextHoverClass()} transition-colors text-xs md:text-sm font-bold`}
                >
                  Sign in
                  <ChevronDown className="w-3 h-3 md:w-4 md:h-4" />
                </button>

                {/* Sign In Dropdown */}
                {isSignInDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 bg-white dark:bg-[#0A0F1F] border-2 border-slate-300 dark:border-cyan-500/30 rounded-xl shadow-2xl z-[9999] min-w-[220px] py-2 backdrop-blur-sm">
                    <button
                      onClick={() => {
                        setIsSignInDropdownOpen(false);
                        onCustomerLoginClick && onCustomerLoginClick();
                      }}
                      className="w-full px-4 py-3 text-left text-sm text-slate-700 dark:text-slate-300 hover:bg-cyan-50 dark:hover:bg-cyan-900/20 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-medium"
                    >
                      <div>
                        <div className="font-semibold">Customer Login</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                          Access your services
                        </div>
                      </div>
                    </button>

                    <button
                      onClick={() => {
                        setIsSignInDropdownOpen(false);
                        onStudentMemberLoginClick && onStudentMemberLoginClick();
                      }}
                      className="w-full px-4 py-3 text-left text-sm text-slate-700 dark:text-slate-300 hover:bg-cyan-50 dark:hover:bg-cyan-900/20 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-medium"
                    >
                      <div>
                        <div className="font-semibold">Student Member Login</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                          Educational resources
                        </div>
                      </div>
                    </button>
                  </div>
                )}
              </div>
              <div className="relative" ref={languageRef}>
                <button
                  onClick={() => {
                    closeAllDropdowns();
                    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
                  }}
                  className={`flex items-center gap-1 ${getTextHoverClass()} transition-colors text-xs md:text-sm font-bold`}
                >
                  {selectedLanguage}
                  <ChevronDown className="w-3 h-3 md:w-4 md:h-4" />
                </button>

                {/* Language Dropdown */}
                {isLanguageDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 bg-white dark:bg-[#0A0F1F] border-2 border-slate-300 dark:border-cyan-500/30 rounded-xl shadow-2xl z-[9999] min-w-[200px] py-2 backdrop-blur-sm">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setSelectedLanguage(lang.code);
                          setIsLanguageDropdownOpen(false);
                        }}
                        className="w-full px-4 py-2 text-left text-sm text-slate-700 dark:text-slate-300 hover:bg-cyan-50 dark:hover:bg-cyan-900/20 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                      >
                        {lang.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Theme Toggle Button Removed for Public Site Enforced Dark Mode */}
              {/* <button
                onClick={toggleTheme}
                className="p-1 md:p-1.5 rounded-full bg-slate-200 dark:bg-white/20 hover:bg-slate-300 dark:hover:bg-white/30 border border-slate-300 dark:border-white/30 hover:border-slate-400 dark:hover:border-white/50 transition-all duration-300 group hover:shadow-lg"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-3.5 h-3.5 md:w-4 md:h-4 text-slate-700 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-200 transition-colors" />
                ) : (
                  <Moon className="w-3.5 h-3.5 md:w-4 md:h-4 text-slate-700 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-200 transition-colors" />
                )}
              </button> */}

              <button
                onClick={() => {
                  closeAllDropdowns();
                  setIsSearchOpen(!isSearchOpen);
                }}
                className={`${getTextHoverClass()} transition-colors`}
                aria-label="Search"
              >
                <Search className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>

            {/* Right Side - Utility Links */}
            <div className="flex items-center gap-2 md:gap-4 lg:gap-6">
              <Link
                to={ROUTES.WHATS_NEW}
                className={`${getTextHoverClass()} transition-colors text-xs md:text-sm font-bold`}
              >
                What's New
              </Link>

              {/* Animated Live Community Button */}
              <motion.button
                onClick={() => navigate(ROUTES.EAGLO_AI)}
                className="hidden sm:inline-flex items-center gap-2 relative overflow-hidden px-3 py-1.5 rounded-full text-xs md:text-sm font-bold text-white group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Animated green circle (live indicator) */}
                <motion.div
                  className="relative w-2 h-2 rounded-full bg-emerald-400 z-10"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [1, 0.7, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {/* Pulse ring effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-emerald-400"
                    animate={{
                      scale: [1, 2.5, 2.5],
                      opacity: [0.8, 0, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                  />
                </motion.div>

                {/* Button text */}
                <span className="relative z-10">Ask Eaglo for fast answer</span>

                {/* Shimmer effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{
                    x: "100%",
                    transition: { duration: 0.6, ease: "easeInOut" },
                  }}
                />
              </motion.button>

              {onUnderAttackClick ? (
                <button
                  onClick={onUnderAttackClick}
                  className={`${getTextHoverClass()} transition-all duration-300 border-2 ${getBorderClass()} px-2 sm:px-3 md:px-4 py-1 md:py-1.5 rounded-full ${getBgHoverClass()} text-xs md:text-sm whitespace-nowrap font-bold`}
                  style={{ fontSize: "clamp(0.65rem, 1.5vw, 0.875rem)", fontWeight: "bold" }}
                >
                  Under Attack?
                </button>
              ) : (
                <a
                  href="#attack"
                  className={`${getTextHoverClass()} transition-all duration-300 border-2 ${getBorderClass()} px-2 sm:px-3 md:px-4 py-1 md:py-1.5 rounded-full ${getBgHoverClass()} text-xs md:text-sm whitespace-nowrap font-bold`}
                  style={{ fontSize: "clamp(0.65rem, 1.5vw, 0.875rem)", fontWeight: "bold" }}
                >
                  Under Attack?
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      {showMainNav && (
        <div className="bg-black/20 backdrop-blur-md relative transition-all duration-500">
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
          <nav className="container mx-auto px-4 md:px-6 py-3 md:py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 md:gap-8 w-full md:w-auto">
                <Link to={ROUTES.HOME} className="flex items-center gap-2 md:gap-3">
                  <img
                    src={dcSecuriteLogo}
                    alt="DCSecurite Logo"
                    className="h-8 md:h-10 w-auto object-contain"
                  />
                </Link>

                <div className="hidden md:flex items-center gap-6 lg:gap-8">
                  <Link
                    to={ROUTES.HOME}
                    className={`${getTextHoverClass()} transition-all duration-300 relative group cursor-pointer text-sm lg:text-base font-bold`}
                  >
                    Home
                    <span
                      className={`absolute -bottom-1 left-0 w-0 h-0.5 ${getUnderlineClass()} group-hover:w-full transition-all duration-300`}
                    ></span>
                  </Link>

                  <div ref={securityRef}>
                    <button
                      onClick={() => {
                        closeAllDropdowns();
                        setIsSecurityDropdownOpen(!isSecurityDropdownOpen);
                      }}
                      className={`${getTextHoverClass()} transition-all duration-300 relative group text-sm lg:text-base flex items-center gap-1 font-bold`}
                    >
                      Security
                      <ChevronDown className="w-3 h-3 md:w-4 md:h-4" />
                      <span
                        className={`absolute -bottom-1 left-0 w-0 h-0.5 ${getUnderlineClass()} group-hover:w-full transition-all duration-300`}
                      ></span>
                    </button>
                  </div>
                  <div ref={solutionsRef}>
                    <button
                      onClick={() => {
                        closeAllDropdowns();
                        setIsSolutionsDropdownOpen(!isSolutionsDropdownOpen);
                      }}
                      className={`${getTextHoverClass()} transition-all duration-300 relative group text-sm lg:text-base flex items-center gap-1 font-bold`}
                    >
                      Solutions
                      <ChevronDown className="w-3 h-3 md:w-4 md:h-4" />
                      <span
                        className={`absolute -bottom-1 left-0 w-0 h-0.5 ${getUnderlineClass()} group-hover:w-full transition-all duration-300`}
                      ></span>
                    </button>
                  </div>

                  <Link
                    to={ROUTES.EVENTS}
                    className={`${getTextHoverClass()} transition-all duration-300 relative group text-sm lg:text-base font-bold`}
                  >
                    Events
                    <span
                      className={`absolute -bottom-1 left-0 w-0 h-0.5 ${getUnderlineClass()} group-hover:w-full transition-all duration-300`}
                    ></span>
                  </Link>

                  <div ref={companyRef}>
                    <button
                      onClick={() => {
                        closeAllDropdowns();
                        setIsCompanyDropdownOpen(!isCompanyDropdownOpen);
                      }}
                      className={`${getTextHoverClass()} transition-all duration-300 relative group text-sm lg:text-base flex items-center gap-1 font-bold`}
                    >
                      Company
                      <ChevronDown className="w-3 h-3 md:w-4 md:h-4" />
                      <span
                        className={`absolute -bottom-1 left-0 w-0 h-0.5 ${getUnderlineClass()} group-hover:w-full transition-all duration-300`}
                      ></span>
                    </button>
                  </div>

                  <Link
                    to={ROUTES.THREAT_MAP}
                    className={`${getTextHoverClass()} transition-all duration-300 relative group text-sm lg:text-base font-bold`}
                  >
                    Threat Map
                    <span
                      className={`absolute -bottom-1 left-0 w-0 h-0.5 ${getUnderlineClass()} group-hover:w-full transition-all duration-300`}
                    ></span>
                  </Link>

                  <Link
                    to={ROUTES.SECURITY_TEST}
                    className={`${getTextHoverClass()} transition-all duration-300 relative group text-sm lg:text-base font-bold`}
                  >
                    Security Test
                    <span
                      className={`absolute -bottom-1 left-0 w-0 h-0.5 ${getUnderlineClass()} group-hover:w-full transition-all duration-300`}
                    ></span>
                  </Link>

                  <Link
                    to={ROUTES.CONTACT}
                    className={`${getTextHoverClass()} transition-colors py-2 font-bold cursor-pointer`}
                  >
                    Contact
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {/* Animated Watch us Button - Desktop */}
                <motion.button
                  className="hidden md:block relative overflow-hidden px-4 lg:px-6 py-2 lg:py-2.5 rounded-full text-sm lg:text-base font-bold text-white group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Animated gradient background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-500"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{
                      backgroundSize: "200% 200%",
                    }}
                  />

                  {/* Pulsing glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-cyan-400/50 rounded-full blur-xl"
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      repeatDelay: 1,
                    }}
                  />

                  {/* Button text */}
                  <span className="relative z-10 drop-shadow-lg">Watch us</span>

                  {/* Hover ring effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-white/50"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={`md:hidden p-2 ${getTextHoverClass()} transition-colors`}
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>

            {isMenuOpen && (
              <div className="md:hidden mt-4 py-4 space-y-4 border-t border-slate-300 dark:border-white/20 max-h-[calc(100vh-180px)] overflow-y-auto scrollbar-hide bg-white/90 dark:bg-black/40 backdrop-blur-md rounded-lg px-4">
                <Link
                  to={ROUTES.HOME}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block ${getTextHoverClass()} transition-colors cursor-pointer py-2 w-full text-left font-bold`}
                >
                  Home
                </Link>

                {/* Security Dropdown in Mobile Menu */}
                <div>
                  <button
                    onClick={() => setIsSecurityDropdownOpen(!isSecurityDropdownOpen)}
                    className={`flex items-center justify-between w-full ${getTextHoverClass()} transition-colors py-2 font-bold`}
                  >
                    <span>Security</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${isSecurityDropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {/* Security Items in Mobile */}
                  {isSecurityDropdownOpen && (
                    <div className="mt-3 ml-2 space-y-4 pb-2">
                      {Object.entries(securityMenuData).map(([category, items]) => (
                        <div key={category} className="space-y-2">
                          <h4 className="text-xs uppercase tracking-wider text-cyan-300 font-semibold px-2 py-1 bg-white/10 rounded leading-relaxed break-words">
                            {category}
                          </h4>
                          <div className="space-y-1 ml-2">
                            {items.map((item, index) => (
                              <Link
                                key={index}
                                to={item.route}
                                onClick={() => {
                                  setIsSecurityDropdownOpen(false);
                                  setIsMenuOpen(false);
                                }}
                                className="block w-full text-left text-sm text-white hover:text-cyan-300 transition-colors py-1.5 px-2 rounded hover:bg-white/10"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Solutions Dropdown in Mobile Menu */}
                <div>
                  <button
                    onClick={() => setIsSolutionsDropdownOpen(!isSolutionsDropdownOpen)}
                    className={`flex items-center justify-between w-full ${getTextHoverClass()} transition-colors py-2 font-bold`}
                  >
                    <span>Solutions</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${isSolutionsDropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {/* Solutions Items in Mobile */}
                  {isSolutionsDropdownOpen && (
                    <div className="mt-3 ml-2 space-y-4 pb-2">
                      {Object.entries(solutionsMenuData).map(([category, items]) => (
                        <div key={category} className="space-y-2">
                          <h4 className="text-xs uppercase tracking-wider text-cyan-300 font-semibold px-2 py-1 bg-white/10 rounded leading-relaxed break-words">
                            {category}
                          </h4>
                          <div className="space-y-1 ml-2">
                            {items.map((item, index) => (
                              <Link
                                key={index}
                                to={item.route}
                                onClick={() => {
                                  setIsSolutionsDropdownOpen(false);
                                  setIsMenuOpen(false);
                                }}
                                className="block w-full text-left text-sm text-white hover:text-cyan-300 transition-colors py-1.5 px-2 rounded hover:bg-white/10"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Company Dropdown in Mobile Menu */}
                <div>
                  <button
                    onClick={() => setIsCompanyDropdownOpen(!isCompanyDropdownOpen)}
                    className={`flex items-center justify-between w-full ${getTextHoverClass()} transition-colors py-2 font-bold`}
                  >
                    <span>Company</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${isCompanyDropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {/* Company Items in Mobile */}
                  {isCompanyDropdownOpen && (
                    <div className="mt-3 ml-2 space-y-4 pb-2">
                      {Object.entries(companyMenuData).map(([category, items]) => (
                        <div key={category} className="space-y-2">
                          <h4 className="text-xs uppercase tracking-wider text-cyan-300 font-semibold px-2 py-1 bg-white/10 rounded leading-relaxed break-words">
                            {category}
                          </h4>
                          <div className="space-y-1 ml-2">
                            {items.map((item, index) => (
                              <Link
                                key={index}
                                to={item.route}
                                onClick={() => {
                                  setIsCompanyDropdownOpen(false);
                                  setIsMenuOpen(false);
                                }}
                                className="block w-full text-left text-sm text-white hover:text-cyan-300 transition-colors py-1.5 px-2 rounded hover:bg-white/10"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  to={ROUTES.EVENTS}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block ${getTextHoverClass()} transition-colors py-2 font-bold`}
                >
                  Events
                </Link>
                <Link
                  to={ROUTES.INDUSTRIES}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block ${getTextHoverClass()} transition-colors py-2 font-bold`}
                >
                  Industries
                </Link>
                <Link
                  to={ROUTES.THREAT_MAP}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block ${getTextHoverClass()} transition-colors py-2 font-bold`}
                >
                  Threat Map
                </Link>
                <Link
                  to={ROUTES.SECURITY_TEST}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block ${getTextHoverClass()} transition-colors py-2 font-bold`}
                >
                  Security Test
                </Link>
                <Link
                  to={ROUTES.CONTACT}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block ${getTextHoverClass()} transition-colors py-2 font-bold`}
                >
                  Contact
                </Link>

                {/* Animated Live Community Button - Mobile */}
                <motion.button
                  onClick={() => {
                    setIsMenuOpen(false);
                    navigate(ROUTES.EAGLO_AI);
                  }}
                  className="flex items-center gap-2 relative overflow-hidden px-3 py-2 rounded-full font-bold text-white"
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Animated green circle (live indicator) */}
                  <motion.div
                    className="relative w-2 h-2 rounded-full bg-emerald-400 z-10"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [1, 0.7, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {/* Pulse ring effect */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-emerald-400"
                      animate={{
                        scale: [1, 2.5, 2.5],
                        opacity: [0.8, 0, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeOut",
                      }}
                    />
                  </motion.div>

                  {/* Button text */}
                  <span className="relative z-10">Ask Eaglo for fast answer</span>

                  {/* Shimmer effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{
                      x: "100%",
                      transition: { duration: 0.6, ease: "easeInOut" },
                    }}
                  />
                </motion.button>

                {/* Animated Watch us Button - Mobile */}
                <motion.button
                  className="w-full relative overflow-hidden px-6 py-2.5 rounded-full font-bold text-white mt-4"
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Animated gradient background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-500"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{
                      backgroundSize: "200% 200%",
                    }}
                  />

                  {/* Pulsing glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-cyan-400/50 rounded-full blur-xl"
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      repeatDelay: 1,
                    }}
                  />

                  {/* Button text */}
                  <span className="relative z-10 drop-shadow-lg">Watch us</span>
                </motion.button>
              </div>
            )}

            {isSecurityDropdownOpen && (
              <div
                className="absolute left-0 right-0 top-full mt-2 z-[100] max-h-[80vh] overflow-y-auto"
                ref={securityDropdownRef}
              >
                <div className="container mx-auto px-4 md:px-6">
                  <div className="bg-white dark:bg-[#0A0F1F] border-2 border-slate-300 dark:border-cyan-500/30 rounded-2xl shadow-2xl backdrop-blur-sm p-4 md:p-6 lg:p-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 md:gap-6">
                      {Object.entries(securityMenuData).map(([category, items]) => (
                        <div key={category} className="space-y-2 md:space-y-3">
                          <h3 className="text-xs md:text-sm uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 md:mb-3 font-semibold">
                            {category}
                          </h3>
                          <div className="space-y-1.5 md:space-y-2">
                            {items.map((item, index) => (
                              <Link
                                key={index}
                                to={item.route}
                                onClick={() => setIsSecurityDropdownOpen(false)}
                                className="block w-full text-left text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors text-sm md:text-base"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {isSolutionsDropdownOpen && (
              <div
                className="absolute left-0 right-0 top-full mt-2 z-[100] max-h-[80vh] overflow-y-auto"
                ref={solutionsDropdownRef}
              >
                <div className="container mx-auto px-4 md:px-6">
                  <div className="bg-white dark:bg-[#0A0F1F] border-2 border-slate-300 dark:border-cyan-500/30 rounded-2xl shadow-2xl backdrop-blur-sm p-4 md:p-6 lg:p-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                      {Object.entries(solutionsMenuData).map(([category, items]) => (
                        <div key={category} className="space-y-2 md:space-y-3">
                          <h3 className="text-xs md:text-sm uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 md:mb-3 font-semibold">
                            {category}
                          </h3>
                          <div className="space-y-1.5 md:space-y-2">
                            {items.map((item, index) => (
                              <Link
                                key={index}
                                to={item.route}
                                onClick={() => setIsSolutionsDropdownOpen(false)}
                                className="block w-full text-left text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors text-sm md:text-base"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {isCompanyDropdownOpen && (
              <div
                className="absolute left-0 right-0 top-full mt-2 z-[100] max-h-[80vh] overflow-y-auto"
                ref={companyDropdownRef}
              >
                <div className="container mx-auto px-4 md:px-6">
                  <div className="bg-white dark:bg-[#0A0F1F] border-2 border-slate-300 dark:border-cyan-500/30 rounded-2xl shadow-2xl backdrop-blur-sm p-4 md:p-6 lg:p-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                      {Object.entries(companyMenuData).map(([category, items]) => (
                        <div key={category} className="space-y-2 md:space-y-3">
                          <h3 className="text-xs md:text-sm uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 md:mb-3 font-semibold">
                            {category}
                          </h3>
                          <div className="space-y-1.5 md:space-y-2">
                            {items.map((item, index) => (
                              <Link
                                key={index}
                                to={item.route}
                                onClick={() => setIsCompanyDropdownOpen(false)}
                                className="block w-full text-left text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors text-sm md:text-base"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </nav>
        </div>
      )}



      {/* Search Dropdown - Positioned below header */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            ref={searchContainerRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-[#181818]/90 backdrop-blur-md shadow-2xl z-[90]"
          >
            <div className="container mx-auto px-4 md:px-6 py-6" >
              <div className="relative max-w-4xl mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search services, solutions, or company info..."
                  className="w-full bg-white/5 border border-transparent focus:border-white rounded-xl pl-12 pr-4 py-3 text-base md:text-lg text-white outline-none transition-all placeholder:text-white/30"
                />
              </div>

              {searchQuery && (
                <div className="mt-4 max-w-4xl mx-auto overflow-y-auto max-h-[60vh] scrollbar-hide">
                  {filteredResults.length > 0 ? (
                    <div className="space-y-4">
                      <h3 className="text-xs uppercase tracking-wider text-slate-400 font-semibold px-1">
                        Results ({filteredResults.length})
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {filteredResults.map((result, index) => (
                          <Link
                            key={index}
                            to={result.route}
                            onClick={closeAllDropdowns}
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group border border-transparent hover:border-white/10"
                          >
                            <div className="p-2 bg-white/5 rounded-md group-hover:bg-white/10 transition-colors">
                              <Search className="w-4 h-4 text-slate-300" />
                            </div>
                            <span className="text-sm md:text-base font-medium text-slate-200 group-hover:text-white transition-colors">
                              {result.label}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-white/40">No results found for "{searchQuery}"</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
