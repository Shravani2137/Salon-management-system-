// src/components/BackgroundSection.jsx
import React, { useState, useEffect } from "react";
import bgImage from "../public/bg1.jpg"; // your image path

function BackgroundSection() {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sectionStyle = {
    height: "100vh",
    backgroundImage: "/bg1.jpg",
    backgroundSize: "cover",
    backgroundPosition: `center ${offsetY * 0.5}px`, // parallax effect
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    textShadow: "2px 2px 10px rgba(0,0,0,0.7)",
    fontSize: "3rem",
    transition: "background-position 0.1s",
  };

  return (
    <section style={sectionStyle}>
      <h1>Welcome to Juice Salon</h1>
    </section>
  );
}

export default BackgroundSection;
