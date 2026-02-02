const documents = [
    "the cat sat on the mat",
    "the dog chased the cat",
    "the cat climbed the tree"
];
const query = "cat tree";

// Calculates term frequency (TF) for a term in a document
function termFrequency(term, doc) {
    const words = doc.split(" ");
    const count = words.filter(word => word === term).length;
    return count / words.length;
}

// Calculates inverse document frequency (IDF) for a term across all documents
function inverseDocumentFrequency(term, docs) {
    const numDocsWithTerm = docs.filter(doc => doc.includes(term)).length;
    return Math.log(docs.length / (1 + numDocsWithTerm));
}

// Builds a TF-IDF vector for a document
function tfIdfVector(doc, terms, docs) {
    return terms.map(term => termFrequency(term, doc) * inverseDocumentFrequency(term, docs));
}

// Computes cosine similarity between two vectors
function cosineSimilarity(vecA, vecB) {
    const dotProduct = vecA.reduce((sum, val, i) => sum + val * vecB[i], 0);
    const magnitudeA = Math.sqrt(vecA.reduce((sum, val) => sum + val * val, 0));
    const magnitudeB = Math.sqrt(vecB.reduce((sum, val) => sum + val * val, 0));
    return dotProduct / (magnitudeA * magnitudeB);
}

// Get all unique terms from the documents
const terms = Array.from(new Set(documents.join(" ").split(" ")));

// Build TF-IDF vectors for all documents
const documentVectors = documents.map(doc => tfIdfVector(doc, terms, documents));

// Build TF-IDF vector for the query
const queryVector = tfIdfVector(query, terms, documents);

// Compute similarity scores between query and each document
const scores = documentVectors.map(docVector => cosineSimilarity(queryVector, docVector));

console.log("Document scores:", scores);

// Display ranked results with document text
const ranked = scores
    .map((score, idx) => {
        console.log(`iDx ${idx} Score : ${score} for Document: ${documents[idx]}`);
        return { score, doc: documents[idx] };
    })
    .sort((a, b) => b.score - a.score);

console.log("\nRanked Items:");
console.log(ranked);

console.log("\nRanked Results:");
ranked.forEach((item, i) => {
    // Output:
    // Document scores: [0.0, 0.0, 0.0]
    // iDx 0 Score : 0.0 for Document: the cat sat on the mat
    // iDx 1 Score : 0.0 for Document: the dog chased the cat
    // iDx 2 Score : 0.0 for Document: the cat climbed the tree
    //
    // Ranked Items:
    // [ { score: 0.0, doc: 'the cat sat on the mat' },
    //   { score: 0.0, doc: 'the dog chased the cat' },
    //   { score: 0.0, doc: 'the cat climbed the tree' } ]
    //
    // Ranked Results:
    // 0: { score: 0.0, doc: 'the cat sat on the mat' }
    // 1: { score: 0.0, doc: 'the dog chased the cat' }
    // 2: { score: 0.0, doc: 'the cat climbed the tree' }
    console.log(`#${i + 1}: (${item.score.toFixed(3)}) - ${item.doc}`);
});
