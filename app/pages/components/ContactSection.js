'use client'; 
import React, { useState } from 'react';

export default function ContactSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="p-6 bg-white/5 bg-opacity-1 text-white">
    <h2 className="text-2xl font-bold mb-6">Kontaktieren Sie uns</h2> {/* Увеличен отступ снизу */}
    
    <div className="mb-6 mt-4 space-y-4 text-base md:text-lg text-white max-w-3xl mx-auto">
      <p>
        Haben Sie Fragen oder möchten Sie einen Termin vereinbaren? Wir freuen uns darauf, von Ihnen zu hören! Kontaktieren Sie uns noch heute und erfahren Sie, wie wir Ihnen helfen können.
      </p>
    </div>
    
    <div className="space-y-4"> {/* Использован space-y-4 для равномерных вертикальных отступов */}
      <p><strong>Email:</strong> <a href="mailto:example@example.com" className="text-blue-400 hover:underline">example@example.com</a></p>
      <p><strong>Whatsapp:</strong> <a href="tel:+1234567890" className="text-blue-400 hover:underline">+123 456 7890</a></p>
      <p><strong>Adresse:</strong> Musterstraße 1, 12345 Musterstadt</p>
      <p><strong>Map:</strong> <a href="https://www.google.com/maps" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">View on Google Maps</a></p>
    </div>
  </div>
  

  );
}
