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
            src: "/chuyendoiso.jpg", 
            title: "Yêu Cầu Chuyển Đổi Số",
            subtitle: "Chính phủ yêu cầu minh bạch doanh thu, xuất hóa đơn điện tử.",
            icon: <Brain className="w-8 h-8" />
        },
        {
            src: "/congnghe.png", 
            title: "Giải Pháp Toàn Diện",
            subtitle: "TripC Solution giải quyết thách thức này hiệu quả.",
            icon: <Zap className="w-8 h-8" />
        },
        {
            src: "/dadanlinhvuc.jpg", 
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
        
        // Initial setup - bắt đầu rất nhỏ
        gsap.set(imageContainer.current, { 
            width: "2px",
            height: "2px",
            borderRadius: "100%",
            opacity: 0.3,
            scale: 0.1
        });
        gsap.set([image2.current, image3.current], { opacity: 0, scale: 0.8 });
        gsap.set([textOverlay1.current, textOverlay2.current, textOverlay3.current], { 
            opacity: 0, 
            y: 50,
            scale: 0.1
        });

        // Main animation sequence with enhanced transitions
        // Phase 1: Zoom từ điểm rất nhỏ thành hình vuông vừa
        tl.to(imageContainer.current, {
            width: "8px",
            height: "8px",
            opacity: 0.6,
            scale: 1,
            duration: 0.5,
            ease: "power2.out"
        })
        .to(imageContainer.current, {
            width: "300px",
            height: "300px",
            borderRadius: "30px",
            opacity: 1,
            scale: 1.1,
            duration: 1.5,
            ease: "back.out(1.7)"
        })
        .to(imageContainer.current, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
        })
        // Phase 2: Zoom ra toàn màn hình
        .to(imageContainer.current, {
            width: "100vw",
            height: "100vh",
            borderRadius: "0px",
            duration: 1.2,
            ease: "power2.inOut"
        }, "+=0.3")
        .to(textOverlay1.current, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)"
        }, "-=0.8")
        .to([image1.current, textOverlay1.current], {
            opacity: 0,
            scale: 1.1,
            rotation: 5,
            duration: 0.6
        }, "+=1.5")
        .to(image2.current, {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power2.out"
        }, "-=0.3")
        .to(textOverlay2.current, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)"
        }, "-=0.4")
        .to([image2.current, textOverlay2.current], {
            opacity: 0,
            scale: 1.1,
            rotation: -5,
            duration: 0.6
        }, "+=1")
        .to(image3.current, {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power2.out"
        }, "-=0.3")
        .to(textOverlay3.current, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)"
        }, "-=0.4");

        ScrollTrigger.create({
            trigger: container_imageZoom.current,
            pin: container_imageZoom.current,
            scrub: 1,
            animation: tl,
            start: "top 0%",
            end: "bottom top"
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
        <div>
            <div ref={container_imageZoom} className="w-screen h-screen bg-black flex justify-center items-center relative overflow-hidden">
                {/* Particles container */}
                <div ref={particlesContainer} className="absolute inset-0 pointer-events-none">
                    {[...Array(8)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-60"
                            style={{
                                left: '50%',
                                top: '50%',
                                transform: 'translate(-50%, -50%)'
                            }}
                        />
                    ))}
                </div>

                <div 
                    ref={imageContainer}
                    className="relative w-1 h-1 rounded-full overflow-hidden shadow-lg opacity-30"
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

          
                    <div ref={textOverlay1} className="absolute inset-0 flex flex-col justify-center items-center text-white p-8">
                  
                        <div className="bg-black/40 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
                            <div className="flex items-center justify-center mb-6">
                                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mr-3 backdrop-blur-sm border border-blue-400/30">
                                    {imageData[0].icon}
                                </div>
                                <Sparkles className="w-6 h-6 text-blue-400" />
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-white bg-clip-text text-transparent">
                                {imageData[0].title}
                            </h2>
                            <p className="text-lg md:text-xl text-center text-blue-200 font-medium leading-relaxed">
                                {imageData[0].subtitle}
                            </p>
                     
                        </div>
                    </div>

                    <div ref={textOverlay2} className="absolute inset-0 flex flex-col justify-center items-center text-white p-8">
                  
                        <div className="bg-black/40 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
                            <div className="flex items-center justify-center mb-6">
                                <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mr-3 backdrop-blur-sm border border-yellow-400/30">
                                    {imageData[1].icon}
                                </div>
                                <Sparkles className="w-6 h-6 text-yellow-400" />
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-white bg-clip-text text-transparent">
                                {imageData[1].title}
                            </h2>
                            <p className="text-lg md:text-xl text-center text-yellow-200 font-medium leading-relaxed">
                                {imageData[1].subtitle}
                            </p>
                         
                        </div>
                    </div>

                    <div ref={textOverlay3} className="absolute inset-0 flex flex-col justify-center items-center text-white p-8">
             
                        <div className="bg-black/40 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
                            <div className="flex items-center justify-center mb-6">
                                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mr-3 backdrop-blur-sm border border-green-400/30">
                                    {imageData[2].icon}
                                </div>
                                <Sparkles className="w-6 h-6 text-green-400" />
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-white bg-clip-text text-transparent">
                                {imageData[2].title}
                            </h2>
                            <p className="text-lg md:text-xl text-center text-green-200 font-medium leading-relaxed">
                                {imageData[2].subtitle}
                            </p>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}