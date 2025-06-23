import { forwardRef } from 'react';

const ProgressBar = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
      <div 
        ref={ref} 
        className="h-full bg-gradient-to-r from-blue-600 to-indigo-600"
        style={{ width: '0%', willChange: 'width' }}
      />
    </div>
  );
});

ProgressBar.displayName = 'ProgressBar';

export default ProgressBar;
