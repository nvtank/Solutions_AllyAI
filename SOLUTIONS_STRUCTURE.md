# Solution Cards Structure Overview

## Cấu trúc file mới đã được chia nhỏ:

### 📁 components/home/solutions/
```
├── SolutionCard.tsx              # Component wrapper chính
├── SolutionCardContent.tsx       # Switch component để chọn content phù hợp
├── SolutionVisual.tsx           # Switch component để chọn visual phù hợp
├── AppStoreIcons.tsx            # Component App Store icons
├── SolutionsHeader.tsx          # Header section
├── ProgressBar.tsx              # Progress bar
├── SolutionsCTA.tsx            # Call-to-action section
├── solutionsData.tsx           # Data và types
├── useAnimations.ts            # Animations hook
├── useFloatingParticles.ts     # Floating particles hook
├── index.ts                    # Export tất cả components
└── cards/                      # 📁 Thư mục chứa các card riêng biệt
    ├── SolutionCard01.tsx      # Visual cho solution 01 (Booking Platform)
    ├── SolutionCard02.tsx      # Visual cho solution 02 (Ticket Platform) 
    ├── SolutionCard03.tsx      # Visual cho solution 03 (Entertainment)
    ├── SolutionCard04.tsx      # Visual cho solution 04 (Search Platform)
    ├── SolutionCardDefault.tsx # Visual mặc định cho các solution khác
    ├── SolutionCardContent01.tsx      # Content layout cho solution 01
    ├── SolutionCardContent02.tsx      # Content layout cho solution 02
    ├── SolutionCardContent03.tsx      # Content layout cho solution 03
    ├── SolutionCardContent04.tsx      # Content layout cho solution 04
    ├── SolutionCardContentDefault.tsx # Content layout mặc định
    └── index.ts                # Export các card components
```

## Luồng hoạt động:

1. **SolutionsSection.tsx** → Render các SolutionCard
2. **SolutionCard.tsx** → Wrapper với background, particles, navigation hint
3. **SolutionCardContent.tsx** → Switch để chọn content layout phù hợp
4. **SolutionCardContent01-04.tsx** → Layout 3 cột riêng biệt cho từng solution
5. **SolutionCard01-04.tsx** → Visual riêng biệt cho từng solution
6. **AppStoreIcons.tsx** → Component tái sử dụng cho app store buttons

## Lợi ích:

- ✅ **Tách biệt hoàn toàn**: Mỗi solution có content và visual riêng
- ✅ **Dễ tùy chỉnh**: Thay đổi layout/content 1 solution không ảnh hưởng solution khác  
- ✅ **Tái sử dụng**: Components có thể dùng ở nhiều nơi
- ✅ **Mở rộng dễ dàng**: Thêm solution mới chỉ cần tạo 2 file tương ứng
- ✅ **Specific features**: Mỗi solution có features riêng phù hợp
- ✅ **Hiệu ứng giữ nguyên**: Tất cả animations và floating particles vẫn hoạt động

## Đặc điểm riêng của từng solution:

### Solution 01 (Booking Platform):
- **Content**: Có subProducts với AppStoreIcons
- **Visual**: Desktop + Mobile app mockup
- **Features**: Website booking, Admin portal, Merchant app

### Solution 02 (Ticket Platform):
- **Content**: Features list về quản lý vé
- **Visual**: Ticket system dashboard
- **Features**: Quản lý vé real-time, thanh toán, kiểm soát khách

### Solution 03 (Entertainment):
- **Content**: Features list về booking giải trí
- **Visual**: Entertainment booking interface
- **Features**: Đặt chỗ linh hoạt, gợi ý khung giờ, nhắc lịch

### Solution 04 (Search Platform):
- **Content**: Features list về so sánh tìm kiếm
- **Visual**: Search comparison interface
- **Features**: So sánh giá, khám phá điểm đến, giao diện thân thiện

## Cách thêm solution mới:

1. Tạo `SolutionCard05.tsx` trong thư mục `cards/`
2. Tạo `SolutionCardContent05.tsx` trong thư mục `cards/`
3. Export trong `cards/index.ts`
4. Thêm case '05' trong `SolutionCardContent.tsx`
5. Thêm case '05' trong `SolutionVisual.tsx`
6. Thêm data solution mới vào `solutionsData.tsx`
