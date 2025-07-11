'use client';

import { useState, useEffect } from 'react';
import { Brain, Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageToggle from '@/components/ui/LanguageToggle';
import { motion } from 'framer-motion';

interface NavbarProps {
  currentPage?: string;
}

export default function Navbar({ currentPage = 'home' }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const { t } = useLanguage();
  const pathname = usePathname();
  
  // Check if current page is homepage
  const isHomepage = pathname === '/';

  const navItems = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.about'), href: '/about' },
    // { name: t('nav.solutions'), href: '/solutions' },
    { name: t('nav.contact'), href: '/contact' },
    { name: t('nav.templates'), href: '/templates' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <nav className={`fixed top-0 pt-2 pb-2 px-2 w-full z-50 transition-all duration-300 ${
        isScrolled || !isHomepage
          ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-14">
      
            <Link href="/" className="flex items-center">
              <div className={`text-xl font-bold tracking-tight transition-colors duration-200 ${
                isScrolled || !isHomepage ? 'text-gray-900' : 'lg:text-gray-900 text-white'
              }`}>
                {t('nav.logo')}
              </div>
            </Link>
            
            <div className={`hidden lg:flex items-center relative rounded-xl p-1 ${
              isScrolled || !isHomepage
                ? 'bg-gray-100/80 backdrop-blur-sm' 
                : ' backdrop-blur-sm'
            }`}>
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative h-full"
                >
                  <Link
                    href={item.href}
                    className={`relative z-10 px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg ${
                      isScrolled || !isHomepage
                        ? activeTab === item.name 
                          ? 'text-gray-900' 
                          : 'text-gray-900 hover:text-gray-900'
                        : activeTab === item.name 
                          ? 'text-white' 
                          : 'text-white hover:text-gray-900'
                    }`}
                    onMouseEnter={() => setActiveTab(item.name)}
                    onMouseLeave={() => setActiveTab(null)}
                  >
                    {item.name}
                  </Link>
                  
                  {/* Animated background - Motion.dev style */}
                  {activeTab === item.name && (
                    <motion.div
                      className={`absolute -inset-2 h-[45px] rounded-lg ${
                        isScrolled || !isHomepage
                          ? 'bg-gray-900 bg-opacity-20 shadow-lg' 
                          : 'bg-gray-200 bg-opacity-10 shadow-lg text-white'
                      }`}
                      layoutId="activeTab"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                        mass: 0.8
                      }}
                    />
                  )}
                </div>
              ))}
              
              <div className="ml-0">
                <LanguageToggle />
              </div>


            </div>
            <button
              className={`lg:hidden p-2 rounded-lg transition-colors duration-200 ${
                isScrolled || !isHomepage
                  ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100' 
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40">
            <div className="max-w-7xl mx-auto px-4 py-4">
              <div className="space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                

                <div className="px-4 py-3 border-t border-gray-200 mt-4 pt-4">
                  <LanguageToggle />
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}