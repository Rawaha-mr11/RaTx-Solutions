import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import CTAButton from './CTAButton';
import './project-card.css';

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef();
  const imageRef = useRef();
  const contentRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: index * 0.1
      });

      // Hover animation
      const hoverTl = gsap.timeline({ paused: true });
      hoverTl
        .to(imageRef.current, {
          scale: 1.05,
          duration: 0.3,
          ease: 'power2.out'
        })
        .to(contentRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.3,
          ease: 'power2.out'
        }, 0);

      const card = cardRef.current;
      
      const handleMouseEnter = () => {
        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          hoverTl.play();
        }
      };

      const handleMouseLeave = () => {
        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          hoverTl.reverse();
        }
      };

      card.addEventListener('mouseenter', handleMouseEnter);
      card.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        card.removeEventListener('mouseenter', handleMouseEnter);
        card.removeEventListener('mouseleave', handleMouseLeave);
      };
    }, cardRef);

    return () => ctx.revert();
  }, [index]);

  return (
    <article ref={cardRef} className="project-card">
      <div className="project-card__image-container">
        <img
          ref={imageRef}
          src={project.image}
          alt={project.title}
          className="project-card__image"
        />
        <div ref={contentRef} className="project-card__overlay">
          <div className="project-card__overlay-content">
            <h3 className="project-card__title">{project.title}</h3>
            <p className="project-card__description">{project.description}</p>
            <div className="project-card__technologies">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="project-card__tech">
                  {tech}
                </span>
              ))}
            </div>
            <div className="project-card__actions">
              <CTAButton to={project.link} variant="primary" size="small">
                View Case Study
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
      <div className="project-card__info">
        <span className="project-card__category">{project.category}</span>
        <h3 className="project-card__name">{project.title}</h3>
      </div>
    </article>
  );
};

export default ProjectCard;