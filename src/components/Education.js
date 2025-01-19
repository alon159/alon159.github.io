import React from "react";
import Timeline from "./Timeline";
import spainflag from "../assets/images/spain-flag-square-xs.png";
import ukflag from "../assets/images/united-kingdom-flag-square-xs.png";
import uclm from "../assets/images/uclm.png";
import ies from "../assets/images/ies.png";

const Education = () => {
  const languages = [
    { language: "Español", level: "Lengua nativa", flag: spainflag },
    { language: "Inglés", level: "B2 First Cambridge", flag: ukflag },
  ];
  const eventos = [
    {
      titulo: "Grado en Ingeniería Informática",
      logo: uclm,
      fecha: "Septiembre 2020",
      lugar: "Escuela Superior de Informática de Ciudad Real, UCLM",
      detalle: "Especialización en Tecnologías de la Información",
      actual: true,
    },
    {
      titulo: "Bachillerato",
      logo: ies,
      fecha: "Septiembre 2018 - Junio 2020",
      lugar: "IES Berenguela de Castilla, Bolaños de Calatrava",
      detalle: "Modalidad de Ciencias y Tecnología",
      actual: false,
    },
    {
      titulo: "Educación Secundaria Obligatoria",
      logo: ies,
      fecha: "Septiembre 2014 - Junio 2018",
      lugar: "IES Berenguela de Castilla, Bolaños de Calatrava",
      detalle: "",
      actual: false,
    },
  ];
  return (
    <section
      id="education"
      className="bg-white text-gray-800 p-8 scroll-mt-16"
    >
      <h2 className="text-3xl font-semibold text-primary-700">Formación</h2>
      <div className="flex flex-col mt-5 lg:flex-row items-top justify-center max-w-screen-xl mx-auto gap-8 lg:gap-64">
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-2xl font-bold">Académica</h3>
          <Timeline eventos={eventos} />
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-bold">Idiomas</h3>
          <div className="mt-10 max-w-md mx-auto">
            {languages.map((lang, index) => (
              <div
                key={index}
                className="flex flex-row gap-4 items-center bg-white-100 p-4 rounded-lg mb-4 border-2 border-grey-100 transition-transform transform hover:scale-105 hover:shadow-md"
                aria-label={`Idioma ${lang.language} con nivel ${lang.level}`}
              >
                <img src={lang.flag} alt={lang.language} className="w-10 h-8" />
                <div className="flex flex-col">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {lang.language}
                  </h3>
                  <p className="text-base font-normal text-blue-800">
                    {lang.level}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
