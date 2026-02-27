import { Metadata } from 'next';
import { MaterialCard } from '@/components/material-card';
import { materials } from '@/sections/home-data';

export const metadata: Metadata = {
  title: 'Product & Materials',
  description: 'Explore cotton, twill, linen, denim and specialty material programs from Gaponn Textile Industry.'
};

export default function ProductPage() {
  return (
    <div className="container-pad py-24">
      <p className="kicker">Project & Material Showcase</p>
      <h1 className="section-title mt-4 text-[#f4f1eb]">Premium Materials For Formalwear Manufacturing</h1>
      <p className="mt-5 max-w-3xl text-white/65">A curated range of versatile fabrics and materials selected for style performance, wear comfort and commercial durability.</p>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {materials.map((material) => (
          <MaterialCard key={material.name} {...material} />
        ))}
      </div>
    </div>
  );
}
