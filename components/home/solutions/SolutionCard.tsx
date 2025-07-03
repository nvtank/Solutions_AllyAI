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
    <div className="lg:flex-shrink-0 lg:w-screen lg:h-screen relative overflow-hidden bg-white rounded-2xl shadow-md lg:shadow-none lg:rounded-none"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${solution.bgGradient} opacity-30`} />
  
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
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

      <div className="relative z-10 h-full flex items-center p-6 md:p-8 lg:p-0">
        <SolutionCardContent solution={solution} index={index} />
      </div>

      {index < 4 && (
        <div className="absolute bottom-8 right-8 hidden lg:flex items-center space-x-2 text-gray-500">
          <span className="text-sm font-medium">Scroll to continue</span>
          <ArrowRight className="w-4 h-4 animate-pulse" />
        </div>
      )}
    </div>
  );
}