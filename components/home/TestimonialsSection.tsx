'use client';

import { Star } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    quote: "Nền tảng của TripC Solutions đã cách mạng hóa hoạt động của chúng tôi. Giao diện trực quan và các tính năng mạnh mẽ đã giúp chúng tôi tăng hiệu quả lên 40% và giảm đáng kể chi phí vận hành. Đây là một giải pháp không thể thiếu cho bất kỳ doanh nghiệp nào muốn tối ưu hóa quy trình.",
    author: "Trần Văn Minh",
    position: "Giám đốc Vận hành",
    company: "Tập đoàn TechGlobal",
    avatar: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    quote: "Chúng tôi đã triển khai hệ thống bảo trì dự đoán của TripC và kết quả thật đáng kinh ngạc. Nó đã giúp chúng tôi ngăn chặn nhiều sự cố nghiêm trọng, tiết kiệm hàng ngàn đô la chi phí sửa chữa và thời gian ngừng hoạt động. Đội ngũ hỗ trợ của họ cũng rất chuyên nghiệp và nhiệt tình.",
    author: "Lê Thị Thu Hà",
    position: "Quản lý Nhà máy",
    company: "Advanced Industries",
    avatar: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    quote: "Các giải pháp AI của TripC thực sự vượt trội. Khả năng phân tích dữ liệu thời gian thực đã mang lại cho chúng tôi những hiểu biết sâu sắc chưa từng có, giúp chúng tôi đưa ra quyết định kinh doanh nhanh chóng và chính xác hơn. Sự hợp tác này đã tạo ra một lợi thế cạnh tranh rõ rệt cho chúng tôi.",
    author: "Phạm Nhật Vượng",
    position: "Giám đốc Công nghệ",
    company: "Innovatech Solutions",
    avatar: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400",
  }
];

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-12 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Được Tin Dùng Bởi Các <span className="text-blue-600">Nhà Lãnh Đạo</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Khách hàng của chúng tôi đã đạt được những kết quả vượt trội. Hãy xem họ nói gì về sự hợp tác với TripC Solutions.
          </p>
        </div>

        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl  shadow-lg border border-gray-100 transform hover:-translate-y-2 transition-all duration-300 ease-in-out"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-5 flex-shrink-0 border-2 border-blue-100">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    width={64}
                    height={64}
                    objectFit="cover"
                    className="w-full h-full"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">{testimonial.author}</h4>
                  <p className="text-gray-600">{testimonial.position}, <span className="font-medium text-gray-700">{testimonial.company}</span></p>
                </div>
              </div>
              <blockquote className="text-gray-700 text-lg leading-relaxed italic relative">
                <span className="text-6xl text-blue-100 absolute -top-4 -left-4 font-serif opacity-80 z-0">&ldquo;</span>
                <p className="relative z-10">{testimonial.quote}</p>
              </blockquote>
              <div className="flex items-center mt-6 pt-6 border-t border-gray-200">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}