// Mock telemetry payload and alert evaluation.
const metricbeatSample = {
  node: "es-hot-01",
  heapUsedPct: 0.68,
  cpuLoad: 0.42,
  searchRate: 320
};

const alertRule = {
  field: "heapUsedPct",
  threshold: 0.75,
  windowMinutes: 5
};

const evaluateAlert = (metric, rule) => {
  if (metric[rule.field] >= rule.threshold) {
    return `ALERT: ${rule.field} at ${(metric[rule.field] * 100).toFixed(1)}%`;
  }
  return `Healthy: ${rule.field} at ${(metric[rule.field] * 100).toFixed(1)}%`;
};

console.log("Telemetry sample sent by Metricbeat:", metricbeatSample);
console.log("Alert evaluation:", evaluateAlert(metricbeatSample, alertRule));
