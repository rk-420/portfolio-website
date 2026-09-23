import type { Localized } from "@/i18n/config";

export type Hobby = {
  title: Localized;
  description: Localized;
  icon: string;
};

export const hobbies: Hobby[] = [
  {
    title: { en: "Badminton", de: "Badminton" },
    description: {
      en: "Fast rallies force fast decisions. It sharpens my reflexes and keeps me quick on my feet, on and off the court.",
      de: "Schnelle Ballwechsel erfordern schnelle Entscheidungen. Das schärft meine Reflexe und hält mich flink — auf dem Platz und daneben.",
    },
    icon: "🏸",
  },
  {
    title: { en: "Table Tennis", de: "Tischtennis" },
    description: {
      en: "A split-second sport — I love the focus it demands and the instant feedback loop of every point.",
      de: "Ein Sport der Sekundenbruchteile — ich liebe die Konzentration, die er verlangt, und das direkte Feedback bei jedem Punkt.",
    },
    icon: "🏓",
  },
  {
    title: { en: "Snooker", de: "Snooker" },
    description: {
      en: "The opposite pace of table tennis: patience, precision, and thinking several shots ahead before committing to one.",
      de: "Das Gegenstück zum Tischtennis: Geduld, Präzision und mehrere Stöße vorausdenken, bevor man sich für einen entscheidet.",
    },
    icon: "🎱",
  },
  {
    title: { en: "Cycling", de: "Radfahren" },
    description: {
      en: "Long rides are where I do my best thinking — a good way to clear my head and build endurance at the same time.",
      de: "Auf langen Touren kommen mir die besten Gedanken — ideal, um den Kopf freizubekommen und gleichzeitig Ausdauer aufzubauen.",
    },
    icon: "🚴",
  },
  {
    title: { en: "Cooking", de: "Kochen" },
    description: {
      en: "I love inviting friends over and cooking for them — trying out a new cuisine, turning the kitchen into a little experiment, and watching a meal bring everyone to the same table.",
      de: "Ich lade gern Freunde ein und koche für sie — probiere neue Küchen aus, verwandle die Küche in ein kleines Experiment und freue mich, wenn ein Essen alle an einen Tisch bringt.",
    },
    icon: "🍳",
  },
];
