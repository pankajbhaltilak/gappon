import Image from 'next/image';
import Link from 'next/link';
import { AnimatedSection } from '@/components/animated-section';
import { ProductCard } from '@/components/product-card';
import { TestimonialSlider } from '@/components/testimonial-slider';
import { featuredProducts, testimonials } from '@/sections/home-data';

const highlights = [
  { title: 'Excellent Material', description: 'We source refined textiles that hold structure, comfort and premium visual appeal.' },
  { title: 'Quality Product', description: 'Every formal shirt and trouser is finished through disciplined quality checkpoints.' },
  { title: 'Trusted by Clients', description: 'Retailers and distributors rely on Gaponn for consistent supply and dependable quality.' }
];

const stats = [
  { value: '50+', label: 'Completed Projects' },
  { value: '3+', label: 'Export Countries' },
  { value: '750+', label: 'Satisfied Customers' }
];

const quality = [
  { label: 'Factory Experience', value: 95 },
  { label: 'Textile Material', value: 97 },
  { label: 'Worker Skills', value: 96 },
  { label: 'Machinery & Equipment', value: 93 }
];

const workflow = [
  { step: '01', title: 'Consultation', text: 'We understand your market positioning, quantity expectations and category requirements.' },
  { step: '02', title: 'Choose Your Material', text: 'Our team helps you select suitable fabrics based on comfort, durability and brand intent.' },
  { step: '03', title: 'Production', text: 'Approved designs move to structured production with strict process and quality control.' },
  { step: '04', title: 'Final Result', text: 'Finished products are inspected, packed and delivered for reliable retail performance.' }
];

export default function HomePage() {
  return (
    <div className="pb-10">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-black/85" />
        <Image
          src="https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=2000&q=80"
          alt="Gaponn premium mens formal wear"
          fill
          priority
          className="object-cover"
        />
        <div className="container-pad relative flex min-h-[86vh] items-center py-24">
          <div className="max-w-3xl">
            <p className="kicker">Gaponn Trends LLP</p>
            <h1 className="mt-6 font-serif text-5xl leading-[1.05] text-white md:text-7xl" style={{ fontFamily: 'var(--font-cormorant), serif' }}>
              Premium Men’s Formal Wear Manufacturer
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/75">You Can Never Go Wrong With Our Quality. We craft business-ready shirts and trousers for retailers and distributors with a focus on quality, innovation, and long-term trust.</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/product" className="rounded-full bg-[#ece9e2] px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-black">View Collection</Link>
              <Link href="/wholesale" className="rounded-full border border-white/30 px-8 py-3 text-xs uppercase tracking-[0.2em] text-white">Become Dealer</Link>
            </div>
          </div>
        </div>
      </section>

      <AnimatedSection className="container-pad py-24">
        <p className="kicker">About Preview</p>
        <h2 className="section-title mt-4 max-w-4xl text-[#f4f1eb]">GAPONN TEXTILE INDUSTRY delivers premium stitched shirts and trousers with a modern manufacturing mindset.</h2>
        <p className="mt-6 max-w-3xl text-white/70">Gaponn Trends is a leading menswear manufacturing partner focused on innovation, responsible production practices, and measurable customer satisfaction across domestic and export markets.</p>
      </AnimatedSection>

      <AnimatedSection className="container-pad pb-24">
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <article key={item.title} className="glass-panel p-7">
              <h3 className="font-serif text-3xl text-white" style={{ fontFamily: 'var(--font-cormorant), serif' }}>{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">{item.description}</p>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-pad pb-24">
        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((item) => (
            <div key={item.label} className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 text-center">
              <p className="font-serif text-5xl text-[#c2b7a2]" style={{ fontFamily: 'var(--font-cormorant), serif' }}>{item.value}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.14em] text-white/70">{item.label}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-pad pb-24">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="kicker">Featured products</p>
            <h2 className="section-title mt-3 text-[#f4f1eb]">Formal Wear Collection</h2>
          </div>
          <Link href="/product" className="hidden text-xs uppercase tracking-[0.2em] text-[#c2b7a2] md:block">Browse Materials & Products →</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.title} product={product} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-pad pb-24">
        <div className="glass-panel p-8 md:p-12">
          <p className="kicker">Why Choose Gaponn</p>
          <h2 className="section-title mt-4 text-[#f4f1eb]">Performance-Driven Textile Manufacturing</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {quality.map((item) => (
              <div key={item.label}>
                <div className="mb-2 flex items-center justify-between text-sm text-white/75">
                  <span>{item.label}</span>
                  <span>{item.value}%</span>
                </div>
                <div className="h-2 rounded-full bg-white/10">
                  <div className="h-2 rounded-full bg-[#c2b7a2]" style={{ width: `${item.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-pad pb-24">
        <p className="kicker mb-5">Client testimonials</p>
        <TestimonialSlider testimonials={testimonials} />
      </AnimatedSection>

      <AnimatedSection className="container-pad pb-24">
        <p className="kicker">How we work</p>
        <h2 className="section-title mt-3 text-[#f4f1eb]">A Structured Process From Concept to Delivery</h2>
        <ol className="mt-10 grid gap-6 md:grid-cols-2">
          {workflow.map((item) => (
            <li key={item.title} className="glass-panel p-7">
              <p className="text-xs uppercase tracking-[0.25em] text-[#c2b7a2]">Step {item.step}</p>
              <h3 className="mt-3 font-serif text-3xl text-white" style={{ fontFamily: 'var(--font-cormorant), serif' }}>{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">{item.text}</p>
            </li>
          ))}
        </ol>
      </AnimatedSection>

      <AnimatedSection className="container-pad">
        <section className="rounded-[2rem] border border-[#c2b7a2]/30 bg-[#c2b7a2]/10 p-10 md:p-14 text-center">
          <h2 className="section-title text-[#f4f1eb]">Consult With Us For The Suitable Material For Your Project</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">Share your requirement with our experts and get the right textile recommendation for your business objective.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="rounded-full bg-[#ece9e2] px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-black">Contact Us</Link>
            <Link href="/contact" className="rounded-full border border-white/35 px-7 py-3 text-xs uppercase tracking-[0.2em] text-white">Get Consultation</Link>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
