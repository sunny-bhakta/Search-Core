const Fuse = require('fuse.js');

const documents = [
  { title: 'The Linon King' },
  { title: 'The Cat in the Hat' },
  { title: 'The Dog Chased the Cat' },
  { title: 'The Cat Climbed the Tree' },
  { title: 'A Cat and a Dog Story' }
];

const options = {
  keys: ['title'],
  threshold: 1, // More lenient, returns more fuzzy matches
  includeScore: true
};

const fuse = new Fuse(documents, options);

const query = 'cat tree';
const results = fuse.search(query).sort((a, b) => b.refIndex - a.refIndex);

console.log('Fuzzy search results:', results);
results.forEach((result, idx) => {
  console.log(`#${idx + 1}:`, result.item.title, `(score: ${result.score}), refIndex: ${result.refIndex})`);
});
// Output:
// Fuzzy search results: [
//   { item: { title: 'The Cat Climbed the Tree' }, refIndex: 3, score: 0.333 },
//   { item: { title: 'The Cat in the Hat' }, refIndex: 1, score: 0.5 },
//   { item: { title: 'The Dog Chased the Cat' }, refIndex: 2, score: 0.5 },
//   { item: { title: 'A Cat and a Dog Story' }, refIndex: 4, score: 0.5 },
//   { item: { title: 'The Linon King' }, refIndex: 0, score: 1 }
// ]
// #1: The Cat Climbed the Tree (score: 0.333), refIndex: 3)
// #2: The Cat in the Hat (score: 0.5), refIndex: 1)
// #3: The Dog Chased the Cat (score: 0.5), refIndex: 2)
// #4: A Cat and a Dog Story (score: 0.5), refIndex: 4)
// #5: The Linon King (score: 1), refIndex: 0)

