import type { Locale } from "@/i18n/config";

const en = {
  meta: {
    title: "Rahul Kaushik — Portfolio",
    description:
      "Personal portfolio of Rahul Kaushik — building at the intersection of web engineering and full-stack development.",
  },
  nav: {
    portfolio: "Portfolio",
    contact: "Contact",
    menu: "Menu",
    toggleMenu: "Toggle navigation menu",
    switchLanguage: "Auf Deutsch wechseln",
  },
  hero: {
    greeting: "Hi, I'm",
    intro:
      "Always curious, always learning — currently looking for a working student position to grow my skills while contributing to real-world projects.",
    viewProjects: "View Projects",
    downloadCv: "Download CV",
    photoAlt: "Photo of",
    uploadPhoto: "Upload photo",
  },
  education: {
    eyebrow: "Education",
    heading: "Where I Studied",
  },
  skills: {
    heading: "Skills",
    intro: "A snapshot of the tools and technologies I work with, grouped by area.",
  },
  projects: {
    heading: "Projects",
    intro: "A selection of things I've built, from full-stack apps to small experiments.",
    screenshot: "screenshot",
    showMore: "Show more projects",
    showFewer: "Show fewer projects",
  },
  focus: {
    eyebrow: "Current Focus",
    heading: "Learning in Motion",
    intro: "A course I'm actively working through to deepen my full-stack and AI/ML skills.",
    courseDescription:
      "An intensive online program from Apna College covering full-stack web development alongside applied AI/ML — from core Python and deep learning fundamentals to LLMs, RAG, and agentic AI systems. Working through it to sharpen the skills behind the projects on this site and build production-ready, AI-enhanced applications.",
    inProgress: "In progress",
    estimated: "Est. Sept 2026",
  },
  languages: {
    eyebrow: "Languages",
    heading: "Speaking Your Language",
    intro: "Wherever a conversation starts — in English or auf Deutsch — I'm ready to have it.",
  },
  hobbies: {
    eyebrow: "Hobbies",
    heading: "Life outside the code.",
    intro:
      "A few habits and interests that keep me sharp, disciplined, and connected to something other than a screen.",
  },
  contact: {
    heading: "Let's Connect",
  },
  footer: {
    rights: "All rights reserved.",
  },
};

export type Dictionary = typeof en;

const de: Dictionary = {
  meta: {
    title: "Rahul Kaushik — Portfolio",
    description:
      "Persönliches Portfolio von Rahul Kaushik — an der Schnittstelle von Web Engineering und Full-Stack-Entwicklung.",
  },
  nav: {
    portfolio: "Portfolio",
    contact: "Kontakt",
    menu: "Menü",
    toggleMenu: "Navigationsmenü umschalten",
    switchLanguage: "Switch to English",
  },
  hero: {
    greeting: "Hallo, ich bin",
    intro:
      "Immer neugierig, immer am Lernen — aktuell auf der Suche nach einer Werkstudentenstelle, um meine Fähigkeiten weiterzuentwickeln und an echten Projekten mitzuarbeiten.",
    viewProjects: "Projekte ansehen",
    downloadCv: "Lebenslauf herunterladen",
    photoAlt: "Foto von",
    uploadPhoto: "Foto hochladen",
  },
  education: {
    eyebrow: "Ausbildung",
    heading: "Wo ich studiere",
  },
  skills: {
    heading: "Kenntnisse",
    intro: "Ein Überblick über die Tools und Technologien, mit denen ich arbeite — nach Bereichen gruppiert.",
  },
  projects: {
    heading: "Projekte",
    intro: "Eine Auswahl meiner Arbeiten — von Full-Stack-Anwendungen bis zu kleinen Experimenten.",
    screenshot: "Screenshot",
    showMore: "Mehr Projekte anzeigen",
    showFewer: "Weniger Projekte anzeigen",
  },
  focus: {
    eyebrow: "Aktueller Fokus",
    heading: "Lernen in Bewegung",
    intro:
      "Ein Kurs, den ich derzeit absolviere, um meine Full-Stack- und KI/ML-Kenntnisse zu vertiefen.",
    courseDescription:
      "Ein intensives Online-Programm von Apna College, das Full-Stack-Webentwicklung und angewandte KI/ML verbindet — von Python-Grundlagen und Deep Learning bis zu LLMs, RAG und agentenbasierten KI-Systemen. Damit schärfe ich die Fähigkeiten hinter den Projekten auf dieser Seite und lerne, produktionsreife, KI-gestützte Anwendungen zu bauen.",
    inProgress: "In Bearbeitung",
    estimated: "Voraussichtlich Sept. 2026",
  },
  languages: {
    eyebrow: "Sprachen",
    heading: "Ich spreche Ihre Sprache",
    intro: "Ob das Gespräch auf Deutsch oder in English beginnt — ich bin dabei.",
  },
  hobbies: {
    eyebrow: "Hobbys",
    heading: "Leben jenseits des Codes.",
    intro:
      "Ein paar Gewohnheiten und Interessen, die mich fokussiert und diszipliniert halten — und mit etwas anderem als einem Bildschirm verbinden.",
  },
  contact: {
    heading: "Kontakt aufnehmen",
  },
  footer: {
    rights: "Alle Rechte vorbehalten.",
  },
};

const dictionaries: Record<Locale, Dictionary> = { en, de };

export const getDictionary = (locale: Locale) => dictionaries[locale];
