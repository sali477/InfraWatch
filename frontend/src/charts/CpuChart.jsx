// src/charts/CpuChart.jsx
import React from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { getCpuData } from "../services/mockData";

export default function CpuChart() {
  const data = getCpuData();
  return (
    <div className="bg-navy-800 p-4 rounded shadow">
      <h3 className="text-md font-medium text-emerald-400 mb-2">CPU Usage</h3>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={data}>
          <XAxis dataKey="time" stroke="#9ca3af" />
          <YAxis stroke="#9ca3af" />
          <Tooltip />
          <Area type="monotone" dataKey="value" stroke="#34d399" fill="#34d399" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
