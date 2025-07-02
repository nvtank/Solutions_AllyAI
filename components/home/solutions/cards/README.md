# Cards Directory

Thư mục này chứa các component riêng biệt cho từng solution card (01-05).

## Cấu trúc:

### Visual Components:
- `SolutionCard01.tsx` - Visual cho "Nền tảng Booking Đa dịch vụ"
- `SolutionCard02.tsx` - Visual cho "Nền tảng Booking Bán vé Sự kiện & Du lịch"
- `SolutionCard03.tsx` - Visual cho "Nền tảng Booking Dịch vụ Giải trí"
- `SolutionCard04.tsx` - Visual cho "Nền tảng So sánh & Tìm kiếm Lưu trú"
- `SolutionCardDefault.tsx` - Visual mặc định

### Content Components:
- `SolutionCardContent01.tsx` - Layout & content cho solution 01
- `SolutionCardContent02.tsx` - Layout & content cho solution 02
- `SolutionCardContent03.tsx` - Layout & content cho solution 03
- `SolutionCardContent04.tsx` - Layout & content cho solution 04
- `SolutionCardContentDefault.tsx` - Layout & content mặc định

## Đặc điểm:

Mỗi solution được tách thành 2 file:
1. **Visual**: Phần giao diện/mockup bên phải
2. **Content**: Toàn bộ layout 3 cột (header + features + visual)

Điều này cho phép:
- Tùy chỉnh riêng biệt cho từng solution
- Dễ dàng thay đổi layout hoặc visual
- Tái sử dụng components
- Mở rộng dễ dàng khi thêm solution mới
