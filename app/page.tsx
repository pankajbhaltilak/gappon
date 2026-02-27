import Image from 'next/image';
import Link from 'next/link';
import { AnimatedSection } from '@/components/animated-section';
import { ProductCard } from '@/components/product-card';
import { featuredProducts } from '@/sections/home-data';

export default function HomePage() {
  return (
    <div>
      <section className="relative h-[78vh] min-h-[560px] overflow-hidden bg-ebony">
        <Image
          src="https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=1800&q=80"
          alt="Premium mens formal wear"
          fill
          priority
          className="object-cover opacity-45"
        />
        <div className="container-pad relative flex h-full flex-col justify-center text-pearl">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-stone">Gaponn Trends</p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">Premium Mens Formal Wear</h1>
          <p className="mt-6 max-w-xl text-white/80">Crafted for modern retailers and distributors who demand consistency, quality, and timeless sophistication.</p>
          <div className="mt-10">
            <Link href="/collection" className="rounded-full bg-pearl px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-ebony">
              View Collection
            </Link>
          </div>
        </div>
      </section>

      <AnimatedSection className="container-pad py-20">
        <h2 className="section-title">About Gaponn Trends</h2>
        <p className="mt-5 max-w-3xl text-lg text-black/70">Gaponn Trends is a trusted menswear manufacturing and wholesale partner, supplying premium shirts and trousers to retailers across India.</p>
      </AnimatedSection>

      <AnimatedSection className="container-pad pb-20">
        <h2 className="section-title">Product Categories</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.title} product={product} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-ebony py-20 text-pearl">
        <div className="container-pad grid gap-8 md:grid-cols-3">
          <div><h3 className="text-xl font-semibold">Why Choose Gaponn</h3><p className="mt-3 text-white/70">Premium fabrics, strict QC and market-ready fits.</p></div>
          <div><h3 className="text-xl font-semibold">Wholesale Advantage</h3><p className="mt-3 text-white/70">Competitive pricing, scalable supply and dependable timelines.</p></div>
          <div><h3 className="text-xl font-semibold">Dealer Support</h3><p className="mt-3 text-white/70">Brand assets, trend updates and dedicated account management.</p></div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-pad py-20">
        <h2 className="section-title">Testimonials</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <blockquote className="rounded-2xl border border-black/10 bg-white p-6">“Gaponn’s consistency has transformed our menswear category.”<footer className="mt-3 text-sm text-black/60">Retail Partner, Mumbai</footer></blockquote>
          <blockquote className="rounded-2xl border border-black/10 bg-white p-6">“Excellent finish and quick wholesale turnaround.”<footer className="mt-3 text-sm text-black/60">Distributor, Bengaluru</footer></blockquote>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-stone/20 py-20">
        <div className="container-pad rounded-3xl bg-white p-10 shadow-luxe">
          <h2 className="section-title">Ready to Partner With Us?</h2>
          <p className="mt-4 max-w-2xl text-black/70">Connect for catalog access, pricing and wholesale onboarding.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/wholesale" className="rounded-full bg-ebony px-6 py-3 text-sm uppercase tracking-[0.15em] text-pearl">Become Dealer</Link>
            <Link href="/contact" className="rounded-full border border-ebony px-6 py-3 text-sm uppercase tracking-[0.15em]">Contact Us</Link>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
