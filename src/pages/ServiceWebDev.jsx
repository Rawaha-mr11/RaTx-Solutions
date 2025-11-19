import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SEO from "../components/SEO";
import Hero from "../components/Hero";
import CTAButton from "../components/CTAButton";
import "./service-detail.css";

gsap.registerPlugin(ScrollTrigger);

const ServiceWebDev = () => {
  const featuresRef = useRef();
  const technologiesRef = useRef();
  const packagesRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Features animation
      gsap.fromTo(
        ".feature-item",
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Technologies animation
      gsap.fromTo(
        ".tech-card",
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: technologiesRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Packages animation
      gsap.fromTo(
        ".package-card",
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: packagesRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const features = [
    "Custom Web Application Development",
    "Responsive Design & Mobile Optimization",
    "E-commerce Solutions & Payment Integration",
    "API Development & Integration",
    "Content Management Systems",
    "Performance Optimization & SEO",
    "Security Implementation & Best Practices",
    "Ongoing Maintenance & Support",
  ];

  // const techIcons = [
  //   ""
  // ]

  const technologies = [
    { name: "HTML", category: "Frontend" },
    { name: "CSS", category: "Frontend" },
    { name: "Tailwind", category: "Frontend" },
    { name: "Javascript", category: "Frontend" },
    { name: "React", category: "Frontend" },
    { name: "Material UI", category: "Frontend" },
    // { name: "Next.js", category: "Frontend" },
    // { name: "Vue.js", category: "Frontend" },
    // { name: "Node.js", category: "Backend" },
    // { name: "Python", category: "Backend" },
    // { name: "MongoDB", category: "Database" },
    // { name: "PostgreSQL", category: "Database" },
    // { name: "AWS", category: "Cloud" },
    // { name: "Docker", category: "DevOps" },
    // { name: "GraphQL", category: "API" },
  ];

  const packages = [
    {
      name: "Starter",
      price: "$2,500",
      description: "Perfect for small businesses and startups",
      features: [
        "Responsive Website (up to 5 pages)",
        "Basic SEO Setup",
        "Contact Form Integration",
        "1 Month Support",
        "2 Rounds of Revisions",
      ],
      recommended: false,
    },
    {
      name: "Professional",
      price: "$7,500",
      description: "Ideal for growing businesses with complex needs",
      features: [
        "Custom Web Application",
        "Advanced SEO Optimization",
        "Database Integration",
        "3 Months Support",
        "Admin Dashboard",
        "API Integration",
        "Unlimited Revisions",
      ],
      recommended: true,
    },
    {
      name: "Enterprise",
      price: "$15,000+",
      description: "Complete solutions for large-scale applications",
      features: [
        "Full-stack Development",
        "Scalable Architecture",
        "Advanced Security",
        "6 Months Support",
        "Team Training",
        "Performance Monitoring",
        "Priority Support",
        "Custom SLA",
      ],
      recommended: false,
    },
  ];

  return (
    <>
      <SEO
        title="Web Development Services - Custom Web Applications"
        description="Professional web development services including custom web applications, e-commerce solutions, and responsive websites. Modern technologies, scalable solutions."
      />

      <Hero
        title="Custom Web Development"
        subtitle="Transform your ideas into powerful, scalable web applications with modern technologies and best practices"
        primaryCTA={{
          text: "Start Your Project",
          to: "/contact",
        }}
        secondaryCTA={{
          text: "View Portfolio",
          to: "/portfolio",
        }}
        variant="service-detail"
      />

      {/* Overview Section */}
      <section className="section">
        <div className="container">
          <div className="service-overview">
            <div className="service-overview__content">
              <h2>Build for Performance & Scale</h2>
              <p>
                Our web development services focus on creating fast, secure, and
                scalable applications that provide exceptional user experiences.
                We leverage modern technologies and industry best practices to
                deliver solutions that grow with your business.
              </p>
              <p>
                From simple business websites to complex web applications, we
                approach each project with the same commitment to quality,
                performance, and client satisfaction.
              </p>
            </div>
            <div className="service-overview__stats">
              <div className="stat">
                <div className="stat__number">5+</div>
                <div className="stat__label">Projects Delivered</div>
              </div>
              <div className="stat">
                <div className="stat__number">99.9%</div>
                <div className="stat__label">Uptime Guarantee</div>
              </div>
              <div className="stat">
                <div className="stat__number">24/7</div>
                <div className="stat__label">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="section section--alt">
        <div className="container">
          <div className="section__header">
            <h2>What We Deliver</h2>
            <p className="section__subtitle">
              Comprehensive web development solutions tailored to your needs
            </p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <div className="feature-item__icon">
                  <CheckIcon />
                </div>
                <span className="feature-item__text">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section ref={technologiesRef} className="section">
        <div className="container">
          <div className="section__header text-center">
            <h2>Technologies We Use</h2>
            <p className="section__subtitle">
              Modern tools and frameworks for optimal results
            </p>
          </div>
          <div className="technologies-grid">
            {technologies.map((tech, index) => (
              <div key={index} className="tech-card">
                {/* <span className="tech-card__icons">{tech.techIcons}</span> */}
                <span className="tech-card__name">{tech.name}</span>
                <span className="tech-card__category">{tech.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section ref={packagesRef} className="section section--alt">
        <div className="container">
          <div className="section__header text-center">
            <h2>Development Packages</h2>
            <p className="section__subtitle">
              Flexible options to match your budget and requirements
            </p>
          </div>
          <div className="packages-grid">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`package-card ${
                  pkg.recommended ? "package-card--recommended" : ""
                }`}
              >
                {pkg.recommended && (
                  <div className="package-card__badge">Most Popular</div>
                )}
                <div className="package-card__header">
                  <h3 className="package-card__name">{pkg.name}</h3>
                  <div className="package-card__price">{pkg.price}</div>
                  <p className="package-card__description">{pkg.description}</p>
                </div>
                <ul className="package-card__features">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="package-card__feature" style={{color: "white"}}>
                      <CheckIcon />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="package-card__actions">
                  <CTAButton
                    to="/contact"
                    variant={pkg.recommended ? "primary" : "secondary"}
                    size="large"
                    className="package-card__cta"
                  >
                    Get Started
                  </CTAButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section">
        <div className="container">
          <div className="service-cta">
            <h2>Ready to Build Your Web Application?</h2>
            <p>
              Let's discuss your project requirements and create a solution that
              drives your business forward.
            </p>
            <CTAButton to="/contact" variant="accent" size="large" style={{color:"var(--bg-earth-grey-green)"}}>
              Start Your Project Today
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
};

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--text-offwhite)">
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
  </svg>
);

export default ServiceWebDev;
