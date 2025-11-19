import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import CTAButton from './CTAButton';
import './service-card.css';

const ServiceCard = ({ service, index }) => {
  const cardRef = useRef();

  useEffect(() => {
    const card = cardRef.current;
    
    const hoverAnimation = gsap.to(card, {
      y: -10,
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
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

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
      hoverAnimation.kill();
    };
  }, []);

  return (
    <article ref={cardRef} className="service-card">
      <div className="service-card__icon">
        <ServiceIcon type={service.icon} />
      </div>
      <h3 className="service-card__title">{service.title}</h3>
      <p className="service-card__description">{service.description}</p>
      <ul className="service-card__features">
        {service.features.slice(0, 3).map((feature, idx) => (
          <li key={idx} className="service-card__feature">
            {feature}
          </li>
        ))}
      </ul>
      <div className="service-card__actions">
        <CTAButton 
          to={`/services/${service.slug}`} 
          variant="primary" 
          size="small"
          style={{marginBottom: 0}}
        >
          Learn More
        </CTAButton>
        <Link to="/contact" className="service-card__link">
          Get Quote
        </Link>
      </div>
    </article>
  );
};

const ServiceIcon = ({ type }) => {
  const icons = {
    web: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="currentColor"/>
      </svg>
    ),
    data: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" fill="currentColor"/>
      </svg>
    ),
    writing: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" fill="currentColor"/>
      </svg>
    )
  };

  return icons[type] || icons.web;
};

export default ServiceCard;
