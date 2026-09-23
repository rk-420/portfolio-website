import type { Localized } from "@/i18n/config";

export type Project = {
  title: Localized;
  description: Localized;
  image: string;
  tech: string[];
  link: string;
};

export const projects: Project[] = [
  {
    title: { en: "EduMed — Medical Dashboard", de: "EduMed — Medizinisches Dashboard" },
    description: {
      en: "Full-stack dashboard for general practitioners: patient management, an interactive 2D body model for clinical annotations, a live BMI calculator, and an appointment schedule, backed by serverless API functions and JWT auth.",
      de: "Full-Stack-Dashboard für Hausärzte: Patientenverwaltung, ein interaktives 2D-Körpermodell für klinische Annotationen, ein Live-BMI-Rechner und ein Terminplan — mit Serverless-API-Funktionen und JWT-Authentifizierung.",
    },
    image: "/images/projects/edumed-dashboard.jpg",
    tech: ["React", "Vite", "Tailwind CSS", "Node.js", "PostgreSQL (Neon)", "Vercel Functions", "JWT"],
    link: "https://github.com/rk-420/edumed",
  },
  {
    title: { en: "Pizza Order Webapp", de: "Pizza-Bestell-Webapp" },
    description: {
      en: "Independent extension of a university project: role-based auth (customer, baker, driver) with bcrypt hashing and session-based login, a custom requireRole() access guard, and hardening against session fixation and SQL injection.",
      de: "Eigenständige Erweiterung eines Hochschulprojekts: rollenbasierte Authentifizierung (Kunde, Bäcker, Fahrer) mit bcrypt-Hashing und sessionbasiertem Login, ein eigener requireRole()-Zugriffsschutz sowie Absicherung gegen Session Fixation und SQL-Injection.",
    },
    image: "/images/projects/pizza-order-webapp.jpg",
    tech: ["PHP 8", "MariaDB/MySQL", "Docker", "Apache", "Vanilla JavaScript"],
    link: "https://github.com/rk-420/pizza-order-webapp",
  },
  {
    title: { en: "AI Finance Analysis Platform", de: "KI-Plattform für Finanzanalysen" },
    description: {
      en: "Python full-stack web app for automated financial market analysis, with real-time stock API integration, NLP-based sentiment analysis, interactive visualizations, and a short-term forecasting module built with Scikit-learn.",
      de: "Python-Full-Stack-Webanwendung zur automatisierten Finanzmarktanalyse mit Echtzeit-Anbindung an Aktien-APIs, NLP-basierter Sentiment-Analyse, interaktiven Visualisierungen und einem Modul für kurzfristige Prognosen mit Scikit-learn.",
    },
    image: "/images/projects/ai-finance-platform.svg",
    tech: ["Python", "Flask", "REST API", "NLTK", "Scikit-learn", "SQLite/PostgreSQL"],
    link: "https://github.com/rk-420",
  },
  {
    title: { en: "ProRunVis — Debugging & Visualization Tool", de: "ProRunVis — Debugging- & Visualisierungstool" },
    description: {
      en: "Contributed to an open-source debugging and visualization tool that renders program traces directly in source code, integrating JBMC for symbolic execution and runtime variable inspection, developed with Scrum/Kanban.",
      de: "Mitarbeit an einem Open-Source-Tool für Debugging und Visualisierung, das Programm-Traces direkt im Quellcode darstellt — mit JBMC-Integration für symbolische Ausführung und Inspektion von Laufzeitvariablen, entwickelt nach Scrum/Kanban.",
    },
    image: "/images/projects/prorunvis-debugger.svg",
    tech: ["Java", "JBMC", "Git", "Scrum/Kanban"],
    link: "https://github.com/rk-420",
  },
];
