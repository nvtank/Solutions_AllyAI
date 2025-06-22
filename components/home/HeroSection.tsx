'use client';

import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);
  const particlesRef = useRef(null);
  const gradientRef = useRef(null);
  const statsRef = useRef(null);
  const geometryRef = useRef(null);
  const waveRef = useRef(null);
  const orbsRef = useRef(null);
  const gridRef = useRef(null);
  const transitionOverlayRef = useRef(null);
  const morphingElementsRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      // Initial setup - set elements to visible state first
      gsap.set([titleRef.current, subtitleRef.current, buttonsRef.current, statsRef.current], {
        opacity: 1,
        y: 0
      });

      // Main animation timeline for initial entrance
      const tl = gsap.timeline({ delay: 0.3 });
      
      // Reset to initial state for animation
      gsap.set([titleRef.current, subtitleRef.current, buttonsRef.current, statsRef.current], {
        opacity: 0,
        y: 100
      });

      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power4.out"
      })
      .to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out"
      }, "-=1")
      .to(buttonsRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "back.out(1.7)"
      }, "-=0.8")
      .to(statsRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.5");

      // Enhanced floating animation for gradient orbs
      gsap.to(gradientRef.current.children, {
        y: "random(-80, 80)",
        x: "random(-80, 80)",
        rotation: "random(-180, 180)",
        scale: "random(0.6, 1.4)",
        duration: "random(15, 25)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          amount: 6,
          from: "random"
        }
      });

      // Geometric shapes animation
      gsap.to(geometryRef.current.children, {
        rotation: "random(-360, 360)",
        x: "random(-200, 200)",
        y: "random(-200, 200)",
        scale: "random(0.5, 1.5)",
        duration: "random(20, 30)",
        repeat: -1,
        yoyo: true,
        ease: "none",
        stagger: {
          amount: 8,
          from: "random"
        }
      });

      // Floating orbs animation
      gsap.to(orbsRef.current.children, {
        y: "random(-150, 150)",
        x: "random(-100, 100)",
        scale: "random(0.3, 1.2)",
        opacity: "random(0.1, 0.6)",
        duration: "random(10, 20)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          amount: 5,
          from: "random"
        }
      });

      // Grid animation
      gsap.to(gridRef.current, {
        backgroundPosition: "100px 100px",
        duration: 20,
        repeat: -1,
        ease: "none"
      });

      // Wave animation
      gsap.to(waveRef.current, {
        backgroundPosition: "200% 0%",
        duration: 8,
        repeat: -1,
        ease: "none"
      });

      // Enhanced particles floating animation
      if (particlesRef.current) {
        gsap.to(particlesRef.current.children, {
          y: "random(-200, 200)",
          x: "random(-150, 150)",
          rotation: "random(-360, 360)",
          scale: "random(0.3, 2)",
          opacity: "random(0.2, 0.8)",
          duration: "random(15, 35)",
          repeat: -1,
          yoyo: true,
          ease: "none",
          stagger: {
            amount: 10,
            from: "random"
          }
        });
      }

      // ===== IMPROVED SCROLL-BASED ANIMATIONS =====
      
      // Text elements fade with proper toggle actions
      gsap.to(titleRef.current, {
        opacity: 0,
        y: -50,
        scale: 0.9,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom 80%",
          scrub: 1,
          toggleActions: "play none none reverse",
          onToggle: (self) => {
            // Ensure text is visible when scrolling back up
            if (!self.isActive && self.direction < 0) {
              gsap.set(titleRef.current, { opacity: 1, y: 0, scale: 1 });
            }
          }
        }
      });

      gsap.to(subtitleRef.current, {
        opacity: 0,
        y: -40,
        scale: 0.9,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom 85%",
          scrub: 1,
          toggleActions: "play none none reverse",
          onToggle: (self) => {
            if (!self.isActive && self.direction < 0) {
              gsap.set(subtitleRef.current, { opacity: 1, y: 0, scale: 1 });
            }
          }
        }
      });

      gsap.to(buttonsRef.current, {
        opacity: 0,
        y: -30,
        scale: 0.9,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom 90%",
          scrub: 1,
          toggleActions: "play none none reverse",
          onToggle: (self) => {
            if (!self.isActive && self.direction < 0) {
              gsap.set(buttonsRef.current, { opacity: 1, y: 0, scale: 1 });
            }
          }
        }
      });

      gsap.to(statsRef.current, {
        opacity: 0,
        y: -20,
        scale: 0.9,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom 95%",
          scrub: 1,
          toggleActions: "play none none reverse",
          onToggle: (self) => {
            if (!self.isActive && self.direction < 0) {
              gsap.set(statsRef.current, { opacity: 1, y: 0, scale: 1 });
            }
          }
        }
      });

      // Background color transition
      gsap.to(heroRef.current, {
        backgroundColor: "#000000",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "bottom 90%",
          end: "bottom 50%",
          scrub: 2,
          toggleActions: "play none none reverse"
        }
      });

      // Particles transform
      gsap.to(particlesRef.current.children, {
        scale: "random(0.5, 3)",
        opacity: "random(0.1, 1)",
        backgroundColor: "#3b82f6",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "bottom 80%",
          end: "bottom 40%",
          scrub: 2,
          toggleActions: "play none none reverse"
        }
      });

      // Gradient orbs morph and move
      gsap.to(gradientRef.current.children, {
        scale: "random(0.3, 2)",
        x: "random(-300, 300)",
        y: "random(-300, 300)",
        opacity: "random(0.1, 0.8)",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "bottom 85%",
          end: "bottom 30%",
          scrub: 1.8,
          toggleActions: "play none none reverse"
        }
      });

      // Geometric shapes transform
      gsap.to(geometryRef.current.children, {
        scale: "random(0.2, 4)",
        rotation: "random(0, 720)",
        opacity: "random(0.1, 0.9)",
        borderColor: "#3b82f6",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "bottom 80%",
          end: "bottom 35%",
          scrub: 2,
          toggleActions: "play none none reverse"
        }
      });

      // Transition overlay effect
      gsap.fromTo(transitionOverlayRef.current, 
        {
          scaleY: 0,
          transformOrigin: "bottom"
        },
        {
          scaleY: 1,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "bottom 70%",
            end: "bottom 30%",
            scrub: 1,
            toggleActions: "play none none reverse"
          }
        }
      );

      // Multi-layer parallax effects
      gsap.to(gradientRef.current, {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 2
        }
      });

      gsap.to(geometryRef.current, {
        yPercent: -60,
        rotation: 180,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5
        }
      });

      gsap.to(orbsRef.current, {
        yPercent: -40,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 2.5
        }
      });

      gsap.to(particlesRef.current, {
        yPercent: -80,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1
        }
      });

      gsap.to(waveRef.current, {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 3
        }
      });

      // Morphing elements for transition
      gsap.to(morphingElementsRef.current.children, {
        y: "random(-200, 200)",
        x: "random(-200, 200)",
        rotation: "random(-720, 720)",
        scale: "random(0.2, 3)",
        duration: "random(8, 15)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          amount: 4,
          from: "random"
        }
      });

    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      
      {/* Transition Overlay */}
      <div 
        ref={transitionOverlayRef}
        className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black z-30 pointer-events-none"
      />

      {/* Morphing Elements for Transition */}
      <div ref={morphingElementsRef} className="absolute inset-0 pointer-events-none z-20">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full ${
              i % 4 === 0 ? 'w-32 h-32 bg-gradient-to-r from-blue-500/20 to-cyan-500/20' :
              i % 4 === 1 ? 'w-24 h-24 bg-gradient-to-r from-indigo-500/20 to-purple-500/20' :
              i % 4 === 2 ? 'w-40 h-40 bg-gradient-to-r from-purple-500/15 to-pink-500/15' :
              'w-28 h-28 bg-gradient-to-r from-cyan-500/15 to-blue-500/15'
            } blur-xl`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Animated Grid Background */}
      <div 
        ref={gridRef}
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Animated Wave Background */}
      <div 
        ref={waveRef}
        className="absolute inset-0 opacity-20"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)
          `,
          backgroundSize: '200% 200%'
        }}
      />

      {/* Enhanced Gradient Orbs */}
      <div ref={gradientRef} className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/6 right-1/3 w-72 h-72 bg-gradient-to-r from-cyan-500/15 to-blue-500/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-1/6 left-1/6 w-48 h-48 bg-gradient-to-r from-indigo-500/20 to-violet-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Geometric Shapes */}
      <div ref={geometryRef} className="absolute inset-0 pointer-events-none">
        {/* Triangles */}
        <div className="absolute top-1/4 left-1/6 w-8 h-8 border-2 border-blue-400/30 rotate-45 transform" />
        <div className="absolute top-3/4 right-1/4 w-6 h-6 border-2 border-purple-400/30 rotate-12 transform" />
        <div className="absolute bottom-1/3 left-1/3 w-10 h-10 border-2 border-cyan-400/30 rotate-45 transform" />
        
        {/* Circles */}
        <div className="absolute top-1/3 right-1/6 w-12 h-12 border-2 border-indigo-400/30 rounded-full" />
        <div className="absolute bottom-1/4 right-1/3 w-8 h-8 border-2 border-blue-400/30 rounded-full" />
        <div className="absolute top-2/3 left-1/4 w-6 h-6 border-2 border-purple-400/30 rounded-full" />
        
        {/* Squares */}
        <div className="absolute top-1/6 left-2/3 w-7 h-7 border-2 border-cyan-400/30 rotate-12 transform" />
        <div className="absolute bottom-1/6 right-1/6 w-9 h-9 border-2 border-indigo-400/30 rotate-45 transform" />
        
        {/* Hexagons */}
        <div className="absolute top-1/2 left-1/12 w-8 h-8 border-2 border-blue-400/30 transform rotate-30" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
        <div className="absolute bottom-1/3 right-1/12 w-6 h-6 border-2 border-purple-400/30 transform rotate-60" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
      </div>

      {/* Floating Orbs */}
      <div ref={orbsRef} className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full ${
              i % 5 === 0 ? 'w-16 h-16 bg-gradient-to-r from-blue-400/10 to-cyan-400/10' :
              i % 5 === 1 ? 'w-12 h-12 bg-gradient-to-r from-indigo-400/10 to-purple-400/10' :
              i % 5 === 2 ? 'w-20 h-20 bg-gradient-to-r from-purple-400/10 to-pink-400/10' :
              i % 5 === 3 ? 'w-8 h-8 bg-gradient-to-r from-cyan-400/10 to-blue-400/10' :
              'w-14 h-14 bg-gradient-to-r from-violet-400/10 to-indigo-400/10'
            } blur-sm`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Enhanced Floating Particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full ${
              i % 6 === 0 ? 'w-3 h-3 bg-blue-400/40 shadow-lg shadow-blue-400/20' :
              i % 6 === 1 ? 'w-2 h-2 bg-indigo-400/50 shadow-md shadow-indigo-400/30' :
              i % 6 === 2 ? 'w-4 h-4 bg-purple-400/30 shadow-lg shadow-purple-400/20' :
              i % 6 === 3 ? 'w-1.5 h-1.5 bg-cyan-400/60 shadow-sm shadow-cyan-400/40' :
              i % 6 === 4 ? 'w-2.5 h-2.5 bg-violet-400/40 shadow-md shadow-violet-400/25' :
              'w-1 h-1 bg-pink-400/50 shadow-sm shadow-pink-400/30'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Animated Light Rays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-400/20 to-transparent animate-pulse" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-indigo-400/20 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-purple-400/20 to-transparent animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Main Title */}
        <div ref={titleRef} className="mb-8">
          <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-bold leading-none text-white mb-6">
            Transform
          </h1>
          <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-bold leading-none bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Everything
          </h1>
        </div>

        {/* Subtitle */}
        <p ref={subtitleRef} className="text-2xl md:text-3xl text-gray-300 mb-16 max-w-3xl mx-auto font-light">
          Revolutionize your business with cutting-edge AI technology
        </p>

        {/* Action Buttons */}
        <div ref={buttonsRef} className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8 mb-20">
          <button className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 flex items-center space-x-4 font-medium text-lg overflow-hidden">
            <span className="relative z-10">Get Started</span>
            <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-2 transition-transform duration-500" />
            
            {/* Enhanced button effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500 scale-110" />
          </button>
          
          <button className="group px-10 py-5 bg-white/5 backdrop-blur-sm border-2 border-white/20 text-white rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-500 flex items-center space-x-4 font-medium text-lg">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-125 transition-transform duration-500">
              <Play className="w-5 h-5 text-blue-400 ml-1" />
            </div>
            <span>Watch Demo</span>
          </button>
        </div>

        {/* Enhanced Stats */}
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

      {/* Enhanced Border Effects */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
      
      {/* Enhanced Corner Decorations */}
      <div className="absolute top-8 left-8 w-20 h-20 border-l-2 border-t-2 border-blue-400/30 rounded-tl-2xl" />
      <div className="absolute top-8 right-8 w-20 h-20 border-r-2 border-t-2 border-blue-400/30 rounded-tr-2xl" />
      <div className="absolute bottom-8 left-8 w-20 h-20 border-l-2 border-b-2 border-blue-400/30 rounded-bl-2xl" />
      <div className="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-blue-400/30 rounded-br-2xl" />

      {/* Floating Action Elements */}
      <div className="absolute top-1/4 right-8 animate-bounce">
        <div className="w-3 h-3 bg-blue-400/60 rounded-full shadow-lg shadow-blue-400/30" />
      </div>
      <div className="absolute bottom-1/4 left-8 animate-bounce" style={{ animationDelay: '1s' }}>
        <div className="w-2 h-2 bg-purple-400/60 rounded-full shadow-lg shadow-purple-400/30" />
      </div>
      <div className="absolute top-1/3 left-1/4 animate-pulse">
        <Sparkles className="w-6 h-6 text-cyan-400/60" />
      </div>
      <div className="absolute bottom-1/3 right-1/4 animate-pulse" style={{ animationDelay: '1.5s' }}>
        <Sparkles className="w-4 h-4 text-indigo-400/60" />
      </div>
    </section>
  );
}