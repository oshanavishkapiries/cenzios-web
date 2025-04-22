import { aboutData } from "../../../data/sections/about-data";

export default function WhoWeAre() {
  return (
    <section className="py-16 bg-white myContainer">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {aboutData.whoWeAre.title}
          </h2>
          <p className="text-gray-600 mb-8">{aboutData.whoWeAre.description}</p>
          <div className="grid md:grid-cols-2 gap-6">
            {aboutData.whoWeAre.points.map((point, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <p className="text-gray-700">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 