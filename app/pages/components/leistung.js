// app/pages/components/leistung.js

import React from 'react';

// Массив карточек с разным содержимым и ссылками на SVG-файлы
const cardData = [
  {
    title: 'Entrümpelung',
    description: 'Effiziente und schnelle Entrümpelung von Wohnungen, Häusern und Büros.',
    svgSrc: '/cleaning.svg', // Путь к вашему SVG
  },
  {
    title: 'Dacharbeiten',
    description: 'Kleine Dacharbeiten wie Rinnenreinigung.',
    svgSrc: '/dacharbeiten.svg', 
  },
  {
    title: 'Solaranlagen',
    description: 'Installation und Wartung von Solaranlagen auf Ihrem Dach.',
    svgSrc: '/solaranlagen.svg', 
  },
  {
    title: 'Umzüge',
    description: 'Professionelle Unterstützung bei Ihrem Umzug – von der Planung bis zur Durchführung.',
    svgSrc: '/umzug.svg', // 
  },
  {
    title: 'Möbelaufbau',
    description: 'Fachgerechter Aufbau von Möbeln aller Art.',
    svgSrc: '/Möbelaufbau.svg', 
  },
  {
    title: 'Fenstereinbau',
    description: 'Einbau von Velux-Fenstern für mehr Licht und Luft in Ihrem Zuhause.',
    svgSrc: '/fenstereinbau.svg', 
  },
];

export default function Leistung() {
  return (
    <div className="flex flex-col items-center gap-6 p-6">
      {/* Сетка карточек */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-white/5  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-6 flex flex-col items-center"
          >
            <img
              src={card.svgSrc}
              alt={card.title}
              className="w-7 h-7 mb-3"
            />
            <a href="#">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-geadient dark:text-white">
                {card.title}
              </h5>
            </a>
            <p className="mb-3 font-normal text-white dark:text-gray-400">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
