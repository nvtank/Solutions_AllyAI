'use client';

import React, { useState } from 'react';
import { Calendar, CreditCard, BarChart, Users, Shield, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const iconMap = {
  Calendar,
  CreditCard,
  BarChart,
  Users,
  Shield,
  Zap
};

export default function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(0);
  const { t } = useLanguage();
  
  const featuresData = t('features') as any;

  return (
    <section id="features" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">
            {featuresData.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            {featuresData.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {featuresData.items?.map((feature: any, index: number) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <div 
                key={index}
                className={`group p-4 sm:p-6 lg:p-8 rounded-xl border transition-all duration-300 hover:shadow-lg cursor-pointer bg-white ${
                  activeFeature === index 
                    ? 'border-blue-400/50 bg-blue-50 shadow-md shadow-blue-500/20' 
                    : 'border-gray-200 hover:border-blue-400/30'
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg flex items-center justify-center mb-4 sm:mb-6 bg-gradient-to-br from-blue-500 to-indigo-500 text-white group-hover:scale-110 transition-transform">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8">
                    {IconComponent && <IconComponent className="w-full h-full" />}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Feature detail view */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-12 border border-gray-200 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                {featuresData.items?.[activeFeature]?.title}
              </h3>
              <p className="text-gray-600 mb-4 sm:mb-6 text-base sm:text-lg">
                {featuresData.items?.[activeFeature]?.description}
              </p>
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm sm:text-base">
                Khám phá tính năng
              </button>
            </div>
            <div className="bg-gray-50 p-6 sm:p-8 rounded-xl border border-gray-200 order-first lg:order-last">
              <div className="h-48 sm:h-56 lg:h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg flex items-center justify-center mb-3 sm:mb-4 bg-gradient-to-br from-blue-500 to-indigo-500 text-white mx-auto">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8">
                      {featuresData.items?.[activeFeature]?.icon && iconMap[featuresData.items[activeFeature].icon as keyof typeof iconMap] && 
                        React.createElement(iconMap[featuresData.items[activeFeature].icon as keyof typeof iconMap], { className: 'w-full h-full' })
                      }
                    </div>
                  </div>
                  <div className="font-medium text-gray-700 text-sm sm:text-base">
                    {featuresData.items?.[activeFeature]?.title}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}