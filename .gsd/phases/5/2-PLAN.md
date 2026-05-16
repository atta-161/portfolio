---
phase: 5
plan: 2
wave: 1
---

# Plan 5.2: Contact Form (Web3Forms)

## Objective
Xây dựng form liên hệ tĩnh sử dụng Web3Forms API (client-side fetch, không cần backend).

## Context
- .gsd/SPEC.md
- src/components/sections/ContactSection.tsx

## Tasks

<task type="auto">
  <name>Xây dựng ContactSection component</name>
  <files>src/components/sections/ContactSection.tsx</files>
  <action>
    - Thiết kế form liên hệ tối giản với 3 trường: Name, Email, Message.
    - Submit handler gửi dữ liệu qua client-side fetch tới https://api.web3forms.com/submit.
    - Access key được đọc từ env var NEXT_PUBLIC_WEB3FORMS_KEY (placeholder cho dev).
    - Hiển thị trạng thái gửi: idle, sending, success, error bằng UI feedback mượt mà.
    - Phong cách: input fields tối giản (bg-white/5, border-white/10), nút gửi tối giản.
  </action>
  <verify>Test-Path "src/components/sections/ContactSection.tsx"; Select-String "web3forms" src/components/sections/ContactSection.tsx</verify>
  <done>Form liên hệ hoàn thiện với trạng thái gửi và phong cách nhất quán.</done>
</task>

<task type="auto">
  <name>Cấu hình env placeholder</name>
  <files>.env.local.example</files>
  <action>
    - Tạo file .env.local.example chứa NEXT_PUBLIC_WEB3FORMS_KEY=your_access_key_here.
    - Thêm .env.local vào .gitignore (nếu chưa có).
  </action>
  <verify>Test-Path ".env.local.example"; Select-String "WEB3FORMS" .env.local.example</verify>
  <done>File env example tồn tại với key placeholder.</done>
</task>

## Success Criteria
- [ ] Form hoạt động và gửi dữ liệu qua Web3Forms API.
- [ ] Trạng thái gửi (loading/success/error) hiển thị rõ ràng cho người dùng.
