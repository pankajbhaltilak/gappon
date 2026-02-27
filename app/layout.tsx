import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { WhatsAppFloat } from '@/components/whatsapp-float';

export const metadata: Metadata = {
  metadataBase: new URL('https://gaponntrends.com'),
  title: {
    default: 'Gaponn Trends | Premium Mens Formal Wear',
    template: '%s | Gaponn Trends'
  },
  description:
    'Gaponn Trends is a premium mens formal wear manufacturer and wholesaler delivering shirts and trousers for retailers and distributors across India.',
  keywords: ['mens formal wear', 'wholesale shirts', 'formal trousers', 'B2B apparel', 'Indian textile manufacturer'],
  openGraph: {
    title: 'Gaponn Trends',
    description: 'Premium mens formal wear manufacturer and wholesaler.',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
        <WhatsAppFloat phone="919999999999" />
      </body>
    </html>
  );
}
