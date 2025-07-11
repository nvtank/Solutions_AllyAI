'use client';

import { Calendar, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactCTA() {
  const { t } = useLanguage();

  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 rounded-2xl text-white">
      <h3 className="text-2xl font-bold mb-4">{t('contact.cta.title')}</h3>
      <p className="mb-6 opacity-90">
        {t('contact.cta.description')}
      </p>
      <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center space-x-2">
        <Calendar className="w-5 h-5" />
        <span>{t('contact.cta.button')}</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}
