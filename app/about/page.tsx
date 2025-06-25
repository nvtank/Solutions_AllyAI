'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SmoothScrollProvider from '@/components/layout/SmoothScrollProvider';
import AboutHero from '@/components/about/AboutHero';
import AboutStats from '@/components/about/AboutStats';
import AboutContent from '@/components/about/AboutContent';
import AboutCTA from '@/components/about/AboutCTA';

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