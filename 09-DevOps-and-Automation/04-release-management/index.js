const releases = [];

function scheduleRelease(name, date) {
  releases.push({ name, date, status: 'planned' });
  return releases[releases.length - 1];
}

console.log(scheduleRelease('search-2026.02.05', '2026-02-05'));
// Output:
// { name: 'search-2026.02.05', date: '2026-02-05', status: 'planned' }
