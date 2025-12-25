import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Users,
  Award,
  Trophy,
  Star,
  ArrowRight,
  ExternalLink,
  Globe,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Footer } from "./Footer";
const eventImage = "/assets/29e8bba5980a78580e64542731f7b9de4e462338.png";
const eventImage1 = "/assets/dc73bc4d45cd6123133d77df5801eca6ef222eb7.png";
const eventImage2 = "/assets/824aa828c1b2e5619c74aba2baf7b91ed629c592.png";
import { useState } from "react";
import { API_BASE_URL } from "../config";

interface EventsPageProps {
  onPrivacyClick?: () => void;
  onTermsClick?: () => void;
  onCookieClick?: () => void;
  onDoNotSellClick?: () => void;
  onUnderAttackClick?: () => void;
  onBackClick?: () => void;
}

export function EventsPage({
  onPrivacyClick,
  onTermsClick,
  onCookieClick,
  onDoNotSellClick,
  onUnderAttackClick,
  onBackClick,
}: EventsPageProps) {
  const [showContactForm, setShowContactForm] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    whoAreYou: "",
    company: "",
    country: "",
    phone: "",
    email: "",
    referrer: "",
    proposition: "",
    budget: "",
  });

  const eventImages = [eventImage, eventImage1, eventImage2];

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const payload = {
        full_name: formData.fullName,
        organization_type: formData.whoAreYou,
        organization_name: formData.company,
        country: formData.country,
        phone: formData.phone,
        email: formData.email,
        referrer: formData.referrer,
        budget: formData.budget,
        proposition: formData.proposition,
      };

      const response = await fetch(`${API_BASE_URL}/api/event-offers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to submit offer");
      }

      // Close main form
      setShowContactForm(false);
      // Show confirmation
      setShowConfirmation(true);
      // Reset form
      setFormData({
        fullName: "",
        whoAreYou: "",
        company: "",
        country: "",
        phone: "",
        email: "",
        referrer: "",
        proposition: "",
        budget: "",
      });
    } catch (error) {
      console.error("Submission failed:", error);
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const featuredEvent = {
    title: "INGECODE Cybersecurity compitition 2024",
    location: "Higher School of Computer Science, SBA, Algeria",
    date: "November 2024",
    sponsorLevel: "Gold Sponsor",
    description:
      "DCSecurite is sponsoring one of the leading cybersecurity competitions in Algeria, which brings together researchers and students to participate in the CTF competition.",
    attendees: "100+",
    image: eventImages[currentImageIndex],
    highlights: [
      "Keynote presentations on AI-powered threat detection",
      "Hands-on workshops for students and professionals",
      "Networking sessions with industry experts",
      "Live CTF competitions and demonstrations",
    ],
  };

  const pastEvents = [
    {
      title: "African Cyber Summit 2024",
      location: "Cairo, Egypt",
      date: "September 2024",
      sponsorLevel: "Gold Sponsor",
      attendees: "800+",
      type: "Conference",
    },
    {
      title: "MaghrebSec Conference",
      location: "Tunis, Tunisia",
      date: "July 2024",
      sponsorLevel: "Platinum Sponsor",
      attendees: "600+",
      type: "Conference",
    },
    {
      title: "Algeria Cyber Week",
      location: "Algiers, Algeria",
      date: "May 2024",
      sponsorLevel: "Gold Sponsor",
      attendees: "1000+",
      type: "Multi-day Event",
    },
    {
      title: "SecureOps Workshop Series",
      location: "Oran, Algeria",
      date: "March 2024",
      sponsorLevel: "Lead Sponsor",
      attendees: "250+",
      type: "Workshop",
    },
    {
      title: "MENA Threat Intelligence Summit",
      location: "Dubai, UAE",
      date: "January 2024",
      sponsorLevel: "Gold Sponsor",
      attendees: "900+",
      type: "Summit",
    },
    {
      title: "University Cyber Challenge",
      location: "Constantine, Algeria",
      date: "December 2023",
      sponsorLevel: "Title Sponsor",
      attendees: "400+",
      type: "Competition",
    },
  ];

  const upcomingEvents = [
    {
      title: "North Africa Security Forum 2025",
      location: "Casablanca, Morocco",
      date: "February 2025",
      sponsorLevel: "Gold Sponsor",
      status: "Confirmed",
    },
    {
      title: "AI & Cybersecurity Conference",
      location: "Algiers, Algeria",
      date: "April 2025",
      sponsorLevel: "Platinum Sponsor",
      status: "Confirmed",
    },
    {
      title: "Pan-African Cyber Defence Summit",
      location: "Nairobi, Kenya",
      date: "June 2025",
      sponsorLevel: "Gold Sponsor",
      status: "Pending",
    },
  ];

  const sponsorshipBenefits = [
    {
      icon: Trophy,
      title: "Brand Visibility",
      description: "Logo placement across event materials and digital platforms",
    },
    {
      icon: Users,
      title: "Networking Access",
      description: "VIP access to exclusive networking sessions with industry leaders",
    },
    {
      icon: Star,
      title: "Speaking Opportunities",
      description: "Platform to share expertise through keynotes and panels",
    },
    {
      icon: Globe,
      title: "Community Impact",
      description: "Support cybersecurity education and professional development",
    },
  ];

  const getSponsorBadge = (level: string) => {
    const badges: { [key: string]: { color: string; gradient: string } } = {
      "Platinum Sponsor": { color: "text-slate-300", gradient: "from-slate-300 to-slate-500" },
      "Gold Sponsor": { color: "text-yellow-400", gradient: "from-yellow-400 to-yellow-600" },
      "Lead Sponsor": { color: "text-cyan-400", gradient: "from-cyan-400 to-blue-500" },
      "Title Sponsor": { color: "text-purple-400", gradient: "from-purple-400 to-pink-500" },
    };
    return badges[level] || badges["Gold Sponsor"];
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-black dark:text-white">
      {/* Home Button */}
      <div className="fixed top-6 left-6 z-50">
        <button
          onClick={onBackClick}
          className="px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors flex items-center gap-2 text-slate-900 dark:text-white"
        >
          <ArrowRight className="w-4 h-4 rotate-180" />
          <span>Home</span>
        </button>
      </div>

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ paddingTop: "7cm" }}
      >
        {/* Cyber Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000,transparent)]" />

        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500/10 border border-yellow-500/30 rounded-full mb-8 backdrop-blur-sm">
              <Trophy className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400 text-sm uppercase tracking-wider">
                Event Sponsorships
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight leading-tight">
              <span className="block bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-cyan-200 dark:to-white bg-clip-text text-transparent mb-2">
                Empowering the
              </span>
              <span className="block bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
                Cybersecurity Community
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto mb-12 leading-relaxed">
              As a proud Gold Sponsor of leading cybersecurity events across Africa and the MENA
              region, DCSecurite is committed to advancing cybersecurity education and innovation.
            </p>
          </motion.div>

          {/* Featured Event Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />

            <div className="relative bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative overflow-hidden">
                  <img
                    src={featuredEvent.image}
                    alt={featuredEvent.title}
                    className="w-full h-full object-cover min-h-[400px] group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* Sponsor Badge Overlay */}
                  <div className="absolute top-6 right-6">
                    <div className="px-6 py-3 bg-yellow-500 rounded-full shadow-xl">
                      <div className="flex items-center gap-2">
                        <Trophy className="w-5 h-5 text-yellow-900" />
                        <span className="text-yellow-900 uppercase tracking-wider">
                          Gold Sponsor
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    onClick={() =>
                      setCurrentImageIndex((prev) =>
                        prev === 0 ? eventImages.length - 1 : prev - 1
                      )
                    }
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full text-white transition-all duration-300 hover:scale-110 z-10"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={() =>
                      setCurrentImageIndex((prev) =>
                        prev === eventImages.length - 1 ? 0 : prev + 1
                      )
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full text-white transition-all duration-300 hover:scale-110 z-10"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>

                  {/* Image Indicators */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {eventImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${currentImageIndex === index
                          ? "bg-yellow-400 w-8"
                          : "bg-white/50 hover:bg-white/80"
                          }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6 w-fit">
                    <Star className="w-4 h-4 text-cyan-400" />
                    <span className="text-cyan-400 text-sm uppercase tracking-wider">
                      Featured Event
                    </span>
                  </div>

                  <h2 className="text-3xl lg:text-4xl mb-4 text-slate-900 dark:text-white">
                    {featuredEvent.title}
                  </h2>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                      <MapPin className="w-5 h-5 text-cyan-500" />
                      <span>{featuredEvent.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                      <Calendar className="w-5 h-5 text-cyan-500" />
                      <span>{featuredEvent.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                      <Users className="w-5 h-5 text-cyan-500" />
                      <span>{featuredEvent.attendees} Attendees</span>
                    </div>
                  </div>

                  <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                    {featuredEvent.description}
                  </p>

                  <div className="space-y-3">
                    <h3 className="text-sm uppercase tracking-wider text-slate-500 dark:text-slate-500">
                      Event Highlights
                    </h3>
                    <ul className="space-y-2">
                      {featuredEvent.highlights.map((highlight, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-slate-600 dark:text-slate-400"
                        >
                          <ArrowRight className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-black" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Upcoming Events
              </span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Join us at these upcoming cybersecurity events in 2025
            </p>
          </motion.div>

          {/* Coming Soon Message */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />

              <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-16 text-center shadow-lg">
                <Calendar className="w-16 h-16 text-cyan-500 mx-auto mb-6" />

                <h3 className="text-3xl md:text-4xl mb-4 text-slate-900 dark:text-white">
                  Coming Soon
                </h3>

                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  Stay tuned for announcements about our upcoming event sponsorships and
                  partnerships in 2025.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sponsorship Benefits Section */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white dark:from-black dark:via-slate-950 dark:to-black" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6">
              <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-cyan-200 dark:to-white bg-clip-text text-transparent">
                Why We Sponsor
              </span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Our commitment to advancing the cybersecurity ecosystem
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sponsorshipBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative inline-flex items-center justify-center w-20 h-20 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                  <benefit.icon className="w-10 h-10 text-cyan-500 relative z-10" />
                </div>

                <h3 className="text-xl mb-3 text-slate-900 dark:text-white">{benefit.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-black" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur-3xl opacity-10" />

            <div className="relative bg-white dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-800 rounded-2xl p-12 lg:p-16">
              <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-6" />

              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
                <span className="bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-cyan-200 bg-clip-text text-transparent">
                  Organize an event with DCS
                </span>
              </h2>

              <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed">
                Are you organizing a cybersecurity event? Partner with DCSecurite to bring
                cutting-edge security expertise and support to your community.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/70 flex items-center gap-2 text-white"
                  onClick={() => setShowContactForm(true)}
                >
                  <span>Contact Our Team</span>
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 lg:p-12 w-full max-w-3xl shadow-2xl my-8 border border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl text-slate-900 dark:text-white">
                Partner With Us
              </h2>
              <button
                className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                onClick={() => setShowContactForm(false)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <p className="text-slate-600 dark:text-slate-400 mb-8">
              Fill out this form to discuss sponsorship opportunities with our team.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-slate-700 dark:text-slate-300 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-700 dark:text-slate-300 mb-2">
                    Who Are You? <span className="text-red-500">*</span>
                  </label>
                  <select
                    className="w-full px-4 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                    value={formData.whoAreYou}
                    onChange={(e) => setFormData({ ...formData, whoAreYou: e.target.value })}
                    required
                  >
                    <option value="">Select your type</option>
                    <option value="University">University</option>
                    <option value="Company">Company</option>
                    <option value="Club">Club</option>
                    <option value="Organisation">Organisation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-slate-700 dark:text-slate-300 mb-2">
                    {formData.whoAreYou || "Company"} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder={`Your ${formData.whoAreYou || "Company"}`}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-700 dark:text-slate-300 mb-2">
                    Country <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    placeholder="Algeria"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-700 dark:text-slate-300 mb-2">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+213 XXX XXX XXX"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-700 dark:text-slate-300 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-700 dark:text-slate-300 mb-2">
                    Referrer
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                    value={formData.referrer}
                    onChange={(e) => setFormData({ ...formData, referrer: e.target.value })}
                    placeholder="How did you hear about us?"
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-700 dark:text-slate-300 mb-2">
                    Event Budget Prepared <span className="text-red-500">*</span>
                  </label>
                  <select
                    className="w-full px-4 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    required
                  >
                    <option value="">Select budget range</option>
                    <option value="I need budget (for students and clubs)">
                      I need budget (for students and clubs)
                    </option>
                    <option value="+$2,500">+$2,500</option>
                    <option value="+$5,000">+$5,000</option>
                    <option value="+$10,000">+$10,000</option>
                    <option value="+$30,000">+$30,000</option>
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm text-slate-700 dark:text-slate-300 mb-2">
                  Short Proposition <span className="text-red-500">*</span>
                </label>
                <textarea
                  className="w-full px-4 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 min-h-[120px] resize-y transition-all"
                  value={formData.proposition}
                  onChange={(e) => setFormData({ ...formData, proposition: e.target.value })}
                  placeholder="Briefly describe your event and partnership opportunity..."
                  required
                />
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  onClick={() => setShowContactForm(false)}
                  className="sm:flex-1 px-8 py-4 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-300 dark:hover:bg-slate-700 rounded-xl transition-all duration-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="sm:flex-1 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/70 text-white justify-center flex items-center gap-2"
                >
                  <span>Submit Request</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 lg:p-12 w-full max-w-3xl shadow-2xl my-8 border border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl text-slate-900 dark:text-white">Thank You!</h2>
              <button
                className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                onClick={() => setShowConfirmation(false)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <p className="text-slate-600 dark:text-slate-400 mb-8">
              Your request has been submitted successfully. We will get back to you shortly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                onClick={() => setShowConfirmation(false)}
                className="sm:flex-1 px-8 py-4 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-300 dark:hover:bg-slate-700 rounded-xl transition-all duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
