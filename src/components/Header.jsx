import React, { useState, useEffect } from 'react';
import '../Styles/Header.css';
import logo from '../Logocompleto.png';  // Importa la imagen
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsSubMenuOpen(prevState => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Limpiar el evento de scroll cuando el componente se desmonte
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  
  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <Link to="/">
        <img src={logo} alt="Logo" width={40} />
      </Link>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About Us</Link></li>
          <li><Link to="/Store">Store</Link></li>
          <li><Link to="/Contact">Contact Us</Link></li>
          <li><Link to="/Info">Info</Link></li>
          <li><Link to="/Availability">Book Now</Link></li>
          <li><Link to="/More">More</Link></li>
          <li 
            className="menu-item"
            onMouseEnter={toggleSubMenu}
            onMouseLeave={toggleSubMenu}
          >
            <a href="#services">Services</a>
            {isSubMenuOpen && (
              <ul className="submenu">
                <li><a href="#a">a</a></li>
                <li><a href="#b">b</a></li>
                <li><a href="#c">c</a></li>
              </ul>
            )}
          </li>
          <li><a href="#contact">Login</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
