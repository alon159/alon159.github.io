import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-gray-100 flex items-center h-screen scroll-mt-16 relative"
    >
      <div className="absolute inset-0 bg-[#f8fafc] w-full bg-grid-pattern"></div>
      <div className="relative px-4 mx-auto max-w-(--breakpoint-xl) sm:px-6 lg:px-8">
        <div className="mx-auto text-center">
          <h1 className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight">
            Bienvenido! Soy Alonso Crespo y soy{" "}
            <span className="relative inline-flex">
              <span className="bg-linear-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0" />
              <span className="relative">Ingeniero Informático!</span>
            </span>
          </h1>
          <p className="mt-8 text-base text-gray-500 font-inter">
            Este es mi portfolio, donde podrás encontrar información sobre mis
            habilidades, mi experiencia y proyectos realizados.
          </p>
          <div className="px-8 sm:items-center sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
            <a
              href="#about"
              title=""
              className="inline-flex items-center justify-center w-full px-6 py-3 mt-4 text-lg font-bold text-gray-900 transition-all duration-200 border-2 border-gray-400 sm:w-auto sm:mt-0 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-primary-700 focus:bg-primary-700 hover:text-white focus:text-white hover:border-primary-700 focus:border-primary-700"
              role="button"
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
      </div>
    </section>
  );
};

export default Hero;
