import React, { useState, useEffect } from "react";
import "../Styles/Carousel.css";  // Asegúrate de tener los estilos en un archivo CSS

const Carousel = () => {
  const images = [
    "../images/antesDespues1.jpg",
    "../images/antesDespues2.jpg",
    "../images/antesDespues3.jpg",
    "../images/antesDespues4.jpg",
    "../images/antesDespues5.jpg",
    "../images/antesDespues6.jpg",
    "../images/antesDespues7.jpg",
    "../images/antesDespues8.jpg",
    "../images/antesDespues9.jpg",
    "../images/antesDespues10.jpg",
    "../images/antesDespues11.jpg",
    "../images/antesDespues12.jpg",
    "../images/antesDespues13.jpg",
    "../images/antesDespues14.jpg"

  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Cambiar la imagen cada 3 segundos (opcional)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval); // Limpiar intervalo al desmontar el componente
  }, [images.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper" 
      style={{
                boxShadow: "0 8px 20px rgba(255, 20, 147, 0.6)",
              }}>
        <img src={images[currentIndex]} alt={`Imagen ${currentIndex + 1}`} className="carousel-image" 
        
        
        />
      </div>

      <button className="carousel-button prev" onClick={handlePrev}>‹</button>
      <button className="carousel-button next" onClick={handleNext}>›</button>

      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
