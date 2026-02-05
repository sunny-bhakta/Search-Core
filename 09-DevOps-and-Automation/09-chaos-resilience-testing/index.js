function chaosTest(target) {
  return `Terminated ${target}; monitoring failover...`;
}

console.log(chaosTest('replica-1'));
// Output:
// Terminated replica-1; monitoring failover...
