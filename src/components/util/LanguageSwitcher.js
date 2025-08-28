import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import spainflag from '../../assets/images/education/spain-flag-square-xs.png';
import ukflag from '../../assets/images/education/united-kingdom-flag-square-xs.png';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    // Get available languages from i18n
    const availableLanguages = Object.keys(i18n.store.data);
    
    // Language configuration with flags and display names
    const languageConfig = {
        'es': {
            name: 'Español',
            flag: spainflag,
            code: 'ES'
        },
        'en': {
            name: 'English',
            flag: ukflag,
            code: 'EN'
        }
    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setIsOpen(false);
    };

    const currentLanguage = languageConfig[i18n.language] || languageConfig['es'];

    return (
        <div className="relative">
            {/* Current Language Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-primary-400 dark:focus:border-primary-400"
                aria-expanded={isOpen}
                aria-haspopup="listbox"
            >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                    src={currentLanguage.flag.src} 
                    alt={`${currentLanguage.name} flag`}
                    width={20}
                    height={20}
                    className="w-5 h-5 rounded-sm object-cover"
                />
                <span className="hidden sm:block">{currentLanguage.code}</span>
                <svg 
                    className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg z-50 dark:bg-gray-800 dark:border-gray-600">
                    <ul className="py-1" role="listbox">
                        {availableLanguages.map((lng) => {
                            const config = languageConfig[lng];
                            if (!config) return null;
                            
                            const isActive = i18n.language === lng;
                            
                            return (
                                <li key={lng} role="option" aria-selected={isActive}>
                                    <button
                                        onClick={() => changeLanguage(lng)}
                                        className={`w-full flex items-center space-x-3 px-4 py-2 text-sm text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 ${
                                            isActive 
                                                ? 'bg-primary-50 text-primary-700 dark:bg-primary-900 dark:text-white' 
                                                : 'text-gray-700 dark:text-gray-300'
                                        }`}
                                    >
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img 
                                            src={config.flag.src} 
                                            alt={`${config.name} flag`}
                                            width={20}
                                            height={20}
                                            className="w-5 h-5 rounded-sm object-cover"
                                        />
                                        <span>{config.name}</span>
                                        {isActive && (
                                            <svg 
                                                className="w-4 h-4 ml-auto text-primary-600 dark:text-primary-400" 
                                                fill="currentColor" 
                                                viewBox="0 0 20 20"
                                            >
                                                <path 
                                                    fillRule="evenodd" 
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                                                    clipRule="evenodd" 
                                                />
                                            </svg>
                                        )}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}

            {/* Backdrop to close dropdown when clicking outside */}
            {isOpen && (
                <div 
                    className="fixed inset-0 z-40" 
                    onClick={() => setIsOpen(false)}
                    aria-hidden="true"
                ></div>
            )}
        </div>
    );
};

export default LanguageSwitcher;