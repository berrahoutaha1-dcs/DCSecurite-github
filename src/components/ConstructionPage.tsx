import React, { useState } from "react";
import {
  Building2,
  HardHat,
  Calendar,
  ClipboardList,
  DollarSign,
  Users,
  Truck,
  FileText,
  Shield,
  Clock,
  TrendingUp,
  AlertTriangle,
  Home,
  CheckCircle2,
  Hammer,
  Ruler,
  Package,
  MapPin,
  Settings,
} from "lucide-react";
import { useTheme } from "./ThemeContext";
import { Footer } from "./Footer";
const bannerImage = "/assets/39328803ae27a40c03587df3238877f0f3e05c57.png";

interface ConstructionPageProps {
  onPrivacyClick?: () => void;
  onTermsClick?: () => void;
  onCookieClick?: () => void;
  onContactClick?: () => void;
  onHomeClick?: () => void;
}

export default function ConstructionPage({
  onPrivacyClick,
  onTermsClick,
  onCookieClick,
  onContactClick,
  onHomeClick,
}: ConstructionPageProps) {
  const { theme } = useTheme();

  const [formData, setFormData] = useState({
    // Company Information
    companyName: "",
    industry: "",
    companySize: "",
    country: "",
    city: "",
    contactPerson: "",
    email: "",
    phone: "",
    website: "",

    // Project Information
    projectTypes: [] as string[],
    avgProjectValue: "",
    simultaneousProjects: "",
    subcontractors: "",

    // Construction Operations
    projectPlanning: false,
    budgetManagement: false,
    resourceScheduling: false,
    materialTracking: false,
    equipmentManagement: false,
    laborManagement: false,
    qualityControl: false,
    safetyCompliance: false,
    documentControl: false,
    changeOrders: false,

    // Specific Requirements
    bidManagement: false,
    estimating: false,
    timeTracking: false,
    dailyReports: false,
    progressTracking: false,
    inspections: false,
    rfiManagement: false,
    submittals: false,
    procurement: false,
    costControl: false,

    // Integration Needs
    accountingSoftware: "",
    cadSoftware: "",
    projectManagementTools: "",
    existingSystems: "",

    // Users & Access
    projectManagers: "",
    siteManagers: "",
    estimators: "",
    fieldWorkers: "",
    adminStaff: "",

    // Compliance & Reporting
    safetyStandards: [] as string[],
    reportingNeeds: [] as string[],
    certifications: "",

    // Budget & Timeline
    budget: "",
    timeline: "",
    implementationPriority: "",

    // Additional Information
    currentChallenges: "",
    specificRequirements: "",
    additionalNotes: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleMultiSelect = (name: string, value: string) => {
    setFormData((prev) => {
      const currentArray = prev[name as keyof typeof prev] as string[];
      const newArray = currentArray.includes(value)
        ? currentArray.filter((item) => item !== value)
        : [...currentArray, value];

      return {
        ...prev,
        [name]: newArray,
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Construction Management Form Data:", formData);
    alert(
      "Thank you! Your Construction Management requirements have been submitted. Our team will contact you soon."
    );
  };

  const constructionModules = [
    {
      icon: Calendar,
      title: "Project Planning & Scheduling",
      description:
        "Advanced project scheduling with Gantt charts, critical path analysis, and milestone tracking",
      color: "from-amber-600 to-yellow-600",
    },
    {
      icon: DollarSign,
      title: "Budget & Cost Management",
      description:
        "Complete financial control with budgeting, cost tracking, forecasting, and variance analysis",
      color: "from-green-600 to-emerald-600",
    },
    {
      icon: ClipboardList,
      title: "Bid & Estimating",
      description:
        "Comprehensive bid management and accurate cost estimation tools for winning projects",
      color: "from-blue-600 to-cyan-600",
    },
    {
      icon: Users,
      title: "Resource Management",
      description: "Optimize workforce allocation, equipment usage, and subcontractor coordination",
      color: "from-purple-600 to-indigo-600",
    },
    {
      icon: Package,
      title: "Material & Procurement",
      description: "Streamline material ordering, inventory tracking, and supplier management",
      color: "from-orange-600 to-red-600",
    },
    {
      icon: Shield,
      title: "Safety & Compliance",
      description:
        "Ensure job site safety with incident tracking, inspections, and regulatory compliance",
      color: "from-red-600 to-pink-600",
    },
    {
      icon: FileText,
      title: "Document Control",
      description: "Centralized management of plans, specs, RFIs, submittals, and change orders",
      color: "from-slate-600 to-gray-600",
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking & Reporting",
      description:
        "Real-time project progress monitoring with automated daily reports and dashboards",
      color: "from-teal-600 to-cyan-600",
    },
    {
      icon: CheckCircle2,
      title: "Quality Control",
      description:
        "Maintain high standards with quality inspections, punch lists, and defect tracking",
      color: "from-lime-600 to-green-600",
    },
  ];

  return (
    <div className={`min-h-screen ${theme === "dark" ? "bg-slate-900" : "bg-slate-50"}`}>
      {/* Home Button */}
      <div className="absolute top-4 left-4 z-50">
        <button
          onClick={onHomeClick}
          className="flex items-center gap-2 text-slate-900 dark:text-white hover:text-amber-600 dark:hover:text-amber-500 transition-colors cursor-pointer"
        >
          <Home className="w-4 h-4" />
          <span>Home</span>
        </button>
      </div>

      {/* Hero Banner Section with Image */}
      <section className="relative w-full overflow-hidden">
        {/* Banner Image - Full Width, Auto Height */}
        <div className="relative w-full">
          <img src={bannerImage} alt="Construction Management" className="w-full h-auto block" />
        </div>
      </section>

      {/* Modules Section */}
      <section className={`py-16 ${theme === "dark" ? "bg-slate-800" : "bg-white"}`}>
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-amber-900 dark:text-amber-100">
              Comprehensive Construction{" "}
              <span className="bg-gradient-to-r from-amber-600 to-yellow-600 text-transparent bg-clip-text">
                Modules
              </span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-3xl mx-auto">
              Our Construction Management solution covers every aspect of construction operations,
              from pre-construction to project closeout, delivering efficiency and control.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {constructionModules.map((module, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl ${theme === "dark" ? "bg-slate-700" : "bg-slate-50"
                  } hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border ${theme === "dark" ? "border-slate-600" : "border-slate-200"
                  }`}
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${module.color} rounded-xl flex items-center justify-center mb-4`}
                >
                  <module.icon className="w-6 h-6 text-white" />
                </div>
                <h3
                  className={`text-xl mb-3 ${theme === "dark" ? "text-white" : "text-slate-900"}`}
                >
                  {module.title}
                </h3>
                <p className={`${theme === "dark" ? "text-slate-300" : "text-slate-600"}`}>
                  {module.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment Form Section */}
      <section className={`py-16 ${theme === "dark" ? "bg-slate-900" : "bg-slate-100"}`}>
        <div className="container mx-auto max-w-6xl px-4">
          {/* Header */}
          <div className="text-center mb-12 animate-fadeIn">
            <h2 className="text-4xl mb-4 text-amber-900 dark:text-amber-100">
              Construction Management Requirements & Assessment
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-4xl mx-auto">
              Fill in all details to help us understand your construction operations, project types,
              and management needs, so we can design a solution tailored to your business.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className={`p-8 rounded-3xl shadow-2xl ${theme === "dark" ? "bg-slate-800" : "bg-white"}`}
          >
            {/* Company Information */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-amber-600 to-yellow-600 rounded-xl text-white">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl text-amber-900 dark:text-amber-100">Company Information</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-400 transition-all text-slate-900 dark:text-white"
                    placeholder="Your construction company name"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                    Industry Sector *
                  </label>
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-400 transition-all text-slate-900 dark:text-white"
                  >
                    <option value="">Select Industry</option>
                    <option value="commercial">Commercial Construction</option>
                    <option value="residential">Residential Construction</option>
                    <option value="industrial">Industrial Construction</option>
                    <option value="infrastructure">Infrastructure & Civil</option>
                    <option value="heavy">Heavy Construction</option>
                    <option value="specialty">Specialty Contracting</option>
                    <option value="renovation">Renovation & Remodeling</option>
                    <option value="general">General Contracting</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                    Company Size *
                  </label>
                  <select
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-400 transition-all text-slate-900 dark:text-white"
                  >
                    <option value="">Select Size</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-500">201-500 employees</option>
                    <option value="501-1000">501-1000 employees</option>
                    <option value="1000+">1000+ employees</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                    Country *
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-400 transition-all text-slate-900 dark:text-white"
                    placeholder="Your country"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-400 transition-all text-slate-900 dark:text-white"
                    placeholder="Your city"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                    Contact Person *
                  </label>
                  <input
                    type="text"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-400 transition-all text-slate-900 dark:text-white"
                    placeholder="Full name"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-400 transition-all text-slate-900 dark:text-white"
                    placeholder="email@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-400 transition-all text-slate-900 dark:text-white"
                    placeholder="+1234567890"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                    Website
                  </label>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-400 transition-all text-slate-900 dark:text-white"
                    placeholder="https://www.company.com"
                  />
                </div>
              </div>
            </div>

            {/* Project Information */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-amber-600 to-yellow-600 rounded-xl text-white">
                  <HardHat className="w-6 h-6" />
                </div>
                <h3 className="text-2xl text-amber-900 dark:text-amber-100">Project Information</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm mb-3 text-slate-700 dark:text-slate-300">
                    Project Types (Select all that apply)
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      "New Construction",
                      "Renovation",
                      "Remodeling",
                      "Tenant Improvement",
                      "Infrastructure",
                      "Heavy Civil",
                      "Multi-Family",
                      "Single-Family",
                    ].map((type) => (
                      <label key={type} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.projectTypes.includes(type)}
                          onChange={() => handleMultiSelect("projectTypes", type)}
                          className="w-4 h-4 text-amber-600 focus:ring-amber-500 rounded"
                        />
                        <span className="text-sm text-slate-700 dark:text-slate-300">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                    Average Project Value
                  </label>
                  <select
                    name="avgProjectValue"
                    value={formData.avgProjectValue}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-400 transition-all text-slate-900 dark:text-white"
                  >
                    <option value="">Select Range</option>
                    <option value="under-100k">&lt; $100K</option>
                    <option value="100k-500k">$100K - $500K</option>
                    <option value="500k-1m">$500K - $1M</option>
                    <option value="1m-5m">$1M - $5M</option>
                    <option value="5m-10m">$5M - $10M</option>
                    <option value="10m-50m">$10M - $50M</option>
                    <option value="over-50m">&gt; $50M</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                    Simultaneous Projects
                  </label>
                  <select
                    name="simultaneousProjects"
                    value={formData.simultaneousProjects}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-400 transition-all text-slate-900 dark:text-white"
                  >
                    <option value="">Select Number</option>
                    <option value="1-5">1-5 projects</option>
                    <option value="6-10">6-10 projects</option>
                    <option value="11-25">11-25 projects</option>
                    <option value="26-50">26-50 projects</option>
                    <option value="50+">50+ projects</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                    Number of Subcontractors
                  </label>
                  <select
                    name="subcontractors"
                    value={formData.subcontractors}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-400 transition-all text-slate-900 dark:text-white"
                  >
                    <option value="">Select Number</option>
                    <option value="1-10">1-10</option>
                    <option value="11-25">11-25</option>
                    <option value="26-50">26-50</option>
                    <option value="51-100">51-100</option>
                    <option value="100+">100+</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Construction Operations */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-amber-600 to-yellow-600 rounded-xl text-white">
                  <Settings className="w-6 h-6" />
                </div>
                <h3 className="text-2xl text-amber-900 dark:text-amber-100">Core Operations</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: "projectPlanning", label: "Project Planning & Scheduling" },
                  { name: "budgetManagement", label: "Budget Management" },
                  { name: "resourceScheduling", label: "Resource Scheduling" },
                  { name: "materialTracking", label: "Material Tracking" },
                  { name: "equipmentManagement", label: "Equipment Management" },
                  { name: "laborManagement", label: "Labor Management" },
                  { name: "qualityControl", label: "Quality Control" },
                  { name: "safetyCompliance", label: "Safety & Compliance" },
                  { name: "documentControl", label: "Document Control" },
                  { name: "changeOrders", label: "Change Order Management" },
                ].map((item) => (
                  <label
                    key={item.name}
                    className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${formData[item.name as keyof typeof formData]
                      ? "border-amber-500 bg-amber-50 dark:bg-amber-900/20"
                      : "border-slate-200 dark:border-slate-600 hover:border-amber-300 dark:hover:border-amber-700"
                      }`}
                  >
                    <input
                      type="checkbox"
                      name={item.name}
                      checked={formData[item.name as keyof typeof formData] as boolean}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-amber-600 focus:ring-amber-500 rounded"
                    />
                    <span className="text-sm text-slate-700 dark:text-slate-300">{item.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Specific Requirements */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-amber-600 to-yellow-600 rounded-xl text-white">
                  <ClipboardList className="w-6 h-6" />
                </div>
                <h3 className="text-2xl text-amber-900 dark:text-amber-100">
                  Specific Requirements
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: "bidManagement", label: "Bid Management" },
                  { name: "estimating", label: "Cost Estimating" },
                  { name: "timeTracking", label: "Time Tracking" },
                  { name: "dailyReports", label: "Daily Reports" },
                  { name: "progressTracking", label: "Progress Tracking" },
                  { name: "inspections", label: "Inspections & Checklists" },
                  { name: "rfiManagement", label: "RFI Management" },
                  { name: "submittals", label: "Submittals & Approvals" },
                  { name: "procurement", label: "Procurement" },
                  { name: "costControl", label: "Cost Control & Forecasting" },
                ].map((item) => (
                  <label
                    key={item.name}
                    className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${formData[item.name as keyof typeof formData]
                      ? "border-amber-500 bg-amber-50 dark:bg-amber-900/20"
                      : "border-slate-200 dark:border-slate-600 hover:border-amber-300 dark:hover:border-amber-700"
                      }`}
                  >
                    <input
                      type="checkbox"
                      name={item.name}
                      checked={formData[item.name as keyof typeof formData] as boolean}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-amber-600 focus:ring-amber-500 rounded"
                    />
                    <span className="text-sm text-slate-700 dark:text-slate-300">{item.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Integration Needs */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-amber-600 to-yellow-600 rounded-xl text-white">
                  <Truck className="w-6 h-6" />
                </div>
                <h3 className="text-2xl text-amber-900 dark:text-amber-100">Integration Needs</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                    Accounting Software
                  </label>
                  <select
                    name="accountingSoftware"
                    value={formData.accountingSoftware}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-400 transition-all text-slate-900 dark:text-white"
                  >
                    <option value="">Select Software</option>
                    <option value="quickbooks">QuickBooks</option>
                    <option value="sage">Sage</option>
                    <option value="viewpoint">Viewpoint</option>
                    <option value="foundation">Foundation</option>
                    <option value="other">Other</option>
                    <option value="none">None</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                    CAD/Design Software
                  </label>
                  <select
                    name="cadSoftware"
                    value={formData.cadSoftware}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-400 transition-all text-slate-900 dark:text-white"
                  >
                    <option value="">Select Software</option>
                    <option value="autocad">AutoCAD</option>
                    <option value="revit">Revit</option>
                    <option value="bluebeam">Bluebeam</option>
                    <option value="procore">Procore</option>
                    <option value="other">Other</option>
                    <option value="none">None</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                    Project Management Tools
                  </label>
                  <input
                    type="text"
                    name="projectManagementTools"
                    value={formData.projectManagementTools}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-400 transition-all text-slate-900 dark:text-white"
                    placeholder="e.g., MS Project, Primavera"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                    Other Existing Systems
                  </label>
                  <input
                    type="text"
                    name="existingSystems"
                    value={formData.existingSystems}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-400 transition-all text-slate-900 dark:text-white"
                    placeholder="List any other systems"
                  />
                </div>
              </div>
            </div>

            {/* Users & Access */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-amber-600 to-yellow-600 rounded-xl text-white">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-2xl text-amber-900 dark:text-amber-100">Users & Access</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                    Project Managers
                  </label>
                  <input
                    type="number"
                    name="projectManagers"
                    value={formData.projectManagers}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-400 transition-all text-slate-900 dark:text-white"
                    placeholder="Number of users"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                    Site Managers
                  </label>
                  <input
                    type="number"
                    name="siteManagers"
                    value={formData.siteManagers}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-400 transition-all text-slate-900 dark:text-white"
                    placeholder="Number of users"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                    Estimators
                  </label>
                  <input
                    type="number"
                    name="estimators"
                    value={formData.estimators}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-400 transition-all text-slate-900 dark:text-white"
                    placeholder="Number of users"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                    Field Workers
                  </label>
                  <input
                    type="number"
                    name="fieldWorkers"
                    value={formData.fieldWorkers}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-400 transition-all text-slate-900 dark:text-white"
                    placeholder="Number of users"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                    Administrative Staff
                  </label>
                  <input
                    type="number"
                    name="adminStaff"
                    value={formData.adminStaff}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-400 transition-all text-slate-900 dark:text-white"
                    placeholder="Number of users"
                  />
                </div>
              </div>
            </div>

            {/* Compliance & Reporting */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-amber-600 to-yellow-600 rounded-xl text-white">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-2xl text-amber-900 dark:text-amber-100">
                  Compliance & Reporting
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm mb-3 text-slate-700 dark:text-slate-300">
                    Safety Standards (Select all that apply)
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {["OSHA", "ISO 45001", "ISO 9001", "LEED", "Local Regulations", "Other"].map(
                      (standard) => (
                        <label key={standard} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.safetyStandards.includes(standard)}
                            onChange={() => handleMultiSelect("safetyStandards", standard)}
                            className="w-4 h-4 text-amber-600 focus:ring-amber-500 rounded"
                          />
                          <span className="text-sm text-slate-700 dark:text-slate-300">
                            {standard}
                          </span>
                        </label>
                      )
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-3 text-slate-700 dark:text-slate-300">
                    Reporting Needs (Select all that apply)
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {[
                      "Progress Reports",
                      "Financial Reports",
                      "Safety Reports",
                      "Quality Reports",
                      "Executive Dashboards",
                      "Custom Reports",
                    ].map((report) => (
                      <label key={report} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.reportingNeeds.includes(report)}
                          onChange={() => handleMultiSelect("reportingNeeds", report)}
                          className="w-4 h-4 text-amber-600 focus:ring-amber-500 rounded"
                        />
                        <span className="text-sm text-slate-700 dark:text-slate-300">{report}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                    Required Certifications
                  </label>
                  <input
                    type="text"
                    name="certifications"
                    value={formData.certifications}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-400 transition-all text-slate-900 dark:text-white"
                    placeholder="List any required certifications"
                  />
                </div>
              </div>
            </div>

            {/* Budget & Timeline */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-amber-600 to-yellow-600 rounded-xl text-white">
                  <DollarSign className="w-6 h-6" />
                </div>
                <h3 className="text-2xl text-amber-900 dark:text-amber-100">Budget & Timeline</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                    Implementation Budget
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-400 transition-all text-slate-900 dark:text-white"
                  >
                    <option value="">Select Range</option>
                    <option value="Less than $10,000">&lt; $10,000</option>
                    <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                    <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                    <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                    <option value="$100,000 - $250,000">$100,000 - $250,000</option>
                    <option value="More than $250,000">&gt; $250,000</option>
                    <option value="To be discussed">To be discussed</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                    Implementation Timeline
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-400 transition-all text-slate-900 dark:text-white"
                  >
                    <option value="">Select Timeline</option>
                    <option value="Immediate">&lt; 1 month</option>
                    <option value="1-3 months">1-3 months</option>
                    <option value="3-6 months">3-6 months</option>
                    <option value="6-12 months">6-12 months</option>
                    <option value="12+ months">&gt; 12 months</option>
                    <option value="Flexible">Flexible</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                    Implementation Priority
                  </label>
                  <select
                    name="implementationPriority"
                    value={formData.implementationPriority}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-400 transition-all text-slate-900 dark:text-white"
                  >
                    <option value="">Select Priority</option>
                    <option value="Critical - Immediate need">Critical - Immediate need</option>
                    <option value="High - Within 3 months">High - Within 3 months</option>
                    <option value="Medium - Within 6 months">Medium - Within 6 months</option>
                    <option value="Low - Planning phase">Low - Planning phase</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-amber-600 to-yellow-600 rounded-xl text-white">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-2xl text-amber-900 dark:text-amber-100">
                  Additional Information
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                    Current Challenges
                  </label>
                  <textarea
                    name="currentChallenges"
                    value={formData.currentChallenges}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-400 transition-all text-slate-900 dark:text-white resize-none"
                    placeholder="Describe your current challenges in construction management..."
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                    Specific Requirements
                  </label>
                  <textarea
                    name="specificRequirements"
                    value={formData.specificRequirements}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-400 transition-all text-slate-900 dark:text-white resize-none"
                    placeholder="List any specific requirements or features you need..."
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                    Additional Notes
                  </label>
                  <textarea
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-400 transition-all text-slate-900 dark:text-white resize-none"
                    placeholder="Any other information you'd like to share..."
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  type="button"
                  onClick={onHomeClick}
                  className="px-12 py-4 bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                >
                  <Home className="w-5 h-5" />
                  Home
                </button>
                <button
                  type="submit"
                  className="px-12 py-4 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Submit Construction Management Assessment
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
