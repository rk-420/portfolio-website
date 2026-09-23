import type { Localized } from "@/i18n/config";

export type Language = {
  name: Localized;
  level: Localized;
  note: Localized;
  flag: string;
};

export const languages: Language[] = [
  {
    name: { en: "Hindi", de: "Hindi" },
    level: { en: "Native", de: "Muttersprache" },
    note: {
      en: "My mother tongue — the language I grew up thinking in.",
      de: "Meine Muttersprache — die Sprache, in der ich denken gelernt habe.",
    },
    flag: "🇮🇳",
  },
  {
    name: { en: "English", de: "Englisch" },
    level: { en: "Fluent", de: "Fließend" },
    note: {
      en: "The language I think, code, and write in day to day.",
      de: "Die Sprache, in der ich im Alltag denke, programmiere und schreibe.",
    },
    flag: "🇬🇧",
  },
  {
    name: { en: "German", de: "Deutsch" },
    level: { en: "C1", de: "C1" },
    note: {
      en: "Living and working in Darmstadt has made this second nature.",
      de: "Durch das Leben und Arbeiten in Darmstadt ist sie mir zur zweiten Natur geworden.",
    },
    flag: "🇩🇪",
  },
];
