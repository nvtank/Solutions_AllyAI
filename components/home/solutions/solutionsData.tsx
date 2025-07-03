import { 
  Smartphone, 
  Globe, 
  Database, 
  CreditCard, 
  BarChart3,
  Users,
  Calendar,
  Shield
} from 'lucide-react';

export { solutionsData } from '@/data';

export const TOTAL_CARDS = 5;
export const CARD_WIDTH = 100;
export const ANIMATION_DURATION = 0.8;

export interface Solution {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  bgGradient: string;
  icon: React.ReactNode;
  features?: string[];
  subProducts?: Array<{
    title: string;
    description: string;
    buttonText: string;
    buttonLink?: string;
    hasAppIcons?: boolean;
  }>;
  stats: {
    value: string;
    label: string;
  };
}

export const solutionsWithIcons = [
  {
    id: "01",
    title: "Nền tảng Booking Đa dịch vụ",
    subtitle: "Giải pháp số hóa toàn diện",
    description: "Nền tảng giúp doanh nghiệp số hóa toàn bộ quy trình bán dịch vụ du lịch trong một hệ thống quản lý thống nhất.",
    color: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50",
    icon: <Globe className="w-8 h-8" />,
    
    subProducts: [
      {
        title: "Website booking dịch vụ",
        description: "Cung cấp giao diện đặt dịch vụ trực tuyến, thân thiện với người dùng, hỗ trợ thanh toán, xem thông tin và quản lý đơn đặt.",
        buttonText: "Xem ngay",
        buttonLink: "https://booking.tripc.ai"
      },
      {
        title: "Website quản trị dành cho Admin",
        description: "Cho phép đối tác cập nhật thông tin dịch vụ, điều chỉnh giá, quản lý khuyến mãi, theo dõi đơn hàng và doanh thu.",
        buttonText: "Xem ngay",
        buttonLink: "https://admin.tripc.ai"
      },
      {
        title: "TripC Merchant App",
        description: "Ứng dụng dành cho nhân viên tại cơ sở (khách sạn, điểm đón tour, khu vui chơi...) giúp xác nhận dịch vụ, quét mã QR và cập nhật trạng thái đơn hàng ngay trên điện thoại.",
        buttonText: "",
        hasAppIcons: true
      }
    ],

    stats: {
      value: "500K+",
      label: "Booking/tháng"
    }
  },

  {
    id: "02", 
    title: "Nền tảng Booking Bán vé khu vui chơi & Du lịch",
    subtitle: "Giải pháp bán vé trực tuyến",
    description: "Nền tảng hỗ trợ các khu vui chơi, điểm du lịch bán vé trực tuyến với giao diện thân thiện, đặt vé nhanh chóng, hiển thị rõ thông tin chương trình, thời gian, giá vé và ưu đãi. Giúp tự động hóa quy trình đặt vé, kiểm soát số lượng khách, tích hợp thanh toán và cung cấp báo cáo theo thời gian thực – nâng cao trải nghiệm khách hàng và tối ưu vận hành cho doanh nghiệp.",
    color: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50",
    icon: <Calendar className="w-8 h-8" />,

    stats: {
      value: "100K+",
      label: "Vé bán/tháng"
    }
  },

  {
    id: "03",
    title: "Nền tảng Booking bán vé tàu du lịch, vé phà",
    subtitle: "Booking linh hoạt đa ngành",
    description: "Giải pháp Booking linh hoạt cho các loại hình dịch vụ giải trí",
    color: "from-green-500 to-emerald-500", 
    bgGradient: "from-green-50 to-emerald-50",
    icon: <Users className="w-8 h-8" />,

    stats: {
      value: "95%",
      label: "Tỷ lệ sử dụng"
    }
  },

  {
    id: "04",
    title: "Nền tảng đặt chỗ nhà hàng, spa, karaoke & sân thể thao",
    subtitle: "Đặt chỗ linh hoạt đa ngành", 
    description: "Giải pháp đặt chỗ linh hoạt cho các loại hình dịch vụ giải trí – từ nhà hàng, spa đến karaoke và sân thể thao. Nền tảng hỗ trợ tối ưu hoá trải nghiệm người dùng nhờ tính năng gợi ý khung giờ trống, nhắc lịch tự động và quản lý khách hàng hiệu quả, giúp nâng cao tỷ lệ sử dụng dịch vụ và tối ưu vận hành.",
    color: "from-orange-500 to-red-500",
    bgGradient: "from-orange-50 to-red-50", 
    icon: <Database className="w-8 h-8" />,

    stats: {
      value: "1M+",
      label: "Tìm kiếm/tháng"
    }
  },

  {
    id: "05",
    title: "Nền tảng đặt phòng lưu trú",
    subtitle: "Nền tảng so sánh & Tìm kiếm Lưu trú",
    description: "Nền tảng hỗ trợ người dùng khám phá các điểm đến phổ biến, so sánh giá phòng từ nhiều nguồn khác nhau và điều hướng đến các trang đặt phòng phù hợp. Với giao diện thân thiện, trải nghiệm tìm kiếm mượt mà và thông tin minh bạch, hệ thống giúp người dùng tiết kiệm thời gian, lựa chọn tối ưu cho mỗi chuyến đi.",
    color: "from-indigo-500 to-purple-500",
    bgGradient: "from-indigo-50 to-purple-50",
    icon: <Shield className="w-8 h-8" />,

    stats: {
      value: "500+",
      label: "API endpoints"
    }
  }
];
