import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Analytics from '@/components/analytics/Analytics';
import { LanguageProvider } from '@/contexts/LanguageContext';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://solutions.tripc.ai'),
  title: {
    default: 'TripC Solutions - Nền tảng đặt chỗ đa dịch vụ',
    template: '%s | TripC Solutions'
  },
  description: 'TripC Solutions cung cấp nền tảng booking đa dịch vụ cho du lịch, ẩm thực, giải trí. Giải pháp chuyển đổi số toàn diện cho doanh nghiệp.',
  keywords: [
    'booking platform',
    'travel booking',
    'hotel reservation',
    'tour booking',
    'restaurant reservation',
    'entertainment booking',
    'digital transformation',
    'TripC Solutions',
    'đặt chỗ trực tuyến',
    'du lịch',
    'khách sạn',
    'nhà hàng',
    'giải trí'
  ],
  authors: [{ name: 'TripC Solutions' }],
  creator: 'TripC Solutions',
  publisher: 'TripC Solutions',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: 'https://solutions.tripc.ai',
    siteName: 'TripC Solutions',
    title: 'TripC Solutions - Nền tảng đặt chỗ đa dịch vụ',
    description: 'TripC Solutions cung cấp nền tảng booking đa dịch vụ cho du lịch, ẩm thực, giải trí. Giải pháp chuyển đổi số toàn diện cho doanh nghiệp.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TripC Solutions Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TripC Solutions - Nền tảng đặt chỗ đa dịch vụ',
    description: 'TripC Solutions cung cấp nền tảng booking đa dịch vụ cho du lịch, ẩm thực, giải trí.',
    images: ['/images/og-image.jpg'],
    creator: '@tripcsolutions',
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  alternates: {
    canonical: 'https://solutions.tripc.ai',
    languages: {
      'vi-VN': 'https://solutions.tripc.ai',
      'en-US': 'https://solutions.tripc.ai/en',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={inter.className}>
        <Analytics />
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "TripC Solutions",
              "url": "https://solutions.tripc.ai",
              "logo": "https://solutions.tripc.ai/images/logo.png",
              "description": "TripC Solutions cung cấp nền tảng booking đa dịch vụ cho du lịch, ẩm thực, giải trí.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Innovation Drive",
                "addressLocality": "Ho Chi Minh City",
                "addressCountry": "VN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+84-xxx-xxx-xxx",
                "contactType": "customer service",
                "email": "bd@tripc.ai"
              },
              "sameAs": [
                "https://www.facebook.com/tripcsolutions",
                "https://www.linkedin.com/company/tripcsolutions"
              ]
            })
          }}
        />
      </body>
    </html>
  );
}