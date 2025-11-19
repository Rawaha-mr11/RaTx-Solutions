import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SEO from "../components/SEO";
import Hero from "../components/Hero";
import CTAButton from "../components/CTAButton";
import { projects } from "../data/sample-data";
import "./portfolio.css";

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [visibleProjects, setVisibleProjects] = useState(6);
  const portfolioRef = useRef();

  const categories = [
    "all",
    "web development",
    "data entry",
    "creative writing",
  ];

  const filteredProjects = projects.filter(
    (project) =>
      activeFilter === "all" || project.category.toLowerCase() === activeFilter
  );

  const displayedProjects = filteredProjects.slice(0, visibleProjects);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".portfolio-item",
        {
          y: 40,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: portfolioRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          }
        }
      );
    }, portfolioRef);

    return () => ctx.revert();
  }, [displayedProjects]);

  const loadMore = () => {
    setVisibleProjects((prev) => prev + 6);
  };

  const handleFilter = (category) => {
    setActiveFilter(category);
    setVisibleProjects(6);
  };

  return (
    <>
      <SEO
        title="Portfolio - Our Projects & Case Studies"
        description="Explore our portfolio of successful web development, data entry, and creative writing projects. See how we've helped businesses achieve their goals."
      />

      <Hero
        title="Our Portfolio"
        subtitle="Discover our successful projects and case studies across web development, data entry, and creative writing"
        primaryCTA={{
          text: "Start Your Project",
          to: "/contact",
        }}
        variant="portfolio"
      />

      {/* Portfolio Section */}
      <section ref={portfolioRef} className="section">
        <div className="container">
          <div className="section__header text-center">
            <h2>Featured Projects</h2>
            <p className="section__subtitle">
              A showcase of our recent work and client success stories
            </p>
          </div>

          {/* Filters */}
          <div className="portfolio-filters">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${
                  activeFilter === category ? "filter-btn--active" : ""
                }`}
                onClick={() => handleFilter(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="portfolio-grid">
            {displayedProjects.map((project, index) => (
              <div key={project.id} className="portfolio-item">
                <div className="portfolio-item__image">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="portfolio-item__img"
                  />
                  <div className="portfolio-item__overlay">
                    <div className="portfolio-item__actions">
                      <CTAButton
                        to={project.link}
                        variant="primary"
                        size="small"
                      >
                        View Case Study
                      </CTAButton>
                      <CTAButton
                        to="/contact"
                        variant="secondary"
                        size="small"
                        style={{
                          background: "var(--card-color)",
                          color: "var(--text-offwhite)",
                        }}
                      >
                        Similar Project
                      </CTAButton>
                    </div>
                  </div>
                </div>
                <div className="portfolio-item__info">
                  <span className="portfolio-item__category">
                    {project.category}
                  </span>
                  <h3 className="portfolio-item__title">{project.title}</h3>
                  <p className="portfolio-item__description">
                    {project.description}
                  </p>
                  <div className="portfolio-item__technologies">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="portfolio-item__tech">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          {visibleProjects < filteredProjects.length && (
            <div className="portfolio-load-more">
              <CTAButton onClick={loadMore} variant="secondary">
                Load More Projects
              </CTAButton>
            </div>
          )}

          {filteredProjects.length === 0 && (
            <div className="text-center">
              <p>No projects found for the selected category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section--alt">
        <div className="container">
          <div className="text-center">
            <h2>Have a Project in Mind?</h2>
            <p style={{ marginBottom: "var(--spacing-xl)" }}>
              Let's work together to create something amazing for your business
            </p>
            <CTAButton to="/contact" variant="primary" size="large">
              Start Your Project
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
