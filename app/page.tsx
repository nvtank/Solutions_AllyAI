'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SmoothScrollProvider from '@/components/layout/SmoothScrollProvider';
import HeroSection from '@/components/home/HeroSection';
import Story2 from '@/components/home/Story2';
import IndustriesSection from '@/components/home/IndustriesSection';
import SolutionsSection from '@/components/home/SolutionsSection';
import HorizontalScrollSection from '@/components/home/HorizontalScrollSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTASection from '@/components/home/CTASection';
import FooterCTASection from '@/components/home/FooterCTASection';

export default function Home() {
  return (
    <SmoothScrollProvider>
      <div className="min-h-screen bg-white overflow-hidden">
        <Navbar currentPage="home" />
        <HeroSection />
        <Story2 />
        <IndustriesSection />
        {/* <SolutionsSection /> */}
        <HorizontalScrollSection />
        <TestimonialsSection />
        <FooterCTASection />
        <Footer />
      
      </div>
    </SmoothScrollProvider>
  );
}
