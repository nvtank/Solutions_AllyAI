// data/content/home.ts
export const homeContent = {
  hero: {
    title: "TRIPC SOLUTIONS",
    subtitle: "Chuyển Đổi Số Cho Doanh Nghiệp Du Lịch - Dịch Vụ",
    cta: {
      primary: "Bắt đầu ngay",
      secondary: "Xem các mẫu"
    },
    stats: [
      { number: '500+', label: 'Dự án' },
      { number: '2000+', label: 'Người dùng' },
      { number: '99.9%', label: 'Uptime SLA' }
    ]
  },

  story: {
    title: "Chuyển đổi Số",
    images: [
      {
        src: "/images/chuyendoiso.jpg",
        title: "Yêu Cầu Chuyển Đổi Số",
        subtitle: "Chính phủ yêu cầu minh bạch doanh thu, xuất hóa đơn điện tử.",
        description: "Nghị định 119/2018 và Thông tư 39/2014 yêu cầu các doanh nghiệp phải số hóa quy trình kinh doanh, minh bạch trong thanh toán và báo cáo thuế."
      },
      {
        src: "/images/congnghe.png", 
        title: "Giải Pháp Toàn Diện",
        subtitle: "TripC Solution giải quyết thách thức này hiệu quả.",
        description: "Nền tảng của chúng tôi không chỉ đáp ứng yêu cầu pháp lý mà còn giúp tối ưu hóa vận hành, tăng doanh thu và cải thiện trải nghiệm khách hàng."
      },
      {
        src: "/images/dadanlinhvuc.jpg",
        title: "Đa Dạng Lĩnh Vực", 
        subtitle: "Phục vụ du lịch, ẩm thực, chăm sóc sức khỏe, giải trí.",
        description: "Từ khách sạn 5 sao đến homestay, từ nhà hàng cao cấp đến quán cà phê, từ spa đến trung tâm thể thao - chúng tôi có giải pháp cho mọi mô hình kinh doanh."
      }
    ]
  },

  features: {
    title: "Tính năng nổi bật",
    subtitle: "Tất cả trong một nền tảng",
    items: [
      {
        icon: "Calendar",
        title: "Booking thông minh",
        description: "Hệ thống đặt chỗ tự động với AI optimization, tránh overbooking và tối ưu occupancy rate."
      },
      {
        icon: "CreditCard", 
        title: "Thanh toán linh hoạt",
        description: "Tích hợp 15+ cổng thanh toán, hỗ trợ trả góp, thanh toán sau và loyalty points."
      },
      {
        icon: "BarChart",
        title: "Analytics nâng cao",
        description: "Dashboard real-time với AI insights, dự báo xu hướng và báo cáo tùy chỉnh."
      },
      {
        icon: "Users",
        title: "CRM tích hợp",
        description: "Quản lý khách hàng 360°, automation marketing và chăm sóc khách hàng cá nhân hóa."
      },
      {
        icon: "Shield",
        title: "Bảo mật cao",
        description: "Tiêu chuẩn PCI DSS, mã hóa end-to-end và compliance với GDPR & PDPA."
      },
      {
        icon: "Zap",
        title: "Tích hợp nhanh",
        description: "API đầy đủ, webhook real-time và SDK cho mọi ngôn ngữ lập trình phổ biến."
      }
    ]
  },

  industries: {
    title: "Phục vụ mọi lĩnh vực",
    subtitle: "Giải pháp tùy chỉnh cho từng ngành",
    items: [
      {
        name: "Khách sạn & Resort",
        description: "Quản lý phòng, F&B, spa và tour integrated",
        image: "/images/hotel.jpg",
        stats: "200+ khách sạn",
        features: ["PMS Integration", "Channel Manager", "Revenue Management"]
      },
      {
        name: "Nhà hàng & F&B",
        description: "Đặt bàn, order online và delivery management",
        image: "/images/restaurant.jpg", 
        stats: "500+ nhà hàng",
        features: ["Table Management", "Kitchen Display", "Loyalty Program"]
      },
      {
        name: "Tour & Travel",
        description: "Booking tour, vé máy bay và combo packages",
        image: "/images/travel.jpg",
        stats: "100+ tour operator", 
        features: ["Package Builder", "Supplier Network", "Dynamic Pricing"]
      },
      {
        name: "Spa & Wellness",
        description: "Đặt lịch treatment, membership và retail",
        image: "/images/spa.jpg",
        stats: "150+ spa center",
        features: ["Therapist Scheduling", "Membership Management", "Inventory Control"]
      },
      {
        name: "Giải trí & Thể thao",
        description: "Booking sân, event tickets và group activities", 
        image: "/images/entertainment.jpg",
        stats: "80+ venues",
        features: ["Facility Booking", "Event Management", "Group Reservations"]
      },
      {
        name: "Y tế & Chăm sóc",
        description: "Đặt lịch khám, telemedicine và health packages",
        image: "/images/healthcare.jpg",
        stats: "50+ clinics",
        features: ["Doctor Scheduling", "Patient Records", "Telemedicine"]
      }
    ]
  },

  testimonials: {
    title: "Được Tin Dùng Bởi Các Nhà Lãnh Đạo",
    subtitle: "Khách hàng của chúng tôi đã đạt được những kết quả vượt trội. Hãy xem họ nói gì về sự hợp tác với TripC Solutions.",
    items: [
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
    ]
  },

  cta: {
    title: "Sẵn sàng chuyển đổi số?",
    subtitle: "Bắt đầu hành trình thành công cùng TripC Solutions",
    description: "Hơn 1000+ doanh nghiệp đã tin tưởng. Đừng để đối thủ vượt xa bạn trong cuộc đua số hóa.",
    buttons: {
      primary: "Đăng ký dùng thử miễn phí",
      secondary: "Đặt lịch tư vấn"
    },
    features: [
      "✅ Dùng thử 30 ngày miễn phí",
      "✅ Setup và training miễn phí", 
      "✅ Hỗ trợ 24/7 bằng tiếng Việt",
      "✅ Không ràng buộc hợp đồng dài hạn"
    ]
  }
};

export default homeContent;
