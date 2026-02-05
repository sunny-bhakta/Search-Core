const alerts = [];

function addAlert(name, threshold) {
  alerts.push({ name, threshold });
  return alerts[alerts.length - 1];
}

console.log(addAlert('p95_latency', '300ms/5m'));
// Output:
// { name: 'p95_latency', threshold: '300ms/5m' }
