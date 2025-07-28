// src/components/About.js
import React from "react";
import Image from "next/image";
import foto from "../assets/images/yo.jpg";

const About = () => {
  return (
    <section id="about" className="bg-white text-gray-800 p-8 scroll-mt-16">
      <h2 className="text-3xl font-semibold text-primary-700">Sobre mí</h2>
      <div className="flex flex-col mt-10 lg:flex-row items-center justify-center mx-auto gap-16 max-w-(--breakpoint-xl)">
        <p className="text-lg">
          Soy un estudiante de Ingeniería Informática apasionado por el
          desarrollo de soluciones innovadoras y eficaces. A lo largo de mi
          formación, he adquirido habilidades técnicas sólidas, tanto en el
          front-end como en el back-end, dominando tecnologías como React,
          Tailwind CSS, y Spring Boot. Me destaco por mi capacidad para abordar
          problemas complejos con un enfoque estructurado, priorizando siempre
          la calidad y la funcionalidad en los proyectos que desarrollo. Además,
          tengo un fuerte interés en la planificación y gestión de proyectos, lo
          que me permite organizar tareas y objetivos de manera eficiente,
          garantizando resultados de alto impacto. Mi compromiso con el
          aprendizaje continuo y la excelencia me impulsan a enfrentar nuevos
          retos con entusiasmo y creatividad.
        </p>
        <Image
          src={foto}
          width={240}
          alt="Descripción de la imagen"
          className="rounded-2xl"
        />
      </div>
    </section>
  );
};

export default About;
