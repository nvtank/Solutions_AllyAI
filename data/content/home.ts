// data/content/home.ts
export const homeContent = {
  hero: {
    title: "TRIPC SOLUTIONS",
    subtitle: "Chuyển Đổi Số Cho Doanh Nghiệp Du Lịch - Dịch Vụ",

    cta: {
      primary: "Bắt đầu ngay",
      secondary: "Xem các mẫu"
    },

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
    title: "Khách hàng nói gì về chúng tôi",
    subtitle: "Những câu chuyện thành công thực tế",
    items: [
      {
        name: "Anh Nguyễn Văn A",
        position: "Giám đốc",
        company: "Resort Paradise Bay",
        content: "Sau 3 tháng sử dụng TripC, doanh thu tăng 35% và thời gian xử lý booking giảm 70%. Đội ngũ support rất chuyên nghiệp.",
        rating: 5,
        image: "/images/testimonials/customer1.jpg"
      },
      {
        name: "Chị Trần Thị B",
        position: "Chủ nhà hàng",
        company: "Chuỗi nhà hàng Sài Gòn Taste",
        content: "Hệ thống đặt bàn online giúp chúng tôi quản lý khách hàng hiệu quả hơn. No-show giảm 60%, customer satisfaction tăng đáng kể.",
        rating: 5,
        image: "/images/testimonials/customer2.jpg"
      },
      {
        name: "Anh Lê Văn C", 
        position: "CEO",
        company: "VietTravel Tours",
        content: "TripC giúp chúng tôi tự động hóa 80% quy trình booking. Có thể focus vào việc phát triển sản phẩm tour thay vì xử lý admin.",
        rating: 5,
        image: "/images/testimonials/customer3.jpg"
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
