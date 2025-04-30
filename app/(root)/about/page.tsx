import Stats from "@/components/sections/about/Stats";
import WhoWeAre from "@/components/sections/about/WhoWeAre";
import Journey from "@/components/sections/about/Journey";
import WhyChooseUs from "@/components/sections/about/WhyChooseUs";
import VisionMission from "@/components/sections/about/VisionMission";
import SectionsHero from "@/components/sections/SectionsHero";

import { aboutData } from "@/data/sections/about-data";

export default function About() {
  return (
    <main>
      <SectionsHero title={aboutData.hero.title} description={aboutData.hero.description} />
      <Stats />
      <VisionMission />
      <WhoWeAre />
      <Journey />
      <WhyChooseUs />
    </main>
  );
}
