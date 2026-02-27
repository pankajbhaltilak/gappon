import { Metadata } from 'next';
import { ServiceCard } from '@/components/service-card';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore Gaponn Trends manufacturing and wholesale services.'
};

const services = [
  { icon: '🧵', title: 'Bulk Manufacturing', description: 'Scalable stitching and finishing for shirts and trousers.' },
  { icon: '🧪', title: 'Fabric Selection', description: 'Material consultation based on your market and positioning.' },
  { icon: '🚚', title: 'Wholesale Dispatch', description: 'Reliable dispatch planning and support for repeat orders.' }
];

export default function ServicesPage() {
  return (
    <div className="container-pad py-24">
      <p className="kicker">Services</p>
      <h1 className="section-title mt-4 text-[#f4f1eb]">What We Offer</h1>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </div>
  );
}
