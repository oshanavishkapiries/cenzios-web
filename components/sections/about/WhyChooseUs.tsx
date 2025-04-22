import { aboutData } from "../../../data/sections/about-data";

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white myContainer">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {aboutData.whyChooseUs.title}
          </h2>
          <p className="text-gray-600">{aboutData.whyChooseUs.description}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {aboutData.whyChooseUs.reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-2xl font-bold text-blue-600 mb-4">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 