---
phase: 3
plan: 1
wave: 1
---

# Plan 3.1: Data & Project Card

## Objective
Khởi tạo cấu trúc dữ liệu dự án mẫu và xây dựng thẻ dự án (Project Card) tinh tế với khả năng liên kết ra bên ngoài (GitHub/Demo).

## Context
- .gsd/SPEC.md
- src/data/projects.ts
- src/components/ProjectCard.tsx

## Tasks

<task type="auto">
  <name>Khởi tạo Project Mock Data</name>
  <files>src/data/projects.ts</files>
  <action>
    - Tạo mảng `PROJECTS` chứa ít nhất 3 dự án tiêu biểu cho: AI, Web, App.
    - Mỗi dự án bao gồm: id, title, description, category, tags, links (demo/github), và hình ảnh placeholder (dùng generate_image sau nếu cần).
  </action>
  <verify>Test-Path "src/data/projects.ts"; Select-String "AI" src/data/projects.ts</verify>
  <done>Mảng PROJECTS được khởi tạo đầy đủ thông tin mẫu.</done>
</task>

<task type="auto">
  <name>Xây dựng ProjectCard Component</name>
  <files>src/components/ProjectCard.tsx</files>
  <action>
    - Thiết kế card tối giản với viền mờ (`border-white/5`) và nền glassmorphism nhẹ.
    - Tích hợp hiệu ứng Hover: hiển thị các nút liên kết (Demo/GitHub) mượt mà.
    - Sử dụng Framer Motion `motion.div` để tạo hiệu ứng scale/glow khi tương tác.
  </action>
  <verify>Test-Path "src/components/ProjectCard.tsx"; Select-String "motion.div" src/components/ProjectCard.tsx</verify>
  <done>Component ProjectCard hoàn thiện, đẹp mắt và hoạt động tốt.</done>
</task>

## Success Criteria
- [ ] Dữ liệu dự án được cấu hình đúng Type.
- [ ] Thẻ dự án có hiệu ứng hover phản hồi tốt và đầy đủ liên kết.
