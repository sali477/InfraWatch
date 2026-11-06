// src/pages/Monitoring.jsx
import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { getRealtimeMetrics } from "../services/mockData";

export default function Monitoring() {
  const data = getRealtimeMetrics();
  return (
    <div className="bg-navy-800 p-4 rounded shadow">
      <h3 className="text-lg font-semibold text-emerald-400 mb-4">Real‑time CPU Usage</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="time" stroke="#9ca3af" />
          <YAxis stroke="#9ca3af" />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#34d399" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
