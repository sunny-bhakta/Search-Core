// Index Maintenance
// Simulate rolling log buckets with retention and alias swaps.

const initialBuckets = [
  { name: 'logs_2024-05-01', sizeGb: 2, status: 'sealed' },
  { name: 'logs_2024-05-02', sizeGb: 3, status: 'sealed' },
  { name: 'logs_2024-05-03', sizeGb: 1, status: 'open' },
];

const events = [
  { day: '2024-05-03', sizeGb: 0.5 },
  { day: '2024-05-04', sizeGb: 0.2 },
];

const RETENTION_DAYS = 3;

function cloneBuckets(buckets) {
  return buckets.map((bucket) => ({ ...bucket }));
}

function ingestEvents(buckets, incoming) {
  const next = cloneBuckets(buckets);
  incoming.forEach(({ day, sizeGb }) => {
    let bucket = next.find((b) => b.name === `logs_${day}`);
    if (!bucket) {
      bucket = { name: `logs_${day}`, sizeGb: 0, status: 'open' };
      next.push(bucket);
    }
    bucket.sizeGb += sizeGb;
  });
  return next;
}

function enforceRetention(buckets) {
  const keep = buckets.filter((bucket) => {
    const day = bucket.name.replace('logs_', '');
    const maxDay = buckets
      .map((b) => b.name.replace('logs_', ''))
      .sort()
      .pop();
    const age = Math.floor(
      (new Date(`${maxDay}T00:00:00Z`) - new Date(`${day}T00:00:00Z`)) /
        (1000 * 60 * 60 * 24)
    );
    return age < RETENTION_DAYS;
  });
  return keep;
}

function updateAlias(buckets) {
  const aliasTargets = buckets
    .map((b) => b.name)
    .sort()
    .slice(-RETENTION_DAYS);
  return aliasTargets;
}

function IndexMaintenanceDemo() {
  console.log('Index Maintenance Demo');
  console.log('======================\n');

  console.log('Initial buckets');
  console.table(initialBuckets);

  const postIngest = ingestEvents(initialBuckets, events);
  console.log('\nAfter ingest');
  console.table(postIngest);

  const postRetention = enforceRetention(postIngest);
  console.log('\nAfter retention policy (keep last 3 days)');
  console.table(postRetention);

  const aliasTargets = updateAlias(postRetention);
  console.log('\nAlias `current_logs` now points to:', aliasTargets);

  return { postIngest, postRetention, aliasTargets };
}

if (require.main === module) {
  IndexMaintenanceDemo();
}

/* Sample Output (node index-maintenance.js)

Index Maintenance Demo
======================

Initial buckets
┌─────────┬──────────────────┬────────┬──────────┐
│ (index) │       name       │ sizeGb │ status   │
├─────────┼──────────────────┼────────┼──────────┤
│    0    │ 'logs_2024-05-01'│   2    │ 'sealed' │
│    1    │ 'logs_2024-05-02'│   3    │ 'sealed' │
│    2    │ 'logs_2024-05-03'│   1    │ 'open'   │
└─────────┴──────────────────┴────────┴──────────┘

After ingest
┌─────────┬──────────────────┬────────┬──────────┐
│ (index) │       name       │ sizeGb │ status   │
├─────────┼──────────────────┼────────┼──────────┤
│    0    │ 'logs_2024-05-01'│   2    │ 'sealed' │
│    1    │ 'logs_2024-05-02'│   3    │ 'sealed' │
│    2    │ 'logs_2024-05-03'│  1.5   │ 'open'   │
│    3    │ 'logs_2024-05-04'│  0.2   │ 'open'   │
└─────────┴──────────────────┴────────┴──────────┘

After retention policy (keep last 3 days)
┌─────────┬──────────────────┬────────┬──────────┐
│ (index) │       name       │ sizeGb │ status   │
├─────────┼──────────────────┼────────┼──────────┤
│    0    │ 'logs_2024-05-02'│   3    │ 'sealed' │
│    1    │ 'logs_2024-05-03'│  1.5   │ 'open'   │
│    2    │ 'logs_2024-05-04'│  0.2   │ 'open'   │
└─────────┴──────────────────┴────────┴──────────┘

Alias `current_logs` now points to: [ 'logs_2024-05-02', 'logs_2024-05-03', 'logs_2024-05-04' ]

*/

module.exports = { IndexMaintenanceDemo, ingestEvents, enforceRetention, updateAlias };
