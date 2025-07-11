'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Shield, Lock, RefreshCw, Phone, Mail, Users, Settings, AlertCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import ProfessionalNavbar from '@/components/layout/ProfessionalNavbar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
const PolicyPage = () => {
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

  const policies = [
    {
      id: 'privacy',
      title: 'Chính Sách Bảo Mật Thông Tin',
      
      color: 'bg-blue-500',
      content: [
        'Dữ liệu được mã hóa AES-256 và lưu trữ trên hệ thống bảo mật đạt chuẩn quốc tế',
        'Không chia sẻ thông tin khách hàng với bên thứ ba nếu không có sự đồng ý rõ ràng',
        'Khách hàng có quyền yêu cầu xóa hoặc chỉnh sửa dữ liệu cá nhân bất kỳ lúc nào'
      ]
    },
    {
      id: 'usage',
      title: 'Chính Sách Quy Định Sử Dụng',
 
      color: 'bg-green-500',
      content: [
        'Ally AI cung cấp các dịch vụ tự động hóa và chăm sóc khách hàng theo đúng thỏa thuận trong hợp đồng.',
        'Người dùng cần đảm bảo sử dụng nền tảng đúng mục đích, không gây gián đoạn hoặc làm hại đến hệ thống.',
        'Mọi hành vi vi phạm có thể dẫn đến việc chấm dứt quyền sử dụng.'
      ]
    },
    {
      id: 'refund',
      title: 'Chính Sách Hoàn Tiền & Đổi Trả',
     
      color: 'bg-orange-500',
      content: [
        'Ally AI hỗ trợ chính sách hoàn tiền nếu dịch vụ không đáp ứng đúng như cam kết trong giai đoạn dùng thử.',
        'Trong trường hợp xảy ra sự cố hệ thống, khách hàng được hỗ trợ gia hạn thời gian sử dụng tương ứng.',
      ]
    },
    {
      id: 'trial',
      title: 'Chính Sách Dùng Thử Miễn Phí',
    
      color: 'bg-purple-500',
      content: [
        'Trải nghiệm miễn phí 14 ngày với đầy đủ tính năng',
        'Sau khi hết thời gian dùng thử, khách hàng có thể chọn các gói dịch vụ phù hợp để tiếp tục sử dụng.',
      ]
    },
    {
      id: 'support',
      title: 'Chính Sách Hỗ Trợ Kỹ Thuật',
     
      color: 'bg-red-500',
      content: [
        'Hỗ trợ 24/7 qua email, chat trực tuyến và hotline chuyên dụng',
        'Đội ngũ kỹ thuật luôn sẵn sàng xử lý mọi vấn đề trong vòng 4 giờ làm việc.',
      ]
    },
    {
      id: 'upgrade',
      title: 'Chính Sách Nâng Cấp Dịch Vụ',
      color: 'bg-indigo-500',
      content: [
        'Ally AI thường xuyên cập nhật và cải tiến tính năng để đáp ứng tốt hơn nhu cầu người dùng.',
        'Khách hàng sẽ nhận thông báo trước về bất kỳ thay đổi hoặc nâng cấp nào liên quan đến dịch vụ.',
      ]
    },
     {
      id: 'in',
      title: 'Chính Sách Đối Tác Tích Hợp',
      color: 'bg-indigo-500',
      content: [
        'Ally AI hỗ trợ tích hợp với các nền tảng thương mại điện tử và vận chuyển phổ biến như Shopee, Lazada, GHN, GHTK...',
        'Cam kết hợp tác bền vững với các đối tác để đảm bảo tính ổn định và hiệu quả của hệ thống.',
      ]
    },
     {
      id: 'up',
      title: 'Liên Hệ Và Phản Hồi',
      color: 'bg-indigo-500',
      content: [
        'Trip Solutions luôn hoan nghênh mọi phản hồi từ khách hàng để cải thiện dịch vụ.',
        'Để gửi phản hồi hoặc thắc mắc, vui lòng liên hệ qua email: quyen@allyai.ai hoặc hotline: 0935 479 122.',
      ]
    }
  ];

  return (
    <>
      <Navbar />
      
      <div className="min-h-screen pt-5 bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 pt-24 pb-16">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

            <div ref={sectionRef} className={`text-center text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex items-center justify-center mb-6">
                <h1 className="text-4xl md:text-6xl font-bold">
                  Chính Sách Bảo Mật
                </h1>
              </div>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Cam kết bảo vệ quyền riêng tư và dữ liệu khách hàng với các tiêu chuẩn bảo mật hàng đầu
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Policies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {policies.map((policy, index) => (
              <div 
                key={policy.id}
                className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-3 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {policy.title}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {policy.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <span className="text-gray-600 leading-relaxed text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className={`bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-12 text-white text-center relative overflow-hidden transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6">Cần Hỗ Trợ Thêm?</h3>
              <p className="text-blue-100 mb-8 leading-relaxed text-lg max-w-2xl mx-auto">
                Đội ngũ chuyên gia của chúng tôi sẵn sàng giải đáp mọi thắc mắc về chính sách và bảo mật
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

              <div className="mt-8 text-blue-200 text-sm">
                Thời gian làm việc: 24/7 | Phản hồi trong vòng 2 giờ
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default PolicyPage;
