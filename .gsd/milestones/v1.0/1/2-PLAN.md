---
phase: 1
plan: 2
wave: 1
---

# Plan 1.2: Global Styles & Root Layout

## Objective
Thiết lập giao diện tổng thể của ứng dụng, bao gồm Typography (Geist font), thanh điều hướng (Navbar) tối giản và chân trang (Footer). Đảm bảo nền móng cho trải nghiệm người dùng mượt mà.

## Context
- .gsd/SPEC.md
- .gsd/phases/1/1-PLAN.md
- src/app/layout.tsx
- src/app/globals.css

## Tasks

<task type="auto">
  <name>Cấu hình Typography & Global CSS</name>
  <files>src/app/layout.tsx, src/app/globals.css</files>
  <action>
    - Import Geist and Geist_Mono trong layout.tsx và cấu hình CSS variables.
    - Cập nhật globals.css với:
      - Nền đen (#000000) mặc định.
      - Hiệu ứng smooth scrolling.
      - CSS reset và thiết lập font-smoothing antialiased.
  </action>
  <verify>Select-String "geist" src/app/layout.tsx; Select-String "scroll-behavior: smooth" src/app/globals.css</verify>
  <done>Typography và styles cơ bản được áp dụng toàn cục.</done>
</task>

<task type="auto">
  <name>Xây dựng Navbar & Footer</name>
  <files>src/components/Navbar.tsx, src/components/Footer.tsx, src/app/layout.tsx</files>
  <action>
    - Tạo Navbar.tsx: Thanh điều hướng glassmorphism nhẹ, chứa các link Home, Projects, Skills, Contact. Sử dụng Framer Motion cho hiệu ứng hover.
    - Tạo Footer.tsx: Thông tin đơn giản ở cuối trang.
    - Tích hợp cả hai vào layout.tsx.
  </action>
  <verify>Test-Path "src/components/Navbar.tsx"; Test-Path "src/components/Footer.tsx"</verify>
  <done>Giao diện khung (Layout Shell) hoàn thiện với Navbar và Footer linh hoạt.</done>
</task>

## Success Criteria
- [ ] Font Geist hiển thị đúng.
- [ ] Navbar có hiệu ứng glassmorphism mượt mà.
- [ ] Trang web có cấu trúc Header -> Main -> Footer hoàn chỉnh.
