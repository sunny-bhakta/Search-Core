function scheduleJob(name, cron) {
  return { name, cron, status: 'scheduled' };
}

console.log(scheduleJob('snapshot-cleanup', '0 2 * * 0'));
// Output:
// { name: 'snapshot-cleanup', cron: '0 2 * * 0', status: 'scheduled' }
