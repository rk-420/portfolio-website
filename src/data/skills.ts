export type SkillCategory = {
  category: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Office & Tools",
    skills: ["Excel", "PowerPoint", "Word", "Outlook"],
  },
  {
    category: "Programmiersprachen",
    skills: ["Python", "C++", "Java", "JavaScript", "SQL", "PHP"],
  },
  {
    category: "Web",
    skills: ["HTML", "CSS", "REST-API", "JSON"],
  },
  {
    category: "Frameworks & Tools",
    skills: ["Next.js", "React", "Flask", "FastAPI"],
  },
  {
    category: "KI-gestützte Analyse",
    skills: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "NLP/Sentiment-Analyse",
      "Generative AI",
    ],
  },
  {
    category: "KI-Tools & Automatisierung",
    skills: ["ChatGPT", "Claude", "Cursor"],
  },
  {
    category: "Datenbanken, APIs & Cloud",
    skills: ["SQL", "REST-APIs", "Git", "GitHub", "Docker", "Vercel"],
  },
];
