# DECISIONS.md

## Initial Decisions

**Date:** 2026-04-11
- Tech stack: Next.js, Framer Motion.
- Aesthetic: Rauno Freiberg style.

## Implementation Decisions

**Date:** 2026-05-16
- Use Next.js 15 App Router with TypeScript and React 19.
- Use Tailwind CSS for implementation speed while keeping a minimal dark visual language through theme tokens and global utilities.
- Keep portfolio content static in `src/data` and project images in `public/projects`; no CMS for v1.0.
- Use Web3Forms from the client for contact submissions via `NEXT_PUBLIC_WEB3FORMS_KEY`; no custom backend.
- Use Framer Motion for reveal, hover, layout, and active-pill animations.
- Use a custom `requestAnimationFrame` smooth-scroll helper in `Navbar.tsx` so nav clicks ease up/down with a fixed-header offset.
