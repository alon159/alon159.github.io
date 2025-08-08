import React, { useState, useEffect } from "react";

const Carda = ({ project, technologies }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const checkDarkMode = () => {
            const darkModeFromClass = document.documentElement.classList.contains('dark');
            setIsDarkMode(darkModeFromClass);
        };

        // Check initially
        checkDarkMode();

        // Listen for class changes on document element (if using a theme toggle)
        const observer = new MutationObserver(checkDarkMode);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class']
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    const getTechnologyIcon = (techKey) => {
        const tech = technologies[techKey];
        if (!tech) return null;
        return isDarkMode && tech.dark ? tech.dark.src : tech.light.src;
    };
    return (
        <div className="bg-transparent dark:bg-gray-800 rounded-lg border border-gray-200 p-6 w-90 project-card flex flex-col h-full">
            <div className="flex items-center gap-4 mb-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={project.logo.src}
                    alt={project.nombre}
                    title={project.nombre}
                    className="w-12 h-12 rounded-lg object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{project?.nombre}</h3>
            </div>

            <div className="mb-6 flex-grow">
                <p className="text-gray-600 text-sm leading-relaxed dark:text-gray-300">{project?.txt}</p>
            </div>

            <div className="flex justify-between items-center mt-auto">
                <div className="flex gap-2">
                    {project?.tecs?.map((tech, index) => (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                            key={index}
                            src={getTechnologyIcon(tech)}
                            alt={tech}
                            title={tech}
                            className="w-6 h-6 rounded"
                        />
                    ))}
                </div>
                <a
                    href={project?.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 text-sm font-bold text-gray-900 dark:text-gray-100 transition-all duration-200 border-2 border-gray-400 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-primary-700 focus:bg-primary-700 dark:hover:bg-primary-700 dark:focus:bg-primary-700 hover:text-white focus:text-white hover:border-primary-700 focus:border-primary-700"
                >
                    <svg className="w-4 h-4 mr-2 fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" />
                    </svg>
                    Ver Proyecto
                </a>
            </div>
        </div>
    );
};

export default Carda;