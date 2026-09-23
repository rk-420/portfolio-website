import type { Localized } from "@/i18n/config";

export type SkillCategory = {
  category: Localized;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: { en: "Office & Tools", de: "Office & Tools" },
    skills: ["Excel", "PowerPoint", "Word", "Outlook"],
  },
  {
    category: { en: "Programming Languages", de: "Programmiersprachen" },
    skills: ["Python", "C++", "Java", "JavaScript", "SQL", "PHP"],
  },
  {
    category: { en: "Web", de: "Web" },
    skills: ["HTML", "CSS", "REST-API", "JSON"],
  },
  {
    category: { en: "Frameworks & Tools", de: "Frameworks & Tools" },
    skills: ["Next.js", "React", "Flask", "FastAPI"],
  },
  {
    category: { en: "AI-Powered Analysis", de: "KI-gestützte Analyse" },
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "NLP/Sentiment Analysis",
      "Generative AI",
    ],
  },
  {
    category: { en: "AI Tools & Automation", de: "KI-Tools & Automatisierung" },
    skills: ["ChatGPT", "Claude", "Cursor"],
  },
  {
    category: { en: "Databases, APIs & Cloud", de: "Datenbanken, APIs & Cloud" },
    skills: ["SQL", "REST-APIs", "Git", "GitHub", "Docker", "Vercel"],
  },
];
