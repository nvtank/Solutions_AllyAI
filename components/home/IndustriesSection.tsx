'use client';

import { useRef, useEffect } from 'react';
import { Wrench } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function IndustriesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  const industries = [
    {
    
      title_main: "Nền Tảng Đặt Đa Dịch Vụ",
      title1: "Hệ thống Booking đa năng",
      title2: "Giao diện thân thiện",
      description1: "Đặt bàn, phòng, tour, vé sự kiện, gói chăm sóc sức khỏe. Hỗ trợ resort, nhà hàng, spa, khu vui chơi, travel agency.",
      description2: "Dễ sử dụng trên website và ứng dụng di động. Tùy biến theo từng thương hiệu, lĩnh vực dịch vụ.",
      stats: "500+ Projects",
      color: "from-blue-500 to-indigo-500",
      bgColor: "from-blue-50 to-indigo-50",
      image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      
      title_main: "Ứng Dụng Quản Lý Đơn Hàng",
      title1: "Theo Dõi Đơn Hàng",
      title2: "Xử Lý Nhanh Chóng",
      description1: "Theo dõi tình trạng đơn hàng theo thời gian thực. Quản lý lịch sử giao dịch, báo cáo doanh thu.",
      description2: "Cập nhật và xử lý đơn nhanh ngay trên điện thoại hoặc máy tính.",
      stats: "500+ Projects",
      color: "from-green-500 to-teal-500",
      bgColor: "from-green-50 to-teal-50",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
     
      title_main: "Tích Hợp Hóa Đơn & Thanh Toán Điện Tử",
      title1: "Hóa Đơn Tự Động",
      title2: "Thanh Toán QR Code",
      description1: "Tự động xuất hóa đơn điện tử theo chuẩn quy định. Tùy chỉnh mẫu hóa đơn riêng.",
      description2: "Thanh toán nhanh chóng, tiện lợi qua QR Code. Hỗ trợ ví điện tử và ngân hàng phổ biến.",
      stats: "500+ Projects",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      image: "https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
   
      title_main: "Đáp Ứng Yêu Cầu Pháp Lý & Quản Lý Minh Bạch",
      title1: "Tuân Thủ Pháp Luật",
      title2: "Lưu Trữ Dữ Liệu An Toàn",
      description1: "Hệ thống giúp doanh nghiệp tuân thủ hóa đơn, thuế.",
      description2: "Lưu trữ dữ liệu an toàn, dễ dàng truy xuất.",
      stats: "500+ Projects",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 70 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play none none reverse',
          },
        },
      );

      // Card animations
      if (cardsContainerRef.current) {
        const cards = cardsContainerRef.current.children;

        Array.from(cards).forEach((card, index) => {
          // Entrance animation with slight rotation
          gsap.fromTo(
            card,
            { opacity: 0, x: index % 2 === 0 ? -150 : 150, rotate: index % 2 === 0 ? -5 : 5 },
            {
              opacity: 1,
              x: 0,
              rotate: 0,
              duration: 1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 90%',
                end: 'bottom 10%',
                toggleActions: 'play none none reverse',
              },
            },
          );

          // Floating animation
          gsap.to(card, {
            y: 'random(-15, 15)',
            rotate: 'random(-2, 2)',
            duration: 'random(4, 6)',
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.4,
          });

          // Hover effect
          const cardElement = card as HTMLElement;
          cardElement.addEventListener('mouseenter', () => {
            gsap.to(cardElement, {
              scale: 1.05,
              rotate: index % 2 === 0 ? 2 : -2,
              duration: 0.5,
              ease: 'power2.out',
            });
          });

          cardElement.addEventListener('mouseleave', () => {
            gsap.to(cardElement, {
              scale: 1,
              rotate: 0,
              duration: 0.5,
              ease: 'power2.out',
            });
          });
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="industries"
      className="py-32 px-4 sm:px-8 lg:px-12 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full blur-3xl" />
      </div>

      <div className="max-w-8xl mx-auto relative z-10">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-24">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            TRIPC SOLUTIONS{' '}
            <span className="text-blue-600 relative">
              có gì?
              <div className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full" />
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium facilis rem ducimus.
          </p>
        </div>

        {/* Cards */}
        <div
          ref={cardsContainerRef}
          className="relative grid px-24 gap-8 md:grid-cols-2 md:gap-12 max-w-8xl mx-auto"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 transform
                ${index === 0 ? 'md:-translate-y-16 md:-translate-x-8' : index === 1 ? 'md:translate-y-16 md:translate-x-8' : index === 2 ? 'md:translate-y-16 md:-translate-x-8' : 'md:-translate-y-16 md:translate-x-8'}`}
              style={{ zIndex: index % 2 === 0 ? 10 : 5 }}
            >
              {/* Background gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${industry.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10 p-8 sm:p-12 grid md:grid-cols-5 gap-8 items-start">
                {/* Content */}
                <div className="md:col-span-3">
                  <div className="flex items-center mb-6">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {industry.title_main}
                      </h3>
                      <div className={`text-base font-medium bg-gradient-to-r ${industry.color} bg-clip-text text-transparent`}>
                        {industry.stats}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-medium text-gray-800">{industry.title1}</h4>
                      <p className="text-base text-gray-600 leading-relaxed">{industry.description1}</p>
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-gray-800">{industry.title2}</h4>
                      <p className="text-base text-gray-600 leading-relaxed">{industry.description2}</p>
                    </div>
                  </div>

                  <button
                    className={`mt-8 px-6 py-3 bg-gradient-to-r ${industry.color} text-white rounded-lg hover:shadow-xl transition-all duration-300 font-medium text-lg relative overflow-hidden group/button`}
                    aria-label={`Learn more about ${industry.title_main}`}
                  >
                    <span className="relative z-10">Learn More</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/button:translate-x-full transition-transform duration-500" />
                  </button>
                </div>

                {/* Image */}
                <div className="md:col-span-2 relative">
                  <div className="relative h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden">
                    <img
                      src={industry.image}
                      alt={industry.title_main}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                  {/* Decorative elements */}
                  <div
                    className={`absolute -top-3 -right-3 w-5 h-5 bg-gradient-to-br ${industry.color} rounded-full opacity-60 group-hover:scale-125 transition-transform duration-300`}
                  />
                  <div
                    className={`absolute -bottom-3 -left-3 w-5 h-5 bg-gradient-to-br ${industry.color} rounded-full opacity-40 group-hover:scale-125 transition-transform duration-300`}
                  />
                </div>
              </div>

              {/* Subtle border glow */}
              <div
                className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                style={{ mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}