'use client';

import { useRef, useEffect, useState } from 'react';
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
  Sparkles,
  User,
  MessageSquare,
  CheckCircle
} from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { t, language } = useLanguage();

  // Get footer data from locales
  const footerData = {
    quickLinks: t('footer.quickLinks'),
    quickLinksTitle: t('footer.quickLinksTitle'),
    description: t('footer.description'),
    socialLinks: [
      { name: 'LinkedIn', href: 'https://www.linkedin.com/in/nvtank', color: 'hover:bg-[#0365FA]' },
      { name: 'Facebook', href: 'https://www.facebook.com/tuan.anh.871341', color: 'hover:bg-[#0365FA]' },
      { name: 'YouTube', href: 'https://www.youtube.com/watch?v=Jh6Xz1WD3C0&list=RDHmFXik5Yz64&index=4', color: 'hover:bg-red-500' }
    ]
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 2000);
  };

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

  const stats = language === 'vi' ? [
    { number: '500+', label: 'Dự án', icon: <Award className="w-5 h-5" /> },
    { number: '2000+', label: 'Người dùng', icon: <Heart className="w-5 h-5" /> },
    { number: '99.9%', label: 'Uptime', icon: <Shield className="w-5 h-5" /> }
  ] : [
    { number: '500+', label: 'Projects', icon: <Award className="w-5 h-5" /> },
    { number: '2000+', label: 'Users', icon: <Heart className="w-5 h-5" /> },
    { number: '99.9%', label: 'Uptime', icon: <Shield className="w-5 h-5" /> }
  ];

  const offices = [
    { city: 'Ho Chi Minh', country: 'Vietnam', email: 'contact@tripc.ai' }
  ];

  return (
    <>
      <footer ref={footerRef} className="bg-gradient-to-br from-[#0365FA] via-[#0251C8] to-[#023D96] text-white relative overflow-hidden py-16 md:py-20">
      {/* Floating Particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full ${
              i % 3 === 0 ? 'w-2 h-2 bg-white/20' :
              i % 3 === 1 ? 'w-1 h-1 bg-white/30' :
              'w-1.5 h-1.5 bg-white/25'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Section - Company Info */}
          <div className="space-y-8">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-white/20 to-white/10 rounded-xl flex items-center justify-center relative">
                  <Brain className="w-7 h-7 text-white" />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-xl blur-lg opacity-50 scale-110" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  TripC Solutions
                </div>
              </div>
              
              <p className="text-white/80 text-base leading-relaxed mb-6">
                {footerData.description}
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3 mb-8">
                {footerData.socialLinks.map((social, i) => (
                  <a 
                    key={i} 
                    href={social.href} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 ${social.color} relative overflow-hidden`}
                    title={social.name}
                  >
                    <span className="relative z-10 text-white/80 group-hover:text-white transition-colors duration-300">
                      {socialIcons[social.name as keyof typeof socialIcons]}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white relative">
                {language === 'vi' ? 'Thông tin liên hệ' : 'Contact Information'}
                <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-white to-white/80 rounded-full" />
              </h3>
              <div className="space-y-3">
                <div className="group flex items-center space-x-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                  <Mail className="w-5 h-5 text-white/60 group-hover:text-white transition-colors duration-300" />
                  <div>
                    <p className="font-medium text-white text-sm">Email</p>
                    <a href="mailto:contact@tripc.ai" className="text-sm text-white/80 hover:text-white transition-colors duration-300">contact@tripc.ai</a>
                  </div>
                </div>
                <div className="group flex items-center space-x-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                  <Phone className="w-5 h-5 text-white/60 group-hover:text-white transition-colors duration-300" />
                  <div>
                    <p className="font-medium text-white text-sm">{language === 'vi' ? 'Điện thoại' : 'Phone'}</p>
                    <a href="tel:+84123456789" className="text-sm text-white/80 hover:text-white transition-colors duration-300">+84 123 456 789</a>
                  </div>
                </div>
                <div className="group flex items-center space-x-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                  <MapPin className="w-5 h-5 text-white/60 group-hover:text-white transition-colors duration-300" />
                  <div>
                    <p className="font-medium text-white text-sm">{language === 'vi' ? 'Địa chỉ' : 'Address'}</p>
                    <a href="https://maps.app.goo.gl/d1kHAhfboqUG4diV7" target="_blank" rel="noopener noreferrer" className="text-sm text-white/80 hover:text-white transition-colors duration-300">
                      153, Đống Đa, Thạch Thang, Đà Nẵng
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white relative">
                {footerData.quickLinksTitle}
                <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-white to-white/80 rounded-full" />
              </h3>
              <div className="space-y-2">
                {footerData.quickLinks.map((item: { name: string; href: string }, i: number) => (
                  <a key={i} href={item.href} className="group text-white/80 hover:text-white transition-all duration-300 flex items-center space-x-2 p-2 rounded-lg hover:bg-white/10">
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    <span className="text-sm group-hover:translate-x-1 transition-transform duration-300">{item.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="flex justify-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/30 transition-all duration-300 w-full max-w-lg">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {language === 'vi' ? 'Liên hệ với chúng tôi' : 'Contact Us'}
                </h3>
                <p className="text-white/80 text-sm">
                  {language === 'vi' ? 'Gửi tin nhắn và chúng tôi sẽ phản hồi sớm nhất có thể' : 'Send us a message and we will get back to you as soon as possible'}
                </p>
              </div>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h4 className="text-xl font-semibold text-green-400 mb-2">
                    {language === 'vi' ? 'Thành công!' : 'Success!'}
                  </h4>
                  <p className="text-green-300 text-sm">
                    {language === 'vi' ? 'Tin nhắn của bạn đã được gửi thành công.' : 'Your message has been sent successfully.'}
                  </p>
                  <p className="text-green-300 text-sm">
                    {language === 'vi' ? 'Chúng tôi sẽ liên hệ với bạn sớm nhất.' : 'We will contact you as soon as possible.'}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-4 h-4 text-white/60" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder={language === 'vi' ? 'Họ và tên *' : 'Full Name *'}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-200"
                      />
                    </div>
                    
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-4 h-4 text-white/60" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email *"
                        required
                        className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-200"
                      />
                    </div>
                  </div>
                  
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-4 h-4 text-white/60" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder={language === 'vi' ? 'Số điện thoại' : 'Phone Number'}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-200"
                    />
                  </div>
                  
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-white/60" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder={language === 'vi' ? 'Tin nhắn của bạn *' : 'Your Message *'}
                      rows={4}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-200 resize-none"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-white/15 hover:bg-white/20 border border-white/30 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed hover:border-white/40"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>{language === 'vi' ? 'Đang gửi...' : 'Sending...'}</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{language === 'vi' ? 'Gửi tin nhắn' : 'Send Message'}</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-white/20 text-center text-white/60">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} TripC Solutions. {language === 'vi' ? 'Bản quyền đã được bảo hộ.' : 'All rights reserved.'}
          </p>
        </div>
      </div>

      {/* Animated Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
    </footer>
    </>
  );
}