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
    <div className="container-pad py-24">
      <p className="kicker">Our collection</p>
      <h1 className="section-title mt-4 text-[#f4f1eb]">Luxury-Inspired Formal Assortments</h1>
      <p className="mt-5 max-w-3xl text-white/65">Explore image-led edits across shirts and trousers curated for premium retail positioning and high wholesale movement.</p>
      <div className="mt-12">
        <CollectionGrid products={products} />
      </div>
    </div>
  );
}
