import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, addDoc, getDocs, serverTimestamp } from "firebase/firestore";

export default function BookingForm({ onClose }) {
  const services = ["Hair", "Cosmetology", "Make-Up", "Nails"];
  const initialSlots = [
    "10:00 AM","11:00 AM","11:30 AM","12:00 PM","12:30 PM","01:00 PM","01:30 PM",
    "02:00 PM","02:30 PM","03:00 PM","03:30 PM","04:00 PM","04:30 PM","05:00 PM",
    "05:30 PM","06:00 PM","06:30 PM","07:00 PM","07:30 PM","08:00 PM","08:30 PM","09:00 PM"
  ];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [service, setService] = useState("");
  const [time, setTime] = useState("");
  const [slots, setSlots] = useState(initialSlots);

  // Fetch booked slots for selected date
  useEffect(() => {
    if (!date) return;

    const fetchBooked = async () => {
      const snapshot = await getDocs(collection(db, "appointments"));
      const bookedTimes = snapshot.docs
        .map(doc => doc.data())
        .filter(a => a.date === date)
        .map(a => a.time);

      setSlots(initialSlots.map(s => bookedTimes.includes(s) ? null : s));
    };

    fetchBooked();
  }, [date]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !phone || !date || !service || !time) {
      alert("Please fill all fields!");
      return;
    }

    try {
      await addDoc(collection(db, "appointments"), {
        name, email, phone, service, date, time, createdAt: serverTimestamp()
      });
      alert("Booking successful!");
      onClose();
    } catch (err) {
      console.error(err);
      alert("Booking failed!");
    }
  };

  return (
    <div style={{position:"fixed",top:0,left:0,width:"100%",height:"100%",background:"rgba(0,0,0,0.7)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9999}}>
      <div style={{background:"#f6ebf8ff",padding:"30px",borderRadius:"10px",width:"90%",maxWidth:"500px",position:"relative"}}>
        <button onClick={onClose} style={{position:"absolute",top:"10px",right:"15px",background:"transparent",border:"none",fontSize:"1.5rem",cursor:"pointer"}}>&times;</button>
        <h2>Book Your Appointment</h2>
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

          <button type="submit" style={{width:"100%",padding:"10px",background:"#ff3366",color:"#fff",border:"none",borderRadius:"5px",cursor:"pointer"}}>Submit</button>
        </form>
      </div>
    </div>
  );
}
