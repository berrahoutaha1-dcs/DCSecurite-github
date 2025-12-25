import { useTheme } from "./ThemeContext";
const logo01 = "/assets/fd5830403f5fa5afaa4df39a78ebb2bf8b18b376.png";
const logo02 = "/assets/01ed0b095ab49d06f46b879c92f636d521fc85a4.png";
const logo04 = "/assets/f87c6934d7c6385c7f0775b9e0fc6c1f249e838d.png";
const cdeLogo = "/assets/42d59f6b357dcb3853d38f05884c3c08cb94d2b2.png";

// Black logos for light mode
const cdeLogoBlack = "/assets/94e2a9fafa2d20b450ee8f4c5e0ebaef02d2c7c0.png";
const logo02Black = "/assets/6376187db9cd5be08a3afca4bc58de4b70886b4c.png";

export function NationalRecognitionBanner() {
  const { theme } = useTheme();
  const partners = [
    {
      logo: logo01,
      alt: "BLCC - Cybercrime Fighting",
      url: "https://www.algeriepolice.dz/",
    },
    {
      logo: theme === "dark" ? logo02 : logo02Black,
      alt: "Startup.dz",
      url: "https://startup.dz/",
    },
    {
      logo: logo04,
      alt: "MESRS - Ministry of Higher Education and Scientific Research",
      url: "https://www.mesrs.dz/",
    },
    {
      logo: theme === "dark" ? cdeLogo : cdeLogoBlack,
      alt: "CDE - Centre de Développement de l'Entrepreneuriat",
      url: "https://cde.dz/",
    },
  ];

  return (
    <section
      id="national-recognition-banner"
      className="relative py-16 md:py-20 overflow-hidden"
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

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl mb-3"
            style={{ color: theme === "dark" ? "#ffffff" : "#000000" }}
          >
            National Recognition
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto"></div>
        </div>

        {/* Logos Grid */}
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 lg:gap-20">
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-transform duration-300 hover:scale-105"
            >
              <img
                src={partner.logo}
                alt={partner.alt}
                className="h-24 md:h-28 lg:h-32 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
