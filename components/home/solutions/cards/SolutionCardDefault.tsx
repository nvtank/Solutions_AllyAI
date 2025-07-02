'use client';

import { type Solution } from '../solutionsData';

interface SolutionCardDefaultProps {
  solution: Solution;
}

export default function SolutionCardDefault({ solution }: SolutionCardDefaultProps) {
  return (
    <div className="relative w-full h-64 lg:h-80 rounded-xl overflow-hidden shadow-xl transform-gpu">
      <div 
        className={`w-full h-full bg-gradient-to-br ${solution.bgGradient} flex items-center justify-center text-2xl font-bold text-black opacity-70`}
      >
        {solution.title} Visual
      </div>
    </div>
  );
}
