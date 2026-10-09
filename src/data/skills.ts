import type { Localized } from "@/i18n/config";

export type Skill = string | Localized;

export type SkillCategory = {
  category: Localized;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: { en: "Programming Languages", de: "Programmiersprachen" },
    skills: ["Java", "Python", "JavaScript", "TypeScript", "PHP", "SQL"],
  },
  {
    category: { en: "Web Development", de: "Webentwicklung" },
    skills: ["React", "Next.js", "Node.js", "Flask", "FastAPI", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    category: { en: "Tools & DevOps", de: "Tools & DevOps" },
    skills: [
      "Git (GitHub, GitLab)",
      "Docker",
      "REST-APIs",
      "CI/CD",
      "Vercel",
      { en: "AWS (basics)", de: "AWS (Grundlagen)" },
    ],
  },
  {
    category: { en: "Data Analysis & Visualization", de: "Datenanalyse & Visualisierung" },
    skills: [
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Web Scraping (Requests, BeautifulSoup)",
      { en: "Data collection via APIs", de: "Datensammlung über APIs" },
      { en: "Data cleaning", de: "Datenbereinigung" },
    ],
  },
  {
    category: { en: "Databases", de: "Datenbanken" },
    skills: ["MySQL/MariaDB", "MongoDB"],
  },
];
