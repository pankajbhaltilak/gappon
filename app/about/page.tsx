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
      </div>
    </div>
  );
}
