// src/components/Hero.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  // Array of images (from public folder)
  const images = ["/image1.jpg", "/image2.jpg", "/image3.jpg", "/image4.jpg"];

  // Change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    // Cleanup
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      style={{
        height: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${images[currentImage]})`, // dynamic background
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        textAlign: "center",
        transition: "background-image 1s ease-in-out",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.35)",
          padding: "30px",
          borderRadius: "10px",
          maxWidth: "900px",
          width: "100%",
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "12px" }}>
          Look Good. Feel Good. Be Confident.
        </h1>
        <p style={{ fontSize: "1.2rem", marginBottom: "20px" }}>
          Discover professional care that brings out your best self.
        </p>

        <Link
          to="/booking"
          style={{
            padding: "12px 22px",
            fontSize: "1rem",
            borderRadius: "8px",
            textDecoration: "none",
            background: "#ff7f50",
            color: "#fff",
            display: "inline-block",
            transition: "0.3s ease",
          }}
        >
          Book Now
        </Link>
      </div>
    </section>
  );
}

export default Hero;
