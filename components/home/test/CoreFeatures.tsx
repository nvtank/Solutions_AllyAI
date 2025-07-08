import React, { useEffect, useRef, useState } from 'react';
import { CreditCard, Calendar, Clock, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const CoreFeatures = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
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

const features = [
  {
    image: "/1.jpg",
    title: "Phần mềm booking",
    description: "Cho phép khách hàng đặt lịch nhanh chóng, quản lý lịch hẹn và tự động hóa quá trình xác nhận đặt chỗ.",
    color: "bg-[#0365FA]/10 text-[#0365FA]"
  },
  {
    image: "/2.jpg",
    title: "Quản lý đặt chỗ", 
    description: "Kiểm soát dễ dàng tình trạng chỗ trống, phân bổ tài nguyên hợp lý và theo dõi lịch sử đặt chỗ chi tiết.",
    color: "bg-[#0365FA]/10 text-[#0365FA]"
  },
  {
    image: "/3.jpg",
    title: "Chat bot",
    description: "Tự động trả lời câu hỏi của khách, hỗ trợ đặt lịch và tư vấn dịch vụ 24/7 một cách thông minh.",
    color: "bg-[#0365FA]/10 text-[#0365FA]"
  }
];


  return (
    <div 
      ref={sectionRef}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50"
    >
      <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Tính Năng Cốt Lõi
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Nền tảng của chúng tôi cung cấp bộ công cụ toàn diện được thiết kế để tối ưu hóa mọi khía cạnh của doanh nghiệp bạn.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index}
            className={`group relative overflow-hidden transition-all duration-700 transform ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-12'
            }`}
            style={{
              transitionDelay: `${index * 200}ms`
            }}
          >
            {/* Image Section */}
            <div className="relative h-64 overflow-hidden">
              <Image 
                src={feature.image}
                alt={feature.title}
                fill
                className="object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Content Section */}
            <div className="pt-5">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#0365FA] transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {feature.description}
              </p>
              

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreFeatures;