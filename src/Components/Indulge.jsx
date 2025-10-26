import React, { useState } from "react";

function Indulge() {
  const [showInfo, setShowInfo] = useState(false);

  // Salon description as a paragraph
  const salonDescription = `
    ✨ LOOKS Salon ✨ is your premier destination for beauty, style, and relaxation. From the moment you step inside, you’re welcomed into an atmosphere of elegance and comfort. Our expert team of stylists, beauticians, and wellness professionals specializes in hair care, radiant skin treatments, flawless nails, and personalized spa therapies 🌿, ensuring every client leaves feeling refreshed, confident, and radiant.

At LOOKS Salon, we combine hygiene, innovation, and personalized services to create experiences tailored just for you. Whether it’s a complete makeover, a quick touch-up, or a serene self-care moment 🕯️, every visit is a luxurious escape designed to make you look and feel your absolute best.
  `;

  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "80px 10%",
        backgroundColor: "#f3e5f5",
        gap: "40px",
        flexWrap: "nowrap",
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
          <h2
            style={{ fontSize: "2.5rem", color: "#6a0dad", marginBottom: "20px" }}
          >
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
            onClick={() => setShowInfo(true)}
          >
            DISCOVER MORE
          </button>
        </div>
      </div>

      {/* Right Side - Image */}
      <div style={{ flex: 1, minWidth: "350px", position: "relative" }}>
        <img
          src="/image1.jpg"
          alt="Salon Luxury"
          style={{
            width: "100%",
            borderRadius: "20px",
            objectFit: "cover",
            boxShadow: "0 10px 30px rgba(106,13,173,0.3)",
          }}
        />
      </div>

      {/* Modal Popup for Salon Info */}
      {showInfo && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={() => setShowInfo(false)}
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: "40px",
              borderRadius: "15px",
              maxWidth: "600px",
              width: "90%",
              boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 style={{ color: "#6a0dad", marginBottom: "20px" }}>About LOOKS Salon</h2>
            <p style={{ lineHeight: "1.7", fontSize: "1.1rem", color: "#333" }}>
              {salonDescription}
            </p>
            <button
              onClick={() => setShowInfo(false)}
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                backgroundColor: "#6a0dad",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
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

export default Indulge;
