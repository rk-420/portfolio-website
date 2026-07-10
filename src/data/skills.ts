export type SkillCategory = {
  category: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: ["Java", "Python", "C++", "JavaScript", "TypeScript", "SQL", "Bash"],
  },
  {
    category: "Frameworks & Tools",
    skills: [
      "Spring Boot",
      "Flask",
      "FastAPI",
      "Docker",
      "Git",
      "GitHub",
      "Maven",
      "JUnit",
      "Scikit-learn",
      "Jupyter Notebook",
    ],
  },
  {
    category: "Web",
    skills: ["HTML5", "CSS3", "REST API", "JSON", "XML", "React (basics)"],
  },
  {
    category: "AI & Machine Learning",
    skills: [
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "LangChain",
      "Pandas",
      "NumPy",
      "NLTK",
      "Hugging Face",
      "RAG",
      "Agentic AI",
      "Generative AI (GenAI)",
    ],
  },
  {
    category: "Methods",
    skills: [
      "Agile/Scrum",
      "OOP",
      "REST",
      "Design Patterns",
      "TDD",
      "CI/CD (basics)",
      "Clean Code",
      "MVC",
    ],
  },
];
