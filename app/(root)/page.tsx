import Aboutus from "@/components/sections/Aboutus";
import GetStarted from "@/components/sections/GetStarted";
import Hero from "@/components/sections/Hero";
import OurSolutions from "@/components/sections/OurSolutions";
import Perfection from "@/components/sections/Perfection";
import ViewportAnimation from "@/components/ui/ViewportAnimation";

export default function Home() {
  return (
    <section>
        <Hero />
      <ViewportAnimation delay={0.1}>
        <OurSolutions />
      </ViewportAnimation>
      <ViewportAnimation delay={0.1}>
        <Aboutus />
      </ViewportAnimation>
      <ViewportAnimation delay={0.1}>
        <Perfection />
      </ViewportAnimation>
      <ViewportAnimation delay={0.1}>
        <GetStarted />
      </ViewportAnimation>
    </section>
  );
}
