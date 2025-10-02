import React from "react";

function Navbar({ openBooking }) {
  const buttonStyle = {
    background: "transparent",
    border: "2px solid white",
    borderRadius: "5px",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "1rem",
    padding: "5px 12px",
    transition: "0.3s",
    textDecoration: "none",
    display: "inline-block",
  };

  const handleMouseOver = (e) => {
    e.target.style.backgroundColor = "white";
    e.target.style.color = "#6a0dad";
  };

  const handleMouseOut = (e) => {
    e.target.style.backgroundColor = "transparent";
    e.target.style.color = "white";
  };

  // Smooth scroll handler
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        background: "#9353c3ff",
        padding: "15px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        zIndex: 1000,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <span
          style={{ color: "white", cursor: "pointer" }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          LOOKS SALON
        </span>
      </h1>

      <ul
        style={{
          display: "flex",
          listStyle: "none",
          gap: "25px",
          margin: 0,
          padding: 0,
        }}
      >
        {/* Home */}
        <li>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={buttonStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Home
          </button>
        </li>

        {/* Services */}
        <li>
          <button
            onClick={() => scrollToSection("services")}
            style={buttonStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Services
          </button>
        </li>

        {/* Staff */}
        <li>
          <button
            onClick={() => scrollToSection("staff")}
            style={buttonStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Staff
          </button>
        </li>

        {/* Booking - opens booking form from Home */}
        <li>
          <button
            onClick={openBooking}  // 🔹 added this
            style={buttonStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Booking
          </button>
        </li>

        {/* Contact */}
        <li>
          <button
            onClick={() => scrollToSection("contact")}
            style={buttonStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
