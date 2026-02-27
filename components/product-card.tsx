import Image from 'next/image';

export interface Product {
  title: string;
  category: 'Shirt' | 'Trouser';
  image: string;
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-white/10 bg-[#121214] transition duration-300 hover:-translate-y-1 hover:border-[#c2b7a2]/40 hover:shadow-2xl">
      <div className="relative h-80 overflow-hidden">
        <Image src={product.image} alt={product.title} fill className="object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      </div>
      <div className="p-6">
        <p className="text-[11px] uppercase tracking-[0.24em] text-[#c2b7a2]">{product.category}</p>
        <h3 className="mt-3 font-serif text-2xl text-[#f4f1eb]" style={{ fontFamily: 'var(--font-cormorant), serif' }}>{product.title}</h3>
      </div>
    </article>
  );
}
