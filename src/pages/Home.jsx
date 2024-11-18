import React from 'react';
import { useState, useRef, useEffect } from "react";
import '../Styles/Home.css';

//import { FaInstagram } from "react-icons/fa6";
//import { FaTiktok } from "react-icons/fa";
//import { FaFacebook } from "react-icons/fa6";
import Carousel from '../components/Carousel';


const videos = [
  {
    src: "/images/IMG_1984.MP4",
  },
  {
    src: "/images/tt1.MP4",
  },
  {
    src: "/images/tt3.MP4",
  },
];

const Home = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRef = useRef(null);

  const handleVideoEnded = () => {
    if (currentVideo < videos.length - 1) {
      setCurrentVideo((prev) => prev + 1);
    } else {
      setCurrentVideo(0); // Reiniciar al primer video al final
    }
  };

  useEffect(() => {
    // Reinicia el video cuando cambia el índice actual
    if (videoRef.current) {
      videoRef.current.load(); // Cargar el nuevo video
    }
  }, [currentVideo]);

  return (
    <div className="home">
      <div className="content">
        <video
          ref={videoRef}
          className="watermark-video"
          autoPlay
          loop={false}
          muted
          onEnded={handleVideoEnded}
          key={currentVideo} // Cambia la clave para reiniciar el video
        >
          <source src={videos[currentVideo].src} type="video/mp4" />
          Tu navegador no soporta el video.
        </video>
      </div>
      {/*<div className="content">
        <h1>The best version of your skin</h1>
        <p></p>
      </div>*/}



      <div className="bg-white">
      {/* Sección de Productos */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Our Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Producto 1 */}
            <div
              className="border rounded-lg shadow-lg overflow-hidden"
              style={{
                boxShadow: "0 8px 20px rgba(255, 20, 147, 0.6)",
              }}
            >
              <img
                src="/images/Moisturizer+3.jpg"
                alt="Facial Moisturizer"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">Facial Moisturizer</h3>
                <p className="text-gray-600">$25.00</p>
                <button className="border border-pink-500 text-pink-500 font-semibold py-2 px-6 rounded-full bg-white transition duration-300 hover:bg-pink-500 hover:text-white">
                  Add to Cart
                </button>
              </div>
            </div>
            {/* Producto 2 */}
            <div
              className="border rounded-lg shadow-lg overflow-hidden"
              style={{
                boxShadow: "0 8px 20px rgba(255, 20, 147, 0.6)",
              }}
            >
              <img
                src="/images/Serum+2.jpg"
                alt="Skin Clearing Serum"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">Skin Clearing Serum</h3>
                <p className="text-gray-600">$30.00</p>
                <button className="border border-pink-500 text-pink-500 font-semibold py-2 px-6 rounded-full bg-white transition duration-300 hover:bg-pink-500 hover:text-white">
                  Add to Cart
                </button>
              </div>
            </div>
            {/* Producto 3 */}
            <div
              className="border rounded-lg shadow-lg overflow-hidden"
              style={{
                boxShadow: "0 8px 20px rgba(255, 20, 147, 0.6)",
              }}
            >
              <img
                src="/images/Toner+1.jpg"
                alt="Balancing Toner"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">Balancing Toner</h3>
                <p className="text-gray-600">$20.00</p>
                <button className="border border-pink-500 text-pink-500 font-semibold py-2 px-6 rounded-full bg-white transition duration-300 hover:bg-pink-500 hover:text-white">
                  Add to Cart
                </button>
              </div>
            </div>
            {/* Producto 4 */}
            <div
              className="border rounded-lg shadow-lg overflow-hidden"
              style={{
                boxShadow: "0 8px 20px rgba(255, 20, 147, 0.6)",
              }}
            >
              <img
                src="/images/Gift+card.jpg"
                alt="Gift Card"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">Gift Card</h3>
                <p className="text-gray-600">$30.00</p>
                <button className="border border-pink-500 text-pink-500 font-semibold py-2 px-6 rounded-full bg-white transition duration-300 hover:bg-pink-500 hover:text-white">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Sección de Servicios */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              className="bg-white border rounded-lg shadow-lg p-6"
              style={{
                boxShadow: "0 8px 20px rgba(255, 20, 147, 0.6)",
              }}
            >
              <h3 className="text-xl font-bold">Customized Facials</h3>
              <p className="text-gray-600 mt-2">Designed for your skin type.</p>
            </div>
            <div
              className="bg-white border rounded-lg shadow-lg p-6"
              style={{
                boxShadow: "0 8px 20px rgba(255, 20, 147, 0.6)",
              }}
            >
              <h3 className="text-xl font-bold">Anti-Aging Treatments</h3>
              <p className="text-gray-600 mt-2">Helps rejuvenate your skin.</p>
            </div>
            <div
              className="bg-white border rounded-lg shadow-lg p-6"
              style={{
                boxShadow: "0 8px 20px rgba(255, 20, 147, 0.6)",
              }}
            >
              <h3 className="text-xl font-bold">Deep Facial Cleansing</h3>
              <p className="text-gray-600 mt-2">
                Eliminates impurities and rejuvenates your face.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50 text-gray-800">
        <div className="container mx-auto max-w-lg text-center">
          <h2 className="text-4xl font-bold mb-8 text-pink-600">
            Schedule Your Appointment
          </h2>
          <form className="bg-white shadow-lg rounded-lg p-8 space-y-6">
            <div className="text-left">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="date"
              >
                Choose a Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-500"
                required
              />
            </div>

            <div className="text-left">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="time"
              >
                Choose a Time
              </label>
              <input
                type="time"
                id="time"
                name="time"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-500"
                required
              />
            </div>
            <button className="border border-pink-500 text-pink-500 font-semibold py-2 px-6 rounded-full bg-white transition duration-300 hover:bg-pink-500 hover:text-white">
              Schedule Appointment
            </button>
          </form>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-700">
              Proceed with Payment
            </h3>
            <p className="text-gray-500 mb-4">
              After scheduling, complete your booking by paying securely through
              our payment gateway.
            </p>
            <button className="border border-pink-500 text-pink-500 font-semibold py-2 px-6 rounded-full bg-white transition duration-300 hover:bg-pink-500 hover:text-white">
              Go to Payment
            </button>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gradient-to-b from-white to-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-12 text-gray-800">
            Customer Testimonials
          </h2>
          <div className="flex flex-col space-y-8">
            <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg border-l-4 border-pink-500 transform hover:-translate-y-2 transition duration-300">
              <p className="text-gray-700 italic">
                “I love this serum! My skin has never been so radiant.”
              </p>
              <p className="mt-4 font-semibold text-pink-600">- Ana P.</p>
            </div>
            <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg border-l-4 border-pink-500 transform hover:-translate-y-2 transition duration-300">
              <p className="text-gray-700 italic">
                “The moisturizer is amazing. I recommend it to everyone.”
              </p>
              <p className="mt-4 font-semibold text-pink-600">- Laura G.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gradient-to-r from-pink-100 via-purple-100 to-pink-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-8">
            Treatment Gallery
          </h2>
          <Carousel />
        </div>
      </section>
      <section className="py-16 bg-white text-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-12 text-gray-800">
            Frequently Asked Questions
          </h2>
          <div className="max-w-2xl mx-auto space-y-8">
            <div
              className="bg-pink-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105"
              style={{
                boxShadow: "0 8px 20px rgba(255, 20, 147, 0.6)",
              }}
            >
              <h3 className="text-2xl font-semibold text-pink-600 mb-2">
                How can I place an order?
              </h3>
              <p className="text-gray-700">
                You can place an order directly from our online store.
              </p>
            </div>
            <div
              className="bg-pink-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105"
              style={{
                boxShadow: "0 8px 20px rgba(255, 20, 147, 0.6)",
              }}
            >
              <h3 className="text-2xl font-semibold text-pink-600 mb-2">
                Do you ship internationally?
              </h3>
              <p className="text-gray-700">
                Yes, we ship to several countries. Check if your country is on
                the list during checkout.
              </p>
            </div>
            <div
              className="bg-pink-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105"
              style={{
                boxShadow: "0 8px 20px rgba(255, 20, 147, 0.6)",
              }}
            >
              <h3 className="text-2xl font-semibold text-pink-600 mb-2">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-700">
                We accept credit cards, PayPal, and bank transfers.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Contact us at</h2>
          <p className="text-lg mb-4">
            If you have any questions or comments, we'd love to hear from you!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="bg-white border rounded-lg shadow-lg p-6"
              style={{
                boxShadow: "0 8px 20px rgba(255, 20, 147, 0.6)", // sombra color rosa
              }}
            >
              <h3 className="text-xl font-semibold mb-4">
                Contact Information
              </h3>
              <p className="text-gray-600">
                <strong>Email:</strong> hey@shinethcosmedic.com
              </p>
              <p className="text-gray-600">
                <strong>Phone:</strong> (646)233-3602
              </p>
              <p className="text-gray-600">
                <strong>Address:</strong> 28-07 Jackson Avenue, Long Island City
                NY 11101
              </p>
              <h3 className="text-xl font-semibold mt-6 mb-4">
                Follow us on Social Networks
              </h3>{" "}
              <div className="flex justify-center space-x-6">
                <a
                  href="https://www.facebook.com/shineth.cosmedic.5"
                  className="relative text-pink-500 hover:text-white rounded-full p-4 bg-white transition duration-500 transform hover:scale-110"
                  style={{
                    boxShadow: "0 0 15px rgba(255, 105, 180, 0.5)",
                    border: "2px solid rgba(255, 105, 180, 0.7)",
                    animation:
                      "bounceSpin 2s infinite ease-in-out, pulseBorder 2s infinite ease-in-out",
                  }}
                >
                  {/*<FaFacebook size={24} />*/}
                </a>
                <a
                  href="https://www.instagram.com/shinethcosmedic/"
                  className="relative text-pink-500 hover:text-white rounded-full p-4 bg-white transition duration-500 transform hover:scale-110"
                  style={{
                    boxShadow: "0 0 15px rgba(255, 105, 180, 0.5)",
                    border: "2px solid rgba(255, 105, 180, 0.7)",
                    animation:
                      "bounceSpin 2s infinite ease-in-out, pulseBorder 2s infinite ease-in-out",
                  }}
                >
                  {/*<FaInstagram size={24} />*/}
                </a>
                <a
                  href="https://www.tiktok.com/@shineth.cosmedic"
                  className="relative text-pink-500 hover:text-white rounded-full p-4 bg-white transition duration-500 transform hover:scale-110"
                  style={{
                    boxShadow: "0 0 15px rgba(255, 105, 180, 0.5)",
                    border: "2px solid rgba(255, 105, 180, 0.7)",
                    animation:
                      "bounceSpin 2s infinite ease-in-out, pulseBorder 2s infinite ease-in-out",
                  }}
                >
                  {/*<FaTiktok size={24} />*/}
                </a>
              </div>
            </div>
            <div
              className="bg-white border rounded-lg shadow-lg p-6"
              style={{
                boxShadow: "0 8px 20px rgba(255, 20, 147, 0.6)",
              }}
            >
              <h3 className="text-xl font-semibold mb-4">Send us a message</h3>
              <form>
                <input
                  type="text"
                  placeholder="Your name"
                  className="border rounded-lg p-2 w-full mb-4"
                  required
                />
                <input
                  type="email"
                  placeholder="Your email address"
                  className="border rounded-lg p-2 w-full mb-4"
                  required
                />
                <textarea
                  placeholder="Your message"
                  className="border rounded-lg p-2 w-full mb-4 h-32"
                  required
                ></textarea>
                <button className="border border-pink-500 text-pink-500 font-semibold py-2 px-6 rounded-full bg-white transition duration-300 hover:bg-pink-500 hover:text-white">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-4xl font-bold mb-8">Our Location</h2>
            <iframe
              className="w-full h-64 border rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345097337!2d144.95373631531815!3d-37.81720997975175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0b1e5b83%3A0xf3fdfc2bc6cbe7e1!2sCalle%20de%20la%20Belleza%20123%2C%20Ciudad%2C%20Pa%C3%ADs!5e0!3m2!1ses-419!2sus!4v1617985822272!5m2!1ses-419!2sus"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-6 text-center">
        <p>
          &copy; {new Date().getFullYear()} Shineth All rights reserved.
        </p>
      </footer>
      </div>
    </div>
  );
}

export default Home;
