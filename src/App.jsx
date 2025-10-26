import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Indulge from "./Components/Indulge";
import BrandLogos from "./Components/BrandLogos";
import Services from "./Components/Services";
import Staff from "./Components/Staff";
import BackgroundSection from "./Components/BackgroundSection";
import About from "./Components/About";
import Footer from "./Components/Footer";
import BookingForm from "./Components/BookingForm";
import Feedback from "./Components/Feedback";

import AdminLogin from "./Components/AdminLogin";
import AdminDashboard from "./Components/AdminDashboard";

const App = () => {
  const [showBooking, setShowBooking] = useState(false);

  const openBooking = () => setShowBooking(true);
  const closeBooking = () => setShowBooking(false);

  const isAdminLoggedIn = localStorage.getItem("adminLoggedIn") === "true";

  const Home = () => (
    <>
      <Navbar openBooking={openBooking} />
      <div style={{ marginTop: "80px" }}>
        <Hero openBooking={openBooking} />
        <Indulge />
        <BrandLogos />
        <Services id="services" />
        <Staff id="staff" />
        <BackgroundSection />
        <About />

        {/* Contact Section */}
        <section
          id="contact"
          style={{ padding: "100px 10%", backgroundColor: "#bea6d0ff", color: "#090505ff" }}
        >
          <h2 style={{ fontSize: "2.5rem", textAlign: "center", marginBottom: "50px" }}>
            Contact Us
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "40px",
              textAlign: "center",
            }}
          >
            {/* Head Office */}
            <div
              style={{
                background: "#fff",
                padding: "30px",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                color: "#000",
              }}
            >
              <h3 style={{ marginBottom: "20px" }}>Head Office</h3>
              <p>502, Sapphire, S.V. Road</p>
              <p>Khar West, Mumbai, 400052</p>
              <p>📞 +91 86559 25011</p>
              <p>✉ customerservice@lookssalon.net</p>
            </div>

            {/* Online Support */}
            <div
              style={{
                background: "#fff",
                padding: "30px",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                color: "#000",
              }}
            >
              <h3 style={{ marginBottom: "20px" }}>Online Support</h3>
              <p>Email: support@lookssalon.net</p>
              <p>Live Chat: Mon-Fri, 10am-6pm</p>
              <p>Customer Care: +91 98765 43210</p>
            </div>

            {/* Stay Connected */}
            <div
              style={{
                background: "#fff",
                padding: "30px",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                color: "#000",
              }}
            >
              <h3 style={{ marginBottom: "20px" }}>Stay Connected</h3>
              <p>Subscribe to get updates about promotions and events!</p>
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
        </section>
      </div>
      <Feedback />
      <Footer />
      {showBooking && <BookingForm onClose={closeBooking} />}
    </>
  );

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route
        path="/admin/dashboard"
        element={isAdminLoggedIn ? <AdminDashboard /> : <Navigate to="/admin/login" />}
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
