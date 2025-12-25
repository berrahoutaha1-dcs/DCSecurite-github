import { Check } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

interface WebDevelopmentPageProps {
  onContactClick?: () => void;
}

export function WebDevelopmentPage({ onContactClick }: WebDevelopmentPageProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0F1F]">
      {/* Hero Banner Section */}
      <div className="relative bg-gradient-to-br from-[#0047AB] via-[#0066FF] to-[#00BFFF] py-20 md:py-32 px-4">
        <div className="max-w-7xl mx-auto text-center mt-[4cm]">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Web Development Services
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Build powerful, scalable, and secure web applications with cutting-edge technologies
          </p>
        </div>
      </div>

      {/* Main Content Section - From Image */}
      <section className="py-16 md:py-24 px-4 bg-[#F5F5F5] dark:bg-[#0A0F1F]">
        <div className="max-w-7xl mx-auto">
          {/* Header with Description and Features */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Develop performant and secure web apps.</span> We
                make web applications using time-proven languages and frameworks, store data in
                secure databases, and apply microservices to make apps scalable
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-[#0D6EFF]" />
                <span className="text-gray-900 dark:text-white">Cross-platform web apps</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-[#0D6EFF]" />
                <span className="text-gray-900 dark:text-white">Web App modernization</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-[#0D6EFF]" />
                <span className="text-gray-900 dark:text-white">Progressive web app</span>
              </div>
            </div>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-center text-gray-900 dark:text-white mb-16">
            Web applications for any need,
            <br />
            device, and platform
          </h2>

          {/* Progressive web apps */}
          <div className="mb-12 bg-white dark:bg-[#1A2332] rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl md:text-3xl text-gray-900 dark:text-white mb-4">
                  Progressive web apps
                </h3>
              </div>
              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Progressive Web Apps (PWA) are websites with additional benefits for mobile
                  devices. PWAs run on various OS, offering native-app-like functionality — push
                  notifications, fast loading, full-screen user experience, and more. We create PWAs
                  that are mobile-focused, available offline, and easy to install on a user's home
                  screen.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-[#E8EEF7] dark:bg-[#0A0F1F] text-gray-900 dark:text-white rounded-full text-sm">
                    React
                  </span>
                  <span className="px-4 py-2 bg-[#E8EEF7] dark:bg-[#0A0F1F] text-gray-900 dark:text-white rounded-full text-sm">
                    Cache API
                  </span>
                  <span className="px-4 py-2 bg-[#E8EEF7] dark:bg-[#0A0F1F] text-gray-900 dark:text-white rounded-full text-sm">
                    PRPL Pattern
                  </span>
                  <span className="px-4 py-2 bg-[#E8EEF7] dark:bg-[#0A0F1F] text-gray-900 dark:text-white rounded-full text-sm">
                    HTTP/2 + Server Push
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Fast-loading SPA */}
          <div className="mb-12 bg-white dark:bg-[#1A2332] rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl md:text-3xl text-gray-900 dark:text-white mb-4">
                  Fast-loading SPA
                </h3>
              </div>
              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Single-page applications (SPA) update only required content and cache local data
                  to improve the website's speed. They take some time to load the first time; after
                  that, they load instantly and quickly react to all user actions. SPAs we make are
                  fast, responsive, and work across multiple browsers. No page reloads or too long
                  waiting time.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-[#E8EEF7] dark:bg-[#0A0F1F] text-gray-900 dark:text-white rounded-full text-sm">
                    AJAX
                  </span>
                  <span className="px-4 py-2 bg-[#E8EEF7] dark:bg-[#0A0F1F] text-gray-900 dark:text-white rounded-full text-sm">
                    HTML5 & CSS3
                  </span>
                  <span className="px-4 py-2 bg-[#E8EEF7] dark:bg-[#0A0F1F] text-gray-900 dark:text-white rounded-full text-sm">
                    React
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Responsive websites */}
          <div className="bg-white dark:bg-[#1A2332] rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl md:text-3xl text-gray-900 dark:text-white mb-4">
                  Responsive websites
                </h3>
              </div>
              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Responsive applications adjust their design to different screen sizes of
                  smartphones, tablets, and other devices. Even if the window is changing in just
                  one pixel, the page will swiftly rearrange its elements. By going responsive, you
                  ensure a great experience for mobile users and save time and money on designing
                  the iOS or Android version of the app.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-[#E8EEF7] dark:bg-[#0A0F1F] text-gray-900 dark:text-white rounded-full text-sm">
                    CSS Flexbox
                  </span>
                  <span className="px-4 py-2 bg-[#E8EEF7] dark:bg-[#0A0F1F] text-gray-900 dark:text-white rounded-full text-sm">
                    CSS Grid
                  </span>
                  <span className="px-4 py-2 bg-[#E8EEF7] dark:bg-[#0A0F1F] text-gray-900 dark:text-white rounded-full text-sm">
                    Bootstrap
                  </span>
                </div>
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
            {/* Frontend */}
            <div>
              <h3 className="text-2xl text-gray-900 dark:text-white mb-6">Frontend</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-[#E8EEF7] dark:bg-[#1A2332] p-4 rounded-xl">
                  <div className="w-12 h-12 bg-[#61DAFB] rounded-lg flex items-center justify-center">
                    <span className="text-white text-2xl">⚛</span>
                  </div>
                  <span className="text-lg text-gray-900 dark:text-white">React</span>
                </div>
                <div className="flex items-center gap-4 bg-[#E8EEF7] dark:bg-[#1A2332] p-4 rounded-xl">
                  <div className="w-12 h-12 bg-[#42B883] rounded-lg flex items-center justify-center">
                    <span className="text-white text-2xl">V</span>
                  </div>
                  <span className="text-lg text-gray-900 dark:text-white">Vue.js</span>
                </div>
                <div className="flex items-center gap-4 bg-[#E8EEF7] dark:bg-[#1A2332] p-4 rounded-xl">
                  <div className="w-12 h-12 bg-[#DD0031] rounded-lg flex items-center justify-center">
                    <span className="text-white text-2xl">A</span>
                  </div>
                  <span className="text-lg text-gray-900 dark:text-white">Angular</span>
                </div>
                <div className="flex items-center gap-4 bg-[#E8EEF7] dark:bg-[#1A2332] p-4 rounded-xl">
                  <div className="w-12 h-12 bg-[#3178C6] rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">TS</span>
                  </div>
                  <span className="text-lg text-gray-900 dark:text-white">TypeScript</span>
                </div>
              </div>
            </div>

            {/* Backend */}
            <div>
              <h3 className="text-2xl text-gray-900 dark:text-white mb-6">Backend</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-[#E8EEF7] dark:bg-[#1A2332] p-4 rounded-xl">
                  <div className="w-12 h-12 bg-[#339933] rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">Node</span>
                  </div>
                  <span className="text-lg text-gray-900 dark:text-white">Node.js</span>
                </div>
                <div className="flex items-center gap-4 bg-[#E8EEF7] dark:bg-[#1A2332] p-4 rounded-xl">
                  <div className="w-12 h-12 bg-[#3C873A] rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">E</span>
                  </div>
                  <span className="text-lg text-gray-900 dark:text-white">Express.js</span>
                </div>
                <div className="flex items-center gap-4 bg-[#E8EEF7] dark:bg-[#1A2332] p-4 rounded-xl">
                  <div className="w-12 h-12 bg-[#092E20] rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">D</span>
                  </div>
                  <span className="text-lg text-gray-900 dark:text-white">Django</span>
                </div>
                <div className="flex items-center gap-4 bg-[#E8EEF7] dark:bg-[#1A2332] p-4 rounded-xl">
                  <div className="w-12 h-12 bg-[#FF2D20] rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">L</span>
                  </div>
                  <span className="text-lg text-gray-900 dark:text-white">Laravel</span>
                </div>
              </div>
            </div>

            {/* Database */}
            <div>
              <h3 className="text-2xl text-gray-900 dark:text-white mb-6">Database</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-[#E8EEF7] dark:bg-[#1A2332] p-4 rounded-xl">
                  <div className="w-12 h-12 bg-[#4479A1] rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">MY</span>
                  </div>
                  <span className="text-lg text-gray-900 dark:text-white">MySQL</span>
                </div>
                <div className="flex items-center gap-4 bg-[#E8EEF7] dark:bg-[#1A2332] p-4 rounded-xl">
                  <div className="w-12 h-12 bg-[#336791] rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">PG</span>
                  </div>
                  <span className="text-lg text-gray-900 dark:text-white">PostgreSQL</span>
                </div>
                <div className="flex items-center gap-4 bg-[#E8EEF7] dark:bg-[#1A2332] p-4 rounded-xl">
                  <div className="w-12 h-12 bg-[#47A248] rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">M</span>
                  </div>
                  <span className="text-lg text-gray-900 dark:text-white">MongoDB</span>
                </div>
                <div className="flex items-center gap-4 bg-[#E8EEF7] dark:bg-[#1A2332] p-4 rounded-xl">
                  <div className="w-12 h-12 bg-[#DC382D] rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">R</span>
                  </div>
                  <span className="text-lg text-gray-900 dark:text-white">Redis</span>
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
                <div className="flex items-center gap-4 p-4 bg-[#E8F4FF] dark:bg-[#0A1929] rounded-xl">
                  <span className="text-[#0066FF] dark:text-[#0D6EFF]">01</span>
                  <span className="text-gray-900 dark:text-white">Study the project</span>
                </div>
                <div className="flex items-center gap-4 p-4 hover:bg-gray-50 dark:hover:bg-[#0A1929] rounded-xl transition-colors">
                  <span className="text-gray-400">02</span>
                  <span className="text-gray-700 dark:text-gray-400">Product design</span>
                </div>
                <div className="flex items-center gap-4 p-4 hover:bg-gray-50 dark:hover:bg-[#0A1929] rounded-xl transition-colors">
                  <span className="text-gray-400">03</span>
                  <span className="text-gray-700 dark:text-gray-400">Development & testing</span>
                </div>
                <div className="flex items-center gap-4 p-4 hover:bg-gray-50 dark:hover:bg-[#0A1929] rounded-xl transition-colors">
                  <span className="text-gray-400">04</span>
                  <span className="text-gray-700 dark:text-gray-400">Launch</span>
                </div>
                <div className="flex items-center gap-4 p-4 hover:bg-gray-50 dark:hover:bg-[#0A1929] rounded-xl transition-colors">
                  <span className="text-gray-400">05</span>
                  <span className="text-gray-700 dark:text-gray-400">
                    Maintenance (per request)
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side - Description and Details */}
            <div>
              <p className="text-gray-700 dark:text-gray-300 mb-12">
                We follow the Scrum framework, working in 2-week sprints and completing a set amount
                of work by the end of each. Then show a demo or release the product.
              </p>

              <h3 className="text-2xl md:text-3xl text-gray-900 dark:text-white mb-6">
                Study the project
              </h3>

              <p className="text-gray-700 dark:text-gray-300 mb-8">
                We analyze your requirements — project type, features, platforms — then create
                specification, design, and approve wireframes. In other cases, we study your
                already-made documentation and provide rough and detailed time & money estimates.
              </p>

              <div>
                <h4 className="text-lg text-gray-900 dark:text-white mb-4">Team</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#E8F4FF] dark:bg-[#0A1929] px-4 py-3 rounded-lg">
                    <span className="text-gray-900 dark:text-white">Business Analyst</span>
                  </div>
                  <div className="bg-[#E8F4FF] dark:bg-[#0A1929] px-4 py-3 rounded-lg">
                    <span className="text-gray-900 dark:text-white">UI/UX designer</span>
                  </div>
                  <div className="bg-[#E8F4FF] dark:bg-[#0A1929] px-4 py-3 rounded-lg">
                    <span className="text-gray-900 dark:text-white">Project Manager</span>
                  </div>
                  <div className="bg-[#E8F4FF] dark:bg-[#0A1929] px-4 py-3 rounded-lg">
                    <span className="text-gray-900 dark:text-white">Solution Architect</span>
                  </div>
                  <div className="bg-[#E8F4FF] dark:bg-[#0A1929] px-4 py-3 rounded-lg">
                    <span className="text-gray-900 dark:text-white">QA engineer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Industry Expertise Section */}
      <section className="py-16 md:py-24 px-4 bg-[#F5F5F5] dark:bg-[#0A0F1F]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-6">
            Core industry expertise
          </h2>
          <p className="text-lg text-[#0047AB] dark:text-[#0D6EFF] mb-12 max-w-4xl">
            Decade of experience accumulated in sophisticated web platforms, mobile applications,
            and complex systems in line with the latest industry trends.
          </p>

          {/* Main Industry Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {/* Healthcare */}
            <div className="bg-[#D6E8F5] dark:bg-[#1A3A52] rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl text-[#0047AB] dark:text-white">Healthcare</h3>
                <ArrowUpRight className="w-6 h-6 text-[#0047AB] dark:text-[#0D6EFF]" />
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-gray-900 dark:text-gray-300">
                  <span className="text-[#0047AB] dark:text-[#0D6EFF] mt-1">•</span>
                  <span>EHR, EMR, Patient Portal</span>
                </li>
                <li className="flex items-start gap-2 text-gray-900 dark:text-gray-300">
                  <span className="text-[#0047AB] dark:text-[#0D6EFF] mt-1">•</span>
                  <span>Telemedicine</span>
                </li>
                <li className="flex items-start gap-2 text-gray-900 dark:text-gray-300">
                  <span className="text-[#0047AB] dark:text-[#0D6EFF] mt-1">•</span>
                  <span>Patient Monitoring</span>
                </li>
              </ul>
            </div>

            {/* Supply Chain */}
            <div className="bg-[#D5EDD8] dark:bg-[#1A3D28] rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl text-[#2D7A4A] dark:text-white">Supply Chain</h3>
                <ArrowUpRight className="w-6 h-6 text-[#2D7A4A] dark:text-[#4ADE80]" />
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-gray-900 dark:text-gray-300">
                  <span className="text-[#2D7A4A] dark:text-[#4ADE80] mt-1">•</span>
                  <span>Warehouse Tech</span>
                </li>
                <li className="flex items-start gap-2 text-gray-900 dark:text-gray-300">
                  <span className="text-[#2D7A4A] dark:text-[#4ADE80] mt-1">•</span>
                  <span>Last Mile Delivery</span>
                </li>
                <li className="flex items-start gap-2 text-gray-900 dark:text-gray-300">
                  <span className="text-[#2D7A4A] dark:text-[#4ADE80] mt-1">•</span>
                  <span>Freight-Tech</span>
                </li>
              </ul>
            </div>

            {/* Finance */}
            <div className="bg-[#E8E3F5] dark:bg-[#2A1A52] rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl text-[#5B3A9D] dark:text-white">Finance</h3>
                <ArrowUpRight className="w-6 h-6 text-[#5B3A9D] dark:text-[#A78BFA]" />
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-gray-900 dark:text-gray-300">
                  <span className="text-[#5B3A9D] dark:text-[#A78BFA] mt-1">•</span>
                  <span>Banking, Investment</span>
                </li>
                <li className="flex items-start gap-2 text-gray-900 dark:text-gray-300">
                  <span className="text-[#5B3A9D] dark:text-[#A78BFA] mt-1">•</span>
                  <span>Insurance, Policy & Claims</span>
                </li>
                <li className="flex items-start gap-2 text-gray-900 dark:text-gray-300">
                  <span className="text-[#5B3A9D] dark:text-[#A78BFA] mt-1">•</span>
                  <span>Blockchain in FinTech</span>
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
            {/* Marketplaces */}
            <div className="bg-white dark:bg-[#1A2332] rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xl text-gray-900 dark:text-white">Marketplaces</h4>
                <ArrowUpRight className="w-5 h-5 text-[#0D6EFF]" />
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                B2B, B2C, C2C platforms that help to enlarge the business value
              </p>
            </div>

            {/* Media */}
            <div className="bg-white dark:bg-[#1A2332] rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xl text-gray-900 dark:text-white">Media</h4>
                <ArrowUpRight className="w-5 h-5 text-[#0D6EFF]" />
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Streaming and entertainment software: mobile, desktops, TVs
              </p>
            </div>

            {/* Retail */}
            <div className="bg-white dark:bg-[#1A2332] rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xl text-gray-900 dark:text-white">Retail</h4>
                <ArrowUpRight className="w-5 h-5 text-[#0D6EFF]" />
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                CRM, POS, RMS, and similar software for stores and retail chains
              </p>
            </div>

            {/* Travel */}
            <div className="bg-white dark:bg-[#1A2332] rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xl text-gray-900 dark:text-white">Travel</h4>
                <ArrowUpRight className="w-5 h-5 text-[#0D6EFF]" />
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Booking platforms, HMS, and TMS software for hospitality and tourism
              </p>
            </div>

            {/* Social */}
            <div className="bg-white dark:bg-[#1A2332] rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xl text-gray-900 dark:text-white">Social</h4>
                <ArrowUpRight className="w-5 h-5 text-[#0D6EFF]" />
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Innovative platforms designed for your business goals and model
              </p>
            </div>

            {/* Education */}
            <div className="bg-white dark:bg-[#1A2332] rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xl text-gray-900 dark:text-white">Education</h4>
                <ArrowUpRight className="w-5 h-5 text-[#0D6EFF]" />
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Educational systems, LMS, AR/VR, and all the digitals to learn and teach
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
                  Ready to build your web application?
                </h2>
              </div>

              {/* Center - Description */}
              <div>
                <p className="text-lg md:text-xl text-white/90">
                  Let's discuss your project requirements and create a powerful, scalable web
                  solution that drives your business forward.
                </p>
              </div>

              {/* Right - Button */}
              <div className="flex justify-end">
                <button
                  className="bg-white text-[#0066FF] px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300"
                  onClick={onContactClick}
                >
                  Let's talk
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
