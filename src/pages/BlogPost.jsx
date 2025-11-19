import React, { useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SEO from "../components/SEO";
import CTAButton from "../components/CTAButton";
import "./blogpost.css";
import { getBlogPostBySlug, getRelatedPosts } from "../data/blogPosts";

gsap.registerPlugin(ScrollTrigger);

const BlogPost = () => {
  const { slug } = useParams();
  const contentRef = useRef();

  // Get blog post data based on slug
  const blogPost = getBlogPostBySlug(slug);

  // If blog post not found, show error
  if (!blogPost) {
    return (
      <div className="container" style={{ padding: "100px 20px", textAlign: "center" }}>
        <h1>Article Not Found</h1>
        <p>The article you're looking for doesn't exist.</p>
        <Link to="/blog" className="blog-post__breadcrumb-link">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  // Get related posts
  const relatedPosts = getRelatedPosts(blogPost.id, blogPost.category);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".blog-post__content > *", {
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
      });
    }, contentRef);

    return () => ctx.revert();
  }, [slug]); // Add slug to dependency array

  return (
    <>
      <SEO
        title={blogPost.title}
        description={blogPost.excerpt}
        ogImage={blogPost.image}
        ogType="article"
      />

      <article className="blog-post">
        {/* Header */}
        <header className="blog-post__header">
          <div className="container">
            <nav className="blog-post__breadcrumb">
              <Link to="/blog" className="blog-post__breadcrumb-link">
                Blog
              </Link>
              <span className="blog-post__breadcrumb-separator">/</span>
              <span className="blog-post__breadcrumb-current">
                {blogPost.category}
              </span>
            </nav>

            <h1 className="blog-post__title">{blogPost.title}</h1>

            <div className="blog-post__meta">
              <div className="blog-post__author">
                <img
                  src={blogPost.author.avatar}
                  alt={blogPost.author.name}
                  className="blog-post__author-avatar"
                />
                <div className="blog-post__author-info">
                  <span className="blog-post__author-name">
                    {blogPost.author.name}
                  </span>
                  <span className="blog-post__author-role">
                    {blogPost.author.role}
                  </span>
                </div>
              </div>

              <div className="blog-post__details">
                <span className="blog-post__date">
                  {new Date(blogPost.date).toLocaleDateString()}
                </span>
                <span className="blog-post__read-time">
                  {blogPost.readTime}
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="blog-post__image">
          <img
            src={blogPost.image}
            alt={blogPost.title}
            className="blog-post__featured-img"
          />
        </div>

        {/* Content */}
        <div ref={contentRef} className="container">
          <div className="blog-post__content">
            <div
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
              className="blog-post__body"
            />

            {/* Tags */}
            <div className="blog-post__tags">
              {blogPost.tags.map((tag, index) => (
                <span key={index} className="blog-post__tag">
                  #{tag}
                </span>
              ))}
            </div>

            {/* Author Bio */}
            <div className="blog-post__author-bio">
              <img
                src={blogPost.author.avatar}
                alt={blogPost.author.name}
                className="blog-post__author-bio-avatar"
              />
              <div className="blog-post__author-bio-content">
                <h3>About {blogPost.author.name}</h3>
                <p>
                  {blogPost.author.name} is {blogPost.author.role.toLowerCase()}{" "}
                  at RATX SOLUTIONS with extensive experience in their field.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="section section--alt">
            <div className="container">
              <h2 className="blog-post__related-title">Related Articles</h2>
              <div className="blog-post__related-grid">
                {relatedPosts.map((post) => (
                  <article key={post.id} className="blog-post__related-card">
                    <div className="blog-post__related-image">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="blog-post__related-img"
                      />
                    </div>
                    <div className="blog-post__related-content">
                      <span className="blog-post__related-category">
                        {post.category}
                      </span>
                      <h3 className="blog-post__related-card-title">
                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>
                      <p className="blog-post__related-excerpt">{post.excerpt}</p>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="blog-post__related-link"
                      >
                        Read More
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="section">
          <div className="container">
            <div className="blog-post__cta">
              <h2>Ready to Build Your Next Project?</h2>
              <p>
                Let's discuss how we can help bring your ideas to life with modern technologies and best practices.
              </p>
              <CTAButton to="/contact" variant="primary" size="large">
                Start Your Project
              </CTAButton>
            </div>
          </div>
        </section>
      </article>
    </>
  );
};

export default BlogPost;