'use client';

import { type Solution } from './solutionsData';
import { 
  SolutionCard01, 
  SolutionCard02, 
  SolutionCard03, 
  SolutionCard04, 
  SolutionCard05,
  SolutionCardDefault 
} from './cards';

interface SolutionVisualProps {
  solution: Solution;
}

export default function SolutionVisual({ solution }: SolutionVisualProps) {
  // Render appropriate card component based on solution id
  switch (solution.id) {
    case '01':
      return <SolutionCard01 solution={solution} />;
    case '02':
      return <SolutionCard02 solution={solution} />;
    case '03':
      return <SolutionCard03 solution={solution} />;
    case '04':
      return <SolutionCard04 solution={solution} />;
    case '05':
      return <SolutionCard05 solution={solution} />;
    default:
      return <SolutionCardDefault solution={solution} />;
  }
}
