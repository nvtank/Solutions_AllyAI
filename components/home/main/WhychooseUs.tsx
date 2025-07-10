'use client';

import React, { useState, useEffect, useRef } from 'react';
import { PieChart, Eye, DollarSign, TrendingUp, CreditCard } from 'lucide-react';
import Image from 'next/image';

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
    
      title: "Tuân thủ quy định Thuế",
      description: "Tích hợp hoá đơn điện tử & báo cáo doanh thu để đảm bảo tuân thủ quy định về thuế.",
      image: "minhbach.webp",
      color: "text-[#0365FA] bg-[#0365FA]/10"
    },
    {
    
      title: "Minh bạch Thông tin Sản phẩm & Dịch vụ",
      description: "Công bố thực đơn, giá cả & chi tiết dịch vụ chính xác trên mọi kênh.",
      image: "/tamnhin.png",
      color: "text-[#0365FA] bg-[#0365FA]/10"
    },
    {
   
      title: "Giảm chi phí Vận hành & Không bỏ lỡ Đơn hàng",
      description: "Nhân viên AI sẽ tự động tiếp nhận đơn hàng, trả lời phản hồi ngay lập tức.",
      image: "/lowcost.png",
      color: "text-[#0365FA] bg-[#0365FA]/10"
    },
    {
    
      title: "Tăng Đơn hàng & Doanh thu",
      description: "Upsell bằng AI, bán thêm, bán chéo sản phẩm dịch vụ.",
      image: "/tangcost.jpg",
      color: "text-[#0365FA] bg-[#0365FA]/10"
    },
    {
    
      title: "Thanh toán & Hoá đơn Liền mạch",
      description: "Tích hợp thanh toán đa dạng chuyển khoản ngân hàng , QR code và tự động tạo hoá đơn tức thời.",
      image: "/thanhtoan.jpg",
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
        <div 
          className={`group md:col-span-2 lg:col-span-1 lg:row-span-2 relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl cursor-pointer ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
          style={{
            transitionDelay: '0ms',
            height: '500px'
          }}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={features[0].image}
              alt={features[0].title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all duration-500"></div>
          </div>

          <div className="absolute inset-0 flex flex-col justify-end p-6">
            {/* Title and Description - both appear on hover */}
            <div className="transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                <h3 className="text-3xl font-bold text-white group-hover:text-blue-200 transition-colors duration-300 mb-3">
                  {features[0].title}
                </h3>
                <p className="text-white/90 leading-relaxed text-sm">
                  {features[0].description}
                </p>
              </div>
            </div>
          </div>

          {/* Gradient overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
        </div>

        {/* Other features */}
        {features.slice(1).map((feature, index) => (
          <div 
            key={index} 
            className={`group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl cursor-pointer ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-12'
            }`}
            style={{
              transitionDelay: `${(index + 1) * 150}ms`,
              height: '240px'
            }}
          >
            <div className="absolute inset-0">
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
        
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all duration-500"></div>
            </div>

            <div className="absolute inset-0 flex flex-col justify-end p-6">
              {/* Title and Description - both appear on hover */}
              <div className="transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-200 transition-colors duration-300 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-white/90 leading-relaxed text-xs">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Gradient overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;