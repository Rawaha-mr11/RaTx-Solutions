import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import SEO from '../components/SEO';
import CTAButton from '../components/CTAButton';
import './notfound.css';

const NotFound = () => {
  const containerRef = useRef();
  const textRef = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.from(containerRef.current, {
        duration: 1,
        opacity: 0,
        scale: 0.8,
        ease: 'back.out(1.7)'
      })
      .from(textRef.current, {
        duration: 0.8,
        y: 40,
        opacity: 0,
        stagger: 0.1,
        ease: 'power3.out'
      }, '-=0.5')
      .from(buttonRef.current, {
        duration: 0.6,
        y: 40,
        opacity: 0,
        ease: 'power3.out'
      }, '-=0.3');
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <SEO 
        title="Page Not Found - 404 Error"
        description="The page you're looking for doesn't exist. Return to the homepage or contact us for assistance."
        robots="noindex, nofollow"
      />
      
      <div className="not-found">
        <div ref={containerRef} className="not-found__container">
          <div className="not-found__content">
            <div ref={textRef} className="not-found__text">
              <h1 className="not-found__title">404</h1>
              <h2 className="not-found__subtitle">Page Not Found</h2>
              <p className="not-found__description">
                Sorry, the page you're looking for doesn't exist or has been moved. 
                Let's get you back on track.
              </p>
            </div>
            
            <div ref={buttonRef} className="not-found__actions">
              <CTAButton to="/" variant="primary" size="large">
                Back to Homepage
              </CTAButton>
              <Link to="/contact" className="not-found__link">
                Contact Support
              </Link>
            </div>
            
            <div className="not-found__illustration">
              <NotFoundIllustration />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const NotFoundIllustration = () => (
  <svg width="300" height="200" viewBox="0 0 300 200" fill="none">
    {/* Background */}
    <rect width="300" height="200" fill="var(--bg-offwhite)" rx="12"/>
    
    {/* Magnifying Glass */}
    <circle cx="120" cy="80" r="40" stroke="var(--primary-green)" strokeWidth="4" fill="none"/>
    <line x1="150" y1="110" x2="180" y2="140" stroke="var(--primary-green)" strokeWidth="4"/>
    
    {/* 404 Text */}
    <text x="150" y="160" textAnchor="middle" fill="var(--text-charcoal)" fontSize="14" fontWeight="600">
      404 - Page Not Found
    </text>
    
    {/* Floating elements */}
    <circle cx="80" cy="50" r="8" fill="var(--accent-gold)" opacity="0.6">
      <animate attributeName="cy" values="50;45;50" dur="2s" repeatCount="indefinite"/>
    </circle>
    <circle cx="200" cy="60" r="6" fill="var(--primary-green)" opacity="0.4">
      <animate attributeName="cx" values="200;205;200" dur="3s" repeatCount="indefinite"/>
    </circle>
    <circle cx="240" cy="40" r="5" fill="var(--accent-gold)" opacity="0.5">
      <animate attributeName="cy" values="40;35;40" dur="2.5s" repeatCount="indefinite"/>
    </circle>
  </svg>
);

export default NotFound;