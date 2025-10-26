import React, { useState } from "react";

function Services() {
  const services = [
    {
      title: "Hair",
      description:
        "Hair stylists at JUICE believe that beauty is different for every person which is why they do not mass produce but tailor-make a look, keeping in mind an individual's features when conceiving their cut and colour.",
      img: "/hair.jpg",
      details: [
        { name: "Haircut", price: "₹500" },
        { name: "Hair Color", price: "₹1200" },
        { name: "Hair Spa", price: "₹800" },
        { name: "Hair Treatment", price: "₹1500" },
        
      ],
    },
    {
      title: "Cosmetology",
      description:
        "Your path to radiant skin starts here with top-notch, advanced cosmetology services especially customised for you at JUICE.",
      img: "/image4.jpg",
      details: [
        { name: "Facial", price: "₹700" },
        { name: "Skin Treatment", price: "₹1500" },
        { name: "Bleach", price: "₹600" },
        { name: "Waxing", price: "₹400" },
        { name: "Lash Lift", price: "₹800" },
      ],
    },
    {
      title: "Make-Up",
      description:
        "Step into the spotlight with makeup services at JUICE that highlight your unique style.",
      img: "/makeup.png",
      details: [
        { name: "Party Makeup", price: "₹1200" },
        { name: "Bridal Makeup", price: "₹5000" },
        { name: "Glam Makeup", price: "₹2000" },
        { name: "Wedding Makeup", price: "₹8000" },
        { name: "Lash Lift", price: "₹800" },
      ],
    },
    {
      title: "Nails",
      description:
        "Nail Goals? We’ve got you covered! Our expert team of nail technicians is all about precision & creating masterpieces with every stroke.",
      img: "/nails.png",
      details: [
        { name: "Manicure", price: "₹400" },
        { name: "Pedicure", price: "₹500" },
        { name: "Nail Art", price: "₹700" },
        { name: "Gel Nails", price: "₹800" },
        { name: "Acrylic Nails", price: "₹1000" },

      ],
    },
  ];

  const [activeService, setActiveService] = useState(null); // Track which service is clicked

  return (
    <section
      id="services"
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
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(1,1,1,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
            }}
            onClick={() => setActiveService(service)}
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

      {/* Modal / Tab for Service Details */}
      {activeService && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 2000,
            padding: "20px",
          }}
          onClick={() => setActiveService(null)} // close when clicking outside
        >
          <div
            style={{
              background: "white",
              borderRadius: "12px",
              maxWidth: "500px",
              width: "100%",
              padding: "30px",
              position: "relative",
              boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
            }}
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <h3 style={{ marginBottom: "20px", textAlign: "center" }}>
              {activeService.title} Services
            </h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {activeService.details.map((item, idx) => (
                <li
                  key={idx}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "10px 0",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  <span>{item.name}</span>
                  <span>{item.price}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setActiveService(null)}
              style={{
                marginTop: "20px",
                display: "block",
                width: "100%",
                padding: "10px",
                backgroundColor: "#9353c3ff",
                color: "white",
                border: "none",
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

export default Services;
