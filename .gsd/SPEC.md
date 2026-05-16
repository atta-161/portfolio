# SPEC.md — Project Specification

> **Status**: `FINALIZED`

## Vision
Tạo một trang Portfolio cá nhân đẳng cấp, lấy cảm hứng từ phong cách của Rauno Freiberg: tối giản, tinh tế nhưng đi kèm với những hiệu ứng tương tác cực kỳ mượt mà và nghệ thuật. Trang web sẽ là nơi trưng bày các dự án AI, Web và App với trải nghiệm người dùng premium.

## Goals
1. **Thiết kế ấn tượng (Aesthetics):** Sử dụng Dark Mode chủ đạo, typography hiện đại, và các hiệu ứng micro-interactions tinh tế.
2. **Showcase đa dạng:** Trình bày rõ ràng và bắt mắt các dự án thuộc 3 mảng: AI, Web Application, và Mobile App.
3. **Hiệu ứng mượt mà (Animations):** Tích hợp Framer Motion để tạo ra các hiệu ứng chuyển cảnh, hover và scroll mang tính nghệ thuật cao.
4. **Full Sections:** Đảm bảo đầy đủ các phần: Giới thiệu, Dự án, Kỹ năng, Kinh nghiệm, và Liên hệ.

## Non-Goals (Out of Scope)
- Hệ thống quản lý nội dung (CMS) phức tạp (sẽ sử dụng dữ liệu tĩnh hoặc local JSON/Markdown để tối ưu tốc độ).
- Backend server riêng (ưu tiên Serverless/Vercel Functions nếu cần).

## Users
- Nhà tuyển dụng (Recruiters) tìm kiếm ứng viên tài năng.
- Khách hàng tiềm năng muốn thuê outsource dự án.
- Cộng đồng công nghệ tham khảo và kết nối.

## Constraints
- **Framework:** Next.js (App Router).
- **Styling:** Tailwind CSS với global design tokens trong `src/app/globals.css` và theme mở rộng trong `tailwind.config.ts`.
- **Animations:** Framer Motion.
- **Data:** Dữ liệu tĩnh/local trong `src/data`; hình ảnh dự án nằm trong `public/projects`.
- **Contact:** Web3Forms client-side API qua `NEXT_PUBLIC_WEB3FORMS_KEY`; không có backend riêng.
- **Performance:** Đảm bảo điểm Lighthouse cao, load nhanh.

## Success Criteria
- [x] Giao diện người dùng mang lại cảm giác "WOW" ngay từ lần đầu truy cập.
- [x] Hiệu ứng hoạt ảnh được triển khai bằng Framer Motion và custom smooth scroll cho navbar.
- [x] Hiển thị responsive bằng layout Tailwind mobile-first.
- [x] Thông tin dự án (AI/Web/App) được trình bày logic và chuyên nghiệp qua gallery có filter.
