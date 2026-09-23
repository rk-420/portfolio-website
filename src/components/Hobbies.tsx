import { hobbies } from "@/data/hobbies";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export default function Hobbies({ lang }: { lang: Locale }) {
  const t = getDictionary(lang).hobbies;

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent">
        {t.eyebrow}
      </p>
      <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        {t.heading}
      </h2>
      <p className="mt-4 max-w-2xl text-muted">
        {t.intro}
      </p>

      <div className="mt-10 border-t border-card-border">
        {hobbies.map((hobby) => (
          <div
            key={hobby.title.en}
            className="flex items-start gap-5 border-b border-card-border py-8"
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-2xl">
              <span aria-hidden="true">{hobby.icon}</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">{hobby.title[lang]}</h3>
              <p className="mt-2 max-w-xl text-muted">{hobby.description[lang]}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
