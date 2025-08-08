import React from "react";
import foto from "../../assets/images/about/yo.jpg";
import ContactInfo from "../util/ContactInfo";

const Home = () => {
  return (
    <section
      id="home"
      className="bg-transparent min-h-screen flex md:items-center scroll-mt-15 relative"
    >
      <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 w-full bg-grid-pattern -z-10" />
      <div className="gap-8 items-center px-4 mx-auto max-w-(--breakpoint-xl) xl:gap-16 md:grid md:grid-cols-2 md:px-10">
        <div className="mt-4 mb-6">
          <h1 className="text-4xl mb-2 tracking-tight font-bold text-gray-900 dark:text-white">
            Alonso Crespo
          </h1>
          <h2 className="mb-6
           text-4xl tracking-tight font-bold text-primary-700 dark:text-primary-600">
            Ingeniero Informático
          </h2>
          {/* Image for small screens - shows between h2 and ContactInfo */}
          <div className="flex justify-center mb-6 md:hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={foto.src}
              alt="Alonso Crespo"
              className="rounded-2xl h-70 object-cover"
            />
          </div>
          <p className="mb-6 hidden md:block font-light text-gray-900 md:text-lg dark:text-gray-400">
            Bienvenido a mi portfolio, donde podrás encontrar información sobre
            mi experiencia, habilidades y proyectos realizados.
          </p>
          <ContactInfo className="mb-6 justify-center md:justify-start"/>
          <div className="flex justify-center md:justify-start">
            <a
              href="#about"
              className="inline-flex items-center text-white bg-primary-700 dark:bg-primary-800 hover:bg-primary-800 dark:hover:bg-primary-700 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
            >
              <svg
                className="w-5 h-5 mr-2 rotate-90"
                viewBox="0 0 18 18"
                fill="none"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.18003 13.4261C6.8586 14.3918 5 13.448 5 11.8113V5.43865C5 3.80198 6.8586 2.85821 8.18003 3.82387L12.5403 7.01022C13.6336 7.80916 13.6336 9.44084 12.5403 10.2398L8.18003 13.4261Z"
                  strokeWidth={2}
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Conóceme!
            </a>
          </div>
        </div>
        <div className="flex justify-center sm:justify-end">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={foto.src}
            alt="Alonso Crespo"
            className="rounded-2xl h-80 sm:h-110 object-cover hidden md:block"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
