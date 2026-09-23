"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "@/data/site";
import { localeCookie, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export default function Navbar({ lang }: { lang: Locale }) {
  const [open, setOpen] = useState(false);
  const t = getDictionary(lang).nav;
  const otherLang: Locale = lang === "en" ? "de" : "en";

  const links = [
    { label: t.portfolio, href: "#projects" },
    { label: t.contact, href: "#contact" },
  ];

  function rememberLanguage() {
    document.cookie = `${localeCookie}=${otherLang}; path=/; max-age=31536000; samesite=lax`;
  }

  const languageSwitch = (
    <Link
      href={`/${otherLang}`}
      scroll={false}
      onClick={rememberLanguage}
      hrefLang={otherLang}
      aria-label={t.switchLanguage}
      title={t.switchLanguage}
      className="flex h-10 items-center rounded-full border border-card-border bg-card p-1 text-xs font-semibold"
    >
      {(["en", "de"] as const).map((l) => (
        <span
          key={l}
          className={`rounded-full px-2.5 py-1.5 uppercase transition-colors ${
            l === lang ? "bg-accent text-accent-foreground" : "text-foreground/70"
          }`}
        >
          {l}
        </span>
      ))}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-card-border/70 bg-background/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href={`/${lang}`}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-semibold text-accent-foreground"
        >
          {site.initials}
        </Link>

        <div className="hidden items-center gap-8 sm:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
          {languageSwitch}
        </div>

        <div className="flex items-center gap-3 sm:hidden">
          {languageSwitch}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-card-border"
            aria-label={t.toggleMenu}
            aria-expanded={open}
          >
            <span className="sr-only">{t.menu}</span>
            <div className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-5 bg-foreground" />
              <span className="block h-0.5 w-5 bg-foreground" />
              <span className="block h-0.5 w-5 bg-foreground" />
            </div>
          </button>
        </div>
      </nav>

      {open && (
        <div className="flex flex-col gap-1 border-t border-card-border/70 px-6 py-4 sm:hidden">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-accent-soft hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
