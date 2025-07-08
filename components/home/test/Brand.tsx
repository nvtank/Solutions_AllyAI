'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Building2, Smartphone, Globe, ShoppingCart, Users, Car, Monitor, Palette, Music, Play } from 'lucide-react';

const Brand = () => {
  const brands = [
    { 
      name: "Apple", 
      icon: <Smartphone size={44} />, 
      color: "bg-gradient-to-br from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700",
      textColor: "text-white"
    },
    { 
      name: "Microsoft", 
      icon: <Monitor size={44} />, 
      color: "bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600",
      textColor: "text-white"
    },
    { 
      name: "Google", 
      icon: <Globe size={44} />, 
      color: "bg-gradient-to-br from-white to-gray-50 hover:from-gray-50 hover:to-gray-100 border border-gray-200",
      textColor: "text-gray-800"
    },
    { 
      name: "Amazon", 
      icon: <ShoppingCart size={44} />, 
      color: "bg-gradient-to-br from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400",
      textColor: "text-gray-900"
    },
    { 
      name: "Meta", 
      icon: <Users size={44} />, 
      color: "bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500",
      textColor: "text-white"
    },
    { 
      name: "Tesla", 
      icon: <Car size={44} />, 
      color: "bg-gradient-to-br from-red-500 to-red-600 hover:from-red-400 hover:to-red-500",
      textColor: "text-white"
    },
    { 
      name: "Samsung", 
      icon: <Smartphone size={44} />, 
      color: "bg-gradient-to-br from-blue-800 to-blue-900 hover:from-blue-700 hover:to-blue-800",
      textColor: "text-white"
    },
 
  ];
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the component is visible
        rootMargin: '0px 0px -100px 0px' // Trigger slightly before the element comes into view
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
  return (
    <div 
      ref={sectionRef}
      className='flex items-center justify-center py-16 bg-gradient-to-br from-gray-50 to-gray-100 px-8'
      style={{
        background: `
          radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(3, 101, 250, 0.1) 0%, transparent 0%),
          conic-gradient(from 20deg at 91% 0%, 
            #0365FA 10deg, 
            #0365FA 0deg,
            #0365FA 60deg,
            #0251D8 50deg,
            #0365FA 210deg,
            white 0deg,
            white 0deg
          )
        `
      }}
    >
      <div
      className='max-w-7xl w-full'
    
      >
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>
            Đối Tác Của Chúng Tôi
          </h1>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            Chúng tôi tự hào hợp tác cùng những thương hiệu hàng đầu trong ngành
          </p>
        </div>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 w-full'>
          {brands.map((brand, index) => (
            <div 
              key={index}
              className={`group flex flex-col items-center justify-center p-8 rounded-2xl shadow-lg transition-all duration-700 transform hover:-translate-y-4 hover:shadow-2xl hover:scale-105 w-full aspect-square ${brand.color} ${brand.textColor} cursor-pointer ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{
                transitionDelay: `${index * 150}ms`
              }}
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                {brand.icon}
              </div>
              <h3 className="text-xl font-bold text-center group-hover:scale-105 transition-transform duration-300">
                {brand.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Brand;