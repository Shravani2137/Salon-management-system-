// src/components/BrandLogos.jsx
import React from "react";

function BrandLogos() {
  const logos = [
    { name: "L’Oréal Professionnel", img: "/loreal.jpg" },
    { name: "Wella Professionals", img: "/wella.jpg" },
    { name: "Schwarzkopf", img: "/schwarzkopf.jpg" },
    { name: "Lakmé", img: "/lakme.jpg" },
    { name: "OPI", img: "/opi.jpg" },
  ];

  return (
    <section
      style={{
        padding: "80px 10%",
        background: "linear-gradient(90deg, #f3e5f5 0%, #fff 100%)",
        borderRadius: "20px",
        boxShadow: "0 20px 70px rgba(106,13,173,0.15)",
        margin: "50px 0",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          marginBottom: "50px",
          color: "#6a0dad",
          fontWeight: "bold",
        }}
      >
        Our Trusted Brands
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around", // spreads logos evenly
          alignItems: "center",
          flexWrap: "nowrap", // keeps all in one line
          gap: "40px",
        }}
      >
        {logos.map((brand, index) => (
          <div key={index} style={{ textAlign: "center" }}>
            <img
              src={brand.img}
              alt={brand.name}
              style={{
                height: "120px", // bigger logo size
                objectFit: "contain",
                transition: "transform 0.3s, filter 0.3s, box-shadow 0.3s",
                cursor: "pointer",
                filter: "grayscale(70%)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.2)";
                e.currentTarget.style.filter = "grayscale(0%)";
                e.currentTarget.style.boxShadow =
                  "0 8px 20px rgba(106, 13, 173, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.filter = "grayscale(70%)";
                e.currentTarget.style.boxShadow = "none";
              }}
            />
            <p style={{ marginTop: "10px", fontSize: "1rem", color: "#444" }}>
              {brand.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BrandLogos;
