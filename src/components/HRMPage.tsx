import React, { useState } from "react";
import {
  Users,
  UserCheck,
  Calendar,
  ClipboardCheck,
  Award,
  GraduationCap,
  TrendingUp,
  DollarSign,
  Shield,
  FileText,
  Clock,
  Target,
  Heart,
  Building2,
  Home,
  CheckCircle2,
  Briefcase,
  UserPlus,
  BarChart3,
} from "lucide-react";
import { useTheme } from "./ThemeContext";
import { Footer } from "./Footer";
const bannerImage = "/assets/26255a954b9a2b0486ef51195b9c755e9f6fb039.png";

interface HRMPageProps {
  onPrivacyClick?: () => void;
  onTermsClick?: () => void;
  onCookieClick?: () => void;
  onContactClick?: () => void;
  onHomeClick?: () => void;
}

const HRMPage: React.FC<HRMPageProps> = ({
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
    numberOfDepartments: "",
    numberOfLocations: "",

    // Recruitment & Onboarding
    monthlyHiring: "",
    recruitmentChannels: [] as string[],
    needATS: "",
    needOnboarding: "",
    onboardingDuration: "",

    // Employee Management
    needEmployeeDatabase: "",
    employeeInfoTracking: [] as string[],
    needOrgChart: "",
    needDocumentManagement: "",

    // Attendance & Time Tracking
    needAttendanceSystem: "",
    attendanceMethod: [] as string[],
    needShiftManagement: "",
    trackOvertime: "",
    needLeaveManagement: "",
    leaveTypes: [] as string[],

    // Payroll Management
    hasPayroll: "",
    payrollFrequency: "",
    needPayslipGeneration: "",
    needTaxCompliance: "",
    payrollComplexity: [] as string[],

    // Performance Management
    needPerformanceReview: "",
    reviewFrequency: "",
    need360Feedback: "",
    needGoalTracking: "",
    needKPIDashboard: "",

    // Learning & Development
    needTrainingManagement: "",
    trainingTypes: [] as string[],
    needSkillsTracking: "",
    needCertificationTracking: "",
    annualTrainingBudget: "",

    // Employee Engagement
    needSurveys: "",
    needFeedbackSystem: "",
    needRecognitionProgram: "",
    engagementPriorities: [] as string[],

    // Benefits & Compensation
    benefitsOffered: [] as string[],
    needBenefitsAdmin: "",
    needCompensationAnalysis: "",

    // Compliance & Security
    complianceRequirements: [] as string[],
    needAuditTrail: "",
    dataProtectionLevel: "",
    accessLevels: [] as string[],

    // Reporting & Analytics
    reportsNeeded: [] as string[],
    needPredictiveAnalytics: "",
    needCustomReports: "",

    // Integration & Budget
    integrations: [] as string[],
    monthlyBudget: "",
    implementationTimeline: "",

    // Additional Information
    currentHRSystem: "",
    painPoints: "",
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("HRM Form Data:", formData);
    alert("Thank you! Your HRM requirements have been submitted. Our team will contact you soon.");
  };

  const hrmModules = [
    {
      icon: UserPlus,
      title: "Recruitment & Hiring",
      description:
        "Applicant tracking system, job posting, candidate management, and interview scheduling.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: UserCheck,
      title: "Employee Onboarding",
      description:
        "New hire orientation, documentation, training programs, and integration processes.",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Clock,
      title: "Time & Attendance",
      description:
        "Clock in/out tracking, shift management, overtime calculation, and attendance reports.",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: Calendar,
      title: "Leave Management",
      description:
        "Leave requests, approval workflows, leave balance tracking, and calendar integration.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: DollarSign,
      title: "Payroll Processing",
      description:
        "Salary calculation, tax compliance, payslip generation, and payment processing.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Target,
      title: "Performance Management",
      description: "Goal setting, performance reviews, 360-degree feedback, and KPI tracking.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: GraduationCap,
      title: "Learning & Development",
      description:
        "Training programs, skill tracking, certification management, and e-learning platforms.",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: Award,
      title: "Benefits Administration",
      description: "Health insurance, retirement plans, employee perks, and benefits enrollment.",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: Users,
      title: "Employee Database",
      description:
        "Centralized employee information, organizational chart, and document management.",
      color: "from-pink-500 to-purple-500",
    },
    {
      icon: Heart,
      title: "Employee Engagement",
      description: "Surveys, feedback systems, recognition programs, and wellness initiatives.",
      color: "from-rose-500 to-pink-500",
    },
    {
      icon: Shield,
      title: "Compliance & Security",
      description: "Labor law compliance, data protection, audit trails, and access control.",
      color: "from-slate-500 to-slate-700",
    },
    {
      icon: BarChart3,
      title: "HR Analytics",
      description:
        "Workforce analytics, turnover analysis, recruitment metrics, and custom reports.",
      color: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 dark:bg-gradient-to-br dark:from-[#0A0F1F] dark:via-[#0c1420] dark:to-[#0e1822] transition-colors duration-300">
      {/* Home Button */}
      <div className="absolute top-4 left-4 z-50">
        <button
          onClick={onHomeClick}
          className="flex items-center gap-2 text-slate-900 dark:text-white hover:text-[#0D6EFF] dark:hover:text-[#0D6EFF] transition-colors cursor-pointer"
        >
          <Home className="w-4 h-4" />
          <span>Home</span>
        </button>
      </div>

      {/* Hero Banner Section with Image */}
      <section className="relative w-full overflow-hidden">
        <div className="relative w-full">
          <img src={bannerImage} alt="Human Resources Management" className="w-full h-auto block" />
        </div>
      </section>

      {/* Comprehensive HRM Modules */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl mb-6 text-slate-900 dark:text-white tracking-tight">
              Comprehensive HRM{" "}
              <span className="bg-gradient-to-r from-slate-900 to-gray-800 dark:from-slate-200 dark:to-gray-300 text-transparent bg-clip-text">
                Modules
              </span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-3xl mx-auto">
              Our Human Resources Management solution covers the entire employee lifecycle, from
              recruitment to retirement, providing a unified platform for workforce excellence.
            </p>
          </div>

          {/* Desktop Table View */}
          <div className="hidden lg:block bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-slate-900 to-gray-900">
                    <th className="px-6 py-4 text-left text-white">#</th>
                    <th className="px-6 py-4 text-left text-white">Module</th>
                    <th className="px-6 py-4 text-left text-white">Description</th>
                    <th className="px-6 py-4 text-left text-white">Category</th>
                  </tr>
                </thead>
                <tbody>
                  {hrmModules.map((module, index) => (
                    <tr
                      key={index}
                      className="border-b border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-[#0D6EFF]/10 transition-colors"
                    >
                      <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{index + 1}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-slate-900 to-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                            <module.icon className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-slate-900 dark:text-white">{module.title}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-slate-600 dark:text-slate-400">
                        {module.description}
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-gradient-to-r from-slate-900 to-gray-900 text-white">
                          {module.title.includes("Recruitment") ||
                          module.title.includes("Onboarding")
                            ? "Talent Acquisition"
                            : module.title.includes("Time") ||
                                module.title.includes("Leave") ||
                                module.title.includes("Payroll")
                              ? "Workforce Management"
                              : module.title.includes("Performance") ||
                                  module.title.includes("Learning") ||
                                  module.title.includes("Engagement")
                                ? "Development"
                                : module.title.includes("Benefits") ||
                                    module.title.includes("Compliance")
                                  ? "Administration"
                                  : "Analytics"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Card View */}
          <div className="lg:hidden space-y-4">
            {hrmModules.map((module, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-900 to-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <module.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-slate-900 dark:text-white">{module.title}</h3>
                      <span className="text-sm text-slate-500 dark:text-slate-400">
                        #{index + 1}
                      </span>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                      {module.title.includes("Recruitment") || module.title.includes("Onboarding")
                        ? "Talent Acquisition"
                        : module.title.includes("Time") ||
                            module.title.includes("Leave") ||
                            module.title.includes("Payroll")
                          ? "Workforce Management"
                          : module.title.includes("Performance") ||
                              module.title.includes("Learning") ||
                              module.title.includes("Engagement")
                            ? "Development"
                            : module.title.includes("Benefits") ||
                                module.title.includes("Compliance")
                              ? "Administration"
                              : "Analytics"}
                    </span>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm">{module.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Container */}
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-4xl mb-4 text-slate-900 dark:text-slate-100">
            HRM Requirements & Workforce Assessment
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-4xl mx-auto">
            Fill all details to help us understand your workforce management needs, employee
            lifecycle processes, and HR operations, so we can design an HRM system tailored to your
            organization.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* 1. Company Information */}
          <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-slate-800 to-gray-900 rounded-xl text-white">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl text-slate-900 dark:text-slate-100">Company Information</h3>
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
                  className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 transition-all text-slate-900 dark:text-white"
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
                  className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 transition-all text-slate-900 dark:text-white"
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
                    className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 transition-all text-slate-900 dark:text-white"
                    placeholder="Please specify"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Total Number of Employees *
                </label>
                <input
                  type="number"
                  required
                  min="1"
                  value={formData.numberOfEmployees}
                  onChange={(e) => handleInputChange("numberOfEmployees", e.target.value)}
                  className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 transition-all text-slate-900 dark:text-white"
                  placeholder="Total workforce size"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Number of Departments *
                </label>
                <input
                  type="number"
                  required
                  min="1"
                  value={formData.numberOfDepartments}
                  onChange={(e) => handleInputChange("numberOfDepartments", e.target.value)}
                  className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 transition-all text-slate-900 dark:text-white"
                  placeholder="Number of departments"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Number of Office Locations *
                </label>
                <input
                  type="number"
                  required
                  min="1"
                  value={formData.numberOfLocations}
                  onChange={(e) => handleInputChange("numberOfLocations", e.target.value)}
                  className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 transition-all text-slate-900 dark:text-white"
                  placeholder="Office locations/branches"
                />
              </div>
            </div>
          </div>

          {/* 2. Recruitment & Onboarding */}
          <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-slate-800 to-gray-900 rounded-xl text-white">
                <UserPlus className="w-6 h-6" />
              </div>
              <h3 className="text-2xl text-slate-900 dark:text-slate-100">
                Recruitment & Onboarding
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Average Monthly Hiring *
                </label>
                <input
                  type="number"
                  required
                  min="0"
                  value={formData.monthlyHiring}
                  onChange={(e) => handleInputChange("monthlyHiring", e.target.value)}
                  className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 transition-all text-slate-900 dark:text-white"
                  placeholder="New hires per month"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Recruitment Channels (Select all that apply)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    "Job Boards",
                    "LinkedIn",
                    "Referrals",
                    "Agencies",
                    "Campus Hiring",
                    "Social Media",
                    "Company Website",
                    "Other",
                  ].map((channel) => (
                    <label
                      key={channel}
                      className="flex items-center gap-2 cursor-pointer p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={formData.recruitmentChannels.includes(channel)}
                        onChange={() => handleCheckboxChange("recruitmentChannels", channel)}
                        className="w-4 h-4 text-purple-600 focus:ring-purple-500 rounded"
                      />
                      <span className="text-sm text-slate-700 dark:text-slate-300">{channel}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Need Applicant Tracking System (ATS)? *
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="needATS"
                      value="yes"
                      checked={formData.needATS === "yes"}
                      onChange={(e) => handleInputChange("needATS", e.target.value)}
                      className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                    />
                    <span className="text-slate-700 dark:text-slate-300">Yes</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="needATS"
                      value="no"
                      checked={formData.needATS === "no"}
                      onChange={(e) => handleInputChange("needATS", e.target.value)}
                      className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                    />
                    <span className="text-slate-700 dark:text-slate-300">No</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Need Onboarding Automation? *
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="needOnboarding"
                      value="yes"
                      checked={formData.needOnboarding === "yes"}
                      onChange={(e) => handleInputChange("needOnboarding", e.target.value)}
                      className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                    />
                    <span className="text-slate-700 dark:text-slate-300">Yes</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="needOnboarding"
                      value="no"
                      checked={formData.needOnboarding === "no"}
                      onChange={(e) => handleInputChange("needOnboarding", e.target.value)}
                      className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                    />
                    <span className="text-slate-700 dark:text-slate-300">No</span>
                  </label>
                </div>
              </div>

              {formData.needOnboarding === "yes" && (
                <div>
                  <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                    Typical Onboarding Duration
                  </label>
                  <select
                    value={formData.onboardingDuration}
                    onChange={(e) => handleInputChange("onboardingDuration", e.target.value)}
                    className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 transition-all text-slate-900 dark:text-white"
                  >
                    <option value="">Select Duration</option>
                    <option value="1 week">1 week</option>
                    <option value="2 weeks">2 weeks</option>
                    <option value="1 month">1 month</option>
                    <option value="3 months">3 months</option>
                    <option value="6 months">6 months</option>
                  </select>
                </div>
              )}
            </div>
          </div>

          {/* 3. Employee Management */}
          <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl text-white">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-2xl text-purple-900 dark:text-purple-100">Employee Management</h3>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Need Centralized Employee Database? *
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="needEmployeeDatabase"
                      value="yes"
                      checked={formData.needEmployeeDatabase === "yes"}
                      onChange={(e) => handleInputChange("needEmployeeDatabase", e.target.value)}
                      className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                    />
                    <span className="text-slate-700 dark:text-slate-300">Yes</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="needEmployeeDatabase"
                      value="no"
                      checked={formData.needEmployeeDatabase === "no"}
                      onChange={(e) => handleInputChange("needEmployeeDatabase", e.target.value)}
                      className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                    />
                    <span className="text-slate-700 dark:text-slate-300">No</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Employee Information to Track (Select all that apply)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    "Personal Info",
                    "Contact Details",
                    "Emergency Contacts",
                    "Job History",
                    "Skills & Certifications",
                    "Education",
                    "Documents",
                    "Contracts",
                  ].map((info) => (
                    <label
                      key={info}
                      className="flex items-center gap-2 cursor-pointer p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={formData.employeeInfoTracking.includes(info)}
                        onChange={() => handleCheckboxChange("employeeInfoTracking", info)}
                        className="w-4 h-4 text-purple-600 focus:ring-purple-500 rounded"
                      />
                      <span className="text-sm text-slate-700 dark:text-slate-300">{info}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                    Need Organizational Chart? *
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="needOrgChart"
                        value="yes"
                        checked={formData.needOrgChart === "yes"}
                        onChange={(e) => handleInputChange("needOrgChart", e.target.value)}
                        className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                      />
                      <span className="text-slate-700 dark:text-slate-300">Yes</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="needOrgChart"
                        value="no"
                        checked={formData.needOrgChart === "no"}
                        onChange={(e) => handleInputChange("needOrgChart", e.target.value)}
                        className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                      />
                      <span className="text-slate-700 dark:text-slate-300">No</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                    Need Document Management System? *
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="needDocumentManagement"
                        value="yes"
                        checked={formData.needDocumentManagement === "yes"}
                        onChange={(e) =>
                          handleInputChange("needDocumentManagement", e.target.value)
                        }
                        className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                      />
                      <span className="text-slate-700 dark:text-slate-300">Yes</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="needDocumentManagement"
                        value="no"
                        checked={formData.needDocumentManagement === "no"}
                        onChange={(e) =>
                          handleInputChange("needDocumentManagement", e.target.value)
                        }
                        className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                      />
                      <span className="text-slate-700 dark:text-slate-300">No</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Attendance & Time Tracking */}
          <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl text-white">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-2xl text-purple-900 dark:text-purple-100">
                Attendance & Time Tracking
              </h3>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Need Attendance Tracking System? *
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="needAttendanceSystem"
                      value="yes"
                      checked={formData.needAttendanceSystem === "yes"}
                      onChange={(e) => handleInputChange("needAttendanceSystem", e.target.value)}
                      className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                    />
                    <span className="text-slate-700 dark:text-slate-300">Yes</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="needAttendanceSystem"
                      value="no"
                      checked={formData.needAttendanceSystem === "no"}
                      onChange={(e) => handleInputChange("needAttendanceSystem", e.target.value)}
                      className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                    />
                    <span className="text-slate-700 dark:text-slate-300">No</span>
                  </label>
                </div>
              </div>

              {formData.needAttendanceSystem === "yes" && (
                <>
                  <div>
                    <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                      Attendance Methods (Select all that apply)
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {[
                        "Biometric",
                        "RFID Card",
                        "Mobile App",
                        "Web Portal",
                        "QR Code",
                        "Facial Recognition",
                      ].map((method) => (
                        <label
                          key={method}
                          className="flex items-center gap-2 cursor-pointer p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
                        >
                          <input
                            type="checkbox"
                            checked={formData.attendanceMethod.includes(method)}
                            onChange={() => handleCheckboxChange("attendanceMethod", method)}
                            className="w-4 h-4 text-purple-600 focus:ring-purple-500 rounded"
                          />
                          <span className="text-sm text-slate-700 dark:text-slate-300">
                            {method}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                        Need Shift Management? *
                      </label>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="needShiftManagement"
                            value="yes"
                            checked={formData.needShiftManagement === "yes"}
                            onChange={(e) =>
                              handleInputChange("needShiftManagement", e.target.value)
                            }
                            className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                          />
                          <span className="text-slate-700 dark:text-slate-300">Yes</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="needShiftManagement"
                            value="no"
                            checked={formData.needShiftManagement === "no"}
                            onChange={(e) =>
                              handleInputChange("needShiftManagement", e.target.value)
                            }
                            className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                          />
                          <span className="text-slate-700 dark:text-slate-300">No</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                        Track Overtime? *
                      </label>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="trackOvertime"
                            value="yes"
                            checked={formData.trackOvertime === "yes"}
                            onChange={(e) => handleInputChange("trackOvertime", e.target.value)}
                            className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                          />
                          <span className="text-slate-700 dark:text-slate-300">Yes</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="trackOvertime"
                            value="no"
                            checked={formData.trackOvertime === "no"}
                            onChange={(e) => handleInputChange("trackOvertime", e.target.value)}
                            className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                          />
                          <span className="text-slate-700 dark:text-slate-300">No</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </>
              )}

              <div>
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Need Leave Management System? *
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="needLeaveManagement"
                      value="yes"
                      checked={formData.needLeaveManagement === "yes"}
                      onChange={(e) => handleInputChange("needLeaveManagement", e.target.value)}
                      className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                    />
                    <span className="text-slate-700 dark:text-slate-300">Yes</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="needLeaveManagement"
                      value="no"
                      checked={formData.needLeaveManagement === "no"}
                      onChange={(e) => handleInputChange("needLeaveManagement", e.target.value)}
                      className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                    />
                    <span className="text-slate-700 dark:text-slate-300">No</span>
                  </label>
                </div>
              </div>

              {formData.needLeaveManagement === "yes" && (
                <div>
                  <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                    Leave Types to Manage (Select all that apply)
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      "Annual Leave",
                      "Sick Leave",
                      "Maternity/Paternity",
                      "Unpaid Leave",
                      "Public Holidays",
                      "Compensatory Leave",
                      "Study Leave",
                      "Other",
                    ].map((type) => (
                      <label
                        key={type}
                        className="flex items-center gap-2 cursor-pointer p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
                      >
                        <input
                          type="checkbox"
                          checked={formData.leaveTypes.includes(type)}
                          onChange={() => handleCheckboxChange("leaveTypes", type)}
                          className="w-4 h-4 text-purple-600 focus:ring-purple-500 rounded"
                        />
                        <span className="text-sm text-slate-700 dark:text-slate-300">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* 5. Payroll Management */}
          <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl text-white">
                <DollarSign className="w-6 h-6" />
              </div>
              <h3 className="text-2xl text-purple-900 dark:text-purple-100">Payroll Management</h3>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Need Payroll System? *
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="hasPayroll"
                      value="yes"
                      checked={formData.hasPayroll === "yes"}
                      onChange={(e) => handleInputChange("hasPayroll", e.target.value)}
                      className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                    />
                    <span className="text-slate-700 dark:text-slate-300">Yes</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="hasPayroll"
                      value="no"
                      checked={formData.hasPayroll === "no"}
                      onChange={(e) => handleInputChange("hasPayroll", e.target.value)}
                      className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                    />
                    <span className="text-slate-700 dark:text-slate-300">No</span>
                  </label>
                </div>
              </div>

              {formData.hasPayroll === "yes" && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                        Payroll Frequency *
                      </label>
                      <select
                        required
                        value={formData.payrollFrequency}
                        onChange={(e) => handleInputChange("payrollFrequency", e.target.value)}
                        className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 transition-all text-slate-900 dark:text-white"
                      >
                        <option value="">Select Frequency</option>
                        <option value="Weekly">Weekly</option>
                        <option value="Bi-weekly">Bi-weekly</option>
                        <option value="Monthly">Monthly</option>
                        <option value="Semi-monthly">Semi-monthly</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                        Need Automated Payslip Generation? *
                      </label>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="needPayslipGeneration"
                            value="yes"
                            checked={formData.needPayslipGeneration === "yes"}
                            onChange={(e) =>
                              handleInputChange("needPayslipGeneration", e.target.value)
                            }
                            className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                          />
                          <span className="text-slate-700 dark:text-slate-300">Yes</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="needPayslipGeneration"
                            value="no"
                            checked={formData.needPayslipGeneration === "no"}
                            onChange={(e) =>
                              handleInputChange("needPayslipGeneration", e.target.value)
                            }
                            className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                          />
                          <span className="text-slate-700 dark:text-slate-300">No</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                        Need Tax Compliance Management? *
                      </label>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="needTaxCompliance"
                            value="yes"
                            checked={formData.needTaxCompliance === "yes"}
                            onChange={(e) => handleInputChange("needTaxCompliance", e.target.value)}
                            className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                          />
                          <span className="text-slate-700 dark:text-slate-300">Yes</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="needTaxCompliance"
                            value="no"
                            checked={formData.needTaxCompliance === "no"}
                            onChange={(e) => handleInputChange("needTaxCompliance", e.target.value)}
                            className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                          />
                          <span className="text-slate-700 dark:text-slate-300">No</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                      Payroll Complexity (Select all that apply)
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {[
                        "Basic Salary",
                        "Bonuses",
                        "Commissions",
                        "Allowances",
                        "Deductions",
                        "Benefits",
                        "Overtime",
                        "Loans",
                      ].map((item) => (
                        <label
                          key={item}
                          className="flex items-center gap-2 cursor-pointer p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
                        >
                          <input
                            type="checkbox"
                            checked={formData.payrollComplexity.includes(item)}
                            onChange={() => handleCheckboxChange("payrollComplexity", item)}
                            className="w-4 h-4 text-purple-600 focus:ring-purple-500 rounded"
                          />
                          <span className="text-sm text-slate-700 dark:text-slate-300">{item}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* 6. Performance Management */}
          <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl text-white">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl text-purple-900 dark:text-purple-100">
                Performance Management
              </h3>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Need Performance Review System? *
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="needPerformanceReview"
                      value="yes"
                      checked={formData.needPerformanceReview === "yes"}
                      onChange={(e) => handleInputChange("needPerformanceReview", e.target.value)}
                      className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                    />
                    <span className="text-slate-700 dark:text-slate-300">Yes</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="needPerformanceReview"
                      value="no"
                      checked={formData.needPerformanceReview === "no"}
                      onChange={(e) => handleInputChange("needPerformanceReview", e.target.value)}
                      className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                    />
                    <span className="text-slate-700 dark:text-slate-300">No</span>
                  </label>
                </div>
              </div>

              {formData.needPerformanceReview === "yes" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                      Review Frequency
                    </label>
                    <select
                      value={formData.reviewFrequency}
                      onChange={(e) => handleInputChange("reviewFrequency", e.target.value)}
                      className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 transition-all text-slate-900 dark:text-white"
                    >
                      <option value="">Select Frequency</option>
                      <option value="Quarterly">Quarterly</option>
                      <option value="Semi-annually">Semi-annually</option>
                      <option value="Annually">Annually</option>
                      <option value="Continuous">Continuous</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                      Need 360-Degree Feedback? *
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="need360Feedback"
                          value="yes"
                          checked={formData.need360Feedback === "yes"}
                          onChange={(e) => handleInputChange("need360Feedback", e.target.value)}
                          className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                        />
                        <span className="text-slate-700 dark:text-slate-300">Yes</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="need360Feedback"
                          value="no"
                          checked={formData.need360Feedback === "no"}
                          onChange={(e) => handleInputChange("need360Feedback", e.target.value)}
                          className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                        />
                        <span className="text-slate-700 dark:text-slate-300">No</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                      Need Goal Tracking & OKRs? *
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="needGoalTracking"
                          value="yes"
                          checked={formData.needGoalTracking === "yes"}
                          onChange={(e) => handleInputChange("needGoalTracking", e.target.value)}
                          className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                        />
                        <span className="text-slate-700 dark:text-slate-300">Yes</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="needGoalTracking"
                          value="no"
                          checked={formData.needGoalTracking === "no"}
                          onChange={(e) => handleInputChange("needGoalTracking", e.target.value)}
                          className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                        />
                        <span className="text-slate-700 dark:text-slate-300">No</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                      Need KPI Dashboard? *
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="needKPIDashboard"
                          value="yes"
                          checked={formData.needKPIDashboard === "yes"}
                          onChange={(e) => handleInputChange("needKPIDashboard", e.target.value)}
                          className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                        />
                        <span className="text-slate-700 dark:text-slate-300">Yes</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="needKPIDashboard"
                          value="no"
                          checked={formData.needKPIDashboard === "no"}
                          onChange={(e) => handleInputChange("needKPIDashboard", e.target.value)}
                          className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                        />
                        <span className="text-slate-700 dark:text-slate-300">No</span>
                      </label>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* 7. Learning & Development */}
          <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl text-white">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl text-purple-900 dark:text-purple-100">
                Learning & Development
              </h3>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Need Training Management System? *
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="needTrainingManagement"
                      value="yes"
                      checked={formData.needTrainingManagement === "yes"}
                      onChange={(e) => handleInputChange("needTrainingManagement", e.target.value)}
                      className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                    />
                    <span className="text-slate-700 dark:text-slate-300">Yes</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="needTrainingManagement"
                      value="no"
                      checked={formData.needTrainingManagement === "no"}
                      onChange={(e) => handleInputChange("needTrainingManagement", e.target.value)}
                      className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                    />
                    <span className="text-slate-700 dark:text-slate-300">No</span>
                  </label>
                </div>
              </div>

              {formData.needTrainingManagement === "yes" && (
                <>
                  <div>
                    <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                      Training Types (Select all that apply)
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {[
                        "Technical Skills",
                        "Soft Skills",
                        "Leadership",
                        "Compliance",
                        "On-the-job",
                        "E-Learning",
                        "Workshops",
                        "External",
                      ].map((type) => (
                        <label
                          key={type}
                          className="flex items-center gap-2 cursor-pointer p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
                        >
                          <input
                            type="checkbox"
                            checked={formData.trainingTypes.includes(type)}
                            onChange={() => handleCheckboxChange("trainingTypes", type)}
                            className="w-4 h-4 text-purple-600 focus:ring-purple-500 rounded"
                          />
                          <span className="text-sm text-slate-700 dark:text-slate-300">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                        Need Skills Matrix Tracking? *
                      </label>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="needSkillsTracking"
                            value="yes"
                            checked={formData.needSkillsTracking === "yes"}
                            onChange={(e) =>
                              handleInputChange("needSkillsTracking", e.target.value)
                            }
                            className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                          />
                          <span className="text-slate-700 dark:text-slate-300">Yes</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="needSkillsTracking"
                            value="no"
                            checked={formData.needSkillsTracking === "no"}
                            onChange={(e) =>
                              handleInputChange("needSkillsTracking", e.target.value)
                            }
                            className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                          />
                          <span className="text-slate-700 dark:text-slate-300">No</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                        Need Certification Tracking? *
                      </label>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="needCertificationTracking"
                            value="yes"
                            checked={formData.needCertificationTracking === "yes"}
                            onChange={(e) =>
                              handleInputChange("needCertificationTracking", e.target.value)
                            }
                            className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                          />
                          <span className="text-slate-700 dark:text-slate-300">Yes</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="needCertificationTracking"
                            value="no"
                            checked={formData.needCertificationTracking === "no"}
                            onChange={(e) =>
                              handleInputChange("needCertificationTracking", e.target.value)
                            }
                            className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                          />
                          <span className="text-slate-700 dark:text-slate-300">No</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                        Annual Training Budget
                      </label>
                      <input
                        type="text"
                        value={formData.annualTrainingBudget}
                        onChange={(e) => handleInputChange("annualTrainingBudget", e.target.value)}
                        className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 transition-all text-slate-900 dark:text-white"
                        placeholder="Enter budget (optional)"
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* 8. Employee Engagement */}
          <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl text-white">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-2xl text-purple-900 dark:text-purple-100">
                Employee Engagement & Wellness
              </h3>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                    Need Employee Surveys? *
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="needSurveys"
                        value="yes"
                        checked={formData.needSurveys === "yes"}
                        onChange={(e) => handleInputChange("needSurveys", e.target.value)}
                        className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                      />
                      <span className="text-slate-700 dark:text-slate-300">Yes</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="needSurveys"
                        value="no"
                        checked={formData.needSurveys === "no"}
                        onChange={(e) => handleInputChange("needSurveys", e.target.value)}
                        className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                      />
                      <span className="text-slate-700 dark:text-slate-300">No</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                    Need Feedback System? *
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="needFeedbackSystem"
                        value="yes"
                        checked={formData.needFeedbackSystem === "yes"}
                        onChange={(e) => handleInputChange("needFeedbackSystem", e.target.value)}
                        className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                      />
                      <span className="text-slate-700 dark:text-slate-300">Yes</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="needFeedbackSystem"
                        value="no"
                        checked={formData.needFeedbackSystem === "no"}
                        onChange={(e) => handleInputChange("needFeedbackSystem", e.target.value)}
                        className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                      />
                      <span className="text-slate-700 dark:text-slate-300">No</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                    Need Recognition & Rewards Program? *
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="needRecognitionProgram"
                        value="yes"
                        checked={formData.needRecognitionProgram === "yes"}
                        onChange={(e) =>
                          handleInputChange("needRecognitionProgram", e.target.value)
                        }
                        className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                      />
                      <span className="text-slate-700 dark:text-slate-300">Yes</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="needRecognitionProgram"
                        value="no"
                        checked={formData.needRecognitionProgram === "no"}
                        onChange={(e) =>
                          handleInputChange("needRecognitionProgram", e.target.value)
                        }
                        className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                      />
                      <span className="text-slate-700 dark:text-slate-300">No</span>
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Engagement Priorities (Select all that apply)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    "Work-Life Balance",
                    "Mental Health",
                    "Team Building",
                    "Career Growth",
                    "Workplace Culture",
                    "Diversity & Inclusion",
                  ].map((priority) => (
                    <label
                      key={priority}
                      className="flex items-center gap-2 cursor-pointer p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={formData.engagementPriorities.includes(priority)}
                        onChange={() => handleCheckboxChange("engagementPriorities", priority)}
                        className="w-4 h-4 text-purple-600 focus:ring-purple-500 rounded"
                      />
                      <span className="text-sm text-slate-700 dark:text-slate-300">{priority}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 9. Benefits & Compensation */}
          <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl text-white">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-2xl text-purple-900 dark:text-purple-100">
                Benefits & Compensation
              </h3>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Benefits Offered (Select all that apply)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    "Health Insurance",
                    "Life Insurance",
                    "Retirement Plan",
                    "Stock Options",
                    "Gym Membership",
                    "Transportation",
                    "Meal Vouchers",
                    "Other",
                  ].map((benefit) => (
                    <label
                      key={benefit}
                      className="flex items-center gap-2 cursor-pointer p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={formData.benefitsOffered.includes(benefit)}
                        onChange={() => handleCheckboxChange("benefitsOffered", benefit)}
                        className="w-4 h-4 text-purple-600 focus:ring-purple-500 rounded"
                      />
                      <span className="text-sm text-slate-700 dark:text-slate-300">{benefit}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                    Need Benefits Administration? *
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="needBenefitsAdmin"
                        value="yes"
                        checked={formData.needBenefitsAdmin === "yes"}
                        onChange={(e) => handleInputChange("needBenefitsAdmin", e.target.value)}
                        className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                      />
                      <span className="text-slate-700 dark:text-slate-300">Yes</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="needBenefitsAdmin"
                        value="no"
                        checked={formData.needBenefitsAdmin === "no"}
                        onChange={(e) => handleInputChange("needBenefitsAdmin", e.target.value)}
                        className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                      />
                      <span className="text-slate-700 dark:text-slate-300">No</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                    Need Compensation Analysis & Benchmarking? *
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="needCompensationAnalysis"
                        value="yes"
                        checked={formData.needCompensationAnalysis === "yes"}
                        onChange={(e) =>
                          handleInputChange("needCompensationAnalysis", e.target.value)
                        }
                        className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                      />
                      <span className="text-slate-700 dark:text-slate-300">Yes</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="needCompensationAnalysis"
                        value="no"
                        checked={formData.needCompensationAnalysis === "no"}
                        onChange={(e) =>
                          handleInputChange("needCompensationAnalysis", e.target.value)
                        }
                        className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                      />
                      <span className="text-slate-700 dark:text-slate-300">No</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 10. Compliance & Security */}
          <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl text-white">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-2xl text-purple-900 dark:text-purple-100">
                Compliance & Security
              </h3>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Compliance Requirements (Select all that apply)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    "GDPR",
                    "Labor Laws",
                    "Equal Employment",
                    "Data Privacy",
                    "Health & Safety",
                    "Industry-Specific",
                  ].map((compliance) => (
                    <label
                      key={compliance}
                      className="flex items-center gap-2 cursor-pointer p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={formData.complianceRequirements.includes(compliance)}
                        onChange={() => handleCheckboxChange("complianceRequirements", compliance)}
                        className="w-4 h-4 text-purple-600 focus:ring-purple-500 rounded"
                      />
                      <span className="text-sm text-slate-700 dark:text-slate-300">
                        {compliance}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                    Need Audit Trail? *
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="needAuditTrail"
                        value="yes"
                        checked={formData.needAuditTrail === "yes"}
                        onChange={(e) => handleInputChange("needAuditTrail", e.target.value)}
                        className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                      />
                      <span className="text-slate-700 dark:text-slate-300">Yes</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="needAuditTrail"
                        value="no"
                        checked={formData.needAuditTrail === "no"}
                        onChange={(e) => handleInputChange("needAuditTrail", e.target.value)}
                        className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                      />
                      <span className="text-slate-700 dark:text-slate-300">No</span>
                    </label>
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
                    className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 transition-all text-slate-900 dark:text-white"
                  >
                    <option value="">Select Protection Level</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                    <option value="Critical">Critical</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Data Access Levels Required (Select all that apply)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  {["Admin", "HR Manager", "Department Head", "Employee", "Read-only"].map(
                    (level) => (
                      <label
                        key={level}
                        className="flex items-center gap-2 cursor-pointer p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
                      >
                        <input
                          type="checkbox"
                          checked={formData.accessLevels.includes(level)}
                          onChange={() => handleCheckboxChange("accessLevels", level)}
                          className="w-4 h-4 text-purple-600 focus:ring-purple-500 rounded"
                        />
                        <span className="text-sm text-slate-700 dark:text-slate-300">{level}</span>
                      </label>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* 11. Reporting & Analytics */}
          <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl text-white">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl text-purple-900 dark:text-purple-100">
                Reporting & Analytics
              </h3>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Reports Needed (Select all that apply)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    "Headcount",
                    "Turnover Rate",
                    "Absence Rate",
                    "Recruitment Metrics",
                    "Training ROI",
                    "Performance Trends",
                    "Compensation Analysis",
                    "Demographics",
                  ].map((report) => (
                    <label
                      key={report}
                      className="flex items-center gap-2 cursor-pointer p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={formData.reportsNeeded.includes(report)}
                        onChange={() => handleCheckboxChange("reportsNeeded", report)}
                        className="w-4 h-4 text-purple-600 focus:ring-purple-500 rounded"
                      />
                      <span className="text-sm text-slate-700 dark:text-slate-300">{report}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                    Need Predictive Analytics? *
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="needPredictiveAnalytics"
                        value="yes"
                        checked={formData.needPredictiveAnalytics === "yes"}
                        onChange={(e) =>
                          handleInputChange("needPredictiveAnalytics", e.target.value)
                        }
                        className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                      />
                      <span className="text-slate-700 dark:text-slate-300">Yes</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="needPredictiveAnalytics"
                        value="no"
                        checked={formData.needPredictiveAnalytics === "no"}
                        onChange={(e) =>
                          handleInputChange("needPredictiveAnalytics", e.target.value)
                        }
                        className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                      />
                      <span className="text-slate-700 dark:text-slate-300">No</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                    Need Custom Report Builder? *
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="needCustomReports"
                        value="yes"
                        checked={formData.needCustomReports === "yes"}
                        onChange={(e) => handleInputChange("needCustomReports", e.target.value)}
                        className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                      />
                      <span className="text-slate-700 dark:text-slate-300">Yes</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="needCustomReports"
                        value="no"
                        checked={formData.needCustomReports === "no"}
                        onChange={(e) => handleInputChange("needCustomReports", e.target.value)}
                        className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                      />
                      <span className="text-slate-700 dark:text-slate-300">No</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 12. Integration & Budget */}
          <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl text-white">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-2xl text-purple-900 dark:text-purple-100">
                Integration & Budget
              </h3>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Integration Requirements (Select all that apply)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    "ERP",
                    "Payroll Software",
                    "Accounting System",
                    "Email",
                    "Calendar",
                    "Chat Tools",
                    "Background Check",
                    "Learning Platform",
                  ].map((integration) => (
                    <label
                      key={integration}
                      className="flex items-center gap-2 cursor-pointer p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={formData.integrations.includes(integration)}
                        onChange={() => handleCheckboxChange("integrations", integration)}
                        className="w-4 h-4 text-purple-600 focus:ring-purple-500 rounded"
                      />
                      <span className="text-sm text-slate-700 dark:text-slate-300">
                        {integration}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                    Monthly HRM Budget Range *
                  </label>
                  <select
                    required
                    value={formData.monthlyBudget}
                    onChange={(e) => handleInputChange("monthlyBudget", e.target.value)}
                    className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 transition-all text-slate-900 dark:text-white"
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
                    className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 transition-all text-slate-900 dark:text-white"
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
          </div>

          {/* 13. Additional Information */}
          <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl text-white">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-2xl text-purple-900 dark:text-purple-100">
                Additional Information
              </h3>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Current HR System (if any)
                </label>
                <input
                  type="text"
                  value={formData.currentHRSystem}
                  onChange={(e) => handleInputChange("currentHRSystem", e.target.value)}
                  className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 transition-all text-slate-900 dark:text-white"
                  placeholder="e.g., Excel, BambooHR, SAP SuccessFactors, etc."
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Current Pain Points / Challenges
                </label>
                <textarea
                  value={formData.painPoints}
                  onChange={(e) => handleInputChange("painPoints", e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 transition-all text-slate-900 dark:text-white resize-none"
                  placeholder="What challenges are you facing with your current HR processes?"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Any Special Requirements or Additional Information
                </label>
                <textarea
                  value={formData.additionalNotes}
                  onChange={(e) => handleInputChange("additionalNotes", e.target.value)}
                  rows={6}
                  className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 transition-all text-slate-900 dark:text-white resize-none"
                  placeholder="Please share any specific requirements, concerns, or special requests..."
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="group relative px-12 py-4 bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 text-white rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
            >
              <CheckCircle2 className="w-6 h-6" />
              <span className="text-lg">Submit HRM Requirements</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
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

export default HRMPage;
