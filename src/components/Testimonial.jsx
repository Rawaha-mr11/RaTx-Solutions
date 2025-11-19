import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './testimonial.css';

const Testimonial = ({ testimonial, index }) => {
  const testimonialRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(testimonialRef.current, {
        scrollTrigger: {
          trigger: testimonialRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: index * 0.15
      });
    }, testimonialRef);

    return () => ctx.revert();
  }, [index]);

  return (
    <div ref={testimonialRef} className="testimonial">
      <div className="testimonial__content">
        <div className="testimonial__quote">
          <QuoteIcon />
          <p>{testimonial.content}</p>
        </div>
        
        <div className="testimonial__rating">
          {[...Array(testimonial.rating)].map((_, i) => (
            <StarIcon key={i} />
          ))}
        </div>
      </div>
      
      <div className="testimonial__author">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="testimonial__avatar"
        />
        <div className="testimonial__author-info">
          <h4 className="testimonial__name">{testimonial.name}</h4>
          <p className="testimonial__company">{testimonial.company}</p>
          <p className="testimonial__role">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

const QuoteIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="var(--bg-earth-grey-green)">
    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
  </svg>
);

const StarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--bg-earth-grey-green)">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
  </svg>
);

export default Testimonial;