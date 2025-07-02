'use client';

import { Smartphone } from 'lucide-react';

export default function AppStoreIcons() {
  return (
    <div className="flex space-x-2 mt-2">
      <div className="w-24 h-8 bg-black text-white rounded-md flex items-center justify-center text-xs font-medium">
        <Smartphone className="w-3 h-3 mr-1" />
        App Store
      </div>
      <div className="w-24 h-8 bg-black text-white rounded-md flex items-center justify-center text-xs font-medium">
        <Smartphone className="w-3 h-3 mr-1" />
        CH Play
      </div>
    </div>
  );
}
