import { Globe, Mail, Phone, MapPin } from 'lucide-react';

export default function ContactSidebar() {
  const offices = [
    {
      city: "Đà Nẵng",
      country: "Việt Nam",
      address: "153, Đống Đa, Thạch Thang, Đà Nẵng",
      phone: "0935 479 122",
      email: "quyen@allyai.ai",
      phoneLink: "tel:+84935479122",
      emailLink: "mailto:quyen@allyai.ai",
      addressLink: "https://maps.app.goo.gl/d1kHAhfboqUG4diV7"
    }
  ];

  return (
    <div className="space-y-8">
      {/* FAQ */}
      <div className="bg-gray-50 p-8 rounded-2xl">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Câu Hỏi Thường Gặp</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Tôi có thể bắt đầu nhanh như thế nào?</h4>
            <p className="text-gray-600">Hầu hết khách hàng có thể bắt đầu trong vòng 1-2 tuần sau tư vấn ban đầu.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Có cung cấp giải pháp tùy chỉnh không?</h4>
            <p className="text-gray-600">Có, chúng tôi chuyên tạo ra các giải pháp AI tùy chỉnh cho nhu cầu doanh nghiệp cụ thể.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Loại hỗ trợ nào được cung cấp?</h4>
            <p className="text-gray-600">Chúng tôi cung cấp hỗ trợ kỹ thuật 24/7 và quản lý tài khoản chuyên dụng cho tất cả khách hàng.</p>
          </div>
        </div>
      </div>

      {/* Office Information */}
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Văn Phòng</h3>
        <div className="space-y-6">
          {offices.map((office, index) => (
            <div key={index} className="border-b border-gray-200 last:border-b-0 pb-6 last:pb-0">
              <div className="flex items-start space-x-3 mb-4">
                <Globe className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">{office.city}, {office.country}</h4>
                </div>
              </div>
              
              <div className="space-y-3 ml-8">
                {/* Address */}
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-1">Địa chỉ</p>
                    <a 
                      href={office.addressLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    >
                      {office.address}
                    </a>
                  </div>
                </div>
                
                {/* Phone */}
                <div className="flex items-start space-x-3">
                  <Phone className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-1">Điện thoại</p>
                    <a 
                      href={office.phoneLink}
                      className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    >
                      {office.phone}
                    </a>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex items-start space-x-3">
                  <Mail className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-1">Email</p>
                    <a 
                      href={office.emailLink}
                      className="text-sm text-blue-600 hover:text-blue-700 transition-colors duration-200"
                    >
                      {office.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
