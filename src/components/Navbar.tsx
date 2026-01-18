import React, { useState, useEffect } from 'react';
import { Menu, X, Brain, } from 'lucide-react';
import { motion } from 'framer-motion';

// Composant de la barre de navigation
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Effet pour détecter le scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Brain className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">JOEL GANTSHUA</span>
          </motion.div>

          {/* Navigation desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {['accueil', 'projets', 'a-propos', 'competences', 'contact'].map((item) => {
                const displayText = item === 'a-propos' 
                  ? 'À propos' 
                  : item === 'accueil'
                    ? 'Accueil'
                    : item.charAt(0).toUpperCase() + item.slice(1);
                
                return (
                  <motion.a
                    key={item}
                    href={`#${item}`}
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setIsOpen(false)}
                  >
                    {displayText}
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Bouton menu mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <motion.div 
          className="md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            {['accueil', 'projets', 'a-propos', 'competences', 'contact'].map((item) => {
              const displayText = item === 'a-propos' 
                ? 'À propos' 
                : item === 'accueil'
                  ? 'Accueil'
                  : item.charAt(0).toUpperCase() + item.slice(1);
              
              return (
                <a
                  key={item}
                  href={`#${item}`}
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  {displayText}
                </a>
              );
            })}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;