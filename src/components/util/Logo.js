import React from "react";
import Link from "next/link";
import logo from "../../assets/images/logo_portfolio/logo.png";
import logoBlanco from "../../assets/images/logo_portfolio/logoBlanco.png";

const Logo = () => {
    return (
        <Link
            href="/"
            className="flex items-center">
            {/* eslint-disable @next/next/no-img-element */}
            <img src={logo.src} className="mr-3 h-6 sm:h-9 dark:hidden" alt="Logo" />
            <img src={logoBlanco.src} className="mr-3 h-6 sm:h-9 hidden dark:block" alt="Logo" />
            {/* eslint-enable @next/next/no-img-element */}
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Alonso Crespo
            </span>
        </Link>
    );
}

export default Logo;