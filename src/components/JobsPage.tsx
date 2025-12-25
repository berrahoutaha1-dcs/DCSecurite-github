import { motion } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  Calendar,
  Building2,
  GraduationCap,
  Search,
} from "lucide-react";
import { CTFHeader } from "./CTFHeader";
import { useState } from "react";
import { toast } from "sonner@2.0.3";

interface JobsPageProps {
  theme?: "light" | "dark";
  onNavigateToHome?: () => void;
  onNavigateToCompetitions?: () => void;
  onNavigateToMainSite?: () => void;
}

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  hours: string;
  salary: string;
  posted: string;
  level: string;
  requirements: string[];
}

const jobsData: Job[] = [
  {
    id: 1,
    title: "Junior Security Analyst",
    company: "CyberShield Inc.",
    location: "On-site - Oran, Algeria",
    type: "Part-Time",
    hours: "20 hrs/week",
    salary: "$25-35/hr",
    posted: "15/11/2025",
    level: "Entry Level",
    requirements: ["Basic networking knowledge", "Python/Bash scripting", "CTF experience"],
  },
  {
    id: 2,
    title: "Penetration Tester Intern",
    company: "SecureNet Labs",
    location: "On-site - Oran, Algeria",
    type: "Part-Time",
    hours: "15-20 hrs/week",
    salary: "$20-30/hr",
    posted: "28/10/2025",
    level: "Student/Intern",
    requirements: ["Web security basics", "Burp Suite", "OWASP Top 10"],
  },
  {
    id: 3,
    title: "SOC Analyst (Night Shift)",
    company: "DataDefense Pro",
    location: "On-site - Oran, Algeria",
    type: "Part-Time",
    hours: "24 hrs/week",
    salary: "$30-40/hr",
    posted: "05/12/2025",
    level: "Entry Level",
    requirements: ["SIEM tools", "Log analysis", "Incident response"],
  },
  {
    id: 4,
    title: "Malware Analysis Assistant",
    company: "ThreatHunters Co.",
    location: "On-site - Oran, Algeria",
    type: "Part-Time",
    hours: "10-15 hrs/week",
    salary: "$28-38/hr",
    posted: "22/11/2025",
    level: "Intermediate",
    requirements: ["Reverse engineering", "IDA Pro/Ghidra", "Assembly knowledge"],
  },
  {
    id: 5,
    title: "Network Security Monitor",
    company: "CloudGuard Systems",
    location: "On-site - Oran, Algeria",
    type: "Part-Time",
    hours: "20 hrs/week",
    salary: "$22-32/hr",
    posted: "12/10/2025",
    level: "Entry Level",
    requirements: ["Wireshark", "TCP/IP protocols", "Firewall configuration"],
  },
  {
    id: 6,
    title: "Security Researcher",
    company: "BugBounty Labs",
    location: "On-site - Oran, Algeria",
    type: "Part-Time",
    hours: "Flexible",
    salary: "$35-50/hr",
    posted: "01/12/2025",
    level: "Intermediate",
    requirements: ["Vulnerability research", "Bug bounty experience", "Report writing"],
  },
  {
    id: 7,
    title: "CTF Challenge Developer",
    company: "HackTheBox France",
    location: "On-site - Oran, Algeria",
    type: "Part-Time",
    hours: "10-20 hrs/week",
    salary: "$30-45/hr",
    posted: "18/10/2025",
    level: "Intermediate",
    requirements: ["CTF competition experience", "Challenge creation", "Multiple domains"],
  },
  {
    id: 8,
    title: "Security Awareness Trainer",
    company: "EduSec Academy",
    location: "On-site - Oran, Algeria",
    type: "Part-Time",
    hours: "12 hrs/week",
    salary: "$25-35/hr",
    posted: "09/11/2025",
    level: "Entry Level",
    requirements: ["Public speaking", "Security fundamentals", "Training experience"],
  },
];

