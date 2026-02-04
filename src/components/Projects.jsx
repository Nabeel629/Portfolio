import { useState } from "react";
import "./Projects.css";

/* ================= SHOPIFY IMAGES ================= */
import davisandcoaesthetics from "../assets/shopify_store_screen_shots/davisandcoaesthetics.png";
import bijjuonline from "../assets/shopify_store_screen_shots/bijjuonline.png";
import brandinpk from "../assets/shopify_store_screen_shots/brandinpk.png";
import colourway from "../assets/shopify_store_screen_shots/colourway.png";
import dermpharma from "../assets/shopify_store_screen_shots/dermpharma.png";
import gowarafoods from "../assets/shopify_store_screen_shots/gowarafoods.png";
import laxariah from "../assets/shopify_store_screen_shots/laxariah.png";
import originpharma from "../assets/shopify_store_screen_shots/originpharma.png";
import rosewoodfurnish from "../assets/shopify_store_screen_shots/rosewoodfurnish.png";
import sizucchero from "../assets/shopify_store_screen_shots/sizucchero.png";
import ysons from "../assets/shopify_store_screen_shots/ysons-pk.png";
import zainabzari from "../assets/shopify_store_screen_shots/zainabzari.png";
import zensorg from "../assets/shopify_store_screen_shots/zensorg.png";

/* ================= WORDPRESS IMAGES ================= */
import zpersoft from "../assets/wordpress_website_screenShot/zpersoft.png";
import asphaltattire from "../assets/wordpress_website_screenShot/asphaltattire.png";
import baghbani from "../assets/wordpress_website_screenShot/baghbani.png";
import dermatology from "../assets/wordpress_website_screenShot/dermatology.png";
import developertech from "../assets/wordpress_website_screenShot/developertech-net.png";
import ecogrocer from "../assets/wordpress_website_screenShot/ecogrocer-store.png";
import furryswellness from "../assets/wordpress_website_screenShot/furryswellness.png";
import gimechanical from "../assets/wordpress_website_screenShot/gimechanical.png";
import gracefulhijabs from "../assets/wordpress_website_screenShot/gracefulhijabs.png";
import grindandgains from "../assets/wordpress_website_screenShot/grindandgains.png";
import mandystore from "../assets/wordpress_website_screenShot/mandystore-online.png";
import pnyc from "../assets/wordpress_website_screenShot/pnyc-pk.png";
import polani from "../assets/wordpress_website_screenShot/polani-ca.png";
import primefootwears from "../assets/wordpress_website_screenShot/primefootwears.png";
import rtvoutdoors from "../assets/wordpress_website_screenShot/rtvoutdoors-net.png";
import thefragranceshouse from "../assets/wordpress_website_screenShot/thefragranceshouse.png";
import theurbanstrap from "../assets/wordpress_website_screenShot/theurbanstrap.png";
import upfrontsecurityservices from "../assets/wordpress_website_screenShot/upfrontsecurityservices.png";
import villagecrafting from "../assets/wordpress_website_screenShot/villagecrafting.png";
import wisersoftsol from "../assets/wordpress_website_screenShot/wisersoftsol.png";
import xeemart from "../assets/wordpress_website_screenShot/xeemart-pk.png";

