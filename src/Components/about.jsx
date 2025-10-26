// src/components/About.jsx
import React, { useState } from "react";

function About() {
  const [showTips, setShowTips] = useState(false);

  const beautyTips = [
    {
      title: "Hydrate Your Skin",
      description: "Drink plenty of water daily and use a moisturizing cream to keep your skin radiant.",
      image: "/tips/hydrate.jpg",
    },
    {
      title: "Protect from Sun",
      description: "Always apply sunscreen to protect your skin from harmful UV rays.",
      image: "/tips/sunscreen.jpg",
    },
    {
      title: "Regular Hair Care",
      description: "Trim your hair regularly and use nourishing oils to maintain healthy locks.",
      image: "/tips/haircare.jpg",
    },
    {
      title: "Healthy Diet",
      description: "Include fruits, vegetables, and protein in your diet for glowing skin and strong nails.",
      image: "/tips/healthy_diet.jpg",
    },
    {
      title: "Beauty Sleep",
      description: "Get at least 7-8 hours of sleep daily to rejuvenate your skin and body.",
      image: "/tips/sleep.jpg",
    },
  ];

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
          onClick={() => setShowTips(true)}
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

      {/* Modal for Beauty Tips */}
      {showTips && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
          onClick={() => setShowTips(false)}
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: "40px",
              borderRadius: "15px",
              maxWidth: "800px",
              width: "90%",
              maxHeight: "90%",
              overflowY: "auto",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside modal
          >
            <h2 style={{ color: "#6a0dad", marginBottom: "30px", textAlign: "center" }}>
              5 Essential Beauty Tips
            </h2>
            {beautyTips.map((tip, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  gap: "20px",
                  marginBottom: "25px",
                  alignItems: "center",
                }}
              >
                <img
                  src={tip.image}
                  alt={tip.title}
                  style={{ width: "120px", height: "120px", borderRadius: "10px", objectFit: "cover" }}
                />
                <div>
                  <h3 style={{ marginBottom: "8px" }}>{tip.title}</h3>
                  <p style={{ margin: 0, color: "#333" }}>{tip.description}</p>
                </div>
              </div>
            ))}
            <button
              onClick={() => setShowTips(false)}
              style={{
                position: "absolute",
                top: "15px",
                right: "15px",
                background: "#6a0dad",
                color: "#fff",
                border: "none",
                padding: "8px 12px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default About;
