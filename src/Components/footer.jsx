// src/Components/Footer.jsx
import React from "react";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#111",
        color: "#ccc",
        padding: "40px 10%",
        marginTop: "50px",
      }}
    >
      {/* Footer top */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        {/* Logo */}
        <h2 style={{ margin: 0, color: "#fff" }}>LOOKS SALON</h2>

        {/* Social Links */}
        <div style={{ display: "flex", gap: "15px" }}>
          <a
            href="#"
            style={{ color: "#ccc", textDecoration: "none", fontSize: "1.2rem" }}
          >
            Facebook
          </a>
          <a
            href="#"
            style={{ color: "#ccc", textDecoration: "none", fontSize: "1.2rem" }}
          >
            Instagram
          </a>
          <a
            href="#"
            style={{ color: "#ccc", textDecoration: "none", fontSize: "1.2rem" }}
          >
            Twitter
          </a>
        </div>
      </div>

      {/* Bottom copyright */}
      <div
        style={{
          textAlign: "center",
          borderTop: "1px solid rgba(255,255,255,0.2)",
          paddingTop: "15px",
          fontSize: "0.9rem",
          color: "#aaa",
        }}
      >
        &copy; {new Date().getFullYear()} Looks Salon. All rights reserved.
        <br />
        <a
          href="#top"
          style={{ color: "#ff7f50", textDecoration: "none", marginTop: "5px", display: "inline-block" }}
        >
          Back to Top
        </a>
      </div>
    </footer>
  );
}

export default Footer;
