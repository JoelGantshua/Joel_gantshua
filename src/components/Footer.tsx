import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#accueil" className="text-gray-300 hover:text-blue-500 transition-colors">Accueil</a></li>
              <li><a href="#projets" className="text-gray-300 hover:text-blue-500 transition-colors">Projets</a></li>
              <li><a href="#a-propos" className="text-gray-300 hover:text-blue-500 transition-colors">À propos</a></li>
              <li><a href="#competences" className="text-gray-300 hover:text-blue-500 transition-colors">Compétences</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-blue-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                <a href="mailto:contact@joelgantshua.com" className="text-gray-300 hover:text-blue-500 transition-colors">
                  joelgantshua@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                <a href="tel:+212669444701" className="text-gray-300 hover:text-blue-500 transition-colors">
                  +212 6 69 44 47 01
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Meknes, Maroc</span>
              </li>
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Réseaux sociaux</h4>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/joel-gantshua-55893733b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-500 transition-colors p-2 -m-2"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="https://github.com/JoelGantshua" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-500 transition-colors p-2 -m-2"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <a 
            href="https://webconsulting.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors text-sm"
          >
            Webconsulting &copy; {currentYear}. Tous droits réservés.
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;