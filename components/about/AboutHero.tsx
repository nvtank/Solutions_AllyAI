'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, Play } from 'lucide-react';

export default function AboutHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white py-20 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Về <span className="text-blue-200">TripC Solutions</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Trong bối cảnh yêu cầu chuyển đổi số ngày càng cấp thiết, TripC Solution ra đời. Chúng tôi cung cấp nền tảng công nghệ toàn diện. Giúp doanh nghiệp số hóa hoạt động kinh doanh nhanh chóng.
            </p>
       
          </div>
        </div>
      </div>
    </section>
  );
}
