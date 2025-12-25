import React, { useState } from "react";
import {
  Building2,
  Users,
  TrendingUp,
  Target,
  MessageSquare,
  Phone,
  Mail,
  BarChart3,
  Shield,
  DollarSign,
  Clock,
  FileText,
  Home,
  Workflow,
  Database,
  Headphones,
  Link2,
  PieChart,
  CheckCircle2,
} from "lucide-react";
import { useTheme } from "./ThemeContext";
import { Footer } from "./Footer";
const crmBanner = "/assets/326dc5b92dac3cddc56fee0089dbc99589d79c48.png";
const crmDashboard = "/assets/544e605805d3202ae8c591ae94ee3605d9341ce1.png";

interface CRMPageProps {
  onPrivacyClick?: () => void;
  onTermsClick?: () => void;
  onCookieClick?: () => void;
  onContactClick?: () => void;
  onHomeClick?: () => void;
}

const CRMPage: React.FC<CRMPageProps> = ({
  onPrivacyClick,
  onTermsClick,
  onCookieClick,
  onContactClick,
  onHomeClick,
}) => {
  const { theme } = useTheme();

  const [formData, setFormData] = useState({
    // Company Information
    companyName: "",
    industrySector: "",
    otherIndustry: "",
    numberOfEmployees: "",
    numberOfSalesStaff: "",

    // Customer & Lead Management
    monthlyLeads: "",
    leadChannels: [] as string[],
    currentTracking: "",
    otherTracking: "",
    qualificationCriteria: "",

    // Sales Pipeline
    hasPipeline: "",
    pipelineStages: [""],
    averageDealSize: "",
    currency: "USD",
    salesCycleDuration: "",

    // Customer Database
    numberOfClients: "",
    customerInfo: [] as string[],
    needSegmentation: "",

    // Communication & Tracking
    communicationChannels: [] as string[],
    autoStoreLogs: "",
    emailAutomation: "",
    remindersAutomation: "",

    // Support & Ticketing
    needTicketing: "",
    supportAgents: "",
    supportChannels: [] as string[],

    // Integrations
    integrations: [] as string[],

    // Analytics & Reporting
    reportsNeeded: [] as string[],
    roleBasedDashboards: "",

    // Security & Data Privacy
    accessLevels: [] as string[],
    dataProtectionLevel: "",

    // Budget & Timeline
    monthlyBudget: "",
    implementationTimeline: "",

    // Additional Notes
    additionalNotes: "",
  });

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (field: string, value: string) => {
    const currentValues = formData[field as keyof typeof formData] as string[];
    if (currentValues.includes(value)) {
      handleInputChange(
        field,
        currentValues.filter((v) => v !== value)
      );
    } else {
      handleInputChange(field, [...currentValues, value]);
    }
  };

  const addPipelineStage = () => {
    handleInputChange("pipelineStages", [...formData.pipelineStages, ""]);
  };

  const updatePipelineStage = (index: number, value: string) => {
    const newStages = [...formData.pipelineStages];
    newStages[index] = value;
    handleInputChange("pipelineStages", newStages);
  };

  const removePipelineStage = (index: number) => {
    if (formData.pipelineStages.length > 1) {
      handleInputChange(
        "pipelineStages",
        formData.pipelineStages.filter((_, i) => i !== index)
      );
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("CRM Form Data:", formData);
    alert("Thank you! Your CRM requirements have been submitted. Our team will contact you soon.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 dark:bg-gradient-to-br dark:from-[#0A0F1F] dark:via-[#0c1420] dark:to-[#0e1822] transition-colors duration-300">
      {/* Home Button */}
      <div className="absolute top-4 left-4 z-50">
        <button
          onClick={onHomeClick}
          className="flex items-center gap-2 text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer"
        >
          <Home className="w-4 h-4" />
          <span>Home</span>
        </button>
      </div>

      {/* Hero Banner */}
      <div className="w-full">
        <img
          src={crmBanner}
          alt="Customer Relationship Management"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* CRM Dashboard Image */}
      <div className="w-full px-4 py-8">
        <img src={crmDashboard} alt="CRM Dashboard" className="w-full h-auto object-cover" />
      </div>

      {/* Form Container */}
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-4xl mb-4 text-emerald-900 dark:text-emerald-100">
            CRM Requirements & Business Needs Analysis
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-4xl mx-auto">
            Fill all details to help us understand your sales pipeline, customer lifecycle, and
            communication workflows, so we can design a CRM tailored to your operations.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* 1. Company Information */}
          <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl text-white">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl text-emerald-900 dark:text-emerald-100">
                Company Information
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Company Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.companyName}
                  onChange={(e) => handleInputChange("companyName", e.target.value)}
                  className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition-all text-slate-900 dark:text-white"
                  placeholder="Enter your company name"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Industry / Activity Sector *
                </label>
                <select
                  required
                  value={formData.industrySector}
                  onChange={(e) => handleInputChange("industrySector", e.target.value)}
                  className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition-all text-slate-900 dark:text-white"
                >
                  <option value="">Select Industry</option>
                  <option value="Technology">Technology</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Finance">Finance</option>
                  <option value="Retail">Retail</option>
                  <option value="Manufacturing">Manufacturing</option>
                  <option value="Education">Education</option>
                  <option value="Real Estate">Real Estate</option>
                  <option value="Telecommunications">Telecommunications</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {formData.industrySector === "Other" && (
                <div>
                  <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                    Specify Other Industry *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.otherIndustry}
                    onChange={(e) => handleInputChange("otherIndustry", e.target.value)}
                    className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition-all text-slate-900 dark:text-white"
                    placeholder="Please specify"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Number of Employees *
                </label>
                <input
                  type="number"
                  required
                  min="1"
                  value={formData.numberOfEmployees}
                  onChange={(e) => handleInputChange("numberOfEmployees", e.target.value)}
                  className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition-all text-slate-900 dark:text-white"
                  placeholder="Total employees"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Number of Sales Staff *
                </label>
                <input
                  type="number"
                  required
                  min="0"
                  value={formData.numberOfSalesStaff}
                  onChange={(e) => handleInputChange("numberOfSalesStaff", e.target.value)}
                  className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition-all text-slate-900 dark:text-white"
                  placeholder="Sales team size"
                />
              </div>
            </div>
          </div>

          {/* 2. Customer & Lead Management */}
          <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl text-white">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl text-emerald-900 dark:text-emerald-100">
                Customer & Lead Management
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Average Monthly Leads *
                </label>
                <input
                  type="number"
                  required
                  min="0"
                  value={formData.monthlyLeads}
                  onChange={(e) => handleInputChange("monthlyLeads", e.target.value)}
                  className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition-all text-slate-900 dark:text-white"
                  placeholder="Number of leads per month"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  How Do You Currently Track Leads? *
                </label>
                <select
                  required
                  value={formData.currentTracking}
                  onChange={(e) => handleInputChange("currentTracking", e.target.value)}
                  className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition-all text-slate-900 dark:text-white"
                >
                  <option value="">Select Method</option>
                  <option value="Excel">Excel</option>
                  <option value="Notebook">Notebook</option>
                  <option value="Existing CRM">Existing CRM</option>
                  <option value="Not Tracking">Not Tracking</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {formData.currentTracking === "Other" && (
                <div>
                  <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                    Specify Other Method *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.otherTracking}
                    onChange={(e) => handleInputChange("otherTracking", e.target.value)}
                    className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition-all text-slate-900 dark:text-white"
                    placeholder="Please specify"
                  />
                </div>
              )}

              <div className="md:col-span-2">
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Lead Acquisition Channels (Select all that apply)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    "Website",
                    "Social Media",
                    "Phone",
                    "Email",
                    "Advertising",
                    "Partners",
                    "Other",
                  ].map((channel) => (
                    <label
                      key={channel}
                      className="flex items-center gap-2 cursor-pointer p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={formData.leadChannels.includes(channel)}
                        onChange={() => handleCheckboxChange("leadChannels", channel)}
                        className="w-4 h-4 text-emerald-600 focus:ring-emerald-500 rounded"
                      />
                      <span className="text-sm text-slate-700 dark:text-slate-300">{channel}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Main Lead Qualification Criteria
                </label>
                <textarea
                  value={formData.qualificationCriteria}
                  onChange={(e) => handleInputChange("qualificationCriteria", e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition-all text-slate-900 dark:text-white resize-none"
                  placeholder="Describe how you qualify leads (e.g., budget, timeline, decision-maker access...)"
                />
              </div>
            </div>
          </div>

          {/* 3. Sales Pipeline Structure */}
          <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl text-white">
                <Workflow className="w-6 h-6" />
              </div>
              <h3 className="text-2xl text-emerald-900 dark:text-emerald-100">
                Sales Pipeline Structure
              </h3>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Do You Have a Defined Pipeline? *
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="hasPipeline"
                      value="yes"
                      checked={formData.hasPipeline === "yes"}
                      onChange={(e) => handleInputChange("hasPipeline", e.target.value)}
                      className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
                    />
                    <span className="text-slate-700 dark:text-slate-300">Yes</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="hasPipeline"
                      value="no"
                      checked={formData.hasPipeline === "no"}
                      onChange={(e) => handleInputChange("hasPipeline", e.target.value)}
                      className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
                    />
                    <span className="text-slate-700 dark:text-slate-300">No</span>
                  </label>
                </div>
              </div>

              {formData.hasPipeline === "yes" && (
                <div>
                  <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                    List Pipeline Stages *
                  </label>
                  <div className="space-y-3">
                    {formData.pipelineStages.map((stage, index) => (
                      <div key={index} className="flex gap-2">
                        <input
                          type="text"
                          required
                          value={stage}
                          onChange={(e) => updatePipelineStage(index, e.target.value)}
                          className="flex-1 px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition-all text-slate-900 dark:text-white"
                          placeholder={`Stage ${index + 1} (e.g., Lead, Qualified, Proposal, Negotiation, Closed)`}
                        />
                        {formData.pipelineStages.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removePipelineStage(index)}
                            className="px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-xl hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors"
                          >
                            Remove
                          </button>
                        )}
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={addPipelineStage}
                      className="px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-xl hover:bg-emerald-200 dark:hover:bg-emerald-900/50 transition-colors"
                    >
                      + Add Stage
                    </button>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                    Average Deal Size *
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      required
                      min="0"
                      value={formData.averageDealSize}
                      onChange={(e) => handleInputChange("averageDealSize", e.target.value)}
                      className="flex-1 px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition-all text-slate-900 dark:text-white"
                      placeholder="Average value"
                    />
                    <select
                      value={formData.currency}
                      onChange={(e) => handleInputChange("currency", e.target.value)}
                      className="px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition-all text-slate-900 dark:text-white"
                    >
                      <option value="USD">USD</option>
                      <option value="EUR">EUR</option>
                      <option value="GBP">GBP</option>
                      <option value="MAD">MAD</option>
                      <option value="DZD">DZD</option>
                      <option value="AED">AED</option>
                      <option value="SAR">SAR</option>
                      <option value="KWD">KWD</option>
                      <option value="QAR">QAR</option>
                      <option value="BHD">BHD</option>
                      <option value="OMR">OMR</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Customer Database Requirements */}
          <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl text-white">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-2xl text-emerald-900 dark:text-emerald-100">
                Customer Database Requirements
              </h3>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Number of Clients in Your Database *
                </label>
                <input
                  type="number"
                  required
                  min="0"
                  value={formData.numberOfClients}
                  onChange={(e) => handleInputChange("numberOfClients", e.target.value)}
                  className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition-all text-slate-900 dark:text-white"
                  placeholder="Total number of customers"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Type of Customer Information to Store (Select all that apply)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    "Contacts",
                    "Company details",
                    "Purchases",
                    "Tickets",
                    "Calls",
                    "Notes",
                    "Invoices",
                    "Other",
                  ].map((info) => (
                    <label
                      key={info}
                      className="flex items-center gap-2 cursor-pointer p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={formData.customerInfo.includes(info)}
                        onChange={() => handleCheckboxChange("customerInfo", info)}
                        className="w-4 h-4 text-emerald-600 focus:ring-emerald-500 rounded"
                      />
                      <span className="text-sm text-slate-700 dark:text-slate-300">{info}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Do You Need Client Segmentation? *
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="needSegmentation"
                      value="yes"
                      checked={formData.needSegmentation === "yes"}
                      onChange={(e) => handleInputChange("needSegmentation", e.target.value)}
                      className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
                    />
                    <span className="text-slate-700 dark:text-slate-300">Yes</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="needSegmentation"
                      value="no"
                      checked={formData.needSegmentation === "no"}
                      onChange={(e) => handleInputChange("needSegmentation", e.target.value)}
                      className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
                    />
                    <span className="text-slate-700 dark:text-slate-300">No</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* 5. Communication & Tracking */}
          <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl text-white">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-2xl text-emerald-900 dark:text-emerald-100">
                Communication & Tracking
              </h3>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Preferred Communication Channels (Select all that apply)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  {["Email", "SMS", "WhatsApp", "Phone", "Chat"].map((channel) => (
                    <label
                      key={channel}
                      className="flex items-center gap-2 cursor-pointer p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={formData.communicationChannels.includes(channel)}
                        onChange={() => handleCheckboxChange("communicationChannels", channel)}
                        className="w-4 h-4 text-emerald-600 focus:ring-emerald-500 rounded"
                      />
                      <span className="text-sm text-slate-700 dark:text-slate-300">{channel}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                    Store Communication Logs Automatically? *
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="autoStoreLogs"
                        value="yes"
                        checked={formData.autoStoreLogs === "yes"}
                        onChange={(e) => handleInputChange("autoStoreLogs", e.target.value)}
                        className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
                      />
                      <span className="text-slate-700 dark:text-slate-300">Yes</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="autoStoreLogs"
                        value="no"
                        checked={formData.autoStoreLogs === "no"}
                        onChange={(e) => handleInputChange("autoStoreLogs", e.target.value)}
                        className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
                      />
                      <span className="text-slate-700 dark:text-slate-300">No</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                    Need Email Automation Sequences? *
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="emailAutomation"
                        value="yes"
                        checked={formData.emailAutomation === "yes"}
                        onChange={(e) => handleInputChange("emailAutomation", e.target.value)}
                        className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
                      />
                      <span className="text-slate-700 dark:text-slate-300">Yes</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="emailAutomation"
                        value="no"
                        checked={formData.emailAutomation === "no"}
                        onChange={(e) => handleInputChange("emailAutomation", e.target.value)}
                        className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
                      />
                      <span className="text-slate-700 dark:text-slate-300">No</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                    Need Reminders & Follow-ups Automation? *
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="remindersAutomation"
                        value="yes"
                        checked={formData.remindersAutomation === "yes"}
                        onChange={(e) => handleInputChange("remindersAutomation", e.target.value)}
                        className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
                      />
                      <span className="text-slate-700 dark:text-slate-300">Yes</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="remindersAutomation"
                        value="no"
                        checked={formData.remindersAutomation === "no"}
                        onChange={(e) => handleInputChange("remindersAutomation", e.target.value)}
                        className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
                      />
                      <span className="text-slate-700 dark:text-slate-300">No</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 6. Support & Ticketing */}
          <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl text-white">
                <Headphones className="w-6 h-6" />
              </div>
              <h3 className="text-2xl text-emerald-900 dark:text-emerald-100">
                Support & Ticketing (Optional Module)
              </h3>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Do You Need a Ticketing System? *
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="needTicketing"
                      value="yes"
                      checked={formData.needTicketing === "yes"}
                      onChange={(e) => handleInputChange("needTicketing", e.target.value)}
                      className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
                    />
                    <span className="text-slate-700 dark:text-slate-300">Yes</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="needTicketing"
                      value="no"
                      checked={formData.needTicketing === "no"}
                      onChange={(e) => handleInputChange("needTicketing", e.target.value)}
                      className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
                    />
                    <span className="text-slate-700 dark:text-slate-300">No</span>
                  </label>
                </div>
              </div>

              {formData.needTicketing === "yes" && (
                <>
                  <div>
                    <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                      Number of Support Agents
                    </label>
                    <input
                      type="number"
                      min="0"
                      value={formData.supportAgents}
                      onChange={(e) => handleInputChange("supportAgents", e.target.value)}
                      className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition-all text-slate-900 dark:text-white"
                      placeholder="Support team size"
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                      Support Channels (Select all that apply)
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {["Email", "Phone", "Chat", "WhatsApp"].map((channel) => (
                        <label
                          key={channel}
                          className="flex items-center gap-2 cursor-pointer p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors"
                        >
                          <input
                            type="checkbox"
                            checked={formData.supportChannels.includes(channel)}
                            onChange={() => handleCheckboxChange("supportChannels", channel)}
                            className="w-4 h-4 text-emerald-600 focus:ring-emerald-500 rounded"
                          />
                          <span className="text-sm text-slate-700 dark:text-slate-300">
                            {channel}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* 7. Integrations */}
          <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl text-white">
                <Link2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl text-emerald-900 dark:text-emerald-100">Integrations</h3>
            </div>

            <div>
              <label className="block text-sm mb-3 text-slate-700 dark:text-slate-300">
                Do You Need Integration With: (Select all that apply)
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  "Website",
                  "Payment Systems",
                  "ERP",
                  "WhatsApp API",
                  "Email Provider",
                  "Marketing Tools",
                ].map((integration) => (
                  <label
                    key={integration}
                    className="flex items-center gap-2 cursor-pointer p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={formData.integrations.includes(integration)}
                      onChange={() => handleCheckboxChange("integrations", integration)}
                      className="w-4 h-4 text-emerald-600 focus:ring-emerald-500 rounded"
                    />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      {integration}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* 8. Analytics & Reporting */}
          <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl text-white">
                <PieChart className="w-6 h-6" />
              </div>
              <h3 className="text-2xl text-emerald-900 dark:text-emerald-100">
                Analytics & Reporting
              </h3>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm mb-3 text-slate-700 dark:text-slate-300">
                  Reports You Need (Select all that apply)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    "Revenue",
                    "Leads",
                    "Sources",
                    "Conversion Rate",
                    "Pipeline Performance",
                    "Employee Performance",
                  ].map((report) => (
                    <label
                      key={report}
                      className="flex items-center gap-2 cursor-pointer p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={formData.reportsNeeded.includes(report)}
                        onChange={() => handleCheckboxChange("reportsNeeded", report)}
                        className="w-4 h-4 text-emerald-600 focus:ring-emerald-500 rounded"
                      />
                      <span className="text-sm text-slate-700 dark:text-slate-300">{report}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Do You Need Role-Based Dashboards? *
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="roleBasedDashboards"
                      value="yes"
                      checked={formData.roleBasedDashboards === "yes"}
                      onChange={(e) => handleInputChange("roleBasedDashboards", e.target.value)}
                      className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
                    />
                    <span className="text-slate-700 dark:text-slate-300">Yes</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="roleBasedDashboards"
                      value="no"
                      checked={formData.roleBasedDashboards === "no"}
                      onChange={(e) => handleInputChange("roleBasedDashboards", e.target.value)}
                      className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
                    />
                    <span className="text-slate-700 dark:text-slate-300">No</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* 9. Security & Data Privacy */}
          <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl text-white">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-2xl text-emerald-900 dark:text-emerald-100">
                Security & Data Privacy
              </h3>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm mb-3 text-slate-700 dark:text-slate-300">
                  Data Access Levels Required (Select all that apply)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  {["Admin", "Manager", "Sales", "Support", "Read-only"].map((level) => (
                    <label
                      key={level}
                      className="flex items-center gap-2 cursor-pointer p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={formData.accessLevels.includes(level)}
                        onChange={() => handleCheckboxChange("accessLevels", level)}
                        className="w-4 h-4 text-emerald-600 focus:ring-emerald-500 rounded"
                      />
                      <span className="text-sm text-slate-700 dark:text-slate-300">{level}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Level of Data Protection Required *
                </label>
                <select
                  required
                  value={formData.dataProtectionLevel}
                  onChange={(e) => handleInputChange("dataProtectionLevel", e.target.value)}
                  className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition-all text-slate-900 dark:text-white"
                >
                  <option value="">Select Protection Level</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                  <option value="Critical">Critical</option>
                </select>
              </div>
            </div>
          </div>

          {/* 10. Budget & Timeline */}
          <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl text-white">
                <DollarSign className="w-6 h-6" />
              </div>
              <h3 className="text-2xl text-emerald-900 dark:text-emerald-100">Budget & Timeline</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Monthly CRM Budget Range *
                </label>
                <select
                  required
                  value={formData.monthlyBudget}
                  onChange={(e) => handleInputChange("monthlyBudget", e.target.value)}
                  className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition-all text-slate-900 dark:text-white"
                >
                  <option value="">Select Budget Range</option>
                  <option value="+1000$">+ 1000 $</option>
                  <option value="+2500$">+ 2500 $</option>
                  <option value="+5000$">+ 5000 $</option>
                  <option value="+10K$">+ 10 K $</option>
                </select>
              </div>

              <div>
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Expected Implementation Timeline *
                </label>
                <select
                  required
                  value={formData.implementationTimeline}
                  onChange={(e) => handleInputChange("implementationTimeline", e.target.value)}
                  className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition-all text-slate-900 dark:text-white"
                >
                  <option value="">Select Timeline</option>
                  <option value="1-2 weeks">1–2 weeks</option>
                  <option value="1 month">1 month</option>
                  <option value="2 months">2 months</option>
                  <option value="More">More than 2 months</option>
                </select>
              </div>
            </div>
          </div>

          {/* 11. Additional Notes */}
          <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl text-white">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-2xl text-emerald-900 dark:text-emerald-100">Additional Notes</h3>
            </div>

            <div>
              <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                Any Special Requirements or Additional Information
              </label>
              <textarea
                value={formData.additionalNotes}
                onChange={(e) => handleInputChange("additionalNotes", e.target.value)}
                rows={6}
                className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition-all text-slate-900 dark:text-white resize-none"
                placeholder="Please share any specific requirements, concerns, or special requests..."
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="group relative px-12 py-4 bg-gradient-to-r from-emerald-600 via-green-500 to-teal-600 text-white rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
            >
              <CheckCircle2 className="w-6 h-6" />
              <span className="text-lg">Submit CRM Requirements</span>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600 via-emerald-500 to-green-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </button>
          </div>
        </form>
      </div>

      {/* Footer */}
      <Footer
        onPrivacyClick={onPrivacyClick}
        onTermsClick={onTermsClick}
        onCookieClick={onCookieClick}
        onContactClick={onContactClick}
      />
    </div>
  );
};

export default CRMPage;
