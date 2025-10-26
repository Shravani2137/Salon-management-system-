import React, { useEffect, useState } from "react";
import { collection, getDocs, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("dashboard"); // controls section
  const [appointments, setAppointments] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: ""
  });

  // Fetch appointments and sort newest first
  useEffect(() => {
    const fetchAppointments = async () => {
      const snapshot = await getDocs(collection(db, "appointments"));
      const list = snapshot.docs
        .map(doc => ({ id: doc.id, ...doc.data() }))
        .sort((a, b) => b.createdAt?.seconds - a.createdAt?.seconds);
      setAppointments(list);
    };
    fetchAppointments();
  }, []);

  // Handle form input
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Add new appointment
  const handleAddAppointment = async e => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "appointments"), {
        ...formData,
        createdAt: serverTimestamp()
      });
      setAppointments([{ id: docRef.id, ...formData }, ...appointments]);
      setFormData({ name: "", email: "", phone: "", service: "", date: "", time: "" });
      setShowModal(false);
    } catch (err) {
      console.error("Error adding appointment:", err);
    }
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">Admin dashboard</div>
        <nav className="sidebar-nav">
          <ul>
            <li onClick={() => setActiveSection("dashboard")}>Dashboard</li>
            <li onClick={() => setActiveSection("appointments")}>Appointments</li>
            <li onClick={() => setActiveSection("staff")}>Staff</li>
            <li onClick={() => setActiveSection("services")}>Services</li>
            <li onClick={() => setActiveSection("reports")}>Reports</li>
            <li onClick={() => setActiveSection("settings")}>Settings</li>
          </ul>
        </nav>
        <div className="sidebar-footer">Admin Panel v1.0</div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {activeSection === "dashboard" && (
          <div>
            <div className="main-header">
              <h1>Dashboard</h1>
            </div>
            <div className="metrics-cards">
              <div className="card">
                <h3>Total Appointments</h3>
                <p>{appointments.length}</p>
              </div>
              {/* You can add more metrics here */}
            </div>
          </div>
        )}

        {activeSection === "appointments" && (
          <div>
            <div className="main-header">
              <h1>Appointments</h1>
              <button className="add-btn" onClick={() => setShowModal(true)}>+ Add Booking</button>
            </div>

            <div className="recent-bookings">
              <h2>All Appointments</h2>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Service</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Email</th>
                    <th>Phone</th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.map(app => (
                    <tr key={app.id}>
                      <td>{app.id}</td>
                      <td>{app.name}</td>
                      <td>{app.service}</td>
                      <td>{app.date}</td>
                      <td>{app.time}</td>
                      <td>{app.email}</td>
                      <td>{app.phone}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Add Booking Modal */}
        {showModal && (
          <div className="modal-overlay">
            <div className="modal">
              <h2>Add New Appointment</h2>
              <form onSubmit={handleAddAppointment}>
                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
                <input type="text" name="service" placeholder="Service" value={formData.service} onChange={handleChange} required />
                <input type="date" name="date" value={formData.date} onChange={handleChange} required />
                <input type="time" name="time" value={formData.time} onChange={handleChange} required />
                <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                  <button type="submit">Add Appointment</button>
                  <button type="button" onClick={() => setShowModal(false)}>Cancel</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
