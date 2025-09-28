import { useEffect, useState } from "react";

function ParallaxSection({ title, subtitle }) {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY * 0.5);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      style={{
        height: "100vh",
        backgroundImage: "url(/bg1.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: `center ${offsetY}px`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        textShadow: "2px 2px 10px rgba(0,0,0,0.7)",
        padding: "0 20px",
        transition: "background-position 0.1s", // smooth movement
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>{title}</h1>
      {subtitle && (
        <p style={{ fontSize: "1.5rem", maxWidth: "700px" }}>{subtitle}</p>
      )}
    </section>
  );
}

export default ParallaxSection;
