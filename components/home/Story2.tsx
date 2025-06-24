'use client';

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Sparkles, Brain, Zap, Target } from 'lucide-react';

export default function Story2() {
    const con_p1 = useRef<HTMLDivElement>(null);
    const con_p2 = useRef<HTMLDivElement>(null);
    const con_p3 = useRef<HTMLDivElement>(null);
    const con_p4 = useRef<HTMLDivElement>(null);
    const p1 = useRef<HTMLDivElement>(null);
    const p2 = useRef<HTMLDivElement>(null);
    const p3 = useRef<HTMLDivElement>(null);
    const p4 = useRef<HTMLDivElement>(null);
    const container_textBlock = useRef<HTMLDivElement>(null);
    
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
    const transitionElementsRef = useRef<HTMLDivElement>(null);
    const morphingBgRef = useRef<HTMLDivElement>(null);

    const imageData = [
        {
            src: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
            title: "Yêu Cầu Chuyển Đổi Số",
            subtitle: "Chính phủ yêu cầu minh bạch doanh thu, xuất hóa đơn điện tử.",
            icon: <Brain className="w-8 h-8" />
        },
        {
            src: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800",
            title: "Giải Pháp Toàn Diện",
            subtitle: "TripC Solution giải quyết thách thức này hiệu quả.",
            icon: <Zap className="w-8 h-8" />
        },
        {
            src: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800",
            title: "Đa Dạng Lĩnh Vực",
            subtitle: "Phục vụ du lịch, ẩm thực, chăm sóc sức khỏe, giải trí.",
            icon: <Target className="w-8 h-8" />
        }
    ];

    useEffect(() => {
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            // ===== ENTRANCE FROM HERO SECTION =====
            
            // Initial setup for smooth entrance
            gsap.set(container_textBlock.current, {
                backgroundColor: "#000000",
                opacity: 0
            });

            gsap.set([p1.current, p2.current, p3.current, p4.current], {
                opacity: 0,
                y: 150,
                scale: 0.8
            });

            // Entrance animation synchronized with Hero exit
            const entranceTl = gsap.timeline({
                scrollTrigger: {
                    trigger: container_textBlock.current,
                    start: "top 100%",
                    end: "top 50%",
                    scrub: 1.5
                }
            });

            // Sync with Hero's morphing elements on scroll
            if (transitionElementsRef.current) {
                gsap.to(transitionElementsRef.current.children, {
                    scale: "random(0.5, 2)",
                    opacity: "random(0.3, 1)",
                    rotation: "random(0, 360)",
                    duration: 2,
                    ease: "power2.out",
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: container_textBlock.current,
                        start: "top 100%",
                        end: "top 50%",
                        scrub: 1.5
                    }
                });
            }

            entranceTl
                .to(container_textBlock.current, {
                    opacity: 1,
                    duration: 1,
                    ease: "power2.out"
                })
                .to(morphingBgRef.current, {
                    opacity: 1,
                    scale: 1,
                    duration: 1.5,
                    ease: "power2.out"
                }, "-=0.8");

            // Text reveal animation with wave effect
            gsap.to(p1.current, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1.5,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: con_p1.current,
                    start: "top 80%",
                    end: "bottom 60%",
                    scrub: 1
                }
            });

            gsap.to(p2.current, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1.5,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: con_p2.current,
                    start: "top 80%",
                    end: "bottom 60%",
                    scrub: 1
                }
            });

            gsap.to(p3.current, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1.5,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: con_p3.current,
                    start: "top 80%",
                    end: "bottom 60%",
                    scrub: 1
                }
            });

            gsap.to(p4.current, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1.5,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: con_p4.current,
                    start: "top 80%",
                    end: "bottom 60%",
                    scrub: 1
                }
            });

            // Text exit animation with morphing effect
            gsap.to(p1.current, {
                yPercent: -100,
                opacity: 0.7,
                scale: 1.1,
                scrollTrigger: {
                    trigger: con_p1.current,
                    scrub: true,
                    start: "top 30%",
                    end: "bottom 15%",
                }
            });

            gsap.to(p2.current, {
                yPercent: -100,
                opacity: 0.7,
                scale: 1.1,
                scrollTrigger: {
                    trigger: con_p2.current,
                    scrub: true,
                    start: "top 30%",
                    end: "bottom 15%",
                }
            });

            gsap.to(p3.current, {
                yPercent: -100,
                opacity: 0.7,
                scale: 1.1,
                scrollTrigger: {
                    trigger: con_p3.current,
                    scrub: true,
                    start: "top 30%",
                    end: "bottom 15%",
                }
            });

            gsap.to(p4.current, {
                yPercent: -100,
                opacity: 0.7,
                scale: 1.1,
                scrollTrigger: {
                    trigger: con_p4.current,
                    scrub: true,
                    start: "top 30%",
                    end: "bottom 15%",
                }
            });

            // Background color transition with gradient morphing
            gsap.to([container_imageZoom.current, container_textBlock.current], {
                backgroundColor: "#0f172a",
                scrollTrigger: {
                    trigger: container_imageZoom.current,
                    start: "top 90%",
                    end: "bottom center",
                    scrub: true
                }
            });

            // Enhanced image morphing animation
            const tl = gsap.timeline();
            
            // Initial setup
            gsap.set([image2.current, image3.current], { opacity: 0, scale: 0.8 });
            gsap.set([textOverlay1.current, textOverlay2.current, textOverlay3.current], { 
                opacity: 0, 
                y: 50,
                scale: 0.8
            });

            // Main animation sequence with enhanced transitions
            tl.to(imageContainer.current, {
                width: "100vw",
                height: "100vh",
                borderRadius: "0px",
                duration: 1,
                ease: "power2.inOut"
            })
            .to(textOverlay1.current, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                ease: "back.out(1.7)"
            }, "-=0.5")
            .to([image1.current, textOverlay1.current], {
                opacity: 0,
                scale: 1.1,
                rotation: 5,
                duration: 0.6
            }, "+=1")
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

            // Enhanced floating particles animation synchronized with Hero
            if (particlesContainer.current) {
                gsap.to(particlesContainer.current.children, {
                y: "random(-100, 100)",
                x: "random(-100, 100)",
                rotation: "random(-360, 360)",
                scale: "random(0.5, 2)",
                opacity: "random(0.3, 1)",
                duration: "random(3, 6)",
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                stagger: {
                    amount: 2,
                    from: "random"
                }
            });
            }

            // Transition elements animation
            if (transitionElementsRef.current) {
                gsap.to(transitionElementsRef.current.children, {
                y: "random(-200, 200)",
                x: "random(-200, 200)",
                rotation: "random(-720, 720)",
                scale: "random(0.2, 3)",
                duration: "random(8, 15)",
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                stagger: {
                    amount: 4,
                    from: "random"
                }
            });
            }

        });

        return () => {
            ctx.revert();
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <div>
            <section className="bg-black relative">
                {/* Transition Elements from Hero */}
                <div ref={transitionElementsRef} className="absolute inset-0 pointer-events-none z-10">
                    {[...Array(12)].map((_, i) => (
                        <div
                            key={i}
                            className={`absolute rounded-full ${
                                i % 4 === 0 ? 'w-16 h-16 bg-gradient-to-r from-blue-500/30 to-cyan-500/30' :
                                i % 4 === 1 ? 'w-12 h-12 bg-gradient-to-r from-indigo-500/30 to-purple-500/30' :
                                i % 4 === 2 ? 'w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20' :
                                'w-14 h-14 bg-gradient-to-r from-cyan-500/25 to-blue-500/25'
                            } blur-lg`}
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                        />
                    ))}
                </div>

                {/* Morphing Background */}
                <div ref={morphingBgRef} className="absolute inset-0 opacity-0 scale-110">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                </div>

                <div ref={container_textBlock} className="w-screen bg-white text-black h-screen flex flex-col justify-center items-center font-bold px-4 relative z-20">
                    <section ref={con_p1} className="w-full mb-3 max-w-[95%] h-[12%] leading-none overflow-y-hidden flex items-center justify-center">
                        <p ref={p1} className="font-[600] italic font-sans text-center text-[50px] xs:text-[60px] sm:text-[80px] md:text-[100px] lg:text-[120px] xl:text-[140px] whitespace-nowrap pb-12 text-white">
                            EASY
                        </p>
                    </section>
                    <section ref={con_p2} className="w-full mb-3 max-w-[95%] h-[12%] leading-none overflow-y-hidden flex items-center justify-center">
                        <p ref={p2} className="font-sans italic text-center text-[40px] xs:text-[50px] sm:text-[65px] md:text-[80px] lg:text-[100px] xl:text-[120px] whitespace-nowrap text-white">
                         PROFESSIONAL
                        </p>
                    </section>
                    <section ref={con_p3} className="font-[600] mb-3 font-sans w-full max-w-[95%] h-[12%] leading-none overflow-y-hidden flex items-center justify-center">
                        <p ref={p3} className="text-center text-white text-[50px] xs:text-[60px] sm:text-[80px] md:text-[100px] lg:text-[120px] xl:text-[140px] whitespace-nowrap">
                            SPECTACULAR 
                        </p>
                    </section>
                    <section ref={con_p4} className="font-sans mb-3 font-[600] w-full max-w-[95%] h-[12%] leading-none overflow-y-hidden flex items-center justify-center">
                        <p ref={p4} className="italic text-white text-center text-[40px] xs:text-[50px] sm:text-[65px] md:text-[80px] lg:text-[100px] xl:text-[120px] whitespace-nowrap">
                          AFFORDABLE PRICE
                        </p>
                    </section>
                </div>
            </section>

            <div ref={container_imageZoom} className="w-screen h-screen bg-black flex justify-center items-center relative overflow-hidden">
                {/* Enhanced Floating Particles */}
                <div ref={particlesContainer} className="absolute inset-0 pointer-events-none">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className={`absolute rounded-full ${
                                i % 5 === 0 ? 'w-3 h-3 bg-blue-400/40 shadow-lg shadow-blue-400/20' :
                                i % 5 === 1 ? 'w-2 h-2 bg-indigo-400/50 shadow-md shadow-indigo-400/30' :
                                i % 5 === 2 ? 'w-4 h-4 bg-purple-400/30 shadow-lg shadow-purple-400/20' :
                                i % 5 === 3 ? 'w-1.5 h-1.5 bg-cyan-400/60 shadow-sm shadow-cyan-400/40' :
                                'w-2.5 h-2.5 bg-violet-400/40 shadow-md shadow-violet-400/25'
                            }`}
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                        />
                    ))}
                </div>

                {/* Main Image Container */}
                <div 
                    ref={imageContainer}
                    className="relative w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-[50px] overflow-hidden shadow-2xl"
                >
                    {/* Image 1 */}
                    <img 
                        ref={image1}
                        src={imageData[0].src}
                        className="absolute inset-0 w-full h-full object-cover"
                        alt="AI Innovation"
                    />
                    
                    {/* Image 2 */}
                    <img 
                        ref={image2}
                        src={imageData[1].src}
                        className="absolute inset-0 w-full h-full object-cover"
                        alt="Smart Solutions"
                    />
                    
                    {/* Image 3 */}
                    <img 
                        ref={image3}
                        src={imageData[2].src}
                        className="absolute inset-0 w-full h-full object-cover"
                        alt="Precision Tech"
                    />

                    {/* Enhanced Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Text Overlay 1 */}
                    <div ref={textOverlay1} className="absolute inset-0 flex flex-col justify-center items-center text-white p-8">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mr-3 backdrop-blur-sm border border-blue-400/30">
                                {imageData[0].icon}
                            </div>
                            <Sparkles className="w-6 h-6 text-blue-400" />
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold text-center mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            {imageData[0].title}
                        </h2>
                        <p className="text-lg md:text-xl text-center text-blue-200 font-medium">
                            {imageData[0].subtitle}
                        </p>
                        <div className="mt-6 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                            <span className="text-sm font-medium">Powered by AI</span>
                        </div>
                    </div>

                    {/* Text Overlay 2 */}
                    <div ref={textOverlay2} className="absolute inset-0 flex flex-col justify-center items-center text-white p-8">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mr-3 backdrop-blur-sm border border-yellow-400/30">
                                {imageData[1].icon}
                            </div>
                            <Sparkles className="w-6 h-6 text-yellow-400" />
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold text-center mb-2 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                            {imageData[1].title}
                        </h2>
                        <p className="text-lg md:text-xl text-center text-yellow-200 font-medium">
                            {imageData[1].subtitle}
                        </p>
                        <div className="mt-6 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                            <span className="text-sm font-medium">Next Generation</span>
                        </div>
                    </div>

                    {/* Text Overlay 3 */}
                    <div ref={textOverlay3} className="absolute inset-0 flex flex-col justify-center items-center text-white p-8">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mr-3 backdrop-blur-sm border border-green-400/30">
                                {imageData[2].icon}
                            </div>
                            <Sparkles className="w-6 h-6 text-green-400" />
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold text-center mb-2 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                            {imageData[2].title}
                        </h2>
                        <p className="text-lg md:text-xl text-center text-green-200 font-medium">
                            {imageData[2].subtitle}
                        </p>
                        <div className="mt-6 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                            <span className="text-sm font-medium">Advanced Technology</span>
                        </div>
                    </div>
                </div>

                {/* Enhanced Corner Decorations */}
                <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-blue-400/30 rounded-tl-lg" />
                <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-blue-400/30 rounded-tr-lg" />
                <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-blue-400/30 rounded-bl-lg" />
                <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-blue-400/30 rounded-br-lg" />
            </div>
        </div>
    );
}