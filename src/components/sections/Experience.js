import Timeline from "../util/Timeline";
import uclm from "../../assets/images/education/uclm.png";
import { useScrollReveal } from '../util/useScrollReveal';

const Experience = () => {
  const { ref, className } = useScrollReveal();
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
    <section id="experience" ref={ref} className={`bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100 p-8 scroll-mt-15 ${className}`}>
      <h2 className="text-3xl font-semibold text-primary-700">Experiencia</h2>
      <div className="flex justify-center mx-auto">
        <Timeline eventos={eventos} />
      </div>
    </section>
  );
};

export default Experience;
