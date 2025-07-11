'use client';

import { useState, useEffect, useRef } from 'react';

export default function AboutCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 lg:py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className={`absolute top-8 left-8 w-16 h-16 bg-white/10 rounded-full blur-xl transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}></div>
        <div className={`absolute top-32 right-16 w-24 h-24 bg-white/5 rounded-full blur-2xl transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}></div>
        <div className={`absolute bottom-16 left-1/4 w-20 h-20 bg-white/10 rounded-full blur-xl transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}></div>
      </div>
      
      <div className="relative max-w-4xl mx-auto text-center text-white px-4 sm:px-6 lg:px-8">
        {/* Main heading */}
        <div className="max-w-3xl mx-auto mb-6 lg:mb-8">
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 leading-tight transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Bạn đã sẵn sàng chưa?
          </h2>
          
          <p className={`text-base sm:text-lg lg:text-xl mb-8 lg:mb-10 opacity-90 leading-relaxed transition-all duration-1000 delay-300 ${isVisible ? 'opacity-90 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Hãy để chúng tôi đồng hành cùng bạn trong việc ứng dụng AI để 
            <span className="font-semibold text-yellow-300"> tối ưu hóa quy trình kinh doanh</span> và 
            tạo ra những <span className="font-semibold text-yellow-300">giá trị bền vững</span>.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-6 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a href="/contact" className="group w-full sm:w-auto px-6 lg:px-8 py-3 lg:py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-900 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-base lg:text-lg font-bold">
            <span className="relative z-10">Liên hệ ngay</span>
          </a>
          
          <a href="/templates" className="group w-full sm:w-auto px-6 lg:px-8 py-3 lg:py-4 border-2 border-white/80 text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-base lg:text-lg font-semibold">
            <span className="relative z-10">Xem mẫu</span>
          </a>
        </div>
      </div>
    </section>
  );
}
