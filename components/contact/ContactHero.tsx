'use client';

import { Calendar, MessageSquare, Phone, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactHero() {
  const { t } = useLanguage();

  return (
    <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white py-20 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t('contact.hero.title')} <span className="text-blue-200">{t('contact.hero.subtitle')}</span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            {t('contact.hero.description')}
          </p>

        </div>
      </div>
    </section>
  );
}
