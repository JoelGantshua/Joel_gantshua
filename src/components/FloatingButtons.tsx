import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingButtons = () => {
  // WhatsApp button logic
  const phoneNumber = '+2120669444701';
  const message = 'Bonjour, je souhaite vous contacter concernant vos services de développement.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // Back to Top button logic
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-green-600 hover:bg-green-700 text-white shadow-lg transition-all duration-300 transform hover:scale-110"
        aria-label="Contactez-moi sur WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
      
      <button
        onClick={scrollToTop}
        className={`flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-all duration-300 transform hover:scale-110 ${
          visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-label="Retour en haut"
      >
        ↑
      </button>
    </div>
  );
};

export default FloatingButtons;
