export const locales = ["en", "de"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

// Cookie that remembers the visitor's language choice (read by src/proxy.ts)
export const localeCookie = "NEXT_LOCALE";

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

// A piece of content that exists in every supported language
export type Localized = Record<Locale, string>;
