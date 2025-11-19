import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';

const PageWrapper = ({ children }) => {
  const pageRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Reset position and opacity before animation
    gsap.set(pageRef.current, { 
      opacity: 0, 
      y: 20 
    });

    // Smooth enter animation
    const tl = gsap.timeline();
    tl.to(pageRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power2.out'
    });

    return () => {
      // Quick cleanup
      tl.kill();
    };
  }, [location.pathname]);

  return (
    <div ref={pageRef} className="page-wrapper">
      {children}
    </div>
  );
};

export default PageWrapper;