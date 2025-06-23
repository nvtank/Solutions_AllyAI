'use client';

import { useRef, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Content animation
      gsap.fromTo(contentRef.current,
        {
          opacity: 0,
          y: 100,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.5,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Floating particles
      if (particlesRef.current) {
        gsap.to(particlesRef.current.children, {
          y: "random(-100, 100)",
          x: "random(-50, 50)",
          rotation: "random(-360, 360)",
          duration: "random(8, 12)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: {
            amount: 3,
            from: "random"
          }
        });
      }

    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-6 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/3 rounded-full blur-3xl" />
      </div>

      {/* Floating particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div ref={contentRef} className="max-w-5xl mx-auto text-center text-white relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center px-6 py-3 bg-white/10 rounded-full border border-white/20 mb-8 backdrop-blur-sm">
          <Sparkles className="w-5 h-5 mr-2 text-white" />
          <span className="text-sm font-medium">
            Ready to Transform?
          </span>
        </div>

        <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
          Ready to Transform Your
          <br />
          <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Industrial Operations?
          </span>
        </h2>
        
        <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
          Join hundreds of companies already using our AI solutions to drive efficiency and innovation
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8">
          <button className="group relative px-12 py-5 bg-white text-blue-600 rounded-full hover:bg-gray-100 transition-all duration-500 transform hover:scale-105 text-lg font-bold overflow-hidden">
            <span className="relative z-10">Start Free Trial</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </button>
          
          <button className="group px-12 py-5 border-2 border-white text-white rounded-full hover:bg-white hover:text-blue-600 transition-all duration-500 text-lg font-medium relative overflow-hidden">
            <span className="relative z-10 flex items-center space-x-2">
              <span>Schedule Demo</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-white scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full" />
          </button>
        </div>
        
        <div className="mt-8 text-sm opacity-80">
          No credit card required • 30-day free trial • Cancel anytime
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-900 to-transparent" />
    </section>
  );
}