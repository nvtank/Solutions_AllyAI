'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { 
  Zap,
  Banknote,
  TrendingUp,
  Sparkles,
  ArrowRight,
  Check
} from 'lucide-react';

export default function HorizontalScrollSection() {
  const containerRef = useRef(null);
  const rightSectionRef = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const image3Ref = useRef(null);

  const contentItems = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Chuyển Đổi Số Nhanh",
      description: "Không cần đầu tư đội ngũ kỹ thuật riêng.",
      image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <Banknote className="w-8 h-8" />,
      title: "Tiết Kiệm Chi Phí",
      description: "Giảm chi phí vận hành và quản lý.",
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Tăng Hiệu Quả Bán Hàng",
      description: "Nâng cao trải nghiệm khách hàng.",
      image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Minh Bạch & Chuyên Nghiệp",
      subtitle: "Tăng tính minh bạch trong kinh doanh.",
      description: "Start your journey exploring the most advanced AI solutions",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Dễ Dàng Mở Rộng",
      subtitle: "Mở rộng quy mô, hợp tác đối tác.",
      description: "Start your journey exploring the most advanced AI solutions",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
  ];

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Pin the right section
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: rightSectionRef.current,
        scrub: true
      });

      // Animate images with stacking effect
      gsap.to(image1Ref.current, {
        yPercent: -200,
        scrollTrigger: {
          trigger: section2Ref.current,
          start: "top 80%",
          end: "bottom top",
          scrub: true,
        }
      });

      gsap.to(image2Ref.current, {
        yPercent: -200,
        scrollTrigger: {
          trigger: section3Ref.current,
          start: "top 80%",
          end: "bottom top",
          scrub: true,
        }
      });

      gsap.to(image3Ref.current, {
        yPercent: -200,
        scrollTrigger: {
          trigger: section4Ref.current,
          start: "top 80%",
          end: "bottom top",
          scrub: true,
        }
      });
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div>
      {/* Header */}
      <div className="relative w-full py-12 md:py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden text-white text-center">

  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse-slow opacity-20" />

  <h1 className="relative z-10 text-4xl sm:text-5xl md:text-7xl font-extrabold italic tracking-tight">
    AI <span className="text-blue-400 drop-shadow-md">SOLUTIONS</span> SHOWCASE
  </h1>

  {/* Hiệu ứng ánh sáng nền nếu muốn nổi bật hơn nữa */}
  <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] -translate-x-1/2 -translate-y-1/2 bg-blue-500/10 blur-3xl rounded-full pointer-events-none" />
</div>


      <section ref={containerRef} className="bg-gradient-to-br from-gray-900 to-slate-900 w-full flex">
        <div className="w-full md:w-1/2 h-full flex flex-col">
          
          {/* Section 1 - Intro */}
          <section ref={section1Ref} className="w-full h-screen flex justify-center items-center px-4">
            <div className="w-full max-w-[450px] h-[350px] flex flex-col text-white">
              <section className="w-full h-[60%]">
                <div className="inline-flex items-center px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20 mb-4">
                  <Sparkles className="w-3 h-3 mr-1.5 text-blue-400" />
                  <span className="text-xs font-medium text-blue-300">TripC Solutions</span>
                </div>
                <h2 className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[90px] text-blue-400 font-bold leading-tight mb-4">
                  {contentItems[0]?.title}
                </h2>
                <p className="text-[16px] md:text-[18px] lg:text-[20px] font-semibold text-blue-200 mb-2">
                  {contentItems[0]?.subtitle}
                </p>
                <p className="text-[14px] md:text-[16px] text-gray-300">
                  {contentItems[0]?.description}
                </p>
              </section>
            </div>
          </section>

          {/* Section 2 - AI Analytics */}
          <section ref={section2Ref} className="w-full h-screen flex justify-center items-center px-4">
            <div className="w-full max-w-[450px] h-[350px] flex flex-col text-white">
              <section className="w-full h-[60%]">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 mr-3">
                    {contentItems[1]?.icon}
                  </div>
                </div>
                <h2 className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[90px] text-blue-400 font-bold leading-tight mb-4">
                  {contentItems[0]?.title}
                </h2>
                <p className="text-base md:text-lg text-gray-300">
                  {contentItems[1]?.description}
                </p>
              </section>
            </div>
          </section>

          {/* Section 3 - Security */}
          <section ref={section3Ref} className="w-full h-screen flex justify-center items-center px-4">
            <div className="w-full max-w-[450px] h-[350px] flex flex-col text-white">
              <section className="w-full h-[60%]">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 mr-3">
                    {contentItems[2]?.icon}
                  </div>
                </div>
                <h2 className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[90px] text-blue-400 font-bold leading-tight mb-4">
                  {contentItems[0]?.title}
                </h2>
                <p className="text-base md:text-lg text-gray-300">
                  {contentItems[2]?.description}
                </p>
              </section>
            </div>
          </section>

          {/* Section 4 - Targeting */}
          <section ref={section4Ref} className="w-full h-screen flex justify-center items-center px-4">
            <div className="w-full max-w-[450px] h-[350px] flex flex-col text-white">
              <section className="w-full h-[60%]">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 mr-3">
                    {contentItems[3]?.icon}
                  </div>
                </div>
                <h2 className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[90px] text-blue-400 font-bold leading-tight mb-4">
                  {contentItems[0]?.title}
                </h2>
                <p className="text-base md:text-lg text-gray-300">
                  {contentItems[3]?.description}
                </p>
              </section>
            </div>
          </section>

        </div>

        {/* Right Section - Pinned Images */}
        <div ref={rightSectionRef} className="hidden md:flex w-1/2 overflow-hidden h-screen relative flex-col">
          <div className="w-full h-[60%] overflow-y-hidden">
            <section className="rounded-[20px] overflow-hidden z-40 w-[80%] h-[50%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] absolute">
              <img ref={image1Ref} src={contentItems[1]?.image} className="w-full h-full object-cover" alt="AI Analytics" />
            </section>
            <section className="rounded-[20px] z-30 overflow-hidden top-[50%] left-[50%] translate-x-[-50%] transform translate-y-[-50%] absolute w-[80%] h-[50%]">
              <img ref={image2Ref} src={contentItems[2]?.image} className="w-full h-full object-cover" alt="Security" />
            </section>
            <section className="rounded-[20px] z-20 overflow-hidden absolute w-[80%] h-[50%] top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
              <img ref={image3Ref} src={contentItems[3]?.image} className="w-full h-full object-cover" alt="Targeting" />
            </section>
            <section className="rounded-[20px] z-20 overflow-hidden absolute w-[80%] h-[50%] top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
              <img ref={image3Ref} src={contentItems[3]?.image} className="w-full h-full object-cover" alt="Targeting" />
            </section>
            <section className="rounded-[20px] z-20 overflow-hidden absolute w-[80%] h-[50%] top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
              <img ref={image3Ref} src={contentItems[3]?.image} className="w-full h-full object-cover" alt="Targeting" />
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}