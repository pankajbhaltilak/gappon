import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Discover the story, mission and manufacturing quality behind Gaponn Trends.'
};

export default function AboutPage() {
  return (
    <div className="container-pad py-24">
      <p className="kicker">About Gaponn Trends</p>
      <h1 className="section-title mt-4 text-[#f4f1eb]">Precision Manufacturing. Elevated Formalwear.</h1>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <section className="glass-panel p-8"><h2 className="font-serif text-3xl text-white" style={{ fontFamily: 'var(--font-cormorant), serif' }}>Brand Story</h2><p className="mt-4 text-white/70">Gaponn Trends was created to serve a fast-growing premium menswear market with dependable manufacturing and contemporary formal style.</p></section>
        <section className="glass-panel p-8"><h2 className="font-serif text-3xl text-white" style={{ fontFamily: 'var(--font-cormorant), serif' }}>Manufacturing Quality</h2><p className="mt-4 text-white/70">Every shirt and trouser line goes through fabric inspection, stitch precision checks and final finishing audits.</p></section>
        <section className="glass-panel p-8"><h2 className="font-serif text-3xl text-white" style={{ fontFamily: 'var(--font-cormorant), serif' }}>Vision & Mission</h2><p className="mt-4 text-white/70">Our vision is to become India’s most trusted B2B formalwear partner for growth-driven retailers and distributors.</p></section>
        <section className="glass-panel p-8"><h2 className="font-serif text-3xl text-white" style={{ fontFamily: 'var(--font-cormorant), serif' }}>Indian Textile Credibility</h2><p className="mt-4 text-white/70">Powered by India’s textile ecosystem, we combine craftsmanship with scalable production for long-term business relationships.</p></section>
      </div>
    </div>
  );
}
