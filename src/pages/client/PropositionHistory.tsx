import { useState, useEffect } from "react";
import { format } from "date-fns";
import { Copy, Eye, Loader2, Search, FileText, CheckCircle, X } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { SignatureModal } from "@/components/SignatureModal";
import { API_BASE_URL } from "../../config";

interface Proposal {
    id: number;
    service_type: string;
    project_name: string;
    budget_range: string;
    created_at: string;
    content: string;
    client_name?: string;
    company_name?: string;
    status: string;
    signature_data?: string;
    manager_name?: string;
    signed_at?: string;
    email?: string;
}

export function PropositionHistory() {
    const [proposals, setProposals] = useState<Proposal[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedProposal, setSelectedProposal] = useState<Proposal | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Contract Modal State
    const [isContractOpen, setIsContractOpen] = useState(false);
    const [contractPrice, setContractPrice] = useState("TBD");
    const [managerName, setManagerName] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [taxId, setTaxId] = useState("");
    const [clientAddress, setClientAddress] = useState("");
    const [clientSignature, setClientSignature] = useState<string | null>(null);
    const [isSignatureModalOpen, setIsSignatureModalOpen] = useState(false);

    useEffect(() => {
        fetchProposals();
    }, []);

    const fetchProposals = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`${API_BASE_URL}/api/proposals`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: "application/json",
                },
            });

            if (!response.ok) throw new Error("Failed to fetch proposals");

            const data = await response.json();
            setProposals(data);
        } catch (error) {
            console.error("Error fetching proposals:", error);
            toast.error("Could not load proposition history");
        } finally {
            setLoading(false);
        }
    };

    const filteredProposals = proposals.filter((proposal) =>
        (proposal.project_name || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
        (proposal.service_type || "").toLowerCase().includes(searchQuery.toLowerCase())
    );

    const openProposal = (proposal: Proposal) => {
        setSelectedProposal(proposal);
        // Extract price from content or fallback to budget_range
        // Extract price from content or fallback to budget_range
        // Strategy: 0. ID Match. 1. Try specific label. 2. Find MAX dollar amount in text.
        let extractedPrice = proposal.budget_range || "TBD";

        // 0. ID Match (Most Reliable)
        const idMatch = proposal.content.match(/id="proposal-total-amount"[^>]*>([^<]+)<\/span>/i);

        if (idMatch && idMatch[1]) {
            extractedPrice = idMatch[1];
        } else {
            // 1. Specific Match
            const labelMatch = proposal.content.match(/(?:Total\s+Investment|Grand\s+Total|Total\s+Cost).*?(\$[\d,]+(\.\d{2})?)/i);

            if (labelMatch && labelMatch[1]) {
                extractedPrice = labelMatch[1];
            } else {
                // 2. Fallback: Find MAX dollar amount
                const allPrices = proposal.content.match(/\$[\d,]+(\.\d{2})?/g);
                if (allPrices && allPrices.length > 0) {
                    let maxVal = 0;
                    let maxStr = "TBD";
                    allPrices.forEach((p: string) => {
                        const val = parseFloat(p.replace(/[$,]/g, ''));
                        if (val > maxVal) {
                            maxVal = val;
                            maxStr = p;
                        }
                    });
                    extractedPrice = maxStr;
                }
            }
        }
        setContractPrice(extractedPrice);

        setIsModalOpen(true);
    };

    const handlePrint = async () => {
        if (!selectedProposal) return;

        // Optimistic UI: Use current state if available (fallback)
        let printProposal = selectedProposal;

        try {
            // Fail-Safe: Fetch latest data from backend to ensure signature is present
            const token = localStorage.getItem('token');
            const response = await fetch(`${API_BASE_URL}/api/proposals/${selectedProposal.id}`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });

            if (response.ok) {
                const freshData = await response.json();
                printProposal = freshData;
                // Debug: specific alert for user verification
                // if (freshData.signature_data) alert(`Signature Data Fetched: ${freshData.signature_data.length} chars`);
            }
        } catch (e) {
            console.error("Failed to fetch fresh proposal data for print", e);
        }

        const printWindow = window.open('', '_blank');
        if (!printWindow) {
            toast.error("Please allow popups to print");
            return;
        }

        const printContent = `
        <html>
            <head>
                <title>Project Proposal - ${printProposal.project_name}</title>
                <script src="https://cdn.tailwindcss.com"></script>
                <style>
                    body { font-family: 'Inter', sans-serif; -webkit-print-color-adjust: exact; }
                    @media print {
                        @page { margin: 2cm; }
                        body { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
                    }
                    .signature-img { max-height: 80px; width: auto; }
                </style>
            </head>
            <body class="bg-white text-slate-900 p-8 max-w-4xl mx-auto">
                ${printProposal.content}
                


                <div class="mt-8 text-center text-slate-500 text-sm">
                    <p>&copy; ${new Date().getFullYear()} DCSecurite. Confidential & Proprietary.</p>
                </div>
            </body>
        </html>
    `;
        printWindow.document.write(printContent);
        printWindow.document.close();
        printWindow.focus();
        // Allow styles to load
        setTimeout(() => {
            printWindow.print();
        }, 500);
    };

    const handlePrintContract = async () => {
        if (!selectedProposal) return;

        let printProposal = selectedProposal;
        // Check for local overrides from the form state if signatures are just added
        // But for printing "Review Contract", we mainly rely on what's in DB or currently displayed
        let printManagerName = managerName;
        let printAddress = clientAddress;
        let printTaxId = taxId;
        let printSignature = clientSignature;

        try {
            // Fetch fresh data for Contract as well
            const token = localStorage.getItem('token');
            const response = await fetch(`${API_BASE_URL}/api/proposals/${selectedProposal.id}`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });

            if (response.ok) {
                const freshData = await response.json();
                printProposal = freshData;

                // If the proposal is already signed in the DB, prefer that data
                if (freshData.status === 'signed') {
                    printManagerName = freshData.manager_name || printManagerName;
                    printAddress = freshData.contract_address || printAddress;
                    printTaxId = freshData.tax_id || printTaxId;
                    printSignature = freshData.signature_data || printSignature;
                }
            }
        } catch (e) {
            console.error("Failed to fetch fresh proposal data for contract print", e);
        }

        const printWindow = window.open('', '_blank');
        if (!printWindow) {
            toast.error("Please allow popups to print");
            return;
        }

        const contractContent = `
            <html>
                <head>
                    <title>Customer Service Agreement - ${printProposal.project_name}</title>
                    <script src="https://cdn.tailwindcss.com"></script>
                    <style>
                        body { font-family: 'Inter', sans-serif; -webkit-print-color-adjust: exact; padding: 40px; }
                        @media print {
                            @page { margin: 2cm; }
                            body { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
                        }
                        .input-print { border-bottom: 1px solid #cbd5e1; padding: 0 4px; display: inline-block; min-width: 200px; }
                        /* Inline styles for robustness */
                        .signature-container {
                            height: 80px;
                            border-bottom: 2px solid #cbd5e1;
                            display: flex;
                            align-items: flex-end;
                            justify-content: flex-start;
                        }
                        .signature-img-element {
                            max-height: 80px;
                            width: auto;
                            display: block;
                        }
                    </style>
                </head>
                <body class="bg-white text-slate-900 max-w-4xl mx-auto">
                    <h1 class="text-2xl font-bold text-center mb-8 uppercase border-b pb-4">Customer Service Agreement</h1>
                    
                    <p class="mb-6">This agreement was entered into on <strong>${new Date().toLocaleDateString()}</strong> between:</p>

                    <div class="grid grid-cols-2 gap-8 mb-6">
                        <div class="bg-slate-50 p-4 border rounded">
                            <h3 class="font-bold mb-2">Service Provider:</h3>
                            <p><strong>DCSecurite</strong> - Cybersecurity & DevSecOps company</p>
                            <p class="mt-2 text-sm text-slate-600">Tax identification number :</p>
                            <p class="font-mono text-sm font-bold mb-2">10146250012510204680</p>
                            <p>Address: Algeria - Oran - Residence "les jardins d'acil" - 6th floor</p>
                            <p>Email: contracts@dcsecurite.com</p>
                        </div>
                        <div class="bg-blue-50 p-4 border border-blue-100 rounded">
                            <h3 class="font-bold mb-2">Client:</h3>
                            <div class="space-y-2 mb-3">
                                <p><strong>Company:</strong> <span class="input-print">${companyName}</span></p>
                                <p><strong>Manager:</strong> <span class="input-print">${printManagerName}</span></p>
                                <p><strong>Tax ID:</strong> <span class="input-print">${printTaxId}</span></p>
                                <p><strong>Address:</strong> <span class="input-print">${printAddress}</span></p>
                            </div>
                            <p><strong>Email:</strong> ${printProposal.email || "Client Email"}</p>
                        </div>
                    </div>

                    <p class="mb-4">Collectively, the "Parties".</p>

                    <h3 class="text-lg font-bold mt-6 mb-2">1. Scope of Services</h3>
                    <p>The Service Provider agrees to provide the digital services described in the attached Project Proposal/Scope of Work Statement (SLL) as Appendix A (Project Name: ${printProposal.project_name}), including but not limited to:</p>
                    <ul class="list-disc pl-5 space-y-1 mt-2">
                        <li>Website Development (landing pages, corporate websites, e-commerce, Software as a Service, dashboards)</li>
                        <li>User Interface/User Experience Design</li>
                        <li>Payment System Integration</li>
                        <li>AI Feature Development</li>
                        <li>Cybersecurity Enhancement</li>
                        <li>Hosting, Deployment, and Maintenance (if applicable)</li>
                    </ul>

                    <h3 class="text-lg font-bold mt-6 mb-2">2. Deliverables</h3>
                    <p>All deliverables, key milestones, and timelines are detailed in Appendix A.</p>
                    <p>Deliveries will be considered accepted if the client approves them in writing within [X] business days of the delivery date.</p>

                    <h3 class="text-lg font-bold mt-6 mb-2">3. Payment Terms</h3>
                    <div class="bg-slate-100 p-4 rounded font-mono border">
                        <p><strong>Total Project Cost:</strong> <span class="font-bold text-blue-600">${contractPrice}</span></p>
                    </div>
                    <p class="mt-2"><strong>Payment Schedule:</strong></p>
                    <ul class="list-disc pl-5 space-y-1">
                        <li>50% upfront upon signing the contract</li>
                        <li>30% upon completion of essential features</li>
                        <li>20% upon final delivery and approval</li>
                    </ul>

                    <h3 class="text-lg font-bold mt-6 mb-2">4. Client Responsibilities</h3>
                    <p>The client agrees to provide all necessary content, images, access permissions, and approvals immediately.</p>

                    <h3 class="text-lg font-bold mt-6 mb-2">5. Intellectual Property</h3>
                    <p>All work completed under this agreement remains the intellectual property of the service provider until full payment is received.</p>
                    
                    <h3 class="text-lg font-bold mt-6 mb-2">6. Confidentiality</h3>
                    <p>Both parties agree to maintain the confidentiality of all confidential information disclosed during the project.</p>

                    <h3 class="text-lg font-bold mt-8 mb-4 border-t pt-6">Signatures</h3>
                    <div class="grid grid-cols-2 gap-8">
                        <div>
                            <p class="font-bold mb-4">Service Provider (DCSecurite)</p>
                            <div class="space-y-3">
                                <p><strong>Name:</strong> BERRAHOU TAHA</p>
                                <p><strong>Title:</strong> DCSecurite Sales Responsible</p>
                                <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
                                <div class="signature-container mt-4">
                                     <img src="/signature-taha.png" class="signature-img-element" alt="Provider Signature" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <p class="font-bold mb-4">Client Representative</p>
                            <div class="space-y-3">
                                <p><strong>Name:</strong> ${printManagerName}</p>
                                <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p> 
                                <div class="signature-container mt-4">
                                    ${(printSignature)
                ? `<img src="${printSignature}" class="signature-img-element" alt="Client Signature" />`
                : '<div class="h-16 w-full border-b border-slate-300"></div>'
            }
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mt-12 text-center text-xs text-slate-400">
                        <p>&copy; ${new Date().getFullYear()} DCSecurite. All rights reserved.</p>
                    </div>
                    <script>
                        window.onload = function() {
                            setTimeout(() => {
                                window.print();
                            }, 500); 
                        }
                    </script>
                </body>
            </html>
        `;
        printWindow.document.write(contractContent);
        printWindow.document.close();
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Proposition History</h1>
                    <p className="text-slate-500 dark:text-slate-400">View your generated project proposals</p>
                </div>

                <div className="relative w-full md:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input
                        placeholder="Search proposals..."
                        value={searchQuery}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                        className="pl-9 bg-white dark:bg-slate-900"
                    />
                </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                <Table>
                    <TableHeader>
                        <TableRow className="bg-slate-50 dark:bg-slate-800/50">
                            <TableHead>Service</TableHead>
                            <TableHead>Project Name</TableHead>
                            <TableHead>Date & Time</TableHead>
                            <TableHead>Budget Range</TableHead>
                            <TableHead>Status</TableHead> {/* Add Status Header */}
                            <TableHead className="text-right">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {loading ? (
                            <TableRow>
                                <TableCell colSpan={6} className="h-32 text-center"> {/* Update colSpan */}
                                    <div className="flex justify-center items-center gap-2 text-slate-500">
                                        <Loader2 className="h-5 w-5 animate-spin" />
                                        Loading history...
                                    </div>
                                </TableCell>
                            </TableRow>
                        ) : filteredProposals.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={6} className="h-32 text-center text-slate-500"> {/* Update colSpan */}
                                    No proposals found. Generate one in the Programming section!
                                </TableCell>
                            </TableRow>
                        ) : (
                            filteredProposals.map((proposal) => (
                                <TableRow key={proposal.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                    <TableCell className="font-medium text-blue-600 dark:text-blue-400">
                                        {proposal.service_type || 'Web Development'}
                                    </TableCell>
                                    <TableCell className="font-medium text-slate-900 dark:text-white">
                                        {proposal.project_name}
                                    </TableCell>
                                    <TableCell className="text-slate-500 text-sm">
                                        {format(new Date(proposal.created_at), "MMM d, yyyy • h:mm a")}
                                    </TableCell>
                                    <TableCell>
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400 border border-green-200 dark:border-green-800">
                                            {proposal.budget_range || 'N/A'}
                                        </span>
                                    </TableCell>
                                    <TableCell>
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border
                                            ${proposal.status === 'signed' ? 'bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-800' :
                                                proposal.status === 'paid_50' ? 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800' :
                                                    proposal.status === 'paid_80' ? 'bg-indigo-100 text-indigo-800 border-indigo-200 dark:bg-indigo-900/20 dark:text-indigo-400 dark:border-indigo-800' :
                                                        proposal.status === 'paid_100' ? 'bg-violet-100 text-violet-800 border-violet-200 dark:bg-violet-900/20 dark:text-violet-400 dark:border-violet-800' :
                                                            'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-400 dark:border-yellow-800'
                                            }`}>
                                            {proposal.status === 'signed' ? 'Approved' :
                                                proposal.status === 'paid_50' ? 'Paid 50%' :
                                                    proposal.status === 'paid_80' ? 'Paid 80%' :
                                                        proposal.status === 'paid_100' ? 'Paid 100%' :
                                                            'Pending'}
                                        </span>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => openProposal(proposal)}
                                            className="gap-2 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                        >
                                            <Eye className="h-4 w-4" />
                                            View
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>

            {isModalOpen && selectedProposal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
                    <div className="bg-white dark:bg-slate-900 rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col border border-slate-200 dark:border-slate-800">
                        <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 rounded-t-xl">
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                <Search className="w-5 h-5 text-blue-500" />
                                Project Proposal: {selectedProposal.project_name}
                            </h2>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={handlePrint}
                                    className="px-4 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-2 shadow-md hover:shadow-lg border border-transparent"
                                    style={{ backgroundColor: '#181818', color: '#ffffff' }}
                                >
                                    <Copy className="w-4 h-4" />
                                    Print / PDF
                                </button>
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-full transition-colors text-slate-500"
                                >
                                    <span className="sr-only">Close</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 transform rotate-45"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                                </button>
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar bg-white" id="print-area-history">
                            <div
                                className="prose prose-slate max-w-none dark:prose-invert prose-headings:text-slate-900 prose-p:text-slate-700 prose-li:text-slate-700"
                                dangerouslySetInnerHTML={{ __html: selectedProposal.content || '' }}
                            />
                        </div>

                        <div className="p-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 rounded-b-xl flex justify-end gap-3">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="px-6 py-2.5 bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white rounded-lg font-medium transition-colors"
                            >
                                Try Options
                            </button>
                            <button
                                className="px-6 py-2.5 font-bold rounded-lg transition-all shadow-md shadow-slate-200/50 dark:shadow-none hover:shadow-lg whitespace-nowrap border border-transparent"
                                style={{ backgroundColor: '#181818', color: '#ffffff' }}
                                onClick={() => {
                                    const priceMatch = selectedProposal.content?.match(/FINAL TOTAL[\s\S]*?(\$[\d,]+\.?\d*)/i) ||
                                        selectedProposal.content?.match(/TOTAL[\s\S]*?(\$[\d,]+\.?\d*)/i);
                                    let extractedPrice = priceMatch ? priceMatch[1] : "$TBD";
                                    setContractPrice(extractedPrice);
                                    setManagerName(selectedProposal.client_name || ""); // Sync managerName on open
                                    setCompanyName(selectedProposal.company_name || selectedProposal.client_name || "");
                                    setClientSignature(null);
                                    setIsContractOpen(true);
                                    setIsModalOpen(false);
                                }}
                            >
                                Next Step
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Contract Modal */}
            {isContractOpen && selectedProposal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
                    <div className="bg-white dark:bg-slate-900 rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col border border-slate-200 dark:border-slate-800">
                        {/* Contract Header */}
                        <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 rounded-t-xl">
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                <FileText className="w-5 h-5 text-blue-500" />
                                Review Contract
                            </h2>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={handlePrintContract}
                                    className="px-4 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-2 shadow-md hover:shadow-lg border border-transparent"
                                    style={{ backgroundColor: '#181818', color: '#ffffff' }}
                                >
                                    <Copy className="w-4 h-4" />
                                    Print / PDF
                                </button>
                                <button
                                    onClick={() => setIsContractOpen(false)}
                                    className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-full transition-colors text-slate-500"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Contract Content */}
                        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar bg-white text-slate-900 leading-relaxed text-sm font-serif">
                            <div className="max-w-3xl mx-auto space-y-6">
                                <h1 className="text-2xl font-bold text-center mb-8 uppercase border-b pb-4">Customer Service Agreement</h1>

                                <p>This agreement was entered into on <strong>{new Date().toLocaleDateString()}</strong> between:</p>

                                <div className="grid grid-cols-2 gap-8 mb-6">
                                    <div className="bg-slate-50 p-4 border rounded">
                                        <h3 className="font-bold mb-2">Service Provider:</h3>
                                        <p><strong>DCSecurite</strong> - Cybersecurity & DevSecOps company</p>
                                        <p className="mt-2 text-sm text-slate-600">Tax identification number :</p>
                                        <p className="font-mono text-sm font-bold mb-2">10146250012510204680</p>
                                        <p>Address: Algeria - Oran - Residence "les jardins d'acil" - 6th floor</p>
                                        <p>Email: contracts@dcsecurite.com</p>
                                    </div>
                                    <div className="bg-blue-50 p-4 border border-blue-100 rounded">
                                        <h3 className="font-bold mb-2">Client:</h3>

                                        <div className="space-y-2 mb-3">
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm font-semibold w-24">Company:</span>
                                                <Input
                                                    className="h-7 text-sm bg-white border-blue-200"
                                                    value={companyName}
                                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCompanyName(e.target.value)}
                                                    disabled={selectedProposal.status === 'signed'}
                                                />
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm font-semibold w-24">Manager:</span>
                                                <Input
                                                    className="h-7 text-sm bg-white border-blue-200"
                                                    value={managerName} // Bind managerName state
                                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setManagerName(e.target.value)} // Update managerName state
                                                    disabled={selectedProposal.status === 'signed'}
                                                />
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm font-semibold w-24">Tax ID:</span>
                                                <Input
                                                    className="h-7 text-sm bg-white border-blue-200"
                                                    placeholder="Tax Identification Number"
                                                    value={taxId}
                                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTaxId(e.target.value)}
                                                    disabled={selectedProposal.status === 'signed'}
                                                />
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm font-semibold w-24">Address:</span>
                                                <Input
                                                    className="h-7 text-sm bg-white border-blue-200"
                                                    placeholder="Address"
                                                    value={clientAddress}
                                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setClientAddress(e.target.value)}
                                                    disabled={selectedProposal.status === 'signed'}
                                                />
                                            </div>
                                        </div>

                                        <p><strong>Email:</strong> {selectedProposal.email || "Client Email"}</p>
                                    </div>
                                </div>

                                <p className="mb-4">Collectively, the "Parties".</p>

                                <h3 className="text-lg font-bold mt-6 mb-2">1. Scope of Services</h3>
                                <p>The Service Provider agrees to provide the digital services described in the attached Project Proposal/Scope of Work Statement (SLL) as Appendix A (Project Name: {selectedProposal.project_name}), including but not limited to:</p>
                                <ul className="list-disc pl-5 space-y-1 mt-2">
                                    <li>Website Development (landing pages, corporate websites, e-commerce, Software as a Service, dashboards)</li>
                                    <li>User Interface/User Experience Design</li>
                                    <li>Payment System Integration</li>
                                    <li>AI Feature Development</li>
                                    <li>Cybersecurity Enhancement</li>
                                    <li>Hosting, Deployment, and Maintenance (if applicable)</li>
                                </ul>
                                <p className="mt-2 text-xs text-slate-500">Any additional services not listed in the SLL require a written change order signed by both parties.</p>

                                <h3 className="text-lg font-bold mt-6 mb-2">2. Deliverables</h3>
                                <p>All deliverables, key milestones, and timelines are detailed in Appendix A.</p>
                                <p>Deliveries will be considered accepted if the client approves them in writing within [X] business days of the delivery date.</p>

                                <h3 className="text-lg font-bold mt-6 mb-2">3. Payment Terms</h3>
                                <div className="bg-slate-100 p-4 rounded font-mono border">
                                    <div className="flex items-center gap-2">
                                        <span className="font-bold">Total Project Cost:</span>
                                        <span className="font-bold text-blue-600 bg-white px-3 py-1 rounded border border-slate-300">
                                            {contractPrice}
                                        </span>
                                    </div>
                                </div>
                                <p className="mt-2"><strong>Payment Schedule:</strong></p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>50% upfront upon signing the contract</li>
                                    <li>30% upon completion of essential features</li>
                                    <li>20% upon final delivery and approval</li>
                                </ul>
                                <p className="mt-2 text-xs text-slate-500">Delay in payment may result in suspension of programming. All fees exclude applicable taxes unless otherwise stated.</p>

                                <h3 className="text-lg font-bold mt-6 mb-2">4. Client Responsibilities</h3>
                                <p>The client agrees to provide all necessary content, images, access permissions, and approvals immediately. Respond to inquiries within 48 to 72 business hours. Confirm the project scope, choices, and features via signed forms or documents. Failure to comply may result in project delays and additional costs, which will be communicated to you by the accounting manager.</p>

                                <h3 className="text-lg font-bold mt-6 mb-2">5. Change Requests</h3>
                                <p>Any request to add features or modifications beyond the agreed scope of work will be considered a change request and will incur additional costs, which will be determined and communicated to you before implementation. Change requests include modifications to scope, cost, and schedule, and are subject to client approval.</p>

                                <h3 className="text-lg font-bold mt-6 mb-2">6. Intellectual Property</h3>
                                <p>All work completed under this agreement remains the intellectual property of the service provider until full payment is received. Upon full payment, ownership of the outputs transfers to the client, with the exception of: Pre-existing frameworks, libraries, and third-party tools; Separately licensed open-source components. The service provider may use samples of the project in its portfolio or marketing campaigns with the client's consent.</p>

                                <h3 className="text-lg font-bold mt-6 mb-2">7. Confidentiality</h3>
                                <p>Both parties agree to maintain the confidentiality of all confidential information disclosed during the project. Confidential information may not be shared without written consent except as required by law.</p>

                                <h3 className="text-lg font-bold mt-6 mb-2">8. Warranties and Disclaimer</h3>
                                <p>The service provider warrants that the services will be provided professionally and in accordance with industry standards. No warranty is provided against unforeseen external issues (such as hosting failures or the discontinuation of third-party APIs). Except as otherwise agreed upon or selected in the application form, liability is limited to the amount paid by the client under this agreement.</p>

                                <h3 className="text-lg font-bold mt-6 mb-2">9. Maintenance and Support</h3>
                                <p>Optional maintenance and support packages are detailed in the proposal. Support may include: Minor bug fixes and updates; Security updates; Technical assistance. Additional features or major changes are billed separately.</p>

                                <h3 className="text-lg font-bold mt-6 mb-2">10. Project Termination</h3>
                                <p>Either party may terminate this agreement with seven (7) days' written notice. Upon termination: The client shall pay for all completed work and approved deliverables. The service provider reserves rights to unclaimed work until full payment is received.</p>

                                <h3 className="text-lg font-bold mt-6 mb-2">11. Limitation of Liability</h3>
                                <p>Under no circumstances shall either party be liable for indirect, incidental, or consequential damages. Maximum liability is limited to the total fees paid by the client.</p>

                                <h3 className="text-lg font-bold mt-6 mb-2">12. Governing Law and Dispute Resolution</h3>
                                <p>This Agreement is governed by the laws of [suggest something], unless otherwise agreed by the parties. Any dispute shall first be resolved amicably. If no resolution is reached, disputes shall be referred to arbitration/mediation in [ALGERIA].</p>

                                <h3 className="text-lg font-bold mt-6 mb-2">13. Force Majeure</h3>
                                <p>Neither party shall be liable for delays or failures in performance resulting from unforeseen events beyond its reasonable control, including natural disasters, internet outages, government restrictions, and epidemics.</p>

                                <h3 className="text-lg font-bold mt-6 mb-2">14. Entire Agreement</h3>
                                <p>This Agreement, including all annexes, constitutes the entire agreement between the parties. Any amendments must be in writing and signed by both parties.</p>

                                <h3 className="text-lg font-bold mt-8 mb-4 border-t pt-6">15. Signatures</h3>
                                <div className="grid grid-cols-2 gap-8">
                                    <div>
                                        <p className="font-bold mb-4">Service Provider (DCSecurite)</p>
                                        <div className="space-y-3">
                                            <Input defaultValue="BERRAHOU TAHA" disabled className="bg-slate-100" />
                                            <Input defaultValue="DCSecurite Sales Responsible" disabled className="bg-slate-100" />
                                            <Input defaultValue={new Date().toLocaleDateString()} disabled className="bg-slate-100" />
                                            <div className="h-12 border-b-2 border-slate-300 flex items-end justify-center">
                                                <img src="/signature-taha.png" alt="Signature" className="h-full object-contain" />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="font-bold mb-4">Client Representative</p>
                                        <div className="space-y-3">
                                            <Input
                                                placeholder="Full Name"
                                                value={managerName}
                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setManagerName(e.target.value)}
                                                className="border-blue-300 bg-blue-50"
                                            />
                                            <Input placeholder="Title / Position" className="border-blue-300 bg-blue-50" />
                                            <Input defaultValue={new Date().toLocaleDateString()} className="border-blue-300 bg-blue-50" />
                                            <div className="h-16 border-b-2 border-slate-300 flex items-end justify-center">
                                                {selectedProposal.status === 'signed' ? (
                                                    <img src={selectedProposal.signature_data || clientSignature || ""} alt="Client Signature" className="h-full object-contain" />
                                                ) : (
                                                    <div
                                                        className="h-full w-full flex items-end justify-center cursor-pointer hover:bg-slate-50 transition-colors"
                                                        onClick={() => setIsSignatureModalOpen(true)}
                                                    >
                                                        {clientSignature ? (
                                                            <img src={clientSignature} alt="Client Signature" className="h-full object-contain" />
                                                        ) : (
                                                            <span className="text-slate-400 text-sm mb-2">x __________________________ (Click to Sign)</span>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contract Footer */}
                        {selectedProposal.status !== 'signed' ? (
                            <div className="p-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 rounded-b-xl flex justify-end gap-3">
                                <button
                                    onClick={() => setIsContractOpen(false)}
                                    className="px-6 py-2.5 bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white rounded-lg font-medium transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    className="px-8 py-3 font-bold text-white rounded-xl shadow-lg shadow-purple-500/20 hover:bg-neutral-800 transition-all transform active:scale-95 whitespace-nowrap flex items-center gap-2"
                                    style={{ backgroundColor: '#181818' }}
                                    onClick={async () => {
                                        if (!selectedProposal || !clientSignature) {
                                            toast.error("Please ensure you have signed the contract.");
                                            return;
                                        }
                                        try {
                                            const response = await fetch(`${API_BASE_URL}/api/proposals/${selectedProposal.id}/sign`, {
                                                method: 'POST',
                                                headers: {
                                                    'Content-Type': 'application/json',
                                                    'Accept': 'application/json',
                                                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                                                },
                                                body: JSON.stringify({
                                                    managerName,
                                                    companyName,
                                                    taxId,
                                                    address: clientAddress,
                                                    signature: clientSignature
                                                })
                                            });

                                            const result = await response.json();
                                            if (!response.ok) throw new Error(result.error || "Failed to sign");

                                            toast.success("Contract signed successfully!");
                                            setIsContractOpen(false);
                                            fetchProposals(); // Refresh list to update status
                                        } catch (error: any) {
                                            console.error(error);
                                            toast.error(error.message);
                                        }
                                    }}
                                >
                                    <CheckCircle className="w-5 h-5" />
                                    Approved and Send
                                </button>
                            </div>
                        ) : (
                            <div className="p-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 rounded-b-xl flex justify-center">
                                <div className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-100 text-emerald-800 rounded-lg border border-emerald-200">
                                    <CheckCircle className="w-5 h-5" />
                                    <span className="font-bold">Contract Approved & Signed</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}

            <SignatureModal
                isOpen={isSignatureModalOpen}
                onClose={() => setIsSignatureModalOpen(false)}
                onSave={(signature: string) => setClientSignature(signature)}
            />
        </div>
    );
}
