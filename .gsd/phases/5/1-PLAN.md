---
phase: 5
plan: 1
wave: 1
---

# Plan 5.1: Experience Timeline

## Objective
Xây dựng section Experience Timeline tối giản, kể lại hành trình sự nghiệp bằng dòng thời gian có hiệu ứng scroll-reveal.

## Context
- .gsd/SPEC.md
- src/data/experience.ts
- src/components/sections/ExperienceTimeline.tsx

## Tasks

<task type="auto">
  <name>Tạo dữ liệu Experience mock</name>
  <files>src/data/experience.ts</files>
  <action>
    - Tạo interface ExperienceItem với: title, company, period, description, tags.
    - Tạo mảng EXPERIENCES chứa 3-4 mục kinh nghiệm mock (có thể bao gồm AI Engineer, Frontend Developer, Freelancer...).
    - Dữ liệu mock phải trông chuyên nghiệp, bạn sẽ đổi sau.
  </action>
  <verify>Test-Path "src/data/experience.ts"; Select-String "EXPERIENCES" src/data/experience.ts</verify>
  <done>File experience.ts tồn tại và chứa dữ liệu mock hợp lệ.</done>
</task>

<task type="auto">
  <name>Xây dựng ExperienceTimeline component</name>
  <files>src/components/sections/ExperienceTimeline.tsx</files>
  <action>
    - Thiết kế timeline dọc tối giản với đường kẻ trung tâm mờ (border-white/10).
    - Mỗi mục kinh nghiệm hiện ra bằng whileInView fade-in + slide-up.
    - Hiển thị: period (nhỏ, mono), title (bold), company (muted), description, và tags.
    - Phong cách nhất quán: tông Trắng/Bạc, không màu loè loẹt.
  </action>
  <verify>Test-Path "src/components/sections/ExperienceTimeline.tsx"; Select-String "whileInView" src/components/sections/ExperienceTimeline.tsx</verify>
  <done>Component ExperienceTimeline hoàn thiện với scroll animation và phong cách nhất quán.</done>
</task>

## Success Criteria
- [ ] Timeline hiển thị đúng thứ tự thời gian.
- [ ] Hiệu ứng scroll-reveal mượt mà trên mọi entry.
