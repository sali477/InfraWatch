// src/services/mockData.js
// Utility to generate time series data
function genSeries(count, max) {
  const now = Date.now();
  return Array.from({ length: count }, (_, i) => ({
    time: new Date(now - (count - i) * 60000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    value: Math.round(Math.random() * max),
  }));
}

export function getOverviewData() {
  return {
    totalServers: 42,
    onlineServers: 37,
    offlineServers: 5,
    activeAlerts: 8,
  };
}

export function getServers() {
  return Array.from({ length: 10 }, (_, i) => ({
    id: i,
    name: `srv-${i + 1}`,
    ip: `10.0.0.${i + 1}`,
    os: i % 2 === 0 ? 'Ubuntu 22.04' : 'Windows Server 2022',
    cpu: Math.round(Math.random() * 100),
    ram: Math.round(Math.random() * 100),
    online: Math.random() > 0.2,
  }));
}

export function getAlerts() {
  const severities = ['critical', 'warning', 'info'];
  return Array.from({ length: 6 }, (_, i) => ({
    id: i,
    severity: severities[i % 3],
    timestamp: new Date(Date.now() - i * 3600000).toLocaleString(),
    message: `Sample ${severities[i % 3]} alert #${i + 1}`,
  }));
}

export function getCpuData() { return genSeries(12, 100); }
export function getRamData() { return genSeries(12, 100); }
export function getDiskData() { return genSeries(12, 100); }
export function getNetworkData() { return genSeries(12, 200); }
export function getRealtimeMetrics() { return genSeries(30, 100); }
