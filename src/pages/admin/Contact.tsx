import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Calendar, CheckCircle, XCircle, Clock, ChevronLeft } from "lucide-react";
import { API_BASE_URL } from "../../config";

interface ContactSubmission {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    company: string;
    job_level: string;
    country: string;
    phone: string;
    product_interest: string;
    message: string;
    status: 'new' | 'read' | 'contacted' | 'closed';
    ip_address: string;
    created_at: string;
}

const PRODUCT_LABELS: Record<string, string> = {
    'cloud-network-security': 'Cloud Network Security',
    'ids-ips': 'Intrusion Detection & Prevention (IDS/IPS)',
    'web-phishing-security': 'Web & Phishing Security',
    'secure-work-device': 'Secure Work on Any Device',
    'ot-industrial-protection': 'OT & Industrial Network Protection',
    'cspm': 'Cloud Security Posture Management (CSPM)',
    'dspm': 'Data Security Posture Management (DSPM)',
    'aspm': 'Application Security Posture Management (ASPM)',
    'cwp': 'Cloud Workload Protection (CWP)',
    'waas': 'Web Application & API Security (WAAS)',
    'mdr': 'Managed Detection & Response (MDR)',
    'cdr': 'Cloud Detection & Response (CDR)',
    'asm': 'Attack Surface Management (ASM)',
    'siem': 'Security Information and Event Management (SIEM)',
    'soc-automation': 'SOC Automation',
    'epp': 'Endpoint Protection (EPP)',
    'xdr': 'Extended Detection & Response (XDR)',
    'ransomware-protection': 'Ransomware Protection',
    'device-hardening': 'Device Security Hardening',
    'web-app-pentest': 'Web Application Penetration Testing',
    'mobile-app-pentest': 'Mobile Application Penetration Testing',
    'network-pentest': 'Network Penetration Testing',
    'cloud-pentest': 'Cloud Penetration Testing',
    'api-security-testing': 'API Security Testing',
    'wireless-pentest': 'Wireless Network Pentesting',
    'red-team': 'Red Team Assessments',
    'social-engineering': 'Social Engineering Assessments',
    'zero-day-detection': 'Zero-Day Threat Detection',
    'malware-analysis': 'Malware Analysis & Reverse Engineering',
    'vulnerability-research': 'Vulnerability Research',
    'exploit-development': 'Exploit Development (Ethical)',
    'continuous-testing': 'Continuous Security Testing (DevSecOps)',
    'public-sector': 'Public Sector',
    'financial-services': 'Financial Services',
    'healthcare': 'Healthcare',
    'manufacturing': 'Manufacturing',
    'smb': 'Small & Medium Businesses',
    'erp-management': 'Enterprise Resource Planning Management',
    'crm': 'Customer Relationship Management',
    'hrm': 'Human Resources Management',
    'industrial-management': 'Industrial Management',
    'construction-management': 'Construction Management',
    'logisoft360': 'Logisoft360',
    'mobile-development': 'Mobile Development',
    'web-development': 'Web Development',
    'ui-ux-design': 'UI/UX Design',
    'other': 'Other / Not Listed'
};

