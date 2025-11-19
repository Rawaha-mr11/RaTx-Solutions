import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const preloaderTimeline = (preloaderRef, onComplete) => {
  return gsap.context(() => {
    const tl = gsap.timeline({ onComplete });
    
    tl.from('.preloader__text .char', {
      duration: 0.8,
      y: 60,
      opacity: 0,
      rotationX: 90,
      stagger: 0.05,
      ease: 'back.out(1.7)'
    })
    .to('.preloader__text .char', {
      duration: 0.8,
      scale: 1.2,
      color: 'var(--accent-gold)',
      stagger: 0.03,
      ease: 'power2.inOut'
    })
    .to(preloaderRef.current, {
      duration: 0.6,
      opacity: 0,
      pointerEvents: 'none',
      ease: 'power2.out'
    });
  });
};

export const pageEnter = (node) => {
  return gsap.fromTo(node,
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
  );
};

export const pageExit = (node) => {
  return gsap.to(node, {
    opacity: 0,
    y: -20,
    duration: 0.4,
    ease: 'power2.in'
  });
};

export const staggerText = (node) => {
  return gsap.from(node, {
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: node,
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  });
};

export const buttonHover = (btn) => {
  const hoverTl = gsap.timeline({ paused: true });
  
  hoverTl.to(btn, {
    duration: 0.2,
    scale: 1.02,
    boxShadow: '0 0 20px var(--accent-gold)',
    ease: 'power2.out'
  });

  btn.addEventListener('mouseenter', () => hoverTl.play());
  btn.addEventListener('mouseleave', () => hoverTl.reverse());
};

export const revealOnScroll = (selector) => {
  gsap.utils.toArray(selector).forEach(element => {
    gsap.fromTo(element,
      {
        y: 40,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  });
};

export const parallaxOffset = (element, distance) => {
  gsap.to(element, {
    y: distance,
    ease: 'none',
    scrollTrigger: {
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  });
};