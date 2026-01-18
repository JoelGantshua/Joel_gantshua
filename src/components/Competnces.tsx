import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image1 from '../assets/developer.jpg';
import Image2 from '../assets/2.jpg';
import Image3 from '../assets/3.jpg';
import image4 from '../assets/9.jpg';
import image5 from '../assets/sql.png';
import image6 from '../assets/proj.jpg';
import image7 from '../assets/cover.webp';
import image8 from '../assets/10.png';
import image9 from '../assets/outils.jpg';

const images = [
  {
    url: Image1,
    title: 'HTML, CSS, JavaScript,React,bootstrap, tailwindcss'
  },
  {
    url: image7,
    title: 'React Native, Expo'
  },
  {
    url: image9,
    title: 'Firebase, Git & GitHub, VS code'
  },
  {
    url: image4,
    title: 'Node.js, MongoDB'
  },
  {
    url: image8,
    title: 'Python,PostgreSQL'
  },
  {
    url: image5,
    title: 'MySQL'
  },
  {
    url: image6,
    title: 'Gestion de projet'
  }
];

const Gallery = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="py-20 bg-white" id="competences">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Compétences
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Technologies et outils que j'utilise pour créer des applications performantes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-lg shadow-lg h-64"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                <h3 className="text-white text-lg font-bold text-center">{image.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;