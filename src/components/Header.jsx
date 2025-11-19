import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import './header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef();
  const location = useLocation();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        duration: 1,
        y: -100,
        opacity: 0,
        ease: 'power3.out'
      });
    }, headerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header ref={headerRef} className="header">
      <div className="container">
        <div className="header__content">
          <Link to="/" className="header__logo">
            <span className="header__logo-text">RaTx SOLUTIONS</span>
          </Link>

          <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
            <ul className="header__nav-list">
              <li><Link to="/" className="header__nav-link">Home</Link></li>
              <li><Link to="/about" className="header__nav-link">About</Link></li>
              <li><Link to="/services" className="header__nav-link">Services</Link></li>
              <li><Link to="/portfolio" className="header__nav-link">Portfolio</Link></li>
              <li><Link to="/blog" className="header__nav-link">Blog</Link></li>
              <li><Link to="/contact" className="header__nav-link">Contact</Link></li>
            </ul>
          </nav>

          <button 
            className={`header__menu-toggle ${isMenuOpen ? 'header__menu-toggle--open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <span className='toggleStyle'></span>
            <span className='toggleStyle'></span>
            <span className='toggleStyle'></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;