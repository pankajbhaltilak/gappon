import Image from 'next/image';
import Link from 'next/link';
import { AnimatedSection } from '@/components/animated-section';
import { ProductCard } from '@/components/product-card';
import { TestimonialSlider } from '@/components/testimonial-slider';
import { featuredProducts, testimonials } from '@/sections/home-data';

export default function HomePage() {
  return (
    <div className="pb-16 md:pb-20">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-black/85" />
        <Image src="https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=2000&q=80" alt="Gaponn premium mens formal wear" fill priority className="object-cover" />
        <div className="container-pad relative flex min-h-[70vh] items-center py-16 sm:min-h-[75vh] sm:py-20 md:min-h-[80vh] md:py-24">
          <div className="max-w-3xl">
            <p className="kicker">Gaponn Trends LLP</p>
            <h1 className="mt-4 font-serif text-3xl leading-[1.1] text-white sm:mt-6 sm:text-5xl md:text-7xl">Premium Men&apos;s Formal Wear Manufacturer</h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:mt-7 sm:text-lg">Business-ready shirts and trousers for retailers and distributors with consistent quality and delivery.</p>
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
              <Link href="/collection" className="rounded-full bg-[#ece9e2] px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-black sm:px-8">
                View Collection
              </Link>
              <Link href="/contact" className="rounded-full border border-white/30 px-6 py-3 text-center text-xs uppercase tracking-[0.2em] text-white sm:px-8">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <AnimatedSection className="container-pad py-14 sm:py-16 md:py-20">
        <p className="kicker">Featured products</p>
        <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.title} product={product} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-pad pb-8 sm:pb-10">
        <p className="kicker">Testimonials</p>
        <div className="mt-5 max-w-4xl sm:mt-6">
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </AnimatedSection>
    </div>
  );
}
