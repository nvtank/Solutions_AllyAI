'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useLanguage } from '@/contexts/LanguageContext';

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const waveRef = useRef<HTMLDivElement>(null);
  const transitionOverlayRef = useRef<HTMLDivElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);
  const starfieldRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { t, language } = useLanguage();

  // Get stats data based on current language
  const getStatsData = () => {
    if (language === 'vi') {
      return [
        { number: '500+', label: 'Dự án' },
        { number: '2000+', label: 'Người dùng' },
        { number: '99.9%', label: 'Uptime SLA' }
      ];
    } else {
      return [
        { number: '500+', label: 'Projects' },
        { number: '2000+', label: 'Users' },
        { number: '99.9%', label: 'Uptime SLA' }
      ];
    }
  };

  useEffect(() => {
    setIsVisible(true);
    
    gsap.registerPlugin(ScrollTrigger);
    
    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      gsap.to(waveRef.current, {
        backgroundPosition: "200% 0%",
        duration: 15,
        repeat: -1,
        ease: "none"
      });

      gsap.to(transitionOverlayRef.current, {
        opacity: 1,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "bottom 90%",
          end: "bottom 30%",
          scrub: 1,
        }
      });

      gsap.to(heroRef.current, {
        backgroundColor: "#000000",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
        }
      });

      mm.add("(min-width: 768px)", () => {
        if (gradientRef.current) {
          gsap.to(gradientRef.current.children, {
            x: "random(-50, 50)",
            y: "random(-50, 50)",
            scale: "random(0.8, 1.2)",
            opacity: "random(0.3, 0.7)",
            duration: "random(12, 20)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            stagger: { amount: 5, from: "random" }
          });
        }

        if (particlesRef.current) {
          gsap.to(particlesRef.current.children, {
            y: "random(-100, 100)",
            x: "random(-100, 100)",
            scale: "random(0.5, 1.5)",
            opacity: "random(0.2, 0.8)",
            duration: "random(10, 25)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            stagger: { amount: 8, from: "random" }
          });
        }

        if (starfieldRef.current) {
          gsap.to(starfieldRef.current.children, {
            opacity: "random(0.1, 0.9)",
            scale: "random(0.5, 1.2)",
            duration: "random(2, 5)",
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            stagger: { amount: 3, from: "random" }
          });
        }

        if (particlesRef.current) {
          gsap.to(particlesRef.current.children, {
            scale: "random(0.3, 2)",
            opacity: "random(0.2, 0.9)",
            backgroundColor: "#60a5fa",
            scrollTrigger: {
              trigger: heroRef.current,
              start: "bottom 75%",
              end: "bottom 35%",
              scrub: 1.5,
            }
          });
        }

        if (gradientRef.current) {
          gsap.to(gradientRef.current.children, {
            scale: "random(0.5, 1.8)",
            x: "random(-200, 200)",
            y: "random(-200, 200)",
            opacity: "random(0.2, 0.8)",
            scrollTrigger: {
              trigger: heroRef.current,
              start: "bottom 80%",
              end: "bottom 30%",
              scrub: 1.2,
            }
          });
        }

        gsap.to(gradientRef.current, { yPercent: -20, ease: "none", scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: 1.5 } });
        gsap.to(particlesRef.current, { yPercent: -50, ease: "none", scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: 1 } });
        gsap.to(starfieldRef.current, { yPercent: -30, ease: "none", scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: 2 } });

        gsap.to(waveRef.current, {
          yPercent: 20,
          opacity: 0.1,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "bottom 80%",
            end: "bottom 20%",
            scrub: 1,
          }
        });
      });

      mm.add("(max-width: 767px)", () => {
        if (gradientRef.current) {
          gsap.to(gradientRef.current.children, {
            opacity: "random(0.2, 0.5)",
            duration: "random(10, 15)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
          });
        }
        if (starfieldRef.current) {
          gsap.to(starfieldRef.current.children, {
            opacity: "random(0.1, 0.7)",
            duration: "random(3, 6)",
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
          });
        }
      });
    });

    return () => {
      ctx.revert();
      mm.revert();
    };
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 to-blue-950">
  
      <div className="transition-overlay absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-20 pointer-events-none opacity-0" ref={transitionOverlayRef} />

      <div
        ref={waveRef}
        className="wave-bg absolute inset-0 opacity-30"
        style={{
          background: `
            linear-gradient(45deg, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
            linear-gradient(-45deg, rgba(99, 102, 241, 0.15) 0%, transparent 50%)
          `,
          backgroundSize: '400% 400%',
        }}
      />

 
      <div ref={gradientRef} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/5 left-1/5 w-40 h-40 md:w-80 md:h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/5 right-1/5 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.8s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-gradient-to-r from-blue-400/15 to-indigo-400/15 rounded-full blur-3xl" />
      </div>

      <div ref={starfieldRef} className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="star absolute w-1 h-1 bg-white/80 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `scale(${Math.random() * 0.5 + 0.5})`,
            }}
          />
        ))}
      </div>

      <div ref={particlesRef} className="absolute inset-0 pointer-events-none md:block hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={`particle absolute rounded-full ${
              i % 4 === 0 ? 'w-2 h-2 bg-blue-400/50' :
              i % 4 === 1 ? 'w-1.5 h-1.5 bg-indigo-400/60' :
              i % 4 === 2 ? 'w-2.5 h-2.5 bg-purple-400/50' :
              'w-1 h-1 bg-cyan-400/70'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-30 flex flex-col items-center justify-center h-full w-full text-center px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="w-full max-w-5xl">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight text-white mb-3 sm:mb-4">
            {t('hero.title').toUpperCase()}
          </h1>
          <h2 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-extrabold leading-tight bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            {t('hero.subtitle')}
          </h2>
        </div>

        <div ref={buttonsRef} className="flex flex-row items-center justify-center space-x-4 lg:space-x-6 my-8 sm:my-10 md:my-12">
          <button className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 flex items-center space-x-2 sm:space-x-3 font-medium text-sm sm:text-base overflow-hidden w-auto">
            <span className="relative z-10">{t('hero.cta.primary')}</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 group-hover:translate-x-1.5 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500 scale-110" />
          </button>
          <button className="group px-6 py-3 sm:px-8 sm:py-4 bg-white/5 backdrop-blur-sm border-2 border-white/20 text-white rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-500 flex items-center space-x-2 sm:space-x-3 font-medium text-sm sm:text-base w-auto">
            <span>{t('hero.cta.secondary')}</span>
          </button>
        </div>

          <div className='hidden sm:block '>
                  <div ref={statsRef} className="flex  flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8 lg:space-x-16 text-white/70 mt-8 sm:mt-0">
                  {getStatsData().map((stat, index) => (
                    <div key={index} className="text-center group cursor-pointer">
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 group-hover:scale-110 transition-transform duration-300">
                        {stat.number}
                      </div>
                      <div className="text-xs sm:text-sm uppercase tracking-wider group-hover:text-blue-400 transition-colors duration-300">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
          </div>
      </div>


      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent" />
      
      <div className="hidden sm:block absolute top-4 sm:top-8 left-4 sm:left-8 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 border-l-2 border-t-2 border-blue-400/20 rounded-tl-xl" />
      <div className="hidden sm:block absolute top-4 sm:top-8 right-4 sm:right-8 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 border-r-2 border-t-2 border-blue-400/20 rounded-tr-xl" />
      <div className="hidden sm:block absolute bottom-4 sm:bottom-8 left-4 sm:left-8 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 border-l-2 border-b-2 border-blue-400/20 rounded-bl-xl" />
      <div className="hidden sm:block absolute bottom-4 sm:bottom-8 right-4 sm:right-8 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 border-r-2 border-b-2 border-blue-400/20 rounded-br-xl" />

      <div className="hidden md:block absolute top-1/5 right-6 sm:right-12 animate-pulse">
        <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400/50" />
      </div>
      <div className="hidden md:block absolute bottom-1/5 left-6 sm:left-12 animate-pulse" style={{ animationDelay: '0.5s' }}>
        <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-indigo-400/50" />
      </div>
    </section>
  );
}