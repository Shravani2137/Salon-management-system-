// src/Components/Staff.jsx
import React from "react";

function Staff() {
  const staffMembers = [
    { name: "Alice", role: "Hair Stylist", img: "/staff1.jpg" },
    { name: "Robin", role: "Makeup Artist", img: "/staff2.jpg" },
    { name: "David", role: "Nail Technician", img: "/staff3.jpg" },
    { name: "Sophia", role: "Skin Care Specialist", img: "/staff4.jpg" },
  ];

  return (
    <section
      id="staff"   // 🔥 add this line
      style={{
        padding: "100px 20px",
        textAlign: "center",
        backgroundColor: "#f3e5f5", // light purple background
      }}
    >
      <h2
        style={{
          fontSize: "2.8rem",
          marginBottom: "50px",
          color: "#6a0dad", // deep purple heading
        }}
      >
        Meet Our Staff
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "40px",
          justifyItems: "center",
        }}
      >
        {staffMembers.map((staff, index) => (
          <div
            key={index}
            style={{
              background: "#fff",
              padding: "25px",
              borderRadius: "15px",
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
              width: "100%",
              maxWidth: "280px",
              textAlign: "center",
              transition: "transform 0.3s, box-shadow 0.3s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.boxShadow =
                "0 12px 30px rgba(10, 8, 11, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 8px 20px rgba(0, 0, 0, 0.15)";
            }}
          >
            <img
              src={staff.img}
              alt={staff.name}
              style={{
                width: "100%",
                height: "270px",
                objectFit: "cover",
                borderRadius: "15px",
                marginBottom: "20px",
              }}
            />
            <h3 style={{ margin: "10px 0 5px", color: "#060506ff" }}>
              {staff.name}
            </h3>
            <p
              style={{
                color: "#090404ff",
                margin: 0,
                fontWeight: "500",
              }}
            >
              {staff.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Staff;
