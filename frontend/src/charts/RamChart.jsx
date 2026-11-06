// src/charts/RamChart.jsx
import React, { useState, useEffect } from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const API_URL = "http://localhost:5000";

export default function RamChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchRam() {
      try {
        const res = await fetch(`${API_URL}/api/metrics/ram`);
        const json = await res.json();
        const point = {
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" }),
          value: json.value,
        };
        setData((prev) => [...prev, point].slice(-12));
      } catch (error) {
        console.error("RAM fetch failed:", error);
      }
    }

    fetchRam();
    const interval = setInterval(fetchRam, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-navy-800 p-4 rounded shadow">
      <h3 className="text-md font-medium text-emerald-400 mb-2">RAM Usage</h3>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={data}>
          <XAxis dataKey="time" stroke="#9ca3af" />
          <YAxis stroke="#9ca3af" />
          <Tooltip />
          <Area type="monotone" dataKey="value" stroke="#60a5fa" fill="#60a5fa" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}