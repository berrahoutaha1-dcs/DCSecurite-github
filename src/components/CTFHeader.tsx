import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal,
  Menu,
  X,
  ChevronRight,
  Lock,
  Code,
  Trophy,
  Briefcase,
  ArrowRight,
  Home,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes";
const ctfLogo = "/assets/4fe364d34df8735af2bf8c466b12986bbd39a8e2.png";

interface CTFHeaderProps {
  onNavigateToCompetitions?: () => void;
  onNavigateToHome?: () => void;
  onNavigateToJobs?: () => void;
  onNavigateToMainSite?: () => void;
  currentPage?: "home" | "competitions" | "jobs";
}

export const CTFHeader = ({
  onNavigateToCompetitions,
  onNavigateToHome,
  onNavigateToJobs,
  onNavigateToMainSite,
  currentPage = "home",
}: CTFHeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(
    currentPage === "competitions" ? "Compétitions" : currentPage === "jobs" ? "Jobs part time" : ""
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Learning", href: "#learning", icon: Code },
    { name: "Compétitions", href: "#competitions", icon: Trophy },
    { name: "Jobs part time", href: "#jobs", icon: Briefcase },
  ];

  const navigate = useNavigate();

  const scrollToSection = (href: string, name: string) => {
    setActiveItem(name);
    setMobileMenuOpen(false);

    // Handle navigation to different pages
    if (name === "Compétitions") {
      if (onNavigateToCompetitions) {
        onNavigateToCompetitions();
      } else {
        navigate(ROUTES.COMPETITIONS);
      }
      return;
    }

    if (name === "Jobs part time") {
      if (onNavigateToJobs) {
        onNavigateToJobs();
      } else {
        navigate(ROUTES.JOBS);
      }
      return;
    }

    // Handle navigation back to home/learning page
    if (name === "Learning") {
      if (
        (currentPage === "competitions" || currentPage === "jobs") &&
        onNavigateToHome
      ) {
        onNavigateToHome();
        return;
      } else if (currentPage === "competitions" || currentPage === "jobs") {
        navigate(ROUTES.HOME);
        return;
      }
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLogoClick = () => {
    if ((currentPage === "competitions" || currentPage === "jobs")) {
      if (onNavigateToHome) {
        onNavigateToHome();
      } else {
        navigate(ROUTES.HOME);
      }
    }
  };

  return (
    <>
      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-green-500/5"
          : "bg-black/40 backdrop-blur-md"
          }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo Section */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-6 cursor-pointer group"
              onClick={handleLogoClick}
            >
              {/* Logo */}
              <div className="relative">
                <motion.div className="absolute -inset-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                  src={ctfLogo}
                  alt="CTF Program"
                  className="relative h-14 w-auto brightness-0 invert opacity-90 group-hover:opacity-100 transition-all duration-300"
                  style={{ filter: "drop-shadow(0 2px 8px rgba(0, 255, 0, 0.15))" }}
                />
              </div>

              {/* Divider */}
              <div className="hidden md:block w-[1px] h-10 bg-gradient-to-b from-transparent via-white/20 to-transparent" />

              {/* Tagline */}
              <div className="hidden md:flex flex-col">
                <span
                  className="text-white text-sm tracking-wide"
                  style={{ fontWeight: "600", letterSpacing: "0.5px" }}
                >
                  CTF PROGRAM
                </span>
                <span
                  className="text-gray-400 text-xs tracking-wider"
                  style={{ letterSpacing: "1px" }}
                >
                  Capture The Flag
                </span>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {/* Home Button - Return to Main Site */}
              <motion.button
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                onClick={() => {
                  if (onNavigateToMainSite) {
                    onNavigateToMainSite();
                  } else {
                    navigate(ROUTES.HOME);
                  }
                }}
                className="relative px-5 py-2.5 group mr-2"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Hover background */}
                <div className="absolute inset-0 rounded-lg transition-all duration-300 bg-white/0 group-hover:bg-white/5 border border-transparent group-hover:border-white/10" />

                {/* Content */}
                <div className="relative flex items-center gap-2.5 transition-colors duration-300 text-gray-300 group-hover:text-white">
                  <Home className="w-4 h-4" />
                  <span className="text-sm" style={{ fontWeight: "500", letterSpacing: "0.3px" }}>
                    Home
                  </span>
                </div>
              </motion.button>

              {/* Divider */}
              <div className="w-[1px] h-8 bg-gradient-to-b from-transparent via-white/20 to-transparent mr-1" />

              {menuItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeItem === item.name;
                return (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    onClick={() => scrollToSection(item.href, item.name)}
                    className="relative px-5 py-2.5 group"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Hover background */}
                    <div
                      className={`absolute inset-0 rounded-lg transition-all duration-300 ${isActive
                        ? "bg-green-500/10 border border-green-500/30"
                        : "bg-white/0 group-hover:bg-white/5 border border-transparent group-hover:border-white/10"
                        }`}
                    />

                    {/* Content */}
                    <div
                      className={`relative flex items-center gap-2.5 transition-colors duration-300 ${isActive ? "text-green-400" : "text-gray-300 group-hover:text-white"
                        }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span
                        className="text-sm"
                        style={{ fontWeight: "500", letterSpacing: "0.3px" }}
                      >
                        {item.name}
                      </span>
                    </div>

                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-green-400 to-emerald-400"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden relative p-2.5 text-white/80 hover:text-white border border-white/20 hover:border-white/40 rounded-lg hover:bg-white/5 transition-all duration-300"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>

        {/* Bottom border accent */}
        {scrolled && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-green-500/30 to-transparent"
            style={{ transformOrigin: "center" }}
          />
        )}
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-black/95 backdrop-blur-2xl border-l border-white/10 z-50 lg:hidden shadow-2xl"
            >
              <div className="h-full flex flex-col">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between px-6 h-20 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <img
                      src={ctfLogo}
                      alt="CTF Program"
                      className="h-10 w-auto brightness-0 invert opacity-90"
                      style={{ filter: "drop-shadow(0 2px 6px rgba(0, 255, 0, 0.2))" }}
                    />
                    <div className="flex flex-col">
                      <span className="text-white text-sm" style={{ fontWeight: "600" }}>
                        CTF PROGRAM
                      </span>
                      <span className="text-gray-400 text-xs">Capture The Flag</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Menu Items */}
                <nav className="flex-1 px-6 py-8 overflow-y-auto">
                  <div className="space-y-2">
                    {/* Home Button for Mobile */}
                    <motion.button
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4 }}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        if (onNavigateToMainSite) {
                          onNavigateToMainSite();
                        } else {
                          navigate(ROUTES.HOME);
                        }
                      }}
                      className="w-full group relative px-5 py-4 text-left text-gray-300 hover:text-white border border-white/10 hover:border-green-500/40 rounded-xl overflow-hidden transition-all duration-300 hover:bg-white/5"
                    >
                      {/* Hover gradient */}
                      <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/5 to-green-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />

                      <div className="relative flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="p-2 bg-white/5 group-hover:bg-green-500/10 rounded-lg transition-colors">
                            <Home className="w-5 h-5 text-green-400" />
                          </div>
                          <span style={{ fontWeight: "500", letterSpacing: "0.3px" }}>Home</span>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-green-400 group-hover:translate-x-1 transition-all" />
                      </div>
                    </motion.button>

                    {/* Divider */}
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent my-4" />

                    {menuItems.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <motion.button
                          key={item.name}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.1 * index }}
                          onClick={() => scrollToSection(item.href, item.name)}
                          className="w-full group relative px-5 py-4 text-left text-gray-300 hover:text-white border border-white/10 hover:border-green-500/40 rounded-xl overflow-hidden transition-all duration-300 hover:bg-white/5"
                        >
                          {/* Hover gradient */}
                          <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/5 to-green-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />

                          <div className="relative flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className="p-2 bg-white/5 group-hover:bg-green-500/10 rounded-lg transition-colors">
                                <Icon className="w-5 h-5 text-green-400" />
                              </div>
                              <span style={{ fontWeight: "500", letterSpacing: "0.3px" }}>
                                {item.name}
                              </span>
                            </div>
                            <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-green-400 group-hover:translate-x-1 transition-all" />
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>
                </nav>

                {/* Mobile CTA */}
                <div className="px-6 py-6 border-t border-white/10">
                  <button className="w-full group relative px-6 py-4 bg-gradient-to-r from-green-500 via-emerald-500 to-green-500 bg-size-200 bg-pos-0 hover:bg-pos-100 text-black rounded-xl overflow-hidden transition-all duration-500 shadow-lg shadow-green-500/20">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />

                    <span
                      className="relative flex items-center justify-center gap-2.5"
                      style={{ fontWeight: "600", letterSpacing: "0.3px" }}
                    >
                      <Terminal className="w-5 h-5" />
                      Start Challenge Now
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>

                  {/* Status */}
                  <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500">
                    <motion.div
                      className="w-1.5 h-1.5 bg-green-400 rounded-full"
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span style={{ letterSpacing: "0.5px" }}>SYSTEM ONLINE</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
