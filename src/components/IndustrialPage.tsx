import React, { useState } from "react";
import {
  Factory,
  Settings,
  Package,
  Truck,
  ClipboardCheck,
  BarChart3,
  Wrench,
  Shield,
  Clock,
  TrendingUp,
  Users,
  AlertTriangle,
  Home,
  CheckCircle2,
  Boxes,
  Gauge,
  Cog,
  HardHat,
  FileText,
} from "lucide-react";
import { useTheme } from "./ThemeContext";
import { Footer } from "./Footer";
const bannerImage = "/assets/ba08a4a4e7a55507e1397cefb7a096890a339dc7.png";

interface IndustrialPageProps {
  onPrivacyClick?: () => void;
  onTermsClick?: () => void;
  onCookieClick?: () => void;
  onContactClick?: () => void;
  onHomeClick?: () => void;
}

const IndustrialPage: React.FC<IndustrialPageProps> = ({
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
    numberOfPlants: "",
    productionCapacity: "",

    // Production Planning
    productionType: "",
    planningHorizon: "",
    needMRP: "",
    needCapacityPlanning: "",
    productionScheduling: [] as string[],

    // Manufacturing Execution
    needMES: "",
    shopFloorControl: "",
    realTimeMonitoring: "",
    productionTracking: [] as string[],

    // Quality Management
    qualityStandards: [] as string[],
    needQMS: "",
    inspectionFrequency: "",
    needNCRManagement: "",
    qualityMetrics: [] as string[],

    // Inventory & Warehouse
    inventoryItems: "",
    warehouseLocations: "",
    needWMS: "",
    inventoryMethods: [] as string[],
    needBarcodeRFID: "",

    // Supply Chain
    numberOfSuppliers: "",
    needSCM: "",
    procurementProcess: "",
    supplierManagement: [] as string[],
    needVendorPortal: "",

    // Maintenance Management
    maintenanceType: [] as string[],
    needCMMSPM: "",
    equipmentCount: "",
    downtimeTracking: "",
    maintenanceScheduling: "",

    // Safety & Compliance
    safetyStandards: [] as string[],
    needIncidentManagement: "",
    complianceRequirements: [] as string[],
    needAuditManagement: "",

    // Analytics & Reporting
    kpiTracking: [] as string[],
    needOEETracking: "",
    needPredictiveAnalytics: "",
    reportingNeeds: [] as string[],

    // Integration & Budget
    currentSystems: [] as string[],
    integrationNeeds: [] as string[],
    monthlyBudget: "",
    implementationTimeline: "",

    // Additional Information
    currentChallenges: "",
    specificRequirements: "",
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
    console.log("Industrial Management Form Data:", formData);
    alert(
      "Thank you! Your Industrial Management requirements have been submitted. Our team will contact you soon."
    );
  };

  const industrialModules = [
    {
      icon: Factory,
      title: "Production Planning",
      description:
        "Master production scheduling, material requirements planning (MRP), capacity planning, and demand forecasting.",
      color: "from-orange-500 to-red-600",
    },
    {
      icon: Gauge,
      title: "Manufacturing Execution (MES)",
      description:
        "Shop floor control, real-time production tracking, work order management, and performance monitoring.",
      color: "from-red-600 to-orange-700",
    },
    {
      icon: ClipboardCheck,
      title: "Quality Management (QMS)",
      description:
        "Quality control, inspection management, non-conformance reporting, and statistical process control.",
      color: "from-orange-600 to-amber-600",
    },
    {
      icon: Package,
      title: "Inventory Management",
      description:
        "Stock control, cycle counting, ABC analysis, reorder point management, and inventory optimization.",
      color: "from-amber-600 to-yellow-600",
    },
    {
      icon: Boxes,
      title: "Warehouse Management (WMS)",
      description:
        "Warehouse operations, picking & packing, bin management, barcode/RFID tracking, and shipping.",
      color: "from-yellow-600 to-orange-500",
    },
    {
      icon: Truck,
      title: "Supply Chain Management",
      description:
        "Procurement, supplier management, purchase orders, logistics coordination, and vendor collaboration.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Wrench,
      title: "Maintenance Management (CMMS)",
      description:
        "Preventive maintenance, work orders, equipment tracking, spare parts management, and downtime analysis.",
      color: "from-red-500 to-rose-600",
    },
    {
      icon: HardHat,
      title: "Safety & Compliance",
      description:
        "Incident management, safety inspections, regulatory compliance, audit trails, and risk assessment.",
      color: "from-rose-600 to-red-600",
    },
    {
      icon: Settings,
      title: "Equipment Management",
      description:
        "Asset tracking, equipment history, calibration management, and lifecycle monitoring.",
      color: "from-slate-600 to-gray-700",
    },
    {
      icon: TrendingUp,
      title: "Production Analytics",
      description:
        "OEE tracking, production metrics, performance dashboards, and continuous improvement analytics.",
      color: "from-emerald-600 to-teal-600",
    },
    {
      icon: Cog,
      title: "Process Optimization",
      description:
        "Lean manufacturing, six sigma integration, bottleneck analysis, and efficiency improvement.",
      color: "from-blue-600 to-indigo-600",
    },
    {
      icon: BarChart3,
      title: "Industrial Reporting",
      description:
        "Custom reports, KPI dashboards, production reports, cost analysis, and regulatory reporting.",
      color: "from-indigo-600 to-purple-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 dark:bg-gradient-to-br dark:from-[#0A0F1F] dark:via-[#0c1420] dark:to-[#0e1822] transition-colors duration-300">
      {/* Home Button */}
      <div className="absolute top-4 left-4 z-50">
        <button
          onClick={onHomeClick}
          className="flex items-center gap-2 text-slate-900 dark:text-white hover:text-orange-600 dark:hover:text-orange-500 transition-colors cursor-pointer"
        >
          <Home className="w-4 h-4" />
          <span>Home</span>
        </button>
      </div>

      {/* Hero Banner Section with Image */}
      <section className="relative w-full overflow-hidden">
        <div className="relative w-full">
          <img src={bannerImage} alt="Industrial Management" className="w-full h-auto block" />
        </div>
      </section>

      {/* Comprehensive Industrial Modules */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl mb-6 text-slate-900 dark:text-white tracking-tight">
              Comprehensive Industrial{" "}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 text-transparent bg-clip-text">
                Modules
              </span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-3xl mx-auto">
              Our Industrial Management solution covers the entire manufacturing lifecycle, from
              production planning to quality control, providing a unified platform for operational
              excellence.
            </p>
          </div>

          {/* Desktop Table View */}
          <div className="hidden lg:block bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-orange-600 to-red-600">
                    <th className="px-6 py-4 text-left text-white">#</th>
                    <th className="px-6 py-4 text-left text-white">Module</th>
                    <th className="px-6 py-4 text-left text-white">Description</th>
                    <th className="px-6 py-4 text-left text-white">Category</th>
                  </tr>
                </thead>
                <tbody>
                  {industrialModules.map((module, index) => (
                    <tr
                      key={index}
                      className="border-b border-slate-200 dark:border-slate-700 hover:bg-orange-50 dark:hover:bg-orange-900/10 transition-colors"
                    >
                      <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{index + 1}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                            <module.icon className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-slate-900 dark:text-white">{module.title}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-slate-600 dark:text-slate-400">
                        {module.description}
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-gradient-to-r from-orange-600 to-red-600 text-white">
                          {module.title.includes("Production") ||
                          module.title.includes("Manufacturing")
                            ? "Production"
                            : module.title.includes("Quality") || module.title.includes("Safety")
                              ? "Quality & Safety"
                              : module.title.includes("Inventory") ||
                                  module.title.includes("Warehouse") ||
                                  module.title.includes("Supply")
                                ? "Supply Chain"
                                : module.title.includes("Maintenance") ||
                                    module.title.includes("Equipment")
                                  ? "Maintenance"
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
            {industrialModules.map((module, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <module.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-slate-900 dark:text-white">{module.title}</h3>
                      <span className="text-sm text-slate-500 dark:text-slate-400">
                        #{index + 1}
                      </span>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-gradient-to-r from-orange-600 to-red-600 text-white">
                      {module.title.includes("Production") || module.title.includes("Manufacturing")
                        ? "Production"
                        : module.title.includes("Quality") || module.title.includes("Safety")
                          ? "Quality & Safety"
                          : module.title.includes("Inventory") ||
                              module.title.includes("Warehouse") ||
                              module.title.includes("Supply")
                            ? "Supply Chain"
                            : module.title.includes("Maintenance") ||
                                module.title.includes("Equipment")
                              ? "Maintenance"
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
          <h2 className="text-4xl mb-4 text-orange-900 dark:text-orange-100">
            Industrial Management Requirements & Assessment
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-4xl mx-auto">
            Fill all details to help us understand your manufacturing operations, production
            processes, and industrial management needs, so we can design a solution tailored to your
            facility.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* 1. Company Information */}
          <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl text-white">
                <Factory className="w-6 h-6" />
              </div>
              <h3 className="text-2xl text-orange-900 dark:text-orange-100">Company Information</h3>
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
                  className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 transition-all text-slate-900 dark:text-white"
                  placeholder="Enter your company name"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Industry Sector *
                </label>
                <select
                  required
                  value={formData.industrySector}
                  onChange={(e) => handleInputChange("industrySector", e.target.value)}
                  className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 transition-all text-slate-900 dark:text-white"
                >
                  <option value="">Select Industry</option>
                  <option value="Automotive">Automotive</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Food & Beverage">Food & Beverage</option>
                  <option value="Pharmaceuticals">Pharmaceuticals</option>
                  <option value="Chemicals">Chemicals</option>
                  <option value="Textiles">Textiles</option>
                  <option value="Metal & Machinery">Metal & Machinery</option>
                  <option value="Plastics">Plastics</option>
                  <option value="Packaging">Packaging</option>
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
                    className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 transition-all text-slate-900 dark:text-white"
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
                  className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 transition-all text-slate-900 dark:text-white"
                  placeholder="Total workforce"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Number of Manufacturing Plants/Facilities *
                </label>
                <input
                  type="number"
                  required
                  min="1"
                  value={formData.numberOfPlants}
                  onChange={(e) => handleInputChange("numberOfPlants", e.target.value)}
                  className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 transition-all text-slate-900 dark:text-white"
                  placeholder="Number of facilities"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Annual Production Capacity
                </label>
                <input
                  type="text"
                  value={formData.productionCapacity}
                  onChange={(e) => handleInputChange("productionCapacity", e.target.value)}
                  className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 transition-all text-slate-900 dark:text-white"
                  placeholder="e.g., 10,000 units/year"
                />
              </div>
            </div>
          </div>

          {/* 2. Production Planning */}
          <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl text-white">
                <Settings className="w-6 h-6" />
              </div>
              <h3 className="text-2xl text-orange-900 dark:text-orange-100">Production Planning</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Production Type *
                </label>
                <select
                  required
                  value={formData.productionType}
                  onChange={(e) => handleInputChange("productionType", e.target.value)}
                  className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 transition-all text-slate-900 dark:text-white"
                >
                  <option value="">Select Type</option>
                  <option value="Make to Stock (MTS)">Make to Stock (MTS)</option>
                  <option value="Make to Order (MTO)">Make to Order (MTO)</option>
                  <option value="Engineer to Order (ETO)">Engineer to Order (ETO)</option>
                  <option value="Assemble to Order (ATO)">Assemble to Order (ATO)</option>
                  <option value="Continuous Production">Continuous Production</option>
                  <option value="Batch Production">Batch Production</option>
                </select>
              </div>

              <div>
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Planning Horizon *
                </label>
                <select
                  required
                  value={formData.planningHorizon}
                  onChange={(e) => handleInputChange("planningHorizon", e.target.value)}
                  className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 transition-all text-slate-900 dark:text-white"
                >
                  <option value="">Select Horizon</option>
                  <option value="Daily">Daily</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Quarterly">Quarterly</option>
                  <option value="Annual">Annual</option>
                </select>
              </div>

              <div>
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Need Material Requirements Planning (MRP)? *
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="needMRP"
                      value="yes"
                      checked={formData.needMRP === "yes"}
                      onChange={(e) => handleInputChange("needMRP", e.target.value)}
                      className="w-4 h-4 text-orange-600 focus:ring-orange-500"
                    />
                    <span className="text-slate-700 dark:text-slate-300">Yes</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="needMRP"
                      value="no"
                      checked={formData.needMRP === "no"}
                      onChange={(e) => handleInputChange("needMRP", e.target.value)}
                      className="w-4 h-4 text-orange-600 focus:ring-orange-500"
                    />
                    <span className="text-slate-700 dark:text-slate-300">No</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Need Capacity Planning? *
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="needCapacityPlanning"
                      value="yes"
                      checked={formData.needCapacityPlanning === "yes"}
                      onChange={(e) => handleInputChange("needCapacityPlanning", e.target.value)}
                      className="w-4 h-4 text-orange-600 focus:ring-orange-500"
                    />
                    <span className="text-slate-700 dark:text-slate-300">Yes</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="needCapacityPlanning"
                      value="no"
                      checked={formData.needCapacityPlanning === "no"}
                      onChange={(e) => handleInputChange("needCapacityPlanning", e.target.value)}
                      className="w-4 h-4 text-orange-600 focus:ring-orange-500"
                    />
                    <span className="text-slate-700 dark:text-slate-300">No</span>
                  </label>
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Production Scheduling Needs (Select all that apply)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    "Forward Scheduling",
                    "Backward Scheduling",
                    "Finite Capacity",
                    "Infinite Capacity",
                    "Job Shop",
                    "Flow Shop",
                    "Advanced Planning",
                    "Real-time Scheduling",
                  ].map((item) => (
                    <label
                      key={item}
                      className="flex items-center gap-2 cursor-pointer p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={formData.productionScheduling.includes(item)}
                        onChange={() => handleCheckboxChange("productionScheduling", item)}
                        className="w-4 h-4 text-orange-600 focus:ring-orange-500 rounded"
                      />
                      <span className="text-sm text-slate-700 dark:text-slate-300">{item}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 3. Manufacturing Execution System */}
          <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl text-white">
                <Gauge className="w-6 h-6" />
              </div>
              <h3 className="text-2xl text-orange-900 dark:text-orange-100">
                Manufacturing Execution System (MES)
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Need MES Implementation? *
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="needMES"
                      value="yes"
                      checked={formData.needMES === "yes"}
                      onChange={(e) => handleInputChange("needMES", e.target.value)}
                      className="w-4 h-4 text-orange-600 focus:ring-orange-500"
                    />
                    <span className="text-slate-700 dark:text-slate-300">Yes</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="needMES"
                      value="no"
                      checked={formData.needMES === "no"}
                      onChange={(e) => handleInputChange("needMES", e.target.value)}
                      className="w-4 h-4 text-orange-600 focus:ring-orange-500"
                    />
                    <span className="text-slate-700 dark:text-slate-300">No</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Shop Floor Control Required? *
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="shopFloorControl"
                      value="yes"
                      checked={formData.shopFloorControl === "yes"}
                      onChange={(e) => handleInputChange("shopFloorControl", e.target.value)}
                      className="w-4 h-4 text-orange-600 focus:ring-orange-500"
                    />
                    <span className="text-slate-700 dark:text-slate-300">Yes</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="shopFloorControl"
                      value="no"
                      checked={formData.shopFloorControl === "no"}
                      onChange={(e) => handleInputChange("shopFloorControl", e.target.value)}
                      className="w-4 h-4 text-orange-600 focus:ring-orange-500"
                    />
                    <span className="text-slate-700 dark:text-slate-300">No</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Real-Time Production Monitoring? *
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="realTimeMonitoring"
                      value="yes"
                      checked={formData.realTimeMonitoring === "yes"}
                      onChange={(e) => handleInputChange("realTimeMonitoring", e.target.value)}
                      className="w-4 h-4 text-orange-600 focus:ring-orange-500"
                    />
                    <span className="text-slate-700 dark:text-slate-300">Yes</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="realTimeMonitoring"
                      value="no"
                      checked={formData.realTimeMonitoring === "no"}
                      onChange={(e) => handleInputChange("realTimeMonitoring", e.target.value)}
                      className="w-4 h-4 text-orange-600 focus:ring-orange-500"
                    />
                    <span className="text-slate-700 dark:text-slate-300">No</span>
                  </label>
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Production Tracking Requirements (Select all that apply)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    "Work Orders",
                    "Labor Tracking",
                    "Machine Utilization",
                    "Material Consumption",
                    "Scrap & Waste",
                    "Downtime Tracking",
                    "Batch/Lot Tracking",
                    "Genealogy",
                  ].map((item) => (
                    <label
                      key={item}
                      className="flex items-center gap-2 cursor-pointer p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={formData.productionTracking.includes(item)}
                        onChange={() => handleCheckboxChange("productionTracking", item)}
                        className="w-4 h-4 text-orange-600 focus:ring-orange-500 rounded"
                      />
                      <span className="text-sm text-slate-700 dark:text-slate-300">{item}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 4. Quality Management */}
          <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl text-white">
                <ClipboardCheck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl text-orange-900 dark:text-orange-100">Quality Management</h3>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Quality Standards & Certifications (Select all that apply)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    "ISO 9001",
                    "ISO 13485",
                    "AS9100",
                    "IATF 16949",
                    "FDA",
                    "GMP",
                    "Six Sigma",
                    "Other",
                  ].map((standard) => (
                    <label
                      key={standard}
                      className="flex items-center gap-2 cursor-pointer p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={formData.qualityStandards.includes(standard)}
                        onChange={() => handleCheckboxChange("qualityStandards", standard)}
                        className="w-4 h-4 text-orange-600 focus:ring-orange-500 rounded"
                      />
                      <span className="text-sm text-slate-700 dark:text-slate-300">{standard}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                    Need Quality Management System (QMS)? *
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="needQMS"
                        value="yes"
                        checked={formData.needQMS === "yes"}
                        onChange={(e) => handleInputChange("needQMS", e.target.value)}
                        className="w-4 h-4 text-orange-600 focus:ring-orange-500"
                      />
                      <span className="text-slate-700 dark:text-slate-300">Yes</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="needQMS"
                        value="no"
                        checked={formData.needQMS === "no"}
                        onChange={(e) => handleInputChange("needQMS", e.target.value)}
                        className="w-4 h-4 text-orange-600 focus:ring-orange-500"
                      />
                      <span className="text-slate-700 dark:text-slate-300">No</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                    Inspection Frequency
                  </label>
                  <select
                    value={formData.inspectionFrequency}
                    onChange={(e) => handleInputChange("inspectionFrequency", e.target.value)}
                    className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 transition-all text-slate-900 dark:text-white"
                  >
                    <option value="">Select Frequency</option>
                    <option value="100% Inspection">100% Inspection</option>
                    <option value="Sample-based">Sample-based</option>
                    <option value="First Article">First Article</option>
                    <option value="In-process">In-process</option>
                    <option value="Final Only">Final Only</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                    Need Non-Conformance Reporting (NCR)? *
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="needNCRManagement"
                        value="yes"
                        checked={formData.needNCRManagement === "yes"}
                        onChange={(e) => handleInputChange("needNCRManagement", e.target.value)}
                        className="w-4 h-4 text-orange-600 focus:ring-orange-500"
                      />
                      <span className="text-slate-700 dark:text-slate-300">Yes</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="needNCRManagement"
                        value="no"
                        checked={formData.needNCRManagement === "no"}
                        onChange={(e) => handleInputChange("needNCRManagement", e.target.value)}
                        className="w-4 h-4 text-orange-600 focus:ring-orange-500"
                      />
                      <span className="text-slate-700 dark:text-slate-300">No</span>
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Quality Metrics to Track (Select all that apply)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    "Defect Rate",
                    "First Pass Yield",
                    "Cpk/Ppk",
                    "DPMO",
                    "Rework Rate",
                    "Scrap Rate",
                    "Customer Complaints",
                    "Supplier Quality",
                  ].map((metric) => (
                    <label
                      key={metric}
                      className="flex items-center gap-2 cursor-pointer p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={formData.qualityMetrics.includes(metric)}
                        onChange={() => handleCheckboxChange("qualityMetrics", metric)}
                        className="w-4 h-4 text-orange-600 focus:ring-orange-500 rounded"
                      />
                      <span className="text-sm text-slate-700 dark:text-slate-300">{metric}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 5. Inventory & Warehouse */}
          <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl text-white">
                <Package className="w-6 h-6" />
              </div>
              <h3 className="text-2xl text-orange-900 dark:text-orange-100">
                Inventory & Warehouse Management
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Number of Inventory Items (SKUs) *
                </label>
                <input
                  type="number"
                  required
                  min="1"
                  value={formData.inventoryItems}
                  onChange={(e) => handleInputChange("inventoryItems", e.target.value)}
                  className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 transition-all text-slate-900 dark:text-white"
                  placeholder="Total SKUs"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Number of Warehouse Locations *
                </label>
                <input
                  type="number"
                  required
                  min="1"
                  value={formData.warehouseLocations}
                  onChange={(e) => handleInputChange("warehouseLocations", e.target.value)}
                  className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 transition-all text-slate-900 dark:text-white"
                  placeholder="Warehouse count"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Need Warehouse Management System (WMS)? *
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="needWMS"
                      value="yes"
                      checked={formData.needWMS === "yes"}
                      onChange={(e) => handleInputChange("needWMS", e.target.value)}
                      className="w-4 h-4 text-orange-600 focus:ring-orange-500"
                    />
                    <span className="text-slate-700 dark:text-slate-300">Yes</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="needWMS"
                      value="no"
                      checked={formData.needWMS === "no"}
                      onChange={(e) => handleInputChange("needWMS", e.target.value)}
                      className="w-4 h-4 text-orange-600 focus:ring-orange-500"
                    />
                    <span className="text-slate-700 dark:text-slate-300">No</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Need Barcode/RFID Tracking? *
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="needBarcodeRFID"
                      value="yes"
                      checked={formData.needBarcodeRFID === "yes"}
                      onChange={(e) => handleInputChange("needBarcodeRFID", e.target.value)}
                      className="w-4 h-4 text-orange-600 focus:ring-orange-500"
                    />
                    <span className="text-slate-700 dark:text-slate-300">Yes</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="needBarcodeRFID"
                      value="no"
                      checked={formData.needBarcodeRFID === "no"}
                      onChange={(e) => handleInputChange("needBarcodeRFID", e.target.value)}
                      className="w-4 h-4 text-orange-600 focus:ring-orange-500"
                    />
                    <span className="text-slate-700 dark:text-slate-300">No</span>
                  </label>
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Inventory Control Methods (Select all that apply)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    "FIFO",
                    "LIFO",
                    "ABC Analysis",
                    "JIT",
                    "Safety Stock",
                    "Reorder Point",
                    "Cycle Counting",
                    "Min/Max",
                  ].map((method) => (
                    <label
                      key={method}
                      className="flex items-center gap-2 cursor-pointer p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={formData.inventoryMethods.includes(method)}
                        onChange={() => handleCheckboxChange("inventoryMethods", method)}
                        className="w-4 h-4 text-orange-600 focus:ring-orange-500 rounded"
                      />
                      <span className="text-sm text-slate-700 dark:text-slate-300">{method}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 6. Supply Chain Management */}
          <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl text-white">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl text-orange-900 dark:text-orange-100">
                Supply Chain Management
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Number of Active Suppliers *
                </label>
                <input
                  type="number"
                  required
                  min="1"
                  value={formData.numberOfSuppliers}
                  onChange={(e) => handleInputChange("numberOfSuppliers", e.target.value)}
                  className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 transition-all text-slate-900 dark:text-white"
                  placeholder="Total suppliers"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Need Supply Chain Management (SCM)? *
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="needSCM"
                      value="yes"
                      checked={formData.needSCM === "yes"}
                      onChange={(e) => handleInputChange("needSCM", e.target.value)}
                      className="w-4 h-4 text-orange-600 focus:ring-orange-500"
                    />
                    <span className="text-slate-700 dark:text-slate-300">Yes</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="needSCM"
                      value="no"
                      checked={formData.needSCM === "no"}
                      onChange={(e) => handleInputChange("needSCM", e.target.value)}
                      className="w-4 h-4 text-orange-600 focus:ring-orange-500"
                    />
                    <span className="text-slate-700 dark:text-slate-300">No</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Procurement Process
                </label>
                <select
                  value={formData.procurementProcess}
                  onChange={(e) => handleInputChange("procurementProcess", e.target.value)}
                  className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 transition-all text-slate-900 dark:text-white"
                >
                  <option value="">Select Process</option>
                  <option value="Manual POs">Manual POs</option>
                  <option value="Automated Purchasing">Automated Purchasing</option>
                  <option value="Vendor Managed Inventory">Vendor Managed Inventory</option>
                  <option value="Consignment">Consignment</option>
                  <option value="Blanket Orders">Blanket Orders</option>
                </select>
              </div>

              <div>
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Need Vendor Portal? *
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="needVendorPortal"
                      value="yes"
                      checked={formData.needVendorPortal === "yes"}
                      onChange={(e) => handleInputChange("needVendorPortal", e.target.value)}
                      className="w-4 h-4 text-orange-600 focus:ring-orange-500"
                    />
                    <span className="text-slate-700 dark:text-slate-300">Yes</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="needVendorPortal"
                      value="no"
                      checked={formData.needVendorPortal === "no"}
                      onChange={(e) => handleInputChange("needVendorPortal", e.target.value)}
                      className="w-4 h-4 text-orange-600 focus:ring-orange-500"
                    />
                    <span className="text-slate-700 dark:text-slate-300">No</span>
                  </label>
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Supplier Management Features (Select all that apply)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    "Supplier Evaluation",
                    "Performance Scorecards",
                    "Quality Rating",
                    "Delivery Tracking",
                    "Price Comparison",
                    "Contract Management",
                    "Risk Assessment",
                    "Compliance Checks",
                  ].map((feature) => (
                    <label
                      key={feature}
                      className="flex items-center gap-2 cursor-pointer p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={formData.supplierManagement.includes(feature)}
                        onChange={() => handleCheckboxChange("supplierManagement", feature)}
                        className="w-4 h-4 text-orange-600 focus:ring-orange-500 rounded"
                      />
                      <span className="text-sm text-slate-700 dark:text-slate-300">{feature}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 7. Maintenance Management */}
          <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl text-white">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="text-2xl text-orange-900 dark:text-orange-100">
                Maintenance Management
              </h3>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Maintenance Types (Select all that apply)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    "Preventive",
                    "Predictive",
                    "Corrective",
                    "Breakdown",
                    "Condition-based",
                    "Time-based",
                    "Usage-based",
                    "Reliability-centered",
                  ].map((type) => (
                    <label
                      key={type}
                      className="flex items-center gap-2 cursor-pointer p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={formData.maintenanceType.includes(type)}
                        onChange={() => handleCheckboxChange("maintenanceType", type)}
                        className="w-4 h-4 text-orange-600 focus:ring-orange-500 rounded"
                      />
                      <span className="text-sm text-slate-700 dark:text-slate-300">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                    Need CMMS/PM System? *
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="needCMMSPM"
                        value="yes"
                        checked={formData.needCMMSPM === "yes"}
                        onChange={(e) => handleInputChange("needCMMSPM", e.target.value)}
                        className="w-4 h-4 text-orange-600 focus:ring-orange-500"
                      />
                      <span className="text-slate-700 dark:text-slate-300">Yes</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="needCMMSPM"
                        value="no"
                        checked={formData.needCMMSPM === "no"}
                        onChange={(e) => handleInputChange("needCMMSPM", e.target.value)}
                        className="w-4 h-4 text-orange-600 focus:ring-orange-500"
                      />
                      <span className="text-slate-700 dark:text-slate-300">No</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                    Number of Equipment/Assets *
                  </label>
                  <input
                    type="number"
                    required
                    min="1"
                    value={formData.equipmentCount}
                    onChange={(e) => handleInputChange("equipmentCount", e.target.value)}
                    className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 transition-all text-slate-900 dark:text-white"
                    placeholder="Total equipment"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                    Track Downtime? *
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="downtimeTracking"
                        value="yes"
                        checked={formData.downtimeTracking === "yes"}
                        onChange={(e) => handleInputChange("downtimeTracking", e.target.value)}
                        className="w-4 h-4 text-orange-600 focus:ring-orange-500"
                      />
                      <span className="text-slate-700 dark:text-slate-300">Yes</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="downtimeTracking"
                        value="no"
                        checked={formData.downtimeTracking === "no"}
                        onChange={(e) => handleInputChange("downtimeTracking", e.target.value)}
                        className="w-4 h-4 text-orange-600 focus:ring-orange-500"
                      />
                      <span className="text-slate-700 dark:text-slate-300">No</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                    Maintenance Scheduling
                  </label>
                  <select
                    value={formData.maintenanceScheduling}
                    onChange={(e) => handleInputChange("maintenanceScheduling", e.target.value)}
                    className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 transition-all text-slate-900 dark:text-white"
                  >
                    <option value="">Select Type</option>
                    <option value="Calendar-based">Calendar-based</option>
                    <option value="Usage-based">Usage-based</option>
                    <option value="Condition-based">Condition-based</option>
                    <option value="Hybrid">Hybrid</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* 8. Safety & Compliance */}
          <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl text-white">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-2xl text-orange-900 dark:text-orange-100">Safety & Compliance</h3>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Safety Standards (Select all that apply)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    "OSHA",
                    "ISO 45001",
                    "ANSI",
                    "NFPA",
                    "Local Safety Regulations",
                    "Industry-specific",
                    "Environmental",
                    "Other",
                  ].map((standard) => (
                    <label
                      key={standard}
                      className="flex items-center gap-2 cursor-pointer p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={formData.safetyStandards.includes(standard)}
                        onChange={() => handleCheckboxChange("safetyStandards", standard)}
                        className="w-4 h-4 text-orange-600 focus:ring-orange-500 rounded"
                      />
                      <span className="text-sm text-slate-700 dark:text-slate-300">{standard}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                    Need Incident Management? *
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="needIncidentManagement"
                        value="yes"
                        checked={formData.needIncidentManagement === "yes"}
                        onChange={(e) =>
                          handleInputChange("needIncidentManagement", e.target.value)
                        }
                        className="w-4 h-4 text-orange-600 focus:ring-orange-500"
                      />
                      <span className="text-slate-700 dark:text-slate-300">Yes</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="needIncidentManagement"
                        value="no"
                        checked={formData.needIncidentManagement === "no"}
                        onChange={(e) =>
                          handleInputChange("needIncidentManagement", e.target.value)
                        }
                        className="w-4 h-4 text-orange-600 focus:ring-orange-500"
                      />
                      <span className="text-slate-700 dark:text-slate-300">No</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                    Need Audit Management? *
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="needAuditManagement"
                        value="yes"
                        checked={formData.needAuditManagement === "yes"}
                        onChange={(e) => handleInputChange("needAuditManagement", e.target.value)}
                        className="w-4 h-4 text-orange-600 focus:ring-orange-500"
                      />
                      <span className="text-slate-700 dark:text-slate-300">Yes</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="needAuditManagement"
                        value="no"
                        checked={formData.needAuditManagement === "no"}
                        onChange={(e) => handleInputChange("needAuditManagement", e.target.value)}
                        className="w-4 h-4 text-orange-600 focus:ring-orange-500"
                      />
                      <span className="text-slate-700 dark:text-slate-300">No</span>
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Compliance Requirements (Select all that apply)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    "Environmental",
                    "Labor Laws",
                    "Export/Import",
                    "Product Safety",
                    "Data Protection",
                    "Industry Regulations",
                    "Hazardous Materials",
                    "Other",
                  ].map((req) => (
                    <label
                      key={req}
                      className="flex items-center gap-2 cursor-pointer p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={formData.complianceRequirements.includes(req)}
                        onChange={() => handleCheckboxChange("complianceRequirements", req)}
                        className="w-4 h-4 text-orange-600 focus:ring-orange-500 rounded"
                      />
                      <span className="text-sm text-slate-700 dark:text-slate-300">{req}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 9. Analytics & Reporting */}
          <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl text-white">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl text-orange-900 dark:text-orange-100">
                Analytics & Reporting
              </h3>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  KPIs to Track (Select all that apply)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    "OEE",
                    "Cycle Time",
                    "Throughput",
                    "Yield",
                    "Quality Rate",
                    "Downtime",
                    "MTBF",
                    "MTTR",
                    "Inventory Turnover",
                    "On-time Delivery",
                    "Cost per Unit",
                    "Labor Efficiency",
                  ].map((kpi) => (
                    <label
                      key={kpi}
                      className="flex items-center gap-2 cursor-pointer p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={formData.kpiTracking.includes(kpi)}
                        onChange={() => handleCheckboxChange("kpiTracking", kpi)}
                        className="w-4 h-4 text-orange-600 focus:ring-orange-500 rounded"
                      />
                      <span className="text-sm text-slate-700 dark:text-slate-300">{kpi}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                    Need OEE Tracking? *
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="needOEETracking"
                        value="yes"
                        checked={formData.needOEETracking === "yes"}
                        onChange={(e) => handleInputChange("needOEETracking", e.target.value)}
                        className="w-4 h-4 text-orange-600 focus:ring-orange-500"
                      />
                      <span className="text-slate-700 dark:text-slate-300">Yes</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="needOEETracking"
                        value="no"
                        checked={formData.needOEETracking === "no"}
                        onChange={(e) => handleInputChange("needOEETracking", e.target.value)}
                        className="w-4 h-4 text-orange-600 focus:ring-orange-500"
                      />
                      <span className="text-slate-700 dark:text-slate-300">No</span>
                    </label>
                  </div>
                </div>

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
                        className="w-4 h-4 text-orange-600 focus:ring-orange-500"
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
                        className="w-4 h-4 text-orange-600 focus:ring-orange-500"
                      />
                      <span className="text-slate-700 dark:text-slate-300">No</span>
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Reporting Needs (Select all that apply)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    "Production Reports",
                    "Quality Reports",
                    "Maintenance Reports",
                    "Inventory Reports",
                    "Cost Analysis",
                    "Performance Dashboards",
                    "Regulatory Reports",
                    "Custom Reports",
                  ].map((report) => (
                    <label
                      key={report}
                      className="flex items-center gap-2 cursor-pointer p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={formData.reportingNeeds.includes(report)}
                        onChange={() => handleCheckboxChange("reportingNeeds", report)}
                        className="w-4 h-4 text-orange-600 focus:ring-orange-500 rounded"
                      />
                      <span className="text-sm text-slate-700 dark:text-slate-300">{report}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 10. Integration & Budget */}
          <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl text-white">
                <Cog className="w-6 h-6" />
              </div>
              <h3 className="text-2xl text-orange-900 dark:text-orange-100">
                Integration & Budget
              </h3>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Current Systems in Use (Select all that apply)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    "ERP System",
                    "CAD/CAM",
                    "PLM",
                    "SCM",
                    "Excel/Spreadsheets",
                    "Legacy Systems",
                    "MES",
                    "None",
                  ].map((system) => (
                    <label
                      key={system}
                      className="flex items-center gap-2 cursor-pointer p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={formData.currentSystems.includes(system)}
                        onChange={() => handleCheckboxChange("currentSystems", system)}
                        className="w-4 h-4 text-orange-600 focus:ring-orange-500 rounded"
                      />
                      <span className="text-sm text-slate-700 dark:text-slate-300">{system}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Integration Requirements (Select all that apply)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    "ERP Integration",
                    "IoT Devices",
                    "PLC/SCADA",
                    "Accounting Software",
                    "Email Systems",
                    "API Integration",
                    "Database Integration",
                    "Cloud Services",
                  ].map((integration) => (
                    <label
                      key={integration}
                      className="flex items-center gap-2 cursor-pointer p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={formData.integrationNeeds.includes(integration)}
                        onChange={() => handleCheckboxChange("integrationNeeds", integration)}
                        className="w-4 h-4 text-orange-600 focus:ring-orange-500 rounded"
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
                    Estimated Monthly Budget Range
                  </label>
                  <select
                    value={formData.monthlyBudget}
                    onChange={(e) => handleInputChange("monthlyBudget", e.target.value)}
                    className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 transition-all text-slate-900 dark:text-white"
                  >
                    <option value="">Select Range</option>
                    <option value="Less than $1,000">&lt; $1,000</option>
                    <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                    <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                    <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                    <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                    <option value="More than $50,000">&gt; $50,000</option>
                    <option value="To be discussed">To be discussed</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                    Preferred Implementation Timeline
                  </label>
                  <select
                    value={formData.implementationTimeline}
                    onChange={(e) => handleInputChange("implementationTimeline", e.target.value)}
                    className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 transition-all text-slate-900 dark:text-white"
                  >
                    <option value="">Select Timeline</option>
                    <option value="Immediate (1-3 months)">Immediate (1-3 months)</option>
                    <option value="Short-term (3-6 months)">Short-term (3-6 months)</option>
                    <option value="Medium-term (6-12 months)">Medium-term (6-12 months)</option>
                    <option value="Long-term (12+ months)">Long-term (12+ months)</option>
                    <option value="Planning phase">Planning phase</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* 11. Additional Information */}
          <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl text-white">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-2xl text-orange-900 dark:text-orange-100">
                Additional Information
              </h3>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Current Challenges & Pain Points
                </label>
                <textarea
                  value={formData.currentChallenges}
                  onChange={(e) => handleInputChange("currentChallenges", e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 transition-all text-slate-900 dark:text-white resize-none"
                  placeholder="Describe your current operational challenges, bottlenecks, or areas for improvement..."
                ></textarea>
              </div>

              <div>
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Specific Requirements or Customizations
                </label>
                <textarea
                  value={formData.specificRequirements}
                  onChange={(e) => handleInputChange("specificRequirements", e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 transition-all text-slate-900 dark:text-white resize-none"
                  placeholder="Any specific features, customizations, or unique requirements for your industry..."
                ></textarea>
              </div>

              <div>
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Additional Notes or Comments
                </label>
                <textarea
                  value={formData.additionalNotes}
                  onChange={(e) => handleInputChange("additionalNotes", e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 transition-all text-slate-900 dark:text-white resize-none"
                  placeholder="Any other information you'd like to share..."
                ></textarea>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-8">
            <button
              type="submit"
              className="px-12 py-4 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Submit Industrial Management Assessment
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

export default IndustrialPage;
