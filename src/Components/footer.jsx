// src/components/Footer.jsx

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#111",
        color: "white",
        padding: "60px 10% 20px",
        marginTop: "50px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "40px",
          marginBottom: "40px",
        }}
      >
        {/* Get in Touch */}
        <div>
          <h3 style={{ marginBottom: "20px" }}>Get in Touch</h3>
          <p>Head Office</p>
          <p>
            502, Sapphire, S.V. Road, <br />
            Khar West, Mumbai, 400052
          </p>
          <p>📞 +91 86559 25011</p>
          <p>✉ customerservice@lookssalon.net</p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 style={{ marginBottom: "20px" }}>Useful Links</h3>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
            <li>
              <a href="/privacy" style={{ color: "white", textDecoration: "none" }}>
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/refund-policy"
                style={{ color: "white", textDecoration: "none" }}
              >
                Shipping & Refund Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Stay in the Know */}
        <div>
          <h3 style={{ marginBottom: "20px" }}>Stay in the Know</h3>
          <p>
            Subscribe to our mailing list and be the first to know about special
            deals!
          </p>
          <form style={{ marginTop: "15px" }}>
            <input
              type="email"
              placeholder="Email Address"
              style={{
                padding: "10px",
                width: "70%",
                border: "none",
                borderRadius: "5px 0 0 5px",
                outline: "none",
              }}
            />
            <button
              type="submit"
              style={{
                padding: "10px 15px",
                border: "none",
                backgroundColor: "#e91e63",
                color: "white",
                borderRadius: "0 5px 5px 0",
                cursor: "pointer",
              }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom copyright */}
      <div
        style={{
          textAlign: "center",
          borderTop: "1px solid rgba(255,255,255,0.2)",
          paddingTop: "20px",
          fontSize: "0.9rem",
          color: "#aaa",
        }}
      >
        Copyright © {new Date().getFullYear()} Looks Salon.
      </div>
    </footer>
  );
}

export default Footer;