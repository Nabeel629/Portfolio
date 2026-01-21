import { useState, useEffect, useRef } from "react";
import "./Carousel.css"; // Your CSS from above

const achievements = [
  {
    id: 1,
    title: "Lorem Ipsum Dolor",
    date: "Dec 2024",
    image:
      "https://i.pinimg.com/1200x/0b/67/25/0b67255a1d95953bae8c4ffae4433b62.jpg",
    description:
      "Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tag: "Academic",
  },
  {
    id: 2,
    title: "Lorem Ipsum Dolor",
    date: "June 2024",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1200px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
    description:
      "Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tag: "Creative",
  },
  {
    id: 3,
    title: "Lorem Ipsum Dolor",
    date: "March 2024",
    image:
      "https://i.pinimg.com/736x/b8/23/fb/b823fb582349d3bbbfd189d6323e1b7b.jpg",
    description:
      "Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tag: "Co-Curricular",
  },
  {
    id: 4,
    title: "Lorem Ipsum Dolor",
    date: "Jan 2024",
    image:
      "https://i.pinimg.com/736x/a8/34/0a/a8340abeae97026d7f611768329892f3.jpg",
    description:
      "Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tag: "Academic",
  },
  {
    id: 5,
    title: "Lorem Ipsum Dolor",
    date: "Nov 2023",
    image:
      "https://i.pinimg.com/736x/1d/f7/93/1df79363e9bda25a91d00abff1d425ef.jpg",
    description:
      "Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tag: "Creative",
  },
];

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = achievements.length;

  // Auto scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 3000);
    return () => clearInterval(interval);
  }, [total]);

  // Circular offset calculation
  const getPositionClass = (index) => {
    let offset = index - activeIndex;
    if (offset > Math.floor(total / 2)) offset -= total;
    if (offset < -Math.floor(total / 2)) offset += total;

    if (offset === 0) return "active";
    if (offset === -1) return "left";
    if (offset === 1) return "right";
    if (offset < -1) return "far-left";
    if (offset > 1) return "far-right";
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
            onClick={() => setActiveIndex(index)}
          >
            <div
              className="card-image"
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>
            <div className="card-content">
              <div className="card-header">
                <h3>{item.title}</h3>
                <span className="tag-pill">{item.tag}</span>
              </div>
              <p>{item.description}</p>
              <div className="card-footer">
                <small>{item.date}</small>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="carousel-controls">
        <button className="nav-btn" onClick={prev}>
          ‹
        </button>

        <div className="pagination-indicators">
          {achievements.map((_, idx) => (
            <div
              key={idx}
              className={`dot ${idx === activeIndex ? "active" : ""}`}
              onClick={() => setActiveIndex(idx)}
            ></div>
          ))}
        </div>

        <button className="nav-btn" onClick={next}>
          ›
        </button>
      </div>
    </div>
  );
}
