import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import CurrentFocus from "@/components/CurrentFocus";
import Projects from "@/components/Projects";
import Languages from "@/components/Languages";
import Hobbies from "@/components/Hobbies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Skills />
        <Projects />
        <CurrentFocus />
        <Languages />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
