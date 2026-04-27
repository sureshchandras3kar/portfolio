import Navbar from '@/app/components/Navbar';
import Hero from '@/app/components/Hero';
import About from '@/app/components/About';
import Skills from '@/app/components/Skills';
import Experience from '@/app/components/Experience';
import Projects from '@/app/components/Projects';
import Education from '@/app/components/Education';
import Contact from '@/app/components/Contact';
import Footer from '@/app/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      {/* Blog section will be implemented separately */}
      <Education />
      <Contact />
      <Footer />
    </>
  );
}
