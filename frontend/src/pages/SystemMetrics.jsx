// src/pages/SystemMetrics.jsx
import React from "react";
import CpuChart from "../charts/CpuChart";
import RamChart from "../charts/RamChart";
import DiskChart from "../charts/DiskChart";
import NetworkChart from "../charts/NetworkChart";

export default function SystemMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <CpuChart />
      <RamChart />
      <DiskChart />
      <NetworkChart />
    </div>
  );
}
