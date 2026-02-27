import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'View Gaponn Trends visual gallery showcasing premium formal wear and manufacturing presentation.'
};

const images = [
  'https://images.unsplash.com/photo-1617137984095-74e4e5e3613d?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?auto=format&fit=crop&w=900&q=80'
];

export default function GalleryPage() {
  return (
    <div className="container-pad py-24">
      <p className="kicker">Brand gallery</p>
      <h1 className="section-title mt-4 text-[#f4f1eb]">Visual Identity & Product Stories</h1>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((src) => (
          <div key={src} className="relative h-72 overflow-hidden rounded-2xl border border-white/10">
            <Image src={src} alt="Gaponn Trends gallery" fill className="object-cover" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}
