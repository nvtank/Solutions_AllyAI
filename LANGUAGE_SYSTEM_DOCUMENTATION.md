# Hệ Thống Đa Ngôn Ngữ (Multi-Language System)

## Tổng Quan (Overview)

Hệ thống đa ngôn ngữ đã được triển khai cho website TripC Solutions với đầy đủ tính năng chuyển đổi giữa Tiếng Việt và Tiếng Anh.

## Cấu Trúc Thư Mục (Directory Structure)

```
data/
  locales/
    vi.ts          # Tiếng Việt translations
    en.ts          # English translations
    
contexts/
  LanguageContext.tsx   # React Context cho ngôn ngữ

components/
  ui/
    LanguageToggle.tsx  # Component chuyển đổi ngôn ngữ
```

## Các File Chính (Main Files)

### 1. LanguageContext.tsx
```tsx
// Context quản lý trạng thái ngôn ngữ global
// Tự động lưu language preference vào localStorage
// Cung cấp function t() để access translations
```

### 2. data/locales/vi.ts
```tsx
export const vi = {
  nav: { ... },      // Navigation menu
  hero: { ... },     // Hero section
  benefits: { ... }, // Benefits section
  brand: { ... },    // Brand/Partners section
  // ... tất cả text content
};
```

### 3. data/locales/en.ts
```tsx
export const en = {
  nav: { ... },      // Navigation menu (English)
  hero: { ... },     // Hero section (English)
  benefits: { ... }, // Benefits section (English)
  brand: { ... },    // Brand/Partners section (English)
  // ... all text content in English
};
```

## Cách Sử Dụng (How to Use)

### 1. Trong Component
```tsx
'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function MyComponent() {
  const { t, language, setLanguage } = useLanguage();

  return (
    <div>
      {/* Simple text */}
      <h1>{t('hero.title')}</h1>
      
      {/* Nested object */}
      <button>{t('hero.cta.primary')}</button>
      
      {/* Array access */}
      {t('hero.stats').map((stat, index) => (
        <div key={index}>
          <span>{stat.value}</span>
          <span>{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
```

### 2. Chuyển Đổi Ngôn Ngữ
```tsx
// Manual language switch
const { setLanguage } = useLanguage();
setLanguage('en'); // Chuyển sang English
setLanguage('vi'); // Chuyển sang Tiếng Việt

// Using LanguageToggle component
import LanguageToggle from '@/components/ui/LanguageToggle';
<LanguageToggle /> // Dropdown với flag icons
```

## Cấu Trúc Dữ Liệu Translation (Translation Data Structure)

```typescript
{
  // Navigation
  nav: {
    logo: string,
    home: string,
    about: string,
    contact: string,
    templates: string
  },

  // Hero Section  
  hero: {
    title: string,
    subtitle: string,
    description: string,
    freeAI: string,
    cta: {
      primary: string,
      secondary: string
    },
    stats: Array<{
      value: string,
      label: string
    }>,
    features?: Array<{
      text: string
    }>
  },

  // Benefits Section
  benefits: {
    title: string,
    subtitle: string,
    items: Array<{
      title: string,
      description: string
    }>
  },

  // Brand Section
  brand: {
    title: string,
    subtitle: string
  },

  // How It Works Section
  howItWorks: {
    title: string,
    subtitle: string,
    steps: Array<{
      title: string,
      description: string
    }>
  },

  // Results Section
  results: {
    title: string,
    subtitle: string,
    stats: Array<{
      value: string,
      label: string,
      description: string
    }>,
    testimonials: {
      title: string,
      items: Array<{
        quote: string,
        author: string,
        position: string,
        company: string
      }>
    }
  },

  // Why Choose Us Section
  whyChooseUs: {
    title: string,
    subtitle: string,
    features: Array<{
      title: string,
      description: string
    }>
  },

  // Footer
  footer: {
    description: string,
    quickLinksTitle: string,
    quickLinks: Array<{
      name: string,
      href: string
    }>,
    contact: {
      title: string,
      phone: string,
      email: string,
      address: string
    },
    policies: {
      title: string,
      items: Array<{
        name: string,
        href: string
      }>
    },
    copyright: string
  },

  // Contact Form
  contact: {
    form: {
      name: string,
      email: string,
      phone: string,
      message: string,
      submit: string,
      submitting: string,
      success: string,
      nameRequired: string,
      emailRequired: string,
      emailInvalid: string,
      phoneRequired: string,
      messageRequired: string
    }
  },

  // Common texts
  common: {
    readMore: string,
    readLess: string,
    learnMore: string,
    getStarted: string,
    contactNow: string,
    viewDemo: string,
    close: string,
    loading: string,
    error: string,
    tryAgain: string
  }
}
```

