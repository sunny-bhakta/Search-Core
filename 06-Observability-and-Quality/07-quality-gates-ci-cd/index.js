function qualityGate(resultsCount) {
  if (resultsCount === 0) {
    return 'Fail gate: zero results detected.';
  }
  return 'Pass gate: ready to deploy.';
}

console.log(qualityGate(0));
// Output:
// Fail gate: zero results detected.
