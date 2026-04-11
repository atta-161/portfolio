---
phase: 3
plan: 2
wave: 1
---

# Plan 3.2: Gallery Grid & Filter

## Objective
Xây dựng lưới hiển thị dự án (Grid) và hệ thống lọc (Filter) mượt mà để người dùng dễ dàng khám phá các lĩnh vực khác nhau.

## Context
- .gsd/SPEC.md
- src/components/sections/ProjectGallery.tsx
- src/data/projects.ts

## Tasks

<task type="auto">
  <name>Xây dựng ProjectGallery Section</name>
  <files>src/components/sections/ProjectGallery.tsx</files>
  <action>
    - Tạo layout Grid (1 cột trên mobile, 2-3 cột trên desktop) cho các ProjectCard.
    - Implement thanh Filter Tabs (All, AI, Web, App) tối giản.
    - Sử dụng `AnimatePresence` và `layout` prop của Framer Motion để tạo hiệu ứng chuyển đổi loại dự án mượt mà.
  </action>
  <verify>Test-Path "src/components/sections/ProjectGallery.tsx"; Select-String "AnimatePresence" src/components/sections/ProjectGallery.tsx</verify>
  <done>ProjectGallery hoàn thành với tính năng lọc dự án cực kỳ mượt mà.</done>
</task>

<task type="auto">
  <name>Thêm hiệu ứng Staggered Entrance</name>
  <files>src/components/sections/ProjectGallery.tsx</files>
  <action>
    - Áp dụng hiệu ứng hiện dần (staggerChildren) cho danh sách dự án khi người dùng cuộn đến gallery.
  </action>
  <verify>Select-String "viewPort" src/components/sections/ProjectGallery.tsx</verify>
  <done>Gallery hiển thị nghệ thuật hơn với hiệu ứng cuộn trang.</done>
</task>

## Success Criteria
- [ ] Tính năng lọc hoạt động chính xác và đẹp mắt.
- [ ] Grid Responsive tốt trên mọi kích thước màn hình.
- [ ] Hiệu ứng chuyển động không bị giật lag.
