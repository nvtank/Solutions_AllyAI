'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight, CheckCircle, Sparkles, Play, Zap, Shield, Clock } from 'lucide-react';
import Image from 'next/image';

export default function ModernHeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const [language, setLanguage] = useState('vi');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  // Get hero data based on current language
  const getHeroData = () => {
    if (language === 'vi') {
      return {
        title: "TripC Solutions",
        subtitle: "Tăng Tốc Chuyển Đổi Số",
        description: "Khám phá nền tảng công nghệ tiên phong giúp doanh nghiệp tối ưu hóa quy trình, kết nối tương lai và dẫn đầu trong kỷ nguyên số hóa.",
        cta: {
          primary: "Liên hệ ngay",
          secondary: "Xem mẫu ngay"
        },
        stats: [
          { value: "500+", label: "Doanh nghiệp" },
          { value: "99.9%", label: "Uptime" },
          { value: "24/7", label: "Hỗ trợ" }
        ]
      };
    } else {
      return {
        title: "TripC Solution",
        subtitle: "Accelerate Digital Transformation",
        description: "Discover a cutting-edge technology platform that optimizes business processes, connects the future, and leads in the digital era.",
        cta: {
          primary: "Get Started",
          secondary: "Try Demo"
        },
        features: [
          { icon: Zap, text: "Smart Integration" },
          { icon: Clock, text: "24/7 Continuous Support" },
          { icon: Shield, text: "Enterprise-Grade Security" }
        ],
        stats: [
          { value: "500+", label: "Enterprises" },
          { value: "99.9%", label: "Uptime" },
          { value: "24/7", label: "Support" }
        ]
      };
    }
  };

  const heroData = getHeroData();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Trigger animations on component mount
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(3, 101, 250, 0.1) 0%, transparent 0%),
          conic-gradient(from 270deg at 52% 50%, 
            white 0deg, 
            white 60deg,
            #0365FA 10deg,
            #0251D8 10deg,
            #0365FA 210deg,
            white 10deg,
            white 10deg
          )
        `
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Geometric Shapes - Responsive */}
        <div className={`absolute top-10 left-4 sm:left-10 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-white/10 rounded-3xl transform rotate-45 animate-pulse transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`} style={{ animationDuration: '4s' }} />
        <div className={`absolute top-1/3 right-8 sm:right-20 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 bg-white/15 rounded-full animate-bounce transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`} style={{ animationDuration: '6s' }} />
        <div className={`absolute bottom-1/4 left-1/4 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-white/20 rounded-xl transform -rotate-12 animate-pulse transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`} style={{ animationDuration: '5s' }} />
        
        {/* Floating Dots Pattern - Hide on mobile */}
        <div className={`absolute top-20 right-1/3 transition-all duration-1000 delay-400 hidden sm:block ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-3">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/30 rounded-full animate-pulse"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: `${2 + (i % 3)}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Gradient Orbs - Responsive sizing */}
        <div className={`absolute top-1/2 left-0 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-white/5 rounded-full blur-3xl animate-pulse transition-all duration-1500 delay-200 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`} />
        <div className={`absolute bottom-0 right-0 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-white/10 rounded-full blur-3xl animate-pulse transition-all duration-1500 delay-600 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`} style={{ animationDelay: '2s' }} />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(3, 101, 250, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(3, 101, 250, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center py-8 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center w-full">
          {/* Left Content */}
          <div className={`space-y-6 sm:space-y-8 order-2 lg:order-1 transform transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            {/* Logo/Brand */}
            <div className={`flex items-center space-x-3 transform transition-all duration-800 delay-200 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#0365FA] to-[#0251D8] rounded-xl flex items-center justify-center shadow-lg">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
            </div>

            {/* Main Title */}
            <div className={`space-y-3 sm:space-y-4 transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 leading-tight">
                <span className="block bg-gradient-to-r from-[#0365FA] to-[#0251D8] bg-clip-text text-transparent">
                  {heroData.title}
                </span>
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#0365FA] leading-tight">
                {heroData.subtitle}
              </h2>
            </div>

            {/* Description */}
            <p className={`text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl transform transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              {heroData.description}
            </p>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 transform transition-all duration-1000 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#0365FA] to-[#0251D8] text-white rounded-2xl hover:from-[#0251D8] hover:to-[#013FB7] transition-all duration-500 flex items-center justify-center space-x-3 font-bold shadow-xl overflow-hidden text-sm sm:text-base">
                <span className="relative z-10">{heroData.cta.primary}</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 group-hover:translate-x-2 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </button>
              <button className="group px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#0365FA] text-[#0365FA] rounded-2xl hover:bg-[#0365FA] hover:text-white hover:border-transparent transition-all duration-500 flex items-center justify-center space-x-3 font-bold bg-white/70 backdrop-blur-sm text-sm sm:text-base">
                <Play className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>{heroData.cta.secondary}</span>
              </button>
            </div>

            {/* Stats */}
            <div className={`flex flex-wrap gap-6 sm:gap-8 justify-center sm:justify-start transform transition-all duration-1000 delay-900 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              {heroData.stats.map((stat, index) => (
                <div key={index} className={`text-center transform transition-all duration-800 ${isLoaded ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`} style={{ transitionDelay: `${1000 + index * 200}ms` }}>
                  <div className="text-2xl sm:text-3xl font-black text-[#0365FA]">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className={`relative order-1 lg:order-2 transform transition-all duration-1200 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            {/* Hero Image */}
            <div className="relative w-full mt-12 h-64 sm:h-80 md:h-96 lg:h-full flex items-center justify-center">
              <div className={`relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl transform transition-all duration-1500 delay-400 ${isLoaded ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
                <Image 
                  src="/hero1.png" 
                  alt="TripC Solution Hero"
                  width={800}
                  height={800}
                  className="w-full h-auto object-contain drop-shadow-2xl transform scale-100 sm:scale-110 md:scale-115 lg:scale-125 transition-transform duration-700 hover:scale-105 sm:hover:scale-115 md:hover:scale-105 lg:hover:scale-105"
                  priority
                />
                
                {/* Sparkles - Responsive positioning */}
                <Sparkles className={`absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#0365FA] animate-pulse transition-all duration-800 delay-1000 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`} />
                <Sparkles className={`absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 w-3 h-3 sm:w-4 sm:h-4 text-[#0365FA]/60 animate-pulse transition-all duration-800 delay-1200 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`} style={{ animationDelay: '0.5s' }} />
                
                {/* Floating background elements - Responsive sizing */}
                <div className={`absolute top-1/4 -left-4 sm:-left-6 md:-left-8 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-[#0365FA]/10 rounded-full blur-2xl animate-pulse transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`} style={{ animationDuration: '4s' }} />
                <div className={`absolute bottom-1/4 -right-4 sm:-right-6 md:-right-8 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-[#0365FA]/15 rounded-full blur-xl animate-pulse transition-all duration-1000 delay-800 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`} style={{ animationDuration: '6s', animationDelay: '2s' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}