import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SEO from "../components/SEO";
import Hero from "../components/Hero";
import CTAButton from "../components/CTAButton";
import "./about.css";
import aboutImage from "../assets/about-img.png";
import rawahaProfile from "../assets/rawaha-profile.png";
import TaimurProfile from "../assets/tx-profile.jpg";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const storyRef = useRef();
  const valuesRef = useRef();
  const teamRef = useRef();
  const rotateImage = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Story section animation
      gsap.fromTo(
        ".about-story__content",
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "ease",
          scrollTrigger: {
            trigger: storyRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".about-story__image",
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "ease",
          scrollTrigger: {
            trigger: storyRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.to(".scroll__Animation", {
        scrollTrigger: {
          trigger: rotateImage.current,
          start: "top 100%",
          end: "bottom 0%",
          scrub: 1,
          markers: false,
          onUpdate: (self) => {
            const rotation = self.progress * 720;
            gsap.set(rotateImage.current, { rotation });
          },
        },
      });

      // Values animation
      gsap.fromTo(
        ".value-card",
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "ease",
          scrollTrigger: {
            trigger: valuesRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Team animation
      gsap.fromTo(
        ".team-member",
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "ease",
          scrollTrigger: {
            trigger: teamRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const values = [
    {
      icon: "💎",
      title: "Quality First",
      description:
        "We never compromise on quality. Every project receives our full attention and expertise.",
    },
    {
      icon: "⚡",
      title: "Fast Delivery",
      description:
        "Efficient processes and experienced team members ensure timely project completion.",
    },
    {
      icon: "🤝",
      title: "Client Partnership",
      description:
        "We work closely with you, ensuring your vision is understood and executed perfectly.",
    },
    {
      icon: "🔒",
      title: "Confidentiality",
      description:
        "Your data and ideas are safe with us. We maintain strict confidentiality standards.",
    },
  ];

  const team = [
    {
      name: "Muhammad Rawaha",
      role: "Front End Developer and Datacian",
      bio: "3 months of hands-on experience as a Front-End Developer and over 1 year as a Data Entry Specialist, currently expanding expertise in back-end development.",
      image: rawahaProfile,
      skills: [
        "Html",
        "CSS",
        "JS",
        "React",
        "Material UI",
        "Tailwind",
        "MS EXCEL",
        "MS WORD",
      ],
    },
    {
      name: "Taimur Khan",
      role: "Creative Writer",
      bio: "7 months of hands-on experience as a Creative Writer — crafting blog articles, social media captions, website content, and short-form storytelling, while continually refining brand voice and expanding my skills (still in progress).",
      image: TaimurProfile,
      skills: ["Google Analytics", "Content Strategy", "Branding", "SEO"],
    },
  ];

  return (
    <>
      <SEO
        title="About RATX SOLUTIONS - Our Story & Team"
        description="Learn about RATX SOLUTIONS - our mission, values, and the talented team behind our premium web development, data entry, and creative writing services."
      />

      <Hero
        title="Building Digital Excellence Since 2025"
        subtitle="We're a passionate team dedicated to delivering premium digital solutions that drive business growth and success."
        primaryCTA={{
          text: "View Our Work",
          to: "/portfolio",
        }}
        // secondaryCTA={{
        //   text: "Join Our Team",
        //   to: "/careers",
        // }}
        variant="about"
      />

      {/* Story Section */}
      <section ref={storyRef} className="section">
        <div className="container">
          <div className="about-story">
            <div className="about-story__content">
              <h2>Our Story</h2>
              <p>
                RaTx Solutions, founded in 2025, is a forward-thinking digital
                agency dedicated to delivering exceptional quality across
                multiple service domains. Built on innovation, precision, and a
                commitment to client success, we combine creativity with
                technical expertise to bring ideas to life. Our team thrives on
                crafting tailored solutions that empower businesses to grow,
                adapt, and stand out in an increasingly competitive digital
                world.
              </p>
              <p>
                At RaTx Solutions, we specialize in front-end web development,
                transforming design concepts into visually stunning and
                responsive websites that enhance user experience and drive
                engagement. Alongside our development services, we offer data
                entry solutions powered by Microsoft Excel and Word—ensuring
                accuracy, consistency, and efficiency for businesses that rely
                on precise data management and documentation.
              </p>
              <p>
                Beyond technology, we bring a creative edge through our
                professional writing services, delivering impactful content that
                inspires, informs, and connects with audiences. Whether you need
                compelling website copy, engaging blog articles, or refined
                business documentation, our writers ensure every word reflects
                your brand’s voice and vision. At RaTx Solutions, we don’t just
                complete projects—we create value, build trust, and help your
                business achieve digital excellence.
              </p>
            </div>

            <div className="about-story__img">
              <img
                ref={rotateImage}
                src={aboutImage}
                className="scroll__Animation"
                alt="ScrollAnimation"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="section section--alt">
        <div className="container">
          <div className="section__header text-center">
            <h2>Our Values</h2>
            <p className="section__subtitle">
              The principles that guide everything we do
            </p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-card__icon">{value.icon}</div>
                <h3 className="value-card__title">{value.title}</h3>
                <p className="value-card__description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="section">
        <div className="container">
          <div className="section__header text-center">
            <h2>Meet Our Team</h2>
            <p className="section__subtitle">
              Talented professionals dedicated to your success
            </p>
          </div>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-member">
                <div className="team-member__image">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="team-member__img"
                  />
                </div>
                <div className="team-member__info">
                  <h3 className="team-member__name">{member.name}</h3>
                  <p className="team-member__role">{member.role}</p>
                  <p className="team-member__bio">{member.bio}</p>
                  <div className="team-member__skills">
                    {member.skills.map((skill, idx) => (
                      <span key={idx} className="team-member__skill">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section--alt">
        <div className="container">
          <div className="text-center">
            <h2>Ready to Work With Us?</h2>
            <p style={{ marginBottom: "var(--spacing-xl)" }}>
              Let's discuss how our team can help bring your project to life
            </p>
            <CTAButton to="/contact" variant="primary" size="large">
              Start a Project
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
