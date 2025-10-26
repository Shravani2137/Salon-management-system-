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
            href="#https://r.search.yahoo.com/_ylt=AwrKDbwRLORoOQIA_9K7HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3Ny/RV=2/RE=1760993553/RO=10/RU=https%3a%2f%2fwww.facebook.com%2flakme%2f/RK=2/RS=C0QGMibPtkdsYu3sBVIKUZb8MSg-"
            style={{ color: "#ccc", textDecoration: "none", fontSize: "1.2rem" }}
          >
            Facebook
          </a>
          <a
            href="#https://r.search.yahoo.com/_ylt=Awr1TmhgLORoGgIAN6C7HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3Ny/RV=2/RE=1760993633/RO=10/RU=https%3a%2f%2fwww.instagram.com%2fthehealingcolours%2f/RK=2/RS=yIP9Sc.Nma7gltwDlVQTu_m0xQg-"
            style={{ color: "#ccc", textDecoration: "none", fontSize: "1.2rem" }}
          >
            Instagram
          </a>
          <a
            href="https://r.search.yahoo.com/_ylt=AwrKDbynLORoLAIAb.q7HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3Ny/RV=2/RE=1760993703/RO=10/RU=https%3a%2f%2ftwitter.com%2fILoveLakme/RK=2/RS=doGwPBOvH6VjBjRe4QH87Hl0xNs-"
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
