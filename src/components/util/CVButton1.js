import React from "react";
import Link from "next/link";

const CVButton1 = () => {
  return (
    <Link
      href="https://1drv.ms/b/c/2af8bef3e70df28f/Efjy9FoR2FRJvX5YmaOGGloBSkQWSsh6PfR88KVA8Tz_Bg?e=oQNILS"
      target="_blank"
      rel="noopener noreferrer"
      className="whitespace-nowrap hidden xl:flex"
    >
      <button
        type="submit"
        className="font-sans cursor-pointer flex justify-center gap-2 items-center mx-auto shadow-xl text-lg text-white bg-black backdrop-blur-md lg:font-semibold relative z-10 px-4 py-2 overflow-hidden border-2 border-gray-50 rounded-full group"
      >
        <span className="absolute inset-0 w-0 bg-white transition-all duration-700 ease-out group-hover:w-full rounded-full"></span>
        <span className="relative z-10 group-hover:text-black transition-colors duration-300">
          Ver CV
        </span>
        <svg
          className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-white text-black ease-linear duration-300 rounded-full border border-white group-hover:border-black p-2 rotate-45 relative z-10"
          viewBox="0 0 16 19"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
            className="fill-white group-hover:fill-black transition-colors duration-300"
          />
        </svg>
      </button>
    </Link>
  );
};

export default CVButton1;
