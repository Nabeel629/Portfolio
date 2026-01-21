import { useState, useEffect } from "react";
import aboutImg from "./assets/about.jpg";
import ss from "./assets/ss.png";
import './home.css';

function Home() {
  // ---------------- TESTIMONIALS ----------------
  const reviews = [
    { name: "Ahmed Khan", role: "Shopify Store Owner", message: "Amazing Shopify store! Clean design, fast loading and great support.", stars: "★★★★★" },
    { name: "Sarah Ali", role: "Content Creator", message: "Very professional WordPress blog setup. SEO friendly and smooth UI.", stars: "★★★★★" },
    { name: "Usman Raza", role: "Business Owner", message: "Custom PHP system delivered on time. Highly recommended developer.", stars: "★★★★☆" },
    { name: "Uzair Khan", role: "Web Designer", message: "Elementor websites built perfectly. Fast and responsive.", stars: "★★★★★" },
    { name: "Hina Malik", role: "Ecommerce Store Owner", message: "WooCommerce store ready to sell with custom features. Loved it!", stars: "★★★★★" },
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
            <div className="stat-card">
              <h3>2+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-card">
              <h3>50+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-card">
              <h3>5+</h3>
              <p>Industries Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO CAROUSEL WITH TABS */}
      <div className="carousel-container">
        <h2>Our Work</h2>
        <p className="portfolio-sub">Some of our recent projects</p>

        {/* Tabs */}
        <div className="carousel-tabs">
          {tabs.map(t => (
            <button
              key={t}
              className={t === tab ? "tab-active" : ""}
              onClick={() => { setTab(t); setActiveIndex(0); }}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Carousel Stage */}
        <div
          className="carousel-stage"
          onMouseEnter={() => setIsPaused(true)}   // Pause on hover
          onMouseLeave={() => setIsPaused(false)} // Resume on leave
        >
          {filtered.map((item, index) => {
            let positionClass = "hidden";
            const offset = index - activeIndex;

            if (offset === 0) positionClass = "active";
            else if (offset === -1 || (activeIndex === 0 && index === filtered.length - 1)) positionClass = "left";
            else if (offset === 1 || (activeIndex === filtered.length - 1 && index === 0)) positionClass = "right";
            else if (offset < -1) positionClass = "far-left";
            else if (offset > 1) positionClass = "far-right";

            return (
              <div className={`carousel-card ${positionClass}`} key={index}>
                <div className="card-image" style={{ backgroundImage: `url(${item.img})` }}>
                  <div className="portfolio-overlay">
                    <a href="#" className="view-btn">{item.btn}</a>
                  </div>
                </div>
                <div className="card-content">
                  <div className="card-header">
                    <h3>{item.title}</h3>
                    <span className="tag-pill">{item.category}</span>
                  </div>
                  <p>{item.type}</p>
                  <div className="stars">{item.stars}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Controls */}
        <div className="carousel-controls">
          <button className="nav-btn" onClick={prev}>‹</button>
          <div className="pagination-indicators">
            {filtered.map((_, i) => (
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
      <div className="testimonials">
        <h2>What Our Customers Say</h2>
        <p className="testimonials-sub">Trusted by clients worldwide for quality work</p>
        <div className="testimonial-card active">
          <p className="review">{reviews[current].message}</p>
          <h4>{reviews[current].name}</h4>
          <span>{reviews[current].role}</span>
          <div className="stars">{reviews[current].stars}</div>
        </div>
      </div>

      {/* SERVICES */}
      {/* <section className="services">
        <div className="services-header">
          <div className="services-text">
            <span className="services-label">SERVICES</span>
            <h1 className="services-title"><span>Everything your</span><span>Shopify Project Needs.</span></h1>
            <p className="services-subtitle">From complex custom apps to pixel-perfect theme development – I handle the technical heavy lifting so you can focus on growth.</p>
          </div>
          <button className="services-cta">Get a Quote <span>→</span></button>
        </div>
        <div className="service-card">
          <div className="service-icon">🛒</div>
          <div className="service-content">
            <h3>Full Shopify Site Builds</h3>
            <p>Pixel-perfect implementation of your Figma designs. I turn your creative vision into clean, maintainable Liquid code.</p>
          </div>
          <div className="service-index">01</div>
        </div>
      </section> */}

      {/* CONTACT CARD */}
      {/* <div className="contact-card">
        <h2>Get a Free Quote</h2>
        <p>Let’s discuss your project and help you build the perfect website for your business.</p>
        <button>Get Quote</button>
      </div> */}
    </div>
  );
}

export default Home;
