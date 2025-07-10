'use client';

import { useState, useEffect } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  
  // Check if current page is homepage
  const isHomepage = pathname === '/';

  const languages = [
    { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
    { code: 'en', name: 'English', flag: '🇺🇸' }
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  const handleLanguageChange = (langCode: 'vi' | 'en') => {
    setLanguage(langCode);
    setIsOpen(false);
  };


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center space-x-2 px-3 py-2 text-sm font-medium transition-colors duration-200 ${
          scrolled || !isHomepage
            ? 'text-gray-600 hover:text-gray-900' 
            : 'text-white hover:text-black'
        }`}
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline">{currentLanguage?.flag}</span>
        <span className="hidden md:inline">{currentLanguage?.name}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-20">
            <div className="py-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code as 'vi' | 'en')}
                  className={`w-full text-left px-4 py-2 text-sm transition-colors duration-200 flex items-center space-x-3 ${
                    language === lang.code 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-black hover:text-blue-900 hover:bg-gray-50'
                  }`}
                >
                  <span className="text-lg">{lang.flag}</span>
                  <span>{lang.name}</span>
                  {language === lang.code && (
                    <div className="ml-auto w-2 h-2 bg-blue-600 rounded-full" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
