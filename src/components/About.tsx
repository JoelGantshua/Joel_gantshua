import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Cpu, Laptop, Smartphone, Target, Terminal } from 'lucide-react';

const aboutItems = [
  {
    icon: Code,
    title: 'Développement Web',
    description: 'Création de sites web modernes et réactifs avec les dernières technologies du web'
  },
  {
    icon: Smartphone,
    title: 'Applications Mobiles',
    description: 'Développement d\'applications mobiles cross-plateformes performantes'
  },
  {
    icon: Terminal,
    title: 'Backend',
    description: 'Conception et développement d\'APIs robustes et sécurisées'
  },
  {
    icon: Cpu,
    title: 'Technologies Modernes',
    description: 'Utilisation des frameworks et bibliothèques les plus récents'
  },
  {
    icon: Target,
    title: 'Solutions Sur Mesure',
    description: 'Réponses adaptées à vos besoins spécifiques'
  },
  {
    icon: Laptop,
    title: 'Responsive Design',
    description: 'Des interfaces qui s\'adaptent à tous les appareils'
  }
];

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-white" id="a-propos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            À Propos de Moi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Detenteur d'un Bts en développement web et d'une licence en développement mobile, 
          je suis un Développeur passionné par la création d'expériences numériques exceptionnelles
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aboutItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;