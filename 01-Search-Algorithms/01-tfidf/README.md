# TF-IDF Search

TF-IDF (Term Frequency-Inverse Document Frequency) is a classic algorithm for scoring and ranking documents based on the importance of terms in a query and their distribution across a corpus.

## Use Cases
- Document search in knowledge bases
- News article retrieval
- Academic paper search
- E-commerce product search (basic keyword matching)
- Email and message search

## Pros
- Simple and fast to implement
- No need for labeled training data
- Works well for small to medium-sized datasets
- Transparent scoring (easy to interpret)

## Cons
- Ignores word order and context (no semantics)
- Struggles with synonyms and polysemy
- Not suitable for very large or dynamic datasets
- Can be outperformed by modern semantic search methods

## What is Cosine?
In mathematics, the cosine of an angle is a trigonometric function that describes the ratio of the adjacent side to the hypotenuse in a right triangle. In the context of cosine similarity, it refers to the cosine of the angle between two vectors in a multi-dimensional space. Cosine similarity is used to measure how similar two vectors are, regardless of their magnitude.

Mathematically:
$$
\text{cosine similarity} = \frac{A \cdot B}{\|A\| \|B\|}
$$
Where $A$ and $B$ are vectors, $A \cdot B$ is their dot product, and $\|A\|$ and $\|B\|$ are their magnitudes (lengths).

- A value of 1 means the vectors are identical (maximum similarity).
- A value of 0 means they are completely different (orthogonal).
- A value of -1 means they are opposite.

In search, cosine similarity helps rank documents by how closely they match the query.

## Explanation: vectorize
The `vectorize` function converts a text (such as a query or document) into a numerical vector using TF-IDF scores for each term. This allows you to represent the text in a way that can be compared mathematically to other texts.

## Example: vectorize
Suppose you have the terms `["cat", "tree", "dog"]`, the text `"cat tree"`, and a set of documents. The `vectorize` function will produce a vector like `[tfidf_cat, tfidf_tree, tfidf_dog]` for the text, where each value is the TF-IDF score for that term in the text.

```js
const terms = ["cat", "tree", "dog"];
const docs = ["the cat sat on the mat", "the dog chased the cat", "the cat climbed the tree"];
const query = "cat tree";
const queryVector = vectorize(query, terms, docs);
console.log(queryVector); // Example output: [0.287, 0.693, 0]
```

## Explanation: cosineSimilarity
The `cosineSimilarity` function measures how similar two vectors are by calculating the cosine of the angle between them. A value of 1 means the vectors are identical, 0 means they are orthogonal (no similarity), and -1 means they are opposite. In search, this is used to compare the query vector to each document vector and rank results by relevance.

## Example: cosineSimilarity
Suppose you have two vectors: `A = [1, 2, 0]` and `B = [2, 1, 0]`. The `cosineSimilarity` function will compute their similarity:

```js
const A = [1, 2, 0];
const B = [2, 1, 0];
const similarity = cosineSimilarity(A, B);
console.log(similarity); // Example output: 0.8
```

A higher value means the vectors (and thus the texts they represent) are more similar.

## Sample Pseudocode (Node.js)
```js
// Assume: documents is an array of strings, query is a string
// Output: ranked array of document indices

function computeTfIdf(documents) {
  // Calculate term frequency and inverse document frequency for each term
  // Return a matrix: each document as a vector of tf-idf scores
  // ...implementation...
  return tfIdfMatrix;
}

function cosineSimilarity(queryVector, docVector) {
  // Compute cosine similarity between query and document vectors
  // ...implementation...
  return score;
}

// Main search
const tfIdfMatrix = computeTfIdf(documents);
const queryVector = vectorize(query, tfIdfMatrix);
const scores = tfIdfMatrix.map(docVector => cosineSimilarity(queryVector, docVector));
const rankedIndices = scores
  .map((score, idx) => ({ score, idx }))
  .sort((a, b) => b.score - a.score)
  .map(item => item.idx);

return rankedIndices;
```
