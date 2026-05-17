export interface Project {
  id: string;
  title: string;
  description: string;
  category: "AI" | "Web" | "App";
  tags: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "YOLO Vision Detection Pipeline",
    description: "Computer-vision workflow for object detection experiments, from dataset preparation and model iteration to practical inference checks.",
    category: "AI",
    tags: ["Python", "YOLO", "OpenCV", "Image Recognition"],
    image: "/projects/ai.png",
  },
  {
    id: "2",
    title: "AI Portfolio Platform",
    description: "A recruiter-focused portfolio built with Next.js and Framer Motion to present software, AI, and systems experience with fast static delivery.",
    category: "Web",
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    image: "/projects/web.png",
  },
  {
    id: "3",
    title: "IoT Positioning & Telemetry Toolkit",
    description: "Software and algorithm work around embedded positioning, MQTT-style device communication, and data flows close to real hardware constraints.",
    category: "App",
    tags: ["Python", "Algorithms", "MQTT", "Embedded"],
    image: "/projects/app.png",
  },
];
