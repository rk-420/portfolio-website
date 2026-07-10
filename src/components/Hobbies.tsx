import { hobbies } from "@/data/hobbies";

export default function Hobbies() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent">
        Hobbies
      </p>
      <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        Life outside the code.
      </h2>
      <p className="mt-4 max-w-2xl text-muted">
        A few habits and interests that keep me sharp, disciplined, and connected to
        something other than a screen.
      </p>

      <div className="mt-10 border-t border-card-border">
        {hobbies.map((hobby) => (
          <div
            key={hobby.title}
            className="flex items-start gap-5 border-b border-card-border py-8"
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-2xl">
              <span aria-hidden="true">{hobby.icon}</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">{hobby.title}</h3>
              <p className="mt-2 max-w-xl text-muted">{hobby.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
