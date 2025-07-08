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
      title: "Hiệu quả hoạt động",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      color: "from-[#0365FA] to-blue-600",
      iconBg: "bg-[#0365FA]/10",
      iconColor: "text-[#0365FA]"
    },
    {
      icon: <Shield size={30} />,
      title: "Trải nghiệm nâng cao của khách hàng", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      color: "from-[#0365FA] to-blue-600",
      iconBg: "bg-[#0365FA]/10", 
      iconColor: "text-[#0365FA]"
    },
    {
      icon: <Clock size={30} />,
      title: "Tăng trưởng doanh thu",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Lợi ích chính
          </h1>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Benefits Grid */}
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
              
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${benefit.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Benefits
