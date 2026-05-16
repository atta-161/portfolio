---
phase: 4
plan: 3
wave: 1
---

# Plan 4.3: Integration & Global Polish

## Objective
Tích hợp khu vực kỹ năng vào trang chủ và đảm bảo tính nhất quán thẩm mỹ với các phần Hero và Project Gallery.

## Context
- src/app/page.tsx
- .gsd/STATE.md

## Tasks

<task type="auto">
  <name>Tích hợp vào Home Page</name>
  <files>src/app/page.tsx</files>
  <action>
    - Thêm SkillsShowcase vào dưới ProjectGallery trong page.tsx.
    - Đảm bảo khoảng cách section nhất quán.
  </action>
  <verify>Select-String "SkillsShowcase" src/app/page.tsx</verify>
  <done>Phần trưng bày kỹ năng hiển thị đúng vị trí trên trang chủ.</done>
</task>

<task type="auto">
  <name>Kiểm tra Build và Final Polish</name>
  <files>.gsd/STATE.md</files>
  <action>
    - Chạy build check.
    - Đảm bảo các layer z-index và hiệu ứng cuộn trang mượt mà giữa các section.
    - Cập nhật STATE.md.
  </action>
  <verify>npm run build</verify>
  <done>Phase 4 sẵn sàng cho kiểm định.</done>
</task>

## Success Criteria
- [ ] Sự chuyển tiếp giữa các section mượt mà.
- [ ] Giao diện nhất quán, sang trọng, không có màu sắc loè loẹt.
