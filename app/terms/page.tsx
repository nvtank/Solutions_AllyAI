'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FileText, CheckCircle, UserCheck, Shield, AlertTriangle, Scale, ArrowLeft, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import ProfessionalNavbar from '@/components/layout/ProfessionalNavbar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const TermsPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <>
      <Navbar />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-indigo-600 via-purple-700 to-blue-800 pt-40 pb-16">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div ref={sectionRef} className={`text-center text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex items-center justify-center mb-6">
                <h1 className="text-4xl md:text-6xl font-bold">
                  {t('terms.title')}
                </h1>
              </div>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                {t('terms.subtitle')}
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Terms Content */}
        <div className="space-y-8 mb-16">
          {t('terms.items').map((term: any, index: number) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
                    {index + 1}. {term.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-base">
                    {term.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className={`bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-12 text-white text-center relative overflow-hidden mb-12 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-6">{t('terms.contact.title')}</h3>
            <p className="text-indigo-100 mb-8 leading-relaxed text-lg max-w-2xl mx-auto">
              {t('terms.contact.description')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <a 
                href={`mailto:${t('terms.contact.email')}`} 
                className="group flex items-center justify-center space-x-3 bg-white/20 backdrop-blur-sm px-8 py-4 rounded-xl hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="w-5 h-5" />
                <span className="font-semibold">{t('terms.contact.email')}</span>
              </a>
              <a 
                href={`tel:${t('terms.contact.phone').replace(/\s/g, '')}`} 
                className="group flex items-center justify-center space-x-3 bg-white/20 backdrop-blur-sm px-8 py-4 rounded-xl hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                <span className="font-semibold">{t('terms.contact.phone')}</span>
              </a>
            </div>

            <div className="mt-8 text-indigo-200 text-sm">
              {t('terms.contact.workingHours')}
            </div>
          </div>
           </div>

      </div>
      <Footer/>
    </div>
    </>
  );
};

export default TermsPage;
