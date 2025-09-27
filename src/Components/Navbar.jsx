// src/components/Navbar.jsx

// Navbar Component
function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",   // navbar sticks to the top
        top: 0,
        left: 0,
        width: "100%",       // full screen width
        background: "white",
        padding: "15px 40px",
        display: "flex",
        justifyContent: "space-between", // logo left, links right
        alignItems: "center",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)", // small shadow
        zIndex: 1000, // ensures navbar is always on top
      }}
    >
      {/* Website Logo / Title */}
      <h1 style={{ margin: 0 }}>LOOKS SALON</h1>

      {/* Navigation Links */}
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          gap: "25px", // space between links
          margin: 0,
          padding: 0,
        }}
      >
        <li>
          <a
            href="#"
            style={{ textDecoration: "none", color: "black", fontWeight: "bold" }}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            style={{ textDecoration: "none", color: "black", fontWeight: "bold" }}
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#"
            style={{ textDecoration: "none", color: "black", fontWeight: "bold" }}
          >
            Staff
          </a>
        </li>
        <li>
          <a
            href="#"
            style={{ textDecoration: "none", color: "black", fontWeight: "bold" }}
          >
            Booking
          </a>
        </li>
        <li>
          <a
            href="#"
            style={{ textDecoration: "none", color: "black", fontWeight: "bold" }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
