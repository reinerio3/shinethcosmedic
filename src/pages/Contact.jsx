import React from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';

const Contact = () => {
  return (
    <div className="relative bg-black overflow-hidden">
      {/* Fondo de Parallax */}
      <Parallax
        blur={10}
        bgImage="./Logocompleto.png"
        bgImageAlt="fondo impactante"
        strength={500}
      >
        <div className="p-16 top-12">
          <div className="text-center text-white relative z-10">
            {/* Título Animado 3D */}
            <motion.h1
              className="text-7xl font-extrabold mb-8 leading-tight"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              whileHover={{ scale: 1.1, rotate: -5 }}
            >
              Shineth Cosmedic
            </motion.h1>

            {/* Subtítulo con animación tipo máquina de escribir */}
            <motion.p
              className="text-xl mb-12 mx-auto max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
              style={{ fontFamily: 'Courier New, monospace' }}
            >
              Address: 28-07 Jackson Avenue, fl 7, Long Island City, NY 11101
            </motion.p>

            {/* Imagen 3D con Efecto Hover */}
            <motion.div
              className="relative w-full mb-10"
              initial={{ opacity: 0, scale: 1.2 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1 }}
              whileHover={{ scale: 1.05, rotateY: 20 }}
            >
              <img
                src="./Logocompleto.png"
                alt="Shineth"
                className="w-full rounded-3xl shadow-2xl object-cover"
              />
            </motion.div>

            {/* Botones interactivos con hover 3D */}
            <div className="mt-12 space-x-8 flex justify-center">
              <motion.button
                className="px-12 py-6 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full text-xl font-bold transform transition-all duration-500"
                whileHover={{ scale: 1.1, rotate: 10, backgroundColor: "#ff3385" }}
              >
                ¡Comienza ahora!
              </motion.button>
              <motion.button
                className="px-12 py-6 bg-transparent border-2 border-white text-white rounded-full text-xl font-bold transform transition-all duration-500"
                whileHover={{ scale: 1.1, rotate: -10, borderColor: "#ff3385" }}
              >
                Contacta con nosotros
              </motion.button>
            </div>
          </div>
        </div>
      </Parallax>

      {/* Fondo adicional con animación 3D de desplazamiento */}
      <Parallax
        blur={5}
        bgImage="./Logocompleto.png"
        bgImageAlt="fondo adicional"
        strength={300}
      >
        <div className="h-[500px] flex justify-center items-center">
          <motion.div
            className="text-white text-center"
            initial={{ opacity: 0, scale: 1.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 1.5 }}
          >
            <h2 className="text-4xl font-bold">Ready for Booking?</h2>
            <motion.p
              className="mt-4 text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              Email: hey@shinethcosmedic.com
            </motion.p>
          </motion.div>
        </div>
      </Parallax>
    </div>
  );
};

export default Contact;
