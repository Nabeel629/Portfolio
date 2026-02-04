import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./header/Header";

// Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import { use, useEffect, useState } from "react";
import Footer from "./footer/Footer";
function App() {
   const [page,setPage]=useState("Nabeel Akram");
useEffect(() => {
  document.title = page+" Portfolio";
}, [page]);
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
  