import React, { useState } from "react";
import CVButton1 from "./CVButton1";
import CVButton2 from "./CVButton2";
import logo from "../assets/images/logo_portfolio/logo.png";
import Switch from "./Switch";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const secciones = [
    { nombre: "Sobre mi", href: "#about" },
    { nombre: "Habilidades", href: "#skills" },
    { nombre: "Formación", href: "#education" },
    { nombre: "Experiencia", href: "#experience" },
    { nombre: "Proyectos", href: "#projects" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen">
          <a
            href="/portfolio"
            className="flex items-center"
          >
            <img src={logo} className="mr-3 h-6 sm:h-9" alt="Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Alonso Crespo
            </span>
          </a>
          <div className="flex items-center lg:order-2">
            <CVButton1 />
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`w-6 h-6 ${isMenuOpen ? "hidden" : "block"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className={`w-6 h-6 ${isMenuOpen ? "block" : "hidden"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <div className="ml-2 flex items-center h-full lg:ml-4">
              <Switch />
            </div>
          </div>
          <div
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } justify-between items-center w-full flex-col lg:flex lg:flex-row lg:w-auto lg:order-1`}
            id="mobile-menu-2"
          >
            <ul className="flex w-full flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a
                  href="#hero"
                  className="block w-full py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                  aria-current="page"
                  onClick={closeMenu}
                >
                  Inicio
                </a>
              </li>
              {secciones.map((seccion) => (
                <li key={seccion.href}>
                  <a
                    href={seccion.href}
                    className="block w-full py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                    onClick={closeMenu}
                  >
                    {seccion.nombre}
                  </a>
                </li>
              ))}
            </ul>
            <CVButton2 />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
