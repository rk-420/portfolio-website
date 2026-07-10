import { site } from "@/data/site";
import HeroPhoto from "@/components/HeroPhoto";
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  LocationIcon,
  DownloadIcon,
} from "@/components/icons";

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-16 pb-20 sm:pt-24">
      <div className="grid items-center gap-12 sm:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent">
            Hi, I&apos;m
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {site.name}
          </h1>
          <p className="mt-3 text-lg font-medium text-foreground/80 sm:text-xl">
            Always curious, always learning — currently looking for a working student
            position to grow my skills while contributing to real-world projects.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted">
            <span className="flex items-center gap-1.5">
              <LocationIcon className="h-4 w-4" />
              {site.location}
            </span>
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-1.5 transition-colors hover:text-accent"
            >
              <MailIcon className="h-4 w-4" />
              {site.email}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-sm transition-transform hover:scale-[1.03] hover:shadow-md"
            >
              View Projects
            </a>
            <a
              href={site.cvUrl}
              download
              className="flex items-center gap-2 rounded-full border border-card-border bg-card px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition-transform hover:scale-[1.03] hover:shadow-md"
            >
              <DownloadIcon className="h-4 w-4" />
              Download CV
            </a>

            <div className="flex items-center gap-3 pl-1">
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-card-border bg-card text-foreground/80 transition-colors hover:border-accent hover:text-accent"
              >
                <GitHubIcon className="h-5 w-5" />
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-card-border bg-card text-foreground/80 transition-colors hover:border-accent hover:text-accent"
              >
                <LinkedInIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <HeroPhoto alt={`Photo of ${site.name}`} />
      </div>
    </section>
  );
}
