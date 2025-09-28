// src/components/Indulge.jsx
import React from "react";

function Indulge() {
  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "80px 10%",
        backgroundColor: "#f3e5f5",
        gap: "40px",
        flexWrap: "nowrap", // horizontal only
      }}
    >
      {/* Left Side - Text */}
      <div style={{ flex: 1, minWidth: "350px", position: "relative" }}>
        <div
          style={{
            backgroundColor: "#fff",
            padding: "40px",
            borderRadius: "20px",
            boxShadow: "0 10px 30px rgba(106,13,173,0.15)",
          }}
        >
          <h2 style={{ fontSize: "2.5rem", color: "#6a0dad", marginBottom: "20px" }}>
            Indulge in Luxury
          </h2>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#333", marginBottom: "30px" }}>
            LOOKS Salon transforms every visit into a premium experience. Our expert stylists
            craft personalized treatments for hair, skin, and nails, ensuring you leave feeling
            refreshed, confident, and glamorous.
          </p>
          <button
            style={{
              padding: "12px 28px",
              border: "2px solid #6a0dad",
              background: "#6a0dad",
              color: "#fff",
              cursor: "pointer",
              fontWeight: "bold",
              borderRadius: "8px",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#fff";
              e.currentTarget.style.color = "#6a0dad";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#6a0dad";
              e.currentTarget.style.color = "#fff";
            }}
          >
            DISCOVER MORE
          </button>
        </div>
      </div>

      {/* Right Side - Image */}
      <div style={{ flex: 1, minWidth: "350px", position: "relative" }}>
        <img
          src="/image1.jpg" // replace with your actual image
          alt="Salon Luxury"
          style={{
            width: "100%",
            borderRadius: "20px",
            objectFit: "cover",
            boxShadow: "0 10px 30px rgba(106,13,173,0.3)",
          }}
        />
      </div>
    </section>
  );
}

export default Indulge;
