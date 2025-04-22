import { TechStack } from "@/components/sections/TechStack";
import Hero from "../../../components/sections/products/Hero";
import ProductGrid from "../../../components/sections/products/ProductGrid";

export default function Products() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TechStack />
      <ProductGrid />
    </main>
  );
} 