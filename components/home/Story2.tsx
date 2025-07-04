'use client';

import { Brain, Zap, Target } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Story2() {
    const { t, language } = useLanguage();

    const getCardData = () => {
        const icons = [
            <Brain className="w-8 h-8" />,
            <Zap className="w-8 h-8" />,
            <Target className="w-8 h-8" />
        ];
        
        const gradients = [
            "from-blue-500/10 to-gray-900",
            "from-yellow-500/10 to-gray-900",
            "from-green-500/10 to-gray-900"
        ];
        
        const borderColors = [
            "border-blue-500/30",
            "border-yellow-500/30", 
            "border-green-500/30"
        ];
        
        const textColors = [
            "text-blue-300",
            "text-yellow-300",
            "text-green-300"
        ];

        if (language === 'vi') {
            return [
                {
                    title: "Yêu Cầu Chuyển Đổi Số",
                    subtitle: "Chính phủ yêu cầu minh bạch doanh thu, xuất hóa đơn điện tử.",
                    icon: icons[0],
                    gradient: gradients[0],
                    borderColor: borderColors[0],
                    textColor: textColors[0]
                },
                {
                    title: "Giải Pháp Toàn Diện",
                    subtitle: "TripC Solution giải quyết thách thức này hiệu quả.",
                    icon: icons[1],
                    gradient: gradients[1],
                    borderColor: borderColors[1],
                    textColor: textColors[1]
                },
                {
                    title: "Đa Dạng Lĩnh Vực",
                    subtitle: "Phục vụ du lịch, ẩm thực, chăm sóc sức khỏe, giải trí.",
                    icon: icons[2],
                    gradient: gradients[2],
                    borderColor: borderColors[2],
                    textColor: textColors[2]
                }
            ];
        } else {
            return [
                {
                    title: "Digital Transformation Requirements",
                    subtitle: "Government requires revenue transparency and electronic invoicing.",
                    icon: icons[0],
                    gradient: gradients[0],
                    borderColor: borderColors[0],
                    textColor: textColors[0]
                },
                {
                    title: "Comprehensive Solutions",
                    subtitle: "TripC Solution effectively addresses these challenges.",
                    icon: icons[1],
                    gradient: gradients[1],
                    borderColor: borderColors[1],
                    textColor: textColors[1]
                },
                {
                    title: "Diverse Industries",
                    subtitle: "Serving tourism, dining, healthcare, entertainment.",
                    icon: icons[2],
                    gradient: gradients[2],
                    borderColor: borderColors[2],
                    textColor: textColors[2]
                }
            ];
        }
    };

    const cardData = getCardData();

    const gridRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        const currentRef = gridRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    const getAnimationClasses = (index: number) => {
        if (!isVisible) {
            switch (index) {
                case 0: return 'opacity-0 -translate-x-10';
                case 1: return 'opacity-0 translate-y-10';
                case 2: return 'opacity-0 translate-x-10';
                default: return 'opacity-0';
            }
        }
        return 'opacity-100 translate-x-0 translate-y-0';
    };

    return (
        <div className="relative bg-gray-900 text-white py-16 md:py-24 flex items-center min-h-screen">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 opacity-50"></div>
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-900/30 to-transparent blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-green-900/30 to-transparent blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-12 md:mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Hành Trình Chuyển Đổi
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
                        Khám phá những bước tiến quan trọng trong việc chuyển đổi số và các giải pháp công nghệ hiện đại của chúng tôi.
                    </p>
                </div>

                {/* Main Content: Cards Grid */}
                <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cardData.map((item, index) => (
                        <div 
                            key={index}
                            className={`relative p-8 rounded-2xl border ${item.borderColor} bg-gray-800/50 flex flex-col transition-all ease-out duration-700 ${getAnimationClasses(index)}`}
                            style={{ transitionDelay: `${index * 200}ms` }}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-30 rounded-2xl`}></div>
                            <div className="relative z-10 flex flex-col flex-grow">
                                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 bg-gray-900/50 ${item.textColor}`}>
                                    {item.icon}
                                </div>
                                <h2 className="text-2xl font-bold text-white mb-4">
                                    {item.title}
                                </h2>
                                <p className="text-gray-300 text-lg leading-relaxed">
                                    {item.subtitle}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}