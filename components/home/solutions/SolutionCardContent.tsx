'use client';

import { type Solution } from './solutionsData';
import { 
  SolutionCardContent01, 
  SolutionCardContent02, 
  SolutionCardContent03, 
  SolutionCardContent04, 
  SolutionCardContent05,
  SolutionCardContentDefault 
} from './cards';

interface SolutionCardContentProps {
  solution: Solution;
  index: number;
}

export default function SolutionCardContent({ solution, index }: SolutionCardContentProps) {
  // Render appropriate content component based on solution id
  switch (solution.id) {
    case '01':
      return <SolutionCardContent01 solution={solution} index={index} />;
    case '02':
      return <SolutionCardContent02 solution={solution} index={index} />;
    case '03':
      return <SolutionCardContent03 solution={solution} index={index} />;
    case '04':
      return <SolutionCardContent04 solution={solution} index={index} />;
    case '05':
      return <SolutionCardContent05 solution={solution} index={index} />;
    default:
      return <SolutionCardContentDefault solution={solution} index={index} />;
  }
}
