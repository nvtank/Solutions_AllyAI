'use client';

import { useRef, useEffect } from 'react';
import { Star, Quote, ArrowRight, CheckCircle } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      quote: "Ally AI transformed our manufacturing processes completely. We've seen a remarkable 40% increase in efficiency and significant cost savings across all operations.",
      author: "John Mitchell",
      position: "Operations Director",
      company: "TechManufacturing Corp",
      location: "Detroit, USA",
      avatar: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      improvement: "40% Efficiency Boost",
      color: "from-blue-500 to-indigo-500"
    },
    {
      quote: "The predictive maintenance system has prevented countless equipment failures. It's revolutionized how we operate and maintain our industrial equipment.",
      author: "Sarah Chen",
      position: "Plant Manager", 
      company: "Advanced Industries Ltd",
      location: "Toronto, Canada",
      avatar: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      improvement: "Zero Downtime",
      color: "from-emerald-500 to-teal-500"
    },
    {
      quote: "Outstanding industrial AI solutions with exceptional support. The real-time analytics have given us unprecedented visibility into our operations.",
      author: "Marcus Weber",
      position: "Chief Technology Officer",
      company: "European Manufacturing",
      location: "Munich, Germany", 
      avatar: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      improvement: "Real-time Insights",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const stats = [
    { number: "98%", label: "Client Satisfaction", icon: "👥" },
    { number: "500+", label: "Success Stories", icon: "🏆" },
    { number: "50+", label: "Countries Served", icon: "🌍" },
    { number: "24/7", label: "Expert Support", icon: "💬" }
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Title animation - smooth entrance
      gsap.fromTo(titleRef.current,
        {
          opacity: 0,
          y: 60
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

      // Stats animation
      if (statsRef.current) {
        gsap.fromTo(statsRef.current.children,
        {
          opacity: 0,
          y: 40,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: 0.1,
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
        }
      );
      }

      // Cards animation - individual entrance
      if (cardsContainerRef.current) {
        const cards = cardsContainerRef.current.children;
      
      Array.from(cards).forEach((card, index) => {
        // Entrance animation
        gsap.fromTo(card,
          {
            opacity: 0,
            y: 80,
            rotationY: 15,
            scale: 0.9
          },
          {
            opacity: 1,
            y: 0,
            rotationY: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            delay: index * 0.15,
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              end: "bottom 10%",
              toggleActions: "play none none reverse"
            }
          }
        );

        // Subtle floating animation
        gsap.to(card, {
          y: "random(-6, 6)",
          rotation: "random(-1, 1)",
          duration: "random(4, 6)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.5
        });

        // Enhanced hover effects
        const cardElement = card;
        cardElement.addEventListener('mouseenter', () => {
          gsap.to(cardElement, {
            scale: 1.03,
            y: -8,
            duration: 0.4,
            ease: "power2.out"
          });
        });

        cardElement.addEventListener('mouseleave', () => {
          gsap.to(cardElement, {
            scale: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out"
          });
        });
      });
      }

    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/4 left-1/6 w-80 h-80 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/6 w-96 h-96 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-cyan-50 to-blue-50 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div ref={titleRef} className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full border border-blue-200 mb-6">
            <CheckCircle className="w-4 h-4 mr-2 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Client Success Stories</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by <span className="text-blue-600 relative">
              Industry Leaders
              <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full" />
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how leading companies are transforming their operations and achieving remarkable results with our AI solutions
          </p>
        </div>

        {/* Stats Section */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="group text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        
        {/* Testimonials Grid */}
        <div ref={cardsContainerRef} className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100">
              
              {/* Background gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Content */}
              <div className="relative z-10 p-8">
                
                {/* Quote Icon & Rating */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.color} rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300" style={{ transitionDelay: `${i * 50}ms` }} />
                    ))}
                  </div>
                </div>

                {/* Quote Text */}
                <blockquote className="text-gray-700 text-lg leading-relaxed mb-8 relative">
                  <span className="text-6xl text-gray-200 absolute -top-4 -left-2 font-serif">"</span>
                  <span className="relative z-10">{testimonial.quote}</span>
                  <span className="text-6xl text-gray-200 absolute -bottom-8 -right-2 font-serif">"</span>
                </blockquote>

                {/* Improvement Badge */}
                <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${testimonial.color} rounded-full text-white text-sm font-medium mb-6 group-hover:scale-105 transition-transform duration-300`}>
                  <CheckCircle className="w-4 h-4 mr-2" />
                  {testimonial.improvement}
                </div>

                {/* Author Info */}
                <div className="flex items-center">
                  <div className="relative mr-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-16 h-16 rounded-full object-cover group-hover:scale-110 transition-transform duration-500 border-4 border-white shadow-lg"
                    />
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${testimonial.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="font-bold text-gray-900 text-lg mb-1 group-hover:text-blue-600 transition-colors duration-300">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-gray-600 mb-1 font-medium">{testimonial.position}</div>
                    <div className="text-sm text-gray-500 font-medium">{testimonial.company}</div>
                    <div className="text-xs text-gray-400 flex items-center mt-1">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                      {testimonial.location}
                    </div>
                  </div>
                </div>

                {/* Read More Button */}
                <button className="group/btn mt-6 w-full flex items-center justify-center space-x-2 py-3 px-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all duration-300 text-gray-700 hover:text-blue-600">
                  <span className="font-medium">Read Full Case Study</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
              
              {/* Subtle border glow */}
              <div className={`absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-br ${testimonial.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} 
                   style={{ mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude' }} />
              
              {/* Floating particles on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className={`absolute w-1 h-1 bg-gradient-to-r ${testimonial.color} rounded-full animate-bounce`}
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 60}%`,
                      animationDelay: `${i * 0.3}s`
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4">
            <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:shadow-xl transition-all duration-300 font-medium relative overflow-hidden">
              <span className="relative z-10 flex items-center space-x-2">
                <span>Join Our Success Stories</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </button>
            
            <button className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-xl hover:border-blue-300 hover:text-blue-600 transition-all duration-300 font-medium">
              View All Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}