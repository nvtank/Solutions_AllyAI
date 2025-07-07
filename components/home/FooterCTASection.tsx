'use client';

import { useRef, useEffect } from 'react';
import { ArrowRight, Mail, Phone, MessageSquare, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useLanguage } from '@/contexts/LanguageContext';

export default function FooterCTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (contentRef.current) {
        gsap.fromTo(contentRef.current.children,
          {
            opacity: 0,
            y: 30,
            scale: 0.95
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  const ctaData = language === 'vi' ? {
    title: "Sẵn sàng bắt đầu hành trình của bạn?",
    subtitle: "Hãy để chúng tôi giúp bạn tạo ra những giải pháp tuyệt vời cho doanh nghiệp",
    features: [
      { icon: <Mail className="w-5 h-5" />, text: "Tư vấn miễn phí" },
      { icon: <Phone className="w-5 h-5" />, text: "Hỗ trợ 24/7" },
      { icon: <MessageSquare className="w-5 h-5" />, text: "Phản hồi nhanh chóng" }
    ],
    buttonText: "Liên hệ ngay"
  } : {
    title: "Ready to start your journey?",
    subtitle: "Let us help you create amazing solutions for your business",
    features: [
      { icon: <Mail className="w-5 h-5" />, text: "Free consultation" },
      { icon: <Phone className="w-5 h-5" />, text: "24/7 support" },
      { icon: <MessageSquare className="w-5 h-5" />, text: "Quick response" }
    ],
    buttonText: "Contact us now"
  };

  const scrollToFooter = () => {
    const footer = document.querySelector('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} className="relative py-20 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#0365FA]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#0365FA]/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#0365FA]/3 rounded-full blur-3xl" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-[#0365FA]/10 animate-float ${
              i % 3 === 0 ? 'w-2 h-2' : i % 3 === 1 ? 'w-1 h-1' : 'w-1.5 h-1.5'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={contentRef} className="text-center">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-6 h-6 text-[#0365FA] animate-pulse" />
                <span className="text-[#0365FA] font-semibold text-sm uppercase tracking-wider">
                  Bắt đầu ngay
                </span>
                <Sparkles className="w-6 h-6 text-[#0365FA] animate-pulse" />
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {ctaData.title}
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {ctaData.subtitle}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {ctaData.features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-[#0365FA]/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#0365FA] to-[#0251C8] rounded-xl flex items-center justify-center text-white mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <p className="text-gray-700 font-medium group-hover:text-[#0365FA] transition-colors duration-300">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={scrollToFooter}
              className="group relative px-8 py-4 bg-gradient-to-r from-[#0365FA] to-[#0251C8] text-white rounded-full hover:shadow-2xl hover:shadow-[#0365FA]/25 transition-all duration-500 flex items-center space-x-3 font-semibold text-lg overflow-hidden min-w-[200px]"
            >
              {/* Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0365FA] to-[#0251C8] blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500 scale-110" />
              
              {/* Button Content */}
              <span className="relative z-10">{ctaData.buttonText}</span>
              <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <div className="text-sm text-gray-500 flex items-center space-x-2">
              <span>hoặc</span>
              <a 
                href="tel:+84123456789" 
                className="text-[#0365FA] hover:text-[#0251C8] transition-colors duration-300 font-medium"
              >
                gọi ngay: +84 123 456 789
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0365FA]/30 to-transparent" />
      
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-10px) rotate(120deg);
          }
          66% {
            transform: translateY(5px) rotate(240deg);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
