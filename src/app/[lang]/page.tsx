import { notFound } from "next/navigation";
import { hasLocale } from "@/i18n/config";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import CurrentFocus from "@/components/CurrentFocus";
import Projects from "@/components/Projects";
import Languages from "@/components/Languages";
import Hobbies from "@/components/Hobbies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <>
      <Navbar lang={lang} />
      <main className="flex-1">
        <Hero lang={lang} />
        <Education lang={lang} />
        <Skills lang={lang} />
        <Projects lang={lang} />
        <CurrentFocus lang={lang} />
        <Languages lang={lang} />
        <Hobbies lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
