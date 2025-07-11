import { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SmoothScrollProvider from '@/components/layout/SmoothScrollProvider';
import ContactHero from '@/components/contact/ContactHero';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactMain from '@/components/contact/ContactMain';

// Metadata for Contact page
export const generateMetadata = (): Metadata => {
  return {
    title: 'Liên hệ - TripC Solutions',
    description: 'Liên hệ với TripC Solutions để được tư vấn miễn phí về các giải pháp booking đa dịch vụ. Hotline, email và địa chỉ văn phòng.',
    keywords: 'liên hệ TripC Solutions, tư vấn booking platform, hỗ trợ khách hàng, contact TripC',
    openGraph: {
      title: 'Liên hệ - TripC Solutions',
      description: 'Liên hệ với TripC Solutions để được tư vấn miễn phí về các giải pháp booking đa dịch vụ.',
      url: 'https://solutions.tripc.ai/contact',
      type: 'website',
    },
  };
};

export default function Contact() {
  return (
    <SmoothScrollProvider>
      <div className="min-h-screen bg-white">
        <Navbar currentPage="contact" />
        <ContactHero />
        {/* <ContactInfo /> */}
        <ContactMain />
        <Footer />
      </div>
    </SmoothScrollProvider>
  );
}