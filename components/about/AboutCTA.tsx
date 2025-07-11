export default function AboutCTA() {
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto text-center text-white px-4 sm:px-6 lg:px-8">
        {/* Main heading */}
        <div className="max-w-4xl mx-auto mb-8 lg:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-6 lg:mb-8 leading-tight">
          Bạn đã sẵn sàng chưa?
          </h2>
          
          <p className="text-lg sm:text-xl lg:text-2xl mb-12 lg:mb-16 opacity-90 leading-relaxed max-w-3xl mx-auto">
            Hãy để chúng tôi đồng hành cùng bạn trong việc ứng dụng AI để 
            <span className="font-semibold text-yellow-300"> tối ưu hóa quy trình kinh doanh</span> và 
            tạo ra những <span className="font-semibold text-yellow-300">giá trị bền vững</span>.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">
          <a href="/contact" className="group w-full sm:w-auto px-8 lg:px-12 py-4 lg:py-5 bg-white text-blue-600 rounded-xl hover:boder-white transition-all duration-300 transform hover:bg-blue-900 hover:text-white hover:shadow-2xl text-lg lg:text-xl font-bold relative overflow-hidden">
            <span className="relative z-10">Liên hệ ngay</span>
        
          </a>
          
          <a href="/templates" className="group w-full sm:w-auto px-8 lg:px-12 py-4 lg:py-5 border-2 border-white/80 text-white rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:shadow-2xl text-lg lg:text-xl font-semibold backdrop-blur-sm">
            <span className="relative z-10">Xem mẫu</span>
          </a>
        </div>
      </div>
    </section>
  );
}
