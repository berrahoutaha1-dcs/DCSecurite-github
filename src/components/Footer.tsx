import { Shield, Linkedin, Facebook, Instagram, Mail } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "../routes";
const dcSecuriteLogo = "/assets/de5ecd5c60c2167d3d7ff65d209cdb36f6ad1d1a.png";

export function Footer() {
  const [showEmailTooltip, setShowEmailTooltip] = useState(false);

  const handleDoNotSell = () => {
    alert(
      "Your 'Do Not Sell or Share My Personal Information' request has been recorded. We will not sell or share your personal information."
    );
  };

  const location = useLocation();
  const isPolicyPage = [ROUTES.PRIVACY, ROUTES.TERMS, ROUTES.COOKIES].includes(location.pathname);

  const footerContent = (
    <footer className="bg-slate-100 dark:bg-[#0a0a0a] text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800/30">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-8 md:gap-12 mb-8 md:mb-12">
          <div className="sm:col-span-2 md:col-span-2">
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <img
                src={dcSecuriteLogo}
                alt="DCSecurite Logo"
                className="h-8 md:h-10 w-auto object-contain"
              />
            </div>
            <p className="text-slate-600 dark:text-slate-500 mb-4 md:mb-6 max-w-sm leading-relaxed text-sm md:text-base">
              Protecting businesses from cyber threats with enterprise-grade security solutions
              delivered by trusted experts.
            </p>
            <div className="flex flex-wrap gap-2 md:gap-3">
              <a
                href="https://www.linkedin.com/company/dcsecurite"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 bg-white dark:bg-slate-900/70 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-600 rounded-lg md:rounded-xl flex items-center justify-center transition-all duration-300 group border border-slate-300 dark:border-slate-700/30 hover:border-transparent hover:shadow-lg dark:hover:shadow-cyan-500/30"
              >
                <Linkedin className="w-4 h-4 md:w-5 md:h-5 text-slate-600 dark:text-slate-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61561218691099"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 bg-white dark:bg-slate-900/70 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-600 rounded-lg md:rounded-xl flex items-center justify-center transition-all duration-300 group border border-slate-300 dark:border-slate-700/30 hover:border-transparent hover:shadow-lg dark:hover:shadow-cyan-500/30"
              >
                <Facebook className="w-4 h-4 md:w-5 md:h-5 text-slate-600 dark:text-slate-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://www.instagram.com/dcsecurite.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 bg-white dark:bg-slate-900/70 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-600 rounded-lg md:rounded-xl flex items-center justify-center transition-all duration-300 group border border-slate-300 dark:border-slate-700/30 hover:border-transparent hover:shadow-lg dark:hover:shadow-cyan-500/30"
              >
                <Instagram className="w-4 h-4 md:w-5 md:h-5 text-slate-600 dark:text-slate-400 group-hover:text-white transition-colors" />
              </a>
              <div className="relative">
                <button
                  onMouseEnter={() => setShowEmailTooltip(true)}
                  onMouseLeave={() => setShowEmailTooltip(false)}
                  onClick={() => (window.location.href = "mailto:contact@dcsecurite.com")}
                  className="w-9 h-9 md:w-10 md:h-10 bg-white dark:bg-slate-900/70 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-600 rounded-lg md:rounded-xl flex items-center justify-center transition-all duration-300 group border border-slate-300 dark:border-slate-700/30 hover:border-transparent hover:shadow-lg dark:hover:shadow-cyan-500/30"
                >
                  <Mail className="w-4 h-4 md:w-5 md:h-5 text-slate-600 dark:text-slate-400 group-hover:text-white transition-colors" />
                </button>
                {showEmailTooltip && (
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-slate-900 dark:bg-slate-800 text-white text-xs rounded-lg shadow-xl whitespace-nowrap border border-cyan-500/20 animate-fadeIn">
                    contact@dcsecurite.com
                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-slate-900 dark:border-t-slate-800"></div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-slate-900 dark:text-white mb-3 md:mb-4 text-base md:text-lg">
              Security
            </h4>
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
              <li>
                <Link
                  to={ROUTES.CLOUD_NETWORK_SECURITY}
                  className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors hover:translate-x-1 inline-block"
                >
                  Network Security
                </Link>
              </li>

              <li>
                <Link
                  to={ROUTES.MDR}
                  className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors hover:translate-x-1 inline-block"
                >
                  Security Operations
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.EPP}
                  className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors hover:translate-x-1 inline-block"
                >
                  Endpoint Security
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.WEB_APP_PEN_TEST}
                  className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors hover:translate-x-1 inline-block"
                >
                  Penetration Testing & Zero-Day Detection
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.INDUSTRIES}
                  className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors hover:translate-x-1 inline-block"
                >
                  Industries
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 dark:text-white mb-3 md:mb-4 text-base md:text-lg">
              Solutions
            </h4>
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
              <li>
                <Link
                  to={ROUTES.ERP_MANAGEMENT}
                  className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors hover:translate-x-1 inline-block"
                >
                  Entreprise Solutions
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.WEB_DEVELOPMENT}
                  className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors hover:translate-x-1 inline-block"
                >
                  Programming
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.LOGISOFT360}
                  className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors hover:translate-x-1 inline-block"
                >
                  Commerce Software
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 dark:text-white mb-3 md:mb-4 text-base md:text-lg">
              Company
            </h4>
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
              <li>
                <Link
                  to={ROUTES.ABOUT}
                  className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors hover:translate-x-1 inline-block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.CAREERS_OVERVIEW}
                  className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors hover:translate-x-1 inline-block"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.COMPETITIONS}
                  className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors hover:translate-x-1 inline-block"
                >
                  Competitions
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.JOBS}
                  className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors hover:translate-x-1 inline-block"
                >
                  Jobs
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.WHATS_NEW}
                  className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors hover:translate-x-1 inline-block"
                >
                  Newsroom
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.CONTACT}
                  className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors hover:translate-x-1 inline-block"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.LOCATIONS}
                  className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors hover:translate-x-1 inline-block"
                >
                  Location
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 dark:text-white mb-3 md:mb-4 text-base md:text-lg">
              Important Links
            </h4>
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
              <li>
                <Link
                  to="/#certificates"
                  className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors hover:translate-x-1 inline-block"
                >
                  Certificates
                </Link>
              </li>
              <li>
                <Link
                  to="/#education"
                  className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors hover:translate-x-1 inline-block"
                >
                  Education
                </Link>
              </li>
              <li>
                <Link
                  to="/#attack"
                  className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors hover:translate-x-1 inline-block cursor-pointer text-left"
                >
                  NCF Unit
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.LEGAL_REFERENCES}
                  className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors hover:translate-x-1 inline-block cursor-pointer text-left"
                >
                  Legal References
                </Link>
              </li>
              <li>
                <button
                  onClick={handleDoNotSell}
                  className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors hover:translate-x-1 inline-block cursor-pointer text-left"
                >
                  Do Not Sell or Share My Personal Information
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 md:pt-8 border-t border-slate-300 dark:border-slate-800/30 flex flex-col md:flex-row justify-between items-center gap-4 text-sm md:text-base">
          <p className="text-slate-600 dark:text-slate-500 text-center md:text-left">
            Copyright © 2025 DCSecurite. All Rights Reserved
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-slate-600 dark:text-slate-500">
            <Link
              to={ROUTES.PRIVACY}
              className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer"
            >
              Privacy Policy
            </Link>
            <Link
              to={ROUTES.TERMS}
              className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer"
            >
              Terms of Service
            </Link>
            <Link
              to={ROUTES.COOKIES}
              className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );

  return isPolicyPage ? <div className="dark">{footerContent}</div> : footerContent;
}
