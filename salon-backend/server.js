const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config(); // ✅ for .env support

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// ✅ MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "bhangale@325", // fallback if no .env
  database: process.env.DB_NAME || "salon",
});

db.connect((err) => {
  if (err) {
    console.error("❌ MySQL connection error:", err.message);
    process.exit(1); // stop app if DB fails
  }
  console.log("✅ Connected to MySQL database!");
});

// ✅ Root route (to test server)
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// ✅ Get all bookings
app.get("/bookings", (req, res) => {
  db.query("SELECT * FROM bookings", (err, results) => {
    if (err) {
      console.error("❌ Error fetching bookings:", err.message);
      return res.status(500).json({ error: "Database error" });
    }
    res.json(results);
  });
});

// ✅ Add a new booking
app.post("/bookings", (req, res) => {
  const { name, email, phone, date, service, time, notes } = req.body;

  if (!name || !email || !phone || !date || !service || !time) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const sql =
    "INSERT INTO bookings (name, email, phone, date, service, time, notes) VALUES (?, ?, ?, ?, ?, ?, ?)";
  db.query(sql, [name, email, phone, date, service, time, notes], (err, result) => {
    if (err) {
      console.error("❌ Error inserting booking:", err.message);
      return res.status(500).json({ error: "Database error" });
    }
    res.json({ message: "✅ Booking confirmed!", id: result.insertId });
  });
});

// ✅ Start server
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
