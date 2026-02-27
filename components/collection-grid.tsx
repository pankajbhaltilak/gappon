'use client';

import { useMemo, useState } from 'react';
import { ProductCard, Product } from '@/components/product-card';

export function CollectionGrid({ products }: { products: Product[] }) {
  const [active, setActive] = useState<'All' | 'Shirt' | 'Trouser'>('All');

  const filtered = useMemo(() => {
    if (active === 'All') return products;
    return products.filter((product) => product.category === active);
  }, [active, products]);

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-3">
        {['All', 'Shirt', 'Trouser'].map((filter) => (
          <button
            key={filter}
            onClick={() => setActive(filter as 'All' | 'Shirt' | 'Trouser')}
            className={`rounded-full border px-5 py-2 text-xs uppercase tracking-[0.2em] transition ${
              active === filter ? 'border-[#c2b7a2] bg-[#c2b7a2]/20 text-[#f4f1eb]' : 'border-white/15 bg-white/5 text-white/65 hover:text-white'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => (
          <ProductCard key={`${product.category}-${product.title}`} product={product} />
        ))}
      </div>
    </div>
  );
}
