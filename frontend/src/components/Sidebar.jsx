// src/components/Sidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { Home, BarChart2, Server, Bell, Monitor } from "lucide-react";

const links = [
  { to: "/", icon: <Home size={20} />, label: "Overview" },
  { to: "/metrics", icon: <BarChart2 size={20} />, label: "System Metrics" },
  { to: "/servers", icon: <Server size={20} />, label: "Servers" },
  { to: "/alerts", icon: <Bell size={20} />, label: "Alerts" },
  { to: "/monitoring", icon: <Monitor size={20} />, label: "Monitoring" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-navy-800 p-4 flex flex-col">
      <h1 className="text-2xl font-bold text-emerald-400 mb-8">InfraWatch</h1>
      <nav className="flex-1 space-y-2">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `flex items-center p-2 rounded hover:bg-navy-700 ${isActive ? "bg-navy-700 text-emerald-400" : "text-gray-300"}`
            }
          >
            {link.icon}
            <span className="ml-3">{link.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
