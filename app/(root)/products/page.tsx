import SectionsHero from "@/components/sections/SectionsHero";
import { TechStack } from "@/components/sections/TechStack";
import ProductGrid from "@/components/sections/products/ProductGrid";
import { hero } from "@/data/sections/product-data";
import ViewportAnimation from "@/components/ViewportAnimation";

export default function Services() {
  return (
    <main className="min-h-screen">
      <SectionsHero title={hero.title} description={hero.description} />
      <ViewportAnimation delay={0.1}>
        <TechStack />
      </ViewportAnimation>
      <ViewportAnimation delay={0.1}>
        <ProductGrid />
      </ViewportAnimation>
    </main>
  );
}
