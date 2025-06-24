'use client';

import { useState, useEffect } from 'react';
import { Brain, Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';

interface NavbarProps {
  currentPage?: string;
}

export default function Navbar({ currentPage = 'home' }: NavbarProps) {
  const [scrollY, setScrollY] = useState(0);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if navbar should be visible
      if (currentScrollY < 80) {
        // Always show navbar at top
        setIsVisible(true);
      } else if (currentScrollY > prevScrollY && currentScrollY > 80) {
        // Scrolling down - hide navbar
        setIsVisible(false);
      } else if (currentScrollY < prevScrollY) {
        // Scrolling up - show navbar
        setIsVisible(true);
      }
      
      setPrevScrollY(currentScrollY);
      setScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollY]);

  const isScrolled = scrollY > 30;
  const isHomePage = currentPage === 'home';

  const navItems = [
    { name: 'Mẫu', href: '/templates', hasDropdown: false },
    { name: 'Chúng tôi', href: '/about', hasDropdown: false },
    { name: 'Liên hệ', href: '/contact', hasDropdown: false },
  ];

  return (
    <>
      {/* Backdrop blur overlay when menu is open */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <nav className={`fixed top-0 p-2 w-full z-50 transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isScrolled || !isHomePage
          ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-gray-200/50' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto pt-2 px-4 sm:px-6">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <Link href="/" className="group flex items-center">
   
              <div className={`relative overflow-hidden transition-all duration-500 ${
                isScrolled || !isHomePage ? 'text-gray-900' : 'text-white'
              }`}>
                <div className="text-xl font-bold tracking-tight group-hover:translate-y-[-100%] transition-transform duration-300">
                  TRIPC SOLUTIONS
                </div>
                <div className="absolute top-full text-xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent group-hover:translate-y-[-100%] transition-transform duration-300">
                  TRIPC SOLUTIONS
                </div>
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link 
                    href={item.href}
                    className={`relative px-5 py-2.5 rounded-xl font-medium text-[20px] transition-all duration-500 flex items-center space-x-1 overflow-hidden ${
                      currentPage === item.name.toLowerCase() 
                        ? 'text-blue-600' 
                        : isScrolled || !isHomePage 
                          ? 'text-black hover:text-blue-600' 
                          : 'text-white/90 hover:text-white'
                    }`}
                    onMouseEnter={() => setHoveredItem(item.name)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">
                      {item.name}
                    </span>
                    {item.hasDropdown && (
                      <ChevronDown className={`w-4 h-4 transition-all duration-300 ${
                        hoveredItem === item.name ? 'rotate-180 scale-110' : ''
                      }`} />
                    )}
                    
                    {/* Animated background layers */}
                    <div className={`absolute inset-0 rounded-xl transition-all duration-500 ease-out ${
                      hoveredItem === item.name 
                        ? isScrolled || !isHomePage
                          ? 'bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50 scale-100 opacity-100'
                          : 'bg-gradient-to-r from-white/10 via-white/20 to-white/10 scale-100 opacity-100'
                        : 'scale-75 opacity-0'
                    }`} />
                    
                    {/* Shimmer effect */}
                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full transition-transform duration-700 ${
                      hoveredItem === item.name ? 'translate-x-full' : ''
                    }`} />
                    
                    {/* Border glow */}
                    <div className={`absolute inset-0 rounded-xl border-2 transition-all duration-300 ${
                      hoveredItem === item.name 
                        ? isScrolled || !isHomePage
                          ? 'border-blue-200/50 shadow-lg shadow-blue-500/10'
                          : 'border-white/30 shadow-lg shadow-white/10'
                        : 'border-transparent'
                    }`} />
                    
                    {/* Active indicator */}
                    {currentPage === item.name.toLowerCase() && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse" />
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-600/20 rounded-full animate-ping" />
                      </div>
                    )}
                    
                    {/* Hover particles */}
                    {hoveredItem === item.name && (
                      <>
                        <div className="absolute top-1 left-2 w-1 h-1 bg-blue-400/60 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <div className="absolute top-2 right-3 w-0.5 h-0.5 bg-blue-300/60 rounded-full animate-bounce" style={{ animationDelay: '200ms' }} />
                        <div className="absolute bottom-1 left-1/2 w-0.5 h-0.5 bg-blue-500/60 rounded-full animate-bounce" style={{ animationDelay: '400ms' }} />
                      </>
                    )}
                  </Link>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3">
              <button className={`hidden sm:block px-4 py-2 font-medium text-[20px] transition-all duration-300 rounded-lg hover:scale-105 relative overflow-hidden group ${
                isScrolled || !isHomePage 
                  ? 'text-black hover:text-blue-600' 
                  : 'text-white/90 hover:text-white'
              }`}>
                <span className="relative z-10">Đăng nhập</span>
                <div className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                  isScrolled || !isHomePage
                    ? 'bg-blue-50 scale-0 group-hover:scale-100'
                    : 'bg-white/10 scale-0 group-hover:scale-100'
                }`} />
              </button>

              
              {/* Mobile Menu Button */}
              <button 
                className={`lg:hidden p-2 rounded-lg transition-all duration-300 hover:scale-110 relative overflow-hidden group ${
                  isScrolled || !isHomePage 
                    ? 'text-gray-700' 
                    : 'text-white'
                }`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <div className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                  isScrolled || !isHomePage
                    ? 'bg-gray-100 scale-0 group-hover:scale-100'
                    : 'bg-white/10 scale-0 group-hover:scale-100'
                }`} />
                
                <div className="relative w-6 h-6 z-10">
                  <Menu className={`absolute inset-0 transition-all duration-300 ${
                    isMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                  }`} />
                  <X className={`absolute inset-0 transition-all duration-300 ${
                    isMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
                  }`} />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="py-4 space-y-2 border-t border-gray-200/50">
              {navItems.map((item, index) => (
                <Link 
                  key={item.name}
                  href={item.href} 
                  className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 transform relative overflow-hidden group ${
                    currentPage === item.name.toLowerCase() 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-gray-700 hover:text-blue-600'
                  } ${
                    isMenuOpen 
                      ? 'translate-x-0 opacity-100' 
                      : 'translate-x-4 opacity-0'
                  }`}
                  style={{ 
                    transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms' 
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-lg" />
                  
                  {/* Mobile hover shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-200/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
                </Link>
              ))}
              
              {/* Mobile Login Button */}
              <div className={`px-4 pt-4 border-t border-gray-200/50 transition-all duration-300 transform ${
                isMenuOpen 
                  ? 'translate-x-0 opacity-100' 
                  : 'translate-x-4 opacity-0'
              }`}
              style={{ 
                transitionDelay: isMenuOpen ? `${navItems.length * 50}ms` : '0ms' 
              }}>
                <button className="w-full px-4 py-3 text-gray-700 font-medium rounded-lg transition-all duration-300 relative overflow-hidden group hover:text-blue-600">
                  <span className="relative z-10">Login</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-lg" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Animated border bottom */}
        <div className={`absolute bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent transition-all duration-700 ${
          isScrolled || !isHomePage ? 'w-full opacity-100' : 'w-0 opacity-0'
        }`} />
      </nav>
    </>
  );
}