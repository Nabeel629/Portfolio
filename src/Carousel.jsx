import { useState, useEffect } from "react";
import "Carousel.css";

const achievements = [
  // tumhare items
];

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = achievements.length;

  // Auto scroll
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 3000);
    return () => clearInterval(interval);
  }, [total]);

  const getPositionClass = (index) => {
    const diff = (index - activeIndex + total) % total;
    if (diff === 0) return "active";
    if (diff === 1) return "right";
    if (diff === 2) return "far-right";
    if (diff === total - 1) return "left";
    if (diff === total - 2) return "far-left";
    return "hidden";
  };

  const next = () => setActiveIndex((prev) => (prev + 1) % total);
  const prev = () => setActiveIndex((prev) => (prev - 1 + total) % total);

  return (
    <div className="carousel-container">
      <div className="carousel-stage">
        {achievements.map((item, index) => (
          <div
            key={item.id}
            className={`carousel-card ${getPositionClass(index)}`}
          >
            <div
              className="card-image"
              style={{ backgroundImage: `url(${item.image})` }}
            />
            <div className="card-content">
              <div className="card-header">
                <h3>{item.title}</h3>
                <span className="tag-pill">{item.tag}</span>
              </div>
              <p>{item.description}</p>
              <div className="card-footer">{item.date}</div>
            </div>
          </div>
        ))}
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
  );
}
