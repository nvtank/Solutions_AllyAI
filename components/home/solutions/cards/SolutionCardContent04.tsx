'use client';

import { ArrowRight } from 'lucide-react';
import { type Solution } from '../solutionsData';
import SolutionCard04 from './SolutionCard04';

interface SolutionCardContent04Props {
  solution: Solution;
  index: number;
}

export default function SolutionCardContent04({ solution, index }: SolutionCardContent04Props) {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-3 sm:px-4 lg:px-8 xl:px-12 py-4 sm:py-8 lg:py-12">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-12 lg:gap-16">
        
        {/* Text Content - Mobile optimized */}
        <div className="w-full lg:w-1/2 z-10 flex flex-col items-start text-left">
          <div className="bg-white/80 border-2 sm:border-4 border-transparent bg-clip-padding rounded-xl sm:rounded-3xl p-4 sm:p-8 lg:p-12 shadow-lg sm:shadow-2xl w-full">
            <div className="flex items-center space-x-2 sm:space-x-6 mb-3 sm:mb-6">
              <div className={`w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg sm:rounded-2xl bg-gradient-to-br ${solution.color} flex items-center justify-center text-white shadow-lg sm:shadow-xl`}>{solution.icon}</div>
              <div className="text-2xl sm:text-4xl lg:text-6xl font-extrabold text-gray-200">{solution.id}</div>
            </div>
            <h3 className="text-lg sm:text-3xl lg:text-5xl font-black text-gray-900 mb-2 sm:mb-4 leading-tight tracking-tight">
              {solution.title}
            </h3>
            <p className={`text-sm sm:text-lg lg:text-xl font-bold bg-gradient-to-r ${solution.color} bg-clip-text text-transparent mb-3 sm:mb-6`}>
              {solution.subtitle}
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg sm:rounded-xl p-3 sm:p-6 mb-2 sm:mb-4">
              <p className="text-xs sm:text-base lg:text-lg text-gray-800 leading-relaxed">
                Giải pháp đặt chỗ linh hoạt cho các loại hình dịch vụ giải trí – từ nhà hàng, spa đến karaoke và sân thể thao. Nền tảng hỗ trợ tối ưu hoá trải nghiệm người dùng nhờ tính năng gợi ý khung giờ trống, nhắc lịch tự động và quản lý khách hàng hiệu quả, giúp nâng cao tỷ lệ sử dụng dịch vụ và tối ưu vận hành.
              </p>
            </div>
            <button 
              onClick={() => window.location.href = '#contact-form'}
              className={`group px-4 sm:px-8 lg:px-10 py-2 sm:py-3 lg:py-4 bg-gradient-to-r ${solution.color} text-white rounded-md sm:rounded-lg lg:rounded-xl hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 font-semibold relative overflow-hidden transform-gpu text-xs sm:text-base lg:text-lg`}
            >
              <span className="relative z-10 flex items-center space-x-1 sm:space-x-2">
                <span>Dùng thử miễn phí</span>
                <ArrowRight className="w-3 h-3 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </button>
          </div>
        </div>
        
        {/* Visual - Hidden on mobile, visible on tablet+ */}
        <div className="hidden sm:flex lg:w-1/2 items-center justify-center lg:pl-16">
          <div className="w-full h-full">
            <SolutionCard04 solution={solution} />
          </div>
        </div>
      </div>
    </div>
  );
}
