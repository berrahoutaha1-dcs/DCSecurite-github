import { SecurityAssessment } from "./SecurityAssessment";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes";

export function SecurityTestPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0A1929] to-black">
      {/* Hero Section */}
      <section className="relative pt-56 pb-16 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 20px)`,
            }}
          ></div>
        </div>

        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl text-white mb-6"
              style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 700 }}
            >
              Company Security Assessment
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Take our comprehensive security assessment to understand your company's cybersecurity
              posture and receive personalized recommendations from our experts.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-4">
                <div className="text-2xl md:text-3xl text-cyan-400 mb-1">10</div>
                <div className="text-sm text-white/60">Questions</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-4">
                <div className="text-2xl md:text-3xl text-cyan-400 mb-1">5 min</div>
                <div className="text-sm text-white/60">Duration</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-4">
                <div className="text-2xl md:text-3xl text-cyan-400 mb-1">Free</div>
                <div className="text-sm text-white/60">No Cost</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Section - Auto Expanded */}
      <SecurityAssessment autoExpand={true} />
    </div>
  );
}
