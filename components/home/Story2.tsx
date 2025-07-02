'use client';

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Sparkles, Brain, Zap, Target } from 'lucide-react';

export default function Story2() {
    const p1 = useRef<HTMLDivElement>(null);
    const p2 = useRef<HTMLDivElement>(null);
    const p3 = useRef<HTMLDivElement>(null);
    const p4 = useRef<HTMLDivElement>(null);

    // Enhanced image effect refs
    const container_imageZoom = useRef<HTMLDivElement>(null);
    const imageContainer = useRef<HTMLDivElement>(null);
    const image1 = useRef<HTMLImageElement>(null);
    const image2 = useRef<HTMLImageElement>(null);
    const image3 = useRef<HTMLImageElement>(null);
    const textOverlay1 = useRef<HTMLDivElement>(null);
    const textOverlay2 = useRef<HTMLDivElement>(null);
    const textOverlay3 = useRef<HTMLDivElement>(null);
    const particlesContainer = useRef<HTMLDivElement>(null);

    const imageData = [
        {
            src: "/images/chuyendoiso.jpg", 
            title: "Yêu Cầu Chuyển Đổi Số",
            subtitle: "Chính phủ yêu cầu minh bạch doanh thu, xuất hóa đơn điện tử.",
            icon: <Brain className="w-8 h-8" />
        },
        {
            src: "/images/congnghe.png", 
            title: "Giải Pháp Toàn Diện",
            subtitle: "TripC Solution giải quyết thách thức này hiệu quả.",
            icon: <Zap className="w-8 h-8" />
        },
        {
            src: "/images/dadanlinhvuc.jpg", 
            title: "Đa Dạng Lĩnh Vực",
            subtitle: "Phục vụ du lịch, ẩm thực, chăm sóc sức khỏe, giải trí.",
            icon: <Target className="w-8 h-8" />
        }
    ];

    useEffect(() => {
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);
        
        // Enhanced image morphing animation
        const tl = gsap.timeline();
        
        // Initial setup - bắt đầu từ dưới màn hình
        gsap.set(imageContainer.current, { 
            width: "150px",
            height: "150px",
            borderRadius: "20px",
            opacity: 0.7,
            scale: 0.8,
            y: "100vh" // Bắt đầu từ dưới màn hình
        });
        gsap.set([image2.current, image3.current], { opacity: 0, scale: 0.9 });
        gsap.set([textOverlay1.current, textOverlay2.current, textOverlay3.current], { 
            opacity: 0, 
            y: 30,
            scale: 0.9
        });

        // Main animation sequence - tối ưu cho tốc độ
        // Phase 1: Di chuyển từ dưới lên nhanh hơn
        tl.to(imageContainer.current, {
            y: 0, // Di chuyển lên vị trí trung tâm
            scale: 1,
            opacity: 1,
            duration: 0.8, // Giảm từ 1.2s xuống 0.8s
            ease: "power2.out"
        })
        // Phase 2: Phóng to nhanh hơn
        .to(imageContainer.current, {
            width: "100vw",
            height: "100vh",
            borderRadius: "0px",
            duration: 1.0, // Giảm từ 1.5s xuống 1.0s
            ease: "power3.out"
        }, "+=0.3") // Giảm delay từ 0.5s xuống 0.3s
        .to(textOverlay1.current, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5, // Giảm từ 0.8s xuống 0.5s
            ease: "power2.out"
        }, "-=0.2") // Giảm overlap
        .to([image1.current, textOverlay1.current], {
            opacity: 0,
            scale: 1.05,
            duration: 0.4 // Giữ nguyên
        }, "+=1.2") // Giảm delay từ 2s xuống 1.2s
        .to(image2.current, {
            opacity: 1,
            scale: 1,
            duration: 0.5, // Giảm từ 0.8s xuống 0.5s
            ease: "power2.out"
        }, "-=0.2")
        .to(textOverlay2.current, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5, // Giảm từ 0.8s xuống 0.5s
            ease: "power2.out"
        }, "-=0.2") // Giảm overlap
        .to([image2.current, textOverlay2.current], {
            opacity: 0,
            scale: 1.05,
            duration: 0.4 // Giữ nguyên
        }, "+=1.0") // Giảm delay từ 1.5s xuống 1.0s
        .to(image3.current, {
            opacity: 1,
            scale: 1,
            duration: 0.5, // Giảm từ 0.8s xuống 0.5s
            ease: "power2.out"
        }, "-=0.2")
        .to(textOverlay3.current, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5, // Giảm từ 0.8s xuống 0.5s
            ease: "power2.out"
        }, "-=0.2"); // Giảm overlap

        ScrollTrigger.create({
            trigger: container_imageZoom.current,
            pin: container_imageZoom.current,
            scrub: 1, // Giảm từ 2 xuống 1 để responsive hơn
            animation: tl,
            start: "top top",
            end: "+=150%", // Giảm từ 200% xuống 150%
            anticipatePin: 1
        });

        // Particle animation
        if (particlesContainer.current) {
            gsap.to(particlesContainer.current.children, {
                y: "random(-50, 50)",
                x: "random(-50, 50)",
                rotation: "random(-180, 180)",
                scale: "random(0.3, 1.5)",
                opacity: "random(0.4, 0.8)",
                duration: "random(2, 4)",
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                stagger: {
                    amount: 1.5,
                    from: "center"
                }
            });
        }
    }, []);

    return (
        <div className="relative">
            <div ref={container_imageZoom} className="w-screen h-screen bg-black flex justify-center items-center relative overflow-hidden">
                <div 
                    ref={imageContainer}
                    className="relative rounded-2xl overflow-hidden shadow-2xl opacity-70 transition-all duration-300"
                >
                    <img 
                        ref={image1}
                        src={imageData[0].src}
                        className="absolute inset-0 w-full h-full object-cover"
                        alt="AI Innovation"
                    />
                    
                    <img 
                        ref={image2}
                        src={imageData[1].src}
                        className="absolute inset-0 w-full h-full object-cover"
                        alt="Smart Solutions"
                    />
                    
                    <img 
                        ref={image3}
                        src={imageData[2].src}
                        className="absolute inset-0 w-full h-full object-cover"
                        alt="Precision Tech"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          
                    <div ref={textOverlay1} className="absolute inset-0 flex flex-col justify-center items-center text-white p-4 sm:p-6 lg:p-8">
                        <div className="bg-black/40 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20 max-w-sm sm:max-w-lg lg:max-w-2xl mx-auto">
                            <div className="flex items-center justify-center mb-4 sm:mb-6">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-blue-500/20 rounded-full flex items-center justify-center mr-2 sm:mr-3 backdrop-blur-sm border border-blue-400/30">
                                    <Brain className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
                                </div>
                                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-blue-400" />
                            </div>
                            <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-3 sm:mb-4 text-white">
                                {imageData[0].title}
                            </h2>
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-center text-blue-200 font-medium leading-relaxed">
                                {imageData[0].subtitle}
                            </p>
                        </div>
                    </div>

                    <div ref={textOverlay2} className="absolute inset-0 flex flex-col justify-center items-center text-white p-4 sm:p-6 lg:p-8">
                        <div className="bg-black/40 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20 max-w-sm sm:max-w-lg lg:max-w-2xl mx-auto">
                            <div className="flex items-center justify-center mb-4 sm:mb-6">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mr-2 sm:mr-3 backdrop-blur-sm border border-yellow-400/30">
                                    <Zap className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
                                </div>
                                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-yellow-400" />
                            </div>
                            <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-3 sm:mb-4 text-white">
                                {imageData[1].title}
                            </h2>
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-center text-yellow-200 font-medium leading-relaxed">
                                {imageData[1].subtitle}
                            </p>
                        </div>
                    </div>

                    <div ref={textOverlay3} className="absolute inset-0 flex flex-col justify-center items-center text-white p-4 sm:p-6 lg:p-8">
                        <div className="bg-black/40 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20 max-w-sm sm:max-w-lg lg:max-w-2xl mx-auto">
                            <div className="flex items-center justify-center mb-4 sm:mb-6">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-green-500/20 rounded-full flex items-center justify-center mr-2 sm:mr-3 backdrop-blur-sm border border-green-400/30">
                                    <Target className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
                                </div>
                                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-green-400" />
                            </div>
                            <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-3 sm:mb-4 text-white">
                                {imageData[2].title}
                            </h2>
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-center text-green-200 font-medium leading-relaxed">
                                {imageData[2].subtitle}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Placeholder div để tạo scroll space */}
            <div className="h-[50vh]"></div> {/* Giảm từ 100vh xuống 50vh */}
        </div>
    );
}