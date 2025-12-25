import { useState } from "react";
import { Check, Upload, ArrowRight, Shield, Globe, Layout, Smartphone, Code, Server, CreditCard, ChevronsUpDown, FileText, CheckCircle, X, Copy } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SignatureModal } from "./SignatureModal";
import { API_BASE_URL } from "../config";

const countries = [
    { label: "Afghanistan", value: "AF" }, { label: "Albania", value: "AL" }, { label: "Algeria", value: "DZ" },
    { label: "Andorra", value: "AD" }, { label: "Angola", value: "AO" }, { label: "Argentina", value: "AR" },
    { label: "Armenia", value: "AM" }, { label: "Australia", value: "AU" }, { label: "Austria", value: "AT" },
    { label: "Azerbaijan", value: "AZ" }, { label: "Bahrain", value: "BH" }, { label: "Bangladesh", value: "BD" },
    { label: "Belarus", value: "BY" }, { label: "Belgium", value: "BE" }, { label: "Belize", value: "BZ" },
    { label: "Benin", value: "BJ" }, { label: "Bhutan", value: "BT" }, { label: "Bolivia", value: "BO" },
    { label: "Bosnia and Herzegovina", value: "BA" }, { label: "Botswana", value: "BW" }, { label: "Brazil", value: "BR" },
    { label: "Brunei", value: "BN" }, { label: "Bulgaria", value: "BG" }, { label: "Burkina Faso", value: "BF" },
    { label: "Burundi", value: "BI" }, { label: "Cambodia", value: "KH" }, { label: "Cameroon", value: "CM" },
    { label: "Canada", value: "CA" }, { label: "Cape Verde", value: "CV" }, { label: "Central African Republic", value: "CF" },
    { label: "Chad", value: "TD" }, { label: "Chile", value: "CL" }, { label: "China", value: "CN" },
    { label: "Colombia", value: "CO" }, { label: "Comoros", value: "KM" }, { label: "Congo", value: "CG" },
    { label: "Costa Rica", value: "CR" }, { label: "Croatia", value: "HR" }, { label: "Cuba", value: "CU" },
    { label: "Cyprus", value: "CY" }, { label: "Czech Republic", value: "CZ" }, { label: "Denmark", value: "DK" },
    { label: "Djibouti", value: "DJ" }, { label: "Dominican Republic", value: "DO" }, { label: "East Timor", value: "TL" },
    { label: "Ecuador", value: "EC" }, { label: "Egypt", value: "EG" }, { label: "El Salvador", value: "SV" },
    { label: "Equatorial Guinea", value: "GQ" }, { label: "Eritrea", value: "ER" }, { label: "Estonia", value: "EE" },
    { label: "Ethiopia", value: "ET" }, { label: "Fiji", value: "FJ" }, { label: "Finland", value: "FI" },
    { label: "France", value: "FR" }, { label: "Gabon", value: "GA" }, { label: "Gambia", value: "GM" },
    { label: "Georgia", value: "GE" }, { label: "Germany", value: "DE" }, { label: "Ghana", value: "GH" },
    { label: "Greece", value: "GR" }, { label: "Guatemala", value: "GT" }, { label: "Guinea", value: "GN" },
    { label: "Guinea-Bissau", value: "GW" }, { label: "Guyana", value: "GY" }, { label: "Haiti", value: "HT" },
    { label: "Honduras", value: "HN" }, { label: "Hungary", value: "HU" }, { label: "Iceland", value: "IS" },
    { label: "India", value: "IN" }, { label: "Indonesia", value: "ID" }, { label: "Iran", value: "IR" },
    { label: "Iraq", value: "IQ" }, { label: "Ireland", value: "IE" }, { label: "Israel", value: "IL" },
    { label: "Italy", value: "IT" }, { label: "Ivory Coast", value: "CI" }, { label: "Jamaica", value: "JM" },
    { label: "Japan", value: "JP" }, { label: "Jordan", value: "JO" }, { label: "Kazakhstan", value: "KZ" },
    { label: "Kenya", value: "KE" }, { label: "Kuwait", value: "KW" }, { label: "Kyrgyzstan", value: "KG" },
    { label: "Laos", value: "LA" }, { label: "Latvia", value: "LV" }, { label: "Lebanon", value: "LB" },
    { label: "Lesotho", value: "LS" }, { label: "Liberia", value: "LR" }, { label: "Libya", value: "LY" },
    { label: "Liechtenstein", value: "LI" }, { label: "Lithuania", value: "LT" }, { label: "Luxembourg", value: "LU" },
    { label: "Madagascar", value: "MG" }, { label: "Malawi", value: "MW" }, { label: "Malaysia", value: "MY" },
    { label: "Maldives", value: "MV" }, { label: "Mali", value: "ML" }, { label: "Malta", value: "MT" },
    { label: "Mauritania", value: "MR" }, { label: "Mauritius", value: "MU" }, { label: "Mexico", value: "MX" },
    { label: "Moldova", value: "MD" }, { label: "Monaco", value: "MC" }, { label: "Mongolia", value: "MN" },
    { label: "Montenegro", value: "ME" }, { label: "Morocco", value: "MA" }, { label: "Mozambique", value: "MZ" },
    { label: "Myanmar", value: "MM" }, { label: "Namibia", value: "NA" }, { label: "Nepal", value: "NP" },
    { label: "Netherlands", value: "NL" }, { label: "New Zealand", value: "NZ" }, { label: "Nicaragua", value: "NI" },
    { label: "Niger", value: "NE" }, { label: "Nigeria", value: "NG" }, { label: "North Korea", value: "KP" },
    { label: "North Macedonia", value: "MK" }, { label: "Norway", value: "NO" }, { label: "Oman", value: "OM" },
    { label: "Pakistan", value: "PK" }, { label: "Panama", value: "PA" }, { label: "Papua New Guinea", value: "PG" },
    { label: "Paraguay", value: "PY" }, { label: "Peru", value: "PE" }, { label: "Philippines", value: "PH" },
    { label: "Poland", value: "PL" }, { label: "Portugal", value: "PT" }, { label: "Qatar", value: "QA" },
    { label: "Romania", value: "RO" }, { label: "Russia", value: "RU" }, { label: "Rwanda", value: "RW" },
    { label: "Saudi Arabia", value: "SA" }, { label: "Senegal", value: "SN" }, { label: "Serbia", value: "RS" },
    { label: "Sierra Leone", value: "SL" }, { label: "Singapore", value: "SG" }, { label: "Slovakia", value: "SK" },
    { label: "Slovenia", value: "SI" }, { label: "Somalia", value: "SO" }, { label: "South Africa", value: "ZA" },
    { label: "South Korea", value: "KR" }, { label: "Spain", value: "ES" }, { label: "Sri Lanka", value: "LK" },
    { label: "Sudan", value: "SD" }, { label: "Sweden", value: "SE" }, { label: "Switzerland", value: "CH" },
    { label: "Syria", value: "SY" }, { label: "Taiwan", value: "TW" }, { label: "Tajikistan", value: "TJ" },
    { label: "Tanzania", value: "TZ" }, { label: "Thailand", value: "TH" }, { label: "Togo", value: "TG" },
    { label: "Tunisia", value: "TN" }, { label: "Turkey", value: "TR" }, { label: "Turkmenistan", value: "TM" },
    { label: "Uganda", value: "UG" }, { label: "Ukraine", value: "UA" }, { label: "United Arab Emirates", value: "AE" },
    { label: "United Kingdom", value: "GB" }, { label: "United States", value: "US" }, { label: "Uruguay", value: "UY" },
    { label: "Uzbekistan", value: "UZ" }, { label: "Venezuela", value: "VE" }, { label: "Vietnam", value: "VN" },
    { label: "Yemen", value: "YE" }, { label: "Zambia", value: "ZM" }, { label: "Zimbabwe", value: "ZW" }
];

