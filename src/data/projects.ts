export type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  link: string;
};

export const projects: Project[] = [
  {
    title: "Pizza Order Webapp",
    description:
      "Independent extension of a university project: role-based auth (customer, baker, driver) with bcrypt hashing and session-based login, a custom requireRole() access guard, and hardening against session fixation and SQL injection.",
    image: "/images/projects/pizza-order-webapp.jpg",
    tech: ["PHP 8", "MariaDB/MySQL", "Docker", "Apache", "Vanilla JavaScript"],
    link: "https://github.com/rk-420/pizza-order-webapp",
  },
  {
    title: "AI Finance Analysis Platform",
    description:
      "Python full-stack web app for automated financial market analysis, with real-time stock API integration, NLP-based sentiment analysis, interactive visualizations, and a short-term forecasting module built with Scikit-learn.",
    image: "/images/projects/ai-finance-platform.svg",
    tech: ["Python", "Flask", "REST API", "NLTK", "Scikit-learn", "SQLite/PostgreSQL"],
    link: "https://github.com/rk-420",
  },
  {
    title: "ProRunVis — Debugging & Visualization Tool",
    description:
      "Contributed to an open-source debugging and visualization tool that renders program traces directly in source code, integrating JBMC for symbolic execution and runtime variable inspection, developed with Scrum/Kanban.",
    image: "/images/projects/prorunvis-debugger.svg",
    tech: ["Java", "JBMC", "Git", "Scrum/Kanban"],
    link: "https://github.com/rk-420",
  },
];
