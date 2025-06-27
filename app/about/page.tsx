import { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SmoothScrollProvider from '@/components/layout/SmoothScrollProvider';
import AboutHero from '@/components/about/AboutHero';
import AboutStats from '@/components/about/AboutStats';
import AboutContent from '@/components/about/AboutContent';
import AboutCTA from '@/components/about/AboutCTA';

// Metadata for About page
export const generateMetadata = (): Metadata => {
  return {
    title: 'Về chúng tôi - TripC Solutions',
    description: 'Tìm hiểu về TripC Solutions - đối tác đáng tin cậy cho chuyển đổi số trong ngành du lịch và dịch vụ. Câu chuyện, giá trị và đội ngũ của chúng tôi.',
    keywords: 'về TripC Solutions, chuyển đổi số du lịch, đội ngũ TripC, giá trị công ty, về chúng tôi',
    openGraph: {
      title: 'Về chúng tôi - TripC Solutions',
      description: 'Tìm hiểu về TripC Solutions - đối tác đáng tin cậy cho chuyển đổi số trong ngành du lịch và dịch vụ.',
      url: 'https://solutions.tripc.ai/about',
      type: 'website',
    },
  };
};

export default function About() {
  return (
    <SmoothScrollProvider>
      <div className="min-h-screen bg-white">
        <Navbar currentPage="about" />
        <AboutHero />
        <AboutStats />
        <AboutContent />
        <AboutCTA />
        <Footer />
      </div>
    </SmoothScrollProvider>
  );
}