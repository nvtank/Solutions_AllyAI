'use client';

import { Star } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function TestimonialsSection() {
  const { t } = useLanguage();

  // Get testimonials data from locale files
  const testimonialsData = t('testimonials');
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 sm:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-12 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            {testimonialsData.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {testimonialsData.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {testimonialsData.items.map((testimonial, index) => (
            <div 
              key={index} 
              className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-200/60 hover:shadow-xl hover:border-gray-300 transition-all duration-300 ease-in-out flex flex-col"
            >
       
              <div className="flex items-center mt-auto pt-6 border-t border-gray-200/80">
                <div className="w-14 h-14 rounded-full overflow-hidden mr-4 flex-shrink-0 ring-2 ring-offset-2 ring-gray-200/80 group-hover:ring-blue-200 transition-all duration-300">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    width={56}
                    height={56}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <h4 className="text-lg font-semibold text-gray-800">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500">
                    {testimonial.position}, <span className="font-medium text-gray-600">{testimonial.company}</span>
                  </p>
                  <div className="flex items-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
                     <div className="flex-grow mb-6">
                        <blockquote className="text-gray-600 text-lg leading-relaxed relative">

                            <p className="relative z-10">{testimonial.quote}</p>
                        </blockquote>
                    </div>
                    
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}