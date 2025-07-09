'use client';
import { SiZalo } from "react-icons/si";
import { useRef, useEffect, useState } from 'react';
import { 
  Brain, 
  Facebook,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Send,
  User,
  MessageSquare,
  CheckCircle,
  FileText,
  Shield
} from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
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
      { name: 'Zalo', href: 'https://zalo.me/1663388634589919644', color: 'hover:bg-[#0365FA]' },
      { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61569471885738', color: 'hover:bg-[#0365FA]' },
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
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 2000);
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
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
        });
      }
    });

    return () => ctx.revert();
  }, []);

  const socialIcons = {
    Zalo: <SiZalo className="w-5 h-5" />,
    Facebook: <Facebook className="w-5 h-5" />
  };

  return (
    <footer ref={footerRef} className="bg-gradient-to-br from-[#0365FA] via-[#0251C8] to-[#023D96] text-white min-h-screen flex w-full flex-col">
      {/* Main Content */}
      <div className="flex-1 flex items-center py-12 md:py-0">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 relative z-10">
          <div ref={contentRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Left Column - Brand Info */}
            <div className="flex flex-col space-y-8">
              <div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-white/20 to-white/10 rounded-xl flex items-center justify-center relative">
                    <Brain className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-xl blur-lg opacity-50 scale-110" />
                  </div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                    TripC Solutions
                  </div>
                </div>
                
                <p className="text-white/80 text-sm sm:text-[14px] leading-relaxed mt-4 mb-6">
                  {footerData.description}
                </p>
                
                <div className="flex gap-3 mb-6">
                  {footerData.socialLinks.map((social, i) => (
                    <a 
                      key={i} 
                      href={social.href} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 ${social.color} relative overflow-hidden`}
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

              <div>
                {/* Chính Sách */}
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-white relative">
                    {language === 'vi' ? 'Chính Sách' : 'Policies'}
                    <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-white to-white/80 rounded-full" />
                  </h3>
                  <div className="space-y-2">
                    <a 
                      href="https://allyai.ai/terms" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group text-white/80 hover:text-white transition-all duration-300 flex items-center space-x-2 p-2 rounded-lg hover:bg-white/10"
                    >
                      <FileText className="w-4 h-4 text-white/60 group-hover:text-white" />
                      <span className="text-sm">
                        {language === 'vi' ? 'Điều khoản và Điều kiện' : 'Terms and Conditions'}
                      </span>
                    </a>
                    <a 
                      href="https://allyai.ai/policy" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group text-white/80 hover:text-white transition-all duration-300 flex items-center space-x-2 p-2 rounded-lg hover:bg-white/10"
                    >
                      <Shield className="w-4 h-4 text-white/60 group-hover:text-white" />
                      <span className="text-sm">
                        {language === 'vi' ? 'Chính sách bảo mật' : 'Privacy Policy'}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle Column - Contact Info */}
            <div className="flex flex-col space-y-8">
              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-3 text-white relative">
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
              
              <div>
                <h3 className="text-lg font-semibold mb-3 text-white relative">
                  {language === 'vi' ? 'Thông tin liên hệ' : 'Contact Information'}
                  <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-white to-white/80 rounded-full" />
                </h3>
                <div className="space-y-3">
                  <div className="group flex items-center space-x-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                    <Mail className="w-5 h-5 text-white/60 group-hover:text-white transition-colors duration-300" />
                    <div>
                      <p className="font-medium text-white text-sm">Email</p>
                      <a href="mailto:quyen@allyai.ai" className="text-sm text-white/80 hover:text-white transition-colors duration-300">quyen@allyai.ai</a>
                    </div>
                  </div>
                  <div className="group flex items-center space-x-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                    <Phone className="w-5 h-5 text-white/60 group-hover:text-white transition-colors duration-300" />
                    <div>
                      <p className="font-medium text-white text-sm">{language === 'vi' ? 'Điện thoại' : 'Phone'}</p>
                      <a href="tel:+84935479122" className="text-sm text-white/80 hover:text-white transition-colors duration-300">0935 479 122</a>
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
            </div>

            {/* Right Column - Contact Form */}
            <div className="md:col-span-2 lg:col-span-1">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 hover:border-white/30 transition-all duration-300 h-full">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center text-center h-full py-8">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-400" />
                    </div>
                    <h4 className="text-xl font-semibold text-green-400 mb-2">
                      {language === 'vi' ? 'Thành công!' : 'Success!'}
                    </h4>
                    <p className="text-green-300 text-sm mb-1">
                      {language === 'vi' ? 'Tin nhắn của bạn đã được gửi thành công.' : 'Your message has been sent successfully.'}
                    </p>
                    <p className="text-green-300 text-sm">
                      {language === 'vi' ? 'Chúng tôi sẽ liên hệ với bạn sớm nhất.' : 'We will contact you as soon as possible.'}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                    <div className="text-center mb-6">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <MessageSquare className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                        {language === 'vi' ? 'Liên hệ với chúng tôi' : 'Contact Us'}
                      </h3>
                      <p className="text-white/80 text-xs sm:text-sm">
                        {language === 'vi' ? 'Gửi tin nhắn và chúng tôi sẽ phản hồi sớm nhất có thể' : 'Send us a message and we will get back to you as soon as possible'}
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="relative">
                          <User className="absolute left-3 top-3 w-4 h-4 text-white/60" />
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder={language === 'vi' ? 'Họ và tên ' : 'Full Name '}
                            required
                            className="w-full pl-10 pr-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-200 text-sm sm:text-base"
                          />
                        </div>
                        
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 w-4 h-4 text-white/60" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Email"
                            required
                            className="w-full pl-10 pr-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-200 text-sm sm:text-base"
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
                          className="w-full pl-10 pr-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-200 text-sm sm:text-base"
                        />
                      </div>
                      
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-white/60" />
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder={language === 'vi' ? 'Tin nhắn của bạn ' : 'Your Message '}
                          required
                          rows={4}
                          className="w-full pl-10 pr-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-200 text-sm sm:text-base resize-none"
                        />
                      </div>
                      
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-white/15 hover:bg-white/20 border border-white/30 text-white font-medium py-2 sm:py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed hover:border-white/40 mt-2 text-sm sm:text-base"
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
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="py-4 border-t border-white/20 text-center text-white/60">
        <p className="text-xs sm:text-sm">
          &copy; {new Date().getFullYear()} TripC Solutions. {language === 'vi' ? 'Bản quyền đã được bảo hộ.' : 'All rights reserved.'}
        </p>
      </div>
    </footer>
  );
}