import { Sparkles } from 'lucide-react';
import { forwardRef } from 'react';

const SolutionsHeader = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div ref={ref} style={{ opacity: 1, transform: 'translateY(0px)' }}>  
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              GIẢI PHÁP
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            TRIPC SOLUTIONS đưa ra một hệ sinh thái giải pháp toàn diện hỗ trợ doanh nghiệp từ bán hàng đến tài chính
          </p>
        </div>
      </div>
    </div>
  );
});

SolutionsHeader.displayName = 'SolutionsHeader';

export default SolutionsHeader;
