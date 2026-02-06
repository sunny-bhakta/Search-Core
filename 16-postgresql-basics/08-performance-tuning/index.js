function estimatePlan(hasIndex) {
  return hasIndex ? 'Index Scan' : 'Seq Scan';
}

console.log(estimatePlan(true));
// Output: 'Index Scan'
