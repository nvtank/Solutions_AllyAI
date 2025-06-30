'use client';

import { useRef, useEffect } from 'react';
import { ArrowRight, Sparkles, Monitor, Smartphone, Settings } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const products = [
  {
    id: 1,
    title: "Nền tảng Booking Đa dịch vụ",
    description: "Nền tảng giúp doanh nghiệp số hóa toàn bộ quy trình bán dịch vụ du lịch từ lưu trú, tour, voucher tour, vé khu vui chơi đến dịch vụ di chuyển. Tất cả trong một hệ thống quản lý thống nhất.",
    features: [
      {
        name: "Website booking dịch vụ",
        description: "Cung cấp giao diện đặt dịch vụ trực tuyến, thân thiện với người dùng, hỗ trợ thanh toán, xem thông tin và quản lý đơn đặt.",
        buttonText: "Xem ngay",
        link: "#", // Thay bằng link từ proposal
        icon: <Monitor className="w-6 h-6" />
      },
      {
        name: "Website quản trị dành cho Admin",
        description: "Cho phép đối tác cập nhật thông tin dịch vụ, điều chỉnh giá, quản lý khuyến mãi, theo dõi đơn hàng và doanh thu.",
        buttonText: "Xem ngay", 
        link: "#", // Thay bằng link từ proposal
        icon: <Settings className="w-6 h-6" />
      },
      {
        name: "TripC Merchant App",
        description: "Ứng dụng dành cho nhân viên tại cơ sở (khách sạn, điểm đón tour, khu vui chơi...) giúp xác nhận dịch vụ, quét mã QR và cập nhật trạng thái đơn hàng ngay trên điện thoại.",
        hasAppStores: true,
        icon: <Smartphone className="w-6 h-6" />
      }
    ],
    ctaText: "Dùng thử miễn phí",
    ctaLink: "#contact-form", // Link đến form liên hệ
    visual: "/images/booking-platform-mockup.jpg"
  },
  {
    id: 2,
    title: "Nền tảng Booking Bán vé Sự kiện & Du lịch",
    description: "Nền tảng hỗ trợ các khu vui chơi, điểm du lịch bán vé trực tuyến với giao diện thân thiện, đặt vé nhanh chóng, hiển thị rõ thông tin chương trình, thời gian, giá vé và ưu đãi. Giúp tự động hóa quy trình đặt vé, kiểm soát số lượng khách, tích hợp thanh toán và cung cấp báo cáo theo thời gian thực – nâng cao trải nghiệm khách hàng và tối ưu vận hành cho doanh nghiệp.",
    ctaText: "Dùng thử miễn phí",
    ctaLink: "#contact-form",
    visual: "/images/ticket-platform-mockup.jpg"
  },
  {
    id: 3,
    title: "Nền tảng Booking Dịch vụ Giải trí",
    description: "Giải pháp đặt chỗ linh hoạt cho các loại hình dịch vụ giải trí – từ nhà hàng, spa đến karaoke và sân thể thao. Nền tảng hỗ trợ tối ưu hoá trải nghiệm người dùng nhờ tính năng gợi ý khung giờ trống, nhắc lịch tự động và quản lý khách hàng hiệu quả, giúp nâng cao tỷ lệ sử dụng dịch vụ và tối ưu vận hành.",
    ctaText: "Dùng thử miễn phí",
    ctaLink: "#contact-form",
    visual: "/images/entertainment-platform-mockup.jpg"
  },
  {
    id: 4,
    title: "Nền tảng So sánh & Tìm kiếm Lưu trú",
    description: "Nền tảng hỗ trợ người dùng khám phá các điểm đến phổ biến, so sánh giá phòng từ nhiều nguồn khác nhau và điều hướng đến các trang đặt phòng phù hợp. Với giao diện thân thiện, trải nghiệm tìm kiếm mượt mà và thông tin minh bạch, hệ thống giúp người dùng tiết kiệm thời gian, lựa chọn tối ưu cho mỗi chuyến đi.",
    ctaText: "Dùng thử miễn phí", 
    ctaLink: "#contact-form",
    visual: "/images/search-platform-mockup.jpg"
  }
];

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(headerRef.current,
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Cards stagger animation
      gsap.fromTo(cardsRef.current?.children || [],
        {
          opacity: 0,
          y: 80,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          stagger: 0.2,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <div ref={headerRef} className="max-w-7xl mx-auto text-center mb-16">
        <div className="inline-flex items-center px-6 py-3 bg-blue-50 rounded-full border border-blue-200 mb-8">
          <Sparkles className="w-5 h-5 mr-2 text-blue-600" />
          <span className="text-sm font-medium text-blue-600">
            Sản phẩm của chúng tôi
          </span>
        </div>

        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Giải pháp 
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            {" "}Toàn diện
          </span>
          <br />
          cho Doanh nghiệp
        </h2>
        
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Hệ sinh thái nền tảng booking đa dịch vụ giúp doanh nghiệp chuyển đổi số hoàn toàn
        </p>
      </div>

      {/* Products Grid */}
      <div ref={cardsRef} className="max-w-7xl mx-auto space-y-16">
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </section>
  );
}

function ProductCard({ product, index }: { product: any; index: number }) {
  const isEven = index % 2 === 0;
  
  return (
    <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-16`}>
      {/* Content */}
      <div className="flex-1 space-y-8">
        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            {product.title}
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            {product.description}
          </p>
        </div>

        {/* Features for Product 1 */}
        {product.features && (
          <div className="space-y-6">
            {product.features.map((feature: any, idx: number) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.name}
                    </h4>
                    <p className="text-gray-600 mb-4">
                      {feature.description}
                    </p>
                    
                    {feature.buttonText && (
                      <a 
                        href={feature.link}
                        className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium"
                      >
                        {feature.buttonText}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    )}
                    
                    {feature.hasAppStores && (
                      <div className="flex gap-4 mt-4">
                        <img src="/images/app-store.png" alt="App Store" className="h-12" />
                        <img src="/images/google-play.png" alt="Google Play" className="h-12" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA Button */}
        <div className="pt-6">
          <a 
            href={product.ctaLink}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:shadow-xl transition-all duration-300 font-semibold text-lg group"
          >
            {product.ctaText}
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>

      {/* Visual */}
      <div className="flex-1 relative">
        <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 overflow-hidden">
          <img 
            src={product.visual}
            alt={product.title}
            className="w-full h-auto max-w-md mx-auto rounded-2xl shadow-2xl"
          />
          {/* Decorative elements */}
          <div className="absolute top-4 right-4 w-32 h-32 bg-blue-200/30 rounded-full blur-2xl" />
          <div className="absolute bottom-4 left-4 w-24 h-24 bg-indigo-200/30 rounded-full blur-xl" />
        </div>
      </div>
    </div>
  );
}