// src/components/Indulge.jsx

function Indulge() {
  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "80px 10%",
        backgroundColor: "#faf8f6",
        gap: "40px",
        flexWrap: "wrap",
      }}
    >
      {/* Left Side - Text */}
      <div style={{ flex: "1", minWidth: "300px" }}>
        <h2 style={{ fontSize: "2.8rem", marginBottom: "20px" }}>
          Indulge in the Extraordinary
        </h2>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#444" }}>
          looks salon is one of India’s trendiest salon chains with 40+ branches across India,
          with a widespread presence across metros and mini-metros catering to the beauty
          needs of ardent fashion followers, trendsetters and celebrities. Being in
          existence for almost two decades, LOOKS has become a leader and benchmark in the
          hair, beauty and nail care industry.
        </p>
        <button
          style={{
            marginTop: "25px",
            padding: "12px 25px",
            border: "2px solid black",
            background: "transparent",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          DISCOVER MORE
        </button>
      </div>

      {/* Right Side - Image */}
      <div style={{ flex: "1", textAlign: "center", minWidth: "300px" }}>
        <img
          src="/image1.jpg" // replace with your image
          alt="Salon"
          style={{ width: "100%", borderRadius: "10px" }}
        />
      </div>
    </section>
  );
}

export default Indulge;