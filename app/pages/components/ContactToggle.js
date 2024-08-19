'use client';

import React, { useState, useRef, useEffect } from 'react';
import ContactModal from './ContactModal '; // Предполагается, что Contact.js находится в той же папке

// Модальное окно
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gray-900 rounded-lg shadow-lg w-full max-w-lg mx-4 p-4 relative">
        {children}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white/10 text-white px-4 py-2 rounded-full hover:bg-white/20 focus:outline-none focus-gradient"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default function ContactToggle() {
  const [showContact, setShowContact] = useState(false);
  const contactRef = useRef(null);

  // Прокрутка до элемента после его отображения
  useEffect(() => {
    if (showContact && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [showContact]);

  const handleToggle = () => {
    setShowContact(prev => !prev);
  };

  return (
    <div className="relative text-center">
      <div className="button-container">
      <button
          onClick={handleToggle}
          className="text-gradient text-white px-4 py-2 rounded-md hover:bg-blue-900 focus:outline-none focus-gradient sm:px-6 sm:py-3"
        >
          Schreiben Sie uns An
        </button>
      </div>

      <Modal isOpen={showContact} onClose={() => setShowContact(false)}>
        <ContactModal />
      </Modal>
    </div>
  );
}
