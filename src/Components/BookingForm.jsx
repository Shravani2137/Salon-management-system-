// src/Components/BookingForm.jsx
import React from "react";

function BookingForm({ onClose }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.7)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "30px",
          borderRadius: "10px",
          width: "90%",
          maxWidth: "500px",
          boxShadow: "0 0 10px rgba(0,0,0,0.5)",
          position: "relative",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "10px",
            right: "15px",
            background: "transparent",
            border: "none",
            fontSize: "1.5rem",
            cursor: "pointer",
          }}
        >
          &times;
        </button>
        <h2 style={{ marginBottom: "20px" }}>Book Your Appointment</h2>
        <form>
          <input
            type="text"
            placeholder="Full Name"
            required
            style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          />
          <input
            type="email"
            placeholder="Email"
            required
            style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          />
          <input
            type="tel"
            placeholder="Phone"
            required
            style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          />
          <input
            type="date"
            required
            style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          />
          <textarea
            placeholder="Additional Notes"
            style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          ></textarea>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              background: "#ff3366",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookingForm;
