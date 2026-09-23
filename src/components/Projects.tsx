"use client";

import { useState } from "react";
import Image from "next/image";
import { projects } from "@/data/projects";
import { ExternalLinkIcon } from "@/components/icons";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

const INITIAL_COUNT = 4;

export default function Projects({ lang }: { lang: Locale }) {
  const t = getDictionary(lang).projects;
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_COUNT);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <h2 className="text-3xl font-bold tracking-tight text-foreground">{t.heading}</h2>
      <p className="mt-2 max-w-2xl text-muted">
        {t.intro}
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {visibleProjects.map((project) => (
          <a
            key={project.link + project.title.en}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col overflow-hidden rounded-2xl border border-card-border bg-card shadow-sm shadow-black/5 transition-transform hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative aspect-[8/5] w-full overflow-hidden">
              <Image
                src={project.image}
                alt={`${project.title[lang]} ${t.screenshot}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col gap-3 p-6">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold text-foreground">{project.title[lang]}</h3>
                <ExternalLinkIcon className="h-5 w-5 shrink-0 text-muted transition-colors group-hover:text-accent" />
              </div>
              <p className="text-sm text-muted">{project.description[lang]}</p>
              <div className="mt-auto flex flex-wrap gap-2 pt-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>

      {projects.length > INITIAL_COUNT && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll((v) => !v)}
            className="rounded-full border border-card-border bg-card px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition-transform hover:scale-[1.03] hover:shadow-md"
          >
            {showAll ? t.showFewer : t.showMore}
          </button>
        </div>
      )}
    </section>
  );
}
