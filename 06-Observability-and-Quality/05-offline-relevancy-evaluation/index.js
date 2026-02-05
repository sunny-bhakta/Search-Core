function precisionAtK(expected, actual, k) {
  const topK = actual.slice(0, k);
  const hits = topK.filter((doc) => expected.includes(doc)).length;
  return hits / k;
}

const expected = ['A', 'B', 'C'];
const actual = ['B', 'A', 'D'];

console.log('Precision@2:', precisionAtK(expected, actual, 2));
// Output:
// Precision@2: 1
