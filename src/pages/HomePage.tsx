import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import About from '../components/About';
import Process from '../components/Process';
import Services from '../components/Services';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Вирівнювання та відновлення волосся Львів | Haircare UA</title>
        <meta name="description" content="Професійне випрямлення волосся у Львові: кератин, ботокс, нанопластика. Зробимо ваше волосся ідеально рівним та блискучим." />
        <link rel="canonical" href="https://www.haircareua.com.ua/" />
      </Helmet>
      
      <Hero />
      <About />
      <Process />
      <Services />
      <FAQ />
      <Contact />
    </>
  );
}