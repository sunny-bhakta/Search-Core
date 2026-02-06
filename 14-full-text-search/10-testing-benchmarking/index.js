function regressionCheck(expectedId, results) {
  return results.includes(expectedId);
}

console.log(regressionCheck(42, [10, 42, 55]));
// Output: true
