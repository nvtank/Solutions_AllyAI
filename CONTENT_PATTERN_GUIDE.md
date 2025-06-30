# 📝 Hướng dẫn sử dụng Content Management Pattern

## 🎯 Cách hoạt động

Sau khi refactor, website bây giờ sử dụng **Data-Driven Pattern**:

### ✅ ĐÃ REFACTOR (Sẽ tự động cập nhật):
- `HeroSection.tsx` → sử dụng `homeContent.hero`
- `SolutionsSection.tsx` → sử dụng `solutionsData`

### ⏳ CHƯA REFACTOR (Cần làm tiếp):
- `AboutContent.tsx` → cần dùng `aboutContent`
- `ContactForm.tsx` → cần dùng `contactContent`
- `Story2.tsx` → cần dùng `homeContent.story`
- `Footer.tsx` → cần dùng `siteConfig`

## 🔧 Cách sửa content

### 1. Sửa tiêu đề Hero Section:
```typescript
// File: data/content/home.ts
export const homeContent = {
  hero: {
    title: "Nền tảng Booking Đa dịch vụ", // ← Sửa ở đây
    subtitle: "Giải pháp chuyển đổi số toàn diện", // ← Sửa ở đây
    description: "Mô tả mới...", // ← Sửa ở đây
    cta: {
      primary: "Dùng thử miễn phí", // ← Text nút
      secondary: "Xem demo" // ← Text nút phụ
    }
  }
}
```

### 2. Sửa thông tin công ty:
```typescript
// File: data/config/site.ts
export const siteConfig = {
  name: "TripC Solutions", // ← Tên công ty
  description: "Mô tả công ty...", // ← SEO description
  company: {
    contact: {
      phone: "+84-xxx-xxx-xxx", // ← Số điện thoại
      email: "bd@tripc.ai" // ← Email
    }
  }
}
```

### 3. Thêm/sửa giải pháp:
```typescript
// File: data/content/solutions.ts
export const solutionsData = [
  {
    id: "01",
    title: "Tên giải pháp mới", // ← Sửa ở đây
    description: "Mô tả chi tiết...", // ← Sửa ở đây
    features: [
      "Tính năng 1", // ← Thêm/sửa tính năng
      "Tính năng 2"
    ]
  }
]
```

## 🚀 Test thay đổi

1. **Sửa file data**: Ví dụ sửa `data/content/home.ts`
2. **Lưu file**: Ctrl+S
3. **Kiểm tra website**: Tự động reload với nội dung mới

## 📁 Cấu trúc files

```
data/
├── config/
│   └── site.ts           # Cấu hình website, SEO, company info
├── content/
│   ├── home.ts          # Trang chủ: hero, features, testimonials
│   ├── about.ts         # Trang giới thiệu: story, team, mission
│   ├── contact.ts       # Trang liên hệ: form config, contact info
│   └── solutions.ts     # Dữ liệu giải pháp & sản phẩm
└── index.ts             # Export tất cả + Type definitions
```

## 🎯 Ví dụ thực tế

### Thay đổi slogan chính:
1. Mở: `data/content/home.ts`
2. Tìm: `hero.title`
3. Sửa: `"Nền tảng Booking Đa dịch vụ"` → `"Giải pháp Booking #1 Việt Nam"`
4. Lưu → Website tự động cập nhật!

### Thêm tính năng mới:
1. Mở: `data/content/solutions.ts`
2. Tìm solution muốn sửa
3. Thêm vào `features` array
4. Lưu → Website hiển thị tính năng mới!

## ⚡ Lưu ý quan trọng

- **TypeScript sẽ báo lỗi** nếu bạn sai cấu trúc data
- **Hot reload** sẽ tự động cập nhật trang
- **Không cần restart server** khi sửa content
- **Git sẽ track changes** rõ ràng cho từng thay đổi content

## 🔄 Refactor các component còn lại

Để hoàn thiện pattern, cần refactor thêm:

1. **Story2.tsx**: Sử dụng `homeContent.story.images`
2. **AboutHero.tsx**: Sử dụng `aboutContent.hero`
3. **ContactForm.tsx**: Sử dụng `contactContent.formConfig`
4. **Footer.tsx**: Sử dụng `siteConfig.nav.footer`

---

**🎉 Kết quả: Quản lý content như một CMS chuyên nghiệp!**
