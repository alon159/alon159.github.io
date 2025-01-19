// src/components/Skills.js
import React from "react";
import pensamientoanalitico from "../assets/images/softskills/pensamiento.png";
import trabajoenequipo from "../assets/images/softskills/trabajoenequipo.png";
import resoluciondeproblemas from "../assets/images/softskills/resoluciondeproblemas.png";
import curiosidad from "../assets/images/softskills/curiosidad.png";
import comunicacionefectiva from "../assets/images/softskills/comunicacionefectiva.png";
import adaptabilidad from "../assets/images/softskills/adaptabilidad.png";
import creatividad from "../assets/images/softskills/creatividad.png";
import autonomia from "../assets/images/softskills/autonomia.png";
import codigo from "../assets/images/hardskills/codigo.png";
import frontend from "../assets/images/hardskills/frontend.png";
import backend from "../assets/images/hardskills/backend.png";
import basededatos from "../assets/images/hardskills/basededatos.png";
import infra from "../assets/images/hardskills/infra.png";
import herramientas from "../assets/images/hardskills/herramientas.png";

const Skills = () => {
  const softSkills = [
    { skill: "Pensamiento analítico", img: pensamientoanalitico },
    { skill: "Trabajo en equipo", img: trabajoenequipo },
    { skill: "Resolución de problemas", img: resoluciondeproblemas },
    { skill: "Curiosidad y aprendizaje continuo", img: curiosidad },
    { skill: "Comunicación efectiva", img: comunicacionefectiva },
    { skill: "Adaptabilidad", img: adaptabilidad },
    { skill: "Creatividad", img: creatividad },
    { skill: "Autonomía", img: autonomia },
  ];
  const hardSkills = [
    {
      img: codigo,
      nombre: "Lenguajes de Programación",
      skills: [
        "Python",
        "Java",
        "JavaScript",
        "TypeScript",
        "C, C++",
        "C#",
        "SQL",
      ],
    },
    {
      img: frontend,
      nombre: "Desarrollo Frontend",
      skills: ["React", "Angular", "Tailwind CSS"],
    },
    {
      img: backend,
      nombre: "Desarrollo Backend",
      skills: ["Spring Boot", "Node.js", "Flask", "ASP.NET Core"],
    },
    {
      img: basededatos,
      nombre: "Bases de Datos",
      skills: ["MySQL", "SQLite", "H2", "eXist"],
    },
    {
      img: infra,
      nombre: "Infraestructura y DevOps",
      skills: [
        "Wordpress",
        "Linux",
        "Docker",
        "GitHub Actions",
        "Github Pages",
        "VirtualBox",
      ],
    },
    {
      img: herramientas,
      nombre: "Herramientas y Colaboración",
      skills: [
        "Git (GitHub, GitLab, Bitbucket)",
        "LaTeX",
        "Microsoft Teams",
        "Visual Studio Code",
        "Eclipse",
        "Postman",
        "Canva",
      ],
    },
  ];
  return (
    <section id="skills" className="bg-gray-100 p-8 scroll-mt-16">
      <h2 className="text-3xl font-semibold text-primary-700">Habilidades</h2>
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-8 lg:px-6">
        <h3 className="flex justify-center mx-auto text-2xl font-bold">
          Personales
        </h3>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-12">
          {softSkills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center border-gray-300 rounded-xl p-6 border-2 transition-transform duration-300 hover:scale-105 hover:shadow-md hover:bg-gray-200"
            >
              <div className="flex justify-center items-center w-16 h-16 rounded-full bg-primary-100 shadow-md">
                <img
                  src={skill.img}
                  alt={skill.skill}
                  className="w-10 object-contain"
                />
              </div>
              <p className="mt-2 text-center font-semibold">{skill.skill}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-8 lg:px-6">
        <h3 className="flex justify-center mx-auto text-2xl font-bold">
          Técnicas
        </h3>
        <div className="space-y-8 mt-10 sm:grid sm:grid-cols-2 md:grid-cols-3 sm:gap-12 sm:space-y-0">
          {hardSkills.map((skill, index) => (
            <div
              key={index}
              className="border-gray-300 rounded-xl p-6 border-2 transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-200"
            >
              <div className="flex justify-center items-center mb-2 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 shadow-md">
                <img
                  src={skill.img}
                  alt={skill.nombre}
                  className="w-6 sm:w-8 object-contain"
                />
              </div>
              <h3 className="mb-4 text-xl font-semibold dark:text-white">
                {skill.nombre}
              </h3>
              <div
                className={`grid gap-0 ${
                  skill.skills.length > 4 ? "sm:grid-cols-2" : "grid-cols-1"
                } `}
              >
                {skill.skills.map((s, i) => (
                  <p
                    key={i}
                    className="text-md font-normal dark:text-gray-300 mb-1 pl-3"
                  >
                    · {s}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
