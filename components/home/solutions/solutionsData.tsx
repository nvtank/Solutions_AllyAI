import { Building2, Factory, Cog, Zap, Target } from 'lucide-react';

export interface Solution {
  id: string;
  icon: JSX.Element;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
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
    title: "Nền tảng booking đa dịch vụ",
    subtitle: "Lưu trú, tour, voucher tour, vé khu vui chơi, di chuyển..",
    description: "Một hệ thống đặt chỗ toàn diện giúp người dùng dễ dàng tìm kiếm và đặt các dịch vụ như khách sạn, tour du lịch, voucher ưu đãi, vé tham quan và phương tiện di chuyển – tất cả chỉ trong một nền tảng duy nhất.",
    features: ["Đặt dịch vụ lưu trú", "Đặt tour trọn gói", "Tích hợp voucher ưu đãi", "Thanh toán linh hoạt"],
    color: "from-blue-600 to-indigo-600",
    bgGradient: "from-blue-50 to-indigo-50",
    stats: { value: "40%", label: "Tăng hiệu quả đặt dịch vụ" }
  },
  {
    id: '02',
    icon: <Factory className="w-10 h-10" />,
    title: "Nền tảng Booking bán vé Khu vui chơi, khu du lịch",
    subtitle: "Quản lý hoạt động thông minh",
    description: "Tự động hóa quy trình đặt vé, kiểm soát số lượng khách, tích hợp thanh toán và cung cấp báo cáo theo thời gian thực cho các khu vui chơi – giúp nâng cao trải nghiệm khách hàng và tối ưu vận hành.",
    features: ["Đặt vé trực tuyến", "Quản lý lượt khách", "Báo cáo doanh thu", "Tích hợp cổng thanh toán"],
    color: "from-emerald-600 to-teal-600",
    bgGradient: "from-emerald-50 to-teal-50",
    stats: { value: "60%", label: "Tiết kiệm chi phí vận hành" }
  },
  {
    id: '03',
    icon: <Cog className="w-10 h-10" />,
    title: "Nền tảng Booking bán vé Tàu du lịch, vé phà",
    subtitle: "Đặt vé thông minh",
    description: "Hệ thống hỗ trợ đặt vé tàu/phà linh hoạt với chức năng dự đoán nhu cầu, lên lịch chuyến đi, tối ưu hóa hành trình và đảm bảo thông tin minh bạch cho người dùng.",
    features: ["Lên lịch chuyến đi", "Theo dõi lịch trình", "Tối ưu hành khách", "Thanh toán trực tuyến"],
    color: "from-purple-600 to-pink-600",
    bgGradient: "from-purple-50 to-pink-50",
    stats: { value: "99.9%", label: "Tỷ lệ vận hành ổn định" }
  },
  {
    id: '04',
    icon: <Zap className="w-10 h-10" />,
    title: "Nền tảng Đặt chỗ Nhà hàng - Spa - Karaoke - Sân thể thao",
    subtitle: "Quản lý đặt chỗ thông minh",
    description: "Cung cấp giải pháp đặt chỗ tiện lợi cho các loại hình dịch vụ giải trí – từ nhà hàng, spa đến sân thể thao – với tính năng gợi ý khung giờ trống, nhắc lịch và quản lý khách hàng hiệu quả.",
    features: ["Đặt chỗ trực tuyến", "Nhắc lịch tự động", "Quản lý khung giờ", "Theo dõi lịch sử khách"],
    color: "from-yellow-600 to-orange-600",
    bgGradient: "from-yellow-50 to-orange-50",
    stats: { value: "35%", label: "Tăng tỷ lệ sử dụng dịch vụ" }
  },
  {
    id: '05',
    icon: <Target className="w-10 h-10" />,
    title: "Nền tảng đặt phòng lưu trú",
    subtitle: "Chất lượng và trải nghiệm được cá nhân hóa",
    description: "Ứng dụng trí tuệ nhân tạo trong việc đánh giá chất lượng dịch vụ, đề xuất phòng phù hợp theo sở thích và tối ưu quy trình đặt phòng nhanh chóng, hiệu quả.",
    features: ["Đề xuất phòng thông minh", "Theo dõi đánh giá", "Tối ưu giá đặt phòng", "Phân tích hành vi khách"],
    color: "from-red-600 to-rose-600",
    bgGradient: "from-red-50 to-rose-50",
    stats: { value: "95%", label: "Mức độ hài lòng khách hàng" }
  }
];


export const TOTAL_CARDS = SOLUTIONS_DATA.length;
export const CARD_WIDTH = 100; 
export const ANIMATION_DURATION = 0.6;
