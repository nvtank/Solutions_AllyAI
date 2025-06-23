'use client';

import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const buttonsRef = useRef(null);
  const particlesRef = useRef(null);
  const gradientRef = useRef(null);
  const statsRef = useRef(null);
  const waveRef = useRef(null);
  const starfieldRef = useRef(null);
  const transitionOverlayRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      // Gradient waves animation
      gsap.to(gradientRef.current.children, {
        x: "random(-50, 50)",
        y: "random(-50, 50)",
        scale: "random(0.8, 1.2)",
        opacity: "random(0.3, 0.7)",
        duration: "random(12, 20)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          amount: 5,
          from: "random"
        }
      });

      // Particle system animation
      gsap.to(particlesRef.current.children, {
        y: "random(-100, 100)",
        x: "random(-100, 100)",
        scale: "random(0.5, 1.5)",
        opacity: "random(0.2, 0.8)",
        duration: "random(10, 25)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          amount: 8,
          from: "random"
        }
      });

      // Starfield twinkling animation
      gsap.to(starfieldRef.current.children, {
        opacity: "random(0.1, 0.9)",
        scale: "random(0.5, 1.2)",
        duration: "random(2, 5)",
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: {
          amount: 3,
          from: "random"
        }
      });

      // Wave background flow
      gsap.to(waveRef.current, {
        backgroundPosition: "200% 0%",
        duration: 15,
        repeat: -1,
        ease: "none"
      });

      // Transition overlay fade effect
      gsap.to(transitionOverlayRef.current, {
        opacity: 1,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "bottom 90%",
          end: "bottom 30%",
          scrub: 1,
          toggleActions: "play none none reverse"
        }
      });

      // Background color transition to black
      gsap.to(heroRef.current, {
        backgroundColor: "#000000",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%", // Start transition earlier
          end: "bottom 20%", // Complete transition near bottom
          scrub: 1,
          toggleActions: "play none none reverse"
        }
      });

      // Particle transform on scroll
      gsap.to(particlesRef.current.children, {
        scale: "random(0.3, 2)",
        opacity: "random(0.2, 0.9)",
        backgroundColor: "#60a5fa",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "bottom 75%",
          end: "bottom 35%",
          scrub: 1.5,
          toggleActions: "play none none reverse"
        }
      });

      // Gradient waves transform on scroll
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
          toggleActions: "play none none reverse"
        }
      });

      // Parallax effects
      gsap.to(gradientRef.current, {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5
        }
      });

      gsap.to(particlesRef.current, {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1
        }
      });

      gsap.to(starfieldRef.current, {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 2
        }
      });

      // Transition wave effect to connect with next section
      gsap.to(waveRef.current, {
        yPercent: 20,
        opacity: 0.1,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "bottom 80%",
          end: "bottom 20%",
          scrub: 1,
          toggleActions: "play none none reverse"
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 to-blue-950">
      {/* Transition Overlay */}
      <div 
        ref={transitionOverlayRef}
        className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-20 pointer-events-none opacity-0"
      />

      {/* Wave Background */}
      <div 
        ref={waveRef}
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            linear-gradient(45deg, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
            linear-gradient(-45deg, rgba(99, 102, 241, 0.15) 0%, transparent 50%)
          `,
          backgroundSize: '400% 400%'
        }}
      />

      {/* Gradient Waves */}
      <div ref={gradientRef} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/5 left-1/5 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/5 right-1/5 w-96 h-96 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.8s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-blue-400/15 to-indigo-400/15 rounded-full blur-3xl" />
      </div>

      {/* Starfield Effect */}
      <div ref={starfieldRef} className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/80 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `scale(${Math.random() * 0.5 + 0.5})`
            }}
          />
        ))}
      </div>

      {/* Particle System */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full ${
              i % 4 === 0 ? 'w-2 h-2 bg-blue-400/50 shadow-sm shadow-blue-400/30' :
              i % 4 === 1 ? 'w-1.5 h-1.5 bg-indigo-400/60 shadow-sm shadow-indigo-400/40' :
              i % 4 === 2 ? 'w-2.5 h-2.5 bg-purple-400/50 shadow-sm shadow-purple-400/30' :
              'w-1 h-1 bg-cyan-400/70 shadow-sm shadow-cyan-400/50'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-30 max-w-6xl mx-auto px-6 text-center">
        <div ref={titleRef} className="mb-8">
          <h1 className="text-7xl md:text-6xl lg:text-[12rem] font-bold leading-none text-white mb-6">
            Transform
          </h1>
          <h1 className="text-7xl md:text-6xl lg:text-[12rem] font-bold leading-none bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Everything
          </h1>
        </div>
        <div ref={buttonsRef} className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8 mb-20">
          <button className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 flex items-center space-x-4 font-medium text-lg overflow-hidden">
            <span className="relative z-10">Get Started</span>
            <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-2 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500 scale-110" />
          </button>
          <button className="group px-10 py-5 bg-white/5 backdrop-blur-sm border-2 border-white/20 text-white rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-500 flex items-center space-x-4 font-medium text-lg">
            <span>See templates</span>
          </button>
        </div>
        <div ref={statsRef} className="flex items-center justify-center space-x-16 text-white/70">
          {[
            { number: '500+', label: 'Projects' },
            { number: '50+', label: 'Countries' },
            { number: '99.9%', label: 'Uptime' }
          ].map((stat, index) => (
            <div key={index} className="text-center group cursor-pointer">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-sm uppercase tracking-wider group-hover:text-blue-400 transition-colors duration-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Border Effects */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent" />
      
      {/* Corner Decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-blue-400/20 rounded-tl-xl" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-blue-400/20 rounded-tr-xl" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-blue-400/20 rounded-bl-xl" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-blue-400/20 rounded-br-xl" />

      {/* Floating Sparkles */}
      <div className="absolute top-1/5 right-12 animate-pulse">
        <Sparkles className="w-5 h-5 text-blue-400/50" />
      </div>
      <div className="absolute bottom-1/5 left-12 animate-pulse" style={{ animationDelay: '0.5s' }}>
        <Sparkles className="w-4 h-4 text-indigo-400/50" />
      </div>
    </section>
  );
}