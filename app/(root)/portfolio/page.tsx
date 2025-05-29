import PortFolio from "@/components/sections/portfolio/PortFolio";
//import SectionsHero from "@/components/sections/SectionsHero";
import ViewportAnimation from "@/components/ViewportAnimation";
import React from "react";

const PortFlioPage = () => {
  return (
    <main>
      {/* <SectionsHero title="Portfolio" description="Our Portfolio" /> */}
      <ViewportAnimation delay={0.1}>
        <PortFolio />
      </ViewportAnimation>
    </main>
  );
};

export default PortFlioPage;
