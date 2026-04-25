import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import About from '../components/About';
import Process from '../components/Process';
import Services from '../components/Services';
import Reviews from '../components/Reviews';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Кератин, ботокс та нанопластика волосся у Львові | Haircare UA</title>
        <meta name="description" content="Професійне кератинове вирівнювання, ботокс та нанопластика волосся у Львові. Індивідуальний підбір процедури та дзеркальний блиск." />
        <link rel="canonical" href="https://www.haircareua.com.ua/" />
      </Helmet>
      
      <Hero />
      <TrustBar />
      <About />
      <Process />
      <Services />
      <Reviews />
      <FAQ />
      <Contact />
    </>
  );
}