/* ================= PROJECT DATA ================= */
const projectsData = [
  /* SHOPIFY */
  { id: 1, title: "Davis & Co Aesthetics", category: "shopify", image: davisandcoaesthetics ,url:"https://davisandcoaesthetics.com/" },
  { id: 2, title: "Bijju Online", category: "shopify", image: bijjuonline ,url:"https://bijjuonline.com/" },
  { id: 3, title: "Brandin PK", category: "shopify", image: brandinpk ,url:"https://brandinpk.com/" },
  { id: 4, title: "Colourway", category: "shopify", image: colourway  ,url:"https://colourway.pk/?srsltid=AfmBOopDII6BN9ydoOByd3WP8lGILrySxon52Ns02pu5DbBcj6guH3p9"},
  { id: 5, title: "Derm Pharma", category: "shopify", image: dermpharma  ,url:"https://dermpharma.pk/"},
  { id: 6, title: "Gowara Foods", category: "shopify", image: gowarafoods  ,url:"https://www.gowarafoods.com/"},
  { id: 7, title: "Laxariah", category: "shopify", image: laxariah  ,url:"https://laxariah.com/"},
  { id: 8, title: "Origin Pharma", category: "shopify", image: originpharma ,url:"https://originpharma.org/" },
  { id: 9, title: "Rosewood Furnish", category: "shopify", image: rosewoodfurnish ,url:"https://rosewoodfurnish.com/" },
  { id: 10, title: "Sizu Cchero", category: "shopify", image: sizucchero  ,url:"https://www.sizucchero.com/"},
  { id: 11, title: "Y Sons PK", category: "shopify", image: ysons ,url:"https://ysons.com.pk/" },
  { id: 12, title: "Zainab Zari", category: "shopify", image: zainabzari  ,url:"https://www.zainabzari.pk/"},
  { id: 13, title: "Zens Org", category: "shopify", image: zensorg  ,url:"https://zensorg.com/"},

  /* WORDPRESS */
  { id: 14, title: "ZperSoft", category: "wordpress", image: zpersoft  ,url:"https://zpersoft.com/"},
  { id: 15, title: "Asphalt Attire", category: "wordpress", image: asphaltattire  ,url:"#"},
  { id: 16, title: "Baghbani", category: "wordpress", image: baghbani  ,url:"https://baghbani.xyz/"},
  { id: 17, title: "Dermatology Clinic", category: "wordpress", image: dermatology  ,url:"https://dermatology.pk/"},
  { id: 18, title: "DeveloperTech", category: "wordpress", image: developertech ,url:"https://developertech.net/" },
  { id: 19, title: "Eco Grocer", category: "wordpress", image: ecogrocer ,url:"https://ecogrocer.store/" },
  { id: 20, title: "Furry's Wellness", category: "wordpress", image: furryswellness ,url:"https://furryswellness.com/" },
  { id: 21, title: "GI Mechanical", category: "wordpress", image: gimechanical  ,url:"https://gimechanical.ca/"},
  { id: 22, title: "Graceful Hijabs", category: "wordpress", image: gracefulhijabs ,url:"https://gracefulhijabs.com/" },
  { id: 23, title: "Grind & Gains", category: "wordpress", image: grindandgains  ,url:"https://grindandgains.com/"},
  { id: 24, title: "Mandy Store", category: "wordpress", image: mandystore  ,url:"https://mandystore.online/"},
  { id: 25, title: "PNY Training", category: "wordpress", image: pnyc ,url:"https://pnyc.pk/" },
  { id: 26, title: "Polani CA", category: "wordpress", image: polani  ,url:"https://polani.ca/"},
  { id: 27, title: "Prime Footwears", category: "wordpress", image: primefootwears  ,url:"https://primefootwears.com/"},
  { id: 28, title: "RTV Outdoors", category: "wordpress", image: rtvoutdoors,url:"https://rtvoutdoors.net/" },
  { id: 29, title: "The Fragrances House", category: "wordpress", image: thefragranceshouse  ,url:"https://thefragranceshouse.com/"},
  { id: 30, title: "The Urban Strap", category: "wordpress", image: theurbanstrap  ,url:"https://theurbanstrap.com/"},
  { id: 31, title: "Upfront Security Services", category: "wordpress", image: upfrontsecurityservices ,url:"https://upfrontsecurityservices.com/" },
  { id: 32, title: "Village Crafting", category: "wordpress", image: villagecrafting ,url:"https://villagecrafting.com/" },
  { id: 33, title: "Wiser Soft Solutions", category: "wordpress", image: wisersoftsol  ,url:"https://wisersoftsol.com/"},
  { id: 34, title: "Xeemart PK", category: "wordpress", image: xeemart ,url:"https://xeemart.pk/" },
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
          
          <a
  href={project.url}
  target="_blank"
  rel="noopener noreferrer"
  className="project-link"
>
  <div className="project-card">
    <div className="project-image">
      <img src={project.image} alt={project.title} />
    </div>
    <h3>{project.title}</h3>
  </div>
</a>

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
