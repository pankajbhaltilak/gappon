import { Metadata } from 'next';
import { CollectionGrid } from '@/components/collection-grid';
import { featuredProducts } from '@/sections/home-data';

export const metadata: Metadata = {
  title: 'Collection',
  description: 'Explore Gaponn Trends shirt and trouser collections for premium mens formal wear.'
};

const products = [...featuredProducts, ...featuredProducts].map((product, index) => ({
  ...product,
  title: `${product.title} ${index + 1}`
}));

export default function CollectionPage() {
  return (
    <div className="container-pad py-20">
      <h1 className="section-title">Formal Wear Collection</h1>
      <p className="mt-4 max-w-3xl text-black/70">Image-led catalog designed for retailers and distributors looking for premium shirt and trouser assortments.</p>
      <div className="mt-12">
        <CollectionGrid products={products} />
      </div>
    </div>
  );
}
