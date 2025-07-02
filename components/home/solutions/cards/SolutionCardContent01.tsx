'use client';

import { ArrowRight, ExternalLink } from 'lucide-react';
import { type Solution } from '../solutionsData';
import AppStoreIcons from '../AppStoreIcons';
import SolutionCard01 from './SolutionCard01';

interface SolutionCardContent01Props {
  solution: Solution;
  index: number;
}

export default function SolutionCardContent01({ solution, index }: SolutionCardContent01Props) {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-3 sm:px-4 lg:px-8 xl:px-12 py-4 sm:py-8 lg:py-12">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-8 lg:gap-12">
        
        {/* Text Content - Mobile optimized */}
        <div className="w-full lg:w-1/2 z-10">
          <div className="space-y-3 sm:space-y-4 mb-3 sm:mb-6">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-lg sm:rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center text-white shadow-lg transform-gpu`}>
                {solution.icon}
              </div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-200">
                {solution.id}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg sm:text-2xl lg:text-3xl font-black text-gray-900 mb-2 sm:mb-3 leading-tight tracking-tight">
                {solution.title}
              </h3>
              <p className={`text-sm sm:text-base font-bold bg-gradient-to-r ${solution.color} bg-clip-text text-transparent mb-3 sm:mb-4`}>
                {solution.subtitle}
              </p>
              <div className="bg-white/50 backdrop-blur-sm border border-gray-200 rounded-lg sm:rounded-xl p-3 sm:p-4 mb-3 sm:mb-4">
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {solution.description}
                </p>
              </div>
            </div>
          </div>

          {/* Sub Products - Simplified for mobile */}
          {solution.subProducts && (
            <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-6">
              {solution.subProducts.map((subProduct, idx) => (
                <div 
                  key={idx} 
                  className="bg-white/90 backdrop-blur-sm rounded-lg p-2 sm:p-3 border border-gray-200 hover:shadow-md transition-all duration-300"
                >
                  <h4 className="font-semibold text-gray-900 mb-1 text-xs sm:text-sm">{subProduct.title}</h4>
                  <p className="text-xs text-gray-600 mb-2 leading-relaxed hidden sm:block">{subProduct.description}</p>
                  
                  {subProduct.hasAppIcons ? (
                    <div className="scale-75 sm:scale-100 origin-left">
                      <AppStoreIcons />
                    </div>
                  ) : (
                    <button 
                      onClick={() => subProduct.buttonLink && window.open(subProduct.buttonLink, '_blank')}
                      className={`inline-flex items-center space-x-1 px-2 sm:px-3 py-1 sm:py-1.5 bg-gradient-to-r ${solution.color} text-white rounded-md text-xs font-medium hover:shadow-md transition-all duration-300`}
                    >
                      <span>{subProduct.buttonText}</span>
                      <ExternalLink className="w-2 h-2 sm:w-3 sm:h-3" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* CTA Button */}
          <div>
            <button 
              onClick={() => window.location.href = '#contact-form'}
              className={`group px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r ${solution.color} text-white rounded-md sm:rounded-lg hover:shadow-lg transition-all duration-300 font-medium relative overflow-hidden transform-gpu text-xs sm:text-sm`}
            >
              <span className="relative z-10 flex items-center space-x-1 sm:space-x-2">
                <span>Dùng thử miễn phí</span>
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </button>
          </div>
        </div>

        {/* Visual Column - Hidden on mobile, visible on tablet+ */}
        <div className="hidden sm:flex lg:w-1/2 items-center justify-center">
          <div className="w-full h-full">
            <SolutionCard01 solution={solution} />
          </div>
        </div>
      </div>
    </div>
  );
}
