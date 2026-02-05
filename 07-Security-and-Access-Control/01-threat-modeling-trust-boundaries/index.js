const actors = ['customer-api', 'admin-console', 'ingest-batch'];
const assets = ['public-index', 'pii-index', 'admin-endpoint'];

function listPairs() {
  return actors.flatMap((actor) => assets.map((asset) => `${actor} -> ${asset}`));
}

console.log(listPairs().slice(0, 4));
// Output:
// [ 'customer-api -> public-index', 'customer-api -> pii-index', 'customer-api -> admin-endpoint', 'admin-console -> public-index' ]
