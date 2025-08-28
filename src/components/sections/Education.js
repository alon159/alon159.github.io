import Timeline from "../util/Timeline";
import spainflag from "../../assets/images/education/spain-flag-square-xs.png";
import ukflag from "../../assets/images/education/united-kingdom-flag-square-xs.png";
import uclm from "../../assets/images/education/uclm.png";
import ies from "../../assets/images/education/ies.png";
import { useScrollReveal } from '../util/useScrollReveal';
import { useTranslation } from 'react-i18next';

const Education = () => {
  const { ref, className } = useScrollReveal();
  const { t } = useTranslation();
  const languages = [
    { language: t("education.languages.spanish.title"), level: t("education.languages.spanish.level"), flag: spainflag },
    { language: t("education.languages.english.title"), level: t("education.languages.english.level"), flag: ukflag },
  ];
  const eventos = [
    {
      titulo: t("education.academic.master.title"),
      logo: uclm,
      fecha: t("education.academic.master.date"),
      lugar: "Escuela Superior de Informática de Ciudad Real, UCLM",
      actual: true,
    },
    {
      titulo: t("education.academic.degree.title"),
      logo: uclm,
      fecha: t("education.academic.degree.date"),
      lugar: "Escuela Superior de Informática de Ciudad Real, UCLM",
      detalle: t("education.academic.degree.detail"),
      actual: false,
    },
    {
      titulo: t("education.academic.bachelor.title"),
      logo: ies,
      fecha: t("education.academic.bachelor.date"),
      lugar: "IES Berenguela de Castilla, Bolaños de Calatrava",
      detalle: t("education.academic.bachelor.detail"),
      actual: false,
    },
    {
      titulo: t("education.academic.institute.title"),
      logo: ies,
      fecha: t("education.academic.institute.date"),
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
      <h2 className="text-3xl font-semibold text-primary-700">{t("header.education")}</h2>
      <div className="flex flex-col mt-5 lg:flex-row items-top justify-center max-w-(--breakpoint-xl) mx-auto gap-8 lg:gap-64">
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-2xl font-bold">{t("education.academic.title")}</h3>
          <Timeline eventos={eventos} />
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-bold">{t("education.languages.title")}</h3>
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
