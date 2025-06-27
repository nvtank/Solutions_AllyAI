// data/content/solutions.ts
export const solutionsData = [
  {
    id: "01",
    title: "Nền tảng Booking Đa dịch vụ",
    subtitle: "Giải pháp đặt chỗ toàn diện",
    description: "Hệ thống booking tích hợp đầy đủ cho khách sạn, tour, nhà hàng, spa và các dịch vụ giải trí. Quản lý tập trung, thanh toán linh hoạt.",
    color: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50",
    
    features: [
      "Booking đa kênh (Web, Mobile, API)",
      "Quản lý inventory real-time", 
      "Thanh toán đa phương thức",
      "Báo cáo analytics chi tiết",
      "Tích hợp PMS/Channel Manager",
      "Hỗ trợ đa ngôn ngữ & tiền tệ"
    ],

    subProducts: [
      {
        name: "TripC Booking Engine",
        description: "Widget booking tích hợp website",
        buttonText: "Xem demo",
        buttonLink: "https://demo.booking.tripc.ai"
      },
      {
        name: "TripC Admin Dashboard", 
        description: "Bảng điều khiển quản lý toàn diện",
        buttonText: "Truy cập demo",
        buttonLink: "https://admin.tripc.ai/demo"
      }
    ],

    stats: {
      value: "500K+",
      label: "Booking/tháng"
    },

    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "AWS"],
    integrations: ["Stripe", "VNPay", "Momo", "ZaloPay", "Opera PMS"]
  },

  {
    id: "02", 
    title: "Ứng dụng Merchant",
    subtitle: "Quản lý kinh doanh di động",
    description: "Ứng dụng mobile cho chủ doanh nghiệp quản lý booking, khách hàng, doanh thu và vận hành kinh doanh mọi lúc mọi nơi.",
    color: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50",

    features: [
      "Quản lý booking realtime",
      "Chat với khách hàng",
      "Báo cáo doanh thu",
      "Quản lý nhân viên",
      "Push notification",
      "Offline mode support"
    ],

    stats: {
      value: "95%",
      label: "Satisfaction rate"
    },

    appStoreLinks: {
      ios: "https://apps.apple.com/app/tripc-merchant",
      android: "https://play.google.com/store/apps/details?id=ai.tripc.merchant"
    }
  },

  {
    id: "03",
    title: "Hệ thống Thanh toán",
    subtitle: "Payment Gateway tối ưu",
    description: "Giải pháp thanh toán an toàn, nhanh chóng với tích hợp đa cổng thanh toán, phí thấp và settlement tự động.",
    color: "from-green-500 to-emerald-500", 
    bgGradient: "from-green-50 to-emerald-50",

    features: [
      "Tích hợp 15+ payment gateway",
      "Smart routing tối ưu phí",
      "Fraud detection AI",
      "Settlement tự động",
      "Multi-currency support",
      "PCI DSS compliance"
    ],

    subProducts: [
      {
        name: "TripC Checkout",
        description: "Trang thanh toán tối ưu conversion",
        buttonText: "Xem demo",
        buttonLink: "https://checkout.tripc.ai/demo"
      }
    ],

    stats: {
      value: "99.9%",
      label: "Uptime SLA"
    }
  },

  {
    id: "04",
    title: "Business Intelligence",
    subtitle: "Báo cáo & Phân tích dữ liệu",
    description: "Dashboard phân tích kinh doanh với AI insights, dự báo xu hướng và báo cáo real-time giúp tối ưu hóa doanh thu.",
    color: "from-orange-500 to-red-500",
    bgGradient: "from-orange-50 to-red-50",

    features: [
      "Real-time dashboard",
      "AI-powered insights", 
      "Revenue forecasting",
      "Customer analytics",
      "Performance benchmarking",
      "Custom report builder"
    ],

    subProducts: [
      {
        name: "TripC Analytics",
        description: "Bảng điều khiển phân tích toàn diện",
        buttonText: "Xem báo cáo mẫu",
        buttonLink: "https://analytics.tripc.ai/sample"
      }
    ],

    stats: {
      value: "25%",
      label: "Tăng doanh thu TB"
    }
  },

  {
    id: "05",
    title: "Tích hợp API & Webhook",
    subtitle: "Kết nối hệ sinh thái",
    description: "Bộ API đầy đủ và webhook system cho phép tích hợp với mọi hệ thống, từ CRM, ERP đến các ứng dụng bên thứ ba.",
    color: "from-indigo-500 to-purple-500",
    bgGradient: "from-indigo-50 to-purple-50",

    features: [
      "RESTful API đầy đủ",
      "GraphQL support", 
      "Webhook real-time",
      "API rate limiting",
      "SDK cho nhiều ngôn ngữ",
      "Comprehensive documentation"
    ],

    subProducts: [
      {
        name: "API Documentation",
        description: "Tài liệu API chi tiết với examples",
        buttonText: "Xem docs",
        buttonLink: "https://docs.tripc.ai"
      },
      {
        name: "API Playground",
        description: "Test API trực tiếp online",
        buttonText: "Thử nghiệm",
        buttonLink: "https://api.tripc.ai/playground"
      }
    ],

    stats: {
      value: "500+",
      label: "API endpoints"
    }
  }
];

export default solutionsData;
