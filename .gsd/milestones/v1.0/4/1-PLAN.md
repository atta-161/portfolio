---
phase: 4
plan: 1
wave: 1
---

# Plan 4.1: Data Layer & Skill Model

## Objective
Xây dựng mô hình dữ liệu cho kỹ năng và tech stack, phân loại theo 4 nhóm chính với các mô tả kinh nghiệm ngắn gọn.

## Context
- .gsd/SPEC.md
- src/data/skills.ts

## Tasks

<task type="auto">
  <name>Khởi tạo Skills Mock Data</name>
  <files>src/data/skills.ts</files>
  <action>
    - Tạo mảng `SKILLS_CATEGORIES` phân loại theo: Frontend, Backend, AI & Data, Tools.
    - Mỗi kỹ năng trong mảng bao gồm: name, icon (Lucide key), và description (mô tả kinh nghiệm thực tế).
    - Đảm bảo nội dung mock data chuyên nghiệp và súc tích.
  </action>
  <verify>Test-Path "src/data/skills.ts"; Select-String "Frontend" src/data/skills.ts</verify>
  <done>Dữ liệu kỹ năng được cấu hình đầy đủ và đúng phân loại.</done>
</task>

<task type="auto">
  <name>Định nghĩa Type cho Skill</name>
  <files>src/data/skills.ts</files>
  <action>
    - Export interface Skill và SkillCategory để sử dụng cho các component UI.
  </action>
  <verify>Select-String "export interface" src/data/skills.ts</verify>
  <done>Các định nghĩa Type được export đầy đủ.</done>
</task>

## Success Criteria
- [ ] Dữ liệu mock bao quát cả 4 nhóm kỹ năng.
- [ ] Type definition rõ ràng, không có lỗi TypeScript.
