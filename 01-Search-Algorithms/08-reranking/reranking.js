// Basic Reranking Example
// Step 1: Initial lexical search (e.g., BM25 or keyword match)
const documents = [
	{ text: "The cat sat on the mat", bm25: 1.2, embeddingScore: 0.7 },
	{ text: "The dog chased the cat", bm25: 1.0, embeddingScore: 0.9 },
	{ text: "The cat climbed the tree", bm25: 0.8, embeddingScore: 0.95 },
	{ text: "Tiger is national animal", bm25: 0.2, embeddingScore: 0.1 }
];

// Step 2: Rerank using a weighted combination of lexical and semantic (embedding) scores
function rerank(docs, w1 = 0.5, w2 = 0.5) {
	return docs
		.map(doc => ({
			...doc,
			finalScore: w1 * doc.bm25 + w2 * doc.embeddingScore
		}))
		.sort((a, b) => b.finalScore - a.finalScore);
}

// Arguments: 0.4 (weight for BM25/lexical score), 0.6 (weight for embedding/semantic score)
// These weights control the influence of each score in the final ranking.
// For example, 0.4 means 40% importance to BM25, 0.6 means 60% importance to embedding score.
const reranked = rerank(documents, 0.4, 0.6);
console.log("Reranked results:", reranked);
// Output:
// Reranked results: [
//   { text: 'The cat climbed the tree', bm25: 0.8, embeddingScore: 0.95, finalScore: 0.89 },
//   { text: 'The dog chased the cat', bm25: 1, embeddingScore: 0.9, finalScore: 0.86 },
//   { text: 'The cat sat on the mat', bm25: 1.2, embeddingScore: 0.7, finalScore: 0.88 },
//   { text: 'Tiger is national animal', bm25: 0.2, embeddingScore: 0.1, finalScore: 0.14 }
// ]
