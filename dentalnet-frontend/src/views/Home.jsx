import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'keen-slider/keen-slider.min.css';
// import { useKeenSlider } from 'keen-slider/react'; // import from 'keen-slider/react.es' for to get an ES module

import { NavBar } from '../components/navegation/NavBar';
import HeroSection from '../components/home/HeroSection';
import StripeOne from '../components/home/StripeOne';
import ListOfServices from '../components/home/ListOfServices';
import MainFeatures from '../components/home/MainFeatures';
import StripeTwo from '../components/home/StripeTwo';
import WhoWeAre from '../components/home/WhoWeAre';
import OurDoctors from '../components/home/DoctorsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import Form from '../components/home/Form';
import NewsLetterForm from '../components/home/NewsLetterForm';
import Footer from '../components/home/Footer';

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <NavBar />

      <main className="pb-8">
        {/* Hero */}
        <section id="inicio" className="mt-2">
          <div className="flex flex-col justify-center items-center mx-auto break-words">
            <HeroSection />
          </div>
        </section>

        {/* Primera franja */}
        <StripeOne />
        <section className="bg-white px-6" id="modulos"></section>

        {/* Lista de que es lo que ofrecemos */}
        <section className="bg-white px-6" id="modulos">
          <ListOfServices />
        </section>

        {/* Que nos hace especiales? */}
        <section className="bg-white px-6" id="modulos">
          <MainFeatures />
        </section>

        {/* Que nos hace especiales? */}
        <section className="bg-white px-6" id="modulos">
          <StripeTwo />
        </section>

        {/* Quienes somos */}
        <section className="bg-white px-6" id="modulos">
          <WhoWeAre />
        </section>

        {/* Quienes somos */}
        <section className="bg-white px-6" id="modulos">
          <OurDoctors />
        </section>

        {/* Quienes somos */}
        <section className="bg-white px-6" id="modulos">
          <TestimonialsSection />
        </section>

        {/* Formulario de contacto */}
        <section className="bg-white px-6" id="modulos">
          <Form />
        </section>

        {/* Formulario de contacto */}
        <section className="bg-white px-6" id="modulos">
          <NewsLetterForm />
        </section>
      </main>

      {/* Footer */}
      <Footer index={true} />
    </>
  );
};

export default Home;
