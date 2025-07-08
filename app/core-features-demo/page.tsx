import React from 'react';
import CoreFeatures from '@/components/home/test/CoreFeatures';

export default function CoreFeaturesDemo() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Core Features Demo
          </h1>
          <p className="text-lg text-gray-600">
            Demonstration of our core features component with animations
          </p>
        </div>
        
        <CoreFeatures />
      </div>
    </div>
  );
}