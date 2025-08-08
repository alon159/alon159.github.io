import React from "react";

const Card = ({ project }) => {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative group duration-500 cursor-pointer overflow-hidden text-gray-50 h-36 w-28 sm:h-72 sm:w-56 rounded-2xl hover:duration-700 duration-700"
    >
      <div className="h-36 w-28 sm:h-72 sm:w-56 bg-black text-gray-800 relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.logo.src}
          alt="Logo"
          className="w-full h-full object-cover mx-auto transition-opacity duration-500 group-hover:opacity-50"
        />
      </div>
      <div className="absolute bg-gray-50 -bottom-32 sm:-bottom-24 w-28 sm:w-56 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
        <span className="text-primary-500 font-bold text-xs">
          {project.nombre}
        </span>
        <div className="flex justify-center gap-2 mt-2">
          {/* eslint-disable @next/next/no-img-element */}
          {project.tecs.map((tech, index) => (
            <img 
              key={index}
              src={tech.src}
              alt={`Logo de ${tech}`}
              className="w-6 h-6"
            /> 
          ))}
          {/* eslint-enable @next/next/no-img-element */}
        </div>
        <p className="text-neutral-800">{project.txt}</p>
      </div>
    </a>
  );
};

export default Card;