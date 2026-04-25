import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar'; // 1. Додаємо імпорт
import About from '../components/About';
import Process from '../components/Process';
import Services from '../components/Services';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Вирівнювання та відновлення волосся Львів | Студія Haircare UA</title>
        <meta name="description" content="Професійна студія випрямлення волосся у Львові. Кератин, ботокс, нанопластика. Понад 500 задоволених клієнток. Записуйтесь!" />
        <link rel="canonical" href="https://www.haircareua.com.ua/" />
      </Helmet>
      
      <Hero />
      <TrustBar /> {/* 2. Вставляємо тут */}
      <About />
      <Process />
      <Services />
      <FAQ />
      <Contact />
    </>
  );
}