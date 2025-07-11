'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FileText, CheckCircle, UserCheck, Shield, AlertTriangle, Scale, ArrowLeft, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import ProfessionalNavbar from '@/components/layout/ProfessionalNavbar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
const TermsPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const terms = [
    {
      id: 'acceptance',
      title: 'Sự Chấp Nhận Các Điều Khoản',
   
      content: 'Bằng cách truy cập và sử dụng các dịch vụ và nền tảng do TripC Solutions cung cấp, người dùng đang tham gia vào một thỏa thuận ràng buộc về mặt pháp lý dựa trên các Điều khoản và Điều kiện này. Nếu người dùng thấy các điều khoản này không phù hợp, họ được khuyên không nên sử dụng dịch vụ của chúng tôi.'
    },
    {
      id: 'service',
      title: 'Mô Tả Dịch Vụ',
    
      content: 'TripC Solutions chuyên tạo ra các giải pháp chuyển đổi số được tăng cường bằng AI. Mục tiêu của chúng tôi là giúp các doanh nghiệp du lịch - dịch vụ xây dựng các hệ thống quản lý và vận hành hiệu quả. Điều này bao gồm các công cụ phần mềm, nền tảng, nội dung và công nghệ liên quan để cung cấp trải nghiệm kinh doanh tối ưu.'
    },
    {
      id: 'registration',
      title: 'Đăng Ký ',
    
      content: 'Người dùng muốn hưởng lợi từ các tính năng và dịch vụ cao cấp của TripC Solutions có thể cần trải qua một quy trình đăng ký. Điều này bao gồm việc cung cấp các thông tin cá nhân và nghề nghiệp cụ thể. Người dùng có trách nhiệm đảm bảo rằng thông tin này luôn chính xác, cập nhật và đầy đủ.'
    },
    {
      id: 'responsibility',
      title: 'Trách Nhiệm Của Người Dùng',
   
      content: 'Sau khi đăng ký, người dùng sẽ có thông tin đăng nhập. Họ có trách nhiệm cho tất cả các hoạt động diễn ra dưới tài khoản của mình, bất kể hành động do họ hoặc người khác thực hiện. Việc chia sẻ quyền truy cập với người dùng không được ủy quyền là nghiêm cấm, và cần phải thực hiện các biện pháp để đảm bảo tính bảo mật của thông tin đăng nhập.'
    },
    {
      id: 'intellectual',
      title: 'Quyền Sở Hữu Trí Tuệ',
      
      content: 'TripC Solutions là chủ sở hữu hoặc người sử dụng có giấy phép của tất cả nội dung, phần mềm và công nghệ độc quyền trên nền tảng của mình. Điều này bao gồm nhưng không giới hạn ở đồ họa, thiết kế, văn bản và logo. Việc sử dụng, sao chép hoặc phân phối không được phép là nghiêm cấm và có thể dẫn đến các hành động pháp lý.'
    },
    {
      id: 'liability',
      title: 'Giới Hạn Trách Nhiệm',
  
      content: 'TripC Solutions nỗ lực cung cấp các dịch vụ xuất sắc, nhưng trong các tình huống người dùng gặp phải sự gián đoạn, lỗi hoặc thiệt hại - dù trực tiếp, ngẫu nhiên hay hậu quả - trách nhiệm của TripC Solutions sẽ bị giới hạn theo quy định của pháp luật.'
    }
  ];

  return (
    <>
      <Navbar />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-indigo-600 via-purple-700 to-blue-800 pt-40 pb-16">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div ref={sectionRef} className={`text-center text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex items-center justify-center mb-6">
                <h1 className="text-4xl md:text-6xl font-bold">
                  Điều Khoản Dịch Vụ
                </h1>
              </div>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Quy định và điều kiện sử dụng dịch vụ TripC Solutions một cách minh bạch và chuyên nghiệp
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Terms Content */}
        <div className="space-y-8 mb-16">
          {terms.map((term, index) => (
            <div 
              key={term.id}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
                    {index + 1}. {term.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-base">
                    {term.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className={`bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-12 text-white text-center relative overflow-hidden mb-12 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-6">Có Thắc Mắc Về Điều Khoản?</h3>
            <p className="text-indigo-100 mb-8 leading-relaxed text-lg max-w-2xl mx-auto">
              Đội ngũ pháp lý và hỗ trợ khách hàng của chúng tôi sẵn sàng giải đáp mọi câu hỏi
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <a 
                href="mailto:quyen@allyai.ai" 
                className="group flex items-center justify-center space-x-3 bg-white/20 backdrop-blur-sm px-8 py-4 rounded-xl hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="w-5 h-5" />
                <span className="font-semibold">quyen@allyai.ai</span>
              </a>
              <a 
                href="tel:0935479122" 
                className="group flex items-center justify-center space-x-3 bg-white/20 backdrop-blur-sm px-8 py-4 rounded-xl hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                <span className="font-semibold">0935 479 122</span>
              </a>
            </div>

            <div className="mt-8 text-indigo-200 text-sm">
              Thời gian làm việc: 24/7 | Tư vấn pháp lý miễn phí
            </div>
          </div>
           </div>

      </div>
      <Footer/>
    </div>
    </>
  );
};

export default TermsPage;
