// app/pages/components/ClientNavbar.js

'use client';

import { useState } from 'react';
import ContactToggle from './ContactToggle'; // Убедитесь, что путь к ContactToggle правильный

export default function ClientNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-black dark:bg-gray-900 relative z-40">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
       

        {/* Логотип */}
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse mr-8">
          <img src="/SLG-Logo.svg" className="h-8" alt="Logo" />
          <span className="text-2xl font-semibold text-gradient whitespace-nowrap">SLG</span>
        </a>
         {/* Кнопка на мобильных устройствах, рядом с бургер-меню */}
         <div className="md:hidden flex items-center mr-2">
          <ContactToggle />
        </div>
        {/* Кнопка бургер-меню */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 ml-auto"
          aria-controls="navbar-cta"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#D5A450", stopOpacity: 1 }} />
                <stop offset="50%" style={{ stopColor: "#FDDE83", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "#DEB158", stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <path stroke="url(#gradient1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>

        {/* Меню: скрыто на мобильных, видимо на больших экранах */}
        <div
          className={`${
            isOpen ? 'absolute top-full right-0 w-full z-50' : 'hidden'
          } md:flex md:items-center md:justify-between w-full md:w-auto`} id="navbar-cta">
          <ul className="flex flex-col md:flex-row md:space-x-8 font-medium p-4 md:p-0 bg-black md:bg-transparent dark:bg-black md:dark:bg-transparent rounded-lg md:border-0 items-center justify-center">
            <li>
              <a
                href="#home"
                onClick={handleMenuClick}
                className="block py-2 px-3 text-gradient rounded md:p-0"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={handleMenuClick}
                className="block py-2 px-3 text-gradient rounded md:p-0 hover:bg-gray-100 dark:hover:bg-gray-700 md:hover:bg-transparent"
              >
                Leistung
              </a>
            </li>
            <li>
              <a
                href="#Über-uns"
                onClick={handleMenuClick}
                className="block py-2 px-3 text-gradient rounded md:p-0 hover:bg-gray-100 dark:hover:bg-gray-700 md:hover:bg-transparent"
              >
                Über Uns
              </a>
            </li>
            <li>
              <a
                href="#Kontakte"
                onClick={handleMenuClick}
                className="block py-2 px-3 text-gradient rounded md:p-0 hover:bg-gray-100 dark:hover:bg-gray-700 md:hover:bg-transparent"
              >
                Kontakte
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
