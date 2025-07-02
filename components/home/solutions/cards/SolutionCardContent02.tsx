'use client';

import { ArrowRight } from 'lucide-react';
import { type Solution } from '../solutionsData';
import SolutionCard02 from './SolutionCard02';

interface SolutionCardContent02Props {
  solution: Solution;
  index: number;
}

export default function SolutionCardContent02({ solution, index }: SolutionCardContent02Props) {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-3 sm:px-4 lg:px-8 xl:px-12 py-4 sm:py-12 lg:py-16">
      <div className="relative flex flex-col lg:flex-row items-center justify-center gap-4 sm:gap-8">
        
        {/* Text Content - Full width on mobile */}
        <div className="w-full lg:w-3/5 lg:pr-8 z-10">
          {/* Header */}
          <div className="space-y-2 sm:space-y-4 mb-3 sm:mb-6">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className={`w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg sm:rounded-xl lg:rounded-2xl bg-gradient-to-br ${solution.color} flex items-center justify-center text-white shadow-lg sm:shadow-2xl transform-gpu`}>
                {solution.icon}
              </div>
              <div className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-200">
                {solution.id}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg sm:text-3xl lg:text-4xl font-black text-gray-900 mb-2 sm:mb-3 leading-tight tracking-tight">
                Nền tảng Booking bán vé Sự kiện & Du lịch
              </h3>
              <p className={`text-sm sm:text-lg font-bold bg-gradient-to-r ${solution.color} bg-clip-text text-transparent mb-2 sm:mb-5`}>
                {solution.subtitle}
              </p>
              <div className="bg-white/50 backdrop-blur-sm border border-gray-200 rounded-lg sm:rounded-xl p-3 sm:p-6">
                <p className="text-xs sm:text-base text-gray-800 leading-relaxed mb-2 sm:mb-3">
                  Nền tảng hỗ trợ các khu vui chơi, điểm du lịch bán vé trực tuyến với giao diện thân thiện, đặt vé nhanh chóng, hiển thị rõ thông tin chương trình, thời gian, giá vé và ưu đãi.
                </p>
                <p className="text-xs sm:text-base text-gray-800 leading-relaxed">
                  Giúp tự động hóa quy trình đặt vé, kiểm soát số lượng khách, tích hợp thanh toán và cung cấp báo cáo theo thời gian thực – nâng cao trải nghiệm khách hàng và tối ưu vận hành cho doanh nghiệp.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-2 sm:pt-4">
            <button 
              onClick={() => window.location.href = '#contact-form'}
              className={`group px-4 sm:px-8 py-2 sm:py-4 bg-gradient-to-r ${solution.color} text-white rounded-md sm:rounded-xl hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 font-semibold relative overflow-hidden transform-gpu text-xs sm:text-base`}
            >
              <span className="relative z-10 flex items-center space-x-1 sm:space-x-2">
                <span>Dùng thử miễn phí</span>
                <ArrowRight className="w-3 h-3 sm:w-5 sm:h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </button>
          </div>
        </div>

        {/* Visual Column - Hidden on mobile, visible on tablet+ */}
        <div className="hidden sm:flex w-full lg:w-2/5 lg:absolute lg:right-0 lg:top-0 h-full items-center justify-center">
          <div className="w-full h-full">
            <SolutionCard02 solution={solution} />
          </div>
        </div>
      </div>
    </div>
  );
}
