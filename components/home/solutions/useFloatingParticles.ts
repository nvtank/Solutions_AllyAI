import { useMemo } from 'react';
import { solutionsWithIcons } from '../../../data/content/solutionsData';

export interface FloatingParticle {
  key: number;
  style: React.CSSProperties;
  className: string;
}

export function useFloatingParticles(): FloatingParticle[][] {
  const floatingParticles = useMemo(() => {
    return solutionsWithIcons.map(solution => 
      [...Array(4)].map((_, i) => ({
        key: i,
        style: {
          left: `${20 + Math.random() * 60}%`,
          top: `${20 + Math.random() * 60}%`,
        },
        className: `floating-particle absolute w-2 h-2 bg-gradient-to-r ${solution.color} rounded-full opacity-20`
      }))
    );
  }, []);

  return floatingParticles;
}
