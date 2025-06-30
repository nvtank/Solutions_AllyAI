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

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

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

  const quickLinks = [
    { name: 'Solutions', href: '#' },
    { name: 'Industries', href: '#' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Templates', href: '/templates' },
    { name: 'Support', href: '#' }
  ];

  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, href: '#', name: 'Twitter', color: 'hover:bg-blue-500' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', name: 'LinkedIn', color: 'hover:bg-blue-600' },
    { icon: <Github className="w-5 h-5" />, href: '#', name: 'GitHub', color: 'hover:bg-gray-700' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', name: 'Instagram', color: 'hover:bg-pink-500' },
    { icon: <Youtube className="w-5 h-5" />, href: '#', name: 'YouTube', color: 'hover:bg-red-500' },
    { icon: <Facebook className="w-5 h-5" />, href: '#', name: 'Facebook', color: 'hover:bg-blue-700' }
  ];

  const stats = [
    { number: '500+', label: 'Dự án', icon: <Award className="w-5 h-5" /> },
    { number: '2000+', label: 'Người dùng', icon: <Heart className="w-5 h-5" /> },
    { number: '99.9%', label: 'Uptime', icon: <Shield className="w-5 h-5" /> },
    { number: '24/7', label: 'Hỗ trợ', icon: <Clock className="w-5 h-5" /> }
  ];

  const offices = [
    { city: 'San Francisco', country: 'USA', email: 'sf@tripcsolutions.com' },
    { city: 'London', country: 'UK', email: 'london@tripcsolutions.com' },
    { city: 'Singapore', country: 'SG', email: 'singapore@tripcsolutions.com' }
  ];

  return (
    <footer ref={footerRef} className="h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white relative overflow-hidden flex items-center">
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
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/3 rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        <div ref={contentRef} className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Section - Brand & Newsletter */}
          <div className="lg:col-span-5 space-y-8">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center relative">
                  <Brain className="w-8 h-8 text-white" />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-xl blur-lg opacity-50 scale-110" />
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  TripC Solutions
                </div>
              </div>
              
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                TripC Solution là đối tác đáng tin cậy cho chuyển đổi số. Giúp doanh nghiệp du lịch – dịch vụ tăng trưởng. Đồng thời tuân thủ quy định Nhà nước.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-3 mb-8">
                {socialLinks.map((social, i) => (
                  <a 
                    key={i} 
                    href={social.href} 
                    className={`group w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 ${social.color} relative overflow-hidden`}
                    title={social.name}
                  >
                    <span className="relative z-10 text-gray-300 group-hover:text-white transition-colors duration-300">
                      {social.icon}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-br from-blue-600/10 to-indigo-600/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mr-3">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Stay Updated</h3>
                  <p className="text-blue-200 text-sm">Get AI insights & news</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="flex-1 px-3 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
                <button className="group px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center space-x-1">
                  <Send className="w-4 h-4" />
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>

          {/* Center Section - Links & Stats */}
          <div className="lg:col-span-4 space-y-8">
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-white relative">
                Quick Links
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" />
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {quickLinks.map((item, i) => (
                  <a key={i} href={item.href} className="group text-gray-400 hover:text-blue-400 transition-all duration-300 flex items-center space-x-2 p-2 rounded-lg hover:bg-white/5">
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    <span className="text-sm group-hover:translate-x-1 transition-transform duration-300">{item.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-white relative">
                Our Impact
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full" />
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="group text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:scale-105">
                    <div className="flex items-center justify-center mb-2">
                      <div className="bg-gradient-to-br from-blue-500 to-indigo-500 p-2 rounded-lg text-white group-hover:scale-110 transition-transform duration-300">
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300">
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
          <div className="lg:col-span-3">
            <h3 className="text-xl font-semibold mb-6 text-white relative">
              Liên Hệ
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
            </h3>
            <div className="space-y-4">
              <div className="group flex items-start space-x-3">
                <Mail className="w-4 h-4 mt-1 text-gray-500 group-hover:text-blue-400 transition-colors duration-300" />
                <div>
                  <p className="font-semibold text-gray-200">Email</p>
                  <a href="mailto:bd@tripc.ai" className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-300">bd@tripc.ai</a>
                </div>
              </div>
              <div className="group flex items-start space-x-3">
                <Globe className="w-4 h-4 mt-1 text-gray-500 group-hover:text-blue-400 transition-colors duration-300" />
                <div>
                  <p className="font-semibold text-gray-200">Website</p>
                  <a href="https://solutions.tripc.ai" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-300">solutions.tripc.ai</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} TripC Solutions. All rights reserved.</p>
          <div className="flex items-center justify-center space-x-2 mt-2">
            <Sparkles className="w-4 h-4 text-blue-500/50" />
            <p className="text-sm">Designed & Built with AI</p>
            <Sparkles className="w-4 h-4 text-purple-500/50" />
          </div>
        </div>
      </div>

      {/* Animated Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
    </footer>
  );
}