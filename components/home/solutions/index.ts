// Export all solution components
export { default as SolutionsHeader } from './SolutionsHeader';
export { default as ProgressBar } from './ProgressBar';
export { default as SolutionCard } from './SolutionCard';
export { default as SolutionCardContent } from './SolutionCardContent';
export { default as SolutionVisual } from './SolutionVisual';
export { default as AppStoreIcons } from './AppStoreIcons';
export { default as SolutionsCTA } from './SolutionsCTA';

// Export individual card components
export * from './cards';

// Export hooks
export { useAnimations } from './useAnimations';
export { useFloatingParticles } from './useFloatingParticles';

// Export data and types
export type { Solution } from '../../../data/content/solutionsData';
export type { FloatingParticle } from './useFloatingParticles';

// Constants
export const TOTAL_CARDS = 5;
export const CARD_WIDTH = 100;
export const ANIMATION_DURATION = 3;
