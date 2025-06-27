import { Building2, Factory, Cog, Zap, Target, ExternalLink, Smartphone } from 'lucide-react';

export interface SubProduct {
  title: string;
  description: string;
  buttonText: string;
  buttonLink?: string;
  hasAppIcons?: boolean;
}

export interface Solution {
  id: string;
  icon: JSX.Element;
  title: string;
  subtitle: string;
  description: string;
  subProducts?: SubProduct[];
  features?: string[];
  color: string;
  bgGradient: string;
  stats: {
    value: string;
    label: string;
  };
}

export const SOLUTIONS_DATA: Solution[] = [
  {
    id: '01',
    icon: <Building2 className="w-10 h-10" />,
    title: "Nền tảng Booking đa dịch vụ",
    subtitle: "Số hóa toàn bộ quy trình bán dịch vụ du lịch",
    description: "Nền tảng giúp doanh nghiệp số hóa toàn bộ quy trình bán dịch vụ du lịch: từ lưu trú, tour, voucher tour, vé khu vui chơi đến dịch vụ di chuyển. Tất cả trong một hệ thống quản lý thống nhất.",
    subProducts: [
      {
        title: "Website booking dịch vụ",
        description: "Cung cấp giao diện đặt dịch vụ trực tuyến, thân thiện với người dùng, hỗ trợ thanh toán, xem thông tin và quản lý đơn đặt.",
        buttonText: "Xem ngay",
        buttonLink: "https://example.com/booking" // Link từ proposal
      },
      {
        title: "Website quản trị dành cho Admin",
        description: "Cho phép đối tác cập nhật thông tin dịch vụ, điều chỉnh giá, quản lý khuyến mãi, theo dõi đơn hàng và doanh thu.",
        buttonText: "Xem ngay",
        buttonLink: "https://example.com/admin" // Link từ proposal
      },
      {
        title: "TripC Merchant App",
        description: "Ứng dụng dành cho nhân viên tại cơ sở (khách sạn, điểm đón tour, khu vui chơi...) giúp xác nhận dịch vụ, quét mã QR và cập nhật trạng thái đơn hàng ngay trên điện thoại.",
        buttonText: "Tải ứng dụng",
        hasAppIcons: true
      }
    ],
    color: "from-blue-600 to-indigo-600",
    bgGradient: "from-blue-50 to-indigo-50",
    stats: { value: "40%", label: "Tăng hiệu quả đặt dịch vụ" }
  },
  {
    id: '02',
    icon: <Factory className="w-10 h-10" />,
    title: "Nền tảng Booking bán vé Khu vui chơi, khu du lịch",
    subtitle: "Tự động hóa quy trình bán vé trực tuyến",
    description: "Nền tảng hỗ trợ các khu vui chơi, điểm du lịch bán vé trực tuyến với giao diện thân thiện, đặt vé nhanh chóng, hiển thị rõ thông tin chương trình, thời gian, giá vé và ưu đãi. Giúp tự động hóa quy trình đặt vé, kiểm soát số lượng khách, tích hợp thanh toán và cung cấp báo cáo theo thời gian thực – nâng cao trải nghiệm khách hàng và tối ưu vận hành cho doanh nghiệp.",
    color: "from-emerald-600 to-teal-600",
    bgGradient: "from-emerald-50 to-teal-50",
    stats: { value: "60%", label: "Tiết kiệm chi phí vận hành" }
  },
  {
    id: '03',
    icon: <Cog className="w-10 h-10" />,
    title: "Nền tảng Booking bán vé Tàu du lịch",
    subtitle: "Đặt vé thông minh cho tàu du lịch và phà",
    description: "Giải pháp đặt chỗ linh hoạt cho các loại hình dịch vụ giải trí – từ nhà hàng, spa đến karaoke và sân thể thao. Nền tảng hỗ trợ tối ưu hoá trải nghiệm người dùng nhờ tính năng gợi ý khung giờ trống, nhắc lịch tự động và quản lý khách hàng hiệu quả, giúp nâng cao tỷ lệ sử dụng dịch vụ và tối ưu vận hành.",
    color: "from-purple-600 to-pink-600",
    bgGradient: "from-purple-50 to-pink-50",
    stats: { value: "99.9%", label: "Tỷ lệ vận hành ổn định" }
  },
  {
    id: '04',
    icon: <Zap className="w-10 h-10" />,
    title: "Nền tảng Đặt chỗ Nhà hàng - Spa - Karaoke - Sân thể thao",
    subtitle: "Quản lý đặt chỗ thông minh cho dịch vụ giải trí",
    description: "Giải pháp đặt chỗ linh hoạt cho các loại hình dịch vụ giải trí – từ nhà hàng, spa đến karaoke và sân thể thao. Nền tảng hỗ trợ tối ưu hoá trải nghiệm người dùng nhờ tính năng gợi ý khung giờ trống, nhắc lịch tự động và quản lý khách hàng hiệu quả, giúp nâng cao tỷ lệ sử dụng dịch vụ và tối ưu vận hành.",
    color: "from-yellow-600 to-orange-600",
    bgGradient: "from-yellow-50 to-orange-50",
    stats: { value: "35%", label: "Tăng tỷ lệ sử dụng dịch vụ" }
  },
  {
    id: '05',
    icon: <Target className="w-10 h-10" />,
    title: "Nền tảng đặt phòng lưu trú",
    subtitle: "Khám phá và so sánh giá phòng từ nhiều nguồn",
    description: "Nền tảng hỗ trợ người dùng khám phá các điểm đến phổ biến, so sánh giá phòng từ nhiều nguồn khác nhau và điều hướng đến các trang đặt phòng phù hợp. Với giao diện thân thiện, trải nghiệm tìm kiếm mượt mà và thông tin minh bạch, hệ thống giúp người dùng tiết kiệm thời gian, lựa chọn tối ưu cho mỗi chuyến đi.",
    color: "from-red-600 to-rose-600",
    bgGradient: "from-red-50 to-rose-50",
    stats: { value: "95%", label: "Mức độ hài lòng khách hàng" }
  }
];


export const TOTAL_CARDS = SOLUTIONS_DATA.length;
export const CARD_WIDTH = 100; 
export const ANIMATION_DURATION = 0.6;
