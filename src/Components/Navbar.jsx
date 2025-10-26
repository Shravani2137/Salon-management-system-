import React, { useState } from "react";

function Navbar({ openBooking }) {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const buttonStyle = {
    background: "transparent",
    border: "2px ",
    borderRadius: "1px",
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

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (email === "admin@salon.com" && password === "admin123") {
      alert("Admin Logged In!");
      setShowLoginModal(false);
      window.location.href = "/admin/dashboard";
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <>
      {/* ✅ NAVBAR */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          background: "#9353c3ff",
          padding: "15px 14px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
          zIndex: 1000,
        }}
      >
        {/* LOGO + NAME */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            cursor: "pointer",
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img
            src="/1.png" // 👈 put your logo image in public folder
            alt="Looks Salon Logo"
            style={{
              width: "40px",
              height: "40px",
              objectFit: "cover",
              borderRadius: "50%",
            }}
          />
          <h1
            style={{
              margin: 0,
              color: "white",
              fontSize: "1.5rem",
              fontWeight: "bold",
            }}
          >
            LOOKS SALON
          </h1>
        </div>

        {/* MENU LINKS */}
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            gap: "10px",
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
              onClick={() => scrollToSection("services")}
              style={buttonStyle}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              Services
            </button>
          </li>
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
          <li>
            <button
              onClick={openBooking}
              style={buttonStyle}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              Booking
            </button>
          </li>
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
          <li>
            <button
              onClick={() => setShowLoginModal(true)}
              style={buttonStyle}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              Admin
            </button>
          </li>
        </ul>
      </nav>

      {/* ✅ ADMIN LOGIN MODAL */}
      {showLoginModal && (
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
          }}
          onClick={() => setShowLoginModal(false)}
        >
          <div
            style={{
              background: "#fff",
              padding: "40px",
              borderRadius: "10px",
              textAlign: "center",
              minWidth: "320px",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 style={{ marginBottom: "20px" }}>Admin Login</h2>
            <form onSubmit={handleLoginSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                style={{
                  width: "80%",
                  padding: "10px",
                  marginBottom: "15px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  outline: "none",
                }}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                style={{
                  width: "80%",
                  padding: "10px",
                  marginBottom: "20px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  outline: "none",
                }}
              />
              <button
                type="submit"
                style={{
                  ...buttonStyle,
                  borderColor: "#6a0dad",
                  color: "#fff",
                  backgroundColor: "#6a0dad",
                  width: "85%",
                  fontSize: "1rem",
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = "#4b006d")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "#6a0dad")}
              >
                Login
              </button>
            </form>

            <button
              style={{
                marginTop: "10px",
                background: "transparent",
                border: "none",
                color: "#6a0dad",
                cursor: "pointer",
                textDecoration: "underline",
              }}
              onClick={() => setShowLoginModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
