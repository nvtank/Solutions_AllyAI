'use client';

import React, { useEffect, useRef, useState } from 'react';
import { CreditCard, Calendar, Clock, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const CoreFeatures = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const router = useRouter();

  const handleFeatureClick = () => {
    router.push('/templates');
  };

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
      image: "/booking.jpg",
      title: "Phần mềm booking web",
      description: "Đặt bàn, quản lý lịch hẹn và đơn hàng trực tuyến dễ dàng, chuyên nghiệp, mọi lúc mọi nơi.",
      color: "bg-[#0365FA]/10 text-[#0365FA]"
    },
    {
      image: "/mobile.png",
      title: "Ứng dụng di động quản lí",
      description: "Theo dõi doanh thu, đơn hàng và hiệu suất hoạt động ngay trên điện thoại – tiện lợi và tức thời.",
      color: "bg-[#0365FA]/10 text-[#0365FA]"
    },
    {
      image: "/chatbot.jpg",
      title: "Chatbot AI",
      description: "Tư vấn, chăm sóc khách hàng 24/7, tự động phản hồi và gợi ý dịch vụ giúp tăng đơn hiệu quả.",
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
            onClick={handleFeatureClick}
            className={`group relative overflow-hidden transition-all duration-700 transform cursor-pointer hover:shadow-lg ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-12'
            }`}
            style={{
              transitionDelay: `${index * 200}ms`
            }}
          >
            {/* Image Section */}
            <div className="relative h-64 overflow-hidden rounded-lg">
              <Image 
                src={feature.image}
                alt={feature.title}
                fill
                className="object-cover group-hover:scale-105 duration-500 transition-all"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
            </div>
            
            {/* Content Section */}
            <div className="pt-5">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#0365FA] transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 mb-4">
                {feature.description}
              </p>
              <div className="flex items-center text-[#0365FA] font-semibold group-hover:translate-x-1 transition-transform duration-300">
                <span className="mr-2">Xem Ngay</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreFeatures;