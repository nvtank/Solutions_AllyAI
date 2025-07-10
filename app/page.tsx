'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SmoothScrollProvider from '@/components/layout/SmoothScrollProvider';
import HeroSection from '@/components/home/HeroSection';
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
        <Footer />
      
      </div>
    </SmoothScrollProvider>
  );
}
