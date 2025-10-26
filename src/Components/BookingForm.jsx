import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, addDoc, getDocs, updateDoc, doc, serverTimestamp, query, where } from "firebase/firestore";
import jsPDF from "jspdf";  // 👈 add this line

export default function BookingForm({ onClose, booking }) {
  const services = ["Hair", "Cosmetology", "Make-Up", "Nails"];
  const initialSlots = [
    "10:00 AM","11:00 AM","11:30 AM","12:00 PM","12:30 PM","01:00 PM","01:30 PM",
    "02:00 PM","02:30 PM","03:00 PM","03:30 PM","04:00 PM","04:30 PM","05:00 PM",
    "05:30 PM","06:00 PM","06:30 PM","07:00 PM","07:30 PM","08:00 PM","08:30 PM","09:00 PM"
  ];

  const [name, setName] = useState(booking?.name || "");
  const [email, setEmail] = useState(booking?.email || "");
  const [phone, setPhone] = useState(booking?.phone || "");
  const [date, setDate] = useState(booking?.date || "");
  const [service, setService] = useState(booking?.service || "");
  const [time, setTime] = useState(booking?.time || "");
  const [slots, setSlots] = useState(initialSlots);

  useEffect(() => {
    if (!date) return;
    const fetchBooked = async () => {
      const q = query(collection(db, "appointments"), where("date", "==", date));
      const snapshot = await getDocs(q);
      const bookedCounts = {};
      snapshot.docs.forEach(doc => {
        const t = doc.data().time;
        bookedCounts[t] = (bookedCounts[t] || 0) + 1;
      });
      setSlots(initialSlots.map(s => {
        if (booking && booking.time === s) return s;
        return bookedCounts[s] >= 2 ? null : s;
      }));
    };
    fetchBooked();
  }, [date, booking]);

  // 📄 Function to generate receipt
  const generateReceipt = (data, id) => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Booking Receipt", 70, 20);

    doc.setFontSize(12);
    doc.text(`Booking ID: ${id}`, 20, 40);
    doc.text(`Name: ${data.name}`, 20, 50);
    doc.text(`Email: ${data.email}`, 20, 60);
    doc.text(`Phone: ${data.phone}`, 20, 70);
    doc.text(`Service: ${data.service}`, 20, 80);
    doc.text(`Date: ${data.date}`, 20, 90);
    doc.text(`Time: ${data.time}`, 20, 100);

    doc.text("Thank you for booking with us!", 20, 120);
    doc.save(`Receipt_${data.name}_${id}.pdf`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !phone || !date || !service || !time) {
      alert("Please fill all fields!");
      return;
    }

    try {
      if (booking) {
        // Update existing booking
        const bookingRef = doc(db, "appointments", booking.id);
        await updateDoc(bookingRef, { name, email, phone, date, service, time });
        alert("Booking updated successfully!");
        generateReceipt({ name, email, phone, date, service, time }, booking.id);
      } else {
        // New booking
        const q = query(
          collection(db, "appointments"),
          where("date", "==", date),
          where("time", "==", time)
        );
        const snapshot = await getDocs(q);
        if (snapshot.size >= 2) {
          alert("Sorry, this time slot is full. Please choose another.");
          return;
        }

        const docRef = await addDoc(collection(db, "appointments"), {
          name,
          email,
          phone,
          service,
          date,
          time,
          createdAt: serverTimestamp()
        });

        alert("Booking successful!");
        generateReceipt({ name, email, phone, date, service, time }, docRef.id);
      }

      onClose();
    } catch (err) {
      console.error(err);
      alert("Operation failed!");
    }
  };

  return (
    <div style={{
      position:"fixed",top:0,left:0,width:"100%",height:"100%",
      background:"rgba(0,0,0,0.7)",display:"flex",alignItems:"center",
      justifyContent:"center",zIndex:9999
    }}>
      <div style={{
        background:"#f6ebf8ff",padding:"30px",borderRadius:"10px",
        width:"90%",maxWidth:"500px",position:"relative"
      }}>
        <button
          onClick={onClose}
          style={{position:"absolute",top:"10px",right:"15px",background:"transparent",border:"none",fontSize:"1.5rem",cursor:"pointer"}}
        >
          &times;
        </button>

        <h2>{booking ? "Edit Booking" : "Book Your Appointment"}</h2>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" value={name} onChange={e=>setName(e.target.value)} required style={{width:"100%",padding:"10px",marginBottom:"10px"}} />
          <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required style={{width:"100%",padding:"10px",marginBottom:"10px"}} />
          <input type="tel" placeholder="Phone" value={phone} onChange={e=>setPhone(e.target.value)} required style={{width:"100%",padding:"10px",marginBottom:"10px"}} />
          <input type="date" value={date} onChange={e=>setDate(e.target.value)} required style={{width:"100%",padding:"10px",marginBottom:"10px"}} />

          <select value={service} onChange={e=>setService(e.target.value)} required style={{width:"100%",padding:"10px",marginBottom:"10px"}}>
            <option value="" disabled>Select Service</option>
            {services.map((s,i)=><option key={i} value={s}>{s}</option>)}
          </select>

          <select value={time} onChange={e=>setTime(e.target.value)} required style={{width:"100%",padding:"10px",marginBottom:"10px"}}>
            <option value="" disabled>Select Time Slot</option>
            {slots.map((s,i)=>s && <option key={i} value={s}>{s}</option>)}
          </select>

          <button type="submit" style={{width:"100%",padding:"10px",background:"#ff3366",color:"#fff",border:"none",borderRadius:"5px",cursor:"pointer"}}>
            {booking ? "Save Changes" : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
