import React from "react";

function Navbar({ openBooking }) {
  const buttonStyle = {
    background: "transparent",
    border: "none", // removed white border
    borderRadius: "5px",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "1rem",
    padding: "5px 10px", // slightly smaller padding
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
        padding: "10px 30px", // reduced navbar height
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        zIndex: 1000,
      }}
    >
      {/* Logo + Title */}
      <div
        style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <img
          src="/1.png"
          alt="Looks Salon Logo"
          style={{ width: "45px", height: "45px", marginRight: "10px" }} // smaller logo
        />
        <h1 style={{ color: "white", margin: 0, fontSize: "1.5rem" }}>LOOKS SALON</h1>
      </div>

      {/* Navigation buttons */}
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          gap: "20px", // slightly smaller gap
          margin: 0,
          padding: 0,
        }}
      >
        {["Home", "Services", "Staff", "Booking", "Contact"].map((item) => (
          <li key={item}>
            <button
              onClick={
                item === "Home"
                  ? () => window.scrollTo({ top: 0, behavior: "smooth" })
                  : item === "Booking"
                  ? openBooking
                  : () => scrollToSection(item.toLowerCase())
              }
              style={buttonStyle}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
