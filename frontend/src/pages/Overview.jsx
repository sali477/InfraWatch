// src/pages/Overview.jsx
import React from "react";
import DashboardCard from "../components/DashboardCard";
import { Server, Monitor, AlertCircle } from "lucide-react";
import { getOverviewData, getServers, getAlerts, getRealtimeMetrics } from "../services/mockData";
import MetricChart from "../charts/MetricChart";
import NetworkChart from "../charts/NetworkChart";

export default function Overview() {
  const { totalServers, onlineServers, offlineServers, activeAlerts } = getOverviewData();
  const servers = getServers();
  const alerts = getAlerts();
  const realtime = getRealtimeMetrics();

  return (
    <div className="space-y-6">
      {/* Top summary cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <DashboardCard
          title="Total Servers"
          value={totalServers}
          icon={<Server size={20} className="text-emerald-400" />}
        />
        <DashboardCard
          title="Online Servers"
          value={onlineServers}
          icon={<Monitor size={20} className="text-emerald-400" />}
        />
        <DashboardCard
          title="Offline Servers"
          value={offlineServers}
          icon={<Monitor size={20} className="text-red-500" />}
        />
        <DashboardCard
          title="Active Alerts"
          value={activeAlerts}
          icon={<AlertCircle size={20} className="text-amber-400" />}
        />
      </div>

      {/* Charts grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <MetricChart title="CPU Usage"  endpoint="/api/metrics/cpu"  color="#34d399" />
        <MetricChart title="RAM Usage"  endpoint="/api/metrics/ram"  color="#60a5fa" />
        <MetricChart title="Disk Usage" endpoint="/api/metrics/disk" color="#a78bfa" />
        <NetworkChart />
      </div>

      {/* Bottom sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Server status list */}
        <div className="bg-navy-800 p-4 rounded shadow overflow-auto max-h-80">
          <h3 className="text-lg font-semibold text-emerald-400 mb-2">Server Status</h3>
          <table className="w-full text-sm text-gray-200">
            <thead className="text-xs uppercase text-gray-400">
              <tr>
                <th className="px-2 py-1 text-left">Name</th>
                <th className="px-2 py-1 text-left">IP</th>
                <th className="px-2 py-1 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {servers.map((s) => (
                <tr key={s.id} className="border-t border-gray-700">
                  <td className="px-2 py-1">{s.name}</td>
                  <td className="px-2 py-1">{s.ip}</td>
                  <td className="px-2 py-1">
                    <span
                      className={`px-2 py-0.5 text-xs rounded ${s.online ? "bg-emerald-600" : "bg-red-600"}`}
                    >
                      {s.online ? "Online" : "Offline"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Recent alerts */}
        <div className="bg-navy-800 p-4 rounded shadow overflow-auto max-h-80">
          <h3 className="text-lg font-semibold text-emerald-400 mb-2">Recent Alerts</h3>
          <ul className="space-y-2">
            {alerts.map((a) => (
              <li key={a.id} className="border-b border-gray-700 pb-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="capitalize text-gray-200">
                    {a.severity} alert
                  </span>
                  <span className="text-gray-400">{a.timestamp}</span>
                </div>
                <p className="text-gray-300 mt-1">{a.message}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Recent activity */}
        <div className="bg-navy-800 p-4 rounded shadow overflow-auto max-h-80">
          <h3 className="text-lg font-semibold text-emerald-400 mb-2">Recent Activity</h3>
          <ul className="space-y-2">
            {realtime.slice(0, 8).map((m, idx) => (
              <li key={idx} className="flex justify-between text-sm text-gray-200">
                <span>{m.time}</span>
                <span>{m.value}%</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
