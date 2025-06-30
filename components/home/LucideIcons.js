'use client';

import { 
  Brain, 
  Shield, 
  Target, 
  Sparkles,
  ArrowRight,
  Check
} from 'lucide-react';

export default function LucideIcons({ name, className }) {
  switch(name) {
    case 'Brain':
      return <Brain className={className} />;
    case 'Shield':
      return <Shield className={className} />;
    case 'Target':
      return <Target className={className} />;
    case 'Sparkles':
      return <Sparkles className={className} />;
    case 'ArrowRight':
      return <ArrowRight className={className} />;
    case 'Check':
      return <Check className={className} />;
    default:
      return null;
  }
}