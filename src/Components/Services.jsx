// src/components/Services.jsx
import React from "react";

function Services() {
  const services = [
    {
      title: "Hair",
      description:
        "Hair stylists at JUICE believe that beauty is different for every person which is why they do not mass produce but tailor-make a look, keeping in mind an individual's features when conceiving their cut and colour.",
      img: "/image1.jpg",
    },
    {
      title: "Cosmetology",
      description:
        "Your path to radiant skin starts here with top-notch, advanced cosmetology services especially customised for you at JUICE.",
      img: "/image2.jpg",
    },
    {
      title: "Make-Up",
      description:
        "Step into the spotlight with makeup services at JUICE that highlight your unique style.",
      img: "/image3.jpg",
    },
    {
      title: "Nails",
      description:
        "Nail Goals? We’ve got you covered! Our expert team of nail technicians is all about precision & creating masterpieces with every stroke.",
      img: "/image4.jpg",
    },
  ];

  return (
    <section
      id="services"   // 🔹 added this line
      style={{ padding: "60px 10%", backgroundColor: "#f3e5f5" }}
    >
      {/* Heading */}
      <h2
        style={{
          textAlign: "center",
          fontSize: "2.2rem",
          marginBottom: "40px",
          color: "#040305ff",
        }}
      >
        Our Services
      </h2>

      {/* Horizontal Scrollable Row */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          overflowX: "auto",
          padding: "10px 0",
        }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            style={{
              flex: "0 0 250px",
              background: "white",
              borderRadius: "12px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
              overflow: "hidden",
              textAlign: "center",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 8px 20px rgba(1, 1, 1, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "0 4px 15px rgba(0,0,0,0.1)";
            }}
          >
            <img
              src={service.img}
              alt={service.title}
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
            <div style={{ padding: "15px" }}>
              <h3 style={{ marginBottom: "10px", color: "#060506ff" }}>
                {service.title}
              </h3>
              <p style={{ fontSize: "0.9rem", color: "#050405ff" }}>
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
