import { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { X, Shield, AlertTriangle, AlertCircle, CheckCircle } from "lucide-react";
const mapImage = "/assets/bee86a32b4c29adab24cdf19369b852a8234b038.png";

interface CountryThreatData {
  name: string;
  threatLevel: "High" | "Medium" | "Low" | "Very Low" | "Default";
  notes: string;
}

interface ThreatMapProps {
  onClose?: () => void;
}

export function ThreatMap({ onClose }: ThreatMapProps) {
  const [selectedCountry, setSelectedCountry] = useState<CountryThreatData | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [transformOrigin, setTransformOrigin] = useState("center center");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    // High-precision cursor position in pixels
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate percentage position for transform origin
    const percentX = (x / rect.width) * 100;
    const percentY = (y / rect.height) * 100;

    // Set transform origin to cursor position for precise zoom
    setTransformOrigin(`${percentX}% ${percentY}%`);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    // Reset to center when mouse leaves
    setTransformOrigin("center center");
  };

  // Threat level data
  const threatData: Record<string, CountryThreatData> = {
    // North America
    "United States": {
      name: "United States",
      threatLevel: "High",
      notes: "The most targeted country globally",
    },
    Canada: {
      name: "Canada",
      threatLevel: "Medium",
      notes: "Moderate targeting on critical infrastructure",
    },
    Mexico: { name: "Mexico", threatLevel: "Medium", notes: "Increase in ransomware attacks" },

    // South America
    Brazil: {
      name: "Brazil",
      threatLevel: "High",
      notes: "Most targeted country in Latin America",
    },
    Argentina: {
      name: "Argentina",
      threatLevel: "Medium",
      notes: "Attacks on government institutions",
    },
    Chile: { name: "Chile", threatLevel: "Medium", notes: "Attacks on the energy sector" },
    Colombia: { name: "Colombia", threatLevel: "Medium", notes: "Waves of DDoS attacks" },
    Peru: { name: "Peru", threatLevel: "Low", notes: "Limited activity" },
    Bolivia: { name: "Bolivia", threatLevel: "Low", notes: "Low threat level" },
    Ecuador: { name: "Ecuador", threatLevel: "Medium", notes: "Politically motivated attacks" },
    Venezuela: { name: "Venezuela", threatLevel: "Medium", notes: "Government-focused attacks" },
    Uruguay: { name: "Uruguay", threatLevel: "Low", notes: "Very limited activity" },
    Paraguay: { name: "Paraguay", threatLevel: "Low", notes: "Low cyber activity" },

    // Europe
    "United Kingdom": {
      name: "United Kingdom",
      threatLevel: "High",
      notes: "2nd most targeted country globally",
    },
    Germany: { name: "Germany", threatLevel: "High", notes: "Heavy industrial targeting" },
    France: { name: "France", threatLevel: "High", notes: "High ransomware activity" },
    Italy: { name: "Italy", threatLevel: "Medium", notes: "Frequent data breaches" },
    Spain: { name: "Spain", threatLevel: "Medium", notes: "Moderate activity" },
    Poland: { name: "Poland", threatLevel: "High", notes: "Among highest targeted in Q2 2025" },
    Netherlands: { name: "Netherlands", threatLevel: "Medium", notes: "Banking sector attacks" },
    Belgium: { name: "Belgium", threatLevel: "Medium", notes: "Moderate threat" },
    Sweden: { name: "Sweden", threatLevel: "Medium", notes: "Government-focused attacks" },
    Norway: { name: "Norway", threatLevel: "Low", notes: "Limited threat" },
    Denmark: { name: "Denmark", threatLevel: "Medium", notes: "Supply-chain cyberattacks" },
    Portugal: { name: "Portugal", threatLevel: "Low", notes: "Medium-to-low threats" },
    Switzerland: { name: "Switzerland", threatLevel: "Medium", notes: "Financial system attacks" },
    Austria: { name: "Austria", threatLevel: "Low", notes: "Minimal activity" },
    Greece: { name: "Greece", threatLevel: "Medium", notes: "Hacktivism incidents" },
    Romania: { name: "Romania", threatLevel: "Medium", notes: "Noticeable cyber activity" },
    Hungary: { name: "Hungary", threatLevel: "Low", notes: "Low cybersecurity threat level" },
    Bulgaria: { name: "Bulgaria", threatLevel: "Low", notes: "Limited data" },
    Slovakia: { name: "Slovakia", threatLevel: "Low", notes: "Low threat" },
    "Czech Republic": {
      name: "Czech Republic",
      threatLevel: "Medium",
      notes: "Some security incidents",
    },
    Serbia: { name: "Serbia", threatLevel: "Medium", notes: "Hacktivism activity" },
    Ukraine: { name: "Ukraine", threatLevel: "High", notes: "Ongoing cyber warfare" },
    Russia: { name: "Russia", threatLevel: "High", notes: "High offensive and defensive activity" },
    Finland: { name: "Finland", threatLevel: "Medium", notes: "Infrastructure targeting" },

    // Middle East
    Israel: { name: "Israel", threatLevel: "High", notes: "Among the highest targeted globally" },
    "Saudi Arabia": {
      name: "Saudi Arabia",
      threatLevel: "Medium",
      notes: "Attacks on critical sectors",
    },
    "United Arab Emirates": {
      name: "United Arab Emirates",
      threatLevel: "Medium",
      notes: "High financial-sector targeting",
    },
    Qatar: { name: "Qatar", threatLevel: "Medium", notes: "Significant cyber activity" },
    Kuwait: { name: "Kuwait", threatLevel: "Low", notes: "Low threat level" },
    Bahrain: { name: "Bahrain", threatLevel: "Low", notes: "Limited attacks" },
    Oman: { name: "Oman", threatLevel: "Low", notes: "Low exposure" },
    Iraq: { name: "Iraq", threatLevel: "Medium", notes: "Mixed cyber activity" },
    Iran: { name: "Iran", threatLevel: "High", notes: "Heavy reciprocal cyber warfare" },
    Turkey: { name: "Turkey", threatLevel: "High", notes: "High-volume attacks" },
    Jordan: { name: "Jordan", threatLevel: "Low", notes: "Minimal activity" },
    Lebanon: { name: "Lebanon", threatLevel: "Medium", notes: "Banking system attacks" },
    Syria: { name: "Syria", threatLevel: "Medium", notes: "Hacktivism and political targeting" },

    // Africa
    "South Africa": { name: "South Africa", threatLevel: "High", notes: "Most targeted in Africa" },
    Morocco: {
      name: "Morocco",
      threatLevel: "Medium",
      notes: "2nd highest in Africa; strong DDoS activity",
    },
    Algeria: { name: "Algeria", threatLevel: "Medium", notes: "Malware and DDoS incidents" },
    Tunisia: { name: "Tunisia", threatLevel: "Low", notes: "Medium-to-low threats" },
    Libya: { name: "Libya", threatLevel: "Low", notes: "Limited data" },
    Egypt: { name: "Egypt", threatLevel: "Medium", notes: "Moderate cyber exposure" },
    Nigeria: { name: "Nigeria", threatLevel: "Medium", notes: "High cybercrime activity" },
    Kenya: { name: "Kenya", threatLevel: "Medium", notes: "Telecom sector attacks" },
    Ethiopia: { name: "Ethiopia", threatLevel: "Low", notes: "Low threat" },
    Ghana: { name: "Ghana", threatLevel: "Low", notes: "Low cyber incidents" },
    Senegal: { name: "Senegal", threatLevel: "Low", notes: "Limited activity" },
    Chad: { name: "Chad", threatLevel: "Very Low", notes: "Very low exposure" },
    Mali: { name: "Mali", threatLevel: "Very Low", notes: "Minimal cyber activity" },
    "Ivory Coast": { name: "Ivory Coast", threatLevel: "Low", notes: "Low threat level" },

    // Asia
    China: { name: "China", threatLevel: "High", notes: "One of the top targeted globally" },
    India: { name: "India", threatLevel: "High", notes: "Among top 10 worldwide" },
    Japan: { name: "Japan", threatLevel: "High", notes: "Industrial and governmental attacks" },
    "South Korea": {
      name: "South Korea",
      threatLevel: "High",
      notes: "Threats linked to North Korea",
    },
    "North Korea": {
      name: "North Korea",
      threatLevel: "Medium",
      notes: "Limited inbound, more outbound activity",
    },
    Pakistan: { name: "Pakistan", threatLevel: "Medium", notes: "Regional cyber conflict" },
    Bangladesh: { name: "Bangladesh", threatLevel: "Low", notes: "Low threat" },
    Indonesia: { name: "Indonesia", threatLevel: "Medium", notes: "Ransomware activity" },
    Philippines: {
      name: "Philippines",
      threatLevel: "Medium",
      notes: "Widespread cyber incidents",
    },
    Malaysia: { name: "Malaysia", threatLevel: "Low", notes: "Medium-to-low threats" },
    Singapore: { name: "Singapore", threatLevel: "Medium", notes: "Targeting of tech sector" },
    Thailand: { name: "Thailand", threatLevel: "Low", notes: "Limited cyber activity" },
    Vietnam: { name: "Vietnam", threatLevel: "Medium", notes: "Growing cyber activity" },
    Cambodia: { name: "Cambodia", threatLevel: "Low", notes: "Low threat" },
    Laos: { name: "Laos", threatLevel: "Very Low", notes: "Very low activity" },
    Nepal: { name: "Nepal", threatLevel: "Very Low", notes: "Minimal attacks" },

    // Oceania
    Australia: { name: "Australia", threatLevel: "High", notes: "Most targeted in the region" },
    "New Zealand": { name: "New Zealand", threatLevel: "Medium", notes: "Moderate activity" },
    Fiji: { name: "Fiji", threatLevel: "Low", notes: "Very limited attacks" },
    "Papua New Guinea": {
      name: "Papua New Guinea",
      threatLevel: "Low",
      notes: "Minimal cyber incidents",
    },
    Samoa: { name: "Samoa", threatLevel: "Very Low", notes: "Extremely low activity" },
  };

  const getThreatColor = (level: string): string => {
    switch (level) {
      case "High":
        return "#8B0000"; // Dark Red
      case "Medium":
        return "#FF6B6B"; // Light Red
      case "Low":
        return "#006400"; // Dark Green
      case "Very Low":
        return "#CBD5E1"; // Gray (slate-300)
      default:
        return "#CBD5E1"; // Default gray
    }
  };

  const getThreatIcon = (level: string) => {
    switch (level) {
      case "High":
        return <AlertTriangle className="w-5 h-5 text-red-700 dark:text-red-500" />;
      case "Medium":
        return <AlertCircle className="w-5 h-5 text-red-400" />;
      case "Low":
        return <CheckCircle className="w-5 h-5 text-green-700 dark:text-green-500" />;
      case "Very Low":
        return <CheckCircle className="w-5 h-5 text-slate-400" />;
      default:
        return null;
    }
  };

  const getCountryStats = () => {
    const stats = {
      high: 0,
      medium: 0,
      low: 0,
      veryLow: 0,
    };

    Object.values(threatData).forEach((country) => {
      switch (country.threatLevel) {
        case "High":
          stats.high++;
          break;
        case "Medium":
          stats.medium++;
          break;
        case "Low":
          stats.low++;
          break;
        case "Very Low":
          stats.veryLow++;
          break;
      }
    });

    return stats;
  };

  const stats = getCountryStats();

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0F1F] pt-60 pb-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="relative">
              <Shield className="w-10 h-10 md:w-12 md:h-12 text-cyan-600 dark:text-cyan-400" />
              <div className="absolute inset-0 bg-cyan-400 dark:bg-cyan-500 blur-lg opacity-30 dark:opacity-50"></div>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl text-slate-900 dark:text-white">
              Global Threat Map
            </h1>
          </div>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400">
            Cyber Attack Exposure 2025
          </p>
        </motion.div>

        {/* World Map Image with Zoom Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative bg-slate-900 rounded-2xl p-4 md:p-8 mb-8 overflow-hidden"
        >
          <div
            className="relative w-full overflow-hidden rounded-lg"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <motion.img
              src={mapImage}
              alt="Global Cyber Threat Map"
              className="w-full h-auto cursor-pointer"
              style={{
                transformOrigin: transformOrigin,
                maxHeight: "80vh",
                objectFit: "contain",
              }}
              animate={{
                scale: isHovering ? 2.7 : 1,
              }}
              transition={{
                scale: {
                  type: "spring",
                  stiffness: 260,
                  damping: 26,
                  mass: 0.5,
                },
              }}
            />
          </div>
        </motion.div>

        {/* Country List for Reference */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white dark:bg-slate-900/50 rounded-2xl p-6 md:p-8 border-2 border-slate-200 dark:border-cyan-500/20"
        >
          <h2 className="text-2xl md:text-3xl text-slate-900 dark:text-white mb-6">
            Threat Level Details by Country
          </h2>

          <div className="bg-slate-100 dark:bg-slate-800/50 rounded-lg p-4 mb-6 border-l-4 border-cyan-500">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Data Source Notice
            </h3>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              This classification is based on trends and reports published by leading cybersecurity
              organizations, including the Microsoft Digital Defense Report, IBM X-Force Threat
              Intelligence Index, and analyses from Kaspersky, CrowdStrike, and Trend Micro. This
              table is not an official unified source; it represents an aggregated assessment
              derived from publicly available global cybersecurity insights for the year 2025.
            </p>
          </div>

          {/* Mobile Card View */}
          <div className="block md:hidden space-y-3">
            {Object.entries(threatData)
              .sort((a, b) => {
                const levelOrder = { High: 0, Medium: 1, Low: 2, "Very Low": 3, Default: 4 };
                const levelDiff = levelOrder[a[1].threatLevel] - levelOrder[b[1].threatLevel];
                if (levelDiff !== 0) return levelDiff;
                return a[1].name.localeCompare(b[1].name);
              })
              .map(([country, data]) => (
                <div
                  key={country}
                  className="bg-slate-50 dark:bg-slate-800/30 rounded-lg p-4 border border-slate-200 dark:border-slate-700"
                >
                  <div className="font-semibold text-slate-900 dark:text-white mb-2">
                    {data.name}
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    {getThreatIcon(data.threatLevel)}
                    <span
                      className="px-3 py-1 rounded-full text-white text-sm font-medium"
                      style={{ backgroundColor: getThreatColor(data.threatLevel) }}
                    >
                      {data.threatLevel}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{data.notes}</p>
                </div>
              ))}
          </div>

          {/* Desktop Table View */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-300 dark:border-slate-700">
                  <th className="text-left py-4 px-4 text-slate-900 dark:text-white font-semibold">
                    Country
                  </th>
                  <th className="text-left py-4 px-4 text-slate-900 dark:text-white font-semibold">
                    Threat Level
                  </th>
                  <th className="text-left py-4 px-4 text-slate-900 dark:text-white font-semibold">
                    Analysis
                  </th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(threatData)
                  .sort((a, b) => {
                    // Sort by threat level first, then alphabetically
                    const levelOrder = { High: 0, Medium: 1, Low: 2, "Very Low": 3, Default: 4 };
                    const levelDiff = levelOrder[a[1].threatLevel] - levelOrder[b[1].threatLevel];
                    if (levelDiff !== 0) return levelDiff;
                    return a[1].name.localeCompare(b[1].name);
                  })
                  .map(([country, data]) => (
                    <tr
                      key={country}
                      className="border-b border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                    >
                      <td className="py-4 px-4 text-slate-900 dark:text-white">{data.name}</td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          {getThreatIcon(data.threatLevel)}
                          <span
                            className="px-3 py-1 rounded-full text-white text-sm font-medium"
                            style={{ backgroundColor: getThreatColor(data.threatLevel) }}
                          >
                            {data.threatLevel}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-slate-600 dark:text-slate-400 text-sm">
                        {data.notes}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Country Details Modal */}
        {selectedCountry && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
            onClick={() => setSelectedCountry(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-[#0A0F1F] rounded-2xl shadow-2xl border-2 max-w-lg w-full"
              style={{ borderColor: getThreatColor(selectedCountry.threatLevel) }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {getThreatIcon(selectedCountry.threatLevel)}
                    <h3 className="text-2xl text-slate-900 dark:text-white">
                      {selectedCountry.name}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedCountry(null)}
                    className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    <X className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                      Threat Level
                    </div>
                    <div
                      className="inline-block px-4 py-2 rounded-lg text-white"
                      style={{ backgroundColor: getThreatColor(selectedCountry.threatLevel) }}
                    >
                      {selectedCountry.threatLevel}
                    </div>
                  </div>

                  <div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 mb-2">Analysis</div>
                    <p className="text-slate-900 dark:text-white">{selectedCountry.notes}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
