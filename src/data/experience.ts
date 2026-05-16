export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "1",
    title: "AI Engineer",
    company: "TechVision Labs",
    period: "2024 — Present",
    description:
      "Leading development of custom NLP pipelines and computer vision models for enterprise clients. Spearheading research into generative AI applications.",
    tags: ["PyTorch", "LangChain", "FastAPI", "AWS"],
  },
  {
    id: "2",
    title: "Full-Stack Developer",
    company: "Digital Horizon Agency",
    period: "2022 — 2024",
    description:
      "Architected and shipped high-traffic web applications using Next.js and Node.js. Mentored junior developers and established code review practices.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Docker"],
  },
  {
    id: "3",
    title: "Frontend Developer",
    company: "Starter Studio",
    period: "2021 — 2022",
    description:
      "Built responsive interfaces for early-stage startups. Focused on performance optimization and pixel-perfect implementations from Figma designs.",
    tags: ["React", "Tailwind CSS", "Figma", "Vercel"],
  },
  {
    id: "4",
    title: "Freelance Developer",
    company: "Self-employed",
    period: "2020 — 2021",
    description:
      "Delivered custom websites and automation tools for small businesses. Gained deep experience in client communication and project management.",
    tags: ["JavaScript", "Python", "WordPress", "Stripe"],
  },
];
