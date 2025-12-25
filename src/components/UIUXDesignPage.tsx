const bannerImage = "/assets/b08825ae08213d117dc9538118665e5c774e65e5.png";
const transportationImage = "/assets/4bec407ba16c6828fd57c7dbccb957af45827342.png";
const quickcargoMobileImage = "/assets/1041d360de16d8eb6a0affaad60def699111ca13.png";
const microInvestmentImage = "/assets/c2f50fb10c3a031a097d18de6fd1fa4080ea5456.png";
const medicalPlatformImage = "/assets/0a6519eaebc0564f1790af6128554039e800487c.png";
const wireframingImage = "/assets/dbfe429881c4a06921a23c687be1b243c3d68e2b.png";
const designDeliveryImage = "/assets/b0450e84fb7d035d3c52d4bdd44f5d99e1e4d809.png";
const visualStyleImage = "/assets/3b2f370d579925a1d5a3e92f65158d1f0fa57591.png";
const researchImage = "/assets/29b816659cede528dc376af3c6fd9392fa3d2f16.png";
import { ArrowRight } from "lucide-react";

interface UIUXDesignPageProps {
  onContactClick?: () => void;
}

export function UIUXDesignPage({ onContactClick }: UIUXDesignPageProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0F1F]">
      {/* Banner Section - No resize or animations */}
      <div className="w-full">
        <img
          src={bannerImage}
          alt="UI/UX Design Services"
          className="w-full h-auto block"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>

      {/* Our time-tested UI/UX approach Section */}
      <section className="py-16 md:py-24 px-4 bg-[#F5F5F5] dark:bg-[#0A0F1F]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 dark:text-white mb-6">
              Our time-tested
              <br />
              UI/UX approach
            </h2>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl ml-auto">
              User experience and user interface are inseparable and
              <br className="hidden md:block" /> form an overall impression of your product
            </p>
          </div>

          {/* Venn Diagram with Lists */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
            {/* Left List - UX */}
            <div className="space-y-4 lg:text-right order-2 lg:order-1">
              <p className="text-lg md:text-xl text-gray-900 dark:text-white">
                Information architecture
              </p>
              <p className="text-lg md:text-xl text-gray-900 dark:text-white">
                Competitive analysis
              </p>
              <p className="text-lg md:text-xl text-gray-900 dark:text-white">
                Prototyping and testing
              </p>
              <p className="text-lg md:text-xl text-gray-900 dark:text-white">Wireframing</p>
              <p className="text-lg md:text-xl text-gray-900 dark:text-white">Interaction design</p>
              <p className="text-lg md:text-xl text-gray-900 dark:text-white">Research</p>
            </div>

            {/* Center - Venn Diagram */}
            <div className="flex justify-center items-center order-1 lg:order-2">
              <div className="relative w-full max-w-2xl aspect-square flex items-center justify-center">
                {/* Left Circle - UX */}
                <div className="absolute left-[-10%] w-64 h-64 md:w-72 md:h-72 rounded-full bg-[#0047AB] opacity-90 flex items-center justify-center">
                  <span className="text-white text-6xl md:text-7xl font-bold">UX</span>
                </div>

                {/* Right Circle - UI */}
                <div className="absolute right-[-10%] w-64 h-64 md:w-72 md:h-72 rounded-full bg-[#0066FF] opacity-90 flex items-center justify-center">
                  <span className="text-white text-6xl md:text-7xl font-bold">UI</span>
                </div>
              </div>
            </div>

            {/* Right List - UI */}
            <div className="space-y-4 order-3">
              <p className="text-lg md:text-xl text-gray-900 dark:text-white">
                Ideation & Mood Board
              </p>
              <p className="text-lg md:text-xl text-gray-900 dark:text-white">
                Branding & Graphics
              </p>
              <p className="text-lg md:text-xl text-gray-900 dark:text-white">
                Colors & Accessibility
              </p>
              <p className="text-lg md:text-xl text-gray-900 dark:text-white">Icons & Typography</p>
              <p className="text-lg md:text-xl text-gray-900 dark:text-white">
                Layouts & Design system
              </p>
              <p className="text-lg md:text-xl text-gray-900 dark:text-white">Visual design</p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Projects Section */}
      <section className="py-16 md:py-24 px-4 bg-white dark:bg-[#0A0F1F]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-start mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white max-w-xl">
              Best Projects Within Our
              <br />
              UI/UX Design Services
            </h2>
            <button className="flex items-center gap-2 text-[#0D6EFF] hover:gap-3 transition-all duration-300 group">
              <span className="text-lg">More projects</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Projects */}
          <div className="space-y-8">
            {/* Project 1 - Micro-Investment Platform */}
            <div className="grid md:grid-cols-2 gap-8 items-center bg-[#E8EEF7] dark:bg-[#1A2332] rounded-3xl p-8 md:p-12">
              <div className="relative">
                <img
                  src={microInvestmentImage}
                  alt="Education Platform with Apps"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                  <span>Under NDA</span>
                  <span className="flex items-center gap-1">
                    <span>DZD</span>
                  </span>
                  <span className="px-3 py-1 bg-white dark:bg-[#0A0F1F] rounded-full">
                    Education
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl text-gray-900 dark:text-white">
                  Education Platform with Apps
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Cross-platform solution for managing school Online courses and exames for
                  students, teachers, and parents
                </p>
                <a
                  href="https://play.google.com/store/search?q=soluche%20online&c=apps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#0D6EFF] hover:gap-3 transition-all duration-300 group"
                >
                  <span>Explore more</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Project 2 - Transportation Management System */}
            <div className="grid md:grid-cols-2 gap-8 items-center bg-[#E8F5E9] dark:bg-[#1A2E1F] rounded-3xl p-8 md:p-12">
              <div className="relative flex gap-4">
                <img
                  src={transportationImage}
                  alt="Transportation Management System Dashboard"
                  className="w-1/2 h-auto rounded-2xl shadow-lg"
                />
                <img
                  src={quickcargoMobileImage}
                  alt="QuickCargo Mobile App"
                  className="w-1/2 h-auto rounded-2xl shadow-lg"
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                  <span>Under NDA</span>
                  <span>DZD</span>
                  <span className="px-3 py-1 bg-white dark:bg-[#0A0F1F] rounded-full">
                    Logistics
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl text-gray-900 dark:text-white">
                  Transportation Management System with Route Planning ( VTC )
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  TMS for the logistics company with automated route planning and delivery points
                  management modules. The solution's integration with the existing LMS
                </p>
                <a
                  href="https://play.google.com/store/apps/details?id=com.dcsec.quickcargoo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#0D6EFF] hover:gap-3 transition-all duration-300 group"
                >
                  <span>Explore more</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Project 3 - Medical Platform */}
            <div className="grid md:grid-cols-2 gap-8 items-center bg-[#E8EEF7] dark:bg-[#1A2332] rounded-3xl p-8 md:p-12">
              <div className="relative">
                <img
                  src={medicalPlatformImage}
                  alt="Medical Platform"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                  <span>Under NDA</span>
                  <span className="flex items-center gap-1">
                    <span>DZD</span>
                  </span>
                  <span className="px-3 py-1 bg-white dark:bg-[#0A0F1F] rounded-full">Medical</span>
                </div>
                <h3 className="text-2xl md:text-3xl text-gray-900 dark:text-white">
                  Medical Platform
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  A medical platform for a large medical company that brings together doctors,
                  patients, and suppliers in one place.
                </p>
                <a
                  href="https://www.doctowise.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#0D6EFF] hover:gap-3 transition-all duration-300 group"
                >
                  <span>Explore more</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our UI/UX design process Section */}
      <section className="py-16 md:py-24 px-4 bg-[#F5F5F5] dark:bg-[#0A0F1F]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-6">
              Our expertise in software design tools
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl">
              We are proficient in various UI/UX design tools so our clients can be sure they
              receive functional and appealing interfaces designed within set time frames
            </p>
          </div>

          {/* Tools Grid */}
          <div className="grid md:grid-cols-3 gap-12">
            {/* Static editors */}
            <div>
              <h3 className="text-2xl text-gray-900 dark:text-white mb-8">Static editors</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 bg-white dark:bg-[#1A2332] p-4 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 3L2 21h20L12 3z" />
                    </svg>
                  </div>
                  <span className="text-lg text-gray-900 dark:text-white">Sketch</span>
                </div>

                <div className="flex items-center gap-4 bg-white dark:bg-[#1A2332] p-4 rounded-xl">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="24" rx="4" fill="#F24E1E" />
                      <rect x="12" width="12" height="12" rx="2" fill="#FF7262" />
                      <rect x="12" y="12" width="12" height="12" rx="2" fill="#A259FF" />
                      <rect y="12" width="12" height="12" rx="2" fill="#1ABCFE" />
                      <rect width="12" height="12" rx="2" fill="#0ACF83" />
                    </svg>
                  </div>
                  <span className="text-lg text-gray-900 dark:text-white">Figma</span>
                </div>

                <div className="flex items-center gap-4 bg-white dark:bg-[#1A2332] p-4 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-yellow-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">Ai</span>
                  </div>
                  <span className="text-lg text-gray-900 dark:text-white">Adobe Illustrator</span>
                </div>

                <div className="flex items-center gap-4 bg-white dark:bg-[#1A2332] p-4 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">Ps</span>
                  </div>
                  <span className="text-lg text-gray-900 dark:text-white">Adobe Photoshop</span>
                </div>
              </div>
            </div>

            {/* Tools */}
            <div>
              <h3 className="text-2xl text-gray-900 dark:text-white mb-8">Tools</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 bg-white dark:bg-[#1A2332] p-4 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <rect x="8" y="8" width="8" height="8" transform="rotate(45 12 12)" />
                    </svg>
                  </div>
                  <span className="text-lg text-gray-900 dark:text-white">Sympli</span>
                </div>

                <div className="flex items-center gap-4 bg-white dark:bg-[#1A2332] p-4 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl italic">in</span>
                  </div>
                  <span className="text-lg text-gray-900 dark:text-white">Invision</span>
                </div>

                <div className="flex items-center gap-4 bg-white dark:bg-[#1A2332] p-4 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L4 7v10l8 5 8-5V7l-8-5z" />
                    </svg>
                  </div>
                  <span className="text-lg text-gray-900 dark:text-white">Zeplin</span>
                </div>
              </div>
            </div>

            {/* Animation */}
            <div>
              <h3 className="text-2xl text-gray-900 dark:text-white mb-8">Animation</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 bg-white dark:bg-[#1A2332] p-4 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-800 to-purple-900 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">Ae</span>
                  </div>
                  <span className="text-lg text-gray-900 dark:text-white">After Effects</span>
                </div>

                <div className="flex items-center gap-4 bg-white dark:bg-[#1A2332] p-4 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-800 to-indigo-900 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">Me</span>
                  </div>
                  <span className="text-lg text-gray-900 dark:text-white">Media Encoder</span>
                </div>

                <div className="flex items-center gap-4 bg-white dark:bg-[#1A2332] p-4 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">P</span>
                  </div>
                  <span className="text-lg text-gray-900 dark:text-white">Principle</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our UI/UX design process Section */}
      <section className="py-16 md:py-24 px-4 bg-white dark:bg-[#0A0F1F]">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-16">
            Our UI/UX design process
          </h2>

          {/* Process Steps */}
          <div className="space-y-16 md:space-y-24">
            {/* Step 01 - Research */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="relative">
                <img
                  src={researchImage}
                  alt="Research"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
              <div className="space-y-4">
                <div className="text-[#0D6EFF] text-2xl md:text-3xl">01</div>
                <h3 className="text-2xl md:text-3xl text-gray-900 dark:text-white">Research</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p>
                    <span className="text-[#0D6EFF]">Immersion.</span> Rich UX designers immerse
                    into your business niche and explore the mental model, target audience, and
                    constraints.
                  </p>
                  <p>
                    <span className="text-[#0D6EFF]">Competition.</span> After those two steps,
                    designers analyse similar products on the market and define colors, stylistic
                    colors, and so on.
                  </p>
                  <p>
                    <span className="text-[#0D6EFF]">User behavior.</span> The next step is to study
                    how users interact with similar products to increase retention rates and meet
                    customer needs.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 02 - Wireframing */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="space-y-4 md:order-1 order-2">
                <div className="text-[#0D6EFF] text-2xl md:text-3xl">02</div>
                <h3 className="text-2xl md:text-3xl text-gray-900 dark:text-white">Wireframing</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p>
                    Wireframing is one of the key parts of product design. Designers create a
                    wireframe for each screen in the app or website in this stage.
                  </p>
                  <p>
                    After that, they turn the User Journey into a clickable prototype so that
                    customers could experience their app and suggest adjustments if needed.
                  </p>
                </div>
              </div>
              <div className="relative md:order-2 order-1">
                <img
                  src={wireframingImage}
                  alt="Wireframing"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
            </div>

            {/* Step 03 - Visual style */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="relative">
                <img
                  src={visualStyleImage}
                  alt="Visual style"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
              <div className="space-y-4">
                <div className="text-[#0D6EFF] text-2xl md:text-3xl">03</div>
                <h3 className="text-2xl md:text-3xl text-gray-900 dark:text-white">Visual style</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p>
                    Before designers get to the creation of the Final UI, they craft two-three
                    visual concepts or one of the screens to show customers how the app will look
                    like and let them choose the style.
                  </p>
                  <p>
                    Those concepts may differ in colors, fonts, and other graphic elements. If
                    customers have a brand book with brand colors and assets, we'll be based on it
                    when style creation.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 04 - Design & Delivery */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="space-y-4 md:order-1 order-2">
                <div className="text-[#0D6EFF] text-2xl md:text-3xl">04</div>
                <h3 className="text-2xl md:text-3xl text-gray-900 dark:text-white">
                  Design & Delivery
                </h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p>
                    The product design begins. Designers craft a UI style guide that contains all
                    the key elements of your product design elements. It helps designers and
                    developers follow the chosen style. After that, designers create Final UI for
                    each screen based on the wireframes created before.
                  </p>
                  <p>
                    Once all screens are ready, they're passed over to developers along with icons
                    and other graphic elements used for design.
                  </p>
                </div>
              </div>
              <div className="relative md:order-2 order-1">
                <img
                  src={designDeliveryImage}
                  alt="Design & Delivery"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - UI/UX design services to stand out */}
      <section className="py-16 md:py-24 px-4 bg-white dark:bg-[#0A0F1F]">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-[#0047AB] via-[#0066FF] to-[#00BFFF] rounded-3xl p-8 md:p-12 lg:p-16">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Left - Title */}
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl text-white">
                  UI/UX design services to stand out
                </h2>
              </div>

              {/* Center - Description */}
              <div>
                <p className="text-lg md:text-xl text-white/90">
                  Contact us, we'll analyze your business and help you deliver intuitive, vibrant,
                  and fast-loading software design to ensure brand competitiveness and a high user
                  satisfaction rate.
                </p>
              </div>

              {/* Right - Button */}
              <div className="flex justify-end">
                <a
                  href="https://wa.me/213668959953?text=I%20want%20to%20know%20how%20much%20it%20would%20cost%20to%20design%20a%20complete%20project%20UI/UX"
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
