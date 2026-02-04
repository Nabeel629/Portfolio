import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-col">
          {/* <h2 className="logo">Nabeel Akram</h2> */}
          <p>A dedicated web developer specializing in custom websites and creative solutions.
I combine design and functionality to deliver high-quality digital products.
Always learning, always improving.</p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
       <Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/services">Services</Link>
<Link to="/contact">Contact</Link>

        </div>

        <div className="footer-col">
          <h4>Contact</h4>
<p><a href="mailto:nabeelakram629@gmail.com">nabeelakram629@gmail.com</a>
</p>
          <p>+92 3099956484</p>
          <p>Lahore, Pakistan</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Nabeel Akram | All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
