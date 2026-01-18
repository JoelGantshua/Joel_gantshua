import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import MarocImage from '../assets/about (1).jpeg';
import MarocSoleil from '../assets/mk.webp';
import EemciImage from '../assets/eemci.jpeg';
import SdjImage from '../assets/sdj.png';
import kolyaImage from '../assets/lg.png';

const destinations = [
  {
    id: 1,
    name: '2030 Maroc',
    image: MarocImage,
    description: 'Site de voyage pour promouvoir la vision du Maroc à l\'horizon 2030',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    features: ['Design moderne', 'Animations fluides', 'Responsive'],
    link: 'https://github.com/JoelGantshua/2030-Maroc',
  },
  {
    id: 2,
    name: 'Maroc Soleil',
    image: MarocSoleil,
    description: 'Site de voyage et de découverte du Maroc',
    technologies: ['React.js', 'Tailwind CSS', 'Node.js'],
    features: ['Réservation en ligne', 'Galerie photo', 'Blog de voyage'],
    link: 'https://www.marocsoleil.com/',
    
  },
  {
    id: 3,
    name: 'Kolya Restaurant',
    image: kolyaImage,
    description: 'Site vitrine pour un restaurant gastronomique',
    technologies: ['React', 'tailwind CSS', 'TypeScript'],
    features: ['Menu interactif', 'Réservation de table', 'Galerie des plats'],
    link: 'https://www.restaurantkolya.com/',
  },
  {
    id: 4,
    name: 'EEMCI Project',
    image: EemciImage,
    description: 'Application de gestion pour école de Commerce',
    technologies: ['React', 'Node.js', 'MongoDB'],
    features: ['Gestion des élèves', 'Planning des cours', 'Paiements en ligne'],
    link: 'https://github.com/6code579/Eemci-Project.git',
  },
  {
    id: 5,
    name: 'Struggle Day Journey',
    image: SdjImage,
    description: 'Site d\'accompagnement au développement personnel',
    technologies: ['Javascript', 'HTML', 'Css'],
    features: ['Histoire interactive', 'Système de choix', 'Graphismes personnalisés'],
    link: 'https://struggle-day-journey.vercel.app/',
  }
];

const Projets = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="py-20 bg-gray-50" id="projets">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Mes Projets
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez une sélection de mes réalisations les plus marquantes
          </p>
        </motion.div>

        <div className="relative">
          <Swiper
            modules={[EffectCoverflow, Pagination, Navigation]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            className="mySwiper py-10"
          >
            {destinations.map((project) => (
              <SwiperSlide key={project.id} className="px-4">
                <motion.div
                  className="bg-white rounded-lg overflow-hidden shadow-lg h-full flex flex-col"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  onClick={(e) => {
                    // Empêcher la propagation du clic pour éviter les conflits avec Swiper
                    e.stopPropagation();
                  }}
                >
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block h-48 overflow-hidden"
                  >
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                    />
                  </a>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {project.name}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 flex-1">
                      {project.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Technologies :</h4>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.technologies.map((tech, index) => (
                          <span key={index} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Fonctionnalités :</h4>
                      <ul className="list-disc list-inside text-sm text-gray-600">
                        {project.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="mt-auto block w-full bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-200 text-center"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Voir le projet
                    </a>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          <div className="swiper-button-prev absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-white rounded-full p-3 shadow-md cursor-pointer hover:bg-gray-100 transition-colors">
            <ChevronLeft className="w-6 h-6 text-blue-600" />
          </div>
          <div className="swiper-button-next absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-white rounded-full p-3 shadow-md cursor-pointer hover:bg-gray-100 transition-colors">
            <ChevronRight className="w-6 h-6 text-blue-600" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projets;
