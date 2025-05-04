import WhyWorkWithUs from "@/components/sections/careers/WhyWorkWithUs";
import OpenPositions from "@/components/sections/careers/OpenPositions";
import { careersData } from "@/data/sections/careers-data";
import SectionsHero from "@/components/sections/SectionsHero";
import ViewportAnimation from "@/components/ui/ViewportAnimation";

export default function Careers() {
  return (
    <main>
        <SectionsHero
          title={careersData.hero.title}
          description={careersData.hero.description}
        />
      <ViewportAnimation delay={0.1}>
        <WhyWorkWithUs />
      </ViewportAnimation>
      <ViewportAnimation delay={0.1}>
        <OpenPositions />
      </ViewportAnimation>
    </main>
  );
}
