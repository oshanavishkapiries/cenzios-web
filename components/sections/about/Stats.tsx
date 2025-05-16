import TextTicker from "@/components/syntaxui/TextTicker";
import { aboutData } from "../../../data/sections/about-data";

export default function Stats() {
  return (
    <section className="py-16 bg-white myContainer">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {aboutData.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex flex-row items-center justify-center text-4xl font-bold text-blue-600 mb-2">
                <TextTicker key={index} value={Number(stat.number)} />
                <span className="text-blue-600">{stat.icon}</span>
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
