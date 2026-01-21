import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Header.css";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">Nabeel Akram</div>

      <div className="menu-icon" onClick={() => setOpen(!open)}>
        ☰
      </div>

      <nav className={`nav ${open ? "nav-open" : ""}`}>
        <NavLink to="/" className="nav-link" onClick={() => setOpen(false)}>Home</NavLink>
        <NavLink to="/about" className="nav-link" onClick={() => setOpen(false)}>About</NavLink>
        <NavLink to="/services" className="nav-link" onClick={() => setOpen(false)}>Services</NavLink>
        <NavLink to="/contact" className="nav-link" onClick={() => setOpen(false)}>Contact</NavLink>
      </nav>
    </header>     
  );
}

export default Header;
        