import { education } from "@/data/education";
import { GraduationCapIcon } from "@/components/icons";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent">
        Education
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Where I Studied
      </h2>

      <div className="mt-8 grid gap-4">
        {education.map((item) => (
          <div
            key={`${item.degree}-${item.institution}`}
            className="flex flex-col gap-4 rounded-2xl border border-card-border bg-card p-6 shadow-sm shadow-black/5 sm:flex-row sm:items-start sm:justify-between"
          >
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                <GraduationCapIcon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">{item.degree}</h3>
                <p className="mt-1 text-sm text-muted">
                  {item.institution} · {item.location}
                </p>
              </div>
            </div>
            <span className="shrink-0 rounded-full border border-card-border bg-background px-4 py-1.5 text-sm font-medium text-muted">
              {item.period}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