## Components Đã Được Cập Nhật (Updated Components)

### ✅ Completed:
1. **HeroSection.tsx** - Hero section với title, subtitle, description, CTA buttons, stats
2. **Benefits.tsx** - Benefits section với title, subtitle và benefit items
3. **Brand.tsx** - Brand/Partners section với title và subtitle
4. **WhyChooseUs.tsx** - Why choose us section với features
5. **Navbar.tsx** - Navigation menu (đã có sẵn)
6. **Footer.tsx** - Footer section (đã có sẵn)

### 🔄 Cần Cập Nhật (Needs Update):
1. **HowItWorks.tsx** - How it works section
2. **ResultsShowcase.tsx** - Results và testimonials section
3. **Contact components** - Contact form và related components
4. **About page components**
5. **Templates page components**

## Tính Năng (Features)

### ✅ Đã Hoàn Thành:
- [x] Context setup với localStorage persistence
- [x] LanguageToggle component với flag icons
- [x] Translation function với dot notation access
- [x] Complete Vietnamese và English translations
- [x] Hero section multi-language support
- [x] Benefits section multi-language support
- [x] Brand section multi-language support
- [x] WhyChooseUs section multi-language support
- [x] Navbar multi-language support
- [x] Footer multi-language support

### 🔄 Đang Phát Triển:
- [ ] HowItWorks section integration
- [ ] Results section integration
- [ ] Contact form validation messages
- [ ] About page content
- [ ] Templates page content
- [ ] Error handling cho missing translations
- [ ] Loading states cho language switching

## Quy Tắc Đóng Góp (Contribution Guidelines)

### Khi Thêm Text Mới:
1. **Luôn thêm vào cả 2 file**: `vi.ts` và `en.ts`
2. **Giữ cấu trúc giống nhau** trong cả 2 file
3. **Sử dụng naming convention** rõ ràng:
   ```typescript
   section.subsection.item
   // Ví dụ: hero.cta.primary, benefits.items.0.title
   ```
4. **Test trên cả 2 ngôn ngữ** trước khi commit

### Best Practices:
- Sử dụng meaningful keys thay vì generic names
- Group related content together
- Keep translations consistent in tone
- Avoid hardcoded text trong components
- Use TypeScript types cho translation objects

## Testing

### Cách Test Language System:
1. Mở website
2. Click vào language toggle (🇻🇳/🇺🇸)
3. Verify tất cả text đã thay đổi
4. Check localStorage đã lưu preference
5. Refresh page - language preference should persist
6. Test trên different pages

## Troubleshooting

### Common Issues:
1. **Translation not found**: Check key exists trong cả vi.ts và en.ts
2. **Language not persisting**: Check localStorage trong browser
3. **Component not updating**: Ensure component uses useLanguage hook
4. **TypeScript errors**: Check translation structure matches interface

## Future Enhancements

### Có Thể Thêm:
- [ ] More languages (Japanese, Korean, etc.)
- [ ] RTL language support
- [ ] Translation loading from API
- [ ] Translation management dashboard
- [ ] Automatic language detection based on browser
- [ ] SEO optimization cho multiple languages
- [ ] URL-based language routing (/en/, /vi/)

---

**Created by**: Development Team  
**Last Updated**: July 11, 2025  
**Version**: 1.0.0
