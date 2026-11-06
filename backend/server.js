
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
const PROMETHEUS_URL = process.env.PROMETHEUS_URL || "http://localhost:9090";
async function queryPrometheus(query) {
  const url = `${PROMETHEUS_URL}/api/v1/query?query=${encodeURIComponent(query)}`;
  const response = await fetch(url);
  const data = await response.json();
  return parseFloat(data.data.result[0].value[1]);
}
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    message: "InfraWatch Backend is running",
    timestamp: new Date()
  });
});
app.get("/api/metrics/cpu", async (req, res) => {
  try {
    const query = '100 - (avg(rate(node_cpu_seconds_total{mode="idle"}[1m])) * 100)';
    const url = `${PROMETHEUS_URL}/api/v1/query?query=${encodeURIComponent(query)}`;

    const response = await fetch(url);
    const data = await response.json();

    const value = parseFloat(data.data.result[0].value[1]);
    res.json({ metric: "cpu", value: Number(value.toFixed(2)), unit: "%" });
  } catch (error) {
    res.status(500).json({ error: "Cannot reach Prometheus" });
  }
});
app.get("/api/metrics/ram", async (req, res) => {
  try {
    const query = "(1 - (node_memory_MemAvailable_bytes / node_memory_MemTotal_bytes)) * 100";
    const url = `${PROMETHEUS_URL}/api/v1/query?query=${encodeURIComponent(query)}`;

    const response = await fetch(url);
    const data = await response.json();

    const value = parseFloat(data.data.result[0].value[1]);
    res.json({ metric: "ram", value: Number(value.toFixed(2)), unit: "%" });
  } catch (error) {
    res.status(500).json({ error: "Cannot reach Prometheus" });
  } 
});
app.get("/api/metrics/disk", async (req, res) => {
  try {
    const query = 'max(1 - (node_filesystem_avail_bytes{device="/dev/sdd"} / node_filesystem_size_bytes{device="/dev/sdd"})) * 100';
    const value = await queryPrometheus(query);
    res.json({ metric: "disk", value: Number(value.toFixed(2)), unit: "%" });
  } catch (error) {
    res.status(500).json({ error: "Cannot reach Prometheus" });
  }
});
app.listen(PORT, () => {
  console.log(`InfraWatch API running on port ${PORT}`);
});
