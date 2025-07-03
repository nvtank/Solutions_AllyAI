'use client';

import { useState } from 'react';
import { Brain, Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { navbarContent } from '@/data';

interface NavbarProps {
  currentPage?: string;
}

export default function Navbar({ currentPage = 'home' }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <>
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <nav className="fixed top-0 p-2 w-full z-50 transition-all duration-300 bg-white/80 backdrop-blur-xl shadow-lg border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto pt-2 px-4 sm:px-6">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <Link href="/" className="group flex items-center">
              <div className="relative overflow-hidden transition-all duration-500 text-gray-900">
                <div className="text-xl font-bold tracking-tight group-hover:translate-y-[-100%] transition-transform duration-300">
                  {navbarContent.logo}
                </div>
                <div className="absolute top-full text-xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent group-hover:translate-y-[-100%] transition-transform duration-300">
                  {navbarContent.logo}
                </div>
              </div>
            </Link>
            
            <div className="hidden lg:flex items-center space-x-1">
              {navbarContent.navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link 
                    href={item.href}
                    className="relative px-4 py-2 rounded-lg text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                    onMouseEnter={() => setHoveredItem(item.name)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {hoveredItem === item.name && (
                      <div className="absolute inset-0 bg-blue-50 rounded-lg transition-all duration-200" />
                    )}
                  </Link>
                </div>
              ))}
            </div>

            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
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
                {navbarContent.navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}