import { aboutData } from "../../../data/sections/about-data";

export default function Journey() {
  return (
    <section className="py-16 bg-gray-50 myContainer">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Our Journey Till Now
        </h2>
        <div className="max-w-4xl mx-auto">
          {aboutData.journey.map((milestone, index) => (
            <div
              key={index}
              className="relative pl-8 pb-12 last:pb-0 border-l-2 border-blue-600"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 bg-blue-600 rounded-full" />
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-blue-600 font-semibold mb-2">
                  {milestone.date}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {milestone.title}
                </h3>
                <p className="text-gray-600">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 