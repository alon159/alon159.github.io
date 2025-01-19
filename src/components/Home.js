// src/components/Home.js
import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="bg-gray-100 dark:bg-gray-900 h-screen flex items-center scroll-mt-16"
    >
      <div className="gap-8 items-center px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 lg:px-6">
        <div className="mt-4 mb-6">
          <h1 className="text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
            Hola! Soy Alonso Crespo y soy
          </h1>
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Ingeniero Informático!
          </h2>
          <p className="mb-6 font-light text-gray-900 md:text-lg dark:text-gray-400">
            Bienvenido a mi portfolio, donde podrás encontrar información sobre
            mi experiencia, habilidades y proyectos realizados.
          </p>
          <a
            href="#about"
            className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
          >
            Conóceme!
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
        <img
          className="w-full dark:hidden"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
          alt="dashboard image1"
        />
        {
          <img
            className="w-full hidden dark:block"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
            alt="dashboard image2"
          />
        }
      </div>
    </section>
  );
};

export default Home;
