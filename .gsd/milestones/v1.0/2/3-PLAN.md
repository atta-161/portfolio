---
phase: 2
plan: 3
wave: 1
---

# Plan 2.3: About Section & Global Integration

## Objective
Hoàn thiện Giai đoạn 2 bằng cách thêm phần giới thiệu bản thân (About section) với các hiệu ứng cuộn trang tinh tế, tạo nên một câu chuyện mạch lạc từ Hero xuống nội dung chi tiết.

## Context
- .gsd/SPEC.md
- src/components/sections/AboutSection.tsx
- src/app/page.tsx

## Tasks

<task type="auto">
  <name>Xây dựng AboutSection Component</name>
  <files>src/components/sections/AboutSection.tsx</files>
  <action>
    - Tạo một layout sạch sẽ cho Bio (tiểu sử).
    - Sử dụng Framer Motion `whileInView` để kích hoạt hiệu ứng fade-in + slide-up khi người dùng cuộn tới.
    - Đảm bảo tính tương phản cao giữa text và nền tối.
  </action>
  <verify>Test-Path "src/components/sections/AboutSection.tsx"; Select-String "whileInView" src/components/sections/AboutSection.tsx</verify>
  <done>AboutSection sẵn sàng với các hiệu ứng cuộn mượt mà.</done>
</task>

<task type="auto">
  <name>Tích hợp và Hoàn thiện Phase 2</name>
  <files>src/app/page.tsx, .gsd/STATE.md</files>
  <action>
    - Thêm AboutSection vào dưới HeroSection trong page.tsx.
    - Kiểm tra tổng thể các layer (z-index) để đảm bảo GrainyBackground và CursorFollower không che khuất nội dung.
    - Cập nhật STATE.md thành Planning Complete.
  </action>
  <verify>Select-String "AboutSection" src/app/page.tsx</verify>
  <done>Phase 2 hoàn tất tích hợp, sẵn sàng cho việc kiểm tra.</done>
</task>

## Success Criteria
- [ ] Phần About xuất hiện mượt mà khi người dùng cuộn trang.
- [ ] Không có lỗi chồng chéo layer giữa background và content.
- [ ] Giao diện nhất quán với phong cách nghệ thuật đã định.
