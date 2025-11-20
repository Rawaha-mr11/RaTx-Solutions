import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CTAButton from "./CTAButton";
import "./footer.css";


gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        footerRef.current,
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
            once: true
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="footer">
      <div className="container">
        <div className="footer__content">
          {/* Brand Section */}
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="footer__logo-text">RaTx SOLUTIONS</span>
            </div>
            <p className="footer__description">
              Premium front end web development, data entry, and creative
              writing services tailored to help your business grow and succeed
              in the digital world.
            </p>
            <div className="footer__social">
              <a href="#" aria-label="LinkedIn" className="footer__social-link">
                <LinkedInIcon />
              </a>
              <a href="#" aria-label="Twitter" className="footer__social-link">
                <TwitterIcon />
              </a>
              <a href="#" aria-label="GitHub" className="footer__social-link">
                <GitHubIcon />
              </a>
              <WhatsAppLinks />
              <GmailLinks />
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__links">
            <h3 className="footer__heading">Quick Links</h3>
            <ul className="footer__list">
              <li>
                <Link to="/" className="footer__link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer__link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer__link">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="footer__link">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/blog" className="footer__link">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/Contact" className="footer__link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer__links">
            <h3 className="footer__heading">Services</h3>
            <ul className="footer__list">
              <li>
                <Link to="/services/web-development" className="footer__link">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services/data-entry" className="footer__link">
                  Data Entry
                </Link>
              </li>
              <li>
                <Link to="/services/creative-writing" className="footer__link">
                  Creative Writing
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer__newsletter">
            <h3 className="footer__heading">Stay Updated</h3>
            <p className="footer__newsletter-text">
              Get the latest updates on our services and industry insights.
            </p>
            <form className="footer__form">
              <input
                type="email"
                placeholder="Enter your email"
                className="footer__input"
                required
              />
              <CTAButton type="submit" variant="primary" size="small" className="cta-footer-subscribe">
                Subscribe
              </CTAButton>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <div className="footer__legal">
            <span>&copy; 2024 RaTx SOLUTIONS. All rights reserved.</span>
            <div className="footer__legal-links">
              <Link to="/privacy" className="footer__legal-link">
                Privacy Policy
              </Link>
              <Link to="/terms" className="footer__legal-link">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const RatxLogo = () => (
  <svg width="24" height="24" viewBox="0 0 32 32">
    <path
      d="M16 2L20 12L30 12L22 18L26 28L16 22L6 28L10 18L2 12L12 12Z"
      fill="var(currentColor)"
    />
    <circle cx="16" cy="16" r="4" fill="var(--accent)" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
  </svg>
);

const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.52 3.48A11.78 11.78 0 0 0 12 0C5.37 0 .03 5.34.03 11.92a11.84 11.84 0 0 0 1.62 5.98L0 24l6.27-1.64a11.93 11.93 0 0 0 5.73 1.46h.01c6.63 0 12-5.34 12-11.92 0-3.19-1.26-6.19-3.48-8.42ZM12 21.55c-1.8 0-3.56-.48-5.1-1.39l-.36-.21-3.72.97.99-3.63-.23-.37a9.8 9.8 0 0 1-1.46-5.01C2.12 6.58 6.56 2.2 12 2.2c2.6 0 5.05 1 6.89 2.83a9.63 9.63 0 0 1 2.88 6.89c0 5.37-4.44 9.73-9.77 9.73Zm5.44-7.27c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15s-.77.97-.94 1.17-.35.22-.65.07a8.09 8.09 0 0 1-2.38-1.47 8.7 8.7 0 0 1-1.6-1.97c-.17-.3 0-.45.13-.6.14-.15.3-.37.45-.55.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.91-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.08-.79.37s-1.04 1-1.04 2.43 1.07 2.82 1.22 3.02c.15.2 2.1 3.33 5.08 4.68.71.31 1.26.5 1.7.63.72.23 1.38.2 1.9.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.2-.57-.35Z" />
  </svg>
);

const GmailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4.07l-8 4.93-8-4.93V6l8 5 8-5v2.07Z" />
  </svg>
);

const WhatsAppLinks = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="footer-dropdown">
      <button
        className="footer__social-link"
        onClick={() => setShowMenu(!showMenu)}
        aria-label="WhatsApp contacts"
      >
        <WhatsAppIcon />
      </button>

      {showMenu && (
        <div className="footer-dropdown__menu">
          <a
            href="https://wa.me/+923028053159"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-dropdown__item"
          >
            +92 302 805 3159
          </a>
          <a
            href="https://wa.me/+923192152020"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-dropdown__item"
          >
            +92 319 215 2020
          </a>
        </div>
      )}
    </div>
  );
};

const GmailLinks = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="footer-dropdown">
      <button
        className="footer__social-link"
        onClick={() => setShowMenu(!showMenu)}
        aria-label="Gmail contacts"
      >
        <GmailIcon />
      </button>

      {showMenu && (
        <div className="footer-dropdown__menu">
          <a
            href="mailto:rawaha465@gmail.com"
            className="footer-dropdown__item"
          >
            rawaha465@gmail.com
          </a>
          <a
            href="mailto:tk0319215@gmail.com"
            className="footer-dropdown__item"
          >
            tk0319215@gmail.com
          </a>
        </div>
      )}
    </div>
  );
};
export default Footer;
