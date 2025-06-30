'use client';

import { ArrowRight, ExternalLink, Smartphone, Globe, Calendar, Users, Database } from 'lucide-react';
import { type Solution } from './solutionsData';

interface SolutionCardProps {
  solution: Solution;
  index: number;
  floatingParticles?: Array<{
    key: number;
    style: React.CSSProperties;
    className: string;
  }>;
}

// Component cho App Store icons
const AppStoreIcons = () => (
  <div className="flex space-x-3 mt-3">
    <div className="w-32 h-10 bg-black text-white rounded-lg flex items-center justify-center text-xs font-medium">
      <Smartphone className="w-4 h-4 mr-2" />
      App Store
    </div>
    <div className="w-32 h-10 bg-black text-white rounded-lg flex items-center justify-center text-xs font-medium">
      <Smartphone className="w-4 h-4 mr-2" />
      CH Play
    </div>
  </div>
);

export default function SolutionCard({ solution, index, floatingParticles = [] }: SolutionCardProps) {
  return (
    <div 
      className="flex-shrink-0 w-screen h-screen relative overflow-hidden"
      style={{ opacity: 1, willChange: 'auto' }}
    >
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${solution.bgGradient} opacity-30`} />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingParticles.map((particle) => (
          <div
            key={particle.key}
            className={particle.className}
            style={{
              ...particle.style,
              willChange: 'transform'
            }}
          />
        ))}
      </div>

      {/* Three-Column Content Grid */}
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-center h-full">
            
            {/* First Text Column - Header & Description */}
            <div 
              className={`text-column-1 space-y-4 lg:col-span-1 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-1'}`}
              style={{ 
                opacity: 1, 
                transform: 'translateX(0px)', 
                willChange: 'transform',
                width: '100%',
                maxWidth: '100%'
              }}
            >
              {/* Header */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center text-white shadow-lg transform-gpu`}>
                    {solution.icon}
                  </div>
                  <div className="text-4xl font-bold text-gray-200">
                    {solution.id}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl lg:text-3xl font-black text-gray-900 mb-3 leading-tight tracking-tight">
                    {solution.title}
                  </h3>
                  <p className={`text-base font-bold bg-gradient-to-r ${solution.color} bg-clip-text text-transparent mb-4`}>
                    {solution.subtitle}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <button 
                  onClick={() => window.location.href = '#contact-form'}
                  className={`group px-6 py-3 bg-gradient-to-r ${solution.color} text-white rounded-lg hover:shadow-lg transition-all duration-300 font-medium relative overflow-hidden transform-gpu`}
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <span className="text-sm">Dùng thử miễn phí</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </button>
              </div>
            </div>

            {/* Second Text Column - Features & Details */}
            <div 
              className={`text-column-2 space-y-4 lg:col-span-1 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-2'}`}
              style={{ 
                opacity: 1, 
                transform: 'translateX(0px)', 
                willChange: 'transform',
                width: '100%',
                maxWidth: '100%'
              }}
            >

              {/* Sub Products */}
              {solution.subProducts && (
                <div className="space-y-3">
                  {solution.subProducts.map((subProduct, idx) => (
                    <div 
                      key={idx} 
                      className="bg-white/90 backdrop-blur-sm rounded-lg p-3 border border-gray-200 hover:shadow-md transition-all duration-300"
                    >
                      <h4 className="font-semibold text-gray-900 mb-1 text-sm">{subProduct.title}</h4>
                      <p className="text-xs text-gray-600 mb-2 leading-relaxed">{subProduct.description}</p>
                      
                      {subProduct.hasAppIcons ? (
                        <div className="flex space-x-2 mt-2">
                          <div className="w-24 h-8 bg-black text-white rounded-md flex items-center justify-center text-xs font-medium">
                            <Smartphone className="w-3 h-3 mr-1" />
                            App Store
                          </div>
                          <div className="w-24 h-8 bg-black text-white rounded-md flex items-center justify-center text-xs font-medium">
                            <Smartphone className="w-3 h-3 mr-1" />
                            CH Play
                          </div>
                        </div>
                      ) : (
                        <button 
                          onClick={() => subProduct.buttonLink && window.open(subProduct.buttonLink, '_blank')}
                          className={`inline-flex items-center space-x-1 px-3 py-1.5 bg-gradient-to-r ${solution.color} text-white rounded-md text-xs font-medium hover:shadow-md transition-all duration-300`}
                        >
                          <span>{subProduct.buttonText}</span>
                          <ExternalLink className="w-3 h-3" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Features Grid */}
              {!solution.subProducts && solution.features && (
                <div className="grid grid-cols-1 gap-3">
                  {solution.features.map((feature, idx) => (
                    <div 
                      key={idx} 
                      className="feature-item flex items-center space-x-3 p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 transform-gpu"
                      style={{ opacity: 1, transform: 'translateY(0px)', willChange: 'transform' }}
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${solution.color}`} />
                      <span className="text-sm font-medium text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Stats */}
              <div className="pt-4">
                <div className="space-y-1">
                  <div className={`text-2xl font-bold bg-gradient-to-r ${solution.color} bg-clip-text text-transparent`}>
                    {solution.stats.value}
                  </div>
                  <div className="text-xs text-gray-600 font-medium">
                    {solution.stats.label}
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Column */}
            <div 
              className={`visual-container lg:col-span-1 ${index % 2 === 1 ? 'lg:order-3' : 'lg:order-3'}`}
              style={{ 
                opacity: 1, 
                transform: 'translateX(0px)', 
                willChange: 'transform',
                width: '100%',
                maxWidth: '100%'
              }}
            >
              <div className="relative w-full h-64 lg:h-80 rounded-xl overflow-hidden shadow-xl transform-gpu">
                {/* Sản phẩm 1: Mock up desktop và app */}
                {solution.id === '01' && (
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 p-4 flex items-center justify-center">
                    <div className="grid grid-cols-1 gap-3 w-full h-full">
                      <div className="bg-white rounded-lg shadow-lg p-3 flex flex-col items-center justify-center">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                          <Globe className="w-5 h-5 text-blue-600" />
                        </div>
                        <span className="text-sm font-semibold text-gray-700">Website Platform</span>
                        <span className="text-xs text-gray-500 mt-1">Booking System</span>
                      </div>
                      <div className="bg-white rounded-lg shadow-lg p-3 flex flex-col items-center justify-center">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                          <Smartphone className="w-5 h-5 text-blue-600" />
                        </div>
                        <span className="text-sm font-semibold text-gray-700">Mobile App</span>
                        <span className="text-xs text-gray-500 mt-1">Merchant Tools</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Sản phẩm 2: Ticket Platform Visual */}
                {solution.id === '02' && (
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 p-4 flex items-center justify-center">
                    <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-xs">
                      <div className="text-center">
                        <Calendar className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                        <h4 className="text-lg font-bold text-gray-800 mb-2">Hệ thống Bán vé</h4>
                        <p className="text-gray-600 mb-3 text-sm">Sự kiện & Du lịch</p>
                        <div className="space-y-2 text-sm text-gray-500">
                          <div className="flex justify-between">
                            <span>Vé bán hôm nay:</span>
                            <span className="font-semibold">1,234</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Doanh thu:</span>
                            <span className="font-semibold">₫25M</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Sản phẩm 3: Entertainment Platform Visual */}
                {solution.id === '03' && (
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 p-4 flex items-center justify-center">
                    <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-xs">
                      <div className="text-center">
                        <Users className="w-12 h-12 text-green-600 mx-auto mb-3" />
                        <h4 className="text-lg font-bold text-gray-800 mb-2">Booking Giải trí</h4>
                        <p className="text-gray-600 mb-3 text-sm">Nhà hàng • Spa • Karaoke</p>
                        <div className="space-y-2 text-sm text-gray-500">
                          <div className="flex justify-between">
                            <span>Tỷ lệ sử dụng:</span>
                            <span className="font-semibold text-green-600">95%</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Khung giờ trống:</span>
                            <span className="font-semibold">18:00-20:00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Sản phẩm 4: Search Platform Visual */}
                {solution.id === '04' && (
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 p-4 flex items-center justify-center">
                    <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-xs">
                      <div className="text-center">
                        <Database className="w-12 h-12 text-orange-600 mx-auto mb-3" />
                        <h4 className="text-lg font-bold text-gray-800 mb-2">So sánh Lưu trú</h4>
                        <p className="text-gray-600 mb-3 text-sm">Tìm kiếm thông minh</p>
                        <div className="space-y-2 text-sm text-gray-500">
                          <div className="flex justify-between">
                            <span>Tìm kiếm/tháng:</span>
                            <span className="font-semibold">1M+</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Tiết kiệm:</span>
                            <span className="font-semibold text-orange-600">35%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Default fallback */}
                {!['01', '02', '03', '04'].includes(solution.id) && (
                  <div 
                    className={`w-full h-full bg-gradient-to-br ${solution.bgGradient} flex items-center justify-center text-2xl font-bold text-black opacity-70`}
                  >
                    {solution.title} Visual
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Hint */}
      {index < 4 && (
        <div className="absolute bottom-8 right-8 flex items-center space-x-2 text-gray-500">
          <span className="text-sm font-medium">Scroll to continue</span>
          <ArrowRight className="w-4 h-4 animate-pulse" />
        </div>
      )}
    </div>
  );
}