import type { Metadata, Viewport } from 'next';
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
    'Gaponn Trends is a premium mens formal wear manufacturer and wholesaler delivering shirts and trousers for retailers and distributors across India.'
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <Navbar />
        <main className="min-h-screen pt-16 md:pt-20">{children}</main>
        <Footer />
        <WhatsAppFloat phone="919186010998" />
      </body>
    </html>
  );
}
