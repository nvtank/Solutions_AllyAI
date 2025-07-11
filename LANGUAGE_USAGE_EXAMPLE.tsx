// Example of how to use the language system in any component

'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function ExampleComponent() {
  const { t, language, setLanguage } = useLanguage();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">
        {t('hero.title')} {/* Gets "TripC Solutions" */}
      </h1>
      
      <p className="mb-4">
        {t('hero.description')} {/* Gets the description in current language */}
      </p>

      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">
          {t('benefits.title')} {/* Gets "Lợi ích chính" or "Key Benefits" */}
        </h2>
        <p>{t('benefits.subtitle')}</p>
      </div>

      <div className="mb-4">
        <h3 className="font-medium">Current Language: {language}</h3>
        <button 
          onClick={() => setLanguage(language === 'vi' ? 'en' : 'vi')}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Switch to {language === 'vi' ? 'English' : 'Vietnamese'}
        </button>
      </div>

      {/* Example of accessing array items */}
      <div className="mb-4">
        <h3 className="font-medium">Benefits:</h3>
        <ul className="list-disc pl-5">
          <li>{t('benefits.items.0.title')}: {t('benefits.items.0.description')}</li>
          <li>{t('benefits.items.1.title')}: {t('benefits.items.1.description')}</li>
          <li>{t('benefits.items.2.title')}: {t('benefits.items.2.description')}</li>
        </ul>
      </div>

      {/* Example of accessing nested objects */}
      <div className="mb-4">
        <h3 className="font-medium">Call to Action Buttons:</h3>
        <button className="bg-blue-600 text-white px-4 py-2 rounded mr-2">
          {t('hero.cta.primary')}
        </button>
        <button className="bg-gray-600 text-white px-4 py-2 rounded">
          {t('hero.cta.secondary')}
        </button>
      </div>

      {/* Example of accessing stats array */}
      <div className="mb-4">
        <h3 className="font-medium">Stats:</h3>
        <div className="flex space-x-4">
          {t('hero.stats').map((stat: any, index: number) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* 
Usage Pattern Summary:

1. Import the useLanguage hook:
   import { useLanguage } from '@/contexts/LanguageContext';

2. Use the hook in your component:
   const { t, language, setLanguage } = useLanguage();

3. Access translations using dot notation:
   - t('hero.title') - gets simple string
   - t('hero.cta.primary') - gets nested object property  
   - t('hero.stats') - gets entire array
   - t('hero.stats.0.value') - gets specific array item property

4. The language automatically persists in localStorage
5. All components using the hook will re-render when language changes
6. If a translation key is not found, it returns the key itself

Translation File Structure:
- vi.ts and en.ts have identical structure
- Nested objects use dot notation for access
- Arrays can be accessed by index
- Always ensure both language files have the same keys
*/
