'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const Brand = () => {
  const brands = [
    { 
      logo: "/s_florist.png",
    },
    { 
  
      logo: "/VindeSoleil.png",
    },
    { 
      logo: "/Logo_Chiru.png",
    },
    { 
      logo: "/Logo_TuanChau.png",
    },
    { 
      logo: "/Logo_TuanChau_HaLong.png",
    },
    {
      logo: "/Logo_ParadiseSuitesHotel_HaLong.png",
  
    }, 
  ];

  const [isVisible, setIsVisible] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

    const handleBrandClick = (url: string) => {
      window.open(url, '_blank');
    };
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  return (
    <div 
      ref={sectionRef}
      className='flex items-center justify-center py-16 px-8 bg-white lg:bg-transparent'
      style={{
        background: isLargeScreen ? `
          radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(3, 101, 250, 0.1) 0%, transparent 0%),
          conic-gradient(from 0deg at 91% 0%, 
            #0365FA 10deg, 
            #0365FA 0deg,
            #0365FA 60deg,
            #0251D8 50deg,
            #0365FA 200deg,
            white 0deg,
            white 0deg
          )
        ` : undefined
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
                
   {/* Grid 4 cột */}
        <div className={`grid grid-cols-1 w-full h-full sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {brands.map((brand, index) => (
            <div key={index} className="flex items-center justify-center h-28 w-full">
              <div className="relative w-[220px] h-[200px]">
                <Image
                  src={brand.logo}
                  alt={`Logo ${index}`}
                  layout="fill"
                  objectFit="contain"
                  className="object-contain scale-125"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Brand;
