function indexChoice(datasetSize) {
  if (datasetSize < 10000) return 'brute-force';
  if (datasetSize < 1000000) return 'HNSW';
  return 'IVF-PQ';
}

console.log(indexChoice(500000));
// Output: 'HNSW'
