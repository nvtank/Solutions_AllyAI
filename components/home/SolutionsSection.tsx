'use client';

import { useRef } from 'react';
import { solutionsWithIcons } from './solutions/solutionsData';
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
      className="relative bg-white overflow-hidden py-16 sm:py-24"
    >
      <SolutionsHeader ref={titleRef} />


      <ProgressBar ref={progressRef} />
      <div ref={horizontalRef} className="relative">
        <div 
          ref={cardsRef} 
          className="lg:flex lg:w-max grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 px-4 sm:px-6 lg:px-0"
        >
          {solutionsWithIcons.map((solution, index) => (
            <SolutionCard
              key={solution.id}
              solution={solution}
              index={index}
              floatingParticles={floatingParticles[index]}
            />
          ))}
        </div>
      </div>
      <SolutionsCTA />
    </section>
  );
}