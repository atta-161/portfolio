import { 
  Layout, 
  Server, 
  Brain, 
  Wrench,
  Code,
  Globe,
  Database,
  Terminal,
  Cpu,
  Zap,
  Layers,
  ShieldCheck
} from "lucide-react";

export interface Skill {
  name: string;
  description: string;
  icon: any;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    title: "Full-Stack Frontend",
    skills: [
      {
        name: "Next.js",
        description: "Building fast, polished portfolio and product interfaces with App Router patterns.",
        icon: Layout,
      },
      {
        name: "React",
        description: "Creating responsive UI components that make technical work easy to inspect.",
        icon: Globe,
      },
      {
        name: "TypeScript",
        description: "Using typed interfaces and maintainable structure for production-facing apps.",
        icon: Code,
      },
    ],
  },
  {
    id: "backend",
    title: "Python Backend",
    skills: [
      {
        name: "Python APIs",
        description: "Designing software services, data flows, and automation around real product constraints.",
        icon: Server,
      },
      {
        name: "FastAPI",
        description: "Building typed API layers for AI tools, dashboards, and internal services.",
        icon: Database,
      },
      {
        name: "Docker",
        description: "Containerizing software workflows for repeatable development and deployment.",
        icon: Zap,
      },
    ],
  },
  {
    id: "ai-data",
    title: "AI & Computer Vision",
    skills: [
      {
        name: "Computer Vision",
        description: "Working with image recognition workflows from data preparation to inference checks.",
        icon: Brain,
      },
      {
        name: "YOLO",
        description: "Applying object detection for robotics and IoT-adjacent visual recognition tasks.",
        icon: Cpu,
      },
      {
        name: "LLM / RAG",
        description: "Exploring practical LLM systems for retrieval, automation, and product workflows.",
        icon: Layers,
      },
    ],
  },
  {
    id: "tools",
    title: "Systems & Tools",
    skills: [
      {
        name: "Linux",
        description: "Comfortable working in Linux environments for robotics and embedded software tasks.",
        icon: Terminal,
      },
      {
        name: "MQTT / IoT",
        description: "Handling lightweight device communication patterns and telemetry-oriented systems.",
        icon: ShieldCheck,
      },
      {
        name: "Git",
        description: "Maintaining clean project history and practical collaboration workflows.",
        icon: Wrench,
      },
    ],
  },
];
