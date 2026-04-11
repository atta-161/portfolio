---
phase: 3
plan: 3
wave: 1
---

# Plan 3.3: Integration & Global Polish

## Objective
Tích hợp Gallery vào trang chủ và kiểm tra tổng thể để đảm bảo trải nghiệm người dùng tối ưu.

## Context
- src/app/page.tsx
- .gsd/STATE.md

## Tasks

<task type="auto">
  <name>Tích hợp vào Home Page</name>
  <files>src/app/page.tsx</files>
  <action>
    - Import và thêm ProjectGallery vào dưới AboutSection trong page.tsx.
    - Đảm bảo khoảng cách (spacing) giữa các section cân đối.
  </action>
  <verify>Select-String "ProjectGallery" src/app/page.tsx</verify>
  <done>Trang chủ hiển thị đầy đủ các phần: Hero, About và Project Gallery.</done>
</task>

<task type="auto">
  <name>Kiểm tra Build và State</name>
  <files>.gsd/STATE.md</files>
  <action>
    - Chạy build check để đảm bảo logic filtering không gây lỗi SSR.
    - Cập nhật STATE.md thành Planning Complete.
  </action>
  <verify>npm run build</verify>
  <done>Dự án sẵn sàng cho việc kiểm định Phase 3.</done>
</task>

## Success Criteria
- [ ] Tính thẩm mỹ tổng thể được đảm bảo (spacing, colors, typography).
- [ ] Build thành công 100%.
