// src/charts/NetworkChart.jsx
import React from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { getNetworkData } from "../services/mockData";

export default function NetworkChart() {
  const data = getNetworkData();
  return (
    <div className="bg-navy-800 p-4 rounded shadow">
      <h3 className="text-md font-medium text-emerald-400 mb-2">Network Traffic</h3>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={data}>
          <XAxis dataKey="time" stroke="#9ca3af" />
          <YAxis stroke="#9ca3af" />
          <Tooltip />
          <Area type="monotone" dataKey="value" stroke="#f87171" fill="#f87171" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
