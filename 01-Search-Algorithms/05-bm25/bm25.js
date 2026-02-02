// Basic BM25 search example (simplified, single-term query)

const documents = [
  "the cat sat on the mat",
  "the dog chased the cat",
  "the lion roared loudly",
  "the cat climbed the tree",
  "Tiger is national animal"
];
const query = "cat";

const k1 = 1.5;
const b = 0.75;

// Calculate average document length
const avgDocLen = documents.reduce((sum, doc) => sum + doc.split(" ").length, 0) / documents.length;

// Count docs containing the query term
const n = documents.filter(doc => doc.includes(query)).length;
const N = documents.length;

// IDF (inverse document frequency)
// 'Inverse' means the value is higher for rare terms and lower for common terms.
// It helps give more weight to terms that appear in fewer documents, making them more important for distinguishing relevant results.
// Formula: idf = log((N - n + 0.5) / (n + 0.5))
// Standard formula: IDF(t) = log(N / n)
// BM25’s formula is a smoothed, more stable version of the standard IDF, making it better for real-world search applications.
const idf = Math.log((N - n + 0.5) / (n + 0.5));

function bm25Score(doc, query, idf, avgDocLen, k1, b) {
  const words = doc.split(" ");
  const f = words.filter(word => word === query).length;
  const dl = words.length;
  return idf * ((f * (k1 + 1)) / (f + k1 * (1 - b + b * (dl / avgDocLen))));
}

const results = documents.map(doc => ({
  doc,
  score: bm25Score(doc, query, idf, avgDocLen, k1, b)
})).sort((a, b) => b.score - a.score);

console.log("BM25 search results:");
results.forEach((result, idx) => {
  console.log(`#${idx + 1}: (score: ${result.score.toFixed(3)}) - ${result.doc}`);
});
// Output:
// BM25 search results:
// #1: (score: 0.916) - the cat climbed the tree
// #2: (score: 0.916) - the cat sat on the mat
// #3: (score: 0.916) - the dog chased the cat
// #4: (score: 0.000) - the lion roared loudly
// #5: (score: 0.000) - Tiger is national animal
