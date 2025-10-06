import React, { useState, useEffect } from "react";

function Hero({ openBooking }) {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ["/image1.jpg", "/image2.jpg", "/image3.jpg", "/image4.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      style={{
        height: "calc(100vh - 60px)", // subtract navbar height (approx 60px)
        width: "100%",
        position: "relative",
        overflow: "hidden",
        paddingTop: "0px", // remove extra top padding
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${images[currentImage]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.6)",
          transition: "background-image 1.2s ease-in-out",
          zIndex: 1,
        }}
      />

      {/* Overlay content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "#fff",
          padding: "0 20px",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "700",
            marginBottom: "15px",
            textShadow: "2px 2px 15px rgba(0,0,0,0.5)",
            animation: "fadeIn 1.5s ease-in-out",
          }}
        >
          Look Good. Feel Confident.
        </h1>
        <p
          style={{
            fontSize: "1.3rem",
            marginBottom: "30px",
            maxWidth: "600px",
            lineHeight: "1.6",
            textShadow: "1px 1px 8px rgba(0,0,0,0.4)",
            animation: "fadeIn 2s ease-in-out",
          }}
        >
          Professional care and personalized beauty treatments to bring out your best self.
        </p>

        <button
          onClick={openBooking}
          style={{
            padding: "14px 30px",
            fontSize: "1rem",
            borderRadius: "50px",
            background: "linear-gradient(90deg, #6a0dad, #ff7f50)",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
            boxShadow: "0 8px 20px rgba(106,13,173,0.4)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 12px 25px rgba(106,13,173,0.6)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 8px 20px rgba(106,13,173,0.4)";
          }}
        >
          Book Now
        </button>
      </div>

      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </section>
  );
}

export default Hero;
