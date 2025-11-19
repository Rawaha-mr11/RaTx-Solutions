import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SEO from "../components/SEO";
import Hero from "../components/Hero";
import CTAButton from "../components/CTAButton";
import "./service-detail.css";

gsap.registerPlugin(ScrollTrigger);

const ServiceDataEntry = () => {
  const featuresRef = useRef();
  const processRef = useRef();
  const packagesRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".feature-item",
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
        "-=1.5"
      );

      gsap.fromTo(
        ".process-step",
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: processRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
        "-=1.5"
      );

      gsap.fromTo(
        ".package-card",
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: packagesRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
        "-=1.5"
      );
    });

    return () => ctx.revert();
  }, []);

  const features = [
    "Data Processing & Entry",
    "Data Cleaning & Validation",
    "Database Management",
    "Excel & CSV Processing",
    "Data Migration Services",
    "PDF to Digital Conversion",
    "Image to Text Conversion",
    "Quality Assurance & Accuracy Checks",
  ];

  const process = [
    {
      step: "01",
      title: "Data Assessment",
      description: "We analyze your data requirements and source materials",
    },
    {
      step: "02",
      title: "Format Planning",
      description: "Determine the optimal format and structure for your data",
    },
    {
      step: "03",
      title: "Data Processing",
      description: "Systematic entry and processing with quality checks",
    },
    {
      step: "04",
      title: "Quality Validation",
      description: "Multiple rounds of validation to ensure 99.9% accuracy",
    },
    {
      step: "05",
      title: "Final Delivery",
      description: "Data delivered in your preferred format with documentation",
    },
  ];

  const packages = [
    {
      name: "Basic",
      price: "$25/hour",
      description: "Simple data entry tasks and basic formatting",
      features: [
        "Up to 1000 entries/hour",
        "Basic data formatting",
        "Single format output",
        "1 round of revisions",
        "48-hour delivery",
      ],
      recommended: false,
    },
    {
      name: "Professional",
      price: "$35/hour",
      description: "Complex data processing with validation",
      features: [
        "Up to 800 entries/hour",
        "Advanced data cleaning",
        "Multiple format outputs",
        "Quality validation checks",
        "24-hour delivery",
        "Data analysis reports",
      ],
      recommended: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Large-scale data migration and processing",
      features: [
        "Custom pricing based on volume",
        "Data migration services",
        "API integration",
        "Real-time processing",
        "Dedicated project manager",
        "Ongoing maintenance",
        "Custom SLA agreements",
      ],
      recommended: false,
    },
  ];

  return (
    <>
      <SEO
        title="Data Entry Services - Accurate & Efficient Data Processing"
        description="Professional data entry services including data processing, cleaning, validation, and migration. 99.9% accuracy guaranteed with fast turnaround times."
      />

      <Hero
        title="Professional Data Entry Services"
        subtitle="Accurate, efficient data processing with 99.9% accuracy guarantee and fast turnaround times"
        primaryCTA={{
          text: "Start Your Project",
          to: "/contact",
        }}
        secondaryCTA={{
          text: "View Pricing",
          to: "#pricing",
        }}
        variant="service-detail"
      />

      {/* Overview Section */}
      <section className="section">
        <div className="container">
          <div className="service-overview">
            <div className="service-overview__content">
              <h2>Precision Data Processing</h2>
              <p>
                Our data entry services combine human expertise with advanced
                tools to deliver accurate, reliable data processing solutions.
                We handle everything from simple data entry to complex data
                migration projects with meticulous attention to detail.
              </p>
              <p>
                With strict quality control processes and multiple validation
                checks, we ensure 99.9% accuracy in all data processing tasks,
                helping you maintain clean, organized, and actionable data.
              </p>
            </div>
            <div className="service-overview__stats">
              <div className="stat">
                <div className="stat__number">99.9%</div>
                <div className="stat__label">Accuracy Rate</div>
              </div>
              <div className="stat">
                <div className="stat__number">5+</div>
                <div className="stat__label">Entries Processed</div>
              </div>
              <div className="stat">
                <div className="stat__number">24/7</div>
                <div className="stat__label">Processing Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="section section--alt">
        <div className="container">
          <div className="section__header">
            <h2>Data Entry Services</h2>
            <p className="section__subtitle">
              Comprehensive data processing solutions for all your needs
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

      {/* Process Section */}
      <section ref={processRef} className="section">
        <div className="container">
          <div className="section__header text-center">
            <h2>Our Data Processing Workflow</h2>
            <p className="section__subtitle">
              Systematic approach ensuring accuracy and efficiency
            </p>
          </div>
          <div className="process-steps">
            {process.map((step, index) => (
              <div key={index} className="process-step">
                <div className="process-step__number">{step.step}</div>
                <div className="process-step__content">
                  <h3 className="process-step__title">{step.title}</h3>
                  <p className="process-step__description">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section ref={packagesRef} id="pricing" className="section section--alt">
        <div className="container">
          <div className="section__header text-center">
            <h2>Pricing Packages</h2>
            <p className="section__subtitle">
              Flexible pricing options based on your data processing needs
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
                    <li key={idx} className="package-card__feature">
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
            <h2>Ready to Streamline Your Data Processing?</h2>
            <p>
              Let's discuss your data entry requirements and create an efficient
              processing solution.
            </p>
            <CTAButton
              to="/contact"
              variant="accent"
              size="large"
              style={{color: "var(--bg-earth-grey-green)"}}
            >
              Start Your Data Project
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

export default ServiceDataEntry;
