import { Link } from "react-router-dom";

function Navbar() {
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

  // Scroll handlers
  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        background: "#6a0dad",
        padding: "15px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
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
        <li>
          <button
            onClick={scrollToServices}
            style={buttonStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Services
          </button>
        </li>
        <li>
          <Link
            to="/staff"
            style={buttonStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Staff
          </Link>
        </li>
        <li>
          <button
            onClick={scrollToContact}
            style={buttonStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Booking
          </button>
        </li>
        <li>
          <Link
            to="/contact"
            style={buttonStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
