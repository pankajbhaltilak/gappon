import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Gaponn',
  description: 'Learn about Gaponn Textile Industry and its vision for premium men’s formal wear manufacturing.'
};

const visionPoints = [
  'To become a leading men’s formal wear manufacturer in India and global B2B markets.',
  'To consistently exceed customer expectations in quality, consistency and service.',
  'To build long-term, transparent relationships with retailers and distribution partners.',
  'To be recognized as a trusted fashion manufacturing partner for formal menswear.'
];

const missionPoints = [
  'Deliver premium stitched trousers and shirts using imported and performance-oriented fabrics.',
  'Strengthen innovation in pattern development, fit engineering and scalable production.',
  'Maintain strict quality control standards across sourcing, stitching, finishing and dispatch.',
  'Promote responsible manufacturing by optimizing materials, processes and workforce training.'
];

export default function AboutPage() {
  return (
    <div className="container-pad py-24">
      <p className="kicker">ABOUT GAPONN</p>
      <h1 className="section-title mt-4 text-[#f4f1eb]">Gaponn Textile Industry · Gaponn Trends LLP</h1>
      <p className="mt-6 max-w-4xl text-white/70">Gaponn Trends presents an exquisite range of stitched trousers and shirts crafted from imported premium fabrics—combining contemporary style, day-long comfort, and dependable quality for modern retail markets.</p>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <section className="glass-panel p-8">
          <h2 className="font-serif text-4xl text-white" style={{ fontFamily: 'var(--font-cormorant), serif' }}>Vision</h2>
          <ul className="mt-5 list-disc space-y-3 pl-5 text-white/70">
            {visionPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </section>

        <section className="glass-panel p-8">
          <h2 className="font-serif text-4xl text-white" style={{ fontFamily: 'var(--font-cormorant), serif' }}>Mission</h2>
          <ul className="mt-5 list-disc space-y-3 pl-5 text-white/70">
            {missionPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </section>
  title: 'About',
  description: 'Discover the story, mission and manufacturing quality behind Gaponn Trends.'
};

export default function AboutPage() {
  return (
    <div className="container-pad py-20">
      <h1 className="section-title">About Gaponn Trends</h1>
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <section><h2 className="text-2xl font-semibold">Brand Story</h2><p className="mt-3 text-black/70">Gaponn Trends was founded to bring premium formal fashion manufacturing to growing Indian retail markets.</p></section>
        <section><h2 className="text-2xl font-semibold">Manufacturing Quality</h2><p className="mt-3 text-black/70">Our production follows strict fabric checks, precision stitching, and finish controls for consistent quality.</p></section>
        <section><h2 className="text-2xl font-semibold">Vision & Mission</h2><p className="mt-3 text-black/70">We aim to be the preferred B2B formal wear source for high-performing distributors and retailers.</p></section>
        <section><h2 className="text-2xl font-semibold">Indian Textile Credibility</h2><p className="mt-3 text-black/70">Leveraging India’s textile expertise, we deliver craftsmanship and reliable scale for every season.</p></section>
      </div>
    </div>
  );
}
