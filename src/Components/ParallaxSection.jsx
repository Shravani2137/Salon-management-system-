import React from "react";

function ParallaxSection({ bgImage, title, subtitle }) {
  return (
    <section
      style={{
        height: "100vh",
        backgroundImage: "/image2.jpg",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // parallax
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        textShadow: "2px 2px 10px rgba(0,0,0,0.7)",
        padding: "0 20px",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>{title}</h1>
      {subtitle && (
        <p style={{ fontSize: "1.5rem", maxWidth: "700px" }}>{subtitle}</p>
      )}
    </section>
  );
}

export default ParallaxSection;