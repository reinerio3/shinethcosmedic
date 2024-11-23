import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';
import * as THREE from 'three';

const ImpactfulContent = () => {
  const canvasRef = useRef(null);
  //const sceneRef = useRef(null);

  // Configuración de Three.js para efectos 3D
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvasRef.current.appendChild(renderer.domElement);

    // Crea una esfera para el fondo 3D
    const geometry = new THREE.SphereGeometry(5, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0xaaaaaa, wireframe: true });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Cámara
    camera.position.z = 10;

    // Animación de la escena 3D
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotación de la esfera
      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // Ajustar el tamaño del canvas al redimensionar
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }, []);

  // Efecto al mover el mouse
  const handleMouseMove = (e) => {
    const elements = document.querySelectorAll('.parallax-element');
    elements.forEach((element) => {
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
      {/* Canvas para Three.js 3D */}
      <div
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0"
      ></div>

      <Parallax
        blur={10}
        bgImage="./Logocompleto.png"
        bgImageAlt="fondo impactante"
        strength={600}
      >
        <div className="p-16 z-10 relative text-center">
          <motion.h1
            className="text-8xl font-extrabold mb-8 leading-tight parallax-element"
            data-speed="0.2"
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: 'easeOut' }}
            whileHover={{
              scale: 1.2,
              rotate: 10,
              color: '#ff3385',
              transition: { duration: 0.5 },
            }}
          >
            Shineth
          </motion.h1>

          {/* Subtítulo con efectos de distorsión */}
          <motion.p
            className="text-xl mb-12 mx-auto max-w-2xl parallax-element"
            data-speed="0.1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{ fontFamily: 'Courier New, monospace' }}
          >
            The best experinces!
          </motion.p>

          {/* Imagen con distorsión interactiva */}
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
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
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
              className="px-12 py-6 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full text-xl font-bold transform transition-all duration-500 parallax-element"
              data-speed="0.4"
              whileHover={{
                scale: 1.1,
                rotate: 10,
                backgroundColor: '#ff3385',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
                transition: { duration: 0.3 },
              }}
            >
              ¡Let't Start!
            </motion.button>
            <motion.button
              className="px-12 py-6 bg-transparent border-2 border-white text-white rounded-full text-xl font-bold transform transition-all duration-500 parallax-element"
              data-speed="0.4"
              whileHover={{
                scale: 1.1,
                rotate: -10,
                borderColor: '#ff3385',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
                transition: { duration: 0.3 },
              }}
            >
              Contact Us
            </motion.button>
          </div>
        </div>
      </Parallax>

      {/* Fondo adicional con parallax y animaciones 3D */}
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
              Call Us!
            </motion.p>
          </motion.div>
        </div>
      </Parallax>
    </div>
  );
};

export default ImpactfulContent;
