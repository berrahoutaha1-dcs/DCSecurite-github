import { Check } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AnimatedProgressBar } from "./AnimatedProgressBar";

interface MobileDevelopmentPageProps {
  onContactClick?: () => void;
}

export function MobileDevelopmentPage({ onContactClick }: MobileDevelopmentPageProps) {
  const [selectedStep, setSelectedStep] = useState(1);
  const [selectedAppType, setSelectedAppType] = useState("uber");

  const processSteps = {
    1: {
      title: "Study the project",
      description:
        "We analyze your requirements — project type, features, platforms — then create specification, design, and approve wireframes. In other cases, we study your already-made documentation and provide rough and detailed time & money estimates.",
      team: [
        "Business Analyst",
        "UI/UX designer",
        "Project Manager",
        "Solution Architect",
        "QA engineer",
      ],
    },
    2: {
      title: "Product design",
      description:
        "Our designers create intuitive and engaging user interfaces. We develop wireframes, prototypes, and high-fidelity mockups that align with your brand identity. Every design decision is backed by user research and best UX practices.",
      team: [
        "UI/UX designer",
        "Art Director",
        "Product Manager",
        "Frontend Developer",
        "Motion Designer",
      ],
    },
    3: {
      title: "Development & testing",
      description:
        "Our development team builds your application using cutting-edge technologies and best coding practices. We implement continuous integration, automated testing, and code reviews to ensure the highest quality standards throughout development.",
      team: [
        "Mobile Developer",
        "Backend Developer",
        "QA engineer",
        "DevOps Engineer",
        "Tech Lead",
      ],
    },
    4: {
      title: "Launch",
      description:
        "We handle deployment to App Store and Google Play, configure monitoring systems, and ensure everything runs smoothly. Our team performs final testing, trains your staff, and provides comprehensive documentation for your application.",
      team: [
        "DevOps Engineer",
        "Mobile Developer",
        "QA engineer",
        "Technical Writer",
        "Project Manager",
      ],
    },
    5: {
      title: "Maintenance (per request)",
      description:
        "Post-launch support includes bug fixes, security updates, performance optimization, and feature enhancements. We monitor your application 24/7, provide regular reports, and ensure your system stays secure and up-to-date.",
      team: [
        "Support Engineer",
        "Mobile Developer",
        "Backend Developer",
        "Security Specialist",
        "Project Manager",
      ],
    },
  };

  const appTypeData = {
    uber: {
      name: "Uber-like app",
      android: 300,
      ios: 250,
      flutter: 200,
      both: 600,
      savings: "50% less time",
    },
    shipping: {
      name: "Shipping app",
      android: 350,
      ios: 300,
      flutter: 250,
      both: 700,
      savings: "45% less time",
    },
    ecommerce: {
      name: "E-commerce app",
      android: 400,
      ios: 350,
      flutter: 275,
      both: 800,
      savings: "48% less time",
    },
    fitness: {
      name: "Fitness app",
      android: 280,
      ios: 230,
      flutter: 180,
      both: 550,
      savings: "52% less time",
    },
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0F1F]">
      {/* Hero Banner Section */}
      <div className="relative bg-gradient-to-br from-[#0047AB] via-[#0066FF] to-[#00BFFF] py-20 md:py-32 px-4">
        <div className="max-w-7xl mx-auto text-center mt-[4cm]">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Mobile Development Services
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Build native and cross-platform mobile applications with exceptional performance and
            user experience
          </p>
        </div>
      </div>

      {/* Flutter App Development Section */}
      <section className="py-16 md:py-24 px-4 bg-[#F5F5F5] dark:bg-[#0A0F1F]">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white dark:bg-[#1A2332] rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Flutter app development services allow you to receive cross-platform mobile
                  applications with native-like performance. Order a multi-platform solution created
                  with Flutter to accelerate time to market and optimize development costs while
                  maintaining smooth user experience
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#0D6EFF]" />
                  <span className="text-gray-900 dark:text-white">
                    Up to 50% faster app creation
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#0D6EFF]" />
                  <span className="text-gray-900 dark:text-white">Native-like app experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#0D6EFF]" />
                  <span className="text-gray-900 dark:text-white">
                    Code once, launch everywhere
                  </span>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
              <h2 className="text-3xl md:text-4xl text-gray-900 dark:text-white mb-4">
                Flutter App Development Service You Can Get
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Cleveroad's Flutter application development services help startups and businesses of
                any scale get top-notch mobile apps within a reduced timeline and budget
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Flutter Section */}
      <section className="py-16 md:py-24 px-4 bg-white dark:bg-[#0A0F1F]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-6">
            Why Choose Flutter for Your Next App?
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-4xl">
            Choosing Flutter for your application development allows you to accelerate development
            time and get a high-quality, consistent experience across platforms
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Business Benefits */}
            <div>
              <h3 className="text-2xl text-gray-900 dark:text-white mb-8">Business benefits</h3>

              <div className="space-y-6">
                <div className="bg-[#F5F5F5] dark:bg-[#1A2332] rounded-xl p-6">
                  <h4 className="text-xl text-gray-900 dark:text-white mb-3">
                    Accelerated time-to-market
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Flutter's fast development speeds up app launch, reducing market entry time and
                    granting you a competitive advantage
                  </p>
                </div>

                <div className="bg-[#F5F5F5] dark:bg-[#1A2332] rounded-xl p-6">
                  <h4 className="text-xl text-gray-900 dark:text-white mb-3">
                    Optimized idea validation resources
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Flutter simplifies MVP creation with a single codebase, cutting resource needs
                    and helping you quickly validate ideas
                  </p>
                </div>

                <div className="bg-[#F5F5F5] dark:bg-[#1A2332] rounded-xl p-6">
                  <h4 className="text-xl text-gray-900 dark:text-white mb-3">
                    Native-like experience across platforms
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Deliver an engaging, native-like user experience on both iOS and Android,
                    driving user satisfaction, loyalty, and retention
                  </p>
                </div>

                <div className="bg-[#F5F5F5] dark:bg-[#1A2332] rounded-xl p-6">
                  <h4 className="text-xl text-gray-900 dark:text-white mb-3">
                    Stunning user interface on any screen
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Flutter ensures visually compelling UIs that adapt to all screens, enhancing
                    brand consistency and user engagement
                  </p>
                </div>
              </div>
            </div>

            {/* Tech Benefits */}
            <div>
              <h3 className="text-2xl text-gray-900 dark:text-white mb-8">Tech benefits</h3>

              <div className="space-y-6">
                <div className="bg-[#F5F5F5] dark:bg-[#1A2332] rounded-xl p-6">
                  <h4 className="text-xl text-gray-900 dark:text-white mb-3">
                    Exceptional performance with less tests
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Reduce testing time by nearly 50% thanks to a single codebase for iOS and
                    Android, ensuring exceptional performance
                  </p>
                </div>

                <div className="bg-[#F5F5F5] dark:bg-[#1A2332] rounded-xl p-6">
                  <h4 className="text-xl text-gray-900 dark:text-white mb-3">
                    One-code app for iOS and Android
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    With Flutter, developers use one codebase for iOS and Android, reducing costs
                    and simplifying maintenance
                  </p>
                </div>

                <div className="bg-[#F5F5F5] dark:bg-[#1A2332] rounded-xl p-6">
                  <h4 className="text-xl text-gray-900 dark:text-white mb-3">
                    Faster integration of new features
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Integrate new features using Flutter's hot-reload, enabling instant updates
                    without disrupting the user experience
                  </p>
                </div>

                <div className="bg-[#F5F5F5] dark:bg-[#1A2332] rounded-xl p-6">
                  <h4 className="text-xl text-gray-900 dark:text-white mb-3">
                    Support for varying design guidelines
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Flutter ensures your app follows platform-specific design standards while
                    maintaining a consistent brand identity
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doing the Math Section */}
      <section className="py-16 md:py-24 px-4 bg-[#F5F5F5] dark:bg-[#0A0F1F]">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white dark:bg-[#1A2332] rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl text-gray-900 dark:text-white mb-4">
                  Doing the Math
                </h2>
              </div>
              <div className="md:col-span-2">
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Discover how Flutter app development services can help you save time and cost on
                  app creation for your industry
                </p>
              </div>
            </div>

            {/* App Type Selector */}
            <div className="flex flex-wrap gap-3 mb-12">
              <button
                onClick={() => setSelectedAppType("uber")}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedAppType === "uber"
                    ? "bg-[#0066FF] text-white"
                    : "bg-gray-100 dark:bg-[#0A0F1F] text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-[#1A2332]"
                }`}
              >
                Uber-like app
              </button>
              <button
                onClick={() => setSelectedAppType("shipping")}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedAppType === "shipping"
                    ? "bg-[#0066FF] text-white"
                    : "bg-gray-100 dark:bg-[#0A0F1F] text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-[#1A2332]"
                }`}
              >
                Shipping app
              </button>
              <button
                onClick={() => setSelectedAppType("ecommerce")}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedAppType === "ecommerce"
                    ? "bg-[#0066FF] text-white"
                    : "bg-gray-100 dark:bg-[#0A0F1F] text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-[#1A2332]"
                }`}
              >
                E-commerce app
              </button>
              <button
                onClick={() => setSelectedAppType("fitness")}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedAppType === "fitness"
                    ? "bg-[#0066FF] text-white"
                    : "bg-gray-100 dark:bg-[#0A0F1F] text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-[#1A2332]"
                }`}
              >
                Fitness app
              </button>
            </div>

            {/* Development Time Chart */}
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <h3 className="text-xl text-gray-900 dark:text-white mb-6">Development time</h3>

                <div className="space-y-4">
                  {/* Android */}
                  <AnimatedProgressBar
                    label="Android"
                    value={appTypeData[selectedAppType].android}
                    maxValue={1000}
                    color="#4CAF50"
                    delay={0}
                  />

                  {/* iOS */}
                  <AnimatedProgressBar
                    label="iOS"
                    value={appTypeData[selectedAppType].ios}
                    maxValue={1000}
                    color="#2196F3"
                    delay={0.15}
                  />

                  {/* Flutter */}
                  <AnimatedProgressBar
                    label="Flutter"
                    value={appTypeData[selectedAppType].flutter}
                    maxValue={1000}
                    color="#00BCD4"
                    delay={0.3}
                  />

                  {/* Android + iOS */}
                  <AnimatedProgressBar
                    label="Android + iOS"
                    value={appTypeData[selectedAppType].both}
                    maxValue={1000}
                    color="#F44336"
                    delay={0.45}
                  />
                </div>
              </div>

              {/* Savings Display */}
              <div className="bg-[#E8F4FF] dark:bg-[#0A1929] rounded-2xl p-8 text-center">
                <div className="text-5xl md:text-6xl text-[#0066FF] dark:text-[#0D6EFF] mb-2">
                  50%
                </div>
                <div className="text-xl text-gray-900 dark:text-white mb-2">less time</div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  You spend on {appTypeData[selectedAppType].name.replace("-like", "")} built on
                  Flutter
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies We Use Section */}
      <section className="py-16 md:py-24 px-4 bg-white dark:bg-[#0A0F1F]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-12">
            Technologies we use
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Cross-Platform */}
            <div>
              <h3 className="text-2xl text-gray-900 dark:text-white mb-6">Cross-Platform</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-[#E8EEF7] dark:bg-[#1A2332] p-4 rounded-xl">
                  <div className="w-12 h-12 bg-[#02569B] rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">F</span>
                  </div>
                  <span className="text-lg text-gray-900 dark:text-white">Flutter</span>
                </div>
                <div className="flex items-center gap-4 bg-[#E8EEF7] dark:bg-[#1A2332] p-4 rounded-xl">
                  <div className="w-12 h-12 bg-[#61DAFB] rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">RN</span>
                  </div>
                  <span className="text-lg text-gray-900 dark:text-white">React Native</span>
                </div>
                <div className="flex items-center gap-4 bg-[#E8EEF7] dark:bg-[#1A2332] p-4 rounded-xl">
                  <div className="w-12 h-12 bg-[#8B5CF6] rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">X</span>
                  </div>
                  <span className="text-lg text-gray-900 dark:text-white">Xamarin</span>
                </div>
              </div>
            </div>

            {/* Native iOS */}
            <div>
              <h3 className="text-2xl text-gray-900 dark:text-white mb-6">Native iOS</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-[#E8EEF7] dark:bg-[#1A2332] p-4 rounded-xl">
                  <div className="w-12 h-12 bg-[#FA7343] rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">S</span>
                  </div>
                  <span className="text-lg text-gray-900 dark:text-white">Swift</span>
                </div>
                <div className="flex items-center gap-4 bg-[#E8EEF7] dark:bg-[#1A2332] p-4 rounded-xl">
                  <div className="w-12 h-12 bg-[#438EFF] rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">OC</span>
                  </div>
                  <span className="text-lg text-gray-900 dark:text-white">Objective-C</span>
                </div>
                <div className="flex items-center gap-4 bg-[#E8EEF7] dark:bg-[#1A2332] p-4 rounded-xl">
                  <div className="w-12 h-12 bg-[#007AFF] rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">SU</span>
                  </div>
                  <span className="text-lg text-gray-900 dark:text-white">SwiftUI</span>
                </div>
              </div>
            </div>

            {/* Native Android */}
            <div>
              <h3 className="text-2xl text-gray-900 dark:text-white mb-6">Native Android</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-[#E8EEF7] dark:bg-[#1A2332] p-4 rounded-xl">
                  <div className="w-12 h-12 bg-[#7F52FF] rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">K</span>
                  </div>
                  <span className="text-lg text-gray-900 dark:text-white">Kotlin</span>
                </div>
                <div className="flex items-center gap-4 bg-[#E8EEF7] dark:bg-[#1A2332] p-4 rounded-xl">
                  <div className="w-12 h-12 bg-[#5382A1] rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">J</span>
                  </div>
                  <span className="text-lg text-gray-900 dark:text-white">Java</span>
                </div>
                <div className="flex items-center gap-4 bg-[#E8EEF7] dark:bg-[#1A2332] p-4 rounded-xl">
                  <div className="w-12 h-12 bg-[#4285F4] rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">JC</span>
                  </div>
                  <span className="text-lg text-gray-900 dark:text-white">Jetpack Compose</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Development Process Section */}
      <section className="py-16 md:py-24 px-4 bg-[#F5F5F5] dark:bg-[#0A0F1F]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 bg-white dark:bg-[#1A2332] rounded-3xl p-8 md:p-12 lg:p-16">
            {/* Left Side - Title and Steps List */}
            <div>
              <h2 className="text-3xl md:text-4xl text-gray-900 dark:text-white mb-12">
                Development process at
                <br />
                DCSecurite
              </h2>

              <div className="space-y-4">
                <button
                  onClick={() => setSelectedStep(1)}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
                    selectedStep === 1
                      ? "bg-[#E8F4FF] dark:bg-[#0A1929]"
                      : "hover:bg-gray-50 dark:hover:bg-[#0A1929]"
                  }`}
                >
                  <span
                    className={
                      selectedStep === 1 ? "text-[#0066FF] dark:text-[#0D6EFF]" : "text-gray-400"
                    }
                  >
                    01
                  </span>
                  <span
                    className={
                      selectedStep === 1
                        ? "text-gray-900 dark:text-white"
                        : "text-gray-700 dark:text-gray-400"
                    }
                  >
                    Study the project
                  </span>
                </button>
                <button
                  onClick={() => setSelectedStep(2)}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
                    selectedStep === 2
                      ? "bg-[#E8F4FF] dark:bg-[#0A1929]"
                      : "hover:bg-gray-50 dark:hover:bg-[#0A1929]"
                  }`}
                >
                  <span
                    className={
                      selectedStep === 2 ? "text-[#0066FF] dark:text-[#0D6EFF]" : "text-gray-400"
                    }
                  >
                    02
                  </span>
                  <span
                    className={
                      selectedStep === 2
                        ? "text-gray-900 dark:text-white"
                        : "text-gray-700 dark:text-gray-400"
                    }
                  >
                    Product design
                  </span>
                </button>
                <button
                  onClick={() => setSelectedStep(3)}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
                    selectedStep === 3
                      ? "bg-[#E8F4FF] dark:bg-[#0A1929]"
                      : "hover:bg-gray-50 dark:hover:bg-[#0A1929]"
                  }`}
                >
                  <span
                    className={
                      selectedStep === 3 ? "text-[#0066FF] dark:text-[#0D6EFF]" : "text-gray-400"
                    }
                  >
                    03
                  </span>
                  <span
                    className={
                      selectedStep === 3
                        ? "text-gray-900 dark:text-white"
                        : "text-gray-700 dark:text-gray-400"
                    }
                  >
                    Development & testing
                  </span>
                </button>
                <button
                  onClick={() => setSelectedStep(4)}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
                    selectedStep === 4
                      ? "bg-[#E8F4FF] dark:bg-[#0A1929]"
                      : "hover:bg-gray-50 dark:hover:bg-[#0A1929]"
                  }`}
                >
                  <span
                    className={
                      selectedStep === 4 ? "text-[#0066FF] dark:text-[#0D6EFF]" : "text-gray-400"
                    }
                  >
                    04
                  </span>
                  <span
                    className={
                      selectedStep === 4
                        ? "text-gray-900 dark:text-white"
                        : "text-gray-700 dark:text-gray-400"
                    }
                  >
                    Launch
                  </span>
                </button>
                <button
                  onClick={() => setSelectedStep(5)}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
                    selectedStep === 5
                      ? "bg-[#E8F4FF] dark:bg-[#0A1929]"
                      : "hover:bg-gray-50 dark:hover:bg-[#0A1929]"
                  }`}
                >
                  <span
                    className={
                      selectedStep === 5 ? "text-[#0066FF] dark:text-[#0D6EFF]" : "text-gray-400"
                    }
                  >
                    05
                  </span>
                  <span
                    className={
                      selectedStep === 5
                        ? "text-gray-900 dark:text-white"
                        : "text-gray-700 dark:text-gray-400"
                    }
                  >
                    Maintenance (per request)
                  </span>
                </button>
              </div>
            </div>

            {/* Right Side - Description and Details */}
            <div>
              <p className="text-gray-700 dark:text-gray-300 mb-12">
                We follow the Scrum framework, working in 2-week sprints and completing a set amount
                of work by the end of each. Then show a demo or release the product.
              </p>

              <h3 className="text-2xl md:text-3xl text-gray-900 dark:text-white mb-6">
                {processSteps[selectedStep].title}
              </h3>

              <p className="text-gray-700 dark:text-gray-300 mb-8">
                {processSteps[selectedStep].description}
              </p>

              <div>
                <h4 className="text-lg text-gray-900 dark:text-white mb-4">Team</h4>
                <div className="grid grid-cols-2 gap-4">
                  {processSteps[selectedStep].team.map((member, index) => (
                    <div
                      key={index}
                      className="bg-[#E8F4FF] dark:bg-[#0A1929] px-4 py-3 rounded-lg"
                    >
                      <span className="text-gray-900 dark:text-white">{member}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Industry Expertise Section */}
      <section className="py-16 md:py-24 px-4 bg-white dark:bg-[#0A0F1F]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-6">
            Core industry expertise
          </h2>
          <p className="text-lg text-[#0047AB] dark:text-[#0D6EFF] mb-12 max-w-4xl">
            Decade of experience in building mobile applications across various industries with
            native and cross-platform technologies
          </p>

          {/* Main Industry Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {/* On-Demand Services */}
            <div className="bg-[#D6E8F5] dark:bg-[#1A3A52] rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl text-[#0047AB] dark:text-white">On-Demand</h3>
                <ArrowUpRight className="w-6 h-6 text-[#0047AB] dark:text-[#0D6EFF]" />
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-gray-900 dark:text-gray-300">
                  <span className="text-[#0047AB] dark:text-[#0D6EFF] mt-1">•</span>
                  <span>Ride-Sharing Apps</span>
                </li>
                <li className="flex items-start gap-2 text-gray-900 dark:text-gray-300">
                  <span className="text-[#0047AB] dark:text-[#0D6EFF] mt-1">•</span>
                  <span>Food Delivery</span>
                </li>
                <li className="flex items-start gap-2 text-gray-900 dark:text-gray-300">
                  <span className="text-[#0047AB] dark:text-[#0D6EFF] mt-1">•</span>
                  <span>Service Booking</span>
                </li>
              </ul>
            </div>

            {/* E-Commerce */}
            <div className="bg-[#D5EDD8] dark:bg-[#1A3D28] rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl text-[#2D7A4A] dark:text-white">E-Commerce</h3>
                <ArrowUpRight className="w-6 h-6 text-[#2D7A4A] dark:text-[#4ADE80]" />
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-gray-900 dark:text-gray-300">
                  <span className="text-[#2D7A4A] dark:text-[#4ADE80] mt-1">•</span>
                  <span>Mobile Shopping</span>
                </li>
                <li className="flex items-start gap-2 text-gray-900 dark:text-gray-300">
                  <span className="text-[#2D7A4A] dark:text-[#4ADE80] mt-1">•</span>
                  <span>Marketplace Apps</span>
                </li>
                <li className="flex items-start gap-2 text-gray-900 dark:text-gray-300">
                  <span className="text-[#2D7A4A] dark:text-[#4ADE80] mt-1">•</span>
                  <span>Payment Integration</span>
                </li>
              </ul>
            </div>

            {/* FinTech */}
            <div className="bg-[#E8E3F5] dark:bg-[#2A1A52] rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl text-[#5B3A9D] dark:text-white">FinTech</h3>
                <ArrowUpRight className="w-6 h-6 text-[#5B3A9D] dark:text-[#A78BFA]" />
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-gray-900 dark:text-gray-300">
                  <span className="text-[#5B3A9D] dark:text-[#A78BFA] mt-1">•</span>
                  <span>Mobile Banking</span>
                </li>
                <li className="flex items-start gap-2 text-gray-900 dark:text-gray-300">
                  <span className="text-[#5B3A9D] dark:text-[#A78BFA] mt-1">•</span>
                  <span>Digital Wallets</span>
                </li>
                <li className="flex items-start gap-2 text-gray-900 dark:text-gray-300">
                  <span className="text-[#5B3A9D] dark:text-[#A78BFA] mt-1">•</span>
                  <span>Investment Apps</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Secondary Heading */}
          <h3 className="text-2xl md:text-3xl text-gray-900 dark:text-white mb-8">
            We also have customers in these domains
          </h3>

          {/* Additional Domain Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Health & Fitness */}
            <div className="bg-white dark:bg-[#1A2332] rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xl text-gray-900 dark:text-white">Health & Fitness</h4>
                <ArrowUpRight className="w-5 h-5 text-[#0D6EFF]" />
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Fitness tracking, workout apps, nutrition apps, and wellness platforms
              </p>
            </div>

            {/* Social Networking */}
            <div className="bg-white dark:bg-[#1A2332] rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xl text-gray-900 dark:text-white">Social Networking</h4>
                <ArrowUpRight className="w-5 h-5 text-[#0D6EFF]" />
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Chat apps, community platforms, and social media applications
              </p>
            </div>

            {/* Entertainment */}
            <div className="bg-white dark:bg-[#1A2332] rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xl text-gray-900 dark:text-white">Entertainment</h4>
                <ArrowUpRight className="w-5 h-5 text-[#0D6EFF]" />
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Video streaming, music apps, gaming platforms, and media applications
              </p>
            </div>

            {/* Education */}
            <div className="bg-white dark:bg-[#1A2332] rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xl text-gray-900 dark:text-white">Education</h4>
                <ArrowUpRight className="w-5 h-5 text-[#0D6EFF]" />
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                E-learning platforms, language learning, and educational mobile apps
              </p>
            </div>

            {/* Travel & Tourism */}
            <div className="bg-white dark:bg-[#1A2332] rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xl text-gray-900 dark:text-white">Travel & Tourism</h4>
                <ArrowUpRight className="w-5 h-5 text-[#0D6EFF]" />
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Booking apps, travel guides, hotel management, and tourism platforms
              </p>
            </div>

            {/* IoT & Smart Home */}
            <div className="bg-white dark:bg-[#1A2332] rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xl text-gray-900 dark:text-white">IoT & Smart Home</h4>
                <ArrowUpRight className="w-5 h-5 text-[#0D6EFF]" />
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Smart home control, IoT device management, and automation apps
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 bg-[#F5F5F5] dark:bg-[#0A0F1F]">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-[#0047AB] via-[#0066FF] to-[#00BFFF] rounded-3xl p-8 md:p-12 lg:p-16">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Left - Title */}
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl text-white">
                  Ready to build your mobile app?
                </h2>
              </div>

              {/* Center - Description */}
              <div>
                <p className="text-lg md:text-xl text-white/90">
                  Let's discuss your project requirements and create a powerful, engaging mobile
                  solution for iOS and Android.
                </p>
              </div>

              {/* Right - Button */}
              <div className="flex justify-end">
                <a
                  href="https://wa.me/213668959953?text=I%20want%20to%20know%20how%20much%20it%20would%20cost%20to%20develop%20a%20complete%20mobile%20application."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#0066FF] px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300 inline-block"
                >
                  Let's talk
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
