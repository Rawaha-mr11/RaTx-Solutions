import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  canonical, 
  ogImage, 
  ogType = 'website',
  twitterCard = 'summary_large_image',
  keywords 
}) => {
  const siteTitle = "RaTx SOLUTIONS - Premium Web Development & Digital Services";
  const siteDescription = "Web Development, Data Entry, and Creative Writing services tailored to help your business grow. Fast, reliable, and professional solutions.";
  const siteUrl = "https://RaTxsolutions.com";
  const defaultImage = "/og-image.jpg";

  const seo = {
    title: title ? `${title} | RaTx SOLUTIONS` : siteTitle,
    description: description || siteDescription,
    image: ogImage || defaultImage,
    url: canonical ? `${siteUrl}${canonical}` : siteUrl,
    type: ogType,
    twitterCard
  };

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content={seo.type} />
      <meta property="og:site_name" content="RaTx SOLUTIONS" />
      
      {/* Twitter */}
      <meta name="twitter:card" content={seo.twitterCard} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      
      {/* Canonical */}
      {canonical && <link rel="canonical" href={seo.url} />}
      
      {/* Additional */}
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#059669" />
    </Helmet>
  );
};

export default SEO;
