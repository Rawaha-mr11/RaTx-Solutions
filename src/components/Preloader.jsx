import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Preloader.css';

const Preloader = ({ onFinish }) => {
  const preloaderRef = useRef();
  const textRef = useRef();
  const contentRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const chars = textRef.current.querySelectorAll('.char');
      
      const tl = gsap.timeline({
        onComplete: onFinish
      });

      // Initial setup
      tl.set(preloaderRef.current, { 
        autoAlpha: 1 
      })
      // Text entrance animation
      .from(chars, {
        duration: 0.8,
        y: 60,
        opacity: 0,
        rotationX: 90,
        transformOrigin: '50% 50% -30px',
        stagger: 0.05,
        ease: 'back.out(1.7)'
      })
      // Text highlight effect
      .to(chars, {
        duration: 0.8,
        scale: 1.2,
        color: 'var(--accent-gold)',
        textShadow: '0 0 20px var(--accent-gold-hover)',
        stagger: 0.03,
        ease: 'power2.inOut'
      })
      // Content moves upward and fades out
      .to(contentRef.current, {
        duration: 1.2,
        y: -150,
        opacity: 0,
        scale: 0.8,
        rotationX: -15,
        ease: 'power2.inOut'
      }, "-=0.3") // Start 0.3s before previous animation ends
      // Background fades out
      .to(preloaderRef.current, {
        duration: 0.8,
        opacity: 0,
        pointerEvents: 'none',
        ease: 'power2.out'
      }, "-=0.5"); // Start 0.5s before previous animation ends

    }, preloaderRef);

    return () => ctx.revert();
  }, [onFinish]);

  const splitText = (text) => {
    return text.split('').map((char, index) => (
      <span key={index} className="char" aria-hidden="true">
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <div 
      ref={preloaderRef}
      className="preloader" 
      aria-live="polite" 
      aria-label="Loading website"
    >
      <div ref={contentRef} className="preloader__content">
        <h1 ref={textRef} className="preloader__text">
          {splitText('RATX SOLUTIONS')}
        </h1>
        <span className="visually-hidden">Loading, please wait...</span>
      </div>
    </div>
  );
};

export default Preloader;