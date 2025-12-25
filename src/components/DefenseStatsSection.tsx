import { Cloud, Car, Shield } from "lucide-react";

export function DefenseStatsSection() {

  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-slate-100 dark:bg-[#0a0a0a] transition-colors">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-6xl mb-4">
              <span className="text-[#0D6EFF]">So you can defend at </span>
              <span className="text-slate-900 dark:text-white">speed and scale.</span>
            </h2>
            <div className="flex items-center gap-2 text-slate-600 dark:text-white/60 text-sm">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                <path strokeWidth="2" d="M12 6v6l4 2" />
              </svg>
              <span>Statistics for the year 2024/2025</span>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1 - Cloud Events */}
            <div className="group relative bg-gradient-to-br from-[#0a0a1a] to-[#050510] dark:from-[#0a0a1a] dark:to-[#050510] border border-[#0D6EFF]/20 rounded-2xl p-8 overflow-hidden hover:border-[#0D6EFF]/40 transition-all duration-300">
              {/* Circuit pattern background */}
              <div className="absolute inset-0 opacity-10">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `
                    linear-gradient(#0D6EFF 1px, transparent 1px),
                    linear-gradient(90deg, #0D6EFF 1px, transparent 1px)
                  `,
                    backgroundSize: "30px 30px",
                  }}
                ></div>
              </div>

              {/* Icons */}
              <div className="relative mb-16">
                <div className="absolute top-0 left-0">
                  <Cloud className="w-12 h-12 text-[#0D6EFF] stroke-[1.5]" />
                </div>
                <div className="absolute top-8 right-8">
                  <Car className="w-10 h-10 text-[#0D6EFF] stroke-[1.5]" />
                </div>
                <div className="absolute top-0 right-0">
                  <Shield className="w-8 h-8 text-[#0D6EFF] stroke-[1.5]" />
                </div>
                {/* Connecting lines */}
                <svg className="absolute inset-0 w-full h-full" style={{ overflow: "visible" }}>
                  <line
                    x1="50"
                    y1="25"
                    x2="200"
                    y2="25"
                    stroke="#0D6EFF"
                    strokeWidth="2"
                    opacity="0.5"
                  />
                  <line
                    x1="200"
                    y1="25"
                    x2="200"
                    y2="80"
                    stroke="#0D6EFF"
                    strokeWidth="2"
                    opacity="0.5"
                  />
                </svg>
              </div>

              <div className="relative">
                <div className="text-4xl md:text-5xl font-bold text-[#0D6EFF] mb-2">1M</div>
                <div className="text-white text-sm md:text-base font-semibold">
                  Cloud Events Processed
                </div>
              </div>
            </div>

            {/* Card 2 - Exploits Detected */}
            <div className="group relative bg-gradient-to-br from-[#0a0a1a] to-[#050510] dark:from-[#0a0a1a] dark:to-[#050510] border border-[#0D6EFF]/20 rounded-2xl p-8 overflow-hidden hover:border-[#0D6EFF]/40 transition-all duration-300">
              <div className="relative">
                <div className="mb-6">
                  <div className="inline-block px-3 py-1 bg-[#0D6EFF]/10 border border-[#0D6EFF]/30 rounded text-[#0D6EFF] text-xs uppercase tracking-wider mb-4">
                    Exploits Detected
                  </div>

                  <div className="space-y-3">
                    {[
                      { name: "Heartbleed", desc: "Buffer over-read vulnerability" },
                      { name: "Spectre and Meltdown", desc: "Hardware based vulnerabilities" },
                      { name: "EternalBlue", desc: "Code execution vulnerability" },
                      { name: "Zerologon", desc: "Privilege escalation vulnerability" },
                    ].map((exploit, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm">
                        <div>
                          <div className="text-[#0D6EFF] font-semibold">{exploit.name}</div>
                          <div className="text-white/50 text-xs">{exploit.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <div className="text-4xl md:text-5xl font-bold text-[#0D6EFF] mb-2">1.3K</div>
                  <div className="text-white text-sm md:text-base font-semibold">
                    Exploit Attempts Detected
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 - Malware Executions Blocked */}
            <div className="group relative bg-gradient-to-br from-[#0a0a1a] to-[#050510] dark:from-[#0a0a1a] dark:to-[#050510] border border-[#0D6EFF]/20 rounded-2xl p-8 overflow-hidden hover:border-[#0D6EFF]/40 transition-all duration-300">
              {/* Graph visualization */}
              <div className="relative mb-8 h-32">
                <svg className="w-full h-full" viewBox="0 0 300 120">
                  {/* Vertical bars */}
                  <line
                    x1="50"
                    y1="20"
                    x2="50"
                    y2="90"
                    stroke="#0D6EFF"
                    strokeWidth="2"
                    opacity="0.3"
                  />
                  <line
                    x1="100"
                    y1="20"
                    x2="100"
                    y2="70"
                    stroke="#0D6EFF"
                    strokeWidth="2"
                    opacity="0.5"
                  />
                  <line
                    x1="150"
                    y1="20"
                    x2="150"
                    y2="85"
                    stroke="#0D6EFF"
                    strokeWidth="2"
                    opacity="0.3"
                  />
                  <line
                    x1="200"
                    y1="20"
                    x2="200"
                    y2="65"
                    stroke="#0D6EFF"
                    strokeWidth="2"
                    opacity="0.6"
                  />
                  <line
                    x1="250"
                    y1="20"
                    x2="250"
                    y2="80"
                    stroke="#0D6EFF"
                    strokeWidth="2"
                    opacity="0.4"
                  />

                  {/* Horizontal dashed line */}
                  <line
                    x1="0"
                    y1="75"
                    x2="300"
                    y2="75"
                    stroke="#0D6EFF"
                    strokeWidth="1"
                    strokeDasharray="5,5"
                    opacity="0.3"
                  />

                  {/* Nodes */}
                  <circle cx="50" cy="90" r="8" fill="#0D6EFF" opacity="0.8" />
                  <circle cx="100" cy="70" r="8" fill="#0D6EFF" />
                  <circle cx="150" cy="85" r="8" fill="#0D6EFF" opacity="0.8" />
                  <circle cx="200" cy="65" r="8" fill="#0D6EFF" />
                  <circle cx="250" cy="80" r="8" fill="#0D6EFF" opacity="0.9" />

                  {/* Icons in nodes */}
                  <circle cx="100" cy="70" r="6" fill="#050510" />
                  <circle cx="200" cy="65" r="6" fill="#050510" />
                </svg>
              </div>

              <div className="relative">
                <div className="text-4xl md:text-5xl font-bold text-[#0D6EFF] mb-2">90K</div>
                <div className="text-white text-sm md:text-base font-semibold">
                  Malware Executions Blocked
                </div>
              </div>
            </div>

            {/* Card 4 - Unique Objects Analyzed */}
            <div className="group relative bg-gradient-to-br from-[#0a0a1a] to-[#050510] dark:from-[#0a0a1a] dark:to-[#050510] border border-[#0D6EFF]/20 rounded-2xl p-8 overflow-hidden hover:border-[#0D6EFF]/40 transition-all duration-300">
              {/* Wave visualization */}
              <div className="relative mb-8 h-32">
                <svg className="w-full h-full" viewBox="0 0 300 120" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#0D6EFF" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#0D6EFF" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>

                  {/* Layered waves */}
                  <path
                    d="M0,80 Q75,40 150,60 T300,50 L300,120 L0,120 Z"
                    fill="url(#waveGradient)"
                    opacity="0.3"
                  />
                  <path
                    d="M0,90 Q75,50 150,70 T300,60 L300,120 L0,120 Z"
                    fill="url(#waveGradient)"
                    opacity="0.5"
                  />
                  <path
                    d="M0,100 Q75,60 150,80 T300,70 L300,120 L0,120 Z"
                    fill="url(#waveGradient)"
                    opacity="0.7"
                  />

                  {/* Wave lines */}
                  <path
                    d="M0,60 Q75,20 150,40 T300,30"
                    stroke="#0D6EFF"
                    strokeWidth="1.5"
                    fill="none"
                    opacity="0.6"
                  />
                  <path
                    d="M0,70 Q75,30 150,50 T300,40"
                    stroke="#0D6EFF"
                    strokeWidth="1.5"
                    fill="none"
                    opacity="0.8"
                  />
                  <path
                    d="M0,80 Q75,40 150,60 T300,50"
                    stroke="#0D6EFF"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </div>

              <div className="relative">
                <div className="text-4xl md:text-5xl font-bold text-[#0D6EFF] mb-2">200K</div>
                <div className="text-white text-sm md:text-base font-semibold">
                  New Unique Objects Analysed
                </div>
              </div>
            </div>

            {/* Card 5 - Malicious Attack Objects */}
            <div className="group relative bg-gradient-to-br from-[#0a0a1a] to-[#050510] dark:from-[#0a0a1a] dark:to-[#050510] border border-[#0D6EFF]/20 rounded-2xl p-8 overflow-hidden hover:border-[#0D6EFF]/40 transition-all duration-300">
              {/* Circuit maze pattern */}
              <div className="relative mb-8 h-32 flex items-center justify-center">
                <svg className="w-40 h-40" viewBox="0 0 200 200">
                  {/* Outer frame */}
                  <rect
                    x="20"
                    y="20"
                    width="160"
                    height="160"
                    fill="none"
                    stroke="#0D6EFF"
                    strokeWidth="2"
                    opacity="0.3"
                  />

                  {/* Circuit paths */}
                  <path
                    d="M100,20 L100,50 L70,50 L70,80 L100,80"
                    stroke="#0D6EFF"
                    strokeWidth="3"
                    fill="none"
                  />
                  <path
                    d="M100,80 L130,80 L130,50 L160,50"
                    stroke="#0D6EFF"
                    strokeWidth="3"
                    fill="none"
                  />
                  <path
                    d="M100,80 L100,120 L70,120 L70,150 L100,150"
                    stroke="#0D6EFF"
                    strokeWidth="3"
                    fill="none"
                  />
                  <path
                    d="M100,120 L130,120 L130,150 L160,150"
                    stroke="#0D6EFF"
                    strokeWidth="3"
                    fill="none"
                  />

                  {/* Nodes */}
                  <circle cx="100" cy="50" r="4" fill="#0D6EFF" />
                  <circle cx="100" cy="80" r="6" fill="#0D6EFF" />
                  <circle cx="100" cy="120" r="4" fill="#0D6EFF" />
                  <circle cx="70" cy="80" r="3" fill="#0D6EFF" opacity="0.6" />
                  <circle cx="130" cy="80" r="3" fill="#0D6EFF" opacity="0.6" />
                  <circle cx="70" cy="120" r="3" fill="#0D6EFF" opacity="0.6" />
                  <circle cx="130" cy="120" r="3" fill="#0D6EFF" opacity="0.6" />

                  {/* Corner markers */}
                  <rect
                    x="15"
                    y="15"
                    width="10"
                    height="10"
                    fill="none"
                    stroke="#0D6EFF"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="175"
                    y="15"
                    width="10"
                    height="10"
                    fill="none"
                    stroke="#0D6EFF"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="15"
                    y="175"
                    width="10"
                    height="10"
                    fill="none"
                    stroke="#0D6EFF"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="175"
                    y="175"
                    width="10"
                    height="10"
                    fill="none"
                    stroke="#0D6EFF"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>

              <div className="relative">
                <div className="text-4xl md:text-5xl font-bold text-[#0D6EFF] mb-2">600K</div>
                <div className="text-white text-sm md:text-base font-semibold">
                  New Malicious Attack Objects Identified
                </div>
              </div>
            </div>

            {/* Card 6 - Attacks Prevented */}
            <div className="group relative bg-gradient-to-br from-[#0a0a1a] to-[#050510] dark:from-[#0a0a1a] dark:to-[#050510] border border-[#0D6EFF]/20 rounded-2xl p-8 overflow-hidden hover:border-[#0D6EFF]/40 transition-all duration-300">
              {/* Terminal/code visualization */}
              <div className="relative mb-8 h-32 bg-black/40 rounded-lg p-4 font-mono text-[10px] leading-relaxed overflow-hidden">
                <div className="text-[#0D6EFF]/60">
                  001 <span className="text-white/40">// Type</span>
                </div>
                <div className="text-[#0D6EFF]/70">
                  002 <span className="text-white/50">if (data.safe == version 3.2)</span>
                </div>
                <div className="text-[#0D6EFF]/60">003</div>
                <div className="text-[#0D6EFF]/80">
                  004{" "}
                  <span className="text-white/60">
                    function checkChanges.TypeEnterprise = Null {"{"}
                  </span>
                </div>
                <div className="text-[#0D6EFF]/70">005</div>
                <div className="text-[#0D6EFF]/90">
                  006 <span className="text-white/70">BLOCK: $path, $title, Reconnaissance</span>
                </div>
                <div className="text-[#0D6EFF]/60">007</div>
                <div className="text-[#0D6EFF]/80">
                  008 <span className="text-white/60">if ($typename = 'Null')</span>
                </div>
              </div>

              <div className="relative">
                <div className="text-4xl md:text-5xl font-bold text-[#0D6EFF] mb-2">10K</div>
                <div className="text-white text-sm md:text-base font-semibold">
                  Attacks Prevented Inline
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
