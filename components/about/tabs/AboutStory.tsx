'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutStory() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const team = [
    {
      name: "Sarah Johnson",
      position: "CEO & Co-Founder",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Former VP of Engineering at TechCorp with 15+ years in industrial AI"
    },
    {
      name: "Michael Chen",
      position: "CTO & Co-Founder",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "AI researcher and former Google engineer specializing in machine learning"
    },
    {
      name: "Elena Rodriguez",
      position: "Head of Product",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Product strategist with deep expertise in industrial automation"
    },
    {
      name: "David Kim",
      position: "Head of Engineering",
      image: "https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Full-stack engineer passionate about scalable AI infrastructure"
    }
  ];

  return (
    <div ref={sectionRef} className="grid md:grid-cols-2 gap-12 items-center">
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
        <h2 className={`text-4xl font-bold text-gray-900 mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {t('about.story.title')} <span className="text-blue-600">{t('about.story.subtitle')}</span>
        </h2>
        <p className={`text-lg text-gray-600 mb-6 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {t('about.story.description')}
        </p>
        <p className={`text-lg text-gray-600 mb-6 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {t('about.story.description2')}
        </p>
      </div>
      
      <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
        <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
          <Image
            src="/hero1.png"
            alt="Our Story"
            width={800}
            height={600}
            className="rounded-2xl shadow-lg"
          />
        </div>
        <div className={`absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-gray-200 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'}`}>
          <div className="text-2xl font-bold text-blue-600">{t('about.story.stat.value')}</div>
          <div className="text-sm text-gray-600">{t('about.story.stat.label')}</div>
        </div>
      </div>
    </div>
  );
}
