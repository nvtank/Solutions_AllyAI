import { Building2, Factory, Cog, Zap, Target } from 'lucide-react';

export interface Solution {
  id: string;
  icon: JSX.Element;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  color: string;
  bgGradient: string;
  stats: {
    value: string;
    label: string;
  };
}

export const SOLUTIONS_DATA: Solution[] = [
  {
    id: '01',
    icon: <Building2 className="w-10 h-10" />,
    title: "Smart Manufacturing",
    subtitle: "AI-Powered Production",
    description: "Transform your manufacturing processes with intelligent automation, predictive analytics, and real-time optimization systems that adapt to changing demands.",
    features: ["Predictive Maintenance", "Quality Control AI", "Process Optimization", "Real-time Analytics"],
    color: "from-blue-600 to-indigo-600",
    bgGradient: "from-blue-50 to-indigo-50",
    stats: { value: "40%", label: "Efficiency Increase" }
  },
  {
    id: '02',
    icon: <Factory className="w-10 h-10" />,
    title: "Industrial IoT",
    subtitle: "Connected Operations",
    description: "Integrate IoT sensors, AI analytics, and automated workflows to create a fully connected industrial ecosystem that responds intelligently to operational needs.",
    features: ["IoT Integration", "Edge Computing", "Data Analytics", "Remote Monitoring"],
    color: "from-emerald-600 to-teal-600",
    bgGradient: "from-emerald-50 to-teal-50",
    stats: { value: "60%", label: "Cost Reduction" }
  },
  {
    id: '03',
    icon: <Cog className="w-10 h-10" />,
    title: "Equipment Intelligence",
    subtitle: "Predictive Systems",
    description: "Monitor and optimize equipment performance with advanced AI algorithms that predict failures, schedule maintenance, and maximize operational uptime.",
    features: ["Failure Prediction", "Maintenance Scheduling", "Performance Analytics", "Lifecycle Management"],
    color: "from-purple-600 to-pink-600",
    bgGradient: "from-purple-50 to-pink-50",
    stats: { value: "99.9%", label: "Uptime Achieved" }
  },
  {
    id: '04',
    icon: <Zap className="w-10 h-10" />,
    title: "Energy Optimization",
    subtitle: "Smart Power Management",
    description: "Optimize energy consumption across your operations with AI-driven power management systems that reduce costs while maintaining peak performance.",
    features: ["Energy Analytics", "Load Balancing", "Cost Optimization", "Sustainability Metrics"],
    color: "from-yellow-600 to-orange-600",
    bgGradient: "from-yellow-50 to-orange-50",
    stats: { value: "35%", label: "Energy Savings" }
  },
  {
    id: '05',
    icon: <Target className="w-10 h-10" />,
    title: "Quality Assurance",
    subtitle: "AI-Driven Quality",
    description: "Ensure consistent quality with computer vision and machine learning systems that detect defects, monitor standards, and optimize production quality.",
    features: ["Computer Vision", "Defect Detection", "Quality Metrics", "Compliance Tracking"],
    color: "from-red-600 to-rose-600",
    bgGradient: "from-red-50 to-rose-50",
    stats: { value: "95%", label: "Quality Score" }
  }
];

// Pre-calculated constants
export const TOTAL_CARDS = SOLUTIONS_DATA.length;
export const CARD_WIDTH = 100; // vw
export const ANIMATION_DURATION = 0.6;