export const JobsPage = ({
  theme = "dark",
  onNavigateToHome,
  onNavigateToCompetitions,
  onNavigateToMainSite,
}: JobsPageProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("All");

  const filteredJobs = jobsData.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = selectedLevel === "All" || job.level === selectedLevel;
    return matchesSearch && matchesLevel;
  });

  const handleApply = (jobTitle: string) => {
    toast.success("Application Instructions", {
      description: `Please send your CV and cover letter to Jobs@dcsecurite.com. One of our representatives will contact you soon.`,
      duration: 8000,
      style: {
        background: "#10b981",
        color: "#000",
        border: "1px solid #059669",
      },
    });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* CTF Header */}
      <CTFHeader
        onNavigateToHome={onNavigateToHome}
        onNavigateToCompetitions={onNavigateToCompetitions}
        onNavigateToMainSite={onNavigateToMainSite}
        currentPage="jobs"
      />

      {/* Subtle Background Gradient */}
      <div className="fixed inset-0 bg-gradient-to-b from-green-500/5 via-transparent to-green-500/5 pointer-events-none" />

      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center px-4 pt-32 pb-12">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl mb-6">
              <span className="block text-green-500">Part-Time Jobs</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Find cybersecurity opportunities that fit your schedule
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="px-4 pb-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-white/5 border border-white/10 rounded-xl p-6"
          >
            {/* Search */}
            <div className="relative flex-1 w-full sm:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-black/50 border border-white/10 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
              />
            </div>

            {/* Level Filter */}
            <div className="flex gap-2">
              {["All", "Entry Level", "Student/Intern", "Intermediate"].map((level) => (
                <button
                  key={level}
                  onClick={() => setSelectedLevel(level)}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    selectedLevel === level
                      ? "bg-green-500 text-black"
                      : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Jobs Table Section */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/5 border border-white/10 rounded-xl overflow-hidden"
          >
            {/* Table Header */}
            <div className="bg-white/5 border-b border-white/10 px-6 py-4">
              <h2 className="text-2xl flex items-center gap-3">
                <Briefcase className="w-6 h-6 text-green-500" />
                Available Positions ({filteredJobs.length})
              </h2>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th
                      className="px-6 py-4 text-left text-sm text-gray-400"
                      style={{ fontWeight: "500" }}
                    >
                      Position
                    </th>
                    <th
                      className="px-6 py-4 text-left text-sm text-gray-400"
                      style={{ fontWeight: "500" }}
                    >
                      Company
                    </th>
                    <th
                      className="px-6 py-4 text-left text-sm text-gray-400"
                      style={{ fontWeight: "500" }}
                    >
                      Location
                    </th>
                    <th
                      className="px-6 py-4 text-left text-sm text-gray-400"
                      style={{ fontWeight: "500" }}
                    >
                      Hours
                    </th>
                    <th
                      className="px-6 py-4 text-left text-sm text-gray-400"
                      style={{ fontWeight: "500" }}
                    >
                      Salary
                    </th>
                    <th
                      className="px-6 py-4 text-left text-sm text-gray-400"
                      style={{ fontWeight: "500" }}
                    >
                      Level
                    </th>
                    <th
                      className="px-6 py-4 text-left text-sm text-gray-400"
                      style={{ fontWeight: "500" }}
                    >
                      Posted
                    </th>
                    <th
                      className="px-6 py-4 text-center text-sm text-gray-400"
                      style={{ fontWeight: "500" }}
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredJobs.map((job, index) => (
                    <motion.tr
                      key={job.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="border-b border-white/5 hover:bg-white/5 transition-colors group"
                    >
                      <td className="px-6 py-4">
                        <div className="flex flex-col gap-1">
                          <span className="text-white group-hover:text-green-400 transition-colors">
                            {job.title}
                          </span>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {job.requirements.slice(0, 2).map((req, i) => (
                              <span
                                key={i}
                                className="text-xs px-2 py-0.5 bg-green-500/10 text-green-400 rounded border border-green-500/20"
                              >
                                {req}
                              </span>
                            ))}
                            {job.requirements.length > 2 && (
                              <span className="text-xs text-gray-500">
                                +{job.requirements.length - 2} more
                              </span>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Building2 className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-300">{job.company}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-300">{job.location}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-300">{job.hours}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-green-400" />
                          <span className="text-green-400" style={{ fontWeight: "500" }}>
                            {job.salary}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <GraduationCap className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-300 text-sm">{job.level}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-400 text-sm">{job.posted}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button
                          onClick={() => handleApply(job.title)}
                          className="px-4 py-2 bg-green-500/10 text-green-400 border border-green-500/30 rounded-lg hover:bg-green-500 hover:text-black transition-all text-sm"
                        >
                          Apply
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* No Results */}
            {filteredJobs.length === 0 && (
              <div className="px-6 py-16 text-center">
                <Briefcase className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400">No jobs found matching your criteria</p>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};
