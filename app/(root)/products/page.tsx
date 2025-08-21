import SectionsHero from "@/components/sections/SectionsHero";
import { TechStack } from "@/components/sections/TechStack";
import ProductGrid from "@/components/sections/products/ProductGrid";
import { hero } from "@/data/sections/product-data";
import ViewportAnimation from "@/components/ViewportAnimation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products - Software Solutions",
  description:
    "Discover Cenzios Pvt Ltd software products and solutions. From web applications to mobile apps, custom software, and enterprise solutions built with cutting-edge technologies.",
  keywords: [
    "software products",
    "web applications",
    "mobile applications",
    "custom software products",
    "enterprise software solutions",
    "software solutions Sri Lanka",
  ],
  openGraph: {
    title: "Products - Software Solutions - Cenzios Pvt Ltd",
    description:
      "Discover Cenzios Pvt Ltd software products and solutions. From web applications to mobile apps, custom software, and enterprise solutions built with cutting-edge technologies.",
    url: "https://cenzios.com/products",
  },
  twitter: {
    title: "Products - Software Solutions - Cenzios Pvt Ltd",
    description:
      "Discover Cenzios Pvt Ltd software products and solutions. From web applications to mobile apps, custom software, and enterprise solutions built with cutting-edge technologies.",
  },
  alternates: {
    canonical: "/products",
  },
};

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
