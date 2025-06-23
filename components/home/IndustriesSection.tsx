'use client';

import { useRef, useEffect } from 'react';
import { Wrench, Building2, Factory, Settings, Zap, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

/**
 * Renders a visually animated section highlighting various industrial sectors with interactive cards.
 *
 * Displays a titled section featuring multiple industry cards, each with an icon, title, description, statistics, and an image. Includes scroll-triggered entrance animations, continuous floating effects, and interactive hover scaling for each card. The layout and styling adapt responsively, and the section is visually enhanced with background gradients and decorative elements.
 *
 * @returns The React element representing the industries showcase section.
 */
export default function IndustriesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  const industries = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Manufacturing",
      description: "Advanced manufacturing solutions with AI-driven optimization for smart production lines",
      stats: "500+ Projects",
      color: "from-blue-500 to-indigo-500",
      bgColor: "from-blue-50 to-indigo-50",
      image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Construction",
      description: "Smart construction management and safety monitoring systems for modern building",
      stats: "200+ Sites",
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-50 to-teal-50",
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: <Factory className="w-8 h-8" />,
      title: "Heavy Industry",
      description: "Industrial automation and process optimization solutions for large-scale operations",
      stats: "150+ Facilities",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Equipment",
      description: "Predictive maintenance and equipment lifecycle management with real-time monitoring",
      stats: "1000+ Units",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Energy & Power",
      description: "Smart grid solutions and renewable energy optimization with AI-powered analytics",
      stats: "75+ Plants",
      color: "from-yellow-500 to-amber-500",
      bgColor: "from-yellow-50 to-amber-50",
      image: "https://images.pexels.com/photos/1108338/pexels-photo-1108338.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Innovation Labs",
      description: "Research and development facilities with cutting-edge AI technology integration",
      stats: "50+ Labs",
      color: "from-cyan-500 to-blue-500",
      bgColor: "from-cyan-50 to-blue-50",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Title animation - smooth and fast
      gsap.fromTo(titleRef.current,
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Individual card animations - each row appears separately
      if (cardsContainerRef.current) {
        const cards = cardsContainerRef.current.children;
        
        Array.from(cards).forEach((card, index) => {
          // Entrance animation
          gsap.fromTo(card as Element,
            {
              opacity: 0,
              x: index % 2 === 0 ? -100 : 100,
              scale: 0.9
            },
            {
              opacity: 1,
              x: 0,
              scale: 1,
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card as Element,
                start: "top 90%",
                end: "bottom 10%",
                toggleActions: "play none none reverse"
              }
            }
          );

          // Subtle floating animation
          gsap.to(card as Element, {
            y: "random(-8, 8)",
            duration: "random(3, 5)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: index * 0.2
          });

          // Hover scale effect
          const cardElement = card as HTMLElement;
          cardElement.addEventListener('mouseenter', () => {
            gsap.to(cardElement, {
              scale: 1.02,
              duration: 0.3,
              ease: "power2.out"
            });
          });

          cardElement.addEventListener('mouseleave', () => {
            gsap.to(cardElement, {
              scale: 1,
              duration: 0.3,
              ease: "power2.out"
            });
          });
        });
      }

    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="industries" className="py-24 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-blue-100 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/6 w-72 h-72 bg-indigo-100 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-50 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Industries We <span className="text-blue-600 relative">
              Transform
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full" />
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Delivering specialized AI solutions across diverse industrial sectors with proven results
          </p>
        </div>
        
        <div ref={cardsContainerRef} className="space-y-8">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 ${
                index % 2 === 0 ? 'lg:mr-12' : 'lg:ml-12'
              }`}
            >
              {/* Background gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${industry.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10 p-8 lg:p-10">
                <div className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? '' : 'lg:grid-flow-col-dense'
                }`}>
                  
                  {/* Content */}
                  <div className={index % 2 === 0 ? '' : 'lg:col-start-2'}>
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 rounded-xl flex items-center justify-center bg-gradient-to-br ${industry.color} text-white group-hover:scale-110 transition-transform duration-300 shadow-lg mr-4`}>
                        {industry.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                          {industry.title}
                        </h3>
                        <div className={`text-sm font-semibold bg-gradient-to-r ${industry.color} bg-clip-text text-transparent`}>
                          {industry.stats}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-lg leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
                      {industry.description}
                    </p>
                    
                    <button className={`px-6 py-3 bg-gradient-to-r ${industry.color} text-white rounded-lg hover:shadow-lg transition-all duration-300 font-medium relative overflow-hidden group`}>
                      <span className="relative z-10">Learn More</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
                    </button>
                  </div>
                  
                  {/* Image */}
                  <div className={`relative ${index % 2 === 0 ? '' : 'lg:col-start-1'}`}>
                    <div className="relative h-64 lg:h-80 rounded-xl overflow-hidden">
                      <img 
                        src={industry.image} 
                        alt={industry.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      
                      {/* Floating number indicator */}
                      <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-lg font-bold text-gray-900 group-hover:scale-110 transition-transform duration-300">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                    </div>
                    
                    {/* Decorative elements */}
                    <div className={`absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br ${industry.color} rounded-full opacity-60 group-hover:scale-125 transition-transform duration-300`} />
                    <div className={`absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-br ${industry.color} rounded-full opacity-40 group-hover:scale-125 transition-transform duration-300`} />
                  </div>
                  
                </div>
              </div>
              
              {/* Subtle border glow */}
              <div className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} 
                   style={{ mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}