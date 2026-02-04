docs = [
  { id: 'doc-a', text: 'wireless headphones battery 30h', freshnessDays: 1 },
  { id: 'doc-b', text: 'studio headphones wired', freshnessDays: 300 },
];

const queryTerms = ['wireless', 'headphones'];

function simpleScore(doc) {
  const tokens = doc.text.split(/\s+/);
  const termMatches = tokens.filter((t) => queryTerms.includes(t)).length;

  const freshnessBoost = doc.freshnessDays <= 7 ? 1 : 0;
  return termMatches + freshnessBoost;
}

const ranked = docs
  .map((doc) => ({ id: doc.id, score: simpleScore(doc) }))
  .sort((a, b) => b.score - a.score);

console.table(ranked);
/*
┌─────────┬───────┬───────┐
│ (index) │  id   │ score │
├─────────┼───────┼───────┤
│    0    │ doc-a │   3   │  (2 term hits + 1 freshness)
│    1    │ doc-b │   1   │  (1 term hit + 0 freshness)
└─────────┴───────┴───────┘
*/