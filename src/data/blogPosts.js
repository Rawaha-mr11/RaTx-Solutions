import imagehi from "../assets/e4.jpg";
import imageTaimur from "../assets/tx-profile.jpg";
import BlogImgId1 from "../assets/e-commerce.png";

export const blogPosts = [
  {
    id: 1,
    slug: "future-of-web-development-2025",
    title: "The Future of Web Development: Trends to Watch in 2025",
    excerpt:
      "Explore the latest technologies and methodologies shaping the future of web development and how they can benefit your business.",
    content: `
      <p>The web development landscape is constantly evolving, with new technologies and methodologies emerging at a rapid pace. As we look ahead to 2024, several key trends are shaping the future of how we build and experience the web.</p>

      <h2>Artificial Intelligence and Machine Learning Integration</h2>
      <p>AI and ML are no longer buzzwords but essential components of modern web development. From intelligent chatbots to personalized user experiences, AI is transforming how users interact with websites.</p>

      <h2>Progressive Web Apps (PWAs)</h2>
      <p>PWAs continue to gain traction, offering app-like experiences through web browsers. With features like offline functionality, push notifications, and fast loading times, PWAs provide the best of both web and mobile apps.</p>

      <h2>Serverless Architecture</h2>
      <p>Serverless computing is revolutionizing backend development by abstracting server management and scaling. This allows developers to focus on writing code rather than managing infrastructure.</p>

      <h2>WebAssembly (Wasm)</h2>
      <p>WebAssembly enables high-performance applications to run in the browser at near-native speed. This opens up new possibilities for complex applications like video editing, 3D modeling, and games directly in the browser.</p>

      <h2>Enhanced Web Security</h2>
      <p>With increasing cyber threats, security remains a top priority. Expect to see more advanced security measures, including improved HTTPS implementation, content security policies, and advanced authentication methods.</p>

      <h2>Conclusion</h2>
      <p>Staying ahead of these trends is crucial for businesses and developers alike. By embracing these technologies, you can create faster, more secure, and more engaging web experiences that meet the evolving expectations of users.</p>
    `,
    image: imagehi,
    category: "Web Development",
    date: "2024-01-15",
    readTime: "5 min read",
    author: {
      name: "Alex Johnson",
      role: "Lead Developer",
      avatar: "/api/placeholder/80/80",
    },
    tags: ["Web Development", "Technology", "Trends", "2024"],
  },

  {
    id: 2,
    slug: "creating-engaging-content",
    title: "Creating Engaging Content ~ The Art That Makes People Stay",
    excerpt:
      "This guide breaks down how to write high-quality content that grabs attention and keeps your audience hooked from the very first line.",
    content: `
      <p>In a digital world where everyone scrolls faster than they breathe, creating engaging content is no longer optional, now it’s survival. Whether you’re building a brand, running a blog, or offering creative writing services, your words need to make people stop, feel, and stay.</p>

      <h2>Know Your Audience Like Your Best Friend</h2>
      <p>Before writing anything, understand who you’re talking to. Good content writing always starts with knowing your readers’ interests, struggles, and what kind of tone vibes with them. When people feel, “This content gets me,” they stick around.</p>

      <h2>Start With a Hook That Hits</h2>
      <p>Your opening line is the game-changer. Use a bold statement, a surprising fact, or a relatable moment to instantly pull readers in. Great content with great hooks becomes SEO-friendly writing naturally because readers spend more time on your page — and Google loves that.</p>

      <h2>Keep It Real, Keep It Human</h2>
      <p>Authenticity is the new authority. Forget robotic lines — write like a human being talking to another human being. This is how you build audience engagement without trying too hard.</p>

      <h2>Make It Simple, But Make It Smart</h2>
      <p>Quality content isn’t complicated — it’s clear. Short sentences. Strong ideas. Smooth flow. That’s the secret behind professional content writing tips everyone actually follows.</p>

      <h2>Storytelling Works Like Magic</h2>
      <p>Even a tiny story can transform a basic paragraph into something memorable. Story-driven content keeps readers scrolling, increases engagement, and pushes your blog higher in search results.</p>

      <h2>Add Value Like a Pro</h2>
      <p>The fastest way to win your audience? Give value. Either teach, inspire, solve a problem, or entertain. People return to writers who make their lives easier — that’s how you build loyal readers and grow your blog quickly.</p>

      <h2>Visuals Matter Too</h2>
      <p>Break monotony with images, highlighted quotes, or clean graphics. It enhances readability and boosts content engagement, especially for mobile users.</p>

      <h2>End With Something That Stays</h2>
      <p>Your ending shouldn’t feel like a “full stop.” It should feel like a spark — something that leaves your reader thinking or inspires them to take action.</p>

      <p>That’s the difference between ordinary content and creative content writing.</p>

      <h2>Final Words</h2>
      <p>Creating engaging content is a balance of creativity, clarity, and connection. It’s not about sounding fancy — it’s about sounding real and making every sentence worth the reader’s time.</p>
      <p>Once you master that, your words won’t just be seen…</p>
      <p>They’ll be felt, and that’s exactly what unforgettable content does.</p>
    `,
    image: imagehi,
    category: "Creative Writing",
    date: "2025-11-19",
    readTime: "5 min read",
    author: {
      name: "Taimur Khan",
      role: "Creative Writer",
      avatar: imageTaimur,
    },
    tags: [
      "Creative Writing",
      "Technology",
      "SEO",
      "Google Analytics",
      "Trends",
      "2025",
    ],
  },
];

export const getBlogPostBySlug = (slug) => {
  return blogPosts.find((post) => post.slug === slug);
};

export const getRelatedPosts = (currentPostId, category, limit = 2) => {
  return blogPosts
    .filter(
      (post) => post.id !== currentPostId && post.category === category
    )
    .slice(0, limit);
};
