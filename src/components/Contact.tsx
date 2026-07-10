import { site } from "@/data/site";
import {
  MailIcon,
  PhoneIcon,
  LocationIcon,
  GitHubIcon,
  LinkedInIcon,
} from "@/components/icons";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <div className="rounded-3xl border border-card-border bg-card p-8 shadow-sm shadow-black/5 sm:p-12">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Let&apos;s Connect</h2>
        </div>

        <div className="mx-auto mt-8 grid max-w-xl gap-3 sm:grid-cols-2">
          <a
            href={`mailto:${site.email}`}
            className="flex items-center gap-2.5 rounded-xl border border-card-border bg-background px-4 py-3 text-sm text-foreground/90 transition-colors hover:border-accent hover:text-accent"
          >
            <MailIcon className="h-4 w-4 shrink-0" />
            {site.email}
          </a>
          <a
            href={`tel:${site.phone.replace(/\s+/g, "")}`}
            className="flex items-center gap-2.5 rounded-xl border border-card-border bg-background px-4 py-3 text-sm text-foreground/90 transition-colors hover:border-accent hover:text-accent"
          >
            <PhoneIcon className="h-4 w-4 shrink-0" />
            {site.phone}
          </a>
          <span className="flex items-center gap-2.5 rounded-xl border border-card-border bg-background px-4 py-3 text-sm text-foreground/90">
            <LocationIcon className="h-4 w-4 shrink-0" />
            {site.location}
          </span>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2.5 rounded-xl border border-card-border bg-background px-4 py-3 text-sm text-foreground/90 transition-colors hover:border-accent hover:text-accent"
          >
            <LinkedInIcon className="h-4 w-4 shrink-0" />
            LinkedIn
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2.5 rounded-xl border border-card-border bg-background px-4 py-3 text-sm text-foreground/90 transition-colors hover:border-accent hover:text-accent sm:col-span-2"
          >
            <GitHubIcon className="h-4 w-4 shrink-0" />
            {site.github.replace("https://", "")}
          </a>
        </div>
      </div>
    </section>
  );
}
