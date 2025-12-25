export function PrivacyPolicy() {
  return (
    <section className="pt-32 md:pt-40 pb-20 md:pb-32 bg-black min-h-screen">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 pt-24 md:pt-32 lg:pt-[200px] max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-white mb-4 text-4xl md:text-5xl lg:text-6xl animate-slideUp">
            DCSecurite Privacy Policy
          </h1>
        </div>

        {/* Metadata */}
        <div className="bg-slate-900 rounded-2xl p-6 md:p-8 mb-12 border border-cyan-500/30 animate-fadeIn">
          <div className="grid md:grid-cols-2 gap-4 text-base md:text-lg lg:text-xl">
            <div>
              <span className="text-slate-300">last update:</span>
              <span className="ml-2 text-white">30 November 2025</span>
            </div>
            <div>
              <span className="text-slate-300">Company:</span>
              <span className="ml-2 text-white">DCSecurite</span>
            </div>
            <div>
              <span className="text-slate-300">Headquarters:</span>
              <span className="ml-2 text-white">Oran, Algeria</span>
            </div>
            <div>
              <span className="text-slate-300">Website:</span>
              <a
                href="https://www.dcsecurite.com"
                className="ml-2 text-cyan-600 dark:text-cyan-400 hover:underline"
              >
                www.dcsecurite.com
              </a>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none prose-lg md:prose-xl">
          {/* Section 1 */}
          <div className="mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-white mb-4 md:mb-6 text-2xl md:text-3xl lg:text-4xl">
              1. Introduction
            </h2>
            <p className="text-slate-300 mb-4 md:mb-6 leading-relaxed text-base md:text-lg lg:text-xl">
              Welcome to DCSecurite ("DCSecurite", "we", "us", or "our"). Our mission is to secure
              and protect businesses from cyber threats through advanced cybersecurity services, SOC
              monitoring, digital forensics, and enterprise-grade security solutions.
            </p>
            <p className="text-slate-300 mb-4 md:mb-6 leading-relaxed text-base md:text-lg lg:text-xl">
              Your privacy and the protection of your personal information are central to this
              mission. This Privacy Policy explains how DCSecurite collects, uses, discloses, and
              protects personal information in connection with:
            </p>
            <ul className="list-disc pl-6 text-slate-300 space-y-2 mb-4 md:mb-6">
              <li>Our website (the "Site")</li>
              <li>Our cybersecurity services</li>
              <li>Our Security Operations Center (SOC) monitoring</li>
              <li>Vulnerability assessment and penetration testing services</li>
              <li>Threat detection systems</li>
              <li>
                Digital platforms and tools offered by DCSecurite (collectively, the "Services")
              </li>
            </ul>
            <p className="text-slate-300 leading-relaxed text-base md:text-lg lg:text-xl">
              This Policy applies when DCSecurite acts as a data controller. When we operate
              strictly as a data processor on behalf of clients (for SOC monitoring or incident
              response), our processing is governed by the client's instructions and our Data
              Processing Agreement (DPA).
            </p>
          </div>

          {/* Section 2 */}
          <div className="mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-white mb-4 md:mb-6 text-2xl md:text-3xl lg:text-4xl">
              2. What Is Personal Information?
            </h2>
            <p className="text-slate-300 mb-4 md:mb-6 leading-relaxed text-base md:text-lg lg:text-xl">
              "Personal information" means any data that can identify or be linked to an
              identifiable individual. This includes names, emails, device IDs, IP addresses,
              contact details, and security-related logs.
            </p>
            <p className="text-slate-300 mb-4 md:mb-6 leading-relaxed text-base md:text-lg lg:text-xl">
              This definition is aligned with international standards, including simplified GDPR
              concepts.
            </p>
            <p className="text-slate-300 leading-relaxed text-base md:text-lg lg:text-xl">
              Personal information does NOT include anonymized or aggregated data.
            </p>
          </div>

          {/* Section 3 */}
          <div className="mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-white mb-4 md:mb-6 text-2xl md:text-3xl lg:text-4xl">
              3. Information We Collect
            </h2>

            <h3 className="text-white mb-3 text-xl md:text-2xl lg:text-3xl">
              3.1. Information You Provide Directly
            </h3>
            <p className="text-slate-300 mb-4 md:mb-6 leading-relaxed text-base md:text-lg lg:text-xl">
              We may collect:
            </p>

            <h4 className="text-white mb-2 md:mb-3 text-lg md:text-xl lg:text-2xl">
              Contact Information
            </h4>
            <p className="text-slate-300 mb-4 md:mb-6 leading-relaxed text-base md:text-lg lg:text-xl">
              Name, email, phone number, company, position, country.
            </p>

            <h4 className="text-white mb-2 md:mb-3 text-lg md:text-xl lg:text-2xl">
              Service & Contract Information
            </h4>
            <ul className="list-disc pl-6 text-slate-300 space-y-2 mb-4 md:mb-6">
              <li>Information exchanged during onboarding.</li>
              <li>Technical details needed for SOC deployment.</li>
              <li>Security questionnaires.</li>
            </ul>

            <h4 className="text-white mb-2 md:mb-3 text-lg md:text-xl lg:text-2xl">
              Support & Communication Data
            </h4>
            <ul className="list-disc pl-6 text-slate-300 space-y-2 mb-4 md:mb-6">
              <li>Emails, chat messages, incident support requests.</li>
              <li>Information provided during troubleshooting.</li>
            </ul>

            <h4 className="text-white mb-2 md:mb-3 text-lg md:text-xl lg:text-2xl">
              Event or Training Registration
            </h4>
            <p className="text-slate-300 mb-6 leading-relaxed text-base md:text-lg lg:text-xl">
              Name, email, job title, company name.
            </p>

            <h3 className="text-white mb-3 text-xl md:text-2xl lg:text-3xl">
              3.2. Information Collected Automatically
            </h3>
            <p className="text-slate-300 mb-4 md:mb-6 leading-relaxed text-base md:text-lg lg:text-xl">
              We and our security partners may automatically collect:
            </p>

            <h4 className="text-white mb-2 md:mb-3 text-lg md:text-xl lg:text-2xl">
              Device & Network Information
            </h4>
            <ul className="list-disc pl-6 text-slate-300 space-y-2 mb-4 md:mb-6">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Device type</li>
              <li>Operating system</li>
              <li>Time zone</li>
            </ul>

            <h4 className="text-white mb-2 md:mb-3 text-lg md:text-xl lg:text-2xl">
              Usage & Interaction Data
            </h4>
            <ul className="list-disc pl-6 text-slate-300 space-y-2 mb-4 md:mb-6">
              <li>Pages visited</li>
              <li>Clickstream data</li>
              <li>Email open/click tracking</li>
              <li>Chat interactions</li>
            </ul>

            <h4 className="text-white mb-2 md:mb-3 text-lg md:text-xl lg:text-2xl">
              Security & Telemetry Data (Very Important for SOC Services)
            </h4>
            <ul className="list-disc pl-6 text-slate-300 space-y-2 mb-4 md:mb-6">
              <li>Firewall logs</li>
              <li>Endpoint security alerts</li>
              <li>Network traffic metadata</li>
              <li>Threat detection data</li>
              <li>Authentication logs</li>
              <li>IDS/IPS alerts</li>
              <li>SIEM events</li>
            </ul>
            <p className="text-slate-300 mb-6 leading-relaxed text-base md:text-lg lg:text-xl">
              This data is necessary for cybersecurity protection and incident detection.
            </p>

            <h3 className="text-white mb-3 text-xl md:text-2xl lg:text-3xl">
              3.3. Information from Third Parties
            </h3>
            <p className="text-slate-300 mb-2 leading-relaxed text-base md:text-lg lg:text-xl">
              We may receive:
            </p>
            <ul className="list-disc pl-6 text-slate-300 space-y-2">
              <li>Security threat intelligence feeds</li>
              <li>Data from technology partners</li>
              <li>Information from your company's IT team</li>
              <li>Publicly available cybersecurity reports</li>
              <li>OSINT data for security analysis</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-white mb-4 md:mb-6 text-2xl md:text-3xl lg:text-4xl">
              4. How We Use Personal Information
            </h2>
            <p className="text-slate-300 mb-3 leading-relaxed text-base md:text-lg lg:text-xl">
              We use information to:
            </p>
            <ul className="list-disc pl-6 text-slate-300 space-y-2 mb-4 md:mb-6">
              <li>Provide cybersecurity protection & SOC monitoring</li>
              <li>Detect, mitigate, and respond to cyber threats</li>
              <li>Authenticate and manage client accounts</li>
              <li>Analyze attacks and vulnerabilities</li>
              <li>Improve the security of our platforms</li>
              <li>Support clients during incidents</li>
              <li>Generate security reports and alerts</li>
              <li>Maintain compliance and auditing</li>
              <li>Communicate about updates, support, or alerts</li>
              <li>Operate our website and services</li>
              <li>Prevent fraud and unauthorized access</li>
            </ul>
            <p className="text-slate-300 leading-relaxed font-semibold text-base md:text-lg lg:text-xl">
              We never sell personal information.
            </p>
          </div>

          {/* Section 5 */}
          <div className="mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-white mb-4 md:mb-6 text-2xl md:text-3xl lg:text-4xl">
              5. Legal Bases for Processing (Simplified GDPR Approach)
            </h2>
            <p className="text-slate-300 mb-4 leading-relaxed text-base md:text-lg lg:text-xl">
              We process personal information based on:
            </p>

            <h4 className="text-white mb-2 md:mb-3 text-lg md:text-xl lg:text-2xl">
              Contractual Necessity
            </h4>
            <p className="text-slate-300 mb-4 leading-relaxed text-base md:text-lg lg:text-xl">
              To deliver cybersecurity services and SOC monitoring.
            </p>

            <h4 className="text-white mb-2 md:mb-3 text-lg md:text-xl lg:text-2xl">
              Legitimate Interests
            </h4>
            <p className="text-slate-300 mb-2 leading-relaxed text-base md:text-lg lg:text-xl">
              To:
            </p>
            <ul className="list-disc pl-6 text-slate-300 space-y-2 mb-2 md:mb-4">
              <li>Improve security</li>
              <li>Detect attacks</li>
              <li>Analyze threats</li>
              <li>Log activities for auditing</li>
              <li>Prevent fraud</li>
            </ul>
            <p className="text-slate-300 mb-4 leading-relaxed text-base md:text-lg lg:text-xl">
              These uses are essential for cybersecurity operations.
            </p>

            <h4 className="text-white mb-2 md:mb-3 text-lg md:text-xl lg:text-2xl">
              Consent
            </h4>
            <p className="text-slate-300 mb-2 leading-relaxed text-base md:text-lg lg:text-xl">
              For:
            </p>
            <ul className="list-disc pl-6 text-slate-300 space-y-2 mb-4 md:mb-6">
              <li>Marketing communications</li>
              <li>Website tracking cookies (where applicable)</li>
            </ul>

            <h4 className="text-white mb-2 md:mb-3 text-lg md:text-xl lg:text-2xl">
              Legal Obligations
            </h4>
            <p className="text-slate-300 leading-relaxed text-base md:text-lg lg:text-xl">
              To comply with governmental, regulatory, or incident-related requirements.
            </p>
          </div>

          {/* Section 6 */}
          <div className="mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-white mb-4 md:mb-6 text-2xl md:text-3xl lg:text-4xl">
              6. How We Share Personal Information
            </h2>
            <p className="text-slate-300 mb-4 leading-relaxed text-base md:text-lg lg:text-xl">
              We may share information with:
            </p>

            <h4 className="text-white mb-2 md:mb-3 text-lg md:text-xl lg:text-2xl">
              Internal DCSecurite Teams
            </h4>
            <p className="text-slate-300 mb-4 leading-relaxed text-base md:text-lg lg:text-xl">
              Cybersecurity analysts, SOC engineers, support teams.
            </p>

            <h4 className="text-white mb-2 md:mb-3 text-lg md:text-xl lg:text-2xl">
              Trusted Service Providers
            </h4>
            <ul className="list-disc pl-6 text-slate-300 space-y-2 mb-2 md:mb-4">
              <li>Cloud hosting</li>
              <li>Email and communication tools</li>
              <li>Threat intelligence partners</li>
              <li>SOC infrastructure providers</li>
            </ul>
            <p className="text-slate-300 mb-4 leading-relaxed text-base md:text-lg lg:text-xl">
              These vendors must follow strict confidentiality and security standards.
            </p>

            <h4 className="text-white mb-2 md:mb-3 text-lg md:text-xl lg:text-2xl">
              Your Company or Organization
            </h4>
            <p className="text-slate-300 mb-2 leading-relaxed text-base md:text-lg lg:text-xl">
              When required for:
            </p>
            <ul className="list-disc pl-6 text-slate-300 space-y-2 mb-4 md:mb-6">
              <li>Security alerts</li>
              <li>Incident reports</li>
              <li>Logs and forensic findings</li>
            </ul>

            <h4 className="text-white mb-2 md:mb-3 text-lg md:text-xl lg:text-2xl">
              Legal or Regulatory Authorities
            </h4>
            <p className="text-slate-300 mb-4 leading-relaxed text-base md:text-lg lg:text-xl">
              Only when required by law or to respond to lawful requests.
            </p>

            <h4 className="text-white mb-2 md:mb-3 text-lg md:text-xl lg:text-2xl">
              Business Transfers
            </h4>
            <p className="text-slate-300 mb-4 leading-relaxed text-base md:text-lg lg:text-xl">
              If DCSecurite undergoes a merger or acquisition, data may be transferred securely.
            </p>

            <p className="text-slate-300 leading-relaxed font-semibold text-base md:text-lg lg:text-xl">
              We never disclose client security logs for advertising or commercial resale.
            </p>
          </div>

          {/* Section 7 */}
          <div className="mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-white mb-4 md:mb-6 text-2xl md:text-3xl lg:text-4xl">
              7. Data Retention
            </h2>
            <p className="text-slate-300 mb-3 leading-relaxed text-base md:text-lg lg:text-xl">
              We retain personal information only as long as necessary for:
            </p>
            <ul className="list-disc pl-6 text-slate-300 space-y-2 mb-4 md:mb-6">
              <li>Providing cybersecurity services</li>
              <li>SOC analysis and logging</li>
              <li>Legal, regulatory, or auditing requirements</li>
              <li>Contractual obligations</li>
            </ul>
            <p className="text-slate-300 leading-relaxed text-base md:text-lg lg:text-xl">
              SOC logs and alerts may be stored for a defined period (typically 90–365 days
              depending on contract).
            </p>
          </div>

          {/* Section 8 */}
          <div className="mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-white mb-4 md:mb-6 text-2xl md:text-3xl lg:text-4xl">
              8. Security Measures
            </h2>
            <p className="text-slate-300 mb-3 leading-relaxed text-base md:text-lg lg:text-xl">
              We use enterprise-grade protections, including:
            </p>
            <ul className="list-disc pl-6 text-slate-300 space-y-2 mb-4 md:mb-6">
              <li>Encryption in transit and at rest</li>
              <li>Network segmentation</li>
              <li>Multi-factor authentication</li>
              <li>Zero-trust access security</li>
              <li>Continuous monitoring</li>
              <li>Vulnerability assessment and patching</li>
              <li>SOC 24/7 monitoring</li>
              <li>Incident response protocols</li>
            </ul>
            <p className="text-slate-300 leading-relaxed text-base md:text-lg lg:text-xl">
              No system is 100% secure, but we apply industry-leading controls.
            </p>
          </div>

          {/* Section 9 */}
          <div className="mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-white mb-4 md:mb-6 text-2xl md:text-3xl lg:text-4xl">
              9. International Transfers
            </h2>
            <p className="text-slate-300 mb-3 leading-relaxed text-base md:text-lg lg:text-xl">
              If data is processed outside Algeria, we apply appropriate safeguards through:
            </p>
            <ul className="list-disc pl-6 text-slate-300 space-y-2">
              <li>Contractual protections</li>
              <li>Secure encrypted transmission</li>
              <li>Approved data centers</li>
            </ul>
          </div>

          {/* Section 10 */}
          <div className="mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-white mb-4 md:mb-6 text-2xl md:text-3xl lg:text-4xl">
              10. Your Privacy Rights
            </h2>
            <p className="text-slate-300 mb-3 leading-relaxed text-base md:text-lg lg:text-xl">
              Subject to applicable laws, you may:
            </p>
            <ul className="list-disc pl-6 text-slate-300 space-y-2 mb-4 md:mb-6">
              <li>Access your personal information</li>
              <li>Request correction</li>
              <li>Request deletion (when permitted)</li>
              <li>Object to certain processing</li>
              <li>Withdraw consent (for non-essential processing)</li>
            </ul>
            <p className="text-slate-300 mb-3 leading-relaxed text-base md:text-lg lg:text-xl">
              Requests can be made at any time using the contact details below.
            </p>
            <p className="text-slate-300 leading-relaxed text-base md:text-lg lg:text-xl">
              For SOC-level logs, deletion may be restricted due to security and auditing
              requirements.
            </p>
          </div>

          {/* Section 11 */}
          <div className="mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-white mb-4 md:mb-6 text-2xl md:text-3xl lg:text-4xl">
              11. Cookies & Tracking
            </h2>
            <p className="text-slate-300 mb-3 leading-relaxed text-base md:text-lg lg:text-xl">
              We use cookies to:
            </p>
            <ul className="list-disc pl-6 text-slate-300 space-y-2 mb-4 md:mb-6">
              <li>Secure user sessions</li>
              <li>Improve site performance</li>
              <li>Analyze visits</li>
              <li>Manage preferences</li>
            </ul>
            <p className="text-slate-300 leading-relaxed text-base md:text-lg lg:text-xl">
              Visitors can adjust browser settings to control cookie use.
            </p>
          </div>

          {/* Section 12 */}
          <div className="mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-white mb-4 md:mb-6 text-2xl md:text-3xl lg:text-4xl">
              12. Children's Privacy
            </h2>
            <p className="text-slate-300 mb-3 leading-relaxed text-base md:text-lg lg:text-xl">
              Our services are not intended for individuals under 16 years old.
            </p>
            <p className="text-slate-300 leading-relaxed text-base md:text-lg lg:text-xl">
              We do not knowingly collect data from minors.
            </p>
          </div>

          {/* Section 13 */}
          <div className="mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-white mb-4 md:mb-6 text-2xl md:text-3xl lg:text-4xl">
              13. Third-Party Links
            </h2>
            <p className="text-slate-300 mb-3 leading-relaxed text-base md:text-lg lg:text-xl">
              Our website may include links to external services.
            </p>
            <p className="text-slate-300 leading-relaxed text-base md:text-lg lg:text-xl">
              Their privacy practices are not governed by this Policy.
            </p>
          </div>

          {/* Section 14 */}
          <div className="mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-white mb-4 md:mb-6 text-2xl md:text-3xl lg:text-4xl">
              14. Updates to This Policy
            </h2>
            <p className="text-slate-300 mb-3 leading-relaxed text-base md:text-lg lg:text-xl">
              We may update this policy periodically.
            </p>
            <p className="text-slate-300 leading-relaxed text-base md:text-lg lg:text-xl">
              The "Effective Date" will always reflect the latest version.
            </p>
          </div>

          {/* Section 15 */}
          <div className="mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-white mb-4 md:mb-6 text-2xl md:text-3xl lg:text-4xl">
              15. Contact Us
            </h2>
            <p className="text-slate-300 mb-4 leading-relaxed text-base md:text-lg lg:text-xl">
              For questions or privacy requests, contact:
            </p>
            <div className="bg-slate-900 rounded-xl p-6 border border-cyan-500/30 animate-fadeIn">
              <p className="text-white mb-2">DCSecurite – Privacy Office</p>
              <p className="text-slate-300 mb-2">Oran, Algeria</p>
              <p className="text-slate-300 mb-2">
                Email:{" "}
                <a
                  href="mailto:contact@dcsecurite.com"
                  className="text-cyan-600 dark:text-cyan-400 hover:underline"
                >
                  contact@dcsecurite.com
                </a>
              </p>
              <p className="text-slate-300">
                Website:{" "}
                <a
                  href="https://www.dcsecurite.com"
                  className="text-cyan-600 dark:text-cyan-400 hover:underline"
                >
                  www.dcsecurite.com
                </a>
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
            className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 dark:from-cyan-500 dark:to-blue-600 dark:hover:from-cyan-400 dark:hover:to-blue-500 text-white px-8 py-3 rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/30 dark:shadow-cyan-500/40 hover:shadow-cyan-500/50 dark:hover:shadow-cyan-500/60 hover:scale-105"
          >
            Back to Top
          </a>
        </div>
      </div>
    </section>
  );
}
