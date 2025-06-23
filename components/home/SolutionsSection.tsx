'use client';

import { useRef } from 'react';
import { SOLUTIONS_DATA } from './solutions/solutionsData';
import { useAnimations } from './solutions/useAnimations';
import { useFloatingParticles } from './solutions/useFloatingParticles';
import SolutionsHeader from './solutions/SolutionsHeader';
import ProgressBar from './solutions/ProgressBar';
import SolutionCard from './solutions/SolutionCard';
import SolutionsCTA from './solutions/SolutionsCTA';

export default function SolutionsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  // Custom hooks
  const floatingParticles = useFloatingParticles();
  useAnimations({ titleRef, horizontalRef, cardsRef, progressRef });

  return (
    <section 
      ref={sectionRef} 
      id="solutions" 
      className="relative bg-white overflow-hidden"
      style={{ willChange: 'auto' }}
    >
      
      {/* Title Section - Pre-rendered */}
      <SolutionsHeader ref={titleRef} />

      {/* Progress Bar - Optimized */}
      <ProgressBar ref={progressRef} />

      {/* Horizontal Scroll Section - Pre-rendered visible */}
      <div ref={horizontalRef} className="relative">
        <div 
          ref={cardsRef} 
          className="flex"
          style={{ transform: 'translateX(0px)', willChange: 'transform' }}
        >
          {SOLUTIONS_DATA.map((solution, index) => (
            <SolutionCard
              key={solution.id}
              solution={solution}
              index={index}
              floatingParticles={floatingParticles[index]}
            />
          ))}
        </div>
      </div>

      {/* Final CTA Section - Pre-rendered */}
      <SolutionsCTA />
    </section>
  );
}