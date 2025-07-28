// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-4">
          <p className="text-xl font-semibold">Gracias por visitar mi portafolio</p>
          <p className="text-sm mt-2">Diseñado y desarrollado por Alonso Crespo Fernández</p>
        </div>

        {/* Enlaces a redes sociales */}
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com/alon159" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            GitHub
          </a>
          <a href="https://linkedin.com/in/alonsocrespo" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            LinkedIn
          </a>
          <a href="mailto:aloncrespfer@gmail.com" className="hover:text-gray-400">
            Email
          </a>
        </div>

        <p className="text-xs text-gray-500">© 2025 Alonso Crespo Fernández. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
