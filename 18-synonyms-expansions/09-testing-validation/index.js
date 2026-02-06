function testResult(passed) {
  return passed ? 'promote change' : 'rollback change';
}

console.log(testResult(true));
// Output: 'promote change'
