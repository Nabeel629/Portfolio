import { useState } from "react";
import "./Projects.css";
import shopify1 from "./assets/davisandcoaesthetics.png";
const projectsData = [
  {
    id: 1,
    title: "Shopify Fashion Store",
    category: "shopify",
    image: shopify1,
  },
  {
    id: 2,
    title: "Shopify Perfume Store",
    category: "shopify",
    image: "/images/shopify-2.jpg",
  },
  {
    id: 3,
    title: "WordPress Business Site",
    category: "wordpress",
    image: "/images/wp-1.jpg",
  },
  {
    id: 4,
    title: "WordPress LMS Website",
    category: "wordpress",
    image: "/images/wp-2.jpg",
  },
  {
    id: 5,
    title: "React Web App",
    category: "react",
    image: "/images/react-1.jpg",
  },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects =
    activeTab === "all"
      ? projectsData
      : projectsData.filter(
          (project) => project.category === activeTab
        );

  return (
    <section className="projects">
      {/* HEADER */}
      <div className="projects-header">
        <h2>Our Projects</h2>
        <p>Real-world projects built with modern technologies.</p>
      </div>

      {/* TABS */}
      <div className="projects-tabs">
        {["all", "shopify", "wordpress", "react"].map((tab) => (
          <button
            key={tab}
            className={`tab-btn ${
              activeTab === tab ? "active" : ""
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      {/* CARDS */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
