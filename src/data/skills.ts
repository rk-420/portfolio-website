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
    category: "Programming Languages",
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
    category: "AI-Powered Analysis",
    skills: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "NLP/Sentiment Analysis",
      "Generative AI",
    ],
  },
  {
    category: "AI Tools & Automation",
    skills: ["ChatGPT", "Claude", "Cursor"],
  },
  {
    category: "Databases, APIs & Cloud",
    skills: ["SQL", "REST-APIs", "Git", "GitHub", "Docker", "Vercel"],
  },
];
