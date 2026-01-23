import { useState, useEffect } from "react";
import aboutImg from "./assets/about.jpg";
import ss from "./assets/ss.png";
import './home.css';
import './Anim.css';
import Projects from "./Projects";
function Home() {
  // ---------------- TESTIMONIALS ----------------
const reviews = [
  {
    title: "Ahmed Khan",
    category: "Shopify Store",
    type: "Excellent Shopify development. Clean code, fast delivery, and great communication throughout the project.",
    stars: "★★★★★"
  },
  {
    title: "Sarah Malik",
    category: "WordPress Website",
    type: "Highly professional work. The website looks modern and performs perfectly on all devices.",
    stars: "★★★★★"
  },
  {
    title: "Usman Ali",
    category: "React App",
    type: "Amazing React skills. UI animations and performance were exactly what we needed.",
    stars: "★★★★★"
  },
  {
    title: "Hassan Raza",
    category: "Custom PHP",
    type: "Delivered a fully customized solution. Very satisfied with the quality and support.",
    stars: "★★★★☆"
  },
  {
    title: "Ayesha Noor",
    category: "Shopify Customization",
    type: "Quick fixes, custom features, and great attention to detail. Highly recommended.",
    stars: "★★★★★"
  }
];


  const servicesData = [
    {
      id: 1,
      icon: "🛒",
      title: "Shopify Development",
      description:
        "Custom Shopify stores, theme customization, and performance optimization for scalable eCommerce.",
    },
    {
      id: 2,
      icon: "🧩",
      title: "Custom Liquid Development",
      description:
        "Advanced Shopify Liquid customization to build unique layouts and dynamic store features.",
    },
    {
      id: 3,
      icon: "🖥️",
      title: "WordPress Development",
      description:
        "Fully customized WordPress websites, themes, and plugins with speed and security in mind.",
    },
    // {
    //   id: 4,
    //   icon: "⚛️",
    //   title: "React Development",
    //   description:
    //     "Modern, fast, and interactive user interfaces built with React and best UI practices.",
    // },
    {
      id: 5,
      icon: "⚙️",
      title: "PHP Development",
      description:
        "Backend development using clean, scalable PHP code for custom business solutions.",
    },
    {
      id: 6,
      icon: "🎨",
      title: "HTML & CSS",
      description:
        "Pixel-perfect, responsive layouts using modern HTML5 and CSS3 standards.",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % reviews.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // ---------------- PORTFOLIO CAROUSEL ----------------
  const [tab, setTab] = useState("All");
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const portfolioData = [
    { title: "Shopify Fashion Store", type: "Ecommerce Store", category: "Shopify", stars: "★★★★★", btn: "View Live Store", img: ss },
    { title: "WordPress Blog", type: "Blog Website", category: "WordPress", stars: "★★★★☆", btn: "View Website", img: ss },
    { title: "Custom PHP System", type: "Web Application", category: "Custom", stars: "★★★★★", btn: "View Website", img: ss },
    { title: "Elementor Business Site", type: "Business Website", category: "WordPress", stars: "★★★★★", btn: "View Website", img: ss },
    { title: "Shopify Cosmetics", type: "Ecommerce Store", category: "Shopify", stars: "★★★★☆", btn: "View Store", img: ss },
    { title: "WordPress News Portal", type: "News Website", category: "WordPress", stars: "★★★★★", btn: "View Website", img: ss },
    { title: "React Portfolio", type: "Personal Website", category: "Custom", stars: "★★★★★", btn: "View Website", img: ss },
    { title: "WooCommerce Store", type: "Ecommerce Website", category: "Shopify", stars: "★★★★☆", btn: "View Website", img: ss },
  ];

  const tabs = ["All", "Shopify", "WordPress", "Custom"];
  const filtered = tab === "All" ? portfolioData : portfolioData.filter(item => item.category === tab);

  // Auto-scroll carousel (single useEffect)
  useEffect(() => {
    if (!filtered.length) return;
    const interval = setInterval(() => {
      if (!isPaused) setActiveIndex(prev => (prev + 1) % filtered.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [filtered, isPaused]);

  const next = () => setActiveIndex((activeIndex + 1) % filtered.length);
  const prev = () => setActiveIndex((activeIndex - 1 + filtered.length) % filtered.length);








  
  return (
    <div className="home-container">
      {/* HERO */}
      <div className="home-hero">
        <div className="hero-content">
          <h1>Build Your <span>Dream Website</span> With Professionals</h1>
          <p>We design Shopify stores, WordPress websites & custom web apps that grow your business online.</p>
          <div className="hero-buttons">
            <a href="/contact" className="btn-primary">Get Started</a>
            <a href="/services" className="btn-outline">Our Services</a>
          </div>
        </div>
        <div className="hero-image">
          <img src={aboutImg} alt="Website Illustration" />
        </div>
      </div>
      {/* ABOUT / EXPERIENCE SECTION */}
      <section className="about-section">
        <div className="about-container">
          <h2>About Me</h2>
          <p>
            Hi! I am <strong>Nabeel Akram</strong>, a passionate web developer and designer with over <strong>2 years of professional experience</strong>
            in building Shopify stores, WordPress blogs, custom PHP websites, and Elementor-based websites. I specialize in creating
            fully responsive and SEO-friendly websites that help businesses grow online.
          </p>

          <div className="about-stats">
            <div className="stat-card anim">
              <h3>2+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-card anim">
              <h3>50+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-card anim">
              <h3>5+</h3>
              <p>Industries Served</p>
            </div>
          </div>
        </div>
      </section>
      {/* SERVICES */}
      <section className="services">
        <div className="services-header">
          <div className="services-text">
            <span className="services-label">SERVICES</span>
            <h1 className="services-title">
              <span>Web Solutions</span>
              <span>That Scale.</span>


            </h1>

            <p className="services-subtitle">
              I specialize in Shopify, WordPress, and custom web development using Liquid, PHP, React, HTML, and CSS.
              From high-converting eCommerce stores to custom-coded solutions, I build fast, scalable, and reliable digital experiences.
            </p>

          </div>
          <button className="services-cta">
            Get a Quote <span>→</span>
          </button>
        </div>

        {servicesData.map((service, index) => (
          <div className="service-card" key={service.id}>
            <div className="service-icon">{service.icon}</div>

            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>

            <div className="service-index">
              {String(index + 1).padStart(2, "0")}
            </div>
          </div>
        ))}
      </section>
<Projects/>

      {/* PORTFOLIO CAROUSEL WITH TABS */}
      <div className="carousel-container">
  <h2>Client Reviews</h2>
  <p className="portfolio-sub">What clients say about my work</p>

  <div
    className="carousel-stage"
    onMouseEnter={() => setIsPaused(true)}
    onMouseLeave={() => setIsPaused(false)}
  >
    {reviews.map((item, index) => {
      let positionClass = "hidden";
      const offset = index - activeIndex;

      if (offset === 0) positionClass = "active";
      else if (offset === -1 || (activeIndex === 0 && index === reviews.length - 1)) positionClass = "left";
      else if (offset === 1 || (activeIndex === reviews.length - 1 && index === 0)) positionClass = "right";
      else if (offset < -1) positionClass = "far-left";
      else if (offset > 1) positionClass = "far-right";

      return (
        <div className={`carousel-card ${positionClass}`} key={index}>
          <div className="card-content">
            <div className="card-header">
              <h3>{item.title}</h3>
              <span className="tag-pill">{item.category}</span>
            </div>

            <p>"{item.type}"</p>

            <div className="stars">{item.stars}</div>
          </div>
        </div>
      );
    })}
  </div>

  <div className="carousel-controls">
    <button className="nav-btn" onClick={prev}>‹</button>
    <div className="pagination-indicators">
      {reviews.map((_, i) => (
        <div
          key={i}
          className={`dot ${i === activeIndex ? "active" : ""}`}
          onClick={() => setActiveIndex(i)}
        ></div>
      ))}
    </div>
    <button className="nav-btn" onClick={next}>›</button>
  </div>
</div>


      {/* HOW WE WORK */}
      <div className="work-section">
        <h2>How We Work</h2>
        <p className="work-sub">Simple steps to deliver perfect results</p>
        <div className="work-grid">
          <div className="work-card"><span>01</span><h3>Discussion</h3><p>We understand your business needs and goals.</p></div>
          <div className="work-card"><span>02</span><h3>Planning</h3><p>We plan your website layout, design & structure.</p></div>
          <div className="work-card"><span>03</span><h3>Development</h3><p>We develop your website with modern technologies.</p></div>
          <div className="work-card"><span>04</span><h3>Launch</h3><p>We test & launch your website for public use.</p></div>
        </div>
      </div>

      {/* TESTIMONIALS */}
      


      {/* CONTACT CARD */}
      <div className="contact-card">
        <h2>Get a Free Quote</h2>
        <p>Let’s discuss your project and help you build the perfect website for your business.</p>
        <button>Get Quote</button>
      </div>
    </div>
  );
}

export default Home;
