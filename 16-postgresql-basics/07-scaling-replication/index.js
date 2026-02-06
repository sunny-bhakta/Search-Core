function chooseReplication(workload) {
  if (workload === 'read-heavy') return 'streaming replica';
  if (workload === 'integration') return 'logical replication';
  return 'partitioning';
}

console.log(chooseReplication('read-heavy'));
// Output: 'streaming replica'
