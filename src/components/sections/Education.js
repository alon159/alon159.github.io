import Timeline from "../util/Timeline";
import spainflag from "../../assets/images/education/spain-flag-square-xs.png";
import ukflag from "../../assets/images/education/united-kingdom-flag-square-xs.png";
import uclm from "../../assets/images/education/uclm.png";
import ies from "../../assets/images/education/ies.png";
import { useScrollReveal } from '../util/useScrollReveal';

const Education = () => {
  const { ref, className } = useScrollReveal();
  const languages = [
    { language: "Español", level: "Lengua nativa", flag: spainflag },
    { language: "Inglés", level: "B2 First Cambridge", flag: ukflag },
  ];
  const eventos = [
    {
      titulo: "Máster en Ingeniería Informática",
      logo: uclm,
      fecha: "Septiembre 2025",
      lugar: "Escuela Superior de Informática de Ciudad Real, UCLM",
      actual: true,
    },
    {
      titulo: "Grado en Ingeniería Informática",
      logo: uclm,
      fecha: "Septiembre 2020 - Julio 2025",
      lugar: "Escuela Superior de Informática de Ciudad Real, UCLM",
      detalle: "Especialización en Tecnologías de la Información",
      actual: false,
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
      ref={ref}
      className={`bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100 p-8 scroll-mt-15 ${className}`}
    >
      <h2 className="text-3xl font-semibold text-primary-700">Formación</h2>
      <div className="flex flex-col mt-5 lg:flex-row items-top justify-center max-w-(--breakpoint-xl) mx-auto gap-8 lg:gap-64">
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
                className="flex flex-row gap-4 items-center bg-transparent dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-4 rounded-lg mb-4 border border-gray-200 project-card"
                aria-label={`Idioma ${lang.language} con nivel ${lang.level}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={lang.flag.src} alt={lang.language} title={lang.language} className="w-10 h-8" />
                <div className="flex flex-col">
                  <h3 className="text-lg font-semibold">
                    {lang.language}
                  </h3>
                  <p className="text-base font-normal text-primary-700 dark:text-primary-500">
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
