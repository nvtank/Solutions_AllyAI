'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { 
  Brain, 
  Shield, 
  Target, 
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
      title: "Khám phá tiềm năng",
      subtitle: "Tạo tương lai với AI",
      description: "Bắt đầu hành trình khám phá những giải pháp AI tiên tiến nhất",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Analytics",
      subtitle: "Phân tích thông minh",
      description: "Thuật toán machine learning tiên tiến phân tích dữ liệu công nghiệp theo thời gian thực",
      highlights: [
        "Xử lý dữ liệu thời gian thực",
        "Phân tích dự đoán",
        "Nhận dạng mẫu",
        "Tự động tạo insights"
      ],
      image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security & Compliance",
      subtitle: "Bảo mật tuyệt đối",
      description: "Hệ thống bảo mật đa lớp đảm bảo dữ liệu luôn được bảo vệ",
      highlights: [
        "Mã hóa end-to-end",
        "Tuân thủ GDPR",
        "Audit trail đầy đủ",
        "Access control tinh vi"
      ],
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Precision Targeting",
      subtitle: "Nhắm mục tiêu chính xác",
      description: "AI giúp xác định và nhắm mục tiêu khách hàng tiềm năng với độ chính xác cao",
      highlights: [
        "Phân tích hành vi khách hàng",
        "Dự đoán xu hướng",
        "Tối ưu hóa chiến dịch",
        "ROI tracking"
      ],
      image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
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
      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 w-full h-[100px] text-[30px] ss:text-[40px] sm:text-[50px] md:text-[75px] italic font-bold text-center flex items-center justify-center text-white">
        AI <span className="text-blue-400 ml-4">SOLUTIONS</span> SHOWCASE
      </div>

      <section ref={containerRef} className="bg-gradient-to-br from-gray-900 to-slate-900 w-full flex">
        <div className="w-full md:w-1/2 h-full flex flex-col">
          
          {/* Section 1 - Intro */}
          <section ref={section1Ref} className="w-full h-screen flex justify-center items-center px-4">
            <div className="w-full max-w-[450px] h-[350px] flex flex-col text-white">
              <section className="w-full h-[60%]">
                <div className="inline-flex items-center px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20 mb-4">
                  <Sparkles className="w-3 h-3 mr-1.5 text-blue-400" />
                  <span className="text-xs font-medium text-blue-300">Ally AI Solutions</span>
                </div>
                <h2 className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[90px] text-blue-400 font-bold leading-tight mb-4">
                  {contentItems[0].title}
                </h2>
                <p className="text-[16px] md:text-[18px] lg:text-[20px] font-semibold text-blue-200 mb-2">
                  {contentItems[0].subtitle}
                </p>
                <p className="text-[14px] md:text-[16px] text-gray-300">
                  {contentItems[0].description}
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
                    {contentItems[1].icon}
                  </div>
                </div>
                <h2 className="text-[40px] sm:text-[50px] md:text-[70px] lg:text-[80px] text-blue-400 font-bold leading-tight mb-4">
                  AI ANALYTICS
                </h2>
                <p className="text-[16px] md:text-[18px] lg:text-[20px] font-semibold text-blue-200 mb-2">
                  {contentItems[1].subtitle}
                </p>
                <p className="text-[14px] md:text-[16px] text-gray-300 mb-4">
                  {contentItems[1].description}
                </p>
                <ul className="space-y-1">
                  {contentItems[1].highlights.slice(0, 2).map((highlight, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <Check className="w-3 h-3 mr-2 text-blue-400" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </section>

          {/* Section 3 - Security */}
          <section ref={section3Ref} className="w-full h-screen flex justify-center items-center px-4">
            <div className="w-full max-w-[450px] h-[350px] flex flex-col text-white">
              <section className="w-full h-[60%]">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 mr-3">
                    {contentItems[2].icon}
                  </div>
                </div>
                <h2 className="text-[40px] sm:text-[50px] md:text-[70px] lg:text-[80px] text-blue-400 font-bold leading-tight mb-4">
                  SECURITY
                </h2>
                <p className="text-[16px] md:text-[18px] lg:text-[20px] font-semibold text-blue-200 mb-2">
                  {contentItems[2].subtitle}
                </p>
                <p className="text-[14px] md:text-[16px] text-gray-300 mb-4">
                  {contentItems[2].description}
                </p>
                <ul className="space-y-1">
                  {contentItems[2].highlights.slice(0, 2).map((highlight, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <Check className="w-3 h-3 mr-2 text-blue-400" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </section>

          {/* Section 4 - Targeting */}
          <section ref={section4Ref} className="w-full h-screen flex justify-center items-center px-4">
            <div className="w-full max-w-[450px] h-[350px] flex flex-col text-white">
              <section className="w-full h-[60%]">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 mr-3">
                    {contentItems[3].icon}
                  </div>
                </div>
                <h2 className="text-[40px] sm:text-[45px] md:text-[60px] lg:text-[70px] text-blue-400 font-bold leading-tight mb-4">
                  TARGETING
                </h2>
                <p className="text-[16px] md:text-[18px] lg:text-[20px] font-semibold text-blue-200 mb-2">
                  {contentItems[3].subtitle}
                </p>
                <p className="text-[14px] md:text-[16px] text-gray-300 mb-4">
                  {contentItems[3].description}
                </p>
                <div className="flex gap-3">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors flex items-center space-x-1">
                    <span>Tìm hiểu thêm</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </section>
            </div>
          </section>

        </div>

        {/* Right Section - Pinned Images */}
        <div ref={rightSectionRef} className="hidden md:flex w-1/2 overflow-hidden h-screen relative flex-col">
          <div className="w-full h-[60%] overflow-y-hidden">
            <section className="rounded-[20px] overflow-hidden z-40 w-[80%] h-[50%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] absolute">
              <img ref={image1Ref} src={contentItems[1].image} className="w-full h-full object-cover" alt="AI Analytics" />
            </section>
            <section className="rounded-[20px] z-30 overflow-hidden top-[50%] left-[50%] translate-x-[-50%] transform translate-y-[-50%] absolute w-[80%] h-[50%]">
              <img ref={image2Ref} src={contentItems[2].image} className="w-full h-full object-cover" alt="Security" />
            </section>
            <section className="rounded-[20px] z-20 overflow-hidden absolute w-[80%] h-[50%] top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
              <img ref={image3Ref} src={contentItems[3].image} className="w-full h-full object-cover" alt="Targeting" />
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}