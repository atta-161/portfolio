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
    title: "Frontend Development",
    skills: [
      {
        name: "Next.js",
        description: "Leading implementation of high-performance SSR/SSG apps for 3+ years.",
        icon: Layout,
      },
      {
        name: "React",
        description: "Architecting complex state management and reusable component libraries.",
        icon: Globe,
      },
      {
        name: "TypeScript",
        description: "Enforcing type safety and robust code architectures in enterprise projects.",
        icon: Code,
      },
    ],
  },
  {
    id: "backend",
    title: "Backend & Infra",
    skills: [
      {
        name: "Node.js",
        description: "Building scalable microservices and real-time WebSocket communication.",
        icon: Server,
      },
      {
        name: "PostgreSQL",
        description: "Optimizing complex relational schemas and query performance.",
        icon: Database,
      },
      {
        name: "Docker",
        description: "Containerizing workflows for consistent deployment across environments.",
        icon: Zap,
      },
    ],
  },
  {
    id: "ai-data",
    title: "AI & Data Science",
    skills: [
      {
        name: "Python",
        description: "Developing custom data mining and automated NLP processing pipelines.",
        icon: Brain,
      },
      {
        name: "PyTorch",
        description: "Tuning deep learning models for classification and generative AI.",
        icon: Cpu,
      },
      {
        name: "Pandas",
        description: "Expert-level data manipulation and statistical analysis for large datasets.",
        icon: Layers,
      },
    ],
  },
  {
    id: "tools",
    title: "Core Tools",
    skills: [
      {
        name: "Git",
        description: "Managing complex repository structures and CI/CD pipelines.",
        icon: Terminal,
      },
      {
        name: "Vitest",
        description: "Maintaining high reliability through rigorous automated unit testing.",
        icon: ShieldCheck,
      },
      {
        name: "VS Code",
        description: "Customized productivity setups for advanced full-stack development.",
        icon: Wrench,
      },
    ],
  },
];
