---
phase: 1
plan: 1
wave: 1
---

# Plan 1.1: Project Initialization & Foundation

## Objective
Khởi tạo dự án Next.js tại thư mục gốc với cấu hình Tailwind CSS và TypeScript, đồng thời cài đặt các thư viện cần thiết cho hiệu ứng và icon. Thiết lập bảng màu Dark Mode cao cấp.

## Context
- .gsd/SPEC.md
- .gsd/REQUIREMENTS.md

## Tasks

<task type="auto">
  <name>Khởi tạo Next.js Project</name>
  <files>./</files>
  <action>
    Chạy lệnh khởi tạo Next.js với các flag: --typescript, --tailwind, --eslint, --app, --src-dir, --import-alias "@/*", --yes.
    Lưu ý: Nếu command báo lỗi vì thư mục không trống, thực hiện khởi tạo thủ công các file config (package.json, next.config.ts, tsconfig.json, tailwind.config.ts).
  </action>
  <verify>Test-Path "package.json"; Test-Path "tailwind.config.ts"</verify>
  <done>Dự án Next.js được khởi tạo thành công với Tailwind và TypeScript.</done>
</task>

<task type="auto">
  <name>Cài đặt Dependencies & Cấu hình Tailwind</name>
  <files>package.json, tailwind.config.ts</files>
  <action>
    - Cài đặt: framer-motion, lucide-react, clsx, tailwind-merge.
    - Cập nhật tailwind.config.ts với bảng màu Dark Mode:
      - background: #000000
      - foreground: #ffffff
      - muted: #888888
      - accent: #00ffff
    - Cấu hình font family "sans" và "mono" để sử dụng CSS variables.
  </action>
  <verify>npm list framer-motion lucide-react; Select-String "accent" tailwind.config.ts</verify>
  <done>Dependencies được cài đặt và Tailwind được cấu hình đúng phong cách thiết kế.</done>
</task>

## Success Criteria
- [ ] Dự án Next.js có cấu trúc thư mục src/app chuẩn.
- [ ] Tailwind CSS nhận diện được bảng màu tùy chỉnh.
- [ ] Các thư viện animation và icon sẵn sàng sử dụng.
