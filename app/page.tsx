import Image from 'next/image';
import Link from 'next/link';
import { AnimatedSection } from '@/components/animated-section';
import { ProductCard } from '@/components/product-card';
import { featuredProducts } from '@/sections/home-data';

const differentiators = [
  { title: 'Fabric Excellence', text: 'Refined yarn selection and premium finishing for elevated formalwear.' },
  { title: 'Retail Velocity', text: 'Designed assortments that convert quickly across urban retail formats.' },
  { title: 'Dependable Scale', text: 'Structured production with dependable lead times and quality consistency.' }
];

export default function HomePage() {
  return (
    <div className="pb-8">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-black/85" />
        <Image
          src="https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=2000&q=80"
          alt="Gaponn Trends premium formalwear"
          fill
          priority
          className="object-cover"
        />
        <div className="container-pad relative flex min-h-[86vh] items-center py-24">
          <div className="max-w-3xl">
            <p className="kicker">Premium Mens Formal Wear</p>
            <h1 className="mt-6 font-serif text-5xl leading-[1.05] text-white md:text-7xl" style={{ fontFamily: 'var(--font-cormorant), serif' }}>
              Crafting India’s Next-Generation Formalwear for Modern Retail.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/75">
              Gaponn Trends manufactures luxury-inspired shirts and trousers for distributors and retailers who demand design credibility, quality assurance, and commercial performance.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/collection" className="rounded-full bg-[#ece9e2] px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-black">
                View Collection
              </Link>
              <Link href="/wholesale" className="rounded-full border border-white/30 px-8 py-3 text-xs uppercase tracking-[0.2em] text-white">
                Become Dealer
              </Link>
            </div>
          </div>
        </div>
      </section>

      <AnimatedSection className="container-pad py-24">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <div>
            <p className="kicker">About the brand</p>
            <h2 className="section-title mt-4 max-w-3xl text-[#f4f1eb]">A corporate-ready menswear house with fashion-forward discipline.</h2>
          </div>
          <p className="text-base leading-relaxed text-white/65">
            We blend Indian textile credibility with premium international silhouettes to deliver formalwear programs that feel elevated, consistent, and ready for scale.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-pad pb-24">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="kicker">Curated range</p>
            <h2 className="section-title mt-3 text-[#f4f1eb]">Signature Categories</h2>
          </div>
          <Link href="/collection" className="hidden text-xs uppercase tracking-[0.2em] text-[#c2b7a2] md:block">Browse Full Catalog →</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.title} product={product} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-pad pb-24">
        <div className="glass-panel p-8 md:p-12">
          <p className="kicker">Why Gaponn Trends</p>
          <h2 className="section-title mt-4 text-[#f4f1eb]">Built for Fashion Perception + B2B Performance</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {differentiators.map((item) => (
              <article key={item.title} className="rounded-2xl border border-white/10 bg-black/20 p-6">
                <h3 className="font-serif text-2xl text-white" style={{ fontFamily: 'var(--font-cormorant), serif' }}>{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-pad pb-24">
        <div className="grid gap-6 md:grid-cols-2">
          <blockquote className="glass-panel p-8">
            <p className="text-lg leading-relaxed text-white/85">“Gaponn’s quality and design language helped us reposition our formalwear segment to a premium price point.”</p>
            <footer className="mt-6 text-xs uppercase tracking-[0.2em] text-[#c2b7a2]">Multi-city Retail Partner</footer>
          </blockquote>
          <blockquote className="glass-panel p-8">
            <p className="text-lg leading-relaxed text-white/85">“Consistent fit blocks and professional support make them one of our most reliable wholesale partners.”</p>
            <footer className="mt-6 text-xs uppercase tracking-[0.2em] text-[#c2b7a2]">Distribution Network, South India</footer>
          </blockquote>
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-pad">
        <div className="rounded-[2rem] border border-[#c2b7a2]/30 bg-[#c2b7a2]/10 p-10 md:p-14">
          <p className="kicker">Wholesale inquiry</p>
          <h2 className="section-title mt-4 text-[#f4f1eb]">Let’s Build a Stronger Formalwear Business Together</h2>
          <p className="mt-4 max-w-2xl text-white/70">Get the latest catalog, dealer pricing and onboarding support for your market.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/wholesale" className="rounded-full bg-[#ece9e2] px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-black">Request Dealer Access</Link>
            <Link href="/contact" className="rounded-full border border-white/35 px-7 py-3 text-xs uppercase tracking-[0.2em] text-white">Contact Team</Link>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
