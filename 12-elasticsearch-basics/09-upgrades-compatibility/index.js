// Mimics upgrade planning steps.
const deprecations = [
  { index: "logs-2023", issue: "uses deprecated analyzer" },
  { cluster: true, issue: "scripted metric referencing removed API" }
];

const rollingPlan = [
  { node: "es-hot-01", action: "drain + upgrade" },
  { node: "es-hot-02", action: "drain + upgrade" },
  { node: "es-warm-01", action: "upgrade" }
];

const compatibilityHeaders = {
  clientVersion: "8.12",
  clusterVersion: "8.13",
  status: "supported"
};

console.log("Deprecation report:", deprecations);
console.log("Rolling upgrade plan:", rollingPlan);
console.log("Compatibility headers:", compatibilityHeaders);
