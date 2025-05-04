import { products } from "../../../data/sections/product-data";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  return (
    <section className="py-8 myContainer">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
