import { ArrowRight, Mail, Phone, ChevronDown, Search, X, MapPin } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { API_BASE_URL } from "../config";

const COUNTRIES = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
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
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
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
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
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
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macedonia",
  "Madagascar",
  "Malawi",
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
  "Monaco",
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
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

interface ContactPageProps {
  onPrivacyClick?: () => void;
  onTermsClick?: () => void;
  onCustomerLoginClick?: () => void;
  onCustomerSignUpClick?: () => void;
}

export function ContactPage({
  onPrivacyClick,
  onTermsClick,
  onCustomerLoginClick,
  onCustomerSignUpClick,
}: ContactPageProps = {}) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    jobLevel: "",
    country: "",
    phone: "",
    productInterest: "",
    message: "",
  });

  const [countrySearch, setCountrySearch] = useState("");
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [showEmailSales, setShowEmailSales] = useState(false);
  const [showLocations, setShowLocations] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const countryDropdownRef = useRef<HTMLDivElement>(null);

  // Filter countries based on search
  const filteredCountries = COUNTRIES.filter((country) =>
    country.toLowerCase().includes(countrySearch.toLowerCase())
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        countryDropdownRef.current &&
        !countryDropdownRef.current.contains(event.target as Node)
      ) {
        setIsCountryDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage("");

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          company: formData.company,
          job_level: formData.jobLevel,
          country: formData.country,
          phone: formData.phone,
          product_interest: formData.productInterest,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          jobLevel: "",
          country: "",
          phone: "",
          productInterest: "",
          message: "",
        });
        setCountrySearch("");
      } else {
        setStatus('error');
        if (data.errors) {
          const firstError = Object.values(data.errors)[0] as string[];
          setErrorMessage(firstError[0] || "Validation failed");
        } else {
          setErrorMessage(data.message || "Failed to submit form");
        }
        console.error("Submission failed:", data);
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage("Connection error. Is the server running?");
      console.error("Submission error:", error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Contact Hero Section */}
      <div className="pt-48 md:pt-52 pb-12 px-4 md:px-6 bg-black">
        <div className="container mx-auto">
          <h1 className="text-white mb-4">Contact Us</h1>
        </div>
      </div>

      {/* Contact Form - Moved to top */}
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div id="contact-form" className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-8">
            <h2 className="text-slate-900 dark:text-white mb-2">
              Fill out the form to get in touch with our Sales Team
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">*Required</p>
          </div>

          {status === 'success' && (
            <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-lg text-center">
              Thank you! Your request has been submitted successfully to our Sales Team.
              <button onClick={() => setStatus('idle')} className="block mx-auto mt-2 text-sm underline">Send another</button>
            </div>
          )}

          {status === 'error' && (
            <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg text-center">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm text-slate-700 dark:text-slate-300 mb-2"
                >
                  First Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm text-slate-700 dark:text-slate-300 mb-2"
                >
                  Last Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-slate-700 dark:text-slate-300 mb-2"
                >
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Business Email"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm text-slate-700 dark:text-slate-300 mb-2"
                >
                  Company <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company Name"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <label
                  htmlFor="jobLevel"
                  className="block text-sm text-slate-700 dark:text-slate-300 mb-2"
                >
                  Job Level <span className="text-red-600">*</span>
                </label>
                <select
                  id="jobLevel"
                  name="jobLevel"
                  required
                  value={formData.jobLevel}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400 focus:border-transparent transition-all"
                >
                  <option value="">Job level</option>
                  <option value="executive">Executive</option>
                  <option value="director">Director</option>
                  <option value="manager">Manager</option>
                  <option value="individual">Individual Contributor</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="country"
                  className="block text-sm text-slate-700 dark:text-slate-300 mb-2"
                >
                  Country <span className="text-red-600">*</span>
                </label>
                <div className="relative" ref={countryDropdownRef}>
                  <div className="relative">
                    <input
                      type="text"
                      id="country"
                      name="country"
                      required
                      value={countrySearch}
                      onChange={(e) => {
                        setCountrySearch(e.target.value);
                        setIsCountryDropdownOpen(true);
                      }}
                      onFocus={() => setIsCountryDropdownOpen(true)}
                      placeholder="Search or select country..."
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400 focus:border-transparent transition-all"
                    />
                    <button
                      type="button"
                      className="absolute top-0 right-0 h-full px-4 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
                      onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                    >
                      <ChevronDown
                        className={`w-5 h-5 transition-transform ${isCountryDropdownOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                  </div>

                  {isCountryDropdownOpen && (
                    <div className="absolute z-50 w-full mt-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg shadow-xl max-h-64 overflow-hidden">
                      <div className="sticky top-0 bg-white dark:bg-slate-800 p-2 border-b border-slate-200 dark:border-slate-700">
                        <div className="relative">
                          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                          <input
                            type="text"
                            value={countrySearch}
                            onChange={(e) => setCountrySearch(e.target.value)}
                            placeholder="Search countries..."
                            className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400 focus:border-transparent transition-all text-sm"
                          />
                          {countrySearch && (
                            <button
                              type="button"
                              onClick={() => setCountrySearch("")}
                              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      </div>

                      <div className="overflow-y-auto max-h-48">
                        {filteredCountries.length > 0 ? (
                          filteredCountries.map((country) => (
                            <button
                              key={country}
                              type="button"
                              onClick={() => {
                                setFormData({ ...formData, country });
                                setCountrySearch(country);
                                setIsCountryDropdownOpen(false);
                              }}
                              className="w-full text-left px-4 py-2 hover:bg-cyan-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white transition-colors"
                            >
                              {country}
                            </button>
                          ))
                        ) : (
                          <div className="px-4 py-3 text-sm text-slate-500 dark:text-slate-400 text-center">
                            No countries found
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm text-slate-700 dark:text-slate-300 mb-2"
                >
                  Phone <span className="text-red-600">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="productInterest"
                  className="block text-sm text-slate-700 dark:text-slate-300 mb-2"
                >
                  What product are you interested in? <span className="text-red-600">*</span>
                </label>
                <select
                  id="productInterest"
                  name="productInterest"
                  required
                  value={formData.productInterest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400 focus:border-transparent transition-all"
                >
                  <option value="">Please Select One Topic</option>

                  {/* Security Services */}
                  <optgroup label="━━━ SECURITY SERVICES ━━━">
                    <option disabled>──────────────────</option>
                  </optgroup>

                  <optgroup label="Network Security">
                    <option value="cloud-network-security">Cloud Network Security</option>
                    <option value="ids-ips">Intrusion Detection & Prevention (IDS/IPS)</option>
                    <option value="web-phishing-security">Web & Phishing Security</option>
                    <option value="secure-work-device">Secure Work on Any Device</option>
                    <option value="ot-industrial-protection">
                      OT & Industrial Network Protection
                    </option>
                  </optgroup>

                  <optgroup label="Cloud Security">
                    <option value="cspm">Cloud Security Posture Management (CSPM)</option>
                    <option value="dspm">Data Security Posture Management (DSPM)</option>
                    <option value="aspm">Application Security Posture Management (ASPM)</option>
                    <option value="cwp">Cloud Workload Protection (CWP)</option>
                    <option value="waas">Web Application & API Security (WAAS)</option>
                  </optgroup>

                  <optgroup label="Security Operations">
                    <option value="mdr">Managed Detection & Response (MDR)</option>
                    <option value="cdr">Cloud Detection & Response (CDR)</option>
                    <option value="asm">Attack Surface Management (ASM)</option>
                    <option value="siem">Security Information and Event Management (SIEM)</option>
                    <option value="soc-automation">SOC Automation</option>
                  </optgroup>

                  <optgroup label="Endpoint Security">
                    <option value="epp">Endpoint Protection (EPP)</option>
                    <option value="xdr">Extended Detection & Response (XDR)</option>
                    <option value="ransomware-protection">Ransomware Protection</option>
                    <option value="device-hardening">Device Security Hardening</option>
                  </optgroup>

                  <optgroup label="Penetration Testing & Zero-Day Detection">
                    <option value="web-app-pentest">Web Application Penetration Testing</option>
                    <option value="mobile-app-pentest">
                      Mobile Application Penetration Testing
                    </option>
                    <option value="network-pentest">Network Penetration Testing</option>
                    <option value="cloud-pentest">Cloud Penetration Testing</option>
                    <option value="api-security-testing">API Security Testing</option>
                    <option value="wireless-pentest">Wireless Network Pentesting</option>
                    <option value="red-team">Red Team Assessments</option>
                    <option value="social-engineering">
                      Social Engineering Assessments (Phishing, Vishing)
                    </option>
                    <option value="zero-day-detection">Zero-Day Threat Detection</option>
                    <option value="malware-analysis">Malware Analysis & Reverse Engineering</option>
                    <option value="vulnerability-research">Vulnerability Research</option>
                    <option value="exploit-development">Exploit Development (Ethical)</option>
                    <option value="continuous-testing">
                      Continuous Security Testing (DevSecOps)
                    </option>
                  </optgroup>

                  <optgroup label="Industries">
                    <option value="public-sector">Public Sector</option>
                    <option value="financial-services">Financial Services</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="smb">Small & Medium Businesses</option>
                  </optgroup>

                  {/* Solutions */}
                  <optgroup label="━━━ SOLUTIONS ━━━">
                    <option disabled>──────────────────</option>
                  </optgroup>

                  <optgroup label="Enterprise Solutions">
                    <option value="erp-management">Enterprise Resource Planning Management</option>
                    <option value="crm">Customer Relationship Management</option>
                    <option value="hrm">Human Resources Management</option>
                    <option value="industrial-management">Industrial Management</option>
                    <option value="construction-management">Construction Management</option>
                  </optgroup>

                  <optgroup label="Commerce">
                    <option value="logisoft360">Logisoft360</option>
                  </optgroup>

                  <optgroup label="Development & Design">
                    <option value="mobile-development">Mobile Development</option>
                    <option value="web-development">Web Development</option>
                    <option value="ui-ux-design">UI/UX Design</option>
                  </optgroup>

                  <option value="other">Other / Not Listed</option>
                </select>
              </div>
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm text-slate-700 dark:text-slate-300 mb-2"
              >
                How can we help? <span className="text-red-600">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help?"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400 focus:border-transparent transition-all resize-none"
              />
            </div>

            {/* reCAPTCHA and Submit */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-start gap-3">
                <div className="bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg p-4 flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="recaptcha"
                    required
                    className="w-5 h-5 rounded border-slate-300 dark:border-slate-600 text-cyan-600 focus:ring-cyan-500"
                  />
                  <label htmlFor="recaptcha" className="text-sm text-slate-700 dark:text-slate-300">
                    I'm not a robot
                  </label>
                </div>
              </div>

              <div className="flex-1 text-right">
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">
                  By submitting this form, you agree to our{" "}
                  <button
                    type="button"
                    onClick={onTermsClick}
                    className="text-red-600 dark:text-red-400 hover:underline cursor-pointer"
                  >
                    Terms of Use
                  </button>{" "}
                  and acknowledge our{" "}
                  <button
                    type="button"
                    onClick={onPrivacyClick}
                    className="text-red-600 dark:text-red-400 hover:underline cursor-pointer"
                  >
                    Privacy Statement
                  </button>
                  .
                </p>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-red-500/30 group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? 'Submitting...' : 'Submit Request'}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Three Column Layout - Centered with Dark Background */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 -mx-4 md:-mx-6 px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* SALES Column */}
            <div className="space-y-8">
              <div>
                <h2 className="text-white mb-6 uppercase tracking-wide">Sales</h2>

                <div className="space-y-4">
                  <div className="relative">
                    <button
                      onClick={() => setShowLocations(!showLocations)}
                      className="flex items-center gap-2 text-red-500 hover:text-red-400 transition-colors group w-full text-left"
                    >
                      <span>Global Sales Office Locations</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>

                    {/* Animated Locations Reveal */}
                    <div
                      className={`transition-all duration-500 ease-in-out ${showLocations ? "max-h-[800px] opacity-100 mt-3" : "max-h-0 opacity-0"
                        }`}
                      style={{ overflow: showLocations ? "visible" : "hidden" }}
                    >
                      <div className="space-y-3">
                        {/* Algeria Location Card */}
                        <div className="relative">
                          <button
                            onClick={() => setShowMap(!showMap)}
                            className="w-full flex items-center gap-3 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700/50 rounded-xl p-4 hover:from-cyan-50 hover:to-blue-50 dark:hover:from-slate-700 dark:hover:to-slate-600 transition-all duration-300 group shadow-md hover:shadow-lg"
                          >
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                              <MapPin className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1 text-left">
                              <h4 className="text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                                Algeria
                              </h4>
                              <p className="text-xs text-slate-600 dark:text-slate-400">
                                DCSecurite Sales Office
                              </p>
                            </div>
                            <ArrowRight
                              className={`w-5 h-5 text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-all ${showMap ? "rotate-90" : ""}`}
                            />
                          </button>

                          {/* Animated Modern Map Card */}
                          <div
                            className={`transition-all duration-500 ease-in-out ${showMap ? "max-h-[600px] opacity-100 mt-3" : "max-h-0 opacity-0"
                              }`}
                            style={{ overflow: showMap ? "visible" : "hidden" }}
                          >
                            <div className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-sm">
                              {/* Modern Map Header */}
                              <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 p-5 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
                                <div className="flex items-center justify-between relative z-10">
                                  <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                      <MapPin className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                      <h4 className="text-white">Algeria Sales Office</h4>
                                      <p className="text-xs text-white/90">
                                        DCSecurite Global Location
                                      </p>
                                    </div>
                                  </div>
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setShowMap(false);
                                    }}
                                    className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all"
                                  >
                                    <X className="w-5 h-5 text-white" />
                                  </button>
                                </div>
                              </div>

                              {/* Map Content */}
                              <div className="p-5">
                                <div
                                  className="rounded-xl overflow-hidden shadow-xl"
                                  style={{ height: "320px" }}
                                >
                                  <iframe
                                    src="https://maps.google.com/maps?q=35.70687232395106,-0.6215801049789963&hl=en&z=14&output=embed"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="w-full h-full"
                                  />
                                </div>

                                {/* Footer Actions */}
                                <div className="mt-5 flex items-center justify-between gap-4">
                                  <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-100 to-blue-100 dark:from-cyan-900/30 dark:to-blue-900/30 flex items-center justify-center">
                                      <MapPin className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                                    </div>
                                    <span>View location details</span>
                                  </div>
                                  <a
                                    href="https://www.google.com/maps?q=35.70687232395106,-0.6215801049789963"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-cyan-500/50 group text-sm"
                                  >
                                    <span>Open in Maps</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <button
                      onClick={() => setShowEmailSales(!showEmailSales)}
                      className="flex items-center gap-2 text-red-500 hover:text-red-400 transition-colors group w-full text-left"
                    >
                      <span>Email Sales</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>

                    {/* Animated Email Reveal */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${showEmailSales ? "max-h-20 opacity-100 mt-3" : "max-h-0 opacity-0"
                        }`}
                    >
                      <div className="flex items-center gap-2 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border border-cyan-200 dark:border-cyan-700 rounded-lg p-3 animate-[slideIn_0.5s_ease-out]">
                        <Mail className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 animate-pulse" />
                        <a
                          href="mailto:Contact@dcsecurite.com"
                          className="text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors break-all"
                        >
                          Contact@dcsecurite.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-white mb-4">
                  Security Consulting &<br />
                  Incident Response
                </h3>

                <a
                  href="#contact-form"
                  className="flex items-center gap-2 text-red-500 hover:text-red-400 transition-colors group mb-4"
                >
                  <span>Fill out the form to get in touch</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <p className="text-sm text-slate-400 mb-4">
                  If a customer has been breached or has an urgent matter: call:
                </p>

                <div className="space-y-2 text-sm">
                  <p className="text-slate-300">
                    <span className="font-semibold">+213 668 95 99 53</span> (NCF UNIT CYBER
                    DEFENCE)
                  </p>
                </div>
              </div>
            </div>

            {/* SUPPORT Column */}
            <div className="space-y-8">
              <div>
                <h2 className="text-white mb-6 uppercase tracking-wide">Support</h2>

                <div className="space-y-4 mb-8">
                  <a
                    href="#portal"
                    className="block text-slate-300 hover:text-cyan-400 transition-colors"
                  >
                    Support Portal
                  </a>

                  <button
                    onClick={onCustomerLoginClick}
                    className="flex items-center gap-2 text-red-500 hover:text-red-400 transition-colors group"
                  >
                    <span>Already Have a Case? Login</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={onCustomerSignUpClick}
                    className="flex items-center gap-2 text-red-500 hover:text-red-400 transition-colors group"
                  >
                    <span>Create a New Case</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              <div>
                <h3 className="text-white mb-4">Technical Support</h3>

                <div className="space-y-2 text-sm mb-4">
                  <p className="text-slate-300">
                    <span className="font-semibold">Algeria:</span> +213 657 898 573
                  </p>
                </div>

                <a href="#country-numbers" className="text-red-500 hover:underline text-sm">
                  Click Here
                </a>
                <span className="text-sm text-slate-400"> to see all country specific numbers</span>
              </div>
            </div>

            {/* PARTNERS Column */}
            <div className="space-y-8">
              <div>
                <h2 className="text-white mb-6 uppercase tracking-wide">Partners</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-white mb-2">Premium Partner Support</h3>
                    <p className="text-sm text-slate-400">Contact your Authorized Support Center</p>
                  </div>

                  <div>
                    <h3 className="text-white mb-2">Training & Certification Questions</h3>
                    <a
                      href="mailto:learn@dcsecurite.com"
                      className="block text-red-500 hover:underline text-sm mb-1"
                    >
                      learn@dcsecurite.com
                    </a>
                    <a
                      href="mailto:certification@dcsecurite.com"
                      className="block text-red-500 hover:underline text-sm"
                    >
                      certification@dcsecurite.com
                    </a>
                  </div>

                  <div>
                    <h3 className="text-white mb-2">Partners</h3>
                    <a
                      href="mailto:Partner@dcsecurite.com"
                      className="block text-red-500 hover:underline text-sm"
                    >
                      Partner@dcsecurite.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
