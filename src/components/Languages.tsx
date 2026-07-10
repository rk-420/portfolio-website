import { languages } from "@/data/languages";

export default function Languages() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent">
        Languages
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Speaking Your Language
      </h2>
      <p className="mt-3 max-w-2xl text-muted">
        Wherever a conversation starts — in English or auf Deutsch — I&apos;m ready to have it.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {languages.map((lang) => (
          <div
            key={lang.name}
            className="flex items-center gap-4 rounded-2xl border border-card-border bg-card p-6 shadow-sm shadow-black/5"
          >
            <span className="text-3xl" aria-hidden="true">
              {lang.flag}
            </span>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-semibold text-foreground">{lang.name}</h3>
                <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-semibold text-accent">
                  {lang.level}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted">{lang.note}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
