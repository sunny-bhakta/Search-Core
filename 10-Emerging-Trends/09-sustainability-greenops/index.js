function carbonAwareSchedule(job, regions) {
  const optimal = regions.sort((a, b) => a.carbonIntensity - b.carbonIntensity)[0];
  return {
    job,
    chosenRegion: optimal.name,
    carbonIntensity: optimal.carbonIntensity,
    note: 'Run batch job during low-carbon window to save energy.'
  };
}

const plan = carbonAwareSchedule('nightly-reindex', [
  { name: 'us-east', carbonIntensity: 420 },
  { name: 'us-west', carbonIntensity: 180 },
  { name: 'eu-north', carbonIntensity: 230 }
]);

console.log(plan);
// Output: {
//   job: 'nightly-reindex',
//   chosenRegion: 'us-west',
//   carbonIntensity: 180,
//   note: 'Run batch job during low-carbon window to save energy.'
// }
