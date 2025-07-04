import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function SolutionsCTA() {
  const { t } = useLanguage();
  
  return (
    <div className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          {t('solutions.cta.title')}
        </h3>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          {t('solutions.cta.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:shadow-xl transition-all duration-300 font-medium relative overflow-hidden transform-gpu">
            <span className="relative z-10 flex items-center space-x-2">
              <span>{t('solutions.cta.buttonText')}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </button>

     
        </div>
      </div>
    </div>
  );
}
