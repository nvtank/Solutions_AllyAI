import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TripC Solutions - Advanced AI Industrial Solutions',
  description: 'Transform your industrial operations with TripC Solutions - intelligent AI systems, predictive analytics, and comprehensive automation solutions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}