// src/components/Footer.js
import React from 'react';
import Link from 'next/link';
import ContactInfo from './util/ContactInfo';
import Logo from './util/Logo';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-gray-200 border-t-1 dark:border-gray-700">
      <div className="w-full px-8 mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Logo />
          <ContactInfo className="self-center justify-center mt-5 sm:mt-0" />
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-500 dark:text-gray-400">
          <span className="block sm:text-center">© 2025 <Link href="/" className="hover:underline">Alonso Crespo Fernández</Link>. Todos los derechos reservados.</span>
          <span className="block text-xs mt-2 sm:mt-0">Última actualización: Agosto 2025</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
