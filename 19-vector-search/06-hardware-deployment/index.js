function capacityPlan(qps) {
  if (qps > 300) {
    return { hardware: 'GPU', batchSize: 16 };
  }
  return { hardware: 'CPU', batchSize: 4 };
}

console.log(capacityPlan(500));
// Output: { hardware: 'GPU', batchSize: 16 }
