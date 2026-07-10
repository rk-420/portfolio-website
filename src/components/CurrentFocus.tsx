import { ExternalLinkIcon } from "@/components/icons";

const skills = [
  "Python",
  "Machine Learning",
  "Deep Learning",
  "NumPy",
  "Pandas",
  "Scikit-learn",
  "PyTorch",
  "TensorFlow",
  "LLMs",
  "RAG",
  "Generative AI (GenAI)",
  "Agentic AI",
  "Docker",
  "Flask",
  "Kubernetes",
];

export default function CurrentFocus() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent">
        Current Focus
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Learning in Motion
      </h2>
      <p className="mt-3 max-w-2xl text-muted">
        A course I&apos;m actively working through to deepen my full-stack and AI/ML skills.
      </p>

      <div className="mt-8 border-t border-card-border pt-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-2xl">
              🚀
            </div>
            <div>
              <a
                href="https://www.apnacollege.in/course/prime-2"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-lg font-semibold text-foreground transition-colors hover:text-accent"
              >
                Prime 2.0 — Full-Stack Development &amp; AI/ML
                <ExternalLinkIcon className="h-4 w-4 shrink-0" />
              </a>
              <p className="mt-2 max-w-xl text-sm text-muted">
                An intensive online program from Apna College covering full-stack web
                development alongside applied AI/ML — from core Python and deep learning
                fundamentals to LLMs, RAG, and agentic AI systems. Working through it to
                sharpen the skills behind the projects on this site and build
                production-ready, AI-enhanced applications.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-accent-soft px-3 py-1.5 text-xs font-medium text-accent"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex shrink-0 flex-row gap-2 sm:flex-col sm:items-end">
            <span className="rounded-full border border-card-border bg-card px-4 py-1.5 text-sm font-medium text-foreground">
              In progress
            </span>
            <span className="rounded-full border border-card-border bg-card px-4 py-1.5 text-sm font-medium text-muted">
              Est. Sept 2026
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
