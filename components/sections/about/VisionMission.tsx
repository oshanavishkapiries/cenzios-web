import { aboutData } from "../../../data/sections/about-data";

export default function VisionMission() {
  return (
    <section className="py-16 bg-gray-50 myContainer">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Vision */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {aboutData.vision.title}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {aboutData.vision.description}
            </p>
          </div>

          {/* Mission */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {aboutData.mission.title}
            </h2>
            <p className="text-gray-600 mb-6">{aboutData.mission.description}</p>
            <ul className="space-y-3">
              {aboutData.mission.points.map((point, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="h-6 w-6 text-blue-600 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
} 