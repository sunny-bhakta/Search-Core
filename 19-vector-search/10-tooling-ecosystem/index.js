function fallbackPlan(vectorHealthy) {
  return vectorHealthy ? 'use hybrid search' : 'switch to keyword-only mode';
}

console.log(fallbackPlan(false));
// Output: 'switch to keyword-only mode'
