import WhyWorkWithUs from "@/components/sections/careers/WhyWorkWithUs";
import OpenPositions from "@/components/sections/careers/OpenPositions";
import { careersData } from "@/data/sections/careers-data";
import SectionsHero from "@/components/sections/SectionsHero";

export default function Careers() {
  return (
    <main>
      <SectionsHero title={careersData.hero.title} description={careersData.hero.description} />
      <WhyWorkWithUs />
      <OpenPositions />
    </main>
  );
} 