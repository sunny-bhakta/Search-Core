const costPerQuery = { tenantA: 0.05, tenantB: 0.12 };

function flagHighCost(costMap, limit) {
  return Object.entries(costMap)
    .filter(([, cost]) => cost > limit)
    .map(([tenant]) => tenant);
}

console.log('Tenants over $0.08/query:', flagHighCost(costPerQuery, 0.08));
// Output:
// Tenants over $0.08/query: tenantB
