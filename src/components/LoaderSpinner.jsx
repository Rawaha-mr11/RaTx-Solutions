import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './loader-spinner.css';

const LoaderSpinner = ({ size = 'medium', color = 'primary' }) => {
  const spinnerRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Infinite rotation animation
      gsap.to(spinnerRef.current, {
        rotation: 360,
        duration: 1,
        repeat: -1, // -1 means infinite repeat
        ease: 'linear'
      });
    }, spinnerRef);

    return () => ctx.revert();
  }, []);

  // Size classes function
  const getSizeClass = () => {
    const sizeMap = {
      small: 'loader-spinner--small',
      large: 'loader-spinner--large',
      medium: 'loader-spinner--medium'
    };
    return sizeMap[size] || sizeMap.medium;
  };

  // Color classes function
  const getColorClass = () => {
    const colorMap = {
      gold: 'loader-spinner--gold',
      white: 'loader-spinner--white',
      primary: 'loader-spinner--primary'
    };
    return colorMap[color] || colorMap.primary;
  };

  return (
    <div 
      ref={spinnerRef}
      className={`loader-spinner ${getSizeClass()} ${getColorClass()}`}
      aria-label="Loading"
      role="status"
    >
      <div className="loader-spinner__circle"></div>
    </div>
  );
};

export default LoaderSpinner;
