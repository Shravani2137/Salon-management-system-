import React, { useEffect, useState } from "react";

const BookingList = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(storedBookings);
  }, []);

  if (bookings.length === 0) {
    return <p>No bookings yet.</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Email</th>
            <th className="px-4 py-2 border">Phone</th>
            <th className="px-4 py-2 border">Service</th>
            <th className="px-4 py-2 border">Date</th>
            <th className="px-4 py-2 border">Time</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((b, index) => (
            <tr key={index} className="text-center">
              <td className="px-4 py-2 border">{b.name}</td>
              <td className="px-4 py-2 border">{b.email}</td>
              <td className="px-4 py-2 border">{b.phone}</td>
              <td className="px-4 py-2 border">{b.service}</td>
              <td className="px-4 py-2 border">{b.date}</td>
              <td className="px-4 py-2 border">{b.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingList;
