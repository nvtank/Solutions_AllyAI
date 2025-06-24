import { Sparkles } from 'lucide-react';
import { forwardRef } from 'react';

const SolutionsHeader = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div ref={ref} style={{ opacity: 1, transform: 'translateY(0px)' }}>  
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
          Lợi Ích Khi Sử Dụng <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            TripC Solution
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur illum expedita, fugit assumenda velit magnam doloribus quidem, debitis iure, corporis sint. Delectus consequuntur modi debitis facere, officiis sapiente quis odit.
          </p>
        </div>
      </div>
    </div>
  );
});

SolutionsHeader.displayName = 'SolutionsHeader';

export default SolutionsHeader;
