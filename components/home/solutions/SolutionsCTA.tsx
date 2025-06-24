import { ArrowRight } from 'lucide-react';

export default function SolutionsCTA() {
  return (
    <div className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Sẵn sàng chuyển đổi hoạt động kinh doanh?
        </h3>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Khám phá cách các nền tảng thông minh của chúng tôi có thể nâng cấp quy trình vận hành và tạo bứt phá tăng trưởng cho doanh nghiệp của bạn.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:shadow-xl transition-all duration-300 font-medium relative overflow-hidden transform-gpu">
            <span className="relative z-10 flex items-center space-x-2">
              <span>Bắt đầu hành trình</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </button>

          <button className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-xl hover:border-blue-300 hover:text-blue-600 transition-all duration-300 font-medium transform-gpu">
            Đặt lịch tư vấn
          </button>
        </div>
      </div>
    </div>
  );
}
