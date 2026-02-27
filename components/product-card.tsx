import Image from 'next/image';

export interface Product {
  title: string;
  category: 'Shirt' | 'Trouser';
  image: string;
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-luxe">
      <div className="relative h-72 overflow-hidden">
        <Image src={product.image} alt={product.title} fill className="object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
      </div>
      <div className="p-5">
        <p className="text-xs uppercase tracking-[0.18em] text-black/50">{product.category}</p>
        <h3 className="mt-2 text-lg font-medium">{product.title}</h3>
      </div>
    </article>
  );
}
