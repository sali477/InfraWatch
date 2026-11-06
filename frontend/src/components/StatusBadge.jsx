// src/components/StatusBadge.jsx
import React from "react";

export default function StatusBadge({ online }) {
  const color = online ? "bg-emerald-500" : "bg-red-600";
  const label = online ? "Online" : "Offline";
  return (
    <span className={`px-2 py-1 text-xs rounded ${color} text-white`}>{label}</span>
  );
}
