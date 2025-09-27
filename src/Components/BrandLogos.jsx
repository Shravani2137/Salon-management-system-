// src/components/BrandLogos.jsx
import React from "react";

function BrandLogos() {
  const logos = [
    "/bg1.jpg",
    "/bg2.jpg",
    "/bg3.jpg",
    "/image1.jpg",
    "/image2.jpg",
  ]; // replace with actual image paths

  return (
    <section style={{ padding: "60px 10%", backgroundColor: "#fff" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "40px",
        }}
      >
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Brand ${index}`}
            style={{ height: "60px", objectFit: "contain" }}
          />
        ))}
      </div>
    </section>
  );
}

export default BrandLogos;