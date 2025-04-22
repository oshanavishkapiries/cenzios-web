import { aboutData } from "../../../data/sections/about-data";

export default function Hero() {
  return (
    <section className="relative h-[350px] flex items-center justify-center py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {aboutData.hero.title}
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            {aboutData.hero.description}
          </p>
        </div>
      </div>
    </section>
  );
} 