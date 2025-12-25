import { Shield, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes";

interface SecurityService {
    id: string;
    category: string;
    name: string;
    description: string;
    route: string;
}

const allSecurityServices: SecurityService[] = [
    // Network Security
    { id: 'ns-1', category: 'Network Security', name: 'Cloud Network Security', description: 'Secure your cloud infrastructure with advanced network protection.', route: ROUTES.CLOUD_NETWORK_SECURITY },
    { id: 'ns-2', category: 'Network Security', name: 'Intrusion Detection & Prevention (IDS/IPS)', description: 'Real-time threat monitoring and automatic blocking of malicious traffic.', route: ROUTES.IDS_IPS },
    { id: 'ns-3', category: 'Network Security', name: 'Web & Phishing Security', description: 'Protect users from malicious websites and phishing attacks.', route: ROUTES.WEB_PHISHING_SECURITY },
    { id: 'ns-4', category: 'Network Security', name: 'Secure Work on Any Device', description: 'Ensure secure access to corporate resources from anywhere.', route: ROUTES.SECURE_WORK_DEVICE },
    { id: 'ns-5', category: 'Network Security', name: 'OT & Industrial Network Protection', description: 'Specialized security for Operational Technology and industrial control systems.', route: ROUTES.OT_SECURITY },

    // Cloud Security
    { id: 'cs-1', category: 'Cloud Security', name: 'Cloud Security Posture Management (CSPM)', description: 'Identify and remediate cloud infrastructure risks.', route: ROUTES.CSPM },
    { id: 'cs-2', category: 'Cloud Security', name: 'Data Security Posture Management (DSPM)', description: 'Discover, classify, and protect sensitive data across clouds.', route: ROUTES.DSPM },
    { id: 'cs-3', category: 'Cloud Security', name: 'Application Security Posture Management (ASPM)', description: 'Secure your applications throughout the development lifecycle.', route: ROUTES.ASPM },
    { id: 'cs-4', category: 'Cloud Security', name: 'Cloud Workload Protection (CWP)', description: 'Protect workloads across VMs, containers, and serverless functions.', route: ROUTES.CWP },
    { id: 'cs-5', category: 'Cloud Security', name: 'Web Application & API Security (WAAS)', description: 'Comprehensive protection for web apps and APIs.', route: ROUTES.WAAS },

    // Security Operations
    { id: 'so-1', category: 'Security Operations', name: 'Managed Detection & Response (MDR)', description: '24/7 threat monitoring and incident response service.', route: ROUTES.MDR },
    { id: 'so-2', category: 'Security Operations', name: 'Cloud Detection & Response (CDR)', description: 'Detect and respond to threats in your cloud environment.', route: ROUTES.CDR },
    { id: 'so-3', category: 'Security Operations', name: 'Attack Surface Management (ASM)', description: 'Continuously map and monitor your external attack surface.', route: ROUTES.ASM },
    { id: 'so-4', category: 'Security Operations', name: 'SIEM', description: 'Security Information and Event Management for centralized log analysis.', route: ROUTES.SIEM },
    { id: 'so-5', category: 'Security Operations', name: 'SOC Automation', description: 'Streamline security operations with automated workflows.', route: ROUTES.SOC_AUTOMATION },

    // Endpoint Security
    { id: 'es-1', category: 'Endpoint Security', name: 'Endpoint Protection (EPP)', description: 'Next-gen antivirus and endpoint defense.', route: ROUTES.EPP },
    { id: 'es-2', category: 'Endpoint Security', name: 'Extended Detection & Response (XDR)', description: 'Unified detection and response across endpoints, networks, and cloud.', route: ROUTES.XDR },
    { id: 'es-3', category: 'Endpoint Security', name: 'Ransomware Protection', description: 'Specialized defense against ransomware encryption.', route: ROUTES.RANSOMWARE_PROTECTION },
    { id: 'es-4', category: 'Endpoint Security', name: 'Device Security Hardening', description: 'Configuration management to reduce device vulnerabilities.', route: ROUTES.DEVICE_SECURITY_HARDENING },

    // Penetration Testing
    { id: 'pt-1', category: 'Penetration Testing', name: 'Web Application Penetration Testing', description: 'Identify vulnerabilities in your web applications.', route: ROUTES.WEB_APP_PEN_TEST },
    { id: 'pt-2', category: 'Penetration Testing', name: 'Mobile Application Penetration Testing', description: 'Secure your iOS and Android applications.', route: ROUTES.MOBILE_APP_PEN_TEST },
    { id: 'pt-3', category: 'Penetration Testing', name: 'Network Penetration Testing', description: 'Assess the security of your internal and external networks.', route: ROUTES.NETWORK_PEN_TEST },
    { id: 'pt-4', category: 'Penetration Testing', name: 'Cloud Penetration Testing', description: 'Validate the security of your cloud configuration and services.', route: ROUTES.CLOUD_PEN_TEST },
    { id: 'pt-5', category: 'Penetration Testing', name: 'API Security Testing', description: 'Find and fix flaws in your APIs.', route: ROUTES.API_SECURITY_TESTING },
    { id: 'pt-6', category: 'Penetration Testing', name: 'Wireless Network Pentesting', description: 'Secure your Wi-Fi networks against unauthorized access.', route: ROUTES.WIRELESS_NETWORK_PEN_TEST },
    { id: 'pt-7', category: 'Penetration Testing', name: 'Red Team Assessments', description: 'Full-scope simulation of a real-world adversary attack.', route: ROUTES.RED_TEAM_ASSESSMENTS },
    { id: 'pt-8', category: 'Penetration Testing', name: 'Social Engineering', description: 'Test your organization\'s resilience to phishing and human manipulation.', route: ROUTES.SOCIAL_ENGINEERING },
    { id: 'pt-9', category: 'Penetration Testing', name: 'Zero-Day Threat Detection', description: 'Identify unknown vulnerabilities before attackers exploit them.', route: ROUTES.ZERO_DAY_DETECTION },
    { id: 'pt-10', category: 'Penetration Testing', name: 'Malware Analysis', description: 'In-depth analysis of suspicious files and software.', route: ROUTES.MALWARE_ANALYSIS },
    { id: 'pt-11', category: 'Penetration Testing', name: 'Vulnerability Research', description: 'Deep dive into potential security weaknesses.', route: ROUTES.VULNERABILITY_RESEARCH },
    { id: 'pt-12', category: 'Penetration Testing', name: 'Ethical Exploit Development', description: 'Proof-of-concept creation for identified vulnerabilities.', route: ROUTES.ETHICAL_EXPLOIT_DEVELOPMENT },
    { id: 'pt-13', category: 'Penetration Testing', name: 'Continuous Security Testing', description: 'Ongoing automated and manual security validation (DevSecOps).', route: ROUTES.CONTINUOUS_SECURITY_TESTING },
];

export function ClientSecurity() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = ["All", ...new Set(allSecurityServices.map(s => s.category))];

    const filteredServices = allSecurityServices.filter(service => {
        const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            service.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === "All" || service.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <img src="/assets/security-guard-logo.png" alt="Security Services" className="w-14 h-14 object-contain" />
                    Security Services
                </h1>

                {/* Filters */}
                <div className="flex flex-wrap gap-2">
                    <input
                        type="text"
                        placeholder="Search services..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="px-4 py-2 border border-slate-200 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="px-4 py-2 border border-slate-200 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                    >
                        {categories.map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
                                <th className="p-4 font-semibold text-slate-700 dark:text-slate-300">Service Name</th>
                                <th className="p-4 font-semibold text-slate-700 dark:text-slate-300 hidden md:table-cell">Category</th>
                                <th className="p-4 font-semibold text-slate-700 dark:text-slate-300">Description</th>
                                <th className="p-4 font-semibold text-slate-700 dark:text-slate-300 text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredServices.length > 0 ? (
                                filteredServices.map((service) => (
                                    <tr key={service.id} className="border-b border-slate-100 dark:border-slate-800/50 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                        <td className="p-4 text-slate-900 dark:text-white font-medium">{service.name}</td>
                                        <td className="p-4 text-slate-500 dark:text-slate-400 text-sm hidden md:table-cell">
                                            <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs">
                                                {service.category}
                                            </span>
                                        </td>
                                        <td className="p-4 text-slate-600 dark:text-slate-400 text-sm max-w-md">{service.description}</td>
                                        <td className="p-4 text-right">
                                            <Link
                                                to={`/client/security/${service.route.split('/').pop()}`}
                                                className="inline-flex items-center gap-2 px-4 py-2 border border-white/10 text-white text-sm font-medium rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap group"
                                                style={{ backgroundColor: "#181818" }}
                                            >
                                                View Plans
                                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={4} className="p-8 text-center text-slate-500 dark:text-slate-400">
                                        No services found matching your search.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="text-center text-xs text-slate-400 dark:text-slate-500 mt-4">
                Displaying {filteredServices.length} of {allSecurityServices.length} services
            </div>
        </div>
    );
}
