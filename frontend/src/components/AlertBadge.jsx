// src/components/AlertBadge.jsx
import React from "react";

export default function AlertBadge({ severity }) {
  const colors = {
    critical: "bg-red-600",
    warning: "bg-amber-500",
    info: "bg-sky-500",
  };
  const bg = colors[severity] || "bg-gray-500";
  const label = severity.charAt(0).toUpperCase() + severity.slice(1);
  return (
    <span className={`px-2 py-1 text-xs rounded ${bg} text-white`}>{label}</span>
  );
}
