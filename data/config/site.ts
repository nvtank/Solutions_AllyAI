// data/config/site.ts
export const siteConfig = {
  name: "TripC Solutions",
  description: "TripC Solutions cung cấp nền tảng booking đa dịch vụ cho du lịch, ẩm thực, giải trí. Giải pháp chuyển đổi số toàn diện cho doanh nghiệp.",
  url: "https://solutions.tripc.ai",
  ogImage: "/images/og-image.jpg",
  logo: "/images/logo.png",
  favicon: "/favicon.ico",
  
  // SEO metadata
  metadata: {
    title: {
      default: "TripC Solutions - Nền tảng đặt chỗ đa dịch vụ",
      template: "%s | TripC Solutions"
    },
    description: "TripC Solutions cung cấp nền tảng booking đa dịch vụ cho du lịch, ẩm thực, giải trí. Giải pháp chuyển đổi số toàn diện cho doanh nghiệp.",
    keywords: [
      "booking platform",
      "travel booking", 
      "hotel reservation",
      "tour booking",
      "restaurant reservation",
      "entertainment booking",
      "digital transformation",
      "TripC Solutions",
      "đặt chỗ trực tuyến",
      "du lịch",
      "khách sạn", 
      "nhà hàng",
      "giải trí"
    ]
  },

  // Company information
  company: {
    name: "TripC Solutions",
    address: {
      street: "123 Innovation Drive",
      city: "Ho Chi Minh City", 
      country: "VN"
    },
    contact: {
      phone: "+84-xxx-xxx-xxx",
      email: "bd@tripc.ai",
      supportEmail: "support@tripc.ai"
    },
    social: {
      facebook: "https://www.facebook.com/tripcsolutions",
      linkedin: "https://www.linkedin.com/company/tripcsolutions",
      twitter: "@tripcsolutions"
    }
  },

  // Navigation
  nav: {
    main: [
      { name: "Trang chủ", href: "/" },
      { name: "Giới thiệu", href: "/about" },
      { name: "Giải pháp", href: "/solutions" },
      { name: "Mẫu demo", href: "/templates" },
      { name: "Liên hệ", href: "/contact" }
    ],
    footer: [
      {
        title: "Giải pháp",
        links: [
          { name: "Nền tảng Booking", href: "/solutions#booking" },
          { name: "Ứng dụng Merchant", href: "/solutions#merchant" },
          { name: "Hệ thống thanh toán", href: "/solutions#payment" },
          { name: "Báo cáo & Phân tích", href: "/solutions#analytics" }
        ]
      },
      {
        title: "Công ty",
        links: [
          { name: "Giới thiệu", href: "/about" },
          { name: "Tin tức", href: "/news" },
          { name: "Tuyển dụng", href: "/careers" },
          { name: "Liên hệ", href: "/contact" }
        ]
      },
      {
        title: "Hỗ trợ",
        links: [
          { name: "Tài liệu", href: "/docs" },
          { name: "FAQ", href: "/faq" },
          { name: "Hỗ trợ kỹ thuật", href: "/support" },
          { name: "API", href: "/api" }
        ]
      }
    ]
  }
};

export default siteConfig;
