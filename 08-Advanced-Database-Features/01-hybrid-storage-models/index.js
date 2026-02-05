const tiers = [
  { name: 'hot', latencyMs: 10 },
  { name: 'warm', latencyMs: 80 },
  { name: 'cold', latencyMs: 400 }
];

function pickTier(ageDays) {
  if (ageDays <= 30) return tiers[0];
  if (ageDays <= 180) return tiers[1];
  return tiers[2];
}

const docTier = pickTier(200);
console.log(`Document lives in ${docTier.name} tier (~${docTier.latencyMs} ms)`);
// Output:
// Document lives in cold tier (~400 ms)
