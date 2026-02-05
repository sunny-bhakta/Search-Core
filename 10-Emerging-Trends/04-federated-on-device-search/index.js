function federatedBoost(localQueries) {
  const counts = localQueries.reduce((map, query) => {
    map[query] = (map[query] || 0) + 1;
    return map;
  }, {});
  const topQuery = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
  return {
    suggestion: topQuery,
    gradient: { workflowQueries: 0.2 },
    note: 'Send only gradient back to server, keep raw data on device.'
  };
}

console.log(federatedBoost(['merge pdf', 'add signature', 'merge pdf']));
// Output: { suggestion: 'merge pdf', gradient: { workflowQueries: 0.2 }, note: 'Send only gradient back to server, keep raw data on device.' }
