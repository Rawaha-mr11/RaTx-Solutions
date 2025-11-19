import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import './cta-button.css';

const CTAButton = ({ 
  children, 
  to, 
  onClick, 
  variant = 'primary', 
  size = 'medium',
  className = '',
  ...props 
}) => {
  const buttonRef = useRef();

  useEffect(() => {
    const button = buttonRef.current;
    
    const hoverAnimation = gsap.to(button, {
      scale: 1.02,
      bottom: '0.6rem',
      boxShadow: '0 0 20px var(--accent)',
      duration: 0.3,
      ease: 'power2.out',
      paused: true
    });

    const handleMouseEnter = () => {
      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        hoverAnimation.play();
      }
    };

    const handleMouseLeave = () => {
      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        hoverAnimation.reverse();
      }
    };

    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mouseleave', handleMouseLeave);
      hoverAnimation.kill();
    };
  }, []);

  const baseClass = 'cta-button';
  const variantClass = `cta-button--${variant}`;
  const sizeClass = `cta-button--${size}`;

  if (to) {
    return (
      <Link
        ref={buttonRef}
        to={to}
        className={`${baseClass} ${variantClass} ${sizeClass} ${className}`}
        {...props}
      >
        <span className="cta-button__text">{children}</span>
      </Link>
    );
  }

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      className={`${baseClass} ${variantClass} ${sizeClass} ${className}`}
      {...props}
    >
      <span className="cta-button__text">{children}</span>
    </button>
  );
};

export default CTAButton;