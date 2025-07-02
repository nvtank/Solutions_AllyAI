'use client';

import { ArrowRight } from 'lucide-react';
import { type Solution } from '../solutionsData';
import SolutionCard05 from './SolutionCard05';

interface SolutionCardContent05Props {
  solution: Solution;
  index: number;
}

export default function SolutionCardContent05({ solution, index }: SolutionCardContent05Props) {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-3 sm:px-4 lg:px-8 xl:px-12 py-4 sm:py-8 lg:py-12">
      <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-4 sm:gap-12 lg:gap-20">
        
        {/* Text Content - Mobile optimized */}
        <div className="w-full lg:w-2/3 z-10 flex flex-col items-start lg:items-end text-left lg:text-right">
          <div className="bg-white/60 backdrop-blur-2xl border border-gray-200 rounded-xl sm:rounded-3xl lg:rounded-[3rem] p-4 sm:p-8 lg:p-16 shadow-lg sm:shadow-2xl w-full max-w-none sm:max-w-2xl lg:max-w-3xl">
            <div className="flex items-center space-x-2 sm:space-x-6 lg:space-x-8 justify-start lg:justify-end mb-3 sm:mb-6 lg:mb-8">
              <div className="text-2xl sm:text-4xl lg:text-7xl font-extrabold text-gray-200">{solution.id}</div>
              <div className={`w-10 h-10 sm:w-14 sm:h-14 lg:w-20 lg:h-20 rounded-lg sm:rounded-2xl lg:rounded-3xl bg-gradient-to-br ${solution.color} flex items-center justify-center text-white shadow-lg sm:shadow-2xl`}>{solution.icon}</div>
            </div>
            <h3 className="text-lg sm:text-3xl lg:text-6xl font-black text-gray-900 mb-2 sm:mb-4 lg:mb-6 leading-tight tracking-tight">
              {solution.title}
            </h3>
            <p className={`text-sm sm:text-lg lg:text-2xl font-bold bg-gradient-to-r ${solution.color} bg-clip-text text-transparent mb-3 sm:mb-6 lg:mb-8`}>
              {solution.subtitle}
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-6 lg:p-8 mb-2 sm:mb-4 lg:mb-6">
              <p className="text-xs sm:text-base lg:text-xl text-gray-800 leading-relaxed">
                Nền tảng hỗ trợ người dùng khám phá các điểm đến phổ biến, so sánh giá phòng từ nhiều nguồn khác nhau và điều hướng đến các trang đặt phòng phù hợp. Với giao diện thân thiện, trải nghiệm tìm kiếm mượt mà và thông tin minh bạch, hệ thống giúp người dùng tiết kiệm thời gian, lựa chọn tối ưu cho mỗi chuyến đi.
              </p>
            </div>
            <button 
              onClick={() => window.location.href = '#contact-form'}
              className={`group px-4 sm:px-8 lg:px-12 py-2 sm:py-3 lg:py-5 bg-gradient-to-r ${solution.color} text-white rounded-md sm:rounded-lg lg:rounded-2xl hover:shadow-lg sm:hover:shadow-2xl transition-all duration-300 font-semibold relative overflow-hidden transform-gpu text-xs sm:text-base lg:text-2xl`}
            >
              <span className="relative z-10 flex items-center space-x-1 sm:space-x-2 lg:space-x-3">
                <span>Dùng thử miễn phí</span>
                <ArrowRight className="w-3 h-3 sm:w-5 sm:h-5 lg:w-7 lg:h-7 group-hover:translate-x-3 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </button>
          </div>
        </div>
        
        {/* Visual - Hidden on mobile, visible on tablet+ */}
        <div className="hidden sm:flex lg:w-1/3 items-center justify-center lg:pr-20">
          <div className="w-full h-full drop-shadow-2xl">
            <SolutionCard05 solution={solution} />
          </div>
        </div>
      </div>
    </div>
  );
}
