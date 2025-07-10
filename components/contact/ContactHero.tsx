import { Calendar, MessageSquare, Phone, Mail } from 'lucide-react';

export default function ContactHero() {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white py-20 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Liên Hệ <span className="text-blue-200">Với Chúng Tôi</span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Sẵn sàng chuyển đổi hoạt động kinh doanh của bạn? Chúng tôi ở đây để giúp bạn bắt đầu với các giải pháp AI 
            được tùy chỉnh theo nhu cầu cụ thể của bạn.
          </p>

        </div>
      </div>
    </section>
  );
}
