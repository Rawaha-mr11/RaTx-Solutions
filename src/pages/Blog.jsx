import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import Hero from "../components/Hero";
import CTAButton from "../components/CTAButton";
import "./blogs.css";
import { blogPosts } from "../data/blogPosts"; 

gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
  const postsRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".blog-post-card",
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: postsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, postsRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <SEO
        title="Blog - Insights & Industry Updates"
        description="Stay updated with the latest insights on web development, data management, and content creation. Expert tips and industry trends."
      />

      <Hero
        title="Our Blog"
        subtitle="Insights, tips, and industry updates on web development, data management, and creative writing"
        primaryCTA={{
          text: "Subscribe to Updates",
          to: "#newsletter",
        }}
        variant="blog"
      />

      {/* Featured Post */}
      <section className="section">
        <div className="container">
          <div className="featured-post">
            <div className="featured-post__image">
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="featured-post__img"
              />
            </div>
            <div className="featured-post__content">
              <span className="featured-post__category">
                {blogPosts[0].category}
              </span>
              <h2 className="featured-post__title">
                <Link to={`/blog/${blogPosts[0].slug}`}>
                  {blogPosts[0].title}
                </Link>
              </h2>
              <p className="featured-post__excerpt">{blogPosts[0].excerpt}</p>
              <div className="featured-post__meta">
                <span className="featured-post__date">
                  {new Date(blogPosts[0].date).toLocaleDateString()}
                </span>
                <span className="featured-post__read-time">
                  {blogPosts[0].readTime}
                </span>
              </div>
              <CTAButton to={`/blog/${blogPosts[0].slug}`} variant="primary">
                Read Article
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section ref={postsRef} className="section section--alt">
        <div className="container">
          <div className="section__header">
            <h2>Latest Articles</h2>
            <p className="section__subtitle">
              Fresh insights and expert perspectives
            </p>
          </div>
          <div className="blog-grid">
            {blogPosts.slice(1).map((post) => (
              <article key={post.id} className="blog-post-card">
                <div className="blog-post-card__image">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="blog-post-card__img"
                  />
                </div>
                <div className="blog-post-card__content">
                  <span className="blog-post-card__category">
                    {post.category}
                  </span>
                  <h3 className="blog-post-card__title">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="blog-post-card__excerpt">{post.excerpt}</p>
                  <div className="blog-post-card__meta">
                    <span className="blog-post-card__date">
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="blog-post-card__read-time">
                      {post.readTime}
                    </span>
                  </div>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="blog-post-card__link"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="section">
        <div className="container">
          <div className="newsletter">
            <div className="newsletter__content">
              <h2>Stay Updated</h2>
              <p>
                Subscribe to our newsletter for the latest insights, tips, and
                industry updates delivered directly to your inbox.
              </p>
            </div>
            <form className="newsletter__form">
              <input
                type="email"
                placeholder="Enter your email address"
                className="newsletter__input"
                required
              />
              <CTAButton type="submit" variant="primary" style={{marginBottom: 0}}>
                Subscribe
              </CTAButton>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;