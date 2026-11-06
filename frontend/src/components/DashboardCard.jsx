// src/components/DashboardCard.jsx
import React from "react";

export default function DashboardCard({ title, value, icon, children }) {
  return (
    <div className="bg-navy-800 rounded-lg p-4 shadow hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-medium text-gray-400">{title}</h3>
        {icon && <span className="text-emerald-400">{icon}</span>}
      </div>
      {value !== undefined ? (
        <p className="text-2xl font-bold text-emerald-400">{value}</p>
      ) : (
        children
      )}
    </div>
  );
}
