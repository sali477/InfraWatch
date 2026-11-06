// src/pages/Alerts.jsx
import React from "react";
import AlertBadge from "../components/AlertBadge";
import { getAlerts } from "../services/mockData";

export default function Alerts() {
  const alerts = getAlerts();
  return (
    <div className="space-y-4">
      {alerts.map((a) => (
        <div key={a.id} className="bg-navy-800 p-4 rounded shadow">
          <div className="flex justify-between items-center mb-2">
            <AlertBadge severity={a.severity} />
            <span className="text-sm text-gray-400">{a.timestamp}</span>
          </div>
          <p className="text-gray-200">{a.message}</p>
        </div>
      ))}
    </div>
  );
}
