import miniyo from "../../assets/images/about/miniyo.jpg";
import graduado from "../../assets/images/about/graduado.jpg";
import { useScrollReveal } from '../util/useScrollReveal';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { ref, className } = useScrollReveal();
  const { t } = useTranslation();

  return (
    <section id="about" ref={ref} className={`bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 p-8 scroll-mt-15 ${className}`}>
      <h2 className="text-3xl font-semibold text-primary-700">{t('header.about')}</h2>
      <div className="flex flex-col mt-10 lg:flex-row items-center justify-center mx-auto gap-16 max-w-screen-lg">
        <p className="text-lg">
          {t('about.text1')}
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
          {t('about.text2')}
        </p>
      </div>
    </section>
  );
};

export default About;