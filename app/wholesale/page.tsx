import { Metadata } from 'next';
import { MaterialCard } from '@/components/material-card';
import { materials } from '@/sections/home-data';

export const metadata: Metadata = {
  title: 'Wholesale',
  description: 'Wholesale supply information for Gaponn Trends formalwear products.'
};

export default function WholesalePage() {
  return (
    <div className="container-pad py-24">
      <p className="kicker">Wholesale</p>
      <h1 className="section-title mt-4 text-[#f4f1eb]">Materials & Supply</h1>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {materials.map((material) => (
          <MaterialCard key={material.name} {...material} />
        ))}
      </div>
    </div>
  );
}
