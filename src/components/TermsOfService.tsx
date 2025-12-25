export function TermsOfService() {
  return (
    <section className="pt-32 md:pt-40 pb-20 md:pb-32 bg-black min-h-screen">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 pt-24 md:pt-32 lg:pt-[200px] max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-white mb-4 text-4xl md:text-5xl lg:text-6xl animate-slideUp">
            DCSecurite Terms of Service
          </h1>
        </div>

        {/* Metadata */}
        <div className="bg-slate-900 rounded-2xl p-6 md:p-8 mb-12 border border-cyan-500/30 animate-fadeIn">
          <div className="text-base md:text-lg lg:text-xl">
            <span className="text-slate-300">last update:</span>
            <span className="ml-2 text-white">November 30, 2025</span>
          </div>
        </div>

        {/* Introduction */}
        <div className="mb-10 md:mb-12 lg:mb-16">
          <p className="text-slate-300 leading-relaxed text-base md:text-lg lg:text-xl">
            These Terms of Service ("Terms") constitute a binding agreement between you and
            DCSecurite, a cybersecurity and DevSecOps company ("DCSecurite," "we," "us," or "our"),
            governing your use of our website, services, products, and platforms (collectively, the
            "Site" or "Services"). By accessing or using the Site or Services, you agree to be bound
            by these Terms. You must be at least 18 years old to use the Site or Services.
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none prose-lg md:prose-xl">
          {/* Section 1 */}
          <div className="mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-white mb-4 md:mb-6 text-2xl md:text-3xl lg:text-4xl">
              1. User Accounts and Profiles
            </h2>
            <p className="text-slate-300 mb-3 leading-relaxed text-base md:text-lg lg:text-xl">
              Certain Services may require account creation. You must provide truthful, accurate
              information and maintain your account credentials confidentially.
            </p>
            <ul className="list-disc pl-6 text-slate-300 space-y-2 mb-4 md:mb-6">
              <li>
                You may not share your account or use another person's account without explicit
                authorization.
              </li>
              <li>
                Notify us immediately of any unauthorized use of your account or security breach.
              </li>
              <li>
                DCSecurite may restrict, suspend, or terminate your access to Services at any time,
                with or without notice, and without liability.
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-white mb-4 md:mb-6 text-2xl md:text-3xl lg:text-4xl">
              2. Site Content and Intellectual Property
            </h2>
            <p className="text-slate-300 mb-4 md:mb-6 leading-relaxed text-base md:text-lg lg:text-xl">
              All content on the Site—including software, documentation, APIs, images, white papers,
              and other materials ("Site Content")—is owned or licensed by DCSecurite and protected
              by copyright, trademark, trade secret, and other intellectual property laws.
            </p>
            <p className="text-slate-300 mb-4 md:mb-6 leading-relaxed text-base md:text-lg lg:text-xl">
              You may download or use Site Content only for personal, non-commercial purposes, or
              under a separate written agreement with DCSecurite.
            </p>

            <h4 className="text-white mb-2 md:mb-3 text-lg md:text-xl lg:text-2xl">
              Restrictions: You may not:
            </h4>
            <ul className="list-disc pl-6 text-slate-300 space-y-2 mb-4 md:mb-6">
              <li>
                Modify, reproduce, distribute, publicly display, or use Site Content for commercial
                purposes.
              </li>
              <li>
                Decompile, reverse-engineer, or disassemble software, except as permitted by
                applicable law.
              </li>
              <li>Remove copyright, trademark, or proprietary notices.</li>
              <li>Transfer Site Content to third parties without authorization.</li>
            </ul>
            <p className="text-slate-300 leading-relaxed font-semibold text-base md:text-lg lg:text-xl">
              All rights not expressly granted are reserved.
            </p>
          </div>

          {/* Section 3 */}
          <div className="mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-white mb-4 md:mb-6 text-2xl md:text-3xl lg:text-4xl">
              3. User Contributions
            </h2>
            <p className="text-slate-300 mb-3 leading-relaxed text-base md:text-lg lg:text-xl">
              Contributions include comments, suggestions, code, articles, or other materials you
              submit ("Contributions").
            </p>
            <ul className="list-disc pl-6 text-slate-300 space-y-2 mb-4 md:mb-6">
              <li>
                Contributions are non-confidential and non-proprietary unless agreed otherwise in
                writing.
              </li>
              <li>
                By submitting Contributions, you grant DCSecurite a worldwide, perpetual,
                irrevocable, royalty-free license to use, reproduce, distribute, and modify them for
                any purpose.
              </li>
              <li>You warrant that your Contributions do not infringe on third-party rights.</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-white mb-4 md:mb-6 text-2xl md:text-3xl lg:text-4xl">
              4. Rules of Conduct
            </h2>
            <p className="text-slate-300 mb-3 leading-relaxed text-base md:text-lg lg:text-xl">
              You agree not to:
            </p>
            <ul className="list-disc pl-6 text-slate-300 space-y-2 mb-4 md:mb-6">
              <li>Post unlawful, defamatory, offensive, infringing, or harmful content.</li>
              <li>Harass, stalk, threaten, or abuse others.</li>
              <li>Impersonate any person or entity, including DCSecurite employees.</li>
              <li>Distribute spam, malware, viruses, phishing, or other malicious content.</li>
              <li>Interfere with, disrupt, or circumvent the security of the Site or Services.</li>
              <li>Share content violating privacy, publicity, or intellectual property rights.</li>
              <li>
                Engage in illegal activities, including piracy, child exploitation, or unauthorized
                access to systems.
              </li>
            </ul>
            <p className="text-slate-300 leading-relaxed font-semibold text-base md:text-lg lg:text-xl">
              Violations may result in immediate suspension or termination of your access.
            </p>
          </div>

          {/* Section 5 */}
          <div className="mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-white mb-4 md:mb-6 text-2xl md:text-3xl lg:text-4xl">
              5. Indemnification
            </h2>
            <p className="text-slate-300 mb-3 leading-relaxed text-base md:text-lg lg:text-xl">
              You agree to defend, indemnify, and hold DCSecurite, its officers, employees, and
              affiliates harmless from any claims, damages, or expenses arising from:
            </p>
            <ul className="list-disc pl-6 text-slate-300 space-y-2">
              <li>Your breach of these Terms.</li>
              <li>Your use of the Site or Services.</li>
              <li>Your Contributions.</li>
            </ul>
          </div>

          {/* Section 6 */}
          <div className="mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-white mb-4 md:mb-6 text-2xl md:text-3xl lg:text-4xl">
              6. DMCA and Intellectual Property Claims
            </h2>
            <p className="text-slate-300 mb-3 leading-relaxed text-base md:text-lg lg:text-xl">
              If you believe your intellectual property has been infringed, submit a written notice
              including:
            </p>
            <ul className="list-disc pl-6 text-slate-300 space-y-2 mb-4 md:mb-6">
              <li>Your electronic or physical signature.</li>
              <li>Identification of the copyrighted work.</li>
              <li>Identification of the infringing material and its location.</li>
              <li>Contact information (address, phone, email).</li>
              <li>A statement of good-faith belief that use is unauthorized.</li>
              <li>A statement under penalty of perjury that the information is accurate.</li>
            </ul>
            <p className="text-slate-300 mb-2 leading-relaxed text-base md:text-lg lg:text-xl">
              Send notices to:
            </p>
            <div className="bg-slate-900 rounded-xl p-6 md:p-8 border border-cyan-500/30">
              <p className="text-white mb-2 text-base md:text-lg lg:text-xl">
                DCSecurite Legal Department
              </p>
              <p className="text-slate-300 text-base md:text-lg lg:text-xl">
                Email:{" "}
                <a
                  href="mailto:legal@dcsecurite.com"
                  className="text-cyan-600 dark:text-cyan-400 hover:underline"
                >
                  legal@dcsecurite.com
                </a>
              </p>
            </div>
          </div>

          {/* Section 7 */}
          <div className="mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-white mb-4 md:mb-6 text-2xl md:text-3xl lg:text-4xl">
              7. Disclaimers and Limitation of Liability
            </h2>
            <ul className="list-disc pl-6 text-slate-300 space-y-3">
              <li>
                Services and Site Content are provided "as is" without warranties of any kind,
                including merchantability, fitness for a particular purpose, or non-infringement.
              </li>
              <li>
                DCSecurite is not liable for indirect, incidental, special, or consequential
                damages, including lost profits or data.
              </li>
              <li>
                Third-party links are provided for convenience; DCSecurite is not responsible for
                their content or reliability.
              </li>
            </ul>
          </div>

          {/* Section 8 */}
          <div className="mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-white mb-4 md:mb-6 text-2xl md:text-3xl lg:text-4xl">
              8. Government and Export Use
            </h2>
            <ul className="list-disc pl-6 text-slate-300 space-y-3">
              <li>
                Services may be subject to Algerian laws, local regulations, and international
                export control laws.
              </li>
              <li>Unauthorized use or export of Site Content is prohibited.</li>
              <li>
                Government entities using DCSecurite products may be subject to additional legal
                restrictions.
              </li>
            </ul>
          </div>

          {/* Section 9 */}
          <div className="mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-white mb-4 md:mb-6 text-2xl md:text-3xl lg:text-4xl">
              9. Service Availability
            </h2>
            <ul className="list-disc pl-6 text-slate-300 space-y-3">
              <li>
                We strive to provide reliable access but do not guarantee uninterrupted
                availability.
              </li>
              <li>
                Maintenance, technical issues, or external factors may cause temporary disruption.
              </li>
            </ul>
          </div>

          {/* Section 10 */}
          <div className="mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-white mb-4 md:mb-6 text-2xl md:text-3xl lg:text-4xl">
              10. Privacy and Data Protection
            </h2>
            <ul className="list-disc pl-6 text-slate-300 space-y-3">
              <li>
                Your data is handled according to our Privacy Policy, which forms part of these
                Terms.
              </li>
              <li>
                We implement reasonable security measures but cannot guarantee absolute protection.
              </li>
            </ul>
          </div>

          {/* Section 11 */}
          <div className="mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-white mb-4 md:mb-6 text-2xl md:text-3xl lg:text-4xl">
              11. Modifications
            </h2>
            <ul className="list-disc pl-6 text-slate-300 space-y-3">
              <li>DCSecurite may update these Terms at any time without prior notice.</li>
              <li>
                Continued use of the Site or Services constitutes acceptance of the updated Terms.
              </li>
            </ul>
          </div>

          {/* Section 12 */}
          <div className="mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-white mb-4 md:mb-6 text-2xl md:text-3xl lg:text-4xl">
              12. Governing Law and Dispute Resolution
            </h2>
            <ul className="list-disc pl-6 text-slate-300 space-y-3">
              <li>These Terms are governed by the laws of Algeria.</li>
              <li>
                Disputes shall be subject to the exclusive jurisdiction of courts in Oran, Algeria.
              </li>
            </ul>
          </div>

          {/* Section 13 */}
          <div className="mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-white mb-4 md:mb-6 text-2xl md:text-3xl lg:text-4xl">
              13. Contact Information
            </h2>
            <div className="bg-slate-900 rounded-xl p-6 md:p-8 border border-cyan-500/30">
              <p className="text-white mb-2 text-base md:text-lg lg:text-xl">
                DCSecurite
              </p>
              <p className="text-slate-300 mb-2 text-base md:text-lg lg:text-xl">
                Email:{" "}
                <a
                  href="mailto:contact@dcsecurite.com"
                  className="text-cyan-600 dark:text-cyan-400 hover:underline"
                >
                  contact@dcsecurite.com
                </a>
              </p>
              <p className="text-slate-300 text-base md:text-lg lg:text-xl">
                Address: Oran, Algeria
              </p>
            </div>
          </div>
        </div>

        {/* Back to Home Button */}
        <div className="text-center mt-12">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 dark:from-cyan-500 dark:to-blue-600 dark:hover:from-cyan-400 dark:hover:to-blue-500 text-white px-8 py-3 rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/30 dark:shadow-cyan-500/40 hover:shadow-cyan-500/50 dark:hover:shadow-cyan-500/60 hover:scale-105 text-base md:text-lg"
          >
            Back to Top
          </a>
        </div>
      </div>
    </section>
  );
}
