'use client';

import { ArrowRight, ExternalLink } from 'lucide-react';
import { type Solution } from '../solutionsData';
import SolutionCard05 from './SolutionCard05';

interface SolutionCardContent05Props {
  solution: Solution;
  index: number;
}

export default function SolutionCardContent05({ solution, index }: SolutionCardContent05Props) {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-8 xl:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-center h-full">
        
        {/* First Text Column - Header & Description */}
        <div 
          className={`text-column-1 space-y-4 lg:col-span-1 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-1'}`}
          style={{ 
            opacity: 1, 
            transform: 'translateX(0px)', 
            willChange: 'transform',
            width: '100%',
            maxWidth: '100%'
          }}
        >
          {/* Header */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center text-white shadow-lg transform-gpu`}>
                {solution.icon}
              </div>
              <div className="text-4xl font-bold text-gray-200">
                {solution.id}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl lg:text-3xl font-black text-gray-900 mb-3 leading-tight tracking-tight">
                {solution.title}
              </h3>
              <p className={`text-base font-bold bg-gradient-to-r ${solution.color} bg-clip-text text-transparent mb-4`}>
                {solution.subtitle}
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                {solution.description}
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <button 
              onClick={() => window.location.href = '#contact-form'}
              className={`group px-6 py-3 bg-gradient-to-r ${solution.color} text-white rounded-lg hover:shadow-lg transition-all duration-300 font-medium relative overflow-hidden transform-gpu`}
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span className="text-sm">Dùng thử miễn phí</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </button>
          </div>
        </div>


        {/* Visual Column */}
        <div 
          className={`visual-container lg:col-span-1 ${index % 2 === 1 ? 'lg:order-3' : 'lg:order-3'}`}
          style={{ 
            opacity: 1, 
            transform: 'translateX(0px)', 
            willChange: 'transform',
            width: '100%',
            maxWidth: '100%'
          }}
        >
          <SolutionCard05 solution={solution} />
        </div>
      </div>
    </div>
  );
}
