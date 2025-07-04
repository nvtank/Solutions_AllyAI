'use client';

import { useState, useEffect } from 'react';
import { Brain, Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageToggle from '@/components/ui/LanguageToggle';

interface NavbarProps {
  currentPage?: string;
}

export default function Navbar({ currentPage = 'home' }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  const navItems = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.solutions'), href: '/solutions' },
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

      <nav className={`fixed top-0 p-2 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-200/50' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto pt-2 px-4 sm:px-6">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <Link href="/" className="group flex items-center">
              <div className="relative overflow-hidden transition-all duration-500">
                <div className={`text-xl font-bold tracking-tight group-hover:translate-y-[-100%] transition-all duration-300 ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}>
                  {t('nav.logo')}
                </div>
                <div className="absolute top-full text-xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent group-hover:translate-y-[-100%] transition-transform duration-300">
                  {t('nav.logo')}
                </div>
              </div>
            </Link>
            
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link 
                    href={item.href}
                    className={`relative px-4 py-2 rounded-lg transition-all duration-200 font-medium ${
                      isScrolled 
                        ? 'text-gray-700 hover:text-blue-600' 
                        : 'text-white/90 hover:text-white'
                    }`}
                    onMouseEnter={() => setHoveredItem(item.name)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {hoveredItem === item.name && (
                      <div className={`absolute inset-0 rounded-lg transition-all duration-200 ${
                        isScrolled ? 'bg-blue-50' : 'bg-white/10'
                      }`} />
                    )}
                  </Link>
                </div>
              ))}
              <LanguageToggle />
            </div>

            <button
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled 
                  ? 'hover:bg-gray-100 text-gray-700' 
                  : 'hover:bg-white/10 text-white'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl shadow-xl border-t border-gray-200/50 z-40">
            <div className="max-w-7xl mx-auto px-4 py-4">
              <div className="space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="px-4 py-3">
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