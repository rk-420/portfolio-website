import type { Localized } from "@/i18n/config";

export type Education = {
  degree: Localized;
  institution: string;
  location: Localized;
  period: Localized;
};

export const education: Education[] = [
  {
    degree: { en: "B.Sc. in Informatik", de: "B.Sc. Informatik" },
    institution: "Hochschule Darmstadt",
    location: { en: "Darmstadt, Germany", de: "Darmstadt, Deutschland" },
    period: { en: "Nov 2021 – Present", de: "Nov. 2021 – heute" },
  },
];
