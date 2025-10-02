import React, { useState } from "react";

function BookingForm({ onClose }) {
  const services = ["Hair", "Cosmetology", "Make-Up", "Nails"]; // dropdown options

  const initialSlots = [
    { time: "10:00 AM", booked: false },
    { time: "11:00 AM", booked: true },
    { time: "11:30 AM", booked: true },
    { time: "12:00 PM", booked: false },
    { time: "12:30 PM", booked: false },
    { time: "01:00 PM", booked: false },
    { time: "01:30 PM", booked: false },
    { time: "02:00 PM", booked: true },
    { time: "02:20 PM", booked: true },
    { time: "03:00 PM", booked: false },
    { time: "03:30 PM", booked: false },
    { time: "04:00 PM", booked: false },
    { time: "04:30 PM", booked: false },
    { time: "05:00 PM", booked: true },
    { time: "05:30 PM", booked: false },
    { time: "06:00 PM", booked: false },
    { time: "06:30 PM", booked: false },
    { time: "07:00 PM", booked: false },
    { time: "07:30 PM", booked: false },
    { time: "08:00 PM", booked: true },
    { time: "08:30 PM", booked: false },
    { time: "09:00 PM", booked: false },
  ];

  const [selectedService, setSelectedService] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [slots] = useState(initialSlots);
  const [showTimeDropdown, setShowTimeDropdown] = useState(false);

  const handleTimeClick = (slot) => {
    if (!slot.booked) {
      setSelectedTime(slot.time);
      setShowTimeDropdown(false); // close dropdown after selecting
    }
  };

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
          background: "#f6ebf8ff",
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

          {/* Service Dropdown */}
          <select
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              backgroundColor: "#fff",
            }}
          >
            <option value="" disabled>
              Select Service
            </option>
            {services.map((service, index) => (
              <option key={index} value={service}>
                {service}
              </option>
            ))}
          </select>

          {/* Time Slots Dropdown */}
          <div style={{ marginBottom: "15px" }}>
            <label
              style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}
            >
              Select Time Slot
            </label>

            <button
              type="button"
              onClick={() => setShowTimeDropdown(!showTimeDropdown)}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                backgroundColor: "#fffeffff",
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              {selectedTime ? `Selected: ${selectedTime}` : "Select Slot"}
            </button>

            {showTimeDropdown && (
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                  marginTop: "10px",
                }}
              >
                {slots.map((slot, index) => (
                  <button
                    type="button"
                    key={index}
                    onClick={() => handleTimeClick(slot)}
                    disabled={slot.booked}
                    style={{
                      padding: "8px 12px",
                      borderRadius: "5px",
                      border:
                        selectedTime === slot.time ? "2px solid #fc3b6cff" : "1px solid #ccc",
                      backgroundColor: slot.booked ? "#ddd" : "#ffffffff",
                      color: slot.booked ? "#c3c3c3ff" : "#000",
                      textDecoration: slot.booked ? "line-through" : "none",
                      cursor: slot.booked ? "not-allowed" : "pointer",
                    }}
                  >
                    {slot.time}
                  </button>
                ))}
              </div>
            )}
          </div>

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
