function listSources(sources) {
  return sources.map(source => ({ name: source.name, schedule: source.schedule }));
}

const catalog = listSources([
  { name: 'ERP-DB', schedule: '15m' },
  { name: 'CMS', schedule: 'webhook' }
]);

console.log(catalog);
// Output: [ { name: 'ERP-DB', schedule: '15m' }, { name: 'CMS', schedule: 'webhook' } ]
