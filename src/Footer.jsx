import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-col">
          <h2 className="logo">ReactSite</h2>
          <p>Modern React website built for learning and practice.</p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <p>📧 info@reactsite.com</p>
          <p>📞 +92 300 1234567</p>
          <p>📍 Lahore, Pakistan</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Nabeel Akram | All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