export function ContactSubmissionsPage() {
    const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedSubmission, setSelectedSubmission] = useState<ContactSubmission | null>(null);
    const [showMobileDetail, setShowMobileDetail] = useState(false);

    useEffect(() => {
        fetchSubmissions();
    }, []);

    const fetchSubmissions = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`${API_BASE_URL}/api/contact-submissions`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: "application/json",
                },
            });

            if (response.ok) {
                const data = await response.json();
                setSubmissions(data);
            }
        } catch (error) {
            console.error("Failed to fetch submissions", error);
            toast.error("Failed to load contact submissions");
        } finally {
            setLoading(false);
        }
    };

    const updateStatus = async (id: number, status: string) => {
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`${API_BASE_URL}/api/contact-submissions/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                    Accept: "application/json",
                },
                body: JSON.stringify({ status }),
            });

            if (response.ok) {
                toast.success("Status updated");
                fetchSubmissions();
                if (selectedSubmission && selectedSubmission.id === id) {
                    setSelectedSubmission({ ...selectedSubmission, status: status as any });
                }
            } else {
                toast.error("Failed to update status");
            }
        } catch (error) {
            console.error("Error updating status", error);
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'new': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
            case 'read': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
            case 'contacted': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400';
            case 'closed': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
            default: return 'bg-slate-100 text-slate-800';
        }
    };

    if (loading) return <div className="p-8 text-center text-slate-500">Loading submissions...</div>;

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Contact Form Submissions</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* List */}
                <div className={`${showMobileDetail ? 'hidden lg:flex' : 'flex'} lg:col-span-1 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden flex-col h-[600px]`}>
                    <div className="p-4 border-b border-slate-200 dark:border-slate-800 shrink-0">
                        <h2 className="font-semibold text-slate-900 dark:text-white">Inbox ({submissions.length})</h2>
                    </div>
                    <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-700">
                        {submissions.length === 0 ? (
                            <div className="p-8 text-center text-slate-500">No submissions found.</div>
                        ) : (
                            <div className="divide-y divide-slate-100 dark:divide-slate-800">
                                {submissions.map((sub) => (
                                    <button
                                        key={sub.id}
                                        onClick={() => {
                                            setSelectedSubmission(sub);
                                            setShowMobileDetail(true);
                                        }}
                                        className={`w-full text-left p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors ${selectedSubmission?.id === sub.id ? 'bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 shrink-0' : 'border-l-4 border-transparent'}`}
                                    >
                                        <div className="flex justify-between items-start mb-1">
                                            <span className={`px-2 py-0.5 rounded text-xs font-medium ${getStatusColor(sub.status)}`}>
                                                {sub.status.toUpperCase()}
                                            </span>
                                            <span className="text-xs text-slate-500">
                                                {new Date(sub.created_at).toLocaleDateString()}
                                            </span>
                                        </div>
                                        <h3 className="font-medium text-slate-900 dark:text-white truncate">
                                            {sub.first_name} {sub.last_name}
                                        </h3>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 truncate">
                                            {sub.company}
                                        </p>
                                        <p className="text-xs text-slate-500 truncate mt-1">
                                            {PRODUCT_LABELS[sub.product_interest] || sub.product_interest}
                                        </p>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Detail View */}
                <div className={`${!showMobileDetail ? 'hidden lg:block' : 'block'} lg:col-span-2 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col h-[600px]`}>
                    {selectedSubmission ? (
                        <>
                            {/* Mobile Back Button */}
                            <div className="lg:hidden p-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-2">
                                <button
                                    onClick={() => setShowMobileDetail(false)}
                                    className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white flex items-center gap-1 text-sm font-medium"
                                >
                                    <ChevronLeft className="w-4 h-4" />
                                    Back to Inbox
                                </button>
                            </div>

                            <div className="p-6 space-y-8 overflow-y-auto flex-1">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                                            {selectedSubmission.first_name} {selectedSubmission.last_name}
                                        </h2>
                                        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-slate-600 dark:text-slate-400 text-sm">
                                            <span className="flex items-center gap-1"><Mail className="w-4 h-4" /> {selectedSubmission.email}</span>
                                            <span className="flex items-center gap-1"><Phone className="w-4 h-4" /> {selectedSubmission.phone}</span>
                                            <span className="flex items-center gap-1 opacity-70"><Clock className="w-4 h-4" /> IP: {selectedSubmission.ip_address || 'N/A'}</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <select
                                            value={selectedSubmission.status}
                                            onChange={(e) => updateStatus(selectedSubmission.id, e.target.value)}
                                            className="bg-slate-100 dark:bg-slate-800 border-none rounded-lg px-3 py-2 text-sm font-medium"
                                        >
                                            <option value="new">New</option>
                                            <option value="read">Read</option>
                                            <option value="contacted">Contacted</option>
                                            <option value="closed">Closed</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                                    <div>
                                        <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Company</span>
                                        <p className="text-slate-900 dark:text-white font-medium">{selectedSubmission.company}</p>
                                    </div>
                                    <div>
                                        <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Job Level</span>
                                        <p className="text-slate-900 dark:text-white font-medium capitalize">{selectedSubmission.job_level}</p>
                                    </div>
                                    <div>
                                        <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Location</span>
                                        <p className="text-slate-900 dark:text-white font-medium">{selectedSubmission.country}</p>
                                    </div>
                                    <div>
                                        <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Submited</span>
                                        <p className="text-slate-900 dark:text-white font-medium">{new Date(selectedSubmission.created_at).toLocaleString()}</p>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-2">Product Interest</h3>
                                    <div className="inline-block px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-full text-sm font-medium">
                                        {PRODUCT_LABELS[selectedSubmission.product_interest] || selectedSubmission.product_interest}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-3">Message</h3>
                                    <div className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800/30 text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-wrap">
                                        {selectedSubmission.message}
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="h-full flex items-center justify-center text-slate-400">
                            Select a submission to view details
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
