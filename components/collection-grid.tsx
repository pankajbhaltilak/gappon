import { Product, ProductCard } from '@/components/product-card';

export function CollectionGrid({ products }: { products: Product[] }) {
  return (
    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={`${product.category}-${product.title}`} product={product} />
      ))}
    </div>
  );
}
