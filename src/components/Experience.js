// src/components/Experience.js
import React from "react";
import Timeline from "./Timeline";
import uclm from "../assets/images/uclm.png";

const Experience = () => {
  const eventos = [
    {
      titulo: "Becario TIC",
      logo: uclm,
      fecha: "Enero 2021 - Junio 2024",
      lugar: "Biblioteca General de Ciudad Real, UCLM",
      detalle:
        "· Preparación y mantenimiento de equipamiento para el PAS y PDI.\n · Atención, información y resolución de incidencias de estudiantes.",
      actual: false,
    },
  ];
  return (
    <section id="experience" className="bg-gray-100 p-8 scroll-mt-16">
      <h2 className="text-3xl font-semibold text-primary-700">Experiencia</h2>
      <div className="flex justify-center mx-auto">
        <Timeline eventos={eventos} />
      </div>
    </section>
  );
};

export default Experience;
