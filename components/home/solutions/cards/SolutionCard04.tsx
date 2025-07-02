'use client';

import { Database } from 'lucide-react';
import { type Solution } from '../solutionsData';

interface SolutionCard04Props {
  solution: Solution;
}

export default function SolutionCard04({ solution }: SolutionCard04Props) {
  return (
    <div className="relative w-full h-80 sm:h-96 lg:h-[600px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl transform-gpu">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 p-4 sm:p-6 lg:p-8 flex items-center justify-center">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg sm:shadow-xl max-w-xs sm:max-w-sm lg:max-w-md w-full">
          <div className="text-center">
            <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto mb-3 sm:mb-4 rounded-xl sm:rounded-2xl bg-gradient-to-br ${solution.color} flex items-center justify-center text-white shadow-lg`}>
              <Database className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
            </div>
            <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">So sánh & Tìm kiếm Lưu trú</h4>
            <div className="space-y-2 sm:space-y-3">
              <div className="bg-gray-50 rounded-lg p-2 sm:p-3">
                <span className="text-xs sm:text-sm font-medium text-gray-600">Tìm kiếm hôm nay</span>
                <div className="text-lg sm:text-xl font-bold text-orange-600">15,420</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-2 sm:p-3">
                <span className="text-xs sm:text-sm font-medium text-gray-600">Điểm đến phổ biến</span>
                <div className="text-sm sm:text-base font-semibold text-gray-800">Đà Nẵng, Hội An</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
