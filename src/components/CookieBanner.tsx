import { X, Cookie, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";

interface CookieBannerProps {
  onAcceptAll: () => void;
  onRejectAll: () => void;
  onSavePreferences: (preferences: CookiePreferences) => void;
  onCookiePolicyClick?: () => void;
  onDoNotSellClick?: () => void;
  forceShow?: boolean;
}

export interface CookiePreferences {
  necessary: boolean;
  analytical: boolean;
  marketing: boolean;
}

export function CookieBanner({
  onAcceptAll,
  onRejectAll,
  onSavePreferences,
  onCookiePolicyClick,
  onDoNotSellClick,
  forceShow = false,
}: CookieBannerProps) {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytical: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a cookie choice
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent || forceShow) {
      setShowBanner(true);
    }
  }, [forceShow]);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytical: true,
      marketing: true,
    };
    localStorage.setItem("cookieConsent", JSON.stringify(allAccepted));
    setShowBanner(false);
    onAcceptAll();
  };

  const handleRejectAll = () => {
    const allRejected = {
      necessary: true, // Necessary cookies can't be disabled
      analytical: false,
      marketing: false,
    };
    localStorage.setItem("cookieConsent", JSON.stringify(allRejected));
    setShowBanner(false);
    onRejectAll();
  };

  const handleSavePreferences = () => {
    localStorage.setItem("cookieConsent", JSON.stringify(preferences));
    setShowBanner(false);
    onSavePreferences(preferences);
  };

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === "necessary") return; // Can't toggle necessary cookies
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (!showBanner) return null;

  return (
    <div className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white dark:bg-[#0A0F1F] rounded-2xl shadow-2xl border border-slate-200 dark:border-cyan-500/20 max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scaleIn">
        {!showPreferences ? (
          // Initial Cookie Notice
          <>
            {/* Header */}
            <div className="relative border-b border-slate-200 dark:border-cyan-500/10 p-6">
              <div className="flex items-center justify-center gap-3 mb-2">
                <div className="relative">
                  <Cookie className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
                  <div className="absolute inset-0 bg-cyan-400 dark:bg-cyan-500 blur-lg opacity-30 dark:opacity-50"></div>
                </div>
              </div>
              <h2
                className="text-2xl text-slate-900 dark:text-white text-center"
                style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 700 }}
              >
                This website makes use of cookies
              </h2>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                This website uses cookies to ensure you get the best experience on our website. Some
                of these cookies are essential for the site to function, whilst others are useful to
                help us to analyse our traffic and collect statistics on how and when the site is
                being used and how it can be improved. We also share information about your use of
                our site with our analytics partners.
              </p>

              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                By clicking "Accept All," you consent to the storing of cookies on your device to
                enhance site navigation, analyse site usage, and assist in measuring the success of
                our marketing efforts.
              </p>

              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Manage your preferences at any time, on the cookie preference tool at the bottom of
                the screen, or if you want to learn more, please go to our{" "}
                <button
                  onClick={onCookiePolicyClick}
                  className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors underline inline-flex items-center gap-1"
                >
                  Cookie policy
                  <ExternalLink className="w-3 h-3" />
                </button>
              </p>
            </div>

            {/* Actions */}
            <div className="border-t border-slate-200 dark:border-cyan-500/10 p-6 space-y-3">
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleAcceptAll}
                  className="flex-1 py-3 px-6 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 dark:from-cyan-500 dark:to-blue-600 dark:hover:from-cyan-400 dark:hover:to-blue-500 text-white transition-all duration-300 shadow-lg shadow-cyan-500/30 dark:shadow-cyan-500/40 hover:shadow-cyan-500/50 dark:hover:shadow-cyan-500/60 hover:scale-[1.02] transform"
                  style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 600 }}
                >
                  Accept all cookies
                </button>
                <button
                  onClick={handleRejectAll}
                  className="flex-1 py-3 px-6 rounded-lg bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-900 dark:text-white transition-all duration-300 hover:scale-[1.02] transform"
                  style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 600 }}
                >
                  Reject all cookies
                </button>
              </div>

              <button
                onClick={() => setShowPreferences(true)}
                className="w-full py-3 px-6 rounded-lg border-2 border-cyan-500 dark:border-cyan-400 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-900/20 transition-all duration-300"
                style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 600 }}
              >
                Manage Preferences
              </button>

              <button
                onClick={onDoNotSellClick}
                className="w-full py-2.5 px-4 text-sm text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors underline"
                style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 500 }}
              >
                Do Not Sell or Share My Personal Information
              </button>
            </div>
          </>
        ) : (
          // Cookie Preferences
          <>
            {/* Header */}
            <div className="relative border-b border-slate-200 dark:border-cyan-500/10 p-6">
              <div className="flex items-center justify-center gap-3 mb-2">
                <div className="relative">
                  <Cookie className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
                  <div className="absolute inset-0 bg-cyan-400 dark:bg-cyan-500 blur-lg opacity-30 dark:opacity-50"></div>
                </div>
              </div>
              <h2
                className="text-2xl text-slate-900 dark:text-white text-center"
                style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 700 }}
              >
                Cookie Preferences
              </h2>
              <button
                onClick={() => setShowPreferences(false)}
                className="absolute right-4 top-4 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Back"
              >
                <X className="w-5 h-5 text-slate-600 dark:text-slate-400" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Necessary Cookies */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3
                      className="text-lg text-slate-900 dark:text-white mb-1"
                      style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 600 }}
                    >
                      Necessary cookies
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      Necessary cookies enable core functionality as you browse our website such as
                      session management and remembering your cookie preferences. The website cannot
                      function properly without these cookies and can only be disabled by changing
                      your browser preferences.
                    </p>
                  </div>
                  <div className="ml-4">
                    <div className="w-12 h-6 bg-cyan-600 dark:bg-cyan-500 rounded-full flex items-center justify-end px-1 opacity-50 cursor-not-allowed">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Analytical Cookies */}
              <div className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3
                      className="text-lg text-slate-900 dark:text-white mb-1"
                      style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 600 }}
                    >
                      Analytical Cookies
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      Analytical cookies help us to improve our website by collecting and reporting
                      information on its usage.
                    </p>
                  </div>
                  <div className="ml-4">
                    <button
                      onClick={() => togglePreference("analytical")}
                      className={`w-12 h-6 rounded-full flex items-center transition-all duration-300 ${
                        preferences.analytical
                          ? "bg-cyan-600 dark:bg-cyan-500 justify-end"
                          : "bg-slate-300 dark:bg-slate-600 justify-start"
                      } px-1`}
                      aria-label="Toggle analytical cookies"
                    >
                      <div className="w-4 h-4 bg-white rounded-full shadow-md"></div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Google Ad Platforms */}
              <div className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3
                      className="text-lg text-slate-900 dark:text-white mb-1"
                      style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 600 }}
                    >
                      Google Ad Platforms
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      We use marketing cookies to help us improve the relevancy of advertising
                      campaigns you receive.
                    </p>
                  </div>
                  <div className="ml-4">
                    <button
                      onClick={() => togglePreference("marketing")}
                      className={`w-12 h-6 rounded-full flex items-center transition-all duration-300 ${
                        preferences.marketing
                          ? "bg-cyan-600 dark:bg-cyan-500 justify-end"
                          : "bg-slate-300 dark:bg-slate-600 justify-start"
                      } px-1`}
                      aria-label="Toggle marketing cookies"
                    >
                      <div className="w-4 h-4 bg-white rounded-full shadow-md"></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="border-t border-slate-200 dark:border-cyan-500/10 p-6 space-y-3">
              <button
                onClick={handleSavePreferences}
                className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 dark:from-cyan-500 dark:to-blue-600 dark:hover:from-cyan-400 dark:hover:to-blue-500 text-white transition-all duration-300 shadow-lg shadow-cyan-500/30 dark:shadow-cyan-500/40 hover:shadow-cyan-500/50 dark:hover:shadow-cyan-500/60 hover:scale-[1.02] transform"
                style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 600 }}
              >
                Save Preferences
              </button>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleAcceptAll}
                  className="flex-1 py-2.5 px-4 rounded-lg border-2 border-cyan-500 dark:border-cyan-400 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-900/20 transition-all duration-300 text-sm"
                  style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 600 }}
                >
                  Accept All
                </button>
                <button
                  onClick={handleRejectAll}
                  className="flex-1 py-2.5 px-4 rounded-lg border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 text-sm"
                  style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 600 }}
                >
                  Reject All
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
