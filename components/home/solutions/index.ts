// Export all solution components
export { default as SolutionsHeader } from './SolutionsHeader';
export { default as ProgressBar } from './ProgressBar';
export { default as SolutionCard } from './SolutionCard';
export { default as SolutionsCTA } from './SolutionsCTA';

// Export hooks
export { useAnimations } from './useAnimations';
export { useFloatingParticles } from './useFloatingParticles';

// Export data and types
export { SOLUTIONS_DATA, TOTAL_CARDS, CARD_WIDTH, ANIMATION_DURATION } from './solutionsData';
export type { Solution } from './solutionsData';
export type { FloatingParticle } from './useFloatingParticles';
