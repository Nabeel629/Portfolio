import "./index.css";

function Services() {
  const services = [
    {
      title: "Shopify Store Development",
      desc: "Professional Shopify stores with custom design and high conversions.",
      icon: "🛍️"
    },
    {
      title: "WordPress Blog & Ecommerce",
      desc: "SEO optimized WordPress blogs & WooCommerce stores.",
      icon: "📰"
    },
    {
      title: "Custom Website Development",
      desc: "Fully custom coded websites using HTML, CSS, JS & React.",
      icon: "💻"
    },
    {
      title: "PHP Web Applications",
      desc: "Dynamic websites & admin panels built in PHP & MySQL.",
      icon: "⚙️"
    },
    {
      title: "Custom Liquid Sections",
      desc: "Advanced Shopify Liquid custom sections & features.",
      icon: "🧩"
    },
    {
      title: "Elementor Pro Websites",
      desc: "Pixel perfect Elementor designs with fast loading.",
      icon: "🎯"
    }
  ];

  return (
    <>
     <div className="top-heading">
        <h1 >Our Services</h1>
        <p>        Professional Web Solutions for Your Online Success
</p>
      </div>
    <div className="services">

    

      <div className="service-grid">
        {services.map((service, i) => (
          <div className="service-card" key={i}>
            <span className="icon">{service.icon}</span>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </div></>
  );
}

export default Services;
