import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { useOutletContext } from "react-router-dom";
const bannerImage = "/assets/6b2ec4e0a28745c7832884eb3586f3658b7b7675.png";
import { CollaborationBar } from "./CollaborationBar";

interface CustomerStoriesPageProps {
  theme?: "light" | "dark";
  onContactClick?: () => void;
}

interface LoginContext {
  openCustomerLogin: () => void;
}

export const CustomerStoriesPage = ({
  theme = "light",
  onContactClick,
}: CustomerStoriesPageProps) => {
  const { openCustomerLogin } = useOutletContext<LoginContext>();
  // CEO testimonials
  const testimonials = [
    {
      name: "Miss Sarah Djaloul",
      position: "CEO Doctowise",
      company: "Healthcare Services",
      comment:
        "DCSecurite has revolutionized how we protect sensitive patient data. Their AI-driven security solutions ensure our medical records and telehealth platforms remain HIPAA-compliant while enabling seamless digital experiences. Since implementing their systems, we've achieved 100% protection with zero data breaches, giving our patients the trust they deserve.",
      rating: 5,
    },
    {
      name: "Mr Abdellatif",
      position: "CEO, SOLUCHE SCHOOL",
      company: "Education Company",
      comment:
        "In the education sector, protecting student data and ensuring safe online learning environments is critical. DCSecurite's comprehensive security framework has safeguarded our e-learning platforms, student records, and digital infrastructure. Their solutions prevented multiple cyber attacks while maintaining seamless access for over 10,000 students and staff.",
      rating: 5,
    },
    {
      name: "Mr Amir mokhtar",
      position: "CEO, SOPRETA",
      company: "Industrial Company",
      comment:
        "As an industrial company, our operational technology and critical infrastructure require the highest level of protection. DCSecurite's advanced threat intelligence and real-time monitoring have secured our production systems, preventing costly downtime and protecting our intellectual property. Their expertise in industrial cybersecurity is unmatched.",
      rating: 5,
    },
  ];

  return (
    <div className="w-full pt-20">
      {/* Banner Section */}
      <div className="w-full">
        <img src={bannerImage} alt="Customer Stories" className="w-full" />
      </div>

      {/* Technology Partners Section */}
      <CollaborationBar
        title="Trusted by the best"
        description=""
        showTrustIndicators={false}
        showVideos={false}
        customPartners={[
          "ZR EXPRESS",
          "SOLUCHE SCHOOL",
          "SOPRETA INDUSTRIEL",
          "LOGISOFT360",
          "DOCTOWISE",
          "STORADOO",
          "ETS SPEEDE MEDICAL COMPANY",
        ]}
        whiteTitle={true}
      />

      {/* CEO Testimonials Section - Horizontal Scroll */}
      <section className="py-16 px-4 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2
              className="text-3xl md:text-4xl text-slate-900 dark:text-white mb-2"
              style={{ fontWeight: "800" }}
            >
              What{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                CEOs
              </span>{" "}
              Say
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Real testimonials from industry leaders
            </p>
          </div>

          {/* Desktop View - Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
              >
                {/* 5 Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                  &ldquo;{testimonial.comment}&rdquo;
                </p>

                {/* Author Info */}
                <div className="pt-6 border-t border-slate-200 dark:border-slate-700">
                  <div
                    className="text-slate-900 dark:text-white mb-1"
                    style={{ fontWeight: "700" }}
                  >
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                    {testimonial.position}
                  </div>
                  <div className="text-sm text-blue-600 dark:text-blue-400">
                    {testimonial.company}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile View - Horizontal Scroll */}
          <div className="md:hidden relative">
            <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex-shrink-0 w-[85vw] bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 snap-center"
                >
                  {/* 5 Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed text-sm">
                    &ldquo;{testimonial.comment}&rdquo;
                  </p>

                  {/* Author Info */}
                  <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                    <div
                      className="text-slate-900 dark:text-white mb-1"
                      style={{ fontWeight: "700" }}
                    >
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                      {testimonial.position}
                    </div>
                    <div className="text-sm text-blue-600 dark:text-blue-400">
                      {testimonial.company}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Scroll Indicator */}
            <div className="flex justify-center gap-2 mt-4">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600"
                ></div>
              ))}
            </div>
          </div>

          {/* Hide scrollbar on mobile */}
          <style>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
            .scrollbar-hide {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}</style>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-slate-900 dark:text-white mb-6">
              <span
                className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
                style={{ fontWeight: "800" }}
              >
                Ready to Write Your Success Story?
              </span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
              Join hundreds of organizations that have transformed their security posture with
              DCSecurite
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="px-8 py-4 bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 border-2 border-blue-600 dark:border-blue-400 rounded-xl hover:bg-blue-50 dark:hover:bg-slate-700 transition-all duration-300"
                onClick={openCustomerLogin}
              >
                <span style={{ fontWeight: "600" }}>Get Started</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
