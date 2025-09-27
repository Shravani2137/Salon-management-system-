// src/components/About.jsx
import React from "react";

function About() {
  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "60px 10%",
        backgroundColor: "#faf8f6", // light pastel background
      }}
    >
      {/* Left: Text */}
      <div style={{ flex: 1, paddingRight: "40px" }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
          Indulge in the Extraordinary
        </h2>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "30px" }}>
          JUICE is one of India’s trendiest salon chains with 40+ branches
          across India, with a widespread presence across metros and mini-metros
          catering to the beauty needs of ardent fashion followers, trendsetters,
          and celebrities. Being in existence for almost two decades, JUICE has
          become a leader and benchmark in the hair, beauty, and nail care industry.
        </p>
        <button
          style={{
            padding: "12px 24px",
            fontSize: "1rem",
            borderRadius: "5px",
            border: "2px solid black",
            background: "transparent",
            cursor: "pointer",
          }}
        >
          DISCOVER MORE
        </button>
      </div>

      {/* Right: Image */}
      <div style={{ flex: 1 }}>
        <img
          src="/bg3.jpg" // put an image in public/about.jpg
          alt="Salon model"
          style={{ width: "100%", borderRadius: "10px" }}
        />
      </div>
    </section>
  );
}

export default About;
