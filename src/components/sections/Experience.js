import Timeline from "../util/Timeline";
import uclm from "../../assets/images/education/uclm.png";
import { useScrollReveal } from '../util/useScrollReveal';
import { useTranslation } from 'react-i18next';

const Experience = () => {
  const { ref, className } = useScrollReveal();
  const { t } = useTranslation();
  const eventos = [
    {
      titulo: t("experience.library.title"),
      logo: uclm,
      fecha: t("experience.library.date"),
      lugar: t("experience.library.place"),
      detalle: t("experience.library.description"),
      actual: false,
    },
  ];
  return (
    <section id="experience" ref={ref} className={`bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100 p-8 scroll-mt-15 ${className}`}>
      <h2 className="text-3xl font-semibold text-primary-700">{t("header.experience")}</h2>
      <div className="flex justify-center mx-auto">
        <Timeline eventos={eventos} />
      </div>
    </section>
  );
};

export default Experience;
