import { Metadata } from 'next';

export const metadata: Metadata = {
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
