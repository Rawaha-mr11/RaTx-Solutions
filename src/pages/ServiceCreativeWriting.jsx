import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SEO from "../components/SEO";
import Hero from "../components/Hero";
import CTAButton from "../components/CTAButton";
import "./service-detail.css";

gsap.registerPlugin(ScrollTrigger);

const ServiceCreativeWriting = () => {
  const featuresRef = useRef();
  const servicesRef = useRef();
  const packagesRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".feature-item",
        {
          y: 40,
          opacity: 0,
          stagger: 0.15,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(".service-type", {
        y: 40,
        opacity: 0,
      }, {
        y:0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        }
      });

      gsap.fromTo(".package-card", {
        y: 40,
        opacity: 0,
        stagger: 0.2,
      }, {
        y:0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: packagesRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        }
      });
    });

    return () => ctx.revert();
  }, []);

  const features = [
    "SEO-Optimized Content",
    "Engaging Blog Posts & Articles",
    "Compelling Website Copy",
    "Professional Product Descriptions",
    "Creative Social Media Content",
    "Email Marketing Campaigns",
    "Technical Writing & Documentation",
    "Editing & Proofreading Services",
  ];

  const services = [
    {
      icon: "📝",
      title: "Website Content",
      description:
        "Engaging copy that converts visitors into customers and reflects your brand voice.",
    },
    {
      icon: "📰",
      title: "Blog Writing",
      description:
        "Regular, high-quality blog posts that establish thought leadership and drive SEO.",
    },
    {
      icon: "🛍️",
      title: "Product Descriptions",
      description:
        "Compelling product copy that highlights features and drives sales.",
    },
    {
      icon: "📧",
      title: "Email Marketing",
      description:
        "Engaging email sequences that nurture leads and build customer relationships.",
    },
    {
      icon: "📱",
      title: "Social Media",
      description:
        "Creative content that engages your audience across all social platforms.",
    },
    {
      icon: "🔧",
      title: "Technical Writing",
      description:
        "Clear, concise documentation and technical content for complex products.",
    },
  ];

  const packages = [
    {
      name: "Starter",
      price: "$0.10/word",
      description: "Perfect for small projects and occasional content needs",
      features: [
        "Up to 1000 words",
        "Basic SEO optimization",
        "2 rounds of revisions",
        "48-hour delivery",
        "Standard research",
      ],
      recommended: false,
    },
    {
      name: "Professional",
      price: "$0.15/word",
      description: "Ideal for regular content marketing and business websites",
      features: [
        "Up to 5000 words",
        "Advanced SEO optimization",
        "Unlimited revisions",
        "24-hour delivery",
        "In-depth research",
        "Content strategy consultation",
      ],
      recommended: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description:
        "Complete content solutions for large-scale marketing campaigns",
      features: [
        "Custom pricing based on volume",
        "Dedicated content writer",
        "Content calendar management",
        "Multi-platform content",
        "Performance analytics",
        "Monthly strategy sessions",
      ],
      recommended: false,
    },
  ];

  return (
    <>
      <SEO
        title="Creative Writing Services - Professional Content Creation"
        description="Expert creative writing services including blog posts, website content, product descriptions, and SEO-optimized copy. Engaging content that drives results."
      />

      <Hero
        title="Professional Creative Writing"
        subtitle="Compelling, SEO-optimized content that engages your audience and drives business growth"
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
              <h2>Content That Converts</h2>
              <p>
                Our creative writing services combine storytelling expertise
                with marketing strategy to create content that not only engages
                your audience but also drives measurable business results. We
                craft compelling narratives that resonate with your target
                market.
              </p>
              <p>
                From SEO-optimized blog posts to persuasive website copy, our
                writers are skilled in various industries and writing styles,
                ensuring your content stands out in today's competitive digital
                landscape.
              </p>
            </div>
            <div className="service-overview__stats">
              <div className="stat">
                <div className="stat__number">500+</div>
                <div className="stat__label">Articles Written</div>
              </div>
              <div className="stat">
                <div className="stat__number">98%</div>
                <div className="stat__label">Client Satisfaction</div>
              </div>
              <div className="stat">
                <div className="stat__number">24h</div>
                <div className="stat__label">Avg. Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="section section--alt">
        <div className="container">
          <div className="section__header">
            <h2>Writing Services</h2>
            <p className="section__subtitle">
              Comprehensive content creation for all your marketing needs
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

      {/* Services Section */}
      <section ref={servicesRef} className="section">
        <div className="container">
          <div className="section__header text-center">
            <h2>Content Types We Specialize In</h2>
            <p className="section__subtitle">
              Diverse writing expertise across multiple formats and industries
            </p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-type">
                <div className="service-type__icon">{service.icon}</div>
                <h3 className="service-type__title">{service.title}</h3>
                <p className="service-type__description">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section ref={packagesRef} className="section section--alt">
        <div className="container">
          <div className="section__header text-center">
            <h2>Writing Packages</h2>
            <p className="section__subtitle">
              Flexible pricing based on your content requirements
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
            <h2>Ready to Elevate Your Content?</h2>
            <p>
              Let's discuss your content needs and create compelling copy that
              drives engagement and conversions.
            </p>
            <CTAButton to="/contact" variant="accent" size="large" style={{color:"var(--bg-earth-grey-green)"}}>
              Start Your Content Project
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

export default ServiceCreativeWriting;
