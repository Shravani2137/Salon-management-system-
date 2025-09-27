import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Indulge from "./Components/Indulge";
import BrandLogos from "./Components/BrandLogos";
import Services from "./Components/Services";
import ParallaxSection from "./Components/ParallaxSection";
import About from "./Components/about";
import Footer from "./Components/footer";

function App() {
  return (
    <>
      <Navbar />

      {/* Main content container */}
      <div style={{ marginTop: "80px" }}>
        <Hero />
        <Indulge />
        <BrandLogos />
        <Services />
        <ParallaxSection />
        <About />
      </div>

      <Footer />
    </>
  );
}

export default App;
