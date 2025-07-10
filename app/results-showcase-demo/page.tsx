import React from 'react';
import ResultsShowcase from '@/components/home/main/ResultsShowcase';

export default function ResultsShowcaseDemoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-gray-900">
            Results Showcase Component Demo
          </h1>
          <p className="text-gray-600 mt-2">
            Advanced animated CTA button with multiple effects and responsive design
          </p>
        </div>
      </div>

      {/* Demo Content */}
      <div className="py-8">
        <ResultsShowcase />
      </div>

      {/* Features Info */}
      <div className="bg-white shadow-sm border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Enhanced Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">🎨 Advanced Animations</h3>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Gradient background shift</li>
                <li>• Rotating conic gradients</li>
                <li>• Floating particles</li>
                <li>• Pulse rings</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-900 mb-2">✨ Interactive Effects</h3>
              <ul className="text-sm text-green-800 space-y-1">
                <li>• Hover scale & translate</li>
                <li>• Magnetic button effect</li>
                <li>• Shine sweep animation</li>
                <li>• Multiple ripple effects</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-900 mb-2">📱 Responsive Design</h3>
              <ul className="text-sm text-purple-800 space-y-1">
                <li>• Mobile-optimized</li>
                <li>• Reduced motion support</li>
                <li>• Accessibility compliant</li>
                <li>• Performance optimized</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
