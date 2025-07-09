import React, { useEffect, useRef } from 'react';
import { Phone, MessageSquare, Settings, CheckCircle, Rocket, ArrowRight } from 'lucide-react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const HowItWorks = () => {
  const containerRef = useRef(null);
  const timelineRef = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Animate timeline on scroll
      const timeline = timelineRef.current;
      if (timeline) {
        gsap.fromTo(timeline, 
          { scaleY: 0 }, 
          { 
            scaleY: 1, 
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: timeline,
              start: "top 80%",
              end: "bottom 20%",
              scrub: 1,
            }
          }
        );
      }

      // Floating background elements
      const floatingElements = document.querySelectorAll('.floating-bg');
      floatingElements.forEach((element, index) => {
        gsap.to(element, {
          y: "random(-20, 20)",
          x: "random(-10, 10)",
          rotation: "random(-5, 5)",
          duration: "random(3, 6)",
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: index * 0.2
        });
      });

      // Parallax effect for background
      gsap.to('.parallax-bg', {
        backgroundPosition: '50% 100%',
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const stepVariants = {
    hidden: { 
      opacity: 0,
      y: 100,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const titleVariants = {
    hidden: { 
      opacity: 0,
      y: -50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };
  const steps = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Liên hệ với chúng tôi",
      description: "Gửi yêu cầu qua form liên hệ hoặc gọi điện trực tiếp để được tư vấn về giải pháp phù hợp với doanh nghiệp của bạn.",
      color: "bg-[#0365FA]/10 text-[#0365FA]",
      gradient: "from-[#0365FA]/20 to-[#0365FA]/5"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Thảo luận yêu cầu",
      description: "Đội ngũ chuyên gia sẽ phân tích nhu cầu và đề xuất giải pháp tối ưu nhất cho hệ thống của bạn.",
      color: "bg-[#0365FA]/15 text-[#0365FA]",
      gradient: "from-[#0365FA]/25 to-[#0365FA]/10"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Triển khai thực hiện",
      description: "Cài đặt và tích hợp hệ thống với quy trình chuẩn, đảm bảo hoạt động trơn tru với hệ thống hiện có.",
      color: "bg-[#0365FA]/20 text-[#0365FA]",
      gradient: "from-[#0365FA]/30 to-[#0365FA]/15"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Kiểm tra chất lượng",
      description: "Chạy thử nghiệm toàn diện và điều chỉnh để đảm bảo hệ thống hoạt động hoàn hảo trước khi bàn giao.",
      color: "bg-[#0365FA]/25 text-[#0365FA]",
      gradient: "from-[#0365FA]/35 to-[#0365FA]/20"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Vận hành chính thức",
      description: "Bàn giao hệ thống và hỗ trợ 24/7 để đảm bảo vận hành trơn tru chỉ sau vài ngày triển khai.",
      color: "bg-[#0365FA]/30 text-[#0365FA]",
      gradient: "from-[#0365FA]/40 to-[#0365FA]/25"
    }
  ];

  return (
    <div 
      ref={containerRef}
      className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 parallax-bg bg-gradient-to-br from-gray-50 via-blue-50/30 to-white bg-[length:200%_200%]"></div>
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-bg absolute top-20 left-10 w-32 h-32 bg-[#0365FA]/5 rounded-full blur-xl"></div>
        <div className="floating-bg absolute top-40 right-20 w-24 h-24 bg-blue-300/10 rounded-full blur-lg"></div>
        <div className="floating-bg absolute bottom-32 left-1/4 w-40 h-40 bg-[#0365FA]/3 rounded-full blur-2xl"></div>
        <div className="floating-bg absolute bottom-20 right-10 w-28 h-28 bg-blue-400/8 rounded-full blur-xl"></div>
        <div className="floating-bg absolute top-1/3 left-1/3 w-20 h-20 bg-[#0365FA]/6 rounded-full blur-lg"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="relative z-10"
      >
        {/* Header */}
        <motion.div 
          variants={titleVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            Quy Trình Hoạt Động
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            TripC Solutions mang đến giải pháp chuyển đổi số toàn diện với quy trình chuyên nghiệp và hiệu quả
          </motion.p>
          <motion.div 
            className="w-24 h-1 bg-[#0365FA] mx-auto mt-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          ></motion.div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated Timeline connector */}
          <div 
            ref={timelineRef}
            className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-[#0365FA] via-[#0365FA]/70 to-[#0365FA]/30 -translate-x-1/2 rounded-full origin-top transform-gpu"
          ></div>
          
          <div className="space-y-16 md:space-y-16">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                variants={stepVariants}
                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}
              >
                {/* Step content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <motion.div 
                    className="group relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-gray-100 hover:border-[#0365FA]/30 transition-all duration-500"
                    whileHover={{ 
                      y: -8, 
                      scale: 1.02,
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className={`w-16 h-16 rounded-full ${step.color.split(' ')[0]} flex items-center justify-center mb-6 mx-auto md:mx-0 shadow-lg`}
                      whileHover={{ 
                        scale: 1.15,
                        rotate: 5
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={step.color.split(' ')[1]}>
                        {step.icon}
                      </div>
                    </motion.div>
                    <motion.h3 
                      className="text-2xl font-bold text-gray-900 mb-4 text-center md:text-left group-hover:text-[#0365FA] transition-colors duration-300"
                      whileHover={{ x: index % 2 === 0 ? 10 : -10 }}
                    >
                      {step.title}
                    </motion.h3>
                    <motion.p 
                      className="text-gray-600 text-center md:text-left leading-relaxed group-hover:text-gray-700 transition-colors duration-300"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {step.description}
                    </motion.p>
                    
                    {/* Animated gradient overlay */}
                    <motion.div 
                      className={`absolute inset-0 bg-gradient-to-r ${step.gradient} rounded-2xl`}
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 0.1 }}
                      transition={{ duration: 0.3 }}
                    ></motion.div>
                  </motion.div>
                </div>
                
                {/* Step number (mobile) */}
                <div className="md:hidden flex items-center justify-center mb-4">
                  <motion.div 
                    className="w-14 h-14 rounded-full bg-[#0365FA] flex items-center justify-center border-4 border-white shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="font-bold text-lg text-white">{index + 1}</span>
                  </motion.div>
                </div>
                
                {/* Step number (desktop) */}
                <motion.div 
                  className="hidden md:flex items-center justify-center w-20 h-20 rounded-full bg-white border-4 border-[#0365FA] z-10 shadow-lg cursor-pointer"
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: "#0365FA",
                    borderColor: "#ffffff"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.span 
                    className="font-bold text-2xl text-[#0365FA]"
                    whileHover={{ color: "#ffffff" }}
                  >
                    {index + 1}
                  </motion.span>
                </motion.div>
                
                {/* Empty spacer */}
                <div className="hidden md:block md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>


      <motion.div
      className="mt-20 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div className="relative bg-gradient-to-r from-[#0365FA] to-blue-600 rounded-2xl p-8 shadow-lg overflow-hidden">
        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-white mb-4">
            Sẵn sàng bắt đầu hành trình chuyển đổi số?
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Liên hệ với chúng tôi ngay hôm nay để nhận tư vấn miễn phí và khám phá cách TripC Solutions có thể giúp doanh nghiệp của bạn phát triển.
          </p>
          <div className='flex justify-center'>
                    <a href='/contact' className="group  relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-900 to-[#0251D8] text-white rounded-2xl hover:from-[#0251D8] hover:to-[#013FB7] transition-all duration-500 flex items-center justify-center space-x-3 font-bold shadow-xl overflow-hidden text-sm sm:text-base">
                          <span className="relative z-10">Liên hệ ngay</span>
                          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 group-hover:translate-x-2 transition-transform duration-500" />
                          <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                        </a>
          </div>
        </div>
      </div>
    </motion.div>
      </motion.div>
    </div>
  );
};

export default HowItWorks;