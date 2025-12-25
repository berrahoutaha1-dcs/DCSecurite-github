import { Mail, Phone, MapPin, Send } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-24 lg:py-32 bg-white dark:from-[#0A0F1F] dark:via-[#0D1425] dark:to-[#0A0F1F] dark:bg-gradient-to-b relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1510511459019-5dda7724fd87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwc2VjdXJpdHklMjBuZXR3b3JrfGVufDF8fHx8MTc2NDA3NTYxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Network security"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient decorations */}
      <div className="absolute top-1/4 left-0 w-48 h-48 md:w-96 md:h-96 bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-48 h-48 md:w-96 md:h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-10 md:mb-12 lg:mb-16">
          <div className="inline-block px-3 md:px-4 py-1.5 md:py-2 bg-cyan-100 dark:bg-cyan-500/10 border border-cyan-300 dark:border-cyan-500/30 rounded-full text-cyan-700 dark:text-cyan-400 mb-4 md:mb-6 backdrop-blur-sm text-sm md:text-base">
            Get In Touch
          </div>
          <h2 className="text-slate-900 dark:text-white mb-4 md:mb-6 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400 bg-clip-text text-transparent px-4">
            Ready to Secure Your Business?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed px-4 text-sm md:text-base">
            Let's discuss how we can protect your digital assets with our comprehensive security
            solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-4 md:space-y-6">
            <div className="group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 dark:from-cyan-500/30 dark:to-blue-500/30 rounded-xl md:rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="relative bg-slate-50 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200 dark:border-slate-700/30 p-4 md:p-6 rounded-xl md:rounded-2xl hover:border-slate-300 dark:hover:border-cyan-500/40 transition-all duration-300">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Mail className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-slate-600 dark:text-slate-400 mb-1 text-sm md:text-base">
                        Email
                      </div>
                      <div className="text-slate-900 dark:text-white text-sm md:text-base">
                        contact@cybershield.com
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-500/30 dark:to-purple-500/30 rounded-xl md:rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="relative bg-slate-50 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200 dark:border-slate-700/30 p-4 md:p-6 rounded-xl md:rounded-2xl hover:border-slate-300 dark:hover:border-cyan-500/40 transition-all duration-300">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Phone className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-slate-600 dark:text-slate-400 mb-1 text-sm md:text-base">
                        Phone
                      </div>
                      <div className="text-slate-900 dark:text-white text-sm md:text-base">
                        +1 (555) 123-4567
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 dark:from-purple-500/30 dark:to-pink-500/30 rounded-xl md:rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="relative bg-slate-50 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200 dark:border-slate-700/30 p-4 md:p-6 rounded-xl md:rounded-2xl hover:border-slate-300 dark:hover:border-cyan-500/40 transition-all duration-300">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <MapPin className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-slate-600 dark:text-slate-400 mb-1 text-sm md:text-base">
                        Address
                      </div>
                      <div className="text-slate-900 dark:text-white text-sm md:text-base">
                        123 Security Boulevard
                        <br />
                        San Francisco, CA 94102
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 dark:from-cyan-500/20 dark:to-blue-500/20 rounded-2xl md:rounded-3xl blur-2xl"></div>
              <div className="relative bg-white dark:bg-slate-900/70 backdrop-blur-md border border-slate-200 dark:border-slate-700/30 p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-xl dark:shadow-cyan-500/5">
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-slate-700 dark:text-slate-300 mb-2 md:mb-3 text-sm md:text-base"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 md:px-4 py-2.5 md:py-3.5 bg-slate-50 dark:bg-slate-800/70 border border-slate-300 dark:border-slate-700/50 rounded-lg md:rounded-xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 dark:focus:ring-cyan-400/20 transition-all text-sm md:text-base"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-slate-700 dark:text-slate-300 mb-2 md:mb-3 text-sm md:text-base"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 md:px-4 py-2.5 md:py-3.5 bg-slate-50 dark:bg-slate-800/70 border border-slate-300 dark:border-slate-700/50 rounded-lg md:rounded-xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 dark:focus:ring-cyan-400/20 transition-all text-sm md:text-base"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-slate-700 dark:text-slate-300 mb-2 md:mb-3 text-sm md:text-base"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 md:px-4 py-2.5 md:py-3.5 bg-slate-50 dark:bg-slate-800/70 border border-slate-300 dark:border-slate-700/50 rounded-lg md:rounded-xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 dark:focus:ring-cyan-400/20 transition-all resize-none text-sm md:text-base"
                      placeholder="Tell us about your security needs..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 dark:from-cyan-500 dark:to-blue-600 dark:hover:from-cyan-400 dark:hover:to-blue-500 text-white py-3 md:py-4 rounded-lg md:rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/30 dark:shadow-cyan-500/40 hover:shadow-cyan-500/50 dark:hover:shadow-cyan-500/60 flex items-center justify-center gap-2 group text-sm md:text-base"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
