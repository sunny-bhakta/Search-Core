// const queries = [
//   { id: 'q1', clauses: ['brand:Acme', 'price:<50', 'color:blue'], baseMs: 420 },
//   { id: 'q2', clauses: ['category:trail', 'inventory:in_stock'], baseMs: 160 },
// ];

// function applyTuning(query) {
//   const cacheHit = query.clauses.includes('brand:Acme');
//   const tunedMs = cacheHit ? query.baseMs * 0.45 : query.baseMs * 0.8;
//   return {
//     ...query,
//     tunedMs: Math.round(tunedMs),
//     notes: cacheHit ? 'filter cache hit + timeout guard' : 'lighter clause mix',
//   };
// }

// function summarize() {
//   console.table(queries.map(applyTuning));
// }

// if (require.main === module) {
//   summarize();
// }

// module.exports = { queries, applyTuning };

// /*
// Sample output
// =============
// ┌─────────┬──────┬─────────────────────────────────────┬────────┬────────┬─────────────────────────────────────┐
// │ (index) │ id   │               clauses               │ baseMs │ tunedMs│                notes                 │
// ├─────────┼──────┼─────────────────────────────────────┼────────┼────────┼─────────────────────────────────────┤
// │    0    │ 'q1' │ [ 'brand:Acme', 'price:<50', 'color:blue' ]│ 420  │ 189    │ 'filter cache hit + timeout guard' │
// │    1    │ 'q2' │ [ 'category:trail', 'inventory:in_stock' ] │ 160  │ 128    │ 'lighter clause mix'               │
// └─────────┴──────┴─────────────────────────────────────┴────────┴────────┴─────────────────────────────────────┘
// */
