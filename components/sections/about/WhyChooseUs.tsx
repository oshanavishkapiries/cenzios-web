import { aboutData } from "../../../data/sections/about-data";

export default function WhyChooseUs() {
  return (
    <section className="relative p-4 my-12 py-20 bg-gradient-to-br from-gray-50 to-gray-100 myContainer overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Content */}
        <div className="relative">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-primary font-semibold mb-4 block">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {aboutData.whyChooseUs.title}
            </h2>
            <p className="text-gray-600 text-lg">
              {aboutData.whyChooseUs.description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {aboutData.whyChooseUs.reasons.map((reason, index) => (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                {/* Icon placeholder - you can replace this with actual icons */}
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={
                        index === 0
                          ? "M13 10V3L4 14h7v7l9-11h-7z"
                          : index === 1
                          ? "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          : "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                      }
                    />
                  </svg>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                  {reason.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>

                {/* Decorative line */}
                <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
