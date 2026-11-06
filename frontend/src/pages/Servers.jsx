// src/pages/Servers.jsx
import React from "react";
import StatusBadge from "../components/StatusBadge";
import { getServers } from "../services/mockData";

export default function Servers() {
  const servers = getServers();
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-700">
        <thead className="bg-navy-800">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-300">Name</th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-300">IP</th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-300">OS</th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-300">CPU %</th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-300">RAM %</th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-300">Status</th>
          </tr>
        </thead>
        <tbody className="bg-navy-700">
          {servers.map((s) => (
            <tr key={s.id} className="border-b border-navy-600">
              <td className="px-4 py-2">{s.name}</td>
              <td className="px-4 py-2">{s.ip}</td>
              <td className="px-4 py-2">{s.os}</td>
              <td className="px-4 py-2">{s.cpu}%</td>
              <td className="px-4 py-2">{s.ram}%</td>
              <td className="px-4 py-2"><StatusBadge online={s.online} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
