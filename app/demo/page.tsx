import React from 'react';
import Brand from '@/components/home/main/Brand';
import CoreFeatures from '@/components/home/main/CoreFeatures';
import Benefits from '@/components/home/main/Benefits';
import WhyChooseUs from '@/components/home/main/WhychooseUs';

export default function DemoPage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Components Demo
          </h1>
          <p className="text-lg text-gray-600">
            Demonstration of all animated components
          </p>
        </div>
      </div>
      
      {/* Demo Components */}
      <Brand />
      <CoreFeatures />
      <Benefits />
      <WhyChooseUs />
    </div>
  );
}