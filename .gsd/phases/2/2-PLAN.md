---
phase: 2
plan: 2
wave: 1
---

# Plan 2.2: Hero Content & Entrance Animations

## Objective
Hiện thực hóa phần Hero chính với Typography cực đại và các hiệu ứng xuất hiện nghệ thuật để thu hút người dùng ngay từ cái nhìn đầu tiên.

## Context
- .gsd/SPEC.md
- src/components/sections/HeroSection.tsx
- src/app/page.tsx

## Tasks

<task type="auto">
  <name>Xây dựng HeroSection Component</name>
  <files>src/components/sections/HeroSection.tsx</files>
  <action>
    - Tạo Headline: "Crafting high-end digital experiences with AI and code." với typography tinh tế (Geist Sans, font-bold, leading-tight).
    - Sử dụng staggered animation (hiệu ứng thác nước) cho từng dòng hoặc từng từ khi trang web được tải.
    - Thêm nút "Explore Projects" và "Scroll Indicator" ở phía dưới.
  </action>
  <verify>Test-Path "src/components/sections/HeroSection.tsx"; Select-String "staggerChildren" src/components/sections/HeroSection.tsx</verify>
  <done>HeroSection hoàn thiện với giao diện ấn tượng và hiệu ứng xuất hiện mượt mà.</done>
</task>

<task type="auto">
  <name>Tích hợp vào Home Page</name>
  <files>src/app/page.tsx</files>
  <action>
    - Import HeroSection và thay thế cho phần placeholder hiện tại.
    - Đảm bảo layout Responsive cho Mobile và Desktop.
  </action>
  <verify>Select-String "HeroSection" src/app/page.tsx</verify>
  <done>Trang chủ hiển thị đầy đủ HeroSection mới.</done>
</task>

## Success Criteria
- [ ] Headline hiển thị rõ ràng, nghệ thuật.
- [ ] Hiệu ứng xuất hiện (Entrance animations) chạy đúng nhịp điệu.
- [ ] Nút CTA và Scroll indicator nằm đúng vị trí.
