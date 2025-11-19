import eCommerce from '../assets/e-commerce.png'
import dataEntry from '../assets/data-entry.png'
import creativeWriting from '../assets/c-writing.png'


export const services = [
  {
    id: 1,
    title: "Web Development",
    slug: "web-development",
    description: "Custom web applications and websites built with modern technologies for optimal performance and user experience.",
    icon: "web",
    features: [
      "Responsive Design",
      "React Development",
      "API Integration",
      "Performance Optimization",
      "SEO Best Practices",
      "Maintenance & Support"
    ],
    price: "Starting at $500"
  },
  {
    id: 2,
    title: "Data Entry",
    slug: "data-entry",
    description: "Accurate and efficient data processing services to keep your business information organized and accessible.",
    icon: "data",
    features: [
      "Data Processing",
      "Data Cleaning & Validation",
      "Database Management",
      "Excel & CSV Processing",
      "Data Migration",
      "Quality Assurance"
    ],
    price: "Starting at $20/hour"
  },
  {
    id: 3,
    title: "Creative Writing",
    slug: "creative-writing",
    description: "Compelling content creation that engages your audience and strengthens your brand voice.",
    icon: "writing",
    features: [
      "Website Content",
      "Blog Posts & Articles",
      "Product Descriptions",
      "Social Media Content",
      "Email Campaigns",
      "Editing & Proofreading"
    ],
    price: "Starting at $0.10/word"
  }
];

export const projects = [
  {
    id: 1,
    title: "MiniShop",
    description: "A responsive demo of the front end E-commerce website with dyanmic function except back end",
    image: eCommerce,
    category: "Web Development",
    technologies: ["HTML", "CSS", "Javascript"],
    link: "https://minishopofrawaha.netlify.app/"
  },
  {
    id: 2,
    title: "TEAMS PLAYER PERFORMA",
    description: "I used Microsoft Excel & Word to make the teams player performa for futsal tournament of boys",
    image: dataEntry,
    category: "Data Entry",
    technologies: ["Microsoft Excel", "Microsoft Word"],
    link: dataEntry
  },
  {
    id: 3,
    title: "Content Strategy",
    description: "Complete content creation and strategy for a tech startup.",
    image: creativeWriting,
    category: "Creative Writing",
    technologies: ["SEO", "WordPress", "Google Analytics"],
    link: "https://www.canva.com/design/DAG3V04eLSo/VMKNKIRpZ8dXjpEaMi8doQ/edit?utm_content=DAG3V04eLSo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton "
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "TechStart Inc.",
    role: "CEO",
    content: "RATX SOLUTIONS delivered an exceptional web application that exceeded our expectations. Their attention to detail and technical expertise is remarkable.",
    rating: 5,
    avatar: "/api/placeholder/80/80"
  },
  {
    id: 2,
    name: "Michael Chen",
    company: "DataFlow Systems",
    role: "Operations Manager",
    content: "The data entry team provided accurate and timely results, helping us streamline our operations significantly.",
    rating: 5,
    avatar: "/api/placeholder/80/80"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    company: "Creative Minds",
    role: "Marketing Director",
    content: "Their creative writing services have transformed our content strategy. Engaging, professional, and always on brand.",
    rating: 5,
    avatar: "/api/placeholder/80/80"
  }
];
