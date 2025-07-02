'use client';

import { Globe, Smartphone } from 'lucide-react';
import { type Solution } from '../solutionsData';

interface SolutionCard01Props {
  solution: Solution;
}

export default function SolutionCard01({ solution }: SolutionCard01Props) {
  return (
    <div className="relative w-full h-80 sm:h-96 lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl transform-gpu">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 p-4 sm:p-6 lg:p-8 flex items-center justify-center">
        <div className="grid grid-cols-1 gap-4 sm:gap-6 w-full h-full max-w-xs sm:max-w-md">
          <div className="bg-white rounded-xl sm:rounded-2xl h-[120px] sm:h-[180px] lg:h-[250px] shadow-xl p-4 sm:p-6 flex flex-col items-center justify-center">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-blue-100 rounded-xl sm:rounded-2xl flex items-center justify-center mb-2 sm:mb-3 lg:mb-4">
              <Globe className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-blue-600" />
            </div>
            <span className="text-sm sm:text-base lg:text-lg font-semibold text-gray-700 text-center">Website Platform</span>
            <span className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2 text-center">Booking System</span>
          </div>
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl h-[120px] sm:h-[180px] lg:h-[250px] p-4 sm:p-6 flex flex-col items-center justify-center">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-blue-100 rounded-xl sm:rounded-2xl flex items-center justify-center mb-2 sm:mb-3 lg:mb-4">
              <Smartphone className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-blue-600" />
            </div>
            <span className="text-sm sm:text-base lg:text-lg font-semibold text-gray-700 text-center">Mobile App</span>
            <span className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2 text-center">Merchant Tools</span>
          </div>
        </div>
      </div>
    </div>
  );
}
