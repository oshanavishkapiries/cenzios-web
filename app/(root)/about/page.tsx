import Hero from "@/components/sections/about/Hero";
import Stats from "@/components/sections/about/Stats";
import WhoWeAre from "@/components/sections/about/WhoWeAre";
import Journey from "@/components/sections/about/Journey";
import WhyChooseUs from "@/components/sections/about/WhyChooseUs";
import VisionMission from "@/components/sections/about/VisionMission";

export default function About() {
  return (
    <main>
      <Hero />
      <Stats />
      <VisionMission />
      <WhoWeAre />
      <Journey />
      <WhyChooseUs />
    </main>
  );
} 