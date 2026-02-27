import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Discover the story, mission and manufacturing quality behind Gaponn Trends.'
};

export default function AboutPage() {
  return (
    <div className="container-pad py-24">
      <p className="kicker">About Gaponn</p>
      <h1 className="section-title mt-4 text-[#f4f1eb]">Gaponn Textile Industry · Gaponn Trends LLP</h1>
      <p className="mt-6 max-w-3xl text-white/70">Gaponn Trends manufactures premium stitched trousers and shirts for B2B partners across India with a strong focus on quality control and reliable turnaround.</p>
    </div>
  );
}
