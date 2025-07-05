'use client';

import { useRef, useEffect } from 'react';
import { 
  Brain, 
  Twitter, 
  Linkedin, 
  Github, 
  Instagram,
  Youtube,
  Facebook,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Send,
  Award,
  Shield,
  Globe,
  Clock,
  Star,
  Heart,
  Sparkles
} from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const { t, language } = useLanguage();

  // Get footer data based on current language
  const getFooterData = () => {
    if (language === 'vi') {
      return {
        quickLinks: [
          // { name: 'Giải pháp', href: '/solutions' },
          { name: 'Về chúng tôi', href: '/about' },
          { name: 'Liên hệ', href: '/contact' },
          { name: 'Mẫu', href: '/templates' }
        ],
        socialLinks: [
          { name: 'LinkedIn', href: 'https://www.linkedin.com/in/nvtank', color: 'hover:bg-blue-600' },
          { name: 'Facebook', href: 'https://www.facebook.com/tuan.anh.871341', color: 'hover:bg-blue-700' },
          { name: 'YouTube', href: 'https://www.youtube.com/watch?v=Jh6Xz1WD3C0&list=RDHmFXik5Yz64&index=4', color: 'hover:bg-red-500' }
        ],
        quickLinksTitle: "Liên kết nhanh",
        description: "TripC Solution là đối tác đáng tin cậy cho chuyển đổi số. Giúp doanh nghiệp du lịch – dịch vụ tăng trưởng bền vững."
      };
    } else {
      return {
        quickLinks: [
          // { name: 'Solutions', href: '/solutions' },
          { name: 'About Us', href: '/about' },
          { name: 'Contact', href: '/contact' },
          { name: 'Templates', href: '/templates' }
        ],
        socialLinks: [
          { name: 'LinkedIn', href: 'https://www.linkedin.com/in/nvtank', color: 'hover:bg-blue-600' },
          { name: 'Facebook', href: 'https://facebook.com/tuan.anh.871341', color: 'hover:bg-blue-700' },
          { name: 'YouTube', href: 'https://www.youtube.com/watch?v=Jh6Xz1WD3C0&list=RDHmFXik5Yz64&index=4', color: 'hover:bg-red-500' }
        ],
        quickLinksTitle: "Quick Links",
        description: "TripC Solution is a trusted partner for digital transformation. Helping tourism & service businesses grow sustainably."
      };
    }
  };

  const footerData = getFooterData();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Main content animation
      if (contentRef.current) {
        gsap.fromTo(contentRef.current.children,
        {
          opacity: 0,
          y: 60,
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
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Floating particles
      if (particlesRef.current) {
        gsap.to(particlesRef.current.children, {
          y: "random(-50, 50)",
          x: "random(-30, 30)",
          rotation: "random(-180, 180)",
          duration: "random(10, 20)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: {
            amount: 3,
            from: "random"
          }
        });
      }
      }

    });

    return () => ctx.revert();
  }, []);

  const socialIcons = {
    LinkedIn: <Linkedin className="w-5 h-5" />,
    Facebook: <Facebook className="w-5 h-5" />,
    YouTube: <Youtube className="w-5 h-5" />
  };

  const stats = [
    { number: '500+', label: 'Dự án', icon: <Award className="w-5 h-5" /> },
    { number: '2000+', label: 'Người dùng', icon: <Heart className="w-5 h-5" /> },
    { number: '99.9%', label: 'Uptime', icon: <Shield className="w-5 h-5" /> }
  ];

  const offices = [
    { city: 'Ho Chi Minh', country: 'Vietnam', email: 'contact@tripc.ai' }
  ];

  return (
    <footer ref={footerRef} className="bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white relative overflow-hidden py-16 md:py-24">
      {/* Floating Particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full ${
              i % 3 === 0 ? 'w-2 h-2 bg-blue-400/20' :
              i % 3 === 1 ? 'w-1 h-1 bg-indigo-400/30' :
              'w-1.5 h-1.5 bg-purple-400/25'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Background Gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-full h-full md:w-96 md:h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-full h-full md:w-80 md:h-80 bg-indigo-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full md:w-[600px] md:h-[600px] bg-purple-500/3 rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={contentRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Left Section - Brand */}
          <div className="space-y-6">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center relative">
                  <Brain className="w-7 h-7 text-white" />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-xl blur-lg opacity-50 scale-110" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  TripC Solutions
                </div>
              </div>
              
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
                {footerData.description}
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3">
                {footerData.socialLinks.map((social, i) => (
                  <a 
                    key={i} 
                    href={social.href} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 ${social.color} relative overflow-hidden`}
                    title={social.name}
                  >
                    <span className="relative z-10 text-gray-300 group-hover:text-white transition-colors duration-300">
                      {socialIcons[social.name as keyof typeof socialIcons]}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Center Section - Links */}
          <div className="space-y-6">
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white relative">
                {footerData.quickLinksTitle}
                <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" />
              </h3>
              <div className="space-y-2">
                {footerData.quickLinks.map((item, i) => (
                  <a key={i} href={item.href} className="group text-gray-400 hover:text-blue-400 transition-all duration-300 flex items-center space-x-2 p-2 rounded-lg hover:bg-white/5">
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    <span className="text-sm group-hover:translate-x-1 transition-transform duration-300">{item.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white relative">
                Thống kê
                <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full" />
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {stats.map((stat, index) => (
                  <div key={index} className="group text-center p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:scale-105">
                    <div className="flex items-center justify-center mb-1">
                      <div className="bg-gradient-to-br from-blue-500 to-indigo-500 p-1.5 rounded-lg text-white group-hover:scale-110 transition-transform duration-300">
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 text-xs group-hover:text-gray-300 transition-colors duration-300">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section - Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white relative">
              Liên Hệ
              <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
            </h3>
            <div className="space-y-4">
              <div className="group flex items-start space-x-3">
                <Mail className="w-4 h-4 mt-1 text-gray-500 group-hover:text-blue-400 transition-colors duration-300" />
                <div>
                  <p className="font-semibold text-gray-200 text-sm">Email</p>
                  <a href="mailto:contact@tripc.ai" className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-300">contact@tripc.ai</a>
                </div>
              </div>
              <div className="group flex items-start space-x-3">
                <Globe className="w-4 h-4 mt-1 text-gray-500 group-hover:text-blue-400 transition-colors duration-300" />
                <div>
                  <p className="font-semibold text-gray-200 text-sm">Website</p>
                  <a href="https://solutions.tripc.ai" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-300">solutions.tripc.ai</a>
                </div>
              </div>
              <div className="group flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 text-gray-500 group-hover:text-blue-400 transition-colors duration-300" />
                <a href="https://maps.app.goo.gl/d1kHAhfboqUG4diV7" className="cursor-pointer">
                  <p className="font-semibold text-gray-200 text-sm">Địa chỉ</p>
                  <p className="text-sm text-gray-400">153, Đống Đa, Thạch Thang Đà Nẵng</p>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-white/10 text-center text-gray-500">
          <p className="text-sm">&copy; {new Date().getFullYear()} TripC Solutions. Bản quyền đã được bảo hộ.</p>
        </div>
      </div>

      {/* Animated Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
    </footer>
  );
}