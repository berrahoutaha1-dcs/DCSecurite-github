import { ExternalLink } from "lucide-react";

export function LegalReferencesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Simple Header */}
      <div className="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 pt-[280px] md:pt-[280px] pb-12 md:pb-16">
        <div className="container mx-auto max-w-4xl px-4 md:px-6">
          <h1 className="text-slate-900 dark:text-white text-3xl md:text-4xl mb-4">
            Legal References
          </h1>
          <p className="text-slate-700 dark:text-slate-300 text-base md:text-lg leading-relaxed">
            According to local and international laws and treaties, we conduct this cybersecurity
            activity with full transparency, integrity, and complete compliance.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-4xl px-4 md:px-6 py-12 md:py-16">
        {/* Local Laws Section */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-slate-900 dark:text-white text-2xl md:text-3xl mb-6 md:mb-8 pb-3 border-b border-slate-200 dark:border-slate-700">
            Local Laws (Algeria)
          </h2>

          <p className="text-slate-700 dark:text-slate-300 mb-6 md:mb-8 leading-relaxed">
            Our operations are fully compliant with Algerian legislation governing cybersecurity,
            data protection, and digital activities.
          </p>

          <div className="space-y-8">
            {/* Law 09-04 */}
            <div>
              <h3 className="text-slate-900 dark:text-white text-lg md:text-xl mb-2">
                Law 09-04 (August 5, 2009)
              </h3>
              <p className="text-slate-700 dark:text-slate-300 mb-3 leading-relaxed">
                Special rules relating to the prevention and fight against crimes related to
                information and communication technologies.
              </p>
              <a
                href="https://www.joradp.dz/FTP/jo-francais/2009/F2009047.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 underline text-sm md:text-base"
              >
                <span>View Official Source</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Law 18-07 */}
            <div>
              <h3 className="text-slate-900 dark:text-white text-lg md:text-xl mb-2">
                Law 18-07 (June 10, 2018)
              </h3>
              <p className="text-slate-700 dark:text-slate-300 mb-3 leading-relaxed">
                Relating to the protection of individuals in the processing of personal data.
              </p>
              <a
                href="https://www.joradp.dz/FTP/jo-francais/2018/F2018034.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 underline text-sm md:text-base"
              >
                <span>View Official Source</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Law 18-05 */}
            <div>
              <h3 className="text-slate-900 dark:text-white text-lg md:text-xl mb-2">
                Law 18-05 (May 10, 2018)
              </h3>
              <p className="text-slate-700 dark:text-slate-300 mb-3 leading-relaxed">
                Relating to electronic commerce, defining rules for online transactions, consumer
                protection, and digital contracts.
              </p>
              <a
                href="https://www.joradp.dz/FTP/jo-francais/2018/F2018028.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 underline text-sm md:text-base"
              >
                <span>View Official Source</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Ordinance 03-05 */}
            <div>
              <h3 className="text-slate-900 dark:text-white text-lg md:text-xl mb-2">
                Ordinance 03-05 (July 19, 2003)
              </h3>
              <p className="text-slate-700 dark:text-slate-300 mb-3 leading-relaxed">
                Relating to copyright and related rights, protecting intellectual property in
                digital environments.
              </p>
              <a
                href="https://www.joradp.dz/FTP/jo-francais/2003/F2003044.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 underline text-sm md:text-base"
              >
                <span>View Official Source</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* International References Section */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-slate-900 dark:text-white text-2xl md:text-3xl mb-6 md:mb-8 pb-3 border-b border-slate-200 dark:border-slate-700">
            International References & Standards
          </h2>

          <p className="text-slate-700 dark:text-slate-300 mb-6 md:mb-8 leading-relaxed">
            We align our operations with globally recognized cybersecurity standards and frameworks.
          </p>

          <div className="space-y-8">
            {/* ISO 27001 */}
            <div>
              <h3 className="text-slate-900 dark:text-white text-lg md:text-xl mb-2">
                ISO/IEC 27001 – Information Security Management
              </h3>
              <p className="text-slate-700 dark:text-slate-300 mb-3 leading-relaxed">
                International standard for establishing, implementing, maintaining, and continually
                improving an information security management system (ISMS).
              </p>
              <a
                href="https://www.iso.org/isoiec-27001-information-security.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 underline text-sm md:text-base"
              >
                <span>Learn More</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* ISO 27002 */}
            <div>
              <h3 className="text-slate-900 dark:text-white text-lg md:text-xl mb-2">
                ISO/IEC 27002 – Cybersecurity Practices
              </h3>
              <p className="text-slate-700 dark:text-slate-300 mb-3 leading-relaxed">
                Code of practice for information security controls, providing guidelines for
                organizational information security standards and practices.
              </p>
              <a
                href="https://www.iso.org/standard/75652.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 underline text-sm md:text-base"
              >
                <span>Learn More</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* GDPR */}
            <div>
              <h3 className="text-slate-900 dark:text-white text-lg md:text-xl mb-2">
                GDPR – General Data Protection Regulation
              </h3>
              <p className="text-slate-700 dark:text-slate-300 mb-3 leading-relaxed">
                European regulation on data protection and privacy, setting the standard for
                personal data handling and user rights.
              </p>
              <a
                href="https://gdpr.eu/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 underline text-sm md:text-base"
              >
                <span>Learn More</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* NIST */}
            <div>
              <h3 className="text-slate-900 dark:text-white text-lg md:text-xl mb-2">
                NIST Cybersecurity Framework
              </h3>
              <p className="text-slate-700 dark:text-slate-300 mb-3 leading-relaxed">
                U.S. National Institute of Standards and Technology framework for improving critical
                infrastructure cybersecurity.
              </p>
              <a
                href="https://www.nist.gov/cyberframework"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 underline text-sm md:text-base"
              >
                <span>Learn More</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Industry Best Practices Section */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-slate-900 dark:text-white text-2xl md:text-3xl mb-6 md:mb-8 pb-3 border-b border-slate-200 dark:border-slate-700">
            Industry Best Practices
          </h2>

          <p className="text-slate-700 dark:text-slate-300 mb-6 md:mb-8 leading-relaxed">
            Our commitment to excellence is reflected in our adherence to industry-leading security
            practices.
          </p>

          <ul className="space-y-4 text-slate-700 dark:text-slate-300">
            <li className="leading-relaxed">
              <strong className="text-slate-900 dark:text-white">Secure Data Encryption:</strong>{" "}
              End-to-end encryption for data at rest and in transit using AES-256 and TLS 1.3.
            </li>
            <li className="leading-relaxed">
              <strong className="text-slate-900 dark:text-white">
                Access Control and Authentication Policies:
              </strong>{" "}
              Multi-factor authentication and role-based access control (RBAC) policies.
            </li>
            <li className="leading-relaxed">
              <strong className="text-slate-900 dark:text-white">
                Incident Response and Disaster Recovery:
              </strong>{" "}
              24/7 monitoring with rapid incident response and disaster recovery protocols.
            </li>
            <li className="leading-relaxed">
              <strong className="text-slate-900 dark:text-white">
                Continuous Security Audits and Penetration Testing:
              </strong>{" "}
              Regular security audits and penetration testing by certified experts.
            </li>
          </ul>
        </section>

        {/* Commitment Statement */}
        <section className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6 md:p-8">
          <h2 className="text-slate-900 dark:text-white text-xl md:text-2xl mb-4">
            Our Legal Commitment
          </h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            At <strong>DCSecurite</strong>, we pledge to uphold the highest standards of legal
            compliance, ethical conduct, and professional integrity. Our cybersecurity services are
            delivered in strict accordance with local Algerian laws and international best
            practices, ensuring the safety, privacy, and security of our clients' digital assets.
          </p>
        </section>
      </div>
    </div>
  );
}
