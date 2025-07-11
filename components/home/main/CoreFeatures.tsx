'use client';

import React, { useEffect, useRef, useState } from 'react';
import { CreditCard, Calendar, Clock, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const CoreFeatures = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const router = useRouter();

  const handleFeatureClick = (index: number) => {
    const links = [
      'https://tuan-chau-dev.tripc.ai/',
      'https://play.google.com/store/apps/details?id=com.tripc.merchant.app',
      'https://www.facebook.com/profile.php?id=61578235943420'
    ];
    
    window.open(links[index], '_blank');
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
        image: "/bookingTuanchau.jpg",
        title: "Phần mềm booking web",
        description: "Giải pháp đặt bàn và quản lý lịch hẹn trực tuyến toàn diện, giúp doanh nghiệp tối ưu quy trình tiếp nhận khách, xử lý đơn hàng và hiển thị thông tin theo thời gian thực – chuyên nghiệp, chính xác và dễ dàng truy cập mọi lúc mọi nơi.",
        color: "bg-[#0365FA]/10 text-[#0365FA]"
      },
      {
        image: "/1122.png",
        title: "Ứng dụng di động quản lí",
        description: "Ứng dụng quản lý hoạt động kinh doanh ngay trên điện thoại, cho phép theo dõi doanh thu, số lượng đơn hàng, hiệu suất nhân viên và báo cáo tổng quan một cách trực quan – giúp chủ doanh nghiệp ra quyết định nhanh chóng và chính xác, mọi lúc mọi nơi.",
        color: "bg-[#0365FA]/10 text-[#0365FA]"
      },
      {
        image: "/1133.png",
        title: "Chatbot AI",
        description: "Trợ lý ảo thông minh hoạt động 24/7, hỗ trợ tư vấn và chăm sóc khách hàng tự động, phản hồi tức thì các câu hỏi phổ biến, gợi ý sản phẩm/dịch vụ phù hợp và giúp nâng cao trải nghiệm mua sắm, góp phần gia tăng đơn hàng hiệu quả và giảm tải cho nhân viên.",
        color: "bg-[#0365FA]/10 text-[#0365FA]"
      }

];


  return (
    <div 
      ref={sectionRef}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 bg-gray-50"
    >
      <div className={`text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6">
          Tính Năng Cốt Lõi
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2">
          Nền tảng của chúng tôi cung cấp bộ công cụ toàn diện được thiết kế để tối ưu hóa mọi khía cạnh của doanh nghiệp bạn.
        </p>
      </div>

      <div className="space-y-6 sm:space-y-8 lg:space-y-10">
        {features.map((feature, index) => (
          <div 
            key={index}
            className={`group relative overflow-hidden shadow-gray-400 shadow-md transition-all duration-700 transform cursor-pointer rounded-xl ease-in-out hover:bg-gradient-to-r from-white via-pink-100 to-blue-100 p-4 sm:p-5 lg:p-6 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-12'
            }`}
            style={{
              transitionDelay: `${index * 200}ms`
            }}
            onClick={() => handleFeatureClick(index)}
          >
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 lg:items-center">
              {/* Image Section - Always first on mobile/tablet */}
              <div className={`relative h-48 sm:h-56 md:h-64 lg:h-80 overflow-hidden rounded-lg w-full ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <Image 
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover group-hover:scale-105 duration-500 transition-all"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
              </div>
              
              {/* Content Section - Always second on mobile/tablet */}
              <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6 group-hover:text-[#0365FA] transition-colors duration-300 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 mb-4 sm:mb-6">
                  {feature.description}
                </p>
                <div className="flex items-center text-[#0365FA] font-semibold text-sm sm:text-base group-hover:translate-x-1 transition-transform duration-300">
                  <span className="mr-2">Xem Ngay</span>
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreFeatures;