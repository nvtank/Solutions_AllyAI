'use client';

import { ArrowRight } from 'lucide-react';
import { type Solution } from './solutionsData';
import SolutionCardContent from './SolutionCardContent';

interface SolutionCardProps {
  solution: Solution;
  index: number;
  floatingParticles?: Array<{
    key: number;
    style: React.CSSProperties;
    className: string;
  }>;
}

export default function SolutionCard({ solution, index, floatingParticles = [] }: SolutionCardProps) {
  return (
    <div 
      className="flex-shrink-0 w-screen h-screen relative overflow-hidden"
      style={{ opacity: 1, willChange: 'auto' }}
    >
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${solution.bgGradient} opacity-30`} />
      
      {/* Floating Particles - Hidden on mobile */}
      <div className="absolute inset-0 pointer-events-none hidden sm:block">
        {floatingParticles.map((particle) => (
          <div
            key={particle.key}
            className={particle.className}
            style={{
              ...particle.style,
              willChange: 'transform'
            }}
          />
        ))}
      </div>

      {/* Content Grid - Mobile optimized */}
      <div className="relative z-10 h-full flex items-center px-2 py-4 sm:px-4 lg:px-0 sm:py-0">
        <SolutionCardContent solution={solution} index={index} />
      </div>

      {/* Navigation Hint - Mobile optimized */}
      {index < 4 && (
        <div className="absolute bottom-2 sm:bottom-6 lg:bottom-8 right-2 sm:right-6 lg:right-8 flex items-center space-x-1 sm:space-x-2 text-gray-500">
          <span className="text-xs font-medium hidden sm:block">Scroll to continue</span>
          <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 animate-pulse" />
        </div>
      )}
    </div>
  );
}