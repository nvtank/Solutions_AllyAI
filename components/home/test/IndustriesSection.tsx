'use client';

import { useRef, useEffect } from 'react';
import { Wrench } from 'lucide-react';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useLanguage } from '@/contexts/LanguageContext';

export default function IndustriesSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  const industriesData = (t('industries') as unknown as any) || {};
  const industries = industriesData.items || [];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {

      ScrollTrigger.matchMedia({
        // Desktop animations
        "(min-width: 768px)": function() {
          // Title animation
          gsap.fromTo(
            titleRef.current,
            { opacity: 0, y: 70 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: titleRef.current,
                start: 'top 85%',
                end: 'bottom 15%',
                toggleActions: 'play none none reverse',
              },
            },
          );

          // Card animations
          if (cardsContainerRef.current) {
            const cards = cardsContainerRef.current.children;

            Array.from(cards).forEach((card, index) => {
              // Entrance animation
              gsap.fromTo(
                card,
                { opacity: 0, y: 100, scale: 0.9 },
                {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  duration: 0.6,
                  ease: 'power3.out',
                  delay: index * 0.1,
                  scrollTrigger: {
                    trigger: card,
                    start: 'top 90%',
                    end: 'bottom 10%',
                    toggleActions: 'play none none reverse',
                  },
                },
              );

              
     

         
            });
          }
        },
        // No animations on mobile
        "(max-width: 767px)": function() {
          // You can leave this empty to have no animations on mobile
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="industries"
      className="py-16 sm:py-24 lg:py-32 px-4 sm:px-8 lg:px-12 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20 hidden sm:block">
        <div className="absolute top-1/3 left-1/4 w-60 h-60 sm:w-80 sm:h-80 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full blur-3xl" />
      </div>

      <div className="max-w-8xl mx-auto relative z-10">
        <div ref={titleRef} className="text-center mb-12 sm:mb-16 lg:mb-24">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-gray-900 px-2">
            {industriesData.title}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto px-2">
            {industriesData.subtitle}
          </p>
        </div>

        <div
          ref={cardsContainerRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full mx-auto"
        >
          {industries.map((industry: any, index: number) => (
            <div
              key={index}
              className={`group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200/50 hover:border-gray-300  `}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${industry.bgColor} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />
              <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[280px]">
                <div className="relative z-10 p-4 sm:p-6 lg:p-8 flex flex-col justify-center">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                        {industry.title_main}
                      </h3>
                    </div>
                  </div>

                  {/* Stats Badge */}
                  <div className="mb-4">
                    <div className="inline-flex bg-gradient-to-r from-blue-50 to-purple-50 rounded-full px-3 py-1 shadow-sm">
                      <span className="text-xs font-semibold text-gray-700">{industry.stats}</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {/* First Content Block */}
                    <div className="bg-gray-50 rounded-xl p-3 sm:p-4 group-hover:bg-gray-100 transition-colors duration-300">
                      <h4 className="text-sm font-semibold text-gray-900 mb-1">
                        {industry.title1}
                      </h4>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        {industry.description1}
                      </p>
                    </div>

                    {/* Second Content Block */}
                    <div className="bg-gray-50 rounded-xl p-3 sm:p-4 group-hover:bg-gray-100 transition-colors duration-300">
                      <h4 className="text-sm font-semibold text-gray-900 mb-1">
                        {industry.title2}
                      </h4>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        {industry.description2}
                      </p>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="flex justify-start mt-6">
                    <button
                      className={`px-6 py-2 bg-gradient-to-r ${industry.color || 'from-blue-500 to-purple-500'} text-white rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold text-xs sm:text-sm relative overflow-hidden group/button`}
                      aria-label={`Learn more about ${industry.title_main}`}
                    >
                      <span className="relative z-10 flex items-center">
                        Trải nghiệm ngay
                        <svg className="w-3 h-3 ml-1 transform group-hover/button:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/button:translate-x-full transition-transform duration-500" />
                    </button>
                  </div>
                </div>

                {/* Right Column - Image */}
                <div className="relative h-56 sm:h-64 lg:h-auto overflow-hidden">
                  <Image
                    src={`/${index + 1}.jpg`}
                    alt={industry.title_main}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Animated border */}
              <div className={`absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-br ${industry.color || 'from-blue-500 to-purple-500'} opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`} 
                   style={{ 
                     mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                     maskComposite: 'exclude',
                     WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                     WebkitMaskComposite: 'xor'
                   }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}