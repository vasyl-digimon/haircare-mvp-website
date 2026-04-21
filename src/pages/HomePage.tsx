import Hero from '../components/Hero';
import About from '../components/About';
import Process from '../components/Process';
import Services from '../components/Services';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Process />
      <Services />
      <FAQ />
      <Contact />
    </>
  );
}