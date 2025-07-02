'use client';

import { type Solution } from '../solutionsData';

interface SolutionCard05Props {
  solution: Solution;
}

export default function SolutionCard05({ solution }: SolutionCard05Props) {
  return (
    <div className="w-full h-80 sm:h-96 lg:h-[600px] relative bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl sm:rounded-2xl p-4 sm:p-8 lg:p-12 flex items-center justify-center">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl sm:shadow-2xl max-w-xs sm:max-w-md lg:max-w-lg w-full">
        <div className="text-center">
          <div className={`w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto mb-3 sm:mb-4 lg:mb-6 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${solution.color} flex items-center justify-center text-white shadow-lg sm:shadow-xl`}>
            {solution.icon}
          </div>
          <h4 className="text-lg sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-3 sm:mb-4 lg:mb-6">API Integration Hub</h4>
          <div className="space-y-2 sm:space-y-3 lg:space-y-4">
            <div className="bg-gray-50 rounded-lg sm:rounded-xl p-2 sm:p-3 lg:p-4">
              <span className="text-xs sm:text-sm lg:text-base font-medium text-gray-600">RESTful API</span>
              <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3 mt-1 sm:mt-2">
                <div className="bg-indigo-500 h-2 sm:h-3 rounded-full w-full"></div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg sm:rounded-xl p-2 sm:p-3 lg:p-4">
              <span className="text-xs sm:text-sm lg:text-base font-medium text-gray-600">GraphQL</span>
              <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3 mt-1 sm:mt-2">
                <div className="bg-purple-500 h-2 sm:h-3 rounded-full w-4/5"></div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg sm:rounded-xl p-2 sm:p-3 lg:p-4">
              <span className="text-xs sm:text-sm lg:text-base font-medium text-gray-600">Webhooks</span>
              <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3 mt-1 sm:mt-2">
                <div className="bg-blue-500 h-2 sm:h-3 rounded-full w-3/4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
