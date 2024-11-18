import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';
import gsap from 'gsap';

const Store = () => {
  useEffect(() => {
    // Animación de entrada global
    gsap.from(".intro-text", {
      duration: 2,
      opacity: 0,
      y: -100,
      ease: "power3.out",
    });

    gsap.from(".image", {
      duration: 2,
      opacity: 0,
      scale: 1.2,
      ease: "power3.out",
      delay: 1,
    });

    gsap.from(".button", {
      duration: 1.5,
      opacity: 0,
      y: 50,
      delay: 2,
      ease: "power3.out",
      stagger: 0.3,
    });
  }, []);

  // Efecto al mover el mouse
  const handleMouseMove = (e) => {
    const elements = document.querySelectorAll('.parallax-element');
    elements.forEach(element => {
      const speed = element.getAttribute('data-speed');
      const x = (window.innerWidth - e.pageX * speed) / 100;
      const y = (window.innerHeight - e.pageY * speed) / 100;
      element.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  };

  return (
    <div
      className="relative bg-black text-white"
      onMouseMove={handleMouseMove}
    >
      {/* Fondo de Parallax con efecto de luz */}
      <Parallax
        blur={10}
        bgImage="./Logocompleto.png"
        bgImageAlt="fondo impactante"
        strength={600}
      >
        <div className="p-16">
          <div className="text-center relative z-10 intro-text">
            {/* Título 3D con animación interactiva */}
            <motion.h1
              className="text-8xl font-extrabold mb-8 leading-tight parallax-element"
              data-speed="0.2"
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
              whileHover={{
                scale: 1.2,
                rotate: 10,
                color: "#ff3385",
                transition: { duration: 0.5 },
              }}
            >
              ¡Know Us!
            </motion.h1>

            {/* Subtítulo animado */}
            <motion.p
              className="text-xl mb-12 mx-auto max-w-2xl parallax-element"
              data-speed="0.1"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              style={{ fontFamily: 'Courier New, monospace' }}
            >
              Your experience level up?
            </motion.p>

            {/* Imagen con Efecto 3D de hover */}
            <motion.div
              className="relative w-full mb-10 parallax-element"
              data-speed="0.3"
              initial={{ opacity: 0, scale: 1.2 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 1 }}
              whileHover={{
                scale: 1.1,
                rotateX: 10,
                rotateY: 15,
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
              }}
            >
              <img
                src="./Logocompleto.png"
                alt="Desarrollo React"
                className="w-full rounded-3xl shadow-2xl object-cover"
              />
            </motion.div>

            {/* Botones con transiciones avanzadas */}
            <div className="mt-12 space-x-8 flex justify-center">
              <motion.button
                className="button px-12 py-6 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full text-xl font-bold transform transition-all duration-500 parallax-element"
                data-speed="0.4"
                whileHover={{
                  scale: 1.1,
                  rotate: 10,
                  backgroundColor: "#ff3385",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5)",
                  transition: { duration: 0.3 },
                }}
              >
                ¡Begin Now!
              </motion.button>
              <motion.button
                className="button px-12 py-6 bg-transparent border-2 border-white text-white rounded-full text-xl font-bold transform transition-all duration-500 parallax-element"
                data-speed="0.4"
                whileHover={{
                  scale: 1.1,
                  rotate: -10,
                  borderColor: "#ff3385",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5)",
                  transition: { duration: 0.3 },
                }}
              >
               Contact Us
              </motion.button>
            </div>
          </div>
        </div>
      </Parallax>

      {/* Sección extra con animaciones de scroll */}
      <Parallax
        blur={5}
        bgImage="./Logocompleto.png"
        bgImageAlt="fondo adicional"
        strength={500}
      >
        <div className="h-[600px] flex justify-center items-center parallax-element" data-speed="0.2">
          <motion.div
            className="text-white text-center"
            initial={{ opacity: 0, scale: 1.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 1.5 }}
          >
            <h2 className="text-5xl font-bold">
              Are you Ready?
            </h2>
            <motion.p
              className="mt-4 text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              Let's Go!
            </motion.p>
          </motion.div>
        </div>
      </Parallax>
    </div>
  );
};

export default Store;
