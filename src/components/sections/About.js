// src/components/About.js
import React from "react";
import miniyo from "../../assets/images/about/miniyo.jpg";
import graduado from "../../assets/images/about/graduado.jpg";

const About = () => {
  return (
    <section id="about" className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 p-8 scroll-mt-15">
      <h2 className="text-3xl font-semibold text-primary-700">Sobre mí</h2>
      <div className="flex flex-col mt-10 lg:flex-row items-center justify-center mx-auto gap-16 max-w-screen-lg">
        <p className="text-lg">
          ¡Hola!👋 Mi nombre es Alonso Crespo Fernández. Desde pequeño, 
          he tenido una fuerte atracción por la informática. Me fascinaba entender 
          cómo funcionaban los ordenadores, desmontarlos y cacharrear por mi cuenta. Esta curiosidad inicial se convirtió 
          con el tiempo en una verdadera pasión que me impulsó a aprender y a formarme
           en el ámbito tecnológico.
        </p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={miniyo.src}
          alt="Foto de Alonso de pequeño dando mis primeros pasos en la informática"
          className="rounded-2xl h-80"
        />
      </div>
      <div className="flex flex-col mt-15 lg:mt-0 lg:flex-row items-center justify-center mx-auto gap-16 max-w-screen-lg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={graduado.src}
          alt="Foto de Alonso graduado como Ingeniero Informático"
          className="rounded-2xl h-80 order-2 lg:order-1"
        />
        <p className="text-lg order-1 lg:order-2">
          Finalmente, apasionado por el desarrollo de soluciones innovadoras 
          y eficaces, me formé como <span className="font-bold">Ingeniero Informático</span>. Me destaco por mi 
          capacidad para abordar problemas complejos con un enfoque estructurado, 
          priorizando siempre
          la calidad y la funcionalidad en los proyectos que desarrollo. Mi compromiso con el
          aprendizaje continuo y la excelencia me impulsan a enfrentar nuevos
          retos con entusiasmo y creatividad.
        </p>
      </div>
    </section>
  );
};

export default About;