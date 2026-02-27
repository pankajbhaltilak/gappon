import { Metadata } from 'next';
import { CollectionGrid } from '@/components/collection-grid';
import { featuredProducts } from '@/sections/home-data';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Browse formal shirts and trousers by Gaponn Trends.'
};

export default function ProductPage() {
  return (
    <div className="container-pad py-24">
      <p className="kicker">Products</p>
      <h1 className="section-title mt-4 text-[#f4f1eb]">Our Product Line</h1>
      <CollectionGrid products={featuredProducts} />
    </div>
  );
}
