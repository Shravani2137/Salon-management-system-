import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-white h-screen shadow-lg flex flex-col p-6 sticky top-0">
      <h2 className="text-2xl font-bold mb-10 text-center">Salon Admin</h2>
      <nav className="flex flex-col gap-4">
        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded hover:bg-purple-100 transition ${
              isActive ? "bg-purple-200 font-semibold" : ""
            }`
          }
        >
          🏠 Overview
        </NavLink>
        <NavLink
          to="/admin/dashboard/bookings"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded hover:bg-purple-100 transition ${
              isActive ? "bg-purple-200 font-semibold" : ""
            }`
          }
        >
          📅 Bookings
        </NavLink>
        <NavLink
          to="/admin/dashboard/users"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded hover:bg-purple-100 transition ${
              isActive ? "bg-purple-200 font-semibold" : ""
            }`
          }
        >
          👥 Users
        </NavLink>
        <NavLink
          to="/admin/dashboard/services"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded hover:bg-purple-100 transition ${
              isActive ? "bg-purple-200 font-semibold" : ""
            }`
          }
        >
          💆 Services
        </NavLink>
        <NavLink
          to="/admin/dashboard/settings"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded hover:bg-purple-100 transition ${
              isActive ? "bg-purple-200 font-semibold" : ""
            }`
          }
        >
          ⚙️ Settings
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
