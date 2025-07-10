'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SmoothScrollProvider from '@/components/layout/SmoothScrollProvider';
import HeroSection from '@/components/home/HeroSection';
import Story2 from '@/components/home/test/Story2';
import IndustriesSection from '@/components/home/test/IndustriesSection';
import SolutionsSection from '@/components/home/test/SolutionsSection';
import HorizontalScrollSection from '@/components/home/test/HorizontalScrollSection';
import TestimonialsSection from '@/components/home/test/TestimonialsSection';
import CTASection from '@/components/home/test/CTASection';
import Brand from '@/components/home/main/Brand';
import Benefits from '@/components/home/main/Benefits';
import CoreFeatures from '@/components/home/main/CoreFeatures';
import WhyChooseUs from '@/components/home/main/WhychooseUs';
import HowItWorks from '@/components/home/main/HowItWorks';
import ResultsShowcase from '@/components/home/main/ResultsShowcase';
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
