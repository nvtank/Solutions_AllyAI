'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const Brand = () => {
  const brands = [
    { 
      name: "S Florist", 
      logo: "/s_florist.jpg",
      color: "bg-gradient-to-br from-gray-500 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-200",
      textColor: "text-white",
      // url: "https://sflorist.com" // Thêm URL thực tế
    },
    { 
      name: "VindeSoleil", 
      logo: "/Logo_vindesoleil.jpg",
      color: "bg-gradient-to-br from-red-500 to-red-900 hover:from-red-700 hover:to-red-800",
      textColor: "text-white",
      // url: "https://vindesoleil.com"
    },
    { 
      name: "Nhà hàng Chiru", 
      logo: "/Logo_Chiru.jpg",
      color: "bg-gradient-to-br from-green-500 to-green-700 hover:from-green-500 hover:to-green-600",
      textColor: "text-white",
      // url: "https://chiru.com"
    },
    { 
      name: "Tuần Châu ", 
      logo: "/Logo_TuanChau.jpg",
      color: "bg-gradient-to-br from-blue-400 to-blue-700 hover:from-blue-500 hover:to-blue-600",
      textColor: "text-white",
      // url: "https://tuanchauresort.com"
    },
    { 
      name: "Tuần Châu Resort Hạ Long", 
      logo: "/Logo_TuanChau_HaLong.jpg",
      color: "bg-gradient-to-br from-amber-500 to-amber-800 hover:from-amber-600 hover:to-amber-700",
      textColor: "text-white",
      // url: "https://tuanchauhalong.com"
    },
    { 
      name: "Paradise Suites Hotel HaLong", 
      logo: "/Logo_ParadiseSuitesHotel_HaLong.jpg",
      color: "bg-gradient-to-br from-orange-500 to-orange-800 hover:from-orange-600 hover:to-orange-800 border border-orange-300",
      textColor: "text-white",
      // url: "https://paradisesuites.com"
    }, 
  ];

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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
                
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 w-full'>
          {brands.map((brand, index) => (
            <div 
              key={index}
              // onClick={() => handleBrandClick(brand.url)}
              className={`group flex flex-col items-center justify-center p-10 rounded-2xl shadow-md transition-all duration-300 h-full ease-[cubic-bezier(0.25,0.1,0.25,1)] transform hover:shadow-xl ${brand.color} ${brand.textColor} cursor-pointer ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
                willChange: 'transform, opacity'
              }}
            >
              <div className="mb-4 transition-transform duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-105 relative w-28 h-28 flex items-center justify-center">
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  width={112}
                  height={112}
                  className="object-contain scale-110 max-w-full max-h-full rounded-lg shadow-sm"
                  style={{
                    transition: 'transform 0.3s cubic-bezier(0.25,0.1,0.25,1)',
                    willChange: 'transform'
                  }}
                />
              </div>
              <h3 className="text-base md:text-[20px] font-bold text-center transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] grosup-hover:text-opacity-90 leading-tight mt-2">
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