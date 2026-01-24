import { useState } from "react";
import "./Projects.css";

/* ================= SHOPIFY IMAGES ================= */
import davisandcoaesthetics from "./assets/shopify_store_screen_shots/davisandcoaesthetics.png";
import bijjuonline from "./assets/shopify_store_screen_shots/bijjuonline.png";
import brandinpk from "./assets/shopify_store_screen_shots/brandinpk.png";
import colourway from "./assets/shopify_store_screen_shots/colourway.png";
import dermpharma from "./assets/shopify_store_screen_shots/dermpharma.png";
import gowarafoods from "./assets/shopify_store_screen_shots/gowarafoods.png";
import laxariah from "./assets/shopify_store_screen_shots/laxariah.png";
import originpharma from "./assets/shopify_store_screen_shots/originpharma.png";
import rosewoodfurnish from "./assets/shopify_store_screen_shots/rosewoodfurnish.png";
import sizucchero from "./assets/shopify_store_screen_shots/sizucchero.png";
import ysons from "./assets/shopify_store_screen_shots/ysons-pk.png";
import zainabzari from "./assets/shopify_store_screen_shots/zainabzari.png";
import zensorg from "./assets/shopify_store_screen_shots/zensorg.png";

/* ================= WORDPRESS IMAGES ================= */
import zpersoft from "./assets/wordpress_website_screenShot/zpersoft.png";
import asphaltattire from "./assets/wordpress_website_screenShot/asphaltattire.png";
import baghbani from "./assets/wordpress_website_screenShot/baghbani.png";
import dermatology from "./assets/wordpress_website_screenShot/dermatology.png";
import developertech from "./assets/wordpress_website_screenShot/developertech-net.png";
import ecogrocer from "./assets/wordpress_website_screenShot/ecogrocer-store.png";
import furryswellness from "./assets/wordpress_website_screenShot/furryswellness.png";
import gimechanical from "./assets/wordpress_website_screenShot/gimechanical.png";
import gracefulhijabs from "./assets/wordpress_website_screenShot/gracefulhijabs.png";
import grindandgains from "./assets/wordpress_website_screenShot/grindandgains.png";
import mandystore from "./assets/wordpress_website_screenShot/mandystore-online.png";
import pnyc from "./assets/wordpress_website_screenShot/pnyc-pk.png";
import polani from "./assets/wordpress_website_screenShot/polani-ca.png";
import primefootwears from "./assets/wordpress_website_screenShot/primefootwears.png";
import rtvoutdoors from "./assets/wordpress_website_screenShot/rtvoutdoors-net.png";
import thefragranceshouse from "./assets/wordpress_website_screenShot/thefragranceshouse.png";
import theurbanstrap from "./assets/wordpress_website_screenShot/theurbanstrap.png";
import upfrontsecurityservices from "./assets/wordpress_website_screenShot/upfrontsecurityservices.png";
import villagecrafting from "./assets/wordpress_website_screenShot/villagecrafting.png";
import wisersoftsol from "./assets/wordpress_website_screenShot/wisersoftsol.png";
import xeemart from "./assets/wordpress_website_screenShot/xeemart-pk.png";

/* ================= PROJECT DATA ================= */
const projectsData = [
  /* SHOPIFY */
  { id: 1, title: "Davis & Co Aesthetics", category: "shopify", image: davisandcoaesthetics },
  { id: 2, title: "Bijju Online", category: "shopify", image: bijjuonline },
  { id: 3, title: "Brandin PK", category: "shopify", image: brandinpk },
  { id: 4, title: "Colourway", category: "shopify", image: colourway },
  { id: 5, title: "Derm Pharma", category: "shopify", image: dermpharma },
  { id: 6, title: "Gowara Foods", category: "shopify", image: gowarafoods },
  { id: 7, title: "Laxariah", category: "shopify", image: laxariah },
  { id: 8, title: "Origin Pharma", category: "shopify", image: originpharma },
  { id: 9, title: "Rosewood Furnish", category: "shopify", image: rosewoodfurnish },
  { id: 10, title: "Sizu Cchero", category: "shopify", image: sizucchero },
  { id: 11, title: "Y Sons PK", category: "shopify", image: ysons },
  { id: 12, title: "Zainab Zari", category: "shopify", image: zainabzari },
  { id: 13, title: "Zens Org", category: "shopify", image: zensorg },

  /* WORDPRESS */
  { id: 14, title: "ZperSoft", category: "wordpress", image: zpersoft },
  { id: 15, title: "Asphalt Attire", category: "wordpress", image: asphaltattire },
  { id: 16, title: "Baghbani", category: "wordpress", image: baghbani },
  { id: 17, title: "Dermatology Clinic", category: "wordpress", image: dermatology },
  { id: 18, title: "DeveloperTech", category: "wordpress", image: developertech },
  { id: 19, title: "Eco Grocer", category: "wordpress", image: ecogrocer },
  { id: 20, title: "Furry's Wellness", category: "wordpress", image: furryswellness },
  { id: 21, title: "GI Mechanical", category: "wordpress", image: gimechanical },
  { id: 22, title: "Graceful Hijabs", category: "wordpress", image: gracefulhijabs },
  { id: 23, title: "Grind & Gains", category: "wordpress", image: grindandgains },
  { id: 24, title: "Mandy Store", category: "wordpress", image: mandystore },
  { id: 25, title: "PNY Training", category: "wordpress", image: pnyc },
  { id: 26, title: "Polani CA", category: "wordpress", image: polani },
  { id: 27, title: "Prime Footwears", category: "wordpress", image: primefootwears },
  { id: 28, title: "RTV Outdoors", category: "wordpress", image: rtvoutdoors },
  { id: 29, title: "The Fragrances House", category: "wordpress", image: thefragranceshouse },
  { id: 30, title: "The Urban Strap", category: "wordpress", image: theurbanstrap },
  { id: 31, title: "Upfront Security Services", category: "wordpress", image: upfrontsecurityservices },
  { id: 32, title: "Village Crafting", category: "wordpress", image: villagecrafting },
  { id: 33, title: "Wiser Soft Solutions", category: "wordpress", image: wisersoftsol },
  { id: 34, title: "Xeemart PK", category: "wordpress", image: xeemart },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all");
  const [visibleCount, setVisibleCount] = useState(8);

  const filteredProjects =
    activeTab === "all"
      ? projectsData
      : projectsData.filter(p => p.category === activeTab);

  return (
    <section className="projects">
      {/* HEADER */}
      <div className="projects-header">
        <h2>Our Projects</h2>
        <p>Real-world Shopify & WordPress projects built for growth.</p>
      </div>

      {/* TABS */}
      <div className="projects-tabs">
        {["all", "shopify", "wordpress"].map(tab => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? "active" : ""}`}
            onClick={() => {
              setActiveTab(tab);
              setVisibleCount(8);
            }}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      {/* PROJECT CARDS */}
      <div className="projects-grid">
        {filteredProjects.slice(0, visibleCount).map(project => (
          <div className="project-card" key={project.id}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>

      {/* LOAD MORE */}
      {visibleCount < filteredProjects.length && (
        <div className="load-more-wrap">
          <button
            className="load-more-btn"
            onClick={() => setVisibleCount(prev => prev + 8)}
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
}
