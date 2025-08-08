// src/components/Projects.js
import React, { useState } from "react";
import Carda from "../util/Carda";
import beattracker from "../../assets/images/logos/beattracker.jpg";
import littleerp from "../../assets/images/logos/littleerp.jpg";
import listas from "../../assets/images/logos/listas.png";
import compresi from "../../assets/images/logos/compresi.png";
import pokemon from "../../assets/images/logos/pokemon.png";
import logoBlanco from "../../assets/images/logo_portfolio/logoBlanco.png";
import payesi from "../../assets/images/logos/payesi.png";
import tfg from "../../assets/images/logos/tfg.png";
import telegram from "../../assets/images/techs/telegram.svg";
import python from "../../assets/images/techs/python.svg";
import cs from "../../assets/images/techs/csharp.svg";
import windows from "../../assets/images/techs/windows.svg";
import net from "../../assets/images/techs/dotnet.svg";
import react_light from "../../assets/images/techs/react_light.svg";
import react_dark from "../../assets/images/techs/react_dark.svg";
import tailwind from "../../assets/images/techs/tailwindcss.svg";
import github_light from "../../assets/images/techs/github_light.svg";
import github_dark from "../../assets/images/techs/github_dark.svg";
import angular from "../../assets/images/techs/angular.svg";
import spring from "../../assets/images/techs/spring.svg";
import flask_light from "../../assets/images/techs/flask_light.svg";
import flask_dark from "../../assets/images/techs/flask_dark.svg";
import paypal from "../../assets/images/techs/paypal.svg";
import selenium from "../../assets/images/techs/selenium.svg";
import ticketmaster from "../../assets/images/techs/ticketmaster.png";
import android from "../../assets/images/techs/android.svg";
import java from "../../assets/images/techs/java.svg";

const Projects = () => {
  const [filtroTipo, setFiltroTipo] = useState("todos");

  const technologies = {
    Telegram: { light: telegram, dark: telegram },
    Python: { light: python, dark: python },
    CSharp: { light: cs, dark: cs },
    Windows: { light: windows, dark: windows },
    DotNet: { light: net, dark: net },
    React: { light: react_light, dark: react_dark },
    Tailwind: { light: tailwind, dark: tailwind },
    Github: { light: github_light, dark: github_dark },
    Angular: { light: angular, dark: angular },
    Spring: { light: spring, dark: spring },
    Flask: { light: flask_light, dark: flask_dark },
    Paypal: { light: paypal, dark: paypal },
    Selenium: { light: selenium, dark: selenium },
    Ticketmaster: { light: ticketmaster, dark: ticketmaster },
    Android: { light: android, dark: android },
    Java: { light: java, dark: java },
  };

  const projects = [
    {
      link: "https://github.com/alon159/tfg-crowdsensing",
      logo: tfg,
      nombre: "Crowdsense",
      tipo: "movil",
      tecs: ["Android", "Java"],
      txt: "Aplicación para facilitar la coordinación de ayuda ciudadana en situaciones de emergencia.",
    },
    {
      link: "https://github.com/FelipeAlcazar/TecWeb-Lists",
      logo: listas,
      nombre: "Lists",
      tipo: "web",
      tecs: ["Angular", "Spring", "Selenium"],
      txt: "Aplicación web colaborativa para la gestión de listas de la compra.",
    },
    {
      link: "https://github.com/AgustinESI/payesi-frontend",
      logo: payesi,
      nombre: "PayESI",
      tipo: "web",
      tecs: ["Angular", "Flask", "Paypal"],
      txt: "Aplicación web para realizar transacciones P2P entre usuarios con integración de PayPal.",
    },
    {
      link: "https://github.com/alon159/isi-beattracker",
      logo: beattracker,
      nombre: "BeatTracker",
      tipo: "otros",
      tecs: ["Telegram", "Python", "Ticketmaster"],
      txt: "Bot para el seguimiento de eventos y artistas musicales con integración de Ticketmaster.",
    },
    {
      link: "https://github.com/FelipeAlcazar/GSI-LittleERP",
      logo: littleerp,
      nombre: "LittleERP",
      tipo: "escritorio",
      tecs: ["Windows", "DotNet", "CSharp"],
      txt: "Gestor ERP para optimizar la gestión financiera en pequeñas y medianas empresas.",
    },
    {
      link: "https://github.com/alon159/ComprESI",
      logo: compresi,
      nombre: "ComprESI",
      tipo: "escritorio",
      tecs: ["Windows", "DotNet", "CSharp"],
      txt: "Aplicación de escritorio para la compresión de imágenes instantánea y eficiente.",
    },
    {
      link: "https://github.com/Enriquesmo/IPO2_Pokemon_Pokedex",
      logo: pokemon,
      nombre: "IPOkemon",
      tipo: "escritorio",
      tecs: ["Windows", "DotNet", "CSharp"],
      txt: "Aplicación estilo Pokémon con un sistema de combate por turnos.",
    },
    {
      link: "https://github.com/alon159/alon159.github.io",
      logo: logoBlanco,
      nombre: "Portfolio",
      tipo: "web",
      tecs: ["React", "Tailwind", "Github"],
      txt: "Portfolio con información personal, proyectos y habilidades.",
    },
  ];

  const tiposProyecto = [
    { valor: "todos", label: "Todos" },
    { valor: "web", label: "Aplicación Web" },
    { valor: "escritorio", label: "Aplicación de Escritorio" },
    { valor: "movil", label: "Aplicación Móvil" },
    { valor: "otros", label: "Otros" }
  ];

const proyectosFiltrados = filtroTipo === "todos"
  ? projects.sort((a, b) => a.nombre.localeCompare(b.nombre))
  : projects.filter(project => project.tipo === filtroTipo).sort((a, b) => a.nombre.localeCompare(b.nombre));

  return (
    <section id="projects" className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 p-8 scroll-mt-15">
      <h2 className="text-3xl font-semibold text-primary-700">Proyectos</h2>
      <div className="mt-6 mb-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
          <span className="text-gray-700 dark:text-gray-300 font-medium">Filtrar:</span>
          <div className="flex flex-wrap justify-center dark:bg-gray-800 rounded-lg p-1 shadow-inner max-w-full">
            {tiposProyecto.map((tipo) => (
              <button
                key={tipo.valor}
                onClick={() => setFiltroTipo(tipo.valor)}
                className={`px-3 py-2 m-0.5 rounded-md font-medium transition-all duration-200 text-sm sm:text-base sm:px-4 cursor-pointer ${filtroTipo === tipo.valor
                    ? "bg-primary-600 text-white shadow-md transform scale-105"
                    : "text-gray-700 hover:text-primary-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
                  }`}
              >
                {tipo.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-6 mt-10">
        {proyectosFiltrados.map((project, index) => (
          <Carda key={index} project={project} technologies={technologies} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
