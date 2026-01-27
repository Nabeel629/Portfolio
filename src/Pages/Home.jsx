import { useState, useEffect } from "react";
import NabeelAkram from "../assets/NabeelAkram.jpeg";
import "../home.css";
import "../Anim.css";
import Projects from "../components/Projects";
import ServicesCard from "../components/ServicesCard";
import "../components/Carousel.css";
function Home() {
  // ---------------- TESTIMONIALS ----------------
  const reviews = [
    {
      title: "Ahmed Khan",
      category: "Shopify Store",
      type: "Excellent Shopify development. Clean code, fast delivery, and great communication throughout the project.",
      stars: "★★★★★",
    },
    {
      title: "Sarah Malik",
      category: "WordPress Website",
      type: "Highly professional work. The website looks modern and performs perfectly on all devices.",
      stars: "★★★★★",
    },
    {
      title: "Usman Ali",
      category: "React App",
      type: "Amazing React skills. UI animations and performance were exactly what we needed.",
      stars: "★★★★★",
    },
    {
      title: "Hassan Raza",
      category: "Custom PHP",
      type: "Delivered a fully customized solution. Very satisfied with the quality and support.",
      stars: "★★★★☆",
    },
    {
      title: "Ayesha Noor",
      category: "Shopify Customization",
      type: "Quick fixes, custom features, and great attention to detail. Highly recommended.",
      stars: "★★★★★",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setActiveIndex((prev) => (prev + 1) % reviews.length);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused, reviews.length]);

  const next = () =>
    setActiveIndex((activeIndex + 1) % reviews.length);
  const prev = () =>
    setActiveIndex(
      (activeIndex - 1 + reviews.length) % reviews.length
    );

  return (
    <div className="home-container">
      {/* HERO */}
      <div className="home-hero">
        <div className="hero-content">
          <h1>
            Build Your <span>Dream Website</span> With Professionals
          </h1>
          <p>
            We design Shopify stores, WordPress websites & custom web apps that
            grow your business online.
          </p>
          <div className="hero-buttons">
            <a href="/contact" className="btn-primary">
              Get Started
            </a>
            <a href="/services" className="btn-outline">
              Our Services
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src={NabeelAkram} alt="Website Illustration" />
        </div>
      </div>

      {/* ABOUT */}
      <section className="about-section">
        <div className="about-container">
          <h2>About us</h2>
          <p>
            Hi! I am <strong>Nabeel Akram</strong>, a passionate web developer
            with over <strong>2 years of professional experience</strong> in
            Shopify, WordPress, and custom web development.
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
              <h3>50+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="stat-card anim">
              <h3>40</h3>
              <p>Return Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <ServicesCard />

      {/* PROJECTS */}
      <Projects />

      {/* TESTIMONIALS */}
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
            else if (
              offset === -1 ||
              (activeIndex === 0 && index === reviews.length - 1)
            )
              positionClass = "left";
            else if (
              offset === 1 ||
              (activeIndex === reviews.length - 1 && index === 0)
            )
              positionClass = "right";

            return (
              <div
                className={`carousel-card ${positionClass}`}
                key={index}
              >
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
          <button className="nav-btn" onClick={prev}>
            ‹
          </button>
          <button className="nav-btn" onClick={next}>
            ›
          </button>
        </div>
      </div>

      {/* HOW WE WORK */}
      <div className="work-section">
        <h2>How We Work</h2>
        <p className="work-sub">
          Simple steps to deliver perfect results
        </p>
        <div className="work-grid">
          <div className="work-card">
            <span>01</span>
            <h3>Discussion</h3>
            <p>We understand your business needs.</p>
          </div>
          <div className="work-card">
            <span>02</span>
            <h3>Planning</h3>
            <p>We plan layout & structure.</p>
          </div>
          <div className="work-card">
            <span>03</span>
            <h3>Development</h3>
            <p>We develop with modern tech.</p>
          </div>
          <div className="work-card">
            <span>04</span>
            <h3>Launch</h3>
            <p>We test & launch your site.</p>
          </div>
        </div>
      </div>

      {/* CONTACT */}
      <div className="contact-card">
        <h2>Get a Free Quote</h2>
        <p>
          Let’s discuss your project and build the perfect website.
        </p>
        <button>Get Quote</button>
      </div>
    </div>
  );
}

export default Home;
