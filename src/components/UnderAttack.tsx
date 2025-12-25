import { ArrowLeft, Quote, Shield, Search, AlertTriangle, Microscope, Phone } from "lucide-react";
import { motion } from "framer-motion";
const founder1 = "/assets/44f6bf2a76e1cb207537bbe85240f3c2ab7a4386.png";
const founder2 = "/assets/5895383e139ece7e582992f97d1afd5ac676bc9c.png";
const underAttackBackground = "/assets/0f02fb7031e814cbf592a32c0e2bd4086b9c70c0.png";
import { useState } from "react";

interface UnderAttackProps {
  onClose?: () => void;
}

export function UnderAttack({ onClose }: UnderAttackProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    jobLevel: "",
    phone: "",
    countryRegion: "",
    underAttack: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center pt-32 md:pt-20 pb-16 md:pb-0 bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50 dark:from-[#0A0F1F] dark:via-[#0D1425] dark:to-[#0A0F1F] overflow-hidden">
        {/* Background Image - Same as Hero */}
        <motion.div
          className="absolute inset-0 overflow-hidden opacity-100 dark:opacity-100"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img
            src={underAttackBackground}
            alt="Cybersecurity NCF Unit"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-white/10 dark:from-[#0A0F1F]/10 dark:via-[#0A0F1F]/5 dark:to-[#0A0F1F]/10"></div>
        </motion.div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Hero Text Content */}
            <div className="text-center max-w-4xl mx-auto">
              {/* Main Title */}
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-6 md:mb-8"
                style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 700 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.3 }}
              >
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 dark:from-cyan-300 dark:via-cyan-400 dark:to-cyan-300 bg-clip-text text-transparent drop-shadow-2xl">
                  Contact Unit NCF
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white dark:text-white leading-relaxed"
                style={{
                  fontFamily: "'Cairo', sans-serif",
                  fontWeight: 600,
                  textShadow: "2px 2px 8px rgba(0,0,0,0.6)",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.5 }}
              >
                With professional incident response experts from the NCF White Hats team
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Information and Contact Form Section */}
      <section className="relative py-16 md:py-24 bg-white dark:bg-[#0A0F1F]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Left Column - Information */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                {/* Title */}
                <div>
                  <h2
                    className="text-3xl md:text-4xl mb-4 text-slate-900 dark:text-white"
                    style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 700 }}
                  >
                    Are you under attack?
                  </h2>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    Unit NCF's Incident Response team will quickly help you understand the nature of
                    the attack, work with your team to contain and remediate the breach, and get you
                    back to business fast.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mt-4">
                    If you have been breached or have an urgent matter, please call the Unit NCF
                    Incident Response team or fill out the form to get in touch immediately.*
                  </p>
                </div>

                {/* Contact Information */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-cyan-600 dark:text-cyan-400 flex-shrink-0" />
                    <span className="text-slate-900 dark:text-white">Algeria:</span>
                    <a
                      href="https://wa.me/213668959953?text=I%20need%20an%20urgent%20hotline%20regarding%20a%20cybersecurity%20issue%20in%20my%20company."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-600 dark:text-cyan-400 hover:underline hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors"
                    >
                      +213 668 95 99 53 ( NCF UNIT CYBER DEFENCE )
                    </a>
                  </div>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-400 italic">
                  The NCF unit includes a team of security incident response experts with extensive
                  experience across North Africa and the Middle East, and is recognized as a trusted
                  team in this field by major companies.
                </p>
                <p className="text-base text-red-600 dark:text-red-400" style={{ fontWeight: 700 }}>
                  *Please note that this hotline is for immediate crisis support only and is not
                  intended to be used for any non-crisis questions such as employee inquiries or
                  advertising/marketing queries.
                </p>

                {/* Why Unit NCF? */}
                <div className="pt-8 border-t border-slate-200 dark:border-slate-700">
                  <h3
                    className="text-2xl md:text-3xl mb-4 text-slate-900 dark:text-white"
                    style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 700 }}
                  >
                    Why Unit NCF?
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                    DCSecuirte Networks Unit NCF brings together world-renowned threat researchers
                    with an elite team of security responders and consultants to create an
                    intelligence-driven, response-ready organization passionate about helping
                    customers more proactively manage cyber risk. With a deeply integrated
                    reputation for delivering world-class threat intelligence, Unit NCF provides
                    industry-leading incident response and cyber risk management services to
                    security leaders around the globe.
                  </p>
                  <p className="text-slate-900 dark:text-white mb-4">
                    Unit NCF consultants can help you:
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center flex-shrink-0">
                        <Shield className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                      </div>
                      <div>
                        <p className="text-slate-900 dark:text-white">
                          Respond to and remediate security events in record time.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                        <Search className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <p className="text-slate-900 dark:text-white">
                          Transform your security strategy with a threat-informed approach.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center flex-shrink-0">
                        <AlertTriangle className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                      </div>
                      <div>
                        <p className="text-slate-900 dark:text-white">
                          Assess and test your security controls against the right threats.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                        <Microscope className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <p className="text-slate-900 dark:text-white">
                          Find answers with digital forensic analysis and secure an expert to
                          testify in court.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:sticky lg:top-24 h-fit"
                id="contact"
              >
                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-200 dark:border-slate-700">
                  <h3
                    className="text-2xl md:text-3xl mb-6 text-slate-900 dark:text-white"
                    style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 700 }}
                  >
                    Contact us now
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400 transition-all"
                        required
                      />
                    </div>

                    <div>
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400 transition-all"
                        required
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Work Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400 transition-all"
                        required
                      />
                    </div>

                    <div>
                      <input
                        type="text"
                        name="company"
                        placeholder="Company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400 transition-all"
                        required
                      />
                    </div>

                    <div>
                      <input
                        type="text"
                        name="jobLevel"
                        placeholder="Job Level"
                        value={formData.jobLevel}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400 transition-all"
                      />
                    </div>

                    <div>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400 transition-all"
                      />
                    </div>

                    <div>
                      <input
                        type="text"
                        name="countryRegion"
                        placeholder="Country / Region"
                        value={formData.countryRegion}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400 transition-all"
                      />
                    </div>

                    <div>
                      <textarea
                        name="underAttack"
                        placeholder="Under Attack?"
                        value={formData.underAttack}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400 transition-all resize-none"
                      />
                    </div>

                    <div className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      <p className="mb-2">
                        By submitting this form, I understand my personal data will be processed in
                        accordance with DCSecurite's Privacy Policy.
                      </p>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 px-6 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                      style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 600 }}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
