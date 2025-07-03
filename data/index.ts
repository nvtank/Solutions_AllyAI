// data/index.ts
// Configuration exports
export { default as siteConfig } from './config/site';

// Content exports  
export { default as aboutContent } from './content/about';
export { default as contactContent } from './content/contact';
export { default as homeContent } from './content/home';
export { default as solutionsData } from './content/solutions';
export { default as uiText } from './content/ui-text';
export { default as navbarContent } from './content/navbar';
export { default as footerContent } from './content/footer';
export { default as ctaContent } from './content/cta';
export { default as industriesContent } from './content/industries';
export { default as featuresContent } from './content/features';

// Type definitions
export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  subject: string;
  message: string;
  inquiryType: string;
}

export interface NavigationItem {
  name: string;
  href: string;
}

export interface SocialLinks {
  facebook?: string;
  linkedin?: string;
  twitter?: string;
}

export interface TeamMember {
  name: string;
  position: string;
  description: string;
  image: string;
  social: {
    linkedin?: string;
    email?: string;
  };
}

export interface Solution {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  bgGradient: string;
  features: string[];
  subProducts?: Array<{
    name: string;
    description: string;
    buttonText: string;
    buttonLink: string;
  }>;
  stats: {
    value: string;
    label: string;
  };
  technologies?: string[];
  integrations?: string[];
  appStoreLinks?: {
    ios: string;
    android: string;
  };
}

export interface TestimonialItem {
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

export interface IndustryItem {
  name: string;
  description: string;
  image: string;
  stats: string;
  features: string[];
}
