import { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import About from '../components/About';
import Process from '../components/Process';
import Services from '../components/Services';

// Відкладене завантаження важких компонентів
const Reviews = lazy(() => import('../components/Reviews'));
const FAQ = lazy(() => import('../components/FAQ'));
const Contact = lazy(() => import('../components/Contact'));

// Простий плейсхолдер під час завантаження
const Loader = () => <div className="h-40 bg-stone-950" />;

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Кератин, ботокс та нанопластика волосся у Львові | Haircare UA</title>
        <meta name="description" content="Професійне кератинове вирівнювання, ботокс та нанопластика волосся у Львові. Індивідуальний підбір процедури та дзеркальний блиск." />
        <link rel="canonical" href="https://www.haircareua.com.ua/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BeautySalon",
            "name": "Haircare UA Lviv",
            "description": "Студія кератинового вирівнювання та відновлення волосся у Львові",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "вул. Костюшка, 18",
              "addressLocality": "Львів",
              "addressCountry": "UA"
            },
            "url": "https://www.haircareua.com.ua",
            "priceRange": "₴₴"
          })}
        </script>
      </Helmet>

      <Hero />
      <TrustBar />
      <About />
      <Process />
      <Services />
      
      {/* Ці блоки завантажаться окремо, не блокуючи головний екран */}
      <Suspense fallback={<Loader />}>
        <Reviews />
        <FAQ />
        <Contact />
      </Suspense>
    </>
  );
}