import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="relative bg-gradient-to-r from-indigo-600 via-pink-600 to-purple-700 p-10 rounded-2xl shadow-2xl max-w-6xl mx-auto mt-20 overflow-hidden top-12 font-apollo">
      {/* Fondo animado de parallax */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-400 opacity-60 -z-10 font-apollo"
        animate={{ scale: [1.05, 1.1, 1.05], rotate: [0, 1, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
      />

      {/* Contenido principal */}
      <div className="text-center text-white relative z-10 font-apollo">
        <motion.h1
          className="text-6xl font-extrabold tracking-tight mb-8 leading-snug"
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          Shineth
        </motion.h1>

        <motion.p
          className="text-xl mb-12 mx-auto max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          Exceptional experiences!
        </motion.p>

        <motion.p
          className="text-xl mb-12 mx-auto max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          SHINETH COSMEDIC SKIN CARE was founded to provide our New York friends and neighbors with the highest caliber of aesthetic treatments. We have redefined the conventional approach to anti-aging and skin health; carefully vetting the most advanced technologies and pairing with our own proprietary protocols. We are rapidly becoming respected as an industry leader, delivering safer and more effective treatments.

Our skilled team of professionals are experts at what they do, providing cosmetic care that meets the highest standards of excellence and maintaining an atmosphere that is both safe and comfortable as well as high-energy and positive. We are focused on you and your needs, and combine clinical excellence with personal attention to meet your unique needs.

Please call us today to learn more about us and make your appointment. We are eager to meet your aesthetic needs and help you achieve the look you have always wanted!


        </motion.p>

        {/* Imagen con animación 3D */}
        <motion.img
          src="./Logocompleto.png"
          alt="Desarrollo Web con React"
          className="w-full rounded-xl shadow-2xl transform hover:scale-110 transition-all duration-500"
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
        />

        {/* Botones interactivos */}
        <div className="mt-10 space-x-8 flex justify-center">
          <motion.button
            className="px-10 py-4 bg-purple-700 text-white rounded-full text-lg font-bold transform hover:scale-125 transition-all duration-500"
            whileHover={{ scale: 1.1 }}
          >
            Learn More
          </motion.button>
          <motion.button
            className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-full text-lg font-bold transform hover:scale-125 transition-all duration-500"
            whileHover={{ scale: 1.1 }}
          >
            Contact Us!
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default About;
