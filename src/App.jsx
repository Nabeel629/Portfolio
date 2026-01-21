import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";

// Pages
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Footer from "./Footer";
import Carousel from "./Carousel";
function App() {
   
  return (
    <BrowserRouter>

      {/* Header / Navbar */}
      <Header />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
<Footer />

    </BrowserRouter>
  );
}

export default App;
