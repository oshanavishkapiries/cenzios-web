import SectionsHero from "@/components/sections/SectionsHero";
import { TechStack } from "@/components/sections/TechStack";
import ProductGrid from "@/components/sections/products/ProductGrid";
import { hero } from "@/data/sections/services-data";

export default function Services() {
  return (
    <main className="min-h-screen">
      <SectionsHero title={hero.title} description={hero.description} />
      <TechStack />
      <ProductGrid />
    </main>
  );
}
