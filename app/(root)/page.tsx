import Aboutus from "@/components/sections/Aboutus";
import GetStarted from "@/components/sections/GetStarted";
import Hero from "@/components/sections/Hero";
import OurSolutions from "@/components/sections/OurSolutions";
import Perfection from "@/components/sections/Perfection";
import { Reviews } from "@/components/sections/Reviews";
import { TechStack } from "@/components/sections/TechStack";
export default function Home() {
  return (
    <section>
      <Hero />
      <OurSolutions />
      <Aboutus />
      <Perfection />
      <TechStack />
      <GetStarted />
      <Reviews />
    </section>
  );
}
