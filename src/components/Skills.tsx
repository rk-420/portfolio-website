"use client";

import { useState } from "react";
import { skillCategories } from "@/data/skills";
import { ChevronDownIcon } from "@/components/icons";

export default function Skills() {
  const [openCategories, setOpenCategories] = useState<Set<string>>(
    () => new Set([skillCategories[0]?.category])
  );

  function toggle(category: string) {
    setOpenCategories((prev) => {
      const next = new Set(prev);
      if (next.has(category)) {
        next.delete(category);
      } else {
        next.add(category);
      }
      return next;
    });
  }

  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <h2 className="text-3xl font-bold tracking-tight text-foreground">Skills</h2>
      <p className="mt-2 max-w-2xl text-muted">
        A snapshot of the tools and technologies I work with, grouped by area.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {skillCategories.map(({ category, skills }) => {
          const isOpen = openCategories.has(category);
          return (
            <div
              key={category}
              className="overflow-hidden rounded-2xl border border-card-border bg-card shadow-sm shadow-black/5"
            >
              <button
                type="button"
                onClick={() => toggle(category)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
                aria-expanded={isOpen}
              >
                <span className="text-lg font-semibold text-foreground">{category}</span>
                <ChevronDownIcon
                  className={`h-5 w-5 text-accent transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="flex flex-wrap gap-2 px-6 pb-6">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-accent-soft px-3 py-1.5 text-sm font-medium text-accent"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
