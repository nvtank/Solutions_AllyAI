import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ally AI - Giải Pháp Công Nghệ Tương Lai',
  description: 'Xây dựng tương lai với Ally AI - Website builder thông minh, deploy tức thì, AI chatbot và hàng nghìn template đẹp mắt.',
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