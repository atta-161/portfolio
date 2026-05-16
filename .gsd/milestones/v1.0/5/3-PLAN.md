---
phase: 5
plan: 3
wave: 2
---

# Plan 5.3: Integration, SEO & Final Polish

## Objective
Tích hợp Experience Timeline và Contact Form vào trang chủ. Tối ưu SEO metadata và đảm bảo trải nghiệm người dùng tổng thể mượt mà.

## Context
- src/app/page.tsx
- src/app/layout.tsx
- .gsd/STATE.md

## Tasks

<task type="auto">
  <name>Tích hợp vào Home Page và kiểm tra tổng thể</name>
  <files>src/app/page.tsx</files>
  <action>
    - Import và thêm ExperienceTimeline sau SkillsShowcase.
    - Import và thêm ContactSection sau ExperienceTimeline.
    - Đảm bảo khoảng cách (spacing) giữa mọi section cân đối.
    - Chạy npm run build để kiểm tra toàn bộ.
  </action>
  <verify>Select-String "ExperienceTimeline" src/app/page.tsx; Select-String "ContactSection" src/app/page.tsx; npm run build</verify>
  <done>Tất cả section hiển thị đúng thứ tự: Hero → About → Projects → Skills → Experience → Contact.</done>
</task>

<task type="auto">
  <name>Cập nhật STATE.md và commit</name>
  <files>.gsd/STATE.md</files>
  <action>
    - Cập nhật STATE.md phản ánh Phase 5 hoàn tất.
    - Commit toàn bộ thay đổi.
  </action>
  <verify>Select-String "Phase.*5" .gsd/STATE.md</verify>
  <done>STATE.md được cập nhật và commit thành công.</done>
</task>

## Success Criteria
- [ ] Trang chủ hiển thị đầy đủ 6 section theo đúng thứ tự.
- [ ] Build thành công, không lỗi.
- [ ] Smooth scroll hoạt động từ Navbar tới mọi section.
