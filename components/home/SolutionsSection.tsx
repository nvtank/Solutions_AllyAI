'use client';

import { useRef, useEffect } from 'react';
import { Building2, Factory, Cog, ArrowRight, Sparkles, Zap, Target } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

/**
 * Renders a horizontally scrollable section showcasing a portfolio of AI industrial solutions with animated transitions and interactive UI elements.
 *
 * Displays multiple solution cards with animated entrance, parallax effects, and floating particles, along with a scroll progress bar and a final call-to-action section. Animations are powered by GSAP and ScrollTrigger, and the layout is fully responsive.
 *
 * @returns The React element representing the solutions section.
 */
export default function SolutionsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const solutions = [
    {
      id: '01',
      icon: <Building2 className="w-10 h-10" />,
      title: "Smart Manufacturing",
      subtitle: "AI-Powered Production",
      description: "Transform your manufacturing processes with intelligent automation, predictive analytics, and real-time optimization systems that adapt to changing demands.",
      image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1200",
      features: ["Predictive Maintenance", "Quality Control AI", "Process Optimization", "Real-time Analytics"],
      color: "from-blue-600 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50",
      stats: { value: "40%", label: "Efficiency Increase" }
    },
    {
      id: '02',
      icon: <Factory className="w-10 h-10" />,
      title: "Industrial IoT",
      subtitle: "Connected Operations",
      description: "Integrate IoT sensors, AI analytics, and automated workflows to create a fully connected industrial ecosystem that responds intelligently to operational needs.",
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1200",
      features: ["IoT Integration", "Edge Computing", "Data Analytics", "Remote Monitoring"],
      color: "from-emerald-600 to-teal-600",
      bgGradient: "from-emerald-50 to-teal-50",
      stats: { value: "60%", label: "Cost Reduction" }
    },
    {
      id: '03',
      icon: <Cog className="w-10 h-10" />,
      title: "Equipment Intelligence",
      subtitle: "Predictive Systems",
      description: "Monitor and optimize equipment performance with advanced AI algorithms that predict failures, schedule maintenance, and maximize operational uptime.",
      image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1200",
      features: ["Failure Prediction", "Maintenance Scheduling", "Performance Analytics", "Lifecycle Management"],
      color: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-50 to-pink-50",
      stats: { value: "99.9%", label: "Uptime Achieved" }
    },
    {
      id: '04',
      icon: <Zap className="w-10 h-10" />,
      title: "Energy Optimization",
      subtitle: "Smart Power Management",
      description: "Optimize energy consumption across your operations with AI-driven power management systems that reduce costs while maintaining peak performance.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200",
      features: ["Energy Analytics", "Load Balancing", "Cost Optimization", "Sustainability Metrics"],
      color: "from-yellow-600 to-orange-600",
      bgGradient: "from-yellow-50 to-orange-50",
      stats: { value: "35%", label: "Energy Savings" }
    },
    {
      id: '05',
      icon: <Target className="w-10 h-10" />,
      title: "Quality Assurance",
      subtitle: "AI-Driven Quality",
      description: "Ensure consistent quality with computer vision and machine learning systems that detect defects, monitor standards, and optimize production quality.",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1200",
      features: ["Computer Vision", "Defect Detection", "Quality Metrics", "Compliance Tracking"],
      color: "from-red-600 to-rose-600",
      bgGradient: "from-red-50 to-rose-50",
      stats: { value: "95%", label: "Quality Score" }
    }
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Title entrance animation
      gsap.fromTo(titleRef.current,
        {
          opacity: 0,
          y: 100
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Horizontal scroll animation
      if (cardsRef.current) {
        const cards = cardsRef.current.children;
        const totalWidth = cards.length * 100; // Each card is 100vw wide
        
        // Set up horizontal scroll
        gsap.to(cardsRef.current, {
          x: () => -(totalWidth - 100) + "vw",
          ease: "none",
          scrollTrigger: {
            trigger: horizontalRef.current,
            start: "top top",
            end: () => "+=" + (totalWidth * 10), // Longer scroll distance
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            onUpdate: (self) => {
              // Update progress bar
              const progress = self.progress * 100;
            gsap.set(progressRef.current, { width: `${progress}%` });
          }
        }
      });

      // Individual card animations
      Array.from(cards).forEach((card, index) => {
        const content = card.querySelector('.card-content');
        const imageContainer = card.querySelector('.card-image');
        const image = card.querySelector('.solution-image');
        const features = card.querySelectorAll('.feature-item');
        
        // Content entrance from left
        gsap.fromTo(content,
          {
            x: -200,
            opacity: 0
          },
          {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "left 80%",
              end: "left 20%",
              horizontal: true,
              toggleActions: "play none none reverse"
            }
          }
        );

        // Image container entrance from right
        gsap.fromTo(imageContainer,
          {
            x: 200,
            opacity: 0,
            scale: 0.8
          },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "left 80%",
              end: "left 20%",
              horizontal: true,
              toggleActions: "play none none reverse"
            }
          }
        );

        // Image scale animation
        if (image) {
          gsap.fromTo(image,
            {
              scale: 1.2,
              opacity: 0
            },
            {
              scale: 1,
              opacity: 1,
              duration: 1.5,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "left 70%",
                end: "left 30%",
                horizontal: true,
                toggleActions: "play none none reverse"
              }
            }
          );

          // Parallax effect for images
          gsap.to(image, {
            x: -50,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "left right",
              end: "right left",
              horizontal: true,
              scrub: 1
            }
          });
        }

        // Features stagger animation
        gsap.fromTo(features,
          {
            y: 50,
            opacity: 0
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: card,
              start: "left 60%",
              end: "left 40%",
              horizontal: true,
              toggleActions: "play none none reverse"
            }
          }
        );
      });
      }

      // Floating particles animation
      const particles = document.querySelectorAll('.floating-particle');
      particles.forEach((particle, i) => {
        gsap.to(particle, {
          y: "random(-100, 100)",
          x: "random(-50, 50)",
          rotation: "random(-360, 360)",
          duration: "random(8, 15)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.2
        });
      });

    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="solutions" className="relative bg-white overflow-hidden">
      
      {/* Title Section */}
      <div className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div ref={titleRef}>
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full border border-blue-200 mb-8">
              <Sparkles className="w-4 h-4 mr-2 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">AI Solutions Portfolio</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Comprehensive <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                AI Solutions
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              End-to-end industrial AI solutions designed to optimize your operations, 
              drive innovation, and accelerate growth across every aspect of your business
            </p>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div ref={progressRef} className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300"></div>
      </div>

      {/* Horizontal Scroll Section */}
      <div ref={horizontalRef} className="relative">
        <div ref={cardsRef} className="flex">
          {solutions.map((solution, index) => (
            <div key={solution.id} className="flex-shrink-0 w-screen h-screen relative overflow-hidden">
              
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${solution.bgGradient} opacity-30`} />
              
              {/* Floating Particles */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className={`floating-particle absolute w-2 h-2 bg-gradient-to-r ${solution.color} rounded-full opacity-20`}
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                  />
                ))}
              </div>

              {/* Content Grid */}
              <div className="relative z-10 h-full flex items-center">
                <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
                  <div className="grid lg:grid-cols-2 gap-16 items-center h-full">
                    
                    {/* Content Side */}
                    <div className={`card-content space-y-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      
                      {/* Header */}
                      <div className="space-y-6">
                        <div className="flex items-center space-x-4">
                          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.color} flex items-center justify-center text-white shadow-xl`}>
                            {solution.icon}
                          </div>
                          <div className="text-6xl font-bold text-gray-200">
                            {solution.id}
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                            {solution.title}
                          </h3>
                          <p className={`text-xl font-semibold bg-gradient-to-r ${solution.color} bg-clip-text text-transparent mb-6`}>
                            {solution.subtitle}
                          </p>
                          <p className="text-lg text-gray-600 leading-relaxed">
                            {solution.description}
                          </p>
                        </div>
                      </div>

                      {/* Features Grid */}
                      <div className="grid grid-cols-2 gap-4">
                        {solution.features.map((feature, idx) => (
                          <div key={idx} className="feature-item flex items-center space-x-3 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${solution.color}`} />
                            <span className="text-sm font-medium text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Stats & CTA */}
                      <div className="flex items-center justify-between pt-8">
                        <div className="space-y-2">
                          <div className={`text-4xl font-bold bg-gradient-to-r ${solution.color} bg-clip-text text-transparent`}>
                            {solution.stats.value}
                          </div>
                          <div className="text-sm text-gray-600 font-medium">
                            {solution.stats.label}
                          </div>
                        </div>
                        
                        <button className={`group px-8 py-4 bg-gradient-to-r ${solution.color} text-white rounded-xl hover:shadow-xl transition-all duration-300 font-medium relative overflow-hidden`}>
                          <span className="relative z-10 flex items-center space-x-2">
                            <span>Explore Solution</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                          </span>
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                        </button>
                      </div>
                    </div>

                    {/* Image Side */}
                    <div className={`card-image relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl bg-gray-100">
                        {/* Ensure image loads properly */}
                        <img 
                          src={solution.image} 
                          alt={solution.title}
                          className="solution-image w-full h-full object-cover"
                          loading="eager"
                          onLoad={(e) => {
                            // Ensure image is visible when loaded
                            (e.target as HTMLImageElement).style.opacity = '1';
                          }}
                          onError={(e) => {
                            // Fallback if image fails to load
                            console.log(`Failed to load image: ${solution.image}`);
                            (e.target as HTMLImageElement).style.background = `linear-gradient(135deg, ${solution.color.split(' ')[1]}, ${solution.color.split(' ')[3]})`;
                          }}
                          style={{ opacity: 0, transition: 'opacity 0.3s ease' }}
                        />
                        
                        {/* Image Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                        
                        {/* Floating Stats Card */}
                        <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className={`text-3xl font-bold bg-gradient-to-r ${solution.color} bg-clip-text text-transparent`}>
                                {solution.stats.value}
                              </div>
                              <div className="text-sm text-gray-600 font-medium">
                                {solution.stats.label}
                              </div>
                            </div>
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center text-white`}>
                              {solution.icon}
                            </div>
                          </div>
                        </div>
                        
                        {/* Decorative Elements */}
                        <div className={`absolute top-8 right-8 w-4 h-4 bg-gradient-to-br ${solution.color} rounded-full opacity-60`} />
                        <div className={`absolute top-16 right-12 w-2 h-2 bg-gradient-to-br ${solution.color} rounded-full opacity-40`} />
                      </div>
                      
                      {/* Background Decoration */}
                      <div className={`absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br ${solution.color} rounded-full opacity-10 blur-2xl`} />
                      <div className={`absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br ${solution.color} rounded-full opacity-10 blur-2xl`} />
                    </div>

                  </div>
                </div>
              </div>

              {/* Navigation Hint */}
              {index < solutions.length - 1 && (
                <div className="absolute bottom-8 right-8 flex items-center space-x-2 text-gray-500">
                  <span className="text-sm font-medium">Scroll to continue</span>
                  <ArrowRight className="w-4 h-4 animate-pulse" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Operations?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover how our AI solutions can revolutionize your industrial processes and drive unprecedented growth.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:shadow-xl transition-all duration-300 font-medium relative overflow-hidden">
              <span className="relative z-10 flex items-center space-x-2">
                <span>Start Your Journey</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </button>
            
            <button className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-xl hover:border-blue-300 hover:text-blue-600 transition-all duration-300 font-medium">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}