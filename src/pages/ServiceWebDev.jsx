import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SEO from "../components/SEO";
import Hero from "../components/Hero";
import CTAButton from "../components/CTAButton";
import "./service-detail.css";
import HTML5 from '../assets/html5.png'
import CSS3 from '../assets/css3.png'
import MaterialUi from '../assets/ui.png'

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
                    <li
                      key={idx}
                      className="package-card__feature"
                      style={{ color: "white" }}
                    >
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
            <CTAButton
              to="/contact"
              variant="accent"
              size="large"
              style={{ color: "var(--bg-earth-grey-green)" }}
            >
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
    <img 
      src={HTML5} 
      alt="Material UI" 
      width={60} 
      height={60}
      style={{ objectFit: "contain" }}
    />
);

const CssIcon = () => (
    <img 
      src={CSS3} 
      alt="Material UI" 
      width={60} 
      height={60}
      style={{ objectFit: "contain" }}
    />
);


const TailwindIcon = () => (
  <svg viewBox="0 0 256 154" width="40" height="40">
    <path
      fill="#38BDF8"
      d="M128 0c-35 0-57 18-66 54 13-18 29-25 48-21 10 2 17 8 25 16 13 14 28 20 46 20 35 0 57-18 66-54-13 18-29 25-48 21-10-2-17-8-25-16C161 6 146 0 128 0zm-66 74c-35 0-57 18-66 54 13-18 29-25 48-21 10 2 17 8 25 16 13 14 28 20 46 20 35 0 57-18 66-54-13 18-29 25-48 21-10-2-17-8-25-16-13-14-28-20-46-20z"
    />
  </svg>
);


const JavascriptIcon = () => (
  <svg viewBox="0 0 128 128" width="40" height="40">
    <path fill="#F7DF1E" d="M1 1h126v126H1z" />
    <path d="M86 97c2 3 4 6 9 6 4 0 7-2 7-5 0-3-2-5-7-7l-3-1c-7-3-12-7-12-16s6-15 16-15c7 0 12 2 15 8l-8 5c-2-3-4-4-7-4-3 0-5 2-5 5s2 5 7 7l3 1c9 4 14 7 14 16 0 10-7 15-18 15-10 0-16-4-19-10l8-5zM49 98c2 3 3 5 7 5s6-2 6-7V57h10v39c0 11-6 16-16 16-8 0-13-4-15-9l8-5z" />
  </svg>
);


const ReactIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348">
  <title>React Logo</title>
  <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
  <g stroke="#61DAFB" stroke-width="1" fill="none">
    <ellipse rx="11" ry="4.2" transform="rotate(30)"/>
    <ellipse rx="11" ry="4.2" transform="rotate(90)"/>
    <ellipse rx="11" ry="4.2" transform="rotate(150)"/>
  </g>
</svg>
);


const MaterialIcon = () => {
  return (
    <img 
      src={MaterialUi} 
      alt="Material UI" 
      width={60} 
      height={60}
      style={{ objectFit: "contain" }}
    />
  );
};


export default ServiceWebDev;
