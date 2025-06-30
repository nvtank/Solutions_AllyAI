'use client';

import { useState } from 'react';
import { Brain, Shield, Target, TrendingUp, Lightbulb, Award, Check } from 'lucide-react';

export default function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Analytics",
      description: "Advanced machine learning algorithms that analyze your industrial data in real-time",
      color: "from-blue-500 to-indigo-500",
      highlights: [
        "Real-time Data Processing",
        "Predictive Analytics",
        "Pattern Recognition",
        "Automated Insights"
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Industrial Security",
      description: "Enterprise-grade security protocols designed for industrial environments",
      color: "from-slate-500 to-gray-500",
      highlights: [
        "End-to-End Encryption",
        "Access Control Systems",
        "Compliance Monitoring",
        "Threat Detection"
      ]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Process Optimization",
      description: "Optimize your industrial processes with AI-driven recommendations",
      color: "from-emerald-500 to-teal-500",
      highlights: [
        "Workflow Analysis",
        "Efficiency Improvements",
        "Cost Reduction",
        "Quality Enhancement"
      ]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Performance Monitoring",
      description: "Monitor and track performance metrics across all your industrial operations",
      color: "from-orange-500 to-red-500",
      highlights: [
        "Real-time Dashboards",
        "KPI Tracking",
        "Performance Reports",
        "Trend Analysis"
      ]
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation Hub",
      description: "Stay ahead with cutting-edge industrial technologies and innovations",
      color: "from-violet-500 to-purple-500",
      highlights: [
        "Technology Research",
        "Innovation Labs",
        "Prototype Development",
        "Future Solutions"
      ]
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Assurance",
      description: "Ensure the highest quality standards with AI-powered quality control",
      color: "from-cyan-500 to-blue-500",
      highlights: [
        "Automated Testing",
        "Quality Metrics",
        "Defect Detection",
        "Compliance Tracking"
      ]
    }
  ];

  return (
    <section id="features" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Advanced <span className="text-blue-600">AI Features</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful features designed to revolutionize your industrial operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`group p-8 rounded-xl border transition-all duration-300 hover:shadow-lg cursor-pointer bg-white ${
                activeFeature === index 
                  ? 'border-blue-400/50 bg-blue-50 shadow-md shadow-blue-500/20' 
                  : 'border-gray-200 hover:border-blue-400/30'
              }`}
              onClick={() => setActiveFeature(index)}
            >
              <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 bg-gradient-to-br ${feature.color} text-white group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              
              {activeFeature === index && (
                <ul className="space-y-2">
                  {feature.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-4 h-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Feature detail view */}
        <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200 shadow-lg">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{features[activeFeature].title}</h3>
              <p className="text-gray-600 mb-6 text-lg">{features[activeFeature].description}</p>
              <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Explore Feature
              </button>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
              <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-4 bg-gradient-to-br ${features[activeFeature].color} text-white mx-auto`}>
                    {features[activeFeature].icon}
                  </div>
                  <div className="font-medium text-gray-700">{features[activeFeature].title}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}