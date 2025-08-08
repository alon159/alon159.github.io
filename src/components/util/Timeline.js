import React from "react";

const Timeline = ({eventos}) => {
  return (
    <ol className="relative border-s border-gray-200 dark:border-gray-700 mt-10 ml-4 sm:ml-0">
      {eventos.map((evento, index) => (
        <li key={index} className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-8 h-7 rounded-full -start-4 ring-4 ring-transparent dark:ring-white dark:bg-white">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
            src={evento.logo.src}
            alt={evento.lugar}
            title={evento.lugar}
            className="w-full h-full"
            />
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            {evento.titulo}
            {evento.actual && (
              <span className="bg-primary-600 text-white text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-primary-800 ms-3">
                Actualidad
              </span>
            )}
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            {evento.fecha}
          </time>
          <p className="mb-4 text-base font-normal text-primary-700 dark:text-primary-500">
            {evento.lugar}
          </p>
          {evento.detalle && (
            <p className="whitespace-pre-line mb-2 text-base font-normal text-gray-350 dark:text-gray-400">
              {evento.detalle}
            </p>
          )}
        </li>
      ))}
    </ol>
  );
};

export default Timeline;