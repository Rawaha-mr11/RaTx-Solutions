import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import CTAButton from '../components/CTAButton';
import './careers.css';

gsap.registerPlugin(ScrollTrigger);

const Careers = () => {
  const benefitsRef = useRef();
  const positionsRef = useRef();
  const cultureRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.benefit-item', {
        y: 40,
        opacity: 0,
      },{
        y:0,
        opacity:1,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: benefitsRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });

      gsap.fromTo('.position-card', {
        y: 40,
        opacity: 0,
      },{
        y:0,
        opacity:1,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: benefitsRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });

      gsap.fromTo('.culture-value', {
        y: 40,
        opacity: 0,
      },{
        y:0,
        opacity:1,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: benefitsRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });
    });

    return () => ctx.revert();
  }, []);

  const benefits = [
    {
      icon: '💼',
      title: 'Competitive Salary',
      description: 'Industry-competitive compensation packages with regular reviews'
    },
    {
      icon: '🏠',
      title: 'Remote Work',
      description: 'Flexible remote work options with occasional team meetups'
    },
    {
      icon: '📚',
      title: 'Learning Budget',
      description: 'Annual budget for courses, conferences, and skill development'
    },
    {
      icon: '🏥',
      title: 'Health Insurance',
      description: 'Comprehensive health, dental, and vision insurance plans'
    },
    {
      icon: '🎯',
      title: 'Career Growth',
      description: 'Clear career paths and opportunities for advancement'
    },
    {
      icon: '🎉',
      title: 'Team Events',
      description: 'Regular team building activities and company retreats'
    }
  ];

  const positions = [
    {
      title: 'Senior React Developer',
      department: 'Web Development',
      type: 'Full-time',
      location: 'Remote',
      description: 'We\'re looking for an experienced React developer to join our team and work on cutting-edge web applications.',
      requirements: [
        '5+ years of React experience',
        'Strong knowledge of TypeScript',
        'Experience with state management',
        'Testing and performance optimization'
      ]
    },
    {
      title: 'Data Entry Specialist',
      department: 'Data Services',
      type: 'Contract',
      location: 'Remote',
      description: 'Join our data team to help process and manage client data with precision and efficiency.',
      requirements: [
        '2+ years of data entry experience',
        'Attention to detail',
        'Excel proficiency',
        'Fast and accurate typing skills'
      ]
    },
    {
      title: 'Content Writer',
      department: 'Creative Writing',
      type: 'Full-time',
      location: 'Remote',
      description: 'Create compelling content for various clients across different industries and platforms.',
      requirements: [
        '3+ years of writing experience',
        'SEO knowledge',
        'Portfolio of published work',
        'Ability to adapt writing style'
      ]
    }
  ];

  const cultureValues = [
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and open communication'
    },
    {
      title: 'Innovation',
      description: 'We encourage creative thinking and embrace new technologies'
    },
    {
      title: 'Quality',
      description: 'We never compromise on the quality of our work'
    },
    {
      title: 'Growth',
      description: 'We support continuous learning and personal development'
    }
  ];

  return (
    <>
      <SEO 
        title="Careers - Join Our Team"
        description="Join RATX SOLUTIONS and work on exciting projects with a talented team. Competitive benefits, remote work, and growth opportunities."
      />
      
      <Hero
        title="Join Our Team"
        subtitle="Build amazing things with talented people. Grow your career while working on exciting projects with modern technologies."
        primaryCTA={{
          text: "View Open Positions",
          to: "#positions"
        }}
        secondaryCTA={{
          text: "Learn About Culture",
          to: "#culture"
        }}
        variant="careers"
      />

      {/* Benefits Section */}
      <section ref={benefitsRef} className="section">
        <div className="container">
          <div className="section__header text-center">
            <h2>Why Work With Us</h2>
            <p className="section__subtitle">
              We offer competitive benefits and a great work environment
            </p>
          </div>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-item">
                <div className="benefit-item__icon">
                  {benefit.icon}
                </div>
                <h3 className="benefit-item__title">{benefit.title}</h3>
                <p className="benefit-item__description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section ref={positionsRef} id="positions" className="section section--alt">
        <div className="container">
          <div className="section__header">
            <h2>Open Positions</h2>
            <p className="section__subtitle">
              Join our team and help us build the future
            </p>
          </div>
          <div className="positions-list">
            {positions.map((position, index) => (
              <div key={index} className="position-card">
                <div className="position-card__header">
                  <h3 className="position-card__title">{position.title}</h3>
                  <div className="position-card__meta">
                    <span className="position-card__department">{position.department}</span>
                    <span className="position-card__type">{position.type}</span>
                    <span className="position-card__location">{position.location}</span>
                  </div>
                </div>
                <div className="position-card__content">
                  <p className="position-card__description">{position.description}</p>
                  <div className="position-card__requirements">
                    <h4>Requirements:</h4>
                    <ul>
                      {position.requirements.map((req, idx) => (
                        <li key={idx}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="position-card__actions">
                  <CTAButton to="/contact" variant="primary">
                    Apply Now
                  </CTAButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section ref={cultureRef} id="culture" className="section">
        <div className="container">
          <div className="section__header text-center">
            <h2>Our Culture</h2>
            <p className="section__subtitle">
              We believe in creating an environment where everyone can thrive
            </p>
          </div>
          <div className="culture-grid">
            {cultureValues.map((value, index) => (
              <div key={index} className="culture-value">
                <h3 className="culture-value__title">{value.title}</h3>
                <p className="culture-value__description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <section className="section section--alt">
        <div className="container">
          <div className="careers-cta">
            <div className="careers-cta__content">
              <h2>Don't See the Perfect Role?</h2>
              <p>
                We're always looking for talented people. Send us your resume and 
                we'll contact you when a matching position opens up.
              </p>
              <CTAButton to="/contact" variant="primary" size="large">
                Send Your Resume
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;
