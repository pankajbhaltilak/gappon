import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Explore product and factory visuals from Gaponn Trends.'
};

const images = [
  'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1618354691263-2f3d8f6de2f3?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1617137984095-74e4e5e3613d?auto=format&fit=crop&w=900&q=80'
];

export default function GalleryPage() {
  return (
    <div className="container-pad py-24">
      <p className="kicker">Brand gallery</p>
      <h1 className="section-title mt-4 text-[#f4f1eb]">Visual Identity & Product Stories</h1>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((src) => (
          <div key={src} className="group relative h-72 overflow-hidden rounded-2xl border border-white/10">
            <Image src={src} alt="Gaponn Trends gallery" fill className="object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
        ))}
      </div>
    </div>
  );
}
