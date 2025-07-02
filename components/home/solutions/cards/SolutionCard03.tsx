'use client';

import { Users } from 'lucide-react';
import { type Solution } from '../solutionsData';

interface SolutionCard03Props {
  solution: Solution;
}

export default function SolutionCard03({ solution }: SolutionCard03Props) {
  return (
    <div className="relative w-full h-80 sm:h-96 lg:h-[600px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl transform-gpu">
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 p-4 sm:p-6 lg:p-8 flex items-center justify-center">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl p-4 sm:p-6 lg:p-8 w-full max-w-xs sm:max-w-sm lg:max-w-md">
          <div className="text-center">
            <Users className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-green-600 mx-auto mb-3 sm:mb-4" />
            <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">Booking Giải trí</h4>
            <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Nhà hàng • Spa • Karaoke</p>
            <div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-500">
              <div className="flex justify-between bg-gray-50 rounded-lg p-2 sm:p-3">
                <span>Tỷ lệ sử dụng:</span>
                <span className="font-semibold text-green-600">95%</span>
              </div>
              <div className="flex justify-between bg-gray-50 rounded-lg p-2 sm:p-3">
                <span>Khung giờ trống:</span>
                <span className="font-semibold">18:00-20:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
