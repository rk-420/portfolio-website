export type Language = {
  name: string;
  level: string;
  note: string;
  flag: string;
};

export const languages: Language[] = [
  {
    name: "Hindi",
    level: "Native",
    note: "My mother tongue — the language I grew up thinking in.",
    flag: "🇮🇳",
  },
  {
    name: "English",
    level: "Fluent",
    note: "The language I think, code, and write in day to day.",
    flag: "🇬🇧",
  },
  {
    name: "German",
    level: "C1",
    note: "Living and working in Darmstadt has made this second nature.",
    flag: "🇩🇪",
  },
];
