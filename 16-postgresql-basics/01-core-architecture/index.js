function simulateMvcc(updateCount) {
  return {
    walEntries: updateCount,
    liveTuples: updateCount,
    oldVersionsPendingVacuum: updateCount
  };
}

console.log(simulateMvcc(3));
// Output: { walEntries: 3, liveTuples: 3, oldVersionsPendingVacuum: 3 }
