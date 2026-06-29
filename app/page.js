import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { TechMarquee } from '@/components/TechMarquee';
import { About } from '@/components/About';
import { Achievements } from '@/components/Achievements';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { Resume } from '@/components/Resume';
import { Contact } from '@/components/Contact';
import { Hobbies } from '@/components/Hobbies';
import { Footer } from '@/components/Footer';
import { FooterMarquee } from '@/components/FooterMarquee';
import { BackToTop } from '@/components/BackToTop';
import { Analytics } from '@/components/Analytics';
import { ScrollProgress } from '@/components/ScrollProgress';
import { CursorTrail } from '@/components/CursorTrail';
import { FloatingText } from '@/components/FloatingText';

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <CursorTrail />
      <FloatingText />
      <a href="#home" className="skip-link">Skip to main content</a>
      <Nav />
      <main>
        <Hero />
        <TechMarquee />
        <About />
        <Achievements />
        <Projects />
        <Skills />
        <Resume />
        <Hobbies />
        <Contact />
      </main>
      <FooterMarquee />
      <Footer />
      <BackToTop />
      <Analytics />
    </>
  );
}
