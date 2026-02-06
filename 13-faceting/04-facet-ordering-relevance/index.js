function orderFacetValues(counts) {
  return Object.entries(counts)
    .filter(([, count]) => count >= 5)
    .sort((a, b) => b[1] - a[1])
    .map(([name]) => name);
}

console.log(orderFacetValues({ Alpha: 120, Beta: 15, Gamma: 80 }));
// Output: ['Alpha', 'Gamma', 'Beta']
