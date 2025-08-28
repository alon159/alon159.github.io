import pensamiento from "../../assets/images/softskills/pensamiento.png";
import trabajoenequipo from "../../assets/images/softskills/trabajoenequipo.png";
import resoluciondeproblemas from "../../assets/images/softskills/resoluciondeproblemas.png";
import curiosidad from "../../assets/images/softskills/curiosidad.png";
import comunicacionefectiva from "../../assets/images/softskills/comunicacionefectiva.png";
import adaptabilidad from "../../assets/images/softskills/adaptabilidad.png";
import creatividad from "../../assets/images/softskills/creatividad.png";
import autonomia from "../../assets/images/softskills/autonomia.png";
import codigo from "../../assets/images/hardskills/codigo.png";
import frontend from "../../assets/images/hardskills/frontend.png";
import backend from "../../assets/images/hardskills/backend.png";
import basededatos from "../../assets/images/hardskills/basededatos.png";
import infra from "../../assets/images/hardskills/infra.png";
import herramientas from "../../assets/images/hardskills/herramientas.png";
import { useScrollReveal } from '../util/useScrollReveal';
import { useTranslation } from 'react-i18next';

const Skills = () => {
  const { ref, className } = useScrollReveal();
  const { t } = useTranslation();
  const softSkills = [
    { skill: t("skills.soft.analitic_thought"), img: pensamiento },
    { skill: t("skills.soft.teamwork"), img: trabajoenequipo },
    { skill: t("skills.soft.problem_solving"), img: resoluciondeproblemas },
    { skill: t("skills.soft.curiosity_and_continuous_learning"), img: curiosidad },
    { skill: t("skills.soft.effective_communication"), img: comunicacionefectiva },
    { skill: t("skills.soft.adaptability"), img: adaptabilidad },
    { skill: t("skills.soft.creativity"), img: creatividad },
    { skill: t("skills.soft.autonomy"), img: autonomia },
  ];
  const hardSkills = [
    {
      img: codigo,
      nombre: t("skills.hard.programming_languages"),
      skills: [
        "Python",
        "Java",
        "JavaScript",
        "C, C++",
        "C#",
        "SQL",
      ],
    },
    {
      img: frontend,
      nombre: t("skills.hard.frontend_development"),
      skills: ["React", "Angular", "Tailwind CSS", "Next.js"],
    },
    {
      img: backend,
      nombre: t("skills.hard.backend_development"),
      skills: ["Spring Boot", "Flask", "Firebase"],
    },
    {
      img: basededatos,
      nombre: t("skills.hard.database"),
      skills: ["MySQL", "SQLite", "H2", "eXist", "Couchbase"],
    },
    {
      img: infra,
      nombre: t("skills.hard.infrastructure_and_devops"),
      skills: [
        "Wordpress",
        "Node.js",
        "Github Actions",
        "Github Pages",
        "OneSignal"
      ],
    },
    {
      img: herramientas,
      nombre: t("skills.hard.tools_and_collaboration"),
      skills: [
        "Github (Git)",
        "LaTeX",
        "Selenium",
        "Visual Studio Code",
        "Eclipse",
        "Postman",
        "Canva",
      ],
    },
  ];
  return (
    <section id="skills" ref={ref} className={`bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100 p-8 scroll-mt-15 ${className}`}>
      <h2 className="text-3xl font-semibold text-primary-700">{t("header.skills")}</h2>
      <div className="py-8 px-4 mx-auto max-w-(--breakpoint-xl) sm:py-8 lg:px-6">
        <h3 className="flex justify-center mx-auto text-2xl font-bold">
          {t("skills.soft.title")}
        </h3>
        <div className="mt-10 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-12">
          {softSkills.map((skill, index) => (
            <div
              key={index}
              className="dark:bg-gray-700 flex flex-col items-center justify-center border-gray-300 rounded-xl p-6 border project-card"
            >
              <div className="flex justify-center items-center w-16 h-16 rounded-full bg-primary-100 shadow-md">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={skill.img.src}
                  alt={skill.skill}
                  title={skill.skill}
                  className="w-10 object-contain"
                />
              </div>
              <p className="mt-2 text-center font-semibold">{skill.skill}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="py-8 px-4 mx-auto max-w-(--breakpoint-xl) sm:py-8 lg:px-6">
        <h3 className="flex justify-center mx-auto text-2xl font-bold">
          {t("skills.hard.title")}
        </h3>
        <div className="space-y-8 mt-10 sm:grid sm:grid-cols-2 md:grid-cols-3 sm:gap-12 sm:space-y-0">
          {hardSkills.map((skill, index) => (
            <div
              key={index}
              className="dark:bg-gray-700 border-gray-300 rounded-xl p-6 border project-card"
            >
              <div className="flex justify-center items-center mb-2 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 shadow-md">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={skill.img.src}
                  alt={skill.nombre}
                  title={skill.nombre}
                  className="w-6 sm:w-8 object-contain"
                />
              </div>
              <h3 className="mb-4 text-xl font-semibold dark:text-white">
                {skill.nombre}
              </h3>
              <div
                className={`grid gap-0 ${skill.skills.length > 4 ? "lg:grid-cols-2" : "grid-cols-1"
                  } `}
              >
                {skill.skills.map((s, i) => (
                  <p
                    key={i}
                    className="text-md font-normal dark:text-gray-200 mb-1 pl-3"
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
