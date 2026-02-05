function needsMaintenance(segmentCount, goal) {
  return segmentCount > goal ? 'schedule merge' : 'ok';
}

console.log(needsMaintenance(120, 80));
// Output:
// schedule merge
