export interface Project {
  id: string;
  title: string;
  description: string;
  category: "AI" | "Web" | "App";
  tags: string[];
  image: string;
  demoUrl: string;
  githubUrl: string;
}

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Neural Art Generator",
    description: "An AI-powered system that transforms text prompts into high-end abstract digital art using custom diffusion models.",
    category: "AI",
    tags: ["Python", "PyTorch", "Next.js", "Tailwind"],
    image: "/projects/ai.png",
    demoUrl: "https://demo.example.com/neural-art",
    githubUrl: "https://github.com/example/neural-art",
  },
  {
    id: "2",
    title: "E-commerce Engine",
    description: "A high-performance e-commerce platform built with Next.js 15, featuring real-time inventory and glassmorphism UI.",
    category: "Web",
    tags: ["Next.js", "TypeScript", "Prisma", "Stripe"],
    image: "/projects/web.png",
    demoUrl: "https://demo.example.com/ecommerce",
    githubUrl: "https://github.com/example/ecommerce",
  },
  {
    id: "3",
    title: "Health Tracker Pro",
    description: "A comprehensive health monitoring application with interactive activity rings and personalized wellness insights.",
    category: "App",
    tags: ["React Native", "Expo", "Firebase", "Victory"],
    image: "/projects/app.png",
    demoUrl: "https://demo.example.com/health-tracker",
    githubUrl: "https://github.com/example/health-tracker",
  },
];
