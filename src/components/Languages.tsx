import { languages } from "@/data/languages";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export default function Languages({ lang }: { lang: Locale }) {
  const t = getDictionary(lang).languages;

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent">
        {t.eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {t.heading}
      </h2>
      <p className="mt-3 max-w-2xl text-muted">
        {t.intro}
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {languages.map((language) => (
          <div
            key={language.name.en}
            className="flex items-center gap-4 rounded-2xl border border-card-border bg-card p-6 shadow-sm shadow-black/5"
          >
            <span className="text-3xl" aria-hidden="true">
              {language.flag}
            </span>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-semibold text-foreground">{language.name[lang]}</h3>
                <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-semibold text-accent">
                  {language.level[lang]}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted">{language.note[lang]}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