// Helper Components defined outside to prevent re-creation on render
const Section = ({ title, icon: Icon, number, children, className = "" }: any) => (
    <div className={`bg-white dark:bg-[#1A2332] rounded-lg border border-slate-200 dark:border-slate-800 overflow-hidden ${className}`}>
        <div className="bg-slate-50 dark:bg-slate-900/50 px-4 py-3 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-sm">
                {number}
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                {Icon && <Icon className="w-4 h-4 text-slate-400" />}
                {title}
            </h3>
        </div>
        <div className="p-4 md:p-5">
            {children}
        </div>
    </div>
);

const CheckboxGroup = ({ options, name, type = "checkbox" }: { options: string[], name: string, type?: "checkbox" | "radio" }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {options.map((opt) => (
            <label key={opt} className="flex items-start gap-2.5 p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/30 cursor-pointer hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <input
                    type={type}
                    name={name}
                    value={opt}
                    className="mt-0.5 w-4 h-4 rounded border-slate-300 dark:border-slate-600 text-blue-600 focus:ring-blue-500 bg-white dark:bg-slate-800"
                />
                <span className="text-sm text-slate-700 dark:text-slate-300">{opt}</span>
            </label>
        ))}
    </div>
);

const FormInput = ({ label, placeholder, type = "text", name: fieldName }: any) => {
    // Auto-generate name from label if not provided
    const name = fieldName || label?.toLowerCase().replace(/[^a-z0-9]/g, '_') || 'field';
    return (
        <div className="space-y-1.5">
            {label && <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">{label}</label>}
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400"
            />
        </div>
    );
};

const Textarea = ({ label, placeholder, name: fieldName }: any) => {
    const name = fieldName || label?.toLowerCase().replace(/[^a-z0-9]/g, '_') || 'field';
    return (
        <div className="space-y-1.5">
            {label && <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">{label}</label>}
            <textarea
                name={name}
                placeholder={placeholder}
                rows={3}
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400 resize-none"
            />
        </div>
    );
};

export function WebDevelopmentSpecificationForm() {
    const [openCountry, setOpenCountry] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState("");

    const [loading, setLoading] = useState(false);
    const [proposal, setProposal] = useState<string | null>(null);
    const [isContractOpen, setIsContractOpen] = useState(false);
    const [contractPrice, setContractPrice] = useState("TBD");
    const [managerName, setManagerName] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [taxId, setTaxId] = useState("");
    const [clientAddress, setClientAddress] = useState("");
    const [clientSignature, setClientSignature] = useState<string | null>(null);
    const [isSignatureModalOpen, setIsSignatureModalOpen] = useState(false);
    const [proposalId, setProposalId] = useState<number | null>(null);
    const [formValues, setFormValues] = useState<any>({});

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setProposal(null);

        const formData = new FormData(e.currentTarget);
        const data: Record<string, any> = {};

        formData.forEach((value, key) => {
            if (data[key]) {
                if (!Array.isArray(data[key])) {
                    data[key] = [data[key]];
                }
                data[key].push(value);
            } else {
                data[key] = value;
            }
        });

        setFormValues(data); // Save form data for contract

        // Add explicit location from state
        if (selectedCountry) data['selectedCountry'] = selectedCountry;

        try {
            const response = await fetch(`${API_BASE_URL}/api/generate-proposal`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}` // Ensure auth
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (!response.ok) {
                console.error("Proposal generation failed:", result);
                throw new Error(result.message || "Failed to generate");
            }

            setProposal(result.proposal || result.html); // handle both keys if inconsistent
            setProposalId(result.proposal_id); // Capture ID

            // Extract Total Price from AI Content
            // Extract Total Price from AI Content
            const content = result.proposal || result.html;
            let extractedPrice = "TBD";

            // 0. ID Match (Most Reliable - Enforced by Backend Prompt)
            // Look for <span id="proposal-total-amount">$X,XXX</span>
            const idMatch = content.match(/id="proposal-total-amount"[^>]*>([^<]+)<\/span>/i);

            if (idMatch && idMatch[1]) {
                extractedPrice = idMatch[1];
            } else {
                // 1. Specific Match (Prioritize explicit Total labels)
                const labelMatch = content.match(/(?:Total\s+Investment|Grand\s+Total|Total\s+Cost).*?(\$[\d,]+(\.\d{2})?)/i);

                if (labelMatch && labelMatch[1]) {
                    extractedPrice = labelMatch[1];
                } else {
                    // 2. Fallback: Find MAX dollar amount in text.
                    const allPrices = content.match(/\$[\d,]+(\.\d{2})?/g);
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
        } catch (error: any) {
            console.error(error);
            // toast.error(error.message || "Failed to generate proposal. Please try again.");
            alert(error.message || "Failed to generate proposal.");
        } finally {
            setLoading(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            if ((e.target as HTMLElement).tagName.toLowerCase() === 'textarea') {
                return;
            }
            e.preventDefault();
            const form = e.currentTarget as HTMLFormElement;
            const focusableElements = Array.from(
                form.querySelectorAll('input, button, textarea, select, [tabindex]:not([tabindex="-1"])')
            ) as HTMLElement[];

            const index = focusableElements.indexOf(e.target as HTMLElement);
            if (index > -1 && index < focusableElements.length - 1) {
                focusableElements[index + 1].focus();
            }
        }
    };

    return (
        <section className="py-8 px-0" id="specification-form">
            <div className="max-w-4xl mx-auto space-y-8">
                <div className="text-center space-y-2">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                        Web Development Specification
                    </h2>
                    <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Please fill out the details below to receive a precise proposition.
                    </p>
                </div>

                <form onSubmit={handleSubmit} onKeyDown={handleKeyDown} className="space-y-4">
                    {/* 1. Client Information */}
                    <Section title="Client Information" number={1} icon={Globe}>
                        {/* ... (Existing Children - implicitly forwarded, but need to make sure Input calls use new props if needed, mostly they use label as name fallback) ... */}
                        {/* Note: In previous step I updated Input to auto-generate name if missing. */}
                        <div className="grid md:grid-cols-2 gap-4">
                            <FormInput label="Full Name / Company Name" placeholder="e.g. Acme Corp" name="fullName" />
                            <FormInput label="Email Address" placeholder="name@company.com" type="email" name="email" />
                            <FormInput label="Phone Number (WhatsApp) or ( viber )" placeholder="+1 234 567 890" name="phoneNumber" />

                            <div className="space-y-1.5">
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Location</label>
                                <Popover open={openCountry} onOpenChange={setOpenCountry}>
                                    <PopoverTrigger asChild>
                                        <button
                                            type="button"
                                            role="combobox"
                                            aria-expanded={openCountry}
                                            className="w-full justify-between items-center flex px-3 py-2 text-sm border rounded-lg dark:bg-slate-900 dark:border-slate-700 dark:text-white bg-white border-slate-200 outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
                                        >
                                            <span className={!selectedCountry ? "text-slate-400" : ""}>
                                                {selectedCountry
                                                    ? countries.find((country) => country.value === selectedCountry)?.label
                                                    : "Select country..."}
                                            </span>
                                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                        </button>
                                    </PopoverTrigger>
                                    <PopoverContent
                                        className="w-[--radix-popover-trigger-width] p-0 shadow-xl z-[60] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
                                        align="start"
                                    >
                                        <Command className="bg-white dark:bg-slate-900 w-full">
                                            <CommandInput placeholder="Search country..." className="border-none focus:ring-0 h-9" />
                                            <CommandList
                                                className="max-h-[250px] !max-h-[250px] overflow-y-auto custom-scrollbar"
                                                style={{ maxHeight: '250px' }}
                                            >
                                                <CommandEmpty className="py-2 text-center text-xs text-slate-500">No country found.</CommandEmpty>
                                                <CommandGroup>
                                                    {countries.map((country) => (
                                                        <CommandItem
                                                            key={country.value}
                                                            value={country.label}
                                                            onSelect={() => {
                                                                setSelectedCountry(country.value);
                                                                setOpenCountry(false);
                                                            }}
                                                            className="cursor-pointer aria-selected:bg-blue-50 dark:aria-selected:bg-slate-800 focus:bg-blue-50 dark:focus:bg-slate-800 text-sm py-2 px-2"
                                                        >
                                                            <Check
                                                                className={cn(
                                                                    "mr-2 h-4 w-4 text-blue-600 shrink-0",
                                                                    selectedCountry === country.value ? "opacity-100" : "opacity-0"
                                                                )}
                                                            />
                                                            <span className="truncate">{country.label}</span>
                                                        </CommandItem>
                                                    ))}
                                                </CommandGroup>
                                            </CommandList>
                                        </Command>
                                    </PopoverContent>
                                </Popover>
                            </div>

                            <FormInput label="Current Website" placeholder="https://" name="currentWebsite" />
                            <FormInput label="Social Media" placeholder="@username" name="socialMedia" />
                        </div>
                        <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">Entity Type</label>
                            <CheckboxGroup options={["Company", "Individual", "Organization"]} name="entity" type="radio" />
                        </div>
                    </Section>

                    {/* 2. Type of Service */}
                    <Section title="Type of Service" number={2} icon={Layout}>
                        <CheckboxGroup options={[
                            "Landing Page", "Corporate Website", "E-commerce Website",
                            "Web Platform (SaaS/CRM)", "Appointment Booking", "Website Redesign",
                            "Maintenance & Updates", "Other"
                        ]} name="serviceType" />
                        <div className="mt-4">
                            <FormInput label="Other Service (Specify)" placeholder="Describe your specific need..." name="otherService" />
                        </div>
                    </Section>

                    {/* 3. Project Overview */}
                    <Section title="Project Overview" number={3} icon={ArrowRight}>
                        <div className="space-y-4">
                            <FormInput label="Project Name" placeholder="My New Project" name="projectName" />
                            <Textarea label="Short Project Description" placeholder="Main goal of the project..." name="projectDescription" />
                            <Textarea label="Target Audience" placeholder="Who are your customers?" name="targetAudience" />
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Required Languages</label>
                                <CheckboxGroup options={["Arabic", "French", "English", "Other"]} name="languages" />
                            </div>
                        </div>
                    </Section>

                    {/* 4. Pages & Content */}
                    <Section title="Pages & Content" number={4} icon={Layout}>
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Required Pages</label>
                                <CheckboxGroup options={[
                                    "Home", "About Us", "Services", "Products", "Blog",
                                    "Contact Us", "Sign Up / Login", "Dashboard", "Other"
                                ]} name="pages" />
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Is content ready?</label>
                                    <CheckboxGroup options={["Yes", "No, need creation"]} name="contentReady" type="radio" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Have images/videos?</label>
                                    <CheckboxGroup options={["Yes", "No"]} name="mediaReady" type="radio" />
                                </div>
                            </div>
                        </div>
                    </Section>

                    {/* 5. Design & UI/UX */}
                    <Section title="Design & UI/UX" number={5} icon={Layout}>
                        <div className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Brand Identity</label>
                                    <CheckboxGroup options={["Yes (Logo/Colors)", "No"]} name="brandIdentity" type="radio" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Design Style</label>
                                    <CheckboxGroup options={["Modern", "Minimal", "Luxury", "Professional"]} name="designPreferences" type="radio" />
                                </div>
                            </div>
                            <FormInput label="Preferred Colors" placeholder="e.g. Blue and White" name="preferredColors" />
                            <FormInput label="Design References (Links)" placeholder="Websites you like..." name="designReferences" />
                        </div>
                    </Section>

                    {/* 6. Features & Functionalities */}
                    <Section title="Features & Functionalities" number={6} icon={Code}>
                        <CheckboxGroup options={[
                            "Dashboard", "Authentication", "User Roles", "Advanced Forms",
                            "WhatsApp Integration", "Email Integration", "Notifications", "Online Payment",
                            "Appointment Booking", "API Integration", "AI Features", "Cybersecurity"
                        ]} name="features" />
                        <div className="mt-4">
                            <FormInput label="Other Features" placeholder="Specify any custom features..." name="otherFeatures" />
                        </div>
                    </Section>

                    {/* 7. Hosting & Domain */}
                    <Section title="Hosting & Domain" number={7} icon={Server}>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Have Domain?</label>
                                <CheckboxGroup options={["Yes", "No"]} name="hasDomain" type="radio" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Have Hosting?</label>
                                <CheckboxGroup options={["Yes", "No"]} name="hasHosting" type="radio" />
                            </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Management Preference</label>
                            <CheckboxGroup options={["Full management by your team", "Technical setup only"]} name="hostingManagement" type="radio" />
                        </div>
                    </Section>

                    {/* 8. Security */}
                    <Section title="Security Requirements" number={8} icon={Shield}>
                        <CheckboxGroup options={[
                            "SSL Certificate", "Cloudflare", "Firewall", "Anti-DDoS",
                            "Regular Backups", "Client Data Protection", "Not required"
                        ]} name="security" />
                    </Section>

                    {/* 9. Budget & Timeline */}
                    <Section title="Budget & Timeline" number={9} icon={CreditCard}>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Expected Budget</label>
                                <CheckboxGroup options={["Open", "Specific Range"]} name="budgetType" type="radio" />
                                <div className="mt-2">
                                    <FormInput placeholder="e.g. $5000 - $10000 (USD)" name="budget_range" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Timeline</label>
                                <CheckboxGroup options={["< 1 Month", "1-2 Months", "> 2 Months"]} name="timeline" type="radio" />
                            </div>
                        </div>
                    </Section>

                    {/* 10. Maintenance */}
                    <Section title="Maintenance & Support" number={10} icon={Server}>
                        <CheckboxGroup options={[
                            "Monthly Maintenance Contract", "On-demand Support", "Not required"
                        ]} name="maintenance" type="radio" />
                    </Section>

                    {/* 11. Attachments */}
                    <Section title="Attachments" number={11} icon={Upload}>
                        <div className="mt-4">
                            <CheckboxGroup options={["Logo", "Brand Guidelines", "Project Description", "Design Examples"]} name="attachments" />
                        </div>
                    </Section>

                    {/* TECHNICAL DETAILS */}
                    <div className="pt-8 pb-4">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                            <Code className="w-5 h-5 text-blue-500" />
                            Technical Complexity & Details
                        </h3>

                        <div className="grid md:grid-cols-2 gap-4">
                            {/* 1. Actual Complexity */}
                            <Section title="Complexity Level" number={12} className="h-full">
                                <CheckboxGroup options={["Simple (Static)", "Medium (Dynamic)", "Complex (SaaS/API)"]} name="complexityLevel" type="radio" />
                                <div className="pt-3 mt-3 border-t border-slate-100 dark:border-slate-800">
                                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">Roles</label>
                                    <CheckboxGroup options={["Regular User", "Admin", "Supervisor", "Custom"]} name="roles" />
                                </div>
                            </Section>

                            {/* 2. Technical Reference */}
                            <Section title="Technical Reference" number={13} className="h-full">
                                <FormInput label="Replicate site? (Link)" placeholder="https://" />
                                <div className="mt-3">
                                    <CheckboxGroup options={["Copy UI/UX", "Copy Logic", "New Concept"]} name="replicationType" type="radio" />
                                </div>
                            </Section>

                            {/* 3. Quality */}
                            <Section title="Quality Expectation" number={14} className="h-full">
                                <CheckboxGroup options={["MVP", "Production Ready", "Enterprise"]} name="quality" type="radio" />
                                <div className="pt-3 mt-3 border-t border-slate-100 dark:border-slate-800">
                                    <CheckboxGroup options={["Scalable Code", "Clean Architecture", "Docs"]} name="codeQuality" />
                                </div>
                            </Section>

                            {/* 4. Scalability */}
                            <Section title="Scalability" number={15} className="h-full">
                                <CheckboxGroup options={["Temporary", "Scalable", "Long-term SaaS"]} name="scalability" type="radio" />
                                <div className="pt-3 mt-3 border-t border-slate-100 dark:border-slate-800">
                                    <CheckboxGroup options={["Thousands of users", "Multi-tenant"]} name="scaleSize" />
                                </div>
                            </Section>

                            {/* 5. Performance */}
                            <Section title="Performance" number={16} className="h-full">
                                <CheckboxGroup options={["Standard", "High", "Critical (24/7)"]} name="performance" type="radio" />
                                <div className="pt-3 mt-3 border-t border-slate-100 dark:border-slate-800">
                                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">Optimize For</label>
                                    <CheckboxGroup options={["Loading Speed", "Core Web Vitals", "SEO"]} name="optimization" />
                                </div>
                            </Section>

                            {/* 6. Legal */}
                            <Section title="Legal & Compliance" number={17} className="h-full">
                                <CheckboxGroup options={["Privacy Policy", "Terms", "Cookie Consent", "Sensitive Data"]} name="legal" />
                                <div className="mt-3">
                                    <FormInput label="Target Region" placeholder="GDPR / Local" />
                                </div>
                                <div className="pt-3 mt-3 border-t border-slate-100 dark:border-slate-800">
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Full Source Code Ownership?</label>
                                    <CheckboxGroup options={["Yes (Transfer IP)", "No (License Only)"]} name="sourceOwnership" type="radio" />
                                </div>
                            </Section>

                            {/* 7. Scope Control */}
                            <Section title="Scope Control" number={18} className="h-full">
                                <label className="block text-sm font-medium mb-2">Revisions</label>
                                <CheckboxGroup options={["1 Round", "2 Rounds", "Unlimited ($)"]} name="revisions" type="radio" />
                            </Section>

                            {/* 8. Dependencies */}
                            <Section title="Dependencies" number={19} className="h-full">
                                <CheckboxGroup options={["Payment Gateways", "SMS/Email API", "Maps", "External Tools"]} name="dependencies" />
                            </Section>

                            {/* 9. Post-Launch */}
                            <Section title="Post-Launch" number={20} className="h-full">
                                <label className="block text-sm font-medium mb-2">Warranty</label>
                                <CheckboxGroup options={["30 Days", "60 Days", "90 Days"]} name="warranty" type="radio" />
                                <div className="pt-3 mt-3 border-t border-slate-100 dark:border-slate-800">
                                    <CheckboxGroup options={["Bug Fixes", "Updates", "Backups"]} name="postLaunchIncluded" />
                                </div>
                            </Section>
                        </div>
                    </div>

                    {/* SUBMIT BUTTON */}
                    <div className="flex justify-center pt-8">
                        <button
                            type="submit"
                            disabled={loading}
                            className="flex items-center gap-2 px-8 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl w-full md:w-auto justify-center border border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                            style={{ backgroundColor: '#181818', color: '#ffffff' }}
                        >
                            {loading ? (
                                <>
                                    <Globe className="w-4 h-4 animate-spin" />
                                    Generating Proposal...
                                </>
                            ) : (
                                <>
                                    Get Your Proposition
                                    <ArrowRight className="w-4 h-4" />
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>

            {/* Loading Modal / Overlay */}
            {loading && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
                    <div className="bg-white dark:bg-slate-900 rounded-xl shadow-2xl w-full max-w-md p-8 text-center border border-slate-200 dark:border-slate-800 space-y-6">
                        <div className="relative w-20 h-20 mx-auto">
                            <div className="absolute inset-0 border-4 border-slate-100 dark:border-slate-800 rounded-full"></div>
                            <div className="absolute inset-0 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
                            <Globe className="absolute inset-0 m-auto w-8 h-8 text-blue-600 animate-pulse" />
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                                Analyzing Your Requirements...
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400">
                                Our AI Consultants are preparing a detailed, custom proposal for you.
                            </p>
                        </div>

                        <div className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-4 py-3 rounded-lg text-sm font-medium animate-pulse">
                            ⚠️ Please wait. This process takes 2 to 4 minutes.
                            <br />
                            <span className="text-xs opacity-80 mt-1 block">Do not close this window.</span>
                        </div>
                    </div>
                </div>
            )}

            {/* Proposal Modal */}
            {proposal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
                    <div className="bg-white dark:bg-slate-900 rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col border border-slate-200 dark:border-slate-800">
                        <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 rounded-t-xl">
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                <Check className="w-5 h-5 text-green-500" />
                                Your Project Proposal
                            </h2>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => {
                                        const printContent = document.getElementById('print-area');
                                        const win = window.open('', '', 'width=800,height=600');
                                        if (win && printContent) {
                                            win.document.write(`
                                                <html>
                                                    <head>
                                                        <title>Project Proposal - DCSecurite</title>
                                                        <style>
                                                            body { font-family: sans-serif; padding: 40px; line-height: 1.6; color: #333; }
                                                            h1, h2, h3 { color: #1a2332; }
                                                            table { width: 100%; border-collapse: collapse; margin-top: 20px; }
                                                            th, td { border: 1px solid #ddd; padding: 12px; text-align: left; }
                                                            th { background-color: #f5f5f5; }
                                                            .header { text-align: center; margin-bottom: 40px; border-bottom: 2px solid #eee; padding-bottom: 20px; }
                                                        </style>
                                                    </head>
                                                    <body>
                                                        <div class="header">
                                                            <h1>Web Development Proposal</h1>
                                                            <p>Generated by DCSecurite AI</p>
                                                        </div>
                                                        ${printContent.innerHTML}
                                                    </body>
                                                </html>
                                            `);
                                            win.document.close();
                                            win.focus();
                                            win.print();
                                            win.close();
                                        }
                                    }}
                                    className="px-4 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-2 shadow-md hover:shadow-lg border border-transparent"
                                    style={{ backgroundColor: '#181818', color: '#ffffff' }}
                                >
                                    <Upload className="w-4 h-4" /> {/* Using Upload icon as Print/Export placeholder if Print icon missing */}
                                    Print / PDF
                                </button>
                                <button
                                    onClick={() => setProposal(null)}
                                    className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-full transition-colors text-slate-500"
                                >
                                    <Check className="w-5 h-5" style={{ transform: 'rotate(45deg)' }} /> {/* Check as Close icon mimic if X missing, or just import X */}
                                </button>
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar bg-white" id="print-area">
                            {/* Render HTML Content safely */}
                            <div
                                className="prose prose-slate max-w-none dark:prose-invert prose-headings:text-slate-900 prose-p:text-slate-700 prose-li:text-slate-700"
                                dangerouslySetInnerHTML={{ __html: proposal }}
                            />
                        </div>

                        <div className="p-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 rounded-b-xl flex justify-end gap-3">
                            <button
                                onClick={() => setProposal(null)}
                                className="px-6 py-2.5 bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white rounded-lg font-medium transition-colors"
                            >
                                Try Options
                            </button>
                            <button
                                className="px-6 py-2.5 font-bold rounded-lg transition-all shadow-md shadow-slate-200/50 dark:shadow-none hover:shadow-lg whitespace-nowrap border border-transparent"
                                style={{ backgroundColor: '#181818', color: '#ffffff' }}
                                onClick={() => {
                                    // Extract price from proposal content string
                                    const priceMatch = proposal?.match(/FINAL TOTAL[\s\S]*?(\$[\d,]+\.?\d*)/i) ||
                                        proposal?.match(/TOTAL[\s\S]*?(\$[\d,]+\.?\d*)/i);
                                    let extractedPrice = priceMatch ? priceMatch[1] : "$TBD";
                                    setContractPrice(extractedPrice);
                                    setManagerName(formValues.fullName || "");
                                    setCompanyName(formValues.fullName || "");
                                    setClientSignature(null); // Reset signature
                                    setProposal(null);
                                    setIsContractOpen(true);
                                }}
                            >
                                Next Step
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Contract Modal */}
            {isContractOpen && (
                <div className="fixed inset-0 z-[50] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
                    <div className="bg-white dark:bg-slate-900 rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col border border-slate-200 dark:border-slate-800">
                        {/* Contract Header */}
                        <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 rounded-t-xl">
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                <FileText className="w-5 h-5 text-blue-500" />
                                Review Contract
                            </h2>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => {
                                        const printWindow = window.open('', '_blank');
                                        if (!printWindow) {
                                            alert("Please allow popups to print");
                                            return;
                                        }

                                        const contractContent = `
                                            <html>
                                                <head>
                                                    <title>Customer Service Agreement</title>
                                                    <script src="https://cdn.tailwindcss.com"></script>
                                                    <style>
                                                        body { font-family: 'Inter', sans-serif; -webkit-print-color-adjust: exact; padding: 40px; }
                                                        @media print {
                                                            @page { margin: 2cm; }
                                                            body { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
                                                        }
                                                        .input-print { border-bottom: 1px solid #cbd5e1; padding: 0 4px; display: inline-block; min-width: 200px; }
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
                                                                <p><strong>Manager:</strong> <span class="input-print">${managerName}</span></p>
                                                                <p><strong>Tax ID:</strong> <span class="input-print">${taxId}</span></p>
                                                                <p><strong>Address:</strong> <span class="input-print">${clientAddress}</span></p>
                                                            </div>
                                                            <p><strong>Email:</strong> ${formValues.email || "Client Email"}</p>
                                                        </div>
                                                    </div>

                                                    <p class="mb-4">Collectively, the "Parties".</p>

                                                    <h3 class="text-lg font-bold mt-6 mb-2">1. Scope of Services</h3>
                                                    <p>The Service Provider agrees to provide the digital services described in the attached Project Proposal/Scope of Work Statement (SLL) as Appendix A, including but not limited to:</p>
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
                                                                <div class="h-16 border-b-2 border-slate-300 flex items-end">
                                                                    <img src="/signature-taha.png" alt="Signature" class="h-full object-contain" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p class="font-bold mb-4">Client Representative</p>
                                                            <div class="space-y-3">
                                                                <p><strong>Name:</strong> ${managerName}</p>
                                                                <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
                                                                <div class="h-16 border-b-2 border-slate-300 flex items-end justify-center">
                                                                    ${clientSignature ? `<img src="${clientSignature}" alt="Client Signature" class="h-full object-contain" />` : '<span class="text-slate-400 text-sm">x __________________________</span>'}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </body>
                                            </html>
                                        `;

                                        printWindow.document.write(contractContent);
                                        printWindow.document.close();
                                        printWindow.focus();
                                        setTimeout(() => {
                                            printWindow.print();
                                        }, 500);
                                    }}
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
                                                    onChange={(e) => setCompanyName(e.target.value)}
                                                />
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm font-semibold w-24">Manager:</span>
                                                <Input
                                                    className="h-7 text-sm bg-white border-blue-200"
                                                    value={managerName}
                                                    onChange={(e) => setManagerName(e.target.value)}
                                                />
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm font-semibold w-24">Tax ID:</span>
                                                <Input
                                                    className="h-7 text-sm bg-white border-blue-200"
                                                    placeholder="Tax Identification Number"
                                                    value={taxId}
                                                    onChange={(e) => setTaxId(e.target.value)}
                                                />
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm font-semibold w-24">Address:</span>
                                                <Input
                                                    className="h-7 text-sm bg-white border-blue-200"
                                                    placeholder="Address"
                                                    value={clientAddress}
                                                    onChange={(e) => setClientAddress(e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        <p><strong>Email:</strong> {formValues.email || "Client Email"}</p>
                                    </div>
                                </div>

                                <p className="mb-4">Collectively, the "Parties".</p>

                                <h3 className="text-lg font-bold mt-6 mb-2">1. Scope of Services</h3>
                                <p>The Service Provider agrees to provide the digital services described in the attached Project Proposal/Scope of Work Statement (SLL) as Appendix A, including but not limited to:</p>
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
                                                onChange={(e) => setManagerName(e.target.value)}
                                                className="border-blue-300 bg-blue-50"
                                            />
                                            <Input placeholder="Title / Position" className="border-blue-300 bg-blue-50" />
                                            <Input defaultValue={new Date().toLocaleDateString()} className="border-blue-300 bg-blue-50" />
                                            <div
                                                className="h-12 border-b-2 border-slate-300 flex items-end justify-center cursor-pointer hover:bg-slate-50 transition-colors"
                                                onClick={() => setIsSignatureModalOpen(true)}
                                            >
                                                {clientSignature ? (
                                                    <img src={clientSignature} alt="Client Signature" className="h-full object-contain" />
                                                ) : (
                                                    <span className="text-slate-400 text-sm">x __________________________ (Click to Sign)</span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 flex justify-end gap-4 print:hidden">
                                    <Button variant="outline" onClick={() => setIsContractOpen(false)}>Cancel</Button>
                                    <Button
                                        className="bg-[#181818] text-white hover:bg-slate-800"
                                        onClick={async () => {
                                            if (!proposalId || !clientSignature) {
                                                alert("Please ensure the proposal is generated and you have signed the contract.");
                                                return;
                                            }
                                            try {
                                                const response = await fetch(`${API_BASE_URL}/api/proposals/${proposalId}/sign`, {
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

                                                if (response.ok) {
                                                    setIsContractOpen(false);
                                                    alert("Contract signed and sent successfully!");
                                                } else {
                                                    alert("Failed to send contract.");
                                                }
                                            } catch (e) {
                                                console.error(e);
                                                alert("Error sending contract.");
                                            }
                                        }}
                                    >
                                        Approved and Send
                                    </Button>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            )}

            <SignatureModal
                isOpen={isSignatureModalOpen}
                onClose={() => setIsSignatureModalOpen(false)}
                onSave={(signature) => setClientSignature(signature)}
            />
        </section>
    );
}
