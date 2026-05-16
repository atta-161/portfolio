---
phase: 2
plan: 1
wave: 1
---

# Plan 2.1: Background & Interactive Cursor

## Objective
Tạo ra lớp nền "Grainy" nghệ thuật và hiệu ứng ánh sáng bám theo con chuột để tăng chiều sâu và tính tương tác cho trang web, theo đúng phong cách Rauno Freiberg.

## Context
- .gsd/SPEC.md
- .gsd/ROADMAP.md
- src/app/page.tsx
- src/app/globals.css

## Tasks

<task type="auto">
  <name>Triển khai Grainy Background</name>
  <files>src/components/GrainyBackground.tsx</files>
  <action>
    - Tạo component GrainyBackground sử dụng SVG Filters (feTurbulence) để tạo hiệu ứng nhiễu hạt.
    - Cài đặt opacity và blending mode phù hợp để grain trông tinh tế, không quá gắt.
    - Thêm các lớp gradient mờ ảo nền phía sau grain.
  </action>
  <verify>Test-Path "src/components/GrainyBackground.tsx"; Select-String "feTurbulence" src/components/GrainyBackground.tsx</verify>
  <done>Component GrainyBackground được tạo và có hiệu ứng nhiễu hạt đúng như mong đợi.</done>
</task>

<task type="auto">
  <name>Thiết lập Cursor Follower Glow</name>
  <files>src/app/page.tsx</files>
  <action>
    - Sử dụng useMotionValue and useSpring từ framer-motion để bắt tọa độ chuột.
    - Tạo một div "glow" mờ ảo bám theo chuột với độ trễ (spring) mượt mà.
    - Logic MouseMove được tối ưu hóa để tránh re-render không cần thiết của component chính.
  </action>
  <verify>Select-String "useMotionValue" src/app/page.tsx; Select-String "useSpring" src/app/page.tsx</verify>
  <done>Hiệu ứng ánh sáng bám theo chuột hoạt động mượt mà và nghệ thuật.</done>
</task>

## Success Criteria
- [ ] Nền trang web có texture "film grain" tinh tế.
- [ ] Ánh sáng bám theo chuột có cảm giác "elastic" (đàn hồi) và không bị lag.
