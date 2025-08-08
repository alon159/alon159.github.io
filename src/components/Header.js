import React, { useState } from "react";
import Link from "next/link";
import CVButton1 from "./util/CVButton1";
import CVButton2 from "./util/CVButton2";
import Switch from "./util/Switch";
import Logo from "./util/Logo";

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
      <nav className="bg-white border-gray-200 border-b-1 px-4 lg:px-6 py-2.5 dark:bg-gray-900 dark:border-gray-700">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen">
          <Logo />
          <div className="flex items-center xl:order-2">
            <CVButton1 />
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
            <div className="ml-2 flex items-center h-full xl:ml-4">
              <Switch />
            </div>
          </div>
          <div
            className={`${isMenuOpen ? "flex" : "hidden"
              } justify-between items-center w-full flex-col xl:flex xl:flex-row xl:w-auto xl:order-1`}
            id="mobile-menu-2">
            <ul className="flex w-full flex-col mt-4 font-medium xl:flex-row xl:space-x-8 xl:mt-0">
              <li>
                <a
                  href="#home"
                  className="block w-full py-2 pr-4 pl-3 text-primary-700 border-b border-gray-100 xl:border-0 dark:border-gray-700 rounded xl:bg-transparent xl:text-primary-700 xl:p-0 dark:text-primary-600"
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
                    className="block w-full py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 xl:hover:bg-transparent xl:border-0 xl:hover:text-primary-700 xl:p-0 dark:text-gray-300 xl:dark:hover:text-primary-600 dark:hover:bg-gray-700 dark:hover:text-white xl:dark:hover:bg-transparent dark:border-gray-700"
                    onClick={closeMenu}
                  >
                    {seccion.nombre}
                  </a>
                </li>
              ))}
            </ul>
            <CVButton2/>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
