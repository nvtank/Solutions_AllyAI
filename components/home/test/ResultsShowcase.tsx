'use client';

import React from 'react';
import { ArrowUp, Smile, TrendingDown, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './ResultsShowcase.module.css';

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

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: "easeOut" }
  };

  const slideInLeft = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const slideInRight = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
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
      position: "Giám đốc ABC Company",
      website: "https://abccompany.com"
    },
    {
      quote: "Khách hàng của chúng tôi hài lòng hơn hẳn nhờ hệ thống quản lý chuyên nghiệp từ TripC. Đội ngũ tư vấn rất tận tâm!",
      author: "Trần Thị B",
      position: "Quản lý XYZ Resort",
      website: "https://xyzresort.com"
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
          className="bg-blue-600 rounded-2xl shadow-2xl overflow-hidden py-16 px-6 lg:px-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="text-center mb-12"
            {...fadeInDown}
          >
            <motion.div
              initial={{ opacity: 0, y: -20, rotate: -10 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Quote className="w-10 h-10 text-blue-300 mx-auto mb-4" />
            </motion.div>
            <motion.h3 
              className="text-3xl font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Lời chứng thực từ khách hàng
            </motion.h3>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index} 
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-lg"
                variants={index % 2 === 0 ? slideInLeft : slideInRight}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="flex items-center gap-4 mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div>
                    <motion.div 
                      className="text-white font-semibold text-xl"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                    >
                      {testimonial.author}
                    </motion.div>
                    <motion.div 
                      className="text-blue-200 text-sm"
                      initial={{ opacity: 0, y: 5 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    >
                      {testimonial.position}
                    </motion.div>
                  </div>
                </motion.div>

                <motion.div 
                  className="text-white/90 text-sm mb-2"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                >
                  Sản phẩm: <span className="italic">{testimonial.website}</span>
                </motion.div>
                <motion.p 
                  className="text-white/90 italic text-base leading-relaxed"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
                >
                  &ldquo;{testimonial.quote}&rdquo;
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div 
            className="relative inline-block group"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {/* Pulse rings */}
            <motion.div 
              className={styles.pulseRing}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            ></motion.div>
            <motion.div 
              className={styles.pulseRing}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            ></motion.div>
            
            {/* Floating particles */}
            <motion.div 
              className={styles.floatingParticle}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.8 }}
            ></motion.div>
            <motion.div 
              className={styles.floatingParticle}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.9 }}
            ></motion.div>
            <motion.div 
              className={styles.floatingParticle}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 1.0 }}
            ></motion.div>
            <motion.div 
              className={styles.floatingParticle}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 1.1 }}
            ></motion.div>
            
            {/* Animated background gradient with pulsing effect */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-600 to-blue-700 rounded-2xl blur-xl opacity-40 group-hover:opacity-70 transition-all duration-500 animate-pulse"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 0.4, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            ></motion.div>
            
            {/* Secondary glow effect */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition-all duration-700 scale-110"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 0.2, scale: 1.1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.7 }}
            ></motion.div>
            
            {/* Main button with advanced animations */}
            <motion.button 
              className={`${styles.ctaButton} ${styles.magneticEffect} relative px-16 py-7 text-white font-bold text-xl rounded-2xl shadow-2xl hover:shadow-blue-500/40 transition-all duration-500 transform hover:scale-110 hover:-translate-y-4 border border-blue-400/40 backdrop-blur-sm group overflow-hidden active:scale-95`}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ 
                scale: 1.1,
                y: -16,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Shine effect */}
              <div className={styles.shineEffect}></div>
           
              <motion.div 
                className={`${styles.ctaButtonContent} relative flex items-center justify-center gap-4`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <motion.span 
                  className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent font-extrabold tracking-wide"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                >
                  Liên hệ ngay
                </motion.span>
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ResultsShowcase;