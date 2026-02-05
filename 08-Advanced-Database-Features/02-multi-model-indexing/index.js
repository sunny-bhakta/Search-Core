const planners = {
  text: () => 'Elasticsearch',
  inventory: () => 'Postgres',
  vector: () => 'Pinecone'
};

function planQuery(needs) {
  return needs.map((need) => ({ need, engine: planners[need]() }));
}

console.log(planQuery(['text', 'inventory']));
// Output:
// [ { need: 'text', engine: 'Elasticsearch' }, { need: 'inventory', engine: 'Postgres' } ]
