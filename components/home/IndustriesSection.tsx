'use client';

import { useRef, useEffect } from 'react';
import { Wrench } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useLanguage } from '@/contexts/LanguageContext';

export default function IndustriesSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  // Get industries data from translations
  const industriesData = (t('industries') as unknown as any) || {};
  const industries = industriesData.items || [];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Use matchMedia for responsive animations
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

              // Hover effect
              const cardElement = card as HTMLElement;
              cardElement.addEventListener('mouseenter', () => {
                gsap.to(cardElement, {
                  scale: 1.03,
                  duration: 0.4,
                  ease: 'power2.out',
                });
              });

              cardElement.addEventListener('mouseleave', () => {
                gsap.to(cardElement, {
                  scale: 1,
                  duration: 0.4,
                  ease: 'power2.out',
                });
              });
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

        {/* Cards */}
        <div
          ref={cardsContainerRef}
          className="grid grid-cols-1 space-y-12 md:grid-cols-2 gap-8 lg:gap-12 max-w-8xl mx-auto"
        >
          {industries.map((industry: any, index: number) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl p-2 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-300`}
            >
              {/* Background gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${industry.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

                {/* Image */}
                <div className="md:col-span-2 relative block sm:hidden">
                  <div className="relative h-48 sm:h-64 lg:h-80 xl:h-96 rounded-lg sm:rounded-xl overflow-hidden">
                    <img
                      src={industry.image}
                      alt={industry.title_main}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                  {/* Decorative elements - hidden on mobile */}
                  <div
                    className={`absolute -top-3 -right-3 w-3 h-3 sm:w-5 sm:h-5 bg-gradient-to-br ${industry.color} rounded-full opacity-60 group-hover:scale-125 transition-transform duration-300 hidden sm:block`}
                  />
                  <div
                    className={`absolute -bottom-3 -left-3 w-3 h-3 sm:w-5 sm:h-5 bg-gradient-to-br ${industry.color} rounded-full opacity-40 group-hover:scale-125 transition-transform duration-300 hidden sm:block`}
                  />
                </div>
              <div className="relative z-10 p-4 sm:p-6 lg:p-8 xl:p-12 grid gap-4 sm:gap-6 lg:gap-8 md:grid-cols-5 items-start">
                {/* Content */}
                <div className="md:col-span-3">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div>
                      <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {industry.title_main}
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-4 sm:space-y-6">
                    <div>
                      <h4 className="text-base sm:text-lg lg:text-xl font-medium text-gray-800">{industry.title1}</h4>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{industry.description1}</p>
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg lg:text-xl font-medium text-gray-800">{industry.title2}</h4>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{industry.description2}</p>
                    </div>
                  </div>

                  <button
                    className={`mt-6 sm:mt-8 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r ${industry.color} text-white rounded-lg hover:shadow-xl transition-all duration-300 font-medium text-sm sm:text-base lg:text-lg relative overflow-hidden group/button`}
                    aria-label={`Learn more about ${industry.title_main}`}
                  >
                    <span className="relative z-10">Trải nghiệm ngay</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/button:translate-x-full transition-transform duration-500" />
                  </button>
                </div>

                {/* Image */}
                <div className="md:col-span-2 relative hidden sm:block">
                  <div className="relative h-48 sm:h-64 lg:h-80 xl:h-96 rounded-lg sm:rounded-xl overflow-hidden">
                    <img
                      src={industry.image}
                      alt={industry.title_main}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                  {/* Decorative elements - hidden on mobile */}
                  <div
                    className={`absolute -top-3 -right-3 w-3 h-3 sm:w-5 sm:h-5 bg-gradient-to-br ${industry.color} rounded-full opacity-60 group-hover:scale-125 transition-transform duration-300 hidden sm:block`}
                  />
                  <div
                    className={`absolute -bottom-3 -left-3 w-3 h-3 sm:w-5 sm:h-5 bg-gradient-to-br ${industry.color} rounded-full opacity-40 group-hover:scale-125 transition-transform duration-300 hidden sm:block`}
                  />
                </div>
              </div>

              {/* Subtle border glow */}
              <div
                className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                style={{ mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}