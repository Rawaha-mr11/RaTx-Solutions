import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import CTAButton from "./CTAButton";
import "./hero.css";
import { bgImages } from "../data/BgImageSlider.js";

const Hero = ({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  image,
  variant = "home",
}) => {
  const heroRef = useRef();
  const titleRef = useRef();
  const subtitleRef = useRef();
  const ctaRef = useRef();

  const [currentBgImg, setCurrentBgImg] = useState(0);

  useEffect(() => {
    const BgImgTime = setInterval(() => {
      setCurrentBgImg((prev) => (prev + 1) % bgImages.length);
    }, 3000);
    return () => clearInterval(BgImgTime);
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split text animation for title
      const titleChars = titleRef.current.querySelectorAll(".char");

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        delay: 0.1
      });

      tl.from(heroRef.current, {
        duration: 1,
        opacity: 0,
        y: 50,
      })
        .from(
          titleChars,
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
            rotationX: 90,
            stagger: 0.03,
            ease: "back.out(1.7)",
          },
          "-=0.5"
        )
        .from(
          subtitleRef.current,
          {
            y: 50,
            duration: 0.8,
            opacity: 0,
          },
          "-=0.4"
        )
        .fromTo(
          ctaRef.current.children,
          {
            y: 50,
            opacity: 0,  
            immediateRender: false   
          },{
            y: 0,
            opacity: 1,       
            duration: 0.6,
            stagger: 0.1,
          },
          "-=1.9"
        );
    }, heroRef);

    return () => ctx.revert();
  }, [title]);

  const splitText = (text) => {
    return text.split(" ").map((word, wIndex) => (
      <span
        key={wIndex}
        className="word"
        style={{ display: "inline-block", whiteSpace: "nowrap" }}
      >
        {word.split("").map((char, cIndex) => (
          <span key={cIndex} className="char" aria-hidden="true">
            {char}
          </span>
        ))}
        {wIndex < text.split(" ").length - 1 && "\u00A0"}
      </span>
    ));
  };

  return (
    <section
      ref={heroRef}
      className={`hero hero--${variant}`}
      style={{ backgroundImage: `url(${bgImages[currentBgImg]})` }}
    >
      <div className="hero__content">
        <h1 ref={titleRef} className="hero__title">
          {splitText(title)}
          <span className="visually-hidden">{title}</span>
        </h1>
        {subtitle && (
          <p ref={subtitleRef} className="hero__subtitle">
            {subtitle}
          </p>
        )}
        <div ref={ctaRef} className="hero__cta">
          {primaryCTA && (
            <CTAButton
              to={primaryCTA.to}
              onClick={primaryCTA.onClick}
              variant="primary"
              size="large"
            >
              {primaryCTA.text}
            </CTAButton>
          )}
          {secondaryCTA && (
            <CTAButton
              to={secondaryCTA.to}
              onClick={secondaryCTA.onClick}
              variant="secondary"
              size="large"
            >
              {secondaryCTA.text}
            </CTAButton>
          )}
        </div>
        
      </div>
      <div className="hero-radio__btn">
          {bgImages.map((_, index) => (
            <input
              key={index}
              type="radio"
              name="bg-slider"
              checked={currentBgImg === index}
              onChange={() => setCurrentBgImg(index)}
            />
          ))}
        </div>
    </section>
  );
};

export default Hero;
