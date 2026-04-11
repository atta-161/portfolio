---
phase: 4
plan: 2
wave: 1
---

# Plan 4.2: Bento Grid Components

## Objective
Thiết kế và xây dựng các component Bento Grid để trình bày kỹ năng một cách trực quan, nhất quán và sang trọng.

## Context
- .gsd/SPEC.md
- src/components/SkillCard.tsx
- src/components/sections/SkillsShowcase.tsx

## Tasks

<task type="auto">
  <name>Xây dựng SkillCard Component</name>
  <files>src/components/SkillCard.tsx</files>
  <action>
    - Thiết kế thẻ card với phong cách tối giản (Consistent Trắng/Bạc).
    - Sử dụng `border-white/5` và hiệu ứng background mờ ảo.
    - Hiển thị Icon, Tên kỹ năng và mô tả kinh nghiệm một cách tinh tế.
  </action>
  <verify>Test-Path "src/components/SkillCard.tsx"; Select-String "motion.div" src/components/SkillCard.tsx</verify>
  <done>Component SkillCard hoàn thiện với vibe tối giản, sang trọng.</done>
</task>

<task type="auto">
  <name>Xây dựng SkillsShowcase Section</name>
  <files>src/components/sections/SkillsShowcase.tsx</files>
  <action>
    - Triển khai Bento Grid sử dụng `grid-cols-1 md:grid-cols-4`.
    - Phân bổ `col-span` và `row-span` hợp lý cho các card để tạo bố cục "Bento" phá cách.
    - Áp dụng `staggerChildren` để tạo hiệu ứng hiện ra tuần tự.
  </action>
  <verify>Test-Path "src/components/sections/SkillsShowcase.tsx"; Select-String "grid-cols-4" src/components/sections/SkillsShowcase.tsx</verify>
  <done>SkillsShowcase hoàn thiện với bố cục Bento ấn tượng.</done>
</task>

## Success Criteria
- [ ] Bố cục Bento Grid cân đối và không bị rối.
- [ ] Tông màu nhất quán (Trắng/Bạc) đúng theo yêu cầu.
