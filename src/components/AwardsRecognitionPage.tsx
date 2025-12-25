const bannerImage = "/assets/e9c8f88c271eb60537a73a96fcb67191d2cbecdd.png";
const certificate1 = "/assets/141bceaa45d2cc6b1b4d835d816db8a85d9fcdf7.png";
const certificate2 = "/assets/d0a20fddfc6f35cdb901501cce5c028c1c10d9c7.png";

interface AwardsRecognitionPageProps {
  onLogisoft360Click?: () => void;
}

export function AwardsRecognitionPage({ onLogisoft360Click }: AwardsRecognitionPageProps) {
  const awards = [
    {
      title: "Ministry of Higher Education",
      description:
        "Recognition through the awarding of dcsecurite a certificate as an emerging organization in the field of cybersecurity by the Ministry of Higher Education .",
      image: certificate1,
      date: "July 2, 2024",
    },
    {
      title: "Ministry of Knowledge Economy and Startups",
      description:
        "The company was also honored with a certificate of appreciation at the ministerial level on the occasion of the first anniversary of the founding of DCSecurite, in recognition of its achievements and results in the field of cybersecurity at the national economic level.",
      image: certificate2,
      date: "July 31, 2025",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0F1F]">
      {/* Banner Section - Exact image without any modifications */}
      <div className="w-full">
        <img
          src={bannerImage}
          alt="Awards & Recognition"
          className="w-full h-auto block"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>

      {/* Awards Section */}
      <section className="py-16 md:py-20 bg-white dark:bg-[#0A0F1F]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="space-y-16 md:space-y-24">
            {awards.map((award, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8 lg:gap-12 items-center`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <div className="relative">
                    <img
                      src={award.image}
                      alt={award.title}
                      className="w-full h-auto rounded-2xl shadow-2xl"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <div className="space-y-6">
                    {/* Date Badge */}
                    <div className="inline-block">
                      <span className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm">
                        {award.date}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl lg:text-5xl">
                      {award.title}
                    </h2>

                    {/* Description */}
                    <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed">
                      {award.description}
                    </p>

                    {/* Decorative line */}
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
