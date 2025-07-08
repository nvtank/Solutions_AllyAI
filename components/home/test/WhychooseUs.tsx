'use client';

import React, { useState, useEffect, useRef } from 'react';
import { PieChart, Eye, DollarSign, TrendingUp, CreditCard } from 'lucide-react';

const WhyChooseUs = () => {
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
      icon: <PieChart className="w-6 h-6" />,
      title: "Minh Bạch Tài Chính",
      description: "Hiểu rõ hiệu suất tài chính của bạn với các báo cáo chi tiết và phân tích chuyên sâu.",
      color: "text-[#0365FA] bg-[#0365FA]/10"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Tầm Nhìn Toàn Diện",
      description: "Nhận thông tin chi tiết thời gian thực về hoạt động của bạn, từ đặt phòng đến bán hàng, tất cả trong một nơi.",
      color: "text-[#0365FA] bg-[#0365FA]/10"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Chi Phí Thấp Hơn",
      description: "Giảm chi phí vận hành bằng cách tự động hóa các tác vụ và tối ưu hóa phân bổ tài nguyên.",
      color: "text-[#0365FA] bg-[#0365FA]/10"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Tăng Trưởng Doanh Thu",
      description: "Thúc đẩy tăng trưởng doanh thu bằng cách tối ưu hóa giá cả, tăng lượng đặt phòng và nâng cao lòng trung thành của khách hàng.",
      color: "text-[#0365FA] bg-[#0365FA]/10"
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Thanh Toán Liền Mạch",
      description: "Cung cấp trải nghiệm thanh toán liền mạch cho khách hàng với nhiều tùy chọn thanh toán khác nhau.",
      color: "text-[#0365FA] bg-[#0365FA]/10"
    }
  ];

  return (
    <div 
      ref={sectionRef}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gray-50"
    >
      <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Tại Sao Chọn TripC Solutions?</h1>
        <div className="w-24 h-1 bg-[#0365FA] mx-auto mb-8"></div>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Khám phá những lợi ích vượt trội mà TripC Solutions mang lại cho doanh nghiệp của bạn
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* First column - spans 2 rows in md/lg */}
        <div className={`md:col-span-2 lg:col-span-1 lg:row-span-2 bg-white rounded-xl shadow-lg p-8 flex flex-col justify-start border border-gray-100 hover:border-[#0365FA]/30 transition-all duration-700 hover:shadow-xl ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-12'
        }`}
        style={{
          transitionDelay: '200ms'
        }}>
          <div className="mb-6">
            <div className="w-12 h-12 rounded-lg bg-[#0365FA]/10 flex items-center justify-center mb-4">
              <PieChart className="w-6 h-6 text-[#0365FA]" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Minh Bạch Tài Chính</h2>
            <p className="text-gray-600 leading-relaxed">
              Hiểu rõ hiệu suất tài chính của doanh nghiệp với các báo cáo chi tiết và phân tích chuyên sâu giúp bạn 
              kiểm soát hoàn toàn tài chính kinh doanh.
            </p>
          </div>
        </div>

        {/* Other features */}
        {features.slice(1).map((feature, index) => (
          <div 
            key={index} 
            className={`bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-700 border border-gray-100 hover:border-[#0365FA]/30 group hover:-translate-y-1 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-12'
            }`}
            style={{
              transitionDelay: `${(index + 2) * 150}ms`
            }}
          >
            <div className={`w-12 h-12 rounded-lg ${feature.color.split(' ')[1]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
              <div className={feature.color.split(' ')[0]}>
                {feature.icon}
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#0365FA] transition-colors duration-300">{feature.title}</h3>
            <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;