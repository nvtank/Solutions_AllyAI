'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SmoothScrollProvider from '@/components/layout/SmoothScrollProvider';
import ContactHero from '@/components/contact/ContactHero';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactMain from '@/components/contact/ContactMain';

export default function Contact() {
  return (
    <SmoothScrollProvider>
      <div className="min-h-screen bg-white">
        <Navbar currentPage="contact" />
        <ContactHero />
        <ContactInfo />
        <ContactMain />
        <Footer />
      </div>
    </SmoothScrollProvider>
  );
}