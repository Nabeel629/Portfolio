function ServicesCard(){
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
    return(

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

    )
}


export default ServicesCard;