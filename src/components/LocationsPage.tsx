import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Globe } from "lucide-react";
const bannerImage = "/assets/3e85bf23c1b3225bd492e2b7b2aba331b97c5a94.png";
import { useState } from "react";
import { useTheme } from "./ThemeContext";

interface LocationCardProps {
  city: string;
  country: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  region: string;
  isHeadquarters?: boolean;
  coordinates?: { lat: number; lng: number };
}

const LocationCard = ({
  city,
  country,
  address,
  phone,
  email,
  hours,
  isHeadquarters,
}: LocationCardProps) => {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(13, 110, 255, 0.2)" }}
      className={`backdrop-blur-md rounded-lg p-4 sm:p-6 md:p-8 hover:border-[#0D6EFF]/70 transition-all duration-300 relative overflow-hidden group ${
        theme === "dark"
          ? "bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50"
          : "bg-gradient-to-br from-white/90 to-gray-50/90 border border-gray-300/50"
      }`}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D6EFF]/0 to-[#0D6EFF]/0 group-hover:from-[#0D6EFF]/5 group-hover:to-transparent transition-all duration-500" />

      <div className="relative z-10">
        <div className="flex flex-col sm:flex-row items-start justify-between mb-6 gap-3">
          <div>
            <h3
              className={`mb-2 text-xl sm:text-2xl ${theme === "dark" ? "text-white" : "text-gray-900"}`}
              style={{ fontFamily: "Calibri, sans-serif", fontWeight: "bold" }}
            >
              {city}
            </h3>
            <p
              className={`text-base sm:text-lg ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
              style={{ fontFamily: "Calibri, sans-serif" }}
            >
              {country}
            </p>
          </div>
          {isHeadquarters && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-[#0D6EFF]/30 to-[#0099FF]/30 text-[#0D6EFF] rounded-full border border-[#0D6EFF]/50 backdrop-blur-sm text-xs sm:text-sm"
              style={{ fontFamily: "Calibri, sans-serif", fontWeight: "bold" }}
            >
              Headquarters
            </motion.span>
          )}
        </div>

        <div className="space-y-3 sm:space-y-4">
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#0D6EFF] flex-shrink-0 mt-1" />
            <p
              className={`leading-relaxed text-sm sm:text-base ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
              style={{ fontFamily: "Calibri, sans-serif" }}
            >
              {address}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#0D6EFF] flex-shrink-0" />
            <a
              href={`tel:${phone}`}
              className={`text-sm sm:text-base hover:text-[#0D6EFF] transition-colors ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
              style={{ fontFamily: "Calibri, sans-serif" }}
            >
              {phone}
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#0D6EFF] flex-shrink-0" />
            <a
              href={`mailto:${email}`}
              className={`text-sm sm:text-base hover:text-[#0D6EFF] transition-colors break-all ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
              style={{ fontFamily: "Calibri, sans-serif" }}
            >
              {email}
            </a>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#0D6EFF] flex-shrink-0 mt-1" />
            <p
              className={`text-sm sm:text-base ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
              style={{ fontFamily: "Calibri, sans-serif" }}
            >
              {hours}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const WorldMapVisualization = ({ selectedRegion }: { selectedRegion: string }) => {
  const { theme } = useTheme();
  const coordinates = { lat: 35.70670597125402, lng: -0.6214977252430316 };

  return (
    <div
      className={`relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-xl sm:rounded-2xl border border-[#0D6EFF]/30 overflow-hidden ${
        theme === "dark"
          ? "bg-gradient-to-br from-gray-900/50 to-black/50"
          : "bg-gradient-to-br from-gray-100/50 to-white/50"
      }`}
    >
      {/* Interactive Map */}
      <iframe
        src={`https://www.openstreetmap.org/export/embed.html?bbox=${coordinates.lng - 0.02},${coordinates.lat - 0.02},${coordinates.lng + 0.02},${coordinates.lat + 0.02}&layer=mapnik&marker=${coordinates.lat},${coordinates.lng}`}
        className="w-full h-full border-0"
        style={{
          filter:
            theme === "dark"
              ? "invert(90%) hue-rotate(180deg) brightness(0.9) contrast(1.1)"
              : "none",
        }}
        title="Office Location Map"
      />

      {/* "Open in Maps" button overlay */}
      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 z-10">
        <a
          href="https://maps.app.goo.gl/pjVBpdWSMQhPzmx76"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 bg-gradient-to-r from-[#0D6EFF] to-[#0099FF] text-white rounded-md sm:rounded-lg shadow-lg hover:shadow-[#0D6EFF]/50 transition-all duration-300 flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm"
          style={{ fontFamily: "Calibri, sans-serif", fontWeight: "bold" }}
        >
          <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
          <span className="hidden sm:inline">Open in Maps</span>
          <span className="sm:hidden">Maps</span>
        </a>
      </div>

      {/* Location label overlay */}
      <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 md:bottom-6 md:left-6 z-10">
        <div
          className={`backdrop-blur-md border border-[#0D6EFF]/50 rounded-md sm:rounded-lg px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 ${
            theme === "dark" ? "bg-black/80" : "bg-white/80"
          }`}
        >
          <p
            className={`text-sm sm:text-base md:text-lg ${theme === "dark" ? "text-white" : "text-gray-900"}`}
            style={{ fontFamily: "Calibri, sans-serif", fontWeight: "bold" }}
          >
            📍 Oran, Algeria
          </p>
          <p
            className={`text-xs sm:text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
            style={{ fontFamily: "Calibri, sans-serif" }}
          >
            Headquarters Location
          </p>
        </div>
      </div>
    </div>
  );
};

export const LocationsPage = () => {
  const { theme } = useTheme();
  const [selectedRegion, setSelectedRegion] = useState("All Regions");

  const locations: LocationCardProps[] = [
    {
      city: "Oran city",
      country: "Algeria",
      region: "Africa & Middle East",
      address: "Résidence les jardins d'acile, Gambetta-Oran 31000, Algeria",
      phone: "+213 668 959 953",
      email: "contact@dcsecurite.com",
      hours: "Saturday - Thursday: 9:00 AM - 5:00 PM",
      isHeadquarters: true,
      coordinates: { lat: 35.6969, lng: -0.6331 },
    },
  ];

  const regions = ["All Regions", "Americas", "Europe", "Africa & Middle East", "Asia Pacific"];

  const filteredLocations =
    selectedRegion === "All Regions"
      ? locations
      : locations.filter((loc) => loc.region === selectedRegion);

  const stats = [
    { number: "1", label: "Global Office" },
    { number: "1", label: "Continent" },
    { number: "24/7", label: "Support" },
    { number: "50+", label: "Countries Served" },
  ];

  return (
    <div className={`min-h-screen ${theme === "dark" ? "bg-[#0a0a0a]" : "bg-white"}`}>
      {/* Banner Section */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="w-full h-full"
        >
          <img
            src={bannerImage}
            alt="Global Locations"
            className="w-full h-full object-cover brightness-110"
          />
          <div
            className={`absolute inset-0 ${
              theme === "dark"
                ? "bg-gradient-to-b from-black/40 via-black/30 to-[#0a0a0a]"
                : "bg-gradient-to-b from-black/30 via-black/20 to-white"
            }`}
          />
        </motion.div>

        {/* Banner Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-start text-center px-4 pt-24 sm:pt-32 md:pt-40 lg:pt-56">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <div className="flex items-center justify-center gap-4 mb-2">
              <Globe className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 text-[#0D6EFF]" />
            </div>
            <h1
              className={`drop-shadow-2xl ${theme === "dark" ? "text-white" : "text-gray-900"}`}
              style={{
                fontFamily: "Calibri, sans-serif",
                fontSize: "clamp(1.8rem, 5vw, 5rem)",
                fontWeight: "bold",
                textShadow:
                  theme === "dark"
                    ? "0 4px 20px rgba(0, 0, 0, 0.8), 0 2px 10px rgba(13, 110, 255, 0.3)"
                    : "0 2px 10px rgba(13, 110, 255, 0.2)",
              }}
            >
              Our Global Presence
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`max-w-3xl text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed px-2 ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
            style={{ fontFamily: "Calibri, sans-serif" }}
          >
            Protecting organizations worldwide with local expertise and global cybersecurity
            excellence
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8 md:mt-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
                className="text-center"
              >
                <div
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#0D6EFF] mb-1 sm:mb-2"
                  style={{ fontFamily: "Calibri, sans-serif", fontWeight: "bold" }}
                >
                  {stat.number}
                </div>
                <div
                  className={`text-xs sm:text-sm md:text-base ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
                  style={{ fontFamily: "Calibri, sans-serif" }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Interactive World Map */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2
            className={`mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl ${theme === "dark" ? "text-white" : "text-gray-900"}`}
            style={{ fontFamily: "Calibri, sans-serif", fontWeight: "bold" }}
          >
            Where We Operate
          </h2>
          <p
            className={`max-w-3xl mx-auto text-sm sm:text-base md:text-lg px-2 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
            style={{ fontFamily: "Calibri, sans-serif" }}
          >
            Our strategically located offices enable us to provide rapid response and localized
            support across the globe
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <WorldMapVisualization selectedRegion={selectedRegion} />
        </motion.div>
      </div>

      {/* Region Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-8 sm:pb-10 md:pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 sm:gap-5 md:gap-6"
        >
          {regions.map((region) => (
            <motion.button
              key={region}
              onClick={() => setSelectedRegion(region)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`
                relative px-5 sm:px-6 md:px-7 py-3 sm:py-3.5 
                rounded-[16px] transition-all duration-300 
                text-sm sm:text-base
                ${
                  selectedRegion === region
                    ? "bg-gradient-to-r from-[#007BFF] to-[#00A8FF] text-white shadow-[0_0_30px_rgba(0,123,255,0.4)] border border-[#00A8FF]/50"
                    : theme === "dark"
                      ? "bg-[#1A1D21] text-[#A6AAB2] border border-white/[0.08] hover:bg-[#24272C] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]"
                      : "bg-[#F5F6F7] text-[#6B7280] border border-black/[0.08] hover:bg-[#E5E7EB] shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)]"
                }
              `}
              style={{
                fontFamily: "Calibri, sans-serif",
                fontWeight: selectedRegion === region ? 600 : 500,
                minHeight: "46px",
              }}
            >
              {/* Glow effect overlay for active button */}
              {selectedRegion === region && (
                <div className="absolute inset-0 rounded-[16px] bg-gradient-to-r from-[#007BFF]/20 to-[#00A8FF]/20 blur-md -z-10" />
              )}
              {region}
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Locations Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2
            className={`mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl ${theme === "dark" ? "text-white" : "text-gray-900"}`}
            style={{ fontFamily: "Calibri, sans-serif", fontWeight: "bold" }}
          >
            Visit Our Offices
          </h2>
          <p
            className={`max-w-3xl mx-auto text-sm sm:text-base md:text-lg px-2 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
            style={{ fontFamily: "Calibri, sans-serif" }}
          >
            DCSecurite operates across multiple continents, providing 24/7 cybersecurity services to
            clients worldwide. Contact any of our offices to learn more about how we can protect
            your organization.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {filteredLocations.map((location, index) => (
            <LocationCard key={`${location.city}-${index}`} {...location} />
          ))}
        </div>

        {filteredLocations.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 sm:py-16 md:py-20"
          >
            <p
              className={`text-lg sm:text-xl ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
              style={{ fontFamily: "Calibri, sans-serif" }}
            >
              No offices found in this region
            </p>
          </motion.div>
        )}
      </div>

      {/* Additional Info Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-br from-[#0D6EFF]/10 via-[#0099FF]/5 to-transparent border border-[#0D6EFF]/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 text-center overflow-hidden"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `radial-gradient(circle, #0D6EFF 1px, transparent 1px)`,
                backgroundSize: "30px 30px",
              }}
            />
          </div>

          <div className="relative z-10">
            <h3
              className={`mb-3 sm:mb-4 text-xl sm:text-2xl md:text-3xl ${theme === "dark" ? "text-white" : "text-gray-900"}`}
              style={{ fontFamily: "Calibri, sans-serif", fontWeight: "bold" }}
            >
              Can&apos;t Find Your Location?
            </h3>
            <p
              className={`mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed px-2 ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
              style={{ fontFamily: "Calibri, sans-serif" }}
            >
              We&apos;re constantly expanding our global presence. Even if you don&apos;t see an
              office near you, our remote cybersecurity services are available worldwide with the
              same level of excellence.
            </p>
            <motion.a
              href={`https://wa.me/213668959953?text=${encodeURIComponent("Je souhaite prendre rendez-vous avec l'un des responsables pour discuter d'une question relative à la sécurité de mon entreprise.")}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 bg-[#7b7b7b] text-white rounded-md sm:rounded-lg hover:shadow-2xl hover:shadow-[#7b7b7b]/50 transition-all duration-300 text-sm sm:text-base md:text-lg"
              style={{ fontFamily: "Calibri, sans-serif", fontWeight: "bold" }}
            >
              Contact Us Today
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
