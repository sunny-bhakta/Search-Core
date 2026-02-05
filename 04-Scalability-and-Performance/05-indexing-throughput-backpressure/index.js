const ingestLimits = {
  safeDocsPerMin: 1100,
};

const sources = [
  { name: 'batch-catalog', rate: 1000 },
  { name: 'streaming-prices', rate: 200 },
];

function applyBackpressure(sourceList, limit) {
  const totalRate = sourceList.reduce((sum, src) => sum + src.rate, 0);
  if (totalRate <= limit.safeDocsPerMin) {
    return { totalRate, adjustedSources: sourceList, throttled: false };
  }
  const overflow = totalRate - limit.safeDocsPerMin;
  const batch = sourceList.find((src) => src.name === 'batch-catalog');
  const newBatchRate = Math.max(batch.rate - overflow, 0);
  const adjustedSources = sourceList.map((src) =>
    src.name === 'batch-catalog' ? { ...src, rate: newBatchRate } : src
  );
  return { totalRate, overflow, adjustedSources, throttled: true };
}

function logDecision(result) {
  console.log(`Combined rate: ${result.totalRate} docs/min`);
  if (result.throttled) {
    console.log('Backpressure applied. Updated rates:');
  } else {
    console.log('No throttling needed. Rates:');
  }
  console.table(result.adjustedSources);
}

if (require.main === module) {
  const decision = applyBackpressure(sources, ingestLimits);
  logDecision(decision);
}

module.exports = { applyBackpressure, ingestLimits, sources };

/*
Sample output
=============
Combined rate: 1200 docs/min
Backpressure applied. Updated rates:
┌─────────┬───────────────────┬───────┐
│ (index) │       name        │ rate  │
├─────────┼───────────────────┼───────┤
│    0    │ 'batch-catalog'   │ 900   │
│    1    │ 'streaming-prices'│ 200   │
└─────────┴───────────────────┴───────┘
*/
