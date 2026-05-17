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
    title: "Software & Algorithm Engineer",
    company: "Embedded positioning company",
    period: "2025 - Present",
    description:
      "Working on software and algorithm tasks for embedded positioning products, with exposure to IoT-style systems and practical AI-related project work.",
    tags: ["Python", "Algorithms", "Embedded", "Positioning", "IoT"],
  },
  {
    id: "2",
    title: "Robotics Software Engineer",
    company: "Robotics / IoT company",
    period: "Previous role",
    description:
      "Built and maintained software around robotics workflows, Linux environments, MQTT communication, and YOLO-based image recognition experiments.",
    tags: ["Linux", "MQTT", "YOLO", "Computer Vision", "Robotics"],
  },
  {
    id: "3",
    title: "AI Graduate - Good Classification",
    company: "University of Science, VNU-HCM",
    period: "Graduated",
    description:
      "Graduated with a Good classification in Artificial Intelligence, building a foundation in machine learning, algorithms, and software engineering.",
    tags: ["AI", "Machine Learning", "Algorithms", "Python"],
  },
  {
    id: "4",
    title: "Full-Stack & AI Practice",
    company: "Personal projects",
    period: "Ongoing",
    description:
      "Developing portfolio-grade projects that combine Python services, modern web interfaces, computer vision, and practical LLM workflows.",
    tags: ["Next.js", "FastAPI", "LLM", "OpenCV"],
  },
];
