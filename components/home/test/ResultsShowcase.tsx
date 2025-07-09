'use client';

import React from 'react';
import { ArrowUp, Smile, TrendingDown, Star, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ResultsShowcase = () => {
  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const fadeInDown = {
    initial: { opacity: 0, y: -60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const stats = [
    {
      icon: <ArrowUp className="w-8 h-8" />,
      value: "+20%",
      label: "Tăng doanh thu trung bình",
      description: "Nhờ giải pháp tối ưu hóa quy trình và tăng hiệu suất làm việc",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <Smile className="w-8 h-8" />,
      value: "+15%",
      label: "Cải thiện sự hài lòng của khách",
      description: "Hệ thống quản lý chuyên nghiệp mang đến trải nghiệm tốt hơn",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <TrendingDown className="w-8 h-8" />,
      value: "-10%",
      label: "Giảm chi phí hoạt động",
      description: "Tự động hóa giúp tiết kiệm nhân lực và tài nguyên vận hành",
      color: "bg-purple-100 text-purple-600"
    }
  ];

  const testimonials = [
    {
      quote: "TripC Solutions đã giúp chúng tôi tăng doanh thu đáng kể chỉ sau 3 tháng triển khai. Hệ thống dễ sử dụng và hỗ trợ tuyệt vời!",
      author: "Nguyễn Văn A",
      position: "Giám đốc",
      company: "ABC Company",
      avatar: "/1.jpg"
    },
    {
      quote: "Khách hàng của chúng tôi hài lòng hơn hẳn nhờ hệ thống quản lý chuyên nghiệp từ TripC. Đội ngũ tư vấn rất tận tâm!",
      author: "Trần Thị B",
      position: "Quản lý",
      company: "XYZ Resort",
      avatar: "/2.jpg"
    },
    {
      quote: "Giải pháp của TripC đã giúp chúng tôi tiết kiệm thời gian và tăng hiệu quả làm việc một cách đáng kể.",
      author: "Lê Văn C",
      position: "CEO",
      company: "Tech Solutions",
      avatar: "/3.jpg"
    }
  ];

  return (
    <motion.div 
      className="bg-white"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          {...fadeInDown}
        >
          <motion.h2 
            className="text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Kết quả thực tế
          </motion.h2>
          <motion.div 
            className="w-24 h-2 bg-blue-600 mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          ></motion.div>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Những con số biết nói từ các doanh nghiệp đã triển khai giải pháp của chúng tôi
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              variants={fadeInUp}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className={`w-16 h-16 rounded-full ${stat.color.split(' ')[1]} flex items-center justify-center mb-6 mx-auto`}
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {stat.icon}
              </motion.div>
              <div className="text-center">
                <motion.div 
                  className="text-5xl font-bold text-blue-600 mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                >
                  {stat.value}
                </motion.div>
                <motion.h3 
                  className="text-xl font-semibold text-gray-900 mb-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                >
                  {stat.label}
                </motion.h3>
                <motion.p 
                  className="text-gray-600"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                >
                  {stat.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div 
          className="bg-gradient-to-b from-gray-50 to-white py-20 relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="text-center mb-16"
            {...fadeInDown}
          >
            <motion.h3 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Lời chứng thực từ khách hàng
            </motion.h3>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Những phản hồi chính thống từ khách hàng đã sử dụng dịch vụ của chúng tôi
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index} 
                className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-200/60 hover:shadow-xl hover:border-gray-300 transition-all duration-300 ease-in-out flex flex-col"
                variants={fadeInUp}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 rounded-full overflow-hidden mr-4 flex-shrink-0 ring-2 ring-offset-2 ring-gray-200/80 group-hover:ring-blue-200 transition-all duration-300">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      width={56}
                      height={56}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-lg font-semibold text-gray-800">
                      {testimonial.author}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {testimonial.position}, <span className="font-medium text-gray-600">{testimonial.company}</span>
                    </p>
                    <div className="flex items-center mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex-grow">
                  <blockquote className="text-gray-600 text-lg leading-relaxed relative">
                    <p className="relative z-10">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                  </blockquote>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-1"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.button 
          
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}
          >
               <a href='/templates' className="group  relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-900 to-[#0251D8] text-white rounded-2xl hover:from-[#0251D8] hover:to-[#013FB7] transition-all duration-500 flex items-center justify-center space-x-3 font-bold shadow-xl overflow-hidden text-sm sm:text-base">
                <span className="relative z-10">Xem mẫu ngay</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 group-hover:translate-x-2 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </a>
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ResultsShowcase;