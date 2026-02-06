// Demonstrates bucket + metric aggregation style calculations.
const orders = [
  { date: "2025-01-01", value: 120 },
  { date: "2025-01-01", value: 80 },
  { date: "2025-01-02", value: 90 },
  { date: "2025-01-02", value: 130 },
  { date: "2025-01-03", value: 70 }
];

const bucketByDate = orders.reduce((acc, order) => {
  acc[order.date] = acc[order.date] || [];
  acc[order.date].push(order.value);
  return acc;
}, {});

const bucketMetrics = Object.entries(bucketByDate).map(([date, values]) => {
  const sum = values.reduce((a, b) => a + b, 0);
  const avg = sum / values.length;
  return { date, docCount: values.length, avgValue: avg };
});

const derivative = bucketMetrics.map((bucket, idx) => {
  if (idx === 0) return { date: bucket.date, change: null };
  const prev = bucketMetrics[idx - 1];
  return { date: bucket.date, change: bucket.avgValue - prev.avgValue };
});

console.log("Bucket metrics:", bucketMetrics);
console.log("Derivative (avg change):", derivative);
