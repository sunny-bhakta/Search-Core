// Basic hybrid search example: combine TF-IDF (lexical) and embedding (semantic) scores

// Example document data
const documents = [
  { text: "The cat sat on the mat", tfidf: 0.7, embedding: 0.8 },
  { text: "The dog chased the cat", tfidf: 0.5, embedding: 0.6 },
  { text: "The cat climbed the tree", tfidf: 0.6, embedding: 0.9 }
];

// Weight for semantic (embedding) score
const alpha = 0.5; // 0 = only lexical, 1 = only semantic

// Compute hybrid score for each document
const results = documents.map(doc => ({
  text: doc.text,
  tfidf: doc.tfidf,
  embedding: doc.embedding,
  hybrid: alpha * doc.embedding + (1 - alpha) * doc.tfidf
})).sort((a, b) => b.hybrid - a.hybrid);

console.log("Hybrid search results:");
results.forEach((result, idx) => {
  console.log(`#${idx + 1}: (hybrid: ${result.hybrid.toFixed(3)}, tfidf: ${result.tfidf}, embedding: ${result.embedding}) - ${result.text}`);
});
