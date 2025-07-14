import { Header } from '@/components/Header';
import Hero from '@/components/Hero';
import AboutMe from '@/components/AboutMe';
import Why from '@/components/Why';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-24">
      <Header />
      <main>
        <div className="max-w-4xl mx-auto px-4"> {/* CONTENEDOR PRINCIPAL */}
          <Hero />
          <AboutMe />
          <Why />
          <Projects />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}