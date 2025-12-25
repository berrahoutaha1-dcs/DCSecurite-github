import { useTheme } from "./ThemeContext";
const lightModeBanner = "/assets/b98e3e08aa646a99869d0c8b365eb4f37450ad92.png";
const darkModeBanner = "/assets/352aa629bd3def5ca84585b5be5df54151184110.png";

export function PartnerBanner() {
  const { theme } = useTheme();

  return (
    <section
      id="partner-banner"
      className="relative bg-white pt-12 md:pt-16 pb-0 overflow-hidden"
      style={{ backgroundColor: theme === "dark" ? "#1a1a1a" : "#ffffff" }}
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

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="flex justify-center items-center">
          <img
            src={theme === "dark" ? darkModeBanner : lightModeBanner}
            alt="DCSecurite - Cyber Security Partner of Décision - Next Cyber Force"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
