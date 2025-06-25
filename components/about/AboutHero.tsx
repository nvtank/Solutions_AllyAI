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
              About <span className="text-blue-200">TripC Solutions</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Trong bối cảnh yêu cầu chuyển đổi số ngày càng cấp thiết, TripC Solution ra đời. Chúng tôi cung cấp nền tảng công nghệ toàn diện. Giúp doanh nghiệp số hóa hoạt động kinh doanh nhanh chóng.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="group px-8 py-4 bg-white text-blue-600 rounded-lg hover:shadow-xl transition-all flex items-center space-x-3 font-medium">
                <span>Our Story</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group px-8 py-4 bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white rounded-lg hover:bg-white/30 transition-all flex items-center space-x-3 font-medium">
                <Play className="w-5 h-5" />
                <span>Watch Video</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
