'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Zap, Shield, Clock, TrendingUp, Users, HeartHandshake } from 'lucide-react';

const Benefits = () => {
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

  const benefits = [
    {
      icon: <Zap size={30} />,
      title: "Hiệu quả vận hành",
      description: "Tối ưu chi phí nhân sự tư vấn bán hàng, đặt bàn, chăm sóc khách hàng bằng nhân viên AI. Hệ thống quản lý bán hàng chuyên nghiệp.",
      color: "from-[#0365FA] to-blue-600",
      iconBg: "bg-[#0365FA]/10",
      iconColor: "text-[#0365FA]"
    },
    {
      icon: <Shield size={30} />,
      title: "Nâng cao của khách hàng", 
      description: "Không bao giờ bỏ lỡ tin nhắn của khách hàng, luôn luôn phản hồi ngay lập tức 24/7.",
      color: "from-[#0365FA] to-blue-600",
      iconBg: "bg-[#0365FA]/10", 
      iconColor: "text-[#0365FA]"
    },
    {
      icon: <Clock size={30} />,
      title: "Tăng trưởng doanh thu",
      description: "Không bỏ lỡ đơn đặt hàng, đặt bàn của khách, gợi ý bán thêm bán chéo dịch vụ cộng thêm.",
      color: "from-[#0365FA] to-blue-600",
      iconBg: "bg-[#0365FA]/10",
      iconColor: "text-[#0365FA]"
    },

  ];
  return (
    <div 
      ref={sectionRef}
      className="flex flex-col items-center justify-center py-16 bg-gradient-to-br from-[#0365FA] to-blue-700"
    >
      <div className="w-full max-w-7xl px-4">

        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Lợi ích chính
          </h1>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
        Tối ưu vận hành - Nâng tầm trải nghiệm – Tăng trưởng doanh thu
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className={`group relative bg-white rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 border border-white/20 hover:border-[#0365FA]/30 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{
                transitionDelay: `${index * 150}ms`
              }}
            >
              <div className={`${benefit.iconBg} ${benefit.iconColor} w-8 h-8 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-[#0365FA]/20`}>
                {benefit.icon}
              </div>
              
      
              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-[#0365FA] transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {benefit.description}
              </p>
              
  
              <div className={`absolute inset-0 bg-gradient-to-r ${benefit.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Benefits
