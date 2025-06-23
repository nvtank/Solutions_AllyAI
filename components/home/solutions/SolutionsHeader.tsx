import { Sparkles } from 'lucide-react';
import { forwardRef } from 'react';

const SolutionsHeader = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div ref={ref} style={{ opacity: 1, transform: 'translateY(0px)' }}>
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full border border-blue-200 mb-8">
            <Sparkles className="w-4 h-4 mr-2 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">AI Solutions Portfolio</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Comprehensive <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              AI Solutions
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            End-to-end industrial AI solutions designed to optimize your operations, 
            drive innovation, and accelerate growth across every aspect of your business
          </p>
        </div>
      </div>
    </div>
  );
});

SolutionsHeader.displayName = 'SolutionsHeader';

export default SolutionsHeader;
