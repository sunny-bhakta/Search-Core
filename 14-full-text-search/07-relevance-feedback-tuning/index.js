function ctrDelta(oldCtr, newCtr) {
  const delta = +(newCtr - oldCtr).toFixed(2);
  return { oldCtr, newCtr, delta, alert: delta < -0.05 };
}

console.log(ctrDelta(0.45, 0.3));
// Output: { oldCtr: 0.45, newCtr: 0.3, delta: -0.15, alert: true }
