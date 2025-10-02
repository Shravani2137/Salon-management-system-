// src/components/About.jsx
import React from "react";

function About() {
  return (
    <section
      style={{
        backgroundColor: "#fdf6f9",
        padding: "80px 10%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "40px",
      }}
    >
      {/* Left: Text Content */}
      <div style={{ flex: 1 }}>
        <h2 style={{ fontSize: "2.8rem", color: "#6a0dad", marginBottom: "25px" }}>
          Where Beauty Meets Excellence
        </h2>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#333", marginBottom: "30px" }}>
          Discover a sanctuary where creativity and style come together. Our talented team of
          professionals is committed to delivering personalized hair, skin, and beauty services,
          ensuring you leave feeling confident and refreshed. Every visit is an opportunity to
          indulge in care, precision, and luxury.
        </p>
        <button
          style={{
            padding: "12px 28px",
            fontSize: "1rem",
            color: "#6a0dad",
            border: "2px solid #6a0dad",
            borderRadius: "5px",
            background: "transparent",
            cursor: "pointer",
            transition: "all 0.3s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#6a0dad";
            e.currentTarget.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "#6a0dad";
          }}
        >
          LEARN MORE
        </button>
      </div>

      {/* Right: Image */}
      <div style={{ flex: 1 }}>
        <img
          src="/image2.jpg" // replace with your actual image
          alt="Salon ambiance"
          style={{
            width: "100%",
            height: "400px",
            objectFit: "cover",
            borderRadius: "15px",
            boxShadow: "0 10px 30px rgba(106,13,173,0.15)",
          }}
        />
      </div>
    </section>
  );
}

export default About;
