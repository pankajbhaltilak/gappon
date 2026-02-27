import { Metadata } from 'next';
import { ServiceCard } from '@/components/service-card';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore Gaponn Textile Industry services across manufacturing, sourcing, innovation and supply chain support.'
};

const services = [
  {
    icon: '🏭',
    title: 'Garment Manufacturing',
    description: 'End-to-end production of premium formal shirts and trousers with scalable, quality-controlled operations.'
  },
  {
    icon: '🧵',
    title: 'Fabric Sourcing',
    description: 'Strategic sourcing of reliable, export-ready materials to match quality and budget requirements.'
  },
  {
    icon: '✏️',
    title: 'Design & Development',
    description: 'Pattern engineering and sample development aligned with market trends and brand positioning.'
  },
  {
    icon: '✅',
    title: 'Quality Control & Assurance',
    description: 'Multi-stage inspections ensure consistency in fabric behavior, stitching precision and final finishing.'
  },
  {
    icon: '🧶',
    title: 'Custom Fabric Manufacturing',
    description: 'Tailored fabric programs developed to specific texture, stretch, weight and usage needs.'
  },
  {
    icon: '💡',
    title: 'Fabric Innovation',
    description: 'Continuous material exploration for better comfort, durability and premium appearance.'
  },
  {
    icon: '🚚',
    title: 'Supply Chain Management',
    description: 'Structured planning and logistics support for efficient order execution and timely delivery.'
  }
];

export default function ServicesPage() {
  return (
    <div className="container-pad py-24">
      <p className="kicker">Our Services</p>
      <h1 className="section-title mt-4 text-[#f4f1eb]">Integrated Textile & Garment Solutions</h1>
      <p className="mt-5 max-w-3xl text-white/65">We combine textile expertise, production discipline and design intelligence to support retailers and distributors with dependable formalwear programs.</p>
      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </div>
  );
}
