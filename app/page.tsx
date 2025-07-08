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
import Brand from '@/components/home/test/Brand';
import Benefits from '@/components/home/test/Benefits';
import CoreFeatures from '@/components/home/test/CoreFeatures';
import WhyChooseUs from '@/components/home/test/WhychooseUs';
import HowItWorks from '@/components/home/test/HowItWorks';
import ResultsShowcase from '@/components/home/test/ResultsShowcase';
export default function Home() {
  return (
    <SmoothScrollProvider>
      <div className="min-h-screen bg-white overflow-hidden">
        <Navbar currentPage="home" />
        <HeroSection />
        <Brand/>
        <Benefits/>
        <CoreFeatures />
        <WhyChooseUs />
        <HowItWorks />
        <ResultsShowcase />
        {/* <Story2 /> */}
        {/* <IndustriesSection />
        {/* <SolutionsSection /> */}
        {/* <HorizontalScrollSection />
        <TestimonialsSection />  */}

        <Footer />
      
      </div>
    </SmoothScrollProvider>
  );
}
