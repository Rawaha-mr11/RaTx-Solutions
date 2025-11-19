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
    { techIcons: HtmlIcon, name: "HTML", category: "Frontend" },
    { techIcons: CssIcon, name: "CSS", category: "Frontend" },
    { techIcons: TailwindIcon, name: "Tailwind", category: "Frontend" },
    { techIcons: JavascriptIcon, name: "Javascript", category: "Frontend" },
    { techIcons: ReactIcon, name: "React", category: "Frontend" },
    { techIcons: MaterialIcon, name: "Material UI", category: "Frontend" },
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
                        <div className="tech-card__icon">
                            <tech.techIcons />
                        </div>
                        <div className="tech-card__name">{tech.name}</div>
                        <div className="tech-card__category">{tech.category}</div>
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


const HtmlIcon = () => (
  <svg width="24" height="24" viewBox="0 0 128 128" fill="currentColor">
    <path d="M19.5 3.5l8.7 98.4 35.8 9.9 36-10 8.5-98.3H19.5zm69.2 26.9l-.6 7-21.2 9.1h20.2l-2.3 27-21.7 6.3-21.6-6.2-1.5-17.4h10.4l.8 8.9 11.9 3.3 12-3.3.8-11.8H43.6l-.5-6 21.2-9.2H43.4l-.7-7.1h46z"/>
  </svg>
);

const CssIcon = () => (
  <svg width="24" height="24" viewBox="0 0 128 128" fill="currentColor">
    <path d="M19 3.5l8.5 98.4 36.2 10 36.3-10 8.5-98.4H19zm72.3 28.2H43.8l.7 7.7h46.1l-2 22.3-21.8 6-21.9-6-1.4-15.7h10.4l.8 8.4 12.3 3.5 12.1-3.5 1.3-14H41.7l-2.1-24h51.7l-.3 5.3z"/>
  </svg>
);

const TailwindIcon = () => (
  <svg width="24" height="24" viewBox="0 0 256 154" fill="currentColor">
    <path d="M128 0c-35 0-57 18-66 54 13-18 29-25 48-21 10 2 17 8 25 16 13 14 28 20 46 20 35 0 57-18 66-54-13 18-29 25-48 21-10-2-17-8-25-16C161 6 146 0 128 0zm-66 74c-35 0-57 18-66 54 13-18 29-25 48-21 10 2 17 8 25 16 13 14 28 20 46 20 35 0 57-18 66-54-13 18-29 25-48 21-10-2-17-8-25-16-13-14-28-20-46-20z"/>
  </svg>
);

const JavascriptIcon = () => (
  <svg width="24" height="24" viewBox="0 0 128 128" fill="currentColor">
    <path d="M1.4 1.4h125.2v125.2H1.4z" />
    <path d="M116.3 116.3H11.7V11.7h104.6z" fill="currentColor"/>
    <path d="M86.7 97.1c2.2 3.6 5 6.2 10 6.2 4.2 0 6.9-2.1 6.9-5 0-3.5-2.8-4.7-7.5-6.7l-2.6-1.1c-7.5-3.2-12.5-7.3-12.5-16 0-8 6.1-14.2 15.6-14.2 6.8 0 11.7 2.4 15.2 8.7l-8.3 5.3c-1.8-3.2-3.8-4.4-6.9-4.4-3.1 0-5.1 2-5.1 4.4 0 3.1 2 4.3 6.7 6.2l2.6 1.1c8.9 3.8 13.9 7.7 13.9 16.4 0 9.4-7.3 14.6-17.1 14.6-9.6 0-15.8-4.6-19-10.6l8.0-4.7zM49.3 97.7c1.6 2.9 3.1 5.3 6.6 5.3 3.4 0 5.6-1.3 5.6-6.6V57.1h10.5v39.6c0 10.8-6.3 15.7-15.4 15.7-8.3 0-13.1-4.3-15.5-9.5l8.2-5.2z"/>
  </svg>
);

const ReactIcon = () => (
  <svg width="24" height="24" viewBox="0 0 841.9 595.3" fill="currentColor">
    <circle cx="420.9" cy="296.5" r="45.7" />
    <g fill="none" stroke="currentColor" strokeWidth="30">
      <ellipse rx="165" ry="381" transform="rotate(60 420.9 296.5)" />
      <ellipse rx="165" ry="381" transform="rotate(120 420.9 296.5)" />
      <ellipse rx="165" ry="381" transform="rotate(180 420.9 296.5)" />
    </g>
  </svg>
);

const MaterialIcon = () => (
  <svg width="24" height="24" viewBox="0 0 600 476" fill="currentColor">
    <path d="M0 259V0l225 129v86L75 129v172l150 86v86zM600 0v259L375 388v-86l150-86V129L375 215v-86z"/>
  </svg>
);



export default ServiceWebDev;
