// src/components/Projects.js
import React from "react";
import Card from "./Card";
import beattracker from "../assets/images/logos/beattracker.jpg";
import littleerp from "../assets/images/logos/littleerp.jpg";
import telegram from "../assets/images/tecnologias/telegram.png";
import python from "../assets/images/tecnologias/python.png";
import cs from "../assets/images/tecnologias/cs.png";
import windows from "../assets/images/tecnologias/windows.png";
import net from "../assets/images/tecnologias/net.png";
import compresi from "../assets/images/logos/compresi.png";
import pokemon from "../assets/images/logos/pokemon.png";
import logoBlanco from "../assets/images/logo_portfolio/logoBlanco.png";
import react from "../assets/images/tecnologias/react.png";
import tailwind from "../assets/images/tecnologias/tailwind.png";
import github from "../assets/images/tecnologias/github.png";

const Projects = () => {
  const projects = [
    {
      link: "https://github.com/alon159/isi-beattracker",
      logo: beattracker,
      nombre: "BeatTracker",
      tecs: [telegram, python],
      txt: "Bot para el seguimiento de eventos y artistas musicales",
    },
    {
      link: "https://github.com/FelipeAlcazar/GSI-LittleERP",
      logo: littleerp,
      nombre: "LittleERP",
      tecs: [windows, net, cs],
      txt: "Gestor ERP para optimizar procesos empresariales",
    },
    {
      link: "https://github.com/alon159/ComprESI",
      logo: compresi,
      nombre: "ComprESI",
      tecs: [windows, net, cs],
      txt: "App de escritorio para la compresión de imágenes",
    },
    {
      link: "https://github.com/Enriquesmo/IPO2_Pokemon_Pokedex",
      logo: pokemon,
      nombre: "IPOkemon",
      tecs: [windows, net, cs],
      txt: "Juego estilo Pokémon con combates por turnos",
    },
    {
      link: "https://github.com/alon159/alon159.github.io",
      logo: logoBlanco,
      nombre: "Portfolio",
      tecs: [react, tailwind, github],
      txt: "Portfolio de mis proyectos profesionales",
    },
  ];

  return (
    <section id="projects" className="bg-white p-8 scroll-mt-16">
      <h2 className="text-3xl font-semibold text-primary-700">Proyectos</h2>
      <div className="flex flex-wrap justify-center gap-6 mt-10">
        {projects.map((project, index) => (
          <Card key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
