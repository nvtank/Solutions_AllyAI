// components/test/DataDemo.tsx
'use client';

import { siteConfig } from '@/data';
import { useLanguage } from '@/contexts/LanguageContext';

export default function DataDemo() {
  const { t } = useLanguage();
  const heroData = t('hero') as any;
  const aboutData = t('about') as any;
  
  return (
    <div className="p-8 bg-gray-100 rounded-lg m-4">
      <h2 className="text-2xl font-bold mb-4">🧪 Data Pattern Test</h2>
      
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold text-green-600">✅ Site Config:</h3>
          <p>Site Name: {siteConfig.name}</p>
          <p>Description: {siteConfig.description}</p>
        </div>

        <div>
          <h3 className="font-semibold text-blue-600">✅ Hero Content:</h3>
          <p>Title: {heroData.title}</p>
          <p>Subtitle: {heroData.subtitle}</p>
          <p>CTA Primary: {heroData.cta?.primary}</p>
        </div>

        <div>
          <h3 className="font-semibold text-purple-600">✅ About Content:</h3>
          <p>Hero Title: {aboutData.hero?.title}</p>
          <p>Mission: {aboutData.mission?.mission?.description}</p>
        </div>
      </div>

      <div className="mt-6 p-4 bg-green-50 rounded border border-green-200">
        <p className="text-green-800 font-medium">
          🎉 Content Pattern hoạt động! Bây giờ bạn có thể sửa text trong /data/locales/ và website sẽ tự động cập nhật.
        </p>
      </div>
    </div>
  );
}
